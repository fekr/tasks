// Compiled by ClojureScript 1.9.229 {}
goog.provide('milestones.graph_utilities');
goog.require('cljs.core');
/**
 * return true if all predecessors of this task
 *   exist or if this task has no preds
 */
milestones.graph_utilities.predecessors_of_task_exist_QMARK_ = (function milestones$graph_utilities$predecessors_of_task_exist_QMARK_(tasks,the_task){
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core.set.call(null,cljs.core.keys.call(null,tasks))),new cljs.core.Keyword(null,"predecessors","predecessors",229913357).cljs$core$IFn$_invoke$arity$1(the_task));
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
milestones.graph_utilities.gen_all_precedence_edges = (function milestones$graph_utilities$gen_all_precedence_edges(tasks){
var raw_maps = cljs.core.map.call(null,(function (p__45625){
var vec__45626 = p__45625;
var k = cljs.core.nth.call(null,vec__45626,(0),null);
var v = cljs.core.nth.call(null,vec__45626,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"predecessors","predecessors",229913357).cljs$core$IFn$_invoke$arity$1(v)], null);
}),tasks);
return cljs.core.mapcat.call(null,((function (raw_maps){
return (function (p__45629){
var vec__45630 = p__45629;
var k = cljs.core.nth.call(null,vec__45630,(0),null);
var v = cljs.core.nth.call(null,vec__45630,(1),null);
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
var seq__45665_45673 = cljs.core.seq.call(null,succs);
var chunk__45666_45674 = null;
var count__45667_45675 = (0);
var i__45668_45676 = (0);
while(true){
if((i__45668_45676 < count__45667_45675)){
var w_45677 = cljs.core._nth.call(null,chunk__45666_45674,i__45668_45676);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,indices),w_45677))){
milestones$graph_utilities$graph_cycles_$_strong_connect.call(null,w_45677);

cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__44774__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__44775__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),w_45677);
return ((x__44774__auto__ < y__44775__auto__) ? x__44774__auto__ : y__44775__auto__);
})());
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([w_45677], true),cljs.core.deref.call(null,S)))){
cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__44774__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__44775__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,indices),w_45677);
return ((x__44774__auto__ < y__44775__auto__) ? x__44774__auto__ : y__44775__auto__);
})());
} else {
}
}

var G__45678 = seq__45665_45673;
var G__45679 = chunk__45666_45674;
var G__45680 = count__45667_45675;
var G__45681 = (i__45668_45676 + (1));
seq__45665_45673 = G__45678;
chunk__45666_45674 = G__45679;
count__45667_45675 = G__45680;
i__45668_45676 = G__45681;
continue;
} else {
var temp__4657__auto___45682 = cljs.core.seq.call(null,seq__45665_45673);
if(temp__4657__auto___45682){
var seq__45665_45683__$1 = temp__4657__auto___45682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45665_45683__$1)){
var c__45247__auto___45684 = cljs.core.chunk_first.call(null,seq__45665_45683__$1);
var G__45685 = cljs.core.chunk_rest.call(null,seq__45665_45683__$1);
var G__45686 = c__45247__auto___45684;
var G__45687 = cljs.core.count.call(null,c__45247__auto___45684);
var G__45688 = (0);
seq__45665_45673 = G__45685;
chunk__45666_45674 = G__45686;
count__45667_45675 = G__45687;
i__45668_45676 = G__45688;
continue;
} else {
var w_45689 = cljs.core.first.call(null,seq__45665_45683__$1);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,indices),w_45689))){
milestones$graph_utilities$graph_cycles_$_strong_connect.call(null,w_45689);

cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__44774__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__44775__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),w_45689);
return ((x__44774__auto__ < y__44775__auto__) ? x__44774__auto__ : y__44775__auto__);
})());
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([w_45689], true),cljs.core.deref.call(null,S)))){
cljs.core.swap_BANG_.call(null,lowlinks,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),(function (){var x__44774__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,lowlinks),v);
var y__44775__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,indices),w_45689);
return ((x__44774__auto__ < y__44775__auto__) ? x__44774__auto__ : y__44775__auto__);
})());
} else {
}
}

var G__45690 = cljs.core.next.call(null,seq__45665_45683__$1);
var G__45691 = null;
var G__45692 = (0);
var G__45693 = (0);
seq__45665_45673 = G__45690;
chunk__45666_45674 = G__45691;
count__45667_45675 = G__45692;
i__45668_45676 = G__45693;
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
var G__45694 = cljs.core.peek.call(null,cljs.core.deref.call(null,S));
var G__45695 = cljs.core.conj.call(null,r,w);
w = G__45694;
r = G__45695;
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
var seq__45669_45696 = cljs.core.seq.call(null,milestones.graph_utilities.vertices.call(null,edges));
var chunk__45670_45697 = null;
var count__45671_45698 = (0);
var i__45672_45699 = (0);
while(true){
if((i__45672_45699 < count__45671_45698)){
var v_45700 = cljs.core._nth.call(null,chunk__45670_45697,i__45672_45699);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,indices),v_45700))){
} else {
strong_connect.call(null,v_45700);
}

var G__45701 = seq__45669_45696;
var G__45702 = chunk__45670_45697;
var G__45703 = count__45671_45698;
var G__45704 = (i__45672_45699 + (1));
seq__45669_45696 = G__45701;
chunk__45670_45697 = G__45702;
count__45671_45698 = G__45703;
i__45672_45699 = G__45704;
continue;
} else {
var temp__4657__auto___45705 = cljs.core.seq.call(null,seq__45669_45696);
if(temp__4657__auto___45705){
var seq__45669_45706__$1 = temp__4657__auto___45705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45669_45706__$1)){
var c__45247__auto___45707 = cljs.core.chunk_first.call(null,seq__45669_45706__$1);
var G__45708 = cljs.core.chunk_rest.call(null,seq__45669_45706__$1);
var G__45709 = c__45247__auto___45707;
var G__45710 = cljs.core.count.call(null,c__45247__auto___45707);
var G__45711 = (0);
seq__45669_45696 = G__45708;
chunk__45670_45697 = G__45709;
count__45671_45698 = G__45710;
i__45672_45699 = G__45711;
continue;
} else {
var v_45712 = cljs.core.first.call(null,seq__45669_45706__$1);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,indices),v_45712))){
} else {
strong_connect.call(null,v_45712);
}

var G__45713 = cljs.core.next.call(null,seq__45669_45706__$1);
var G__45714 = null;
var G__45715 = (0);
var G__45716 = (0);
seq__45669_45696 = G__45713;
chunk__45670_45697 = G__45714;
count__45671_45698 = G__45715;
i__45672_45699 = G__45716;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,output);
});

//# sourceMappingURL=graph_utilities.js.map?rel=1490223660810