import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Card } from "@material-ui/core";
import Axios from 'axios';
import { Alert, AlertTitle } from '@material-ui/lab';
import LinearProgress from '@material-ui/core/LinearProgress';

class GuardForgot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      EmailError: "",
      password: '',
      passwordError: "",
      Dataitem: "",
      alert_msg: false,
      progress: false,
      isUserPassword: false,
      isUserSubmit: true,
      alertSuccess: false,
    }
  }

  changeField = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
    console.log(this.state, "formField")
  }

  validate = () => {
    let isError = false;
    const errors = { EmailError: "" };
    if (this.state.email == "") {
      isError = true;
      errors.EmailError = "Please enter the Email Correctly!";
    }

    this.setState({
      ...this.state,
      ...errors
    });
    return isError
  }

  handleLogin = () => {
    const error = this.validate();
    if (!error) {
      const email = this.state.email

      const data = { email }
      this.setState({ progress: true })
      Axios.get('http://localhost:9090/examples/guardforgot.jsp', { params: data }, {
      }).then(response => {

        this.setState({
          Dataitem: response.data,
          progress: false,
          alert_msg: false
        })

        console.log(this.state.Dataitem)

        var name = JSON.parse(JSON.stringify(this.state.Dataitem))

        if (name.Success.To == "userLogin") {
          localStorage.setItem("id", name.Success.email_id)
          this.setState({
            isUserPassword: true,
            isUserSubmit: false
          })

        }
      }).catch(err => {

        this.setState({ progress: false, alert_msg: "true" })
        console.log("Failed");
      })

    }
  }

  validateupdate = () => {
    let isError = false;
    const errors = { passwordError: "" };

    if (this.state.password.length < 8) {
      isError = true;
      errors.passwordError = "Please enter the password Correctly!";
    }

    this.setState({
      ...this.state,
      ...errors
    });
    return isError
  }

  updatePassword = () => {
    const error = this.validateupdate();
    if (!error) {
      const email = localStorage.getItem("id")
      const password = this.state.password

      const data = { password, email }
      this.setState({ progress: true })
      Axios.get('http://localhost:9090/examples/guardforgotpass.jsp', { params: data }, {
      }).then(response => {

        this.setState({
          Dataitem: response.data,
          progress: false,
          alert_msg: false
        })

        console.log(this.state.Dataitem)

        var name = JSON.parse(JSON.stringify(this.state.Dataitem))
        if (name.Success.To == "userLogin") {

          this.setState({
            isUserPassword: true,
            isUserSubmit: false,
            alertSuccess: true
          })
        }
      }).catch(err => {

        this.setState({ progress: false, alert_msg: "true" })
        console.log("Failed");
      })

    }

  }

  render() {
    return (
      <div style={{ height: "37.33em", width: "77.6em", backgroundImage: "url('m4.jpg')", backgroundSize: "cover" }}>
        <br /><br />
        <Container component="main" maxWidth="sm" style={{ padding: "2em" }}>
          <Card style={{ backgroundColor: "gainsboro", padding: "1em", width: "26em" }}>
            <Typography component="h6" variant="h5" style={{ fontSize: "1.8rem" }}>Forgot your account?</Typography>
            <Grid container >
              <Grid item xs={12} >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={this.state.EmailError}
                  helperText={this.state.EmailError}
                  onChange={this.changeField}
                />
              </Grid>
              <Grid item xs={12} >
                {this.state.isUserPassword ?
                  <TextField variant="outlined"
                    margin="normal" required
                    fullWidth id="password"
                    label="Set New Password"
                    error={this.state.passwordError}
                    helperText={this.state.passwordError}
                    name="password"
                    type="password"
                    onChange={this.changeField} /> : null}
              </Grid>
              <Grid item xs={12} ><br/>
                {this.state.isUserSubmit ?
                  <Button style={{backgroundColor:"navy",color:"white"}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleLogin}> Next</Button>
                  :
                  <Button style={{backgroundColor:"navy",color:"white"}}
                  type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.updatePassword}>
                    Submit</Button>}
              </Grid><br/><br/>
              <br/>
              {this.state.alert_msg ? <div style={{width:"27em"}}>
                <Alert variant="filled" severity="error">
                  Incorrect Email and Password
                </Alert></div> : null}
                <br/>
              {this.state.alertSuccess ? <div style={{width:"27em"}}><Alert variant="filled" severity="success">
                <AlertTitle>Success</AlertTitle>
                  Your Forget Password Successfully
              </Alert></div> : null}
            </Grid>
            {this.state.progress ? <div>
              <LinearProgress color="secondary" />
            </div> : null}

          </Card>
        </Container>
      </div>
    )
  }
}
export default GuardForgot;
