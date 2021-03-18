import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Bihar extends Component
{
    render()
    {
        return(
            <div style={{backgroundColor: "#eeeff1",height:"50em",width:"43.65em"}}>
                <div style={{backgroundColor: "#eeeff1",height:"4em",width:"43.65em"}}>  </div>  
                <div style={{backgroundColor: "white",height:"173em",width:"40em",marginLeft:"3em",marginTop:"-66em"}}>
                <Container maxWidth="md" style={{backgroundColor: "white"}} >
                    <Typography variant="h5" style={{marginBottom: "1em",paddingTop:"1em",fontWeight: "bold"}}>Bihar</Typography>
                    <Grid container>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Darbhanga Medical College, Darbhanga</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Indira Gandhi Institute Medical Sciences, Patna</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Patna Medical College, Patna</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Rajendra Memorial Research Institute of Medical Sciences, Patna</Button><br/><br/>
                        </Grid>
                    </Grid>
                </Container>
                </div>  
            </div>  
        )
    }
}
export default Bihar;
