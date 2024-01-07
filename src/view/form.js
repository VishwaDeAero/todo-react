import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions';

const useStyles = makeStyles({
    card: {
        margin: 20,
    },
    // root: {
    //     marginTop: 16,
    //     marginBottom: 16,
    //     padding: 16,
    //     boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
    // },
    desc: {
        marginTop: 15
    },
    button: {
        width: '100%',
        marginTop: 15
    }
});

const Form = ({ title, desc, setTitle, setDesc, addItem, editItem, edit, error, setError, deleteError }) => {
    const classes = useStyles();
    const handleTitleChange = (event) => {
        const title = event.target.value;
        setTitle(title);
        validate(event)
        
    }
    const handleDescChange = (event) => {
        const desc = event.target.value;
        setDesc(desc);
        validate(event)
    }

    const handleClick = () => {
        if (edit) {
            editItem();
        } else {
            addItem();
        }
    }

    const validate = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        if(value.length === 0){
            setError(id, `Please enter ${id}`);
            return false;
        }else{
            deleteError(id);
            return true;
        }
    }

    return (
            <Card sx={{ minWidth: 275 }} className={classes.card}>
                <CardContent>
                    <Grid container alignItems="center">
                        <Grid item md={12}>
                            <TextField value={title} onChange={handleTitleChange}
                                error={!!error.title} helperText={error.title} id="title" fullWidth label="Enter Title" variant="outlined" />
                        </Grid>
                        <Grid item md={12}>
                            <TextField value={desc} onChange={handleDescChange}
                                error={!!error.description} helperText={error.description} className={classes.desc} id="description" fullWidth label="Enter Description" minRows={3} multiline variant="outlined" />
                        </Grid>
                        <Grid item md={12}>
                            <Button className={classes.button} variant="contained" color="primary" onClick={handleClick}>
                                {edit ? "Edit" : "Add"}
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
    )
}
const mapStateToProps = (state) => {
    return {
        title: state.title,
        desc: state.desc,
        edit: state.edit,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setDesc: (desc) => dispatch(actionTypes.setDesc(desc)),
        setError: (element, error) => dispatch(actionTypes.setError(element, error)),
        deleteError: (element) => dispatch(actionTypes.deleteError(element)),
        addItem: () => dispatch(actionTypes.addItem()),
        editItem: () => dispatch(actionTypes.editItem()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);