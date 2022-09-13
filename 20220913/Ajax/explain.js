/*
    Ajax (a는 not을 의미) => js를 사용한 비동기 통신
- 전체 페이지를 새로 고치지않고도, 페이지 일부만을 위한 데이터를 로드하는 기법
- 클라이언트에서 가치있는 data만 server에 전달
- 브라우저가 가지고있는 XMLHttpRequest 이용

    Synchronous <==> Ajax
- 여태 했던 방식들은 Synchronous 방식

    ASynchronous 
- ex) google map 을 사용하면, 부분적으로 업데이트 됨을 알 수 있음(테두리부터 세세한 정보까지)

    Synchronous VS  ASynchronous 
*    blocking        non-blocking(부분 수신)
*    전송-수신       회신 상관없이(전송-전송-전송-수신-수신-수신)
*    순차적작업      효율적 활용
*  request.send()의     기다리지 않음
  return을 기다림
*  응답이 오거나     callbackfunction에서 status
  timeout 시 종료   확인하여 알 수있음


    AJAX Technologies
    - XML or JSON : 최신 트렌드는 JSON (서버에서 데이터를 전달받거나 전달하는데 사용)
    - XMLHttpRequest 객체 : 동기식, 비동기식 둘다 가능
    - 클라이언트로 부터 데이터 송신 => 백 그라운드
    - 서버로부터 데이터 수신
    - 웹 페이지를 reloading 하지 않고 업데이트 (non-blocking)
    

    XMLHttpRequest 객체
    - onReadyStateChange : readyState 속성이 변했을 때 호출
    - readyState : 요청 상태 (0~4) // 어디까지 진행됬는지 파악 가능
    - 0 : unopened => open()이 호출되지 않은 상태
    - 1 : opened => open()은 호출되었지만, send()가 호출되지 않은 상태
    - 2 : headers_received => send()까지 호출되었으나, header와 status가 유효하지 않은경우
    - 3 : loading => 
    - 4 : done => 모든 처리 완료

    - method()
    - void open(method, URL) : get or post 방식을 이용해 특정 url에 접근 // 공공데이터가 될 예정
    - void open(method, URL, async) : async 방식인지 아닌지 지정가능
    
    데이터 전송형식
    - CSV - 각 항목 ","로 구분해 데이터표현
    - XML - XMLHttpRequest는 서버로부터 XML을 받아 처리가능
    - JSON - JavaScript Object Notation (데이터 구조 분석이 우선)


    크로스 도메인 : 불특정 다수의 도메인 서버에 접근
    - 다른 도메인(ex]공공데이터 사이트)에서 데이터를 가져올 때 다른점
    - XMLHttpRequest 객체는 보안상 제한으로 인해 JS파일을 가져왔던 서버하고만 통신가능
    - 이유는 브라우저에서 입력한 저오를 사용자가 모르는 사이에 다른서버로 전송할 가능성이 있기때문 
    - (CORS policy)정책 위반으로 에러로 막음

    CORS? (Cross-Origin-Resource-Sharing)
    - 정책 위반 해결책(임시방편) -> chrome wep store -> cors -> Allow CORS: Access-Control-Allow-Origin chrome에 추가
    - 크롬 확장 프로그램 -> Allow CORS 키기(색이 보이면 켜짐)
*/
