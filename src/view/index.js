import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Form from './form';
import Header from './header';
import TodoList from './todoList';

const useStyles = makeStyles({
    root: {
        background: "aliceBlue",
        textAlign: "center",
        minHeight: "100vh"
    }
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff',
        }
    },
});

function Todo() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Container maxWidth="sm">
                    <Header />
                    <Form />
                    <TodoList />
                </Container>
            </div>
        </ThemeProvider>
    )

}
export default Todo;