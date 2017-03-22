// Compiled by ClojureScript 1.9.229 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__45042__auto__,writer__45043__auto__,opt__45044__auto__){
return cljs.core._write.call(null,writer__45043__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47577 = arguments.length;
var i__45512__auto___47578 = (0);
while(true){
if((i__45512__auto___47578 < len__45511__auto___47577)){
args__45518__auto__.push((arguments[i__45512__auto___47578]));

var G__47579 = (i__45512__auto___47578 + (1));
i__45512__auto___47578 = G__47579;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq47576){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47576));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47581 = arguments.length;
var i__45512__auto___47582 = (0);
while(true){
if((i__45512__auto___47582 < len__45511__auto___47581)){
args__45518__auto__.push((arguments[i__45512__auto___47582]));

var G__47583 = (i__45512__auto___47582 + (1));
i__45512__auto___47582 = G__47583;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq47580){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47580));
});

var g_QMARK__47584 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_47585 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__47584){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__47584))
,null));
var mkg_47586 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__47584,g_47585){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__47584,g_47585))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__47584,g_47585,mkg_47586){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__47584).call(null,x);
});})(g_QMARK__47584,g_47585,mkg_47586))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__47584,g_47585,mkg_47586){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_47586).call(null,gfn);
});})(g_QMARK__47584,g_47585,mkg_47586))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__47584,g_47585,mkg_47586){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_47585).call(null,generator);
});})(g_QMARK__47584,g_47585,mkg_47586))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__45595__auto___47605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__45595__auto___47605){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47606 = arguments.length;
var i__45512__auto___47607 = (0);
while(true){
if((i__45512__auto___47607 < len__45511__auto___47606)){
args__45518__auto__.push((arguments[i__45512__auto___47607]));

var G__47608 = (i__45512__auto___47607 + (1));
i__45512__auto___47607 = G__47608;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47605))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47605){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47605),args);
});})(g__45595__auto___47605))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__45595__auto___47605){
return (function (seq47587){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47587));
});})(g__45595__auto___47605))
;


var g__45595__auto___47609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__45595__auto___47609){
return (function cljs$spec$impl$gen$list(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47610 = arguments.length;
var i__45512__auto___47611 = (0);
while(true){
if((i__45512__auto___47611 < len__45511__auto___47610)){
args__45518__auto__.push((arguments[i__45512__auto___47611]));

var G__47612 = (i__45512__auto___47611 + (1));
i__45512__auto___47611 = G__47612;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47609))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47609){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47609),args);
});})(g__45595__auto___47609))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__45595__auto___47609){
return (function (seq47588){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47588));
});})(g__45595__auto___47609))
;


var g__45595__auto___47613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__45595__auto___47613){
return (function cljs$spec$impl$gen$map(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47614 = arguments.length;
var i__45512__auto___47615 = (0);
while(true){
if((i__45512__auto___47615 < len__45511__auto___47614)){
args__45518__auto__.push((arguments[i__45512__auto___47615]));

var G__47616 = (i__45512__auto___47615 + (1));
i__45512__auto___47615 = G__47616;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47613))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47613){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47613),args);
});})(g__45595__auto___47613))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__45595__auto___47613){
return (function (seq47589){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47589));
});})(g__45595__auto___47613))
;


var g__45595__auto___47617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__45595__auto___47617){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47618 = arguments.length;
var i__45512__auto___47619 = (0);
while(true){
if((i__45512__auto___47619 < len__45511__auto___47618)){
args__45518__auto__.push((arguments[i__45512__auto___47619]));

var G__47620 = (i__45512__auto___47619 + (1));
i__45512__auto___47619 = G__47620;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47617))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47617){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47617),args);
});})(g__45595__auto___47617))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__45595__auto___47617){
return (function (seq47590){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47590));
});})(g__45595__auto___47617))
;


var g__45595__auto___47621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__45595__auto___47621){
return (function cljs$spec$impl$gen$set(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47622 = arguments.length;
var i__45512__auto___47623 = (0);
while(true){
if((i__45512__auto___47623 < len__45511__auto___47622)){
args__45518__auto__.push((arguments[i__45512__auto___47623]));

var G__47624 = (i__45512__auto___47623 + (1));
i__45512__auto___47623 = G__47624;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47621))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47621){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47621),args);
});})(g__45595__auto___47621))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__45595__auto___47621){
return (function (seq47591){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47591));
});})(g__45595__auto___47621))
;


var g__45595__auto___47625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__45595__auto___47625){
return (function cljs$spec$impl$gen$vector(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47626 = arguments.length;
var i__45512__auto___47627 = (0);
while(true){
if((i__45512__auto___47627 < len__45511__auto___47626)){
args__45518__auto__.push((arguments[i__45512__auto___47627]));

var G__47628 = (i__45512__auto___47627 + (1));
i__45512__auto___47627 = G__47628;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47625))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47625){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47625),args);
});})(g__45595__auto___47625))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__45595__auto___47625){
return (function (seq47592){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47592));
});})(g__45595__auto___47625))
;


var g__45595__auto___47629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__45595__auto___47629){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47630 = arguments.length;
var i__45512__auto___47631 = (0);
while(true){
if((i__45512__auto___47631 < len__45511__auto___47630)){
args__45518__auto__.push((arguments[i__45512__auto___47631]));

var G__47632 = (i__45512__auto___47631 + (1));
i__45512__auto___47631 = G__47632;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47629))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47629){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47629),args);
});})(g__45595__auto___47629))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__45595__auto___47629){
return (function (seq47593){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47593));
});})(g__45595__auto___47629))
;


var g__45595__auto___47633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__45595__auto___47633){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47634 = arguments.length;
var i__45512__auto___47635 = (0);
while(true){
if((i__45512__auto___47635 < len__45511__auto___47634)){
args__45518__auto__.push((arguments[i__45512__auto___47635]));

var G__47636 = (i__45512__auto___47635 + (1));
i__45512__auto___47635 = G__47636;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47633))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47633),args);
});})(g__45595__auto___47633))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__45595__auto___47633){
return (function (seq47594){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47594));
});})(g__45595__auto___47633))
;


var g__45595__auto___47637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__45595__auto___47637){
return (function cljs$spec$impl$gen$elements(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47638 = arguments.length;
var i__45512__auto___47639 = (0);
while(true){
if((i__45512__auto___47639 < len__45511__auto___47638)){
args__45518__auto__.push((arguments[i__45512__auto___47639]));

var G__47640 = (i__45512__auto___47639 + (1));
i__45512__auto___47639 = G__47640;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47637))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47637){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47637),args);
});})(g__45595__auto___47637))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__45595__auto___47637){
return (function (seq47595){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47595));
});})(g__45595__auto___47637))
;


var g__45595__auto___47641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__45595__auto___47641){
return (function cljs$spec$impl$gen$bind(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47642 = arguments.length;
var i__45512__auto___47643 = (0);
while(true){
if((i__45512__auto___47643 < len__45511__auto___47642)){
args__45518__auto__.push((arguments[i__45512__auto___47643]));

var G__47644 = (i__45512__auto___47643 + (1));
i__45512__auto___47643 = G__47644;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47641))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47641){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47641),args);
});})(g__45595__auto___47641))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__45595__auto___47641){
return (function (seq47596){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47596));
});})(g__45595__auto___47641))
;


var g__45595__auto___47645 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__45595__auto___47645){
return (function cljs$spec$impl$gen$choose(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47646 = arguments.length;
var i__45512__auto___47647 = (0);
while(true){
if((i__45512__auto___47647 < len__45511__auto___47646)){
args__45518__auto__.push((arguments[i__45512__auto___47647]));

var G__47648 = (i__45512__auto___47647 + (1));
i__45512__auto___47647 = G__47648;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47645))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47645){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47645),args);
});})(g__45595__auto___47645))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__45595__auto___47645){
return (function (seq47597){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47597));
});})(g__45595__auto___47645))
;


var g__45595__auto___47649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__45595__auto___47649){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47650 = arguments.length;
var i__45512__auto___47651 = (0);
while(true){
if((i__45512__auto___47651 < len__45511__auto___47650)){
args__45518__auto__.push((arguments[i__45512__auto___47651]));

var G__47652 = (i__45512__auto___47651 + (1));
i__45512__auto___47651 = G__47652;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47649))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47649){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47649),args);
});})(g__45595__auto___47649))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__45595__auto___47649){
return (function (seq47598){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47598));
});})(g__45595__auto___47649))
;


var g__45595__auto___47653 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__45595__auto___47653){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47654 = arguments.length;
var i__45512__auto___47655 = (0);
while(true){
if((i__45512__auto___47655 < len__45511__auto___47654)){
args__45518__auto__.push((arguments[i__45512__auto___47655]));

var G__47656 = (i__45512__auto___47655 + (1));
i__45512__auto___47655 = G__47656;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47653))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47653){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47653),args);
});})(g__45595__auto___47653))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__45595__auto___47653){
return (function (seq47599){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47599));
});})(g__45595__auto___47653))
;


var g__45595__auto___47657 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__45595__auto___47657){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47658 = arguments.length;
var i__45512__auto___47659 = (0);
while(true){
if((i__45512__auto___47659 < len__45511__auto___47658)){
args__45518__auto__.push((arguments[i__45512__auto___47659]));

var G__47660 = (i__45512__auto___47659 + (1));
i__45512__auto___47659 = G__47660;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47657))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47657){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47657),args);
});})(g__45595__auto___47657))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__45595__auto___47657){
return (function (seq47600){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47600));
});})(g__45595__auto___47657))
;


var g__45595__auto___47661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__45595__auto___47661){
return (function cljs$spec$impl$gen$sample(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47662 = arguments.length;
var i__45512__auto___47663 = (0);
while(true){
if((i__45512__auto___47663 < len__45511__auto___47662)){
args__45518__auto__.push((arguments[i__45512__auto___47663]));

var G__47664 = (i__45512__auto___47663 + (1));
i__45512__auto___47663 = G__47664;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47661))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47661){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47661),args);
});})(g__45595__auto___47661))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__45595__auto___47661){
return (function (seq47601){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47601));
});})(g__45595__auto___47661))
;


var g__45595__auto___47665 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__45595__auto___47665){
return (function cljs$spec$impl$gen$return(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47666 = arguments.length;
var i__45512__auto___47667 = (0);
while(true){
if((i__45512__auto___47667 < len__45511__auto___47666)){
args__45518__auto__.push((arguments[i__45512__auto___47667]));

var G__47668 = (i__45512__auto___47667 + (1));
i__45512__auto___47667 = G__47668;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47665))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47665){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47665),args);
});})(g__45595__auto___47665))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__45595__auto___47665){
return (function (seq47602){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47602));
});})(g__45595__auto___47665))
;


var g__45595__auto___47669 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__45595__auto___47669){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47670 = arguments.length;
var i__45512__auto___47671 = (0);
while(true){
if((i__45512__auto___47671 < len__45511__auto___47670)){
args__45518__auto__.push((arguments[i__45512__auto___47671]));

var G__47672 = (i__45512__auto___47671 + (1));
i__45512__auto___47671 = G__47672;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47669))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47669){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47669),args);
});})(g__45595__auto___47669))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__45595__auto___47669){
return (function (seq47603){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47603));
});})(g__45595__auto___47669))
;


var g__45595__auto___47673 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__45595__auto___47673){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47674 = arguments.length;
var i__45512__auto___47675 = (0);
while(true){
if((i__45512__auto___47675 < len__45511__auto___47674)){
args__45518__auto__.push((arguments[i__45512__auto___47675]));

var G__47676 = (i__45512__auto___47675 + (1));
i__45512__auto___47675 = G__47676;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45595__auto___47673))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45595__auto___47673){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45595__auto___47673),args);
});})(g__45595__auto___47673))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__45595__auto___47673){
return (function (seq47604){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47604));
});})(g__45595__auto___47673))
;

var g__45608__auto___47698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__45608__auto___47698){
return (function cljs$spec$impl$gen$any(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47699 = arguments.length;
var i__45512__auto___47700 = (0);
while(true){
if((i__45512__auto___47700 < len__45511__auto___47699)){
args__45518__auto__.push((arguments[i__45512__auto___47700]));

var G__47701 = (i__45512__auto___47700 + (1));
i__45512__auto___47700 = G__47701;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47698))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47698){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47698);
});})(g__45608__auto___47698))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__45608__auto___47698){
return (function (seq47677){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47677));
});})(g__45608__auto___47698))
;


var g__45608__auto___47702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__45608__auto___47702){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47703 = arguments.length;
var i__45512__auto___47704 = (0);
while(true){
if((i__45512__auto___47704 < len__45511__auto___47703)){
args__45518__auto__.push((arguments[i__45512__auto___47704]));

var G__47705 = (i__45512__auto___47704 + (1));
i__45512__auto___47704 = G__47705;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47702))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47702){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47702);
});})(g__45608__auto___47702))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__45608__auto___47702){
return (function (seq47678){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47678));
});})(g__45608__auto___47702))
;


var g__45608__auto___47706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__45608__auto___47706){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47707 = arguments.length;
var i__45512__auto___47708 = (0);
while(true){
if((i__45512__auto___47708 < len__45511__auto___47707)){
args__45518__auto__.push((arguments[i__45512__auto___47708]));

var G__47709 = (i__45512__auto___47708 + (1));
i__45512__auto___47708 = G__47709;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47706))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47706){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47706);
});})(g__45608__auto___47706))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__45608__auto___47706){
return (function (seq47679){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47679));
});})(g__45608__auto___47706))
;


var g__45608__auto___47710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__45608__auto___47710){
return (function cljs$spec$impl$gen$char(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47711 = arguments.length;
var i__45512__auto___47712 = (0);
while(true){
if((i__45512__auto___47712 < len__45511__auto___47711)){
args__45518__auto__.push((arguments[i__45512__auto___47712]));

var G__47713 = (i__45512__auto___47712 + (1));
i__45512__auto___47712 = G__47713;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47710))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47710){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47710);
});})(g__45608__auto___47710))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__45608__auto___47710){
return (function (seq47680){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47680));
});})(g__45608__auto___47710))
;


var g__45608__auto___47714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__45608__auto___47714){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47715 = arguments.length;
var i__45512__auto___47716 = (0);
while(true){
if((i__45512__auto___47716 < len__45511__auto___47715)){
args__45518__auto__.push((arguments[i__45512__auto___47716]));

var G__47717 = (i__45512__auto___47716 + (1));
i__45512__auto___47716 = G__47717;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47714))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47714){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47714);
});})(g__45608__auto___47714))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__45608__auto___47714){
return (function (seq47681){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47681));
});})(g__45608__auto___47714))
;


var g__45608__auto___47718 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__45608__auto___47718){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47719 = arguments.length;
var i__45512__auto___47720 = (0);
while(true){
if((i__45512__auto___47720 < len__45511__auto___47719)){
args__45518__auto__.push((arguments[i__45512__auto___47720]));

var G__47721 = (i__45512__auto___47720 + (1));
i__45512__auto___47720 = G__47721;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47718))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47718){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47718);
});})(g__45608__auto___47718))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__45608__auto___47718){
return (function (seq47682){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47682));
});})(g__45608__auto___47718))
;


var g__45608__auto___47722 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__45608__auto___47722){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47723 = arguments.length;
var i__45512__auto___47724 = (0);
while(true){
if((i__45512__auto___47724 < len__45511__auto___47723)){
args__45518__auto__.push((arguments[i__45512__auto___47724]));

var G__47725 = (i__45512__auto___47724 + (1));
i__45512__auto___47724 = G__47725;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47722))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47722){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47722);
});})(g__45608__auto___47722))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__45608__auto___47722){
return (function (seq47683){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47683));
});})(g__45608__auto___47722))
;


var g__45608__auto___47726 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__45608__auto___47726){
return (function cljs$spec$impl$gen$double(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47727 = arguments.length;
var i__45512__auto___47728 = (0);
while(true){
if((i__45512__auto___47728 < len__45511__auto___47727)){
args__45518__auto__.push((arguments[i__45512__auto___47728]));

var G__47729 = (i__45512__auto___47728 + (1));
i__45512__auto___47728 = G__47729;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47726))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47726){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47726);
});})(g__45608__auto___47726))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__45608__auto___47726){
return (function (seq47684){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47684));
});})(g__45608__auto___47726))
;


var g__45608__auto___47730 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__45608__auto___47730){
return (function cljs$spec$impl$gen$int(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47731 = arguments.length;
var i__45512__auto___47732 = (0);
while(true){
if((i__45512__auto___47732 < len__45511__auto___47731)){
args__45518__auto__.push((arguments[i__45512__auto___47732]));

var G__47733 = (i__45512__auto___47732 + (1));
i__45512__auto___47732 = G__47733;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47730))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47730){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47730);
});})(g__45608__auto___47730))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__45608__auto___47730){
return (function (seq47685){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47685));
});})(g__45608__auto___47730))
;


var g__45608__auto___47734 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__45608__auto___47734){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47735 = arguments.length;
var i__45512__auto___47736 = (0);
while(true){
if((i__45512__auto___47736 < len__45511__auto___47735)){
args__45518__auto__.push((arguments[i__45512__auto___47736]));

var G__47737 = (i__45512__auto___47736 + (1));
i__45512__auto___47736 = G__47737;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47734))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47734){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47734);
});})(g__45608__auto___47734))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__45608__auto___47734){
return (function (seq47686){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47686));
});})(g__45608__auto___47734))
;


var g__45608__auto___47738 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__45608__auto___47738){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47739 = arguments.length;
var i__45512__auto___47740 = (0);
while(true){
if((i__45512__auto___47740 < len__45511__auto___47739)){
args__45518__auto__.push((arguments[i__45512__auto___47740]));

var G__47741 = (i__45512__auto___47740 + (1));
i__45512__auto___47740 = G__47741;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47738))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47738){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47738);
});})(g__45608__auto___47738))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__45608__auto___47738){
return (function (seq47687){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47687));
});})(g__45608__auto___47738))
;


var g__45608__auto___47742 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__45608__auto___47742){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47743 = arguments.length;
var i__45512__auto___47744 = (0);
while(true){
if((i__45512__auto___47744 < len__45511__auto___47743)){
args__45518__auto__.push((arguments[i__45512__auto___47744]));

var G__47745 = (i__45512__auto___47744 + (1));
i__45512__auto___47744 = G__47745;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47742))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47742){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47742);
});})(g__45608__auto___47742))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__45608__auto___47742){
return (function (seq47688){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47688));
});})(g__45608__auto___47742))
;


var g__45608__auto___47746 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__45608__auto___47746){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47747 = arguments.length;
var i__45512__auto___47748 = (0);
while(true){
if((i__45512__auto___47748 < len__45511__auto___47747)){
args__45518__auto__.push((arguments[i__45512__auto___47748]));

var G__47749 = (i__45512__auto___47748 + (1));
i__45512__auto___47748 = G__47749;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47746))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47746){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47746);
});})(g__45608__auto___47746))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__45608__auto___47746){
return (function (seq47689){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47689));
});})(g__45608__auto___47746))
;


var g__45608__auto___47750 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__45608__auto___47750){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47751 = arguments.length;
var i__45512__auto___47752 = (0);
while(true){
if((i__45512__auto___47752 < len__45511__auto___47751)){
args__45518__auto__.push((arguments[i__45512__auto___47752]));

var G__47753 = (i__45512__auto___47752 + (1));
i__45512__auto___47752 = G__47753;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47750))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47750){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47750);
});})(g__45608__auto___47750))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__45608__auto___47750){
return (function (seq47690){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47690));
});})(g__45608__auto___47750))
;


var g__45608__auto___47754 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__45608__auto___47754){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47755 = arguments.length;
var i__45512__auto___47756 = (0);
while(true){
if((i__45512__auto___47756 < len__45511__auto___47755)){
args__45518__auto__.push((arguments[i__45512__auto___47756]));

var G__47757 = (i__45512__auto___47756 + (1));
i__45512__auto___47756 = G__47757;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47754))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47754){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47754);
});})(g__45608__auto___47754))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__45608__auto___47754){
return (function (seq47691){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47691));
});})(g__45608__auto___47754))
;


var g__45608__auto___47758 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__45608__auto___47758){
return (function cljs$spec$impl$gen$string(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47759 = arguments.length;
var i__45512__auto___47760 = (0);
while(true){
if((i__45512__auto___47760 < len__45511__auto___47759)){
args__45518__auto__.push((arguments[i__45512__auto___47760]));

var G__47761 = (i__45512__auto___47760 + (1));
i__45512__auto___47760 = G__47761;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47758))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47758){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47758);
});})(g__45608__auto___47758))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__45608__auto___47758){
return (function (seq47692){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47692));
});})(g__45608__auto___47758))
;


var g__45608__auto___47762 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__45608__auto___47762){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47763 = arguments.length;
var i__45512__auto___47764 = (0);
while(true){
if((i__45512__auto___47764 < len__45511__auto___47763)){
args__45518__auto__.push((arguments[i__45512__auto___47764]));

var G__47765 = (i__45512__auto___47764 + (1));
i__45512__auto___47764 = G__47765;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47762))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47762){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47762);
});})(g__45608__auto___47762))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__45608__auto___47762){
return (function (seq47693){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47693));
});})(g__45608__auto___47762))
;


var g__45608__auto___47766 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__45608__auto___47766){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47767 = arguments.length;
var i__45512__auto___47768 = (0);
while(true){
if((i__45512__auto___47768 < len__45511__auto___47767)){
args__45518__auto__.push((arguments[i__45512__auto___47768]));

var G__47769 = (i__45512__auto___47768 + (1));
i__45512__auto___47768 = G__47769;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47766))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47766){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47766);
});})(g__45608__auto___47766))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__45608__auto___47766){
return (function (seq47694){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47694));
});})(g__45608__auto___47766))
;


var g__45608__auto___47770 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__45608__auto___47770){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47771 = arguments.length;
var i__45512__auto___47772 = (0);
while(true){
if((i__45512__auto___47772 < len__45511__auto___47771)){
args__45518__auto__.push((arguments[i__45512__auto___47772]));

var G__47773 = (i__45512__auto___47772 + (1));
i__45512__auto___47772 = G__47773;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47770))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47770){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47770);
});})(g__45608__auto___47770))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__45608__auto___47770){
return (function (seq47695){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47695));
});})(g__45608__auto___47770))
;


var g__45608__auto___47774 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__45608__auto___47774){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47775 = arguments.length;
var i__45512__auto___47776 = (0);
while(true){
if((i__45512__auto___47776 < len__45511__auto___47775)){
args__45518__auto__.push((arguments[i__45512__auto___47776]));

var G__47777 = (i__45512__auto___47776 + (1));
i__45512__auto___47776 = G__47777;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47774))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47774){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47774);
});})(g__45608__auto___47774))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__45608__auto___47774){
return (function (seq47696){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47696));
});})(g__45608__auto___47774))
;


var g__45608__auto___47778 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__45608__auto___47778){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47779 = arguments.length;
var i__45512__auto___47780 = (0);
while(true){
if((i__45512__auto___47780 < len__45511__auto___47779)){
args__45518__auto__.push((arguments[i__45512__auto___47780]));

var G__47781 = (i__45512__auto___47780 + (1));
i__45512__auto___47780 = G__47781;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});})(g__45608__auto___47778))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45608__auto___47778){
return (function (args){
return cljs.core.deref.call(null,g__45608__auto___47778);
});})(g__45608__auto___47778))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__45608__auto___47778){
return (function (seq47697){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47697));
});})(g__45608__auto___47778))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__45518__auto__ = [];
var len__45511__auto___47784 = arguments.length;
var i__45512__auto___47785 = (0);
while(true){
if((i__45512__auto___47785 < len__45511__auto___47784)){
args__45518__auto__.push((arguments[i__45512__auto___47785]));

var G__47786 = (i__45512__auto___47785 + (1));
i__45512__auto___47785 = G__47786;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((0) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__45519__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__47782_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__47782_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq47783){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47783));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__47787_SHARP_){
return (new Date(p1__47787_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
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

//# sourceMappingURL=gen.js.map?rel=1490220545645