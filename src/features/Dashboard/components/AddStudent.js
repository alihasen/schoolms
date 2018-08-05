import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { addStudent } from '../actionCreator';

class AddStudent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            admissionNumber: "",
            rollNumber: "",
            registrationNumber: "",
            name: "",
            gender: "",
            classOfStudent: "",
            section: "",
            dob: "",
            motherName: "",
            fatherName: "",
            address: "",
            contactNo: ""
        }
    }

    handleChange = (name, event) => {
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmitClick = () => {
        this.props.dispatch(addStudent({ ...this.state }))
    }

    render() {
        return (
            <div style={{ width: '500px' }}>
                <Typography variant="headline"> Add Student </Typography>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <TextField
                            label="Admission Number"
                            value={this.state.admissionNumber}
                            onChange={this.handleChange.bind(this, "admissionNumber")}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Roll Number"
                            value={this.state.rollNumber}
                            onChange={this.handleChange.bind(this, "rollNumber")}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Registration Number"
                            value={this.state.registrationNumber}
                            onChange={this.handleChange.bind(this, "registrationNumber")}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this, "name")}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Class"
                            value={this.state.classOfStudent}
                            onChange={this.handleChange.bind(this, "classOfStudent")}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Gender"
                            value={this.state.gender}
                            onChange={this.handleChange.bind(this, "gender")}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Section"
                            value={this.state.section}
                            onChange={this.handleChange.bind(this, "section")}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Date of Birth"
                            value={this.state.dob}
                            onChange={this.handleChange.bind(this, "dob")}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Mother's Name"
                            value={this.state.motherName}
                            onChange={this.handleChange.bind(this, "motherName")}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Father's Name"
                            value={this.state.fatherName}
                            onChange={this.handleChange.bind(this, "fatherName")}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Residential Address"
                            value={this.state.address}
                            onChange={this.handleChange.bind(this, "address")}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            label="Contact No."
                            value={this.state.contactNo}
                            onChange={this.handleChange.bind(this, "contactNo")}
                        />
                    </Grid>
                </Grid>
                <br />
                <Button variant="contained" size="large" color="primary" onClick={this.handleSubmitClick}>
                    Submit
                </Button>
            </div>
        )
    }

}

export default connect()(AddStudent);