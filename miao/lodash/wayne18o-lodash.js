var wayne18o = {
    chunk: function (array, size) {
        var ary = array
        if (size < ary.length) {
            ary = [ary.slice(0, size), ary.slice(size, ary.length)]
        } else {
            return ary
        }

        return ary
    },
}