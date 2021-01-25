module.exports = function towelSort (matrix = []) {
    return matrix.length > 0 ? matrix.map((el, i) => i % 2 ? el.reverse() : el).flat()
        :
        []
}
