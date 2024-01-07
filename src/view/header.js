import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    heading: {
        margin: "auto"
    }
});
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.heading} variant="h5" align="center">Simple ToDo</Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header;