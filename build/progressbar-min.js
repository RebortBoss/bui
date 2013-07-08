/**
 * @fileOverview \u8fdb\u5ea6\u6761\u547d\u540d\u7a7a\u95f4\u5165\u53e3
 * @ignore
 */define("bui/progressbar",["bui/common","bui/progressbar/base","bui/progressbar/load"],function(e){var t=e("bui/common"),n=t.namespace("ProgressBar");return t.mix(n,{Base:e("bui/progressbar/base"),Load:e("bui/progressbar/load")}),n}),define("bui/progressbar/base",["bui/common"],function(e){var t=e("bui/common"),n=t.Component.View.extend({_uiSetPercent:function(e){var n=this,r=n.get("el").children();t.isArray(e)||(e=[e]),t.each(r,function(t,n){$(t).width(e[n]+"%")})}},{ATTRS:{percent:{}}}),r=t.Component.Controller.extend({},{ATTRS:{percent:{view:!0,value:0},tpl:{value:'<div class="progress-bar-inner"></div>'},xview:{value:n}}},{xclass:"progress-bar"});return r}),define("bui/progressbar/load",["bui/progressbar/base"],function(e){var t=e("bui/progressbar/base"),n=0,r=1,i=2,s=t.extend({bindUI:function(){var e=this;e.on("afterPercentChange",function(t){if(e.isLoading()){var n=e.get("percent");n==100&&e.onCompleted(),e.onChange()}})},start:function(){var e=this;e.isLoading()||e.onstart()},complete:function(){var e=this;clearTimeout(e.get("t")),e.set("percent",100)},cancle:function(){var e=this;clearTimeout(e.get("t")),e.get("percent")&&e.set("percent",0),e.set("status",n)},onstart:function(){var e=this,t=e.get("cfg");e.set("percent",0),e.set("status",r),e.fire("start",t),e._startLoad()},onChange:function(){var e=this;e.fire("loadchange")},onCompleted:function(){var e=this;e.set("status",i),e.fire("completed")},isLoading:function(){return this.get("status")===r},isCompleted:function(){return this.get("status")===i},_startLoad:function(){var e=this,t=e.get("ajaxCfg"),n=e.get("interval"),r;t.success=function(i){var s=i.percent;e.set("percent",s),s<100&&e.isLoading()&&(r=setTimeout(function(){$.ajax(t)},n),e.set("t",r))},$.ajax(t)}},{ATTRS:{status:{value:0},ajaxCfg:{},interval:{value:500},events:{value:["start","loadchange","completed"]}}},{xclass:"progress-bar-load"});return s});
