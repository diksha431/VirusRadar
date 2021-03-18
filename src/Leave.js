import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Card, Grid } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import { AppBar, Toolbar, List, ListItem, withStyles, SwipeableDrawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class Leave extends Component {
    constructor()
    {
        super();
        this.state={
            days:"",
            id:"",
            isEnter: false
        }
        this.changeFields = this.changeFields.bind(this)
        this.state = { drawerActivate: false, drawer: false, visible: false, visible1: false };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }
    Next=()=>
    {
        if(this.state.days && this.state.id){
            this.setState({isEnter:true})
            alert("success")
            //window.location = "Checker3";
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
    blank=()=>
    {
        this.setState({
            days:"  ",
            id:"  " 
        })
    }
    sendData(ev)
    {
        const days=this.state.days
        const id=this.state.id
        const data={days,id}
        Axios.get('http://localhost:9090/examples/leave.jsp',{params:data}).then(response=>{console.log(response);
        this.setState({message:response.data.response})
        }).catch(err=>{
            console.log("Failed");
        })
        this.blank()
        //this.Next()
    } 
    handleInput(e1) {

        this.setState({ visible1: false, visible: true })
    }
    handleInput1(e1) {

        this.setState({ visible: false, visible1: true })
    }

    componentWillMount() {
        if (window.innerWidth <= 600) {
            this.setState({ drawerActivate: true });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                this.setState({ drawerActivate: true });
            }
            else {
                this.setState({ drawerActivate: false })
            }
        });
    }

    Symptom=()=>
    {
        window.location = "Checker";
    }
    Stat=()=>
    {
        window.location = "Stats";
    }
    Test=()=>
    {
        window.location = "Testcenter";
    }
    Measure=()=>
    {
        window.location = "Safety";
    }
    Number=()=>
    {
        window.location = "Helpline";
    }
    Leave=()=>
    {
        window.location = "Leave";
    }
    logout=()=>
    {
        localStorage.clear()
        window.location = "Login";
    }
     //Small Screens
     createDrawer() {
        return (
            <div >
                <AppBar >
                    <Toolbar>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <MenuIcon
                                className={this.props.classes.sideBarIcon}
                                onClick={() => { this.setState({ drawer: true }) }} />

                            <Typography color="inherit" variant="headline">VirusRadar</Typography>

                            <Typography color="inherit" variant="headline"></Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    open={this.state.drawer}
                    onClose={() => { this.setState({ drawer: false }) }}
                    onOpen={() => { this.setState({ drawer: true }) }}>

                    <div 
                        tabIndex={0}
                        role="button"
                        onClick={() => { this.setState({ drawer: false }) }}
                        onKeyDown={() => { this.setState({ drawer: false }) }}>

                        <List className={this.props.classes.list}>
                            <ListItem key={1} button divider>Symtoms Checker</ListItem>
                            <ListItem key={2} button divider> Stats</ListItem>
                            <ListItem key={3} button divider> Test Centre</ListItem>
                            <ListItem key={1} button divider>Safety measure</ListItem>
                            <ListItem key={2} button divider> HelpLine Number</ListItem>
                            <ListItem key={2} button divider> Leave</ListItem>
                            <ListItem key={3} button divider>Logout</ListItem>
                            {/* <NavLink to="/checker3" >Checker 3</NavLink>
                            <NavLink to="/checker1" > checker 2</NavLink> */}
                        </List>

                    </div>
                </SwipeableDrawer>

            </div>
        );
    }
    //Larger Screens
    destroyDrawer() {
        const { classes } = this.props
        return (
            <AppBar style={{backgroundColor:"lightslategray"}}> 
                <Toolbar>
                    <Typography variant="headline" style={{flexGrow: 1,fontSize:"2em",fontWeight:"bold"}} color="inherit" >VirusRadar</Typography>
                    <div >
                        <ul style={{ marginTop: -2 }} className="hello " >
                            <li className="jss102 "> <Button color="inherit" 
                            onClick={this.Symptom} >Symtoms Checker</Button></li>
                            <li className="jss102"><Button color="inherit"
                            onClick={this.Stat} >Stats</Button></li>
                            <li className="jss102"><Button color="inherit"
                            onClick={this.Test} >Test Centre</Button></li>
                            <li className="jss102"><Button color="inherit"
                            onClick={this.Measure} >Safety measure</Button></li>
                            <li className="jss102"><Button color="inherit"
                            onClick={this.Number} >HelpLine Number</Button></li>
                            <li className="jss102"><Button color="inherit"
                            onClick={this.Leave} >Leave</Button></li>
                            <li className="jss102"><Button color="inherit" 
                            onClick={this.logout}>Logout</Button></li>
                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }

    render() {
        return (
            <div style={{ backgroundColor: "#eeeff1", height: "100vh", width: "100%", backgroundImage: "url('covid23.jpg')", backgroundSize: "cover" }}>
                <div style={{ backgroundColor: "eeeff1", height: "10vh", width: "100%" }}> 
                    {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()} 
                </div>
                <Container maxWidth="xs" >
                    <Typography variant="h4" style={{ color: "aliceblue",marginTop:"1em"}}>Apply for leave</Typography>
                    <Card style={{ marginTop: "2em" }}>
                        <Container maxWidth="xs" style={{ backgroundColor: "white" }}>
                            <Grid container >
                                <Grid item xs={12} >
                                    <Typography variant="h6" gutterBottom style={{ fontSize: "1.2em", marginTop: "1em" }}>How many days?</Typography>
                                    <TextField id="outlined-basic" name="days" variant="outlined" 
                                    onChange={this.changeFields.bind(this)}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography variant="h6" gutterBottom style={{ fontSize: "1.2em", marginTop: "1em" }}>Enter your ID.</Typography>
                                    <TextField id="outlined-basic" name="id" variant="outlined" 
                                    onChange={this.changeFields.bind(this)}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <Button variant="contained" color="primary" style={{ marginTop: "1em", marginBottom: "2em" }}
                                    onClick={this.sendData.bind(this)}
                                    >Apply</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Card>
                </Container>
            </div>
        )
    }
}
export default Leave;
