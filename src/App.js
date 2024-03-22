import { Component } from "react";
import "./App.css";
import { Feedback } from "components/Feedback/Feedback";
import { Section } from "components/Section/Section";
import { Statistic } from "components/Statictics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onBtnClick = (e) => {
    const option = e.target.name;
    this.setState((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };
  render() {
    return (
      <>
        <Section title={"Feedback counter"}>
          <Feedback onBtnClick={this.onBtnClick} />
          <Statistic stat={this.state} />
        </Section>
      </>
    );
  }
}

export default App;
