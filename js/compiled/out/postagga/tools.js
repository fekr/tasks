// Compiled by ClojureScript 1.9.494 {}
goog.provide('postagga.tools');
goog.require('cljs.core');
/**
 * Given a matrix represented by a map {[i j] x}, produces the column such as j = column  
 */
postagga.tools.get_column = (function postagga$tools$get_column(matrix,column){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__46062_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.key.call(null,p1__46062_SHARP_),(1)),column);
}),matrix));
});
/**
 * Given a matrix represented by a map {[i j] x}, produces the column such as j = column  
 */
postagga.tools.get_row = (function postagga$tools$get_row(matrix,row){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__46063_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.key.call(null,p1__46063_SHARP_),(0)),row);
}),matrix));
});
/**
 * gives the key that yields the maximum value
 */
postagga.tools.arg_max = (function postagga$tools$arg_max(coll){
return cljs.core.apply.call(null,cljs.core.max_key,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll], null),cljs.core.keys.call(null,coll)));
});
postagga.tools.get_column_m = cljs.core.memoize.call(null,postagga.tools.get_column);
postagga.tools.get_row_m = cljs.core.memoize.call(null,postagga.tools.get_row);
postagga.tools.arg_max_m = cljs.core.memoize.call(null,postagga.tools.arg_max);
postagga.tools.bigrams = (function postagga$tools$bigrams(input){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.str),cljs.core.partition.call(null,(2),(1),input)));
});
postagga.tools.similarity = (function postagga$tools$similarity(str1,str2){
var bigrams1 = postagga.tools.bigrams.call(null,str1);
var bigrams2 = postagga.tools.bigrams.call(null,str2);
var intersection = clojure.set.intersection.call(null,bigrams1,bigrams2);
var union = clojure.set.union.call(null,bigrams1,bigrams2);
try{return (cljs.core.count.call(null,intersection) / cljs.core.count.call(null,union));
}catch (e46065){if((e46065 instanceof Error)){
var e = e46065;
return (0);
} else {
throw e46065;

}
}});
postagga.tools.are_close_within_QMARK_ = (function postagga$tools$are_close_within_QMARK_(threshold,str1,str2){
return (postagga.tools.similarity.call(null,str1,str2) >= threshold);
});
postagga.tools.find_first = (function postagga$tools$find_first(f,coll){
return cljs.core.first.call(null,cljs.core.filter.call(null,f,coll));
});

//# sourceMappingURL=tools.js.map?rel=1491522834557