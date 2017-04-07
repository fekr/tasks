// Compiled by ClojureScript 1.9.494 {}
goog.provide('tasks.core');
goog.require('cljs.core');
goog.require('milestones.dyna_scheduler');
goog.require('tasks.browser_charts');
goog.require('postagga.parser');
goog.require('tasks.parser_rules');
goog.require('postagga.tools');
goog.require('postagga.tagger');
goog.require('postagga.trie');
goog.require('postagga.en_fn_v_model');
goog.require('postagga.en_tr_names');
goog.require('dommy.core');
goog.require('goog.dom');
goog.require('goog.events');
tasks.core.schedule_btn = goog.dom.getElement("schedule");
tasks.core.error_zone = document.querySelector("body #portfolio #dzone");
tasks.core.pos_tagger = (function tasks$core$pos_tagger(p1__56648_SHARP_){
return postagga.tagger.patch_w_entity.call(null,0.7,p1__56648_SHARP_,postagga.en_tr_names.en_names_trie,postagga.tagger.viterbi.call(null,postagga.en_fn_v_model.en_model,p1__56648_SHARP_),"NP");
});
tasks.core.split_sep = (function tasks$core$split_sep(sep,str){
var t = str;
var t__$1 = t.split((new RegExp(sep)));
var t__$2 = cljs.core.js__GT_clj.call(null,t__$1);
var t__$3 = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.empty_QMARK_),t__$2);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,t__$3);
});
tasks.core.sentences = cljs.core.partial.call(null,tasks.core.split_sep,"\\.");
tasks.core.tokenizer = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.mapv,(function (p1__56649_SHARP_){
return p1__56649_SHARP_.toLowerCase();
})),cljs.core.partial.call(null,tasks.core.split_sep,"\\s|\\r|\\n|\\,|\\;|\\:"));
tasks.core.schedule_and_show_BANG_ = (function tasks$core$schedule_and_show_BANG_(schedule_start,default_duration_unit,in_div_id){
var tasks_str = document.getElementById("default-template").value;
var tasks_sentences = tasks.core.sentences.call(null,tasks_str);
var tasks__$1 = cljs.core.map.call(null,cljs.core.partial.call(null,postagga.parser.parse_tags_rules,tasks.core.tokenizer,tasks.core.pos_tagger,tasks.parser_rules.rules),tasks_sentences);
var scheduled = milestones.dyna_scheduler.schedule.call(null,tasks__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"priority","priority",1431093715)], null));
var temp__4655__auto__ = cljs.core.get.call(null,scheduled,new cljs.core.Keyword(null,"errors","errors",-908790718));
if(cljs.core.truth_(temp__4655__auto__)){
var err = temp__4655__auto__;
console.error(err);

return dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,tasks.core.error_zone,"Couldn't schedule... plz retry !"),new cljs.core.Keyword(null,"alert-danger","alert-danger",930758399));
} else {
dommy.core.add_class_BANG_.call(null,dommy.core.remove_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,tasks.core.error_zone,"Successfully scheduled!"),new cljs.core.Keyword(null,"alert-danger","alert-danger",930758399)),new cljs.core.Keyword(null,"alert-success","alert-success",-1764385150));

return tasks.browser_charts.draw_gantt_BANG_.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(scheduled),schedule_start,default_duration_unit,in_div_id);
}
});
goog.events.listen(tasks.core.schedule_btn,"click",(function (){
return tasks.core.schedule_and_show_BANG_.call(null,moment().format(),"hours","gantt-chart");
}));

//# sourceMappingURL=core.js.map?rel=1491523059029