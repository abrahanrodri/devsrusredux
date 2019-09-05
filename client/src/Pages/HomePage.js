import React from "react";
import API from "../utils/API";

class HomePage extends React.Component {
  componentWillMount() {
      API.getAllEvents()
        .then(data => {
            console.log(data)
        })
  }
  render() {
    return (
      <div>
        <h1> DevRus</h1>
      </div>
    );
  }
}
export default HomePage;
