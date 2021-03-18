import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Card } from "@material-ui/core";

class AdminLogin extends Component
{  
    constructor()
    {
        super();
        this.state={
            email:"",
            password:"",
            alert:false,
            progress:false
           // isLoggedIn: false
        }
        this.handleChangeFields = this.handleChangeFields.bind(this)
    }
    handleLogin=()=>
    {
        if(this.state.email=="admin@" && this.state.password=="admin012"){
            //this.setState({isLoggedIn:true})
            //alert("right")
            window.location = "Admin";
        }
        else if(this.state.email!="admin@" && this.state.password!="admin012")
        {
            alert("wrong")
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
    
    render()
    {
        return(
            <div style={{height:"37.33em",width:"77.6em",backgroundImage:"url('m4.jpg')",backgroundSize:"cover"}}>
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
                            onChange={this.handleChangeFields.bind(this)}
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
                            onChange={this.handleChangeFields.bind(this)}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button style={{marginBottom:"1em",marginTop:"1em",backgroundColor:"navy",color:"white"}}
                         onClick={this.handleLogin.bind(this)}
                            type="submit"
                            fullWidth
                            variant="contained"
                            >Sign In
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link href="Registration.js" variant="body2" style={{color:"black"}}>
                                Forgot password?
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                            <Link href="Registration1" variant="body2" style={{color:"black"}}
                            >
                                {"Don't have an account? Sign Up"}
                            </Link>
                    </Grid>
                </Grid>
            </Card> 
            </Container>
        </div>
        )
    }
}
export default AdminLogin;
