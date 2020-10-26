module.exports = {
    future: {},
    purge: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    theme: {
        extend: {
            borderColor: {
                button: '#333333'
            },
            boxShadow: {
                informationdangerbox: '0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
                informationlightbox: '0px 3px 10px rgba(0, 0, 0, 0.15)',
            },
            fontSize: {
                strongmessagexs: '0.875rem',
                strongmessagesm: '1.31rem',
                strongmessagemd: '1.5rem',
                strongmessagelg: '1.69rem',
                strongmessagexl: '1.875rem',
                secondaryhighlightxs: '2.25rem',
                secondaryhighlightsm: '3.063rem',
                secondaryhighlightmd: '3.5rem',
                secondaryhighlightlg: '3.938rem',
                secondaryhighlightxl: '4.375rem',
                highlightxs: '3rem',
                highlightsm: '4.38rem',
                highlightmd: '5rem',
                highlightlg: '5.63rem',
                highlightxl: '6.25rem',
            },
            margin: {
                govadvice: '0 11.4975rem 0 0',
            },
            textColor: {
                secondary: '#505050',
                description: '#5F5F5F',
                danger: '#BB1515',
                customgray: '#828282',
            },
            padding: {
                newcases: '5.5rem 6.1rem 6.25rem 6.38rem',
                dangerbox: '6.719rem 6.697rem',
                lightbox: '1.5rem 8.031rem',
                chart: '9.44em 12.627rem 5em 12.627rem',
                hero: '0 12.5rem',
                footer: '0 7.25rem',
                govadvice: '11.5rem 12rem 11.565rem 12rem',
                button: '0.469rem 3.02rem',
            }
        },
        fontFamily: {
            sans: ['Roboto'],
            condensed: ['"Roboto Condensed"'],
        },
        backgroundColor: {
            danger: '#FFEFEF',
            chart: '#FAFAFA',
            footer: '#1C4155',
            hover: '#333333',
        },
        height: {
            'footerxs': '5.64rem',
            'footersm': '6.58rem',
            'footermd': '7.52rem',
            'footerlg': '8.46rem',
            'footerxl': '9.4rem',
        },
    },
    variants: {
        margin: ['responsive', 'last', 'hover', 'focus'],
    },
    plugins: [],
};
