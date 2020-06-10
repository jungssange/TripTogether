$(document).ready(function(){
	gnb.init();
	if($('#lnb').length > 0)lnb.init();
});


var gnb = {
	posH:0,
	offH:43,
	gTarget:null,
	init:function(){
		gnb.posH = $('.gnb_wrap').height();
		$('.gnb_wrap').find('> ul > li').bind('mouseenter mouseleave',function(e){
			if(e.type == 'mouseenter'){
				gnb.gnbOpen();
			}else{
				gnb.gnbClose();
			}
		});		
	},
	gnbOpen:function(){
		$('.gnb').stop(true).animate({'height':gnb.posH},350,'easeOutQuad');
	},
	gnbClose:function(){
		$('.gnb').stop(true).animate({'height':gnb.offH},350,'easeOutQuad');
	},
	gnbDefault:function(){
	
	}
}

var lnb = {	
	lTarget:null,
	Sdepth:-1,
	Tdepth:-1,
	init:function(){
		lnb.lTarget = $('#lnb');
		lnb.lTarget.find('.snb > li.tnb_add').bind('mouseenter mouseleave',function(e){
			if(!$(this).hasClass('actived')){
				if(e.type == 'mouseenter'){
					lnb.tnbOpenHand($(this).find('> a'),0);
				}else{
					lnb.tnbOpenHand($(this).find('> a'),1);
				}
			}
		});
	},
	tnbOpenHand:function(_t,_f){

		if(_f==1){
			_t.removeClass('open');
			_t.next().stop(true).slideUp(300);
		}else{
			_t.addClass('open');
			_t.next().stop(true).slideDown(300);
		}
	},
	defaultAlign:function(_s,_t){
		lnb.lTarget.find('.snb > li').each(function(){
			if($(this).index() == _s){
				$(this).addClass('actived');
				if($(this).find('.tnb').length>0){
					$(this).find('.tnb').slideDown(300);
					$(this).find('.tnb > li').each(function(){
						if($(this).index() == _t){
							$(this).addClass('actived');							
						}
					});
				}
			}
		});
	}
}