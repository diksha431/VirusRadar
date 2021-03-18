import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Andra extends Component
{
    render()
    {
        return(
            <div style={{backgroundColor: "#eeeff1",height:"50em",width:"43.65em"}}>
                <div style={{backgroundColor: "#eeeff1",height:"4em",width:"43.65em"}}>  </div>  
                <div style={{backgroundColor: "white",height:"173em",width:"40em",marginLeft:"3em",marginTop:"-66em"}}>
                <Container maxWidth="md" style={{backgroundColor: "white"}} >
                    <Typography variant="h5" style={{marginBottom: "1em",paddingTop:"1em",fontWeight: "bold"}}>Andhra Pradesh</Typography>
                    <Grid container>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Govt. Medical College, Ananthpur</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Guntur Medical College, Guntur</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Rajiv Gandhi Institute of Medical Sciences, Kadapa</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Rangaraya Medical College, Kakinada</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Sidhartha Medical College, Vijaywada</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Sri Venkateswara Institute of Medical Sciences, Tirupati</Button><br/><br/>
                        </Grid>
                    </Grid>
                </Container>
                </div>  
            </div>  
        )
    }
}
export default Andra;
