function combinations (arr, k) {
  if (k > arr.length || k <= 0) {
    return []
  }
  if (k === arr.length) {
    return [arr]
  }
  if (k === 1) {
    return arr.map(item => [item])
  }

  let combs = []
  for (let i = 0; i < arr.length - k + 1; i++) {
    let head = arr.slice(i, i + 1)
    let tailcombs = combinations(arr.slice(i + 1), k - 1)
    for (let j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]))
    }
  }
  return combs
}

function calculateTotalCombinations (attributes, exclusions) {
  // Calculate total possible combinations
  let totalCombinations = 1
  for (let level of attributes) {
    totalCombinations *= level
  }

  // Function to calculate the number of combinations affected by an exclusion
  function calculateExclusionCombinations (exclusion) {
    let count = 1
    for (let i = 0; i < exclusion.length; i++) {
      if (exclusion[i] === null) {
        count *= attributes[i]
      }
    }
    return count
  }

  // Calculate individual exclusions
  const individualExclusions = exclusions.map(exclusion =>
    calculateExclusionCombinations(exclusion)
  )

  // Calculate total exclusions using the inclusion-exclusion principle
  let totalExclusions = 0
  const n = exclusions.length

  // Loop over all possible subsets of exclusions
  for (let r = 1; r <= n; r++) {
    let subsets = combinations([...Array(n).keys()], r)
    for (let subset of subsets) {
      let subsetExclusions = subset.map(i => exclusions[i])
      let intersection = 1
      for (let k = 0; k < attributes.length; k++) {
        if (subsetExclusions.some(exclusion => exclusion[k] !== null)) {
          let levels = new Set(
            subsetExclusions
              .map(exclusion => exclusion[k])
              .filter(level => level !== null)
          )
          if (levels.size > 1) {
            intersection = 0
            break
          }
        } else {
          intersection *= attributes[k]
        }
      }
      if (intersection !== 0) {
        if (r % 2 === 1) {
          totalExclusions += intersection
        } else {
          totalExclusions -= intersection
        }
      }
    }
  }

  // Calculate total valid combinations after exclusions
  const totalCombinationsAfterExclusions = totalCombinations - totalExclusions
  return totalCombinationsAfterExclusions
}

// Example usage
const attributes = [2, 2, 2, 2] // Number of levels for each attribute
const exclusions = [
  [0, 0, null, null],
  [0, null, 0, null],
  [0, null, null, 0],
  [null, 0, 0, null],
  [null, 0, null, 0],
  [null, null, 0, 0]
]

console.log(calculateTotalCombinations(attributes, exclusions)) // Example output