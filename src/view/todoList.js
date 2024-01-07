import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions';

const useStyles = makeStyles({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    list: {
        padding: 0
    },
    card: {
        marginBottom: 10,
        width: '100%'
    }
});

function TodoList({ todoList, search, searchValue, setTitle, setDesc, setItem, setEdit, deleteItem }) {
    const classes = useStyles();

    const handleEdit = (item) => {
        setTitle(item.title);
        setDesc(item.desc);
        setEdit();
        setItem(item);
    }

    const handleDelete = (item) => {
        setItem(item);
        deleteItem();
    }
    return (
        <Container className={classes.container} maxWidth="md">
            {!todoList.length
                ?
                <Typography variant="h6" color="error">No Data to display</Typography>
                :
                (<List>
                    {/* Run when search bar is empty - Showing all */}
                    {!search? todoList.map(item => {
                        return (
                            <ListItem className={classes.list} key={item.id}>
                                <Card color="primary" className={classes.card}>
                                    <CardContent>
                                        <Typography variant="h5" color='primary'>{item.title}</Typography>
                                        <Typography variant="body2" color="textSecondary">{item.desc}</Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </ListItem>
                        )
                    }):
                    /* Run when search bar has text - Showing search results */
                    todoList.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.desc.toLowerCase().includes(searchValue.toLowerCase()))
                    .map(item => {
                        return (
                            <ListItem className={classes.list} key={item.id}>
                                <Card color="primary" className={classes.card}>
                                    <CardContent>
                                        <Typography variant="h5" color='primary'>{item.title}</Typography>
                                        <Typography variant="body2" color="textSecondary">{item.desc}</Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </ListItem>
                        )
                    })
                    }
                </List>)
            }
        </Container>
    )

}
const mapStateToProps = (state) => {
    return {
        todoList: state.items,
        search: state.search,
        searchValue: state.searchValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setDesc: (desc) => dispatch(actionTypes.setDesc(desc)),
        setItem: (item) => dispatch(actionTypes.setItem(item)),
        deleteItem: (item) => dispatch(actionTypes.deleteItem(item)),
        setEdit: () => dispatch(actionTypes.setEdit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);