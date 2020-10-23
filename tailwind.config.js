module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    theme: {
        extend: {
            fontSize: {
                strongmessagexs: '1.125rem',
                strongmessagesm: '1.31rem',
                strongmessagemd: '1.5rem',
                strongmessagelg: '1.69rem',
                strongmessagexl: '1.875rem',
                secondaryhighlightxs: '2.625rem',
                secondaryhighlightsm: '3.063rem',
                secondaryhighlightmd: '3.5rem',
                secondaryhighlightlg: '3.938rem',
                secondaryhighlightxl: '4.375rem',
                highlightxs: '3.75rem',
                highlightsm: '4.38rem',
                highlightmd: '5rem',
                highlightlg: '5.63rem',
                highlightxl: '6.25rem',
            },
            textColor: {
                secondary: '#505050',
                description: '#5F5F5F',
                danger: '#BB1515',
                customgray: '#828282',
            },
            boxShadow: {
                informationdangerbox: '0px 3px 10px rgba(0, 0, 0, 0.15)',
                informationlightbox: '0px 3px 10px rgba(0, 0, 0, 0.15)',
            }
        },
        fontFamily: {
            sans: ['Roboto'],
            condensed: ['"Roboto Condensed"'],
        },
        backgroundColor: {
            danger: '#FFEFEF',
            chart: '#FAFAFA',
            footer: '#1C4155'
        },
        height: {
            'footerxs': '5.64rem',
            'footersm': '6.58rem',
            'footermd': '7.52rem',
            'footerlg': '8.46rem',
            'footerxl': '9.4rem',
        },
    },
    variants: {},
    plugins: [],
};
