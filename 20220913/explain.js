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

*/
