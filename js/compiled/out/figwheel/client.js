// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args55793 = [];
var len__45939__auto___55796 = arguments.length;
var i__45940__auto___55797 = (0);
while(true){
if((i__45940__auto___55797 < len__45939__auto___55796)){
args55793.push((arguments[i__45940__auto___55797]));

var G__55798 = (i__45940__auto___55797 + (1));
i__45940__auto___55797 = G__55798;
continue;
} else {
}
break;
}

var G__55795 = args55793.length;
switch (G__55795) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55793.length)].join('')));

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
var args__45946__auto__ = [];
var len__45939__auto___55801 = arguments.length;
var i__45940__auto___55802 = (0);
while(true){
if((i__45940__auto___55802 < len__45939__auto___55801)){
args__45946__auto__.push((arguments[i__45940__auto___55802]));

var G__55803 = (i__45940__auto___55802 + (1));
i__45940__auto___55802 = G__55803;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq55800){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55800));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__45946__auto__ = [];
var len__45939__auto___55805 = arguments.length;
var i__45940__auto___55806 = (0);
while(true){
if((i__45940__auto___55806 < len__45939__auto___55805)){
args__45946__auto__.push((arguments[i__45940__auto___55806]));

var G__55807 = (i__45940__auto___55806 + (1));
i__45940__auto___55806 = G__55807;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq55804){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55804));
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
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

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
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__55808){
var map__55811 = p__55808;
var map__55811__$1 = ((((!((map__55811 == null)))?((((map__55811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55811):map__55811);
var message = cljs.core.get.call(null,map__55811__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__55811__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__44826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__44826__auto__)){
return or__44826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__44814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__44814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__44814__auto__;
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
var c__48244__auto___55973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___55973,ch){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___55973,ch){
return (function (state_55942){
var state_val_55943 = (state_55942[(1)]);
if((state_val_55943 === (7))){
var inst_55938 = (state_55942[(2)]);
var state_55942__$1 = state_55942;
var statearr_55944_55974 = state_55942__$1;
(statearr_55944_55974[(2)] = inst_55938);

(statearr_55944_55974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (1))){
var state_55942__$1 = state_55942;
var statearr_55945_55975 = state_55942__$1;
(statearr_55945_55975[(2)] = null);

(statearr_55945_55975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (4))){
var inst_55895 = (state_55942[(7)]);
var inst_55895__$1 = (state_55942[(2)]);
var state_55942__$1 = (function (){var statearr_55946 = state_55942;
(statearr_55946[(7)] = inst_55895__$1);

return statearr_55946;
})();
if(cljs.core.truth_(inst_55895__$1)){
var statearr_55947_55976 = state_55942__$1;
(statearr_55947_55976[(1)] = (5));

} else {
var statearr_55948_55977 = state_55942__$1;
(statearr_55948_55977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (15))){
var inst_55902 = (state_55942[(8)]);
var inst_55917 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55902);
var inst_55918 = cljs.core.first.call(null,inst_55917);
var inst_55919 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_55918);
var inst_55920 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55919)].join('');
var inst_55921 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_55920);
var state_55942__$1 = state_55942;
var statearr_55949_55978 = state_55942__$1;
(statearr_55949_55978[(2)] = inst_55921);

(statearr_55949_55978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (13))){
var inst_55926 = (state_55942[(2)]);
var state_55942__$1 = state_55942;
var statearr_55950_55979 = state_55942__$1;
(statearr_55950_55979[(2)] = inst_55926);

(statearr_55950_55979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (6))){
var state_55942__$1 = state_55942;
var statearr_55951_55980 = state_55942__$1;
(statearr_55951_55980[(2)] = null);

(statearr_55951_55980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (17))){
var inst_55924 = (state_55942[(2)]);
var state_55942__$1 = state_55942;
var statearr_55952_55981 = state_55942__$1;
(statearr_55952_55981[(2)] = inst_55924);

(statearr_55952_55981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (3))){
var inst_55940 = (state_55942[(2)]);
var state_55942__$1 = state_55942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55942__$1,inst_55940);
} else {
if((state_val_55943 === (12))){
var inst_55901 = (state_55942[(9)]);
var inst_55915 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_55901,opts);
var state_55942__$1 = state_55942;
if(cljs.core.truth_(inst_55915)){
var statearr_55953_55982 = state_55942__$1;
(statearr_55953_55982[(1)] = (15));

} else {
var statearr_55954_55983 = state_55942__$1;
(statearr_55954_55983[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (2))){
var state_55942__$1 = state_55942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55942__$1,(4),ch);
} else {
if((state_val_55943 === (11))){
var inst_55902 = (state_55942[(8)]);
var inst_55907 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55908 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_55902);
var inst_55909 = cljs.core.async.timeout.call(null,(1000));
var inst_55910 = [inst_55908,inst_55909];
var inst_55911 = (new cljs.core.PersistentVector(null,2,(5),inst_55907,inst_55910,null));
var state_55942__$1 = state_55942;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55942__$1,(14),inst_55911);
} else {
if((state_val_55943 === (9))){
var inst_55902 = (state_55942[(8)]);
var inst_55928 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_55929 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55902);
var inst_55930 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55929);
var inst_55931 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55930)].join('');
var inst_55932 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_55931);
var state_55942__$1 = (function (){var statearr_55955 = state_55942;
(statearr_55955[(10)] = inst_55928);

return statearr_55955;
})();
var statearr_55956_55984 = state_55942__$1;
(statearr_55956_55984[(2)] = inst_55932);

(statearr_55956_55984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (5))){
var inst_55895 = (state_55942[(7)]);
var inst_55897 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_55898 = (new cljs.core.PersistentArrayMap(null,2,inst_55897,null));
var inst_55899 = (new cljs.core.PersistentHashSet(null,inst_55898,null));
var inst_55900 = figwheel.client.focus_msgs.call(null,inst_55899,inst_55895);
var inst_55901 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_55900);
var inst_55902 = cljs.core.first.call(null,inst_55900);
var inst_55903 = figwheel.client.autoload_QMARK_.call(null);
var state_55942__$1 = (function (){var statearr_55957 = state_55942;
(statearr_55957[(9)] = inst_55901);

(statearr_55957[(8)] = inst_55902);

return statearr_55957;
})();
if(cljs.core.truth_(inst_55903)){
var statearr_55958_55985 = state_55942__$1;
(statearr_55958_55985[(1)] = (8));

} else {
var statearr_55959_55986 = state_55942__$1;
(statearr_55959_55986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (14))){
var inst_55913 = (state_55942[(2)]);
var state_55942__$1 = state_55942;
var statearr_55960_55987 = state_55942__$1;
(statearr_55960_55987[(2)] = inst_55913);

(statearr_55960_55987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (16))){
var state_55942__$1 = state_55942;
var statearr_55961_55988 = state_55942__$1;
(statearr_55961_55988[(2)] = null);

(statearr_55961_55988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (10))){
var inst_55934 = (state_55942[(2)]);
var state_55942__$1 = (function (){var statearr_55962 = state_55942;
(statearr_55962[(11)] = inst_55934);

return statearr_55962;
})();
var statearr_55963_55989 = state_55942__$1;
(statearr_55963_55989[(2)] = null);

(statearr_55963_55989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55943 === (8))){
var inst_55901 = (state_55942[(9)]);
var inst_55905 = figwheel.client.reload_file_state_QMARK_.call(null,inst_55901,opts);
var state_55942__$1 = state_55942;
if(cljs.core.truth_(inst_55905)){
var statearr_55964_55990 = state_55942__$1;
(statearr_55964_55990[(1)] = (11));

} else {
var statearr_55965_55991 = state_55942__$1;
(statearr_55965_55991[(1)] = (12));

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
});})(c__48244__auto___55973,ch))
;
return ((function (switch__48132__auto__,c__48244__auto___55973,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__48133__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__48133__auto____0 = (function (){
var statearr_55969 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55969[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__48133__auto__);

(statearr_55969[(1)] = (1));

return statearr_55969;
});
var figwheel$client$file_reloader_plugin_$_state_machine__48133__auto____1 = (function (state_55942){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_55942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e55970){if((e55970 instanceof Object)){
var ex__48136__auto__ = e55970;
var statearr_55971_55992 = state_55942;
(statearr_55971_55992[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55993 = state_55942;
state_55942 = G__55993;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__48133__auto__ = function(state_55942){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__48133__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__48133__auto____1.call(this,state_55942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__48133__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__48133__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___55973,ch))
})();
var state__48246__auto__ = (function (){var statearr_55972 = f__48245__auto__.call(null);
(statearr_55972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___55973);

return statearr_55972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___55973,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__55994_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__55994_SHARP_));
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
var base_path_55997 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_55997){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e55996){if((e55996 instanceof Error)){
var e = e55996;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_55997], null));
} else {
var e = e55996;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_55997))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__55998){
var map__56007 = p__55998;
var map__56007__$1 = ((((!((map__56007 == null)))?((((map__56007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56007):map__56007);
var opts = map__56007__$1;
var build_id = cljs.core.get.call(null,map__56007__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__56007,map__56007__$1,opts,build_id){
return (function (p__56009){
var vec__56010 = p__56009;
var seq__56011 = cljs.core.seq.call(null,vec__56010);
var first__56012 = cljs.core.first.call(null,seq__56011);
var seq__56011__$1 = cljs.core.next.call(null,seq__56011);
var map__56013 = first__56012;
var map__56013__$1 = ((((!((map__56013 == null)))?((((map__56013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56013):map__56013);
var msg = map__56013__$1;
var msg_name = cljs.core.get.call(null,map__56013__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56011__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__56010,seq__56011,first__56012,seq__56011__$1,map__56013,map__56013__$1,msg,msg_name,_,map__56007,map__56007__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__56010,seq__56011,first__56012,seq__56011__$1,map__56013,map__56013__$1,msg,msg_name,_,map__56007,map__56007__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__56007,map__56007__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__56021){
var vec__56022 = p__56021;
var seq__56023 = cljs.core.seq.call(null,vec__56022);
var first__56024 = cljs.core.first.call(null,seq__56023);
var seq__56023__$1 = cljs.core.next.call(null,seq__56023);
var map__56025 = first__56024;
var map__56025__$1 = ((((!((map__56025 == null)))?((((map__56025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56025):map__56025);
var msg = map__56025__$1;
var msg_name = cljs.core.get.call(null,map__56025__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56023__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__56027){
var map__56039 = p__56027;
var map__56039__$1 = ((((!((map__56039 == null)))?((((map__56039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56039):map__56039);
var on_compile_warning = cljs.core.get.call(null,map__56039__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__56039__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__56039,map__56039__$1,on_compile_warning,on_compile_fail){
return (function (p__56041){
var vec__56042 = p__56041;
var seq__56043 = cljs.core.seq.call(null,vec__56042);
var first__56044 = cljs.core.first.call(null,seq__56043);
var seq__56043__$1 = cljs.core.next.call(null,seq__56043);
var map__56045 = first__56044;
var map__56045__$1 = ((((!((map__56045 == null)))?((((map__56045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56045):map__56045);
var msg = map__56045__$1;
var msg_name = cljs.core.get.call(null,map__56045__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56043__$1;
var pred__56047 = cljs.core._EQ_;
var expr__56048 = msg_name;
if(cljs.core.truth_(pred__56047.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__56048))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__56047.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__56048))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__56039,map__56039__$1,on_compile_warning,on_compile_fail))
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
var c__48244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto__,msg_hist,msg_names,msg){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto__,msg_hist,msg_names,msg){
return (function (state_56276){
var state_val_56277 = (state_56276[(1)]);
if((state_val_56277 === (7))){
var inst_56196 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
if(cljs.core.truth_(inst_56196)){
var statearr_56278_56328 = state_56276__$1;
(statearr_56278_56328[(1)] = (8));

} else {
var statearr_56279_56329 = state_56276__$1;
(statearr_56279_56329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (20))){
var inst_56270 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56280_56330 = state_56276__$1;
(statearr_56280_56330[(2)] = inst_56270);

(statearr_56280_56330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (27))){
var inst_56266 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56281_56331 = state_56276__$1;
(statearr_56281_56331[(2)] = inst_56266);

(statearr_56281_56331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (1))){
var inst_56189 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_56276__$1 = state_56276;
if(cljs.core.truth_(inst_56189)){
var statearr_56282_56332 = state_56276__$1;
(statearr_56282_56332[(1)] = (2));

} else {
var statearr_56283_56333 = state_56276__$1;
(statearr_56283_56333[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (24))){
var inst_56268 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56284_56334 = state_56276__$1;
(statearr_56284_56334[(2)] = inst_56268);

(statearr_56284_56334[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (4))){
var inst_56274 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56276__$1,inst_56274);
} else {
if((state_val_56277 === (15))){
var inst_56272 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56285_56335 = state_56276__$1;
(statearr_56285_56335[(2)] = inst_56272);

(statearr_56285_56335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (21))){
var inst_56225 = (state_56276[(2)]);
var inst_56226 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56227 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56226);
var state_56276__$1 = (function (){var statearr_56286 = state_56276;
(statearr_56286[(7)] = inst_56225);

return statearr_56286;
})();
var statearr_56287_56336 = state_56276__$1;
(statearr_56287_56336[(2)] = inst_56227);

(statearr_56287_56336[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (31))){
var inst_56255 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_56276__$1 = state_56276;
if(cljs.core.truth_(inst_56255)){
var statearr_56288_56337 = state_56276__$1;
(statearr_56288_56337[(1)] = (34));

} else {
var statearr_56289_56338 = state_56276__$1;
(statearr_56289_56338[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (32))){
var inst_56264 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56290_56339 = state_56276__$1;
(statearr_56290_56339[(2)] = inst_56264);

(statearr_56290_56339[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (33))){
var inst_56251 = (state_56276[(2)]);
var inst_56252 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56253 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56252);
var state_56276__$1 = (function (){var statearr_56291 = state_56276;
(statearr_56291[(8)] = inst_56251);

return statearr_56291;
})();
var statearr_56292_56340 = state_56276__$1;
(statearr_56292_56340[(2)] = inst_56253);

(statearr_56292_56340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (13))){
var inst_56210 = figwheel.client.heads_up.clear.call(null);
var state_56276__$1 = state_56276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56276__$1,(16),inst_56210);
} else {
if((state_val_56277 === (22))){
var inst_56231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56232 = figwheel.client.heads_up.append_warning_message.call(null,inst_56231);
var state_56276__$1 = state_56276;
var statearr_56293_56341 = state_56276__$1;
(statearr_56293_56341[(2)] = inst_56232);

(statearr_56293_56341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (36))){
var inst_56262 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56294_56342 = state_56276__$1;
(statearr_56294_56342[(2)] = inst_56262);

(statearr_56294_56342[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (29))){
var inst_56242 = (state_56276[(2)]);
var inst_56243 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56244 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56243);
var state_56276__$1 = (function (){var statearr_56295 = state_56276;
(statearr_56295[(9)] = inst_56242);

return statearr_56295;
})();
var statearr_56296_56343 = state_56276__$1;
(statearr_56296_56343[(2)] = inst_56244);

(statearr_56296_56343[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (6))){
var inst_56191 = (state_56276[(10)]);
var state_56276__$1 = state_56276;
var statearr_56297_56344 = state_56276__$1;
(statearr_56297_56344[(2)] = inst_56191);

(statearr_56297_56344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (28))){
var inst_56238 = (state_56276[(2)]);
var inst_56239 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56240 = figwheel.client.heads_up.display_warning.call(null,inst_56239);
var state_56276__$1 = (function (){var statearr_56298 = state_56276;
(statearr_56298[(11)] = inst_56238);

return statearr_56298;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56276__$1,(29),inst_56240);
} else {
if((state_val_56277 === (25))){
var inst_56236 = figwheel.client.heads_up.clear.call(null);
var state_56276__$1 = state_56276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56276__$1,(28),inst_56236);
} else {
if((state_val_56277 === (34))){
var inst_56257 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56276__$1 = state_56276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56276__$1,(37),inst_56257);
} else {
if((state_val_56277 === (17))){
var inst_56216 = (state_56276[(2)]);
var inst_56217 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56218 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56217);
var state_56276__$1 = (function (){var statearr_56299 = state_56276;
(statearr_56299[(12)] = inst_56216);

return statearr_56299;
})();
var statearr_56300_56345 = state_56276__$1;
(statearr_56300_56345[(2)] = inst_56218);

(statearr_56300_56345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (3))){
var inst_56208 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_56276__$1 = state_56276;
if(cljs.core.truth_(inst_56208)){
var statearr_56301_56346 = state_56276__$1;
(statearr_56301_56346[(1)] = (13));

} else {
var statearr_56302_56347 = state_56276__$1;
(statearr_56302_56347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (12))){
var inst_56204 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56303_56348 = state_56276__$1;
(statearr_56303_56348[(2)] = inst_56204);

(statearr_56303_56348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (2))){
var inst_56191 = (state_56276[(10)]);
var inst_56191__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_56276__$1 = (function (){var statearr_56304 = state_56276;
(statearr_56304[(10)] = inst_56191__$1);

return statearr_56304;
})();
if(cljs.core.truth_(inst_56191__$1)){
var statearr_56305_56349 = state_56276__$1;
(statearr_56305_56349[(1)] = (5));

} else {
var statearr_56306_56350 = state_56276__$1;
(statearr_56306_56350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (23))){
var inst_56234 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_56276__$1 = state_56276;
if(cljs.core.truth_(inst_56234)){
var statearr_56307_56351 = state_56276__$1;
(statearr_56307_56351[(1)] = (25));

} else {
var statearr_56308_56352 = state_56276__$1;
(statearr_56308_56352[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (35))){
var state_56276__$1 = state_56276;
var statearr_56309_56353 = state_56276__$1;
(statearr_56309_56353[(2)] = null);

(statearr_56309_56353[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (19))){
var inst_56229 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_56276__$1 = state_56276;
if(cljs.core.truth_(inst_56229)){
var statearr_56310_56354 = state_56276__$1;
(statearr_56310_56354[(1)] = (22));

} else {
var statearr_56311_56355 = state_56276__$1;
(statearr_56311_56355[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (11))){
var inst_56200 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56312_56356 = state_56276__$1;
(statearr_56312_56356[(2)] = inst_56200);

(statearr_56312_56356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (9))){
var inst_56202 = figwheel.client.heads_up.clear.call(null);
var state_56276__$1 = state_56276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56276__$1,(12),inst_56202);
} else {
if((state_val_56277 === (5))){
var inst_56193 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_56276__$1 = state_56276;
var statearr_56313_56357 = state_56276__$1;
(statearr_56313_56357[(2)] = inst_56193);

(statearr_56313_56357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (14))){
var inst_56220 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_56276__$1 = state_56276;
if(cljs.core.truth_(inst_56220)){
var statearr_56314_56358 = state_56276__$1;
(statearr_56314_56358[(1)] = (18));

} else {
var statearr_56315_56359 = state_56276__$1;
(statearr_56315_56359[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (26))){
var inst_56246 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_56276__$1 = state_56276;
if(cljs.core.truth_(inst_56246)){
var statearr_56316_56360 = state_56276__$1;
(statearr_56316_56360[(1)] = (30));

} else {
var statearr_56317_56361 = state_56276__$1;
(statearr_56317_56361[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (16))){
var inst_56212 = (state_56276[(2)]);
var inst_56213 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56214 = figwheel.client.heads_up.display_exception.call(null,inst_56213);
var state_56276__$1 = (function (){var statearr_56318 = state_56276;
(statearr_56318[(13)] = inst_56212);

return statearr_56318;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56276__$1,(17),inst_56214);
} else {
if((state_val_56277 === (30))){
var inst_56248 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56249 = figwheel.client.heads_up.display_warning.call(null,inst_56248);
var state_56276__$1 = state_56276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56276__$1,(33),inst_56249);
} else {
if((state_val_56277 === (10))){
var inst_56206 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56319_56362 = state_56276__$1;
(statearr_56319_56362[(2)] = inst_56206);

(statearr_56319_56362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (18))){
var inst_56222 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56223 = figwheel.client.heads_up.display_exception.call(null,inst_56222);
var state_56276__$1 = state_56276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56276__$1,(21),inst_56223);
} else {
if((state_val_56277 === (37))){
var inst_56259 = (state_56276[(2)]);
var state_56276__$1 = state_56276;
var statearr_56320_56363 = state_56276__$1;
(statearr_56320_56363[(2)] = inst_56259);

(statearr_56320_56363[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56277 === (8))){
var inst_56198 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56276__$1 = state_56276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56276__$1,(11),inst_56198);
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
});})(c__48244__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__48132__auto__,c__48244__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48133__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48133__auto____0 = (function (){
var statearr_56324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56324[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48133__auto__);

(statearr_56324[(1)] = (1));

return statearr_56324;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48133__auto____1 = (function (state_56276){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_56276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e56325){if((e56325 instanceof Object)){
var ex__48136__auto__ = e56325;
var statearr_56326_56364 = state_56276;
(statearr_56326_56364[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56365 = state_56276;
state_56276 = G__56365;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48133__auto__ = function(state_56276){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48133__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48133__auto____1.call(this,state_56276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48133__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48133__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto__,msg_hist,msg_names,msg))
})();
var state__48246__auto__ = (function (){var statearr_56327 = f__48245__auto__.call(null);
(statearr_56327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto__);

return statearr_56327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto__,msg_hist,msg_names,msg))
);

return c__48244__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__48244__auto___56428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___56428,ch){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___56428,ch){
return (function (state_56411){
var state_val_56412 = (state_56411[(1)]);
if((state_val_56412 === (1))){
var state_56411__$1 = state_56411;
var statearr_56413_56429 = state_56411__$1;
(statearr_56413_56429[(2)] = null);

(statearr_56413_56429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56412 === (2))){
var state_56411__$1 = state_56411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56411__$1,(4),ch);
} else {
if((state_val_56412 === (3))){
var inst_56409 = (state_56411[(2)]);
var state_56411__$1 = state_56411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56411__$1,inst_56409);
} else {
if((state_val_56412 === (4))){
var inst_56399 = (state_56411[(7)]);
var inst_56399__$1 = (state_56411[(2)]);
var state_56411__$1 = (function (){var statearr_56414 = state_56411;
(statearr_56414[(7)] = inst_56399__$1);

return statearr_56414;
})();
if(cljs.core.truth_(inst_56399__$1)){
var statearr_56415_56430 = state_56411__$1;
(statearr_56415_56430[(1)] = (5));

} else {
var statearr_56416_56431 = state_56411__$1;
(statearr_56416_56431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56412 === (5))){
var inst_56399 = (state_56411[(7)]);
var inst_56401 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_56399);
var state_56411__$1 = state_56411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56411__$1,(8),inst_56401);
} else {
if((state_val_56412 === (6))){
var state_56411__$1 = state_56411;
var statearr_56417_56432 = state_56411__$1;
(statearr_56417_56432[(2)] = null);

(statearr_56417_56432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56412 === (7))){
var inst_56407 = (state_56411[(2)]);
var state_56411__$1 = state_56411;
var statearr_56418_56433 = state_56411__$1;
(statearr_56418_56433[(2)] = inst_56407);

(statearr_56418_56433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56412 === (8))){
var inst_56403 = (state_56411[(2)]);
var state_56411__$1 = (function (){var statearr_56419 = state_56411;
(statearr_56419[(8)] = inst_56403);

return statearr_56419;
})();
var statearr_56420_56434 = state_56411__$1;
(statearr_56420_56434[(2)] = null);

(statearr_56420_56434[(1)] = (2));


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
});})(c__48244__auto___56428,ch))
;
return ((function (switch__48132__auto__,c__48244__auto___56428,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__48133__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__48133__auto____0 = (function (){
var statearr_56424 = [null,null,null,null,null,null,null,null,null];
(statearr_56424[(0)] = figwheel$client$heads_up_plugin_$_state_machine__48133__auto__);

(statearr_56424[(1)] = (1));

return statearr_56424;
});
var figwheel$client$heads_up_plugin_$_state_machine__48133__auto____1 = (function (state_56411){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_56411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e56425){if((e56425 instanceof Object)){
var ex__48136__auto__ = e56425;
var statearr_56426_56435 = state_56411;
(statearr_56426_56435[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56436 = state_56411;
state_56411 = G__56436;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__48133__auto__ = function(state_56411){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__48133__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__48133__auto____1.call(this,state_56411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__48133__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__48133__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___56428,ch))
})();
var state__48246__auto__ = (function (){var statearr_56427 = f__48245__auto__.call(null);
(statearr_56427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___56428);

return statearr_56427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___56428,ch))
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
var c__48244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto__){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto__){
return (function (state_56457){
var state_val_56458 = (state_56457[(1)]);
if((state_val_56458 === (1))){
var inst_56452 = cljs.core.async.timeout.call(null,(3000));
var state_56457__$1 = state_56457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56457__$1,(2),inst_56452);
} else {
if((state_val_56458 === (2))){
var inst_56454 = (state_56457[(2)]);
var inst_56455 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_56457__$1 = (function (){var statearr_56459 = state_56457;
(statearr_56459[(7)] = inst_56454);

return statearr_56459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56457__$1,inst_56455);
} else {
return null;
}
}
});})(c__48244__auto__))
;
return ((function (switch__48132__auto__,c__48244__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__48133__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__48133__auto____0 = (function (){
var statearr_56463 = [null,null,null,null,null,null,null,null];
(statearr_56463[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__48133__auto__);

(statearr_56463[(1)] = (1));

return statearr_56463;
});
var figwheel$client$enforce_project_plugin_$_state_machine__48133__auto____1 = (function (state_56457){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_56457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e56464){if((e56464 instanceof Object)){
var ex__48136__auto__ = e56464;
var statearr_56465_56467 = state_56457;
(statearr_56465_56467[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56468 = state_56457;
state_56457 = G__56468;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__48133__auto__ = function(state_56457){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__48133__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__48133__auto____1.call(this,state_56457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__48133__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__48133__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto__))
})();
var state__48246__auto__ = (function (){var statearr_56466 = f__48245__auto__.call(null);
(statearr_56466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto__);

return statearr_56466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto__))
);

return c__48244__auto__;
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
var c__48244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto__,figwheel_version,temp__4657__auto__){
return (function (state_56491){
var state_val_56492 = (state_56491[(1)]);
if((state_val_56492 === (1))){
var inst_56485 = cljs.core.async.timeout.call(null,(2000));
var state_56491__$1 = state_56491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56491__$1,(2),inst_56485);
} else {
if((state_val_56492 === (2))){
var inst_56487 = (state_56491[(2)]);
var inst_56488 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_56489 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_56488);
var state_56491__$1 = (function (){var statearr_56493 = state_56491;
(statearr_56493[(7)] = inst_56487);

return statearr_56493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56491__$1,inst_56489);
} else {
return null;
}
}
});})(c__48244__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__48132__auto__,c__48244__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48133__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48133__auto____0 = (function (){
var statearr_56497 = [null,null,null,null,null,null,null,null];
(statearr_56497[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48133__auto__);

(statearr_56497[(1)] = (1));

return statearr_56497;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48133__auto____1 = (function (state_56491){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_56491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e56498){if((e56498 instanceof Object)){
var ex__48136__auto__ = e56498;
var statearr_56499_56501 = state_56491;
(statearr_56499_56501[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56502 = state_56491;
state_56491 = G__56502;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48133__auto__ = function(state_56491){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48133__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48133__auto____1.call(this,state_56491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48133__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48133__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto__,figwheel_version,temp__4657__auto__))
})();
var state__48246__auto__ = (function (){var statearr_56500 = f__48245__auto__.call(null);
(statearr_56500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto__);

return statearr_56500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto__,figwheel_version,temp__4657__auto__))
);

return c__48244__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__56503){
var map__56507 = p__56503;
var map__56507__$1 = ((((!((map__56507 == null)))?((((map__56507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56507):map__56507);
var file = cljs.core.get.call(null,map__56507__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__56507__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__56507__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__56509 = "";
var G__56509__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56509),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__56509);
var G__56509__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56509__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__56509__$1);
if(cljs.core.truth_((function (){var and__44814__auto__ = line;
if(cljs.core.truth_(and__44814__auto__)){
return column;
} else {
return and__44814__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56509__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__56509__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__56510){
var map__56517 = p__56510;
var map__56517__$1 = ((((!((map__56517 == null)))?((((map__56517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56517):map__56517);
var ed = map__56517__$1;
var formatted_exception = cljs.core.get.call(null,map__56517__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__56517__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__56517__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__56519_56523 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__56520_56524 = null;
var count__56521_56525 = (0);
var i__56522_56526 = (0);
while(true){
if((i__56522_56526 < count__56521_56525)){
var msg_56527 = cljs.core._nth.call(null,chunk__56520_56524,i__56522_56526);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56527);

var G__56528 = seq__56519_56523;
var G__56529 = chunk__56520_56524;
var G__56530 = count__56521_56525;
var G__56531 = (i__56522_56526 + (1));
seq__56519_56523 = G__56528;
chunk__56520_56524 = G__56529;
count__56521_56525 = G__56530;
i__56522_56526 = G__56531;
continue;
} else {
var temp__4657__auto___56532 = cljs.core.seq.call(null,seq__56519_56523);
if(temp__4657__auto___56532){
var seq__56519_56533__$1 = temp__4657__auto___56532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56519_56533__$1)){
var c__45645__auto___56534 = cljs.core.chunk_first.call(null,seq__56519_56533__$1);
var G__56535 = cljs.core.chunk_rest.call(null,seq__56519_56533__$1);
var G__56536 = c__45645__auto___56534;
var G__56537 = cljs.core.count.call(null,c__45645__auto___56534);
var G__56538 = (0);
seq__56519_56523 = G__56535;
chunk__56520_56524 = G__56536;
count__56521_56525 = G__56537;
i__56522_56526 = G__56538;
continue;
} else {
var msg_56539 = cljs.core.first.call(null,seq__56519_56533__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56539);

var G__56540 = cljs.core.next.call(null,seq__56519_56533__$1);
var G__56541 = null;
var G__56542 = (0);
var G__56543 = (0);
seq__56519_56523 = G__56540;
chunk__56520_56524 = G__56541;
count__56521_56525 = G__56542;
i__56522_56526 = G__56543;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__56544){
var map__56547 = p__56544;
var map__56547__$1 = ((((!((map__56547 == null)))?((((map__56547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56547):map__56547);
var w = map__56547__$1;
var message = cljs.core.get.call(null,map__56547__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__44814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__44814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__44814__auto__;
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
var seq__56559 = cljs.core.seq.call(null,plugins);
var chunk__56560 = null;
var count__56561 = (0);
var i__56562 = (0);
while(true){
if((i__56562 < count__56561)){
var vec__56563 = cljs.core._nth.call(null,chunk__56560,i__56562);
var k = cljs.core.nth.call(null,vec__56563,(0),null);
var plugin = cljs.core.nth.call(null,vec__56563,(1),null);
if(cljs.core.truth_(plugin)){
var pl_56569 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__56559,chunk__56560,count__56561,i__56562,pl_56569,vec__56563,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_56569.call(null,msg_hist);
});})(seq__56559,chunk__56560,count__56561,i__56562,pl_56569,vec__56563,k,plugin))
);
} else {
}

var G__56570 = seq__56559;
var G__56571 = chunk__56560;
var G__56572 = count__56561;
var G__56573 = (i__56562 + (1));
seq__56559 = G__56570;
chunk__56560 = G__56571;
count__56561 = G__56572;
i__56562 = G__56573;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56559);
if(temp__4657__auto__){
var seq__56559__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56559__$1)){
var c__45645__auto__ = cljs.core.chunk_first.call(null,seq__56559__$1);
var G__56574 = cljs.core.chunk_rest.call(null,seq__56559__$1);
var G__56575 = c__45645__auto__;
var G__56576 = cljs.core.count.call(null,c__45645__auto__);
var G__56577 = (0);
seq__56559 = G__56574;
chunk__56560 = G__56575;
count__56561 = G__56576;
i__56562 = G__56577;
continue;
} else {
var vec__56566 = cljs.core.first.call(null,seq__56559__$1);
var k = cljs.core.nth.call(null,vec__56566,(0),null);
var plugin = cljs.core.nth.call(null,vec__56566,(1),null);
if(cljs.core.truth_(plugin)){
var pl_56578 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__56559,chunk__56560,count__56561,i__56562,pl_56578,vec__56566,k,plugin,seq__56559__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_56578.call(null,msg_hist);
});})(seq__56559,chunk__56560,count__56561,i__56562,pl_56578,vec__56566,k,plugin,seq__56559__$1,temp__4657__auto__))
);
} else {
}

var G__56579 = cljs.core.next.call(null,seq__56559__$1);
var G__56580 = null;
var G__56581 = (0);
var G__56582 = (0);
seq__56559 = G__56579;
chunk__56560 = G__56580;
count__56561 = G__56581;
i__56562 = G__56582;
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
var args56583 = [];
var len__45939__auto___56590 = arguments.length;
var i__45940__auto___56591 = (0);
while(true){
if((i__45940__auto___56591 < len__45939__auto___56590)){
args56583.push((arguments[i__45940__auto___56591]));

var G__56592 = (i__45940__auto___56591 + (1));
i__45940__auto___56591 = G__56592;
continue;
} else {
}
break;
}

var G__56585 = args56583.length;
switch (G__56585) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args56583.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__56586_56594 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__56587_56595 = null;
var count__56588_56596 = (0);
var i__56589_56597 = (0);
while(true){
if((i__56589_56597 < count__56588_56596)){
var msg_56598 = cljs.core._nth.call(null,chunk__56587_56595,i__56589_56597);
figwheel.client.socket.handle_incoming_message.call(null,msg_56598);

var G__56599 = seq__56586_56594;
var G__56600 = chunk__56587_56595;
var G__56601 = count__56588_56596;
var G__56602 = (i__56589_56597 + (1));
seq__56586_56594 = G__56599;
chunk__56587_56595 = G__56600;
count__56588_56596 = G__56601;
i__56589_56597 = G__56602;
continue;
} else {
var temp__4657__auto___56603 = cljs.core.seq.call(null,seq__56586_56594);
if(temp__4657__auto___56603){
var seq__56586_56604__$1 = temp__4657__auto___56603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56586_56604__$1)){
var c__45645__auto___56605 = cljs.core.chunk_first.call(null,seq__56586_56604__$1);
var G__56606 = cljs.core.chunk_rest.call(null,seq__56586_56604__$1);
var G__56607 = c__45645__auto___56605;
var G__56608 = cljs.core.count.call(null,c__45645__auto___56605);
var G__56609 = (0);
seq__56586_56594 = G__56606;
chunk__56587_56595 = G__56607;
count__56588_56596 = G__56608;
i__56589_56597 = G__56609;
continue;
} else {
var msg_56610 = cljs.core.first.call(null,seq__56586_56604__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_56610);

var G__56611 = cljs.core.next.call(null,seq__56586_56604__$1);
var G__56612 = null;
var G__56613 = (0);
var G__56614 = (0);
seq__56586_56594 = G__56611;
chunk__56587_56595 = G__56612;
count__56588_56596 = G__56613;
i__56589_56597 = G__56614;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__45946__auto__ = [];
var len__45939__auto___56619 = arguments.length;
var i__45940__auto___56620 = (0);
while(true){
if((i__45940__auto___56620 < len__45939__auto___56619)){
args__45946__auto__.push((arguments[i__45940__auto___56620]));

var G__56621 = (i__45940__auto___56620 + (1));
i__45940__auto___56620 = G__56621;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__56616){
var map__56617 = p__56616;
var map__56617__$1 = ((((!((map__56617 == null)))?((((map__56617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56617):map__56617);
var opts = map__56617__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq56615){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56615));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e56623){if((e56623 instanceof Error)){
var e = e56623;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e56623;

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
return (function (p__56627){
var map__56628 = p__56627;
var map__56628__$1 = ((((!((map__56628 == null)))?((((map__56628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56628):map__56628);
var msg_name = cljs.core.get.call(null,map__56628__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1491522850338