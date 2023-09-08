const getExcerpt = (str, len) => {
    return str.substring(0, len) + "...";
}

const sortData = (data, term, order) => {
    data.sort((a, b) => a[term] > b[term] ? order*(-1) : order);
    return data;
}

/**
   * 
   * @param {*} obj 
   * @returns 
   */
 function getUrlParams(obj) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const container = {};
    obj.forEach( item => {
      container[item] = urlParams.get(item);
    })
    return container;
  }