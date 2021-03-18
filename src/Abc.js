import React,{Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Abc extends Component
{
    constructor()
    {
        super();
        this.state={
        n1:"",
        n2:"",
    }
    }
    handleChangeFields=(event)=>
    {
        this.setState({
        ...this.state,
        [event.target.name]: event.target.value
        })
    }
    handleLogin=()=>
    {
       let n=parseInt(this.state.n1);
       let f=1;
       for(let i=1;i<=n;i++)
       {
           f=f*i;
       }
       this.setState({n2:f})
    }

    render()
    {
        return (<div>
                    <table>
                        <tr>
                            <TextField id="mail" label="email Address" variant="outlined" name="n1"
                            onChange={this.handleChangeFields}
                            />
                        </tr>
                        <tr>
                        <TextField id="pass" label="password" variant="outlined" value={this.state.n2} name="n2"
                        />
                        </tr>
                        <tr>
                        <Button variant="contained" color="primary" onClick={this.handleLogin}>
                        submit</Button>
                        </tr>
                    </table>
                </div> )
            
    }
}
export default Abc;