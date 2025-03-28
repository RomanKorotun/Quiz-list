export const convertTime = (seconds) => {
  if (seconds < 60) {
    return `${seconds} seconds`;
  }

  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minutes ${remainingSeconds} seconds`;
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours} hours ${minutes} minutes ${remainingSeconds} seconds`;
};
