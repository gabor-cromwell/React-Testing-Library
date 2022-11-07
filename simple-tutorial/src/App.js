import { useEffect, useState } from "react";
import "./App.css";

function App({ heading }) {
  const [search, setSearch] = useState("");
  const [fact, setFact] = useState("");
  const [number, setNumber] = useState("1");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleClick() {
    if (number === "1") {
      setNumber("2");
    } else setNumber("1");
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://randomuser.me/api/?results=1`);
      const data = await response.json();
      console.log({ data });
      setFact(
        `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
      );
    }
    fetchData();
  }, []);
  // console.log(fact);
  return (
    <div className="App">
      <h1>{heading}</h1>
      <p></p>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : "..."}</p>
      <br />
      <p>{fact}</p>
      <h2>{number}</h2>
      <button onClick={handleClick}>Press</button>
      <button>Second one</button>
    </div>
  );
}

export function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <br />
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default App;
