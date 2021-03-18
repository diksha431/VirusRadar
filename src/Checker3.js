import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Card } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import Axios from 'axios';

class Checker3 extends Component {
    constructor() {
        super();
        this.state = {
            no: "",
            asthma: "",
            cancer: "",
            copd: "",
            diabetes: "",
            hyper: "",
            heart: ""
        }
    }
    handelChange1 = (e) => {
            if(e.target.checked){
            this.state.no = e.target.value;
            console.log(this.state.no)
            }
            else{
                this.state.no="";
            }
        }
    handelChange2 = (e) => {
        if(e.target.checked){
        this.state.asthma = e.target.value;
        console.log(this.state.asthma)
        }
        else
        {
            this.state.asthma="";
        }
    }
    handelChange3 = (e) => {
        if(e.target.checked){
        this.state.cancer = e.target.value;
        console.log(this.state.cancer)}
        else{
            this.state.cancer="";
        }
    }
    handelChange4 = (e) => {
        if(e.target.checked){
        this.state.copd = e.target.value;
        console.log(this.state.copd)}
        else{
            this.state.copd="";
        }
    }
    handelChange5 = (e) => {
        if(e.target.checked){
        this.state.diabetes = e.target.value;
        console.log(this.state.diabetes)}
        else{
            this.state.diabetes="";
        }
    }
    handelChange6 = (e) => {
        if(e.target.checked){
        this.state.hyper = e.target.value;
        console.log(this.state.hyper)
        }
        else{
            this.state.hyper="";
        }
    }
    handelChange7 = (e) => {
        if(e.target.checked){
        this.state.heart = e.target.value;
        console.log(this.state.heart)
        }
        else{
            this.state.heart="";
        }
    }

    Redirect(ev) {
        //console.warn(this.state)
        const no = this.state.no
        const asthma = this.state.asthma
        const cancer = this.state.cancer
        const copd = this.state.copd
        const diabetes = this.state.diabetes
        const hyper = this.state.hyper
        const heart = this.state.heart
        /* const data = { no, asthma, cancer, copd, diabetes, hyper, heart }
        console.log(data)
        Axios.get('http://localhost:9090/examples/condition.jsp', { params: data }).then(response => {

            console.log(response);
            this.setState({ message: response.data.response })
        }).catch(err => {
            console.log(err + " failed");
        })
        
         */
        var s8="";
        if(no!=""){
            s8 = s8 + no+",";
            }
          if(asthma!=""){
            s8 = s8 + asthma+",";
            }
          if(cancer!=""){
            s8 = s8 + cancer+",";
            }
          if(copd!=""){
              
            s8 = s8 + copd+",";
            }
          if(diabetes!=""){
            s8 = s8 + diabetes+",";
            }
          if(hyper!=""){
            s8 = s8 + hyper+",";
            }
          if(heart!=""){
            s8 = s8 + heart;
            }        
         localStorage.setItem("s8",s8)
        window.location = "Checker4";
    }


    render() {
        return (
            <div style={{ backgroundColor: "#eeeff1", height: "100vh", width: "100%", backgroundImage: "url('covid23.jpg')", backgroundSize: "cover" }}>
                <div style={{ backgroundColor: "eeeff1", height: "10vh", width: "100%" }}>  </div>
                <Container maxWidth="xs" >
                    <Typography variant="h5" style={{ color: "aliceblue" }}>Symptom Checker</Typography>
                    <Typography variant="p" style={{ fontSize: "0.9rem", color: "aliceblue" }}>Please answer the question to the best of your knowledge</Typography>
                    <Card style={{ marginTop: "1em" }}>
                        <Container maxWidth="xs" style={{ backgroundColor: "white" }}>
                            <Typography variant="h6" gutterBottom style={{ fontSize: "1.2em", marginTop: "1em" }}>Do you currently have any of these health conditions?</Typography>

                            <Checkbox color="primary" value="No existing conditions"
                                onClick={this.handelChange1.bind(this)}
                                inputProps={{ 'aria-label': 'secondary checkbox' }} />No existing conditions<br />

                            <Checkbox color="primary" value="Asthma"
                                onClick={this.handelChange2.bind(this)}
                                inputProps={{ 'aria-label': 'secondary checkbox' }} />Asthma<br />

                            <Checkbox color="primary" value="Cancer"
                                onClick={this.handelChange3.bind(this)}
                                inputProps={{ 'aria-label': 'secondary checkbox' }} />Cancer<br />


                            <Checkbox color="primary" value="Chronic lung disease (COPD)"
                                onClick={this.handelChange4.bind(this)}
                                inputProps={{ 'aria-label': 'secondary checkbox' }} />Chronic lung disease (COPD)<br />

                            <Checkbox color="primary" value="Diabetes"
                                onClick={this.handelChange5.bind(this)}
                                inputProps={{ 'aria-label': 'secondary checkbox' }} />Diabetes<br />

                            <Checkbox color="primary" value="Hypertension"
                                onClick={this.handelChange6.bind(this)}
                                inputProps={{ 'aria-label': 'secondary checkbox' }} />Hypertension<br />

                            <Checkbox color="primary" value="Heart Disease"
                                onClick={this.handelChange7.bind(this)}
                                inputProps={{ 'aria-label': 'secondary checkbox' }} />Heart Disease<br />

                            <Button variant="contained" color="primary" style={{ marginTop: "1em", marginBottom: "2em" }}
                                onClick={this.Redirect.bind(this)}
                            >Next</Button>

                        </Container>
                    </Card>
                </Container>
            </div>
        )
    }
}
export default Checker3;