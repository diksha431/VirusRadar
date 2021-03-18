import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class Haryana extends Component
{
    render()
    {
        return(
            <div style={{backgroundColor: "#eeeff1",height:"50em",width:"43.65em"}}>
                <div style={{backgroundColor: "#eeeff1",height:"4em",width:"43.65em"}}>  </div>  
                <div style={{backgroundColor: "white",height:"173em",width:"40em",marginLeft:"3em",marginTop:"-66em"}}>
                <Container maxWidth="md" style={{backgroundColor: "white"}} >
                    <Typography variant="h5" style={{marginBottom: "1em",paddingTop:"1em",fontWeight: "bold"}}>Haryana</Typography>
                    <Grid container>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">BPS Govt. Medical College, Sonipat</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Core Diagnostics Pvt Ltd, Udyog Vihar Phase-3, Gurgaon</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Modern Diagnostic & Research Centre-Lab, 363-364/4, JAwahar Nagar. Gurgaon</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">MolQ Laboratory, Plot 28,29; Sector 18(P), Electronic city, Udyog Vihar, Phase IV, Gurgaon</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Pathkind Diagnostics Pvt Ltd, Plot 55-56, Phase 4, Udyog Vihar, Sec 18, Gurgaon</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Pt. B.D. Sharma Post Graduate Inst. Of Med. Sciences, Rohtak, Haryana</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">SRL Limited, GP26, Sector 18, Gurugram</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Strand Life Sciences, A-17, Sector 34, Gurugram</Button><br/><br/>
                        </Grid>
                    </Grid>
                </Container>
                </div>  
            </div>  
        )
    }
}
export default Haryana;
