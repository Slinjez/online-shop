!function(i){i.Toast=function(t,n){(n=n||{}).width=n.width||0,n.duration=n.duration||3e3,n.class=n.class||"",n.position=n.position||"bottom",n.align=n.align||"right",n.zindex=n.zindex||999999;var o={"z-index":n.zindex},a=i("<div>"+t+"</div>").addClass("sl-notification");""!==n.class&&a.addClass(n.class),a.data("position",n.position).data("align",n.align),n.width>0&&(o.width=n.width+"px");var s=20;switch(i(".sl-notification").each(function(){var t=i(this),o=0,a=0;return t.data("position")===n.position&&t.data("align")===n.align&&(o=parseInt(t.css(n.position),10),a=t.outerHeight()),s=Math.max(s,o+a+10)}),o[n.position]=s+"px",n.align){case"center":o.left="50%",o["margin-left"]="-"+a.outerWidth()/2+"px";break;case"left":o.left="20px";break;case"right":o.right="20px"}a.css(o).appendTo(document.body);var e=0;setTimeout(function(){a.addClass("show")},e+=100),setTimeout(function(){a.removeClass("show")},e+=n.duration),setTimeout(function(){a.remove()},e+=500),i(".sl-notification").on("click",function(){i(this).hide().remove()})}}(jQuery);