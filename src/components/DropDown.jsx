import React from 'react';

class DropDown extends React.Component {
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
      this.props.valueSelected(this.state.value);
    });
  }
  render(){
    const options = this.props.options.map((value) =>
      <option>{value}</option>
    );

    return (
      <div>
        <label>{this.props.label}:</label> &nbsp;
        <select onChange={this.handleChange}>
          {options}
        </select>
      </div>
    )
  }
}
export default DropDown;
