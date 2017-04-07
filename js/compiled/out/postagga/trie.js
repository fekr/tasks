// Compiled by ClojureScript 1.9.494 {}
goog.provide('postagga.trie');
goog.require('cljs.core');
postagga.trie.insert_str_in_trie = (function postagga$trie$insert_str_in_trie(trie,the_string){
var str_seq = cljs.core.map.call(null,cljs.core.str,the_string);
var remaining_chars = str_seq;
var result = trie;
var path = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,remaining_chars)){
var path_in_node = cljs.core.conj.call(null,path,cljs.core.first.call(null,remaining_chars));
var G__45994 = cljs.core.rest.call(null,remaining_chars);
var G__45995 = cljs.core.update_in.call(null,result,path_in_node,((function (remaining_chars,result,path,path_in_node,str_seq){
return (function (p1__45993_SHARP_){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,p1__45993_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nb","nb",1313629270),(1)], null));
});})(remaining_chars,result,path,path_in_node,str_seq))
);
var G__45996 = cljs.core.conj.call(null,path_in_node,new cljs.core.Keyword(null,"next","next",-117701485));
remaining_chars = G__45994;
result = G__45995;
path = G__45996;
continue;
} else {
return cljs.core.update_in.call(null,result,cljs.core.pop.call(null,path),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end","end",-268185958),true], null));
}
break;
}
});
postagga.trie.descend_branch = (function postagga$trie$descend_branch(branch){
var cur_branch = branch;
var cur_result = "";
var results = cljs.core.PersistentVector.EMPTY;
while(true){
if((cur_branch == null)){
return results;
} else {
var c_key = ((cljs.core.vector_QMARK_.call(null,cur_branch))?cljs.core.get.call(null,cur_branch,(0)):cljs.core.first.call(null,cljs.core.keys.call(null,cur_branch)));
var G__45997 = ((cljs.core.vector_QMARK_.call(null,cur_branch))?new cljs.core.Keyword(null,"next","next",-117701485).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cur_branch,(1))):cljs.core.get_in.call(null,cur_branch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_key,new cljs.core.Keyword(null,"next","next",-117701485)], null)));
var G__45998 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_result),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_key)].join('');
var G__45999 = (function (){var new_cur_branch = ((cljs.core.vector_QMARK_.call(null,cur_branch))?cljs.core.get.call(null,cur_branch,(1)):cljs.core.get.call(null,cur_branch,c_key));
if(cljs.core.truth_(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(new_cur_branch))){
return cljs.core.conj.call(null,results,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur_result),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_key)].join(''),new cljs.core.Keyword(null,"nb","nb",1313629270),cljs.core.get.call(null,new_cur_branch,new cljs.core.Keyword(null,"nb","nb",1313629270))], null));
} else {
return results;
}
})();
cur_branch = G__45997;
cur_result = G__45998;
results = G__45999;
continue;
}
break;
}
});
postagga.trie.completions = (function postagga$trie$completions(trie,the_string){
var str_seq = cljs.core.map.call(null,cljs.core.str,the_string);
var from_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.interleave.call(null,str_seq,cljs.core.repeat.call(null,new cljs.core.Keyword(null,"next","next",-117701485))));
var rest_commons = (function (){var common_branch = cljs.core.get_in.call(null,trie,from_path);
var r_commons = cljs.core.PersistentVector.EMPTY;
while(true){
if((cljs.core.count.call(null,common_branch) > (1))){
return r_commons;
} else {
if((common_branch == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
var c_key = cljs.core.first.call(null,cljs.core.keys.call(null,common_branch));
var G__46001 = cljs.core.get_in.call(null,common_branch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_key,new cljs.core.Keyword(null,"next","next",-117701485)], null));
var G__46002 = cljs.core.conj.call(null,r_commons,c_key);
common_branch = G__46001;
r_commons = G__46002;
continue;
}
}
break;
}
})();
var rest_commons_path = cljs.core.interleave.call(null,rest_commons,cljs.core.repeat.call(null,new cljs.core.Keyword(null,"next","next",-117701485)));
var str_commons = cljs.core.reduce.call(null,cljs.core.str,rest_commons);
var possible_completions = cljs.core.mapcat.call(null,postagga.trie.descend_branch,cljs.core.get_in.call(null,trie,cljs.core.into.call(null,from_path,rest_commons_path)));
if(!(cljs.core.empty_QMARK_.call(null,possible_completions))){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (str_seq,from_path,rest_commons,rest_commons_path,str_commons,possible_completions){
return (function (p1__46000_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_commons),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__46000_SHARP_,new cljs.core.Keyword(null,"result","result",1415092211)))].join('');
});})(str_seq,from_path,rest_commons,rest_commons_path,str_commons,possible_completions))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"nb","nb",1313629270),cljs.core._GT__EQ_,possible_completions)));
} else {
if(!(cljs.core.empty_QMARK_.call(null,str_commons))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_commons)].join('')], null);
} else {
return null;
}
}
});
postagga.trie.build_trie = (function postagga$trie$build_trie(entities){
var rentities = entities;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,rentities)){
var G__46003 = cljs.core.rest.call(null,rentities);
var G__46004 = postagga.trie.insert_str_in_trie.call(null,result,cljs.core.first.call(null,rentities));
rentities = G__46003;
result = G__46004;
continue;
} else {
return result;
}
break;
}
});

//# sourceMappingURL=trie.js.map?rel=1491522707113