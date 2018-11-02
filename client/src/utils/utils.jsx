function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () { 
      callback(this.responseText) 
    };
    xhr.open('GET', url, true);
    xhr.send();
  }
  
  export function getUsefulContents(url, callback) {
    getJSON(url, data => callback(JSON.parse(data)));
  }

export function getSearchMapping(result) {
  var temp = []
  for (var key in result) {
    var obj = {}
    obj.title = result[key].ListName
    obj.description = result[key].ServiceProviderUid
    temp.push(obj)
  }
  return temp
}
  
  export function getLabelOfObject(arrayOfObj, label) {
    var objeLength = 0;
    if (arrayOfObj instanceof Array) {
      objeLength = arrayOfObj.length;
    } else {
      objeLength = Object.keys(arrayOfObj).length
    }
    if (objeLength > 0) {
    for (var i in arrayOfObj) {
      // if (objeLength == 0) {
      //   return 'hello';
      // }
      if ('object' == typeof arrayOfObj[i]) {
        console.log('### type of object ###',   arrayOfObj[i]);
        label++;
        getLabelOfObject(arrayOfObj[i], label);
      }

      // objeLength--;
      // if (arrayOfObj[i] instanceof Array && arrayOfObj[i].length > 0) {
      //   console.log('Array object = ', arrayOfObj[i]);
      //   label++;
      // }
      // getLabelOfObject(arrayOfObj[i]);
    }
  }
    //}
    //console.log('Label', label);
    return label;
  }