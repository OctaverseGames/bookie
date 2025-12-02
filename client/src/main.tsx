import React, { useEffect, useState } from "react";

const API = "/api";

export const Main = () => {
  const [pools, setPools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPools();
  }, []);

  const loadPools = async () => {
    try {
      const res = await fetch(`${API}/pools`);
      const data = await res.json();
      setPools(data);
    } catch (err) {
      console.error("Failed to load pools:", err);
    } finally {
      setLoading(false);
    }
  };

  const stake = async (poolId, team, amount) => {
    try {
      const res = await fetch(`${API}/stake`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ poolId, team, amount }),
      });

      const data = await res.json();
      alert(data.message);
      loadPools();
    } catch (err) {
      console.error("Stake error:", err);
      alert("Could not stake");
    }
  };

  if (loading) return <div>Loading odds…</div>;

  return (
    <div id="pools">
      {pools.map((p) => (
        <div key={p.id} className="pool-card">
          <h3>{p.name}</h3>
          <p>Staked: {p.totalStaked} SOL</p>

          <select id={`team-${p.id}`}>
            {p.options.map((o) => (
              <option value={o.team}>{o.team}</option>
            ))}
          </select>

          <input
            type="number"
            id={`amount-${p.id}`}
            placeholder="Amount"
          />

          <button
            onClick={() => {
              const team = document.getElementById(`team-${p.id}`).value;
              const amount = parseFloat(
                document.getElementById(`amount-${p.id}`).value
              );
              stake(p.id, team, amount);
            }}
          >
            Stake
          </button>
        </div>
      ))}
    </div>
  );
};
