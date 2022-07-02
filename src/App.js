//import Test from './test';
import React from "react";
//import PropTypes from "prop-types"

```
Food.propTypes = { //propTypes ProTypes 아님 주의
  name: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired
};
```
class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState({count:1});
  }
  minus = () => {
    this.setState({count:-1});
  }
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Add</button>
      </div>
    );
  }
}

```
function App() {
  return (
    <div className="App">
      <Test />
      
    </div>
  );
}
```
export default App;
