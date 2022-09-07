/*
    제이쿼리(jQuery) 함수
    - 기본형 jQuery(선택자).메소드
    - $(선택자).메소드

    사용 예)
    $("p").hide() 

    문서 준비 이벤트 코드(== window.onload)
    - $(document).ready(function(){
        
        // jQuery methods

    })

    마우스 이벤트
    - mouseenter : 선택자 안에있으면 호출
    - mouseleave : 선택자 밖에있으면 호출
    - mousedown : 마우스가 눌린 상태면 호출
    - mouseup : 마우스 버튼에서 손을 떼면 호출

    jQuery로 css 컨트롤하기
    1. <head> 태그의 <style>태그에 특정조건에서 행할 css가 담긴 클래스 작성 
    addClass : jQuery로 준 조건에서 태그들에 css가 담긴 class를 더하기
    removeClass : jQuery로 준 조건에서 태그들에 css가 담긴 class를 빼기
    toggleClass : jQuery로 준 조건 실행될때마다 add, remove를 번갈아가면서 실행


    기타 애니메이션 효과
    - show(속도) : 선택 요소 보이게
    - hide(속도) : 선택 요소 숨기기
    - toggle(속도) : show()&hide()
    - fadeIn(속도) : 서서히 보이게함
    - fadeOut(속도) : 서서히 사라지게 함
    - fadeToggle(속도) : fadeIn()&fadeOut()
    - fadeTo(속도, 불투명도) : 서서히 투명도 조절
    - slideUp(속도) : 슬라이드 올림
    - slideDown(속도) : 슬라이드 내림
    - slideToggle(속도) : 슬라이드 올렸다가 내렸다가..

    
    문서 객체 생성과 추가
    - $(객체).prependTo(대상) : 대상 안의 앞부분에 대상 추가
    - $(객체).appendTo(대상) :  대상 안의 뒷부분에 대상 추가
    - $(객체).beforeTo(대상) : 대상 밖의 앞부분에 대상 추가
    - $(객체).afterTo(대상) : 대상 밖의 뒷부분에 대상 추가
    // 객체와 대상이 변경되면, 반대로 됨


    bxSlider plug-in
    - 쇼핑몰같은데에 쇼핑품목 이동하는듯한 슬라이드 줄 수 있음
    - 하단에 몇번째 이미지인지 ... 불릿으로 표현되어있고, 재생과 정지 다 가능
    - link rel 로 js 를 가져오는걸 cdn 이라함
    - jQuery가 있어야만 동작가능


    속성 선택자
    - [속성] => p[text]
    - [속성 = 값] => p[text="red"]
*/
