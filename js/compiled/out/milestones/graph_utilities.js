// Compiled by ClojureScript 1.9.494 {}
goog.provide('milestones.graph_utilities');
goog.require('cljs.core');
/**
 * return true if all predecessors of this task
 *   exist or if this task has no preds
 */
milestones.graph_utilities.predecessors_of_task_exist_QMARK_ = (function milestones$graph_utilities$predecessors_of_task_exist_QMARK_(tasks__$1,the_task){
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core.set.call(null,cljs.core.keys.call(null,tasks__$1))),new cljs.core.Keyword(null,"predecessors","predecessors",229913357).cljs$core$IFn$_invoke$arity$1(the_task));
});
/**
 * return true if this task has preds
 */
milestones.graph_utilities.task_has_predecessors_QMARK_ = (function milestones$graph_utilities$task_has_predecessors_QMARK_(the_task){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"predecessors","predecessors",229913357).cljs$core$IFn$_invoke$arity$1(the_task));
});
/**
 * a utility function, given 1 + [ 2 3] returns [1 2], [1 3]
 */
milestones.graph_utilities.gen_precendence_edge = (function milestones$graph_utilities$gen_precendence_edge(task_id,predecessors){
return cljs.core.mapv.call(null,(function (predecessor){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [task_id,predecessor], null);
}),predecessors);
});
/**
 * Given tasks, computes all the edges present in this graph
 */
milestones.graph_utilities.gen_all_precedence_edges = (function milestones$graph_utilities$gen_all_precedence_edges(tasks__$1){
var raw_maps = cljs.core.map.call(null,(function (p__46143){
var vec__46144 = p__46143;
var k = cljs.core.nth.call(null,vec__46144,(0),null);
var v = cljs.core.nth.call(null,vec__46144,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"predecessors","predecessors",229913357).cljs$core$IFn$_invoke$arity$1(v)], null);
}),tasks__$1);
return cljs.core.mapcat.call(null,((function (raw_maps){
return (function (p__46147){
var vec__46148 = p__46147;
var k = cljs.core.nth.call(null,vec__46148,(0),null);
var v = cljs.core.nth.call(null,vec__46148,(1),null);
return milestones.graph_utilities.gen_precendence_edge.call(null,k,v);
});})(raw_maps))
,raw_maps);
});
milestones.graph_utilities.vertices = (function milestones$graph_utilities$vertices(edges){
return cljs.core.set.call(null,cljs.core.mapcat.call(null,cljs.core.identity,edges));
});
milestones.graph_utilities.successors = (function milestones$graph_utilities$successors(vertex,edges){
return cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,vertex),cljs.core.first),edges));
});
/**
 * Uses [Tarjan]((https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm)'s
 *   strongly connectect components algorithm to find if there are any
 *   cycles in a graph
 */
milestones.graph_utilities.graph_cycles = (function milestones$graph_utilities$graph_cycles(edges){
var index = cljs.core.atom.call(null,(0));
var indices = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var lowlinks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var S = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var output = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var strong_connect = ((function (index,indices,lowlinks,S,output){
return (function milestones$graph_utilities$graph_cycles_$_strong_connect(v){
cljs.core.swap_BANG_.call(null,indices,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),cljs.core.deref.call(null,index));

cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),cljs.core.deref.call(null,index));

cljs.core.swap_BANG_.call(null,index,cljs.core.inc);

cljs.core.swap_BANG_.call(null,S,cljs.core.conj,v);

var succs = milestones.graph_utilities.successors.call(null,v,edges);
var seq__46183_46191 = cljs.core.seq.call(null,succs);
var chunk__46184_46192 = null;
var count__46185_46193 = (0);
var i__46186_46194 = (0);
while(true){
if((i__46186_46194 < count__46185_46193)){
var w_46195 = cljs.core._nth.call(null,chunk__46184_46192,i__46186_46194);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,indices),w_46195))){
milestones$graph_utilities$graph_cycles_$_strong_connect.call(null,w_46195);

cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__45169__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__45170__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),w_46195);
return ((x__45169__auto__ < y__45170__auto__) ? x__45169__auto__ : y__45170__auto__);
})());
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([w_46195], true),cljs.core.deref.call(null,S)))){
cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__45169__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__45170__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,indices),w_46195);
return ((x__45169__auto__ < y__45170__auto__) ? x__45169__auto__ : y__45170__auto__);
})());
} else {
}
}

var G__46196 = seq__46183_46191;
var G__46197 = chunk__46184_46192;
var G__46198 = count__46185_46193;
var G__46199 = (i__46186_46194 + (1));
seq__46183_46191 = G__46196;
chunk__46184_46192 = G__46197;
count__46185_46193 = G__46198;
i__46186_46194 = G__46199;
continue;
} else {
var temp__4657__auto___46200 = cljs.core.seq.call(null,seq__46183_46191);
if(temp__4657__auto___46200){
var seq__46183_46201__$1 = temp__4657__auto___46200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46183_46201__$1)){
var c__45645__auto___46202 = cljs.core.chunk_first.call(null,seq__46183_46201__$1);
var G__46203 = cljs.core.chunk_rest.call(null,seq__46183_46201__$1);
var G__46204 = c__45645__auto___46202;
var G__46205 = cljs.core.count.call(null,c__45645__auto___46202);
var G__46206 = (0);
seq__46183_46191 = G__46203;
chunk__46184_46192 = G__46204;
count__46185_46193 = G__46205;
i__46186_46194 = G__46206;
continue;
} else {
var w_46207 = cljs.core.first.call(null,seq__46183_46201__$1);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,indices),w_46207))){
milestones$graph_utilities$graph_cycles_$_strong_connect.call(null,w_46207);

cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__45169__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__45170__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),w_46207);
return ((x__45169__auto__ < y__45170__auto__) ? x__45169__auto__ : y__45170__auto__);
})());
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([w_46207], true),cljs.core.deref.call(null,S)))){
cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__45169__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__45170__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,indices),w_46207);
return ((x__45169__auto__ < y__45170__auto__) ? x__45169__auto__ : y__45170__auto__);
})());
} else {
}
}

var G__46208 = cljs.core.next.call(null,seq__46183_46201__$1);
var G__46209 = null;
var G__46210 = (0);
var G__46211 = (0);
seq__46183_46191 = G__46208;
chunk__46184_46192 = G__46209;
count__46185_46193 = G__46210;
i__46186_46194 = G__46211;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v),cljs.core.get.call(null,cljs.core.deref.call(null,indices),v))){
var w = cljs.core.peek.call(null,cljs.core.deref.call(null,S));
var r = cljs.core.PersistentVector.EMPTY;
while(true){
cljs.core.swap_BANG_.call(null,S,cljs.core.pop);

if(!(cljs.core._EQ_.call(null,v,w))){
var G__46212 = cljs.core.peek.call(null,cljs.core.deref.call(null,S));
var G__46213 = cljs.core.conj.call(null,r,w);
w = G__46212;
r = G__46213;
continue;
} else {
if(cljs.core.empty_QMARK_.call(null,r)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,output,cljs.core.conj,cljs.core.conj.call(null,r,w));
}
}
break;
}
} else {
return null;
}
});})(index,indices,lowlinks,S,output))
;
var seq__46187_46214 = cljs.core.seq.call(null,milestones.graph_utilities.vertices.call(null,edges));
var chunk__46188_46215 = null;
var count__46189_46216 = (0);
var i__46190_46217 = (0);
while(true){
if((i__46190_46217 < count__46189_46216)){
var v_46218 = cljs.core._nth.call(null,chunk__46188_46215,i__46190_46217);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,indices),v_46218))){
} else {
strong_connect.call(null,v_46218);
}

var G__46219 = seq__46187_46214;
var G__46220 = chunk__46188_46215;
var G__46221 = count__46189_46216;
var G__46222 = (i__46190_46217 + (1));
seq__46187_46214 = G__46219;
chunk__46188_46215 = G__46220;
count__46189_46216 = G__46221;
i__46190_46217 = G__46222;
continue;
} else {
var temp__4657__auto___46223 = cljs.core.seq.call(null,seq__46187_46214);
if(temp__4657__auto___46223){
var seq__46187_46224__$1 = temp__4657__auto___46223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46187_46224__$1)){
var c__45645__auto___46225 = cljs.core.chunk_first.call(null,seq__46187_46224__$1);
var G__46226 = cljs.core.chunk_rest.call(null,seq__46187_46224__$1);
var G__46227 = c__45645__auto___46225;
var G__46228 = cljs.core.count.call(null,c__45645__auto___46225);
var G__46229 = (0);
seq__46187_46214 = G__46226;
chunk__46188_46215 = G__46227;
count__46189_46216 = G__46228;
i__46190_46217 = G__46229;
continue;
} else {
var v_46230 = cljs.core.first.call(null,seq__46187_46224__$1);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,indices),v_46230))){
} else {
strong_connect.call(null,v_46230);
}

var G__46231 = cljs.core.next.call(null,seq__46187_46224__$1);
var G__46232 = null;
var G__46233 = (0);
var G__46234 = (0);
seq__46187_46214 = G__46231;
chunk__46188_46215 = G__46232;
count__46189_46216 = G__46233;
i__46190_46217 = G__46234;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,output);
});

//# sourceMappingURL=graph_utilities.js.map?rel=1491522834977