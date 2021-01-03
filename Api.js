const axios = require("axios");

export default class Api {
  static get = async (url) => {
    var promise = await axios.get(url);
    return promise;
  };
}
