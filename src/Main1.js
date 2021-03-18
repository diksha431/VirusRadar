import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Card, Container } from "@material-ui/core";

class Main1 extends Component
{
    Emp=()=>
    {
        window.location = "Login";
    }
    Guard=()=>
    {
        window.location = "LoginG";
    }
    Admin=()=>
    {
        window.location = "AdminLogin";
    }
    
    render()
    {
        return(
            <div style={{height:"44.33em",width:"76.6em",backgroundImage:"url('m4.jpg')",backgroundSize:"cover"}}>
                <div className="pol"> 
                    <Typography variant="h4" style={{padding:"0.5em",marginLeft:"2em",fontWeight:"bold",fontSize:"3em"}}>VirusRadar</Typography>
                </div>
                <Container component="main" maxWidth="md">
                <Grid container spacing={6} style={{marginTop:"0em"}}>
                    <Grid item xs={12} sm={6} >
                       <br/><br/><Card style={{backgroundColor:"gainsboro",padding:"1em",width:"25em"}}>
                            <Typography variant="h5" >For Employees</Typography><br/>
                            <Typography variant="p" >Employees of the company can login into their account after being registered and can access the site.
                            </Typography><br/>
                            <br/><Button variant="contained" color="primary" style={{marginTop:"1em",width:"15em",backgroundColor:"navy"}}
                                onClick={this.Emp}
                            >Login</Button><br/>
                            <br/><Link href="Registration" variant="body2" style={{color:"black",fontSize:"1em"}}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Card> 
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                       <br/><br/><Card style={{backgroundColor:"gainsboro",padding:"1em",width:"25em"}}>
                            <Typography variant="h5" >For Guard</Typography><br/>
                            <Typography variant="p" >Security guards can login into their account after being registered.
                            </Typography><br/>
                            <br/><Button variant="contained" color="primary" style={{marginTop:"1em",width:"15em",backgroundColor:"navy"}}
                                onClick={this.Guard}
                            >Login</Button><br/>
                            <br/><Link href="Registration1" variant="body2" style={{color:"black",fontSize:"1em"}} >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Card> 
                    </Grid>
                    <Grid item  xs={12} sm={6}>
                       <br/><br/><Card style={{backgroundColor:"gainsboro",padding:"1em",width:"25em"}}>
                            <Typography variant="h5" >For Admin</Typography><br/>
                            <Typography variant="p" >Admin of the company can login using specific admin id and can control the activities of site.
                            </Typography><br/>
                            <br/><Button variant="contained" color="primary" style={{marginTop:"1em",width:"15em",backgroundColor:"navy"}}
                                onClick={this.Admin}
                            >Login</Button>
                        </Card> 
                    </Grid>
                
                </Grid>
                </Container>
            </div>
        )
    }
}
export default Main1;
