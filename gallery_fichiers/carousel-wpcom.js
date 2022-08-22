(function(){'use strict';if(typeof window.wpcom==='undefined'){window.wpcom={};}
if(window.wpcom.carousel){return;}
var prebuilt_widths=jetpackCarouselStrings.widths;var pageviews_stats_args=jetpackCarouselStrings.stats_query_args;var findFirstLargeEnoughWidth=function(original_w,original_h,dest_w,dest_h){var inverse_ratio=original_h/original_w;for(var i=0;i<prebuilt_widths.length;++i){if(prebuilt_widths[i]>=dest_w||prebuilt_widths[i]*inverse_ratio>=dest_h){return prebuilt_widths[i];}}
return original_w;};var removeResizeFromImageURL=function(url){return removeArgFromURL(url,'resize');};var removeArgFromURL=function(url,arg){var re=new RegExp('[\\?&]'+arg+'(=[^?&]+)?');if(url.match(re)){return url.replace(re,'');}
return url;};var addWidthToImageURL=function(url,width){width=parseInt(width,10);if('undefined'!==typeof window.devicePixelRatio&&window.devicePixelRatio>1){width=Math.round(width*window.devicePixelRatio);}
url=addArgToURL(url,'w',width);url=addArgToURL(url,'h','');return url;};var addArgToURL=function(url,arg,value){var re=new RegExp(arg+'=[^?&]+');if(url.match(re)){return url.replace(re,arg+'='+value);}else{var divider=url.indexOf('?')!==-1?'&':'?';return url+divider+arg+'='+value;}};var stat=function(names){if(typeof names!=='string'){names=names.join(',');}
new Image().src=window.location.protocol+
'//pixel.wp.com/g.gif?v=wpcom-no-pv'+
'&x_carousel='+names+
'&baba='+Math.random();};var pageview=function(post_id){new Image().src=window.location.protocol+
'//pixel.wp.com/g.gif?host='+encodeURIComponent(window.location.host)+
'&ref='+encodeURIComponent(document.referrer)+
'&rand='+Math.random()+
'&'+pageviews_stats_args+
'&post='+encodeURIComponent(post_id);};var generateImgSrc=function(srcItem,max){var origSize=srcItem.getAttribute('data-orig-size')||'';var src=srcItem.getAttribute('src')||srcItem.getAttribute('original')||srcItem.getAttribute('data-original')||srcItem.getAttribute('data-lazy-src');if(src.indexOf('imgpress')!==-1){src=srcItem.getAttribute('data-orig-file');}
src=removeResizeFromImageURL(src);src=addWidthToImageURL(src,findFirstLargeEnoughWidth(origSize.width,origSize.height,max.width,max.height));return src;};window.wpcom.carousel={findFirstLargeEnoughWidth:findFirstLargeEnoughWidth,removeResizeFromImageURL:removeResizeFromImageURL,addWidthToImageURL:addWidthToImageURL,stat:stat,pageview:pageview,generateImgSrc:generateImgSrc};})();