
$(document).ready(function(){
    // 비주얼영역 포인터 위치 인터랙션
    $(document).on('mousemove','html,body',function (e){
        let $winWidth = $(window).outerWidth()  //브라우저 너비
        let $winHeight = $(window).outerHeight()  //브라우저 높이
        let $posX = e.clientX; //x좌표
        let $posY = e.clientY; //y좌표

        $('.visual .back.back02').css({backgroundPositionX:50 + ($posX / $winWidth * 3) + "%"});
        $('.visual .back.back03').css({backgroundPositionX:50 + ($posX / $winWidth * 5) + "%"});
        $('.visual .back.back04').css({backgroundPositionX:50 + ($posX / $winWidth * 7) + "%"});
        $('.visual .back.back05').css({backgroundPositionX:50 + ($posX / $winWidth * 9) + "%"});
        $('.visual .back.back06').css({backgroundPositionX:50 + ($posX / $winWidth * 11) + "%"});
        $('.visual .back.back07').css({backgroundPositionX:50 + ($posX / $winWidth * 13) + "%"});
        $('.visual .back.back08').css({backgroundPositionX:50 + ($posX / $winWidth * 15) + "%"});
    })



    // gnb 마우스오버 이벤트

    $(document).on('mouseover','#gnb',function (){
        $(this).closest('#header').addClass('active')
    })
    $(document).on('mouseout','#gnb',function (){
        $(this).closest('#header').removeClass('active')
        $('#gnb .dep1 li').removeClass('active')

        if($('#header').position().top !== 0){
            $('#header').addClass('active');
        }else{
            $('#header').removeClass('active');
        }
    })

    // gnb 2뎁스 뒷배경 무빙
    $(document).on('mouseover','#gnb .dep1 > li',function (){
        let idx = $(this).index();
        let leng = $(this).closest('.dep1').children('li').length
        $('.dep2Box > span').css({'width':'calc(100% / ' + leng + ')','left':'calc((100% / ' + leng + ') *' + idx + ')' })
    })

    // gnb 3뎁스 보이기/숨기기
    $(document).on('click','#gnb .dep2 > li > a',function (){
        $(this).closest('li').toggleClass('active').children('.dep3').stop().slideToggle(200)
        $(this).closest('li').siblings('li').removeClass('active').children('.dep3').stop().slideUp(200);
    })

    // gnb 2뎁스 뒷배경 무빙
    $(document).on('mouseover','#gnb .dep2 > li',function (){
        let idx = $(this).closest('.dep2').closest('.box').index();
        let leng = $('#gnb .dep1 > li').length
        $('.dep2Box > span').css({'width':'calc(100% / ' + leng + ')','left':'calc((100% / ' + leng + ') *' + idx + ')' })
    })

    // lnb 토글
    $(document).on('click','#lnb .dep1 > li > a',function (){
        $(this).closest('li').toggleClass('active');
    })

    // 메인 사진 슬라이더 커스텀
    let slideIdx = 1;
    $(document).on('click','.controlGroup button',function (){
        if($(this).hasClass('next')){
            if(slideIdx === $(this).closest('.controlGroup').siblings('.controlBox').find('.item').length - 1 ) {
                $(this).prop('disabled', true)
            }
            slideIdx++;
            $(this).siblings('button').prop('disabled',false)
            $('.slideBox .slideGroup').removeClass('on1 on2 on3').addClass('on' + slideIdx)
            $(this).closest('.controlGroup').siblings('.controlBox').find('.item').removeClass('active').eq(slideIdx).addClass('active')
        }else{
            if(slideIdx === 2  ) {
                $(this).prop('disabled', true).siblings('button').prop('disabled',false)
            }
            slideIdx--;
            $(this).siblings('button').prop('disabled',false)
            $('.slideBox .slideGroup').removeClass('on1 on2 on3').addClass('on' + slideIdx)
            $(this).closest('.item').removeClass('active').eq(slideIdx).addClass('active')
        }
        $(this).closest('.controlGroup').siblings('.controlBox').find('.item').eq(slideIdx-1).addClass('active').siblings('.item').removeClass('active')

    });


    // 콤보박스 토글
    $(document).on('click','.comboBox > a',function (){
        $(this).closest('.comboBox').toggleClass('active');
    });

    // 공유하기버튼 토글
    $(document).on('click','.btnShareToggle',function (){
        $(this).toggleClass('active');
    });
    // 모바일 메뉴 열기
    $(document).on('click','.btnSitemap',function (){
        $('#gnb,#dimmed').addClass('active');
    });

    // 모바일 2뎁스 열기 (반응형 적용예정)
    $(document).on('click','#gnb .dep1 > li > a',function (){
        let idx = $(this).closest('li').index();
        $(this).addClass('active').closest('li').siblings('li').children('a').removeClass('active');
        $('.dep2Box').children('.box').eq(idx).addClass('active').siblings('.box').removeClass('active')
    })

    // 모바일 gnb닫기
    $(document).on('click','.btnSitemapClose',function (){
        $(this).closest('#gnb').removeClass('active');
        $('#dimmed').removeClass('active');
    })

    // 시설관리 - 청사전경 모바일 동쪽 서쪽 토글
    $(document).on('click','.btnSide',function (){
        $(this).closest('.structure').toggleClass('right');
    });
    // 시설관리 - 청사전경 이미지 뷰어 띄우기
    $(document).on('click','.cardArea:not(".type02,.type03,.type04") .item',function (){
        let img_origin = $(this).find('img').attr('src')
        $('#footer').after('\n' +
            '<div class="imgFull">\n' +
            '   <button type="button" class="btnImgClose mobile"><span class="hidden">닫기</span></button>\n' +
            '   <div class="inBox">\n' +
            '       <img src="' + img_origin + '"/>\n' +
            '       <button type="button" class="btnImgClose web"><span class="hidden">닫기</span></button>\n' +
            '   </div>\n' +
            '</div>')
        setTimeout(function (){
            $('.imgFull').addClass('active');
        })
    })

    // 시설관리 - 청사전경 이미지 뷰어 삭제
    $(document).on('click','.imgFull .btnImgClose',function (){
        $(this).closest('.imgFull').removeClass('active');
        setTimeout(function (){
            $('.imgFull').remove();
        },400)
    })

    // 탭 토글
    $(document).on('click','.tabList li',function (){
        var idx = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).closest('.tabNav').siblings('.tabCont').eq(idx).addClass('active').siblings('.tabCont').removeClass('active');
    })

    // 기구및정원 탭토글
    $(document).on('click','.orgArea .orgBox .group a',function (e){
        e.preventDefault();
        let idx = $(this).closest('.orgBox').hasClass('type02') ? $(this).index() - 2 : $(this).index();// 조직,행정자문위원 없는지역(type02)은 index값 -2 적용 추가 (12/14 오인섭)
        console.log(idx);
        //$(this).addClass('active').siblings('li').removeClass('active');
        $(this).closest('.orgArea').siblings('.tabContWrap').find('.tabList').children('li')
            .eq(idx+2).addClass('active').siblings('li').removeClass('active');
        $(this).closest('.orgArea').siblings('.tabContWrap').find('.tabCont')
            .eq(idx+2).addClass('active').siblings('.tabCont').removeClass('active');
    })

    $(document).on('click','.btnLanguage',function (){

        if($(this).hasClass('kor')){
            window.location.href='../html/main.html';
        }else{
            window.location.href='../html/eng_1_인사말.html';
        }
    })

    /* btnImgClose 클릭시 팝업 닫힘 */
    $(document).on('click','.layerFull .btnImgClose',function (){
        $(this).closest('.layerFull').removeClass('active');
        setTimeout(function (){
            $('.layerFull').remove();
        },400)
    });

     /* btnTop클릭시 상단으로 이동 */
    $(document).on('click','.btnTop',function (){
        $('html, body').animate({
            scrollTop: '0'
        }, 300);
    });

        /* datePicker */
    if ($(".cal").length) {
        $(".cal").datepicker({
            dateFormat: "yy-mm-dd",
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            showMonthAfterYear: true,
            yearSuffix: "년"
        });
    }

    /* 시군현황 팝업 열림 */
    $(document).on('click','.cardArea .layer',function (){
        $(this).closest('.cardArea').siblings('.popup').addClass('active').after('<div id="dimmed"></div>');
    })

    /* btnImgClose 클릭시 팝업 닫힘 */
    $(document).on('click','.popup .btnClose',function (){
        $(this).closest('.popup').removeClass('active');
        setTimeout(function (){
            $('#dimmed').remove();
        },400)
    })

    /* 자주묻는질문 아코디언 토글 */
    $(document).on('click','.accordion .dep1',function (e){
        e.preventDefault();
        $(this).toggleClass('active').next('.dep2').find('.row').slideToggle('fast');
        $(this).find('.dep2').find('.row').slideUp('fast');
    });


})

// 스크롤이벤트
$(window).on({
    "scroll":function (){
        if($('#header').offset().top !== 0){
            $('#header').addClass('active');
        }else{
            $('#header').removeClass('active');
        }

    }

})

// 조직 및 연락처 타겟에 대한 탭,스크롤 이동함수
const org_link = (name,idx) => {
    const $name = $('#'+name);
    $(document).find('.tabContWrap').find('.tabList li').eq(idx).addClass('active').siblings().removeClass('active');
    $(document).find('.tabContWrap').find('.tabCont').eq(idx).addClass('active').siblings().removeClass('active');
    setTimeout(console.log($name.position().top),500)
    $('html,body').animate({scrollTop:$(window).outerWidth() > 768 ? $name.position().top - 120 : $name.position().top + 90},500)
}

const org_tab = (name,idx) => {
    const $name = $('#'+name);
    $(document).find('.comboBox').removeClass('active');
    $(document).find('.tabContWrap').find('.tabCont').eq(idx-1).addClass('active').siblings().removeClass('active');
}



