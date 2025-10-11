function Memoize(func, context) {
    const CacheMap = new Map();

    return function(...args) {
        const argsCache = JSON.stringify(args);

        if (CacheMap.has(argsCache)) {
            return CacheMap.get(argsCache);
        }

        const result = func.call(context || this, ...args);
        CacheMap.set(argsCache, result);

        return result;
    };
}
