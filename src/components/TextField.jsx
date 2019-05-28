import React from 'react';

class TextField extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value:this.props.value?this.props.value:''
    };
  }

  handleChange = (event) =>{
    this.setState({
      value:event.target.value
    }, ()=>{
      this.props.valueChange(this.state.value);
    });
  }

  render(){
    return(
      <div>
      <label>{this.props.label}:</label> &nbsp;
      <input type="text"  placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }

}

export default TextField;
