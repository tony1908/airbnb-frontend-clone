import React, {Component} from 'react';
import SignUpForm from '../components/signup/form';
import Grid from '@material-ui/core/Grid';

class Signup extends Component {
    render () {
        return (
            <div>
                <Grid container justify="center" alignItems="center">
                    <SignUpForm handleUser={this.props.handleUser} />
                </Grid>
            </div>
        )
    }
}

export default Signup;