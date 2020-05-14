let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*你好，我叫小辛
*接下来我要演示下我的前端功底
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;

}
/*接下来我把div变成一个八卦图
*注意看好了
*首先，把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*现在加两个神秘的小球*/
#div1::before{
    width:100px;
    height:100px;
    border-radius:50%;
    left:50%;
    top:0;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    border-radius:50%;
    left:50%;
    top:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
/*现在让阴阳八卦图运转*/
#div1{
    
    animation: anim 1s infinite normal linear;
   
}
 @keyframes anim {
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
}
`;
let string2 = ''; //空字符串

let n = -1;
// console.log(string.length)
// string = string.replace(/\n/g, '<br>');


let step = (() => {

    setTimeout(() => {
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);

        n = n + 1;
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);

        if (string[n] === '\n') {

            string2 = string2 + '<br>'      //如果是回车，就不照搬（空字符串 加 换行）

        } else if (string[n] === ' ') {
            string2 = string2 + '&nbsp'     //判断缩进
        } else {

            string2 = string2 + string[n]   //如果不是回车，就照搬 （空字符串 加 字符）
        }
        // string[n] === '\n' ? string2 += '<br>' : string2 += string[n];
        // string2 += (string[n] === '\n' ? '<br>' : string[n]);

        if (n < string.length) {

            step()

        } else {
            return
        }

    }, 50)
})
step();
