// Code your solution here
const findMatching = (drivers, string) =>
  drivers.filter(d => d.toLowerCase() === string.toLowerCase());

const fuzzyMatch = (drivers, string) =>
  drivers.filter(d => d.startsWith(string));

const matchName = (drivers, string) =>
  drivers.filter(d => d.name === string);
