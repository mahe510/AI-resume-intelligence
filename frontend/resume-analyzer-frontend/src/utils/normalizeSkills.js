export const normalize = (skill) =>
  skill.toLowerCase().replace(/[\s.-]/g, "");
