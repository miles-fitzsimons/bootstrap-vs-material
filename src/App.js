import React, { Component } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Button2 from "@material-ui/core/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0 };
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    this.setState({ x: this.state.x + 1 });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hi</h1>
        <div className="button" onClick={() => this.onClickButton()}>
          {this.state.x}
        </div>
        <Button variant="primary" onClick={() => this.onClickButton()}>
          {this.state.x}
        </Button>

        <br />
        <br />
        <br />

        <Button2
          variant="contained"
          color="primary"
          onClick={() => this.onClickButton()}
        >
          {this.state.x}
        </Button2>
      </React.Fragment>
    );
  }
}

export default App;
