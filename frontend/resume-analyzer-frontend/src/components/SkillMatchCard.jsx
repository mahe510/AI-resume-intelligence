function SkillMatchCard({ role, matched, missing }) {
  return (
    <div className="card">
      <h3>Skill Match for {role}</h3>

      <p style={{ fontSize: "13px", color: "#475569" }}>
        Resume vs role requirements
      </p>

      <strong>Matched Skills</strong>
      <div>
        {matched.map(skill => (
          <span key={skill} className="badge">{skill}</span>
        ))}
      </div>

      <strong style={{ marginTop: "10px", display: "block" }}>
        Missing / In-Demand Skills
      </strong>
      <div>
        {missing.map(skill => (
          <span key={skill} className="badge missing">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default SkillMatchCard;
