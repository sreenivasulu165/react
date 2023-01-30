import React from "react";
class Message extends React.Component {
  Message = "srinu"
  ename = "srinivasulu"
  emp = { id: "101", name: "vani", salary: "35000" }
  gmHandler = () => {
    console.log("test case 123");
    this.Message = "good morning"
    console.log("hello gm");

  }
  render() {
    return <div>
      <h2>Message Component</h2>
      <hr />
      <h4>Message:{this.Message}</h4>
      <button onClick={this.gmHandler}>GM</button>
    </div>

  }
}
export default Message