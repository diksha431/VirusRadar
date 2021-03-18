import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Card } from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';
import LinearProgress from '@material-ui/core/LinearProgress';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component
{  
    constructor()
    {
        super();
        const token=localStorage.getItem("registration")
        let isLoggedIn=true
        if(token==null){
            isLoggedIn=false
        }
        this.state={
            email:"",
            emailError:"",
            password:"",
            passwordError:"",
            Dataitem:"",
            alert:false,
            progress:false,
            isLoggedIn
        }
        this.handleChangeFields = this.handleChangeFields.bind(this)
    }
    handleLogin=()=>
    {
        if(this.state.email && this.state.password){
            this.setState({isLoggedIn:true})
            window.location = "HomePage";
        }
        else{
            alert("Not Logged-In")
        }
    }
    handleChangeFields=(event)=>
    {
        this.setState({
        ...this.state,
        [event.target.name]: event.target.value
        })
        console.log(this.state,"formfield")
    }
    validate=()=>
    {
        //alert("hi2")
        //alert(this.state.email+" "+this.state.password)
        let isError=false
        const errors={emailError:"", passwordError:""}
        if (!this.state.email.includes('@')) {
            isError = true;
            errors.emailError = "Please enter the correct E-mail address"
        }
        if (this.state.password.length < 9) {
           // alert(this.state.password.length+"hello")
            isError = true;
            errors.passwordError = "Password is short"
        }
        this.setState({
            ...this.state,
            ...errors
        });

        return isError
    }
    sendData(ev) {
        const error = this.validate();
        if (!error) {
            //alert("Hello")
            const email = this.state.email
            const password = this.state.password
            const data = {email, password}
            this.setState({ progress: true })
            Axios.get('http://localhost:9090/examples/login.jsp', { params: data }).then(response => {
                console.log(response);
                this.setState({
                    Dataitem: response.data,
                    progress:false
                })
                console.log(this.state.Dataitem)
                var name=JSON.parse(JSON.stringify(this.state.Dataitem))
                if(name.Success.To=="userLogin"){
                    //alert("login success")
                    localStorage.setItem("registration",Date.now())
                    localStorage.setItem("UserId",name.Success.UserId)
                    /* localStorage.setItem("serial",name.Success.serial)
                    localStorage.setItem("firstName",name.Success.firstName)
                    localStorage.setItem("lastName",name.Success.lastName)
                    localStorage.setItem("mail",name.Success.mail)
                    localStorage.setItem("pass",name.Success.pass)
                    localStorage.setItem("uid",name.Success.uid)
                    localStorage.setItem("add",name.Success.add)
                    localStorage.setItem("city",name.Success.city)
                    localStorage.setItem("state",name.Success.state)
                    localStorage.setItem("zip",name.Success.zip)
                    localStorage.setItem("phno",name.Success.phno)
                    localStorage.setItem("To",name.Success.To)
                     */
                    this.setState({isLoggedIn:true})
                }
            }).catch(err => {
                this.setState({progress:false,alert:true})
                console.log(err);
            })
        }
        //this.blank()
        //window.location = "HomePage";
    }
    
    render()
    {
        if (this.state.isLoggedIn) {
            return <Redirect to='/Homepage'></Redirect>
        }

        
        return(
            <div style={{height:"37.33em",width:"77.6em",backgroundImage:"url('m4.jpg')",backgroundSize:"cover"}}>    
             <div style={{height:"3em",width:"100%"}}> 
                {this.state.progress ? <div>
                        <LinearProgress color="secondary" />
                </div> : null}  </div>         
                
             <br/><br/>   
            <Container component="main" maxWidth="sm" style={{padding:"2em"}}>
            <Card style={{backgroundColor:"gainsboro",padding:"1em",width:"26em"}}>
                <LockOutlinedIcon style={{marginLeft:"8em",backgroundColor:"silver"}} />
                <Typography component="h6" variant="h5" style={{marginLeft:"10rem",fontSize:"1.8rem"}}>Sign in</Typography>
                <Grid container >
                    <Grid item xs={12} >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            error={this.state.emailError}
                            helperText={this.state.emailError}        
                            onChange={this.handleChangeFields}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={this.state.passwordError}
                            helperText={this.state.passwordError}
                            onChange={this.handleChangeFields.bind(this)}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button style={{marginBottom:"1em",marginTop:"1em",backgroundColor:"navy",color:"white"}}
                         onClick={this.sendData.bind(this)}
                            type="submit"
                            fullWidth
                            variant="contained"
                            >Sign In
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link href="Forgot" variant="body2" style={{color:"black"}}>
                                Forgot password?
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                            <Link href="Registration" variant="body2" style={{color:"black"}}
                            >
                                {"Don't have an account? Sign Up"}
                            </Link>
                    </Grid>
                    {this.state.alert ? <div style={{width:"27em"}}> <br/><Alert variant="filled" severity="warning">
                                <AlertTitle>Warning</AlertTitle>
                                    Incorrect Details
                            </Alert>
                            </div> : null}
                        {this.state.progress ? <div>
                            <LinearProgress color="secondary" />
                        </div> : null}
                </Grid>
            </Card> 
            </Container>
        </div>
        )
    }
}
export default Login;
