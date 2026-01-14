export function calculateDemandScore(resumeSkills, demandSkills) {
  const matched = demandSkills.filter(skill =>
    resumeSkills.includes(skill)
  );

  return Math.round((matched.length / demandSkills.length) * 100);
}
