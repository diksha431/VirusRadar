import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Card, Grid } from "@material-ui/core";
import StoreIcon from '@material-ui/icons/Store';

class Admin extends Component
{
    Symptom=()=>
    {
        window.location = "Checker";
    }
    Stat=()=>
    {
        window.location = "Stats";
    }
    Test=()=>
    {
        window.location = "Testcenter";
    }
    Measure=()=>
    {
        window.location = "Safety";
    }
    Number=()=>
    {
        window.location = "Helpline";
    }
    Guard=()=>
    {
        window.location = "Gdetails";
    }
    logout=()=>
    {
        localStorage.clear()
        window.location = "AdminLogin";
    }
    render()
    {
        return(
            <div style={{height:"37.35em",width:"77.6em", backgroundColor:"black"}}>
                <div className="main2">
                    <div className="main3">
                        <Typography component="h6" variant="h4" className="co1" style={{padding:"1.5rem",fontWeight:"bold"}}>VirusRadar</Typography>
                    </div>
                    <Container component="main" maxWidth="sm" style={{marginLeft:"2em",marginTop:"3em"}}>
                        <Typography component="h6" variant="h5" className="co1">Admin Panel</Typography><br/><br/>
                        <Button style={{color:"white"}}
                            onClick={this.Stat}
                        >Stats</Button><br/>
                        <Button style={{color:"white"}}
                            onClick={this.Symptom}
                        >Symptoms Checker</Button><br/>
                        <Button style={{color:"white"}}
                            onClick={this.Measure}
                        >Safety Measures</Button><br/>
                        <Button style={{color:"white"}}
                            onClick={this.Test}
                        >Test Centres</Button><br/>
                        <Button style={{color:"white"}}
                            onClick={this.Number}
                        >Helpline Number</Button><br/>
                        <Button style={{color:"white"}}
                            onClick={this.Guard}
                        >Guard Details</Button><br/>
                        <Button style={{color:"white"}}
                            onClick={this.logout}
                        >Logout</Button><br/>
                    </Container>
                </div>

                <div>
                    <div className="main"> 
                    </div>   
                </div>
                
            </div>
        )
    }
}
export default Admin;
