export const func1 = a => (a + 3)

export const func2 = (a, b) => {
  const c = func1(a)
  return c + b
}
