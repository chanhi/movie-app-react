function Test() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    //[value, ...list] -> list앞에 ...을 붙이면 리스트 안에 리스트가 아니라 리스트안의 내용만 들어감
    setToDo("");
    console.log(toDos);
  };
  return (
    <div className="App">
      <h1>My To Dos : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do ..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Coin />
    </div>
  );
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin, index) => (
          <li>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
