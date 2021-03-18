import React,{ Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import { Card } from "@material-ui/core";

class Guard extends Component
{
    constructor()
    {
        super();
        this.state={
            id:"",
            temp:""    
        }
    }
    fun=(e)=>
    {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value })
             console.log(this.state, "formField")
    }
    blank=()=>
    {
        this.setState({
            id:"  ",
            temp:"  " 
        })
    }
    sendData(ev)
    {
        const id=this.state.id
        const temp=this.state.temp
        const data={id,temp}
        Axios.get('http://localhost:9090/examples/temp.jsp',{params:data}).then(response=>{console.log(response);
        this.setState({message:response.data.response})
        this.blank()
        }).catch(err=>{
            console.log("Failed");
        })
    }
    logout=()=>
    {
        localStorage.clear()
        window.location = "LoginG";
    }
    
    render()
    {
        return( 
            <div style={{height: "37.33em", width: "77.6em", backgroundImage: "url('covid23.jpg')", backgroundSize: "cover"}}>
                <div style={{height: "4em", width: "77.5em" }}> 
                    <div style={{height: "4em", width: "10em", marginLeft:"67em"}}> 
                        <Button variant="outlined" style={{marginTop:"1em",color:"aliceblue",borderColor:"aliceblue"}}
                            onClick={this.logout}
                        >LogOut </Button>
                    </div>
                </div>
                <Container maxWidth="xs" >
                    <Typography variant="h4" style={{ color: "aliceblue",marginTop:"1em"}}>Temperature Measuring</Typography>
                    <Card style={{ marginTop: "2em" }}>
                        <Container maxWidth="xs" style={{ backgroundColor: "white" }}>
                            <Grid container >
                                <Grid item xs={12} >
                                    <Typography variant="h6" gutterBottom style={{ fontSize: "1.2em", marginTop: "1em" }}>Enter Temperature</Typography>
                                    <TextField id="outlined-basic" name="days" variant="outlined" 
                                    onChange={this.fun.bind(this)}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography variant="h6" gutterBottom style={{ fontSize: "1.2em", marginTop: "1em" }}>Enter User ID</Typography>
                                    <TextField id="outlined-basic" name="id" variant="outlined" 
                                    onChange={this.fun.bind(this)}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <Button variant="contained" color="primary" style={{ marginTop: "1em", marginBottom: "2em" }}
                                    onClick={this.sendData.bind(this)}
                                    >submit</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Card>
                </Container>
            </div>

        )
    }
}
export default Guard;