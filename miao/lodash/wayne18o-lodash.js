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
    differenceWith: function (array, args, comparator) {
        var temp = []
        for (let j = 0; j < args.length; j++) {
            for (let i = 0; i < array.length; i++) {
                if (!(comparator(array[i], args[j]))) {
                    temp.push(array[i])
                }
            }
        }
        return array = temp
    },
    drop: function (array, n = 1) {
        // var temp = []
        // for (; n < array.length; n++) {
        //     temp.push(array[n])
        // }
        // return array = temp
        return array.slice(n)
    },
    dropRight: function (array, n = 1) {
        while (n > 0) {
            array.pop()
            n--
        }
        return array
    },
    dropWhile: function (array, predicate) {

    },
    dropRightWhile: function (array, predicate) {
        predicate = this.iteratee(predicate)
        for (var i = 0; i < array.length; i++) {
            if (!predicate(array[i])) {
                return array.slice(i)
            }
        }
        return array.slice(i)
    },
    isMatch: function isMatch(obj, src) {
        if (obj === src) {
            return true
        }
        for (var key in obj) {
            if (typeof src[key] == 'object' && src[key] !== null) {
                if (!isMatch(obj[key], src[key])) {
                    return false
                } else {
                    return true
                }
            } else {
                if (obj[key] != src[key] && src[key] !== undefined) {
                    return false
                }
            }
        }
        return true
    },
    matches: function (src) {
        return function (obj) {
            return wayne18o.isMatch(obj, src)
        }
    },
    toPath: function (str) {
        return str.split(/\.|\[|\]./g)
    },
    isEqual: function (val, other) {
        //判断长度是否一样
        if (Object.keys(val).length !== Object.keys(other).length) {
            return false
        }
        //判断类型
        var type1 = Object.prototype.toString.call(val)
        var type2 = Object.prototype.toString.call(other)
        var bool = type1 == type2
        //类型不一样直接返回
        if (!bool) {
            return false
        }
        switch (type1) {
            case '[object Number]':
                return val === other
            case '[object String]':
                return val === other
            case '[object Object]':
                for (let key in val) {
                    if (other[key] == undefined) {
                        return false
                    }
                    if (typeof val[key] !== 'object') {
                        if (val[key] !== other[key]) {
                            return false
                        }
                    } else {
                        return wayne18o.isEqual(val[key], other[key])
                    }
                }
                return true
            case '[object Array]':
                for (let key in val) {
                    if (typeof val[key] !== 'object') {
                        if (val[key] !== other[key]) {
                            return false
                        }
                    } else {
                        return wayne18o.isEqual(val[key], other[key])
                    }
                }
                return true
        }
    },
    matchesProperty: function (path, value) {
        return function (obj) {
            return wayne18o.isEqual(get(obj, path), value)
        }
    },
    get: function (obj, path, defaultVal) {
        var path = wayne18o.toPath(path)
        for (var key of path) {
            if (obj[key] == undefined) {
                return defaultVal
            }
            obj = obj[key]
        }
        return obj
    },
    property: function (path) {
        return function (obj) {
            return wayne18o.get(obj, path)
        }
    },
    iteratee: function (val) {
        if (typeof val == 'string') {
            return this.property(val)
        }
        if (Array.isArray(val)) {
            return this.matchesProperty(val)
        }
        if (typeof val == 'object') {
            return this.matches(val)
        }
        return val
    },
}
