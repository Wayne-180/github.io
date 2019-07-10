var wayne18o = {
    chunk: function (array, size) {
        const sum = Math.ceil(array.length / size)
        var result = []
        var i = 0
        if (!array.length || !size || size < 1) {
            return []
        }
        var start = 0, end = size
        while (i < sum) {
            result[i] = [array.slice(start, end)]
            start += size
            end += size
            i++
        }
        return result
    },
}