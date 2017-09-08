//tab 放大镜效果 以及  一些特殊的样式
$(function(){
    var tabMagnifier = $('.tab-magnifier'),
        bigPicture = $('.big-picture'),
        bigPictureImg = $('.big-picture a img'),
        tabSmall = $('.tab-small'),
        tabSmallList = $('.tab-small ul li'),
        tabSmallImg = $('.tab-small ul li img'),
        enlarge = $('.enlarge'),
        moveSmall = $('.move-small'),
        enlargeImg = $('.enlarge img');

    var imgArr = ["img/da1.png","img/da2.png","img/da3.png","img/da4.png"];
    var caoDaArr  = ["img/caoda1.png","img/caoda2.png","img/caoda3.png","img/caoda4.png"]

    //样式
    Style()


   //初始化页面
    Initialization();


    //tab切换
    tab();


    //放大镜
    magnifier();

//精选tab
    selected();





    function selected(){
        var tabWrap = $('.wrap .main .recommended-collocation .pro-collocation .collocation-wrap'),
            UL      = $('.wrap .main .recommended-collocation .pro-collocation ul'),
            tabLength = $('.wrap .main .recommended-collocation .pro-collocation ul li').length,
            lis       = $('.wrap .main .recommended-collocation .pro-collocation ul li'),
            W         = $('.wrap .main .recommended-collocation .pro-collocation ul li').width(),
            prev      = $('.wrap .main .recommended-collocation .pro-collocation .prev'),
            next      = $('.wrap .main .recommended-collocation .pro-collocation .next');
        $('.wrap .main .recommended-collocation .pro-collocation .collocation-wrap ul').width(tabLength*W)
        var to = 0,
            onOff = true,
            timer = null;
        prev.click(function(){
            if(!this.onOff){
                to++;
                UL.animate({ left:-(to*W) +'px'},200,'linear',function(){
                    this.onOff =!this.onOff;
                })
                if(to >= tabLength-4){
                    to=tabLength-4;
                }
            }
        })
        next.click(function(){
            if(!this.onOff){
                if(to <= 0){
                    to=1;
                }
                to--;
                UL.animate({ left:-(to*W) +'px'},200,'linear',function(){
                    this.onOff =!this.onOff;
                })

            }
        })


    }
    function Style(){
        var proH = $('.wrap .main .recommended-collocation .recommended-details .product').height() +'px';
        $('.wrap .main .recommended-collocation .recommended-details .plus ').css({
            'line-height':proH
        });
        $('.wrap .main .recommended-collocation .pro-collocation').height(proH);
        $('.wrap .main .recommended-collocation .settlement').height(proH);
    }
    function magnifier(){
        bigPicture[0].onmouseleave = function(){
            enlarge[0].style.display ='none';
            moveSmall[0].style.display='none';
        }
        bigPicture[0].onmousemove = function(ev){
            enlarge[0].style.display ='block';
            moveSmall[0].style.display='block';
            var l = ev.clientX - moveSmall[0].offsetWidth/2 - bigPicture[0].getBoundingClientRect().left;
            var t = ev.clientY - moveSmall[0].offsetHeight/2 - bigPicture[0].getBoundingClientRect().top;
            var maxL = bigPicture[0].clientWidth -  moveSmall[0].offsetWidth;
            var maxT = bigPicture[0].clientHeight -  moveSmall[0].offsetHeight;
            if(l<0){l = 0; }
            if(t<0){t = 0; }
            if(l>maxL){l = maxL; }
            if(t>maxT){t = maxT; }
            moveSmall[0].style.left = l + 'px';
            moveSmall[0].style.top = t + 'px';
            enlargeImg[0].style.left = -l/maxL*(enlargeImg[0].offsetWidth - enlarge[0].clientWidth)+'px';
            enlargeImg[0].style.top = -t/maxT*(enlargeImg[0].offsetHeight - enlarge[0].clientHeight)+'px';
        }
    }
    function Initialization(){
        bigPictureImg[0].src=imgArr[0];
        enlargeImg[0].src = caoDaArr[0];
        var w = bigPicture.width();
        var h = bigPicture.height();
        enlarge.css({
            "width":w,
            'height':h,
            'left':h
        });

        //初始化变量

    }
    function tab(){
        var Length = tabSmallList.length;
        for(var i=0;i<Length;i++){
            tabSmallList[i].index=i;
            tabSmallList[i].onmouseenter=function(){
                this.style.border='1px solid #eb383b';
                bigPictureImg[0].src=imgArr[this.index];
                enlargeImg[0].src= caoDaArr[this.index];
            }
            tabSmallList[i].onmouseleave=function(){
                this.style.border='1px solid #a7a7a7';
            }
        }
    }
})

