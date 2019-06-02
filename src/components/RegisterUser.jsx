import React from 'react';
import TextField from './TextField';
import DropDown from './DropDown';
import { BASE_URL } from '../common/Constants';


class RegisterUser extends React.Component{
  	constructor(props){
  		super(props);
  		this.state = {
  			name:null,
  			gender:null,
  			location:null,
  			deviceId:null,
        language:null

  		};

  	}
  setName = (name) =>{
    this.setState({
      name:name
    });
  }
  setLocation = (location) =>{
    this.setState({
      location:location
    });
  }

  setDeviceId = (deviceId) =>{
    this.setState({
      deviceId:deviceId
    });
  }

  setLanguage = (language) =>{
     this.setState({
       language:language
     });

  }

  setGender = (gender) =>{
     this.setState({
       gender:gender
     });

  }





submit =()=>{
  console.log(this.state);
  fetch(BASE_URL+'/user', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.state)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}



	render(){
		return (
		<div>
			<h4>Register User</h4>
			<TextField label="Name"  placeholder ="Enter the Name" valueChange={this.setName}/>
      <DropDown label ="Gender"  valueSelected={this.setGender} url={`${BASE_URL}/values/genders`}/>
    	<TextField label="Location" placeholder ="Enter the address" valueChange={this.setLocation}/>
      <DropDown label="Language"  valueSelected={this.setLanguage} url={`${BASE_URL}/values/languages`}/>
			<TextField label="DeviceId" placeholder ="Enter the DeviceId" valueChange={this.setDeviceId}/>
			<button onClick={this.submit}>Submit</button>
		</div>
		);
	}
}

export default RegisterUser;
