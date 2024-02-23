export function fakePostAt() {
  const randomTimeDiff = Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365)
  const currTimeStamp = new Date().getTime()
  return new Date(currTimeStamp - randomTimeDiff)
}
