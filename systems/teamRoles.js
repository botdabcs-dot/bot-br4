const { ALLOWED_TEAM_ROLES } = require('../config/constants');

function getAllowedTeamRoles(member) {
  return member.roles.cache.filter(role => ALLOWED_TEAM_ROLES.includes(role.name));
}

module.exports = { getAllowedTeamRoles };
