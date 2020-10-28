// DOM Document Object MOdelの略
// HtmlのタグをObject(部品)と見立てて、javascriptで操作できる方法のこと


// タグ名を指定して、DOM操作する方法
// getElementsByTagName
let list = document.getElementsByTagName("a");
console.log(list);
console.log(list[0]);
console.log(list[1]);
console.log(list[0].href);

// getElementsByClassName
let fuga = document.getElementsByTagName("fuga");
console.log(fuga);

for (let i = 0; i < fuga.lenght; i++){
	console.log(fuga[i].textContent);
}

// querySelector
let tako = document.querySelector("#tako .ika");
console.log(tako);


// querySelectorAll(合致するすべての要素の取得)
let ika = document.querySelectorAll("tako .ika")
console.log(ika);