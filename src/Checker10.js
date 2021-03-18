import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Card} from "@material-ui/core";
import Axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';

class Checker10 extends Component
{
    constructor(props)
    {
        super(props);
        var x=localStorage.getItem("Risk")
        this.state={
            progress: false,
            low:false,
            med:false,
            high:false,
            Dataitem:[]
        }
    }
    componentDidMount()
    { 
        //alert(this.x+" "+window.localStorage.getItem("Risk")+"hello")
        var token = localStorage.getItem("Risk");
        alert(token)
        if(token=="No risk")
        {
            this.setState({low: true})
        }
        if(token=="Medium Risk")
        {
            this.setState({med: true})
        }
        if(token=="High Risk")
        {
            this.setState({high: true})
        }else{
            alert("hi")
        }
        const user = localStorage.getItem("UserId")
        const data={user}
        this.setState({ progress: true })
        Axios.get('http://localhost:9090/examples/response.jsp',{params:data}).then(response=>
        {
        console.log(response.data);
        this.setState({progress: false,
        Dataitem:response.data})
        }).catch(err=>{
            this.setState({progress: false})
            alert(err)
            console.log("Failed");
        })
    }
    Redirect=()=>
    {
        window.location = "HomePage";
    }
    render()
    {
        var{isLoaded,Dataitem}=this.state;
        
        return(
            <div style={{height:"130vh",width:"100%",backgroundImage:"url('covid23.jpg')",backgroundSize:"cover"}}>
                <div style={{backgroundColor: "eeeff1",height:"13vh",width:"100%"}}> 
                {this.state.progress ? <div>
                            <LinearProgress color="secondary" />
                        </div> : null} </div>  
                <div style={{backgroundColor: "eeeff1",height:"65vh",width:"50%"}}>  
                    <Container maxWidth="xs" style={{backgroundColor: "eeeff1"}} >
                        <Typography variant="h6" style={{color:"aliceblue"}}>Symptom Checker</Typography>
                        <Card style={{marginTop:"1em",backgroundColor:"#dfe8dd"}}>
                            <Typography variant="h6" style={{marginBottom:"2.5em",marginTop:"1em",marginLeft:"1em"}}>Risk of COVID-19* :
                                {this.state.low ? <div> <h4 style={{color:"green"}}> Low Risk</h4>
                                </div> : null}
                                {this.state.med ? <div> <h4 style={{color:"orange"}}> Medium Risk</h4>
                                </div> : null}
                                {this.state.high ? <div> <h4 style={{color:"red"}}> High Risk</h4>
                                </div> : null}
                            </Typography>
                        </Card>
                        <Typography variant="p" style={{fontSize:"0.75em",color:"aliceblue"}}>* This is based on current understanding of the disease which is subject to change. Please do consult the doctor and take their advice in case you are not feeling well.</Typography><br/>
                        <Button variant="contained" color="primary" style={{marginTop:"1em",width:"15em",backgroundColor:"cadetblue"}}
                            onClick={this.Redirect}
                        >Go back</Button>
                    </Container>
                </div>  
                <div style={{backgroundColor: "eeeff1",height:"65vh",width:"48%",marginLeft:"48%",marginTop:"-31.5%"}}>
                    <Container maxWidth="xs" style={{backgroundColor: "eeeff1"}} >
                        <Typography variant="h6" style={{color:"aliceblue"}}>Your responses</Typography>
                        <Typography variant="p" style={{color:"aliceblue"}}>For whom are you taking the test?
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.person}>
                                    {ag.person}
                                </div>
                            ))}
                        </Typography>
                        <Typography variant="p" style={{color:"aliceblue"}}>What is your gender?
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.gender}>
                                    {ag.gender}
                                </div>
                            ))}
                        </Typography>
                        <Typography variant="p" style={{color:"aliceblue"}}>Please enter your age in years.
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.age}>
                                    {ag.age}
                                </div>
                            ))}
                        </Typography>
                        <Typography variant="p" style={{color:"aliceblue"}}>Do you currently have any of these health conditions?
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.health}>
                                    {ag.health}
                                </div>
                            ))}
                        </Typography>
                        <Typography variant="p" style={{color:"aliceblue"}}>Are you pregnant?
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.pregnant}>
                                    {ag.pregnant}
                                </div>
                            ))}
                        </Typography>
                        <Typography variant="p" style={{color:"aliceblue"}}>Have you or someone in your family staying with you came in close contact with a laboratory confirmed COVID-19 patientce in the last 14 days?
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.laboratory}>
                                    {ag.laboratory}
                                </div>
                            ))}
                        </Typography>
                        <Typography variant="p" style={{color:"aliceblue"}}>Have you or someone in your family staying with you attended a large gathering/ in a migartion centre in the last 14 days?
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.gathering}>
                                    {ag.gathering}
                                </div>
                            ))}
                        </Typography>
                        <Typography variant="p" style={{color:"aliceblue"}}>Are you currently working for essential services in public exposedplaces (such as hospitals, retail outlets, delivery services)?
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.essential}>
                                    {ag.essential}
                                </div>
                            ))}
                        </Typography>
                        <Typography variant="p" style={{color:"aliceblue"}}>Is someone in your familystaying with you currently working for essential services in public exposedplaces (such as hospitals, retail outlets, delivery services)?
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.public}>
                                    {ag.public}
                                </div>
                            ))}
                        </Typography>
                        <Typography variant="p" style={{color:"aliceblue"}}>Are you having one or more of the following symptoms?
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.symptoms}>
                                    {ag.symptoms}
                                </div>
                            ))}
                        </Typography>
                        
                    </Container>
                </div>
            </div>  
            
        )}
}
export default Checker10;
