+function(t){"use strict";function s(e,o){this.$body=t(document.body),this.$scrollElement=t(t(e).is(document.body)?window:e),this.options=t.extend({},s.DEFAULTS,o),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function e(e){return this.each(function(){var o=t(this),i=o.data("bs.scrollspy"),r="object"==typeof e&&e;i||o.data("bs.scrollspy",i=new s(this,r)),"string"==typeof e&&i[e]()})}s.VERSION="3.3.7",s.DEFAULTS={offset:10},s.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},s.prototype.refresh=function(){var s=this,e="offset",o=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(e="position",o=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var s=t(this),i=s.data("target")||s.attr("href"),r=/^#./.test(i)&&t(i);return r&&r.length&&r.is(":visible")&&[[r[e]().top+o,i]]||null}).sort(function(t,s){return t[0]-s[0]}).each(function(){s.offsets.push(this[0]),s.targets.push(this[1])})},s.prototype.process=function(){var t,s=this.$scrollElement.scrollTop()+this.options.offset,e=this.getScrollHeight(),o=this.options.offset+e-this.$scrollElement.height(),i=this.offsets,r=this.targets,l=this.activeTarget;if(this.scrollHeight!=e&&this.refresh(),s>=o)return l!=(t=r[r.length-1])&&this.activate(t);if(l&&s<i[0])return this.activeTarget=null,this.clear();for(t=i.length;t--;)l!=r[t]&&s>=i[t]&&(void 0===i[t+1]||s<i[t+1])&&this.activate(r[t])},s.prototype.activate=function(s){this.activeTarget=s,this.clear();var e=this.selector+'[data-target="'+s+'"],'+this.selector+'[href="'+s+'"]',o=t(e).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate.bs.scrollspy")},s.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var o=t.fn.scrollspy;t.fn.scrollspy=e,t.fn.scrollspy.Constructor=s,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=o,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var s=t(this);e.call(s,s.data())})})}(jQuery),$(document).ready(function(){$("body").scrollspy({target:".toc-wrapper"})});