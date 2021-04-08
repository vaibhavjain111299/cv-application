import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedBuimport React, { Component } from 'react';
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
                <React.Fragment style={appbarstyle}>
                    <AppBar title="Resume Builder" />
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <div style={styles}>
                            <List style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                                <ListItem
                                    primaryText={fullName}
                                    style={{ fontWeight: 500, fontSize: 25 }}
                                />

                                <List style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                                    <ListItem
                                        secondaryText={email}
                                        style={{ lineHeight: 1 }}

                                    />

                                    <ListItem
                                        primaryText=""
                                        secondaryText={contact}
                                        style={{ lineHeight: 1 }}
                                    />

                                    <ListItem
                                        primaryText=""
                                        secondaryText={address}
                                    />
                                </List>
                            </List>

                            <List style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>


                                <ListItem style={{ fontWeight: 600, fontSize: 20 }}>
                                    EDUCATION
                            </ListItem>


                                <List style={{ display: "flex", justifyContent: "space-between" }}>
                                    <ListItem style={{ fontWeight: "500" }}>{school}, {school_city} </ListItem>
                                    <ListItem>{from} - {to}</ListItem>
                                </List>

                                <List style={{ background: "#eeeeee" }}>
                                    <ListItem>{course}</ListItem>
                                    <ListItem>CGPA: {grade}</ListItem>
                                </List>
                            </List>

                            <List style={{ display: "flex", flexDirection: "column" }}>



                                <ListItem style={{ fontWeight: 600, fontSize: 20 }}>EXPERIENCE</ListItem>


                                <ListItem style={{ fontWeight: "500" }}>{company}, {company_loc}</ListItem>

                                <List style={{ background: "#eeeeee" }}>
                                    <ListItem>{role}</ListItem>
                                    <ListItem>{experience}</ListItem>
                                    <ListItem>{about}</ListItem>
                                </List>

                            </List>

                        </div>
                    </div>

                    <RaisedButton
                        label="Back"
                        primary={false}
                        onClick={this.back}
                    />





                </React.Fragment >

            </MuiThemeProvider >
        );


    }
}

const appbarstyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"

}

const styles = {
    width: 600
}


tton from 'material-ui/RaisedButton';

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


