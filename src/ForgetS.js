import React, { Component } from "react";
//import './SignIn.css';
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
/* import Alert from '@material-ui/lab/Alert'; */
//import { Alert } from '@material-ui/lab';
//import { Alert_Message_Error } from './Alert_Message_Error.js';
import Axios from 'axios';
import { Alert, AlertTitle } from '@material-ui/lab';

import { Redirect } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';


class ForgetS extends Component {


    constructor(props) {
        super(props)

        this.state = {
            email: '',
            EmailError: "",
            password: '',
            passwordError: "",
            birthday: "",
            birthdayError: "",
            Dataitem: "",
            alert_msg: false,
            progress: false,
            isUserPassword: false,
            isUserSubmit: true,
            alertSuccess:false,


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


        const errors = {

            EmailError: "",

            birthdayError: ""
        };





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


    handleLogin = () => {
        alert("hello handle login");
        const error = this.validate();
        alert("hell validate");
        if (!error) {
            console.log("time nhi hai")
            alert("time passpass");
            const email = this.state.email
            const birthday = this.state.birthday

            const data = {
                email, birthday

            }
            this.setState({ progress: true })
            Axios.get('http://localhost:8080/examples/Forget.jsp', { params: data }, {
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(response => {

                this.setState({
                    Dataitem: response.data,
                    progress: false,
                    alert_msg: false
                })

                console.log(this.state.Dataitem)

                var name = JSON.parse(JSON.stringify(this.state.Dataitem))

                if (name.Success.To == "userLogin") {
                    localStorage.setItem("id", name.Success.email_id)
                    localStorage.setItem("hello","hjkjkjk")

                    this.setState({
                        isUserPassword: true,
                        isUserSubmit: false
                    })

                }
            }).catch(err => {

                this.setState({ progress: false, alert_msg: "true" })
                /* alert(err); */

                console.log("Failed");
            })

        }
    }

        validateupdate = () => {
            let isError = false;
            const errors = {
                passwordError: ""

            };

            if (this.state.password.length < 8) {
                isError = true;
                errors.birthdayError = "Please fill the Birthday Date Correctly!";
            }


            this.setState({
                ...this.state,
                ...errors
            });

            return isError

        }


        updatePassword = () => {
            alert("hello handle login");
            const error = this.validateupdate();
            alert("hell validate");
            if (!error) {
                console.log("time nhi hai")
                alert("time passpass");
               const email= localStorage.getItem("id")
                const password = this.state.password

                const data = {
                    password,email

                }
                this.setState({ progress: true })
                Axios.get('http://localhost:8080/examples/ForgetUpdate.jsp', { params: data }, {
                    headers:
                    {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then(response => {

                    this.setState({
                        Dataitem: response.data,
                        progress: false,
                        alert_msg: false
                    })

                    console.log(this.state.Dataitem)

                    var name = JSON.parse(JSON.stringify(this.state.Dataitem))

                    /* console.log(name.Success.response + "duniya") */
                    /*  var item = localStorage.setItem("token1",JSON.stringify(this.state.Dataitem))
                     var item2=JSON.parse(JSON.stringify(localStorage.getItem("token1"))) */
                    /* alert(name+"    jantar") */

                    if (name.Success.To == "userLogin") {


                        this.setState({
                            isUserPassword: true,
                            isUserSubmit: false,
                            alertSuccess:true
                        })

                    }
                }).catch(err => {

                    this.setState({ progress: false, alert_msg: "true" })
                    /* alert(err); */

                    console.log("Failed");
                })

            }

        }




        render() {

            return (
                <div>
                    <hr />
                    {/* <div> {this.state.alert_msg == "true"?<Alert_Message_Error/>:null}</div> */}
                    <div style={{ backgroundColor: "", height: "100vh", width: "100%" }}>

                        <div style={{ backgroundColor: "", height: "20vh", width: "100%" }}>
                            <Typography variant="p">heloo</Typography>
                        </div>
                        <div style={{ backgroundColor: "", height: "80vh", width: "100%" }}  >


                            <Container maxWidth="xs" style={{ fontWeight: '700', fontSize: '24px', padding: '', backgroundColor: '' }}>
                                {this.state.progress ? <div>
                                    <LinearProgress color="secondary" />
                                </div> : null}

                                {this.state.alert_msg ?
                                    <div><Alert variant="filled" severity="error">
                                        Incorrect Email and Password — <strong>check it out!</strong>
                                    </Alert></div>
                                    : null}
                                <Typography variant="p" >Forget password</Typography>
                                <Typography component="div" style={{ backgroundColor: '', height: '100vh' }} >
                                    <div>
                                        <FormLabel component="legend" className="box"></FormLabel>

                                        <TextField variant="outlined" margin="normal" fullWidth id="email" label="Email Address"
                                            name="email" error={this.state.EmailError} helperText={this.state.EmailError}
                                            autoComplete="email" type="email" onChange={this.changeField} />

                                        <TextField fullWidth variant="outlined" margin="normal" className="birth" id="date"
                                            label="Birthday" error={this.state.birthdayError} helperText={this.state.birthdayError}
                                            type="date" defaultValue="2017-05-24" name="birthday" value={this.state.birthday} onChange={this.changeField.bind(this)} />


                                        {this.state.isUserPassword ?
                                            <TextField variant="outlined" margin="normal" fullWidth id="password" label="Set New Password"
                                                error={this.state.passwordError} helperText={this.state.passwordError}
                                                name="password" type="password" onChange={this.changeField} /> : null}
                                        {this.state.isUserSubmit ?
                                            <Button type="submit" fullWidth variant="contained" color="primary"
                                                onClick={this.handleLogin} className="marT14"> Submit</Button>
                                            :
                                            <Button type="submit" fullWidth variant="contained" color="primary"
                                                onClick={this.updatePassword} className="marT14"> Submit to</Button>}


                                        {this.state.alertSuccess?<div><Alert variant="filled" severity="success">
                                        <AlertTitle>Success</AlertTitle>
                                        Your Forget Password Successfully —  <strong>check it out!</strong>
                                        </Alert></div> :null}


                                    </div>
                                </Typography>
                            </Container>
                        </div>

                        <div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    export default ForgetS;