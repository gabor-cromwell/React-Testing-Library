import { useEffect, useState } from "react";

function App2() {
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState("1");
  const [fact, setFact] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://randomuser.me/api/?results=1`);
      const data = await response.json();
      console.log({ data });
      setFact(
        `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
      );
      //   const response = await fetch(`https://catfact.ninja/fact`);
      //   const data = await response.json();
      //   console.log({ data });
      //   setFact(data.fact);
      //   const response = await axios.get(`https://catfact.ninja/fact`);
      //   console.log({ response });
      //   setFact(response.data.fact);
    }
    fetchData();
  }, []);

  function handleClick() {
    if (number === "1") {
      setNumber("2");
    } else setNumber("1");
  }

  function Search({ value, onChange, children }) {
    return (
      <div>
        <label htmlFor="search">{children}</label>
        <input id="search" type="text" value={value} onChange={onChange} />
      </div>
    );
  }

  function handleChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick}>Press</button>
      <button>Second one</button>
      <p>{fact}</p>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
}

export default App2;
