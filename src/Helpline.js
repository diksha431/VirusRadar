import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card, CardContent } from "@material-ui/core";
import { AppBar, Toolbar, List, ListItem, withStyles, Grid, SwipeableDrawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

class Helpline extends Component
{
    constructor(props) {
        super(props)
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

    render()
    {
        return(
            <div>
                {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
            <Typography component="div" style={{height:"295vh",backgroundColor: "#eeeff1" ,paddingTop:"1em"}}>
            <Container component="main" maxWidth="md">
            <Typography variant="h6" gutterBottom style={{fontSize:"1.7rem",marginTop:"3em"}}>Indian Helpline :</Typography>
            <Typography variant="h6" gutterBottom style={{fontSize:"0.9rem",color:"lightslategray",fontWeight:"bold",marginBottom:"1rem"}}>
            Indian Government And Ministery Of Health And Family Welfare Has Provided The Following Helpline Numbers Of States.
            </Typography>
            <Grid container>
                <Grid item  sm={4}>
                    <Card className="hp1"> 
                        <CardContent>
                            <Typography className="hp4" gutterBottom>National Helpline Number :</Typography>
                            <Typography variant="p" className="hp10">1075</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Central Helpline Number :</Typography>
                           <Typography variant="p" className="hp10">+91-11-23978043</Typography> 
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>MyGov WhatsApp Number :</Typography>
                            <Typography variant="p" className="hp10">+91-901315-51515</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Central Helpline E-mail :</Typography>
                            <Typography variant="p" className="hp10"> ncov2019@gmail.com</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Andhra Pradesh :</Typography>
                            <Typography variant="p" className="hp10">0866-2410978</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Arunachal Pradesh :</Typography>
                            <Typography variant="p" className="hp10">9436055743</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Assam :</Typography>
                            <Typography variant="p" className="hp10">6913347770</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Bihar :</Typography>
                            <Typography variant="p" className="hp10">104</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Chhattisgarh :</Typography>
                            <Typography variant="p" className="hp10">077122-35091</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Goa :</Typography>
                            <Typography variant="p" className="hp10">104</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Gujarat :</Typography>
                            <Typography variant="p" className="hp10">104</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Haryana :</Typography>
                            <Typography variant="p" className="hp10">8558893911</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Himachal Pradesh :</Typography>
                            <Typography variant="p" className="hp10">104</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Jharkhand :</Typography>
                            <Typography variant="p" className="hp10">104</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Karnataka :</Typography>
                            <Typography variant="p" className="hp10">077122-35091</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Kerala :</Typography>
                            <Typography variant="p" className="hp10">0471-2552056</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Madhya Pradesh :</Typography>
                            <Typography variant="p" className="hp10">0755-2527177</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Maharashtra :</Typography>
                            <Typography variant="p" className="hp10">020-26127394</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Manipur :</Typography>
                            <Typography>3852411668</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Meghalaya :</Typography>
                            <Typography variant="p" className="hp10">108</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Mizoram :</Typography>
                            <Typography variant="p" className="hp10">102</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Nagaland :</Typography>
                            <Typography variant="p" className="hp10">7005539653</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Odisha :</Typography>
                            <Typography variant="p" className="hp10">9439994895</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Punjab :</Typography>
                            <Typography variant="p" className="hp10">104</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Rajasthan :</Typography>
                            <Typography variant="p" className="hp10">0141-2225624</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Sikkim :</Typography>
                            <Typography variant="p" className="hp10">104</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Tamil Nadu :</Typography>
                            <Typography variant="p" className="hp10">044-29510500</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Telangana :</Typography>
                            <Typography variant="p" className="hp10">104</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Tripura :</Typography>
                            <Typography variant="p" className="hp10">0381-2315879</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Uttarakhand :</Typography>
                            <Typography variant="p" className="hp10">104</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Uttar Pradesh :</Typography>
                            <Typography variant="p" className="hp10">18001805145</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>West Bengal :</Typography>
                            <Typography variant="p" className="hp10">1800313444222</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Andaman and Nicobar Islands :</Typography>
                            <Typography variant="p" className="hp10">03192-232102</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Chandigarh :</Typography>
                            <Typography variant="p" className="hp10">9779558282</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1" style={{height:"6em"}}>
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Dadra and Nagar Haveli and Daman & Diu :</Typography>
                            <Typography variant="p" className="hp10">104</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Delhi :</Typography>
                            <Typography variant="p" className="hp10">011-22307145</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Jammu & Kashmir :</Typography>
                            <Typography variant="p" className="hp10">1912520982</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Ladakh :</Typography>
                            <Typography variant="p" className="hp10">1982256462</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Lakshadweep :</Typography>
                            <Typography variant="p" className="hp10">4896263742</Typography>
                            </CardContent>
                     </Card>
                </Grid>
                <Grid item sm={4}>
                    <Card className="hp1">
                        <CardContent>
                            <Typography className="hp4" gutterBottom>Puducherry :</Typography>
                            <Typography variant="p" className="hp10">104</Typography>
                            </CardContent>
                     </Card>
                </Grid>
            </Grid>
            </Container>
            </Typography>
        </div>);
    }
}
export default Helpline;