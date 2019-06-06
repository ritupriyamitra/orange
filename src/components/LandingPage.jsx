import React from 'react';

import RegisterUser from "./RegisterUser";
import DashBoard from "./DashBoard";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      registered:false,
      userId:null
    };
  }


  handleRegister = () =>{
      let userId=cookies.get('userId');

     this.setState({
       registered:userId?true:false,
       userId:userId
     });

  }

    componentDidMount() {
      this.handleRegister();
    }


  render(){

    return(

      <div className="App">
        <header className="App-header">
        {this.state.registered?<DashBoard userId={this.state.userId}/>:<RegisterUser registerHandler={this.handleRegister}/>}

        </header>
      </div>
    )
  }

}
export default LandingPage;
