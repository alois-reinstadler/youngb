module.exports = {
    purge: [],
    important: true,
    theme: {
        screens: {
            //min width
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',

            //max width
            _sm: {'max': '640px'},
            _md: {'max': '768px'},
            _lg: {'max': '1024px'},
            _xl: {'max': '1280px'},
        },
        fontFamily: {
            display: ['Klarna Regular', 'Segoe UI', 'Candara', 'Bitstream Vera Sans', 'DejaVu Sans', 'Bitstream Vera Sans', 'Trebuchet MS', 'Verdana', 'Verdana Ref', 'sans-serif'],
            body: ['Klarna Regular', 'Segoe UI', 'Candara', 'Bitstream Vera Sans', 'DejaVu Sans', 'Bitstream Vera Sans', 'Trebuchet MS', 'Verdana', 'Verdana Ref', 'sans-serif'],
        },
        extend: {
            colors: {
                main: '#fe9901',
            },
        },
        maxWidth: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
            'contentImg': '420px',
            'contentImg-sm': '400px',
            'card': '900px',
        },
        boxShadow: {
            default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',

            mat_sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px',
            mat_md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            mat_lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
            mat_xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            mat_2xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
        },
        zIndex: {
            '-1': '-1',
            '-10': '-10',
        }
    },
    variants: {},
    plugins: [],
}
