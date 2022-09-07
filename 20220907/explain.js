/*
    내장 객체의 종류(p352 참조)
    BOM(Browser Object Model) : 브라우저 객체 모델
    DOM(Document Object Model) : 문서 객체 모델(body line)
    GJO(Global JavaScript Objects) : 전역 자바스크립트 객체

    <h1> 요소 </h1> ==> 요소를 innerHTML 속성이라 하며, script를 이용해 이런 HTML속성을 바꿀예정임

    DOM Tree(p354 참조)
    html이 시작될 때, 각 태그들을 객체화
    tree 구조는 가장 상단을 root
    부모, 자식, 형제 개념이 있음

    기존의 HTML 태그 생성은 정적 생성이였으나,
    script를 통해 동적으로 생성해줌


    문서 객체 생성(create DOM)
    createElement() => 요소 노드 생성
    createTextNode() => 텍스트 노드 생성
    appendChild() => 요소 노드 body객체에 추가


    문서 객체 선택(p367 참조)
    - 1개만 선택
    document.getElementById(아이디) => 아이디로 1개 선택
    documnet.getSelector(선택자) => 문서상 가장 상단의 선택자 1개만 가져옴
    - 여러개 선택
    document.getElementsByName(name) => tag의 name 속성이 ElementsByname(name)과 일치할 경우, 배열로 가져옴
    document.getElementsByTagName(tagName) => tagName과 일치하는 애들 가져옴


    글자 조작
    - innerHTML : HTML tag 적용됨
    - textContent  : HTML tag 적용안됨 (<h1>..이런태그들도 함께 출력)


    스타일 조작
    - js로 css속성 값을 추가/변경/제거 가능
    - js는 -를 식별자에 넣을 수 없음 ex) background-color ==> backgroundColor (낙타표기법) 적용


    속성 조작
    - setAttribute(속성 이름, 속성 값) : 속성값을 지닌 속성 지정
    - getAttribute(속성 이름) : 속성 추출
*/
