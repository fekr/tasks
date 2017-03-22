// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.dataset');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__45518__auto__ = [];
var len__45511__auto___52303 = arguments.length;
var i__45512__auto___52304 = (0);
while(true){
if((i__45512__auto___52304 < len__45511__auto___52303)){
args__45518__auto__.push((arguments[i__45512__auto___52304]));

var G__52305 = (i__45512__auto___52304 + (1));
i__45512__auto___52304 = G__52305;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((2) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45519__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__52295_52306 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__52296_52307 = null;
var count__52297_52308 = (0);
var i__52298_52309 = (0);
while(true){
if((i__52298_52309 < count__52297_52308)){
var k_52310 = cljs.core._nth.call(null,chunk__52296_52307,i__52298_52309);
e.setAttribute(cljs.core.name.call(null,k_52310),cljs.core.get.call(null,attrs,k_52310));

var G__52311 = seq__52295_52306;
var G__52312 = chunk__52296_52307;
var G__52313 = count__52297_52308;
var G__52314 = (i__52298_52309 + (1));
seq__52295_52306 = G__52311;
chunk__52296_52307 = G__52312;
count__52297_52308 = G__52313;
i__52298_52309 = G__52314;
continue;
} else {
var temp__4657__auto___52315 = cljs.core.seq.call(null,seq__52295_52306);
if(temp__4657__auto___52315){
var seq__52295_52316__$1 = temp__4657__auto___52315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52295_52316__$1)){
var c__45247__auto___52317 = cljs.core.chunk_first.call(null,seq__52295_52316__$1);
var G__52318 = cljs.core.chunk_rest.call(null,seq__52295_52316__$1);
var G__52319 = c__45247__auto___52317;
var G__52320 = cljs.core.count.call(null,c__45247__auto___52317);
var G__52321 = (0);
seq__52295_52306 = G__52318;
chunk__52296_52307 = G__52319;
count__52297_52308 = G__52320;
i__52298_52309 = G__52321;
continue;
} else {
var k_52322 = cljs.core.first.call(null,seq__52295_52316__$1);
e.setAttribute(cljs.core.name.call(null,k_52322),cljs.core.get.call(null,attrs,k_52322));

var G__52323 = cljs.core.next.call(null,seq__52295_52316__$1);
var G__52324 = null;
var G__52325 = (0);
var G__52326 = (0);
seq__52295_52306 = G__52323;
chunk__52296_52307 = G__52324;
count__52297_52308 = G__52325;
i__52298_52309 = G__52326;
continue;
}
} else {
}
}
break;
}

var seq__52299_52327 = cljs.core.seq.call(null,children);
var chunk__52300_52328 = null;
var count__52301_52329 = (0);
var i__52302_52330 = (0);
while(true){
if((i__52302_52330 < count__52301_52329)){
var ch_52331 = cljs.core._nth.call(null,chunk__52300_52328,i__52302_52330);
e.appendChild(ch_52331);

var G__52332 = seq__52299_52327;
var G__52333 = chunk__52300_52328;
var G__52334 = count__52301_52329;
var G__52335 = (i__52302_52330 + (1));
seq__52299_52327 = G__52332;
chunk__52300_52328 = G__52333;
count__52301_52329 = G__52334;
i__52302_52330 = G__52335;
continue;
} else {
var temp__4657__auto___52336 = cljs.core.seq.call(null,seq__52299_52327);
if(temp__4657__auto___52336){
var seq__52299_52337__$1 = temp__4657__auto___52336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52299_52337__$1)){
var c__45247__auto___52338 = cljs.core.chunk_first.call(null,seq__52299_52337__$1);
var G__52339 = cljs.core.chunk_rest.call(null,seq__52299_52337__$1);
var G__52340 = c__45247__auto___52338;
var G__52341 = cljs.core.count.call(null,c__45247__auto___52338);
var G__52342 = (0);
seq__52299_52327 = G__52339;
chunk__52300_52328 = G__52340;
count__52301_52329 = G__52341;
i__52302_52330 = G__52342;
continue;
} else {
var ch_52343 = cljs.core.first.call(null,seq__52299_52337__$1);
e.appendChild(ch_52343);

var G__52344 = cljs.core.next.call(null,seq__52299_52337__$1);
var G__52345 = null;
var G__52346 = (0);
var G__52347 = (0);
seq__52299_52327 = G__52344;
chunk__52300_52328 = G__52345;
count__52301_52329 = G__52346;
i__52302_52330 = G__52347;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq52292){
var G__52293 = cljs.core.first.call(null,seq52292);
var seq52292__$1 = cljs.core.next.call(null,seq52292);
var G__52294 = cljs.core.first.call(null,seq52292__$1);
var seq52292__$2 = cljs.core.next.call(null,seq52292__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__52293,G__52294,seq52292__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__45361__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__45362__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__45363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__45364__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__45365__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__45361__auto__,prefer_table__45362__auto__,method_cache__45363__auto__,cached_hierarchy__45364__auto__,hierarchy__45365__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__45361__auto__,prefer_table__45362__auto__,method_cache__45363__auto__,cached_hierarchy__45364__auto__,hierarchy__45365__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__45365__auto__,method_table__45361__auto__,prefer_table__45362__auto__,method_cache__45363__auto__,cached_hierarchy__45364__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_52348 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;"),cljs.core.str("text-align: left;")].join('')], null));
el_52348.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_52348.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_52348.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_52348);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__52349,st_map){
var map__52356 = p__52349;
var map__52356__$1 = ((((!((map__52356 == null)))?((((map__52356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52356):map__52356);
var container_el = cljs.core.get.call(null,map__52356__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__52356,map__52356__$1,container_el){
return (function (p__52358){
var vec__52359 = p__52358;
var k = cljs.core.nth.call(null,vec__52359,(0),null);
var v = cljs.core.nth.call(null,vec__52359,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__52356,map__52356__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__52362,dom_str){
var map__52365 = p__52362;
var map__52365__$1 = ((((!((map__52365 == null)))?((((map__52365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52365):map__52365);
var c = map__52365__$1;
var content_area_el = cljs.core.get.call(null,map__52365__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__52367){
var map__52370 = p__52367;
var map__52370__$1 = ((((!((map__52370 == null)))?((((map__52370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52370):map__52370);
var content_area_el = cljs.core.get.call(null,map__52370__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__46608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto__){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto__){
return (function (state_52413){
var state_val_52414 = (state_52413[(1)]);
if((state_val_52414 === (1))){
var inst_52398 = (state_52413[(7)]);
var inst_52398__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_52399 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_52400 = ["10px","10px","100%","68px","1.0"];
var inst_52401 = cljs.core.PersistentHashMap.fromArrays(inst_52399,inst_52400);
var inst_52402 = cljs.core.merge.call(null,inst_52401,style);
var inst_52403 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_52398__$1,inst_52402);
var inst_52404 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_52398__$1,msg);
var inst_52405 = cljs.core.async.timeout.call(null,(300));
var state_52413__$1 = (function (){var statearr_52415 = state_52413;
(statearr_52415[(7)] = inst_52398__$1);

(statearr_52415[(8)] = inst_52404);

(statearr_52415[(9)] = inst_52403);

return statearr_52415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52413__$1,(2),inst_52405);
} else {
if((state_val_52414 === (2))){
var inst_52398 = (state_52413[(7)]);
var inst_52407 = (state_52413[(2)]);
var inst_52408 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_52409 = ["auto"];
var inst_52410 = cljs.core.PersistentHashMap.fromArrays(inst_52408,inst_52409);
var inst_52411 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_52398,inst_52410);
var state_52413__$1 = (function (){var statearr_52416 = state_52413;
(statearr_52416[(10)] = inst_52407);

return statearr_52416;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52413__$1,inst_52411);
} else {
return null;
}
}
});})(c__46608__auto__))
;
return ((function (switch__46454__auto__,c__46608__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__46455__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__46455__auto____0 = (function (){
var statearr_52420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52420[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__46455__auto__);

(statearr_52420[(1)] = (1));

return statearr_52420;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__46455__auto____1 = (function (state_52413){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_52413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e52421){if((e52421 instanceof Object)){
var ex__46458__auto__ = e52421;
var statearr_52422_52424 = state_52413;
(statearr_52422_52424[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52425 = state_52413;
state_52413 = G__52425;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__46455__auto__ = function(state_52413){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__46455__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__46455__auto____1.call(this,state_52413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__46455__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__46455__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto__))
})();
var state__46610__auto__ = (function (){var statearr_52423 = f__46609__auto__.call(null);
(statearr_52423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto__);

return statearr_52423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto__))
);

return c__46608__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args52426 = [];
var len__45511__auto___52429 = arguments.length;
var i__45512__auto___52430 = (0);
while(true){
if((i__45512__auto___52430 < len__45511__auto___52429)){
args52426.push((arguments[i__45512__auto___52430]));

var G__52431 = (i__45512__auto___52430 + (1));
i__45512__auto___52430 = G__52431;
continue;
} else {
}
break;
}

var G__52428 = args52426.length;
switch (G__52428) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52426.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\" data-file-column=\""),cljs.core.str(column_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__52433){
var map__52436 = p__52433;
var map__52436__$1 = ((((!((map__52436 == null)))?((((map__52436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52436):map__52436);
var file = cljs.core.get.call(null,map__52436__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52436__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52436__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__44436__auto__ = file;
if(cljs.core.truth_(or__44436__auto__)){
return or__44436__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str("<span style='"),cljs.core.str(style),cljs.core.str("'>"),cljs.core.str("<span style='color: #757575;'>"),cljs.core.str(line_number),cljs.core.str("  </span>"),cljs.core.str(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__52438){
var vec__52445 = p__52438;
var typ = cljs.core.nth.call(null,vec__52445,(0),null);
var line_number = cljs.core.nth.call(null,vec__52445,(1),null);
var line = cljs.core.nth.call(null,vec__52445,(2),null);
var pred__52448 = cljs.core._EQ_;
var expr__52449 = typ;
if(cljs.core.truth_(pred__52448.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__52449))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__52448.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__52449))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__52448.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__52449))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__52451_SHARP_){
return cljs.core.update_in.call(null,p1__52451_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str(clojure.string.join.call(null,"\n",lines)),cljs.core.str("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__52452_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__52452_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__52455){
var map__52458 = p__52455;
var map__52458__$1 = ((((!((map__52458 == null)))?((((map__52458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52458):map__52458);
var exception = map__52458__$1;
var message = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__52458__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__44424__auto__ = file;
if(cljs.core.truth_(and__44424__auto__)){
return line;
} else {
return and__44424__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__52458,map__52458__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__52453_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__52453_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__52458,map__52458__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str("<pre>"),cljs.core.str(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__52458,map__52458__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__52454_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__52454_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__52454_SHARP_)))].join('');
});})(last_message,map__52458,map__52458__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__52460){
var map__52463 = p__52460;
var map__52463__$1 = ((((!((map__52463 == null)))?((((map__52463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52463):map__52463);
var file = cljs.core.get.call(null,map__52463__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52463__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52463__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__52468 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__52468__$1 = ((((!((map__52468 == null)))?((((map__52468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52468):map__52468);
var head = cljs.core.get.call(null,map__52468__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__52468__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__52468__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__52468__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__52468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52468__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52468__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__52471){
var map__52474 = p__52471;
var map__52474__$1 = ((((!((map__52474 == null)))?((((map__52474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52474):map__52474);
var warning_data = map__52474__$1;
var file = cljs.core.get.call(null,map__52474__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52474__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52474__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__52474__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__52474__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__44424__auto__ = file;
if(cljs.core.truth_(and__44424__auto__)){
return line;
} else {
return and__44424__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__52474,map__52474__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__52470_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__52470_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__52474,map__52474__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__52478 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__52478__$1 = ((((!((map__52478 == null)))?((((map__52478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52478):map__52478);
var head = cljs.core.get.call(null,map__52478__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__52478__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__52478__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__52478__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__52478__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52478__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52478__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__52480){
var map__52484 = p__52480;
var map__52484__$1 = ((((!((map__52484 == null)))?((((map__52484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52484):map__52484);
var warning_data = map__52484__$1;
var message = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52484__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52486 = message;
var G__52486__$1 = (cljs.core.truth_(line)?[cljs.core.str(G__52486),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__52486);
var G__52486__$2 = (cljs.core.truth_((function (){var and__44424__auto__ = line;
if(cljs.core.truth_(and__44424__auto__)){
return column;
} else {
return and__44424__auto__;
}
})())?[cljs.core.str(G__52486__$1),cljs.core.str(", column "),cljs.core.str(column)].join(''):G__52486__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str(G__52486__$2),cljs.core.str(" in file "),cljs.core.str(file)].join('');
} else {
return G__52486__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__52487){
var map__52492 = p__52487;
var map__52492__$1 = ((((!((map__52492 == null)))?((((map__52492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52492):map__52492);
var warning_data = map__52492__$1;
var message = cljs.core.get.call(null,map__52492__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__52492__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52492__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52492__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__52494 = figwheel.client.heads_up.ensure_container.call(null);
var map__52494__$1 = ((((!((map__52494 == null)))?((((map__52494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52494):map__52494);
var content_area_el = cljs.core.get.call(null,map__52494__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str(message_count__$1),cljs.core.str(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__46608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto__){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto__){
return (function (state_52542){
var state_val_52543 = (state_52542[(1)]);
if((state_val_52543 === (1))){
var inst_52525 = (state_52542[(7)]);
var inst_52525__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_52526 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_52527 = ["0.0"];
var inst_52528 = cljs.core.PersistentHashMap.fromArrays(inst_52526,inst_52527);
var inst_52529 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_52525__$1,inst_52528);
var inst_52530 = cljs.core.async.timeout.call(null,(300));
var state_52542__$1 = (function (){var statearr_52544 = state_52542;
(statearr_52544[(7)] = inst_52525__$1);

(statearr_52544[(8)] = inst_52529);

return statearr_52544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52542__$1,(2),inst_52530);
} else {
if((state_val_52543 === (2))){
var inst_52525 = (state_52542[(7)]);
var inst_52532 = (state_52542[(2)]);
var inst_52533 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_52534 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_52535 = cljs.core.PersistentHashMap.fromArrays(inst_52533,inst_52534);
var inst_52536 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_52525,inst_52535);
var inst_52537 = cljs.core.async.timeout.call(null,(200));
var state_52542__$1 = (function (){var statearr_52545 = state_52542;
(statearr_52545[(9)] = inst_52536);

(statearr_52545[(10)] = inst_52532);

return statearr_52545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52542__$1,(3),inst_52537);
} else {
if((state_val_52543 === (3))){
var inst_52525 = (state_52542[(7)]);
var inst_52539 = (state_52542[(2)]);
var inst_52540 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_52525,"");
var state_52542__$1 = (function (){var statearr_52546 = state_52542;
(statearr_52546[(11)] = inst_52539);

return statearr_52546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52542__$1,inst_52540);
} else {
return null;
}
}
}
});})(c__46608__auto__))
;
return ((function (switch__46454__auto__,c__46608__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__46455__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__46455__auto____0 = (function (){
var statearr_52550 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52550[(0)] = figwheel$client$heads_up$clear_$_state_machine__46455__auto__);

(statearr_52550[(1)] = (1));

return statearr_52550;
});
var figwheel$client$heads_up$clear_$_state_machine__46455__auto____1 = (function (state_52542){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_52542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e52551){if((e52551 instanceof Object)){
var ex__46458__auto__ = e52551;
var statearr_52552_52554 = state_52542;
(statearr_52552_52554[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52555 = state_52542;
state_52542 = G__52555;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__46455__auto__ = function(state_52542){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__46455__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__46455__auto____1.call(this,state_52542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__46455__auto____0;
figwheel$client$heads_up$clear_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__46455__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto__))
})();
var state__46610__auto__ = (function (){var statearr_52553 = f__46609__auto__.call(null);
(statearr_52553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto__);

return statearr_52553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto__))
);

return c__46608__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__46608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto__){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto__){
return (function (state_52587){
var state_val_52588 = (state_52587[(1)]);
if((state_val_52588 === (1))){
var inst_52577 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_52587__$1 = state_52587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52587__$1,(2),inst_52577);
} else {
if((state_val_52588 === (2))){
var inst_52579 = (state_52587[(2)]);
var inst_52580 = cljs.core.async.timeout.call(null,(400));
var state_52587__$1 = (function (){var statearr_52589 = state_52587;
(statearr_52589[(7)] = inst_52579);

return statearr_52589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52587__$1,(3),inst_52580);
} else {
if((state_val_52588 === (3))){
var inst_52582 = (state_52587[(2)]);
var inst_52583 = figwheel.client.heads_up.clear.call(null);
var state_52587__$1 = (function (){var statearr_52590 = state_52587;
(statearr_52590[(8)] = inst_52582);

return statearr_52590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52587__$1,(4),inst_52583);
} else {
if((state_val_52588 === (4))){
var inst_52585 = (state_52587[(2)]);
var state_52587__$1 = state_52587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52587__$1,inst_52585);
} else {
return null;
}
}
}
}
});})(c__46608__auto__))
;
return ((function (switch__46454__auto__,c__46608__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__46455__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__46455__auto____0 = (function (){
var statearr_52594 = [null,null,null,null,null,null,null,null,null];
(statearr_52594[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__46455__auto__);

(statearr_52594[(1)] = (1));

return statearr_52594;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__46455__auto____1 = (function (state_52587){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_52587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e52595){if((e52595 instanceof Object)){
var ex__46458__auto__ = e52595;
var statearr_52596_52598 = state_52587;
(statearr_52596_52598[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52599 = state_52587;
state_52587 = G__52599;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__46455__auto__ = function(state_52587){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__46455__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__46455__auto____1.call(this,state_52587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__46455__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__46455__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto__))
})();
var state__46610__auto__ = (function (){var statearr_52597 = f__46609__auto__.call(null);
(statearr_52597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto__);

return statearr_52597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto__))
);

return c__46608__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str("position: absolute;"),cljs.core.str("z-index: 9000;"),cljs.core.str("width: 100vw;"),cljs.core.str("height: 100vh;"),cljs.core.str("top: 0px; left: 0px;"),cljs.core.str("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str("color: #FFF5DB;"),cljs.core.str("width: 100vw;"),cljs.core.str("margin: auto;"),cljs.core.str("margin-top: 10px;"),cljs.core.str("text-align: center; "),cljs.core.str("padding: 2px 0px;"),cljs.core.str("font-size: 13px;"),cljs.core.str("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1490223443966