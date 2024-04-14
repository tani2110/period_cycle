import './home.css';
import axios from "axios";
import React,{useState} from 'react';

function Home() {
  const [data, setData] = useState({
    start: "",
    end: "",
  });
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  async function handleSubmit(e){
    e.preventDefault();
    try { 
      await axios
        .post("http://localhost:8080/signup", {
          start,
          end,
        })
        .then((res) => {
          console.log("post response");
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="Home">
     <head>
    {/* <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" /> */}
    <title>Cycle Tracker</title>
    {/* <link rel="stylesheet" href="home.css" /> <!-- Link to CSS file --> */}
  </head>
  <body>
    <h1>Period tracker</h1>
    <form>
      <fieldset>
        <legend>Enter your period start and end date</legend>
        <p>
          <label for="start-date">Start date</label>
          <input type="date" id="start-date" required />
        </p>
        <p>
          <label for="end-date">End date</label>
          <input type="date" id="end-date" required />
        </p>
      </fieldset>
      <p>
        <button type="submit" onChange={handleSubmit}>Add Period</button>
      </p>
    </form>
    <section id="past-periods"></section>
    <script src="app.js" defer></script>
  </body>
    </div>
  );
}

export default Home;
