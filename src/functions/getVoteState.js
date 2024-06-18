const getVoteState = (vote, display = true) => {
  if (vote === 0) {
    return "No votes yet";
  }
  if (display === true) return `${vote} ${vote > 1 ? "votes" : "vote"}`;
  return `${vote > 1 ? "votes" : "vote"}`;
};

export default getVoteState;
