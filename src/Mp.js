import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class Mp extends Component
{
    render()
    {
        return(
            <div style={{backgroundColor: "#eeeff1",height:"50em",width:"43.65em"}}>
                <div style={{backgroundColor: "#eeeff1",height:"4em",width:"43.65em"}}>  </div>  
                <div style={{backgroundColor: "white",height:"173em",width:"40em",marginLeft:"3em",marginTop:"-66em"}}>
                <Container maxWidth="md" style={{backgroundColor: "white"}} >
                    <Typography variant="h5" style={{marginBottom: "1em",paddingTop:"1em",fontWeight: "bold"}}>Madhya Pradesh</Typography>
                    <Grid container>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">All India Institute of Medical Sciences, Bhopal</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Gajra Raja Medical College, Gwalior</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Gandhi Medical College, Bhopal</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">Mahatma Gandhi Memorial Medical College, Indore</Button><br/><br/>
                        </Grid>
                        <Grid item  sm={6}>
                            <Button variant="outlined" className="ch1">National Institute for Research on Tribal Health, Jabalpur</Button><br/><br/>
                        </Grid>
                    </Grid>
                </Container>
                </div>  
            </div>  
        )
    }
}
export default Mp;
