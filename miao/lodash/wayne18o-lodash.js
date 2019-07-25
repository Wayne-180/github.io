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
            result[i] = array.slice(start, end)
            start += size
            end += size
            i++
        }
        return result
    },
    compact: function (array) {
        var result = []
        for (let i = 0; i < array.length; i++) {
            var num = array[i]
            if (Boolean(num)) {
                result.push(num)
            }
        }
        return result
    },
    concat: function (array, ...args) {
        var result = args
        for (let i = 0; i < result.length; i++) {
            if (result[i].length) {
                for (let j = 0; j < result[i].length; j++) {
                    array.push(result[i][j])
                }
            } else {
                array.push(result[i])
            }

        }
        return array
    },
    reduce: function (collection, fun, initialval) {
        if (arguments.length === 2) {
            initialval = 0
        }
        for (var i in collection) {
            initialval = fun(initialval, collection[i], i)
        }
        return initialval
    },
    identity: function (...args) {
        return args[0]
    },
    every: function (collection, predicate) {

    },
    isArrayLike: function (val) {

        return (typeof val != 'function') && val.length >= 0 && val.length < Number.MAX_SAFE_INTEGER

    },
    isArguments: function (val) {
        return !(typeof val != 'function')
    },
    difference: function (array, ...args) {
        var arg = args.join().split(',').map(Number)
        var temp = []
        for (let i = 0, j = 0; i < array.length; i++) {
            if (arg.indexOf(array[i]) == -1) {
                temp[j] = array[i]
                j++
            }
        }
        array = temp
        return array
    },
    differenceBy: function (array, ...args) {
        var iteratee = args[args.length - 1]
        switch (typeof iteratee) {
            case 'function':
                args.pop()
                var arg = args.join().split(',').map(Number)
                var temp = []
                for (let i = 0; i < arg.length; i++) {
                    arg[i] = iteratee(arg[i])
                }
                for (let j = 0, x = 0; j < array.length; j++) {
                    if (arg.indexOf(iteratee(array[j])) == -1) {
                        temp[x] = array[j]
                        x++
                    }
                }
                return array = temp
            case 'string':
                args.pop()
                var arg = args[0][0]
                var temp = []
                for (let i = 0, k = 0, j = 0; i < array.length; i++) {
                    if (arg[iteratee] != array[i][iteratee]) {
                        temp[k] = array[i]
                        k++
                    }
                }
                return array = temp
            default:
                var arg = args.join().split(',').map(Number)
                var temp = []
                for (let i = 0, j = 0; i < array.length; i++) {
                    if (arg.indexOf(array[i]) == -1) {
                        temp[j] = array[i]
                        j++
                    }
                }
                array = temp
                return array
        }
    },
    differenceWith: function (array, ...args) {
        let i = 0
        var temp = []
        var comparator = args.pop()
        while (array.length > i) {
            for (let j = 0; j < args.length; j++) {
                if (!comparator(array[i], args[j])) {
                    temp.push(array[i])
                }
            }
            i++
        }
        return array = temp
    }
}
