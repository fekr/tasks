// Compiled by ClojureScript 1.9.494 {}
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
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__44826__auto__ = elem.textContent;
if(cljs.core.truth_(or__44826__auto__)){
return or__44826__auto__;
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
var args46491 = [];
var len__45939__auto___46494 = arguments.length;
var i__45940__auto___46495 = (0);
while(true){
if((i__45940__auto___46495 < len__45939__auto___46494)){
args46491.push((arguments[i__45940__auto___46495]));

var G__46496 = (i__45940__auto___46495 + (1));
i__45940__auto___46495 = G__46496;
continue;
} else {
}
break;
}

var G__46493 = args46491.length;
switch (G__46493) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46491.length)].join('')));

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
var args46498 = [];
var len__45939__auto___46501 = arguments.length;
var i__45940__auto___46502 = (0);
while(true){
if((i__45940__auto___46502 < len__45939__auto___46501)){
args46498.push((arguments[i__45940__auto___46502]));

var G__46503 = (i__45940__auto___46502 + (1));
i__45940__auto___46502 = G__46503;
continue;
} else {
}
break;
}

var G__46500 = args46498.length;
switch (G__46500) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46498.length)].join('')));

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
var args46506 = [];
var len__45939__auto___46509 = arguments.length;
var i__45940__auto___46510 = (0);
while(true){
if((i__45940__auto___46510 < len__45939__auto___46509)){
args46506.push((arguments[i__45940__auto___46510]));

var G__46511 = (i__45940__auto___46510 + (1));
i__45940__auto___46510 = G__46511;
continue;
} else {
}
break;
}

var G__46508 = args46506.length;
switch (G__46508) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46506.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__46505_SHARP_){
return !((p1__46505_SHARP_ === base));
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
var args__45946__auto__ = [];
var len__45939__auto___46525 = arguments.length;
var i__45940__auto___46526 = (0);
while(true){
if((i__45940__auto___46526 < len__45939__auto___46525)){
args__45946__auto__.push((arguments[i__45940__auto___46526]));

var G__46527 = (i__45940__auto___46526 + (1));
i__45940__auto___46526 = G__46527;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((1) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45947__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__46515_46528 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__46516_46529 = null;
var count__46517_46530 = (0);
var i__46518_46531 = (0);
while(true){
if((i__46518_46531 < count__46517_46530)){
var vec__46519_46532 = cljs.core._nth.call(null,chunk__46516_46529,i__46518_46531);
var k_46533 = cljs.core.nth.call(null,vec__46519_46532,(0),null);
var v_46534 = cljs.core.nth.call(null,vec__46519_46532,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_46533),v_46534);

var G__46535 = seq__46515_46528;
var G__46536 = chunk__46516_46529;
var G__46537 = count__46517_46530;
var G__46538 = (i__46518_46531 + (1));
seq__46515_46528 = G__46535;
chunk__46516_46529 = G__46536;
count__46517_46530 = G__46537;
i__46518_46531 = G__46538;
continue;
} else {
var temp__4657__auto___46539 = cljs.core.seq.call(null,seq__46515_46528);
if(temp__4657__auto___46539){
var seq__46515_46540__$1 = temp__4657__auto___46539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46515_46540__$1)){
var c__45645__auto___46541 = cljs.core.chunk_first.call(null,seq__46515_46540__$1);
var G__46542 = cljs.core.chunk_rest.call(null,seq__46515_46540__$1);
var G__46543 = c__45645__auto___46541;
var G__46544 = cljs.core.count.call(null,c__45645__auto___46541);
var G__46545 = (0);
seq__46515_46528 = G__46542;
chunk__46516_46529 = G__46543;
count__46517_46530 = G__46544;
i__46518_46531 = G__46545;
continue;
} else {
var vec__46522_46546 = cljs.core.first.call(null,seq__46515_46540__$1);
var k_46547 = cljs.core.nth.call(null,vec__46522_46546,(0),null);
var v_46548 = cljs.core.nth.call(null,vec__46522_46546,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_46547),v_46548);

var G__46549 = cljs.core.next.call(null,seq__46515_46540__$1);
var G__46550 = null;
var G__46551 = (0);
var G__46552 = (0);
seq__46515_46528 = G__46549;
chunk__46516_46529 = G__46550;
count__46517_46530 = G__46551;
i__46518_46531 = G__46552;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq46513){
var G__46514 = cljs.core.first.call(null,seq46513);
var seq46513__$1 = cljs.core.next.call(null,seq46513);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46514,seq46513__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__45946__auto__ = [];
var len__45939__auto___46559 = arguments.length;
var i__45940__auto___46560 = (0);
while(true){
if((i__45940__auto___46560 < len__45939__auto___46559)){
args__45946__auto__.push((arguments[i__45940__auto___46560]));

var G__46561 = (i__45940__auto___46560 + (1));
i__45940__auto___46560 = G__46561;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((1) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45947__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__46555_46562 = cljs.core.seq.call(null,keywords);
var chunk__46556_46563 = null;
var count__46557_46564 = (0);
var i__46558_46565 = (0);
while(true){
if((i__46558_46565 < count__46557_46564)){
var kw_46566 = cljs.core._nth.call(null,chunk__46556_46563,i__46558_46565);
style.removeProperty(dommy.utils.as_str.call(null,kw_46566));

var G__46567 = seq__46555_46562;
var G__46568 = chunk__46556_46563;
var G__46569 = count__46557_46564;
var G__46570 = (i__46558_46565 + (1));
seq__46555_46562 = G__46567;
chunk__46556_46563 = G__46568;
count__46557_46564 = G__46569;
i__46558_46565 = G__46570;
continue;
} else {
var temp__4657__auto___46571 = cljs.core.seq.call(null,seq__46555_46562);
if(temp__4657__auto___46571){
var seq__46555_46572__$1 = temp__4657__auto___46571;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46555_46572__$1)){
var c__45645__auto___46573 = cljs.core.chunk_first.call(null,seq__46555_46572__$1);
var G__46574 = cljs.core.chunk_rest.call(null,seq__46555_46572__$1);
var G__46575 = c__45645__auto___46573;
var G__46576 = cljs.core.count.call(null,c__45645__auto___46573);
var G__46577 = (0);
seq__46555_46562 = G__46574;
chunk__46556_46563 = G__46575;
count__46557_46564 = G__46576;
i__46558_46565 = G__46577;
continue;
} else {
var kw_46578 = cljs.core.first.call(null,seq__46555_46572__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_46578));

var G__46579 = cljs.core.next.call(null,seq__46555_46572__$1);
var G__46580 = null;
var G__46581 = (0);
var G__46582 = (0);
seq__46555_46562 = G__46579;
chunk__46556_46563 = G__46580;
count__46557_46564 = G__46581;
i__46558_46565 = G__46582;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq46553){
var G__46554 = cljs.core.first.call(null,seq46553);
var seq46553__$1 = cljs.core.next.call(null,seq46553);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46554,seq46553__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__45946__auto__ = [];
var len__45939__auto___46595 = arguments.length;
var i__45940__auto___46596 = (0);
while(true){
if((i__45940__auto___46596 < len__45939__auto___46595)){
args__45946__auto__.push((arguments[i__45940__auto___46596]));

var G__46597 = (i__45940__auto___46596 + (1));
i__45940__auto___46596 = G__46597;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((1) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45947__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__46585_46598 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__46586_46599 = null;
var count__46587_46600 = (0);
var i__46588_46601 = (0);
while(true){
if((i__46588_46601 < count__46587_46600)){
var vec__46589_46602 = cljs.core._nth.call(null,chunk__46586_46599,i__46588_46601);
var k_46603 = cljs.core.nth.call(null,vec__46589_46602,(0),null);
var v_46604 = cljs.core.nth.call(null,vec__46589_46602,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_46603,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_46604),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''));

var G__46605 = seq__46585_46598;
var G__46606 = chunk__46586_46599;
var G__46607 = count__46587_46600;
var G__46608 = (i__46588_46601 + (1));
seq__46585_46598 = G__46605;
chunk__46586_46599 = G__46606;
count__46587_46600 = G__46607;
i__46588_46601 = G__46608;
continue;
} else {
var temp__4657__auto___46609 = cljs.core.seq.call(null,seq__46585_46598);
if(temp__4657__auto___46609){
var seq__46585_46610__$1 = temp__4657__auto___46609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46585_46610__$1)){
var c__45645__auto___46611 = cljs.core.chunk_first.call(null,seq__46585_46610__$1);
var G__46612 = cljs.core.chunk_rest.call(null,seq__46585_46610__$1);
var G__46613 = c__45645__auto___46611;
var G__46614 = cljs.core.count.call(null,c__45645__auto___46611);
var G__46615 = (0);
seq__46585_46598 = G__46612;
chunk__46586_46599 = G__46613;
count__46587_46600 = G__46614;
i__46588_46601 = G__46615;
continue;
} else {
var vec__46592_46616 = cljs.core.first.call(null,seq__46585_46610__$1);
var k_46617 = cljs.core.nth.call(null,vec__46592_46616,(0),null);
var v_46618 = cljs.core.nth.call(null,vec__46592_46616,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_46617,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_46618),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''));

var G__46619 = cljs.core.next.call(null,seq__46585_46610__$1);
var G__46620 = null;
var G__46621 = (0);
var G__46622 = (0);
seq__46585_46598 = G__46619;
chunk__46586_46599 = G__46620;
count__46587_46600 = G__46621;
i__46588_46601 = G__46622;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq46583){
var G__46584 = cljs.core.first.call(null,seq46583);
var seq46583__$1 = cljs.core.next.call(null,seq46583);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46584,seq46583__$1);
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
var args46623 = [];
var len__45939__auto___46642 = arguments.length;
var i__45940__auto___46643 = (0);
while(true){
if((i__45940__auto___46643 < len__45939__auto___46642)){
args46623.push((arguments[i__45940__auto___46643]));

var G__46644 = (i__45940__auto___46643 + (1));
i__45940__auto___46643 = G__46644;
continue;
} else {
}
break;
}

var G__46629 = args46623.length;
switch (G__46629) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__45958__auto__ = (new cljs.core.IndexedSeq(args46623.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45958__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__46630 = elem;
(G__46630[k__$1] = v);

return G__46630;
} else {
var G__46631 = elem;
G__46631.setAttribute(k__$1,v);

return G__46631;
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

var seq__46632_46646 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__46633_46647 = null;
var count__46634_46648 = (0);
var i__46635_46649 = (0);
while(true){
if((i__46635_46649 < count__46634_46648)){
var vec__46636_46650 = cljs.core._nth.call(null,chunk__46633_46647,i__46635_46649);
var k_46651__$1 = cljs.core.nth.call(null,vec__46636_46650,(0),null);
var v_46652__$1 = cljs.core.nth.call(null,vec__46636_46650,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_46651__$1,v_46652__$1);

var G__46653 = seq__46632_46646;
var G__46654 = chunk__46633_46647;
var G__46655 = count__46634_46648;
var G__46656 = (i__46635_46649 + (1));
seq__46632_46646 = G__46653;
chunk__46633_46647 = G__46654;
count__46634_46648 = G__46655;
i__46635_46649 = G__46656;
continue;
} else {
var temp__4657__auto___46657 = cljs.core.seq.call(null,seq__46632_46646);
if(temp__4657__auto___46657){
var seq__46632_46658__$1 = temp__4657__auto___46657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46632_46658__$1)){
var c__45645__auto___46659 = cljs.core.chunk_first.call(null,seq__46632_46658__$1);
var G__46660 = cljs.core.chunk_rest.call(null,seq__46632_46658__$1);
var G__46661 = c__45645__auto___46659;
var G__46662 = cljs.core.count.call(null,c__45645__auto___46659);
var G__46663 = (0);
seq__46632_46646 = G__46660;
chunk__46633_46647 = G__46661;
count__46634_46648 = G__46662;
i__46635_46649 = G__46663;
continue;
} else {
var vec__46639_46664 = cljs.core.first.call(null,seq__46632_46658__$1);
var k_46665__$1 = cljs.core.nth.call(null,vec__46639_46664,(0),null);
var v_46666__$1 = cljs.core.nth.call(null,vec__46639_46664,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_46665__$1,v_46666__$1);

var G__46667 = cljs.core.next.call(null,seq__46632_46658__$1);
var G__46668 = null;
var G__46669 = (0);
var G__46670 = (0);
seq__46632_46646 = G__46667;
chunk__46633_46647 = G__46668;
count__46634_46648 = G__46669;
i__46635_46649 = G__46670;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq46624){
var G__46625 = cljs.core.first.call(null,seq46624);
var seq46624__$1 = cljs.core.next.call(null,seq46624);
var G__46626 = cljs.core.first.call(null,seq46624__$1);
var seq46624__$2 = cljs.core.next.call(null,seq46624__$1);
var G__46627 = cljs.core.first.call(null,seq46624__$2);
var seq46624__$3 = cljs.core.next.call(null,seq46624__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46625,G__46626,G__46627,seq46624__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args46671 = [];
var len__45939__auto___46681 = arguments.length;
var i__45940__auto___46682 = (0);
while(true){
if((i__45940__auto___46682 < len__45939__auto___46681)){
args46671.push((arguments[i__45940__auto___46682]));

var G__46683 = (i__45940__auto___46682 + (1));
i__45940__auto___46682 = G__46683;
continue;
} else {
}
break;
}

var G__46676 = args46671.length;
switch (G__46676) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45958__auto__ = (new cljs.core.IndexedSeq(args46671.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45958__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_46685__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_46685__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_46685__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__46677_46686 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__46678_46687 = null;
var count__46679_46688 = (0);
var i__46680_46689 = (0);
while(true){
if((i__46680_46689 < count__46679_46688)){
var k_46690__$1 = cljs.core._nth.call(null,chunk__46678_46687,i__46680_46689);
dommy.core.remove_attr_BANG_.call(null,elem,k_46690__$1);

var G__46691 = seq__46677_46686;
var G__46692 = chunk__46678_46687;
var G__46693 = count__46679_46688;
var G__46694 = (i__46680_46689 + (1));
seq__46677_46686 = G__46691;
chunk__46678_46687 = G__46692;
count__46679_46688 = G__46693;
i__46680_46689 = G__46694;
continue;
} else {
var temp__4657__auto___46695 = cljs.core.seq.call(null,seq__46677_46686);
if(temp__4657__auto___46695){
var seq__46677_46696__$1 = temp__4657__auto___46695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46677_46696__$1)){
var c__45645__auto___46697 = cljs.core.chunk_first.call(null,seq__46677_46696__$1);
var G__46698 = cljs.core.chunk_rest.call(null,seq__46677_46696__$1);
var G__46699 = c__45645__auto___46697;
var G__46700 = cljs.core.count.call(null,c__45645__auto___46697);
var G__46701 = (0);
seq__46677_46686 = G__46698;
chunk__46678_46687 = G__46699;
count__46679_46688 = G__46700;
i__46680_46689 = G__46701;
continue;
} else {
var k_46702__$1 = cljs.core.first.call(null,seq__46677_46696__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_46702__$1);

var G__46703 = cljs.core.next.call(null,seq__46677_46696__$1);
var G__46704 = null;
var G__46705 = (0);
var G__46706 = (0);
seq__46677_46686 = G__46703;
chunk__46678_46687 = G__46704;
count__46679_46688 = G__46705;
i__46680_46689 = G__46706;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq46672){
var G__46673 = cljs.core.first.call(null,seq46672);
var seq46672__$1 = cljs.core.next.call(null,seq46672);
var G__46674 = cljs.core.first.call(null,seq46672__$1);
var seq46672__$2 = cljs.core.next.call(null,seq46672__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46673,G__46674,seq46672__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args46707 = [];
var len__45939__auto___46710 = arguments.length;
var i__45940__auto___46711 = (0);
while(true){
if((i__45940__auto___46711 < len__45939__auto___46710)){
args46707.push((arguments[i__45940__auto___46711]));

var G__46712 = (i__45940__auto___46711 + (1));
i__45940__auto___46711 = G__46712;
continue;
} else {
}
break;
}

var G__46709 = args46707.length;
switch (G__46709) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46707.length)].join('')));

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
var args46714 = [];
var len__45939__auto___46732 = arguments.length;
var i__45940__auto___46733 = (0);
while(true){
if((i__45940__auto___46733 < len__45939__auto___46732)){
args46714.push((arguments[i__45940__auto___46733]));

var G__46734 = (i__45940__auto___46733 + (1));
i__45940__auto___46733 = G__46734;
continue;
} else {
}
break;
}

var G__46719 = args46714.length;
switch (G__46719) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45958__auto__ = (new cljs.core.IndexedSeq(args46714.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45958__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___46736 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___46736)){
var class_list_46737 = temp__4655__auto___46736;
var seq__46720_46738 = cljs.core.seq.call(null,classes__$1);
var chunk__46721_46739 = null;
var count__46722_46740 = (0);
var i__46723_46741 = (0);
while(true){
if((i__46723_46741 < count__46722_46740)){
var c_46742 = cljs.core._nth.call(null,chunk__46721_46739,i__46723_46741);
class_list_46737.add(c_46742);

var G__46743 = seq__46720_46738;
var G__46744 = chunk__46721_46739;
var G__46745 = count__46722_46740;
var G__46746 = (i__46723_46741 + (1));
seq__46720_46738 = G__46743;
chunk__46721_46739 = G__46744;
count__46722_46740 = G__46745;
i__46723_46741 = G__46746;
continue;
} else {
var temp__4657__auto___46747 = cljs.core.seq.call(null,seq__46720_46738);
if(temp__4657__auto___46747){
var seq__46720_46748__$1 = temp__4657__auto___46747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46720_46748__$1)){
var c__45645__auto___46749 = cljs.core.chunk_first.call(null,seq__46720_46748__$1);
var G__46750 = cljs.core.chunk_rest.call(null,seq__46720_46748__$1);
var G__46751 = c__45645__auto___46749;
var G__46752 = cljs.core.count.call(null,c__45645__auto___46749);
var G__46753 = (0);
seq__46720_46738 = G__46750;
chunk__46721_46739 = G__46751;
count__46722_46740 = G__46752;
i__46723_46741 = G__46753;
continue;
} else {
var c_46754 = cljs.core.first.call(null,seq__46720_46748__$1);
class_list_46737.add(c_46754);

var G__46755 = cljs.core.next.call(null,seq__46720_46748__$1);
var G__46756 = null;
var G__46757 = (0);
var G__46758 = (0);
seq__46720_46738 = G__46755;
chunk__46721_46739 = G__46756;
count__46722_46740 = G__46757;
i__46723_46741 = G__46758;
continue;
}
} else {
}
}
break;
}
} else {
var seq__46724_46759 = cljs.core.seq.call(null,classes__$1);
var chunk__46725_46760 = null;
var count__46726_46761 = (0);
var i__46727_46762 = (0);
while(true){
if((i__46727_46762 < count__46726_46761)){
var c_46763 = cljs.core._nth.call(null,chunk__46725_46760,i__46727_46762);
var class_name_46764 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_46764,c_46763))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_46764 === ""))?c_46763:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_46764),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_46763)].join('')));
}

var G__46765 = seq__46724_46759;
var G__46766 = chunk__46725_46760;
var G__46767 = count__46726_46761;
var G__46768 = (i__46727_46762 + (1));
seq__46724_46759 = G__46765;
chunk__46725_46760 = G__46766;
count__46726_46761 = G__46767;
i__46727_46762 = G__46768;
continue;
} else {
var temp__4657__auto___46769 = cljs.core.seq.call(null,seq__46724_46759);
if(temp__4657__auto___46769){
var seq__46724_46770__$1 = temp__4657__auto___46769;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46724_46770__$1)){
var c__45645__auto___46771 = cljs.core.chunk_first.call(null,seq__46724_46770__$1);
var G__46772 = cljs.core.chunk_rest.call(null,seq__46724_46770__$1);
var G__46773 = c__45645__auto___46771;
var G__46774 = cljs.core.count.call(null,c__45645__auto___46771);
var G__46775 = (0);
seq__46724_46759 = G__46772;
chunk__46725_46760 = G__46773;
count__46726_46761 = G__46774;
i__46727_46762 = G__46775;
continue;
} else {
var c_46776 = cljs.core.first.call(null,seq__46724_46770__$1);
var class_name_46777 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_46777,c_46776))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_46777 === ""))?c_46776:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_46777),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_46776)].join('')));
}

var G__46778 = cljs.core.next.call(null,seq__46724_46770__$1);
var G__46779 = null;
var G__46780 = (0);
var G__46781 = (0);
seq__46724_46759 = G__46778;
chunk__46725_46760 = G__46779;
count__46726_46761 = G__46780;
i__46727_46762 = G__46781;
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
var seq__46728_46782 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__46729_46783 = null;
var count__46730_46784 = (0);
var i__46731_46785 = (0);
while(true){
if((i__46731_46785 < count__46730_46784)){
var c_46786 = cljs.core._nth.call(null,chunk__46729_46783,i__46731_46785);
dommy.core.add_class_BANG_.call(null,elem,c_46786);

var G__46787 = seq__46728_46782;
var G__46788 = chunk__46729_46783;
var G__46789 = count__46730_46784;
var G__46790 = (i__46731_46785 + (1));
seq__46728_46782 = G__46787;
chunk__46729_46783 = G__46788;
count__46730_46784 = G__46789;
i__46731_46785 = G__46790;
continue;
} else {
var temp__4657__auto___46791 = cljs.core.seq.call(null,seq__46728_46782);
if(temp__4657__auto___46791){
var seq__46728_46792__$1 = temp__4657__auto___46791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46728_46792__$1)){
var c__45645__auto___46793 = cljs.core.chunk_first.call(null,seq__46728_46792__$1);
var G__46794 = cljs.core.chunk_rest.call(null,seq__46728_46792__$1);
var G__46795 = c__45645__auto___46793;
var G__46796 = cljs.core.count.call(null,c__45645__auto___46793);
var G__46797 = (0);
seq__46728_46782 = G__46794;
chunk__46729_46783 = G__46795;
count__46730_46784 = G__46796;
i__46731_46785 = G__46797;
continue;
} else {
var c_46798 = cljs.core.first.call(null,seq__46728_46792__$1);
dommy.core.add_class_BANG_.call(null,elem,c_46798);

var G__46799 = cljs.core.next.call(null,seq__46728_46792__$1);
var G__46800 = null;
var G__46801 = (0);
var G__46802 = (0);
seq__46728_46782 = G__46799;
chunk__46729_46783 = G__46800;
count__46730_46784 = G__46801;
i__46731_46785 = G__46802;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq46715){
var G__46716 = cljs.core.first.call(null,seq46715);
var seq46715__$1 = cljs.core.next.call(null,seq46715);
var G__46717 = cljs.core.first.call(null,seq46715__$1);
var seq46715__$2 = cljs.core.next.call(null,seq46715__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46716,G__46717,seq46715__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args46803 = [];
var len__45939__auto___46813 = arguments.length;
var i__45940__auto___46814 = (0);
while(true){
if((i__45940__auto___46814 < len__45939__auto___46813)){
args46803.push((arguments[i__45940__auto___46814]));

var G__46815 = (i__45940__auto___46814 + (1));
i__45940__auto___46814 = G__46815;
continue;
} else {
}
break;
}

var G__46808 = args46803.length;
switch (G__46808) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45958__auto__ = (new cljs.core.IndexedSeq(args46803.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45958__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___46817 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___46817)){
var class_list_46818 = temp__4655__auto___46817;
class_list_46818.remove(c__$1);
} else {
var class_name_46819 = dommy.core.class$.call(null,elem);
var new_class_name_46820 = dommy.utils.remove_class_str.call(null,class_name_46819,c__$1);
if((class_name_46819 === new_class_name_46820)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_46820);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__46809 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__46810 = null;
var count__46811 = (0);
var i__46812 = (0);
while(true){
if((i__46812 < count__46811)){
var c = cljs.core._nth.call(null,chunk__46810,i__46812);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__46821 = seq__46809;
var G__46822 = chunk__46810;
var G__46823 = count__46811;
var G__46824 = (i__46812 + (1));
seq__46809 = G__46821;
chunk__46810 = G__46822;
count__46811 = G__46823;
i__46812 = G__46824;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46809);
if(temp__4657__auto__){
var seq__46809__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46809__$1)){
var c__45645__auto__ = cljs.core.chunk_first.call(null,seq__46809__$1);
var G__46825 = cljs.core.chunk_rest.call(null,seq__46809__$1);
var G__46826 = c__45645__auto__;
var G__46827 = cljs.core.count.call(null,c__45645__auto__);
var G__46828 = (0);
seq__46809 = G__46825;
chunk__46810 = G__46826;
count__46811 = G__46827;
i__46812 = G__46828;
continue;
} else {
var c = cljs.core.first.call(null,seq__46809__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__46829 = cljs.core.next.call(null,seq__46809__$1);
var G__46830 = null;
var G__46831 = (0);
var G__46832 = (0);
seq__46809 = G__46829;
chunk__46810 = G__46830;
count__46811 = G__46831;
i__46812 = G__46832;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq46804){
var G__46805 = cljs.core.first.call(null,seq46804);
var seq46804__$1 = cljs.core.next.call(null,seq46804);
var G__46806 = cljs.core.first.call(null,seq46804__$1);
var seq46804__$2 = cljs.core.next.call(null,seq46804__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46805,G__46806,seq46804__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args46833 = [];
var len__45939__auto___46836 = arguments.length;
var i__45940__auto___46837 = (0);
while(true){
if((i__45940__auto___46837 < len__45939__auto___46836)){
args46833.push((arguments[i__45940__auto___46837]));

var G__46838 = (i__45940__auto___46837 + (1));
i__45940__auto___46837 = G__46838;
continue;
} else {
}
break;
}

var G__46835 = args46833.length;
switch (G__46835) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46833.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___46840 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___46840)){
var class_list_46841 = temp__4655__auto___46840;
class_list_46841.toggle(c__$1);
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
var args46842 = [];
var len__45939__auto___46845 = arguments.length;
var i__45940__auto___46846 = (0);
while(true){
if((i__45940__auto___46846 < len__45939__auto___46845)){
args46842.push((arguments[i__45940__auto___46846]));

var G__46847 = (i__45940__auto___46846 + (1));
i__45940__auto___46846 = G__46847;
continue;
} else {
}
break;
}

var G__46844 = args46842.length;
switch (G__46844) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46842.length)].join('')));

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
var args46849 = [];
var len__45939__auto___46852 = arguments.length;
var i__45940__auto___46853 = (0);
while(true){
if((i__45940__auto___46853 < len__45939__auto___46852)){
args46849.push((arguments[i__45940__auto___46853]));

var G__46854 = (i__45940__auto___46853 + (1));
i__45940__auto___46853 = G__46854;
continue;
} else {
}
break;
}

var G__46851 = args46849.length;
switch (G__46851) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46849.length)].join('')));

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
var args46856 = [];
var len__45939__auto___46867 = arguments.length;
var i__45940__auto___46868 = (0);
while(true){
if((i__45940__auto___46868 < len__45939__auto___46867)){
args46856.push((arguments[i__45940__auto___46868]));

var G__46869 = (i__45940__auto___46868 + (1));
i__45940__auto___46868 = G__46869;
continue;
} else {
}
break;
}

var G__46861 = args46856.length;
switch (G__46861) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45958__auto__ = (new cljs.core.IndexedSeq(args46856.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45958__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__46862 = parent;
G__46862.appendChild(child);

return G__46862;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__46863_46871 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__46864_46872 = null;
var count__46865_46873 = (0);
var i__46866_46874 = (0);
while(true){
if((i__46866_46874 < count__46865_46873)){
var c_46875 = cljs.core._nth.call(null,chunk__46864_46872,i__46866_46874);
dommy.core.append_BANG_.call(null,parent,c_46875);

var G__46876 = seq__46863_46871;
var G__46877 = chunk__46864_46872;
var G__46878 = count__46865_46873;
var G__46879 = (i__46866_46874 + (1));
seq__46863_46871 = G__46876;
chunk__46864_46872 = G__46877;
count__46865_46873 = G__46878;
i__46866_46874 = G__46879;
continue;
} else {
var temp__4657__auto___46880 = cljs.core.seq.call(null,seq__46863_46871);
if(temp__4657__auto___46880){
var seq__46863_46881__$1 = temp__4657__auto___46880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46863_46881__$1)){
var c__45645__auto___46882 = cljs.core.chunk_first.call(null,seq__46863_46881__$1);
var G__46883 = cljs.core.chunk_rest.call(null,seq__46863_46881__$1);
var G__46884 = c__45645__auto___46882;
var G__46885 = cljs.core.count.call(null,c__45645__auto___46882);
var G__46886 = (0);
seq__46863_46871 = G__46883;
chunk__46864_46872 = G__46884;
count__46865_46873 = G__46885;
i__46866_46874 = G__46886;
continue;
} else {
var c_46887 = cljs.core.first.call(null,seq__46863_46881__$1);
dommy.core.append_BANG_.call(null,parent,c_46887);

var G__46888 = cljs.core.next.call(null,seq__46863_46881__$1);
var G__46889 = null;
var G__46890 = (0);
var G__46891 = (0);
seq__46863_46871 = G__46888;
chunk__46864_46872 = G__46889;
count__46865_46873 = G__46890;
i__46866_46874 = G__46891;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq46857){
var G__46858 = cljs.core.first.call(null,seq46857);
var seq46857__$1 = cljs.core.next.call(null,seq46857);
var G__46859 = cljs.core.first.call(null,seq46857__$1);
var seq46857__$2 = cljs.core.next.call(null,seq46857__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46858,G__46859,seq46857__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args46892 = [];
var len__45939__auto___46903 = arguments.length;
var i__45940__auto___46904 = (0);
while(true){
if((i__45940__auto___46904 < len__45939__auto___46903)){
args46892.push((arguments[i__45940__auto___46904]));

var G__46905 = (i__45940__auto___46904 + (1));
i__45940__auto___46904 = G__46905;
continue;
} else {
}
break;
}

var G__46897 = args46892.length;
switch (G__46897) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__45958__auto__ = (new cljs.core.IndexedSeq(args46892.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45958__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__46898 = parent;
G__46898.insertBefore(child,parent.firstChild);

return G__46898;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__46899_46907 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__46900_46908 = null;
var count__46901_46909 = (0);
var i__46902_46910 = (0);
while(true){
if((i__46902_46910 < count__46901_46909)){
var c_46911 = cljs.core._nth.call(null,chunk__46900_46908,i__46902_46910);
dommy.core.prepend_BANG_.call(null,parent,c_46911);

var G__46912 = seq__46899_46907;
var G__46913 = chunk__46900_46908;
var G__46914 = count__46901_46909;
var G__46915 = (i__46902_46910 + (1));
seq__46899_46907 = G__46912;
chunk__46900_46908 = G__46913;
count__46901_46909 = G__46914;
i__46902_46910 = G__46915;
continue;
} else {
var temp__4657__auto___46916 = cljs.core.seq.call(null,seq__46899_46907);
if(temp__4657__auto___46916){
var seq__46899_46917__$1 = temp__4657__auto___46916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46899_46917__$1)){
var c__45645__auto___46918 = cljs.core.chunk_first.call(null,seq__46899_46917__$1);
var G__46919 = cljs.core.chunk_rest.call(null,seq__46899_46917__$1);
var G__46920 = c__45645__auto___46918;
var G__46921 = cljs.core.count.call(null,c__45645__auto___46918);
var G__46922 = (0);
seq__46899_46907 = G__46919;
chunk__46900_46908 = G__46920;
count__46901_46909 = G__46921;
i__46902_46910 = G__46922;
continue;
} else {
var c_46923 = cljs.core.first.call(null,seq__46899_46917__$1);
dommy.core.prepend_BANG_.call(null,parent,c_46923);

var G__46924 = cljs.core.next.call(null,seq__46899_46917__$1);
var G__46925 = null;
var G__46926 = (0);
var G__46927 = (0);
seq__46899_46907 = G__46924;
chunk__46900_46908 = G__46925;
count__46901_46909 = G__46926;
i__46902_46910 = G__46927;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq46893){
var G__46894 = cljs.core.first.call(null,seq46893);
var seq46893__$1 = cljs.core.next.call(null,seq46893);
var G__46895 = cljs.core.first.call(null,seq46893__$1);
var seq46893__$2 = cljs.core.next.call(null,seq46893__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46894,G__46895,seq46893__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Target element must have a parent"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___46928 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___46928)){
var next_46929 = temp__4655__auto___46928;
dommy.core.insert_before_BANG_.call(null,elem,next_46929);
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Target element must have a parent"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("p")].join('')));
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
var args46930 = [];
var len__45939__auto___46934 = arguments.length;
var i__45940__auto___46935 = (0);
while(true){
if((i__45940__auto___46935 < len__45939__auto___46934)){
args46930.push((arguments[i__45940__auto___46935]));

var G__46936 = (i__45940__auto___46935 + (1));
i__45940__auto___46935 = G__46936;
continue;
} else {
}
break;
}

var G__46932 = args46930.length;
switch (G__46932) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46930.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Target element must have a parent"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__46933 = p;
G__46933.removeChild(elem);

return G__46933;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__46938){
var vec__46939 = p__46938;
var special_mouse_event = cljs.core.nth.call(null,vec__46939,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__46939,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__46939,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__46939,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__44826__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__44826__auto__)){
return or__44826__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__44814__auto__ = related_target;
if(cljs.core.truth_(and__44814__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__44814__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__46939,special_mouse_event,real_mouse_event))
});})(vec__46939,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__44814__auto__ = selected_target;
if(cljs.core.truth_(and__44814__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__44814__auto__;
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
var or__44826__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__44826__auto__)){
return or__44826__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__45946__auto__ = [];
var len__45939__auto___46945 = arguments.length;
var i__45940__auto___46946 = (0);
while(true){
if((i__45940__auto___46946 < len__45939__auto___46945)){
args__45946__auto__.push((arguments[i__45940__auto___46946]));

var G__46947 = (i__45940__auto___46946 + (1));
i__45940__auto___46946 = G__46947;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((2) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45947__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq46942){
var G__46943 = cljs.core.first.call(null,seq46942);
var seq46942__$1 = cljs.core.next.call(null,seq46942);
var G__46944 = cljs.core.first.call(null,seq46942__$1);
var seq46942__$2 = cljs.core.next.call(null,seq46942__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46943,G__46944,seq46942__$2);
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
var args__45946__auto__ = [];
var len__45939__auto___46987 = arguments.length;
var i__45940__auto___46988 = (0);
while(true){
if((i__45940__auto___46988 < len__45939__auto___46987)){
args__45946__auto__.push((arguments[i__45940__auto___46988]));

var G__46989 = (i__45940__auto___46988 + (1));
i__45940__auto___46988 = G__46989;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((1) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45947__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__46950_46990 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_46991 = cljs.core.nth.call(null,vec__46950_46990,(0),null);
var selector_46992 = cljs.core.nth.call(null,vec__46950_46990,(1),null);
var seq__46953_46993 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__46960_46994 = null;
var count__46961_46995 = (0);
var i__46962_46996 = (0);
while(true){
if((i__46962_46996 < count__46961_46995)){
var vec__46969_46997 = cljs.core._nth.call(null,chunk__46960_46994,i__46962_46996);
var orig_type_46998 = cljs.core.nth.call(null,vec__46969_46997,(0),null);
var f_46999 = cljs.core.nth.call(null,vec__46969_46997,(1),null);
var seq__46963_47000 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_46998,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_46998,cljs.core.identity])));
var chunk__46965_47001 = null;
var count__46966_47002 = (0);
var i__46967_47003 = (0);
while(true){
if((i__46967_47003 < count__46966_47002)){
var vec__46972_47004 = cljs.core._nth.call(null,chunk__46965_47001,i__46967_47003);
var actual_type_47005 = cljs.core.nth.call(null,vec__46972_47004,(0),null);
var factory_47006 = cljs.core.nth.call(null,vec__46972_47004,(1),null);
var canonical_f_47007 = (cljs.core.truth_(selector_46992)?cljs.core.partial.call(null,dommy.core.live_listener,elem_46991,selector_46992):cljs.core.identity).call(null,factory_47006.call(null,f_46999));
dommy.core.update_event_listeners_BANG_.call(null,elem_46991,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46992,actual_type_47005,f_46999], null),canonical_f_47007);

if(cljs.core.truth_(elem_46991.addEventListener)){
elem_46991.addEventListener(cljs.core.name.call(null,actual_type_47005),canonical_f_47007);
} else {
elem_46991.attachEvent(cljs.core.name.call(null,actual_type_47005),canonical_f_47007);
}

var G__47008 = seq__46963_47000;
var G__47009 = chunk__46965_47001;
var G__47010 = count__46966_47002;
var G__47011 = (i__46967_47003 + (1));
seq__46963_47000 = G__47008;
chunk__46965_47001 = G__47009;
count__46966_47002 = G__47010;
i__46967_47003 = G__47011;
continue;
} else {
var temp__4657__auto___47012 = cljs.core.seq.call(null,seq__46963_47000);
if(temp__4657__auto___47012){
var seq__46963_47013__$1 = temp__4657__auto___47012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46963_47013__$1)){
var c__45645__auto___47014 = cljs.core.chunk_first.call(null,seq__46963_47013__$1);
var G__47015 = cljs.core.chunk_rest.call(null,seq__46963_47013__$1);
var G__47016 = c__45645__auto___47014;
var G__47017 = cljs.core.count.call(null,c__45645__auto___47014);
var G__47018 = (0);
seq__46963_47000 = G__47015;
chunk__46965_47001 = G__47016;
count__46966_47002 = G__47017;
i__46967_47003 = G__47018;
continue;
} else {
var vec__46975_47019 = cljs.core.first.call(null,seq__46963_47013__$1);
var actual_type_47020 = cljs.core.nth.call(null,vec__46975_47019,(0),null);
var factory_47021 = cljs.core.nth.call(null,vec__46975_47019,(1),null);
var canonical_f_47022 = (cljs.core.truth_(selector_46992)?cljs.core.partial.call(null,dommy.core.live_listener,elem_46991,selector_46992):cljs.core.identity).call(null,factory_47021.call(null,f_46999));
dommy.core.update_event_listeners_BANG_.call(null,elem_46991,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46992,actual_type_47020,f_46999], null),canonical_f_47022);

if(cljs.core.truth_(elem_46991.addEventListener)){
elem_46991.addEventListener(cljs.core.name.call(null,actual_type_47020),canonical_f_47022);
} else {
elem_46991.attachEvent(cljs.core.name.call(null,actual_type_47020),canonical_f_47022);
}

var G__47023 = cljs.core.next.call(null,seq__46963_47013__$1);
var G__47024 = null;
var G__47025 = (0);
var G__47026 = (0);
seq__46963_47000 = G__47023;
chunk__46965_47001 = G__47024;
count__46966_47002 = G__47025;
i__46967_47003 = G__47026;
continue;
}
} else {
}
}
break;
}

var G__47027 = seq__46953_46993;
var G__47028 = chunk__46960_46994;
var G__47029 = count__46961_46995;
var G__47030 = (i__46962_46996 + (1));
seq__46953_46993 = G__47027;
chunk__46960_46994 = G__47028;
count__46961_46995 = G__47029;
i__46962_46996 = G__47030;
continue;
} else {
var temp__4657__auto___47031 = cljs.core.seq.call(null,seq__46953_46993);
if(temp__4657__auto___47031){
var seq__46953_47032__$1 = temp__4657__auto___47031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46953_47032__$1)){
var c__45645__auto___47033 = cljs.core.chunk_first.call(null,seq__46953_47032__$1);
var G__47034 = cljs.core.chunk_rest.call(null,seq__46953_47032__$1);
var G__47035 = c__45645__auto___47033;
var G__47036 = cljs.core.count.call(null,c__45645__auto___47033);
var G__47037 = (0);
seq__46953_46993 = G__47034;
chunk__46960_46994 = G__47035;
count__46961_46995 = G__47036;
i__46962_46996 = G__47037;
continue;
} else {
var vec__46978_47038 = cljs.core.first.call(null,seq__46953_47032__$1);
var orig_type_47039 = cljs.core.nth.call(null,vec__46978_47038,(0),null);
var f_47040 = cljs.core.nth.call(null,vec__46978_47038,(1),null);
var seq__46954_47041 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_47039,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_47039,cljs.core.identity])));
var chunk__46956_47042 = null;
var count__46957_47043 = (0);
var i__46958_47044 = (0);
while(true){
if((i__46958_47044 < count__46957_47043)){
var vec__46981_47045 = cljs.core._nth.call(null,chunk__46956_47042,i__46958_47044);
var actual_type_47046 = cljs.core.nth.call(null,vec__46981_47045,(0),null);
var factory_47047 = cljs.core.nth.call(null,vec__46981_47045,(1),null);
var canonical_f_47048 = (cljs.core.truth_(selector_46992)?cljs.core.partial.call(null,dommy.core.live_listener,elem_46991,selector_46992):cljs.core.identity).call(null,factory_47047.call(null,f_47040));
dommy.core.update_event_listeners_BANG_.call(null,elem_46991,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46992,actual_type_47046,f_47040], null),canonical_f_47048);

if(cljs.core.truth_(elem_46991.addEventListener)){
elem_46991.addEventListener(cljs.core.name.call(null,actual_type_47046),canonical_f_47048);
} else {
elem_46991.attachEvent(cljs.core.name.call(null,actual_type_47046),canonical_f_47048);
}

var G__47049 = seq__46954_47041;
var G__47050 = chunk__46956_47042;
var G__47051 = count__46957_47043;
var G__47052 = (i__46958_47044 + (1));
seq__46954_47041 = G__47049;
chunk__46956_47042 = G__47050;
count__46957_47043 = G__47051;
i__46958_47044 = G__47052;
continue;
} else {
var temp__4657__auto___47053__$1 = cljs.core.seq.call(null,seq__46954_47041);
if(temp__4657__auto___47053__$1){
var seq__46954_47054__$1 = temp__4657__auto___47053__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46954_47054__$1)){
var c__45645__auto___47055 = cljs.core.chunk_first.call(null,seq__46954_47054__$1);
var G__47056 = cljs.core.chunk_rest.call(null,seq__46954_47054__$1);
var G__47057 = c__45645__auto___47055;
var G__47058 = cljs.core.count.call(null,c__45645__auto___47055);
var G__47059 = (0);
seq__46954_47041 = G__47056;
chunk__46956_47042 = G__47057;
count__46957_47043 = G__47058;
i__46958_47044 = G__47059;
continue;
} else {
var vec__46984_47060 = cljs.core.first.call(null,seq__46954_47054__$1);
var actual_type_47061 = cljs.core.nth.call(null,vec__46984_47060,(0),null);
var factory_47062 = cljs.core.nth.call(null,vec__46984_47060,(1),null);
var canonical_f_47063 = (cljs.core.truth_(selector_46992)?cljs.core.partial.call(null,dommy.core.live_listener,elem_46991,selector_46992):cljs.core.identity).call(null,factory_47062.call(null,f_47040));
dommy.core.update_event_listeners_BANG_.call(null,elem_46991,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46992,actual_type_47061,f_47040], null),canonical_f_47063);

if(cljs.core.truth_(elem_46991.addEventListener)){
elem_46991.addEventListener(cljs.core.name.call(null,actual_type_47061),canonical_f_47063);
} else {
elem_46991.attachEvent(cljs.core.name.call(null,actual_type_47061),canonical_f_47063);
}

var G__47064 = cljs.core.next.call(null,seq__46954_47054__$1);
var G__47065 = null;
var G__47066 = (0);
var G__47067 = (0);
seq__46954_47041 = G__47064;
chunk__46956_47042 = G__47065;
count__46957_47043 = G__47066;
i__46958_47044 = G__47067;
continue;
}
} else {
}
}
break;
}

var G__47068 = cljs.core.next.call(null,seq__46953_47032__$1);
var G__47069 = null;
var G__47070 = (0);
var G__47071 = (0);
seq__46953_46993 = G__47068;
chunk__46960_46994 = G__47069;
count__46961_46995 = G__47070;
i__46962_46996 = G__47071;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq46948){
var G__46949 = cljs.core.first.call(null,seq46948);
var seq46948__$1 = cljs.core.next.call(null,seq46948);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46949,seq46948__$1);
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
var args__45946__auto__ = [];
var len__45939__auto___47111 = arguments.length;
var i__45940__auto___47112 = (0);
while(true){
if((i__45940__auto___47112 < len__45939__auto___47111)){
args__45946__auto__.push((arguments[i__45940__auto___47112]));

var G__47113 = (i__45940__auto___47112 + (1));
i__45940__auto___47112 = G__47113;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((1) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45947__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__47074_47114 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_47115 = cljs.core.nth.call(null,vec__47074_47114,(0),null);
var selector_47116 = cljs.core.nth.call(null,vec__47074_47114,(1),null);
var seq__47077_47117 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__47084_47118 = null;
var count__47085_47119 = (0);
var i__47086_47120 = (0);
while(true){
if((i__47086_47120 < count__47085_47119)){
var vec__47093_47121 = cljs.core._nth.call(null,chunk__47084_47118,i__47086_47120);
var orig_type_47122 = cljs.core.nth.call(null,vec__47093_47121,(0),null);
var f_47123 = cljs.core.nth.call(null,vec__47093_47121,(1),null);
var seq__47087_47124 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_47122,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_47122,cljs.core.identity])));
var chunk__47089_47125 = null;
var count__47090_47126 = (0);
var i__47091_47127 = (0);
while(true){
if((i__47091_47127 < count__47090_47126)){
var vec__47096_47128 = cljs.core._nth.call(null,chunk__47089_47125,i__47091_47127);
var actual_type_47129 = cljs.core.nth.call(null,vec__47096_47128,(0),null);
var __47130 = cljs.core.nth.call(null,vec__47096_47128,(1),null);
var keys_47131 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47116,actual_type_47129,f_47123], null);
var canonical_f_47132 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_47115),keys_47131);
dommy.core.update_event_listeners_BANG_.call(null,elem_47115,dommy.utils.dissoc_in,keys_47131);

if(cljs.core.truth_(elem_47115.removeEventListener)){
elem_47115.removeEventListener(cljs.core.name.call(null,actual_type_47129),canonical_f_47132);
} else {
elem_47115.detachEvent(cljs.core.name.call(null,actual_type_47129),canonical_f_47132);
}

var G__47133 = seq__47087_47124;
var G__47134 = chunk__47089_47125;
var G__47135 = count__47090_47126;
var G__47136 = (i__47091_47127 + (1));
seq__47087_47124 = G__47133;
chunk__47089_47125 = G__47134;
count__47090_47126 = G__47135;
i__47091_47127 = G__47136;
continue;
} else {
var temp__4657__auto___47137 = cljs.core.seq.call(null,seq__47087_47124);
if(temp__4657__auto___47137){
var seq__47087_47138__$1 = temp__4657__auto___47137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47087_47138__$1)){
var c__45645__auto___47139 = cljs.core.chunk_first.call(null,seq__47087_47138__$1);
var G__47140 = cljs.core.chunk_rest.call(null,seq__47087_47138__$1);
var G__47141 = c__45645__auto___47139;
var G__47142 = cljs.core.count.call(null,c__45645__auto___47139);
var G__47143 = (0);
seq__47087_47124 = G__47140;
chunk__47089_47125 = G__47141;
count__47090_47126 = G__47142;
i__47091_47127 = G__47143;
continue;
} else {
var vec__47099_47144 = cljs.core.first.call(null,seq__47087_47138__$1);
var actual_type_47145 = cljs.core.nth.call(null,vec__47099_47144,(0),null);
var __47146 = cljs.core.nth.call(null,vec__47099_47144,(1),null);
var keys_47147 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47116,actual_type_47145,f_47123], null);
var canonical_f_47148 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_47115),keys_47147);
dommy.core.update_event_listeners_BANG_.call(null,elem_47115,dommy.utils.dissoc_in,keys_47147);

if(cljs.core.truth_(elem_47115.removeEventListener)){
elem_47115.removeEventListener(cljs.core.name.call(null,actual_type_47145),canonical_f_47148);
} else {
elem_47115.detachEvent(cljs.core.name.call(null,actual_type_47145),canonical_f_47148);
}

var G__47149 = cljs.core.next.call(null,seq__47087_47138__$1);
var G__47150 = null;
var G__47151 = (0);
var G__47152 = (0);
seq__47087_47124 = G__47149;
chunk__47089_47125 = G__47150;
count__47090_47126 = G__47151;
i__47091_47127 = G__47152;
continue;
}
} else {
}
}
break;
}

var G__47153 = seq__47077_47117;
var G__47154 = chunk__47084_47118;
var G__47155 = count__47085_47119;
var G__47156 = (i__47086_47120 + (1));
seq__47077_47117 = G__47153;
chunk__47084_47118 = G__47154;
count__47085_47119 = G__47155;
i__47086_47120 = G__47156;
continue;
} else {
var temp__4657__auto___47157 = cljs.core.seq.call(null,seq__47077_47117);
if(temp__4657__auto___47157){
var seq__47077_47158__$1 = temp__4657__auto___47157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47077_47158__$1)){
var c__45645__auto___47159 = cljs.core.chunk_first.call(null,seq__47077_47158__$1);
var G__47160 = cljs.core.chunk_rest.call(null,seq__47077_47158__$1);
var G__47161 = c__45645__auto___47159;
var G__47162 = cljs.core.count.call(null,c__45645__auto___47159);
var G__47163 = (0);
seq__47077_47117 = G__47160;
chunk__47084_47118 = G__47161;
count__47085_47119 = G__47162;
i__47086_47120 = G__47163;
continue;
} else {
var vec__47102_47164 = cljs.core.first.call(null,seq__47077_47158__$1);
var orig_type_47165 = cljs.core.nth.call(null,vec__47102_47164,(0),null);
var f_47166 = cljs.core.nth.call(null,vec__47102_47164,(1),null);
var seq__47078_47167 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_47165,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_47165,cljs.core.identity])));
var chunk__47080_47168 = null;
var count__47081_47169 = (0);
var i__47082_47170 = (0);
while(true){
if((i__47082_47170 < count__47081_47169)){
var vec__47105_47171 = cljs.core._nth.call(null,chunk__47080_47168,i__47082_47170);
var actual_type_47172 = cljs.core.nth.call(null,vec__47105_47171,(0),null);
var __47173 = cljs.core.nth.call(null,vec__47105_47171,(1),null);
var keys_47174 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47116,actual_type_47172,f_47166], null);
var canonical_f_47175 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_47115),keys_47174);
dommy.core.update_event_listeners_BANG_.call(null,elem_47115,dommy.utils.dissoc_in,keys_47174);

if(cljs.core.truth_(elem_47115.removeEventListener)){
elem_47115.removeEventListener(cljs.core.name.call(null,actual_type_47172),canonical_f_47175);
} else {
elem_47115.detachEvent(cljs.core.name.call(null,actual_type_47172),canonical_f_47175);
}

var G__47176 = seq__47078_47167;
var G__47177 = chunk__47080_47168;
var G__47178 = count__47081_47169;
var G__47179 = (i__47082_47170 + (1));
seq__47078_47167 = G__47176;
chunk__47080_47168 = G__47177;
count__47081_47169 = G__47178;
i__47082_47170 = G__47179;
continue;
} else {
var temp__4657__auto___47180__$1 = cljs.core.seq.call(null,seq__47078_47167);
if(temp__4657__auto___47180__$1){
var seq__47078_47181__$1 = temp__4657__auto___47180__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47078_47181__$1)){
var c__45645__auto___47182 = cljs.core.chunk_first.call(null,seq__47078_47181__$1);
var G__47183 = cljs.core.chunk_rest.call(null,seq__47078_47181__$1);
var G__47184 = c__45645__auto___47182;
var G__47185 = cljs.core.count.call(null,c__45645__auto___47182);
var G__47186 = (0);
seq__47078_47167 = G__47183;
chunk__47080_47168 = G__47184;
count__47081_47169 = G__47185;
i__47082_47170 = G__47186;
continue;
} else {
var vec__47108_47187 = cljs.core.first.call(null,seq__47078_47181__$1);
var actual_type_47188 = cljs.core.nth.call(null,vec__47108_47187,(0),null);
var __47189 = cljs.core.nth.call(null,vec__47108_47187,(1),null);
var keys_47190 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47116,actual_type_47188,f_47166], null);
var canonical_f_47191 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_47115),keys_47190);
dommy.core.update_event_listeners_BANG_.call(null,elem_47115,dommy.utils.dissoc_in,keys_47190);

if(cljs.core.truth_(elem_47115.removeEventListener)){
elem_47115.removeEventListener(cljs.core.name.call(null,actual_type_47188),canonical_f_47191);
} else {
elem_47115.detachEvent(cljs.core.name.call(null,actual_type_47188),canonical_f_47191);
}

var G__47192 = cljs.core.next.call(null,seq__47078_47181__$1);
var G__47193 = null;
var G__47194 = (0);
var G__47195 = (0);
seq__47078_47167 = G__47192;
chunk__47080_47168 = G__47193;
count__47081_47169 = G__47194;
i__47082_47170 = G__47195;
continue;
}
} else {
}
}
break;
}

var G__47196 = cljs.core.next.call(null,seq__47077_47158__$1);
var G__47197 = null;
var G__47198 = (0);
var G__47199 = (0);
seq__47077_47117 = G__47196;
chunk__47084_47118 = G__47197;
count__47085_47119 = G__47198;
i__47086_47120 = G__47199;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq47072){
var G__47073 = cljs.core.first.call(null,seq47072);
var seq47072__$1 = cljs.core.next.call(null,seq47072);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47073,seq47072__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__45946__auto__ = [];
var len__45939__auto___47215 = arguments.length;
var i__45940__auto___47216 = (0);
while(true){
if((i__45940__auto___47216 < len__45939__auto___47215)){
args__45946__auto__.push((arguments[i__45940__auto___47216]));

var G__47217 = (i__45940__auto___47216 + (1));
i__45940__auto___47216 = G__47217;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((1) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45947__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__47202_47218 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_47219 = cljs.core.nth.call(null,vec__47202_47218,(0),null);
var selector_47220 = cljs.core.nth.call(null,vec__47202_47218,(1),null);
var seq__47205_47221 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__47206_47222 = null;
var count__47207_47223 = (0);
var i__47208_47224 = (0);
while(true){
if((i__47208_47224 < count__47207_47223)){
var vec__47209_47225 = cljs.core._nth.call(null,chunk__47206_47222,i__47208_47224);
var type_47226 = cljs.core.nth.call(null,vec__47209_47225,(0),null);
var f_47227 = cljs.core.nth.call(null,vec__47209_47225,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_47226,((function (seq__47205_47221,chunk__47206_47222,count__47207_47223,i__47208_47224,vec__47209_47225,type_47226,f_47227,vec__47202_47218,elem_47219,selector_47220){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_47226,dommy$core$this_fn);

return f_47227.call(null,e);
});})(seq__47205_47221,chunk__47206_47222,count__47207_47223,i__47208_47224,vec__47209_47225,type_47226,f_47227,vec__47202_47218,elem_47219,selector_47220))
);

var G__47228 = seq__47205_47221;
var G__47229 = chunk__47206_47222;
var G__47230 = count__47207_47223;
var G__47231 = (i__47208_47224 + (1));
seq__47205_47221 = G__47228;
chunk__47206_47222 = G__47229;
count__47207_47223 = G__47230;
i__47208_47224 = G__47231;
continue;
} else {
var temp__4657__auto___47232 = cljs.core.seq.call(null,seq__47205_47221);
if(temp__4657__auto___47232){
var seq__47205_47233__$1 = temp__4657__auto___47232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47205_47233__$1)){
var c__45645__auto___47234 = cljs.core.chunk_first.call(null,seq__47205_47233__$1);
var G__47235 = cljs.core.chunk_rest.call(null,seq__47205_47233__$1);
var G__47236 = c__45645__auto___47234;
var G__47237 = cljs.core.count.call(null,c__45645__auto___47234);
var G__47238 = (0);
seq__47205_47221 = G__47235;
chunk__47206_47222 = G__47236;
count__47207_47223 = G__47237;
i__47208_47224 = G__47238;
continue;
} else {
var vec__47212_47239 = cljs.core.first.call(null,seq__47205_47233__$1);
var type_47240 = cljs.core.nth.call(null,vec__47212_47239,(0),null);
var f_47241 = cljs.core.nth.call(null,vec__47212_47239,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_47240,((function (seq__47205_47221,chunk__47206_47222,count__47207_47223,i__47208_47224,vec__47212_47239,type_47240,f_47241,seq__47205_47233__$1,temp__4657__auto___47232,vec__47202_47218,elem_47219,selector_47220){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_47240,dommy$core$this_fn);

return f_47241.call(null,e);
});})(seq__47205_47221,chunk__47206_47222,count__47207_47223,i__47208_47224,vec__47212_47239,type_47240,f_47241,seq__47205_47233__$1,temp__4657__auto___47232,vec__47202_47218,elem_47219,selector_47220))
);

var G__47242 = cljs.core.next.call(null,seq__47205_47233__$1);
var G__47243 = null;
var G__47244 = (0);
var G__47245 = (0);
seq__47205_47221 = G__47242;
chunk__47206_47222 = G__47243;
count__47207_47223 = G__47244;
i__47208_47224 = G__47245;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq47200){
var G__47201 = cljs.core.first.call(null,seq47200);
var seq47200__$1 = cljs.core.next.call(null,seq47200);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47201,seq47200__$1);
});


//# sourceMappingURL=core.js.map?rel=1491522836252