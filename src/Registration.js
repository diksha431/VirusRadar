import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Card } from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';
import LinearProgress from '@material-ui/core/LinearProgress';
//import Alert from '@material-ui/lab/Alert';
import Axios from 'axios';

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            firstNameError: "",
            lastName: "",
            lastNameError: "",
            mail: "",
            mailError: "",
            pass: "",
            passError: "",
            uid: "",
            uidError: "",
            add: "",
            addError: "",
            city: "",
            cityError: "",
            state: "",
            stateError: "",
            zip: "",
            zipError: "",
            phno: "",
            phnoError: "",
            alertSuccess: false,
            alertWarning: false,
            progress: false,
            isEnter: false
        }
    }
    fun = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        console.log(this.state, "formField")
    }
    validate = () => {
        let isError = false;
        const errors = { firstNameError: "", lastNameError: "", mailError: "", passError: "", uidError: "", addError:"", cityError:"", stateError:"", zipError:"", phnoError:""};

        if (this.state.firstName.length < 1) {
            isError = true;
            errors.firstNameError = "Please enter your First Name";
        }
        if (this.state.lastName.length < 1) {
            isError = true;
            errors.lastNameError = "Please enter your Last Name"
        }
        if (!this.state.mail.includes('@')) {
            isError = true;
            errors.mailError = "Please enter the correct E-mail address"
        }
        if (this.state.pass.length < 9) {
           // alert(this.state.pass.length+"hello")
            isError = true;
            errors.passError = "Password is short"
        }
        //alert(1)
        if (this.state.uid.length < 7) {
           // alert(this.state.uid.length+"hi")
            isError = true;
            errors.uidError = "Please enter your valid UserId"
        }
        if (this.state.addError.length < 8) {
            isError = true;
            errors.addError = "Please enter your full address"
        }
        if (this.state.cityError.length < 1) {
            isError = true;
            errors.cityError = "Please enter your City"
        }
        if (this.state.stateError.length < 1) {
            isError = true;
            errors.stateError = "Please enter your State"
        }
        if (this.state.zip.length < 1) {
            isError = true;
            errors.zipError = "Please enter your Area code"
        }
        if (this.state.phno.length < 10) {
            isError = true;
            errors.phnoError = "Please enter your Phone Number"
        }
        this.setState({
            ...this.state,
            ...errors
        });

        return isError
    }
    blank = () => {
        this.setState({
            firstName: "  ",
            lastName: "  ",
            mail: "  ",
            pass: "  ",
            uid: "  ",
            add: "  ",
            city: "  ",
            state: "  ",
            zip: "  ",
            phno: "  "
        })
    }
    sendData(ev) {
        const error = this.validate();
        if (!error) {
            //alert("Hello")
            const firstName = this.state.firstName
            const lastName = this.state.lastName
            const mail = this.state.mail
            const pass = this.state.pass
            const uid = this.state.uid
            const add = this.state.add
            const city = this.state.city
            const state = this.state.state
            const zip = this.state.zip
            const phno = this.state.phno
            const data = { firstName, lastName, mail, pass, uid, add, city, state, zip, phno }
            this.setState({ progress: true })
            Axios.get('http://localhost:9090/examples/regisinsertion.jsp', { params: data }).then(response => {
                console.log(response);
                this.setState({progress:false,alertSuccess:true,alertWarning:false })
            }).catch(err => {
                this.setState({progress:false,alertWarning:true})
                console.log("Failed");
            })
        }
        //this.blank()
        //window.location = "HomePage";
    }
    /* Redirect = () => {
        if (this.state.firstName && this.state.lastName && this.state.mail && this.state.pass && this.state.uid && this.state.add && this.state.city && this.state.state && this.state.zip && this.state.phno) {
            this.setState({ isEnter: true })
            //window.location = "HomePage";
        }
        else {
            alert("Please enter the required fields")
        }
    } */
    render() {
        return (
            <div style={{ height: "50em", width: "76.67em", backgroundImage: "url('m4.jpg')", backgroundSize: "cover" }}>
                <Container component="main" maxWidth="md">
                    <Typography variant="h6" gutterBottom style={{ fontSize: "2em", marginBottom: "0em", fontWeight: "bold" }}>Create an account</Typography>
                    <Card style={{ padding: "2em", backgroundColor: "gainsboro",height:"43em"}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    fullWidth
                                    error={this.state.firstNameError}
                                    helperText={this.state.firstNameError}
                                    value={this.state.firstName}
                                    onChange={this.fun.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    error={this.state.lastNameError}
                                    helperText={this.state.lastNameError}
                                    value={this.state.lastName}
                                    onChange={this.fun.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="mail"
                                    name="mail"
                                    label="E-mail Adress"
                                    fullWidth
                                    error={this.state.mailError}
                                    helperText={this.state.mailError}
                                    value={this.state.mail}
                                    onChange={this.fun.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="password"
                                    name="pass"
                                    label="Password"
                                    fullWidth
                                    error={this.state.passError}
                                    helperText={this.state.passError}
                                    value={this.state.pass}
                                    onChange={this.fun.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="id"
                                    name="uid"
                                    label="User ID"
                                    fullWidth
                                    error={this.state.uidError}
                                    helperText={this.state.uidError}
                                    value={this.state.uid}
                                    onChange={this.fun.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="address"
                                    name="add"
                                    label="Address line "
                                    fullWidth
                                    error={this.state.addError}
                                    helperText={this.state.addError}
                                    value={this.state.add}
                                    onChange={this.fun.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    error={this.state.cityError}
                                    helperText={this.state.cityError}
                                    value={this.state.city}
                                    onChange={this.fun.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="state"
                                    name="state"
                                    label="State/Province/Region"
                                    fullWidth
                                    error={this.state.stateError}
                                    helperText={this.state.stateError}
                                    value={this.state.state}
                                    onChange={this.fun.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Zip / Postal code"
                                    fullWidth
                                    error={this.state.zipError}
                                    helperText={this.state.zipError}
                                    value={this.state.zip}
                                    onChange={this.fun.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="phoneno"
                                    name="phno"
                                    label="Phone Number"
                                    fullWidth
                                    error={this.state.phnoError}
                                    helperText={this.state.phnoError}
                                    value={this.state.phno}
                                    onChange={this.fun.bind(this)}
                                />
                            </Grid>
                            <Button style={{ marginLeft: "26em", marginTop: "1em", width: "10em", backgroundColor: "navy", color: "white" }}
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={this.sendData.bind(this)}
                            >Sign Up
                            </Button>
                            {this.state.message}
                            <br /><br /><br/>
                            {this.state.alertSuccess ? <div> <br/><Alert variant="filled" severity="success" style={{marginLeft:"19em"}}>
                                <AlertTitle>Success</AlertTitle>
                                You registered successfully — <strong>check it out!</strong>
                            </Alert></div> : null}
                            {this.state.alertWarning ? <div> <br/><Alert variant="filled" severity="warning">
                                <AlertTitle>Warning</AlertTitle>
                                Enter your correct details — <strong>check it out!</strong>
                            </Alert>
                            </div> : null}
                        </Grid><br/>
                        {this.state.progress ? <div>
                            <LinearProgress color="secondary" />
                        </div> : null}
                    </Card>
                </Container>
            </div>
        );
    }
}
export default Registration;