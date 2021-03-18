import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Up extends Component
{
    render()
    {
        return(
            <div style={{backgroundColor: "#eeeff1",height:"50em",width:"43.65em"}}>
                <div style={{backgroundColor: "#eeeff1",height:"4em",width:"43.65em"}}>  </div>  
                <div style={{backgroundColor: "white",height:"173em",width:"40em",marginLeft:"3em",marginTop:"-66em"}}>
                <Container maxWidth="md" style={{backgroundColor: "white"}} >
                    <Typography variant="h5" style={{marginBottom: "1em",paddingTop:"1em",fontWeight: "bold"}}>Uttar Pradesh</Typography>
                    <Grid container>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Dept of Lab Medicine, Jaypee Hospital, Sector 128, Noida</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Institute of Medical Sciences, Banaras Hindu University, Varanasi</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Jawaharlal Nehru Medical College, Aligarh</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">King George Medical University, Lucknow</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Lala Lajpat Rai Memorial Medical College, Meerut</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">RML Mehrotra Pathology Pvt Ltd, Nirala Nagar, Lucknow</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Sanjay Gandhi Post Graduate Institute, Lucknow</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Uttar Pradesh University of Medical Sciences (Formerly Uttar Pradesh RIMS), Saifai</Button><br/><br/>
                        </Grid>
                    </Grid>
                </Container>
                </div>  
            </div>  
        )
    }
}
export default Up;
