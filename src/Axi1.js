import React,{Component} from 'react';
import Axios from 'axios';
class Axi1 extends Component
{
    constructor()
    {
        super();
        this.state={
            t1:"",
            t2:"",
            t3:"",
            message:""
        }
    }
    fun(e)
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    sendData(ev)
    {
        const t1=this.state.t1
        const t2=this.state.t2
        const t3=this.state.t3
        const data={t1,t2,t3}
        Axios.get('http://localhost:9090/examples/u4.jsp',{params:data}).then(response=>{console.log(response);
        this.setState({message:response.data.response})
        }).catch(err=>{
            console.log("Failed");
        })
    }
    render()
    {
        return <div>
            Name<input type="text" name="t1" value={this.state.t1} onChange={this.fun.bind(this)}/>
            Age<input type="text" name="t2" value={this.state.t2} onChange={this.fun.bind(this)}/>
            Salary<input type="text" name="t3" value={this.state.t3} onChange={this.fun.bind(this)}/>
            <input type="button" value="Submit" onClick={this.sendData.bind(this)}/>
            {this.state.message}
        </div>
    }
}
export default Axi1;