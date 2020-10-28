console.log("Hi");

// お試し
// テスト
// 試しjbjhl

console.log("セブ島" + "留学");
// 上の回答の確認は検証ツールのconsoleにある セブ島留学

console.log(5 + 8);
console.log(4 - 2);
console.log(8 * 2);
console.log(6 / 3);
console.log(9 % 2);


console.log("5 たす 8=" + String (5 + 8));
// String の Sは大文字じゃないとエラーになる

let country = "japan";
console.log(country)
country = "Philippines";
console.log(country);


let schoolName = 'NexSeed';
console.log('私の所属先は、' + schoolName + 'です');
console.log(`私の所属先は、${schoolName}です`);

let job = "engineer";
console.log(`私の仕事は、${job}です`);



let applications =["LINE", "Facebook","Twitter",]
// 順番は０から数えられる
console.log(applications);

applications.push("Instagram");
console.log(applications);
// 追加の方法

console.log(applications[3]);


let capitalcities = {japan: "tokyo", Philippines: "manila"};
console.log(capitalcities);

capitalcities.America = "Washington";

console.log(capitalcities.America)



// 課題 例
// let studentlist = [
// {name:"seedくん",from:"セブ島", hobby:"サーフィン"},
// {name:"",from:"",hobby:""},
// ]

// console.log(studentlist[0].hobby);




// 課題

let studentlist = [
{name:"katumi",from:"okinawa",hobby:"ゲーム"},
{name:"ryuichi",from:"okinawa",hobby:"ゴルフ"},
{name:"goki",from:"okinawa",hobby:"サッカー"},
{name:"maiko",from:"okinawa",hobby:"食べ歩き"},
{name:"michiyo",from:"神奈川",hobby:"旅行"},
];

console.log(studentlist[0].name);
console.log(studentlist[3].from);
console.log(studentlist[4].hobby);






// 三次元配列
// let studentlist = [
// {name:"katumi",from:"okinawa",hobby:["ゲーム","yakyu"]},
// {name:"ryuichi",from:"okinawa",hobby:"ゴルフ"},
// {name:"goki",from:"okinawa",hobby:"サッカー"},
// {name:"maiko",from:"okinawa",hobby:"食べ歩き"},
// {name:"michiyo",from:"神奈川",hobby:"旅行"},
// ];




// let weightの数字を変えて確認
let weight = 217;
// >=は２００以上 ２００を含む
if(weight >= 200){
	console.log("ヘビー級")
}else if(weight >=115 && weight <=118){
	// ２つ以上の場合＆＆を挟む
	console.log("バンダム級")
}else {
	console.log("その他の階級")
}




let greeting = "gskjh";

switch (greeting){
	case "おはよう":
	console.log("日本語")
	break;
	// break;は必ず付ける 終わりの意味
	case "good morning":
	console.log("英語");
	break;
	default:
	console.log("?");
	break;
}



for (let i = 1; i <= 10; i++){
	console.log("繰り返しますよ");
	console.log(i);
}



for (let i = 2; i <=20; i++){
	console.log(i)
}





let studentlist2 = [
{name:"katumi",from:"okinawa",hobby:"ゲーム"},
{name:"ryuichi",from:"okinawa",hobby:"ゴルフ"},
{name:"goki",from:"okinawa",hobby:"サッカー"},
{name:"maiko",from:"okinawa",hobby:"食べ歩き"},
{name:"michiyo",from:"神奈川",hobby:"旅行"},
];

console.log(studentlist[0].name);
console.log(studentlist[1].name);
console.log(studentlist[2].name);
console.log(studentlist[3].name);
console.log(studentlist[4].name);

for(let i = 0; i <= 4; i++){
	console.log(studentlist2[i].name);
}



// 5の倍数は表示しない ５０まで１足して繰り返す
for(let i = 1; i <= 50; i++){
	if (i % 5 === 0) {
		continue;
	}
	console.log(i);
}



// 5の倍数以外は表示しない ５０まで１足して繰り返す
for(let i = 1; i <= 50; i++){
	if (i % 5 === 0){
	console.log(i);
	}else{
		continue;
	}
}





console.log("ランダム変数");
var random = Math.floor( Math.random() * 4);

console.log(random);

let omikuji = [
"大吉",
"中吉",
"小吉",
"go home"];

console.log(omikuji[random]);



























