/* JS 
AJAX 기술 (반드시 알아야 함)
window => 창
window.location => 주소창
window.history => 뒤로/앞으로 가기
window.document => 폼


    작성법
대소문자 구분하여 작성
문장이 변경될 경우 ;(세미콜론)으로 구분
문장과 출력 구분할 때 java와 마찬가지로 ("", '')로 구분함
<head> 태그 또는 <body>태그 내에 코드 작성

1. 다른 태그 안에서 호출
2. <script> 태그에서 호출
3. .js파일로 src=.js로 호출

    연산자
1. === (내용(크기)이 같고, 자료형이 같을경우)
2. == (내용(크기)만 같을경우)

자료형 검사 (typeof)

탬플릿 문자열은 백틱(`) 기호로 감싸 만듬
`${...}` => ...에 표현식을 넣으면 표현식이 열 안에서 계산됨
예시) console.log(`표현식 1 + 2의 값은 ${1 + 2}입니다.`);

    const 이름 = 값 (상수 선언)
상수는 한번만 선언 가능, 이미 지정된 값 변경x

    var 변수이름 // let 변수이름 (변수 선언)
변수는 여러번 선언 가능, 이미 지정된 값도 변경 가능
6버전 이후로는 let으로 많이 사용함

    prompt() => java 에선 Scanner, python에선 input

    배열 뒷부분에 요소 추가하기
    다른 언어와 다르게 js에서는 공백의 배열인덱스가 추가 가능
    ex) const fruits = ['사과', '배', '바나나']; => 인덱스 0,1,2
    fruits[10] = '귤'; => 10번 인덱스에 귤 추가
    3~7번 인덱스의 값 => empty (비어있음)

    .splice 로 자르기 가능
    ex) fruits.splice(2, 1);
    (2) ['사과', '배']


    함수 (function())
    - 익명 함수 : function(){};
    - 선언적 함수 : function 함수이름 (){};

    function 함수명 (parameter1, parameter2 ...){
        실행문;
        return 반환값;
    }
    함수명(args1, args2...)
*/
