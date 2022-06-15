function arrayToObject(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return {};
  }
  let obj = {};
  if (a.length != b.length) {
    if (a.length < b.length) {
      for (let r = 0; r < a.length; r++) {
        let key = a[r];
        let value = b[r];
        obj[key] = value;
      }
    } else {
      for (let v = 0; v < b.length; v++) {
        let key = a[v];
        let value = b[v];
        obj[key] = value;
      }
    }
  } else {
    for (let i = 0; i < a.length; i++) {
      let key = a[i];
      let value = b[i];
      obj[key] = value;
    }
  }
  return obj;
}

module.exports = arrayToObject;
