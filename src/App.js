import Test from './test';

function Food({fav}) {
  return (
    <div>I like {fav}</div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>hello!!</h1>
      <Test />
      <Food fav="kimchi" />
      <Food fav="pizza" />
      <Food fav="protein" />
    </div>
  );
}

export default App;
