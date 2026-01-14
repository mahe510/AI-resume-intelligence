function DemandCard({ skills, score }) {
  return (
    <div className="card">
      <h3>Market Demand</h3>

      <p className="score">
        Demand Score: <b>{score}%</b>
      </p>

      <ul>
        {skills.map(s => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default DemandCard;
