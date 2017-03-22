// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46591){
var map__46616 = p__46591;
var map__46616__$1 = ((((!((map__46616 == null)))?((((map__46616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46616):map__46616);
var m = map__46616__$1;
var n = cljs.core.get.call(null,map__46616__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__46616__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46618_46640 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46619_46641 = null;
var count__46620_46642 = (0);
var i__46621_46643 = (0);
while(true){
if((i__46621_46643 < count__46620_46642)){
var f_46644 = cljs.core._nth.call(null,chunk__46619_46641,i__46621_46643);
cljs.core.println.call(null,"  ",f_46644);

var G__46645 = seq__46618_46640;
var G__46646 = chunk__46619_46641;
var G__46647 = count__46620_46642;
var G__46648 = (i__46621_46643 + (1));
seq__46618_46640 = G__46645;
chunk__46619_46641 = G__46646;
count__46620_46642 = G__46647;
i__46621_46643 = G__46648;
continue;
} else {
var temp__4657__auto___46649 = cljs.core.seq.call(null,seq__46618_46640);
if(temp__4657__auto___46649){
var seq__46618_46650__$1 = temp__4657__auto___46649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46618_46650__$1)){
var c__45247__auto___46651 = cljs.core.chunk_first.call(null,seq__46618_46650__$1);
var G__46652 = cljs.core.chunk_rest.call(null,seq__46618_46650__$1);
var G__46653 = c__45247__auto___46651;
var G__46654 = cljs.core.count.call(null,c__45247__auto___46651);
var G__46655 = (0);
seq__46618_46640 = G__46652;
chunk__46619_46641 = G__46653;
count__46620_46642 = G__46654;
i__46621_46643 = G__46655;
continue;
} else {
var f_46656 = cljs.core.first.call(null,seq__46618_46650__$1);
cljs.core.println.call(null,"  ",f_46656);

var G__46657 = cljs.core.next.call(null,seq__46618_46650__$1);
var G__46658 = null;
var G__46659 = (0);
var G__46660 = (0);
seq__46618_46640 = G__46657;
chunk__46619_46641 = G__46658;
count__46620_46642 = G__46659;
i__46621_46643 = G__46660;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46661 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__44436__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44436__auto__)){
return or__44436__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46661);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46661)))?cljs.core.second.call(null,arglists_46661):arglists_46661));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__46622_46662 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46623_46663 = null;
var count__46624_46664 = (0);
var i__46625_46665 = (0);
while(true){
if((i__46625_46665 < count__46624_46664)){
var vec__46626_46666 = cljs.core._nth.call(null,chunk__46623_46663,i__46625_46665);
var name_46667 = cljs.core.nth.call(null,vec__46626_46666,(0),null);
var map__46629_46668 = cljs.core.nth.call(null,vec__46626_46666,(1),null);
var map__46629_46669__$1 = ((((!((map__46629_46668 == null)))?((((map__46629_46668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46629_46668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46629_46668):map__46629_46668);
var doc_46670 = cljs.core.get.call(null,map__46629_46669__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46671 = cljs.core.get.call(null,map__46629_46669__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46667);

cljs.core.println.call(null," ",arglists_46671);

if(cljs.core.truth_(doc_46670)){
cljs.core.println.call(null," ",doc_46670);
} else {
}

var G__46672 = seq__46622_46662;
var G__46673 = chunk__46623_46663;
var G__46674 = count__46624_46664;
var G__46675 = (i__46625_46665 + (1));
seq__46622_46662 = G__46672;
chunk__46623_46663 = G__46673;
count__46624_46664 = G__46674;
i__46625_46665 = G__46675;
continue;
} else {
var temp__4657__auto___46676 = cljs.core.seq.call(null,seq__46622_46662);
if(temp__4657__auto___46676){
var seq__46622_46677__$1 = temp__4657__auto___46676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46622_46677__$1)){
var c__45247__auto___46678 = cljs.core.chunk_first.call(null,seq__46622_46677__$1);
var G__46679 = cljs.core.chunk_rest.call(null,seq__46622_46677__$1);
var G__46680 = c__45247__auto___46678;
var G__46681 = cljs.core.count.call(null,c__45247__auto___46678);
var G__46682 = (0);
seq__46622_46662 = G__46679;
chunk__46623_46663 = G__46680;
count__46624_46664 = G__46681;
i__46625_46665 = G__46682;
continue;
} else {
var vec__46631_46683 = cljs.core.first.call(null,seq__46622_46677__$1);
var name_46684 = cljs.core.nth.call(null,vec__46631_46683,(0),null);
var map__46634_46685 = cljs.core.nth.call(null,vec__46631_46683,(1),null);
var map__46634_46686__$1 = ((((!((map__46634_46685 == null)))?((((map__46634_46685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46634_46685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46634_46685):map__46634_46685);
var doc_46687 = cljs.core.get.call(null,map__46634_46686__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46688 = cljs.core.get.call(null,map__46634_46686__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46684);

cljs.core.println.call(null," ",arglists_46688);

if(cljs.core.truth_(doc_46687)){
cljs.core.println.call(null," ",doc_46687);
} else {
}

var G__46689 = cljs.core.next.call(null,seq__46622_46677__$1);
var G__46690 = null;
var G__46691 = (0);
var G__46692 = (0);
seq__46622_46662 = G__46689;
chunk__46623_46663 = G__46690;
count__46624_46664 = G__46691;
i__46625_46665 = G__46692;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__46636 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46637 = null;
var count__46638 = (0);
var i__46639 = (0);
while(true){
if((i__46639 < count__46638)){
var role = cljs.core._nth.call(null,chunk__46637,i__46639);
var temp__4657__auto___46693__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___46693__$1)){
var spec_46694 = temp__4657__auto___46693__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_46694));
} else {
}

var G__46695 = seq__46636;
var G__46696 = chunk__46637;
var G__46697 = count__46638;
var G__46698 = (i__46639 + (1));
seq__46636 = G__46695;
chunk__46637 = G__46696;
count__46638 = G__46697;
i__46639 = G__46698;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__46636);
if(temp__4657__auto____$1){
var seq__46636__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46636__$1)){
var c__45247__auto__ = cljs.core.chunk_first.call(null,seq__46636__$1);
var G__46699 = cljs.core.chunk_rest.call(null,seq__46636__$1);
var G__46700 = c__45247__auto__;
var G__46701 = cljs.core.count.call(null,c__45247__auto__);
var G__46702 = (0);
seq__46636 = G__46699;
chunk__46637 = G__46700;
count__46638 = G__46701;
i__46639 = G__46702;
continue;
} else {
var role = cljs.core.first.call(null,seq__46636__$1);
var temp__4657__auto___46703__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___46703__$2)){
var spec_46704 = temp__4657__auto___46703__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_46704));
} else {
}

var G__46705 = cljs.core.next.call(null,seq__46636__$1);
var G__46706 = null;
var G__46707 = (0);
var G__46708 = (0);
seq__46636 = G__46705;
chunk__46637 = G__46706;
count__46638 = G__46707;
i__46639 = G__46708;
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

//# sourceMappingURL=repl.js.map?rel=1490220542662