import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, styled, alpha } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions';

const useStyles = makeStyles((theme) => ({
    heading: {
        flexGrow: 1
        // margin: "auto"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Header = ({ setSearch, searchValue }) => {
    const classes = useStyles();

    // Search Function
    const handleSearch = (event) => {
        const value = event.target?.value;
        setSearch(value);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.heading} variant="h5" align='left'>Simple ToDo</Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        value={searchValue}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleSearch}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state) => {
    return {
        searchValue: state.searchValue,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setSearch: (searchValue) => dispatch(actionTypes.setSearch(searchValue))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);