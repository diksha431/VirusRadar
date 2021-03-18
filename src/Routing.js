import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Login from './Login';
import LoginG from './LoginG';
import Registration from './Registration';
import Registration1 from './Registration1';
import Safety from './Safety';
import Helpline from './Helpline';
import Testcenter from './Testcenter';
import Haryana from './Haryana';
import Guard from './Guard';
import Stats from './Stats';
import Checker from './Checker';
import Checker1 from './Checker1';
import Checker2 from './Checker2';
import Checker3 from './Checker3';
import Checker4 from './Checker4';
import Checker5 from './Checker5';
import Checker6 from './Checker6';
import Checker7 from './Checker7';
import Checker8 from './Checker8';
import Checker9 from './Checker9';
import Checker10 from './Checker10';
import Admin from './Admin';
import HomePage from './HomePage';
import Main from './Main';
import Forgot from './Forgot'
import Main1 from './Main1';
import Leave from './Leave';
import Gdetails from './Gdetails';
import AdminLogin from './AdminLogin';
import ForgetS from './ForgetS'
import GuardForgot from './GuardForgot'
//import Admin from './Admin';
//import SignUp from './SignUp';

class Routing extends Component 
{ 
    render() { 
	    return ( 
	        <Router> 
		        <div> 
			        <Switch> 
                        <Route exact path='/Login' component={Login}></Route> 
			            <Route exact path='/LoginG' component={LoginG}></Route> 
			            <Route exact path='/Registration' component={Registration}></Route> 
                        <Route exact path='/Registration1' component={Registration1}></Route> 
                        <Route exact path='/Safety' component={Safety}></Route> 
                        <Route exact path='/Helpline' component={Helpline}></Route> 
                        <Route exact path='/Testcenter' component={Testcenter}></Route> 
                        <Route exact path='/Guard' component={Guard}></Route> 
                        <Route exact path='/Stats' component={Stats}></Route> 
                        <Route exact path='/Checker' component={Checker}></Route> 
                        <Route exact path='/Checker1' component={Checker1}></Route> 
                        <Route exact path='/Checker2' component={Checker2}></Route> 
                        <Route exact path='/Checker3' component={Checker3}></Route> 
                        <Route exact path='/Checker4' component={Checker4}></Route> 
                        <Route exact path='/Checker5' component={Checker5}></Route> 
                        <Route exact path='/Checker6' component={Checker6}></Route> 
                        <Route exact path='/Checker7' component={Checker7}></Route> 
                        <Route exact path='/Checker8' component={Checker8}></Route> 
                        <Route exact path='/Checker9' component={Checker9}></Route> 
                        <Route exact path='/Checker10' component={Checker10}></Route> 
                        <Route exact path='/Haryana' component={Haryana}></Route> 
                        <Route exact path='/Admin' component={Admin}></Route> 
                        <Route exact path='/HomePage' component={HomePage}></Route> 
                        <Route exact path='/Main' component={Main}></Route> 
                        <Route exact path='/Forgot' component={Forgot}></Route> 
                        <Route exact path='/Main1' component={Main1}></Route> 
                        <Route exact path='/Leave' component={Leave}></Route> 
                        <Route exact path='/Admin' component={Admin}></Route> 
                        <Route exact path='/Gdetails' component={Gdetails}></Route> 
                        <Route exact path='/AdminLogin' component={AdminLogin}></Route> 
                        <Route exact path='/ForgetS' component={ForgetS}></Route> 
                        <Route exact path='/GuardForgot' component={GuardForgot}></Route> 
                        
                    </Switch> 
		        </div> 
	        </Router> 
        ); 
    } 
} 

export default Routing; 
