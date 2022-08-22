(function(g){var window=this;'use strict';var B4a=function(a,b){a.La("onAutonavCoundownStarted",b)},m6=function(a,b,c){g.ko(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.If(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.UG&&(b.lengthText?(e=b.lengthText||null,f=b.Ls||null):b.lengthSeconds&&(e=g.XL(b.lengthSeconds),f=g.XL(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.SG(d).type;var l=b instanceof g.UG?b.isLivePlayback:null,m=b instanceof g.UG?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,u=[],w=[];n&&u.push(n);p&&(u.push(p),w.push(p));q&&w.push(q);c={title:b.title,author:n,author_and_views:u.join(" \u2022 "),aria_label:b.ariaLabel||
g.HJ("Regarder $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Hm(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:w.join(" \u2022 "),autoplayAlternativeHeader:b.kp};b instanceof g.TG&&(c.playlist_length=b.playlistLength);a.update(c)},n6=function(a){var b=a.R(),c=b.u;
g.W.call(this,{F:"a",L:"ytp-autonav-suggestion-card",T:{href:"{{url}}",target:c?b.J:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{F:"div",Ca:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],T:{style:"{{background}}"},S:[{F:"div",T:{"aria-label":"{{timestamp}}"},Ca:["ytp-autonav-timestamp"],Z:"{{duration}}"},{F:"div",Ca:["ytp-autonav-live-stamp"],Z:"En direct"},
{F:"div",Ca:["ytp-autonav-upcoming-stamp"],Z:"\u00c0 venir"},{F:"div",L:"ytp-autonav-list-overlay",S:[{F:"div",L:"ytp-autonav-mix-text",Z:"Mix"},{F:"div",L:"ytp-autonav-mix-icon"}]}]},{F:"div",Ca:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],Z:"{{title}}"},{F:"div",Ca:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],Z:"{{author}}"},{F:"div",Ca:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],Z:"{{views_and_publish_time}}"}]});this.G=a;this.suggestion=
null;this.j=c;this.Na("click",this.onClick);this.Na("keypress",this.onKeyPress)},o6=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{F:"div",L:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.I=b;this.D=void 0;this.u=0;this.container=new g.W({F:"div",L:"ytp-autonav-endscreen-countdown-container"});g.M(this,this.container);this.container.xa(this.element);b=a.R();var d=b.u;this.G=a;this.suggestion=null;this.onVideoDataChange("newdata",this.G.getVideoData());this.P(a,"videodatachange",this.onVideoDataChange);var e=["ytp-autonav-endscreen-upnext-thumbnail"];b.K("web_rounded_thumbnails")&&e.push("rounded-thumbnail");
this.j=new g.W({F:"div",L:"ytp-autonav-endscreen-upnext-container",T:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{F:"div",L:"ytp-autonav-endscreen-upnext-header"},{F:"div",L:"ytp-autonav-endscreen-upnext-alternative-header",Z:"{{autoplayAlternativeHeader}}"},{F:"a",L:"ytp-autonav-endscreen-link-container",T:{href:"{{url}}",target:d?b.J:""},S:[{F:"div",Ca:e,T:{style:"{{background}}"},S:[{F:"div",
T:{"aria-label":"{{timestamp}}"},Ca:["ytp-autonav-timestamp"],Z:"{{duration}}"},{F:"div",Ca:["ytp-autonav-live-stamp"],Z:"En direct"},{F:"div",Ca:["ytp-autonav-upcoming-stamp"],Z:"\u00c0 venir"}]},{F:"div",L:"ytp-autonav-endscreen-video-info",S:[{F:"div",L:"ytp-autonav-endscreen-premium-badge"},{F:"div",L:"ytp-autonav-endscreen-upnext-title",Z:"{{title}}"},{F:"div",L:"ytp-autonav-endscreen-upnext-author",Z:"{{author}}"},{F:"div",L:"ytp-autonav-view-and-date",Z:"{{views_and_publish_time}}"},{F:"div",
L:"ytp-autonav-author-and-view",Z:"{{author_and_views}}"}]}]}]});g.M(this,this.j);this.j.xa(this.container.element);d||this.P(this.j.ya("ytp-autonav-endscreen-link-container"),"click",this.WL);this.G.rb(this.container.element,this,115127);this.G.rb(this.j.ya("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({F:"div",L:"ytp-autonav-overlay"});g.M(this,this.overlay);this.overlay.xa(this.container.element);this.B=new g.W({F:"div",L:"ytp-autonav-endscreen-button-container"});g.M(this,
this.B);this.B.xa(this.container.element);this.cancelButton=new g.W({F:"button",Ca:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],T:{"aria-label":"Annuler la lecture automatique"},Z:"Annuler"});g.M(this,this.cancelButton);this.cancelButton.xa(this.B.element);this.cancelButton.Na("click",this.sU,this);this.G.rb(this.cancelButton.element,this,115129);this.playButton=new g.W({F:"a",Ca:["ytp-autonav-endscreen-upnext-button",
"ytp-autonav-endscreen-upnext-play-button",b.K("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],T:{href:"{{url}}",role:"button","aria-label":"Lire la vid\u00e9o suivante"},Z:"Regarder"});g.M(this,this.playButton);this.playButton.xa(this.B.element);this.playButton.Na("click",this.WL,this);this.G.rb(this.playButton.element,this,115130);this.C=new g.Yn(function(){C4a(c)},500);
g.M(this,this.C);this.VL();this.P(a,"autonavvisibility",this.VL);this.G.K("web_autonav_color_transition")&&(this.P(a,"autonavchange",this.rU),this.P(a,"onAutonavCoundownStarted",this.B0))},p6=function(a){var b=a.G.Sj(!0,a.G.isFullscreen());
g.ko(a.container.element,"ytp-autonav-endscreen-small-mode",a.Dg(b));g.ko(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.sE);g.ko(a.G.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.G.Ve());g.ko(a.G.getRootNode(),"countdown-running",a.mj());g.ko(a.container.element,"ytp-player-content",a.G.Ve());g.xl(a.overlay.element,{width:b.width+"px"});if(!a.mj()){a.G.Ve()?D4a(a,Math.round(E4a(a)/1E3)):D4a(a);b=!!a.suggestion&&!!a.suggestion.kp;var c=a.G.Ve()||!b;
g.ko(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.ko(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.YK(a.B,a.G.Ve());g.ko(a.element,"ytp-enable-w2w-color-transitions",F4a(a))}},C4a=function(a){var b=E4a(a),c=Math,d=c.min;
var e=a.u?Date.now()-a.u:0;c=d.call(c,e,b);D4a(a,Math.ceil((b-c)/1E3));500>=b-c&&a.mj()?a.select(!0):a.mj()&&a.C.start()},E4a=function(a){if(a.G.isFullscreen()){var b;
a=null==(b=a.G.getVideoData())?void 0:b.TI;return-1===a||void 0===a?8E3:a}return 0<=a.G.Gp()?a.G.Gp():g.TE(a.G.R().experiments,"autoplay_time")||1E4},F4a=function(a){var b;
return!(null==(b=a.G.getVideoData())||!b.watchToWatchTransitionRenderer)},D4a=function(a,b){b=void 0===b?-1:b;
a=a.j.ya("ytp-autonav-endscreen-upnext-header");g.nh(a);if(0<=b){b=String(b);var c="Prochaine vid\u00e9o dans $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Prochaine vid\u00e9o dans $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.mh("Prochaine vid\u00e9o dans $SECONDS".slice(0,d)));var e=g.ih("span");g.eo(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.sh(e,b);a.appendChild(e);a.appendChild(g.mh("Prochaine vid\u00e9o dans $SECONDS".slice(d+c.length)));return}}g.sh(a,"\u00c0 suivre")},
q6=function(a,b){g.W.call(this,{F:"div",
Ca:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},r6=function(a){g.W.call(this,{F:"div",
Ca:["ytp-upnext","ytp-player-content"],T:{"aria-label":"{{aria_label}}"},S:[{F:"div",L:"ytp-cued-thumbnail-overlay-image",T:{style:"{{background}}"}},{F:"span",L:"ytp-upnext-top",S:[{F:"span",L:"ytp-upnext-header",Z:"\u00c0 suivre"},{F:"span",L:"ytp-upnext-title",Z:"{{title}}"},{F:"span",L:"ytp-upnext-author",Z:"{{author}}"}]},{F:"a",L:"ytp-upnext-autoplay-icon",T:{role:"button",href:"{{url}}","aria-label":"Lire la vid\u00e9o suivante"},S:[{F:"svg",T:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},S:[{F:"circle",L:"ytp-svg-autoplay-circle",T:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{F:"circle",L:"ytp-svg-autoplay-ring",T:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{F:"path",L:"ytp-svg-fill",T:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{F:"span",L:"ytp-upnext-bottom",S:[{F:"span",L:"ytp-upnext-cancel"},{F:"span",L:"ytp-upnext-paused",
Z:"La lecture automatique est d\u00e9sactiv\u00e9e"}]}]});this.api=a;this.cancelButton=null;this.D=this.ya("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.Yn(this.LB,5E3,this);this.u=0;var b=this.ya("ytp-upnext-cancel");this.cancelButton=new g.W({F:"button",Ca:["ytp-upnext-cancel-button","ytp-button"],T:{tabindex:"0","aria-label":"Annuler la lecture automatique"},Z:"Annuler"});g.M(this,this.cancelButton);this.cancelButton.Na("click",this.tU,this);this.cancelButton.xa(b);
this.cancelButton&&this.api.rb(this.cancelButton.element,this,115129);g.M(this,this.C);this.api.rb(this.element,this,18788);b=this.ya("ytp-upnext-autoplay-icon");this.P(b,"click",this.uU);this.api.rb(b,this,115130);this.XL();this.P(a,"autonavvisibility",this.XL);this.P(a,"mdxnowautoplaying",this.w1);this.P(a,"mdxautoplaycanceled",this.z1);g.ko(this.element,"ytp-upnext-mobile",this.api.R().isMobile)},G4a=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.TI;return-1===a||void 0===a?8E3:a}return 0<=a.api.Gp()?a.api.Gp():g.TE(a.api.R().experiments,"autoplay_time")||1E4},H4a=function(a,b){b=G4a(a,b);
var c=Math,d=c.min;var e=(0,g.T)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.mj()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.mj()&&a.j.start()},s6=function(a){q6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.W({F:"div",L:"ytp-suggestion-panel",S:[{F:"div",Ca:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],Z:"Plus de vid\u00e9os"}]});this.J=new g.W({F:"div",L:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.I=!1;this.u=new o6(this.player);g.M(this,this.u);this.u.xa(this.element);a.getVideoData().He?this.j=this.u:(this.j=new r6(a),g.BN(this.player,this.j.element,4),g.M(this,this.j));this.overlay=new g.W({F:"div",
L:"ytp-autonav-overlay-cancelled-state"});g.M(this,this.overlay);this.overlay.xa(this.element);this.C=new g.YD(this);g.M(this,this.C);g.M(this,this.table);this.table.xa(this.element);this.table.show();g.M(this,this.J);this.J.xa(this.table.element);this.hide()},t6=function(a){var b=a.Ve();
b!==a.D&&(a.D=b,a.player.X("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},I4a=function(a){q6.call(this,a,"subscribecard-endscreen");
this.j=new g.W({F:"div",L:"ytp-subscribe-card",S:[{F:"img",L:"ytp-author-image",T:{src:"{{profilePicture}}"}},{F:"div",L:"ytp-subscribe-card-right",S:[{F:"div",L:"ytp-author-name",Z:"{{author}}"},{F:"div",L:"html5-subscribe-button-container"}]}]});g.M(this,this.j);this.j.xa(this.element);var b=a.getVideoData();this.subscribeButton=new g.fP("S'abonner",null,"Se d\u00e9sabonner",null,!0,!1,b.Ek,b.subscribed,"trailer-endscreen",null,null,a);g.M(this,this.subscribeButton);this.subscribeButton.xa(this.j.ya("html5-subscribe-button-container"));
this.P(a,"videodatachange",this.Fa);this.Fa();this.hide()},u6=function(a){var b=a.R(),c=g.bE||g.KF?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.W.call(this,{F:"a",Ca:e,T:{href:"{{url}}",target:d?b.J:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{F:"div",L:"ytp-videowall-still-image",T:{style:"{{background}}"}},{F:"span",L:"ytp-videowall-still-info",S:[{F:"span",L:"ytp-videowall-still-info-bg",S:[{F:"span",L:"ytp-videowall-still-info-content",T:c,S:[{F:"span",L:"ytp-videowall-still-info-title",Z:"{{title}}"},{F:"span",
L:"ytp-videowall-still-info-author",Z:"{{author_and_views}}"},{F:"span",L:"ytp-videowall-still-info-live",Z:"En direct"},{F:"span",L:"ytp-videowall-still-info-duration",Z:"{{duration}}"}]}]}]},{F:"span",Ca:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{F:"span",L:"ytp-videowall-still-listlabel-icon"},"Playlist",{F:"span",L:"ytp-videowall-still-listlabel-length",S:[" (",{F:"span",Z:"{{playlist_length}}"},")"]}]},{F:"span",Ca:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
S:[{F:"span",L:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{F:"span",L:"ytp-videowall-still-listlabel-length",Z:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.YD(this);g.M(this,this.j);this.Na("click",this.onClick);this.Na("keypress",this.onKeyPress);this.j.P(a,"videodatachange",this.onVideoDataChange);a.Ai(this.element,this);this.onVideoDataChange()},v6=function(a){q6.call(this,a,"videowall-endscreen");
var b=this;this.G=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.J=!1;this.N=null;this.u=new g.YD(this);g.M(this,this.u);this.V=a.K("web_rounded_thumbnails");this.I=new g.Yn(function(){g.go(b.element,"ytp-show-tiles")},0);
g.M(this,this.I);var c=new g.W({F:"button",Ca:["ytp-button","ytp-endscreen-previous"],T:{"aria-label":"Pr\u00e9c\u00e9dente"},S:[g.cL()]});g.M(this,c);c.xa(this.element);c.Na("click",this.yU,this);this.table=new g.VK({F:"div",L:"ytp-endscreen-content"});g.M(this,this.table);this.table.xa(this.element);c=new g.W({F:"button",Ca:["ytp-button","ytp-endscreen-next"],T:{"aria-label":"Suivante"},S:[g.dL()]});g.M(this,c);c.xa(this.element);c.Na("click",this.xU,this);a.getVideoData().He?this.j=new o6(a,!0):
this.j=new r6(a);g.M(this,this.j);g.BN(this.player,this.j.element,4);a.rb(this.element,this,158789);this.hide()},w6=function(a){return g.CN(a.player)&&a.Rx()&&!a.C},x6=function(a){var b=a.Ve();
b!==a.J&&(a.J=b,a.player.X("autonavvisibility"))},y6=function(a,b){g.W.call(this,{F:"button",
Ca:["ytp-watch-on-youtube-button","ytp-button"],T:{title:"{{message}}"},Z:"{{content}}"});this.G=a;this.buttonType=this.buttonType=b;switch(this.buttonType){case 1:a="Regarder \u00e0 nouveau sur YouTube";b=156915;break;case 2:a="Continuer \u00e0 regarder sur YouTube";b=156942;break;default:a="Continuer \u00e0 regarder sur YouTube",b=156942}this.update({message:a,content:a});this.G.rb(this.element,this,b);this.Na("click",this.onClick)},z6=function(a){q6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new y6(a,1);g.M(this,this.watchButton);this.watchButton.xa(this.element);a.rb(this.element,this,156914);this.hide()},M4a=function(a){g.cO.call(this,a);
var b=this;this.endScreen=null;this.j=this.u=this.B=!1;this.listeners=new g.YD(this);g.M(this,this.listeners);this.env=a.R();var c;(null==(c=g.rN(a))?0:c.lz())?this.endScreen=new z6(a):J4a(a)?(this.B=!0,K4a(this),this.j?this.endScreen=new s6(a):this.endScreen=new v6(this.player)):this.env.Pe?this.endScreen=new I4a(this.player):this.endScreen=new q6(this.player);g.M(this,this.endScreen);g.BN(this.player,this.endScreen.element,4);L4a(this);this.listeners.P(a,"videodatachange",this.onVideoDataChange,
this);this.listeners.P(a,g.uA("endscreen"),function(d){b.onCueRangeEnter(d)});
this.listeners.P(a,g.vA("endscreen"),function(d){b.onCueRangeExit(d)})},K4a=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.pk&&a.u===b.He)return!1;a.j=b.pk;a.u=b.He;return!0},J4a=function(a){a=a.R();
return!a.B&&a.Hc&&!a.Pe},L4a=function(a){a.player.Af("endscreen");
var b=a.player.getVideoData();b=new g.sA(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.sA(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.le([b,c])};
g.QO.prototype.oA=g.ba(30,function(a){this.OJ!==a&&(this.OJ=a,this.vn())});
g.uN.prototype.Gp=g.ba(4,function(){return this.app.Gp()});
g.KX.prototype.Gp=g.ba(3,function(){return this.getVideoData().UR});g.v(n6,g.W);n6.prototype.select=function(){(this.G.Gl(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.vy||void 0)||this.G.K("web_player_endscreen_double_log_fix_killswitch"))&&this.G.sb(this.element)};
n6.prototype.onClick=function(a){g.BO(a,this.G,this.j,this.suggestion.sessionData||void 0)&&this.select()};
n6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Hx(a)||(this.select(),g.Gx(a))}};g.v(o6,g.W);g.k=o6.prototype;g.k.WA=function(a){this.suggestion!==a&&(this.suggestion=a,m6(this.j,a),this.playButton.Ka("url",this.suggestion.Hm()),p6(this))};
g.k.mj=function(){return 0<this.u};
g.k.Ow=function(){this.mj()||(this.u=Date.now(),C4a(this),B4a(this.G,E4a(this)),g.ko(this.G.getRootNode(),"countdown-running",this.mj()))};
g.k.Ys=function(){this.Ro();C4a(this);var a=this.j.ya("ytp-autonav-endscreen-upnext-header");a&&g.sh(a,"\u00c0 suivre")};
g.k.Ro=function(){this.mj()&&(this.C.stop(),this.u=0)};
g.k.select=function(a){this.G.nextVideo(!1,void 0===a?!1:a);this.Ro()};
g.k.WL=function(a){g.BO(a,this.G)&&(a.currentTarget===this.playButton.element?this.G.sb(this.playButton.element):a.currentTarget===this.j.ya("ytp-autonav-endscreen-link-container")&&(a=this.j.ya("ytp-autonav-endscreen-link-container"),this.G.Ta(a,!0),this.G.sb(a)),this.select())};
g.k.sU=function(){this.G.sb(this.cancelButton.element);g.wN(this.G,!0);this.D&&this.G.La("innertubeCommand",this.D)};
g.k.onVideoDataChange=function(a,b){var c;this.D=null==(c=b.u5)?void 0:c.command};
g.k.B0=function(a){if(F4a(this)){var b=this.G.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.hM(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.hM(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.hM(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.hM(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.hM(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.hM(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.ko(this.element,"ytp-w2w-animate",!0)}};
g.k.rU=function(a){this.G.K("web_autonav_color_transition")&&2!==a&&g.ko(this.element,"ytp-w2w-animate",!1)};
g.k.VL=function(){var a=this.G.Ve();this.I&&this.jb!==a&&g.YK(this,a);p6(this);this.G.Ta(this.container.element,a);this.G.Ta(this.cancelButton.element,a);this.G.Ta(this.j.ya("ytp-autonav-endscreen-link-container"),a);this.G.Ta(this.playButton.element,a)};
g.k.Dg=function(a){return 400>a.width||459>a.height};g.v(q6,g.W);g.k=q6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Rx=function(){return!1};
g.k.Ve=function(){return!1};
g.k.QP=function(){return!1};g.v(r6,g.W);g.k=r6.prototype;g.k.LB=function(){this.notification&&(this.C.stop(),this.uc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.WA=function(a){this.suggestion=a;m6(this,a,"hqdefault.jpg")};
g.k.XL=function(){g.YK(this,this.api.Ve());this.api.Ta(this.element,this.api.Ve());this.api.Ta(this.ya("ytp-upnext-autoplay-icon"),this.api.Ve());this.cancelButton&&this.api.Ta(this.cancelButton.element,this.api.Ve())};
g.k.H1=function(){window.focus();this.LB()};
g.k.Ow=function(a){var b=this;this.mj()||(g.Wx("a11y-announce","\u00c0 suivre "+this.suggestion.title),this.u=(0,g.T)(),this.j=new g.Yn(function(){H4a(b,a)},25),H4a(this,a),B4a(this.api,G4a(this,a)));
g.io(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.W.prototype.hide.call(this)};
g.k.mj=function(){return!!this.j};
g.k.Ys=function(){this.Ro();this.u=(0,g.T)();H4a(this);g.go(this.element,"ytp-upnext-autoplay-paused")};
g.k.Ro=function(){this.mj()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.R().K("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.LB(),this.notification=new Notification("\u00c0 suivre",{body:this.suggestion.title,icon:this.suggestion.If()}),this.B=this.P(this.notification,"click",this.H1),this.C.start())}this.Ro();this.api.nextVideo(!1,a)};
g.k.uU=function(a){!g.rh(this.cancelButton.element,g.Cx(a))&&g.BO(a,this.api)&&(this.api.Ve()&&this.api.sb(this.ya("ytp-upnext-autoplay-icon")),this.select())};
g.k.tU=function(){this.api.Ve()&&this.cancelButton&&this.api.sb(this.cancelButton.element);g.wN(this.api,!0)};
g.k.w1=function(a){this.api.getPresentingPlayerType();this.show();this.Ow(a)};
g.k.z1=function(){this.api.getPresentingPlayerType();this.Ro();this.hide()};
g.k.ea=function(){this.Ro();this.LB();g.W.prototype.ea.call(this)};g.v(s6,q6);g.k=s6.prototype;g.k.create=function(){q6.prototype.create.call(this);this.C.P(this.player,"appresize",this.ox);this.C.P(this.player,"onVideoAreaChange",this.ox);this.C.P(this.player,"videodatachange",this.onVideoDataChange);this.C.P(this.player,"autonavchange",this.YL);this.C.P(this.player,"autonavcancel",this.vU);this.onVideoDataChange()};
g.k.show=function(){q6.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.wN(this.player,!1);g.CN(this.player)&&this.Rx()&&!this.B?(t6(this),2===this.videoData.autonavState?this.player.R().K("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Ow():3===this.videoData.autonavState&&this.j.Ys()):(g.wN(this.player,!0),t6(this));this.ox()};
g.k.hide=function(){q6.prototype.hide.call(this);this.j.Ys();t6(this)};
g.k.ox=function(){var a=this.player.Sj(!0,this.player.isFullscreen());t6(this);p6(this.u);g.ko(this.element,"ytp-autonav-cancelled-small-mode",this.Dg(a));g.ko(this.element,"ytp-autonav-cancelled-tiny-mode",this.VC(a));g.ko(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.xl(this.overlay.element,{width:a.width+"px"});if(!this.D){a=g.r(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.r(b.value);b=c.next().value;c=c.next().value;g.ko(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){var b=g.AI(this.videoData);b&&(this.j.WA(b),this.j!==this.u&&this.u.WA(b));for(b=0;b<N4a.length;++b){var c=N4a[b];if(a&&a[c]){this.videos[b]=new n6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,m6(d,c));g.M(this,this.videos[b]);this.videos[b].xa(this.J.element)}}}this.ox()}};
g.k.YL=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.j.Ro(),this.jb&&this.ox()):(this.I=!0,this.Ve()&&(2===a?this.j.Ow():3===a&&this.j.Ys()))};
g.k.vU=function(a){a?this.YL(1):(this.B=null,this.I=!1)};
g.k.Rx=function(){return 1!==this.videoData.autonavState};
g.k.Dg=function(a){return(910>a.width||459>a.height)&&!this.VC(a)&&!(400>=a.width||360>=a.height)};
g.k.VC=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Ve=function(){return this.jb&&g.CN(this.player)&&this.Rx()&&!this.B};
var N4a=[1,3,2,4];g.v(I4a,q6);I4a.prototype.Fa=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Ek;var b=this.subscribeButton;a.subscribed?b.u():b.B()};g.v(u6,g.W);u6.prototype.select=function(){(this.api.Gl(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.vy||void 0)||this.api.K("web_player_endscreen_double_log_fix_killswitch"))&&this.api.sb(this.element)};
u6.prototype.onClick=function(a){g.BO(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
u6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Hx(a)||(this.select(),g.Gx(a))}};
u6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.R();this.u=a.C?!1:b.u};g.v(v6,q6);g.k=v6.prototype;g.k.create=function(){q6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Cn();this.u.P(this.player,"appresize",this.Cn);this.u.P(this.player,"onVideoAreaChange",this.Cn);this.u.P(this.player,"videodatachange",this.onVideoDataChange);this.u.P(this.player,"autonavchange",this.kF);this.u.P(this.player,"autonavcancel",this.wU);a=this.videoData.autonavState;a!==this.N&&this.kF(a);this.u.P(this.element,"transitionend",this.e3)};
g.k.destroy=function(){g.bz(this.u);g.bf(this.stills);this.stills=[];q6.prototype.destroy.call(this);g.io(this.element,"ytp-show-tiles");this.I.stop();this.N=this.videoData.autonavState};
g.k.Rx=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.jb;q6.prototype.show.call(this);g.io(this.element,"ytp-show-tiles");this.player.R().isMobile?g.$n(this.I):this.I.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.wN(this.player,!1);w6(this)?(x6(this),2===this.videoData.autonavState?this.player.R().K("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Ow():3===this.videoData.autonavState&&this.j.Ys()):(g.wN(this.player,!0),x6(this));a!==this.jb&&this.player.Ta(this.element,
!0)};
g.k.hide=function(){var a=this.jb;q6.prototype.hide.call(this);this.j.Ys();x6(this);a!==this.jb&&this.player.Ta(this.element,!1)};
g.k.e3=function(a){g.Cx(a)===this.element&&this.Cn()};
g.k.Cn=function(){if(this.videoData&&this.videoData.suggestions&&this.videoData.suggestions.length){g.go(this.element,"ytp-endscreen-paginate");var a=this.G.Sj(!0,this.G.isFullscreen()),b=g.rN(this.G);b&&(b=b.Qf()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.videoData.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,q=e/2,u=b<=f-2&&n>=q*m,w=e<=h-2&&n>=p*m;if((p+
1)/q*d/c>c/(p/(q+1)*d)&&w)n-=p*m,e+=2;else if(u)n-=q*m,b+=2;else if(w)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Hl(a,m,n);g.xl(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.j.WA(g.AI(this.videoData));this.j instanceof o6&&p6(this.j);g.ko(this.element,"ytp-endscreen-takeover",w6(this));x6(this);m+=4;n+=4;for(f=c=0;f<
b;f++)for(h=0;h<e;h++)if(p=c,u=0,d&&f>=b-2&&h>=e-2?u=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(u=2):u=2),p=g.Cg(p+this.B,l),0!==u){q=this.stills[c];q||(q=new u6(this.player),this.stills[c]=q,a.appendChild(q.element));w=Math.floor(n*h/e);var y=Math.floor(m*f/b),A=Math.floor(n*(h+u)/e)-w-4,B=Math.floor(m*(f+u)/b)-y-4;g.Dl(q.element,y,w);g.Hl(q.element,B,A);g.xl(q.element,"transitionDelay",(h+f)/20+"s");g.ko(q.element,"ytp-videowall-still-mini",1===u);g.ko(q.element,"ytp-videowall-still-large",2<
u);this.V&&(u=Math.max(B,A),g.ko(q.element,"ytp-videowall-still-round-large",256<=u),g.ko(q.element,"ytp-videowall-still-round-medium",96<u&&256>u),g.ko(q.element,"ytp-videowall-still-round-small",96>=u));p=this.videoData.suggestions[p];q.suggestion!==p&&(q.suggestion=p,u=q.api.R(),w=g.fo(q.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",m6(q,p,w),g.MF(u)&&(w=p.Hm(),y={},u.ra&&g.cN(y,u.loaderUrl),w=g.vi(w,g.bN(y,"emb_rel_end")),q.Ka("url",w)),(p=(p=p.sessionData)&&p.itct)&&q.api.xk(q.element,
p));c++}g.ko(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.ph(e.element),g.af(e);this.stills.length=c}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.Cn())};
g.k.xU=function(){this.B+=this.stills.length;this.Cn()};
g.k.yU=function(){this.B-=this.stills.length;this.Cn()};
g.k.QP=function(){return this.j.mj()};
g.k.kF=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.Ro(),this.jb&&this.Cn()):(this.D=!0,this.jb&&w6(this)&&(2===a?this.j.Ow():3===a&&this.j.Ys()))};
g.k.wU=function(a){if(a){for(a=0;a<this.stills.length;a++)this.G.Ta(this.stills[a].element,!0);this.kF(1)}else this.C=null,this.D=!1;this.Cn()};
g.k.Ve=function(){return this.jb&&w6(this)};g.v(y6,g.W);y6.prototype.onClick=function(a){g.CO(this.getVideoUrl(),this.G,a);this.G.sb(this.element)};
y6.prototype.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.G.getVideoUrl(a,!1,!1,!0);var b=this.G.R();if(g.MF(b)||g.XF(b)){var c={};b.ra&&g.MF(b)&&g.cN(c,b.loaderUrl);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.bN(c,b);a=g.vi(a,c)}return a};
y6.prototype.show=function(){g.W.prototype.show.call(this);this.G.Ta(this.element,!0)};
y6.prototype.hide=function(){g.W.prototype.hide.call(this);this.G.Ta(this.element,!1)};g.v(z6,q6);z6.prototype.show=function(){if(3!==this.player.getPlayerState()){q6.prototype.show.call(this);var a;null==(a=g.rN(this.player))||a.oA(!0);this.player.Ta(this.element,!0)}};
z6.prototype.hide=function(){q6.prototype.hide.call(this);var a;null==(a=g.rN(this.player))||a.oA(!1);this.player.Ta(this.element,!1)};g.v(M4a,g.cO);g.k=M4a.prototype;g.k.Gt=function(){var a;if(null==(a=g.rN(this.player))?0:a.lz())return!0;a=this.player.getVideoData();var b=!!(a&&a.suggestions&&a.suggestions.length);b=!J4a(this.player)||b;var c=a.Ng||g.XF(a.Oa),d=this.player.Cy();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Ve=function(){return this.endScreen.Ve()};
g.k.SZ=function(){return this.Ve()?this.endScreen.QP():!1};
g.k.ea=function(){this.player.Af("endscreen");g.cO.prototype.ea.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.qb().Yd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].videoId&&!a.lN?a=!1:(this.player.Gl(b.videoId,void 0,void 0,!0,!0,b),c&&c.cD("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.cO.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.cO.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Gt()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){L4a(this);this.B&&K4a(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new s6(this.player):this.endScreen=new v6(this.player),g.M(this,this.endScreen),g.BN(this.player,this.endScreen.element,4))};g.bO("endscreen",M4a);})(_yt_player);
