// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__45437__auto__,writer__45438__auto__,opt__45439__auto__){
return cljs.core._write.call(null,writer__45438__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54002 = arguments.length;
var i__45940__auto___54003 = (0);
while(true){
if((i__45940__auto___54003 < len__45939__auto___54002)){
args__45946__auto__.push((arguments[i__45940__auto___54003]));

var G__54004 = (i__45940__auto___54003 + (1));
i__45940__auto___54003 = G__54004;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq54001){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54001));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54006 = arguments.length;
var i__45940__auto___54007 = (0);
while(true){
if((i__45940__auto___54007 < len__45939__auto___54006)){
args__45946__auto__.push((arguments[i__45940__auto___54007]));

var G__54008 = (i__45940__auto___54007 + (1));
i__45940__auto___54007 = G__54008;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq54005){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54005));
});

var g_QMARK__54009 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_54010 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__54009){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__54009))
,null));
var mkg_54011 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__54009,g_54010){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__54009,g_54010))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__54009,g_54010,mkg_54011){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__54009).call(null,x);
});})(g_QMARK__54009,g_54010,mkg_54011))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__54009,g_54010,mkg_54011){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_54011).call(null,gfn);
});})(g_QMARK__54009,g_54010,mkg_54011))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__54009,g_54010,mkg_54011){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_54010).call(null,generator);
});})(g_QMARK__54009,g_54010,mkg_54011))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__53973__auto___54031 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__53973__auto___54031){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54032 = arguments.length;
var i__45940__auto___54033 = (0);
while(true){
if((i__45940__auto___54033 < len__45939__auto___54032)){
args__45946__auto__.push((arguments[i__45940__auto___54033]));

var G__54034 = (i__45940__auto___54033 + (1));
i__45940__auto___54033 = G__54034;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54031))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54031){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54031),args);
});})(g__53973__auto___54031))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__53973__auto___54031){
return (function (seq54012){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54012));
});})(g__53973__auto___54031))
;


var g__53973__auto___54035 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__53973__auto___54035){
return (function cljs$spec$impl$gen$list(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54036 = arguments.length;
var i__45940__auto___54037 = (0);
while(true){
if((i__45940__auto___54037 < len__45939__auto___54036)){
args__45946__auto__.push((arguments[i__45940__auto___54037]));

var G__54038 = (i__45940__auto___54037 + (1));
i__45940__auto___54037 = G__54038;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54035))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54035){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54035),args);
});})(g__53973__auto___54035))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__53973__auto___54035){
return (function (seq54013){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54013));
});})(g__53973__auto___54035))
;


var g__53973__auto___54039 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__53973__auto___54039){
return (function cljs$spec$impl$gen$map(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54040 = arguments.length;
var i__45940__auto___54041 = (0);
while(true){
if((i__45940__auto___54041 < len__45939__auto___54040)){
args__45946__auto__.push((arguments[i__45940__auto___54041]));

var G__54042 = (i__45940__auto___54041 + (1));
i__45940__auto___54041 = G__54042;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54039))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54039){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54039),args);
});})(g__53973__auto___54039))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__53973__auto___54039){
return (function (seq54014){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54014));
});})(g__53973__auto___54039))
;


var g__53973__auto___54043 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__53973__auto___54043){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54044 = arguments.length;
var i__45940__auto___54045 = (0);
while(true){
if((i__45940__auto___54045 < len__45939__auto___54044)){
args__45946__auto__.push((arguments[i__45940__auto___54045]));

var G__54046 = (i__45940__auto___54045 + (1));
i__45940__auto___54045 = G__54046;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54043))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54043){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54043),args);
});})(g__53973__auto___54043))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__53973__auto___54043){
return (function (seq54015){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54015));
});})(g__53973__auto___54043))
;


var g__53973__auto___54047 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__53973__auto___54047){
return (function cljs$spec$impl$gen$set(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54048 = arguments.length;
var i__45940__auto___54049 = (0);
while(true){
if((i__45940__auto___54049 < len__45939__auto___54048)){
args__45946__auto__.push((arguments[i__45940__auto___54049]));

var G__54050 = (i__45940__auto___54049 + (1));
i__45940__auto___54049 = G__54050;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54047))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54047){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54047),args);
});})(g__53973__auto___54047))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__53973__auto___54047){
return (function (seq54016){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54016));
});})(g__53973__auto___54047))
;


var g__53973__auto___54051 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__53973__auto___54051){
return (function cljs$spec$impl$gen$vector(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54052 = arguments.length;
var i__45940__auto___54053 = (0);
while(true){
if((i__45940__auto___54053 < len__45939__auto___54052)){
args__45946__auto__.push((arguments[i__45940__auto___54053]));

var G__54054 = (i__45940__auto___54053 + (1));
i__45940__auto___54053 = G__54054;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54051))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54051){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54051),args);
});})(g__53973__auto___54051))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__53973__auto___54051){
return (function (seq54017){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54017));
});})(g__53973__auto___54051))
;


var g__53973__auto___54055 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__53973__auto___54055){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54056 = arguments.length;
var i__45940__auto___54057 = (0);
while(true){
if((i__45940__auto___54057 < len__45939__auto___54056)){
args__45946__auto__.push((arguments[i__45940__auto___54057]));

var G__54058 = (i__45940__auto___54057 + (1));
i__45940__auto___54057 = G__54058;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54055))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54055){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54055),args);
});})(g__53973__auto___54055))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__53973__auto___54055){
return (function (seq54018){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54018));
});})(g__53973__auto___54055))
;


var g__53973__auto___54059 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__53973__auto___54059){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54060 = arguments.length;
var i__45940__auto___54061 = (0);
while(true){
if((i__45940__auto___54061 < len__45939__auto___54060)){
args__45946__auto__.push((arguments[i__45940__auto___54061]));

var G__54062 = (i__45940__auto___54061 + (1));
i__45940__auto___54061 = G__54062;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54059))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54059){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54059),args);
});})(g__53973__auto___54059))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__53973__auto___54059){
return (function (seq54019){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54019));
});})(g__53973__auto___54059))
;


var g__53973__auto___54063 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__53973__auto___54063){
return (function cljs$spec$impl$gen$elements(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54064 = arguments.length;
var i__45940__auto___54065 = (0);
while(true){
if((i__45940__auto___54065 < len__45939__auto___54064)){
args__45946__auto__.push((arguments[i__45940__auto___54065]));

var G__54066 = (i__45940__auto___54065 + (1));
i__45940__auto___54065 = G__54066;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54063))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54063){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54063),args);
});})(g__53973__auto___54063))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__53973__auto___54063){
return (function (seq54020){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54020));
});})(g__53973__auto___54063))
;


var g__53973__auto___54067 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__53973__auto___54067){
return (function cljs$spec$impl$gen$bind(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54068 = arguments.length;
var i__45940__auto___54069 = (0);
while(true){
if((i__45940__auto___54069 < len__45939__auto___54068)){
args__45946__auto__.push((arguments[i__45940__auto___54069]));

var G__54070 = (i__45940__auto___54069 + (1));
i__45940__auto___54069 = G__54070;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54067))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54067){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54067),args);
});})(g__53973__auto___54067))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__53973__auto___54067){
return (function (seq54021){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54021));
});})(g__53973__auto___54067))
;


var g__53973__auto___54071 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__53973__auto___54071){
return (function cljs$spec$impl$gen$choose(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54072 = arguments.length;
var i__45940__auto___54073 = (0);
while(true){
if((i__45940__auto___54073 < len__45939__auto___54072)){
args__45946__auto__.push((arguments[i__45940__auto___54073]));

var G__54074 = (i__45940__auto___54073 + (1));
i__45940__auto___54073 = G__54074;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54071))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54071){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54071),args);
});})(g__53973__auto___54071))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__53973__auto___54071){
return (function (seq54022){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54022));
});})(g__53973__auto___54071))
;


var g__53973__auto___54075 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__53973__auto___54075){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54076 = arguments.length;
var i__45940__auto___54077 = (0);
while(true){
if((i__45940__auto___54077 < len__45939__auto___54076)){
args__45946__auto__.push((arguments[i__45940__auto___54077]));

var G__54078 = (i__45940__auto___54077 + (1));
i__45940__auto___54077 = G__54078;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54075))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54075){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54075),args);
});})(g__53973__auto___54075))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__53973__auto___54075){
return (function (seq54023){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54023));
});})(g__53973__auto___54075))
;


var g__53973__auto___54079 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__53973__auto___54079){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54080 = arguments.length;
var i__45940__auto___54081 = (0);
while(true){
if((i__45940__auto___54081 < len__45939__auto___54080)){
args__45946__auto__.push((arguments[i__45940__auto___54081]));

var G__54082 = (i__45940__auto___54081 + (1));
i__45940__auto___54081 = G__54082;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54079))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54079){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54079),args);
});})(g__53973__auto___54079))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__53973__auto___54079){
return (function (seq54024){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54024));
});})(g__53973__auto___54079))
;


var g__53973__auto___54083 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__53973__auto___54083){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54084 = arguments.length;
var i__45940__auto___54085 = (0);
while(true){
if((i__45940__auto___54085 < len__45939__auto___54084)){
args__45946__auto__.push((arguments[i__45940__auto___54085]));

var G__54086 = (i__45940__auto___54085 + (1));
i__45940__auto___54085 = G__54086;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54083))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54083){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54083),args);
});})(g__53973__auto___54083))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__53973__auto___54083){
return (function (seq54025){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54025));
});})(g__53973__auto___54083))
;


var g__53973__auto___54087 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__53973__auto___54087){
return (function cljs$spec$impl$gen$sample(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54088 = arguments.length;
var i__45940__auto___54089 = (0);
while(true){
if((i__45940__auto___54089 < len__45939__auto___54088)){
args__45946__auto__.push((arguments[i__45940__auto___54089]));

var G__54090 = (i__45940__auto___54089 + (1));
i__45940__auto___54089 = G__54090;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54087))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54087){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54087),args);
});})(g__53973__auto___54087))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__53973__auto___54087){
return (function (seq54026){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54026));
});})(g__53973__auto___54087))
;


var g__53973__auto___54091 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__53973__auto___54091){
return (function cljs$spec$impl$gen$return(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54092 = arguments.length;
var i__45940__auto___54093 = (0);
while(true){
if((i__45940__auto___54093 < len__45939__auto___54092)){
args__45946__auto__.push((arguments[i__45940__auto___54093]));

var G__54094 = (i__45940__auto___54093 + (1));
i__45940__auto___54093 = G__54094;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54091))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54091){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54091),args);
});})(g__53973__auto___54091))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__53973__auto___54091){
return (function (seq54027){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54027));
});})(g__53973__auto___54091))
;


var g__53973__auto___54095 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__53973__auto___54095){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54096 = arguments.length;
var i__45940__auto___54097 = (0);
while(true){
if((i__45940__auto___54097 < len__45939__auto___54096)){
args__45946__auto__.push((arguments[i__45940__auto___54097]));

var G__54098 = (i__45940__auto___54097 + (1));
i__45940__auto___54097 = G__54098;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54095))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54095){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54095),args);
});})(g__53973__auto___54095))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__53973__auto___54095){
return (function (seq54028){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54028));
});})(g__53973__auto___54095))
;


var g__53973__auto___54099 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__53973__auto___54099){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54100 = arguments.length;
var i__45940__auto___54101 = (0);
while(true){
if((i__45940__auto___54101 < len__45939__auto___54100)){
args__45946__auto__.push((arguments[i__45940__auto___54101]));

var G__54102 = (i__45940__auto___54101 + (1));
i__45940__auto___54101 = G__54102;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54099))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54099){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54099),args);
});})(g__53973__auto___54099))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__53973__auto___54099){
return (function (seq54029){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54029));
});})(g__53973__auto___54099))
;


var g__53973__auto___54103 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__53973__auto___54103){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54104 = arguments.length;
var i__45940__auto___54105 = (0);
while(true){
if((i__45940__auto___54105 < len__45939__auto___54104)){
args__45946__auto__.push((arguments[i__45940__auto___54105]));

var G__54106 = (i__45940__auto___54105 + (1));
i__45940__auto___54105 = G__54106;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53973__auto___54103))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53973__auto___54103){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53973__auto___54103),args);
});})(g__53973__auto___54103))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__53973__auto___54103){
return (function (seq54030){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54030));
});})(g__53973__auto___54103))
;

var g__53986__auto___54128 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__53986__auto___54128){
return (function cljs$spec$impl$gen$any(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54129 = arguments.length;
var i__45940__auto___54130 = (0);
while(true){
if((i__45940__auto___54130 < len__45939__auto___54129)){
args__45946__auto__.push((arguments[i__45940__auto___54130]));

var G__54131 = (i__45940__auto___54130 + (1));
i__45940__auto___54130 = G__54131;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54128))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54128){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54128);
});})(g__53986__auto___54128))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__53986__auto___54128){
return (function (seq54107){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54107));
});})(g__53986__auto___54128))
;


var g__53986__auto___54132 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__53986__auto___54132){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54133 = arguments.length;
var i__45940__auto___54134 = (0);
while(true){
if((i__45940__auto___54134 < len__45939__auto___54133)){
args__45946__auto__.push((arguments[i__45940__auto___54134]));

var G__54135 = (i__45940__auto___54134 + (1));
i__45940__auto___54134 = G__54135;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54132))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54132){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54132);
});})(g__53986__auto___54132))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__53986__auto___54132){
return (function (seq54108){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54108));
});})(g__53986__auto___54132))
;


var g__53986__auto___54136 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__53986__auto___54136){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54137 = arguments.length;
var i__45940__auto___54138 = (0);
while(true){
if((i__45940__auto___54138 < len__45939__auto___54137)){
args__45946__auto__.push((arguments[i__45940__auto___54138]));

var G__54139 = (i__45940__auto___54138 + (1));
i__45940__auto___54138 = G__54139;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54136))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54136){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54136);
});})(g__53986__auto___54136))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__53986__auto___54136){
return (function (seq54109){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54109));
});})(g__53986__auto___54136))
;


var g__53986__auto___54140 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__53986__auto___54140){
return (function cljs$spec$impl$gen$char(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54141 = arguments.length;
var i__45940__auto___54142 = (0);
while(true){
if((i__45940__auto___54142 < len__45939__auto___54141)){
args__45946__auto__.push((arguments[i__45940__auto___54142]));

var G__54143 = (i__45940__auto___54142 + (1));
i__45940__auto___54142 = G__54143;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54140))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54140){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54140);
});})(g__53986__auto___54140))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__53986__auto___54140){
return (function (seq54110){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54110));
});})(g__53986__auto___54140))
;


var g__53986__auto___54144 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__53986__auto___54144){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54145 = arguments.length;
var i__45940__auto___54146 = (0);
while(true){
if((i__45940__auto___54146 < len__45939__auto___54145)){
args__45946__auto__.push((arguments[i__45940__auto___54146]));

var G__54147 = (i__45940__auto___54146 + (1));
i__45940__auto___54146 = G__54147;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54144))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54144){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54144);
});})(g__53986__auto___54144))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__53986__auto___54144){
return (function (seq54111){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54111));
});})(g__53986__auto___54144))
;


var g__53986__auto___54148 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__53986__auto___54148){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54149 = arguments.length;
var i__45940__auto___54150 = (0);
while(true){
if((i__45940__auto___54150 < len__45939__auto___54149)){
args__45946__auto__.push((arguments[i__45940__auto___54150]));

var G__54151 = (i__45940__auto___54150 + (1));
i__45940__auto___54150 = G__54151;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54148))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54148){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54148);
});})(g__53986__auto___54148))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__53986__auto___54148){
return (function (seq54112){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54112));
});})(g__53986__auto___54148))
;


var g__53986__auto___54152 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__53986__auto___54152){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54153 = arguments.length;
var i__45940__auto___54154 = (0);
while(true){
if((i__45940__auto___54154 < len__45939__auto___54153)){
args__45946__auto__.push((arguments[i__45940__auto___54154]));

var G__54155 = (i__45940__auto___54154 + (1));
i__45940__auto___54154 = G__54155;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54152))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54152){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54152);
});})(g__53986__auto___54152))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__53986__auto___54152){
return (function (seq54113){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54113));
});})(g__53986__auto___54152))
;


var g__53986__auto___54156 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__53986__auto___54156){
return (function cljs$spec$impl$gen$double(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54157 = arguments.length;
var i__45940__auto___54158 = (0);
while(true){
if((i__45940__auto___54158 < len__45939__auto___54157)){
args__45946__auto__.push((arguments[i__45940__auto___54158]));

var G__54159 = (i__45940__auto___54158 + (1));
i__45940__auto___54158 = G__54159;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54156))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54156){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54156);
});})(g__53986__auto___54156))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__53986__auto___54156){
return (function (seq54114){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54114));
});})(g__53986__auto___54156))
;


var g__53986__auto___54160 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__53986__auto___54160){
return (function cljs$spec$impl$gen$int(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54161 = arguments.length;
var i__45940__auto___54162 = (0);
while(true){
if((i__45940__auto___54162 < len__45939__auto___54161)){
args__45946__auto__.push((arguments[i__45940__auto___54162]));

var G__54163 = (i__45940__auto___54162 + (1));
i__45940__auto___54162 = G__54163;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54160))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54160){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54160);
});})(g__53986__auto___54160))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__53986__auto___54160){
return (function (seq54115){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54115));
});})(g__53986__auto___54160))
;


var g__53986__auto___54164 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__53986__auto___54164){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54165 = arguments.length;
var i__45940__auto___54166 = (0);
while(true){
if((i__45940__auto___54166 < len__45939__auto___54165)){
args__45946__auto__.push((arguments[i__45940__auto___54166]));

var G__54167 = (i__45940__auto___54166 + (1));
i__45940__auto___54166 = G__54167;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54164))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54164){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54164);
});})(g__53986__auto___54164))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__53986__auto___54164){
return (function (seq54116){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54116));
});})(g__53986__auto___54164))
;


var g__53986__auto___54168 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__53986__auto___54168){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54169 = arguments.length;
var i__45940__auto___54170 = (0);
while(true){
if((i__45940__auto___54170 < len__45939__auto___54169)){
args__45946__auto__.push((arguments[i__45940__auto___54170]));

var G__54171 = (i__45940__auto___54170 + (1));
i__45940__auto___54170 = G__54171;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54168))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54168){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54168);
});})(g__53986__auto___54168))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__53986__auto___54168){
return (function (seq54117){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54117));
});})(g__53986__auto___54168))
;


var g__53986__auto___54172 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__53986__auto___54172){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54173 = arguments.length;
var i__45940__auto___54174 = (0);
while(true){
if((i__45940__auto___54174 < len__45939__auto___54173)){
args__45946__auto__.push((arguments[i__45940__auto___54174]));

var G__54175 = (i__45940__auto___54174 + (1));
i__45940__auto___54174 = G__54175;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54172))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54172){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54172);
});})(g__53986__auto___54172))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__53986__auto___54172){
return (function (seq54118){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54118));
});})(g__53986__auto___54172))
;


var g__53986__auto___54176 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__53986__auto___54176){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54177 = arguments.length;
var i__45940__auto___54178 = (0);
while(true){
if((i__45940__auto___54178 < len__45939__auto___54177)){
args__45946__auto__.push((arguments[i__45940__auto___54178]));

var G__54179 = (i__45940__auto___54178 + (1));
i__45940__auto___54178 = G__54179;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54176))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54176){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54176);
});})(g__53986__auto___54176))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__53986__auto___54176){
return (function (seq54119){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54119));
});})(g__53986__auto___54176))
;


var g__53986__auto___54180 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__53986__auto___54180){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54181 = arguments.length;
var i__45940__auto___54182 = (0);
while(true){
if((i__45940__auto___54182 < len__45939__auto___54181)){
args__45946__auto__.push((arguments[i__45940__auto___54182]));

var G__54183 = (i__45940__auto___54182 + (1));
i__45940__auto___54182 = G__54183;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54180))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54180){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54180);
});})(g__53986__auto___54180))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__53986__auto___54180){
return (function (seq54120){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54120));
});})(g__53986__auto___54180))
;


var g__53986__auto___54184 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__53986__auto___54184){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54185 = arguments.length;
var i__45940__auto___54186 = (0);
while(true){
if((i__45940__auto___54186 < len__45939__auto___54185)){
args__45946__auto__.push((arguments[i__45940__auto___54186]));

var G__54187 = (i__45940__auto___54186 + (1));
i__45940__auto___54186 = G__54187;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54184))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54184){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54184);
});})(g__53986__auto___54184))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__53986__auto___54184){
return (function (seq54121){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54121));
});})(g__53986__auto___54184))
;


var g__53986__auto___54188 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__53986__auto___54188){
return (function cljs$spec$impl$gen$string(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54189 = arguments.length;
var i__45940__auto___54190 = (0);
while(true){
if((i__45940__auto___54190 < len__45939__auto___54189)){
args__45946__auto__.push((arguments[i__45940__auto___54190]));

var G__54191 = (i__45940__auto___54190 + (1));
i__45940__auto___54190 = G__54191;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54188))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54188){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54188);
});})(g__53986__auto___54188))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__53986__auto___54188){
return (function (seq54122){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54122));
});})(g__53986__auto___54188))
;


var g__53986__auto___54192 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__53986__auto___54192){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54193 = arguments.length;
var i__45940__auto___54194 = (0);
while(true){
if((i__45940__auto___54194 < len__45939__auto___54193)){
args__45946__auto__.push((arguments[i__45940__auto___54194]));

var G__54195 = (i__45940__auto___54194 + (1));
i__45940__auto___54194 = G__54195;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54192))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54192){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54192);
});})(g__53986__auto___54192))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__53986__auto___54192){
return (function (seq54123){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54123));
});})(g__53986__auto___54192))
;


var g__53986__auto___54196 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__53986__auto___54196){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54197 = arguments.length;
var i__45940__auto___54198 = (0);
while(true){
if((i__45940__auto___54198 < len__45939__auto___54197)){
args__45946__auto__.push((arguments[i__45940__auto___54198]));

var G__54199 = (i__45940__auto___54198 + (1));
i__45940__auto___54198 = G__54199;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54196))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54196){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54196);
});})(g__53986__auto___54196))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__53986__auto___54196){
return (function (seq54124){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54124));
});})(g__53986__auto___54196))
;


var g__53986__auto___54200 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__53986__auto___54200){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54201 = arguments.length;
var i__45940__auto___54202 = (0);
while(true){
if((i__45940__auto___54202 < len__45939__auto___54201)){
args__45946__auto__.push((arguments[i__45940__auto___54202]));

var G__54203 = (i__45940__auto___54202 + (1));
i__45940__auto___54202 = G__54203;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54200))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54200){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54200);
});})(g__53986__auto___54200))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__53986__auto___54200){
return (function (seq54125){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54125));
});})(g__53986__auto___54200))
;


var g__53986__auto___54204 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__53986__auto___54204){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54205 = arguments.length;
var i__45940__auto___54206 = (0);
while(true){
if((i__45940__auto___54206 < len__45939__auto___54205)){
args__45946__auto__.push((arguments[i__45940__auto___54206]));

var G__54207 = (i__45940__auto___54206 + (1));
i__45940__auto___54206 = G__54207;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54204))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54204){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54204);
});})(g__53986__auto___54204))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__53986__auto___54204){
return (function (seq54126){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54126));
});})(g__53986__auto___54204))
;


var g__53986__auto___54208 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__53986__auto___54208){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54209 = arguments.length;
var i__45940__auto___54210 = (0);
while(true){
if((i__45940__auto___54210 < len__45939__auto___54209)){
args__45946__auto__.push((arguments[i__45940__auto___54210]));

var G__54211 = (i__45940__auto___54210 + (1));
i__45940__auto___54210 = G__54211;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});})(g__53986__auto___54208))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53986__auto___54208){
return (function (args){
return cljs.core.deref.call(null,g__53986__auto___54208);
});})(g__53986__auto___54208))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__53986__auto___54208){
return (function (seq54127){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54127));
});})(g__53986__auto___54208))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__45946__auto__ = [];
var len__45939__auto___54214 = arguments.length;
var i__45940__auto___54215 = (0);
while(true){
if((i__45940__auto___54215 < len__45939__auto___54214)){
args__45946__auto__.push((arguments[i__45940__auto___54215]));

var G__54216 = (i__45940__auto___54215 + (1));
i__45940__auto___54215 = G__54216;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((0) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__45947__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__54212_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__54212_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq54213){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54213));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__54217_SHARP_){
return (new Date(p1__54217_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1491522846209