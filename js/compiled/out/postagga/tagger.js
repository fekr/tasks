// Compiled by ClojureScript 1.9.229 {}
goog.provide('postagga.tagger');
goog.require('cljs.core');
goog.require('postagga.tools');
goog.require('postagga.trie');
/**
 * - states -  in NLP : the tags : [P V ADJ] 
 *   - intial-probs - je pars de quel mot initialement ? {V 0.2 P 0.3} ...
 *   - transition-matrix - avec quell proba on va d'un etat i a  etat j : {[p v] 0.1 [p adj] 0.2...} 
 *   - emission-matrix - avec quell proba  on a le mot (obseravtion) j si on a le tag (etat) i: {[ p Je] 0.9  [V viens] 0.3 ...} 
 *   ------------- These are the trained model ---------
 *   - observations - in NLP: tokens represnting the sentence to be pos-tagged  [je mange ...]
 */
postagga.tagger.viterbi = (function postagga$tagger$viterbi(model,observations){
var map__45593 = model;
var map__45593__$1 = ((((!((map__45593 == null)))?((((map__45593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45593):map__45593);
var states = cljs.core.get.call(null,map__45593__$1,new cljs.core.Keyword(null,"states","states",1389013542));
var init_probs = cljs.core.get.call(null,map__45593__$1,new cljs.core.Keyword(null,"init-probs","init-probs",821324025));
var transitions = cljs.core.get.call(null,map__45593__$1,new cljs.core.Keyword(null,"transitions","transitions",-2046216121));
var emissions = cljs.core.get.call(null,map__45593__$1,new cljs.core.Keyword(null,"emissions","emissions",925663162));
var T1 = (function (){var rem_observations = cljs.core.rest.call(null,observations);
var prev_observation = cljs.core.first.call(null,observations);
var rem_states = states;
var T1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__45216__auto__ = ((function (rem_observations,prev_observation,rem_states,map__45593,map__45593__$1,states,init_probs,transitions,emissions){
return (function postagga$tagger$viterbi_$_iter__45595(s__45596){
return (new cljs.core.LazySeq(null,((function (rem_observations,prev_observation,rem_states,map__45593,map__45593__$1,states,init_probs,transitions,emissions){
return (function (){
var s__45596__$1 = s__45596;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45596__$1);
if(temp__4657__auto__){
var s__45596__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45596__$2)){
var c__45214__auto__ = cljs.core.chunk_first.call(null,s__45596__$2);
var size__45215__auto__ = cljs.core.count.call(null,c__45214__auto__);
var b__45598 = cljs.core.chunk_buffer.call(null,size__45215__auto__);
if((function (){var i__45597 = (0);
while(true){
if((i__45597 < size__45215__auto__)){
var i = cljs.core._nth.call(null,c__45214__auto__,i__45597);
cljs.core.chunk_append.call(null,b__45598,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.first.call(null,observations)], null),cljs.core.fnil.call(null,cljs.core._STAR_,(0),(0)).call(null,init_probs.call(null,i),emissions.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.first.call(null,observations)], null)))], null));

var G__45599 = (i__45597 + (1));
i__45597 = G__45599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45598),postagga$tagger$viterbi_$_iter__45595.call(null,cljs.core.chunk_rest.call(null,s__45596__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45598),null);
}
} else {
var i = cljs.core.first.call(null,s__45596__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.first.call(null,observations)], null),cljs.core.fnil.call(null,cljs.core._STAR_,(0),(0)).call(null,init_probs.call(null,i),emissions.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.first.call(null,observations)], null)))], null),postagga$tagger$viterbi_$_iter__45595.call(null,cljs.core.rest.call(null,s__45596__$2)));
}
} else {
return null;
}
break;
}
});})(rem_observations,prev_observation,rem_states,map__45593,map__45593__$1,states,init_probs,transitions,emissions))
,null,null));
});})(rem_observations,prev_observation,rem_states,map__45593,map__45593__$1,states,init_probs,transitions,emissions))
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
var G__45600 = rem_observations;
var G__45601 = prev_observation;
var G__45602 = cljs.core.rest.call(null,rem_states);
var G__45603 = cljs.core.assoc.call(null,T1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_state,cur_observation], null),((function (){var temp__4655__auto__ = cljs.core.get.call(null,emissions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_state,cur_observation], null));
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
return p;
} else {
return (0);
}
})() * cljs.core.reduce.call(null,cljs.core.max,cljs.core.vals.call(null,A_STAR_T))));
rem_observations = G__45600;
prev_observation = G__45601;
rem_states = G__45602;
T1 = G__45603;
continue;
} else {
var G__45604 = cljs.core.rest.call(null,rem_observations);
var G__45605 = cur_observation;
var G__45606 = states;
var G__45607 = T1;
rem_observations = G__45604;
prev_observation = G__45605;
rem_states = G__45606;
T1 = G__45607;
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
var G__45608 = cljs.core.rest.call(null,rem_observations);
var G__45609 = cljs.core.conj.call(null,res,cljs.core.get.call(null,postagga.tools.arg_max_m.call(null,postagga.tools.get_column_m.call(null,T1,cljs.core.first.call(null,rem_observations))),(0)));
rem_observations = G__45608;
res = G__45609;
continue;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,res);
}
break;
}
});
/**
 * Looks in a entities-db dictionary, if the word in sentence is close enough > threshold
 *   patch it with this target-tag, regardless
 *   entities-db being a trie, we must call completions and choose the longest one
 */
postagga.tagger.patch_w_entity = (function postagga$tagger$patch_w_entity(threshold,sentence,entities_db_trie,tags,target_tag){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sentence),cljs.core.count.call(null,tags))){
} else {
throw (new Error("Assert failed: (= (count sentence) (count tags))"));
}

if(cljs.core.vector_QMARK_.call(null,sentence)){
} else {
throw (new Error("Assert failed: (vector? sentence)"));
}

if(cljs.core.vector_QMARK_.call(null,tags)){
} else {
throw (new Error("Assert failed: (vector? tags)"));
}

var words = sentence;
var rtags = tags;
var result_tags = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,words)){
var G__45611 = cljs.core.rest.call(null,words);
var G__45612 = cljs.core.rest.call(null,rtags);
var G__45613 = cljs.core.conj.call(null,result_tags,(function (){var temp__4655__auto__ = postagga.tools.find_first.call(null,((function (words,rtags,result_tags){
return (function (p1__45610_SHARP_){
return postagga.tools.are_close_within_QMARK_.call(null,threshold,cljs.core.first.call(null,words),p1__45610_SHARP_);
});})(words,rtags,result_tags))
,postagga.trie.completions.call(null,entities_db_trie,cljs.core.first.call(null,words)));
if(cljs.core.truth_(temp__4655__auto__)){
var entity_QMARK_ = temp__4655__auto__;
return target_tag;
} else {
return cljs.core.first.call(null,rtags);
}
})());
words = G__45611;
rtags = G__45612;
result_tags = G__45613;
continue;
} else {
return result_tags;
}
break;
}
});

//# sourceMappingURL=tagger.js.map?rel=1491402063405