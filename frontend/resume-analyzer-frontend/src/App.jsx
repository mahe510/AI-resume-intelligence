import { useState } from "react";

import UploadResume from "./components/UploadResume";
import SkillMatchCard from "./components/SkillMatchCard";
import DemandCard from "./components/DemandCard";

import roleDemand from "./data/roleDemand";
import { calculateDemandScore } from "./utils/demandScore";

// normalize helper (IMPORTANT)
const normalize = (skill) =>
  skill.toLowerCase().replace(/[\s.-]/g, "");

function App() {
  const [role, setRole] = useState("");
  const [resumeSkills, setResumeSkills] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // called from UploadResume
  const handleAnalyze = (selectedRole, skillsFromBackend = []) => {
    setRole(selectedRole);
    setResumeSkills(skillsFromBackend);
    setShowResults(true);
  };

  // SAFE guards
  const demandSkills = role ? roleDemand[role] || [] : [];

  const normalizedResume = resumeSkills.map(normalize);
  const normalizedDemand = demandSkills.map(normalize);

  const matchedSkills = demandSkills.filter((skill) =>
    normalizedResume.includes(normalize(skill))
  );

  const missingSkills = demandSkills.filter(
    (skill) => !normalizedResume.includes(normalize(skill))
  );

  const demandScore = calculateDemandScore(
    normalizedResume,
    normalizedDemand
  );

  return (
    <div className="container">
      <h1>AI Resume Intelligence</h1>
      <p className="subtitle">
        Resume analysis + role-based market demand
      </p>

      {/* Upload + Role Selection */}
      <UploadResume onAnalyze={handleAnalyze} />

      {/* Results */}
      {showResults && role && (
        <div className="dashboard">
          <SkillMatchCard
            role={role}
            matched={matchedSkills}
            missing={missingSkills}
          />

          <DemandCard
            skills={demandSkills}
            score={demandScore}
          />
        </div>
      )}
    </div>
  );
}

export default App;
