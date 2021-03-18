import React,{ Component } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card } from "@material-ui/core";
import Axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';

class Stats extends Component
{
    constructor(props)
    {
        super(props);
        this.state={

            progress: false,
            Dataitem:[]
        }
    }
    componentWillMount()
    {
        this.setState({ progress: true })
        Axios.get('http://localhost:9090/examples/show.jsp',{}).then(response=>
        {
        console.log(response.data);
        this.setState({progress:false,
        Dataitem:response.data})
        }).catch(err=>{
            console.log("Failed");
        })
    }
    
    render()
    {
        var{isLoaded,Dataitem}=this.state;
        return(
            <div style={{backgroundImage:"url('covid23.jpg')",backgroundSize:"cover",height:"37.33em",width:"77.6em"}}>
                <div style={{height:"8em",width:"100%"}}> 
                {this.state.progress ? <div>
                        <LinearProgress color="secondary" />
                </div> : null}  </div>         
                    <Container maxWidth="l">
                    <Card>
                    <TableContainer>
                            <Table aria-label="customized table">
                                <TableHead>
                                <TableRow style={{backgroundColor:"black"}}>
                                    <TableCell align="center" style={{color:"white"}}>First Name</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Last Name</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>  Email</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Password</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Userid</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Address</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>City</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>State</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Zip</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Phone Number</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Temperature</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Leave( in days)</TableCell>
                                
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.fname}>
                                        {ag.fname}
                                        </div>
                                    ))}
                                    </TableCell>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.lname}>
                                        {ag.lname}
                                        </div>
                                    ))}
                                    </TableCell>
                                    <TableCell align="center">
                                        {Dataitem.map((ag,key)=>(
                                        <div key={ag.email}>
                                        {ag.email}
                                        </div>
                                    ))}
                                    </TableCell>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.password}>
                                        {ag.password}
                                        </div>
                                    ))}
                                    </TableCell>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.userid}>
                                        {ag.userid}
                                        </div>
                                    ))}
                                    </TableCell>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.address}>
                                        {ag.address}
                                        </div>
                                    ))}
                                    </TableCell>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.city}>
                                        {ag.city}
                                        </div>
                                    ))}
                                    </TableCell>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.state}>
                                        {ag.state}
                                        </div>
                                    ))}
                                    </TableCell>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.code}>
                                        {ag.code}
                                        </div>
                                    ))}
                                    </TableCell>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.phno}>
                                        {ag.phno}
                                        </div>
                                    ))}
                                    </TableCell>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.temp}>
                                        {ag.temp}
                                        </div>
                                    ))}
                                    </TableCell>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.days}>
                                        {ag.days}
                                        </div>
                                    ))}
                                    </TableCell>
                                    
                                    </TableRow>
                                    </TableBody>
                            </Table>
                            </TableContainer>
                            </Card>
                </Container>
		    </div>
        )}
}

export default Stats;
