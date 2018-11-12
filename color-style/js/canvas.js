// canvas 绘制形状

var canvas = document.querySelector("#canvas");
var ctx;
if (canvas.getContext) {
  ctx = canvas.getContext("2d");

}