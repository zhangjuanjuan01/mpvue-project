const msgbox = process.env.NODE_ENV==='H5'? require('../lib/weui'):require('./app/msgbox');
export default msgbox;