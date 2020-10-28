console.log("----------関数--------------");
// // 関数の書き方
// // function 関数名(){
// 	処理
// }

function myalert(){
	// alert("自作関数からHello");
	// 自作のアラートは表示後も事由に処理を追加できる
	let hantei = confirm("このボタン押しても良いですか？");
// console.log(hantei);
// 問題
// okボタンが押されたら、「大丈夫」、
// キャンセルが押されたら 「やり直し」
// コンソールに表示しましょう

if (hantei === true) {
	console.log("大丈夫");
}else {
	console.log("やり直し");
	}


// 文字の変え方

// okボタンが押されたら、「大丈夫」、
// キャンセルが押されたら 「やり直し」
// とid="message"のspanタグの部分に表示しましょう
let messageSpan = document.getElementById("message");
if (hantei === true) {
messageSpan.textContent = "大丈夫";
}else {
messageSpan.textContent = "やり直し";
}

messageSpan.style.color = "blue";
}




// 関数とは複数の処理を１つ人まとめて名前をつけたもの
// 引数とは処理を行うために必要な情報
// 関数の書き方
// function 関数名(引数1,引数2,...){
// 	処理
// }

// alert(表示したい文字) 場合、表示したい文字、部分が引数に当たる


function myalert2(displayMessage){
	alert(displayMessage);
}



"----------関数引数--------------"
// 関数名printHoge
// 処理内容 Hoge とコンソールに表示する

// function printHoge(){
// 	console.log("Hoge");
// }

// printHoge();



// 引数あるバージョン
function printHoge(moji){
	console.log(moji);
}
printHoge("Hoge");




// 関数名 printNum
// 引数 １つの数値
// 処理内容 引数で受け取った数値をコンソールに表示する

// 関数完成
// function printNum(number){}   numberは名前 なんでも良い

function printNum(number){
	console.log("number");
}

printNum(8);

// // イメージは
// // function printNum(number){
// // 	        printNum(8);ここは入れられた文字をprintNumに投げている

// console.log("この指定された引数numberで受け取る")



// 関数名：printKuku
// 引数：1つの数値
// 処理内容：引数で受け取った数値の九九（1から9までかけた数）を出力する

// （自分の書いた答え 間違えの文）
// function printKuku(num1){
// 	console.log("num1")
// }

// for (let i = 1; i <= 9; i++) {
// 	console.log(`-------${i}の段--------`);
// 	for (let j = 1; j <= 9; j++) {
// 		let res = i * j;
// 		console.log(`${i}×${j}=${res}`);
// 	}
// }

// printKuku(1);

// 正しい答え
function printKuku(num1){
	for (let i = 1; i <=9; i++){
		console.log(num1 * i);
	}
}

printKuku(6);



function printKuku(num2,num3){
		console.log(num2 * num3);
	}

printKuku(6,2);



// 関数名：printIsEven
// 引数：1つの数値
// 処理内容：引数で受け取った数値が偶数の場合は
// 「偶数です」と出力し、奇数の場合は「奇数です」と出力する


function printIsEven(num4){
	if (num4 % 2 === 0) {
		console.log("偶数")
	}else {
		console.log("奇数")
	}
}

printIsEven(7);
printIsEven(2);
printIsEven(174);
printIsEven(13948731);




// 関数名：printMessage
// 引数1：1つの文字列
// 引数2：1つの数字
// 処理内容：引数で受け取った文字列を、引数で受け取った数値分繰り返し出力する

function printMessage(moji,suuji){
	for(let i = 1; i <= suuji; i++) {
		console.log(moji);
	}
}

printMessage("ドラえもん",4);












function printMaxNum(num1,num2){
	if (num1 > num2){
		console.log(num1);
	}else if (num1 < num2){
		console.log(num2);
	}else {
		console.log("同じ");
	}
}


printMaxNum(3,8);













function getSquared(num) {
    return num * num
}

var result = getSquared(4);
console.log(result);












function createSelfIntroductionText(name) {
    var msg = "私の名前は" + name + "です";
    return msg;
}

var message = createSelfIntroductionText("leo");
console.log(message);












function isEvenNumber(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var result = isEvenNumber(7);
console.log(result);















function isSeedKun(name) {
    if (name == "SeedKun") {
        return true;
    } else {
        return false;
    }
}

var result = isSeedKun("SeedKun");
console.log(result);





// let 変数名   は再宣言できない 再代入できる
// var 変数名   再宣言できる  再代入できる
// const 定数名 再宣言も再代入もできない


const company = "nexseed";
var message = createSelfIntroductionText(company);
console.log(message);











