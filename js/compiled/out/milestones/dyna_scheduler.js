// Compiled by ClojureScript 1.9.494 {}
goog.provide('milestones.dyna_scheduler');
goog.require('cljs.core');
goog.require('milestones.graph_utilities');
/**
 * Given all tasks description vector [{:task-id, ...},{}]
 *   and a work-queue [1 2 3],... we generate named task units
 *   with as many unit of each task as its duration :
 *   [1 1 1 2 2 3 3 3]
 */
milestones.dyna_scheduler.gen_work_flow = (function milestones$dyna_scheduler$gen_work_flow(tasks__$1,work_queue){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (p1__46237_SHARP_){
var the_id = p1__46237_SHARP_;
var the_task = cljs.core.get.call(null,tasks__$1,p1__46237_SHARP_);
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(the_task),the_id);
}),work_queue));
});
/**
 * Given tasks description, a schedule-output
 *   [{:task-id 1 :resource-id 1 :time 2}
 *   {:task-id 1 :resource-id 1 :time 2} ...]
 *   and a task-id, returns the completion-rate,i.e,
 *   nb of units in output / duration of task. if no task in the schedule,
 *   it's completion is 0. If no duration / 0, completion is 1. 
 */
milestones.dyna_scheduler.task_completion_rate = (function milestones$dyna_scheduler$task_completion_rate(tasks__$1,output_schedule,the_task_id){
try{var the_task = cljs.core.get.call(null,tasks__$1,the_task_id);
var duration = the_task.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068));
var nb_task_units_in_output = cljs.core.count.call(null,cljs.core.filter.call(null,((function (the_task,duration){
return (function (p1__46238_SHARP_){
return cljs.core._EQ_.call(null,p1__46238_SHARP_.call(null,new cljs.core.Keyword(null,"task-id","task-id",-1045480126)),the_task_id);
});})(the_task,duration))
,output_schedule));
return (nb_task_units_in_output / duration);
}catch (e46240){if((e46240 instanceof Error)){
var e = e46240;
return (1);
} else {
throw e46240;

}
}});
/**
 * Returns true if task is complete
 */
milestones.dyna_scheduler.task_complete_QMARK_ = (function milestones$dyna_scheduler$task_complete_QMARK_(tasks__$1,output_schedule,the_task_id){
return cljs.core._EQ_.call(null,milestones.dyna_scheduler.task_completion_rate.call(null,tasks__$1,output_schedule,the_task_id),(1));
});
milestones.dyna_scheduler.all_tasks_complete_QMARK_ = (function milestones$dyna_scheduler$all_tasks_complete_QMARK_(tasks__$1,output_schedule){
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,milestones.dyna_scheduler.task_complete_QMARK_,tasks__$1,output_schedule),cljs.core.keys.call(null,tasks__$1));
});
/**
 * Work in progress is a task at the peek of the work flow [ 1 1 2 2 2 ...],
 *   that a resource begun treating. Once a task is Work in progress,
 *   it is not involved in the reordering of tasks, unless its length 
 *   is equal to the original task duration : it has not yet been processed.
 */
milestones.dyna_scheduler.work_in_progress_count = (function milestones$dyna_scheduler$work_in_progress_count(work_flow,the_task_id){
return cljs.core.count.call(null,cljs.core.take_while.call(null,(function (p1__46241_SHARP_){
return cljs.core._EQ_.call(null,the_task_id,p1__46241_SHARP_);
}),cljs.core.reverse.call(null,work_flow)));
});
/**
 * Returns true if task is work-in-progress,
 *   i.e, is in the head of the work queue, and is not at full length
 */
milestones.dyna_scheduler.task_in_work_in_progress_QMARK_ = (function milestones$dyna_scheduler$task_in_work_in_progress_QMARK_(tasks__$1,work_flow,the_task_id){
var wp_count = milestones.dyna_scheduler.work_in_progress_count.call(null,work_flow,the_task_id);
return (((0) > (0))) && (cljs.core.not_EQ_.call(null,cljs.core.get.call(null,tasks__$1.call(null,the_task_id),new cljs.core.Keyword(null,"duration","duration",1444101068)),wp_count));
});
/**
 * A predicate that returns true if all predecessors have been completed 
 */
milestones.dyna_scheduler.all_predecessors_complete_QMARK_ = (function milestones$dyna_scheduler$all_predecessors_complete_QMARK_(tasks__$1,output_schedule,task_id){
var the_task = cljs.core.get.call(null,tasks__$1,task_id);
var preds = cljs.core.get.call(null,the_task,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
return cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,milestones.dyna_scheduler.task_complete_QMARK_,tasks__$1,output_schedule),preds);
});
/**
 * Finds which tasks can be fired based on their predecessors.
 */
milestones.dyna_scheduler.find_fireable_tasks = (function milestones$dyna_scheduler$find_fireable_tasks(tasks__$1,output_schedule){
return cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,milestones.dyna_scheduler.all_predecessors_complete_QMARK_,tasks__$1,output_schedule),cljs.core.keys.call(null,tasks__$1)));
});
/**
 * Inspired from the joy of clojure. Knew I was going to use it someday!
 *   This yields a function which, applied to each task by sort-by,
 *   will generate vector of values used to order the tasks
 *   don't forget we have rows with indices, {1 {:order ...}
 */
milestones.dyna_scheduler.properties = (function milestones$dyna_scheduler$properties(property_names){
return (function (row_with_index){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (p1__46242_SHARP_){
return cljs.core.map.call(null,cljs.core.comp.call(null,p1__46242_SHARP_,cljs.core.val),row_with_index);
}),property_names));
});
});
/**
 * Sort tasks according to properties given in the property-names
 *   vector. As it is a vector, accessing from right is more effcient. as more
 *   urgent comes first, i.e on left of the vector, we need to reverse
 *   the result to put highest priority to the right.
 */
milestones.dyna_scheduler.reorder_tasks = (function milestones$dyna_scheduler$reorder_tasks(tasks__$1,property_names){
return cljs.core.vec.call(null,cljs.core.reverse.call(null,cljs.core.mapcat.call(null,cljs.core.keys,cljs.core.sort_by.call(null,milestones.dyna_scheduler.properties.call(null,property_names),cljs.core.map.call(null,(function (p__46247){
var vec__46248 = p__46247;
var k = cljs.core.nth.call(null,vec__46248,(0),null);
var v = cljs.core.nth.call(null,vec__46248,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]);
}),tasks__$1)))));
});
/**
 * Given a user-id, give you all tasks for this user (with all infos)
 */
milestones.dyna_scheduler.tasks_for_resource = (function milestones$dyna_scheduler$tasks_for_resource(tasks__$1,resource_id){
return cljs.core.filter.call(null,(function (p1__46251_SHARP_){
return cljs.core._EQ_.call(null,resource_id,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__46251_SHARP_)));
}),tasks__$1);
});
/**
 * Given an output-schedule, and a task-id you get a time-vector 
 *   of the task as present in the output schedule
 */
milestones.dyna_scheduler.task_sched_time_vector = (function milestones$dyna_scheduler$task_sched_time_vector(output_schedule,task_id){
return cljs.core.vec.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"time","time",1385887882),(function (p1__46252_SHARP_){
return cljs.core.get.call(null,p1__46252_SHARP_,task_id);
}).call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"task-id","task-id",-1045480126),output_schedule))));
});
/**
 * Given a task, we compute its current time vector
 *   and inject begin-time and completion ratio in it
 */
milestones.dyna_scheduler.format_a_task_in_output_schedule = (function milestones$dyna_scheduler$format_a_task_in_output_schedule(output_schedule,a_task){
var vec__46256 = a_task;
var k = cljs.core.nth.call(null,vec__46256,(0),null);
var v = cljs.core.nth.call(null,vec__46256,(1),null);
var the_tv = milestones.dyna_scheduler.task_sched_time_vector.call(null,output_schedule,k);
if(cljs.core.seq.call(null,the_tv)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"begin","begin",-319034319),cljs.core.apply.call(null,cljs.core.min,the_tv)),new cljs.core.Keyword(null,"achieved","achieved",-1236312021),cljs.core.count.call(null,the_tv))], null);
} else {
return a_task;
}
});
/**
 * Given an output schedule :
 *   [{:task-id 1 :time 1 :resource-id 1}
 *   {:task-id 3 :time 1 :resource-id 1}
 *   {:task-id 1 :time 2 :resource-id 1}
 *   {:task-id 3 :time 2 :resource-id 1}
 *   {:task-id 3 :time 3 :resource-id 1}]
 *   we find start-time, completion rate for each task and then we return
 *   a scheduled version of tasks. {1 {:begin 2 :completion-rate 2/5....})
 */
milestones.dyna_scheduler.format_tasks_in_output_schedule = (function milestones$dyna_scheduler$format_tasks_in_output_schedule(output_schedule,tasks__$1){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,milestones.dyna_scheduler.format_a_task_in_output_schedule,output_schedule),tasks__$1));
});
/**
 * given a user, its current work-queue, tasks and current output schedule,
 * we find his tasks, the fireable ones, reorder all of them (if preemptive)
 * or those non work in propress if not, and issue new work-flow
 */
milestones.dyna_scheduler.work_flow_for_resource = (function milestones$dyna_scheduler$work_flow_for_resource(current_work_flow,tasks__$1,resource_id,current_output_schedule,reordering_properties){
var fireable_tasks_ids = milestones.dyna_scheduler.find_fireable_tasks.call(null,tasks__$1,current_output_schedule);
var fireable_tasks = cljs.core.select_keys.call(null,tasks__$1,fireable_tasks_ids);
var his_fireable_tasks = milestones.dyna_scheduler.tasks_for_resource.call(null,fireable_tasks,resource_id);
var his_incomplete_fireable_tasks = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (fireable_tasks_ids,fireable_tasks,his_fireable_tasks){
return (function (p1__46259_SHARP_){
return cljs.core.not.call(null,milestones.dyna_scheduler.task_complete_QMARK_.call(null,tasks__$1,current_output_schedule,cljs.core.key.call(null,p1__46259_SHARP_)));
});})(fireable_tasks_ids,fireable_tasks,his_fireable_tasks))
,his_fireable_tasks));
var his_incomplete_fireable_tasks_ids = cljs.core.keys.call(null,his_incomplete_fireable_tasks);
var fireable_id_in_wp = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,milestones.dyna_scheduler.task_in_work_in_progress_QMARK_,tasks__$1,current_work_flow),his_incomplete_fireable_tasks_ids));
var wp_vector = cljs.core.vec.call(null,cljs.core.repeat.call(null,milestones.dyna_scheduler.work_in_progress_count.call(null,current_work_flow,fireable_id_in_wp),fireable_id_in_wp));
var fireable_ids_not_in_wp = cljs.core.vec.call(null,cljs.core.remove.call(null,((function (fireable_tasks_ids,fireable_tasks,his_fireable_tasks,his_incomplete_fireable_tasks,his_incomplete_fireable_tasks_ids,fireable_id_in_wp,wp_vector){
return (function (p1__46260_SHARP_){
return cljs.core._EQ_.call(null,p1__46260_SHARP_,fireable_id_in_wp);
});})(fireable_tasks_ids,fireable_tasks,his_fireable_tasks,his_incomplete_fireable_tasks,his_incomplete_fireable_tasks_ids,fireable_id_in_wp,wp_vector))
,his_incomplete_fireable_tasks_ids));
var his_fireable_tasks_not_in_wp = cljs.core.select_keys.call(null,tasks__$1,fireable_ids_not_in_wp);
var his_ordered_tasks_not_in_wp = milestones.dyna_scheduler.reorder_tasks.call(null,his_fireable_tasks_not_in_wp,reordering_properties);
var his_new_ordered_workflow = milestones.dyna_scheduler.gen_work_flow.call(null,tasks__$1,his_ordered_tasks_not_in_wp);
return cljs.core.into.call(null,his_new_ordered_workflow,wp_vector);
});
/**
 * For this timer, computes aht task unit this resource will compute,
 *   yielding a new workflows map
 */
milestones.dyna_scheduler.run_scheduler_for_resource = (function milestones$dyna_scheduler$run_scheduler_for_resource(timer,resource_id,tasks__$1,output_schedule,workflows,reordering_properties){
var current_flow_for_resource = cljs.core.get.call(null,workflows,resource_id);
var my_workflow = milestones.dyna_scheduler.work_flow_for_resource.call(null,current_flow_for_resource,tasks__$1,resource_id,output_schedule,reordering_properties);
var the_task_unit = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),cljs.core.peek.call(null,my_workflow),new cljs.core.Keyword(null,"time","time",1385887882),timer,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582),resource_id], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task-unit","task-unit",-1936819158),the_task_unit,new cljs.core.Keyword(null,"new-workflows","new-workflows",92241652),((cljs.core.seq.call(null,my_workflow))?cljs.core.assoc.call(null,workflows,resource_id,cljs.core.pop.call(null,my_workflow)):null)], null);
});
/**
 * Computes total tasks duration as if they were done sequentially.
 */
milestones.dyna_scheduler.total_task_duration = (function milestones$dyna_scheduler$total_task_duration(tasks__$1){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.map.call(null,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.vals.call(null,tasks__$1))));
});
milestones.dyna_scheduler.move_system_status_gen = (function milestones$dyna_scheduler$move_system_status_gen(tasks__$1,reordering_properties,timer,resources_ids,output_schedule,workflows){
while(true){
if(cljs.core.seq.call(null,resources_ids)){
var resource = cljs.core.first.call(null,resources_ids);
var new_system_status = milestones.dyna_scheduler.run_scheduler_for_resource.call(null,timer,resource,tasks__$1,output_schedule,workflows,reordering_properties);
var G__46261 = tasks__$1;
var G__46262 = reordering_properties;
var G__46263 = timer;
var G__46264 = cljs.core.rest.call(null,resources_ids);
var G__46265 = (function (){var new_task_unit = cljs.core.get.call(null,new_system_status,new cljs.core.Keyword(null,"task-unit","task-unit",-1936819158));
if(cljs.core.truth_(cljs.core.get.call(null,new_task_unit,new cljs.core.Keyword(null,"task-id","task-id",-1045480126)))){
return cljs.core.conj.call(null,output_schedule,new_task_unit);
} else {
return output_schedule;
}
})();
var G__46266 = cljs.core.get.call(null,new_system_status,new cljs.core.Keyword(null,"new-workflows","new-workflows",92241652));
tasks__$1 = G__46261;
reordering_properties = G__46262;
timer = G__46263;
resources_ids = G__46264;
output_schedule = G__46265;
workflows = G__46266;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-output-schedule","new-output-schedule",-1227709275),output_schedule,new cljs.core.Keyword(null,"new-workflows","new-workflows",92241652),workflows], null);
}
break;
}
});
/**
 * this is the master-mind. runs all of them, collects their inputs,
 *   and then goes home
 */
milestones.dyna_scheduler.run_scheduler = (function milestones$dyna_scheduler$run_scheduler(tasks__$1,reordering_properties){
var max_time = ((2) * milestones.dyna_scheduler.total_task_duration.call(null,tasks__$1));
var resources_ids = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582),cljs.core.vals.call(null,tasks__$1)));
var move_system_status = cljs.core.partial.call(null,milestones.dyna_scheduler.move_system_status_gen,tasks__$1,reordering_properties);
var timer = (1);
var workflows = cljs.core.PersistentArrayMap.EMPTY;
var output_schedule = cljs.core.PersistentVector.EMPTY;
while(true){
if(((timer < max_time)) && (cljs.core.not.call(null,milestones.dyna_scheduler.all_tasks_complete_QMARK_.call(null,tasks__$1,output_schedule)))){
var map__46269 = move_system_status.call(null,timer,resources_ids,output_schedule,workflows);
var map__46269__$1 = ((((!((map__46269 == null)))?((((map__46269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46269):map__46269);
var new_output_schedule = cljs.core.get.call(null,map__46269__$1,new cljs.core.Keyword(null,"new-output-schedule","new-output-schedule",-1227709275));
var new_workflows = cljs.core.get.call(null,map__46269__$1,new cljs.core.Keyword(null,"new-workflows","new-workflows",92241652));
var G__46271 = (timer + (1));
var G__46272 = new_workflows;
var G__46273 = new_output_schedule;
timer = G__46271;
workflows = G__46272;
output_schedule = G__46273;
continue;
} else {
if(cljs.core.truth_(milestones.dyna_scheduler.all_tasks_complete_QMARK_.call(null,tasks__$1,output_schedule))){
return output_schedule;
} else {
return null;

}
}
break;
}
});
/**
 * Given a task ({:prop ...}) and a vector of properties
 *   returns missing properties for task
 */
milestones.dyna_scheduler.missing_prop_for_task = (function milestones$dyna_scheduler$missing_prop_for_task(task,reordering_properties){
return cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__46274_SHARP_){
if(cljs.core.truth_(cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.contains_QMARK_,task)).call(null,p1__46274_SHARP_))){
return p1__46274_SHARP_;
} else {
return null;
}
}),reordering_properties)));
});
/**
 * Returns a map, with task-id and a vector of missing property
 */
milestones.dyna_scheduler.tasks_w_missing_properties = (function milestones$dyna_scheduler$tasks_w_missing_properties(tasks__$1,reordering_properties){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__45614__auto__ = (function milestones$dyna_scheduler$tasks_w_missing_properties_$_iter__46291(s__46292){
return (new cljs.core.LazySeq(null,(function (){
var s__46292__$1 = s__46292;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46292__$1);
if(temp__4657__auto__){
var s__46292__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46292__$2)){
var c__45612__auto__ = cljs.core.chunk_first.call(null,s__46292__$2);
var size__45613__auto__ = cljs.core.count.call(null,c__45612__auto__);
var b__46294 = cljs.core.chunk_buffer.call(null,size__45613__auto__);
if((function (){var i__46293 = (0);
while(true){
if((i__46293 < size__45613__auto__)){
var vec__46301 = cljs.core._nth.call(null,c__45612__auto__,i__46293);
var id = cljs.core.nth.call(null,vec__46301,(0),null);
var t = cljs.core.nth.call(null,vec__46301,(1),null);
var missing_props = milestones.dyna_scheduler.missing_prop_for_task.call(null,t,reordering_properties);
if(cljs.core.seq.call(null,missing_props)){
cljs.core.chunk_append.call(null,b__46294,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,missing_props]));

var G__46307 = (i__46293 + (1));
i__46293 = G__46307;
continue;
} else {
var G__46308 = (i__46293 + (1));
i__46293 = G__46308;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46294),milestones$dyna_scheduler$tasks_w_missing_properties_$_iter__46291.call(null,cljs.core.chunk_rest.call(null,s__46292__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46294),null);
}
} else {
var vec__46304 = cljs.core.first.call(null,s__46292__$2);
var id = cljs.core.nth.call(null,vec__46304,(0),null);
var t = cljs.core.nth.call(null,vec__46304,(1),null);
var missing_props = milestones.dyna_scheduler.missing_prop_for_task.call(null,t,reordering_properties);
if(cljs.core.seq.call(null,missing_props)){
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([id,missing_props]),milestones$dyna_scheduler$tasks_w_missing_properties_$_iter__46291.call(null,cljs.core.rest.call(null,s__46292__$2)));
} else {
var G__46309 = cljs.core.rest.call(null,s__46292__$2);
s__46292__$1 = G__46309;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__45614__auto__.call(null,tasks__$1);
})());
});
/**
 * Returns the Tasks with predecessors not declared as tasks elsewhere in the tasks definition.
 */
milestones.dyna_scheduler.tasks_w_not_found_predecessors = (function milestones$dyna_scheduler$tasks_w_not_found_predecessors(tasks__$1){
return cljs.core.keys.call(null,cljs.core.filter.call(null,(function (p__46314){
var vec__46315 = p__46314;
var _ = cljs.core.nth.call(null,vec__46315,(0),null);
var t = cljs.core.nth.call(null,vec__46315,(1),null);
return cljs.core.not.call(null,milestones.graph_utilities.predecessors_of_task_exist_QMARK_.call(null,tasks__$1,t));
}),tasks__$1));
});
/**
 * Which tasks don't have Field field.
 */
milestones.dyna_scheduler.tasks_w_no_field = (function milestones$dyna_scheduler$tasks_w_no_field(tasks__$1,field){
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,field,cljs.core.val),tasks__$1);
});
milestones.dyna_scheduler.tasks_w_empty_predecessors = (function milestones$dyna_scheduler$tasks_w_empty_predecessors(tasks__$1){
return cljs.core.vec.call(null,cljs.core.keys.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.empty_QMARK_,cljs.core.val),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__46322){
var vec__46323 = p__46322;
var id = cljs.core.nth.call(null,vec__46323,(0),null);
var t = cljs.core.nth.call(null,vec__46323,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,new cljs.core.Keyword(null,"predecessors","predecessors",229913357).cljs$core$IFn$_invoke$arity$1(t)]);
}),tasks__$1))))));
});
/**
 * If task id is not in tasks, return true
 */
milestones.dyna_scheduler.not_found_task_QMARK_ = (function milestones$dyna_scheduler$not_found_task_QMARK_(tasks__$1,task_id){
return !(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,tasks__$1)),task_id));
});
/**
 * Given Tasks, emits a detailed info on whom tasks are having non existent 
 *   predecessors
 */
milestones.dyna_scheduler.tasks_w_non_existent_predecessors = (function milestones$dyna_scheduler$tasks_w_non_existent_predecessors(tasks__$1){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.seq,(function (p1__46326_SHARP_){
return cljs.core.get.call(null,p1__46326_SHARP_,(1));
})),cljs.core.map.call(null,(function (p__46331){
var vec__46332 = p__46331;
var id = cljs.core.nth.call(null,vec__46332,(0),null);
var t = cljs.core.nth.call(null,vec__46332,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,milestones.dyna_scheduler.not_found_task_QMARK_,tasks__$1),new cljs.core.Keyword(null,"predecessors","predecessors",229913357).cljs$core$IFn$_invoke$arity$1(t)))], null);
}),tasks__$1)));
});
/**
 * verif if there-s something wrong before we schedule.
 *   emits a map. {:errors {} :results schedule
 *   errors : non existing reordering prop, non existing predecessors, and cycles.
 */
milestones.dyna_scheduler.errors_on_tasks = (function milestones$dyna_scheduler$errors_on_tasks(tasks__$1,reordering_properties){
var milestone_tasks = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"is-milestone","is-milestone",-841886209),cljs.core.val),tasks__$1));
var non_milestone_tasks = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,milestones.dyna_scheduler.tasks_w_no_field.call(null,tasks__$1,new cljs.core.Keyword(null,"is-milestone","is-milestone",-841886209)));
var reordering_errors = milestones.dyna_scheduler.tasks_w_missing_properties.call(null,non_milestone_tasks,reordering_properties);
var tasks_graph = milestones.graph_utilities.gen_all_precedence_edges.call(null,tasks__$1);
var tasks_cycles = milestones.graph_utilities.graph_cycles.call(null,tasks_graph);
var milestones_w_no_predecessors = milestones.dyna_scheduler.tasks_w_no_field.call(null,milestone_tasks,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var tasks_w_no_resources = milestones.dyna_scheduler.tasks_w_no_field.call(null,non_milestone_tasks,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reordering-errors","reordering-errors",-1392205557),reordering_errors,new cljs.core.Keyword(null,"tasks-w-predecessors-errors","tasks-w-predecessors-errors",-570518279),milestones.dyna_scheduler.tasks_w_non_existent_predecessors.call(null,tasks__$1),new cljs.core.Keyword(null,"tasks-w-no-resources","tasks-w-no-resources",1754574034),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,tasks_w_no_resources)),new cljs.core.Keyword(null,"tasks-cycles","tasks-cycles",1084791263),tasks_cycles,new cljs.core.Keyword(null,"milestones-w-no-predecessors","milestones-w-no-predecessors",-57636837),cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,milestones_w_no_predecessors)),milestones.dyna_scheduler.tasks_w_empty_predecessors.call(null,milestone_tasks))], null);
});
/**
 * A milestone is declared by giving :milestone-name and at least one predecessor
 *   then we create a task, with a (gensym :milestone-user) and a duration 1 as user-id, so milestones
 *   can enter the scheduler algorithm
 */
milestones.dyna_scheduler.prepare_milestone = (function milestones$dyna_scheduler$prepare_milestone(a_milestone_desc){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,a_milestone_desc,new cljs.core.Keyword(null,"duration","duration",1444101068),(1)),new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582),cljs.core.gensym.call(null,new cljs.core.Keyword(null,"milestone-user","milestone-user",-758750660)));
});
/**
 * Adds random user-ids and duration=1 to milestones tasks
 */
milestones.dyna_scheduler.prepare_tasks = (function milestones$dyna_scheduler$prepare_tasks(tasks__$1){
var milestone_tasks = cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"is-milestone","is-milestone",-841886209),cljs.core.val),tasks__$1);
var curated_milestone_tasks = cljs.core.map.call(null,((function (milestone_tasks){
return (function (p__46339){
var vec__46340 = p__46339;
var id = cljs.core.nth.call(null,vec__46340,(0),null);
var t = cljs.core.nth.call(null,vec__46340,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,milestones.dyna_scheduler.prepare_milestone.call(null,t)], null);
});})(milestone_tasks))
,milestone_tasks);
return cljs.core.into.call(null,tasks__$1,curated_milestone_tasks);
});
/**
 * The real over-master-uber-function to call. Gives you tasks with :begin,
 *   just like you'd exepct, if errors =nil, or you can read errors instead.
 */
milestones.dyna_scheduler.schedule = (function milestones$dyna_scheduler$schedule(tasks__$1,reordering_properties){
var errors = milestones.dyna_scheduler.errors_on_tasks.call(null,tasks__$1,reordering_properties);
if(cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.seq),cljs.core.vals.call(null,errors))){
var curated_tasks = milestones.dyna_scheduler.prepare_tasks.call(null,tasks__$1);
var temp__4655__auto__ = milestones.dyna_scheduler.run_scheduler.call(null,curated_tasks,reordering_properties);
if(cljs.core.truth_(temp__4655__auto__)){
var result = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"errors","errors",-908790718),null,new cljs.core.Keyword(null,"result","result",1415092211),milestones.dyna_scheduler.format_tasks_in_output_schedule.call(null,result,tasks__$1)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"unable-to-schedule","unable-to-schedule",366706074)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_,cljs.core.val),errors))], null);
}
});

//# sourceMappingURL=dyna_scheduler.js.map?rel=1491522835241