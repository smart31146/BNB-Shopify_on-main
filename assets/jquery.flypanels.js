!function(C){var w="flyPanels";function o(e,a){var n=e,t=C(e),o=window.innerHeight,s=!0;parseInt(C(".flypanels-topbar").css("height"),10);a.treeMenu=C.extend({},{init:!1,expandHandler:"a.expand"},a.treeMenu);var i={init:!1,saveQueryCookie:!1,searchPanel:C(".offcanvas").find('[data-panel="search"]')};function l(){C(".flypanels-left").css("height",o),C(".flypanels-right").css("height",o),C(".flypanels-overlay").css("height",o)}function r(){C(".flypanels-content").append('<div id="flypanels-overlay" class="overlay"></div>'),g("onOpen")}function c(){C(".flypanels-content #flypanels-overlay").remove(),C(".flypanels-content").off("click touchmove touchend touchleave touchcancel"),g("onClose")}function u(){t.removeClass("openright"),setTimeout(function(){C(".offcanvas .panelcontent").hide(),C("body").removeClass("flypanels-open"),C("html").removeClass("flypanels-open"),g("onCloseRight"),c()},200)}function f(){t.removeClass("openleft"),setTimeout(function(){C(".offcanvas .panelcontent").hide(),C("body").removeClass("flypanels-open"),C("html").removeClass("flypanels-open"),g("onCloseLeft"),c()},200)}function h(){o=window.innerHeight,l()}function p(e){"hide"===e?a.search.searchPanel.find(".errormsg").hide():a.search.searchPanel.find(".errormsg").show()}function d(e){"hide"===e?a.search.searchPanel.find(".loading").hide():a.search.searchPanel.find(".loading").show()}a.search=C.extend({},i,a.search),a=C.extend({},C.fn[w].defaults,a);var y,m={get:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},set:function(e,n,t,a,o,s){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var i="";if(t)switch(t.constructor){case Number:i=t===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+t;break;case String:i="; expires="+t;break;case Date:i="; expires="+t.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(n)+i+(o?"; domain="+o:"")+(a?"; path="+a:"")+(s?"; secure":""),!0},remove:function(e,n,t){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(t?"; domain="+t:"")+(n?"; path="+n:""),!0)},has:function(e){return!!e&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),n=e.length,t=0;t<n;t++)e[t]=decodeURIComponent(e[t]);return e}};function v(t){p("hide"),$jsonurl=a.search.searchPanel.find(".searchbox").data("searchurl"),$ajaxCall=C.ajax({url:$jsonurl+"&q="+t,dataType:"json"}),$ajaxCall.done(function(e){var n;$foundResults=e.Items.length,0<$foundResults?(!0===a.search.saveQueryCookie&&m.set("searchQuery",t,null,"/"),n=function(e){for(var n in output="<ul>",e)"Page"===e[n].Type?output+='<li><a href="'+e[n].LinkUrl+'"><span class="link">'+e[n].Header+'</span>  <span class="type"><i class="fa page"></i></span></a>':output+='<li><a href="'+e[n].LinkUrl+'"><span class="link">'+e[n].Header+'</span>  <span class="type"><i class="fa doc"></i></span></a>';return output+="</ul>",output}(e.Items)):(!0===a.search.saveQueryCookie&&m.remove("searchQuery","/"),p("show")),a.search.searchPanel.find(".resultinfo .query").html(t),a.search.searchPanel.find(".resultinfo .num").html($foundResults),a.search.searchPanel.find(".flypanels-searchresult").html(n),d("hide"),a.search.searchPanel.find(".resultinfo").show(),a.search.searchPanel.find(".flypanels-searchresult").show()}),$ajaxCall.fail(function(){p("show")})}function g(e){void 0!==a[e]&&a[e].call(n)}return l(),C(".flypanels-left").css("width"),C(".panelcontent").on("touchmove",function(e){C(this).prop("scrollHeight")<=parseInt(o,10)&&e.preventDefault()}),C(".offcanvas").on("touchmove",function(e){e.preventDefault()}).on("touchmove",".panelcontent",function(e){e.stopPropagation()}),C(".flypanels-button-left, #close-btn").on("click",function(){var e,n=C(this).data("panel");C(".flypanels-container").hasClass("openleft")?f():(e=n,t.addClass("openleft"),setTimeout(function(){C(".flypanels-left").find('[data-panel="'+e+'"]').show(),C("body").addClass("flypanels-open"),C("html").addClass("flypanels-open"),g("onOpenLeft"),r()},200))}),C(".flypanels-button-right").on("click",function(){var e,n=C(this).data("panel");C(".flypanels-container").hasClass("openright")?u():(e=n,t.addClass("openright"),setTimeout(function(){C(".flypanels-right").find('[data-panel="'+e+'"]').show(),C("body").addClass("flypanels-open"),C("html").addClass("flypanels-open"),g("onOpenRight"),r()},200))}),!0===s&&C(window).resize(function(){clearTimeout(y),y=setTimeout(h,100)}),C(window).bind("orientationchange",function(e){l()}),g("onLoad"),a.search.init&&((kitUtils.isAndroid()||kitUtils.isIOS())&&C(".flypanels-searchresult").addClass("touch"),a.search.searchPanel.find(".searchbutton").on("click",function(e){e.preventDefault(),d("show"),v(a.search.searchPanel.find(".searchbox input").val())}),a.search.searchPanel.find(".searchbox input").keydown(function(e){13===e.which&&(d("show"),v(C(this).val()),C(this).blur())}),!0===m.has("searchQuery")&&!0===a.search.saveQueryCookie&&v(m.get("searchQuery"))),a.treeMenu.init&&((kitUtils.isAndroid()||kitUtils.isIOS())&&C(".flypanels-treemenu").addClass("touch"),C(".flypanels-treemenu li.haschildren "+a.treeMenu.expandHandler).click(function(e){C(this).parent().parent().toggleClass("expanded"),e.preventDefault()})),C(document).ready(function(){t.removeClass("preload")}),g("onInit"),{option:function(e,n){if(!n)return a[e];a[e]=n},destroy:function(){t.each(function(){var e=C(this);g("onDestroy"),e.removeData("plugin_"+w)})}}}C.fn[w]=function(e){if("string"==typeof e){var n,t=e,a=Array.prototype.slice.call(arguments,1);return this.each(function(){if(!C.data(this,"plugin_"+w)||"function"!=typeof C.data(this,"plugin_"+w)[t])throw new Error("Method "+t+" does not exist on jQuery."+w);n=C.data(this,"plugin_"+w)[t].apply(this,a)}),void 0!==n?n:this}if("object"==typeof e||!e)return this.each(function(){C.data(this,"plugin_"+w)||C.data(this,"plugin_"+w,new o(this,e))})},C.fn[w].defaults={onInit:function(){},onLoad:function(){},onOpenLeft:function(){},onOpenRight:function(){},onCloseLeft:function(){},onCloseRight:function(){},onDestroy:function(){}}}(jQuery);