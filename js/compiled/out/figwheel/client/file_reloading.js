// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
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
var or__44826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__44826__auto__){
return or__44826__auto__;
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
var or__44826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__44826__auto__)){
return or__44826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__52929_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__52929_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
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
var seq__52934 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__52935 = null;
var count__52936 = (0);
var i__52937 = (0);
while(true){
if((i__52937 < count__52936)){
var n = cljs.core._nth.call(null,chunk__52935,i__52937);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52938 = seq__52934;
var G__52939 = chunk__52935;
var G__52940 = count__52936;
var G__52941 = (i__52937 + (1));
seq__52934 = G__52938;
chunk__52935 = G__52939;
count__52936 = G__52940;
i__52937 = G__52941;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52934);
if(temp__4657__auto__){
var seq__52934__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52934__$1)){
var c__45645__auto__ = cljs.core.chunk_first.call(null,seq__52934__$1);
var G__52942 = cljs.core.chunk_rest.call(null,seq__52934__$1);
var G__52943 = c__45645__auto__;
var G__52944 = cljs.core.count.call(null,c__45645__auto__);
var G__52945 = (0);
seq__52934 = G__52942;
chunk__52935 = G__52943;
count__52936 = G__52944;
i__52937 = G__52945;
continue;
} else {
var n = cljs.core.first.call(null,seq__52934__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52946 = cljs.core.next.call(null,seq__52934__$1);
var G__52947 = null;
var G__52948 = (0);
var G__52949 = (0);
seq__52934 = G__52946;
chunk__52935 = G__52947;
count__52936 = G__52948;
i__52937 = G__52949;
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

var seq__53000_53011 = cljs.core.seq.call(null,deps);
var chunk__53001_53012 = null;
var count__53002_53013 = (0);
var i__53003_53014 = (0);
while(true){
if((i__53003_53014 < count__53002_53013)){
var dep_53015 = cljs.core._nth.call(null,chunk__53001_53012,i__53003_53014);
topo_sort_helper_STAR_.call(null,dep_53015,(depth + (1)),state);

var G__53016 = seq__53000_53011;
var G__53017 = chunk__53001_53012;
var G__53018 = count__53002_53013;
var G__53019 = (i__53003_53014 + (1));
seq__53000_53011 = G__53016;
chunk__53001_53012 = G__53017;
count__53002_53013 = G__53018;
i__53003_53014 = G__53019;
continue;
} else {
var temp__4657__auto___53020 = cljs.core.seq.call(null,seq__53000_53011);
if(temp__4657__auto___53020){
var seq__53000_53021__$1 = temp__4657__auto___53020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53000_53021__$1)){
var c__45645__auto___53022 = cljs.core.chunk_first.call(null,seq__53000_53021__$1);
var G__53023 = cljs.core.chunk_rest.call(null,seq__53000_53021__$1);
var G__53024 = c__45645__auto___53022;
var G__53025 = cljs.core.count.call(null,c__45645__auto___53022);
var G__53026 = (0);
seq__53000_53011 = G__53023;
chunk__53001_53012 = G__53024;
count__53002_53013 = G__53025;
i__53003_53014 = G__53026;
continue;
} else {
var dep_53027 = cljs.core.first.call(null,seq__53000_53021__$1);
topo_sort_helper_STAR_.call(null,dep_53027,(depth + (1)),state);

var G__53028 = cljs.core.next.call(null,seq__53000_53021__$1);
var G__53029 = null;
var G__53030 = (0);
var G__53031 = (0);
seq__53000_53011 = G__53028;
chunk__53001_53012 = G__53029;
count__53002_53013 = G__53030;
i__53003_53014 = G__53031;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__53004){
var vec__53008 = p__53004;
var seq__53009 = cljs.core.seq.call(null,vec__53008);
var first__53010 = cljs.core.first.call(null,seq__53009);
var seq__53009__$1 = cljs.core.next.call(null,seq__53009);
var x = first__53010;
var xs = seq__53009__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__53008,seq__53009,first__53010,seq__53009__$1,x,xs,get_deps__$1){
return (function (p1__52950_SHARP_){
return clojure.set.difference.call(null,p1__52950_SHARP_,x);
});})(vec__53008,seq__53009,first__53010,seq__53009__$1,x,xs,get_deps__$1))
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

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__53044 = cljs.core.seq.call(null,provides);
var chunk__53045 = null;
var count__53046 = (0);
var i__53047 = (0);
while(true){
if((i__53047 < count__53046)){
var prov = cljs.core._nth.call(null,chunk__53045,i__53047);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53048_53056 = cljs.core.seq.call(null,requires);
var chunk__53049_53057 = null;
var count__53050_53058 = (0);
var i__53051_53059 = (0);
while(true){
if((i__53051_53059 < count__53050_53058)){
var req_53060 = cljs.core._nth.call(null,chunk__53049_53057,i__53051_53059);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53060,prov);

var G__53061 = seq__53048_53056;
var G__53062 = chunk__53049_53057;
var G__53063 = count__53050_53058;
var G__53064 = (i__53051_53059 + (1));
seq__53048_53056 = G__53061;
chunk__53049_53057 = G__53062;
count__53050_53058 = G__53063;
i__53051_53059 = G__53064;
continue;
} else {
var temp__4657__auto___53065 = cljs.core.seq.call(null,seq__53048_53056);
if(temp__4657__auto___53065){
var seq__53048_53066__$1 = temp__4657__auto___53065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53048_53066__$1)){
var c__45645__auto___53067 = cljs.core.chunk_first.call(null,seq__53048_53066__$1);
var G__53068 = cljs.core.chunk_rest.call(null,seq__53048_53066__$1);
var G__53069 = c__45645__auto___53067;
var G__53070 = cljs.core.count.call(null,c__45645__auto___53067);
var G__53071 = (0);
seq__53048_53056 = G__53068;
chunk__53049_53057 = G__53069;
count__53050_53058 = G__53070;
i__53051_53059 = G__53071;
continue;
} else {
var req_53072 = cljs.core.first.call(null,seq__53048_53066__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53072,prov);

var G__53073 = cljs.core.next.call(null,seq__53048_53066__$1);
var G__53074 = null;
var G__53075 = (0);
var G__53076 = (0);
seq__53048_53056 = G__53073;
chunk__53049_53057 = G__53074;
count__53050_53058 = G__53075;
i__53051_53059 = G__53076;
continue;
}
} else {
}
}
break;
}

var G__53077 = seq__53044;
var G__53078 = chunk__53045;
var G__53079 = count__53046;
var G__53080 = (i__53047 + (1));
seq__53044 = G__53077;
chunk__53045 = G__53078;
count__53046 = G__53079;
i__53047 = G__53080;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53044);
if(temp__4657__auto__){
var seq__53044__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53044__$1)){
var c__45645__auto__ = cljs.core.chunk_first.call(null,seq__53044__$1);
var G__53081 = cljs.core.chunk_rest.call(null,seq__53044__$1);
var G__53082 = c__45645__auto__;
var G__53083 = cljs.core.count.call(null,c__45645__auto__);
var G__53084 = (0);
seq__53044 = G__53081;
chunk__53045 = G__53082;
count__53046 = G__53083;
i__53047 = G__53084;
continue;
} else {
var prov = cljs.core.first.call(null,seq__53044__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53052_53085 = cljs.core.seq.call(null,requires);
var chunk__53053_53086 = null;
var count__53054_53087 = (0);
var i__53055_53088 = (0);
while(true){
if((i__53055_53088 < count__53054_53087)){
var req_53089 = cljs.core._nth.call(null,chunk__53053_53086,i__53055_53088);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53089,prov);

var G__53090 = seq__53052_53085;
var G__53091 = chunk__53053_53086;
var G__53092 = count__53054_53087;
var G__53093 = (i__53055_53088 + (1));
seq__53052_53085 = G__53090;
chunk__53053_53086 = G__53091;
count__53054_53087 = G__53092;
i__53055_53088 = G__53093;
continue;
} else {
var temp__4657__auto___53094__$1 = cljs.core.seq.call(null,seq__53052_53085);
if(temp__4657__auto___53094__$1){
var seq__53052_53095__$1 = temp__4657__auto___53094__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53052_53095__$1)){
var c__45645__auto___53096 = cljs.core.chunk_first.call(null,seq__53052_53095__$1);
var G__53097 = cljs.core.chunk_rest.call(null,seq__53052_53095__$1);
var G__53098 = c__45645__auto___53096;
var G__53099 = cljs.core.count.call(null,c__45645__auto___53096);
var G__53100 = (0);
seq__53052_53085 = G__53097;
chunk__53053_53086 = G__53098;
count__53054_53087 = G__53099;
i__53055_53088 = G__53100;
continue;
} else {
var req_53101 = cljs.core.first.call(null,seq__53052_53095__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53101,prov);

var G__53102 = cljs.core.next.call(null,seq__53052_53095__$1);
var G__53103 = null;
var G__53104 = (0);
var G__53105 = (0);
seq__53052_53085 = G__53102;
chunk__53053_53086 = G__53103;
count__53054_53087 = G__53104;
i__53055_53088 = G__53105;
continue;
}
} else {
}
}
break;
}

var G__53106 = cljs.core.next.call(null,seq__53044__$1);
var G__53107 = null;
var G__53108 = (0);
var G__53109 = (0);
seq__53044 = G__53106;
chunk__53045 = G__53107;
count__53046 = G__53108;
i__53047 = G__53109;
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
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__53114_53118 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__53115_53119 = null;
var count__53116_53120 = (0);
var i__53117_53121 = (0);
while(true){
if((i__53117_53121 < count__53116_53120)){
var ns_53122 = cljs.core._nth.call(null,chunk__53115_53119,i__53117_53121);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53122);

var G__53123 = seq__53114_53118;
var G__53124 = chunk__53115_53119;
var G__53125 = count__53116_53120;
var G__53126 = (i__53117_53121 + (1));
seq__53114_53118 = G__53123;
chunk__53115_53119 = G__53124;
count__53116_53120 = G__53125;
i__53117_53121 = G__53126;
continue;
} else {
var temp__4657__auto___53127 = cljs.core.seq.call(null,seq__53114_53118);
if(temp__4657__auto___53127){
var seq__53114_53128__$1 = temp__4657__auto___53127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53114_53128__$1)){
var c__45645__auto___53129 = cljs.core.chunk_first.call(null,seq__53114_53128__$1);
var G__53130 = cljs.core.chunk_rest.call(null,seq__53114_53128__$1);
var G__53131 = c__45645__auto___53129;
var G__53132 = cljs.core.count.call(null,c__45645__auto___53129);
var G__53133 = (0);
seq__53114_53118 = G__53130;
chunk__53115_53119 = G__53131;
count__53116_53120 = G__53132;
i__53117_53121 = G__53133;
continue;
} else {
var ns_53134 = cljs.core.first.call(null,seq__53114_53128__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53134);

var G__53135 = cljs.core.next.call(null,seq__53114_53128__$1);
var G__53136 = null;
var G__53137 = (0);
var G__53138 = (0);
seq__53114_53118 = G__53135;
chunk__53115_53119 = G__53136;
count__53116_53120 = G__53137;
i__53117_53121 = G__53138;
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
goog.require_figwheel_backup_ = (function (){var or__44826__auto__ = goog.require__;
if(cljs.core.truth_(or__44826__auto__)){
return or__44826__auto__;
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
var G__53139__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__53139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53140__i = 0, G__53140__a = new Array(arguments.length -  0);
while (G__53140__i < G__53140__a.length) {G__53140__a[G__53140__i] = arguments[G__53140__i + 0]; ++G__53140__i;}
  args = new cljs.core.IndexedSeq(G__53140__a,0);
} 
return G__53139__delegate.call(this,args);};
G__53139.cljs$lang$maxFixedArity = 0;
G__53139.cljs$lang$applyTo = (function (arglist__53141){
var args = cljs.core.seq(arglist__53141);
return G__53139__delegate(args);
});
G__53139.cljs$core$IFn$_invoke$arity$variadic = G__53139__delegate;
return G__53139;
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
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__53142 = cljs.core._EQ_;
var expr__53143 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__53142.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__53143))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__53142,expr__53143){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__53142,expr__53143))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__53142,expr__53143){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e53145){if((e53145 instanceof Error)){
var e = e53145;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e53145;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__53142,expr__53143))
} else {
if(cljs.core.truth_(pred__53142.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__53143))){
return ((function (pred__53142,expr__53143){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__53142,expr__53143){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__53142,expr__53143))
);

return deferred.addErrback(((function (deferred,pred__53142,expr__53143){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__53142,expr__53143))
);
});
;})(pred__53142,expr__53143))
} else {
if(cljs.core.truth_(pred__53142.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__53143))){
return ((function (pred__53142,expr__53143){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e53146){if((e53146 instanceof Error)){
var e = e53146;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e53146;

}
}})());
});
;})(pred__53142,expr__53143))
} else {
return ((function (pred__53142,expr__53143){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__53142,expr__53143))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__53147,callback){
var map__53150 = p__53147;
var map__53150__$1 = ((((!((map__53150 == null)))?((((map__53150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53150):map__53150);
var file_msg = map__53150__$1;
var request_url = cljs.core.get.call(null,map__53150__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__53150,map__53150__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__53150,map__53150__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__48244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto__){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto__){
return (function (state_53174){
var state_val_53175 = (state_53174[(1)]);
if((state_val_53175 === (7))){
var inst_53170 = (state_53174[(2)]);
var state_53174__$1 = state_53174;
var statearr_53176_53196 = state_53174__$1;
(statearr_53176_53196[(2)] = inst_53170);

(statearr_53176_53196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53175 === (1))){
var state_53174__$1 = state_53174;
var statearr_53177_53197 = state_53174__$1;
(statearr_53177_53197[(2)] = null);

(statearr_53177_53197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53175 === (4))){
var inst_53154 = (state_53174[(7)]);
var inst_53154__$1 = (state_53174[(2)]);
var state_53174__$1 = (function (){var statearr_53178 = state_53174;
(statearr_53178[(7)] = inst_53154__$1);

return statearr_53178;
})();
if(cljs.core.truth_(inst_53154__$1)){
var statearr_53179_53198 = state_53174__$1;
(statearr_53179_53198[(1)] = (5));

} else {
var statearr_53180_53199 = state_53174__$1;
(statearr_53180_53199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53175 === (6))){
var state_53174__$1 = state_53174;
var statearr_53181_53200 = state_53174__$1;
(statearr_53181_53200[(2)] = null);

(statearr_53181_53200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53175 === (3))){
var inst_53172 = (state_53174[(2)]);
var state_53174__$1 = state_53174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53174__$1,inst_53172);
} else {
if((state_val_53175 === (2))){
var state_53174__$1 = state_53174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53174__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_53175 === (11))){
var inst_53166 = (state_53174[(2)]);
var state_53174__$1 = (function (){var statearr_53182 = state_53174;
(statearr_53182[(8)] = inst_53166);

return statearr_53182;
})();
var statearr_53183_53201 = state_53174__$1;
(statearr_53183_53201[(2)] = null);

(statearr_53183_53201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53175 === (9))){
var inst_53160 = (state_53174[(9)]);
var inst_53158 = (state_53174[(10)]);
var inst_53162 = inst_53160.call(null,inst_53158);
var state_53174__$1 = state_53174;
var statearr_53184_53202 = state_53174__$1;
(statearr_53184_53202[(2)] = inst_53162);

(statearr_53184_53202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53175 === (5))){
var inst_53154 = (state_53174[(7)]);
var inst_53156 = figwheel.client.file_reloading.blocking_load.call(null,inst_53154);
var state_53174__$1 = state_53174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53174__$1,(8),inst_53156);
} else {
if((state_val_53175 === (10))){
var inst_53158 = (state_53174[(10)]);
var inst_53164 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_53158);
var state_53174__$1 = state_53174;
var statearr_53185_53203 = state_53174__$1;
(statearr_53185_53203[(2)] = inst_53164);

(statearr_53185_53203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53175 === (8))){
var inst_53154 = (state_53174[(7)]);
var inst_53160 = (state_53174[(9)]);
var inst_53158 = (state_53174[(2)]);
var inst_53159 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_53160__$1 = cljs.core.get.call(null,inst_53159,inst_53154);
var state_53174__$1 = (function (){var statearr_53186 = state_53174;
(statearr_53186[(9)] = inst_53160__$1);

(statearr_53186[(10)] = inst_53158);

return statearr_53186;
})();
if(cljs.core.truth_(inst_53160__$1)){
var statearr_53187_53204 = state_53174__$1;
(statearr_53187_53204[(1)] = (9));

} else {
var statearr_53188_53205 = state_53174__$1;
(statearr_53188_53205[(1)] = (10));

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
});})(c__48244__auto__))
;
return ((function (switch__48132__auto__,c__48244__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__48133__auto__ = null;
var figwheel$client$file_reloading$state_machine__48133__auto____0 = (function (){
var statearr_53192 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53192[(0)] = figwheel$client$file_reloading$state_machine__48133__auto__);

(statearr_53192[(1)] = (1));

return statearr_53192;
});
var figwheel$client$file_reloading$state_machine__48133__auto____1 = (function (state_53174){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_53174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e53193){if((e53193 instanceof Object)){
var ex__48136__auto__ = e53193;
var statearr_53194_53206 = state_53174;
(statearr_53194_53206[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53207 = state_53174;
state_53174 = G__53207;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__48133__auto__ = function(state_53174){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__48133__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__48133__auto____1.call(this,state_53174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__48133__auto____0;
figwheel$client$file_reloading$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__48133__auto____1;
return figwheel$client$file_reloading$state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto__))
})();
var state__48246__auto__ = (function (){var statearr_53195 = f__48245__auto__.call(null);
(statearr_53195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto__);

return statearr_53195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto__))
);

return c__48244__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__53208,callback){
var map__53211 = p__53208;
var map__53211__$1 = ((((!((map__53211 == null)))?((((map__53211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53211):map__53211);
var file_msg = map__53211__$1;
var namespace = cljs.core.get.call(null,map__53211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__53211,map__53211__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__53211,map__53211__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__53213){
var map__53216 = p__53213;
var map__53216__$1 = ((((!((map__53216 == null)))?((((map__53216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53216):map__53216);
var file_msg = map__53216__$1;
var namespace = cljs.core.get.call(null,map__53216__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__53218){
var map__53221 = p__53218;
var map__53221__$1 = ((((!((map__53221 == null)))?((((map__53221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53221):map__53221);
var file_msg = map__53221__$1;
var namespace = cljs.core.get.call(null,map__53221__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__44814__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__44814__auto__){
var or__44826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44826__auto__)){
return or__44826__auto__;
} else {
var or__44826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44826__auto____$1)){
return or__44826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__44814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__53223,callback){
var map__53226 = p__53223;
var map__53226__$1 = ((((!((map__53226 == null)))?((((map__53226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53226):map__53226);
var file_msg = map__53226__$1;
var request_url = cljs.core.get.call(null,map__53226__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__53226__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

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
var c__48244__auto___53330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___53330,out){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___53330,out){
return (function (state_53312){
var state_val_53313 = (state_53312[(1)]);
if((state_val_53313 === (1))){
var inst_53286 = cljs.core.seq.call(null,files);
var inst_53287 = cljs.core.first.call(null,inst_53286);
var inst_53288 = cljs.core.next.call(null,inst_53286);
var inst_53289 = files;
var state_53312__$1 = (function (){var statearr_53314 = state_53312;
(statearr_53314[(7)] = inst_53289);

(statearr_53314[(8)] = inst_53288);

(statearr_53314[(9)] = inst_53287);

return statearr_53314;
})();
var statearr_53315_53331 = state_53312__$1;
(statearr_53315_53331[(2)] = null);

(statearr_53315_53331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53313 === (2))){
var inst_53289 = (state_53312[(7)]);
var inst_53295 = (state_53312[(10)]);
var inst_53294 = cljs.core.seq.call(null,inst_53289);
var inst_53295__$1 = cljs.core.first.call(null,inst_53294);
var inst_53296 = cljs.core.next.call(null,inst_53294);
var inst_53297 = (inst_53295__$1 == null);
var inst_53298 = cljs.core.not.call(null,inst_53297);
var state_53312__$1 = (function (){var statearr_53316 = state_53312;
(statearr_53316[(10)] = inst_53295__$1);

(statearr_53316[(11)] = inst_53296);

return statearr_53316;
})();
if(inst_53298){
var statearr_53317_53332 = state_53312__$1;
(statearr_53317_53332[(1)] = (4));

} else {
var statearr_53318_53333 = state_53312__$1;
(statearr_53318_53333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53313 === (3))){
var inst_53310 = (state_53312[(2)]);
var state_53312__$1 = state_53312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53312__$1,inst_53310);
} else {
if((state_val_53313 === (4))){
var inst_53295 = (state_53312[(10)]);
var inst_53300 = figwheel.client.file_reloading.reload_js_file.call(null,inst_53295);
var state_53312__$1 = state_53312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53312__$1,(7),inst_53300);
} else {
if((state_val_53313 === (5))){
var inst_53306 = cljs.core.async.close_BANG_.call(null,out);
var state_53312__$1 = state_53312;
var statearr_53319_53334 = state_53312__$1;
(statearr_53319_53334[(2)] = inst_53306);

(statearr_53319_53334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53313 === (6))){
var inst_53308 = (state_53312[(2)]);
var state_53312__$1 = state_53312;
var statearr_53320_53335 = state_53312__$1;
(statearr_53320_53335[(2)] = inst_53308);

(statearr_53320_53335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53313 === (7))){
var inst_53296 = (state_53312[(11)]);
var inst_53302 = (state_53312[(2)]);
var inst_53303 = cljs.core.async.put_BANG_.call(null,out,inst_53302);
var inst_53289 = inst_53296;
var state_53312__$1 = (function (){var statearr_53321 = state_53312;
(statearr_53321[(7)] = inst_53289);

(statearr_53321[(12)] = inst_53303);

return statearr_53321;
})();
var statearr_53322_53336 = state_53312__$1;
(statearr_53322_53336[(2)] = null);

(statearr_53322_53336[(1)] = (2));


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
});})(c__48244__auto___53330,out))
;
return ((function (switch__48132__auto__,c__48244__auto___53330,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48133__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48133__auto____0 = (function (){
var statearr_53326 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53326[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48133__auto__);

(statearr_53326[(1)] = (1));

return statearr_53326;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48133__auto____1 = (function (state_53312){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_53312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e53327){if((e53327 instanceof Object)){
var ex__48136__auto__ = e53327;
var statearr_53328_53337 = state_53312;
(statearr_53328_53337[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53338 = state_53312;
state_53312 = G__53338;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48133__auto__ = function(state_53312){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48133__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48133__auto____1.call(this,state_53312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48133__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48133__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___53330,out))
})();
var state__48246__auto__ = (function (){var statearr_53329 = f__48245__auto__.call(null);
(statearr_53329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___53330);

return statearr_53329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___53330,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__53339,opts){
var map__53343 = p__53339;
var map__53343__$1 = ((((!((map__53343 == null)))?((((map__53343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53343):map__53343);
var eval_body = cljs.core.get.call(null,map__53343__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__53343__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__44814__auto__ = eval_body;
if(cljs.core.truth_(and__44814__auto__)){
return typeof eval_body === 'string';
} else {
return and__44814__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e53345){var e = e53345;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__53346_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53346_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__53355){
var vec__53356 = p__53355;
var k = cljs.core.nth.call(null,vec__53356,(0),null);
var v = cljs.core.nth.call(null,vec__53356,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__53359){
var vec__53360 = p__53359;
var k = cljs.core.nth.call(null,vec__53360,(0),null);
var v = cljs.core.nth.call(null,vec__53360,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__53366,p__53367){
var map__53615 = p__53366;
var map__53615__$1 = ((((!((map__53615 == null)))?((((map__53615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53615):map__53615);
var opts = map__53615__$1;
var before_jsload = cljs.core.get.call(null,map__53615__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__53615__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__53615__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__53616 = p__53367;
var map__53616__$1 = ((((!((map__53616 == null)))?((((map__53616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53616):map__53616);
var msg = map__53616__$1;
var files = cljs.core.get.call(null,map__53616__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__53616__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__53616__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__48244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_53770){
var state_val_53771 = (state_53770[(1)]);
if((state_val_53771 === (7))){
var inst_53632 = (state_53770[(7)]);
var inst_53631 = (state_53770[(8)]);
var inst_53630 = (state_53770[(9)]);
var inst_53633 = (state_53770[(10)]);
var inst_53638 = cljs.core._nth.call(null,inst_53631,inst_53633);
var inst_53639 = figwheel.client.file_reloading.eval_body.call(null,inst_53638,opts);
var inst_53640 = (inst_53633 + (1));
var tmp53772 = inst_53632;
var tmp53773 = inst_53631;
var tmp53774 = inst_53630;
var inst_53630__$1 = tmp53774;
var inst_53631__$1 = tmp53773;
var inst_53632__$1 = tmp53772;
var inst_53633__$1 = inst_53640;
var state_53770__$1 = (function (){var statearr_53775 = state_53770;
(statearr_53775[(7)] = inst_53632__$1);

(statearr_53775[(8)] = inst_53631__$1);

(statearr_53775[(9)] = inst_53630__$1);

(statearr_53775[(10)] = inst_53633__$1);

(statearr_53775[(11)] = inst_53639);

return statearr_53775;
})();
var statearr_53776_53862 = state_53770__$1;
(statearr_53776_53862[(2)] = null);

(statearr_53776_53862[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (20))){
var inst_53673 = (state_53770[(12)]);
var inst_53681 = figwheel.client.file_reloading.sort_files.call(null,inst_53673);
var state_53770__$1 = state_53770;
var statearr_53777_53863 = state_53770__$1;
(statearr_53777_53863[(2)] = inst_53681);

(statearr_53777_53863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (27))){
var state_53770__$1 = state_53770;
var statearr_53778_53864 = state_53770__$1;
(statearr_53778_53864[(2)] = null);

(statearr_53778_53864[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (1))){
var inst_53622 = (state_53770[(13)]);
var inst_53619 = before_jsload.call(null,files);
var inst_53620 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_53621 = (function (){return ((function (inst_53622,inst_53619,inst_53620,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53363_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53363_SHARP_);
});
;})(inst_53622,inst_53619,inst_53620,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53622__$1 = cljs.core.filter.call(null,inst_53621,files);
var inst_53623 = cljs.core.not_empty.call(null,inst_53622__$1);
var state_53770__$1 = (function (){var statearr_53779 = state_53770;
(statearr_53779[(14)] = inst_53620);

(statearr_53779[(13)] = inst_53622__$1);

(statearr_53779[(15)] = inst_53619);

return statearr_53779;
})();
if(cljs.core.truth_(inst_53623)){
var statearr_53780_53865 = state_53770__$1;
(statearr_53780_53865[(1)] = (2));

} else {
var statearr_53781_53866 = state_53770__$1;
(statearr_53781_53866[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (24))){
var state_53770__$1 = state_53770;
var statearr_53782_53867 = state_53770__$1;
(statearr_53782_53867[(2)] = null);

(statearr_53782_53867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (39))){
var inst_53723 = (state_53770[(16)]);
var state_53770__$1 = state_53770;
var statearr_53783_53868 = state_53770__$1;
(statearr_53783_53868[(2)] = inst_53723);

(statearr_53783_53868[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (46))){
var inst_53765 = (state_53770[(2)]);
var state_53770__$1 = state_53770;
var statearr_53784_53869 = state_53770__$1;
(statearr_53784_53869[(2)] = inst_53765);

(statearr_53784_53869[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (4))){
var inst_53667 = (state_53770[(2)]);
var inst_53668 = cljs.core.List.EMPTY;
var inst_53669 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_53668);
var inst_53670 = (function (){return ((function (inst_53667,inst_53668,inst_53669,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53364_SHARP_){
var and__44814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53364_SHARP_);
if(cljs.core.truth_(and__44814__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53364_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__53364_SHARP_)));
} else {
return and__44814__auto__;
}
});
;})(inst_53667,inst_53668,inst_53669,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53671 = cljs.core.filter.call(null,inst_53670,files);
var inst_53672 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_53673 = cljs.core.concat.call(null,inst_53671,inst_53672);
var state_53770__$1 = (function (){var statearr_53785 = state_53770;
(statearr_53785[(17)] = inst_53669);

(statearr_53785[(18)] = inst_53667);

(statearr_53785[(12)] = inst_53673);

return statearr_53785;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_53786_53870 = state_53770__$1;
(statearr_53786_53870[(1)] = (16));

} else {
var statearr_53787_53871 = state_53770__$1;
(statearr_53787_53871[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (15))){
var inst_53657 = (state_53770[(2)]);
var state_53770__$1 = state_53770;
var statearr_53788_53872 = state_53770__$1;
(statearr_53788_53872[(2)] = inst_53657);

(statearr_53788_53872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (21))){
var inst_53683 = (state_53770[(19)]);
var inst_53683__$1 = (state_53770[(2)]);
var inst_53684 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_53683__$1);
var state_53770__$1 = (function (){var statearr_53789 = state_53770;
(statearr_53789[(19)] = inst_53683__$1);

return statearr_53789;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53770__$1,(22),inst_53684);
} else {
if((state_val_53771 === (31))){
var inst_53768 = (state_53770[(2)]);
var state_53770__$1 = state_53770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53770__$1,inst_53768);
} else {
if((state_val_53771 === (32))){
var inst_53723 = (state_53770[(16)]);
var inst_53728 = inst_53723.cljs$lang$protocol_mask$partition0$;
var inst_53729 = (inst_53728 & (64));
var inst_53730 = inst_53723.cljs$core$ISeq$;
var inst_53731 = (cljs.core.PROTOCOL_SENTINEL === inst_53730);
var inst_53732 = (inst_53729) || (inst_53731);
var state_53770__$1 = state_53770;
if(cljs.core.truth_(inst_53732)){
var statearr_53790_53873 = state_53770__$1;
(statearr_53790_53873[(1)] = (35));

} else {
var statearr_53791_53874 = state_53770__$1;
(statearr_53791_53874[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (40))){
var inst_53745 = (state_53770[(20)]);
var inst_53744 = (state_53770[(2)]);
var inst_53745__$1 = cljs.core.get.call(null,inst_53744,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_53746 = cljs.core.get.call(null,inst_53744,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_53747 = cljs.core.not_empty.call(null,inst_53745__$1);
var state_53770__$1 = (function (){var statearr_53792 = state_53770;
(statearr_53792[(21)] = inst_53746);

(statearr_53792[(20)] = inst_53745__$1);

return statearr_53792;
})();
if(cljs.core.truth_(inst_53747)){
var statearr_53793_53875 = state_53770__$1;
(statearr_53793_53875[(1)] = (41));

} else {
var statearr_53794_53876 = state_53770__$1;
(statearr_53794_53876[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (33))){
var state_53770__$1 = state_53770;
var statearr_53795_53877 = state_53770__$1;
(statearr_53795_53877[(2)] = false);

(statearr_53795_53877[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (13))){
var inst_53643 = (state_53770[(22)]);
var inst_53647 = cljs.core.chunk_first.call(null,inst_53643);
var inst_53648 = cljs.core.chunk_rest.call(null,inst_53643);
var inst_53649 = cljs.core.count.call(null,inst_53647);
var inst_53630 = inst_53648;
var inst_53631 = inst_53647;
var inst_53632 = inst_53649;
var inst_53633 = (0);
var state_53770__$1 = (function (){var statearr_53796 = state_53770;
(statearr_53796[(7)] = inst_53632);

(statearr_53796[(8)] = inst_53631);

(statearr_53796[(9)] = inst_53630);

(statearr_53796[(10)] = inst_53633);

return statearr_53796;
})();
var statearr_53797_53878 = state_53770__$1;
(statearr_53797_53878[(2)] = null);

(statearr_53797_53878[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (22))){
var inst_53683 = (state_53770[(19)]);
var inst_53691 = (state_53770[(23)]);
var inst_53687 = (state_53770[(24)]);
var inst_53686 = (state_53770[(25)]);
var inst_53686__$1 = (state_53770[(2)]);
var inst_53687__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53686__$1);
var inst_53688 = (function (){var all_files = inst_53683;
var res_SINGLEQUOTE_ = inst_53686__$1;
var res = inst_53687__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_53683,inst_53691,inst_53687,inst_53686,inst_53686__$1,inst_53687__$1,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53365_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__53365_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_53683,inst_53691,inst_53687,inst_53686,inst_53686__$1,inst_53687__$1,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53689 = cljs.core.filter.call(null,inst_53688,inst_53686__$1);
var inst_53690 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_53691__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53690);
var inst_53692 = cljs.core.not_empty.call(null,inst_53691__$1);
var state_53770__$1 = (function (){var statearr_53798 = state_53770;
(statearr_53798[(23)] = inst_53691__$1);

(statearr_53798[(26)] = inst_53689);

(statearr_53798[(24)] = inst_53687__$1);

(statearr_53798[(25)] = inst_53686__$1);

return statearr_53798;
})();
if(cljs.core.truth_(inst_53692)){
var statearr_53799_53879 = state_53770__$1;
(statearr_53799_53879[(1)] = (23));

} else {
var statearr_53800_53880 = state_53770__$1;
(statearr_53800_53880[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (36))){
var state_53770__$1 = state_53770;
var statearr_53801_53881 = state_53770__$1;
(statearr_53801_53881[(2)] = false);

(statearr_53801_53881[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (41))){
var inst_53745 = (state_53770[(20)]);
var inst_53749 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_53750 = cljs.core.map.call(null,inst_53749,inst_53745);
var inst_53751 = cljs.core.pr_str.call(null,inst_53750);
var inst_53752 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53751)].join('');
var inst_53753 = figwheel.client.utils.log.call(null,inst_53752);
var state_53770__$1 = state_53770;
var statearr_53802_53882 = state_53770__$1;
(statearr_53802_53882[(2)] = inst_53753);

(statearr_53802_53882[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (43))){
var inst_53746 = (state_53770[(21)]);
var inst_53756 = (state_53770[(2)]);
var inst_53757 = cljs.core.not_empty.call(null,inst_53746);
var state_53770__$1 = (function (){var statearr_53803 = state_53770;
(statearr_53803[(27)] = inst_53756);

return statearr_53803;
})();
if(cljs.core.truth_(inst_53757)){
var statearr_53804_53883 = state_53770__$1;
(statearr_53804_53883[(1)] = (44));

} else {
var statearr_53805_53884 = state_53770__$1;
(statearr_53805_53884[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (29))){
var inst_53683 = (state_53770[(19)]);
var inst_53691 = (state_53770[(23)]);
var inst_53689 = (state_53770[(26)]);
var inst_53723 = (state_53770[(16)]);
var inst_53687 = (state_53770[(24)]);
var inst_53686 = (state_53770[(25)]);
var inst_53719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_53722 = (function (){var all_files = inst_53683;
var res_SINGLEQUOTE_ = inst_53686;
var res = inst_53687;
var files_not_loaded = inst_53689;
var dependencies_that_loaded = inst_53691;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53683,inst_53691,inst_53689,inst_53723,inst_53687,inst_53686,inst_53719,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53721){
var map__53806 = p__53721;
var map__53806__$1 = ((((!((map__53806 == null)))?((((map__53806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53806):map__53806);
var namespace = cljs.core.get.call(null,map__53806__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53683,inst_53691,inst_53689,inst_53723,inst_53687,inst_53686,inst_53719,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53723__$1 = cljs.core.group_by.call(null,inst_53722,inst_53689);
var inst_53725 = (inst_53723__$1 == null);
var inst_53726 = cljs.core.not.call(null,inst_53725);
var state_53770__$1 = (function (){var statearr_53808 = state_53770;
(statearr_53808[(28)] = inst_53719);

(statearr_53808[(16)] = inst_53723__$1);

return statearr_53808;
})();
if(inst_53726){
var statearr_53809_53885 = state_53770__$1;
(statearr_53809_53885[(1)] = (32));

} else {
var statearr_53810_53886 = state_53770__$1;
(statearr_53810_53886[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (44))){
var inst_53746 = (state_53770[(21)]);
var inst_53759 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53746);
var inst_53760 = cljs.core.pr_str.call(null,inst_53759);
var inst_53761 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53760)].join('');
var inst_53762 = figwheel.client.utils.log.call(null,inst_53761);
var state_53770__$1 = state_53770;
var statearr_53811_53887 = state_53770__$1;
(statearr_53811_53887[(2)] = inst_53762);

(statearr_53811_53887[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (6))){
var inst_53664 = (state_53770[(2)]);
var state_53770__$1 = state_53770;
var statearr_53812_53888 = state_53770__$1;
(statearr_53812_53888[(2)] = inst_53664);

(statearr_53812_53888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (28))){
var inst_53689 = (state_53770[(26)]);
var inst_53716 = (state_53770[(2)]);
var inst_53717 = cljs.core.not_empty.call(null,inst_53689);
var state_53770__$1 = (function (){var statearr_53813 = state_53770;
(statearr_53813[(29)] = inst_53716);

return statearr_53813;
})();
if(cljs.core.truth_(inst_53717)){
var statearr_53814_53889 = state_53770__$1;
(statearr_53814_53889[(1)] = (29));

} else {
var statearr_53815_53890 = state_53770__$1;
(statearr_53815_53890[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (25))){
var inst_53687 = (state_53770[(24)]);
var inst_53703 = (state_53770[(2)]);
var inst_53704 = cljs.core.not_empty.call(null,inst_53687);
var state_53770__$1 = (function (){var statearr_53816 = state_53770;
(statearr_53816[(30)] = inst_53703);

return statearr_53816;
})();
if(cljs.core.truth_(inst_53704)){
var statearr_53817_53891 = state_53770__$1;
(statearr_53817_53891[(1)] = (26));

} else {
var statearr_53818_53892 = state_53770__$1;
(statearr_53818_53892[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (34))){
var inst_53739 = (state_53770[(2)]);
var state_53770__$1 = state_53770;
if(cljs.core.truth_(inst_53739)){
var statearr_53819_53893 = state_53770__$1;
(statearr_53819_53893[(1)] = (38));

} else {
var statearr_53820_53894 = state_53770__$1;
(statearr_53820_53894[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (17))){
var state_53770__$1 = state_53770;
var statearr_53821_53895 = state_53770__$1;
(statearr_53821_53895[(2)] = recompile_dependents);

(statearr_53821_53895[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (3))){
var state_53770__$1 = state_53770;
var statearr_53822_53896 = state_53770__$1;
(statearr_53822_53896[(2)] = null);

(statearr_53822_53896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (12))){
var inst_53660 = (state_53770[(2)]);
var state_53770__$1 = state_53770;
var statearr_53823_53897 = state_53770__$1;
(statearr_53823_53897[(2)] = inst_53660);

(statearr_53823_53897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (2))){
var inst_53622 = (state_53770[(13)]);
var inst_53629 = cljs.core.seq.call(null,inst_53622);
var inst_53630 = inst_53629;
var inst_53631 = null;
var inst_53632 = (0);
var inst_53633 = (0);
var state_53770__$1 = (function (){var statearr_53824 = state_53770;
(statearr_53824[(7)] = inst_53632);

(statearr_53824[(8)] = inst_53631);

(statearr_53824[(9)] = inst_53630);

(statearr_53824[(10)] = inst_53633);

return statearr_53824;
})();
var statearr_53825_53898 = state_53770__$1;
(statearr_53825_53898[(2)] = null);

(statearr_53825_53898[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (23))){
var inst_53683 = (state_53770[(19)]);
var inst_53691 = (state_53770[(23)]);
var inst_53689 = (state_53770[(26)]);
var inst_53687 = (state_53770[(24)]);
var inst_53686 = (state_53770[(25)]);
var inst_53694 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_53696 = (function (){var all_files = inst_53683;
var res_SINGLEQUOTE_ = inst_53686;
var res = inst_53687;
var files_not_loaded = inst_53689;
var dependencies_that_loaded = inst_53691;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53683,inst_53691,inst_53689,inst_53687,inst_53686,inst_53694,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53695){
var map__53826 = p__53695;
var map__53826__$1 = ((((!((map__53826 == null)))?((((map__53826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53826):map__53826);
var request_url = cljs.core.get.call(null,map__53826__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53683,inst_53691,inst_53689,inst_53687,inst_53686,inst_53694,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53697 = cljs.core.reverse.call(null,inst_53691);
var inst_53698 = cljs.core.map.call(null,inst_53696,inst_53697);
var inst_53699 = cljs.core.pr_str.call(null,inst_53698);
var inst_53700 = figwheel.client.utils.log.call(null,inst_53699);
var state_53770__$1 = (function (){var statearr_53828 = state_53770;
(statearr_53828[(31)] = inst_53694);

return statearr_53828;
})();
var statearr_53829_53899 = state_53770__$1;
(statearr_53829_53899[(2)] = inst_53700);

(statearr_53829_53899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (35))){
var state_53770__$1 = state_53770;
var statearr_53830_53900 = state_53770__$1;
(statearr_53830_53900[(2)] = true);

(statearr_53830_53900[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (19))){
var inst_53673 = (state_53770[(12)]);
var inst_53679 = figwheel.client.file_reloading.expand_files.call(null,inst_53673);
var state_53770__$1 = state_53770;
var statearr_53831_53901 = state_53770__$1;
(statearr_53831_53901[(2)] = inst_53679);

(statearr_53831_53901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (11))){
var state_53770__$1 = state_53770;
var statearr_53832_53902 = state_53770__$1;
(statearr_53832_53902[(2)] = null);

(statearr_53832_53902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (9))){
var inst_53662 = (state_53770[(2)]);
var state_53770__$1 = state_53770;
var statearr_53833_53903 = state_53770__$1;
(statearr_53833_53903[(2)] = inst_53662);

(statearr_53833_53903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (5))){
var inst_53632 = (state_53770[(7)]);
var inst_53633 = (state_53770[(10)]);
var inst_53635 = (inst_53633 < inst_53632);
var inst_53636 = inst_53635;
var state_53770__$1 = state_53770;
if(cljs.core.truth_(inst_53636)){
var statearr_53834_53904 = state_53770__$1;
(statearr_53834_53904[(1)] = (7));

} else {
var statearr_53835_53905 = state_53770__$1;
(statearr_53835_53905[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (14))){
var inst_53643 = (state_53770[(22)]);
var inst_53652 = cljs.core.first.call(null,inst_53643);
var inst_53653 = figwheel.client.file_reloading.eval_body.call(null,inst_53652,opts);
var inst_53654 = cljs.core.next.call(null,inst_53643);
var inst_53630 = inst_53654;
var inst_53631 = null;
var inst_53632 = (0);
var inst_53633 = (0);
var state_53770__$1 = (function (){var statearr_53836 = state_53770;
(statearr_53836[(7)] = inst_53632);

(statearr_53836[(8)] = inst_53631);

(statearr_53836[(9)] = inst_53630);

(statearr_53836[(10)] = inst_53633);

(statearr_53836[(32)] = inst_53653);

return statearr_53836;
})();
var statearr_53837_53906 = state_53770__$1;
(statearr_53837_53906[(2)] = null);

(statearr_53837_53906[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (45))){
var state_53770__$1 = state_53770;
var statearr_53838_53907 = state_53770__$1;
(statearr_53838_53907[(2)] = null);

(statearr_53838_53907[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (26))){
var inst_53683 = (state_53770[(19)]);
var inst_53691 = (state_53770[(23)]);
var inst_53689 = (state_53770[(26)]);
var inst_53687 = (state_53770[(24)]);
var inst_53686 = (state_53770[(25)]);
var inst_53706 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_53708 = (function (){var all_files = inst_53683;
var res_SINGLEQUOTE_ = inst_53686;
var res = inst_53687;
var files_not_loaded = inst_53689;
var dependencies_that_loaded = inst_53691;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53683,inst_53691,inst_53689,inst_53687,inst_53686,inst_53706,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53707){
var map__53839 = p__53707;
var map__53839__$1 = ((((!((map__53839 == null)))?((((map__53839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53839):map__53839);
var namespace = cljs.core.get.call(null,map__53839__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__53839__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53683,inst_53691,inst_53689,inst_53687,inst_53686,inst_53706,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53709 = cljs.core.map.call(null,inst_53708,inst_53687);
var inst_53710 = cljs.core.pr_str.call(null,inst_53709);
var inst_53711 = figwheel.client.utils.log.call(null,inst_53710);
var inst_53712 = (function (){var all_files = inst_53683;
var res_SINGLEQUOTE_ = inst_53686;
var res = inst_53687;
var files_not_loaded = inst_53689;
var dependencies_that_loaded = inst_53691;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53683,inst_53691,inst_53689,inst_53687,inst_53686,inst_53706,inst_53708,inst_53709,inst_53710,inst_53711,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53683,inst_53691,inst_53689,inst_53687,inst_53686,inst_53706,inst_53708,inst_53709,inst_53710,inst_53711,state_val_53771,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53713 = setTimeout(inst_53712,(10));
var state_53770__$1 = (function (){var statearr_53841 = state_53770;
(statearr_53841[(33)] = inst_53706);

(statearr_53841[(34)] = inst_53711);

return statearr_53841;
})();
var statearr_53842_53908 = state_53770__$1;
(statearr_53842_53908[(2)] = inst_53713);

(statearr_53842_53908[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (16))){
var state_53770__$1 = state_53770;
var statearr_53843_53909 = state_53770__$1;
(statearr_53843_53909[(2)] = reload_dependents);

(statearr_53843_53909[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (38))){
var inst_53723 = (state_53770[(16)]);
var inst_53741 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53723);
var state_53770__$1 = state_53770;
var statearr_53844_53910 = state_53770__$1;
(statearr_53844_53910[(2)] = inst_53741);

(statearr_53844_53910[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (30))){
var state_53770__$1 = state_53770;
var statearr_53845_53911 = state_53770__$1;
(statearr_53845_53911[(2)] = null);

(statearr_53845_53911[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (10))){
var inst_53643 = (state_53770[(22)]);
var inst_53645 = cljs.core.chunked_seq_QMARK_.call(null,inst_53643);
var state_53770__$1 = state_53770;
if(inst_53645){
var statearr_53846_53912 = state_53770__$1;
(statearr_53846_53912[(1)] = (13));

} else {
var statearr_53847_53913 = state_53770__$1;
(statearr_53847_53913[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (18))){
var inst_53677 = (state_53770[(2)]);
var state_53770__$1 = state_53770;
if(cljs.core.truth_(inst_53677)){
var statearr_53848_53914 = state_53770__$1;
(statearr_53848_53914[(1)] = (19));

} else {
var statearr_53849_53915 = state_53770__$1;
(statearr_53849_53915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (42))){
var state_53770__$1 = state_53770;
var statearr_53850_53916 = state_53770__$1;
(statearr_53850_53916[(2)] = null);

(statearr_53850_53916[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (37))){
var inst_53736 = (state_53770[(2)]);
var state_53770__$1 = state_53770;
var statearr_53851_53917 = state_53770__$1;
(statearr_53851_53917[(2)] = inst_53736);

(statearr_53851_53917[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53771 === (8))){
var inst_53643 = (state_53770[(22)]);
var inst_53630 = (state_53770[(9)]);
var inst_53643__$1 = cljs.core.seq.call(null,inst_53630);
var state_53770__$1 = (function (){var statearr_53852 = state_53770;
(statearr_53852[(22)] = inst_53643__$1);

return statearr_53852;
})();
if(inst_53643__$1){
var statearr_53853_53918 = state_53770__$1;
(statearr_53853_53918[(1)] = (10));

} else {
var statearr_53854_53919 = state_53770__$1;
(statearr_53854_53919[(1)] = (11));

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
});})(c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__48132__auto__,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48133__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48133__auto____0 = (function (){
var statearr_53858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53858[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__48133__auto__);

(statearr_53858[(1)] = (1));

return statearr_53858;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48133__auto____1 = (function (state_53770){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_53770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e53859){if((e53859 instanceof Object)){
var ex__48136__auto__ = e53859;
var statearr_53860_53920 = state_53770;
(statearr_53860_53920[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53921 = state_53770;
state_53770 = G__53921;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__48133__auto__ = function(state_53770){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48133__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48133__auto____1.call(this,state_53770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48133__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48133__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__48246__auto__ = (function (){var statearr_53861 = f__48245__auto__.call(null);
(statearr_53861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto__);

return statearr_53861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto__,map__53615,map__53615__$1,opts,before_jsload,on_jsload,reload_dependents,map__53616,map__53616__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__48244__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__53924,link){
var map__53927 = p__53924;
var map__53927__$1 = ((((!((map__53927 == null)))?((((map__53927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53927):map__53927);
var file = cljs.core.get.call(null,map__53927__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__53927,map__53927__$1,file){
return (function (p1__53922_SHARP_,p2__53923_SHARP_){
if(cljs.core._EQ_.call(null,p1__53922_SHARP_,p2__53923_SHARP_)){
return p1__53922_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__53927,map__53927__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__53933){
var map__53934 = p__53933;
var map__53934__$1 = ((((!((map__53934 == null)))?((((map__53934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53934):map__53934);
var match_length = cljs.core.get.call(null,map__53934__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__53934__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__53929_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__53929_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__53936_SHARP_,p2__53937_SHARP_){
return cljs.core.assoc.call(null,p1__53936_SHARP_,cljs.core.get.call(null,p2__53937_SHARP_,key),p2__53937_SHARP_);
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
var loaded_f_datas_53938 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_53938);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_53938);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__53939,p__53940){
var map__53945 = p__53939;
var map__53945__$1 = ((((!((map__53945 == null)))?((((map__53945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53945):map__53945);
var on_cssload = cljs.core.get.call(null,map__53945__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__53946 = p__53940;
var map__53946__$1 = ((((!((map__53946 == null)))?((((map__53946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53946):map__53946);
var files_msg = map__53946__$1;
var files = cljs.core.get.call(null,map__53946__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1491522845450