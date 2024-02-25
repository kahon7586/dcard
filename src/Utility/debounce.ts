export function debounce(callbackFn: () => void, delay = 500) {
  let timer: ReturnType<typeof setTimeout>

  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callbackFn()
    }, delay)
  }
}
