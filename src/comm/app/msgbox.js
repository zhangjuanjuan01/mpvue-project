/*弹框
* 通过调用小程序的接口实现弹框
* 小程序的具体接口参数参考如下：
* https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowtoastobject
* */
const MsgBox = {
    /*
    警告框 example:
    Msgbox.alert("你好")，
    Msgbox.alert("你好",function(){console.log("1111")});
    其他参数需要修改的写到options中
    * */
    alert:(content="",confirmHandler,options)=>{
      const args = {
        content:content,
        showCancel:false,
        confirmColor: "#00a8f1",
        success:function(res){
          if(res.confirm){
            confirmHandler && confirmHandler();
          }
        }
      };
     wx.showModal(Object.assign({},args,options));
    },
    /*
    * 确认框 example:
    * Msgbox.confirm("确定吗？",function(){
    * console.log("confirm clicked")},function(){
    * console.log("cancel clicked")
    * })
    * 如需修改其他参数请在options中修改
    * */
    confirm: (content = "", confirmHandler, cancelHandler,options)=>{
      const args = {
        title:"确认框",
        content: content,
        confirmText:"确认",
        cancelText:"取消",
        success: function (res) {
          if (res.confirm) {
              confirmHandler&&confirmHandler();
          }
          if(res.cancel){
              cancelHandler&&cancelHandler();
          }
        }
      };
      wx.showModal(Object.assign({}, args, options));
    },
    /*
    * loading框 example:
    * MsgBox.loading("加载中");
    * 注意：必须使用MsgBox.hideLoading() 关闭
    * */
    loading: (title="加载中",options)=>{
        wx.showLoading(Object.assign({}, {title: title}, options));
    },
    hideLoading:()=>{
      wx.hideLoading();
    },
    /*
     * toast框 example:
     * MsgBox.toast("请输入");
     * MsgBox.toastSuccess("哈哈成功啦");
     * MsgBox.warnToast("出错时的提示信息，图标显示为一个感叹号");
     * */
    toast:(title="",options)=>{
      //这个有兼容性问题，低版本设置icon='none'不起作用 最低版本1.9.0
      wx.showToast(Object.assign({}, { title: title, icon:"none",duration: 1000}, options));
    },
    succToast:(title="操作成功",options)=>{
      wx.showToast(Object.assign({}, { title: title, icon: "success", duration: 1000}, options));
    },
    warnToast:(title="警告",options)=>{
      wx.showToast(Object.assign({}, { title: title, image: "../../image/warning.png", duration: 1000}, options));
    }
};
module.exports = MsgBox;
//export default MsgBox;对应import MsgBox from "../../comm/msgbox.js"
// module.exports = MsgBox; 对应const MsgBox = require("../../comm/msgbox");