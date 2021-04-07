import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default class Overview extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values: { fullName, email, contact, address, school, school_city, from, to, course, grade, company, company_loc, role, experience, about } } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Resume Builder" />
                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={fullName}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={email}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={contact}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={address}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText="Education"
                            secondaryText={school}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={school_city}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={from}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={to}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={course}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={grade}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText="Experience"
                            secondaryText={company}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={company_loc}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={role}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={experience}
                        />
                    </List>

                    <List>
                        <ListItem
                            primaryText=""
                            secondaryText={about}
                        />
                    </List>

                    <RaisedButton
                        label="Back"
                        primary={false}
                        onClick={this.back}
                    />




                </React.Fragment>
            </MuiThemeProvider>
        );


    }
}


