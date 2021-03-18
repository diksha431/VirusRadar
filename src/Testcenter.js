import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Card, CardContent } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Haryana from './Haryana';
import Mp from './Mp';
import Up from './Up';
import Uttar from './Uttar';
import Karnataka from './Karnataka';
import Andra from './Andra';
import Chandigarh from './Chandigarh';
import Bihar from './Bihar';
import Puducherry from './Puducherry';
import Arunachal from './Arunachal';
import { AppBar, Toolbar, List, ListItem, withStyles, Grid, SwipeableDrawer} from '@material-ui/core';
import { Redirect } from 'react-router-dom';

class Testcenter extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("registration")
        let isLoggedIn = true
        if (token == null) {
            isLoggedIn = false
        }
        this.state = {
            isLoggedIn
        }
        this.state = { visible: false, visible1: false, visible2: false, visible3: false, visible4: false, visible5: false,
        visible6: false, visible7: false, visible8: false, visible9: false}
        this.state = { drawerActivate: false, drawer: false, visible: false, visible1: false };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
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
            <AppBar style={{backgroundColor:"black"}}> 
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

    haryana = () => {
        //alert("hi1")
        this.setState({ visible: true, visible1: false, visible2: false, visible3: false, visible4: false, visible5: false,
            visible6: false, visible7: false, visible8: false, visible9: false })
    }
    mp = () => {
        this.setState({ visible: false, visible1: true, visible2: false, visible3: false, visible4: false, visible5: false,
            visible6: false, visible7: false, visible8: false, visible9: false })
    }
    up = () => {
        this.setState({ visible: false, visible1: false, visible2: true, visible3: false, visible4: false, visible5: false,
            visible6: false, visible7: false, visible8: false, visible9: false })
    }
    chan = () => {
        this.setState({ visible: false, visible1: false, visible2: false, visible3: true, visible4: false, visible5: false,
            visible6: false, visible7: false, visible8: false, visible9: false })
    }
    kar = () => {
        this.setState({ visible: false, visible1: false, visible2: false, visible3: false, visible4: true, visible5: false,
            visible6: false, visible7: false, visible8: false, visible9: false })
    }
    uttar = () => {
        this.setState({ visible: false, visible1: false, visible2: false, visible3: false, visible4: false, visible5: true,
            visible6: false, visible7: false, visible8: false, visible9: false })
    }
    andra = () => {
        this.setState({ visible: false, visible1: false, visible2: false, visible3: false, visible4: false, visible5: false,
            visible6: true, visible7: false, visible8: false, visible9: false })
    }
    bihar = () => {
        this.setState({ visible: false, visible1: false, visible2: false, visible3: false, visible4: false, visible5: false,
            visible6: false, visible7: true, visible8: false, visible9: false })
    }
    pudu = () => {
        this.setState({ visible: false, visible1: false, visible2: false, visible3: false, visible5: false,
            visible6: false, visible7: false, visible8: true, visible9: false })
    }
    arunachal = () => {
        this.setState({ visible: false, visible1: false, visible2: false, visible3: false, visible5: false,
            visible6: false, visible7: false, visible8: false, visible9: true })
    }


    render() {
        if (this.state.isLoggedIn == false) {
            return <Redirect to='/Login'></Redirect>
        }
        return (
            <div>
            {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
                
            <Typography component="div" style={{ height: "182em", width: "100%", backgroundColor: "#eeeff1", paddingTop: "1.5em" }}>
                <Container component="main" maxWidth="md">
                    <Typography variant="h6" gutterBottom style={{fontSize: "1.7rem",marginTop:"2em"}}>Test Centres</Typography>
                    <table>
                        <tr>
                            <td>
                                <Grid container>
                                    <Grid item>
                                        <Card className="hptest">
                                            <CardContent>
                                                <div>
                                                    <Typography variant="p" className="test1" style={{ width: "100vh" }} gutterBottom>Haryana</Typography>
                                                </div>
                                                <div className="test3"><ArrowForwardIosIcon onClick={this.haryana.bind(this)}
                                                /> </div>

                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" style={{ width: "100vh" }} gutterBottom>Madhya Pradesh </Typography>
                                                <div className="test3"><ArrowForwardIosIcon onClick={this.mp.bind(this)}
                                                /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" style={{ width: "50vh" }} gutterBottom>Uttar Pradesh</Typography>
                                                <div className="test3"><ArrowForwardIosIcon onClick={this.up.bind(this)}
                                                /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" style={{ width: "50vh" }} gutterBottom>Chandigarh</Typography>
                                                <div className="test3"><ArrowForwardIosIcon onClick={this.chan.bind(this)}
                                                /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Daman and Diu</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Karnataka</Typography>
                                                <div className="test3"><ArrowForwardIosIcon onClick={this.kar.bind(this)}/> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Uttarakhand</Typography>
                                                <div className="test3"><ArrowForwardIosIcon onClick={this.uttar.bind(this)}
                                                /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Andhra Pradesh</Typography>
                                                <div className="test3"><ArrowForwardIosIcon onClick={this.andra.bind(this)}
                                                /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Bihar</Typography>
                                                <div className="test3"><ArrowForwardIosIcon onClick={this.bihar.bind(this)}
                                                /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Puducherry</Typography>
                                                <div className="test3"><ArrowForwardIosIcon onClick={this.pudu.bind(this)}
                                                /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Arunachal Pradesh</Typography>
                                                <div className="test3"><ArrowForwardIosIcon onClick={this.arunachal.bind(this)}
                                                /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Gujarat</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Jharkhand</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Chhattisgarh</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Tamil Nadu</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>West Bengal</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Kerala</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Maharashtra</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Telangana</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Dadra and Nagar Haveli</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Mizoram</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Tripura</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Meghalaya</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography className="tset1" gutterBottom>Sikkim</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Punjab</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Rajasthan</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Himachal Pradesh</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Delhi</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Manipur</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Lakshadweep</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Jammu and Kashmir</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Nagaland</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Odisha</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Assam</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <Card className="hptest">
                                            <CardContent>
                                                <Typography variant="p" className="test1" gutterBottom>Andaman and Nicobar Islands</Typography>
                                                <div className="test3"><ArrowForwardIosIcon /> </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </td>
                            <td>
                                <Grid>
                                    {this.state.visible ? <Haryana /> : null}
                                    {this.state.visible1 ? <Mp /> : null}
                                    {this.state.visible2 ? <Up /> : null}
                                    {this.state.visible3 ? <Chandigarh /> : null}
                                    {this.state.visible4 ? <Karnataka /> : null}
                                    {this.state.visible5 ? <Uttar /> : null}
                                    {this.state.visible6 ? <Andra /> : null}
                                    {this.state.visible7 ? <Bihar /> : null}
                                    {this.state.visible8 ? <Puducherry /> : null}
                                    {this.state.visible9 ? <Arunachal /> : null}
                                
                                </Grid>
                            </td>
                        </tr>
                    </table>
                </Container>
            </Typography>
        </div>)
    }
}
export default Testcenter;
