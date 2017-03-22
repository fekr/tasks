// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__44436__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__44436__auto__){
return or__44436__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__44436__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__44436__auto__)){
return or__44436__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51263_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51263_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__51268 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51269 = null;
var count__51270 = (0);
var i__51271 = (0);
while(true){
if((i__51271 < count__51270)){
var n = cljs.core._nth.call(null,chunk__51269,i__51271);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51272 = seq__51268;
var G__51273 = chunk__51269;
var G__51274 = count__51270;
var G__51275 = (i__51271 + (1));
seq__51268 = G__51272;
chunk__51269 = G__51273;
count__51270 = G__51274;
i__51271 = G__51275;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51268);
if(temp__4657__auto__){
var seq__51268__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51268__$1)){
var c__45247__auto__ = cljs.core.chunk_first.call(null,seq__51268__$1);
var G__51276 = cljs.core.chunk_rest.call(null,seq__51268__$1);
var G__51277 = c__45247__auto__;
var G__51278 = cljs.core.count.call(null,c__45247__auto__);
var G__51279 = (0);
seq__51268 = G__51276;
chunk__51269 = G__51277;
count__51270 = G__51278;
i__51271 = G__51279;
continue;
} else {
var n = cljs.core.first.call(null,seq__51268__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51280 = cljs.core.next.call(null,seq__51268__$1);
var G__51281 = null;
var G__51282 = (0);
var G__51283 = (0);
seq__51268 = G__51280;
chunk__51269 = G__51281;
count__51270 = G__51282;
i__51271 = G__51283;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__51334_51345 = cljs.core.seq.call(null,deps);
var chunk__51335_51346 = null;
var count__51336_51347 = (0);
var i__51337_51348 = (0);
while(true){
if((i__51337_51348 < count__51336_51347)){
var dep_51349 = cljs.core._nth.call(null,chunk__51335_51346,i__51337_51348);
topo_sort_helper_STAR_.call(null,dep_51349,(depth + (1)),state);

var G__51350 = seq__51334_51345;
var G__51351 = chunk__51335_51346;
var G__51352 = count__51336_51347;
var G__51353 = (i__51337_51348 + (1));
seq__51334_51345 = G__51350;
chunk__51335_51346 = G__51351;
count__51336_51347 = G__51352;
i__51337_51348 = G__51353;
continue;
} else {
var temp__4657__auto___51354 = cljs.core.seq.call(null,seq__51334_51345);
if(temp__4657__auto___51354){
var seq__51334_51355__$1 = temp__4657__auto___51354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51334_51355__$1)){
var c__45247__auto___51356 = cljs.core.chunk_first.call(null,seq__51334_51355__$1);
var G__51357 = cljs.core.chunk_rest.call(null,seq__51334_51355__$1);
var G__51358 = c__45247__auto___51356;
var G__51359 = cljs.core.count.call(null,c__45247__auto___51356);
var G__51360 = (0);
seq__51334_51345 = G__51357;
chunk__51335_51346 = G__51358;
count__51336_51347 = G__51359;
i__51337_51348 = G__51360;
continue;
} else {
var dep_51361 = cljs.core.first.call(null,seq__51334_51355__$1);
topo_sort_helper_STAR_.call(null,dep_51361,(depth + (1)),state);

var G__51362 = cljs.core.next.call(null,seq__51334_51355__$1);
var G__51363 = null;
var G__51364 = (0);
var G__51365 = (0);
seq__51334_51345 = G__51362;
chunk__51335_51346 = G__51363;
count__51336_51347 = G__51364;
i__51337_51348 = G__51365;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51338){
var vec__51342 = p__51338;
var seq__51343 = cljs.core.seq.call(null,vec__51342);
var first__51344 = cljs.core.first.call(null,seq__51343);
var seq__51343__$1 = cljs.core.next.call(null,seq__51343);
var x = first__51344;
var xs = seq__51343__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51342,seq__51343,first__51344,seq__51343__$1,x,xs,get_deps__$1){
return (function (p1__51284_SHARP_){
return clojure.set.difference.call(null,p1__51284_SHARP_,x);
});})(vec__51342,seq__51343,first__51344,seq__51343__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__51378 = cljs.core.seq.call(null,provides);
var chunk__51379 = null;
var count__51380 = (0);
var i__51381 = (0);
while(true){
if((i__51381 < count__51380)){
var prov = cljs.core._nth.call(null,chunk__51379,i__51381);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51382_51390 = cljs.core.seq.call(null,requires);
var chunk__51383_51391 = null;
var count__51384_51392 = (0);
var i__51385_51393 = (0);
while(true){
if((i__51385_51393 < count__51384_51392)){
var req_51394 = cljs.core._nth.call(null,chunk__51383_51391,i__51385_51393);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51394,prov);

var G__51395 = seq__51382_51390;
var G__51396 = chunk__51383_51391;
var G__51397 = count__51384_51392;
var G__51398 = (i__51385_51393 + (1));
seq__51382_51390 = G__51395;
chunk__51383_51391 = G__51396;
count__51384_51392 = G__51397;
i__51385_51393 = G__51398;
continue;
} else {
var temp__4657__auto___51399 = cljs.core.seq.call(null,seq__51382_51390);
if(temp__4657__auto___51399){
var seq__51382_51400__$1 = temp__4657__auto___51399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51382_51400__$1)){
var c__45247__auto___51401 = cljs.core.chunk_first.call(null,seq__51382_51400__$1);
var G__51402 = cljs.core.chunk_rest.call(null,seq__51382_51400__$1);
var G__51403 = c__45247__auto___51401;
var G__51404 = cljs.core.count.call(null,c__45247__auto___51401);
var G__51405 = (0);
seq__51382_51390 = G__51402;
chunk__51383_51391 = G__51403;
count__51384_51392 = G__51404;
i__51385_51393 = G__51405;
continue;
} else {
var req_51406 = cljs.core.first.call(null,seq__51382_51400__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51406,prov);

var G__51407 = cljs.core.next.call(null,seq__51382_51400__$1);
var G__51408 = null;
var G__51409 = (0);
var G__51410 = (0);
seq__51382_51390 = G__51407;
chunk__51383_51391 = G__51408;
count__51384_51392 = G__51409;
i__51385_51393 = G__51410;
continue;
}
} else {
}
}
break;
}

var G__51411 = seq__51378;
var G__51412 = chunk__51379;
var G__51413 = count__51380;
var G__51414 = (i__51381 + (1));
seq__51378 = G__51411;
chunk__51379 = G__51412;
count__51380 = G__51413;
i__51381 = G__51414;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51378);
if(temp__4657__auto__){
var seq__51378__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51378__$1)){
var c__45247__auto__ = cljs.core.chunk_first.call(null,seq__51378__$1);
var G__51415 = cljs.core.chunk_rest.call(null,seq__51378__$1);
var G__51416 = c__45247__auto__;
var G__51417 = cljs.core.count.call(null,c__45247__auto__);
var G__51418 = (0);
seq__51378 = G__51415;
chunk__51379 = G__51416;
count__51380 = G__51417;
i__51381 = G__51418;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51378__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51386_51419 = cljs.core.seq.call(null,requires);
var chunk__51387_51420 = null;
var count__51388_51421 = (0);
var i__51389_51422 = (0);
while(true){
if((i__51389_51422 < count__51388_51421)){
var req_51423 = cljs.core._nth.call(null,chunk__51387_51420,i__51389_51422);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51423,prov);

var G__51424 = seq__51386_51419;
var G__51425 = chunk__51387_51420;
var G__51426 = count__51388_51421;
var G__51427 = (i__51389_51422 + (1));
seq__51386_51419 = G__51424;
chunk__51387_51420 = G__51425;
count__51388_51421 = G__51426;
i__51389_51422 = G__51427;
continue;
} else {
var temp__4657__auto___51428__$1 = cljs.core.seq.call(null,seq__51386_51419);
if(temp__4657__auto___51428__$1){
var seq__51386_51429__$1 = temp__4657__auto___51428__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51386_51429__$1)){
var c__45247__auto___51430 = cljs.core.chunk_first.call(null,seq__51386_51429__$1);
var G__51431 = cljs.core.chunk_rest.call(null,seq__51386_51429__$1);
var G__51432 = c__45247__auto___51430;
var G__51433 = cljs.core.count.call(null,c__45247__auto___51430);
var G__51434 = (0);
seq__51386_51419 = G__51431;
chunk__51387_51420 = G__51432;
count__51388_51421 = G__51433;
i__51389_51422 = G__51434;
continue;
} else {
var req_51435 = cljs.core.first.call(null,seq__51386_51429__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51435,prov);

var G__51436 = cljs.core.next.call(null,seq__51386_51429__$1);
var G__51437 = null;
var G__51438 = (0);
var G__51439 = (0);
seq__51386_51419 = G__51436;
chunk__51387_51420 = G__51437;
count__51388_51421 = G__51438;
i__51389_51422 = G__51439;
continue;
}
} else {
}
}
break;
}

var G__51440 = cljs.core.next.call(null,seq__51378__$1);
var G__51441 = null;
var G__51442 = (0);
var G__51443 = (0);
seq__51378 = G__51440;
chunk__51379 = G__51441;
count__51380 = G__51442;
i__51381 = G__51443;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__51448_51452 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51449_51453 = null;
var count__51450_51454 = (0);
var i__51451_51455 = (0);
while(true){
if((i__51451_51455 < count__51450_51454)){
var ns_51456 = cljs.core._nth.call(null,chunk__51449_51453,i__51451_51455);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51456);

var G__51457 = seq__51448_51452;
var G__51458 = chunk__51449_51453;
var G__51459 = count__51450_51454;
var G__51460 = (i__51451_51455 + (1));
seq__51448_51452 = G__51457;
chunk__51449_51453 = G__51458;
count__51450_51454 = G__51459;
i__51451_51455 = G__51460;
continue;
} else {
var temp__4657__auto___51461 = cljs.core.seq.call(null,seq__51448_51452);
if(temp__4657__auto___51461){
var seq__51448_51462__$1 = temp__4657__auto___51461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51448_51462__$1)){
var c__45247__auto___51463 = cljs.core.chunk_first.call(null,seq__51448_51462__$1);
var G__51464 = cljs.core.chunk_rest.call(null,seq__51448_51462__$1);
var G__51465 = c__45247__auto___51463;
var G__51466 = cljs.core.count.call(null,c__45247__auto___51463);
var G__51467 = (0);
seq__51448_51452 = G__51464;
chunk__51449_51453 = G__51465;
count__51450_51454 = G__51466;
i__51451_51455 = G__51467;
continue;
} else {
var ns_51468 = cljs.core.first.call(null,seq__51448_51462__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51468);

var G__51469 = cljs.core.next.call(null,seq__51448_51462__$1);
var G__51470 = null;
var G__51471 = (0);
var G__51472 = (0);
seq__51448_51452 = G__51469;
chunk__51449_51453 = G__51470;
count__51450_51454 = G__51471;
i__51451_51455 = G__51472;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__44436__auto__ = goog.require__;
if(cljs.core.truth_(or__44436__auto__)){
return or__44436__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__51473__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51474__i = 0, G__51474__a = new Array(arguments.length -  0);
while (G__51474__i < G__51474__a.length) {G__51474__a[G__51474__i] = arguments[G__51474__i + 0]; ++G__51474__i;}
  args = new cljs.core.IndexedSeq(G__51474__a,0);
} 
return G__51473__delegate.call(this,args);};
G__51473.cljs$lang$maxFixedArity = 0;
G__51473.cljs$lang$applyTo = (function (arglist__51475){
var args = cljs.core.seq(arglist__51475);
return G__51473__delegate(args);
});
G__51473.cljs$core$IFn$_invoke$arity$variadic = G__51473__delegate;
return G__51473;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51476 = cljs.core._EQ_;
var expr__51477 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51476.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51477))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__51476,expr__51477){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__51476,expr__51477))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__51476,expr__51477){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51479){if((e51479 instanceof Error)){
var e = e51479;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51479;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__51476,expr__51477))
} else {
if(cljs.core.truth_(pred__51476.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51477))){
return ((function (pred__51476,expr__51477){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__51476,expr__51477){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__51476,expr__51477))
);

return deferred.addErrback(((function (deferred,pred__51476,expr__51477){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__51476,expr__51477))
);
});
;})(pred__51476,expr__51477))
} else {
if(cljs.core.truth_(pred__51476.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__51477))){
return ((function (pred__51476,expr__51477){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e51480){if((e51480 instanceof Error)){
var e = e51480;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51480;

}
}})());
});
;})(pred__51476,expr__51477))
} else {
return ((function (pred__51476,expr__51477){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51476,expr__51477))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51481,callback){
var map__51484 = p__51481;
var map__51484__$1 = ((((!((map__51484 == null)))?((((map__51484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51484):map__51484);
var file_msg = map__51484__$1;
var request_url = cljs.core.get.call(null,map__51484__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51484,map__51484__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51484,map__51484__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__46608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto__){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto__){
return (function (state_51508){
var state_val_51509 = (state_51508[(1)]);
if((state_val_51509 === (7))){
var inst_51504 = (state_51508[(2)]);
var state_51508__$1 = state_51508;
var statearr_51510_51530 = state_51508__$1;
(statearr_51510_51530[(2)] = inst_51504);

(statearr_51510_51530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51509 === (1))){
var state_51508__$1 = state_51508;
var statearr_51511_51531 = state_51508__$1;
(statearr_51511_51531[(2)] = null);

(statearr_51511_51531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51509 === (4))){
var inst_51488 = (state_51508[(7)]);
var inst_51488__$1 = (state_51508[(2)]);
var state_51508__$1 = (function (){var statearr_51512 = state_51508;
(statearr_51512[(7)] = inst_51488__$1);

return statearr_51512;
})();
if(cljs.core.truth_(inst_51488__$1)){
var statearr_51513_51532 = state_51508__$1;
(statearr_51513_51532[(1)] = (5));

} else {
var statearr_51514_51533 = state_51508__$1;
(statearr_51514_51533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51509 === (6))){
var state_51508__$1 = state_51508;
var statearr_51515_51534 = state_51508__$1;
(statearr_51515_51534[(2)] = null);

(statearr_51515_51534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51509 === (3))){
var inst_51506 = (state_51508[(2)]);
var state_51508__$1 = state_51508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51508__$1,inst_51506);
} else {
if((state_val_51509 === (2))){
var state_51508__$1 = state_51508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51508__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51509 === (11))){
var inst_51500 = (state_51508[(2)]);
var state_51508__$1 = (function (){var statearr_51516 = state_51508;
(statearr_51516[(8)] = inst_51500);

return statearr_51516;
})();
var statearr_51517_51535 = state_51508__$1;
(statearr_51517_51535[(2)] = null);

(statearr_51517_51535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51509 === (9))){
var inst_51492 = (state_51508[(9)]);
var inst_51494 = (state_51508[(10)]);
var inst_51496 = inst_51494.call(null,inst_51492);
var state_51508__$1 = state_51508;
var statearr_51518_51536 = state_51508__$1;
(statearr_51518_51536[(2)] = inst_51496);

(statearr_51518_51536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51509 === (5))){
var inst_51488 = (state_51508[(7)]);
var inst_51490 = figwheel.client.file_reloading.blocking_load.call(null,inst_51488);
var state_51508__$1 = state_51508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51508__$1,(8),inst_51490);
} else {
if((state_val_51509 === (10))){
var inst_51492 = (state_51508[(9)]);
var inst_51498 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51492);
var state_51508__$1 = state_51508;
var statearr_51519_51537 = state_51508__$1;
(statearr_51519_51537[(2)] = inst_51498);

(statearr_51519_51537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51509 === (8))){
var inst_51488 = (state_51508[(7)]);
var inst_51494 = (state_51508[(10)]);
var inst_51492 = (state_51508[(2)]);
var inst_51493 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51494__$1 = cljs.core.get.call(null,inst_51493,inst_51488);
var state_51508__$1 = (function (){var statearr_51520 = state_51508;
(statearr_51520[(9)] = inst_51492);

(statearr_51520[(10)] = inst_51494__$1);

return statearr_51520;
})();
if(cljs.core.truth_(inst_51494__$1)){
var statearr_51521_51538 = state_51508__$1;
(statearr_51521_51538[(1)] = (9));

} else {
var statearr_51522_51539 = state_51508__$1;
(statearr_51522_51539[(1)] = (10));

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
});})(c__46608__auto__))
;
return ((function (switch__46454__auto__,c__46608__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__46455__auto__ = null;
var figwheel$client$file_reloading$state_machine__46455__auto____0 = (function (){
var statearr_51526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51526[(0)] = figwheel$client$file_reloading$state_machine__46455__auto__);

(statearr_51526[(1)] = (1));

return statearr_51526;
});
var figwheel$client$file_reloading$state_machine__46455__auto____1 = (function (state_51508){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_51508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e51527){if((e51527 instanceof Object)){
var ex__46458__auto__ = e51527;
var statearr_51528_51540 = state_51508;
(statearr_51528_51540[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51541 = state_51508;
state_51508 = G__51541;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__46455__auto__ = function(state_51508){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__46455__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__46455__auto____1.call(this,state_51508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__46455__auto____0;
figwheel$client$file_reloading$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__46455__auto____1;
return figwheel$client$file_reloading$state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto__))
})();
var state__46610__auto__ = (function (){var statearr_51529 = f__46609__auto__.call(null);
(statearr_51529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto__);

return statearr_51529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto__))
);

return c__46608__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51542,callback){
var map__51545 = p__51542;
var map__51545__$1 = ((((!((map__51545 == null)))?((((map__51545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51545):map__51545);
var file_msg = map__51545__$1;
var namespace = cljs.core.get.call(null,map__51545__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51545,map__51545__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51545,map__51545__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__51547){
var map__51550 = p__51547;
var map__51550__$1 = ((((!((map__51550 == null)))?((((map__51550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51550):map__51550);
var file_msg = map__51550__$1;
var namespace = cljs.core.get.call(null,map__51550__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51552){
var map__51555 = p__51552;
var map__51555__$1 = ((((!((map__51555 == null)))?((((map__51555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51555):map__51555);
var file_msg = map__51555__$1;
var namespace = cljs.core.get.call(null,map__51555__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__44424__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__44424__auto__){
var or__44436__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44436__auto__)){
return or__44436__auto__;
} else {
var or__44436__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44436__auto____$1)){
return or__44436__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__44424__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51557,callback){
var map__51560 = p__51557;
var map__51560__$1 = ((((!((map__51560 == null)))?((((map__51560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51560):map__51560);
var file_msg = map__51560__$1;
var request_url = cljs.core.get.call(null,map__51560__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51560__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__46608__auto___51664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___51664,out){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___51664,out){
return (function (state_51646){
var state_val_51647 = (state_51646[(1)]);
if((state_val_51647 === (1))){
var inst_51620 = cljs.core.seq.call(null,files);
var inst_51621 = cljs.core.first.call(null,inst_51620);
var inst_51622 = cljs.core.next.call(null,inst_51620);
var inst_51623 = files;
var state_51646__$1 = (function (){var statearr_51648 = state_51646;
(statearr_51648[(7)] = inst_51623);

(statearr_51648[(8)] = inst_51621);

(statearr_51648[(9)] = inst_51622);

return statearr_51648;
})();
var statearr_51649_51665 = state_51646__$1;
(statearr_51649_51665[(2)] = null);

(statearr_51649_51665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51647 === (2))){
var inst_51629 = (state_51646[(10)]);
var inst_51623 = (state_51646[(7)]);
var inst_51628 = cljs.core.seq.call(null,inst_51623);
var inst_51629__$1 = cljs.core.first.call(null,inst_51628);
var inst_51630 = cljs.core.next.call(null,inst_51628);
var inst_51631 = (inst_51629__$1 == null);
var inst_51632 = cljs.core.not.call(null,inst_51631);
var state_51646__$1 = (function (){var statearr_51650 = state_51646;
(statearr_51650[(10)] = inst_51629__$1);

(statearr_51650[(11)] = inst_51630);

return statearr_51650;
})();
if(inst_51632){
var statearr_51651_51666 = state_51646__$1;
(statearr_51651_51666[(1)] = (4));

} else {
var statearr_51652_51667 = state_51646__$1;
(statearr_51652_51667[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51647 === (3))){
var inst_51644 = (state_51646[(2)]);
var state_51646__$1 = state_51646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51646__$1,inst_51644);
} else {
if((state_val_51647 === (4))){
var inst_51629 = (state_51646[(10)]);
var inst_51634 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51629);
var state_51646__$1 = state_51646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51646__$1,(7),inst_51634);
} else {
if((state_val_51647 === (5))){
var inst_51640 = cljs.core.async.close_BANG_.call(null,out);
var state_51646__$1 = state_51646;
var statearr_51653_51668 = state_51646__$1;
(statearr_51653_51668[(2)] = inst_51640);

(statearr_51653_51668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51647 === (6))){
var inst_51642 = (state_51646[(2)]);
var state_51646__$1 = state_51646;
var statearr_51654_51669 = state_51646__$1;
(statearr_51654_51669[(2)] = inst_51642);

(statearr_51654_51669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51647 === (7))){
var inst_51630 = (state_51646[(11)]);
var inst_51636 = (state_51646[(2)]);
var inst_51637 = cljs.core.async.put_BANG_.call(null,out,inst_51636);
var inst_51623 = inst_51630;
var state_51646__$1 = (function (){var statearr_51655 = state_51646;
(statearr_51655[(12)] = inst_51637);

(statearr_51655[(7)] = inst_51623);

return statearr_51655;
})();
var statearr_51656_51670 = state_51646__$1;
(statearr_51656_51670[(2)] = null);

(statearr_51656_51670[(1)] = (2));


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
});})(c__46608__auto___51664,out))
;
return ((function (switch__46454__auto__,c__46608__auto___51664,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46455__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46455__auto____0 = (function (){
var statearr_51660 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51660[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46455__auto__);

(statearr_51660[(1)] = (1));

return statearr_51660;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__46455__auto____1 = (function (state_51646){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_51646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e51661){if((e51661 instanceof Object)){
var ex__46458__auto__ = e51661;
var statearr_51662_51671 = state_51646;
(statearr_51662_51671[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51672 = state_51646;
state_51646 = G__51672;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46455__auto__ = function(state_51646){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46455__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46455__auto____1.call(this,state_51646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46455__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__46455__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___51664,out))
})();
var state__46610__auto__ = (function (){var statearr_51663 = f__46609__auto__.call(null);
(statearr_51663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___51664);

return statearr_51663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___51664,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51673,opts){
var map__51677 = p__51673;
var map__51677__$1 = ((((!((map__51677 == null)))?((((map__51677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51677):map__51677);
var eval_body__$1 = cljs.core.get.call(null,map__51677__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51677__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__44424__auto__ = eval_body__$1;
if(cljs.core.truth_(and__44424__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__44424__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e51679){var e = e51679;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__51680_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51680_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__51689){
var vec__51690 = p__51689;
var k = cljs.core.nth.call(null,vec__51690,(0),null);
var v = cljs.core.nth.call(null,vec__51690,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51693){
var vec__51694 = p__51693;
var k = cljs.core.nth.call(null,vec__51694,(0),null);
var v = cljs.core.nth.call(null,vec__51694,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51700,p__51701){
var map__51948 = p__51700;
var map__51948__$1 = ((((!((map__51948 == null)))?((((map__51948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51948):map__51948);
var opts = map__51948__$1;
var before_jsload = cljs.core.get.call(null,map__51948__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__51948__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__51948__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__51949 = p__51701;
var map__51949__$1 = ((((!((map__51949 == null)))?((((map__51949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51949):map__51949);
var msg = map__51949__$1;
var files = cljs.core.get.call(null,map__51949__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__51949__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__51949__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__46608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52102){
var state_val_52103 = (state_52102[(1)]);
if((state_val_52103 === (7))){
var inst_51963 = (state_52102[(7)]);
var inst_51964 = (state_52102[(8)]);
var inst_51966 = (state_52102[(9)]);
var inst_51965 = (state_52102[(10)]);
var inst_51971 = cljs.core._nth.call(null,inst_51964,inst_51966);
var inst_51972 = figwheel.client.file_reloading.eval_body.call(null,inst_51971,opts);
var inst_51973 = (inst_51966 + (1));
var tmp52104 = inst_51963;
var tmp52105 = inst_51964;
var tmp52106 = inst_51965;
var inst_51963__$1 = tmp52104;
var inst_51964__$1 = tmp52105;
var inst_51965__$1 = tmp52106;
var inst_51966__$1 = inst_51973;
var state_52102__$1 = (function (){var statearr_52107 = state_52102;
(statearr_52107[(7)] = inst_51963__$1);

(statearr_52107[(8)] = inst_51964__$1);

(statearr_52107[(9)] = inst_51966__$1);

(statearr_52107[(11)] = inst_51972);

(statearr_52107[(10)] = inst_51965__$1);

return statearr_52107;
})();
var statearr_52108_52194 = state_52102__$1;
(statearr_52108_52194[(2)] = null);

(statearr_52108_52194[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (20))){
var inst_52006 = (state_52102[(12)]);
var inst_52014 = figwheel.client.file_reloading.sort_files.call(null,inst_52006);
var state_52102__$1 = state_52102;
var statearr_52109_52195 = state_52102__$1;
(statearr_52109_52195[(2)] = inst_52014);

(statearr_52109_52195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (27))){
var state_52102__$1 = state_52102;
var statearr_52110_52196 = state_52102__$1;
(statearr_52110_52196[(2)] = null);

(statearr_52110_52196[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (1))){
var inst_51955 = (state_52102[(13)]);
var inst_51952 = before_jsload.call(null,files);
var inst_51953 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_51954 = (function (){return ((function (inst_51955,inst_51952,inst_51953,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51697_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51697_SHARP_);
});
;})(inst_51955,inst_51952,inst_51953,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51955__$1 = cljs.core.filter.call(null,inst_51954,files);
var inst_51956 = cljs.core.not_empty.call(null,inst_51955__$1);
var state_52102__$1 = (function (){var statearr_52111 = state_52102;
(statearr_52111[(14)] = inst_51953);

(statearr_52111[(13)] = inst_51955__$1);

(statearr_52111[(15)] = inst_51952);

return statearr_52111;
})();
if(cljs.core.truth_(inst_51956)){
var statearr_52112_52197 = state_52102__$1;
(statearr_52112_52197[(1)] = (2));

} else {
var statearr_52113_52198 = state_52102__$1;
(statearr_52113_52198[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (24))){
var state_52102__$1 = state_52102;
var statearr_52114_52199 = state_52102__$1;
(statearr_52114_52199[(2)] = null);

(statearr_52114_52199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (39))){
var inst_52056 = (state_52102[(16)]);
var state_52102__$1 = state_52102;
var statearr_52115_52200 = state_52102__$1;
(statearr_52115_52200[(2)] = inst_52056);

(statearr_52115_52200[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (46))){
var inst_52097 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52116_52201 = state_52102__$1;
(statearr_52116_52201[(2)] = inst_52097);

(statearr_52116_52201[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (4))){
var inst_52000 = (state_52102[(2)]);
var inst_52001 = cljs.core.List.EMPTY;
var inst_52002 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52001);
var inst_52003 = (function (){return ((function (inst_52000,inst_52001,inst_52002,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51698_SHARP_){
var and__44424__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51698_SHARP_);
if(cljs.core.truth_(and__44424__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51698_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__51698_SHARP_)));
} else {
return and__44424__auto__;
}
});
;})(inst_52000,inst_52001,inst_52002,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52004 = cljs.core.filter.call(null,inst_52003,files);
var inst_52005 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52006 = cljs.core.concat.call(null,inst_52004,inst_52005);
var state_52102__$1 = (function (){var statearr_52117 = state_52102;
(statearr_52117[(17)] = inst_52002);

(statearr_52117[(18)] = inst_52000);

(statearr_52117[(12)] = inst_52006);

return statearr_52117;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52118_52202 = state_52102__$1;
(statearr_52118_52202[(1)] = (16));

} else {
var statearr_52119_52203 = state_52102__$1;
(statearr_52119_52203[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (15))){
var inst_51990 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52120_52204 = state_52102__$1;
(statearr_52120_52204[(2)] = inst_51990);

(statearr_52120_52204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (21))){
var inst_52016 = (state_52102[(19)]);
var inst_52016__$1 = (state_52102[(2)]);
var inst_52017 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52016__$1);
var state_52102__$1 = (function (){var statearr_52121 = state_52102;
(statearr_52121[(19)] = inst_52016__$1);

return statearr_52121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52102__$1,(22),inst_52017);
} else {
if((state_val_52103 === (31))){
var inst_52100 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52102__$1,inst_52100);
} else {
if((state_val_52103 === (32))){
var inst_52056 = (state_52102[(16)]);
var inst_52061 = inst_52056.cljs$lang$protocol_mask$partition0$;
var inst_52062 = (inst_52061 & (64));
var inst_52063 = inst_52056.cljs$core$ISeq$;
var inst_52064 = (inst_52062) || (inst_52063);
var state_52102__$1 = state_52102;
if(cljs.core.truth_(inst_52064)){
var statearr_52122_52205 = state_52102__$1;
(statearr_52122_52205[(1)] = (35));

} else {
var statearr_52123_52206 = state_52102__$1;
(statearr_52123_52206[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (40))){
var inst_52077 = (state_52102[(20)]);
var inst_52076 = (state_52102[(2)]);
var inst_52077__$1 = cljs.core.get.call(null,inst_52076,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52078 = cljs.core.get.call(null,inst_52076,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52079 = cljs.core.not_empty.call(null,inst_52077__$1);
var state_52102__$1 = (function (){var statearr_52124 = state_52102;
(statearr_52124[(20)] = inst_52077__$1);

(statearr_52124[(21)] = inst_52078);

return statearr_52124;
})();
if(cljs.core.truth_(inst_52079)){
var statearr_52125_52207 = state_52102__$1;
(statearr_52125_52207[(1)] = (41));

} else {
var statearr_52126_52208 = state_52102__$1;
(statearr_52126_52208[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (33))){
var state_52102__$1 = state_52102;
var statearr_52127_52209 = state_52102__$1;
(statearr_52127_52209[(2)] = false);

(statearr_52127_52209[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (13))){
var inst_51976 = (state_52102[(22)]);
var inst_51980 = cljs.core.chunk_first.call(null,inst_51976);
var inst_51981 = cljs.core.chunk_rest.call(null,inst_51976);
var inst_51982 = cljs.core.count.call(null,inst_51980);
var inst_51963 = inst_51981;
var inst_51964 = inst_51980;
var inst_51965 = inst_51982;
var inst_51966 = (0);
var state_52102__$1 = (function (){var statearr_52128 = state_52102;
(statearr_52128[(7)] = inst_51963);

(statearr_52128[(8)] = inst_51964);

(statearr_52128[(9)] = inst_51966);

(statearr_52128[(10)] = inst_51965);

return statearr_52128;
})();
var statearr_52129_52210 = state_52102__$1;
(statearr_52129_52210[(2)] = null);

(statearr_52129_52210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (22))){
var inst_52020 = (state_52102[(23)]);
var inst_52024 = (state_52102[(24)]);
var inst_52016 = (state_52102[(19)]);
var inst_52019 = (state_52102[(25)]);
var inst_52019__$1 = (state_52102[(2)]);
var inst_52020__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52019__$1);
var inst_52021 = (function (){var all_files = inst_52016;
var res_SINGLEQUOTE_ = inst_52019__$1;
var res = inst_52020__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52020,inst_52024,inst_52016,inst_52019,inst_52019__$1,inst_52020__$1,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51699_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51699_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52020,inst_52024,inst_52016,inst_52019,inst_52019__$1,inst_52020__$1,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52022 = cljs.core.filter.call(null,inst_52021,inst_52019__$1);
var inst_52023 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52024__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52023);
var inst_52025 = cljs.core.not_empty.call(null,inst_52024__$1);
var state_52102__$1 = (function (){var statearr_52130 = state_52102;
(statearr_52130[(23)] = inst_52020__$1);

(statearr_52130[(24)] = inst_52024__$1);

(statearr_52130[(26)] = inst_52022);

(statearr_52130[(25)] = inst_52019__$1);

return statearr_52130;
})();
if(cljs.core.truth_(inst_52025)){
var statearr_52131_52211 = state_52102__$1;
(statearr_52131_52211[(1)] = (23));

} else {
var statearr_52132_52212 = state_52102__$1;
(statearr_52132_52212[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (36))){
var state_52102__$1 = state_52102;
var statearr_52133_52213 = state_52102__$1;
(statearr_52133_52213[(2)] = false);

(statearr_52133_52213[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (41))){
var inst_52077 = (state_52102[(20)]);
var inst_52081 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52082 = cljs.core.map.call(null,inst_52081,inst_52077);
var inst_52083 = cljs.core.pr_str.call(null,inst_52082);
var inst_52084 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_52083)].join('');
var inst_52085 = figwheel.client.utils.log.call(null,inst_52084);
var state_52102__$1 = state_52102;
var statearr_52134_52214 = state_52102__$1;
(statearr_52134_52214[(2)] = inst_52085);

(statearr_52134_52214[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (43))){
var inst_52078 = (state_52102[(21)]);
var inst_52088 = (state_52102[(2)]);
var inst_52089 = cljs.core.not_empty.call(null,inst_52078);
var state_52102__$1 = (function (){var statearr_52135 = state_52102;
(statearr_52135[(27)] = inst_52088);

return statearr_52135;
})();
if(cljs.core.truth_(inst_52089)){
var statearr_52136_52215 = state_52102__$1;
(statearr_52136_52215[(1)] = (44));

} else {
var statearr_52137_52216 = state_52102__$1;
(statearr_52137_52216[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (29))){
var inst_52020 = (state_52102[(23)]);
var inst_52024 = (state_52102[(24)]);
var inst_52016 = (state_52102[(19)]);
var inst_52022 = (state_52102[(26)]);
var inst_52019 = (state_52102[(25)]);
var inst_52056 = (state_52102[(16)]);
var inst_52052 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52055 = (function (){var all_files = inst_52016;
var res_SINGLEQUOTE_ = inst_52019;
var res = inst_52020;
var files_not_loaded = inst_52022;
var dependencies_that_loaded = inst_52024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52020,inst_52024,inst_52016,inst_52022,inst_52019,inst_52056,inst_52052,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52054){
var map__52138 = p__52054;
var map__52138__$1 = ((((!((map__52138 == null)))?((((map__52138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52138):map__52138);
var namespace = cljs.core.get.call(null,map__52138__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52020,inst_52024,inst_52016,inst_52022,inst_52019,inst_52056,inst_52052,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52056__$1 = cljs.core.group_by.call(null,inst_52055,inst_52022);
var inst_52058 = (inst_52056__$1 == null);
var inst_52059 = cljs.core.not.call(null,inst_52058);
var state_52102__$1 = (function (){var statearr_52140 = state_52102;
(statearr_52140[(28)] = inst_52052);

(statearr_52140[(16)] = inst_52056__$1);

return statearr_52140;
})();
if(inst_52059){
var statearr_52141_52217 = state_52102__$1;
(statearr_52141_52217[(1)] = (32));

} else {
var statearr_52142_52218 = state_52102__$1;
(statearr_52142_52218[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (44))){
var inst_52078 = (state_52102[(21)]);
var inst_52091 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52078);
var inst_52092 = cljs.core.pr_str.call(null,inst_52091);
var inst_52093 = [cljs.core.str("not required: "),cljs.core.str(inst_52092)].join('');
var inst_52094 = figwheel.client.utils.log.call(null,inst_52093);
var state_52102__$1 = state_52102;
var statearr_52143_52219 = state_52102__$1;
(statearr_52143_52219[(2)] = inst_52094);

(statearr_52143_52219[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (6))){
var inst_51997 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52144_52220 = state_52102__$1;
(statearr_52144_52220[(2)] = inst_51997);

(statearr_52144_52220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (28))){
var inst_52022 = (state_52102[(26)]);
var inst_52049 = (state_52102[(2)]);
var inst_52050 = cljs.core.not_empty.call(null,inst_52022);
var state_52102__$1 = (function (){var statearr_52145 = state_52102;
(statearr_52145[(29)] = inst_52049);

return statearr_52145;
})();
if(cljs.core.truth_(inst_52050)){
var statearr_52146_52221 = state_52102__$1;
(statearr_52146_52221[(1)] = (29));

} else {
var statearr_52147_52222 = state_52102__$1;
(statearr_52147_52222[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (25))){
var inst_52020 = (state_52102[(23)]);
var inst_52036 = (state_52102[(2)]);
var inst_52037 = cljs.core.not_empty.call(null,inst_52020);
var state_52102__$1 = (function (){var statearr_52148 = state_52102;
(statearr_52148[(30)] = inst_52036);

return statearr_52148;
})();
if(cljs.core.truth_(inst_52037)){
var statearr_52149_52223 = state_52102__$1;
(statearr_52149_52223[(1)] = (26));

} else {
var statearr_52150_52224 = state_52102__$1;
(statearr_52150_52224[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (34))){
var inst_52071 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
if(cljs.core.truth_(inst_52071)){
var statearr_52151_52225 = state_52102__$1;
(statearr_52151_52225[(1)] = (38));

} else {
var statearr_52152_52226 = state_52102__$1;
(statearr_52152_52226[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (17))){
var state_52102__$1 = state_52102;
var statearr_52153_52227 = state_52102__$1;
(statearr_52153_52227[(2)] = recompile_dependents);

(statearr_52153_52227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (3))){
var state_52102__$1 = state_52102;
var statearr_52154_52228 = state_52102__$1;
(statearr_52154_52228[(2)] = null);

(statearr_52154_52228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (12))){
var inst_51993 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52155_52229 = state_52102__$1;
(statearr_52155_52229[(2)] = inst_51993);

(statearr_52155_52229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (2))){
var inst_51955 = (state_52102[(13)]);
var inst_51962 = cljs.core.seq.call(null,inst_51955);
var inst_51963 = inst_51962;
var inst_51964 = null;
var inst_51965 = (0);
var inst_51966 = (0);
var state_52102__$1 = (function (){var statearr_52156 = state_52102;
(statearr_52156[(7)] = inst_51963);

(statearr_52156[(8)] = inst_51964);

(statearr_52156[(9)] = inst_51966);

(statearr_52156[(10)] = inst_51965);

return statearr_52156;
})();
var statearr_52157_52230 = state_52102__$1;
(statearr_52157_52230[(2)] = null);

(statearr_52157_52230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (23))){
var inst_52020 = (state_52102[(23)]);
var inst_52024 = (state_52102[(24)]);
var inst_52016 = (state_52102[(19)]);
var inst_52022 = (state_52102[(26)]);
var inst_52019 = (state_52102[(25)]);
var inst_52027 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52029 = (function (){var all_files = inst_52016;
var res_SINGLEQUOTE_ = inst_52019;
var res = inst_52020;
var files_not_loaded = inst_52022;
var dependencies_that_loaded = inst_52024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52020,inst_52024,inst_52016,inst_52022,inst_52019,inst_52027,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52028){
var map__52158 = p__52028;
var map__52158__$1 = ((((!((map__52158 == null)))?((((map__52158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52158):map__52158);
var request_url = cljs.core.get.call(null,map__52158__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52020,inst_52024,inst_52016,inst_52022,inst_52019,inst_52027,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52030 = cljs.core.reverse.call(null,inst_52024);
var inst_52031 = cljs.core.map.call(null,inst_52029,inst_52030);
var inst_52032 = cljs.core.pr_str.call(null,inst_52031);
var inst_52033 = figwheel.client.utils.log.call(null,inst_52032);
var state_52102__$1 = (function (){var statearr_52160 = state_52102;
(statearr_52160[(31)] = inst_52027);

return statearr_52160;
})();
var statearr_52161_52231 = state_52102__$1;
(statearr_52161_52231[(2)] = inst_52033);

(statearr_52161_52231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (35))){
var state_52102__$1 = state_52102;
var statearr_52162_52232 = state_52102__$1;
(statearr_52162_52232[(2)] = true);

(statearr_52162_52232[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (19))){
var inst_52006 = (state_52102[(12)]);
var inst_52012 = figwheel.client.file_reloading.expand_files.call(null,inst_52006);
var state_52102__$1 = state_52102;
var statearr_52163_52233 = state_52102__$1;
(statearr_52163_52233[(2)] = inst_52012);

(statearr_52163_52233[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (11))){
var state_52102__$1 = state_52102;
var statearr_52164_52234 = state_52102__$1;
(statearr_52164_52234[(2)] = null);

(statearr_52164_52234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (9))){
var inst_51995 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52165_52235 = state_52102__$1;
(statearr_52165_52235[(2)] = inst_51995);

(statearr_52165_52235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (5))){
var inst_51966 = (state_52102[(9)]);
var inst_51965 = (state_52102[(10)]);
var inst_51968 = (inst_51966 < inst_51965);
var inst_51969 = inst_51968;
var state_52102__$1 = state_52102;
if(cljs.core.truth_(inst_51969)){
var statearr_52166_52236 = state_52102__$1;
(statearr_52166_52236[(1)] = (7));

} else {
var statearr_52167_52237 = state_52102__$1;
(statearr_52167_52237[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (14))){
var inst_51976 = (state_52102[(22)]);
var inst_51985 = cljs.core.first.call(null,inst_51976);
var inst_51986 = figwheel.client.file_reloading.eval_body.call(null,inst_51985,opts);
var inst_51987 = cljs.core.next.call(null,inst_51976);
var inst_51963 = inst_51987;
var inst_51964 = null;
var inst_51965 = (0);
var inst_51966 = (0);
var state_52102__$1 = (function (){var statearr_52168 = state_52102;
(statearr_52168[(7)] = inst_51963);

(statearr_52168[(8)] = inst_51964);

(statearr_52168[(9)] = inst_51966);

(statearr_52168[(10)] = inst_51965);

(statearr_52168[(32)] = inst_51986);

return statearr_52168;
})();
var statearr_52169_52238 = state_52102__$1;
(statearr_52169_52238[(2)] = null);

(statearr_52169_52238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (45))){
var state_52102__$1 = state_52102;
var statearr_52170_52239 = state_52102__$1;
(statearr_52170_52239[(2)] = null);

(statearr_52170_52239[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (26))){
var inst_52020 = (state_52102[(23)]);
var inst_52024 = (state_52102[(24)]);
var inst_52016 = (state_52102[(19)]);
var inst_52022 = (state_52102[(26)]);
var inst_52019 = (state_52102[(25)]);
var inst_52039 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52041 = (function (){var all_files = inst_52016;
var res_SINGLEQUOTE_ = inst_52019;
var res = inst_52020;
var files_not_loaded = inst_52022;
var dependencies_that_loaded = inst_52024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52020,inst_52024,inst_52016,inst_52022,inst_52019,inst_52039,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52040){
var map__52171 = p__52040;
var map__52171__$1 = ((((!((map__52171 == null)))?((((map__52171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52171):map__52171);
var namespace = cljs.core.get.call(null,map__52171__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52020,inst_52024,inst_52016,inst_52022,inst_52019,inst_52039,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52042 = cljs.core.map.call(null,inst_52041,inst_52020);
var inst_52043 = cljs.core.pr_str.call(null,inst_52042);
var inst_52044 = figwheel.client.utils.log.call(null,inst_52043);
var inst_52045 = (function (){var all_files = inst_52016;
var res_SINGLEQUOTE_ = inst_52019;
var res = inst_52020;
var files_not_loaded = inst_52022;
var dependencies_that_loaded = inst_52024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52020,inst_52024,inst_52016,inst_52022,inst_52019,inst_52039,inst_52041,inst_52042,inst_52043,inst_52044,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52020,inst_52024,inst_52016,inst_52022,inst_52019,inst_52039,inst_52041,inst_52042,inst_52043,inst_52044,state_val_52103,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52046 = setTimeout(inst_52045,(10));
var state_52102__$1 = (function (){var statearr_52173 = state_52102;
(statearr_52173[(33)] = inst_52039);

(statearr_52173[(34)] = inst_52044);

return statearr_52173;
})();
var statearr_52174_52240 = state_52102__$1;
(statearr_52174_52240[(2)] = inst_52046);

(statearr_52174_52240[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (16))){
var state_52102__$1 = state_52102;
var statearr_52175_52241 = state_52102__$1;
(statearr_52175_52241[(2)] = reload_dependents);

(statearr_52175_52241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (38))){
var inst_52056 = (state_52102[(16)]);
var inst_52073 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52056);
var state_52102__$1 = state_52102;
var statearr_52176_52242 = state_52102__$1;
(statearr_52176_52242[(2)] = inst_52073);

(statearr_52176_52242[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (30))){
var state_52102__$1 = state_52102;
var statearr_52177_52243 = state_52102__$1;
(statearr_52177_52243[(2)] = null);

(statearr_52177_52243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (10))){
var inst_51976 = (state_52102[(22)]);
var inst_51978 = cljs.core.chunked_seq_QMARK_.call(null,inst_51976);
var state_52102__$1 = state_52102;
if(inst_51978){
var statearr_52178_52244 = state_52102__$1;
(statearr_52178_52244[(1)] = (13));

} else {
var statearr_52179_52245 = state_52102__$1;
(statearr_52179_52245[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (18))){
var inst_52010 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
if(cljs.core.truth_(inst_52010)){
var statearr_52180_52246 = state_52102__$1;
(statearr_52180_52246[(1)] = (19));

} else {
var statearr_52181_52247 = state_52102__$1;
(statearr_52181_52247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (42))){
var state_52102__$1 = state_52102;
var statearr_52182_52248 = state_52102__$1;
(statearr_52182_52248[(2)] = null);

(statearr_52182_52248[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (37))){
var inst_52068 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52183_52249 = state_52102__$1;
(statearr_52183_52249[(2)] = inst_52068);

(statearr_52183_52249[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (8))){
var inst_51963 = (state_52102[(7)]);
var inst_51976 = (state_52102[(22)]);
var inst_51976__$1 = cljs.core.seq.call(null,inst_51963);
var state_52102__$1 = (function (){var statearr_52184 = state_52102;
(statearr_52184[(22)] = inst_51976__$1);

return statearr_52184;
})();
if(inst_51976__$1){
var statearr_52185_52250 = state_52102__$1;
(statearr_52185_52250[(1)] = (10));

} else {
var statearr_52186_52251 = state_52102__$1;
(statearr_52186_52251[(1)] = (11));

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
});})(c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__46454__auto__,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46455__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46455__auto____0 = (function (){
var statearr_52190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52190[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__46455__auto__);

(statearr_52190[(1)] = (1));

return statearr_52190;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__46455__auto____1 = (function (state_52102){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_52102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e52191){if((e52191 instanceof Object)){
var ex__46458__auto__ = e52191;
var statearr_52192_52252 = state_52102;
(statearr_52192_52252[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52253 = state_52102;
state_52102 = G__52253;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__46455__auto__ = function(state_52102){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46455__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46455__auto____1.call(this,state_52102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46455__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__46455__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__46610__auto__ = (function (){var statearr_52193 = f__46609__auto__.call(null);
(statearr_52193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto__);

return statearr_52193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto__,map__51948,map__51948__$1,opts,before_jsload,on_jsload,reload_dependents,map__51949,map__51949__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__46608__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52256,link){
var map__52259 = p__52256;
var map__52259__$1 = ((((!((map__52259 == null)))?((((map__52259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52259):map__52259);
var file = cljs.core.get.call(null,map__52259__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52259,map__52259__$1,file){
return (function (p1__52254_SHARP_,p2__52255_SHARP_){
if(cljs.core._EQ_.call(null,p1__52254_SHARP_,p2__52255_SHARP_)){
return p1__52254_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52259,map__52259__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52265){
var map__52266 = p__52265;
var map__52266__$1 = ((((!((map__52266 == null)))?((((map__52266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52266):map__52266);
var match_length = cljs.core.get.call(null,map__52266__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52266__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52261_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52261_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52268_SHARP_,p2__52269_SHARP_){
return cljs.core.assoc.call(null,p1__52268_SHARP_,cljs.core.get.call(null,p2__52269_SHARP_,key),p2__52269_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_52270 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_52270);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_52270);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52271,p__52272){
var map__52277 = p__52271;
var map__52277__$1 = ((((!((map__52277 == null)))?((((map__52277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52277):map__52277);
var on_cssload = cljs.core.get.call(null,map__52277__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52278 = p__52272;
var map__52278__$1 = ((((!((map__52278 == null)))?((((map__52278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52278):map__52278);
var files_msg = map__52278__$1;
var files = cljs.core.get.call(null,map__52278__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1490223443417