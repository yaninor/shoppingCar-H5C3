$(function(){

    $('#cartDemo').fullpage({
        navigation:true,
        sectionsColor:['#f9dd67','#84a2d4','#ef674d','#ffeedd','#cf4759','#85d9ed','#8ac060','#84d9ed'],
        afterLoad:function (a,page){
            $('.section').eq(page-1).addClass('animation').siblings().removeClass('animation');
            $('.section>div img').removeAttr('style');
            $('.section>div div').removeAttr('style');

            if(page==2){
                $('.search01').animate({
                    marginLeft:-111
                },1000,'easeOutBack',function(){
                    $('.search01').hide();
                    $('.search02').show().delay(500).animate({
                        marginLeft:130,
                        bottom:450,
                        width:148
                    },1000);
                    $('.section2 .sofas').delay(500).animate({
                        width:441,
                        height:218
                    },1000)
                });
            }else if(page==4){
                $('.section4 .carBox').animate({
                    marginLeft:1000
                },2500,'easeInElastic',function(){
                    $('.section4 .board').fadeIn(800);
                })
            }else if(page==6){
                $('.section6 .wrapBox').animate({
                    top:10
                },1000,function(){
                    $('.section6 .bg').animate({
                        backgroundPositionX:-1400
                    },2000,function(){
                        $('.section6 .man').animate({
                            height:160
                        },1000,function(){
                            $('.section6 .man').animate({
                                right:-140
                            },1000,function(){
                                $('.section6 .door').show();
                                $('.section6 .girl').show();
                            })
                        })
                    })
                });
            }else if(page==8){
                $('.section8').mousemove(function(e){
                    $('.section8 .hand').css({
                        left:e.clientX-70,
                        top:e.clientY
                    })
                });
                $('.section8 .again').click(function(){
                    $.fn.fullpage.moveTo(1);
                })
            }
        }
    });
})