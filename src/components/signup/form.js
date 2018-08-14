import React, {Component} from 'react';
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

class SignUpForm extends Component {
    render () {
        return (
            <Grid container justify="center" alignItems="center">
                <div>
                <Grid item xs={12}>
                    <Card>
                        Registrate en Airbnb Clone
                        <Grid item xs={4}>
                            <TextField />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField 
                                type="date"
                            />
                        </Grid>
                        <Grid item xs={4}>
                        <Button 
                            variant="contained" 
                            color="secondary"
                        >
                        Registrate
                        </Button>
                        </Grid>
                    </Card>
                    </Grid>
                </div>
            </Grid>
        )
    }
}

export default SignUpForm;