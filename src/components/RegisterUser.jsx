import React from 'react';
import TextField from './TextField';
import DropDown from './DropDown';

class RegisterUser extends React.Component{
  	constructor(props){
  		super(props);
  		this.state = {
  			name:null,
  			gender:null,
  			location:null,
  			deviceId:null,
        language:null,
        genger:null

  		};
      this.languages=['English','Bengali','Hindi'];
      this.genders=['Male','Female','Others'];
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
}

	render(){
		return (
		<div>
			<h4>Register User</h4>
			<TextField label="Name"  placeholder ="Enter the Name" valueChange={this.setName}/>
      <DropDown label ="Gender" options={this.genders} valueSelected={this.setGender}/>
    	<TextField label="Location" placeholder ="Enter the address" valueChange={this.setLocation}/>
      <DropDown label="Language" options={this.languages} valueSelected={this.setLanguage}/>
			<TextField label="DeviceId" placeholder ="Enter the DeviceId" valueChange={this.setDeviceId}/>
			<button onClick={this.submit}>Submit</button>
		</div>
		);
	}
}

export default RegisterUser;
