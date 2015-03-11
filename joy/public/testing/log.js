
/**
 * @function Array.isArray 
 *      Array.isArray를 지원하지 않는 브라우저의 fallback 함수
 */
if (!Array.isArray) {
    Array.isArray = function (args) {
        return Object.prototype.toString.call(args) === "[object Array]";
    };
}

/**
 * @object js
 *      namespace로 웹 페이지에 결과 출력을 제어합니다.
 */
var js = {};
js.lineNumber = 1;

/**
 * @method log
 *      div#showLog에 파라미터 값을 출력합니다.
 * @param {Mixed} text, 출력한 값
 * @param {Mixed} arguments, (option) 다수의 파라미터를 지정할 수 있습니다.
 */
js.log = function(text){
    var node, child, lineText;

    node = document.getElementById('showLog');
    if (!node){
        node = document.createElement('div');
        node.id = 'showLog';
        document.body.appendChild(node);
    }

    child = document.createElement('div');

    lineText = js.lineNumber + '. ';
    if (Array.isArray(text)){
        lineText = lineText + '[' + text + ']';
    } else {
        lineText = lineText + text;
    }

    if (arguments.length > 1){
        for (var k = 1; k < arguments.length; k++){
            lineText += arguments[k];
        }
    }

    child.innerText === undefined ? child.textContent = lineText : child.innerText = lineText;
    node.appendChild(child);
    js.lineNumber += 1;
    return this;
};

/**
 * @method show
 *      배열 엘리먼트 값을 하나씩 줄을 바꿔가면서 출력합니다.
 * @param {Array} result, 출력할 값 리스트
 */
js.show = function(result){
    for (var k = 0; k < result.length; k++){
        this.log(result[k]);
    }
};

/**
 * @method clear
 *      div#div_log에 표시된 콘텐츠를 지웁니다.
 */
js.clear = function(){
    var node = document.getElementById('showLog');
    if (node){
        node.innerHTML = '';
    }
    this.lineNumber = 1;
}
