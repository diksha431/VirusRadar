import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar, Toolbar, Typography, List, ListItem,
    withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import Checker3 from './Checker3';
import Checker1 from './Checker1';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

import CardActionArea from '@material-ui/core/CardActionArea';

const styleSheet = {
    list: {
        width: 200,
    },
    padding: {
        paddingRight: 30,
        cursor: "pointer",
    },

    sideBarIcon: {
        padding: 0,
        color: "white",
        cursor: "pointer",
    }
}

class Example2 extends Component {
    constructor(props) {
        super(props);
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

                            <Typography color="inherit" variant="headline">Corona Health Detector APP </Typography>

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
                            <ListItem key={3} button divider>Signout</ListItem>
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
            <AppBar style={{backgroundColor:"red"}}> 
                <Toolbar>
                    <Typography variant="headline" style={{ flexGrow: 1 }} color="inherit" >Corona HD Detector APP</Typography>

                    {/* <button className={classes.padding} color ="inherit" variant="outlined"  onClick={this.handleInput1.bind(this)}>checker1</button>
          <button className={classes.padding} color ="inherit" variant="outlined"  onClick={this.handleInput.bind(this)}>checker3</button>  */}
                    {/* <NavLink to="/checker3" >Checker 3</NavLink>
          <NavLink to="/checker1" > checker 2</NavLink>
          <NavLink to="/stats" > stats 2</NavLink> */}
                    {/* <Typography variant = "subheading" className = {classes.padding} color="inherit" ></Typography> */}
                    {/* <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 2</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 3</Typography> */}
                    <div >
                        <ul style={{ marginTop: -2 }} className="hello ">
                            <li className="jss102 "> <Button color="inherit" >Symtoms Checker</Button></li>
                            <li className="jss102"><Button color="inherit">Stats</Button></li>
                            <li className="jss102"><Button color="inherit">Test Centre</Button></li>
                            <li className="jss102"><Button color="inherit">Safety measure</Button></li>
                            <li className="jss102"><Button color="inherit">HelpLine Number</Button></li>
                            <li className="jss102"><Button color="inherit" onclick={this.Signout}>Signout</Button></li>
                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }

    render() {
        return (
            <div>
                {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
                <div id="root">
                <div >
                   


                </div>
                <div className="jss187" style={{ backgroundImage: "url(" + "/corona.jpg" + ")" }}>
                    <div className="jss190">
                        <div className="jss294">
                            <div className="jss2">
                                <h1 className="jss6">
                                   Write here about your application </h1>
                                <h6>also here </h6>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="jss5 jss6">
                    <div className="jss295">

                        <div style={{ flex: 1 }}>
                            < Container maxWidth="md">

                                <Grid container>
                                    <Grid item >
                                        <Card className="root21">
                                            <CardActionArea>
                                                <CardMedia className="media25" image="/checker.jpg" style={{ backgroundSize: "contain" }} alt="hello"
                                                    title="Symtoms Checker" />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">Symtoms checker </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica.</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>

                                    </Grid>

                                    <Grid>

                                        <Card className="root21" >
                                            <CardActionArea>
                                                <CardMedia className="media25" image="/stats.png" alt="hello"
                                                    title="Stats" />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">Stats</Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>

                                    <Grid>
                                        <Card className="root21" >
                                            <CardActionArea>
                                                <CardMedia className="media25" image="/testCentre.jpg" alt="hello"
                                                    title="Test Centre" />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">Test Centre</Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>

                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                        <div style={{ marginBottom: "6vh" }}>
                            < Container maxWidth="md">

                                <Grid container>
                                    <Grid item >
                                        <Card className="root21">
                                            <CardActionArea>
                                                <CardMedia className="media25" image="/safety.jpg" alt="hello"
                                                    title="Safety Measure" />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">Safety Measure</Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>

                                    </Grid>

                                    <Grid>

                                        <Card className="root21" >
                                            <CardActionArea>
                                                <CardMedia className="media25" image="\images\checker.jpg" alt="hello"
                                                    title="Stats" />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">Stats</Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>

                                    <Grid>
                                        <Card className="root21" >
                                            <CardActionArea>
                                                <CardMedia className="media25" image="/Helpline.jpg" style={{ backgroundSize: "contain" }} alt="hello"
                                                    title="Helpline Number" />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2" >HelpLine Number</Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>

                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </div>





                </div>

                       hello word hdkhsjhfjshkh   hello word hdkhsjhfjshkh
            </div>
            </div>
        );
    }
}

Example2.propTypes = {
    classes: PropTypes.object.isRequired
};



export default withStyles(styleSheet)(Example2);