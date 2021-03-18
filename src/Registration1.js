import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Card } from "@material-ui/core";
import Axios from 'axios';
import { Alert, AlertTitle } from '@material-ui/lab';
import LinearProgress from '@material-ui/core/LinearProgress';

class Registration1 extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            nameError: "",
            gid: "",
            gidError: "",
            email: "",
            emailError: "",
            pass: "",
            passError: "",
            phone: "",
            phoneError: "",
            add: "",
            addError: "",
            city: "",
            cityError: "",
            state: "",
            stateError: "",
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
        const errors = { nameError: "", gidError: "", emailError:"", passError:"", phoneError:"", addError:"", cityError:"", stateError:""}
        if (!this.state.name.length < 3) {
            isError = true;
            errors.nameError = "Please enter your full name";
        }
        if (this.state.gid.length < 6) {
            // alert(this.state.uid.length+"hi")
             isError = true;
             errors.gidError = "Please enter your valid Id"
        }
        if (!this.state.email.includes('@')) {
            isError = true;
            errors.emailError = "Please enter the correct E-mail address"
        }
        if (this.state.pass.length < 9) {
           // alert(this.state.pass.length+"hello")
            isError = true;
            errors.passError = "Password is short"
        }
        if (this.state.phone.length < 10) {
            isError = true;
            errors.phoneError = "Please enter your Phone number"
        }
        if (this.state.add.length < 8) {
            isError = true;
            errors.addError = "Please enter your full address"
        }
        if (this.state.city.length < 1) {
            isError = true;
            errors.cityError = "Please enter your City"
        }
        if (this.state.state.length < 1) {
            isError = true;
            errors.stateError = "Please enter your State"
        }
        this.setState({
            ...this.state,
            ...errors
        })
    }
    blank = () => {
        this.setState({
            name: "  ",
            gid: "  ",
            email: "  ",
            pass: "  ",
            phone: "  ",
            add: "  ",
            city: "  ",
            state: "  "
        })
    }
    sendData(ev) {
        const error = this.validate();
        if (!error) {
            const name = this.state.name
            const gid = this.state.gid
            const email = this.state.email
            const pass = this.state.pass
            const phone = this.state.phone
            const add = this.state.add
            const city = this.state.city
            const state = this.state.state
            const data = { name, gid, email, pass, phone, add, city, state }
            this.setState({ progress: true })
            Axios.get('http://localhost:9090/examples/guardin.jsp', { params: data }).then(response => {
                console.log(response);
                this.setState({ progress:false, alertSuccess:true, alertWarning:false })
            }).catch(err => {
                this.setState({progress:false, alertWarning:true})
                console.log("Failed");
            })
        }
        //this.blank()
        //this.Redirect()
    }
    Redirect = () => {
        if (this.state.name && this.state.gid && this.state.email && this.state.pass && this.state.phone && this.state.add && this.state.city && this.state.state) {
            this.setState({ isEnter: true })
            window.location = "Leave";
        }
        else {
            alert("Please enter the required fields")
        }
    }
    render() {
        return (
            <div style={{ height: "41em", width: "77.57em", backgroundImage: "url('m4.jpg')", backgroundSize: "cover" }}>
                <Container component="main" maxWidth="md">
                    <Typography variant="h6" gutterBottom style={{ fontSize: "2em", marginBottom: "0em", fontWeight: "bold" }}>Create an account</Typography>
                    <Card style={{ padding: "2em", backgroundColor: "gainsboro",height:"33em" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="name"
                                    name="name"
                                    label="Full name"
                                    fullWidth
                                    error={this.state.nameError}
                                    helperText={this.state.nameError}
                                    value={this.state.name}
                                    onChange={this.fun}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="id"
                                    name="gid"
                                    label="Guard ID"
                                    fullWidth
                                    error={this.state.gidError}
                                    helperText={this.state.gidError}
                                    value={this.state.gid}
                                    onChange={this.fun.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="E-mail Adress"
                                    fullWidth
                                    error={this.state.emailError}
                                    helperText={this.state.emailError}
                                    value={this.state.email}
                                    onChange={this.fun.bind(this)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="phoneno"
                                    name="phone"
                                    label="Phone Number"
                                    fullWidth
                                    error={this.state.phoneError}
                                    helperText={this.state.phoneError}
                                    value={this.state.phone}
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
export default Registration1;