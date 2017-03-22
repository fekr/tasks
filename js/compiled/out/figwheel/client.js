// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args53535 = [];
var len__45511__auto___53538 = arguments.length;
var i__45512__auto___53539 = (0);
while(true){
if((i__45512__auto___53539 < len__45511__auto___53538)){
args53535.push((arguments[i__45512__auto___53539]));

var G__53540 = (i__45512__auto___53539 + (1));
i__45512__auto___53539 = G__53540;
continue;
} else {
}
break;
}

var G__53537 = args53535.length;
switch (G__53537) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53535.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__45518__auto__ = [];
var len__45511__auto___53543 = arguments.length;
var i__45512__auto___53544 = (0);
while(true){
if((i__45512__auto___53544 < len__45511__auto___53543)){
args__45518__auto__.push((arguments[i__45512__auto___53544]));

var G__53545 = (i__45512__auto___53544 + (1));
i__45512__auto___53544 = G__53545;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq53542){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53542));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__45518__auto__ = [];
var len__45511__auto___53547 = arguments.length;
var i__45512__auto___53548 = (0);
while(true){
if((i__45512__auto___53548 < len__45511__auto___53547)){
args__45518__auto__.push((arguments[i__45512__auto___53548]));

var G__53549 = (i__45512__auto___53548 + (1));
i__45512__auto___53548 = G__53549;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq53546){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53546));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__53550){
var map__53553 = p__53550;
var map__53553__$1 = ((((!((map__53553 == null)))?((((map__53553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53553):map__53553);
var message = cljs.core.get.call(null,map__53553__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__53553__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__44436__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__44436__auto__)){
return or__44436__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__44424__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__44424__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__44424__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__46608__auto___53715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___53715,ch){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___53715,ch){
return (function (state_53684){
var state_val_53685 = (state_53684[(1)]);
if((state_val_53685 === (7))){
var inst_53680 = (state_53684[(2)]);
var state_53684__$1 = state_53684;
var statearr_53686_53716 = state_53684__$1;
(statearr_53686_53716[(2)] = inst_53680);

(statearr_53686_53716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (1))){
var state_53684__$1 = state_53684;
var statearr_53687_53717 = state_53684__$1;
(statearr_53687_53717[(2)] = null);

(statearr_53687_53717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (4))){
var inst_53637 = (state_53684[(7)]);
var inst_53637__$1 = (state_53684[(2)]);
var state_53684__$1 = (function (){var statearr_53688 = state_53684;
(statearr_53688[(7)] = inst_53637__$1);

return statearr_53688;
})();
if(cljs.core.truth_(inst_53637__$1)){
var statearr_53689_53718 = state_53684__$1;
(statearr_53689_53718[(1)] = (5));

} else {
var statearr_53690_53719 = state_53684__$1;
(statearr_53690_53719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (15))){
var inst_53644 = (state_53684[(8)]);
var inst_53659 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53644);
var inst_53660 = cljs.core.first.call(null,inst_53659);
var inst_53661 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_53660);
var inst_53662 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_53661)].join('');
var inst_53663 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_53662);
var state_53684__$1 = state_53684;
var statearr_53691_53720 = state_53684__$1;
(statearr_53691_53720[(2)] = inst_53663);

(statearr_53691_53720[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (13))){
var inst_53668 = (state_53684[(2)]);
var state_53684__$1 = state_53684;
var statearr_53692_53721 = state_53684__$1;
(statearr_53692_53721[(2)] = inst_53668);

(statearr_53692_53721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (6))){
var state_53684__$1 = state_53684;
var statearr_53693_53722 = state_53684__$1;
(statearr_53693_53722[(2)] = null);

(statearr_53693_53722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (17))){
var inst_53666 = (state_53684[(2)]);
var state_53684__$1 = state_53684;
var statearr_53694_53723 = state_53684__$1;
(statearr_53694_53723[(2)] = inst_53666);

(statearr_53694_53723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (3))){
var inst_53682 = (state_53684[(2)]);
var state_53684__$1 = state_53684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53684__$1,inst_53682);
} else {
if((state_val_53685 === (12))){
var inst_53643 = (state_53684[(9)]);
var inst_53657 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_53643,opts);
var state_53684__$1 = state_53684;
if(cljs.core.truth_(inst_53657)){
var statearr_53695_53724 = state_53684__$1;
(statearr_53695_53724[(1)] = (15));

} else {
var statearr_53696_53725 = state_53684__$1;
(statearr_53696_53725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (2))){
var state_53684__$1 = state_53684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53684__$1,(4),ch);
} else {
if((state_val_53685 === (11))){
var inst_53644 = (state_53684[(8)]);
var inst_53649 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53650 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_53644);
var inst_53651 = cljs.core.async.timeout.call(null,(1000));
var inst_53652 = [inst_53650,inst_53651];
var inst_53653 = (new cljs.core.PersistentVector(null,2,(5),inst_53649,inst_53652,null));
var state_53684__$1 = state_53684;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53684__$1,(14),inst_53653);
} else {
if((state_val_53685 === (9))){
var inst_53644 = (state_53684[(8)]);
var inst_53670 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_53671 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53644);
var inst_53672 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53671);
var inst_53673 = [cljs.core.str("Not loading: "),cljs.core.str(inst_53672)].join('');
var inst_53674 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_53673);
var state_53684__$1 = (function (){var statearr_53697 = state_53684;
(statearr_53697[(10)] = inst_53670);

return statearr_53697;
})();
var statearr_53698_53726 = state_53684__$1;
(statearr_53698_53726[(2)] = inst_53674);

(statearr_53698_53726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (5))){
var inst_53637 = (state_53684[(7)]);
var inst_53639 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_53640 = (new cljs.core.PersistentArrayMap(null,2,inst_53639,null));
var inst_53641 = (new cljs.core.PersistentHashSet(null,inst_53640,null));
var inst_53642 = figwheel.client.focus_msgs.call(null,inst_53641,inst_53637);
var inst_53643 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_53642);
var inst_53644 = cljs.core.first.call(null,inst_53642);
var inst_53645 = figwheel.client.autoload_QMARK_.call(null);
var state_53684__$1 = (function (){var statearr_53699 = state_53684;
(statearr_53699[(8)] = inst_53644);

(statearr_53699[(9)] = inst_53643);

return statearr_53699;
})();
if(cljs.core.truth_(inst_53645)){
var statearr_53700_53727 = state_53684__$1;
(statearr_53700_53727[(1)] = (8));

} else {
var statearr_53701_53728 = state_53684__$1;
(statearr_53701_53728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (14))){
var inst_53655 = (state_53684[(2)]);
var state_53684__$1 = state_53684;
var statearr_53702_53729 = state_53684__$1;
(statearr_53702_53729[(2)] = inst_53655);

(statearr_53702_53729[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (16))){
var state_53684__$1 = state_53684;
var statearr_53703_53730 = state_53684__$1;
(statearr_53703_53730[(2)] = null);

(statearr_53703_53730[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (10))){
var inst_53676 = (state_53684[(2)]);
var state_53684__$1 = (function (){var statearr_53704 = state_53684;
(statearr_53704[(11)] = inst_53676);

return statearr_53704;
})();
var statearr_53705_53731 = state_53684__$1;
(statearr_53705_53731[(2)] = null);

(statearr_53705_53731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53685 === (8))){
var inst_53643 = (state_53684[(9)]);
var inst_53647 = figwheel.client.reload_file_state_QMARK_.call(null,inst_53643,opts);
var state_53684__$1 = state_53684;
if(cljs.core.truth_(inst_53647)){
var statearr_53706_53732 = state_53684__$1;
(statearr_53706_53732[(1)] = (11));

} else {
var statearr_53707_53733 = state_53684__$1;
(statearr_53707_53733[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46608__auto___53715,ch))
;
return ((function (switch__46454__auto__,c__46608__auto___53715,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__46455__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__46455__auto____0 = (function (){
var statearr_53711 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53711[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__46455__auto__);

(statearr_53711[(1)] = (1));

return statearr_53711;
});
var figwheel$client$file_reloader_plugin_$_state_machine__46455__auto____1 = (function (state_53684){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_53684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e53712){if((e53712 instanceof Object)){
var ex__46458__auto__ = e53712;
var statearr_53713_53734 = state_53684;
(statearr_53713_53734[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53735 = state_53684;
state_53684 = G__53735;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__46455__auto__ = function(state_53684){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__46455__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__46455__auto____1.call(this,state_53684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__46455__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__46455__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___53715,ch))
})();
var state__46610__auto__ = (function (){var statearr_53714 = f__46609__auto__.call(null);
(statearr_53714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___53715);

return statearr_53714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___53715,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__53736_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__53736_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_53739 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_53739){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e53738){if((e53738 instanceof Error)){
var e = e53738;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_53739], null));
} else {
var e = e53738;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_53739))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__53740){
var map__53749 = p__53740;
var map__53749__$1 = ((((!((map__53749 == null)))?((((map__53749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53749):map__53749);
var opts = map__53749__$1;
var build_id = cljs.core.get.call(null,map__53749__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__53749,map__53749__$1,opts,build_id){
return (function (p__53751){
var vec__53752 = p__53751;
var seq__53753 = cljs.core.seq.call(null,vec__53752);
var first__53754 = cljs.core.first.call(null,seq__53753);
var seq__53753__$1 = cljs.core.next.call(null,seq__53753);
var map__53755 = first__53754;
var map__53755__$1 = ((((!((map__53755 == null)))?((((map__53755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53755):map__53755);
var msg = map__53755__$1;
var msg_name = cljs.core.get.call(null,map__53755__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53753__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__53752,seq__53753,first__53754,seq__53753__$1,map__53755,map__53755__$1,msg,msg_name,_,map__53749,map__53749__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__53752,seq__53753,first__53754,seq__53753__$1,map__53755,map__53755__$1,msg,msg_name,_,map__53749,map__53749__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__53749,map__53749__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__53763){
var vec__53764 = p__53763;
var seq__53765 = cljs.core.seq.call(null,vec__53764);
var first__53766 = cljs.core.first.call(null,seq__53765);
var seq__53765__$1 = cljs.core.next.call(null,seq__53765);
var map__53767 = first__53766;
var map__53767__$1 = ((((!((map__53767 == null)))?((((map__53767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53767):map__53767);
var msg = map__53767__$1;
var msg_name = cljs.core.get.call(null,map__53767__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53765__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__53769){
var map__53781 = p__53769;
var map__53781__$1 = ((((!((map__53781 == null)))?((((map__53781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53781):map__53781);
var on_compile_warning = cljs.core.get.call(null,map__53781__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__53781__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__53781,map__53781__$1,on_compile_warning,on_compile_fail){
return (function (p__53783){
var vec__53784 = p__53783;
var seq__53785 = cljs.core.seq.call(null,vec__53784);
var first__53786 = cljs.core.first.call(null,seq__53785);
var seq__53785__$1 = cljs.core.next.call(null,seq__53785);
var map__53787 = first__53786;
var map__53787__$1 = ((((!((map__53787 == null)))?((((map__53787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53787):map__53787);
var msg = map__53787__$1;
var msg_name = cljs.core.get.call(null,map__53787__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53785__$1;
var pred__53789 = cljs.core._EQ_;
var expr__53790 = msg_name;
if(cljs.core.truth_(pred__53789.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__53790))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__53789.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__53790))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__53781,map__53781__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__46608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto__,msg_hist,msg_names,msg){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto__,msg_hist,msg_names,msg){
return (function (state_54018){
var state_val_54019 = (state_54018[(1)]);
if((state_val_54019 === (7))){
var inst_53938 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
if(cljs.core.truth_(inst_53938)){
var statearr_54020_54070 = state_54018__$1;
(statearr_54020_54070[(1)] = (8));

} else {
var statearr_54021_54071 = state_54018__$1;
(statearr_54021_54071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (20))){
var inst_54012 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
var statearr_54022_54072 = state_54018__$1;
(statearr_54022_54072[(2)] = inst_54012);

(statearr_54022_54072[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (27))){
var inst_54008 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
var statearr_54023_54073 = state_54018__$1;
(statearr_54023_54073[(2)] = inst_54008);

(statearr_54023_54073[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (1))){
var inst_53931 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54018__$1 = state_54018;
if(cljs.core.truth_(inst_53931)){
var statearr_54024_54074 = state_54018__$1;
(statearr_54024_54074[(1)] = (2));

} else {
var statearr_54025_54075 = state_54018__$1;
(statearr_54025_54075[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (24))){
var inst_54010 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
var statearr_54026_54076 = state_54018__$1;
(statearr_54026_54076[(2)] = inst_54010);

(statearr_54026_54076[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (4))){
var inst_54016 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54018__$1,inst_54016);
} else {
if((state_val_54019 === (15))){
var inst_54014 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
var statearr_54027_54077 = state_54018__$1;
(statearr_54027_54077[(2)] = inst_54014);

(statearr_54027_54077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (21))){
var inst_53967 = (state_54018[(2)]);
var inst_53968 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53969 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53968);
var state_54018__$1 = (function (){var statearr_54028 = state_54018;
(statearr_54028[(7)] = inst_53967);

return statearr_54028;
})();
var statearr_54029_54078 = state_54018__$1;
(statearr_54029_54078[(2)] = inst_53969);

(statearr_54029_54078[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (31))){
var inst_53997 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54018__$1 = state_54018;
if(cljs.core.truth_(inst_53997)){
var statearr_54030_54079 = state_54018__$1;
(statearr_54030_54079[(1)] = (34));

} else {
var statearr_54031_54080 = state_54018__$1;
(statearr_54031_54080[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (32))){
var inst_54006 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
var statearr_54032_54081 = state_54018__$1;
(statearr_54032_54081[(2)] = inst_54006);

(statearr_54032_54081[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (33))){
var inst_53993 = (state_54018[(2)]);
var inst_53994 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53995 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53994);
var state_54018__$1 = (function (){var statearr_54033 = state_54018;
(statearr_54033[(8)] = inst_53993);

return statearr_54033;
})();
var statearr_54034_54082 = state_54018__$1;
(statearr_54034_54082[(2)] = inst_53995);

(statearr_54034_54082[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (13))){
var inst_53952 = figwheel.client.heads_up.clear.call(null);
var state_54018__$1 = state_54018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54018__$1,(16),inst_53952);
} else {
if((state_val_54019 === (22))){
var inst_53973 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53974 = figwheel.client.heads_up.append_warning_message.call(null,inst_53973);
var state_54018__$1 = state_54018;
var statearr_54035_54083 = state_54018__$1;
(statearr_54035_54083[(2)] = inst_53974);

(statearr_54035_54083[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (36))){
var inst_54004 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
var statearr_54036_54084 = state_54018__$1;
(statearr_54036_54084[(2)] = inst_54004);

(statearr_54036_54084[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (29))){
var inst_53984 = (state_54018[(2)]);
var inst_53985 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53986 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53985);
var state_54018__$1 = (function (){var statearr_54037 = state_54018;
(statearr_54037[(9)] = inst_53984);

return statearr_54037;
})();
var statearr_54038_54085 = state_54018__$1;
(statearr_54038_54085[(2)] = inst_53986);

(statearr_54038_54085[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (6))){
var inst_53933 = (state_54018[(10)]);
var state_54018__$1 = state_54018;
var statearr_54039_54086 = state_54018__$1;
(statearr_54039_54086[(2)] = inst_53933);

(statearr_54039_54086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (28))){
var inst_53980 = (state_54018[(2)]);
var inst_53981 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53982 = figwheel.client.heads_up.display_warning.call(null,inst_53981);
var state_54018__$1 = (function (){var statearr_54040 = state_54018;
(statearr_54040[(11)] = inst_53980);

return statearr_54040;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54018__$1,(29),inst_53982);
} else {
if((state_val_54019 === (25))){
var inst_53978 = figwheel.client.heads_up.clear.call(null);
var state_54018__$1 = state_54018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54018__$1,(28),inst_53978);
} else {
if((state_val_54019 === (34))){
var inst_53999 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54018__$1 = state_54018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54018__$1,(37),inst_53999);
} else {
if((state_val_54019 === (17))){
var inst_53958 = (state_54018[(2)]);
var inst_53959 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53960 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53959);
var state_54018__$1 = (function (){var statearr_54041 = state_54018;
(statearr_54041[(12)] = inst_53958);

return statearr_54041;
})();
var statearr_54042_54087 = state_54018__$1;
(statearr_54042_54087[(2)] = inst_53960);

(statearr_54042_54087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (3))){
var inst_53950 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54018__$1 = state_54018;
if(cljs.core.truth_(inst_53950)){
var statearr_54043_54088 = state_54018__$1;
(statearr_54043_54088[(1)] = (13));

} else {
var statearr_54044_54089 = state_54018__$1;
(statearr_54044_54089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (12))){
var inst_53946 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
var statearr_54045_54090 = state_54018__$1;
(statearr_54045_54090[(2)] = inst_53946);

(statearr_54045_54090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (2))){
var inst_53933 = (state_54018[(10)]);
var inst_53933__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54018__$1 = (function (){var statearr_54046 = state_54018;
(statearr_54046[(10)] = inst_53933__$1);

return statearr_54046;
})();
if(cljs.core.truth_(inst_53933__$1)){
var statearr_54047_54091 = state_54018__$1;
(statearr_54047_54091[(1)] = (5));

} else {
var statearr_54048_54092 = state_54018__$1;
(statearr_54048_54092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (23))){
var inst_53976 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54018__$1 = state_54018;
if(cljs.core.truth_(inst_53976)){
var statearr_54049_54093 = state_54018__$1;
(statearr_54049_54093[(1)] = (25));

} else {
var statearr_54050_54094 = state_54018__$1;
(statearr_54050_54094[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (35))){
var state_54018__$1 = state_54018;
var statearr_54051_54095 = state_54018__$1;
(statearr_54051_54095[(2)] = null);

(statearr_54051_54095[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (19))){
var inst_53971 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54018__$1 = state_54018;
if(cljs.core.truth_(inst_53971)){
var statearr_54052_54096 = state_54018__$1;
(statearr_54052_54096[(1)] = (22));

} else {
var statearr_54053_54097 = state_54018__$1;
(statearr_54053_54097[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (11))){
var inst_53942 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
var statearr_54054_54098 = state_54018__$1;
(statearr_54054_54098[(2)] = inst_53942);

(statearr_54054_54098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (9))){
var inst_53944 = figwheel.client.heads_up.clear.call(null);
var state_54018__$1 = state_54018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54018__$1,(12),inst_53944);
} else {
if((state_val_54019 === (5))){
var inst_53935 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54018__$1 = state_54018;
var statearr_54055_54099 = state_54018__$1;
(statearr_54055_54099[(2)] = inst_53935);

(statearr_54055_54099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (14))){
var inst_53962 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54018__$1 = state_54018;
if(cljs.core.truth_(inst_53962)){
var statearr_54056_54100 = state_54018__$1;
(statearr_54056_54100[(1)] = (18));

} else {
var statearr_54057_54101 = state_54018__$1;
(statearr_54057_54101[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (26))){
var inst_53988 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54018__$1 = state_54018;
if(cljs.core.truth_(inst_53988)){
var statearr_54058_54102 = state_54018__$1;
(statearr_54058_54102[(1)] = (30));

} else {
var statearr_54059_54103 = state_54018__$1;
(statearr_54059_54103[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (16))){
var inst_53954 = (state_54018[(2)]);
var inst_53955 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53956 = figwheel.client.heads_up.display_exception.call(null,inst_53955);
var state_54018__$1 = (function (){var statearr_54060 = state_54018;
(statearr_54060[(13)] = inst_53954);

return statearr_54060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54018__$1,(17),inst_53956);
} else {
if((state_val_54019 === (30))){
var inst_53990 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53991 = figwheel.client.heads_up.display_warning.call(null,inst_53990);
var state_54018__$1 = state_54018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54018__$1,(33),inst_53991);
} else {
if((state_val_54019 === (10))){
var inst_53948 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
var statearr_54061_54104 = state_54018__$1;
(statearr_54061_54104[(2)] = inst_53948);

(statearr_54061_54104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (18))){
var inst_53964 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53965 = figwheel.client.heads_up.display_exception.call(null,inst_53964);
var state_54018__$1 = state_54018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54018__$1,(21),inst_53965);
} else {
if((state_val_54019 === (37))){
var inst_54001 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
var statearr_54062_54105 = state_54018__$1;
(statearr_54062_54105[(2)] = inst_54001);

(statearr_54062_54105[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (8))){
var inst_53940 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54018__$1 = state_54018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54018__$1,(11),inst_53940);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__46608__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__46454__auto__,c__46608__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46455__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46455__auto____0 = (function (){
var statearr_54066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54066[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46455__auto__);

(statearr_54066[(1)] = (1));

return statearr_54066;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46455__auto____1 = (function (state_54018){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_54018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e54067){if((e54067 instanceof Object)){
var ex__46458__auto__ = e54067;
var statearr_54068_54106 = state_54018;
(statearr_54068_54106[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54107 = state_54018;
state_54018 = G__54107;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46455__auto__ = function(state_54018){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46455__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46455__auto____1.call(this,state_54018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46455__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46455__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto__,msg_hist,msg_names,msg))
})();
var state__46610__auto__ = (function (){var statearr_54069 = f__46609__auto__.call(null);
(statearr_54069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto__);

return statearr_54069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto__,msg_hist,msg_names,msg))
);

return c__46608__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__46608__auto___54170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___54170,ch){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___54170,ch){
return (function (state_54153){
var state_val_54154 = (state_54153[(1)]);
if((state_val_54154 === (1))){
var state_54153__$1 = state_54153;
var statearr_54155_54171 = state_54153__$1;
(statearr_54155_54171[(2)] = null);

(statearr_54155_54171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54154 === (2))){
var state_54153__$1 = state_54153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54153__$1,(4),ch);
} else {
if((state_val_54154 === (3))){
var inst_54151 = (state_54153[(2)]);
var state_54153__$1 = state_54153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54153__$1,inst_54151);
} else {
if((state_val_54154 === (4))){
var inst_54141 = (state_54153[(7)]);
var inst_54141__$1 = (state_54153[(2)]);
var state_54153__$1 = (function (){var statearr_54156 = state_54153;
(statearr_54156[(7)] = inst_54141__$1);

return statearr_54156;
})();
if(cljs.core.truth_(inst_54141__$1)){
var statearr_54157_54172 = state_54153__$1;
(statearr_54157_54172[(1)] = (5));

} else {
var statearr_54158_54173 = state_54153__$1;
(statearr_54158_54173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54154 === (5))){
var inst_54141 = (state_54153[(7)]);
var inst_54143 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54141);
var state_54153__$1 = state_54153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54153__$1,(8),inst_54143);
} else {
if((state_val_54154 === (6))){
var state_54153__$1 = state_54153;
var statearr_54159_54174 = state_54153__$1;
(statearr_54159_54174[(2)] = null);

(statearr_54159_54174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54154 === (7))){
var inst_54149 = (state_54153[(2)]);
var state_54153__$1 = state_54153;
var statearr_54160_54175 = state_54153__$1;
(statearr_54160_54175[(2)] = inst_54149);

(statearr_54160_54175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54154 === (8))){
var inst_54145 = (state_54153[(2)]);
var state_54153__$1 = (function (){var statearr_54161 = state_54153;
(statearr_54161[(8)] = inst_54145);

return statearr_54161;
})();
var statearr_54162_54176 = state_54153__$1;
(statearr_54162_54176[(2)] = null);

(statearr_54162_54176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__46608__auto___54170,ch))
;
return ((function (switch__46454__auto__,c__46608__auto___54170,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__46455__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__46455__auto____0 = (function (){
var statearr_54166 = [null,null,null,null,null,null,null,null,null];
(statearr_54166[(0)] = figwheel$client$heads_up_plugin_$_state_machine__46455__auto__);

(statearr_54166[(1)] = (1));

return statearr_54166;
});
var figwheel$client$heads_up_plugin_$_state_machine__46455__auto____1 = (function (state_54153){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_54153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e54167){if((e54167 instanceof Object)){
var ex__46458__auto__ = e54167;
var statearr_54168_54177 = state_54153;
(statearr_54168_54177[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54178 = state_54153;
state_54153 = G__54178;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__46455__auto__ = function(state_54153){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__46455__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__46455__auto____1.call(this,state_54153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__46455__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__46455__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___54170,ch))
})();
var state__46610__auto__ = (function (){var statearr_54169 = f__46609__auto__.call(null);
(statearr_54169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___54170);

return statearr_54169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___54170,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__46608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto__){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto__){
return (function (state_54199){
var state_val_54200 = (state_54199[(1)]);
if((state_val_54200 === (1))){
var inst_54194 = cljs.core.async.timeout.call(null,(3000));
var state_54199__$1 = state_54199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54199__$1,(2),inst_54194);
} else {
if((state_val_54200 === (2))){
var inst_54196 = (state_54199[(2)]);
var inst_54197 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54199__$1 = (function (){var statearr_54201 = state_54199;
(statearr_54201[(7)] = inst_54196);

return statearr_54201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54199__$1,inst_54197);
} else {
return null;
}
}
});})(c__46608__auto__))
;
return ((function (switch__46454__auto__,c__46608__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__46455__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__46455__auto____0 = (function (){
var statearr_54205 = [null,null,null,null,null,null,null,null];
(statearr_54205[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__46455__auto__);

(statearr_54205[(1)] = (1));

return statearr_54205;
});
var figwheel$client$enforce_project_plugin_$_state_machine__46455__auto____1 = (function (state_54199){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_54199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e54206){if((e54206 instanceof Object)){
var ex__46458__auto__ = e54206;
var statearr_54207_54209 = state_54199;
(statearr_54207_54209[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54210 = state_54199;
state_54199 = G__54210;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__46455__auto__ = function(state_54199){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__46455__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__46455__auto____1.call(this,state_54199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__46455__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__46455__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto__))
})();
var state__46610__auto__ = (function (){var statearr_54208 = f__46609__auto__.call(null);
(statearr_54208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto__);

return statearr_54208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto__))
);

return c__46608__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__46608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto__,figwheel_version,temp__4657__auto__){
return (function (state_54233){
var state_val_54234 = (state_54233[(1)]);
if((state_val_54234 === (1))){
var inst_54227 = cljs.core.async.timeout.call(null,(2000));
var state_54233__$1 = state_54233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54233__$1,(2),inst_54227);
} else {
if((state_val_54234 === (2))){
var inst_54229 = (state_54233[(2)]);
var inst_54230 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_54231 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_54230);
var state_54233__$1 = (function (){var statearr_54235 = state_54233;
(statearr_54235[(7)] = inst_54229);

return statearr_54235;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54233__$1,inst_54231);
} else {
return null;
}
}
});})(c__46608__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__46454__auto__,c__46608__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46455__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46455__auto____0 = (function (){
var statearr_54239 = [null,null,null,null,null,null,null,null];
(statearr_54239[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46455__auto__);

(statearr_54239[(1)] = (1));

return statearr_54239;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46455__auto____1 = (function (state_54233){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_54233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e54240){if((e54240 instanceof Object)){
var ex__46458__auto__ = e54240;
var statearr_54241_54243 = state_54233;
(statearr_54241_54243[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54244 = state_54233;
state_54233 = G__54244;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46455__auto__ = function(state_54233){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46455__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46455__auto____1.call(this,state_54233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46455__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46455__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto__,figwheel_version,temp__4657__auto__))
})();
var state__46610__auto__ = (function (){var statearr_54242 = f__46609__auto__.call(null);
(statearr_54242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto__);

return statearr_54242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto__,figwheel_version,temp__4657__auto__))
);

return c__46608__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__54245){
var map__54249 = p__54245;
var map__54249__$1 = ((((!((map__54249 == null)))?((((map__54249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54249):map__54249);
var file = cljs.core.get.call(null,map__54249__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54249__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54249__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54251 = "";
var G__54251__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__54251),cljs.core.str("file "),cljs.core.str(file)].join(''):G__54251);
var G__54251__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__54251__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__54251__$1);
if(cljs.core.truth_((function (){var and__44424__auto__ = line;
if(cljs.core.truth_(and__44424__auto__)){
return column;
} else {
return and__44424__auto__;
}
})())){
return [cljs.core.str(G__54251__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__54251__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__54252){
var map__54259 = p__54252;
var map__54259__$1 = ((((!((map__54259 == null)))?((((map__54259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54259):map__54259);
var ed = map__54259__$1;
var formatted_exception = cljs.core.get.call(null,map__54259__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__54259__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__54259__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__54261_54265 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__54262_54266 = null;
var count__54263_54267 = (0);
var i__54264_54268 = (0);
while(true){
if((i__54264_54268 < count__54263_54267)){
var msg_54269 = cljs.core._nth.call(null,chunk__54262_54266,i__54264_54268);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54269);

var G__54270 = seq__54261_54265;
var G__54271 = chunk__54262_54266;
var G__54272 = count__54263_54267;
var G__54273 = (i__54264_54268 + (1));
seq__54261_54265 = G__54270;
chunk__54262_54266 = G__54271;
count__54263_54267 = G__54272;
i__54264_54268 = G__54273;
continue;
} else {
var temp__4657__auto___54274 = cljs.core.seq.call(null,seq__54261_54265);
if(temp__4657__auto___54274){
var seq__54261_54275__$1 = temp__4657__auto___54274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54261_54275__$1)){
var c__45247__auto___54276 = cljs.core.chunk_first.call(null,seq__54261_54275__$1);
var G__54277 = cljs.core.chunk_rest.call(null,seq__54261_54275__$1);
var G__54278 = c__45247__auto___54276;
var G__54279 = cljs.core.count.call(null,c__45247__auto___54276);
var G__54280 = (0);
seq__54261_54265 = G__54277;
chunk__54262_54266 = G__54278;
count__54263_54267 = G__54279;
i__54264_54268 = G__54280;
continue;
} else {
var msg_54281 = cljs.core.first.call(null,seq__54261_54275__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54281);

var G__54282 = cljs.core.next.call(null,seq__54261_54275__$1);
var G__54283 = null;
var G__54284 = (0);
var G__54285 = (0);
seq__54261_54265 = G__54282;
chunk__54262_54266 = G__54283;
count__54263_54267 = G__54284;
i__54264_54268 = G__54285;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__54286){
var map__54289 = p__54286;
var map__54289__$1 = ((((!((map__54289 == null)))?((((map__54289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54289):map__54289);
var w = map__54289__$1;
var message = cljs.core.get.call(null,map__54289__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__44424__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__44424__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__44424__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__54301 = cljs.core.seq.call(null,plugins);
var chunk__54302 = null;
var count__54303 = (0);
var i__54304 = (0);
while(true){
if((i__54304 < count__54303)){
var vec__54305 = cljs.core._nth.call(null,chunk__54302,i__54304);
var k = cljs.core.nth.call(null,vec__54305,(0),null);
var plugin = cljs.core.nth.call(null,vec__54305,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54311 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54301,chunk__54302,count__54303,i__54304,pl_54311,vec__54305,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_54311.call(null,msg_hist);
});})(seq__54301,chunk__54302,count__54303,i__54304,pl_54311,vec__54305,k,plugin))
);
} else {
}

var G__54312 = seq__54301;
var G__54313 = chunk__54302;
var G__54314 = count__54303;
var G__54315 = (i__54304 + (1));
seq__54301 = G__54312;
chunk__54302 = G__54313;
count__54303 = G__54314;
i__54304 = G__54315;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54301);
if(temp__4657__auto__){
var seq__54301__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54301__$1)){
var c__45247__auto__ = cljs.core.chunk_first.call(null,seq__54301__$1);
var G__54316 = cljs.core.chunk_rest.call(null,seq__54301__$1);
var G__54317 = c__45247__auto__;
var G__54318 = cljs.core.count.call(null,c__45247__auto__);
var G__54319 = (0);
seq__54301 = G__54316;
chunk__54302 = G__54317;
count__54303 = G__54318;
i__54304 = G__54319;
continue;
} else {
var vec__54308 = cljs.core.first.call(null,seq__54301__$1);
var k = cljs.core.nth.call(null,vec__54308,(0),null);
var plugin = cljs.core.nth.call(null,vec__54308,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54320 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54301,chunk__54302,count__54303,i__54304,pl_54320,vec__54308,k,plugin,seq__54301__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_54320.call(null,msg_hist);
});})(seq__54301,chunk__54302,count__54303,i__54304,pl_54320,vec__54308,k,plugin,seq__54301__$1,temp__4657__auto__))
);
} else {
}

var G__54321 = cljs.core.next.call(null,seq__54301__$1);
var G__54322 = null;
var G__54323 = (0);
var G__54324 = (0);
seq__54301 = G__54321;
chunk__54302 = G__54322;
count__54303 = G__54323;
i__54304 = G__54324;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args54325 = [];
var len__45511__auto___54332 = arguments.length;
var i__45512__auto___54333 = (0);
while(true){
if((i__45512__auto___54333 < len__45511__auto___54332)){
args54325.push((arguments[i__45512__auto___54333]));

var G__54334 = (i__45512__auto___54333 + (1));
i__45512__auto___54333 = G__54334;
continue;
} else {
}
break;
}

var G__54327 = args54325.length;
switch (G__54327) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54325.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__54328_54336 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__54329_54337 = null;
var count__54330_54338 = (0);
var i__54331_54339 = (0);
while(true){
if((i__54331_54339 < count__54330_54338)){
var msg_54340 = cljs.core._nth.call(null,chunk__54329_54337,i__54331_54339);
figwheel.client.socket.handle_incoming_message.call(null,msg_54340);

var G__54341 = seq__54328_54336;
var G__54342 = chunk__54329_54337;
var G__54343 = count__54330_54338;
var G__54344 = (i__54331_54339 + (1));
seq__54328_54336 = G__54341;
chunk__54329_54337 = G__54342;
count__54330_54338 = G__54343;
i__54331_54339 = G__54344;
continue;
} else {
var temp__4657__auto___54345 = cljs.core.seq.call(null,seq__54328_54336);
if(temp__4657__auto___54345){
var seq__54328_54346__$1 = temp__4657__auto___54345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54328_54346__$1)){
var c__45247__auto___54347 = cljs.core.chunk_first.call(null,seq__54328_54346__$1);
var G__54348 = cljs.core.chunk_rest.call(null,seq__54328_54346__$1);
var G__54349 = c__45247__auto___54347;
var G__54350 = cljs.core.count.call(null,c__45247__auto___54347);
var G__54351 = (0);
seq__54328_54336 = G__54348;
chunk__54329_54337 = G__54349;
count__54330_54338 = G__54350;
i__54331_54339 = G__54351;
continue;
} else {
var msg_54352 = cljs.core.first.call(null,seq__54328_54346__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_54352);

var G__54353 = cljs.core.next.call(null,seq__54328_54346__$1);
var G__54354 = null;
var G__54355 = (0);
var G__54356 = (0);
seq__54328_54336 = G__54353;
chunk__54329_54337 = G__54354;
count__54330_54338 = G__54355;
i__54331_54339 = G__54356;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__45518__auto__ = [];
var len__45511__auto___54361 = arguments.length;
var i__45512__auto___54362 = (0);
while(true){
if((i__45512__auto___54362 < len__45511__auto___54361)){
args__45518__auto__.push((arguments[i__45512__auto___54362]));

var G__54363 = (i__45512__auto___54362 + (1));
i__45512__auto___54362 = G__54363;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__54358){
var map__54359 = p__54358;
var map__54359__$1 = ((((!((map__54359 == null)))?((((map__54359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54359):map__54359);
var opts = map__54359__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq54357){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54357));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e54365){if((e54365 instanceof Error)){
var e = e54365;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e54365;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__54369){
var map__54370 = p__54369;
var map__54370__$1 = ((((!((map__54370 == null)))?((((map__54370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54370):map__54370);
var msg_name = cljs.core.get.call(null,map__54370__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1490223446448