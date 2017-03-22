// Compiled by ClojureScript 1.9.229 {}
goog.provide('tasks.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('postagga.en_fn_v_model');
goog.require('postagga.tagger');
goog.require('dommy.core');
goog.require('tasks.browser_charts');
goog.require('postagga.parser');
goog.require('goog.events');
goog.require('milestones.dyna_scheduler');
goog.require('tasks.parser_rules');
tasks.core.schedule_btn = goog.dom.getElement("schedule");
tasks.core.error_zone = document.querySelector("body #portfolio #dzone");
tasks.core.pos_tagger = cljs.core.partial.call(null,postagga.tagger.viterbi,postagga.en_fn_v_model.en_model);
/**
 * A function that takes a paragraph, i.e, a set of tasks declaration
 *   and spits a vector of sentences
 */
tasks.core.sentences = (function tasks$core$sentences(tasks_str){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["milestone 5 : goal reached  when tasks 2, 3 are complete.","When task 1, 2, 3 are achieved Rafik can work 3 minutes with priority 4 on task 4 in order to Eat some bread.","for task 1 with priority 3 Rafik will have to eat bread in 2 minutes, after  tasks 3, 2, 15.","Rafik shall eat bread in 2 minutes, with priority 4, after  task 3,2 and 15."], null);
});
/**
 * Given a sentence, yields a vector of tokens
 */
tasks.core.tokenizer = (function tasks$core$tokenizer(sentence){
return null;
});
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

//# sourceMappingURL=core.js.map?rel=1490224021611