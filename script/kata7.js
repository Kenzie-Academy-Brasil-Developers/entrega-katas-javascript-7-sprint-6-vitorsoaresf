function newForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i], i, array);
    }
    return array;
}

function newMap(array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

function newFilter(array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

function newFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
}

function newFindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
}

function newReduce(array, callback, valueInitial = 0) {
    let result = valueInitial;
    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i], i, array)
    }
    return result;
}

function newSome(array, callback) {
    let result = false;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result = true;
        }
    }
    return result;
}

function newEvery(array, callback) {
    let result = true;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === false) {
            return false;
        }
    }
    return result;
}


function callbackAuxFill(currentValue, newValue) {
    currentValue = newValue;
    return currentValue;
}
function newFill(array, callback, valor, inicio = 0, fim = array.length) {
    if (inicio < 0) {
        inicio = Math.abs(inicio);
    }

    if (fim < 0) {
        fim = Math.abs(fim);
    }

    for (let i = inicio; i < fim; i++) {
        array[i] = callback(array[i], valor);
    }
    return array;
}

function callbackAuxIncludes(currentValue, searchElement) {
    if (currentValue === searchElement) {
        return true
    }
    return false;
}
function newIncludes(array, callback, searchElement, inicio = 0) {
    for (let i = inicio; i < array.length; i++) {
        if (callback(array[i], searchElement)) {
            return true;
        }
    }
    return false;
}


function callbackAuxIndexOf(currentValue, searchElement) {
    if (currentValue === searchElement) {
        return true
    }
    return false;
}
function newIndexOf(array, callback, searchElement, inicio = 0) {
    if (inicio >= array.length) {
        return -1;
    }

    if (inicio < 0) {
        inicio = array.length - inicio;
        if (inicio < 0) {
            inicio = 0;
        }
    }
    for (let i = inicio; i < array.length; i++) {
        if (callback(array[i], searchElement)) {
            return i;
        }
    }
    return -1;
}

function callbackAuxConcat(arrayResult, arrayCurrent) {
    for (let i = 0; i < arrayCurrent.length; i++) {
        arrayResult.push(arrayCurrent[i]);
    }
}
function newConcat(callback) {
    let result = [];

    for (let i = 1; i < arguments.length; i++) {
        callback(result, arguments[i]);
    }
    return result;
}

function callbackAuxJoin(valueCurrent) {
    return '' + valueCurrent;
}
function newJoin(array, callback, separator = '') {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        if (i + 1 === array.length) {
            result += callback(array[i]);
        } else {
            result += callback(array[i]) + '' + separator;
        }
    }

    return result;
}

function callbackAuxSlice(position, array) {
    return array[position];
}
function newSlice(array, callback, inicio = 0, fim = array.length) {
    let result = [];
    if (inicio > array.length) {
        return [];
    }
    if (inicio < 0) {
        if (fim < 0) {
            for (let i = array.length - Math.abs(inicio); i < array.length - Math.abs(fim); i++) {
                result.push(callback(i, array));
            }
        } else {
            for (let i = array.length - Math.abs(inicio); i < fim; i++) {
                result.push(callback(i, array));
            }
        }
    } else {
        if (fim < 0) {
            for (let i = inicio; i < array.length - Math.abs(fim); i++) {
                result.push(callback(i, array));
            }
        } else {
            for (let i = inicio; i < fim; i++) {
                result.push(callback(i, array));
            }
        }
    }

    return result;
}


function callbackAuxFlat(array) {
    return array.reduce((acc, val) => acc.concat(val), []);
}
function newFlat(array, callback, depth = 1) {
    let arrCopy = array.slice()
    for (let i = 0; i < depth; i++) {
        arrCopy = callback(arrCopy);
    }
    return arrCopy;
}

function newFlatMap(array, callback) {
    let arrCopy = array.slice()
    return arrCopy.reduce((acc, element, index, array) => acc.concat(callback(element, index, array)), []);
}