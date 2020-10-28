// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1


// Q 2


// Q 3


// Q 4 (難)
// 「for of」を使います。

// Q 5


// Q 6
var q6_text = document.querySelector("#q6-text");
// 要素.addEventListener(イベント名,function(){イベント時に行う処理})
q6_text.addEventListener("click",function(){
	this.style.color = "red";
});




// Q 7

var q7_text = document.querySelector("#q7-text");
q7_text.addEventListener("mouseover",function(){
	this.style.color = "yellow";
});

q7_text.addEventListener("mouseleave",function(){
	this.style.color = "";
});

q7_text.addEventListener("mouseleave",function(){
	this.style.backgroundcolor = "blue";
});






// Q 8
var q8_text = document.querySelector("#q8-text");
q8_text.addEventListener("mouseover",function(){
	this.style.backgroundcolor = "blue";
});

q8_text.addEventListener("mouseleave",function(){
	this.style.color = "";
});





// Q 9
var input = document.querySelector("#q9-text");
console.log(input.value);

function getInput(){
	var input = document.querySelector("#q9-text");
console.log(input.value);
}
// Q 10

