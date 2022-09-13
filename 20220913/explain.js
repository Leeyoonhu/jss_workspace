/*
    자손&후손 선택자 => tree 구조
body {
    div {
        ul {
            li {

            }
            li {

            }
        }
    }
}

- body = root (모든 tag 의 부모)
- div = body 의 자손이자 후손 (body 속성 적용받음)
- ul = body의 후손이자 자손 (div 속성 적용받음)

* 자손 선택자 : 자손을 선택하는 선택자 => 요소A > 요소B ex) body>*
* 후손 선택자 : 후손 모두를 선택 => 요소A 요소B ex) body *


    유효성 검사(ex10~14)
- client의 request 가 server에 도달하기 전에 front-end 단에서 걸러주는 검사
- 보안, 잘못된 데이터, 예상 가능 오류 방지 목적
- 핸들러 함수 =>> form 에서 submit을 클릭한 경우, 입력한 데이터가 맞지않으면 server에 보내지않고 사용자에게 오류메세지 출력
- 보통 input type="submit"인경우 onclick 이벤트 속성을 이용해 핸들링
- 나중에 유효성 검사 - 정규 표현식을 구글링해서 여러 용도로 사용하는것이 좋음

예시))
    <script type="text/javascript">
        function 핸들러함수(){
            let str = document.폼이름.입력항목이름.value;
        }
    </script>
    <form action="" name="폼이름">
        //..
        <input type="submit" onclick="핸들러함수()">
    </form>



    브라우저 객체 모델 [BOM]
    windows 객체
    생성메서드 open(url, name, features, replace)
    

*/
