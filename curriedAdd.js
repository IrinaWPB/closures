function curriedAdd(sum = null) {
  if (!sum) return 0
  return function add(num = null) {
    if (!num) return sum
    sum += num
    return add
  }
}

let a = curriedAdd

console.log(a(3)(4)(120)(34)())