export function flattenObject(obj, separator = '.') {
    const result = {};
  
    function recurse(currentObj, currentKey) {
      for (const key in currentObj) {
        const newKey = currentKey ? currentKey + separator + key : key;
        if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
          recurse(currentObj[key], newKey);
        } else {
          result[newKey] = currentObj[key];
        }
      }
    }
  
    recurse(obj, '');
  
    return result;
  }
