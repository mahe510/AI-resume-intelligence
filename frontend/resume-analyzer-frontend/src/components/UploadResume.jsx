import { useState } from "react";
import roleDemand from "../data/roleDemand";

function UploadResume({ onAnalyze }) {
  const [role, setRole] = useState("");
  const [file, setFile] = useState(null);

  const handleAnalyze = async () => {
    if (!file || !role) {
      alert("Upload resume and select role");
      return;
    }

    // TEMP: backend hookup later
    const extractedSkills = ["Python", "SQL"]; // safe default
    onAnalyze(role, extractedSkills);
  };

  return (
    <div className="card">
      <h3>Upload Resume</h3>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Target Role</option>
        {Object.keys(roleDemand).map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <button onClick={handleAnalyze}>Analyze Resume</button>
    </div>
  );
}

export default UploadResume;
