// canvas 绘制形状

var canvas = document.querySelector("#canvas");

var ctx;
if (canvas.getContext) {
  ctx = canvas.getContext("2d");

  // // 绘制一个矩形
  // ctx.fillRect(25, 25, 100, 100);
  // // 清空指定区域内的矩形
  // ctx.clearRect(45, 45, 60, 60);
  // // 绘制一个边框矩形
  // ctx.strokeRect(50, 50, 50, 50);


  //-----------------绘制路径-------------------
  // 绘制一个三角形
  // ctx.beginPath(); // 开始绘制
  // ctx.moveTo(20, 30); // 第一个点
  // ctx.lineTo(30, 20); // 第二个点
  // ctx.lineTo(30, 40); // 第三个点
  // ctx.fill();


}