$(function(){

    $('.wrap .header .banner ul').addClass('clearfix');


    var banner = $('.wrap .header .banner');
    var imgBox = $('.wrap .header .banner ul');
    var imageList = $('.wrap .header .banner ul li');
    var imgs = $('.wrap .header .banner ul li a img');
    var imgSrc = imageList.find('img').attr('src');
    var imagObj = new Image();
    var w = banner.width();
    var h = 0;
    imagObj.src = imgSrc;
    imagObj.onload = function () {
        h  = imagObj.height / imagObj.width * w;
        banner.css('height', h+'px');
    };

    imgBox.width(imageList.length*w + 'px')
    console.log(w);
    console.log(imageList.length*w)
})
