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

class Gdetails extends Component
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
        Axios.get('http://localhost:9090/examples/gshow.jsp',{}).then(response=>
        {
        console.log(response.data);
        this.setState({progress: false,
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
                                    <TableCell align="center" style={{color:"white"}}>Full Name</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Guard Id</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Email</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Password</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Phone Number</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>Address</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>City</TableCell>
                                    <TableCell align="center" style={{color:"white"}}>State</TableCell>
                                    
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.name}>
                                        {ag.name}
                                        </div>
                                    ))}
                                    </TableCell>
                                    <TableCell align="center">
                                    {Dataitem.map((ag,key)=>(
                                        <div key={ag.guardid}>
                                        {ag.guardid}
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
                                        <div key={ag.phone}>
                                        {ag.phone}
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
                                    
                                    </TableRow>
                                    </TableBody>
                            </Table>
                            </TableContainer>
                            </Card>
                </Container>
		    </div>
        )}
}
export default Gdetails;
