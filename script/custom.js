$(function(){
    $('.main').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<div class="slick_prev"><i class="xi-angle-left"></i></div>',
        nextArrow:'<div class="slick_next"><i class="xi-angle-right"></i></div>',
        dots: true,
        customPaging: function(e, i){
            let dotDesc = [
                '공동구매',
                'Galaxy Tab Series',
                'Galaxy Buds',
                'TV+OTT',
                '무풍에어컨',
                'BESPOKE 큐커',
                '중고가전 추가보상',
                '삼성케어플러스',
            ]
            return `<div class="main_dot main_dot${i}"> ${dotDesc[i]}
                <div class="dot_time">
                    <div class="dot_full"></div>
                </div>
            </div>`;
        }
    });

    $('.main').on('afterChange',function(event, slick, currentSlide) {
        if( currentSlide == 0 ) {
            $('.main_dot0 .dot_full').addClass('on')
            $('.main_dot .dot_time').css('background','#0000004d')
            $('.dot_time .dot_full').css('background','#000')
            $('.main_dot').css('color','#000')
            $('.main .slick_prev').css('color','#000')
            $('.main .slick_next').css('color','#000')
            setTimeout(() => {
                $('.main_dot0 .dot_full').addClass('on')
            },0);
            console.log($(this))

        }else if(currentSlide == 1) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 2) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 3) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 4) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 5) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 6) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 7) {
            $('.dot_full').removeClass('on')
        }


        if( currentSlide == 1 ){
            $('.main_dot1 .dot_full').addClass('on')
            $('.main_dot .dot_time').css('background','#0000004d')
            $('.dot_time .dot_full').css('background','#000')
            $('.main_dot').css('color','#000')
            $('.main .slick_prev').css('color','#000')
            $('.main .slick_next').css('color','#000')
            setTimeout(() => {
                $('.main_dot1 .dot_full').addClass('on')    
            }, 0);
            console.log($(this))

        }else if(currentSlide == 2) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 0) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 3) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 4) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 5) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 6) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 7) {
            $('.dot_full').removeClass('on')
        }

        if( currentSlide == 2 ){
            $('.main_dot2 .dot_full').addClass('on')
            $('.main .main_dot').css('color','#fff')
            $('.main_dot .dot_time').css('background','#ffffff66')
            $('.dot_time .dot_full').css('background','#fff')
            $('.main .slick_prev').css('color','#fff')
            $('.main .slick_next').css('color','#fff')
            setTimeout(() => {
                $('.main_dot2 .dot_full').addClass('on')    
            }, 0);
            console.log($(this))

        }else if(currentSlide == 3) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 0) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 1) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 4) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 5) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 6) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 7) {
            $('.dot_full').removeClass('on')
        }

        if( currentSlide == 3 ){
            $('.main_dot3 .dot_full').addClass('on')
            $('.main .main_dot').css('color','#000')
            $('.main_dot .dot_time').css('background','#0000004d')
            $('.dot_time .dot_full').css('background','#000')
            $('.main .slick_prev').css('color','#000')
            $('.main .slick_next').css('color','#000')
            setTimeout(() => {
                $('.main_dot3 .dot_full').addClass('on')
            }, 0);
            console.log($(this))

        }else if(currentSlide == 4) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 0) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 1) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 2) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 5) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 6) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 7) {
            $('.dot_full').removeClass('on')
        }

        if( currentSlide == 4 ){
            $('.main_dot4 .dot_full').addClass('on')
            $('.main .main_dot').css('color','#000')
            $('.main_dot .dot_time').css('background','#0000004d')
            $('.dot_time .dot_full').css('background','#000')
            $('.main .slick_prev').css('color','#000')
            $('.main .slick_next').css('color','#000')
            setTimeout(() => {
                $('.main_dot4 .dot_full').addClass('on')
            },0);
            console.log($(this))

        }else if(currentSlide == 5) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 0) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 1) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 2) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 3) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 6) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 7) {
            $('.dot_full').removeClass('on')
        }

        if( currentSlide == 5 ){
            $('.main_dot5 .dot_full').addClass('on')
            $('.main .main_dot').css('color','#fff')
            $('.main_dot .dot_time').css('background','#ffffff66')
            $('.dot_time .dot_full').css('background','#fff')
            $('.main .slick_prev').css('color','#fff')
            $('.main .slick_next').css('color','#fff')
            setTimeout(()=>{
                $('.main_dot5 .dot_full').addClass('on')
            },0);
            console.log($(this))

        }else if(currentSlide == 6) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 0) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 1) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 2) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 3) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 4) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 7) {
            $('.dot_full').removeClass('on')
        }

        if( currentSlide == 6 ){
            $('.main_dot6 .dot_full').addClass('on')
            $('.main .main_dot').css('color','#000')
            $('.main_dot .dot_time').css('background','#0000004d')
            $('.dot_time .dot_full').css('background','#000')
            $('.main .slick_prev').css('color','#000')
            $('.main .slick_next').css('color','#000')
            setTimeout(()=>{
                $('.main_dot6 .dot_full').addClass('on')
            },0);
            console.log($(this))

        }else if(currentSlide == 7) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 0) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 1) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 2) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 3) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 4) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 5) {
            $('.dot_full').removeClass('on')
        }

        if( currentSlide == 7 ){
            $('.main_dot7 .dot_full').addClass('on')
            $('.main .main_dot').css('color','#000')
            $('.main_dot .dot_time').css('background','#0000004d')
            $('.dot_time .dot_full').css('background','#000')
            $('.main .slick_prev').css('color','#000')
            $('.main .slick_next').css('color','#000')
            setTimeout(() => {
                $('.main_dot7 .dot_full').addClass('on')
            },0);
            console.log($(this))

        }else if(currentSlide == 0) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 1) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 2) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 3) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 4) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 5) {
            $('.dot_full').removeClass('on')
        }else if(currentSlide == 6) {
            $('.dot_full').removeClass('on')
        }

    });

// main_second_part

    $('.second_frame').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        customPaging: function(e,i){
            let dotDesc = [
                '삼성닷컴 인기제품',
                '환경의날 지.구.인 핫딜',
                '셀렉트샵',
                '삼성케어 플러스',
                '특별한 혜택'
            ]
            return `<div class="second_dot second_dot${i}"> ${dotDesc[i]}
                <div class="second_dot_bar"></div>
            </div>`;
        }
    });

    $('.second_dot0').click(function(){
        $('.second_dot0 .second_dot_bar').css('display','block')
        $('.second_dot1 .second_dot_bar').css('display','none')
        $('.second_dot2 .second_dot_bar').css('display','none')
        $('.second_dot3 .second_dot_bar').css('display','none')
        $('.second_dot4 .second_dot_bar').css('display','none')
    })
    $('.second_dot1').click(function(){
        $('.second_dot1 .second_dot_bar').css('display','block')
        $('.second_dot0 .second_dot_bar').css('display','none')
        $('.second_dot2 .second_dot_bar').css('display','none')
        $('.second_dot3 .second_dot_bar').css('display','none')
        $('.second_dot4 .second_dot_bar').css('display','none')
    })
    $('.second_dot2').click(function(){
        $('.second_dot2 .second_dot_bar').css('display','block')
        $('.second_dot0 .second_dot_bar').css('display','none')
        $('.second_dot1 .second_dot_bar').css('display','none')
        $('.second_dot3 .second_dot_bar').css('display','none')
        $('.second_dot4 .second_dot_bar').css('display','none')
    })
    $('.second_dot3').click(function(){
        $('.second_dot3 .second_dot_bar').css('display','block')
        $('.second_dot0 .second_dot_bar').css('display','none')
        $('.second_dot1 .second_dot_bar').css('display','none')
        $('.second_dot2 .second_dot_bar').css('display','none')
        $('.second_dot4 .second_dot_bar').css('display','none')
    })
    $('.second_dot4').click(function(){
        $('.second_dot4 .second_dot_bar').css('display','block')
        $('.second_dot0 .second_dot_bar').css('display','none')
        $('.second_dot1 .second_dot_bar').css('display','none')
        $('.second_dot2 .second_dot_bar').css('display','none')
        $('.second_dot3 .second_dot_bar').css('display','none')
    })
    
// main_thrid_part

    $('.main_thrid_first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        customPaging: function(e,i){
            let dotDesc = [
                'Galaxy S22 Series',
                '갤럭시 캠퍼스 데이',
                'Galaxy Studio',
                '갤럭시 콘텐츠 페스타',
            ]
            return `<div class="thrid_dot thrid_dot${i}"> ${dotDesc[i]}
                <div class="dot_bar"></div>
            </div>`;
        }
    });

    $('.thrid_dot0').click(function(){
        $('.thrid_dot0 .dot_bar').css('display','block')
        $('.thrid_dot1 .dot_bar').css('display','none')
        $('.thrid_dot2 .dot_bar').css('display','none')
        $('.thrid_dot3 .dot_bar').css('display','none')
    })
    $('.thrid_dot1').click(function(){
        $('.thrid_dot1 .dot_bar').css('display','block')
        $('.thrid_dot0 .dot_bar').css('display','none')
        $('.thrid_dot2 .dot_bar').css('display','none')
        $('.thrid_dot3 .dot_bar').css('display','none')
    })
    $('.thrid_dot2').click(function(){
        $('.thrid_dot2 .dot_bar').css('display','block')
        $('.thrid_dot0 .dot_bar').css('display','none')
        $('.thrid_dot1 .dot_bar').css('display','none')
        $('.thrid_dot3 .dot_bar').css('display','none')
    })
    $('.thrid_dot3').click(function(){
        $('.thrid_dot3 .dot_bar').css('display','block')
        $('.thrid_dot0 .dot_bar').css('display','none')
        $('.thrid_dot1 .dot_bar').css('display','none')
        $('.thrid_dot2 .dot_bar').css('display','none')
    })


    $('.main_thrid_first1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        customPaging: function(e,i){
            let dotDesc = [
                'The Freestyle',
                'Neo QLED',
                'JBL 무선 이어폰',
                'MICRO LED',
                '스마트 모니터',
            ]
            return `<div class="thrid_dot_second thrid_dot_second${i}"> ${dotDesc[i]}
                <div class="dot_bar_second"></div>
            </div>`;
        }
    });

    $('.thrid_dot_second0').click(function(){
        $('.thrid_dot_second0 .dot_bar_second').css('display','block')
        $('.thrid_dot_second .dot_bar_second').css('background','#000')
        $('.thrid_dot_second').css('color','#000')
        $('.thrid_head2').css('color','#000')
        $('.thrid_dot_second1 .dot_bar_second').css('display','none')
        $('.thrid_dot_second2 .dot_bar_second').css('display','none')
        $('.thrid_dot_second3 .dot_bar_second').css('display','none')
        $('.thrid_dot_second4 .dot_bar_second').css('display','none')
    })
    $('.thrid_dot_second1').click(function(){
        $('.thrid_dot_second1 .dot_bar_second').css('display','block')
        $('.thrid_dot_second .dot_bar_second').css('background','#fff')
        $('.thrid_dot_second').css('color','#fff')
        $('.thrid_head2').css('color','#fff')
        $('.thrid_dot_second0 .dot_bar_second').css('display','none')
        $('.thrid_dot_second2 .dot_bar_second').css('display','none')
        $('.thrid_dot_second3 .dot_bar_second').css('display','none')
        $('.thrid_dot_second4 .dot_bar_second').css('display','none')
    })
    $('.thrid_dot_second2').click(function(){
        $('.thrid_dot_second2 .dot_bar_second').css('display','block')
        $('.thrid_dot_second .dot_bar_second').css('background','#000')
        $('.thrid_dot_second').css('color','#000')
        $('.thrid_head2').css('color','#000')
        $('.thrid_dot_second0 .dot_bar_second').css('display','none')
        $('.thrid_dot_second1 .dot_bar_second').css('display','none')
        $('.thrid_dot_second3 .dot_bar_second').css('display','none')
        $('.thrid_dot_second4 .dot_bar_second').css('display','none')
    })
    $('.thrid_dot_second3').click(function(){
        $('.thrid_dot_second3 .dot_bar_second').css('display','block')
        $('.thrid_dot_second .dot_bar_second').css('background','#fff')
        $('.thrid_dot_second').css('color','#fff')
        $('.thrid_head2').css('color','#fff')
        $('.thrid_dot_second0 .dot_bar_second').css('display','none')
        $('.thrid_dot_second1 .dot_bar_second').css('display','none')
        $('.thrid_dot_second2 .dot_bar_second').css('display','none')
        $('.thrid_dot_second4 .dot_bar_second').css('display','none')
    })
    $('.thrid_dot_second4').click(function(){
        $('.thrid_dot_second4 .dot_bar_second').css('display','block')
        $('.thrid_dot_second .dot_bar_second').css('background','#fff')
        $('.thrid_dot_second').css('color','#fff')
        $('.thrid_head2').css('color','#fff')
        $('.thrid_dot_second0 .dot_bar_second').css('display','none')
        $('.thrid_dot_second1 .dot_bar_second').css('display','none')
        $('.thrid_dot_second2 .dot_bar_second').css('display','none')
        $('.thrid_dot_second3 .dot_bar_second').css('display','none')
    })

    $('.main_thrid_first2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        customPaging: function(e,i){
            let dotDesc = [
                'BESPOKE 무풍에어컨',
                'BESPOKE 인덕션',
                'BESPOKE 냉장고 Infinite Line',
                'BESPOKE HOME',
                '온라인 체험존',
            ]
            return `<div class="thrid_dot_thrid thrid_dot_thrid${i}"> ${dotDesc[i]}
                <div class="dot_bar_thrid"></div>
            </div>`;
        }
    });

    $('.thrid_dot_thrid0').click(function(){
        $('.thrid_dot_thrid0 .dot_bar_thrid').css('display','block')
        $('.thrid_dot_thrid .dot_bar_thrid').css('background','#000')
        $('.thrid_dot_thrid').css('color','#000')
        $('.thrid_head3').css('color','#000')
        $('.thrid_dot_thrid1 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid2 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid3 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid4 .dot_bar_thrid').css('display','none')
    })
    $('.thrid_dot_thrid1').click(function(){
        $('.thrid_dot_thrid1 .dot_bar_thrid').css('display','block')
        $('.thrid_dot_thrid .dot_bar_thrid').css('background','#fff')
        $('.thrid_dot_thrid').css('color','#fff')
        $('.thrid_head3').css('color','#fff')
        $('.thrid_dot_thrid0 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid2 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid3 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid4 .dot_bar_thrid').css('display','none')
    })
    $('.thrid_dot_thrid2').click(function(){
        $('.thrid_dot_thrid2 .dot_bar_thrid').css('display','block')
        $('.thrid_dot_thrid .dot_bar_thrid').css('background','#000')
        $('.thrid_dot_thrid').css('color','#000')
        $('.thrid_head3').css('color','#000')
        $('.thrid_dot_thrid0 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid1 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid3 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid4 .dot_bar_thrid').css('display','none')
    })
    $('.thrid_dot_thrid3').click(function(){
        $('.thrid_dot_thrid3 .dot_bar_thrid').css('display','block')
        $('.thrid_dot_thrid .dot_bar_thrid').css('background','#000')
        $('.thrid_dot_thrid').css('color','#000')
        $('.thrid_head3').css('color','#000')
        $('.thrid_dot_thrid0 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid1 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid2 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid4 .dot_bar_thrid').css('display','none')
    })
    $('.thrid_dot_thrid4').click(function(){
        $('.thrid_dot_thrid4 .dot_bar_thrid').css('display','block')
        $('.thrid_dot_thrid .dot_bar_thrid').css('background','#000')
        $('.thrid_dot_thrid').css('color','#000')
        $('.thrid_head3').css('color','#000')
        $('.thrid_dot_thrid0 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid1 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid2 .dot_bar_thrid').css('display','none')
        $('.thrid_dot_thrid3 .dot_bar_thrid').css('display','none')
    })

    // story_part

    let story_link = `<a class="story_btn" href="#_none">더 알아보기</a>`

    $('.story_text1').mouseenter(function(){
        $('.story_img').attr('src','./images/main3/1.jpg')
        $('.story_text1').css('border-top','2px solid #000')
        $('.story_btn').remove()
        $(this).append(story_link)
    })
    $('.story_text1').mouseleave(function(){
        $('.story_text1').css('border-top','2px solid #00000026')
    })
    $('.story_text2').mouseenter(function(){
        $('.story_img').attr('src','./images/main3/2.webp')
        $('.story_text2').css('border-top','2px solid #000')
        $('.story_btn').remove()
        $(this).append(story_link)
    })
    $('.story_text2').mouseleave(function(){
        $('.story_text2').css('border-top','2px solid #00000026')
    })
    $('.story_text3').mouseenter(function(){
        $('.story_img').attr('src','./images/main3/3.webp')
        $('.story_text3').css('border-top','2px solid #000')
        $('.story_btn').remove()
        $(this).append(story_link)
    })
    $('.story_text3').mouseleave(function(){
        $('.story_text3').css('border-top','2px solid #00000026')
    })
    $('.story_text4').mouseenter(function(){
        $('.story_img').attr('src','./images/main3/4.jpg')
        $('.story_text4').css('border-top','2px solid #000')
        $('.story_btn').remove()
        $(this).append(story_link)
    })
    $('.story_text4').mouseleave(function(){
        $('.story_text4').css('border-top','2px solid #00000026')
    })

    $('.story_second_hide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        customPaging: function(e,i){
            let dotDesc = [
                '',
                '',
                '',
                '',
            ]
            return `<div class="story_dot story_dot${i}"> ${dotDesc[i]}
                <div class="story_bar"></div>
            </div>`;
        }
    });
});
    $(document).on('click','.story_dot0 .story_bar',function(){
        $('.story_dot0 .story_bar').css('background','#000')
        $('.story_dot0 .story_bar').css('border','2px solid orange')
        $('.story_dot1 .story_bar').css('background','grey')
        $('.story_dot1 .story_bar').css('border','none')
        $('.story_dot2 .story_bar').css('background','grey')
        $('.story_dot2 .story_bar').css('border','none')
        $('.story_dot3 .story_bar').css('background','grey')
        $('.story_dot3 .story_bar').css('border','none')
    })
    $(document).on('click','.story_dot1 .story_bar',function(){
        $('.story_dot1 .story_bar').css('background','#000')
        $('.story_dot1 .story_bar').css('border','2px solid orange')
        $('.story_dot0 .story_bar').css('background','grey')
        $('.story_dot0 .story_bar').css('border','none')
        $('.story_dot2 .story_bar').css('background','grey')
        $('.story_dot2 .story_bar').css('border','none')
        $('.story_dot3 .story_bar').css('background','grey')
        $('.story_dot3 .story_bar').css('border','none')
    })
    $(document).on('click','.story_dot2 .story_bar',function(){
        $('.story_dot2 .story_bar').css('background','#000')
        $('.story_dot2 .story_bar').css('border','2px solid orange')
        $('.story_dot0 .story_bar').css('background','grey')
        $('.story_dot0 .story_bar').css('border','none')
        $('.story_dot1 .story_bar').css('background','grey')
        $('.story_dot1 .story_bar').css('border','none')
        $('.story_dot3 .story_bar').css('background','grey')
        $('.story_dot3 .story_bar').css('border','none')
    })
    $(document).on('click','.story_dot3 .story_bar',function(){
        $('.story_dot3 .story_bar').css('background','#000')
        $('.story_dot3 .story_bar').css('border','2px solid orange')
        $('.story_dot0 .story_bar').css('background','grey')
        $('.story_dot0 .story_bar').css('border','none')
        $('.story_dot1 .story_bar').css('background','grey')
        $('.story_dot1 .story_bar').css('border','none')
        $('.story_dot2 .story_bar').css('background','grey')
        $('.story_dot2 .story_bar').css('border','none')
    })

    $(document).on('click','.xi_bars',function(){
        $('body').css('overflow','hidden')
        $('.black_field').css('display','block')
        $('.menu_bar').css('overflow','auto')
        $('.menu_bar').css('right','0')
    })
    $(document).on('click','.close_btn',function(){
        $('body').css('overflow','auto')
        $('.black_field').css('display','none')
        $('.menu_bar').css('right','-400px')
    })

    $(document).on('click','.footer_link_box',function(){
        $('.footer_link_box').children('.footer_link1').slideUp()
        $(this).children('.footer_link1').stop().slideToggle()
    })