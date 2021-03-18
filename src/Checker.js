import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Card } from "@material-ui/core";
import Axios from 'axios';

class Checker extends Component
{
    constructor()
    {
        super();
        this.state={
            person1:""
        }
    }
    
    handleChange=(e)=>
    {
            this.state.person1 = e.currentTarget.value;
            console.log(this.state.person1)
            const person1=this.state.person1
            const data={person1}
            /* Axios.get('http://localhost:9090/examples/symptom.jsp',{params:data}).then(response=>{console.log(response);
            this.setState({message:response.data.response})
            }).catch(err=>{
            console.log("Failed");
            })
             */localStorage.setItem("person1",person1)
             window.location = "Checker1";
            
    }
    render()
    {
        return(
            <div style={{backgroundColor: "#eeeff1",height:"100vh",width:"100%",backgroundImage:"url('covid23.jpg')",backgroundSize:"cover"}}>
                <div style={{backgroundColor: "eeeff1",height:"10vh",width:"100%"}}>  </div>    
                    <Container maxWidth="xs" >
                        <Typography variant="h5" style={{color:"aliceblue"}}>Symptom Checker</Typography>
                        <Typography variant="p" style={{fontSize:"0.9rem",color:"aliceblue"}}>Please enter the question to the best of your knowledge</Typography>
                        <Card style={{marginTop:"1em"}}>
                            <Container maxWidth="xs" style={{backgroundColor: "white"}}>
                            <Typography variant="h6"  gutterBottom style={{fontSize:"1.2em",marginTop:"1em"}}>For whom are you taking the test?</Typography>
                            <Button variant="outlined" value="For Yourself" fullWidth style={{marginBottom:"2vh",height:"3.3em",paddingRight:"14em",fontWeight:"bold"}}
                               onClick={this.handleChange.bind(this)}
                            >For yourself</Button><br/>
                            <Button variant="outlined" value="Parent" fullWidth style={{marginBottom:"2vh",height:"3.3em",paddingRight:"18em",fontWeight:"bold"}}
                                onClick={this.handleChange.bind(this)}
                            >Parent</Button><br/>
                            <Button variant="outlined" value="Spouse" fullWidth style={{marginBottom:"2vh",height:"3.3em",paddingRight:"18em",fontWeight:"bold"}}
                                onClick={this.handleChange.bind(this)}
                            >Spouse</Button><br/>
                            <Button variant="outlined" value="Child" fullWidth style={{marginBottom:"2vh",height:"3.3em",paddingRight:"18em",fontWeight:"bold"}}
                                onClick={this.handleChange.bind(this)}
                            >Child</Button><br/>
                            <Button variant="outlined" value="In-Law" fullWidth style={{marginBottom:"2vh",height:"3.3em",paddingRight:"18em",fontWeight:"bold"}}
                                onClick={this.handleChange.bind(this)}
                            >In-law</Button><br/>
                            <Button variant="outlined" value="Someone Else" fullWidth style={{marginBottom:"4vh",height:"3.3em",paddingRight:"14em",fontWeight:"bold"}}
                                onClick={this.handleChange.bind(this)}
                            >Someone else</Button><br/>
                            </Container>
                        </Card>
                    </Container>
		    </div>
        )
    }
}
export default Checker;
