import { useEffect, useState } from "react";
import axios from "axios";

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.thesportsdb.com/api/v1/json/3/eventsnextleague.php?id=4412")
      .then((res) => setMatches(res.data.events));
  }, []);

  return (
    <div className="section">
      <h2>📅 Upcoming Matches</h2>

      <div className="grid">
        {matches?.slice(0, 6).map((match) => (
          <div className="card glass" key={match.idEvent}>
            <h3>{match.strEvent}</h3>
            <p>{match.dateEvent}</p>
            <p>{match.strVenue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Matches;