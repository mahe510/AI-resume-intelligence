function DemandCard({ skills, score }) {
  return (
    <div className="card">
      <h3>Demand Compatibility</h3>

      <p className="score">
        Market Alignment Score: <b>{score}%</b>
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
