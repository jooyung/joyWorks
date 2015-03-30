var pageIncrease = 4;
var source =
[
	["^AAA"]
	,["$a"]
	,["^AA"]
	,["Cover"]


	  ,["참고문헌", 253]


	,["$차례", 8]
	,[":차례", 8]

  ,["^第一部《黃帝內經》의 書誌學的 考察", 15, 2, "blue"]
  ,[":1. 《黃帝內經》의 지은이", 17, 2]
  ,["^2. 《黃帝內經》이 지어진 시기", 19, 2]
  ,["1) 《黃帝內經》이 쓰여진 시기를 추측하는 데에 도움이되는 자료들", 20]
  ,["$2) 《黃帝內經》이 한 권의 책으로 엮어진 시기", 23]
  ,["^3. 《黃帝內經》이 전해 내려온 과정", 23, 2]
  ,["1) 《素問》이 전해 내려온 과정", 24]
  ,["2) 《九券》本이 전해 내려온 과정", 28]
  ,["3) 《太素》가 전해 내려온 과정", 31]
  ,["$4) 《甲乙經》이 전해 내려온 과정", 34]
  ,[":4. 內經, 素問, 靈樞의 의미", 36, 2]
  ,["^5. 《黃帝內經》연구의 흐름", 37, 2]
  ,["1) 宋이전 시기의 《內經》연구", 38]
  ,["2) 宋金元 시기의 《內經》연구", 39]
  ,["3) 明代의 《內經》연구", 40]
  ,["4) 淸代 및 최근세의 《內經》연구", 41]
  ,["$5) 일본 丹波元簡의 《素問識》《靈樞識》, 丹波元堅의 《素問紹識》", 43]
  ,[":參考文獻", 44]
  ,["^第二部《黃帝內經》의 理論槪括", 15, 2, "blue"]
  ,["^제1장 음양오행학설(陰陽五行學設)", 47, 0, "blue"]
  ,["1. 음양학설", 47]
  ,["2. 오행학설", 49]
  ,["$3. 陰陽과 五行의 관계", 51]
  ,["^제2장 장상론(藏象論)", 52, 0, "blue"]
  ,["^1. 장부(藏府)", 52, 2]
  ,["1) 오장(五藏)", 52]
  ,["2) 육부(六府)", 61]
  ,["3) 기항지부(奇恒之府)", 65]
  ,["4) 藏과 府의 상호관계", 67]
  ,["$5) 藏府와 신체 五官", 68]
  ,["^2. 精, 氣, 神", 71, 2]
  ,["1) 精", 72]
  ,["2) 氣", 74]
  ,["$3) 神", 75]
  ,["^제3장 체질론(體質論)", 77, 0, "blue"]
  ,["^1. 체질형성", 77, 2]
  ,["1) 체질은 선천적으로 결정된다.", 77]
  ,["$2) 체질은 후천적인 영향을 받는다.", 77]
  ,["^2. 체질분류", 79, 2]
  ,["1) 오행속성에 근거한 분류", 79]
  ,["2) 陰陽太少에 근거한 분류", 81]
  ,["3) 비만인과 수척인", 83]
  ,["$4) 稟性과 勇怯에 따른 분류", 83]
  ,["^3. 체질과 病機", 84, 2]
  ,["1) 체질과 발병", 84]
  ,["2) 체질과 病理", 85]
  ,["$3) 체질과 예후〔轉歸〕", 85]
  ,["^4. 체질과 진단 치료의 관계", 85, 2]
  ,["1) 形를 관찰하는 진단법", 85]
  ,["2) 사람에 따라서 치법을 세운다", 86]
  ,["3) 체질에 맞추어 약물을 선택한다", 86]
  ,["$4) 체질에 적합한 針法을 선택한다", 86]
  ,["^제4장 경락학설(經絡學設)", 88, 0, "blue"]
  ,["^1. 十二經脈", 88, 2]
  ,["1) 流注法則", 88]
  ,["2) 순행부위", 89]
  ,["3) 유주순서", 92]
  ,["4) 經絡의 表裏", 93]
  ,["$5) 氣血多少", 93]
  ,["^2. 奇經八脈", 94, 2]
  ,["1) 任脈", 94]
  ,["2) 督脈", 94]
  ,["3) 衝脈", 94]
  ,["4) 帶脈", 95]
  ,["5) 陰교脈과 陽교脈", 95]
  ,["6) 陰維脈과 陽維脈", 95]
  ,["$소결", 95]
  ,["^제5장 병기(病機)", 96, 0, "blue"]
  ,[":1. 발병", 96, 2]
  ,["^2. 病因", 98, 2]
  ,["1) 六淫", 98]
  ,["2) 七情", 102]
  ,["3) 음식과 과로상", 103]
  ,["$4) 기타 병인", 104]
  ,["^3. 病理", 106, 2]
  ,["1) 기본적인 병리설", 106]
  ,["2) 藏府病理", 110]
  ,["3) 六氣病理", 116]
  ,["$4) 經絡病理", 119]
  ,["^제6장 지병", 123, 0, "blue"]
  ,["^1. 내과질환", 123, 2]
  ,["1) 전신질환", 123]
  ,["2) 심혈관계 질환", 153]
  ,["3) 호흡기 질환", 154]
  ,["4) 소화기 질환", 155]
  ,["5) 비뇨생식기 질환", 160]
  ,["6) 전염성 질환", 163]
  ,["$7) 종양성 질환", 169]
  ,["^2. 外科", 172, 2]
  ,["1) 창양(瘡瘍)", 172]
  ,["2) 옹저(癰疽)", 172]
  ,["3) 정(정)", 174]
  ,["4) 나력(나瀝), 附記: 鼠瘻, 馬刀, 狹영", 174]
  ,["5) 종근식(腫根蝕)", 174]
  ,["6) 단표(丹표)", 174]
  ,["7) 촉(촉)", 175]
  ,["8) 좌비(좌비), 사(○), 가진비(苛軫鼻)", 175]
  ,["9) 진(疹)", 175]
  ,["10) 우(우)", 175]
  ,["11) 침음(浸淫)", 175]
  ,["12) 피부소양, 피부통증", 176]
  ,["13) 치루(痔瘻)", 176]
  ,["$14) 근류(筋溜)", 176]
  ,["^3. 신경정신과 질환", 176, 2]
  ,["1) 전간(癲癎)", 176]
  ,["2) 광(狂). 附記: 경(驚)", 177]
  ,["3) 현훈(眩暈). 附記: 惑, 視岐", 179]
  ,["4) 선망(善忘:건망증)", 179]
  ,["5) 탈영(脫營), 실정(失精)", 179]
  ,["$6) 수면관계 질환", 180]
  ,["^4. 오관과", 181, 2]
  ,["1) 눈병", 182]
  ,["2) 콧병", 183]
  ,["3) 귓병", 183]
  ,["4) 입병", 184]
  ,["5) 치설(齒舌), 치순(齒脣), 치협(齒頰)", 184]
  ,["6) 이빨병", 184]
  ,["7) 혀병", 184]
  ,["$8) 목구멍병", 185]
  ,["^5. 부인과", 186, 2]
  ,["1) 월경병(月經病)", 186]
  ,["2) 대하(帶下)", 187]
  ,["3) 임신 중 발생하는 질병", 188]
  ,["4) 산후병", 188]
  ,["5) 불임증", 189]
  ,["$6) 기타", 189]
  ,[":6. 영아병(영兒病)", 190, 2]
  ,["^제7장 진단(診斷)", 190, 0, "blue"]
  ,["^1. 望診", 191, 2]
  ,["1) 神色", 191]
  ,["2) 몸매와 태도", 194]
  ,["$3) 혀", 194]
  ,[":2. 聞診", 195, 2]
  ,[":3. 問診", 195, 2]
  ,[":4. 切診", 196, 2]
  ,["1) 切脈[診脈]", 196]
  ,["2) 按診", 202]
  ,["$소결", 204]
  ,["^제8장 치료(治療)", 204, 0, "blue"]
  ,["^1. 예방[治未病]", 205, 2]
  ,["1) 攝生", 205]
  ,["$2) 疾病이 傳變하는 것을 예방[治未病]", 206]
  ,["^2. 치료원칙", 206, 2]
  ,["1) 계절, 풍토, 체질을 고려한다", 206]
  ,["2) 말단과 뿌리[標本]", 209]
  ,["3) 正治와 反治", 210]
  ,["$4) 辨證論治", 213]
  ,["^3. 침구(針灸)", 214, 2]
  ,["1) 기본 원리", 214]
  ,["2) 자침하는 방법", 215]
  ,["$3) 뜸", 219]
  ,["^4. 약물과 처방", 220, 2]
  ,["1) 약물 성질과 효능", 220]
  ,["$2) 방제배합", 221]
  ,[":5. 음식 금기", 223, 2]
  ,[":6. 精神治療", 224, 2]
  ,["^7. 내경십삼방(內經十三方)", 224, 2]
  ,["1) 탕액료례(湯液료醴)", 225]
  ,["2) 생철락음(生鐵洛飮)", 225]
  ,["3) 좌각발주(左角髮酒)", 225]
  ,["4) 택사음(澤瀉飮)", 226]
  ,["5) 계시례(계矢醴)", 226]
  ,["6) 오적골환(烏賊骨丸)", 226]
  ,["7) 난초탕(蘭草湯)", 226]
  ,["8) 시고(豕膏)", 226]
  ,["9) 릉교음(菱翹飮)", 227]
  ,["10) 반하출미탕(半夏출米湯)", 227]
  ,["11) 마고고법(馬膏膏法)", 227]
  ,["12) 한비울법(寒痺위法)", 228]
  ,["$13) 소금단(小金丹)", 228]
  ,["^제9장 운기학설(運氣學設)", 229, 0, "blue"]
  ,["^1. 天千과 地支", 230, 2]
  ,["1) 天千과 地支의 명칭", 230]
  ,["2) 千과 支의 음양속성", 230]
  ,["$3) 千支 오행 배속", 231]
  ,[":2. 甲子", 232, 2]
  ,["^3. 五運", 233, 2]
  ,["1) 大運", 233]
  ,["2) 主運", 236]
  ,["3) 客運", 237]
  ,["$소결", 238]
  ,["^4. 六氣", 238, 2]
  ,["1) 主氣", 239]
  ,["2) 客氣", 240]
  ,["3) 客主加臨", 244]
  ,["$소결", 245]
  ,["^5. 運과 氣를 결합", 246, 2]
  ,["1) 運氣가 서로 臨하여 나타나는 성쇠", 246]
  ,["$2) 運과 氣가 같은 여러 유형", 247]
  ,["^6. 運氣學設을 의학에 응용하는 방법", 250, 2]
  ,["1) 각 해 일정한 기후와 질병이 발생하는 상황을 추측한다.", 250]
  ,["$2) 매년 이상 기후와 질병 발생을 예측한다.", 251]


];



/**
 * Do it: Convert Data, Start, Console Clear
 * ------------------------------------------
 * ^: Make a child to the parent, and go on making its own children until $ is met
 * :: Same with ^, but just return because it has no children
 * $: end of children, so return
 */

// this.bookmarkRoot.remove();
// console.println("\r");

var data = converting(source);
// start(bookmarkRoot);
// console.clear();

/**
 * Functions
 */

function cc(msg) {
	console.log(msg);
}

// ,["^7. 내경십삼방(內經十三方)", 224, 2]
function converting(src) {
	var bmks = [];
	var tmpArray = [];
	var content;
	for (var i=0; i<src.length; i++) {
		content = src[i][0];
		if (content[0] == '^') cc(content.slice(1));
	}
}











// function start(BOOKMARK) {
// 	var i;
// 	for (i in data) {
// 		makeBookmark(BOOKMARK, i, data[i]["first"]);
// 		console.println("\r");
// 	}

// 	for (i in data) {
// 		handleChildren(BOOKMARK.children[i], data[i]["second"]);
// 	}
// }

function handleObject(BOOKMARK, pos, myObj) {
	if (checkType(myObj) != "object") return;
	makeBookmark(BOOKMARK, pos, myObj["first"]);
	// console.println(pos + " : " + BOOKMARK.children.length);
	handleChildren(BOOKMARK.children[pos], myObj["second"]);
	// console.println(BOOKMARK.children.length);
}

function handleChildren(BOOKMARK, myArray) {
	if (checkType(myArray) != "array") return;
	var i, myData, myType;
	for (i in myArray) {
		myData = myArray[i];
		myType = checkType(myArray[i]);
		if (myType == "array") {
			makeBookmark(BOOKMARK, i, myData);
		}
		else if (myType == "object") {
			// console.println("-----------------------------");
			// console.println("   C H I L D R E N    ");
			// console.println("-----------------------------");
			handleObject(BOOKMARK, i, myData);
		}
	}
}

function makeBookmark(BOOKMARK, pos, bmkArray) {
	var len = bmkArray.length;
	var myName, myPagenumber, myStyle, myColor;
	myName = bmkArray[0];
	myPagenumber = 0;
	myStyle = 0;
	myColor = "black";
	if (len > 1) myPagenumber = bmkArray[1] + pageIncrease;
	if (len > 2) myStyle = bmkArray[2];
	if (len > 3) myColor = bmkArray[3];

	if (myColor == "blue") myColor = ["RGB", 0, 0.0, 1];
	else if (myColor == "green") myColor = ["RGB", 0, 0.3, 0.7];
	else if (myColor == "red") myColor = ["RGB", 1, 0.0, 0.0];

	BOOKMARK.createChild(myName, "pageNum="+myPagenumber, pos);
	var childBookmark = BOOKMARK.children[pos];
	childBookmark.style = myStyle;
	childBookmark.color = myColor;

	//console.println("name: " + myName + ", page: " + myPagenumber + ", style: " + myStyle + ", color: " + myColor);
}

function checkType(myData) {
	if (myData instanceof Array) return "array";
	else if (myData instanceof Object) return "object";
}

/**
 * OBSELETES
 */

// function converting() {
// 	var data = [];
// 	var len = source.length;
// 	var i, head, item, old;

// 	for (i=0; i<len; i++) {
// 		item = source[i];
// 		head = item[0][0];
// 		if (head == "^") {
// 			old = {};
// 			item[0] = item[0].substring(1);
// 			old.first = item;
// 			old.second = [];
// 		} else if (head == ":") {
// 			item[0] = item[0].substring(1);
// 			data.push({first: item});
// 		} else if (head == "$") {
// 			item[0] = item[0].substring(1);
// 			old.second.push(item);
// 			data.push(old);
// 			old = {};
// 		} else {
// 			old.second.push(item);
// 		}
// 	}

// 	return data;
// }
