import React,{Component} from "react";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Redirect } from 'react-router-dom';
import { AppBar, Toolbar, List, ListItem, withStyles, Grid, SwipeableDrawer} from '@material-ui/core';

class HomePage extends Component
{
    constructor(props) {
        super(props)
        const token = localStorage.getItem("registration")
        /* const email=localStorage.getItem("Email_id") */

        let isLoggedIn = true
        if (token == null) {
            isLoggedIn = false
        }
        
        this.state = { drawerActivate: false, drawer: false, visible: false, visible1: false ,isLoggedIn};
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

                            <Typography color="inherit" variant="headline">VirusRadar </Typography>

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
            <AppBar style={{backgroundColor:"darkmagenta"}}> 
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
            
        
             if (this.state.isLoggedIn==false) {
               
                return <Redirect to='/login'></Redirect>
            }
            return (
            <div>  
                {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
                  
            <div id="root">
                <div >
                   
                </div>
                    <div className ="jss187" style={{backgroundImage:"url('covid20.jpg')"}}>
                        <div className="jss190">
                            <div className="jss294">
                                <div className="jss2">
                                <h2 className="jss6">
                                     </h2>
                                </div>
                            </div>
                        </div> 
                                             
                    </div>

                    <div className="jss5 jss6">
                        <div className="jss295">

                        <div style={{flex:1}}>
                             < Container  maxWidth="md">

          <Grid container>
            <Grid item >
                <Card className="root21" style={{cursor:"alias"}}>
                     <CardActionArea style={{cursor:"default"}}>
                      <CardMedia className="media25" image="p4.png" style={{backgroundSize:"contain"}}  alt="hello"
                           title="Symtoms Checker" />
                      <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">Symtoms checker </Typography>
                             <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify"}}>
                             It contains a number of questions related to one's health and travel history, on the basis of the answers they will get to know whether they are at high risk or low risk regarding coivd-19.
                             </Typography>
                        </CardContent>
                      </CardActionArea>
                  </Card>
        
              </Grid>

            <Grid>
                                                  
                <Card className="root21" >
                  <CardActionArea style={{cursor:"default"}}>
                            <CardMedia className="media25" image="p5.jpg"  alt="hello"
                                    title="Stats" />
                    <CardContent>
                <Typography gutterBottom variant="h5" component="h2">Stats</Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify"}}>
                It shows the details of all the people in any school, college, companies any public places including their temperature, person with high temperature will be marked as active cases.</Typography>
              </CardContent>
           </CardActionArea>
          </Card>
           </Grid>
          
            <Grid>
                <Card className="root21" >
            <CardActionArea style={{cursor:"default"}}>
             <CardMedia className="media25" image="p2.jpg"  alt="hello"
                        title="Test Centre" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">Test Centre</Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify"}}>
                It will show all the available test centers and hospitals in every state with their address.</Typography>
              </CardContent>
           </CardActionArea>
          </Card>
      
           </Grid>
        </Grid>
          </Container>
          </div>
          <div style={{marginBottom:"6vh"}}>
           < Container  maxWidth="md">

          <Grid container>
            <Grid item >
                <Card className="root21">
                     <CardActionArea style={{cursor:"default"}}>
                      <CardMedia className="media25" image="p3.jpg"  alt="hello"
                           title="Safety Measure" />
                      <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">Safety Measure</Typography>
                             <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify"}}>
                            It provides guidelines on how to stay safe against this corona virus, precautions that should be taken to protect oneself from covid-19</Typography>
                        </CardContent>
                      </CardActionArea>
                  </Card>
        
              </Grid>

            <Grid>
                                                  
                <Card className="root21" >
                  <CardActionArea style={{cursor:"default"}}>
                            <CardMedia className="media25" image="p1.png"  alt="hello"
                                    title="Stats" />
                    <CardContent>
                <Typography gutterBottom variant="h5" component="h2">Helpline Number</Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify"}}>
                It shows the helpline numbers of each state in India.</Typography>
              </CardContent>
           </CardActionArea>
          </Card>
           </Grid>
          
            <Grid>
                <Card className="root21" >
            <CardActionArea style={{cursor:"default"}}>
             <CardMedia className="media25" image="m6.jpg" style={{backgroundSize:"contain"}}  alt="hello" 
                        title="Helpline Number" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" >Leave</Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify"}}>
                If any employee want to take a leave on the basis of their health condition then they can apply for it, they have to grant the permission for it.</Typography>
              </CardContent>
           </CardActionArea>
          </Card>
      
           </Grid>
        </Grid>
          </Container>
          </div></div>
          </div></div>
    </div>)

    }

}
export default HomePage;