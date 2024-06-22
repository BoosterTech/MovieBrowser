const getVoteState = (rate, vote) => {
  if (vote === 0 && rate !== 0) {
    return "No votes yet";
  }
  // if (display === true) return `${vote} ${vote > 1 ? "votes" : "vote"}`;
  else if (vote !== 0) {
    return `${vote > 1 ? "votes" : "vote"}`;
  }
};

export default getVoteState;
