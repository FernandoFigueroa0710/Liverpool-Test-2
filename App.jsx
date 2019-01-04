import React from "react";
import axios from "axios";

class App extends React.component {
  contructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  getData() {
    axios
      .get()
      .then(res => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      })
      .catch(err => {
        console.log("This component error", err);
      });
  }
  render() {
    return <div>main component</div>;
  }
}
export default App;
