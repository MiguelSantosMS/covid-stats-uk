import axios from 'axios';

const getData = async (filters, structure) => {
    const endpoint = 'https://api.coronavirus.data.gov.uk/v1/data';
    const apiParams = {
        filters: filters.join(';'),
        structure: JSON.stringify(structure),
    };

    const { data, status, statusText } = await axios.get(endpoint, {
        timeout: 10000,
        params: apiParams,
    });

    if (status >= 400) {
        throw new Error(statusText);
    }

    return data;
};

export const getOverviewData = async () => {
    const filters = ['areaType=overview'];
    const structure = {
        'date': 'date',
        'newCases': 'newCasesByPublishDate'
    };
    const { data } = await getData(filters, structure);
    return data;
};

export function getDataFromDateInterval (data, startDate, endDate) {
    return data.slice(startDate, endDate);
}

export function getSevenDayComparison (overviewData) {
    const lastSevenDaysData = getLastSevenDaysData(overviewData);
    const sevenDayCasesAccumulation = lastSevenDaysData.reduce(
        (accumulatedCases, { newCases }) => accumulatedCases + newCases, 0
    );

    const lastSevenDaysDate = getLastSevenDaysDate(lastSevenDaysData);
    const lastSevenDaysNewCases = getLastSevenDaysNewCases(lastSevenDaysData);
    const lastSevenDaysNewCasesByDateAscending = lastSevenDaysNewCases.reverse();

    let lastSevenDaysDateAscending = lastSevenDaysDate.reverse();
    // Hide first label as shown on the design
    lastSevenDaysDateAscending[0] = '';

    const newCasesYesterday = getNewCasesYesterday(lastSevenDaysData);
    const days = 7;
    const sevenDayAverage = Math.round(sevenDayCasesAccumulation / days).toLocaleString();

    const comparisonToAverageText = getComparisonToAverageText(newCasesYesterday, sevenDayAverage);
    const comparisonFromPrevDay = getComparisonFromPreviousDay(lastSevenDaysData);

    return {
        newCasesYesterday,
        comparisonToAverageText,
        sevenDayAverage,
        comparisonFromPrevDay,
        lastSevenDaysDateAscending,
        lastSevenDaysNewCasesByDateAscending
    };
}

export function getLastSevenDaysData (overviewData) {
    const days = 7;
    return getDataFromDateInterval(overviewData, 0, days);
}

export function getLastTwoDaysData (overviewData) {
    const days = 2;
    return getDataFromDateInterval(overviewData, 0, days);
}

export function getLastSevenDaysDate (lastSevenDaysData) {
    return lastSevenDaysData.map(dayData => {
        const dateSplit = dayData.date.split('-');
        return `${dateSplit[2]}/${dateSplit[1]}`;
    });
}

export function getLastSevenDaysNewCases (lastSevenDaysData) {
    return lastSevenDaysData.map(dayData => {
        return dayData.newCases;
    });
}

export function getNewCasesYesterday (overviewData) {
    const [{ newCases }] = getDataFromDateInterval(overviewData, 0, 1);
    return newCases.toLocaleString();
}

export function getComparisonToAverageText (newCasesYesterday, sevenDayAverage) {
    let comparisonToAverageText;
    const comparisonToAverage = parseInt(newCasesYesterday, 10) - parseInt(sevenDayAverage, 10);

    if (comparisonToAverage > 0) {
        comparisonToAverageText = 'Above';
    } else if (comparisonToAverage < 0) {
        comparisonToAverageText = 'Below';
    } else {
        comparisonToAverageText = 'Same';
    }

    return comparisonToAverageText;
}

export function getComparisonFromPreviousDay (overviewData) {
    const lastTwoDaysData = getLastTwoDaysData(overviewData);
    const newCasesYesterday = lastTwoDaysData[0].newCases;
    const newCasesPreviousDay = lastTwoDaysData[1].newCases;

    let comparisonIcon;
    let comparisonText;

    const newCasesDifference = newCasesYesterday - newCasesPreviousDay;
    let newCasesDiffRelativeToPrevDayPct = Math.round(newCasesDifference / newCasesPreviousDay * 100);

    if (newCasesDiffRelativeToPrevDayPct > 0) {
        comparisonText = 'Increase';
        comparisonIcon = 'trending-up';
        newCasesDiffRelativeToPrevDayPct = `+${newCasesDiffRelativeToPrevDayPct}%`;
    } else if (newCasesDiffRelativeToPrevDayPct < 0) {
        comparisonText = 'Decrease';
        comparisonIcon = 'trending-down';

        // Make it positive so we can show a positive decrease
        newCasesDiffRelativeToPrevDayPct = Math.abs(newCasesDiffRelativeToPrevDayPct);
        newCasesDiffRelativeToPrevDayPct = `+${newCasesDiffRelativeToPrevDayPct}%`;
    } else {
        comparisonText = 'No Increase';
        comparisonIcon = 'no-diff';
    }

    return {
        comparisonText,
        comparisonIcon,
        newCasesDiffRelativeToPrevDayPct
    };
}
