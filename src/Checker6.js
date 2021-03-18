import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Card } from "@material-ui/core";
import Axios from 'axios';

class Checker6 extends Component
{
    constructor()
    {
        super();
        this.state={
            gather:""
        }
    }
    
    Redirect=(e)=>
    {
        this.state.gather = e.currentTarget.value;
        console.log(this.state.gather)
            const gather=this.state.gather
            /* const data={gather}
            Axios.get('http://localhost:9090/examples/gath.jsp',{params:data}).then(response=>{console.log(response);
            this.setState({message:response.data.response})
            }).catch(err=>{
            console.log("Failed");
            })
             */localStorage.setItem("gather",gather)
        window.location = "Checker7";
    }
    render()
    {
        return(
            <div style={{backgroundColor: "#eeeff1",height:"100vh",width:"100%",backgroundImage:"url('covid23.jpg')",backgroundSize:"cover"}}>
                <div style={{backgroundColor: "eeeff1",height:"10vh",width:"100%"}}>  </div>    
                    <Container maxWidth="xs" >
                        <Typography variant="h5" style={{color:"aliceblue"}}>Symptom Checker</Typography>
                        <Typography variant="p" style={{fontSize:"0.9rem",color:"aliceblue"}}>Please answer the question to the best of your knowledge</Typography>
                        <Card style={{marginTop:"1em"}}>
                            <Container maxWidth="xs" style={{backgroundColor: "white"}}>
                            <Typography variant="h6"  gutterBottom style={{fontSize:"1.2em",marginTop:"1em"}}>Have you or someone in your family staying with you attended a large gathering/ in a migartion centre in the last 14 days?</Typography>
                            <Button variant="outlined" value="Yes" fullWidth style={{marginBottom:"0.7em",height:"3.3em",paddingRight:"21em",fontWeight:"bold"}}
                                onClick={this.Redirect.bind(this)}
                            >Yes</Button><br/>
                            <Button variant="outlined" value="No" fullWidth style={{marginBottom:"2.5em",height:"3.3em",paddingRight:"21em",fontWeight:"bold"}}
                                onClick={this.Redirect.bind(this)}
                            >No</Button><br/>
                            </Container>
                        </Card>
                    </Container>
		    </div>
        )
    }
}
export default Checker6;
