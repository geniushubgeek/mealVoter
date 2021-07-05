import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
  }
  changeVotes() {
    this.setState({
      votes: this.state.votes + 1
    });
  }
  changeVotesMinus() {
    this.setState({
      votes: this.state.votes - 1
    });
  }
  render() {
    return (
      <div
        style={{
          display: "inline",
          margin: "20px",
          filter: "drop-shadow(8px 8px 10px gray)",
          backgroundColor: "white",
          height: "50%",
          width: "40%"
        }}
      >
        <img
          style={{
            display: "inline",
            marginTop: 20,
            width: "40%",
            height: "40%"
          }}
          src={this.props.img}
          alt="food"
        />
        <h1> Dinner Time</h1>
        <p> Vote here if you want this</p>
        <button onClick={() => this.changeVotes()}>+1</button>
        <p> Vote here if you don't want this</p>
        <button onClick={() => this.changeVotesMinus()}>-1</button>
        <p> Total:{this.state.votes}</p>
      </div>
    );
  }
}
