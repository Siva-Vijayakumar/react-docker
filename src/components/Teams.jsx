import { useEffect, useState } from "react";
import axios from "axios";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Indian%20Premier%20League")
      .then((res) => setTeams(res.data.teams));
  }, []);

  return (
    <div className="section">
      <h2>🏏 IPL Teams</h2>

      <div className="grid">
        {teams?.map((team) => (
          <div className="card glass" key={team.idTeam}>
            <img src={team.strTeamBadge} />
            <h3>{team.strTeam}</h3>
            <p>{team.strStadium}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;