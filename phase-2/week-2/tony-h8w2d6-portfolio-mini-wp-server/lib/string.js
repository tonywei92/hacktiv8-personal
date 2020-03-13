const slugIt = (text) => text.toLowerCase().trim().replace(/ /g, '_');
module.exports = { slugIt };
