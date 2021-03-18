import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Card} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import Axios from 'axios';

class Checker9 extends Component
{
    constructor()
    {
        super();
        this.state={
            none:"",
            fever:"",
            cough:"",
            breath:"",
            throat:"",
            voice:"",
            headache:"",
            nose:""
        }
    }
    handelChange1=(e)=>
    {
        if(e.target.checked){
        this.state.none = e.target.value;
        console.log(this.state.none)
        }
        else{
            this.state.none="";
        }
    }
    handelChange2=(e)=>
    {
        if(e.target.checked){
        this.state.fever = e.target.value;
        console.log(this.state.fever)
        }
        else{
            this.state.fever="";
        }
    }
    handelChange3=(e)=>
    {
        if(e.target.checked){
        this.state.cough = e.target.value;
        console.log(this.state.cough)
        }
        else{
            this.state.cough="";
        }
    }
    handelChange4=(e)=>
    {
        if(e.target.checked){
        this.state.breath = e.target.value;
        console.log(this.state.breath)
        }
        else{
            this.state.breath="";
        }
    }
    handelChange5=(e)=>
    {
        if(e.target.checked){
        this.state.throat = e.target.value;
        console.log(this.state.throat)
        }
        else{
            this.state.throat="";
        }
    }
    handelChange6=(e)=>
    {
        if(e.target.checked){
        this.state.voice = e.target.value;
        console.log(this.state.voice)
        }
        else{
            this.state.voice="";
        }
    }
    handelChange7=(e)=>
    {
        if(e.target.checked){
        this.state.headache = e.target.value;
        console.log(this.state.headache)
        }
        else{
            this.state.headache="";
        }
    }
    handelChange8=(e)=>
    {
        if(e.target.checked){
        this.state.nose = e.target.value;
        console.log(this.state.nose)
        }
        else{
            this.state.nose="";
        }
    }
    
    Redirect(ev)
    {
        //console.warn(this.state)
        const none=this.state.none
        const fever=this.state.fever
        const cough=this.state.cough
        const breath=this.state.breath
        const throat=this.state.throat
        const voice=this.state.voice
        const headache=this.state.headache
        const nose=this.state.nose
        //const id=this.state.id
        /* const data={none,fever,cough,breath,throat,voice,headache,nose}
        console.log(data)
        Axios.get('http://localhost:9090/examples/symp.jsp',{params:data}).then(response=>{console.log(response);
        this.setState({message:response.data.response})
        }).catch(err=>{
            console.log("Failed");
        })
         */
        var s9="";
        if(none!=""){
            s9 = s9 + none+",";
            }
          if(fever!=""){
            s9 = s9 + fever+",";
            }
          if(cough!=""){
            s9 = s9 + cough+",";
            }
          if(breath!=""){
            s9 = s9 + breath+",";
            }
          if(throat!=""){
            s9 = s9 + throat+",";
            }
          if(voice!=""){
            s9 = s9 + voice+",";
            }
        if(headache!=""){
            s9 = s9 + headache+",";
            } 
        if(nose!=""){
            s9 = s9 + nose;
            }        
        localStorage.setItem("s9",s9)
        this.sendData()
        this.check()
        localStorage.removeItem("person1")
        localStorage.removeItem("gender")
        localStorage.removeItem("age")
        localStorage.removeItem("s8")
        localStorage.removeItem("preg")
        localStorage.removeItem("lab")
        localStorage.removeItem("gather")
        localStorage.removeItem("essen")
        localStorage.removeItem("service")
        localStorage.removeItem("s9")
        //localStorage.clear()
        window.location = "Checker10";
    }
    sendData=()=>{
        const t1 = localStorage.getItem("person1")
        const t2 = localStorage.getItem("gender")
        const t3 = localStorage.getItem("age")
        const t4 = localStorage.getItem("s8")
        const t5 = localStorage.getItem("preg")
        const t6 = localStorage.getItem("lab")
        const t7 = localStorage.getItem("gather")
        const t8 = localStorage.getItem("essen")
        const t9 = localStorage.getItem("service")
        const t10 = localStorage.getItem("s9")
        const id = localStorage.getItem("UserId")
        const data={t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,id}
        Axios.get('http://localhost:9090/examples/symp.jsp',{params:data}).then(response=>{console.log(response);
        this.setState({message:response.data.response})
        alert("hi1")
        }).catch(err=>{
            alert(err)
            console.log("Failed");
        })    
    }
    check=()=>{
        const t1 = localStorage.getItem("person1")
        const t2 = localStorage.getItem("gender")
        const t3 = localStorage.getItem("age")
        const t4 = localStorage.getItem("s8")
        const t5 = localStorage.getItem("preg")
        const t6 = localStorage.getItem("lab")
        const t7 = localStorage.getItem("gather")
        const t8 = localStorage.getItem("essen")
        const t9 = localStorage.getItem("service")
        const t10 = localStorage.getItem("s9")
        if ((t4=="No existing conditions,") && (t5=="No") && (t6=="No") && (t7=="No") && (t8=="No") && (t9=="No") && (t10=="None,"))
        {
            localStorage.setItem("Risk","No risk")
        }
        else if(t4=="Hypertension," && t5=="No" && t6=="No" && t7=="No" && t8=="No" && t8=="No" && (t9=="Fever," || t9=="Dry cough," || t9=="Running nose,"))
        {
            localStorage.setItem("Risk","Medium Risk")
        }
        else if (t4=="Heart Disease")
        {
            localStorage.setItem("Risk","High Risk")
        }else { alert("hi10")}
    }
    render()
    {
        return(
            <div style={{height:"108vh",width:"100%",backgroundImage:"url('covid23.jpg')",backgroundSize:"cover"}}>
                <div style={{backgroundColor: "eeeff1",height:"10vh",width:"100%"}}>  </div>    
                    <Container maxWidth="xs" >
                        <Typography variant="h5" style={{color:"aliceblue"}}>Symptom Checker</Typography>
                        <Typography variant="p" style={{fontSize:"0.9rem",color:"aliceblue"}}>Please answer the question to the best of your knowledge</Typography>
                        <Card style={{marginTop:"1em"}}>
                            <Container maxWidth="xs" style={{backgroundColor: "white"}}>
                            <Typography variant="h6"  gutterBottom style={{fontSize:"1.2em",marginTop:"1em"}}>Are you having one or more of the following symptoms?</Typography>
                            
                            <Checkbox color="primary" value="None"
                                onClick={this.handelChange1.bind(this)}
                             inputProps={{ 'aria-label': 'secondary checkbox'}}/>None<br/>

                            <Checkbox color="primary" value="Fever"
                                onClick={this.handelChange2.bind(this)}
                             inputProps={{ 'aria-label': 'secondary checkbox'}}/>Fever<br/>

                            <Checkbox color="primary" value="Dry cough"
                                onClick={this.handelChange3.bind(this)}
                             inputProps={{ 'aria-label': 'secondary checkbox'}}/>Dry cough<br/>

                            <Checkbox color="primary" value="Feeling shortness of breath"
                                onClick={this.handelChange4.bind(this)}
                             inputProps={{ 'aria-label': 'secondary checkbox'}}/>Feeling shortness of breath<br/>
                            
                            <Checkbox color="primary"  value="Sore throat"
                                onClick={this.handelChange5.bind(this)}
                            inputProps={{ 'aria-label': 'secondary checkbox'}}/>Sore throat<br/>

                            <Checkbox color="primary" value="Hoarseness in voice"
                                onClick={this.handelChange6.bind(this)}
                             inputProps={{ 'aria-label': 'secondary checkbox'}}/>Hoarseness in voice<br/>
                            
                            <Checkbox color="primary" value="Headache"
                                onClick={this.handelChange7.bind(this)}
                             inputProps={{ 'aria-label': 'secondary checkbox'}}/>Headache<br/>
                            
                            <Checkbox color="primary" value="Running nose"
                                onClick={this.handelChange8.bind(this)}
                             inputProps={{ 'aria-label': 'secondary checkbox'}}/>Running nose<br/>
                            
                            <Button variant="contained" color="primary" style={{marginTop:"1em",marginBottom:"2em"}}
                                onClick={this.Redirect.bind(this)}
                            >Next</Button>
                            </Container>
                        </Card>
                    </Container>
		    </div>
        )
    }
}
export default Checker9;
