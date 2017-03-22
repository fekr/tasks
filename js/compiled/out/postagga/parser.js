// Compiled by ClojureScript 1.9.229 {}
goog.provide('postagga.parser');
goog.require('cljs.core');
goog.require('postagga.tagger');
postagga.parser.matches_QMARK_ = (function postagga$parser$matches_QMARK_(input_item,current_tag_alternatives){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.get.call(null,input_item,(1))], true),current_tag_alternatives);
});
/**
 * Verifies if an input like: [product NPP] correponds to
 *   one of the keys stored in the head of tag-stack, which would be an
 *   element like #{ :multi #{:Noun Value...}}, or if it is a checkpoint,
 *   to notify the caller to construct a part of the task. the :multi in some state
 *   head of stack means that this token can be met multiple times,
 *   causing the stack to keep it when ever we find an item corresponding
 *   to it, or consuming it an moving forward if the element correspond
 *   to the next status.
 */
postagga.parser.accept_tag = (function postagga$parser$accept_tag(input_item,tag_stack){
var temp__4655__auto__ = cljs.core.first.call(null,tag_stack);
if(cljs.core.truth_(temp__4655__auto__)){
var current_tag_alternatives = temp__4655__auto__;
if((current_tag_alternatives instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),current_tag_alternatives,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953),cljs.core.rest.call(null,tag_stack)], null);
} else {
if(cljs.core.truth_(postagga.parser.matches_QMARK_.call(null,input_item,current_tag_alternatives))){
if(cljs.core.contains_QMARK_.call(null,current_tag_alternatives,new cljs.core.Keyword(null,"multi","multi",-190293005))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),false,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953),tag_stack], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),false,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953),cljs.core.rest.call(null,tag_stack)], null);
}
} else {
if(cljs.core.contains_QMARK_.call(null,current_tag_alternatives,new cljs.core.Keyword(null,"multi","multi",-190293005))){
if(cljs.core.truth_(postagga.parser.matches_QMARK_.call(null,input_item,cljs.core.second.call(null,tag_stack)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),false,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953),cljs.core.rest.call(null,cljs.core.rest.call(null,tag_stack))], null);
} else {
return false;
}
} else {
return false;

}
}
}
} else {
return false;
}
});
/**
 * Goes FFW in a tag-stack until it finds a step specification. 
 */
postagga.parser.fast_forward = (function postagga$parser$fast_forward(tag_stack){
while(true){
if(cljs.core.seq.call(null,tag_stack)){
if((cljs.core.first.call(null,tag_stack) instanceof cljs.core.Keyword)){
return tag_stack;
} else {
var G__45596 = cljs.core.rest.call(null,tag_stack);
tag_stack = G__45596;
continue;
}
} else {
return null;
}
break;
}
});
postagga.parser.get_value_QMARK_ = (function postagga$parser$get_value_QMARK_(stack_item){
return cljs.core.contains_QMARK_.call(null,stack_item,new cljs.core.Keyword(null,"get-value","get-value",2108514284));
});
postagga.parser.parse_sentence_w_a_tag_stack = (function postagga$parser$parse_sentence_w_a_tag_stack(pos_tagger_fn,sentence,init_tag_stack,optional_steps){
var input_items = cljs.core.mapv.call(null,(function (item,postag){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.PersistentHashSet.fromArray([postag], true)], null);
}),sentence,pos_tagger_fn.call(null,sentence));
var tag_stack = init_tag_stack;
var output_stack = cljs.core.PersistentArrayMap.EMPTY;
var output = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((cljs.core.seq.call(null,input_items)) && (cljs.core.seq.call(null,tag_stack))){
var input_item = cljs.core.first.call(null,input_items);
var map__45599 = postagga.parser.accept_tag.call(null,input_item,tag_stack);
var map__45599__$1 = ((((!((map__45599 == null)))?((((map__45599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45599):map__45599);
var accept_QMARK_ = map__45599__$1;
var step = cljs.core.get.call(null,map__45599__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var new_stack = cljs.core.get.call(null,map__45599__$1,new cljs.core.Keyword(null,"new-stack","new-stack",1596588953));
if(cljs.core.truth_(step)){
var G__45601 = input_items;
var G__45602 = new_stack;
var G__45603 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY], null);
var G__45604 = ((cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"items","items",1031954938))))?output:cljs.core.assoc.call(null,output,cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124)),cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"items","items",1031954938))));
input_items = G__45601;
tag_stack = G__45602;
output_stack = G__45603;
output = G__45604;
continue;
} else {
if(cljs.core.truth_((function (){var and__44424__auto__ = cljs.core.not.call(null,accept_QMARK_);
if(and__44424__auto__){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124))], true),optional_steps);
} else {
return and__44424__auto__;
}
})())){
var temp__4655__auto__ = postagga.parser.fast_forward.call(null,tag_stack);
if(cljs.core.truth_(temp__4655__auto__)){
var ffw_stack = temp__4655__auto__;
var G__45605 = input_items;
var G__45606 = ffw_stack;
var G__45607 = output_stack;
var G__45608 = output;
input_items = G__45605;
tag_stack = G__45606;
output_stack = G__45607;
output = G__45608;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124)),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.first.call(null,tag_stack),new cljs.core.Keyword(null,"item","item",249373802),input_item], null)], null);
}
} else {
if(cljs.core.not.call(null,accept_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"output","output",-1105869043),output,new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124)),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.first.call(null,tag_stack),new cljs.core.Keyword(null,"item","item",249373802),input_item], null)], null);
} else {
var G__45609 = cljs.core.rest.call(null,input_items);
var G__45610 = new_stack;
var G__45611 = (cljs.core.truth_(postagga.parser.get_value_QMARK_.call(null,cljs.core.first.call(null,tag_stack)))?cljs.core.merge_with.call(null,cljs.core.conj,output_stack,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.get.call(null,input_item,(0))], null)):output_stack);
var G__45612 = output;
input_items = G__45609;
tag_stack = G__45610;
output_stack = G__45611;
output = G__45612;
continue;

}
}
}
} else {
if(cljs.core.truth_((function (){var or__44436__auto__ = (cljs.core.empty_QMARK_.call(null,input_items)) && (cljs.core.empty_QMARK_.call(null,tag_stack));
if(or__44436__auto__){
return or__44436__auto__;
} else {
var or__44436__auto____$1 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.first.call(null,tag_stack)], true),optional_steps);
if(cljs.core.truth_(or__44436__auto____$1)){
return or__44436__auto____$1;
} else {
return cljs.core.contains_QMARK_.call(null,cljs.core.first.call(null,tag_stack),new cljs.core.Keyword(null,"multi","multi",-190293005));
}
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.assoc.call(null,output,cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"step","step",1288888124)),cljs.core.get.call(null,output_stack,new cljs.core.Keyword(null,"items","items",1031954938)))], null);
} else {
if(!(cljs.core.empty_QMARK_.call(null,input_items))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),"Unable to consume all input.",new cljs.core.Keyword(null,"input","input",556931961),input_items], null);
} else {
if(!(cljs.core.empty_QMARK_.call(null,tag_stack))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),"Input does not fulfill all of the tag-stack states.",new cljs.core.Keyword(null,"tag-stack","tag-stack",-785573706),tag_stack], null);
} else {
return null;
}
}
}
}
break;
}
});
/**
 * Tries to parse the sentence according to rules (tag stacks). If it finds a
 *   match, will return it. else, it'll return the errors it found
 */
postagga.parser.parse_tags_rules = (function postagga$parser$parse_tags_rules(tokenizer_fn,pos_tagger_fn,rules,sentence){
var rem_rules = rules;
var errors = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,rem_rules)){
var cur_rule = cljs.core.first.call(null,rem_rules);
var optional_steps = new cljs.core.Keyword(null,"optional-steps","optional-steps",-1465998293).cljs$core$IFn$_invoke$arity$1(cur_rule);
var sentence_tokens = tokenizer_fn.call(null,sentence);
var cur_parse_result = postagga.parser.parse_sentence_w_a_tag_stack.call(null,pos_tagger_fn,sentence_tokens,new cljs.core.Keyword(null,"rule","rule",729973257).cljs$core$IFn$_invoke$arity$1(cur_rule),optional_steps);
var temp__4655__auto__ = cljs.core.get.call(null,cur_parse_result,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(temp__4655__auto__)){
var err = temp__4655__auto__;
var G__45613 = cljs.core.rest.call(null,rem_rules);
var G__45614 = cljs.core.conj.call(null,errors,err);
rem_rules = G__45613;
errors = G__45614;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),null,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rule","rule",729973257),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cur_rule),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.call(null,cur_parse_result,new cljs.core.Keyword(null,"result","result",1415092211))], null)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),errors], null);
}
break;
}
});

//# sourceMappingURL=parser.js.map?rel=1490223660618