import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./index.css";
import ErrorBoundaries from "../components/ErrorBoundaries";
import Scroll from "../components/Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboEnemies</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundaries>
            <CardList robots={filterRobots} />
          </ErrorBoundaries>
        </Scroll>
      </div>
    );
  }
}

export default App;
