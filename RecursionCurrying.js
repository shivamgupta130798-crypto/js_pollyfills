function infineteCurrying(a) {
    return function (b) {
        if (b) return infineteCurrying(a + b)
        return a
    }
}

const val = infineteCurrying(2)(3)(4)(5)()
