import { makeStyles, withTheme } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#ffff',
            marginLeft: 10,
        }
    },
    main: {
        minHeight: '80vh'
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },
    grow: {
        flexGrow: 1
    },
    footer: {
        textAlign: 'center'
    }
})

export default useStyles