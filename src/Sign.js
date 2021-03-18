import React, { Component } from "react";
import './SignIn.css';
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
import { Alert } from '@material-ui/lab';
import { Alert_Message_Error } from './Alert_Message_Error.js';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';


class Login extends Component {


    constructor(props) {
        super(props)
        const token = localStorage.getItem("user")
        let isUserLoggedIn = true
        if (token == null) {
            /*  alert("Token only == null") */
            isUserLoggedIn = false
        }
        this.state = {
            email: '',
            EmailError: "",
            password: '',
            passwordError: "",
            Dataitem: "",
            alert_msg: false,
            progress: false,

            isUserLoggedIn
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
            EmailError: "",
            passwordError: "",
        })
        const errors = {
            EmailError: "",
            passwordError: "",
        };


        /*  if(!this.state.Email.includes('@')){
            isError=true;
            errors.EmailError="Please enter your valid Email-ID.";
        } */ /* else if(!this.state.Email.match(numbers).toString().length < 11){
            isError=true;
            errors.EmailError="Please enter a valid Mobile Number!";
        } */
        if (this.state.passwordError.length < 9) {
            isError = true;
            errors.passwordError = "Password is too Short!";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError
    }


    handleLogin = () => {
        const error = this.validate();
        if (!error) {
            const email = this.state.email
            const password = this.state.password
            /* alert(user +email+password)  */
            const data = {
                email, password

            }
            this.setState({ progress: true })
            Axios.get('http://localhost:8080/examples/checklogin22.jsp', { params: data }, {
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                console.log(response.data + "cat");

                /* alert("hii"); */
                this.setState({
                    Dataitem: response.data,
                    progress: false
                })

                console.log(this.state.Dataitem)

                var name = JSON.parse(JSON.stringify(this.state.Dataitem))

                /* console.log(name.Success.response + "duniya") */
                /*  var item = localStorage.setItem("token1",JSON.stringify(this.state.Dataitem))
                 var item2=JSON.parse(JSON.stringify(localStorage.getItem("token1"))) */
                /* alert(name+"    jantar") */

                if (name.Success.To == "userLogin") {
                    alert("User Login Success")
                    /* this.setState({ alert_msg: true })
                    console.log(this.state.alert_msg) */
                    localStorage.setItem("user", Date.now())
                    localStorage.setItem("serial", name.Success.serial)
                    localStorage.setItem("fullname", name.Success.fullname)
                    localStorage.setItem("Email_id", name.Success.email_id)
                    localStorage.setItem("Password", name.Success.password)
                    localStorage.setItem("age", name.Success.age)
                    localStorage.setItem("gender", name.Success.gender)
                    localStorage.setItem("To", name.Success.To)
                    this.setState({
                        isUserLoggedIn: true
                    })

                }
                /* else if(name.Success.To =="guardLogin")
                {
                    alert("Guard Login Success")
                    localStorage.setItem("guard",Date.now())
                    localStorage.setItem("serial", name.Success.serial)
                    localStorage.setItem("fullname", name.Success.fullname)
                    localStorage.setItem("Email_id", name.Success.email_id)
                    localStorage.setItem("Password", name.Success.password)
                    localStorage.setItem("age", name.Success.age)
                    localStorage.setItem("gender", name.Success.gender)
                    localStorage.setItem("To", name.Success.To)
                    this.setState({
                        isguardLoggedIn: true
                    }) 
    
                }
                 */
            }).catch(err => {

                this.setState({ progress: false, alert_msg: "true" })
                /* alert(err); */

                console.log("Failed");
            })

        }
    }




    render() {
        if (this.state.isUserLoggedIn) {
            return <Redirect to='/home'></Redirect>
        }
        /* else if(this.state.isguardLoggedIn){
            return <Redirect to ='/guard'></Redirect>
        } */

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
                                    Incorrect Credencial — <strong>check it out!</strong>
                                </Alert></div>
                                : null}
                            <Typography variant="p" >SIGN IN</Typography>
                            <Typography component="div" style={{ backgroundColor: '', height: '100vh' }} >
                                <div >
                                    <FormLabel component="legend" className="box"></FormLabel>
                                    {/*  <RadioGroup defaultValue="user" className="box" name="user" value={this.state.user} onChange={this.changeField.bind(this)} name="customized-radios">
                                        <FormControlLabel value="userLogin" name="user" control={<Radio />} label="As a User Login" />
                                        <FormControlLabel value="guardLogin" name="user" control={<Radio />} className="marT11" label="As a Security Guard Login" />
                                    </RadioGroup>
 */}


                                    <TextField variant="outlined" margin="normal" fullWidth id="email" label="Email Address"
                                        name="email" error={this.state.EmailError} helperText={this.state.EmailError}
                                        autoComplete="email" type="email" onChange={this.changeField} />
                                    <TextField variant="outlined" margin="normal" fullWidth id="password" label="Password"
                                        error={this.state.passwordError} helperText={this.state.passwordError}
                                        name="password" type="password" onChange={this.changeField} />





                                    <Button type="submit" fullWidth variant="contained" color="primary"
                                        onClick={this.handleLogin} className="marT14"> Sign In</Button>
                                    <Grid container className="marT14">
                                        <Grid item xs>
                                            <Link href="#" variant="body2"> Forgot password? </Link>
                                        </Grid>
                                        <Grid>
                                            <Link href="Signup" variant="body2">"Don't have an account? Sign Up"</Link>
                                        </Grid>
                                    </Grid>




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
export default Login;