const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = collection instanceof Array ? collection : Object.values(collection)
      for(let i=0; i < newCollection.length; i++)
        callback(newCollection[i])
      return collection
    },

    map: function(collection, callback) {
      const newCollection = collection instanceof Array ? collection : Object.values(collection)
      for(let i=0; i < newCollection.length; i++)
        newCollection[i] = callback(newCollection[i])
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let seed = acc ? acc : collection[0]
      let i = acc ? 0 : 1
      for(; i < collection.length; i++){
        seed = callback(seed, collection[i], collection)
      }
      return seed
    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i]
        }
      }
    },

    filter: function (collection, predicate) {
      const newCollection = []
      for(let i=0; i < collection.length; i++){
        if(predicate(collection[i])){
          newCollection.push(collection[i])
        }
      }
      return newCollection
    },

    size: function (collection) {
      const newCollection = collection instanceof Array ? collection : Object.values(collection)
      return newCollection.length
    },

    first: function (array, n) {
      if(n){
        const subarray = []
        for(let i=0; i < n; i++)
          subarray.push(array[i])
        return subarray
      }
      else {
        return array[0]
      }
    },

    last: function (array, n) {
      const arrayLength = array.length
      if(n){
        const subarray = []
        for(let i = arrayLength - 1; i >= arrayLength - n; i--)
          subarray.unshift(array[i])
        return subarray
      }
      else {
        return array[arrayLength - 1]
      }
    },

    compact: function (array) {
      const subarray = []
      for (let i = 0; i < array.length; i++){
        if (array[i])
          subarray.push(array[i])
      }
      return subarray
    },

    sortBy: function (array, callback) {
      const newArray = [...array]
      return newArray.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function (array, shallow) {
      let newArray = []
      while(array.length) {
        let value = array.shift()
        if(Array.isArray(value)) {
          if (shallow){
            newArray = newArray.concat(value)
          }
          else{
            array = value.concat(array)
          }
        }
        else {
          newArray.push(value)
        }
      }
      return newArray
    },

    uniq: function (array, isSorted, callback=function(e){return e}){
      const newArray = []
      const cbValues = []
      for(let i = 0; i < array.length; i++){
        if(!cbValues.includes(callback(array[i])))
        {
          cbValues.push(callback(array[i]))
          newArray.push(array[i])
        }
      }
      return newArray
    },

    keys: function (object) {
      const keys = []
      for (let k in object)
        keys.push(k)
      return keys
    },

    values: function(object) {
      const values = []
      for (let k in object)
        values.push(object[k])
      return values
    },

    functions: function (object) {
      const functNames = []
      for (let k in object) {
        if (typeof object[k] === "function"){
          functNames.push(k)
        }
      }
      return functNames.sort()
    },

    giveMeMore: function () {
      return "Give me more"
    }

  }
})()

fi.libraryMethod()
