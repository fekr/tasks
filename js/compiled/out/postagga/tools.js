// Compiled by ClojureScript 1.9.229 {}
goog.provide('postagga.tools');
goog.require('cljs.core');
/**
 * Given a matrix represented by a map {[i j] x}, produces the column such as j = column  
 */
postagga.tools.get_column = (function postagga$tools$get_column(matrix,column){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__45567_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.key.call(null,p1__45567_SHARP_),(1)),column);
}),matrix));
});
/**
 * Given a matrix represented by a map {[i j] x}, produces the column such as j = column  
 */
postagga.tools.get_row = (function postagga$tools$get_row(matrix,row){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__45568_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.key.call(null,p1__45568_SHARP_),(0)),row);
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

//# sourceMappingURL=tools.js.map?rel=1490223660371