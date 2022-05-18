import React, { Component } from "react";
import { Link , withRouter} from "react-router-dom";
import Userprofile from "./Userprofile";
import Usersettings from "./Usersettings";

class Profile extends Component {
    state = { 
        componenetToShow: null,
        useClass: 0
     } 

    componentDidMount =()=>{
        if(this.props.history.location.pathname === "/profile"){
            this.setState({
                componenetToShow: <Userprofile/>,
                useClass: 1
            })
        }
        if(this.props.history.location.pathname === "/settings"){
            this.setState({
                componenetToShow: <Usersettings/>,
                useClass: 2
            })
        }
    }
    render() { 
        return (
            <main>
            <div className="row ps-4 pt-2"></div>
            <div className="container profile-div">
              <div className="row justify-content-center">
                <div className="card">
                  <div className="card-header">
                  
                  <div className="button-tabs ps-4 pb-2">
                    <Link
                      type="submit"
                      className={this.state.useClass === 1 ? "btn btn-modal-current fw-bold" : "btn btn-modal fw-bold"}
                      to={"/profile"}
                    >
                      Profile
                    </Link>
                    <Link 
                    className={this.state.useClass === 2 ? "btn btn-modal-current fw-bold" : "btn btn-modal fw-bold"}
                    to={"/settings"}>
                      Settings
                    </Link>
                  </div>
                </div>
                 
          
                {this.state.componenetToShow}
              </div>
              </div>
            </div>
          </main>
        );
    }
}
 
export default withRouter(Profile);
