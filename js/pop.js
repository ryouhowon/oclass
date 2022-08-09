// pop.js

var dark = document.querySelector("#dark");
var popup = document.querySelector("#popup");
var $body = document.querySelector("body");

var $pop_active = popup.classList.contains("active") // hasClass와 동일 (특정 클래스명이 존재하면 true, 없으면 false)
console.log($pop_active);
if($pop_active){
    $body.classList.add("overflow");
}else{
    $body.classList.remove("overflow");
}

function popClose(){
    dark.classList.remove("active");
    popup.classList.remove("active");
    $body.classList.remove("overflow");
}

console.log(popup.children[0]);
popup.children[0].addEventListener("click", function(){
    popClose();
});

dark.addEventListener("click", function(){
    popClose();
});

function setCookie(name, value, expirehours){
    var todayDate = new Date();
    todayDate.setHours(todayDate.getHours() + expirehours);
    console.log(todayDate); // 현재 시각이 15시라면 다음날 15시라고 설정
    console.log(todayDate.toGMTString()); // 기존 쿠키에 담겨진 name과 value 값을 가져온다
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";

    // 문서의 쿠키를 설정하는 과정에서 key(name)와 16진수에 의한 쿠키 설정 value값과 동일하고 경로 설정이 현재 위치이며, 설정시간이 쿠키설정의 제한시간과 동일한 값으로 구성
    
    // escape() 내장함수 :알파벳과 숫자 및 (*, @, -, _, +, ., /)를 제외한 모든 문자를 16진수로 변경한다 쉼표와 세미콜론 같은 문자가 쿠키열에서 충돌하는 것을 방지
    
    // 콤마의 용도 : 객체의 분리
    // 세미콜론의 용도 : 문장의 종료 

    // toGMTString() : 표준시(GMT)를 사용하여 문자열로 변환된 일자를 반환(영국시간 - 그리니치 천문대의 시간을 기준으로 적용된 시간)
}

// "24시간 동안 열리지 않기" 클릭 시
function todayClosePop(){
    // 쿠키 설정 : setCookie(쿠키설정 key, 쿠키설정 value, 쿠키 설정 시간)
    setCookie("ncookie_24h", "done_24h", 4); // 함수 호출문 + 매개변수에 전달할 데이터들
    dark.classList.remove("active");
    popup.classList.remove("active");
    $body.classList.remove("overflow");
}

// 화면이 열리면서 브라우저 내의 쿠키 상태를 체크
cookiedata = document.cookie;
console.log(cookiedata); // bHideResizeNotice=1; ncookie_24h=done_24h; PHPSESSID=ahkodbkdlupr3rua6e10f28vfm; ncookie_4h=done_4h

if(cookiedata.indexOf("ncookie_24h=done_24h") < 0){ // 등록된 쿠키 데이터 중 일치하는 값이 없다면 -> 팝업창이 보여야 함
    dark.classList.add("active");
    popup.classList.add("active");
    $body.classList.add("overflow");
}else{ // // 등록된 쿠키 데이터 중 일치하는 값이 있다면 -> 팝업창이 감추어져야 함
    dark.classList.remove("active");
    popup.classList.remove("active");
    $body.classList.remove("overflow");
}