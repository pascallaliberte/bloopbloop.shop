/*
  * reframe.js - Reframe.js: responsive iframes for embedded content
  * @version v2.1.12
  * @link https://github.com/dollarshaveclub/reframe.js#readme
  * @author Jeff Wainwright <jjwainwright2@gmail.com> (http://jeffry.in)
  * @license MIT
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.reframe=t()}(this,function(){"use strict";return function(e,t){var i="string"==typeof e?document.querySelectorAll(e):e,n=t||"js-reframe";"length"in i||(i=[i]);for(var o=0;o<i.length;o+=1){var r=i[o];if(-1!==r.className.split(" ").indexOf(n))return;var f=r.offsetHeight/r.offsetWidth*100,d=document.createElement("div");d.className=n;var a=d.style;a.position="relative",a.width="100%",a.paddingTop=f+"%";var s=r.style;s.position="absolute",s.width="100%",s.height="100%",s.left="0",s.top="0",r.parentNode.insertBefore(d,r),r.parentNode.removeChild(r),d.appendChild(r)}}});

(function(){
  makeVideosResponsive = function() {
    if (typeof reframe == "undefined") {
      return;
    }

    reframe('iframe[src~="youtube"]');
  }
  makeVideosResponsive();
})()
