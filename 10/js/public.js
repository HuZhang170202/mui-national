// 页面切换
var oppo = {
    init: function () {
    	flag = true;
       /* $(".bg1").css({'animation': 'baseBgDown 1s linear'});//初始化1背景进入*/
        this.baseBgUp();this.BaseBgDown();
    	$(".bg2,.bg3,.bg4,.bg5,.bg6,.bg7,.bg8,.bg9,.bg10,.bg11,.bg12,.bg13,.bg14,.bg15,.bg16").css({'opacity': '0'});	//初始化2隐藏
    	$(".page1 .pages-header").css({'animation': 'fhBigTolittleIn 2s linear','opacity': '1'});//初始化1头进入
    	$(".page1 .pages-footer").css({'animation': 'fhBigTolittleIn 2s linear','opacity': '1'});//初始化1尾进入
    	/*显示第一屏*/
    	this.p1Show();
    	
        /*infinite*/
        
    },
    baseUpFooterHeader: function(index){
    	var indexNext = index+1;
    	
    	$('.page'+index+' .pages-header').css({'animation': '','opacity': '0'});
		$('.page'+index+' .pages-footer').css({'animation': '','opacity': '0'});
		$('.page'+index+' .g-con').css({'animation': '','opacity': '0'});
		$('.page'+index+' .g-con-line').css({'animation': '','opacity': '0'});
		$('.page'+index+' .aire').css({'animation': '','opacity': '0'});
		$('.page'+index+' .title').css({'animation': '','opacity': '0'});
		$('.page'+index+' .page-num').css('opacity','0');
		
		$('.page'+indexNext+' .pages-header').css({'animation': 'fhBigTolittleIn 1s linear','opacity': '1'});
		$('.page'+indexNext+' .pages-footer').css({'animation': 'fhBigTolittleIn 1s linear','opacity': '1'});
		$('.page'+indexNext+' .g-con').css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
		$('.page'+indexNext+' .g-con-line').css({'animation': 'littleToBigIn 1.5s linear','opacity': '1'});
		$('.page'+indexNext+' .aire').css({'animation': 'littleToBigIn 2s linear','opacity': '1'});
		$('.page'+indexNext+' .title').css({'animation': 'rotateIn 1s linear','opacity': '1'});
		$('.page'+indexNext+' .page-num').css('opacity','1');
    },
    baseDownFooterHeader: function(index){
    	var indexPre = index-1;
    	$('.page'+index+' .pages-header').css({'animation': '','opacity': '0'});
		$('.page'+index+' .pages-footer').css({'animation': '','opacity': '0'});
		$('.page'+index+' .g-con').css({'animation': '','opacity': '0'});
		$('.page'+index+' .g-con-line').css({'animation': '','opacity': '0'});
		$('.page'+index+' .aire').css({'animation': '','opacity': '0'});
		$('.page'+index+' .title').css({'animation': '','opacity': '0'});
		$('.page'+index+' .page-num').css('opacity','0');
		
		
		$('.page'+indexPre+' .pages-header').css({'animation': 'fhBigTolittleIn 1s linear','opacity': '1'});
		$('.page'+indexPre+' .pages-footer').css({'animation': 'fhBigTolittleIn 1s linear','opacity': '1'});
		$('.page'+indexPre+' .g-con').css({'animation': 'fhBigTolittleIn 1s linear','opacity': '1'});
		$('.page'+indexPre+' .g-con-line').css({'animation': 'fhBigTolittleIn 1.5s linear','opacity': '1'});
		$('.page'+indexPre+' .aire').css({'animation': 'fhBigTolittleIn 2s linear','opacity': '1'});
		$('.page'+indexPre+' .title').css({'animation': 'rotateIn 1s linear','opacity': '1'});
		$('.page'+indexPre+' .page-num').css('opacity','1');
		
    },
    baseBgCome: function(index){
    	var indexNext = index+1;
    	$('.page'+indexNext+' .base-bg-prea').css({'animation': 'rotateInDownLeft 0.5s linear','opacity': '1'});
		$('.page'+indexNext+' .base-bg-next').css({'animation': 'rotateInDownRight 0.5s linear','opacity': '1'});
		$('.page'+index+' .base-bg-prea').css({'animation': '','opacity': '0'});
		$('.page'+index+' .base-bg-next').css({'animation': '','opacity': '0'});
    },
    baseBgOut: function(index){
    	var indexPre = index-1;
    	$('.page'+indexPre+' .base-bg-prea').css({'animation': 'rotateInDownLeft 0.5s linear','opacity': '1'});
		$('.page'+indexPre+' .base-bg-next').css({'animation': 'rotateInDownRight 0.5s linear','opacity': '1'});
		$('.page'+index+' .base-bg-prea').css({'animation': '','opacity': '0'});
		$('.page'+index+' .base-bg-next').css({'animation': '','opacity': '0'});
    },
    /*baseBgUp: function(index){
    	var addIndex = index+1;
    	$('.bg'+index).css({'animation': '','opacity': '0'});
        $('.bg'+addIndex).css({'animation': 'baseSliderBgDown 0.7s linear','opacity': '1'});
    },
    BaseBgDown: function(index){
    	var minusIndex = index-1;
    	$('.bg'+index).css({'animation': '','opacity': '0'});
        $('.bg'+minusIndex).css({'animation': 'baseSilderBgUp 0.7s linear','opacity': '1'});
    },*/
    baseBgUp: function(index){
    	var addIndex = index+1;
    	$('.bg'+index).css({'animation': 'baseSilderBgUp 0.8s linear','opacity': '0'});
        $('.bg'+addIndex).css({'transform': 'translateY(0%)','transition': 'all 0.5s','opacity': '1'});
    },
    BaseBgDown: function(index){
    	var minusIndex = index-1;
    	$('.bg'+index).css({'transform': 'translateY(100%)','transition': 'all 1s','opacity': '0'});
        $('.bg'+minusIndex).css({'animation': 'baseSliderBgDown 0.5s linear','opacity': '1'});
    },
    p1Show: function(){
    	$(".one-con").css({'animation': 'bounceInDown 0.5s linear','opacity': '1'})
    	setTimeout(function(){
    		$(".p1-text1").css({'animation': 'bounceInLeft 0.8s linear','opacity': '1'});
    		$(".p1-text2").css({'animation': 'bounceInRight 0.8s linear','opacity': '1'});
    		$(".LOGO").css({'animation': 'baseOpacity 1s linear','opacity': '1'});
    		setTimeout(function(){
	    		$(".p1-green").css({'animation': 'flipInY 0.8s linear','opacity': '1'});
	    		//气球飘出----
	    		$(".p1-qq1").css({'animation': 'bottomToTop 1.6s linear','opacity': '1'});
	    		$(".p1-qq2").css({'animation': 'bottomToTop 1.6s linear','opacity': '1'});
	    		$(".p1-qq3").css({'animation': 'bottomToTop 2s linear','opacity': '1'});
	    		$(".p1-qq4").css({'animation': 'bottomToTop 2s linear','opacity': '1'});
	    	},200);
	    	//气球摇摆----
	    	setTimeout(function(){$(".p1-qq1").css({'animation': 'yaobai 2.5s linear infinite','opacity': '1'})},1800);
	    	setTimeout(function(){$(".p1-qq2").css({'animation': 'yaobai 2s linear infinite','opacity': '1'})},1800);
	    	setTimeout(function(){$(".p1-qq3").css({'animation': 'yaobai 1.5s linear infinite','opacity': '1'})},2200);
	    	setTimeout(function(){$(".p1-qq4").css({'animation': 'yaobai 2s linear infinite','opacity': '1'})},2200);
    	},1000);
    },
    p1Hide: function(){
    	$(".one-con").css({'animation': '','opacity': '0'})
    	$(".p1-text1").css({'animation': '','opacity': '0'});
    	$(".p1-text2").css({'animation': '','opacity': '0'});
		$(".p1-green").css({'animation': '','opacity': '0'});
		$(".LOGO").css({'animation': '','opacity': '0'});
		//气球飘出----
		$(".p1-qq1").css({'animation': '','opacity': '0'});
		$(".p1-qq2").css({'animation': '','opacity': '0'});
		$(".p1-qq3").css({'animation': '','opacity': '0'});
		$(".p1-qq4").css({'animation': '','opacity': '0'});
    },
    p2Show: function(){
    	/*显示第二屏*/
    	setTimeout(function(){
    		$(".p2-text1").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    		$(".p2-text2").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    		$(".p2-text3").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    		$(".p2-sh").css({'animation': 'fhBigTolittleIn 1s linear','opacity': '1'});
    		$(".go-warp1").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    		$(".go1").css({'animation': 'jttopToBbottom 1.5s linear infinite','opacity': '1'});
    		$(".go-warp2").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    		$(".go2").css({'animation': 'jttopToBbottom 1.5s linear infinite','opacity': '1'});
    	},1000);
    },
    p2Hide: function(){
    		$(".p2-text1").css({'animation': '','opacity': '0'});
    		$(".p2-text2").css({'animation': '','opacity': '0'});
    		$(".p2-text3").css({'animation': '','opacity': '0'});
    		$(".p2-sh").css({'animation': '','opacity': '0'});
    		$(".go-warp1").css({'animation': '','opacity': '0'});
    		$(".go1").css({'animation': '','opacity': '0'});
    		$(".go-warp2").css({'animation': '','opacity': '0'});
    		$(".go2").css({'animation': '','opacity': '0'});
    },
    p3Show: function(){
    	setTimeout(function(){  
        	$(".p3-map1").css({'animation': 'fadeIn 0.7s linear','opacity': '1'});
        	$(".p3l-title1").css({'animation': 'rotateIn 0.7s linear','opacity': '1'});
        },500);
        setTimeout(function(){
        	$(".p3-jiantou").css({'animation': 'littleToBigIn 0.7s linear','opacity': '1'});
        	$(".p3-no1").css({'animation': 'fadeInDown 0.5s linear','opacity':'1'});
        	$(".p3-no2").css({'animation': 'fadeInDown 0.5s linear','opacity':'1'});
        	$(".p3-no3").css({'animation': 'fadeInDown 0.5s linear','opacity':'1'});
        },1000);
        setTimeout(function(){
        	$(".p3-title2").css({'animation': 'rotateIn 0.7s linear','opacity': '1'});
        	$(".p3-map2").css({'animation': 'fadeIn 0.7s linear','opacity': '1'});
        },1500);
        setTimeout(function(){
        	$(".p3-label1").css({'animation':'jumpLabel 2s infinite linear','animation-delay':'0.6s','opacity': '1','transtion':'all 1s'});
	    	$(".p3-label2").css({'animation':'jumpLabel 2s infinite linear','animation-delay':'1s','opacity': '1','transtion':'all 1s'});
	    	$(".p3-label3").css({'animation':'jumpLabel 1s infinite linear','animation-delay':'0.9s','opacity': '1','transtion':'all 1s'});
	    	$(".p3-label4").css({'animation':'jumpLabel 2s infinite linear','animation-delay':'0.5s','opacity': '1','transtion':'all 1s'});
	    	$(".p3-label5").css({'animation':'jumpLabel 1s infinite linear','animation-delay':'0.3s','opacity': '1','transtion':'all 1s'});
        },2000);
        
        setTimeout(function(){
        	$(".p3-label-text1").css({'animation':'bottomToTop 2s linear','opacity': '1'});
        	$(".p3-label-text2").css({'animation':'bottomToTop 1s linear','opacity': '1'});
        	$(".p3-label-text3").css({'animation':'bottomToTop 1.2s linear','opacity': '1'});
        	$(".p3-label-text4").css({'animation':'bottomToTop 1s linear','opacity': '1'});
        	$(".p3-label-text5").css({'animation':'bottomToTop 1.5s linear','opacity': '1'});
        },2100)
    },
    p3Hide: function(){
    		$(".p3-map1").css({'animation': '','opacity': '0'});
    		$(".p3-map2").css({'animation': '','opacity': '0'});
        	$(".p3l-title1").css({'animation': '','opacity': '0'});
        	$(".p3-title2").css({'animation': '','opacity': '0'});
        	$(".p3-no1").css({'animation': '','opacity': '0'});
        	$(".p3-no2").css({'animation': '','opacity': '0'});
        	$(".p3-no3").css({'animation': '','opacity': '0'});
        	$(".p3-jiantou").css({'animation': '','opacity': '0'});
    	
        	$(".p3-label1").css({'animation':'','animation-delay':'0.6s','opacity': '0'});
        	$(".p3-label2").css({'animation':'','animation-delay':'1s','opacity': '0'});
        	$(".p3-label3").css({'animation':'','animation-delay':'0.9s','opacity': '0'});
        	$(".p3-label4").css({'animation':'','animation-delay':'0.5s','opacity': '0'});
        	$(".p3-label5").css({'animation':'','animation-delay':'0.3s','opacity': '0'});
        	$(".p3-label-text1").css({'animation':'','opacity': '0'});
        	$(".p3-label-text2").css({'animation':'','opacity': '0'});
        	$(".p3-label-text3").css({'animation':'','opacity': '0'});
        	$(".p3-label-text4").css({'animation':'','opacity': '0'});
        	$(".p3-label-text5").css({'animation':'','opacity': '0'});
    },
    p4Show: function(){
    	setTimeout(function(){
    		$(".p4-text1").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    		$(".p4-map").css({'animation': 'littleToBigIn 0.5s linear','opacity': '1'});
    	},1000);
    	setTimeout(function(){
    		$(".p4-text2").css({'animation': 'rotateInUpLeft 1s linear','opacity': '1'});
    		$(".p4-text3").css({'animation': 'rotateInUpLeft 1.1s linear','opacity': '1'});
    		$(".p4-text4").css({'animation': 'rotateInUpLeft 1.2s linear','opacity': '1'});
    	},1500);
    	setTimeout(function(){
    		$(".p4-no4").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
    		$(".p4-no5").css({'animation': 'fadeInRight 1.1s linear','opacity': '1'});
    		$(".p4-no6").css({'animation': 'fadeInRight 1.2s linear','opacity': '1'});
    		$(".p4-no7").css({'animation': 'fadeInRight 1.3s linear','opacity': '1'});
    		$(".p4-no8").css({'animation': 'fadeInRight 1.4s linear','opacity': '1'});
			$(".p4-no9").css({'animation': 'fadeInRight 1.5s linear','opacity': '1'});
			$(".play").css({'animation':'fadeInDown 1s linear','opacity':'1'});
			$(".home").css({'animation':'fadeInDown 1s linear','opacity':'1'});
			$(".white").css({'animation':'bounceInLeft 1s linear','opacity':'1'});
			$(".yellow").css({'animation':'bounceInRight 1s linear','opacity':'1'});
			$(".num").css({'animation':'bounceIn 1s linear','opacity':'1'});
    		$(".p4-text5").css({'animation': 'fadeInUp 1.5s linear','opacity': '1'});
    	},2000);
    	
    },
    p4Hide: function(){
    		$(".p4-text1").css({'animation': '','opacity': '0'});
    		$(".p4-map").css({'animation': '','opacity': '0'});
    		$(".p4-text2").css({'animation': '','opacity': '0'});
    		$(".p4-text3").css({'animation': '','opacity': '0'});
    		$(".p4-text4").css({'animation': '','opacity': '0'});
    		$(".p4-no4").css({'animation': '','opacity': '0'});
    		$(".p4-no5").css({'animation': '','opacity': '0'});
    		$(".p4-no6").css({'animation': '','opacity': '0'});
    		$(".p4-no7").css({'animation': '','opacity': '0'});
    		$(".p4-no8").css({'animation': '','opacity': '0'});
			$(".p4-no9").css({'animation': '','opacity': '0'});
			$(".play").css({'animation': '','opacity': '0'});
			$(".home").css({'animation': '','opacity': '0'});
			$(".white").css({'animation': '','opacity': '0'});
			$(".yellow").css({'animation': '','opacity': '0'});
			$(".num").css({'animation': '','opacity': '0'});
    		$(".p4-text5").css({'animation': '','opacity': '0'});
    },
    p5Show: function(){
    	setTimeout(function(){
			$(".p5-city").css({'animation': 'fadeInLeft 0.5s linear','opacity': '1'});
			$(".p5-bg").css({'animation': 'fadeInRight 0.5s linear','opacity': '1'});
			$(".p5-name").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
			$(".p5-xk").css({'animation': 'rotateIn 1.2s linear','opacity': '1'});
			$(".p5-text").css({'animation': 'fadeInUp 1.5s linear','opacity': '1'});
		},1500);
    	
    },
    p5Hide: function(){
    	$(".p5-city").css({'animation': 'none','opacity': '0'});
		$(".p5-bg").css({'animation': 'none','opacity': '0'});
		$(".p5-name").css({'animation': 'none','opacity': '0'});
		$(".p5-xk").css({'animation': 'none','opacity': '0'});
		$(".p5-text").css({'animation': 'none','opacity': '0'});
		
    },
    p6Show: function(){
    	setTimeout(function(){
    		$(".p6-top-chat1").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    		$(".p6-top-chat2").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    		$(".p6-top-chat3").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    	},1000);
    	setTimeout(function(){
    		$(".p6-top-chat2-in").css({
    			'width':'15%',
    			'transition': 'all 1s'
    		})
    		$(".p6-top-chat2-label").css({
    			'left':'15%',
    			'transition': 'all 1s'
    		})
    		$(".p6-top-chat3-in").css({
    			'width':'30%',
    			'transition': 'all 1s'
    		})
    		$(".p6-top-chat3-label").css({
    			'left':'30%',
    			'transition': 'all 1s'
    		})
    		$(".p6-top-wenan").css({'animation': 'fadeInUp 1.1s linear','opacity': '1'});
    	},1300)
    	
    	setTimeout(function(){
    		$(".p6-jiantou1, .p6-jiantou2").css({
    			'animation': 'littleToBigIn 0.5s linear','opacity': '1'
    		})
    		$(".p6-jiantou1-text, .p6-jiantou2-text").css({
    			'animation': 'fadeInDown 0.5s linear','opacity': '1'
    		})
    		
    		$(".p6-bottom-con1").css({'animation': 'rotateInUpLeft 0.5s linear','opacity': '1'});
    		$(".p6-bottom-con2").css({'animation': 'rotateInUpLeft 0.7s linear','opacity': '1'});
    		$(".p6-bottom-con3").css({'animation': 'rotateInUpLeft 0.9s linear','opacity': '1'});
    		$(".p6-bottom-con4").css({'animation': 'rotateInUpLeft 1.1s linear','opacity': '1'});
    		$(".p6-bottom-wenan").css({'animation': 'fadeInUp 1.1s linear','opacity': '1'});
    	},1500);
    },
    p6Hide: function(){
    		$(".p6-top-chat1").css({'animation': '','opacity': '0'});
    		$(".p6-top-chat2").css({'animation': '','opacity': '0'});
    		$(".p6-top-chat3").css({'animation': '','opacity': '0'});
    		$(".p6-top-chat2-in").css({
    			'width':'0%',
    			'transition': ''
    		})
    		$(".p6-top-chat2-label").css({
    			'left':'0%',
    			'transition': ''
    		})
    		$(".p6-top-chat3-in").css({
    			'width':'0%',
    			'transition': ''
    		})
    		$(".p6-top-chat3-label").css({
    			'left':'0%',
    			'transition': ''
    		})
    	
    		$(".p6-jiantou1, .p6-jiantou2").css({
    			'animation': '','opacity': ''
    		})
    		$(".p6-jiantou1-text, .p6-jiantou2-text").css({
    			'animation': '','opacity': ''
    		})
    		
    		$(".p6-bottom-con1").css({'animation': '','opacity': '0'});
    		$(".p6-bottom-con2").css({'animation': '','opacity': '0'});
    		$(".p6-bottom-con3").css({'animation': '','opacity': '0'});
    		$(".p6-bottom-con4").css({'animation': '','opacity': '0'});
    		$(".p6-bottom-wenan").css({'animation': '','opacity': '0'});
    		$(".p6-top-wenan").css({'animation': '','opacity': '0'});
    },
    p7Show: function(){
    	setTimeout(function(){
    		$(".p7-img01").css({'animation': 'fhBigTolittleIn 1s linear','opacity': '1'});
    		$(".p7-imgtext01").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
    	},1000);
    	setTimeout(function(){
    		$(".p7-img02").css({'animation': 'bounceInLeft 1s linear','opacity': '1'});
    		$(".p7-img03").css({'animation': 'bounceInRight 1s linear','opacity': '1'});
    		$(".p7-imgtext02").css({'animation': 'bounceIn 1.2s linear','opacity': '1'});
    		$(".p7-imgtext02").css({'animation': 'bounceIn 1.2s linear','opacity': '1'});
    	},1300);
    	
    	setTimeout(function(){
    		$(".p7-chat01").css({'animation': 'rubberBand 1s linear','opacity': '1'});
    		$(".p7-chat02").css({'animation': 'rubberBand 1s linear','opacity': '1'});
    		$(".p7-wenan").css({'animation': 'fadeInUp 1s linear','opacity': '1'});
    	},2000);
    },
    p7Hide: function(){
    		$(".p7-img01").css({'animation': '','opacity': '0'});
    		$(".p7-imgtext01").css({'animation': '','opacity': '0'});
    		$(".p7-img02").css({'animation': '','opacity': '0'});
    		$(".p7-img03").css({'animation': '','opacity': '0'});
    		$(".p7-imgtext02").css({'animation': '','opacity': '0'});
    		$(".p7-imgtext02").css({'animation': '','opacity': '0'});
    		$(".p7-chat01").css({'animation': '','opacity': '0'});
    		$(".p7-chat02").css({'animation': '','opacity': '0'});
    		$(".p7-wenan").css({'animation': '','opacity': '0'});
    },
    p8Show: function(){
    	setTimeout(function(){
			$(".p8-jd1").css({'animation':'rollIn 1s linear','opacity':'1'});
			$(".p8-jd2").css({'animation':'fadeInRight 1s linear','opacity':'1'});
			$(".p8-jd3").css({'animation':'rotateInUpRight 1s linear','opacity':'1'})
		},1100);
		setTimeout(function(){
			$(".p8-sq1").css({'animation':'rollIn 1.1s linear','opacity':'1'});
			$(".p8-sq2").css({'animation':'fadeInLeft 1.2s linear','opacity':'1'});
			$(".p8-sq3").css({'animation':'rotateInUpLeft 1.2s linear','opacity':'1'})
		},1200);
		setTimeout(function(){
			$(".p8-gy1").css({'animation':'bounceInUp 1.2s linear','opacity':'1'});
			$(".p8-gy2").css({'animation':'slideInDown 1.2s linear','opacity':'1'});
			$(".p8-gy3").css({'animation':'slideInUp 1.2s linear','opacity':'1'})
    	},1400);
    	
    },
    p8Hide: function(){
			$(".p8-jd1").css({'animation': 'none','opacity': '0'});
			$(".p8-jd2").css({'animation': 'none','opacity': '0'});
			$(".p8-jd3").css({'animation': 'none','opacity': '0'});

			$(".p8-sq1").css({'animation': 'none','opacity': '0'});
			$(".p8-sq2").css({'animation': 'none','opacity': '0'});
			$(".p8-sq3").css({'animation': 'none','opacity': '0'});

			$(".p8-gy1").css({'animation': 'none','opacity': '0'});
			$(".p8-gy2").css({'animation': 'none','opacity': '0'});
			$(".p8-gy3").css({'animation': 'none','opacity': '0'});
    		
    },
    p9Show: function(){
    	setTimeout(function(){
    		$(".p9-path").css({'animation': 'fadeInLeft 0.7s linear','opacity': '1'});
    	},500);
    	setTimeout(function(){
			$(".p9-top1tu").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
			$(".p9-top1").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
    	},1000);
    	setTimeout(function(){
			$(".p9-top2tu").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
			$(".p9-top2").css({'animation': 'fadeInLeft 1s linear','opacity': '1'});
    	},1200);
    	setTimeout(function(){
			$(".p9-top3tu").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
			$(".p9-top3").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
    	},1400);
    	setTimeout(function(){
			$(".p9-top4tu").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
			$(".p9-top4").css({'animation': 'rollIn 1s linear','opacity': '1'});
    	},1600);
    	setTimeout(function(){
			$(".p9-top5tu").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
			$(".p9-top5").css({'animation': 'flipInX 1s linear','opacity': '1'});
    	},1800);
    	setTimeout(function(){
    		$(".p9-quxian").css({'animation': 'flipInY 1s linear','opacity': '1'});
    		$(".p9-text").css({'animation': 'fadeInUp 1.5s linear','opacity': '1'});
    	},1800);
    },
    p9Hide: function(){
		$(".p9-path").css({'animation': '','opacity': '0'});
		$(".p9-top1tu").css({'animation': '','opacity': '0'});
		$(".p9-top2tu").css({'animation': '','opacity': '0'});
		$(".p9-top3tu").css({'animation': '','opacity': '0'});
		$(".p9-top4tu").css({'animation': '','opacity': '0'});
		$(".p9-top5tu").css({'animation': '','opacity': '0'});

		$(".p9-top1").css({'animation': '','opacity': '0'});
		$(".p9-top2").css({'animation': '','opacity': '0'});
		$(".p9-top3").css({'animation': '','opacity': '0'});
		$(".p9-top4").css({'animation': '','opacity': '0'});
		$(".p9-top5").css({'animation': '','opacity': '0'});

		$(".p9-quxian").css({'animation': '','opacity': '0'});
		$(".p9-text").css({'animation': '','opacity': '0'});
    },
    p10Show: function(){
    	setTimeout(function(){
			$(".p10-path").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    	},500);
    	setTimeout(function(){
			$(".p10-top1tu").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
			$(".p10-top1").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
    	},1000);
    	setTimeout(function(){
			$(".p10-top2tu").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
			$(".p10-top2").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
    	},1200);
    	setTimeout(function(){
			$(".p10-top3tu").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
			$(".p10-top3").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
    	},1400);
    	setTimeout(function(){
			$(".p10-top4tu").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
			$(".p10-top4").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
    	},1600);
    	setTimeout(function(){
			$(".p10-top5tu").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
			$(".p10-top5").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
    	},1800);
    	setTimeout(function(){
    		$(".p10-quxian").css({'animation': 'flipInY 1s linear','opacity': '1'});
    		$(".p10-xiaojie").css({'animation': 'fadeInUp 1.5s linear','opacity': '1'});
    	},1800);
    },
    p10Hide: function(){
			$(".p10-path").css({'animation': '','opacity': '0'});
			
    		$(".p10-top1tu").css({'animation': '','opacity': '0'});
    		$(".p10-top2tu").css({'animation': '','opacity': '0'});
    		$(".p10-top3tu").css({'animation': '','opacity': '0'});
    		$(".p10-top4tu").css({'animation': '','opacity': '0'});
			$(".p10-top5tu").css({'animation': '','opacity': '0'});

			$(".p10-top1").css({'animation': '','opacity': '0'});
			$(".p10-top2").css({'animation': '','opacity': '0'});
			$(".p10-top3").css({'animation': '','opacity': '0'});
			$(".p10-top4").css({'animation': '','opacity': '0'});
			$(".p10-top5").css({'animation': '','opacity': '0'});
			
    		$(".p10-quxian").css({'animation': '','opacity': '0'});
    		$(".p10-xiaojie").css({'animation': '','opacity': '0'});
    },
    p11Show: function(){
		setTimeout(function(){
			$(".p11-path").css({'animation': 'rollIn 0.7s linear','opacity': '1'});
    	},1000);
    	setTimeout(function(){
			$(".p11-top1tu").css({'animation': 'rollIn 1s linear','opacity': '1'});
			$(".p11-top1").css({'animation': 'bounceInDown 1s linear','opacity': '1'});
    	},1000);
    	setTimeout(function(){
			$(".p11-top2tu").css({'animation': 'jacklnTheBox 1s linear','opacity': '1'});
			$(".p11-top2").css({'animation': 'bounceInDown 1s linear','opacity': '1'});
    	},1200);
    	setTimeout(function(){
			$(".p11-top3tu").css({'animation': 'zoomlnDown 1s linear','opacity': '1'});
			$(".p11-top3").css({'animation': 'bounceInDown 1s linear','opacity': '1'});
    	},1400);
    	setTimeout(function(){
			$(".p11-top4tu").css({'animation': 'rollIn 1s linear','opacity': '1'});
			$(".p11-top4").css({'animation': 'bounceInDown 1s linear','opacity': '1'});
    	},1600);
    	setTimeout(function(){
			$(".p11-top5tu").css({'animation': 'lightSpeedIn 1s linear','opacity': '1'});
			$(".p11-top5").css({'animation': 'bounceInDown 1s linear','opacity': '1'});
    	},1800);
    	setTimeout(function(){
    		$(".p11-quxian").css({'animation': 'flipInX 1s linear','opacity': '1'});
    		$(".p11-xiaojie").css({'animation': 'fadeInUp 1.5s linear','opacity': '1'});
    	},1800);
    },
    p11Hide: function(){
		$(".p11-path").css({'animation': '','opacity': '0'});

		$(".p11-top1tu").css({'animation': '','opacity': '0'});
		$(".p11-top2tu").css({'animation': '','opacity': '0'});
		$(".p11-top3tu").css({'animation': '','opacity': '0'});
		$(".p11-top4tu").css({'animation': '','opacity': '0'});
		$(".p11-top5tu").css({'animation': '','opacity': '0'});

		$(".p11-top1").css({'animation': '','opacity': '0'});
		$(".p11-top2").css({'animation': '','opacity': '0'});
		$(".p11-top3").css({'animation': '','opacity': '0'});
		$(".p11-top4").css({'animation': '','opacity': '0'});
		$(".p11-top5").css({'animation': '','opacity': '0'});

		$(".p11-quxian").css({'animation': '','opacity': '0'});
		$(".p11-xiaojie").css({'animation': '','opacity': '0'});
    },
    p12Show: function(){
    	setTimeout(function(){
    		$(".p12-text1").css({'animation': 'bounceInLeft 1s linear','opacity': '1'});
    		$(".p12-bingtu").css({'animation': 'rollIn 1s linear','opacity': '1'});
    	},500);
    	setTimeout(function(){
    		$(".p12-text2").css({'animation': 'bounceInRight 1s linear','opacity': '1'});
    	},1000);
    	setTimeout(function(){
    		$(".p12-type1").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
			$(".p12-type2").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
			$(".p12-type3").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
			$(".p12-type4").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
			$(".p12-type5").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
    	},1300);
    	setTimeout(function(){
			$(".p12-age").css({'animation': 'rotateInDownLeft 1s linear','opacity': '1'});
			$(".p12-table").css({'animation': 'rotateInUpRight 1s linear','opacity': '1'});
    	},1500);
    	
    },
    p12Hide: function(){
		$(".p12-text1").css({'animation': '','opacity': '0'});
		$(".p12-bingtu").css({'animation': '','opacity': '0'});
		$(".p12-text2").css({'animation': '','opacity': '0'});
		$(".p12-type1").css({'animation': '','opacity': '0'});
		$(".p12-type2").css({'animation': '','opacity': '0'});
		$(".p12-type3").css({'animation': '','opacity': '0'});
		$(".p12-type4").css({'animation': '','opacity': '0'});
		$(".p12-type5").css({'animation': '','opacity': '0'});
		$(".p12-age").css({'animation': '','opacity': '0'});
		$(".p12-table").css({'animation': '','opacity': '0'});
    },
    p13Show: function(){
    	setTimeout(function(){
			$(".p13-text1").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
			$(".p13-sex").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    		$(".p13-type1").css({'animation': 'bounceInLeft 1s linear','opacity': '1'});
    		$(".p13-type2").css({'animation': 'bounceInRight 1s linear','opacity': '1'});
    	},500);
    	setTimeout(function(){
    		$(".p13-type3").css({'animation': 'bounceInDown 1.3s linear','opacity': '1'});
    		$(".p13-type4").css({'animation': 'bounceInUp 1.5s linear','opacity': '1'});
    		$(".p13-text2").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    		$(".p13-map").css({'animation': 'rollIn 0.5s linear','opacity': '1'});
    	},1000);
    	setTimeout(function(){
    		$(".p13-dw1").css({'animation':'jumpLabel 2s infinite linear','animation-delay':'0.6s','opacity': '1','transtion':'all 1s'});
        	$(".p13-dw2").css({'animation':'jumpLabel 2s infinite linear','animation-delay':'1s','opacity': '1','transtion':'all 1s'});
        	$(".p13-dw3").css({'animation':'jumpLabel 1s infinite linear','animation-delay':'0.9s','opacity': '1','transtion':'all 1s'});
        	$(".p13-dw4").css({'animation':'jumpLabel 2s infinite linear','animation-delay':'0.5s','opacity': '1','transtion':'all 1s'});
    		$(".p13-text3").css({'animation': 'fadeInUp 1.5s linear','opacity': '1'});
    	},1300);
    },
    p13Hide: function(){
			$(".p13-text3").css({'animation': '','opacity': '0'});
			$(".p13-sex").css({'animation': '','opacity': '0'});

    		$(".p13-type1").css({'animation': '','opacity': '0'});
    		$(".p13-type2").css({'animation': '','opacity': '0'});
    		$(".p13-type3").css({'animation': '','opacity': '0'});
			$(".p13-type4").css({'animation': '','opacity': '0'});
			
    		$(".p13-text2").css({'animation': '','opacity': '0'});
    		$(".p13-map").css({'animation': '','opacity': '0'});
    		$(".p13-dw1").css({'animation':'','animation-delay':'','opacity': '0','transtion':''});
        	$(".p13-dw2").css({'animation':'','animation-delay':'','opacity': '0','transtion':''});
        	$(".p13-dw3").css({'animation':'','animation-delay':'','opacity': '0','transtion':''});
			$(".p13-dw4").css({'animation':'','animation-delay':'','opacity': '0','transtion':''});
			
    		$(".p13-text3").css({'animation': '','opacity': '0'});
    },
    p14Show: function(){
    	setTimeout(function(){
    		$(".p14-list-title").css({'animation': 'fadeInDown 0.5s linear','opacity': '1'});
    		$(".p14-chat01,.p14-chat03").css({'width': '50%','transition': 'all 1s','opacity': '1'});
    		$(".p14-chat05").css({'width': '80%','transition': 'all 1s','opacity': '1'});
    	
    	},500);
    	setTimeout(function(){
    		$(".p14-chat02,.p14-chat04").css({'width': '80%','transition': 'all 1s','opacity': '1'});
    		$(".p14-chat06").css({'width': '65%','transition': 'all 1s','opacity': '1'});
    		$(".p14-jiantou").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
    		$(".p14-jiantou-text").css({'animation': 'littleToBigIn 1s linear','opacity': '1'});
    		$(".p14-wenan").css({'animation': 'fadeInUp 1s linear','opacity': '1'});
    	},1000);
    	
    },
    p14Hide: function(){
		$(".p14-list-title").css({'animation': '','opacity': '1'});
		$(".p14-chat01,.p14-chat03,.p14-chat05").css({'width': '0%','transition':'','opacity': '0'});
		$(".p14-chat02,.p14-chat04,.p14-chat06").css({'width': '0%','transition':'','opacity': '0'});
		$(".p14-jiantou").css({'animation': '','opacity': '0'});
		$(".p14-jiantou-text").css({'animation': '','opacity': '0'});
		$(".p14-wenan").css({'animation': '','opacity': '0'});
    },
     p15Show: function(){
    	setTimeout(function(){
    		$(".aiqiyi").css({'animation': 'zoomInUp 0.8s linear','opacity': '1'});
		},1000);
		setTimeout(function(){
			$(".pic").css({'animation': 'fadeInLeft 0.5s linear','opacity': '1'});
			$(".bg").css({'animation': 'fadeInRight 0.5s linear','opacity': '1'});
			$(".text").css({'animation': 'fadeInRight 1s linear','opacity': '1'});
			$(".xk").css({'animation': 'rotateIn 1.2s linear','opacity': '1'});
		},1200)
		setTimeout(function(){
			$(".p15-xiaojie").css({'animation': 'fadeInUp 1.5s linear','opacity': '1'});
		},1500)
    },
    p15Hide: function(){
    	$(".aiqiyi").css({'animation': '','opacity': '0'});
		$(".pic").css({'animation': '','opacity': '0'});
		$(".bg").css({'animation': '','opacity': '0'});
		$(".text").css({'animation': '','opacity': '0'});
		$(".xk").css({'animation': '','opacity': '0'});
		$(".p15-xiaojie").css({'animation': '','opacity': '0'});
	},
     p16Show: function(){
    	setTimeout(function(){
    		$(".p16-text").css({'animation': 'fadeIn 0.5s linear','opacity': '1'});
    		$(".p16-text1").css({'animation': 'fhBigTolittleIn 1s linear','opacity': '1'});
    		$(".p16-logo").css({'animation': 'fhBigTolittleIn 1s linear','opacity': '1'});
    		//fadeInUp
    	},500);
    },
    p16Hide: function(){
    	$(".p16-text").css({'animation': '','opacity': '0'});
		$(".p16-text1").css({'animation': '','opacity': '0'});
		$(".p16-logo").css({'animation': '','opacity': '0'});
    },
    moveUp: function () {
        if (flag && n < len) {
            flag = false;
            switch (n) {
                case 0:
                	/*显示第一屏*/
                	this.p1Show();
                    //$(".p1-qrcode").transition({ translate: [0, 0], opacity: 1 }, 500, "ease", function () { flag = true; });
                    setTimeout(function(){
                		flag = true;
                	},2300);
                    break;
                case 1:
                	/*$(".bg1").css({'animation': '','opacity': '0'});
                	$(".bg2").css({'animation': 'baseBgDown 1s linear','opacity': '1'});*/
                	
                	this.baseBgUp(n);
					/*公共底部头部*/
					this.baseUpFooterHeader(n);
					this.baseBgCome(n);
    				/*清空第一屏*/
			    	this.p1Hide();
			    	/*显示第二屏*/
			    	this.p2Show();
			    	
			    	setTimeout(function(){
                		flag = true;
                	},2500);
                    break;

                case 2:
                	//背景切换
                	this.baseBgUp(n);
					
					/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第二屏*/
		    		this.p2Hide();
                	/*显示第三屏-----*/
                	this.p3Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;

                case 3:
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第三屏-----*/
            		this.p3Hide();
                	/*显示第四屏-----*/
                	this.p4Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;

                case 4:
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第四屏-----*/
            		this.p4Hide();
                	/*显示第五屏-----*/
                	this.p5Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;

                case 5:
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第五屏-----*/
            		this.p5Hide();
                	/*显示第六屏-----*/
                	this.p6Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;

                case 6:
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第六屏-----*/
            		this.p6Hide();
                	/*显示第七屏-----*/
                	this.p7Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;

                case 7:
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第七屏-----*/
            		this.p7Hide();
                	/*显示第八屏-----*/
                	this.p8Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;

                case 8:
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第八屏-----*/
            		this.p8Hide();
                	/*显示第九屏-----*/
                	this.p9Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;
                case 9:
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第九屏-----*/
            		this.p9Hide();
                	/*显示第十屏-----*/
                	this.p10Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;
                case 10:
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第10屏-----*/
            		this.p10Hide();
                	/*显示第11屏-----*/
                	this.p11Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;
                case 11:
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第11屏-----*/
            		this.p11Hide();
                	/*显示第12屏-----*/
                	this.p12Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;
                case 12:
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第12屏-----*/
            		this.p12Hide();
                	/*显示第13屏-----*/
                	this.p13Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2500);
                    break;
                case 13:
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第13屏-----*/
            		this.p13Hide();
                	/*显示第14屏-----*/
                	this.p14Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;
                case 14:
                	
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*清空第14屏-----*/
            		this.p14Hide();
                	/*显示第15屏-----*/
                	this.p15Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;
                case 15:
                	
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	/*清空第15屏-----*/
            		this.p15Hide();
                	/*显示第16屏-----*/
                	this.p16Show();
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;
				case 16:
                	//背景切换
                	this.baseBgUp(n);
                	/*公共底部头部*/
                	this.baseUpFooterHeader(n);
                	this.baseBgCome(n);
                	$(".LOGO").css({'opacity':'0'});
                	
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;
            }
            n++;
            //console.log(n);
        }
    },
    moveDown: function () {
        if (flag && n > 1) {
            flag = false;
            switch (n) {
                case 2:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'1'});
                	/*显示第一屏*/
                	this.p1Show();
                	/*清空第二屏*/
		    		this.p2Hide();
                	
                	
			    	
			    	setTimeout(function(){
                		flag = true;
                	},3000);
                    break;

                case 3:
                	this.BaseBgDown(n);
                	
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	
                	/*显示第二屏*/
			    	this.p2Show();
			    	/*清空第三屏-----*/
            		this.p3Hide();
            		
            		setTimeout(function(){
                		flag = true;
                	},2000);
                    break;

                case 4:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*显示第三屏-----*/
                	this.p3Show();
			    	/*清空第四屏-----*/
            		this.p4Hide();
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;

                case 5:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*显示第四屏-----*/
                	this.p4Show();
			    	/*清空第五屏-----*/
            		this.p5Hide();
                	
                	
                	setTimeout(function(){
                		flag = true;
                	},2000);
                    break;
                case 6:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*显示第五屏-----*/
                	this.p5Show();
			    	/*清空第六屏-----*/
            		this.p6Hide();
                	setTimeout(function(){
                    	flag = true;
                    },2000);
                    break;
                case 7:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*显示第六屏-----*/
                	this.p6Show();
			    	/*清空第七屏-----*/
            		this.p7Hide();
                	setTimeout(function(){
                    	flag = true;
                    },2000);
                    break;
                case 8:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*显示第七屏-----*/
                	this.p7Show();
			    	/*清空第八屏-----*/
            		this.p8Hide();
                	setTimeout(function(){
                    	flag = true;
                    },2000);
                    break;
                case 9:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*显示第八屏-----*/
                	this.p8Show();
			    	/*清空第九屏-----*/
            		this.p9Hide();
                	setTimeout(function(){
                    	flag = true;
                    },2000);
                    break;
                case 10:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*显示第九屏-----*/
                	this.p9Show();
			    	/*清空第十屏-----*/
            		this.p10Hide();
                	setTimeout(function(){
                    	flag = true;
                    },2000);
                    break;
                case 11:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*显示第10屏-----*/
                	this.p10Show();
			    	/*清空第11屏-----*/
            		this.p11Hide();
                	setTimeout(function(){
                    	flag = true;
                    },2000);
                    break;
                case 12:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*显示第11屏-----*/
                	this.p11Show();
			    	/*清空第12屏-----*/
            		this.p12Hide();
                	setTimeout(function(){
                    	flag = true;
                    },2000);
                    break;
                case 13:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*显示第12屏-----*/
                	this.p12Show();
			    	/*清空第13屏-----*/
            		this.p13Hide();
                	setTimeout(function(){
                    	flag = true;
                    },2500);
                    break;
                case 14:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*显示第13屏-----*/
                	this.p13Show();
			    	/*清空第14屏-----*/
            		this.p14Hide();
                	setTimeout(function(){
                    	flag = true;
                    },2000);
                    break;
                case 15:
                	this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	$(".LOGO").css({'opacity':'0'});
                	/*显示第14屏-----*/
                	this.p14Show();
			    	/*清空第15屏-----*/
            		this.p15Hide();
                	setTimeout(function(){
                    	flag = true;
                    },2000);
                    break;
				case 16:
					this.BaseBgDown(n);
                	/*公共头部底部*/
                	this.baseDownFooterHeader(n);
                	this.baseBgOut(n);
                	/*显示第15屏-----*/
                	this.p15Show();
			    	/*清空第16屏-----*/
            		this.p16Hide();
                	setTimeout(function(){
                    	flag = true;
                    },2000);
                    break;
            }
            n--;
            //console.log(n);
        }
    }
}