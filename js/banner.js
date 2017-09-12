

// slidebanner({
//           contain1:'.wrap',
//           contain2:'ul',
//           btn:'.btn',
//           sldir:['.pre','.next'],
//           auto:true
//       });
function slidebanner(option){
  
  var num=0;
  var timer=null;
  var screenWid=$(document.body).width();
  $(option.contain1).width($(document.body).width());
  $(option.contain2).find('li').width($(option.contain1).width());
  $(option.contain2).find('li img').width($(option.contain1).width());
  $(option.contain1).height($(option.contain2).find('li img').eq(0).get(0).offsetHeight);
    console.log()
  var firstLi=$(option.contain2).find('li').eq(0).clone();        
  $(option.contain2).append(firstLi);
  $(option.btn).children().eq(0).addClass('active');

  $(option.contain2).width($(option.contain1).width()*$(option.contain2).children().length);

   window.onresize=function(){
       $(option.contain1).width($(document.body).width());
   }
  function autoPlay(){
      clearInterval(timer);
      timer=setInterval(function(){
          num++;
          if(num==$(option.contain2).children().length){
             num=1;
             $(option.contain2).css('left',0);
          }
          $(option.contain2).stop().animate({'left':-num*$(option.contain1).width()},800,'swing');
          if(num==$(option.contain2).children().length-1){
             $(option.btn).children().eq(0).addClass('active').siblings().removeClass('active');
          }else{
             $(option.btn).children().eq(num).addClass('active').siblings().removeClass('active');
          }
      },2000);
  }

  if(option.auto){
      autoPlay();
  }

  $(option.contain2).hover( //移入移出停止轮番 开启轮番

           function(){
                clearInterval(timer);
            },
            function(){
              if(option.auto){
                  autoPlay();
              } 
            }
  );

  // 给每一个导航按钮添加事件
  $(option.btn).children().each(function(i){
      
      $(this).on('mouseover',function(){
          clearInterval(timer);
          $(option.contain2).stop().animate({'left':-$(this).index()*$(option.contain1).width()},150,'swing');
          $(option.btn).children().eq($(this).index()).addClass('active').siblings().removeClass('active');
          num=$(this).index();  
      });
  });

  //上一张图效果
  $(option.sldir[0]).click(function(){
      num--;
      clearInterval(timer);
      if(num<0){
         num=$(option.contain2).children().length-2;
         $(option.contain2).css('left',-$(option.contain1).width()*($(option.contain2).children().length-1));
      }
      console.log(-$(option.contain1).width()*$(option.contain2).children().length-2);
      $(option.contain2).stop().animate({left:-num*$(option.contain1).width()},800);
      $(option.btn).children().eq(num).addClass('active').siblings().removeClass('active');  
  });
  //下一张图效果
  $(option.sldir[1]).click(function(){
      num++;
      clearInterval(timer);
      if(num==$(option.contain2).children().length){
          num=1;
          $(option.contain2).css({left:0});
      }
      $(option.contain2).stop().animate({left:-num*$(option.contain1).width()},800);

      if(num==$(option.contain2).children().length-1){
          $(option.btn).children().eq(0).addClass('active').siblings().removeClass('active');
      }else{
          $(option.btn).children().eq(num).addClass('active').siblings().removeClass('active');
      }
  });
}  