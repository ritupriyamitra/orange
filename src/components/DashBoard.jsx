import React from 'react';
import { BASE_URL } from '../common/Constants';

class DashBoard extends React.Component{
  constructor(props){
      super(props);
      this.state={
        user:null

      };
    }


    componentDidMount() {
     let userId  = this.props.userId;
     let url= `${BASE_URL}/user/${userId}`;
      fetch(url,
        {
         method: 'get'
         })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({ user:data });
        }).catch(error => {
          console.log(error);

        });
    }

  render(){
    return (
      <div>		<h4>{this.state.user?this.state.user.userId:null} Resigtered</h4>
      </div>
            )
  }
}
export default DashBoard;
