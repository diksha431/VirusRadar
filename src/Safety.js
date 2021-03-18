import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card, CardActionArea, CardMedia, CardContent } from "@material-ui/core";
import { AppBar, Toolbar, List, ListItem, withStyles, Grid, SwipeableDrawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

class Safety extends Component
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
            <Typography component="div" style={{height:"161em",width:"76.65em",backgroundColor: "#eeeff1" ,paddingTop:"2em"}}>
            <Container component="main" maxWidth="md">
            <Typography variant="h6" gutterBottom style={{fontSize:"1.6rem",marginTop:"2em"}}>Safety Measures</Typography>
            <Grid container style={{marginTop:"1em"}}>
                <Grid item  xs={6}>
                    <Card className="s2" style={{marginLeft:"0em"}}> 
                    <CardActionArea>
                    <CardMedia image="\wash1.jpg" alt="hi" style={{height:"23em"}}/>
                    <CardContent>
                        <Typography className="s1" variant="p" gutterBottom>Wash Your Hands</Typography>
                        <Typography variant="p" className="s3">
                            <ul>
                                <li>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.</li>
                                <li>After coughing and sneezing</li>
                                <li>When caring for the sick</li>
                                <li>Before, during and after you prepare food</li>
                                <li>Befor eating, after toilet use</li>
                                <li>When hands are visibly dirty</li>
                                <li>After handling animals or animal waste</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className="s2" style={{marginLeft:"4em"}}>
                    <CardActionArea>
                    <CardMedia image="\sd11.jpg" alt="hi" style={{height:"23em"}}/>
                    <CardContent>
                        <Typography className="s1" variant="p" gutterBottom>Maintain Distance</Typography>
                        <Typography variant="p" className="s3">
                            <ul>
                                <li>Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.</li>
                                <li>Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to come into close contact with someone that has COIVD-19 and it is more difficult to maintain physical distance of 1 metre (3 feet)</li>
                            </ul>
                        </Typography> 
                        </CardContent>
                        </CardActionArea>
                     </Card>
                </Grid>
                <Grid item  xs={6}>
                    <Card className="s2" style={{marginLeft:"0em"}}> 
                    <CardActionArea>
                    <CardMedia
                        image="\sanitize1.jpg" style={{height:"23em"}}
                    />
                    <CardContent>
                        <Typography className="s1" variant="p" gutterBottom>Use Of Sanitizer</Typography>
                        <Typography variant="p" className="s3">
                            <ul>
                                <li>Use sanitizer when you are outside where you can't wash your hands</li>
                                <li>Keep alcohol-based hand sanitizers out of children’s reach. Teach them how to apply the sanitizer and monitor its use.</li>
                                <li>Apply a coin-sized amount on your hands. There is no need to use a large amount of the product.</li>
                                <li>Avoid touching your eyes, mouth and nose immediately after using an alcohol-based hand sanitizer, as it can cause irritation.</li>
                                <li>Hand sanitizers recommended to protect against COVID-19 are alcohol-based and therefore can be flammable. Do not use before handling fire or cooking.</li>
                                <li>Under no circumstance, drink or let children swallow an alcohol-based hand sanitizer. It can be poisonous.</li>
                                <li>Remember that washing your hands with soap and water is also effective against COVID-19.</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                <Grid item  xs={6}>
                    <Card className="s2" style={{marginLeft:"4em",marginTop:"-1em"}}>  
                    <CardActionArea>
                    <CardMedia
                        image="shaking1.jpg" style={{height:"30em"}}
                    />
                    <CardContent>
                        <Typography className="s1" variant="p" gutterBottom>Avoid Shaking Hands</Typography>
                        <Typography variant="p" className="s3">
                            <ul>
                                <li>To prevent COVID-19 it is safest to avoid physical contact when greeeting.</li>
                                <li>Respiratory viruses can be passed byshaking hands and touching your eyes, nose and mouth.</li>
                                <li>Greet people with a wave,a nod or a bow intead.</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                <Grid item  xs={6}>
                    <Card className="s2" style={{marginLeft:"0em"}}> 
                    <CardActionArea>
                    <CardMedia
                        image="throw1.jpg" style={{height:"30em"}}
                    />
                    <CardContent>
                        <Typography className="s1" variant="p" gutterBottom>Protect Others From Getting Sick</Typography>
                        <Typography variant="p" className="s3">
                            <ul>
                                <li>Throw tissue into closed bin immediately after use. Then dispose of the used tissue immediately and wash your hands. Why? Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.</li>
                                <li>When coughing and sneezing cover nose and mouth with flexed elbow or tissue.</li>
                                <li>Avoid close contact when you are experiencing cough and fever.</li>
                                <li>Avoid spitting in public.</li>
                                <li>Clean hands with alcohol based hand rub or soap and water after coughing or sneezing and when caring for the sick.</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                <Grid item  xs={6}>
                    <Card className="s2" style={{marginTop:"-4em",marginLeft:"4em"}}> 
                    <CardActionArea>
                    <CardMedia
                        image="mask2.jpg" style={{height:"24em"}}
                    />
                    <CardContent>
                        <Typography className="s1" variant="p" gutterBottom>Wear mask</Typography>
                        <Typography variant="p" className="s3">
                            <ul>
                                <li>Cover mouth and nose with mask and make sure there are no gaps between your face and the mask.</li>
                                <li>Before putting on a mask, clean hands with alcohol-based hand rub or soap and water.</li>
                                <li>Avoid touching the mask while using it; if you do, clean your hands with alcohol-based hand rub or soap and water.</li>
                                <li>Replace the mask with a new one as soon as it is damp and do not re-use single-use masks.</li>
                                <li>To remove the mask: remove it from behind (do not touch the front of mask); discard immediately in a closed bin; clean hands with alcohol-based hand rub or soap and water.</li>
                                <li>If you are healthy, you only need to wear a mask if you are taking care of a person with COVID-19.</li>
                                <li>Wear a mask if you are coughing or sneezing.</li>
                                <li>Masks are effective only when used in combination with frequent hand-cleaning with alcohol-based hand rub or soap and water.</li>
                                <li>If you wear a mask, then you must know how to use it and dispose of it properly.</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                <Grid item  xs={6}>
                    <Card className="s2" style={{marginLeft:"0em"}}> 
                    <CardActionArea>
                    <CardMedia
                        image="temp2.jpg" style={{height:"26em"}}
                    />
                    <CardContent>
                        <Typography className="s1" variant="p" gutterBottom>Temperature</Typography>
                        <Typography variant="p" className="s3">
                            <ul>
                                <li>If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority. Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.</li>
                                <li>Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities. Why? Local and national authorities are best placed to advise on what people in your area should be doing to protect themselves.</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
                <Grid item  xs={6}>
                    <Card className="s2" style={{marginTop:"-1em",marginLeft:"4em"}}> 
                    <CardActionArea>
                    <CardMedia
                        image="c5.jpg" style={{height:"23em"}}
                    />
                    <CardContent>
                        <Typography className="s1" variant="p" gutterBottom>Some Other</Typography>
                        <Typography variant="p" className="s3">
                            <ul>
                                <li>Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.</li>
                                <li>Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands. Why? Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.</li>
                                <li>Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.</li>
                            </ul>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            </Container>
            </Typography>
        </div>)
    }
}
export default Safety;
