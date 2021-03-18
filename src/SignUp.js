import React, { Component } from "react";
import "./HomePage.css"
//import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Radio from '@material-ui/core/Radio';
//import Radio from '@material-ui/core/StylesRadio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Alert, AlertTitle } from '@material-ui/lab';
import LinearProgress from '@material-ui/core/LinearProgress';


import Axios from 'axios';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Validator from 'validator';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            fullnameError: "",
            Email: "",
            EmailError: "",
            password: "",
            passwordError: "",
            birthday: "",
            birthdayError: "",
            gender: "",
            alertSuccess: false,
            alertWarning: false,
            progress: false
        }
    }
    changeField = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
        console.log(this.state, "formField")
    }
    validate = () => {
        let isError = false;
        var numbers = /^[0-9]+$/;
        /* var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/; */
        var check = "jk"
        this.setState({
            fullnameError: "",
            EmailError: "",
            passwordError: "",
            birthdayError: ""
        })
        const errors = {
            fullnameError: "",
            EmailError: "",
            passwordError: "",
            birthdayError: ""
        };


        if (this.state.fullname.length < 1) {
            isError = true;
            errors.fullnameError = "Please enter your Full Name!";
        }
        alert(this.state.Email.includes('@'))
        if (!this.state.Email.includes('@')) {
            isError = true;
            errors.EmailError = "Please enter your valid Email-ID.";
        } /* else if(!this.state.Email.match(numbers).toString().length < 11){
            isError=true;
            errors.EmailError="Please enter a valid Mobile Number!";
        } */
        if (this.state.passwordError.length < 9) {
            isError = true;
            errors.passwordError = "Password is too Short!";
        }
        if (this.state.birthday == "") {
            isError = true;
            errors.birthdayError = "Please fill the Birthday Date Correctly!";
        }


        this.setState({
            ...this.state,
            ...errors
        });

        return isError
    }


    sendData(ev) {
        //ev.preventDefalut();
        const error = this.validate();
        if (!error) {
            alert("Hello")
            const fullname = this.state.fullname
            const Email = this.state.Email
            const password = this.state.password
            const birthday = this.state.birthday
            const gender = this.state.gender

            const data = { fullname, Email, password, birthday, gender }
            this.setState({ progress: true })
            Axios.get('http://localhost:8080/examples/Regist.jsp', { params: data }).then(response => {
                console.log(response);
                alert("hii");
                this.setState({
                    progress: false,
                    alertSuccess: true,

                    fullname: "",
                    birthday: "",
                    password: "",
                    gender: "",
                    Email: ""
                })
            }).catch(err => {
                this.setState({
                    progress: false,
                    alertWarning: true
                })
                console.log("Failed");
            })

        }
    }
    render() {

        return <div style={{ backgroundColor: "", height: "100vh", width: "100%" }}>
            <div style={{ backgroundColor: "red", height: "", width: "100%" }}>

            </div>
            <div style={{ backgroundColor: "", height: "80vh", width: "100%" }}  >

                <Container maxWidth="xs" style={{ fontWeight: '700', fontSize: '24px', padding: '40px', backgroundColor: '' }}>
                    <Typography variant="p" >SIGN UP</Typography>
                    <Typography component="div" style={{ backgroundColor: '', height: '100vh' }}  >
                        <div >
                            {/*  <RadioGroup defaultValue="user1"  className="box" name="user" value={this.state.user} onChange={this.changeField.bind(this)}>
                                            <FormControlLabel value="userLogin"  name="user" control={<Radio />}  label="As a User Login" />
                                            <FormControlLabel value="guardLogin" name="user" control={<Radio />} className="marT11" label="As a Security Guard Login" />
                                        </RadioGroup> */}


                            <TextField variant="outlined" margin="normal" fullWidth id="name" label="Full Name"
                                name="fullname" error={this.state.fullnameError} helperText={this.state.fullnameError}
                                autoComplete="fullname" color="primary" type="fullname" value={this.state.fullname} onChange={this.changeField.bind(this)} />
                            <TextField variant="outlined" margin="normal" fullWidth id="email" label="Mobile Number or Email Address"
                                name="Email" error={this.state.EmailError} helperText={this.state.EmailError}
                                value={this.state.Email} onChange={this.changeField.bind(this)} />
                            <TextField variant="outlined" type="password" margin="normal" fullWidth id="password" label="Password"
                                name="password" error={this.state.passwordError} helperText={this.state.passwordError}
                                value={this.state.password} onChange={this.changeField.bind(this)} />

                            <TextField fullWidth variant="outlined" margin="normal" className="birth" id="date"
                                label="Birthday" error={this.state.birthdayError} helperText={this.state.birthdayError}
                                type="date" defaultValue="2017-05-24" name="birthday" value={this.state.birthday} onChange={this.changeField.bind(this)} />


                            <div className="birth">
                                <FormLabel component="legend"   >Gender</FormLabel>

                                <RadioGroup defaultValue="male" aria-label="gender" margin="normal" name="gender" value={this.state.gender} onChange={this.changeField.bind(this)}>
                                    <Grid container >
                                        <Grid item xs="3">
                                            <FormControlLabel value="male" control={<Radio />} label="Male" className=" " name="gender" />
                                        </Grid>
                                        <Grid>
                                            <FormControlLabel value="Female" control={<Radio />} className="" label="Female" name="gender" />
                                        </Grid>
                                        <Grid>
                                            <FormControlLabel value="Transgender" control={<Radio />} className="" label="Transgender" name="gender" />
                                        </Grid>
                                    </Grid>
                                </RadioGroup>
                            </div>





                            <Button type="submit" fullWidth className="set" variant="contained" color="primary" className="marT14" onClick={this.sendData.bind(this)}> SUBMIT</Button>
                            <br /><br />
                            {this.state.alertSuccess ? <div><Alert variant="filled" severity="success">
                                <AlertTitle>Success</AlertTitle>
                                        You Registered Successfully —  <strong>check it out!</strong>
                            </Alert></div> : null}

                            {this.state.alertWarning ? <div><Alert variant="filled" severity="warning">
                                You Entered Something Wrong — <strong>check it out!</strong>
                            </Alert></div> : null}
                        </div>
                        {this.state.progress ? <div>
                            <LinearProgress color="secondary" />
                        </div> : null}
                    </Typography>
                </Container>
            </div>

            <div>
            </div>
        </div>
    }
}

export default SignUp;