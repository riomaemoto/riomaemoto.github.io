// このファイルに処理を記述する
// let data = ["英単語２０個覚える","話題の映画を観にいく","お箸を買う"];
let data;
// もしもデータが保存されていたら取り出す、そうでなければ空の配列を代入しておく
// 取り出した中身があったら、trueと認識してくれる
if(localStorage.getItem("todoList")){
	data = JSON.parse(localStorage.getItem("todoList"));
}else{
	// localStorageに何もないときからの配列を入れる
	data = [];
	// []空を意味する
}



// // 保存されたデータを画面に表示する
// let displayText = data[0];

// // liタグを生成して、リストに追加する
// add_li_tag(displayText);

// // displayText = data[1];

// // add_li_tag(displayText);

// displayText = data[2];

// add_li_tag(displayText);
// 上記は１００のリストになると大変なので下のfor文で書いた方がいい
// 上でも３つリストは出る

// 配列の中身を取り出して、３つリストタグが表示されるようにしましょう(for文を使いましょう)
for(let displayText of data){
	add_li_tag(displayText);
}












// このファイルに処理を記述する
// モックのこれから作る部分をコメントアウトしておく
// addボタンが押された時の処理を作る
// addボタンが押されたら
// 1.入力文字のチェック
// 空文字だったら、何もしません
// 2.何か入力されてたら、新しいリストliをulに追加
// 3.新しいリストliには、右にdeleteボタンが表示されているようにする
// 追加されるliはどんどん下に追加されていく

// addボタン要素の取得
let add_btn = document.querySelector("#btn")
// addボタンが押された時のイベントを取得(addEventListener)
// イベントを察知したい要素.addEventListener("察知したいイベント名(文字列"),function(){イベントが発生}
add_btn.addEventListener("click",function(){
// 入力文字チェック
// 入力文字の取得
let task_input = document.querySelector("#input");


// 入力欄が空じゃなかったら処理を行う
if (task_input.value != ""){
	// liタグを生成して追加
	add_li_tag(task_input.value);


// 配列に、入力された値を追加
data.push(task_input.value);

// localStorageに配列を保存
// localStorage.setItem("キー","値");
localStorage.setItem("todoList",JSON.stringify(data));


// クリックした時に入力欄を空白にする
task_input.value = "";

}
});


// 追加するliタグを生成する関数
// task_text 仕事をしたいときに必要な文字列
// (タスクを表す文字列。保存されてる文字だったり、入力されてる文字だったり)
function add_li_tag(task_text){
	// liタグを追加する処理を記述する
	// 2.何か入力されてたら、新しいリストliをulに追加

// 親要素のulを変数に取得
let = todo_list = document.querySelector(".todo-list");

// 追加予定のliタグを生成
let add_li = document.createElement("li");
// これでadd_li に上で生成した<li></li>が入っている

// 生成したliタグの文字を、入力された文字にする(代入する)
// add_li.textContent = task_input.value;
// 生成したliタグの文字を、指定された文字にする(task_text)
add_li.textContent = task_text;

// add_li <li>入力された文字</li>
console.log(add_li);

// 生成したliタグにclass=list を追加する
add_li.classList.add("list");
// add_li <li class="list">入力された文字</li>が入っている


// 3.新しいリストliには、右にdeleteボタンが表示されているようにする
// 追加予定のdivタグ生成
let div_delete = document.createElement("div");
// div_delete <div></div>

// 生成したdivタグの文字をDeleteにする
div_delete.textContent = "Delete";
// div_delete <div>Delete</div>

// 生成したdivタグに,class="delete"を追加する
div_delete.classList.add("delete");
// div_delete <div class="delete">Delete</div>


// Deleteボタンが押されたら
// 押されたボタンの、親要素を削除する(親要素はli)
div_delete.addEventListener("click",function(){
	let hantei = confirm("本当に削除しますか？");
	if (hantei == true){
		// 配列から削除
		// data.splice 指定した要素からn個文のデータを削除
		// data.indexOf 指定した文字が配列の何番目にあたるかを検索
		// 配列data0番目から１データ消す
		// data.splice(0,1);
		// data.indexOf("ホノルルマラソンの準備をする") ⇨ 0番目に入ってたら、数字の０が返ってくる
		console.log(this.parentElement.textContent);
		// 不要な文字deleteを削除する
		let del_text = this.parentElement.textContent;
		del_text = del_text.replace("Delete","");
		// deleteをからにすることで削除
		data.splice(data.indexOf(del_text),1);


		this.parentElement.remove();

		// 削除済みの配列を全体的にローカルストレージに上書き保存
		localStorage.setItem("todoList",JSON.stringify(data));
	}
});



// 親要素liに生成したdivタグを追加
add_li.appendChild(div_delete);
// add_list <li class="list">入力された文字<div class="delete">Delete</div></li>


// 生成したliタグを親要素のulタグに追加
todo_list.appendChild(add_li);

}




















