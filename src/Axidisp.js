import React,{Component} from 'react';
import Axios from 'axios';
class Axidisp extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isLoaded: false,
            Dataitem:[]
        }
    }
    componentWillMount()
    {
        Axios.get('http://localhost:9090/examples/u5.jsp',{}).then(response=>
        {
        console.log(response.data);
        this.setState({isLoaded:true,
        Dataitem:response.data})
        }).catch(err=>{
            console.log("Failed");
        })
    }
    render()
    {
        var{isLoaded,Dataitem}=this.state;
        if(! isLoaded)
        {
            return <div>is loading..</div>
        }
        else{
            return <div>
                data has been Loaded
                <table border="1">
                    <tr>
                        <td>
                            <th>Name</th>
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.name}>
                                    {ag.name}
                                </div>
                            ))}
                        </td>
                        <td>
                            <th>Age</th>
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.age}>
                                    {ag.age}
                                </div>
                            ))}
                        </td>
                        <td>
                            <th>Salary</th>
                            {Dataitem.map((ag,key)=>(
                                <div key={ag.sal}>
                                    {ag.sal}
                                </div>
                            ))}
                        </td>
                    </tr>
                </table>
            </div>
        }
    }
}
export default Axidisp;