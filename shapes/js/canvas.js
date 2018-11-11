// canvas 绘制形状

var canvas = document.querySelector("#canvas");

var ctx;
if (canvas.getContext) {
  ctx = canvas.getContext("2d");

  // 绘制一个矩形
  // ctx.fillRect(25, 25, 100, 100);
  // // 清空指定区域内的矩形
  // ctx.clearRect(45, 45, 60, 60);
  // // 绘制一个边框矩形
  // ctx.strokeRect(50, 50, 50, 50);

  // 绘制一个三角形
  // ctx.beginPath(); // 开始绘制
  // ctx.moveTo(20, 30); // 第一个点
  // ctx.lineTo(30, 20); // 第二个点
  // ctx.lineTo(30, 40); // 第三个点
  // ctx.fill();

  // 移动笔触,画一个笑脸
  // ctx.beginPath();
  // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // true 代码逆时针
  // ctx.moveTo(110, 75); // 使用moveTo是移动画笔，如果不使用这个方法在画版上会有移动的痕迹
  // ctx.arc(75, 75, 35, 0, Math.PI, false);
  // ctx.moveTo(65, 65);
  // ctx.arc(60, 65, 5, 0, Math.PI * 2, false);
  // ctx.moveTo(95, 65);
  // ctx.arc(90, 65, 5, 0, Math.PI * 2, false);
  // ctx.stroke();

  // 利用画直线，绘制三角形
  // ctx.beginPath();
  // ctx.moveTo(25, 25);
  // ctx.lineTo(105, 25);
  // ctx.lineTo(25, 105);
  // ctx.fill();
  //
  // // 绘制描边三角形
  // ctx.beginPath();
  // ctx.moveTo(125, 125);
  // ctx.lineTo(125, 45);
  // ctx.lineTo(45, 125);
  // ctx.closePath();
  // ctx.stroke();

  // 圆弧用过就是上面的arc方法

  // 二次贝塞尔与三次贝塞尔曲线
  // 详情见：https://github.com/hujiulong/blog/issues/1
  // ctx.beginPath();
  // ctx.moveTo(75, 25);
  // ctx.quadraticCurveTo(25, 25, 25, 62.5);
  // ctx.quadraticCurveTo(25,100,50,100);
  // ctx.quadraticCurveTo(50,120,30,125);
  // ctx.quadraticCurveTo(60,120,65,100);
  // ctx.quadraticCurveTo(125,100,125,62.5);
  // ctx.quadraticCurveTo(125,25,75,25);
  // ctx.stroke();

  // 三次贝塞尔曲线
  ctx.beginPath();
  ctx.moveTo(75,40);
  ctx.bezierCurveTo(75,37,70,25,50,25);
  ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
  ctx.bezierCurveTo(20,80,40,102,75,120);
  ctx.bezierCurveTo(110,102,130,80,130,62.5);
  ctx.bezierCurveTo(130,62.5,130,25,100,25);
  ctx.bezierCurveTo(85,25,75,37,75,40);
  ctx.fill();
}