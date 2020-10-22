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
let messageSpan = document.getElementById("message");
if (true) {
messageSpan.textContent = "大丈夫";
}else {
messageSpan.textContent = "やり直し";
}

messageSpan.style.color = "blue";
}


// okボタンが押されたら、「大丈夫」、
// キャンセルが押されたら 「やり直し」
// とid="message"のspanタグの部分に表示しましょう