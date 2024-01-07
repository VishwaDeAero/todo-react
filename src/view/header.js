import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, styled, alpha } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions';

const useStyles = makeStyles({
    heading: {
        flexGrow: 1
        // margin: "auto"
    }
});

// Search
const Search = styled('div')(({ theme }) => ({
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
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 6),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
//Search Parameters end

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
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        value={searchValue}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleSearch}
                    />
                </Search>
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