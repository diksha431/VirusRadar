import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Card} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';

class Checker2 extends Component
{
    constructor()
    {
        super();
        this.state={
            age:"",
            isEnter: false
        }
        this.changeFields = this.changeFields.bind(this)
    }
    Next=()=>
    {
        if(this.state.age){
            this.setState({isEnter:true})
            window.location = "Checker3";
        }
        else{
            alert("Please enter the required field")
        }
    }
    changeFields=(e)=>
    {
        this.setState({
        ...this.state,
        [e.target.name]: e.target.value
        })
        console.log(this.state,"formfield")
    }
    sendData(ev)
    {
        //alert("hi1")
        const age=this.state.age
        /* const data={age}
        Axios.get('http://localhost:9090/examples/age.jsp',{params:data}).then(response=>{console.log(response);
        this.setState({message:response.data.response})
        }).catch(err=>{
            console.log("Failed");
        })
         */localStorage.setItem("age",age)
        this.Next()
        
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
                            <Typography variant="h6"  gutterBottom style={{fontSize:"1.2em",marginTop:"1em"}}>Please enter your age in years.</Typography>
                            <TextField id="outlined-basic" name="age" variant="outlined" style={{marginTop:"1.5em"}}
                                onChange={this.changeFields}
                            /><br/>
                            <Button variant="contained" color="primary" value="age" style={{marginTop:"1em",marginBottom:"2em"}}
                                onClick={this.sendData.bind(this)}
                                //onClick={this.Next}
                            >Next</Button>

                            </Container>
                        </Card>
                    </Container>
		    </div>
        )
    }
}
export default Checker2;
