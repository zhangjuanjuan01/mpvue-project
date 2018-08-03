const Fly = process.env.NODE_ENV==='H5'?require("flyio/dist/npm/fly"):require("flyio/dist/npm/wx")
const request = new Fly();
const baseUrl = 'http://10.1.60.54:90/';
request.config = {
  baseURL:baseUrl//请求基地址
};
export default request
