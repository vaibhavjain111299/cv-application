import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class GeneralInfo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Resume Builder" />

                    <TextField
                        hintText="Enter Your Full Name"
                        floatingLabelText="Full Name"
                        onChange={handleChange('fullName')}
                        defaultValue={values.fullName}
                    /><br></br>

                    <TextField
                        hintText="Enter Your Email Address"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    /><br></br>

                    <TextField
                        hintText="Enter Your Contact Number"
                        floatingLabelText="Contact No."
                        onChange={handleChange('contact')}
                        defaultValue={values.contact}
                    /><br></br>

                    <TextField
                        hintText="Enter Your Home Address"
                        floatingLabelText="Address"
                        onChange={handleChange('address')}
                        defaultValue={values.address}
                    /><br></br>

                    <RaisedButton
                        label="Continue to Education"
                        primary="true"
                        style={styles.button}
                        onClick={this.continue}
                    />


                </React.Fragment>
            </MuiThemeProvider>
        );


    }
}

const styles = {
    button: {
        margin: 15

    }
}
