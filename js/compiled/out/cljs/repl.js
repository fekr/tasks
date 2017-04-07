// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55354){
var map__55379 = p__55354;
var map__55379__$1 = ((((!((map__55379 == null)))?((((map__55379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55379):map__55379);
var m = map__55379__$1;
var n = cljs.core.get.call(null,map__55379__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__55379__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__55381_55403 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55382_55404 = null;
var count__55383_55405 = (0);
var i__55384_55406 = (0);
while(true){
if((i__55384_55406 < count__55383_55405)){
var f_55407 = cljs.core._nth.call(null,chunk__55382_55404,i__55384_55406);
cljs.core.println.call(null,"  ",f_55407);

var G__55408 = seq__55381_55403;
var G__55409 = chunk__55382_55404;
var G__55410 = count__55383_55405;
var G__55411 = (i__55384_55406 + (1));
seq__55381_55403 = G__55408;
chunk__55382_55404 = G__55409;
count__55383_55405 = G__55410;
i__55384_55406 = G__55411;
continue;
} else {
var temp__4657__auto___55412 = cljs.core.seq.call(null,seq__55381_55403);
if(temp__4657__auto___55412){
var seq__55381_55413__$1 = temp__4657__auto___55412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55381_55413__$1)){
var c__45645__auto___55414 = cljs.core.chunk_first.call(null,seq__55381_55413__$1);
var G__55415 = cljs.core.chunk_rest.call(null,seq__55381_55413__$1);
var G__55416 = c__45645__auto___55414;
var G__55417 = cljs.core.count.call(null,c__45645__auto___55414);
var G__55418 = (0);
seq__55381_55403 = G__55415;
chunk__55382_55404 = G__55416;
count__55383_55405 = G__55417;
i__55384_55406 = G__55418;
continue;
} else {
var f_55419 = cljs.core.first.call(null,seq__55381_55413__$1);
cljs.core.println.call(null,"  ",f_55419);

var G__55420 = cljs.core.next.call(null,seq__55381_55413__$1);
var G__55421 = null;
var G__55422 = (0);
var G__55423 = (0);
seq__55381_55403 = G__55420;
chunk__55382_55404 = G__55421;
count__55383_55405 = G__55422;
i__55384_55406 = G__55423;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_55424 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__44826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44826__auto__)){
return or__44826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_55424);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_55424)))?cljs.core.second.call(null,arglists_55424):arglists_55424));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__55385_55425 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55386_55426 = null;
var count__55387_55427 = (0);
var i__55388_55428 = (0);
while(true){
if((i__55388_55428 < count__55387_55427)){
var vec__55389_55429 = cljs.core._nth.call(null,chunk__55386_55426,i__55388_55428);
var name_55430 = cljs.core.nth.call(null,vec__55389_55429,(0),null);
var map__55392_55431 = cljs.core.nth.call(null,vec__55389_55429,(1),null);
var map__55392_55432__$1 = ((((!((map__55392_55431 == null)))?((((map__55392_55431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55392_55431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55392_55431):map__55392_55431);
var doc_55433 = cljs.core.get.call(null,map__55392_55432__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55434 = cljs.core.get.call(null,map__55392_55432__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_55430);

cljs.core.println.call(null," ",arglists_55434);

if(cljs.core.truth_(doc_55433)){
cljs.core.println.call(null," ",doc_55433);
} else {
}

var G__55435 = seq__55385_55425;
var G__55436 = chunk__55386_55426;
var G__55437 = count__55387_55427;
var G__55438 = (i__55388_55428 + (1));
seq__55385_55425 = G__55435;
chunk__55386_55426 = G__55436;
count__55387_55427 = G__55437;
i__55388_55428 = G__55438;
continue;
} else {
var temp__4657__auto___55439 = cljs.core.seq.call(null,seq__55385_55425);
if(temp__4657__auto___55439){
var seq__55385_55440__$1 = temp__4657__auto___55439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55385_55440__$1)){
var c__45645__auto___55441 = cljs.core.chunk_first.call(null,seq__55385_55440__$1);
var G__55442 = cljs.core.chunk_rest.call(null,seq__55385_55440__$1);
var G__55443 = c__45645__auto___55441;
var G__55444 = cljs.core.count.call(null,c__45645__auto___55441);
var G__55445 = (0);
seq__55385_55425 = G__55442;
chunk__55386_55426 = G__55443;
count__55387_55427 = G__55444;
i__55388_55428 = G__55445;
continue;
} else {
var vec__55394_55446 = cljs.core.first.call(null,seq__55385_55440__$1);
var name_55447 = cljs.core.nth.call(null,vec__55394_55446,(0),null);
var map__55397_55448 = cljs.core.nth.call(null,vec__55394_55446,(1),null);
var map__55397_55449__$1 = ((((!((map__55397_55448 == null)))?((((map__55397_55448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55397_55448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55397_55448):map__55397_55448);
var doc_55450 = cljs.core.get.call(null,map__55397_55449__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55451 = cljs.core.get.call(null,map__55397_55449__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_55447);

cljs.core.println.call(null," ",arglists_55451);

if(cljs.core.truth_(doc_55450)){
cljs.core.println.call(null," ",doc_55450);
} else {
}

var G__55452 = cljs.core.next.call(null,seq__55385_55440__$1);
var G__55453 = null;
var G__55454 = (0);
var G__55455 = (0);
seq__55385_55425 = G__55452;
chunk__55386_55426 = G__55453;
count__55387_55427 = G__55454;
i__55388_55428 = G__55455;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__55399 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__55400 = null;
var count__55401 = (0);
var i__55402 = (0);
while(true){
if((i__55402 < count__55401)){
var role = cljs.core._nth.call(null,chunk__55400,i__55402);
var temp__4657__auto___55456__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___55456__$1)){
var spec_55457 = temp__4657__auto___55456__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_55457));
} else {
}

var G__55458 = seq__55399;
var G__55459 = chunk__55400;
var G__55460 = count__55401;
var G__55461 = (i__55402 + (1));
seq__55399 = G__55458;
chunk__55400 = G__55459;
count__55401 = G__55460;
i__55402 = G__55461;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__55399);
if(temp__4657__auto____$1){
var seq__55399__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55399__$1)){
var c__45645__auto__ = cljs.core.chunk_first.call(null,seq__55399__$1);
var G__55462 = cljs.core.chunk_rest.call(null,seq__55399__$1);
var G__55463 = c__45645__auto__;
var G__55464 = cljs.core.count.call(null,c__45645__auto__);
var G__55465 = (0);
seq__55399 = G__55462;
chunk__55400 = G__55463;
count__55401 = G__55464;
i__55402 = G__55465;
continue;
} else {
var role = cljs.core.first.call(null,seq__55399__$1);
var temp__4657__auto___55466__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___55466__$2)){
var spec_55467 = temp__4657__auto___55466__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_55467));
} else {
}

var G__55468 = cljs.core.next.call(null,seq__55399__$1);
var G__55469 = null;
var G__55470 = (0);
var G__55471 = (0);
seq__55399 = G__55468;
chunk__55400 = G__55469;
count__55401 = G__55470;
i__55402 = G__55471;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1491522849045