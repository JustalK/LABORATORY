/**
* @function getRange
* Return a serie of number starting from start to stop with a space of step between each number
* @param {number} start The number at which we start counting
* @param {number} stop The number at which we stop counting
* @param {number} step The step between element in the array
* @return {number[]} A serie of number starting from start to stop with a space of step between each number
**/
const getRange = (start, stop, step) => {
  return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))
}
