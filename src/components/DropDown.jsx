import React from 'react';

class DropDown extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value:this.props.value?this.props.value:'',
      values: []

    };

  }

  componentDidMount() {

    fetch(this.props.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let valueFromApi = data;
      this.setState({ values: ['Select Value'].concat(valueFromApi) });
      }).catch(error => {
        console.log(error);

      });
  }



  handleChange = (event) =>{
    this.setState({
      value:event.target.value
    }, ()=>{
      this.props.valueSelected(this.state.value);
    });
  }
  render(){


    return (
      <div>
        <label>{this.props.label}:</label> &nbsp;
        <select onChange={this.handleChange}>{
                 this.state.values.map((obj) => {
                     return <option value={obj}>{obj}</option>
                 })
              }</select>
      </div>
    )
  }
}
export default DropDown;
