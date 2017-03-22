// Compiled by ClojureScript 1.9.229 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__44436__auto__ = elem.textContent;
if(cljs.core.truth_(or__44436__auto__)){
return or__44436__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args45660 = [];
var len__45511__auto___45663 = arguments.length;
var i__45512__auto___45664 = (0);
while(true){
if((i__45512__auto___45664 < len__45511__auto___45663)){
args45660.push((arguments[i__45512__auto___45664]));

var G__45665 = (i__45512__auto___45664 + (1));
i__45512__auto___45664 = G__45665;
continue;
} else {
}
break;
}

var G__45662 = args45660.length;
switch (G__45662) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45660.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args45667 = [];
var len__45511__auto___45670 = arguments.length;
var i__45512__auto___45671 = (0);
while(true){
if((i__45512__auto___45671 < len__45511__auto___45670)){
args45667.push((arguments[i__45512__auto___45671]));

var G__45672 = (i__45512__auto___45671 + (1));
i__45512__auto___45671 = G__45672;
continue;
} else {
}
break;
}

var G__45669 = args45667.length;
switch (G__45669) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45667.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args45675 = [];
var len__45511__auto___45678 = arguments.length;
var i__45512__auto___45679 = (0);
while(true){
if((i__45512__auto___45679 < len__45511__auto___45678)){
args45675.push((arguments[i__45512__auto___45679]));

var G__45680 = (i__45512__auto___45679 + (1));
i__45512__auto___45679 = G__45680;
continue;
} else {
}
break;
}

var G__45677 = args45675.length;
switch (G__45677) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45675.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__45674_SHARP_){
return !((p1__45674_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__45518__auto__ = [];
var len__45511__auto___45694 = arguments.length;
var i__45512__auto___45695 = (0);
while(true){
if((i__45512__auto___45695 < len__45511__auto___45694)){
args__45518__auto__.push((arguments[i__45512__auto___45695]));

var G__45696 = (i__45512__auto___45695 + (1));
i__45512__auto___45695 = G__45696;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((1) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45519__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__45684_45697 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__45685_45698 = null;
var count__45686_45699 = (0);
var i__45687_45700 = (0);
while(true){
if((i__45687_45700 < count__45686_45699)){
var vec__45688_45701 = cljs.core._nth.call(null,chunk__45685_45698,i__45687_45700);
var k_45702 = cljs.core.nth.call(null,vec__45688_45701,(0),null);
var v_45703 = cljs.core.nth.call(null,vec__45688_45701,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_45702),v_45703);

var G__45704 = seq__45684_45697;
var G__45705 = chunk__45685_45698;
var G__45706 = count__45686_45699;
var G__45707 = (i__45687_45700 + (1));
seq__45684_45697 = G__45704;
chunk__45685_45698 = G__45705;
count__45686_45699 = G__45706;
i__45687_45700 = G__45707;
continue;
} else {
var temp__4657__auto___45708 = cljs.core.seq.call(null,seq__45684_45697);
if(temp__4657__auto___45708){
var seq__45684_45709__$1 = temp__4657__auto___45708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45684_45709__$1)){
var c__45247__auto___45710 = cljs.core.chunk_first.call(null,seq__45684_45709__$1);
var G__45711 = cljs.core.chunk_rest.call(null,seq__45684_45709__$1);
var G__45712 = c__45247__auto___45710;
var G__45713 = cljs.core.count.call(null,c__45247__auto___45710);
var G__45714 = (0);
seq__45684_45697 = G__45711;
chunk__45685_45698 = G__45712;
count__45686_45699 = G__45713;
i__45687_45700 = G__45714;
continue;
} else {
var vec__45691_45715 = cljs.core.first.call(null,seq__45684_45709__$1);
var k_45716 = cljs.core.nth.call(null,vec__45691_45715,(0),null);
var v_45717 = cljs.core.nth.call(null,vec__45691_45715,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_45716),v_45717);

var G__45718 = cljs.core.next.call(null,seq__45684_45709__$1);
var G__45719 = null;
var G__45720 = (0);
var G__45721 = (0);
seq__45684_45697 = G__45718;
chunk__45685_45698 = G__45719;
count__45686_45699 = G__45720;
i__45687_45700 = G__45721;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq45682){
var G__45683 = cljs.core.first.call(null,seq45682);
var seq45682__$1 = cljs.core.next.call(null,seq45682);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45683,seq45682__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__45518__auto__ = [];
var len__45511__auto___45728 = arguments.length;
var i__45512__auto___45729 = (0);
while(true){
if((i__45512__auto___45729 < len__45511__auto___45728)){
args__45518__auto__.push((arguments[i__45512__auto___45729]));

var G__45730 = (i__45512__auto___45729 + (1));
i__45512__auto___45729 = G__45730;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((1) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45519__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__45724_45731 = cljs.core.seq.call(null,keywords);
var chunk__45725_45732 = null;
var count__45726_45733 = (0);
var i__45727_45734 = (0);
while(true){
if((i__45727_45734 < count__45726_45733)){
var kw_45735 = cljs.core._nth.call(null,chunk__45725_45732,i__45727_45734);
style.removeProperty(dommy.utils.as_str.call(null,kw_45735));

var G__45736 = seq__45724_45731;
var G__45737 = chunk__45725_45732;
var G__45738 = count__45726_45733;
var G__45739 = (i__45727_45734 + (1));
seq__45724_45731 = G__45736;
chunk__45725_45732 = G__45737;
count__45726_45733 = G__45738;
i__45727_45734 = G__45739;
continue;
} else {
var temp__4657__auto___45740 = cljs.core.seq.call(null,seq__45724_45731);
if(temp__4657__auto___45740){
var seq__45724_45741__$1 = temp__4657__auto___45740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45724_45741__$1)){
var c__45247__auto___45742 = cljs.core.chunk_first.call(null,seq__45724_45741__$1);
var G__45743 = cljs.core.chunk_rest.call(null,seq__45724_45741__$1);
var G__45744 = c__45247__auto___45742;
var G__45745 = cljs.core.count.call(null,c__45247__auto___45742);
var G__45746 = (0);
seq__45724_45731 = G__45743;
chunk__45725_45732 = G__45744;
count__45726_45733 = G__45745;
i__45727_45734 = G__45746;
continue;
} else {
var kw_45747 = cljs.core.first.call(null,seq__45724_45741__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_45747));

var G__45748 = cljs.core.next.call(null,seq__45724_45741__$1);
var G__45749 = null;
var G__45750 = (0);
var G__45751 = (0);
seq__45724_45731 = G__45748;
chunk__45725_45732 = G__45749;
count__45726_45733 = G__45750;
i__45727_45734 = G__45751;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq45722){
var G__45723 = cljs.core.first.call(null,seq45722);
var seq45722__$1 = cljs.core.next.call(null,seq45722);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45723,seq45722__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__45518__auto__ = [];
var len__45511__auto___45764 = arguments.length;
var i__45512__auto___45765 = (0);
while(true){
if((i__45512__auto___45765 < len__45511__auto___45764)){
args__45518__auto__.push((arguments[i__45512__auto___45765]));

var G__45766 = (i__45512__auto___45765 + (1));
i__45512__auto___45765 = G__45766;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((1) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45519__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__45754_45767 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__45755_45768 = null;
var count__45756_45769 = (0);
var i__45757_45770 = (0);
while(true){
if((i__45757_45770 < count__45756_45769)){
var vec__45758_45771 = cljs.core._nth.call(null,chunk__45755_45768,i__45757_45770);
var k_45772 = cljs.core.nth.call(null,vec__45758_45771,(0),null);
var v_45773 = cljs.core.nth.call(null,vec__45758_45771,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_45772,[cljs.core.str(v_45773),cljs.core.str("px")].join(''));

var G__45774 = seq__45754_45767;
var G__45775 = chunk__45755_45768;
var G__45776 = count__45756_45769;
var G__45777 = (i__45757_45770 + (1));
seq__45754_45767 = G__45774;
chunk__45755_45768 = G__45775;
count__45756_45769 = G__45776;
i__45757_45770 = G__45777;
continue;
} else {
var temp__4657__auto___45778 = cljs.core.seq.call(null,seq__45754_45767);
if(temp__4657__auto___45778){
var seq__45754_45779__$1 = temp__4657__auto___45778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45754_45779__$1)){
var c__45247__auto___45780 = cljs.core.chunk_first.call(null,seq__45754_45779__$1);
var G__45781 = cljs.core.chunk_rest.call(null,seq__45754_45779__$1);
var G__45782 = c__45247__auto___45780;
var G__45783 = cljs.core.count.call(null,c__45247__auto___45780);
var G__45784 = (0);
seq__45754_45767 = G__45781;
chunk__45755_45768 = G__45782;
count__45756_45769 = G__45783;
i__45757_45770 = G__45784;
continue;
} else {
var vec__45761_45785 = cljs.core.first.call(null,seq__45754_45779__$1);
var k_45786 = cljs.core.nth.call(null,vec__45761_45785,(0),null);
var v_45787 = cljs.core.nth.call(null,vec__45761_45785,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_45786,[cljs.core.str(v_45787),cljs.core.str("px")].join(''));

var G__45788 = cljs.core.next.call(null,seq__45754_45779__$1);
var G__45789 = null;
var G__45790 = (0);
var G__45791 = (0);
seq__45754_45767 = G__45788;
chunk__45755_45768 = G__45789;
count__45756_45769 = G__45790;
i__45757_45770 = G__45791;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq45752){
var G__45753 = cljs.core.first.call(null,seq45752);
var seq45752__$1 = cljs.core.next.call(null,seq45752);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45753,seq45752__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args45792 = [];
var len__45511__auto___45811 = arguments.length;
var i__45512__auto___45812 = (0);
while(true){
if((i__45512__auto___45812 < len__45511__auto___45811)){
args45792.push((arguments[i__45512__auto___45812]));

var G__45813 = (i__45512__auto___45812 + (1));
i__45512__auto___45812 = G__45813;
continue;
} else {
}
break;
}

var G__45798 = args45792.length;
switch (G__45798) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__45530__auto__ = (new cljs.core.IndexedSeq(args45792.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45530__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__45799 = elem;
(G__45799[k__$1] = v);

return G__45799;
} else {
var G__45800 = elem;
G__45800.setAttribute(k__$1,v);

return G__45800;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__45801_45815 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__45802_45816 = null;
var count__45803_45817 = (0);
var i__45804_45818 = (0);
while(true){
if((i__45804_45818 < count__45803_45817)){
var vec__45805_45819 = cljs.core._nth.call(null,chunk__45802_45816,i__45804_45818);
var k_45820__$1 = cljs.core.nth.call(null,vec__45805_45819,(0),null);
var v_45821__$1 = cljs.core.nth.call(null,vec__45805_45819,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_45820__$1,v_45821__$1);

var G__45822 = seq__45801_45815;
var G__45823 = chunk__45802_45816;
var G__45824 = count__45803_45817;
var G__45825 = (i__45804_45818 + (1));
seq__45801_45815 = G__45822;
chunk__45802_45816 = G__45823;
count__45803_45817 = G__45824;
i__45804_45818 = G__45825;
continue;
} else {
var temp__4657__auto___45826 = cljs.core.seq.call(null,seq__45801_45815);
if(temp__4657__auto___45826){
var seq__45801_45827__$1 = temp__4657__auto___45826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45801_45827__$1)){
var c__45247__auto___45828 = cljs.core.chunk_first.call(null,seq__45801_45827__$1);
var G__45829 = cljs.core.chunk_rest.call(null,seq__45801_45827__$1);
var G__45830 = c__45247__auto___45828;
var G__45831 = cljs.core.count.call(null,c__45247__auto___45828);
var G__45832 = (0);
seq__45801_45815 = G__45829;
chunk__45802_45816 = G__45830;
count__45803_45817 = G__45831;
i__45804_45818 = G__45832;
continue;
} else {
var vec__45808_45833 = cljs.core.first.call(null,seq__45801_45827__$1);
var k_45834__$1 = cljs.core.nth.call(null,vec__45808_45833,(0),null);
var v_45835__$1 = cljs.core.nth.call(null,vec__45808_45833,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_45834__$1,v_45835__$1);

var G__45836 = cljs.core.next.call(null,seq__45801_45827__$1);
var G__45837 = null;
var G__45838 = (0);
var G__45839 = (0);
seq__45801_45815 = G__45836;
chunk__45802_45816 = G__45837;
count__45803_45817 = G__45838;
i__45804_45818 = G__45839;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq45793){
var G__45794 = cljs.core.first.call(null,seq45793);
var seq45793__$1 = cljs.core.next.call(null,seq45793);
var G__45795 = cljs.core.first.call(null,seq45793__$1);
var seq45793__$2 = cljs.core.next.call(null,seq45793__$1);
var G__45796 = cljs.core.first.call(null,seq45793__$2);
var seq45793__$3 = cljs.core.next.call(null,seq45793__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45794,G__45795,G__45796,seq45793__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args45840 = [];
var len__45511__auto___45850 = arguments.length;
var i__45512__auto___45851 = (0);
while(true){
if((i__45512__auto___45851 < len__45511__auto___45850)){
args45840.push((arguments[i__45512__auto___45851]));

var G__45852 = (i__45512__auto___45851 + (1));
i__45512__auto___45851 = G__45852;
continue;
} else {
}
break;
}

var G__45845 = args45840.length;
switch (G__45845) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45530__auto__ = (new cljs.core.IndexedSeq(args45840.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45530__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_45854__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_45854__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_45854__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__45846_45855 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__45847_45856 = null;
var count__45848_45857 = (0);
var i__45849_45858 = (0);
while(true){
if((i__45849_45858 < count__45848_45857)){
var k_45859__$1 = cljs.core._nth.call(null,chunk__45847_45856,i__45849_45858);
dommy.core.remove_attr_BANG_.call(null,elem,k_45859__$1);

var G__45860 = seq__45846_45855;
var G__45861 = chunk__45847_45856;
var G__45862 = count__45848_45857;
var G__45863 = (i__45849_45858 + (1));
seq__45846_45855 = G__45860;
chunk__45847_45856 = G__45861;
count__45848_45857 = G__45862;
i__45849_45858 = G__45863;
continue;
} else {
var temp__4657__auto___45864 = cljs.core.seq.call(null,seq__45846_45855);
if(temp__4657__auto___45864){
var seq__45846_45865__$1 = temp__4657__auto___45864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45846_45865__$1)){
var c__45247__auto___45866 = cljs.core.chunk_first.call(null,seq__45846_45865__$1);
var G__45867 = cljs.core.chunk_rest.call(null,seq__45846_45865__$1);
var G__45868 = c__45247__auto___45866;
var G__45869 = cljs.core.count.call(null,c__45247__auto___45866);
var G__45870 = (0);
seq__45846_45855 = G__45867;
chunk__45847_45856 = G__45868;
count__45848_45857 = G__45869;
i__45849_45858 = G__45870;
continue;
} else {
var k_45871__$1 = cljs.core.first.call(null,seq__45846_45865__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_45871__$1);

var G__45872 = cljs.core.next.call(null,seq__45846_45865__$1);
var G__45873 = null;
var G__45874 = (0);
var G__45875 = (0);
seq__45846_45855 = G__45872;
chunk__45847_45856 = G__45873;
count__45848_45857 = G__45874;
i__45849_45858 = G__45875;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq45841){
var G__45842 = cljs.core.first.call(null,seq45841);
var seq45841__$1 = cljs.core.next.call(null,seq45841);
var G__45843 = cljs.core.first.call(null,seq45841__$1);
var seq45841__$2 = cljs.core.next.call(null,seq45841__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45842,G__45843,seq45841__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args45876 = [];
var len__45511__auto___45879 = arguments.length;
var i__45512__auto___45880 = (0);
while(true){
if((i__45512__auto___45880 < len__45511__auto___45879)){
args45876.push((arguments[i__45512__auto___45880]));

var G__45881 = (i__45512__auto___45880 + (1));
i__45512__auto___45880 = G__45881;
continue;
} else {
}
break;
}

var G__45878 = args45876.length;
switch (G__45878) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45876.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args45883 = [];
var len__45511__auto___45901 = arguments.length;
var i__45512__auto___45902 = (0);
while(true){
if((i__45512__auto___45902 < len__45511__auto___45901)){
args45883.push((arguments[i__45512__auto___45902]));

var G__45903 = (i__45512__auto___45902 + (1));
i__45512__auto___45902 = G__45903;
continue;
} else {
}
break;
}

var G__45888 = args45883.length;
switch (G__45888) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45530__auto__ = (new cljs.core.IndexedSeq(args45883.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45530__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___45905 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___45905)){
var class_list_45906 = temp__4655__auto___45905;
var seq__45889_45907 = cljs.core.seq.call(null,classes__$1);
var chunk__45890_45908 = null;
var count__45891_45909 = (0);
var i__45892_45910 = (0);
while(true){
if((i__45892_45910 < count__45891_45909)){
var c_45911 = cljs.core._nth.call(null,chunk__45890_45908,i__45892_45910);
class_list_45906.add(c_45911);

var G__45912 = seq__45889_45907;
var G__45913 = chunk__45890_45908;
var G__45914 = count__45891_45909;
var G__45915 = (i__45892_45910 + (1));
seq__45889_45907 = G__45912;
chunk__45890_45908 = G__45913;
count__45891_45909 = G__45914;
i__45892_45910 = G__45915;
continue;
} else {
var temp__4657__auto___45916 = cljs.core.seq.call(null,seq__45889_45907);
if(temp__4657__auto___45916){
var seq__45889_45917__$1 = temp__4657__auto___45916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45889_45917__$1)){
var c__45247__auto___45918 = cljs.core.chunk_first.call(null,seq__45889_45917__$1);
var G__45919 = cljs.core.chunk_rest.call(null,seq__45889_45917__$1);
var G__45920 = c__45247__auto___45918;
var G__45921 = cljs.core.count.call(null,c__45247__auto___45918);
var G__45922 = (0);
seq__45889_45907 = G__45919;
chunk__45890_45908 = G__45920;
count__45891_45909 = G__45921;
i__45892_45910 = G__45922;
continue;
} else {
var c_45923 = cljs.core.first.call(null,seq__45889_45917__$1);
class_list_45906.add(c_45923);

var G__45924 = cljs.core.next.call(null,seq__45889_45917__$1);
var G__45925 = null;
var G__45926 = (0);
var G__45927 = (0);
seq__45889_45907 = G__45924;
chunk__45890_45908 = G__45925;
count__45891_45909 = G__45926;
i__45892_45910 = G__45927;
continue;
}
} else {
}
}
break;
}
} else {
var seq__45893_45928 = cljs.core.seq.call(null,classes__$1);
var chunk__45894_45929 = null;
var count__45895_45930 = (0);
var i__45896_45931 = (0);
while(true){
if((i__45896_45931 < count__45895_45930)){
var c_45932 = cljs.core._nth.call(null,chunk__45894_45929,i__45896_45931);
var class_name_45933 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_45933,c_45932))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_45933 === ""))?c_45932:[cljs.core.str(class_name_45933),cljs.core.str(" "),cljs.core.str(c_45932)].join('')));
}

var G__45934 = seq__45893_45928;
var G__45935 = chunk__45894_45929;
var G__45936 = count__45895_45930;
var G__45937 = (i__45896_45931 + (1));
seq__45893_45928 = G__45934;
chunk__45894_45929 = G__45935;
count__45895_45930 = G__45936;
i__45896_45931 = G__45937;
continue;
} else {
var temp__4657__auto___45938 = cljs.core.seq.call(null,seq__45893_45928);
if(temp__4657__auto___45938){
var seq__45893_45939__$1 = temp__4657__auto___45938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45893_45939__$1)){
var c__45247__auto___45940 = cljs.core.chunk_first.call(null,seq__45893_45939__$1);
var G__45941 = cljs.core.chunk_rest.call(null,seq__45893_45939__$1);
var G__45942 = c__45247__auto___45940;
var G__45943 = cljs.core.count.call(null,c__45247__auto___45940);
var G__45944 = (0);
seq__45893_45928 = G__45941;
chunk__45894_45929 = G__45942;
count__45895_45930 = G__45943;
i__45896_45931 = G__45944;
continue;
} else {
var c_45945 = cljs.core.first.call(null,seq__45893_45939__$1);
var class_name_45946 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_45946,c_45945))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_45946 === ""))?c_45945:[cljs.core.str(class_name_45946),cljs.core.str(" "),cljs.core.str(c_45945)].join('')));
}

var G__45947 = cljs.core.next.call(null,seq__45893_45939__$1);
var G__45948 = null;
var G__45949 = (0);
var G__45950 = (0);
seq__45893_45928 = G__45947;
chunk__45894_45929 = G__45948;
count__45895_45930 = G__45949;
i__45896_45931 = G__45950;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__45897_45951 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__45898_45952 = null;
var count__45899_45953 = (0);
var i__45900_45954 = (0);
while(true){
if((i__45900_45954 < count__45899_45953)){
var c_45955 = cljs.core._nth.call(null,chunk__45898_45952,i__45900_45954);
dommy.core.add_class_BANG_.call(null,elem,c_45955);

var G__45956 = seq__45897_45951;
var G__45957 = chunk__45898_45952;
var G__45958 = count__45899_45953;
var G__45959 = (i__45900_45954 + (1));
seq__45897_45951 = G__45956;
chunk__45898_45952 = G__45957;
count__45899_45953 = G__45958;
i__45900_45954 = G__45959;
continue;
} else {
var temp__4657__auto___45960 = cljs.core.seq.call(null,seq__45897_45951);
if(temp__4657__auto___45960){
var seq__45897_45961__$1 = temp__4657__auto___45960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45897_45961__$1)){
var c__45247__auto___45962 = cljs.core.chunk_first.call(null,seq__45897_45961__$1);
var G__45963 = cljs.core.chunk_rest.call(null,seq__45897_45961__$1);
var G__45964 = c__45247__auto___45962;
var G__45965 = cljs.core.count.call(null,c__45247__auto___45962);
var G__45966 = (0);
seq__45897_45951 = G__45963;
chunk__45898_45952 = G__45964;
count__45899_45953 = G__45965;
i__45900_45954 = G__45966;
continue;
} else {
var c_45967 = cljs.core.first.call(null,seq__45897_45961__$1);
dommy.core.add_class_BANG_.call(null,elem,c_45967);

var G__45968 = cljs.core.next.call(null,seq__45897_45961__$1);
var G__45969 = null;
var G__45970 = (0);
var G__45971 = (0);
seq__45897_45951 = G__45968;
chunk__45898_45952 = G__45969;
count__45899_45953 = G__45970;
i__45900_45954 = G__45971;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq45884){
var G__45885 = cljs.core.first.call(null,seq45884);
var seq45884__$1 = cljs.core.next.call(null,seq45884);
var G__45886 = cljs.core.first.call(null,seq45884__$1);
var seq45884__$2 = cljs.core.next.call(null,seq45884__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45885,G__45886,seq45884__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args45972 = [];
var len__45511__auto___45982 = arguments.length;
var i__45512__auto___45983 = (0);
while(true){
if((i__45512__auto___45983 < len__45511__auto___45982)){
args45972.push((arguments[i__45512__auto___45983]));

var G__45984 = (i__45512__auto___45983 + (1));
i__45512__auto___45983 = G__45984;
continue;
} else {
}
break;
}

var G__45977 = args45972.length;
switch (G__45977) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45530__auto__ = (new cljs.core.IndexedSeq(args45972.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45530__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___45986 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___45986)){
var class_list_45987 = temp__4655__auto___45986;
class_list_45987.remove(c__$1);
} else {
var class_name_45988 = dommy.core.class$.call(null,elem);
var new_class_name_45989 = dommy.utils.remove_class_str.call(null,class_name_45988,c__$1);
if((class_name_45988 === new_class_name_45989)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_45989);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__45978 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__45979 = null;
var count__45980 = (0);
var i__45981 = (0);
while(true){
if((i__45981 < count__45980)){
var c = cljs.core._nth.call(null,chunk__45979,i__45981);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__45990 = seq__45978;
var G__45991 = chunk__45979;
var G__45992 = count__45980;
var G__45993 = (i__45981 + (1));
seq__45978 = G__45990;
chunk__45979 = G__45991;
count__45980 = G__45992;
i__45981 = G__45993;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45978);
if(temp__4657__auto__){
var seq__45978__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45978__$1)){
var c__45247__auto__ = cljs.core.chunk_first.call(null,seq__45978__$1);
var G__45994 = cljs.core.chunk_rest.call(null,seq__45978__$1);
var G__45995 = c__45247__auto__;
var G__45996 = cljs.core.count.call(null,c__45247__auto__);
var G__45997 = (0);
seq__45978 = G__45994;
chunk__45979 = G__45995;
count__45980 = G__45996;
i__45981 = G__45997;
continue;
} else {
var c = cljs.core.first.call(null,seq__45978__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__45998 = cljs.core.next.call(null,seq__45978__$1);
var G__45999 = null;
var G__46000 = (0);
var G__46001 = (0);
seq__45978 = G__45998;
chunk__45979 = G__45999;
count__45980 = G__46000;
i__45981 = G__46001;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq45973){
var G__45974 = cljs.core.first.call(null,seq45973);
var seq45973__$1 = cljs.core.next.call(null,seq45973);
var G__45975 = cljs.core.first.call(null,seq45973__$1);
var seq45973__$2 = cljs.core.next.call(null,seq45973__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45974,G__45975,seq45973__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args46002 = [];
var len__45511__auto___46005 = arguments.length;
var i__45512__auto___46006 = (0);
while(true){
if((i__45512__auto___46006 < len__45511__auto___46005)){
args46002.push((arguments[i__45512__auto___46006]));

var G__46007 = (i__45512__auto___46006 + (1));
i__45512__auto___46006 = G__46007;
continue;
} else {
}
break;
}

var G__46004 = args46002.length;
switch (G__46004) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46002.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___46009 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___46009)){
var class_list_46010 = temp__4655__auto___46009;
class_list_46010.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args46011 = [];
var len__45511__auto___46014 = arguments.length;
var i__45512__auto___46015 = (0);
while(true){
if((i__45512__auto___46015 < len__45511__auto___46014)){
args46011.push((arguments[i__45512__auto___46015]));

var G__46016 = (i__45512__auto___46015 + (1));
i__45512__auto___46015 = G__46016;
continue;
} else {
}
break;
}

var G__46013 = args46011.length;
switch (G__46013) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46011.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args46018 = [];
var len__45511__auto___46021 = arguments.length;
var i__45512__auto___46022 = (0);
while(true){
if((i__45512__auto___46022 < len__45511__auto___46021)){
args46018.push((arguments[i__45512__auto___46022]));

var G__46023 = (i__45512__auto___46022 + (1));
i__45512__auto___46022 = G__46023;
continue;
} else {
}
break;
}

var G__46020 = args46018.length;
switch (G__46020) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46018.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args46025 = [];
var len__45511__auto___46036 = arguments.length;
var i__45512__auto___46037 = (0);
while(true){
if((i__45512__auto___46037 < len__45511__auto___46036)){
args46025.push((arguments[i__45512__auto___46037]));

var G__46038 = (i__45512__auto___46037 + (1));
i__45512__auto___46037 = G__46038;
continue;
} else {
}
break;
}

var G__46030 = args46025.length;
switch (G__46030) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45530__auto__ = (new cljs.core.IndexedSeq(args46025.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45530__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__46031 = parent;
G__46031.appendChild(child);

return G__46031;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__46032_46040 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__46033_46041 = null;
var count__46034_46042 = (0);
var i__46035_46043 = (0);
while(true){
if((i__46035_46043 < count__46034_46042)){
var c_46044 = cljs.core._nth.call(null,chunk__46033_46041,i__46035_46043);
dommy.core.append_BANG_.call(null,parent,c_46044);

var G__46045 = seq__46032_46040;
var G__46046 = chunk__46033_46041;
var G__46047 = count__46034_46042;
var G__46048 = (i__46035_46043 + (1));
seq__46032_46040 = G__46045;
chunk__46033_46041 = G__46046;
count__46034_46042 = G__46047;
i__46035_46043 = G__46048;
continue;
} else {
var temp__4657__auto___46049 = cljs.core.seq.call(null,seq__46032_46040);
if(temp__4657__auto___46049){
var seq__46032_46050__$1 = temp__4657__auto___46049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46032_46050__$1)){
var c__45247__auto___46051 = cljs.core.chunk_first.call(null,seq__46032_46050__$1);
var G__46052 = cljs.core.chunk_rest.call(null,seq__46032_46050__$1);
var G__46053 = c__45247__auto___46051;
var G__46054 = cljs.core.count.call(null,c__45247__auto___46051);
var G__46055 = (0);
seq__46032_46040 = G__46052;
chunk__46033_46041 = G__46053;
count__46034_46042 = G__46054;
i__46035_46043 = G__46055;
continue;
} else {
var c_46056 = cljs.core.first.call(null,seq__46032_46050__$1);
dommy.core.append_BANG_.call(null,parent,c_46056);

var G__46057 = cljs.core.next.call(null,seq__46032_46050__$1);
var G__46058 = null;
var G__46059 = (0);
var G__46060 = (0);
seq__46032_46040 = G__46057;
chunk__46033_46041 = G__46058;
count__46034_46042 = G__46059;
i__46035_46043 = G__46060;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq46026){
var G__46027 = cljs.core.first.call(null,seq46026);
var seq46026__$1 = cljs.core.next.call(null,seq46026);
var G__46028 = cljs.core.first.call(null,seq46026__$1);
var seq46026__$2 = cljs.core.next.call(null,seq46026__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46027,G__46028,seq46026__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args46061 = [];
var len__45511__auto___46072 = arguments.length;
var i__45512__auto___46073 = (0);
while(true){
if((i__45512__auto___46073 < len__45511__auto___46072)){
args46061.push((arguments[i__45512__auto___46073]));

var G__46074 = (i__45512__auto___46073 + (1));
i__45512__auto___46073 = G__46074;
continue;
} else {
}
break;
}

var G__46066 = args46061.length;
switch (G__46066) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45530__auto__ = (new cljs.core.IndexedSeq(args46061.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45530__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__46067 = parent;
G__46067.insertBefore(child,parent.firstChild);

return G__46067;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__46068_46076 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__46069_46077 = null;
var count__46070_46078 = (0);
var i__46071_46079 = (0);
while(true){
if((i__46071_46079 < count__46070_46078)){
var c_46080 = cljs.core._nth.call(null,chunk__46069_46077,i__46071_46079);
dommy.core.prepend_BANG_.call(null,parent,c_46080);

var G__46081 = seq__46068_46076;
var G__46082 = chunk__46069_46077;
var G__46083 = count__46070_46078;
var G__46084 = (i__46071_46079 + (1));
seq__46068_46076 = G__46081;
chunk__46069_46077 = G__46082;
count__46070_46078 = G__46083;
i__46071_46079 = G__46084;
continue;
} else {
var temp__4657__auto___46085 = cljs.core.seq.call(null,seq__46068_46076);
if(temp__4657__auto___46085){
var seq__46068_46086__$1 = temp__4657__auto___46085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46068_46086__$1)){
var c__45247__auto___46087 = cljs.core.chunk_first.call(null,seq__46068_46086__$1);
var G__46088 = cljs.core.chunk_rest.call(null,seq__46068_46086__$1);
var G__46089 = c__45247__auto___46087;
var G__46090 = cljs.core.count.call(null,c__45247__auto___46087);
var G__46091 = (0);
seq__46068_46076 = G__46088;
chunk__46069_46077 = G__46089;
count__46070_46078 = G__46090;
i__46071_46079 = G__46091;
continue;
} else {
var c_46092 = cljs.core.first.call(null,seq__46068_46086__$1);
dommy.core.prepend_BANG_.call(null,parent,c_46092);

var G__46093 = cljs.core.next.call(null,seq__46068_46086__$1);
var G__46094 = null;
var G__46095 = (0);
var G__46096 = (0);
seq__46068_46076 = G__46093;
chunk__46069_46077 = G__46094;
count__46070_46078 = G__46095;
i__46071_46079 = G__46096;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq46062){
var G__46063 = cljs.core.first.call(null,seq46062);
var seq46062__$1 = cljs.core.next.call(null,seq46062);
var G__46064 = cljs.core.first.call(null,seq46062__$1);
var seq46062__$2 = cljs.core.next.call(null,seq46062__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46063,G__46064,seq46062__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___46097 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___46097)){
var next_46098 = temp__4655__auto___46097;
dommy.core.insert_before_BANG_.call(null,elem,next_46098);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args46099 = [];
var len__45511__auto___46103 = arguments.length;
var i__45512__auto___46104 = (0);
while(true){
if((i__45512__auto___46104 < len__45511__auto___46103)){
args46099.push((arguments[i__45512__auto___46104]));

var G__46105 = (i__45512__auto___46104 + (1));
i__45512__auto___46104 = G__46105;
continue;
} else {
}
break;
}

var G__46101 = args46099.length;
switch (G__46101) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46099.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__46102 = p;
G__46102.removeChild(elem);

return G__46102;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__46107){
var vec__46108 = p__46107;
var special_mouse_event = cljs.core.nth.call(null,vec__46108,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__46108,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__46108,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__46108,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__44436__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__44436__auto__)){
return or__44436__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__44424__auto__ = related_target;
if(cljs.core.truth_(and__44424__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__44424__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__46108,special_mouse_event,real_mouse_event))
});})(vec__46108,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__44424__auto__ = selected_target;
if(cljs.core.truth_(and__44424__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__44424__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__44436__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__44436__auto__)){
return or__44436__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__45518__auto__ = [];
var len__45511__auto___46114 = arguments.length;
var i__45512__auto___46115 = (0);
while(true){
if((i__45512__auto___46115 < len__45511__auto___46114)){
args__45518__auto__.push((arguments[i__45512__auto___46115]));

var G__46116 = (i__45512__auto___46115 + (1));
i__45512__auto___46115 = G__46116;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((2) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45519__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq46111){
var G__46112 = cljs.core.first.call(null,seq46111);
var seq46111__$1 = cljs.core.next.call(null,seq46111);
var G__46113 = cljs.core.first.call(null,seq46111__$1);
var seq46111__$2 = cljs.core.next.call(null,seq46111__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46112,G__46113,seq46111__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__45518__auto__ = [];
var len__45511__auto___46156 = arguments.length;
var i__45512__auto___46157 = (0);
while(true){
if((i__45512__auto___46157 < len__45511__auto___46156)){
args__45518__auto__.push((arguments[i__45512__auto___46157]));

var G__46158 = (i__45512__auto___46157 + (1));
i__45512__auto___46157 = G__46158;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((1) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45519__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__46119_46159 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_46160 = cljs.core.nth.call(null,vec__46119_46159,(0),null);
var selector_46161 = cljs.core.nth.call(null,vec__46119_46159,(1),null);
var seq__46122_46162 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__46129_46163 = null;
var count__46130_46164 = (0);
var i__46131_46165 = (0);
while(true){
if((i__46131_46165 < count__46130_46164)){
var vec__46138_46166 = cljs.core._nth.call(null,chunk__46129_46163,i__46131_46165);
var orig_type_46167 = cljs.core.nth.call(null,vec__46138_46166,(0),null);
var f_46168 = cljs.core.nth.call(null,vec__46138_46166,(1),null);
var seq__46132_46169 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_46167,cljs.core.PersistentArrayMap.fromArray([orig_type_46167,cljs.core.identity], true, false)));
var chunk__46134_46170 = null;
var count__46135_46171 = (0);
var i__46136_46172 = (0);
while(true){
if((i__46136_46172 < count__46135_46171)){
var vec__46141_46173 = cljs.core._nth.call(null,chunk__46134_46170,i__46136_46172);
var actual_type_46174 = cljs.core.nth.call(null,vec__46141_46173,(0),null);
var factory_46175 = cljs.core.nth.call(null,vec__46141_46173,(1),null);
var canonical_f_46176 = (cljs.core.truth_(selector_46161)?cljs.core.partial.call(null,dommy.core.live_listener,elem_46160,selector_46161):cljs.core.identity).call(null,factory_46175.call(null,f_46168));
dommy.core.update_event_listeners_BANG_.call(null,elem_46160,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46161,actual_type_46174,f_46168], null),canonical_f_46176);

if(cljs.core.truth_(elem_46160.addEventListener)){
elem_46160.addEventListener(cljs.core.name.call(null,actual_type_46174),canonical_f_46176);
} else {
elem_46160.attachEvent(cljs.core.name.call(null,actual_type_46174),canonical_f_46176);
}

var G__46177 = seq__46132_46169;
var G__46178 = chunk__46134_46170;
var G__46179 = count__46135_46171;
var G__46180 = (i__46136_46172 + (1));
seq__46132_46169 = G__46177;
chunk__46134_46170 = G__46178;
count__46135_46171 = G__46179;
i__46136_46172 = G__46180;
continue;
} else {
var temp__4657__auto___46181 = cljs.core.seq.call(null,seq__46132_46169);
if(temp__4657__auto___46181){
var seq__46132_46182__$1 = temp__4657__auto___46181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46132_46182__$1)){
var c__45247__auto___46183 = cljs.core.chunk_first.call(null,seq__46132_46182__$1);
var G__46184 = cljs.core.chunk_rest.call(null,seq__46132_46182__$1);
var G__46185 = c__45247__auto___46183;
var G__46186 = cljs.core.count.call(null,c__45247__auto___46183);
var G__46187 = (0);
seq__46132_46169 = G__46184;
chunk__46134_46170 = G__46185;
count__46135_46171 = G__46186;
i__46136_46172 = G__46187;
continue;
} else {
var vec__46144_46188 = cljs.core.first.call(null,seq__46132_46182__$1);
var actual_type_46189 = cljs.core.nth.call(null,vec__46144_46188,(0),null);
var factory_46190 = cljs.core.nth.call(null,vec__46144_46188,(1),null);
var canonical_f_46191 = (cljs.core.truth_(selector_46161)?cljs.core.partial.call(null,dommy.core.live_listener,elem_46160,selector_46161):cljs.core.identity).call(null,factory_46190.call(null,f_46168));
dommy.core.update_event_listeners_BANG_.call(null,elem_46160,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46161,actual_type_46189,f_46168], null),canonical_f_46191);

if(cljs.core.truth_(elem_46160.addEventListener)){
elem_46160.addEventListener(cljs.core.name.call(null,actual_type_46189),canonical_f_46191);
} else {
elem_46160.attachEvent(cljs.core.name.call(null,actual_type_46189),canonical_f_46191);
}

var G__46192 = cljs.core.next.call(null,seq__46132_46182__$1);
var G__46193 = null;
var G__46194 = (0);
var G__46195 = (0);
seq__46132_46169 = G__46192;
chunk__46134_46170 = G__46193;
count__46135_46171 = G__46194;
i__46136_46172 = G__46195;
continue;
}
} else {
}
}
break;
}

var G__46196 = seq__46122_46162;
var G__46197 = chunk__46129_46163;
var G__46198 = count__46130_46164;
var G__46199 = (i__46131_46165 + (1));
seq__46122_46162 = G__46196;
chunk__46129_46163 = G__46197;
count__46130_46164 = G__46198;
i__46131_46165 = G__46199;
continue;
} else {
var temp__4657__auto___46200 = cljs.core.seq.call(null,seq__46122_46162);
if(temp__4657__auto___46200){
var seq__46122_46201__$1 = temp__4657__auto___46200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46122_46201__$1)){
var c__45247__auto___46202 = cljs.core.chunk_first.call(null,seq__46122_46201__$1);
var G__46203 = cljs.core.chunk_rest.call(null,seq__46122_46201__$1);
var G__46204 = c__45247__auto___46202;
var G__46205 = cljs.core.count.call(null,c__45247__auto___46202);
var G__46206 = (0);
seq__46122_46162 = G__46203;
chunk__46129_46163 = G__46204;
count__46130_46164 = G__46205;
i__46131_46165 = G__46206;
continue;
} else {
var vec__46147_46207 = cljs.core.first.call(null,seq__46122_46201__$1);
var orig_type_46208 = cljs.core.nth.call(null,vec__46147_46207,(0),null);
var f_46209 = cljs.core.nth.call(null,vec__46147_46207,(1),null);
var seq__46123_46210 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_46208,cljs.core.PersistentArrayMap.fromArray([orig_type_46208,cljs.core.identity], true, false)));
var chunk__46125_46211 = null;
var count__46126_46212 = (0);
var i__46127_46213 = (0);
while(true){
if((i__46127_46213 < count__46126_46212)){
var vec__46150_46214 = cljs.core._nth.call(null,chunk__46125_46211,i__46127_46213);
var actual_type_46215 = cljs.core.nth.call(null,vec__46150_46214,(0),null);
var factory_46216 = cljs.core.nth.call(null,vec__46150_46214,(1),null);
var canonical_f_46217 = (cljs.core.truth_(selector_46161)?cljs.core.partial.call(null,dommy.core.live_listener,elem_46160,selector_46161):cljs.core.identity).call(null,factory_46216.call(null,f_46209));
dommy.core.update_event_listeners_BANG_.call(null,elem_46160,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46161,actual_type_46215,f_46209], null),canonical_f_46217);

if(cljs.core.truth_(elem_46160.addEventListener)){
elem_46160.addEventListener(cljs.core.name.call(null,actual_type_46215),canonical_f_46217);
} else {
elem_46160.attachEvent(cljs.core.name.call(null,actual_type_46215),canonical_f_46217);
}

var G__46218 = seq__46123_46210;
var G__46219 = chunk__46125_46211;
var G__46220 = count__46126_46212;
var G__46221 = (i__46127_46213 + (1));
seq__46123_46210 = G__46218;
chunk__46125_46211 = G__46219;
count__46126_46212 = G__46220;
i__46127_46213 = G__46221;
continue;
} else {
var temp__4657__auto___46222__$1 = cljs.core.seq.call(null,seq__46123_46210);
if(temp__4657__auto___46222__$1){
var seq__46123_46223__$1 = temp__4657__auto___46222__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46123_46223__$1)){
var c__45247__auto___46224 = cljs.core.chunk_first.call(null,seq__46123_46223__$1);
var G__46225 = cljs.core.chunk_rest.call(null,seq__46123_46223__$1);
var G__46226 = c__45247__auto___46224;
var G__46227 = cljs.core.count.call(null,c__45247__auto___46224);
var G__46228 = (0);
seq__46123_46210 = G__46225;
chunk__46125_46211 = G__46226;
count__46126_46212 = G__46227;
i__46127_46213 = G__46228;
continue;
} else {
var vec__46153_46229 = cljs.core.first.call(null,seq__46123_46223__$1);
var actual_type_46230 = cljs.core.nth.call(null,vec__46153_46229,(0),null);
var factory_46231 = cljs.core.nth.call(null,vec__46153_46229,(1),null);
var canonical_f_46232 = (cljs.core.truth_(selector_46161)?cljs.core.partial.call(null,dommy.core.live_listener,elem_46160,selector_46161):cljs.core.identity).call(null,factory_46231.call(null,f_46209));
dommy.core.update_event_listeners_BANG_.call(null,elem_46160,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46161,actual_type_46230,f_46209], null),canonical_f_46232);

if(cljs.core.truth_(elem_46160.addEventListener)){
elem_46160.addEventListener(cljs.core.name.call(null,actual_type_46230),canonical_f_46232);
} else {
elem_46160.attachEvent(cljs.core.name.call(null,actual_type_46230),canonical_f_46232);
}

var G__46233 = cljs.core.next.call(null,seq__46123_46223__$1);
var G__46234 = null;
var G__46235 = (0);
var G__46236 = (0);
seq__46123_46210 = G__46233;
chunk__46125_46211 = G__46234;
count__46126_46212 = G__46235;
i__46127_46213 = G__46236;
continue;
}
} else {
}
}
break;
}

var G__46237 = cljs.core.next.call(null,seq__46122_46201__$1);
var G__46238 = null;
var G__46239 = (0);
var G__46240 = (0);
seq__46122_46162 = G__46237;
chunk__46129_46163 = G__46238;
count__46130_46164 = G__46239;
i__46131_46165 = G__46240;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq46117){
var G__46118 = cljs.core.first.call(null,seq46117);
var seq46117__$1 = cljs.core.next.call(null,seq46117);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46118,seq46117__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__45518__auto__ = [];
var len__45511__auto___46280 = arguments.length;
var i__45512__auto___46281 = (0);
while(true){
if((i__45512__auto___46281 < len__45511__auto___46280)){
args__45518__auto__.push((arguments[i__45512__auto___46281]));

var G__46282 = (i__45512__auto___46281 + (1));
i__45512__auto___46281 = G__46282;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((1) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45519__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__46243_46283 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_46284 = cljs.core.nth.call(null,vec__46243_46283,(0),null);
var selector_46285 = cljs.core.nth.call(null,vec__46243_46283,(1),null);
var seq__46246_46286 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__46253_46287 = null;
var count__46254_46288 = (0);
var i__46255_46289 = (0);
while(true){
if((i__46255_46289 < count__46254_46288)){
var vec__46262_46290 = cljs.core._nth.call(null,chunk__46253_46287,i__46255_46289);
var orig_type_46291 = cljs.core.nth.call(null,vec__46262_46290,(0),null);
var f_46292 = cljs.core.nth.call(null,vec__46262_46290,(1),null);
var seq__46256_46293 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_46291,cljs.core.PersistentArrayMap.fromArray([orig_type_46291,cljs.core.identity], true, false)));
var chunk__46258_46294 = null;
var count__46259_46295 = (0);
var i__46260_46296 = (0);
while(true){
if((i__46260_46296 < count__46259_46295)){
var vec__46265_46297 = cljs.core._nth.call(null,chunk__46258_46294,i__46260_46296);
var actual_type_46298 = cljs.core.nth.call(null,vec__46265_46297,(0),null);
var __46299 = cljs.core.nth.call(null,vec__46265_46297,(1),null);
var keys_46300 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46285,actual_type_46298,f_46292], null);
var canonical_f_46301 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_46284),keys_46300);
dommy.core.update_event_listeners_BANG_.call(null,elem_46284,dommy.utils.dissoc_in,keys_46300);

if(cljs.core.truth_(elem_46284.removeEventListener)){
elem_46284.removeEventListener(cljs.core.name.call(null,actual_type_46298),canonical_f_46301);
} else {
elem_46284.detachEvent(cljs.core.name.call(null,actual_type_46298),canonical_f_46301);
}

var G__46302 = seq__46256_46293;
var G__46303 = chunk__46258_46294;
var G__46304 = count__46259_46295;
var G__46305 = (i__46260_46296 + (1));
seq__46256_46293 = G__46302;
chunk__46258_46294 = G__46303;
count__46259_46295 = G__46304;
i__46260_46296 = G__46305;
continue;
} else {
var temp__4657__auto___46306 = cljs.core.seq.call(null,seq__46256_46293);
if(temp__4657__auto___46306){
var seq__46256_46307__$1 = temp__4657__auto___46306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46256_46307__$1)){
var c__45247__auto___46308 = cljs.core.chunk_first.call(null,seq__46256_46307__$1);
var G__46309 = cljs.core.chunk_rest.call(null,seq__46256_46307__$1);
var G__46310 = c__45247__auto___46308;
var G__46311 = cljs.core.count.call(null,c__45247__auto___46308);
var G__46312 = (0);
seq__46256_46293 = G__46309;
chunk__46258_46294 = G__46310;
count__46259_46295 = G__46311;
i__46260_46296 = G__46312;
continue;
} else {
var vec__46268_46313 = cljs.core.first.call(null,seq__46256_46307__$1);
var actual_type_46314 = cljs.core.nth.call(null,vec__46268_46313,(0),null);
var __46315 = cljs.core.nth.call(null,vec__46268_46313,(1),null);
var keys_46316 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46285,actual_type_46314,f_46292], null);
var canonical_f_46317 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_46284),keys_46316);
dommy.core.update_event_listeners_BANG_.call(null,elem_46284,dommy.utils.dissoc_in,keys_46316);

if(cljs.core.truth_(elem_46284.removeEventListener)){
elem_46284.removeEventListener(cljs.core.name.call(null,actual_type_46314),canonical_f_46317);
} else {
elem_46284.detachEvent(cljs.core.name.call(null,actual_type_46314),canonical_f_46317);
}

var G__46318 = cljs.core.next.call(null,seq__46256_46307__$1);
var G__46319 = null;
var G__46320 = (0);
var G__46321 = (0);
seq__46256_46293 = G__46318;
chunk__46258_46294 = G__46319;
count__46259_46295 = G__46320;
i__46260_46296 = G__46321;
continue;
}
} else {
}
}
break;
}

var G__46322 = seq__46246_46286;
var G__46323 = chunk__46253_46287;
var G__46324 = count__46254_46288;
var G__46325 = (i__46255_46289 + (1));
seq__46246_46286 = G__46322;
chunk__46253_46287 = G__46323;
count__46254_46288 = G__46324;
i__46255_46289 = G__46325;
continue;
} else {
var temp__4657__auto___46326 = cljs.core.seq.call(null,seq__46246_46286);
if(temp__4657__auto___46326){
var seq__46246_46327__$1 = temp__4657__auto___46326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46246_46327__$1)){
var c__45247__auto___46328 = cljs.core.chunk_first.call(null,seq__46246_46327__$1);
var G__46329 = cljs.core.chunk_rest.call(null,seq__46246_46327__$1);
var G__46330 = c__45247__auto___46328;
var G__46331 = cljs.core.count.call(null,c__45247__auto___46328);
var G__46332 = (0);
seq__46246_46286 = G__46329;
chunk__46253_46287 = G__46330;
count__46254_46288 = G__46331;
i__46255_46289 = G__46332;
continue;
} else {
var vec__46271_46333 = cljs.core.first.call(null,seq__46246_46327__$1);
var orig_type_46334 = cljs.core.nth.call(null,vec__46271_46333,(0),null);
var f_46335 = cljs.core.nth.call(null,vec__46271_46333,(1),null);
var seq__46247_46336 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_46334,cljs.core.PersistentArrayMap.fromArray([orig_type_46334,cljs.core.identity], true, false)));
var chunk__46249_46337 = null;
var count__46250_46338 = (0);
var i__46251_46339 = (0);
while(true){
if((i__46251_46339 < count__46250_46338)){
var vec__46274_46340 = cljs.core._nth.call(null,chunk__46249_46337,i__46251_46339);
var actual_type_46341 = cljs.core.nth.call(null,vec__46274_46340,(0),null);
var __46342 = cljs.core.nth.call(null,vec__46274_46340,(1),null);
var keys_46343 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46285,actual_type_46341,f_46335], null);
var canonical_f_46344 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_46284),keys_46343);
dommy.core.update_event_listeners_BANG_.call(null,elem_46284,dommy.utils.dissoc_in,keys_46343);

if(cljs.core.truth_(elem_46284.removeEventListener)){
elem_46284.removeEventListener(cljs.core.name.call(null,actual_type_46341),canonical_f_46344);
} else {
elem_46284.detachEvent(cljs.core.name.call(null,actual_type_46341),canonical_f_46344);
}

var G__46345 = seq__46247_46336;
var G__46346 = chunk__46249_46337;
var G__46347 = count__46250_46338;
var G__46348 = (i__46251_46339 + (1));
seq__46247_46336 = G__46345;
chunk__46249_46337 = G__46346;
count__46250_46338 = G__46347;
i__46251_46339 = G__46348;
continue;
} else {
var temp__4657__auto___46349__$1 = cljs.core.seq.call(null,seq__46247_46336);
if(temp__4657__auto___46349__$1){
var seq__46247_46350__$1 = temp__4657__auto___46349__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46247_46350__$1)){
var c__45247__auto___46351 = cljs.core.chunk_first.call(null,seq__46247_46350__$1);
var G__46352 = cljs.core.chunk_rest.call(null,seq__46247_46350__$1);
var G__46353 = c__45247__auto___46351;
var G__46354 = cljs.core.count.call(null,c__45247__auto___46351);
var G__46355 = (0);
seq__46247_46336 = G__46352;
chunk__46249_46337 = G__46353;
count__46250_46338 = G__46354;
i__46251_46339 = G__46355;
continue;
} else {
var vec__46277_46356 = cljs.core.first.call(null,seq__46247_46350__$1);
var actual_type_46357 = cljs.core.nth.call(null,vec__46277_46356,(0),null);
var __46358 = cljs.core.nth.call(null,vec__46277_46356,(1),null);
var keys_46359 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46285,actual_type_46357,f_46335], null);
var canonical_f_46360 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_46284),keys_46359);
dommy.core.update_event_listeners_BANG_.call(null,elem_46284,dommy.utils.dissoc_in,keys_46359);

if(cljs.core.truth_(elem_46284.removeEventListener)){
elem_46284.removeEventListener(cljs.core.name.call(null,actual_type_46357),canonical_f_46360);
} else {
elem_46284.detachEvent(cljs.core.name.call(null,actual_type_46357),canonical_f_46360);
}

var G__46361 = cljs.core.next.call(null,seq__46247_46350__$1);
var G__46362 = null;
var G__46363 = (0);
var G__46364 = (0);
seq__46247_46336 = G__46361;
chunk__46249_46337 = G__46362;
count__46250_46338 = G__46363;
i__46251_46339 = G__46364;
continue;
}
} else {
}
}
break;
}

var G__46365 = cljs.core.next.call(null,seq__46246_46327__$1);
var G__46366 = null;
var G__46367 = (0);
var G__46368 = (0);
seq__46246_46286 = G__46365;
chunk__46253_46287 = G__46366;
count__46254_46288 = G__46367;
i__46255_46289 = G__46368;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq46241){
var G__46242 = cljs.core.first.call(null,seq46241);
var seq46241__$1 = cljs.core.next.call(null,seq46241);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46242,seq46241__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__45518__auto__ = [];
var len__45511__auto___46384 = arguments.length;
var i__45512__auto___46385 = (0);
while(true){
if((i__45512__auto___46385 < len__45511__auto___46384)){
args__45518__auto__.push((arguments[i__45512__auto___46385]));

var G__46386 = (i__45512__auto___46385 + (1));
i__45512__auto___46385 = G__46386;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((1) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45519__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__46371_46387 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_46388 = cljs.core.nth.call(null,vec__46371_46387,(0),null);
var selector_46389 = cljs.core.nth.call(null,vec__46371_46387,(1),null);
var seq__46374_46390 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__46375_46391 = null;
var count__46376_46392 = (0);
var i__46377_46393 = (0);
while(true){
if((i__46377_46393 < count__46376_46392)){
var vec__46378_46394 = cljs.core._nth.call(null,chunk__46375_46391,i__46377_46393);
var type_46395 = cljs.core.nth.call(null,vec__46378_46394,(0),null);
var f_46396 = cljs.core.nth.call(null,vec__46378_46394,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_46395,((function (seq__46374_46390,chunk__46375_46391,count__46376_46392,i__46377_46393,vec__46378_46394,type_46395,f_46396,vec__46371_46387,elem_46388,selector_46389){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_46395,dommy$core$this_fn);

return f_46396.call(null,e);
});})(seq__46374_46390,chunk__46375_46391,count__46376_46392,i__46377_46393,vec__46378_46394,type_46395,f_46396,vec__46371_46387,elem_46388,selector_46389))
);

var G__46397 = seq__46374_46390;
var G__46398 = chunk__46375_46391;
var G__46399 = count__46376_46392;
var G__46400 = (i__46377_46393 + (1));
seq__46374_46390 = G__46397;
chunk__46375_46391 = G__46398;
count__46376_46392 = G__46399;
i__46377_46393 = G__46400;
continue;
} else {
var temp__4657__auto___46401 = cljs.core.seq.call(null,seq__46374_46390);
if(temp__4657__auto___46401){
var seq__46374_46402__$1 = temp__4657__auto___46401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46374_46402__$1)){
var c__45247__auto___46403 = cljs.core.chunk_first.call(null,seq__46374_46402__$1);
var G__46404 = cljs.core.chunk_rest.call(null,seq__46374_46402__$1);
var G__46405 = c__45247__auto___46403;
var G__46406 = cljs.core.count.call(null,c__45247__auto___46403);
var G__46407 = (0);
seq__46374_46390 = G__46404;
chunk__46375_46391 = G__46405;
count__46376_46392 = G__46406;
i__46377_46393 = G__46407;
continue;
} else {
var vec__46381_46408 = cljs.core.first.call(null,seq__46374_46402__$1);
var type_46409 = cljs.core.nth.call(null,vec__46381_46408,(0),null);
var f_46410 = cljs.core.nth.call(null,vec__46381_46408,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_46409,((function (seq__46374_46390,chunk__46375_46391,count__46376_46392,i__46377_46393,vec__46381_46408,type_46409,f_46410,seq__46374_46402__$1,temp__4657__auto___46401,vec__46371_46387,elem_46388,selector_46389){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_46409,dommy$core$this_fn);

return f_46410.call(null,e);
});})(seq__46374_46390,chunk__46375_46391,count__46376_46392,i__46377_46393,vec__46381_46408,type_46409,f_46410,seq__46374_46402__$1,temp__4657__auto___46401,vec__46371_46387,elem_46388,selector_46389))
);

var G__46411 = cljs.core.next.call(null,seq__46374_46402__$1);
var G__46412 = null;
var G__46413 = (0);
var G__46414 = (0);
seq__46374_46390 = G__46411;
chunk__46375_46391 = G__46412;
count__46376_46392 = G__46413;
i__46377_46393 = G__46414;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq46369){
var G__46370 = cljs.core.first.call(null,seq46369);
var seq46369__$1 = cljs.core.next.call(null,seq46369);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46370,seq46369__$1);
});


//# sourceMappingURL=core.js.map?rel=1490223981658