import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Card } from "@material-ui/core";
import Axios from 'axios';

class Checker1 extends Component
{
    constructor()
    {
        super();
        this.state={
            gender:""
        }
    }
    Redirect=(e)=>
    {
        this.state.gender = e.currentTarget.value;
        console.log(this.state.gender)
            const gender=this.state.gender
            /* const data={gender}
            Axios.get('http://localhost:9090/examples/gender.jsp',{params:data}).then(response=>{console.log(response);
            this.setState({message:response.data.response})
            }).catch(err=>{
            console.log("Failed");
            })
             */localStorage.setItem("gender",gender)
            
        window.location = "Checker2";
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
                            <Typography variant="h6"  gutterBottom style={{fontSize:"1.2em",marginTop:"1em"}}>What is your gender?</Typography>
                            <Button variant="outlined" value="Male" fullWidth style={{marginBottom:"2vh",height:"3.3em",paddingRight:"20em",fontWeight:"bold"}}
                                onClick={this.Redirect.bind(this)}
                            >Male</Button><br/>
                            <Button variant="outlined" value="Female" fullWidth style={{marginBottom:"2vh",height:"3.3em",paddingRight:"19em",fontWeight:"bold"}}
                                onClick={this.Redirect.bind(this)}
                            >Female</Button><br/>
                            <Button variant="outlined" value="Other" fullWidth style={{marginBottom:"5vh",height:"3.3em",paddingRight:"19em",fontWeight:"bold"}}
                                onClick={this.Redirect.bind(this)}
                            >Other</Button><br/>
                            </Container>
                        </Card>
                    </Container>
		    </div>
        )
    }
}
export default Checker1;
