//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (String(message).trim().endsWith("?") && message === String(message).toUpperCase() && String(message).isWellFormed()) {
    return "Calm down, I know what I'm doing!"
  }
  else if (String(message).trim().endsWith("?")) {
    return "Sure."
  }
  else if (message === String(message).toUpperCase()) {
    return "Whoa, chill out!"
  }
  else if (String(message).trim() === message) {
    return "Fine. Be that way!"
  }
  else return "Whatever."
};
