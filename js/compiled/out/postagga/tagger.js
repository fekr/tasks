// Compiled by ClojureScript 1.9.229 {}
goog.provide('postagga.tagger');
goog.require('cljs.core');
goog.require('postagga.tools');
/**
 * - states -  in NLP : the tags : [P V ADJ] 
 *   - intial-probs - je pars de quel mot initialement ? {V 0.2 P 0.3} ...
 *   - transition-matrix - avec quell proba on va d'un etat i a  etat j : {[p v] 0.1 [p adj] 0.2...} 
 *   - emission-matrix - avec quell proba  on a le mot (obseravtion) j si on a le tag (etat) i: {[ p Je] 0.9  [V viens] 0.3 ...} 
 *   ------------- These are the trained model ---------
 *   - observations - in NLP: tokens represnting the sentence to be pos-tagged  [je mange ...]
 */
postagga.tagger.viterbi = (function postagga$tagger$viterbi(model,observations){
var map__45577 = model;
var map__45577__$1 = ((((!((map__45577 == null)))?((((map__45577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45577):map__45577);
var states = cljs.core.get.call(null,map__45577__$1,new cljs.core.Keyword(null,"states","states",1389013542));
var init_probs = cljs.core.get.call(null,map__45577__$1,new cljs.core.Keyword(null,"init-probs","init-probs",821324025));
var transitions = cljs.core.get.call(null,map__45577__$1,new cljs.core.Keyword(null,"transitions","transitions",-2046216121));
var emissions = cljs.core.get.call(null,map__45577__$1,new cljs.core.Keyword(null,"emissions","emissions",925663162));
var T1 = (function (){var rem_observations = cljs.core.rest.call(null,observations);
var prev_observation = cljs.core.first.call(null,observations);
var rem_states = states;
var T1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__45216__auto__ = ((function (rem_observations,prev_observation,rem_states,map__45577,map__45577__$1,states,init_probs,transitions,emissions){
return (function postagga$tagger$viterbi_$_iter__45579(s__45580){
return (new cljs.core.LazySeq(null,((function (rem_observations,prev_observation,rem_states,map__45577,map__45577__$1,states,init_probs,transitions,emissions){
return (function (){
var s__45580__$1 = s__45580;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45580__$1);
if(temp__4657__auto__){
var s__45580__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45580__$2)){
var c__45214__auto__ = cljs.core.chunk_first.call(null,s__45580__$2);
var size__45215__auto__ = cljs.core.count.call(null,c__45214__auto__);
var b__45582 = cljs.core.chunk_buffer.call(null,size__45215__auto__);
if((function (){var i__45581 = (0);
while(true){
if((i__45581 < size__45215__auto__)){
var i = cljs.core._nth.call(null,c__45214__auto__,i__45581);
cljs.core.chunk_append.call(null,b__45582,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.first.call(null,observations)], null),cljs.core.fnil.call(null,cljs.core._STAR_,(0),(0)).call(null,init_probs.call(null,i),emissions.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.first.call(null,observations)], null)))], null));

var G__45583 = (i__45581 + (1));
i__45581 = G__45583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45582),postagga$tagger$viterbi_$_iter__45579.call(null,cljs.core.chunk_rest.call(null,s__45580__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45582),null);
}
} else {
var i = cljs.core.first.call(null,s__45580__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.first.call(null,observations)], null),cljs.core.fnil.call(null,cljs.core._STAR_,(0),(0)).call(null,init_probs.call(null,i),emissions.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.first.call(null,observations)], null)))], null),postagga$tagger$viterbi_$_iter__45579.call(null,cljs.core.rest.call(null,s__45580__$2)));
}
} else {
return null;
}
break;
}
});})(rem_observations,prev_observation,rem_states,map__45577,map__45577__$1,states,init_probs,transitions,emissions))
,null,null));
});})(rem_observations,prev_observation,rem_states,map__45577,map__45577__$1,states,init_probs,transitions,emissions))
;
return iter__45216__auto__.call(null,states);
})());
while(true){
if(cljs.core.seq.call(null,rem_observations)){
var cur_observation = cljs.core.first.call(null,rem_observations);
if(cljs.core.seq.call(null,rem_states)){
var cur_state = cljs.core.first.call(null,rem_states);
var Akj = postagga.tools.get_column_m.call(null,transitions,cur_state);
var T1ki_1 = postagga.tools.get_column_m.call(null,T1,prev_observation);
var A_STAR_T = cljs.core.merge_with.call(null,cljs.core._STAR_,Akj,T1ki_1);
var G__45584 = rem_observations;
var G__45585 = prev_observation;
var G__45586 = cljs.core.rest.call(null,rem_states);
var G__45587 = cljs.core.assoc.call(null,T1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_state,cur_observation], null),((function (){var temp__4655__auto__ = cljs.core.get.call(null,emissions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_state,cur_observation], null));
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
return p;
} else {
return (0);
}
})() * cljs.core.reduce.call(null,cljs.core.max,cljs.core.vals.call(null,A_STAR_T))));
rem_observations = G__45584;
prev_observation = G__45585;
rem_states = G__45586;
T1 = G__45587;
continue;
} else {
var G__45588 = cljs.core.rest.call(null,rem_observations);
var G__45589 = cur_observation;
var G__45590 = states;
var G__45591 = T1;
rem_observations = G__45588;
prev_observation = G__45589;
rem_states = G__45590;
T1 = G__45591;
continue;
}
} else {
return T1;
}
break;
}
})();
var rem_observations = observations;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,rem_observations)){
var G__45592 = cljs.core.rest.call(null,rem_observations);
var G__45593 = cljs.core.conj.call(null,res,cljs.core.get.call(null,postagga.tools.arg_max_m.call(null,postagga.tools.get_column_m.call(null,T1,cljs.core.first.call(null,rem_observations))),(0)));
rem_observations = G__45592;
res = G__45593;
continue;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,res);
}
break;
}
});

//# sourceMappingURL=tagger.js.map?rel=1490223660512