!function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(c){var e=this;do{if(Element.prototype.matches.call(e,c))return e}while(null!==(e=e.parentElement||e.parentNode)&&1===e.nodeType);return null});var g="undefined"!=typeof clickmagick_cmc,k=window.location.search.replace(/^\?/,"&"),e=function(c){for(var e={},i=c.split("&"),t=0;t<i.length;t++){var a=i[t].match(/(.*)=(.*)/);a&&(e[a[1].toLowerCase()]=decodeURIComponent(a[2]))}return e}(k),i=parseInt(N("cmc_debug")||P("cmc_debug")||g&&clickmagick_cmc.cmc_debug||0),u="https://www.clkmc.com/api/",T=window.location.href.replace(/\?.*/,""),t=function(){var c=0,e=document.domain,i=e.split("."),t="_gd"+(new Date).getTime();for(;c<i.length-1&&-1===document.cookie.indexOf(t+"="+t);)e=i.slice(-1-++c).join("."),document.cookie=t+"="+t+";domain="+e+";";document.cookie=t+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+e+";",/^(co|com|edu|gov|ltd|net|org)\.[a-z]{2}$/i.test(e)&&(e=document.domain.split(".").slice(-3).join("."));return e}(),n=(A("=============================\ncmc.js is starting to execute\n============================="),A("Computed root domain is "+t),A("cmc.js loaded on page "+T),600),a={},p={},m={active_reqs:0};if(g){clickmagick_cmc.version="2.39.00",clickmagick_cmc._orderBumps={},A("Version",clickmagick_cmc.version),A("clickmagick_cmc on load",clickmagick_cmc),A("PII capturing at load time is "+(U()?"enabled":"disabled"));var c=window.clickmagick_cmc_loaded_previously||!1,o=(window.clickmagick_cmc_loaded_previously=!0,c&&(console.log("=========================================================================================="),console.log("ClickMagick tracking code has been loaded TWICE on the same page. This can cause problems!"),console.log("==========================================================================================")),N("cmc_audopt"));/^(1|true|on)$/i.test(o)?$("cmc_audopt_setting","."+t):/^(0|false|off)$/i.test(o)&&L("cmc_audopt_setting","off","."+t,365);"off"===P("cmc_audopt_setting")&&(clickmagick_cmc.audopt="off");var o=parseInt(clickmagick_cmc.split_ratio),l=clickmagick_cmc.split_url;if(!isNaN(o)&&1<=o&&o<=100&&/^https?:\/\//i.test(l)){A("Processing a split-test");var r=clickmagick_cmc.cmc_ref||"",_=P("cmc_split_"+r);if(""===_&&(A("Random split ratio =",b=Math.floor(101*Math.random())),L("cmc_split_"+r,_=b<=o?"b":"a","."+t,365)),"b"===_)return A("Split-testing page 'b'. Redirecting to: "+(l+=(/\?/.test(l)?"&":"?")+k.substring(1))),window.location.href=l;A("Split-testing, page 'a'")}}if(A("Processing click and conversion code"),!function(){if(new RegExp(["google-adwords","google web preview","google-structured-data","appengine-google","feedfetcher-google","adsbot-google","googlebot","facebookexternalhit","bingbot","msnbot","bingpreview","pinterestbot","google-read-aloud","petalbot","ahrefsbot","adidxbot"].join("|"),"i").test(navigator.userAgent))return A("Ignoring high-activity bot",navigator.userAgent),1;return}(navigator.userAgent)){for(var f=0,d=Object.keys(e),s=0;s<d.length;s++){var x=e[d[s]].match(/(\d{9,12}_cmc\d{10})/);if(x){f=x[1];break}}var b,h=N("cmc_vid");if(h.match(/^cmc\d{10}$/i)&&R(h),A("Cookied vid =",(h=D())||"none set"),g){if(A("Found clickmagick_cmc"),!((b=N(r="cmc_ignore"))?!/^(no|false|0)$/i.test(b):clickmagick_cmc[r])){""!=j(N("utm_source"))&&""!=j(N("utm_medium"))&&""!=j(N("utm_campaign"))||["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(c){delete e[c]}),void 0===clickmagick_cmc.ad_user_data&&(clickmagick_cmc.ad_user_data="granted"),void 0===clickmagick_cmc.ad_personalization&&(clickmagick_cmc.ad_personalization="granted");for(var B=["name","email","phone","cmc_firstname","cmc_lastname","cmc_email","cmc_mobile","cmc_date_of_birth","cmc_phone","cmc_gender","cmc_country","cmc_postal_code","cmc_city","cmc_state_prov","invitee_email","invitee_first_name","invitee_full_name","invitee_last_name","wj_lead_email","wj_lead_first_name","wj_lead_last_name","wj_lead_phone_number","wj_lead_phone_country_code","attendee_email","text_reminder_number"],d=(["utm_source","utm_medium","utm_campaign","utm_term","utm_content","cmc_project","cmc_goal","cmc_amt","cmc_cpc","cmc_ref","cmc_cogs","cmc_unique","cmc_strip","cmc_tid","cmc_adid","cmc_click","gclid","wbraid","msclkid","fbclid","ttclid","epik","audopt","audopt_pro","vid_info","vid_info_prefilled","cmc_redir","cmc_redir_wait","cmc_upsell","cmc_recurring","cmc_orderbump","ad_user_data","ad_personalization"].concat(B).forEach(function(c){clickmagick_cmc[c]=G(c),1<i&&A(c+" = "+clickmagick_cmc[c])}),A("clickmagick_cmc after URL parsing",clickmagick_cmc),clickmagick_cmc.hasOwnProperty("cmc_redir_wait")&&/^\d+$/.test(clickmagick_cmc.cmc_redir_wait)&&300<clickmagick_cmc.cmc_redir_wait&&A("Updated the redirect wait to "+(n=parseInt(clickmagick_cmc.cmc_redir_wait))),["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(c){clickmagick_cmc[c]=j(clickmagick_cmc[c])}),Object.keys(e)),s=0;s<d.length;s++){var v=d[s];!/^cmc_/.test(v)||clickmagick_cmc[v]||(clickmagick_cmc[v]=G(v))}""==clickmagick_cmc.vid_info&&(clickmagick_cmc.vid_info=clickmagick_cmc.audopt_pro),clickmagick_cmc.cmc_amt=clickmagick_cmc.cmc_amt.replace(/%2c/gi,","),clickmagick_cmc.cmc_cpc=clickmagick_cmc.cmc_cpc.replace(/%2c/gi,","),clickmagick_cmc.cmc_adid=clickmagick_cmc.cmc_adid.replace(/^tt(?=\d)/,"tt_");var w,y,I,C=function(){var c="";{var e;document.referrer&&((e=document.createElement("a")).href=document.referrer,c=e.hostname||"")}return c.toLowerCase()}(),o=(["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(c){clickmagick_cmc[c]=clickmagick_cmc[c].replace(/_referr?er_/gi,C)}),clickmagick_cmc.utm_source.toLowerCase()),_=("internal"===o?clickmagick_cmc.utm_source=o:"organic"===o&&(clickmagick_cmc.utm_source="",h||(clickmagick_cmc.utm_source=o,clickmagick_cmc.utm_medium=o,clickmagick_cmc.utm_campaign=""!==C?C:"none",clickmagick_cmc.cmc_goal="")),N("cbur").toLowerCase()),l=("a"===_&&(clickmagick_cmc.cmc_goal="s"),"d"===_&&(clickmagick_cmc.cmc_goal=""),/^[aes]$/i.test(clickmagick_cmc.cmc_goal)),o=""!==clickmagick_cmc.utm_source&&""!==clickmagick_cmc.utm_medium&&""!==clickmagick_cmc.utm_campaign&&"n"!=clickmagick_cmc.cmc_click;A("isValidClick =",o,"isValidGoal =",l),clickmagick_cmc.uid&&clickmagick_cmc.hid&&(o||l)&&(/^(appspot\.com|googleusercontent\.com|localhost|\d+(\.\d+)+)$/i.test(clickmagick_cmc.cmc_project)||(_=o&&(!l||"internal"===clickmagick_cmc.utm_source),!h&&_&&(R(h="cmc"+(Math.floor(3294967296*Math.random())+1e9)),clickmagick_cmc.disabled=/^cmc\d+$/.test(D())?0:1),A("Computed vid =",h||"none set"),w="?uid="+clickmagick_cmc.uid+"&vid="+h.substr(3),(o=Object.keys(clickmagick_cmc)).forEach(function(c){/^(cmc_project|cmc_strip|cmc_redir|vid|uid|id|attrs|_.+)$/.test(c)||""===clickmagick_cmc[c]||B.includes(c)||(w+="&"+c+"="+encodeURIComponent(clickmagick_cmc[c]))}),y="",U()&&J(I=H())&&(y="&cmclid="+encodeURIComponent(V(JSON.stringify(I)))),q(),c||_&&(""!=clickmagick_cmc.fbclid&&(w+="&_fbc="+encodeURIComponent(P("_fbc"))+"&_fbp="+encodeURIComponent(P("_fbp"))),I="&cmc_project="+(""!==clickmagick_cmc.cmc_project?encodeURIComponent(clickmagick_cmc.cmc_project):"&domain="+encodeURIComponent(window.location.hostname)),E(u+w.replace(/&(cmc_goal|ad_user_data|ad_personalization)=[^&]+/g,"")+I+y,"click"),y="",o.forEach(function(c){Q(c)&&window.sessionStorage.setItem("_cmc_"+c,clickmagick_cmc[c])})),l&&E(u+w.replace(/&utm_[^&]+/gi,"")+"&cmc_project="+encodeURIComponent(clickmagick_cmc.cmc_project)+y,"goal"),z()))}clickmagick_cmc.hasOwnProperty("cmc_redir")&&clickmagick_cmc.cmc_redir.length&&(Y(n),c=(c=decodeURIComponent(clickmagick_cmc.cmc_redir)).replace(/\[cmc_vid\]/gi,h),/^http/i.test(c)||(c="https://"+c),window.location.href=c),clickmagick_cmc.log=function(c,e,i,t){e=e||"";var a=i||"",m=0,o="";"u"===(c=c.toLowerCase())&&(o="&cmc_upsell=1",c="s"),"s"!==c&&!W(c)||(m=Number(i||"0.00"),a=t||""),/^\d+$/.test(clickmagick_cmc.uid)&&/^\d+$/.test(clickmagick_cmc.hid)&&(goalURL=u+"?uid="+clickmagick_cmc.uid+"&hid="+clickmagick_cmc.hid+"&vid="+h.replace(/^cmc/i,"")+"&cmc_project="+encodeURIComponent(a)+"&cmc_goal="+c.substring(0,1)+"&cmc_ref="+encodeURIComponent(e),q(),"a"===c||"e"===c?E(goalURL,"goal"):"s"===c?E(goalURL+o+"&cmc_amt="+encodeURIComponent(m),"goal"):W(c)&&(i=c+"::"+e+"::"+m,m=Number(m),void 0===clickmagick_cmc._orderBumps[i]||0==clickmagick_cmc._orderBumps[i]||0==m?clickmagick_cmc._orderBumps[i]=m:(console.assert(clickmagick_cmc._orderBumps[i]==m),m=-m,clickmagick_cmc._orderBumps[i]=0),E(goalURL+"&cmc_amt="+encodeURIComponent(m),"goal")),z(),Y(n))},clickmagick_cmc.vid=h}"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?M():document.addEventListener("DOMContentLoaded",M)}function M(){if(A("PII capturing at doc.ready time is "+(U()?"enabled":"disabled")),U()&&(F(H()),setTimeout(function(){var c;U()&&(g&&void 0!==clickmagick_cmc.vid_info_prefilled&&/^(0|false|off)$/i.test(clickmagick_cmc.vid_info_prefilled)?A("Sending pre-filled PII is disabled"):(A((c=(c=[].slice.call(document.getElementsByTagName("input"),0)).filter(function(c){return!/^(button|checkbox|color|date|datetime\-local|file|hidden|image|password|radio|range|reset|search|submit|time|url)$/.test(c.type)})).length+" input elements on the page for possible pre-filled PII"),0<c.length&&S(c)))},1500),A("Hooking visitor information elements"),document.addEventListener("focusout",function(c){A("focusout of element"),"INPUT"===c.target.tagName&&S([c.target])},{capture:!0}),document.addEventListener("change",function(c){A("change out of element"),"INPUT"===c.target.tagName&&S([c.target])},{capture:!0})),g&&/cmc|utm/i.test(clickmagick_cmc.cmc_strip)&&history.replaceState&&(k=(k=(k=/utm/i.test(clickmagick_cmc.cmc_strip)?(k=(k=(k=(k=(k=(k=k.replace(/&utm_[^&]+/gi,"")).replace(/&gclid[^&]+/gi,"")).replace(/&wbraid[^&]+/gi,"")).replace(/&msclkid[^&]+/gi,"")).replace(/&fbclid[^&]+/gi,"")).replace(/&ttclid[^&]+/gi,"")).replace(/&epik[^&]+/gi,""):k).replace(/&cmc_[^&]+/gi,"")).replace(/^&/,"?"))!==window.location.search&&history.pushState({},"",window.location.pathname+k+window.location.hash),g){clickmagick_cmc.hasOwnProperty("log_action")&&O(clickmagick_cmc.log_action,"a"),clickmagick_cmc.hasOwnProperty("log_engage")&&O(clickmagick_cmc.log_engage,"e"),clickmagick_cmc.hasOwnProperty("log_sale")&&O(clickmagick_cmc.log_sale,"s"),clickmagick_cmc.hasOwnProperty("log_upsell")&&O(clickmagick_cmc.log_upsell,"u"),clickmagick_cmc.hasOwnProperty("log_orderbump")&&O(clickmagick_cmc.log_orderbump,"o");for(var c=u+"?uid="+clickmagick_cmc.uid+"&hid="+clickmagick_cmc.hid+"&vid="+h.replace(/^cmc/i,"")+"&cmc_goal=o&order_bump_init=1",e=Object.keys(p),i=0;i<e.length;i++){var t=e[i],a=p[t];E(c+"&cmc_amt="+encodeURIComponent(a)+"&cmc_ref="+encodeURIComponent(t),"goal"),A("log_orderbump_init:",t,p[t],clickmagick_cmc.cmc_project)}}for(var m=["href","src","value","data-imagelink","data-custom-js","data-element-link"],o=(g&&clickmagick_cmc.hasOwnProperty("attrs")&&(m=m.concat(clickmagick_cmc.attrs)),/(\[|\%5B)(cmc_vid|clickid|gclid|wbraid|msclkid|fbclid|ttclid|epik|cmc_cpc|cmc_adid|cmc_tid|utm_.+?)(\]|\%5D)/i),n=0;n<m.length;n++)for(var l=m[n],r=document.querySelectorAll("["+l+"]"),i=0;i<r.length;i++){for(var _=r[i].getAttribute(l),d=0;s=_.match(o);){var s=s[2].toLowerCase();if(null==(newVal=("cmc_vid"===s?window.localStorage:window.sessionStorage).getItem("_cmc_"+s))&&(newVal=""),"cmc_vid"===s&&f&&(newVal=f),_=_.replace(o,newVal),10<d++)break}_!==r[i].getAttribute(l)&&r[i].setAttribute(l,_)}}function j(c){return c=c.trim(),/^(\{.*\}|__.*__)$/.test(c)||"+"===(c=c.replace(/[^\w.+\-\s]/g,"").replace(/[\+\s]+/g,"+"))?"":c.substring(0,100)}function R(c){$("cmc_vid"),c?(L("cmc_vid",c,"."+t,365),window.localStorage.setItem("_cmc_cmc_vid",c)):($("cmc_vid"),L("cmc_vid","","."+t,1),window.localStorage.removeItem("_cmc_cmc_vid"))}function D(){var c=P("cmc_vid");return c?window.localStorage.setItem("_cmc_cmc_vid",c):""!=(c=window.localStorage.getItem("_cmc_cmc_vid")||"")&&L("cmc_vid",c,"."+t,365),c}function E(c,e){var i;/^(click|goal|data|email)$/.test(e)||console.assert("type must be 'click', 'goal', or 'data'"),c+="&page_url="+encodeURIComponent(T),/\?uid=/.test(c)||(console.log("======================================================"),console.log(" The UID param must be first in the url parameter list"),console.log("======================================================")),(i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"))?(m[e]="waiting",m.active_reqs++,i.onload=function(){A(i.response);var c=JSON.parse(i.response);"ABUSER"!==c.status&&"CLICKSHIELD_BLOCKED"!==c.status||(window.location.href=c.url),"OK"!==c.status&&console.warn(c.status),c.temp_repeat&&console.warn("temp click not recorded"),"OK"===c.status&&/^\d+$/.test(c.vid)&&(h="cmc"+c.vid,"undefined"!=typeof clickmagick_cmc&&(clickmagick_cmc.vid=h),A("Resetting the vid to "+h),R(h)),--m.active_reqs<=0&&(m.active_reqs=0,m[e]="success")},i.onerror=function(){--m.active_reqs,m[e]="error"},A("URL =",c),i.open("GET",c,!0),i.send(),A("After the send")):document.createElement("img").src=c}function q(){clickmagick_cmc.status="waiting",m.click=m.goal="success"}function z(){var e=0;!function c(){setTimeout(function(){("waiting"===m.click||"waiting"===m.goal)&&e++<70?c():clickmagick_cmc.status="success"===m.click&&"success"===m.goal?"success":"error"},100)}()}function U(){return g&&void 0!==clickmagick_cmc.vid_info&&/^(1|true|yes|on)$/i.test(clickmagick_cmc.vid_info)}function J(e){var i,c=Object.keys(e);return 0!=c.length&&(i=!0,c.forEach(function(c){i=i&&a[c]&&a[c]===e[c],a[c]=e[c]}),!i)}function V(c){return function(c){var e="",i=(c=encodeURIComponent(c),0);for(;i<c.length;){var t;"%"===c.charAt(i)?(e+=c.substr(i+1,2),i+=3):(t=c.charCodeAt(i).toString(16).toUpperCase(),e+=(1==t.length?"0":"")+t,i++)}return e}(X(c)).split("").reverse().join("")}function F(c){var e;J(c)&&(A("Sending PII",c),h?(e=V(JSON.stringify(c)),E(u+"?uid="+clickmagick_cmc.uid+"&hid="+clickmagick_cmc.hid+"&vid="+h.replace(/^cmc/i,"")+"&cmclid="+encodeURIComponent(e),"data")):c.l&&E(u+"?uid="+clickmagick_cmc.uid+"&hid="+clickmagick_cmc.hid+"&email_check="+encodeURIComponent(c.l),"email"))}function S(c){var a={};c.forEach(function(m){var c,e,i=m.value.trim().replace(/\s+/," ");function t(c,e){e=K(e);e=clickmagick_cmc["vid_"+e]||clickmagick_cmc["audopt_"+e];if(void 0===e)return(i=new RegExp(K(c),"i")).test(m.name)||i.test(m.id);for(var i,t=e.replace(/\s+/g,"").split(/\s*,\s*/),a=0;a<t.length;a++)if("."===t[a].charAt(0)){if((i=new RegExp("(^|\\s)"+t[a].substring(1)+"(\\s|$)","i")).test(m.classList))return 1}else if("!"===t[a].charAt(0)){if(m.name===t[a].substring(1))return 1}else if(m.id===t[a].replace(/^#/,""))return 1}""!==i&&(t("42923666e626a6d2d7a62606b7c7a7c6d2b636a6669637a2e23666e626a6a2e237a6763726a68215","3666e626a6")?a.l=i:t("4292a626e616b7c7d76696d2d7a62606b7c7a7c6d2b636a6669637b7c7d7669637a626e616a225a71545963716968215","a626e61605b7c7d76696")?a.a=i:t("4292a626e616b7c7e636d2d7a62606b7c7a7c6d2b636a6669637b7c7e63637a626e616a2e2363716368215","a626e61605b7c7e636")?a.z=i:t("4292a626e616d2d7a62606b7c7a7c6d2b636a6669637a626e61637a626e616f3053636a7968215","a626e616053636a796")?-1!==(c=(a.a=i).indexOf(" "))&&(a.a=i.substr(0,c),a.z=i.substr(c+1)):t("4292d7a6d626a71605d7a6b6166626a6d705b777a6b737d7a6d626a71605c726c737a2e23636a6c637a2e2a63666d60626a2e28215","a63666d60626")?(e="+"===i.charAt(0),i=i.replace(/\D/g,""),a.b=i=e?"+"+i:i):t("42920616b7c6e6b71606c6d2d7a62606b7c7a7c6d2b636a6669637a2e205d7a687c716e637a62606763746d7068737a2e236a6b737a2e2a6160676f7a2e23776f78215","a6160676f7")?(e="+"===i.charAt(0),i=i.replace(/\D/g,""),a.f=i=e?"+"+i:i):t("429267b766c6e2c7c7a6d7b6b6e6e2d7a62606b7c7a7c6d2b636a666963767b766c637b7c68215","67b766c6")?3<=i.length&&(a.t=i):t("4292a6b7e6b7c7d2c7c7a6d7b6b6e6d2d7a62606b7c7a7c6d2b636a6669637a2e29706d7f7a2e2a6b7e6b7c737f392a6c61666829706d7f737a6b7e6b7c737b7c78215","9706d7f705a6b7e6b7c7")?2<=i.length&&(a.v=i):t("4292f76657d2c7c7a6d7b6b6e6d2d7a62606b7c7a7c6d2b636a6669637a2e2b7c706f737a2e2f7665737f7578215","a6b606c60536e6b7c706f7")?2<=i.length&&(a.p=i):t("429267d7b716a706c6d2c7c7a6d7b6b6e6d2d7a62606b7c7a7c6d2b636a666963767d7b716a706c68215","67d7b716a706c6")?2<=i.length&&(a.n=i):/.@.+\..+/.test(i)&&(a.l=i))}),F(a)}function H(){var c,e,i={};return g&&((e=clickmagick_cmc.cmc_email||clickmagick_cmc.invitee_email||clickmagick_cmc.attendee_email||clickmagick_cmc.wj_lead_email||clickmagick_cmc.email)&&(i.l=e),(cmcPiiFullname=clickmagick_cmc.cmc_fullname||clickmagick_cmc.invitee_full_name||clickmagick_cmc.name)&&-1!==(e=(i.a=cmcPiiFullname).indexOf(" "))&&(i.a=cmcPiiFullname.substr(0,e),i.z=cmcPiiFullname.substr(e+1)),(e=clickmagick_cmc.cmc_firstname||clickmagick_cmc.invitee_first_name||clickmagick_cmc.wj_lead_first_name)&&(i.a=e),(e=clickmagick_cmc.cmc_lastname||clickmagick_cmc.invitee_last_name||clickmagick_cmc.wj_lead_last_name)&&(i.z=e),(e=clickmagick_cmc.cmc_date_of_birth)&&(i.d=e),(e=clickmagick_cmc.cmc_gender)&&(i.g=e),e=clickmagick_cmc.wj_lead_phone_country_code?"+"+clickmagick_cmc.wj_lead_phone_country_code:"",(c=clickmagick_cmc.cmc_phone||clickmagick_cmc.wj_lead_phone_number||clickmagick_cmc.phone)&&(i.f=e+c),(e=clickmagick_cmc.cmc_mobile||clickmagick_cmc.text_reminder_number)&&(i.b=e),(c=clickmagick_cmc.cmc_city)&&(i.t=c),(e=clickmagick_cmc.cmc_state_prov)&&(i.v=e),(c=clickmagick_cmc.cmc_postal_code)&&(i.p=c),e=clickmagick_cmc.cmc_country)&&(i.n=e),i}function O(c,e){for(var i=c.replace(/\s+/g,"").split(/\s*,\s*/),t=0;t<i.length;t++){var a,m,o=i[t],n=(o=/^[.#]/.test(o)?o:"#"+o).split(":"),o=n.shift(),l="0.00",n=("s"!==e&&"u"!==e&&"o"!==e||(l=n.shift()),n.shift()||o.substr(1));"s"===e||"u"===e?(a=clickmagick_cmc.log.bind(null,e,n,l,clickmagick_cmc.cmc_project),A("s"===e?"log_sale:":"log_upsell",n,l,clickmagick_cmc.cmc_project)):"o"===e?(m="o"+t,a=clickmagick_cmc.log.bind(null,m,n,l,clickmagick_cmc.cmc_project),m=m+"::"+n+"::"+(l="input"===(m=/^#/.test(o)?document.getElementById(o.substring(1)):document.getElementsByClassName(o.substring(1))[0]).tagName.toLowerCase()&&"checkbox"===m.type.toLowerCase()&&m.checked?l:0),clickmagick_cmc._orderBumps[m]=l,p[n]||(p[n]=0),p[n]+=Number(l)):(a=clickmagick_cmc.log.bind(null,e,n,clickmagick_cmc.cmc_project),A("log_:",e,n,clickmagick_cmc.cmc_project)),!function(e,c,i){document.addEventListener(c,function(c){null!==c.target.closest(e)&&i()},{capture:!0})}(o,"click",a)}}function L(c,e,i,t){var a=new Date;a.setTime(a.getTime()+Math.floor(24*t*60*60*1e3)),e=e.replace(/;/g,"%3B"),document.cookie=c+"="+e+";domain="+i+";expires="+a.toUTCString()+";path=/"}function P(c){for(var e=c+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){for(var a=i[t];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(e))return a.substring(e.length,a.length).replace(/%3B/g,";")}return""}function $(c,e){L(c,"",e=e||"",-1)}function K(c){var e;return c=c.split("").reverse().join(""),e=(e=c).replace(/../gs,function(c){return"%"+c}),X(c=decodeURIComponent(e))}function X(c){return c.replace(/./g,function(c){c=c.charCodeAt(0);return String.fromCharCode(64<=c&&c<=127?15^c:c)})}function N(c){return e[c.toLowerCase()]||""}function G(c){var e=N(c);return""!==(e=""===e&&void 0!==clickmagick_cmc[c]?clickmagick_cmc[c]:e)&&Q(c)&&window.sessionStorage.setItem("_cmc_"+c,e),e}function W(c){return/^o\d?/.test(c)}function A(){if(i&&"undefined"!=typeof console){var c,e=[];for(c of arguments)"object"==typeof c&&(c=1<i?JSON.stringify(c):JSON.parse(JSON.stringify(c))),e.push(c);console.log.apply(this,e)}}function Q(c){return!!/^(utm_.*|cmc_tid|gclid|wbraid|msclkid|fbclid|ttclid|epik|cmc_cpc|cmc_adid)$/.test(c)}function Y(c){for(var e=Date.now()+c;Date.now()<e;);}}();
