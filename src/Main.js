import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Card, Grid } from "@material-ui/core";

class Main extends Component
{
    Redirect=()=>
    {
        window.location = "Main1";
    }
    Redirect1=()=>
    {
        window.location = "HomePage";
    }
    render()
    {
        return(
            <div style={{height:"37em",width:"77.6em"}}>
                <div style={{height:"37.33em",width:"37em",backgroundImage:"url('m4.jpg')",backgroundRepeat:"round"}}></div>

                <div>
                    <div style={{height:"38.98em",width:"40.5em",marginLeft:"37em",marginTop:"-39em",backgroundColor:"lightgray"}}> 
                        <div style={{height:"5em",width:"40.5em"}}>  
                            <Container>
                                <br/><br/><Button variant="outlined" style={{marginLeft:"36em"}}
                                onClick={this.Redirect}>Sign Up </Button>
                            </Container>
                        </div>
                        <Container>
                            <Typography variant="h4" style={{padding:"1.4em",marginLeft:"4.5em",fontWeight:"bold"}}>Welcome To VirusRadar</Typography><br/>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="h6" style={{fontWeight:"bold"}}>Covid-19</Typography>
                                    <div style={{marginLeft:"8em",marginTop:"-2em"}}>
                                    <Typography style={{textAlign:"justify"}}>Coronaviruses are a large family of enveloped, non-segmented, single-stranded, positive-sense RNA viruses that circulate among animals including camels, cats, and bats. Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</Typography>
                                    </div><br/><br/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" style={{fontWeight:"bold"}}>Site</Typography>
                                    <div style={{marginLeft:"8em",marginTop:"-2em"}}>
                                    <Typography style={{textAlign:"justify"}}>It helps to identify people who are at high risk for coronavirus, help expedite their access to screening and to medical care and reduce spread of this infectious disease.
                                        It includes a record of who took the test with a small snippet of information about the user’s browser version and the operating system.</Typography>
                                    </div>
                                </Grid>
                

                            </Grid>
                        </Container>
                    </div>   
                
                </div>
                
            </div>
        )
    }
}
export default Main;
