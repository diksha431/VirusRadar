import React,{ Component } from "react";

class Covid extends Component
{
    render()
    {
        return <div className="abc">
        <div className="xyz">
        <br/><h1 className="qwe">Registration For Students</h1>
        <form method="GET">
            <table className="rty">
                <tr>
                    <td>
                        <input className="iop" type="text" id="fname" name="firstname" placeholder ="First name"></input>
                    </td>
                    <td>
                        <input className="iop" type="text" id="lname" name="lastname" placeholder ="Last name"></input>
                    </td>
                </tr>
            </table>
            <table className="rty">
                <tr>
                    <td>
                        <input className="uio" type="text" id="mnoo" name="mnumber" placeholder ="Mobile number or email address"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input className="uio" type="text" id="pass" name="password" placeholder ="Password"></input>     
                    </td>
                </tr>
                <tr>
                    <td>
                        <input className="uio" type="text" id="pass1" name="password1" placeholder ="Re-enter Password"></input>     
                    </td>
                </tr>
                <tr>
                    <label className="asd" for="gender">Gender</label>
                </tr>
                <tr>
                    <input type="radio" name="gender" value="female"></input>
                    <label className="fgh" for="female">Female</label>
                    <input type="radio" name="gender" value="male"></input>
                    <label className="fgh" for="male">Male</label>
                   </tr>
                <tr>
                    <label class="asd" for="birthday">Birthday</label><br/>
                </tr>
                <tr>
                    <select id="birthday" name="birthday" className="jkl">
                        <option value="27">1</option>
                        <option value="26">2</option>
                    </select>
                    <select className="jkl">
                        <option value="mar">January</option>
                        <option value="feb">February</option>
                        </select>
                        <select className="jkl">
                            <option value="1995">1995</option>
                            <option value="1996">1996</option>
                        </select>
                </tr>
                <tr>
                    <td>
                        <input className="uio" type="text" id="rno" name="rollno" placeholder ="Roll number"></input>     
                    </td>
                </tr>
                <tr>
                    <label class="asd" for="class">Class and section</label><br/>
                </tr>
                <tr>
                    <select id="class" name="class" className="zxc">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <select className="zxc">
                        <option value="section">A</option>
                        <option value="section">B</option>
                        </select>
                </tr>
                <tr>
                    <label class="asd" for="course">Course</label><br/>
                </tr>
                <tr>
                    <select id="course" name="course" className="vbn">
                        <option value="1">Mca 1st-year</option>
                        <option value="2">Mca 2nd-year</option>
                    </select>
                </tr>
                <tr>
                    <label class="asd" for="dep">Department</label><br/>
                </tr>
                <tr>
                    <select id="dep" name="dep" className="vbn">
                        <option value="mca">Mca</option>
                        <option value="mba">MBA</option>
                    </select>
                </tr>
                <tr>
                <br/><input className="nmz" type="button" value="Sign Up"></input>
                </tr>
            </table>
        </form>
        </div>
        </div>

div className="abc1">
<div className="xyz1">
<br/><h1 className="qwe1">Sign in</h1>
<Container maxwidth="md">
<form>
    <table>
        <tr>
            <RadioGroup>
            <FormControlLabel value="student" control={<Radio />} label="As a student" />
            <FormControlLabel value="guard" control={<Radio />} label="As a security guard" />
            </RadioGroup>
        </tr>
        <tr>
            <TextField className="rty1" id="mail" label="E-mail Address*" variant="outlined" /><br/><br/>
        </tr>
        <tr>
            <TextField className="rty1" id="pass" label="Password*" variant="outlined" /><br/> <br/>
        </tr>
        <tr>
        <Button className="rty1" variant="contained" color="primary">Sign in</Button><br/><br/>
        </tr>
        <tr>
            <td>
                <Link href="#" variant="body2">Forgot password?</Link>
            </td>
            <td>
                <Link href="#" variant="body2">{"Don't have an account? Sign Up"}</Link>
            </td>
        </tr>
    </table>
</form>
</Container>
</div>
</div>
}
}

    }
}
export default Covid;