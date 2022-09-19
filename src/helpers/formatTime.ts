export const formatTime = (seconds: number): string => {
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - (minutes * 60);

  let secString = `${seconds < 10 ? '0'+seconds : seconds}`
  let minString = `${minutes < 10 ? '0'+minutes : minutes}`

  return `${minString}:${secString}`;
}