// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args48289 = [];
var len__45939__auto___48295 = arguments.length;
var i__45940__auto___48296 = (0);
while(true){
if((i__45940__auto___48296 < len__45939__auto___48295)){
args48289.push((arguments[i__45940__auto___48296]));

var G__48297 = (i__45940__auto___48296 + (1));
i__45940__auto___48296 = G__48297;
continue;
} else {
}
break;
}

var G__48291 = args48289.length;
switch (G__48291) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48289.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async48292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48292 = (function (f,blockable,meta48293){
this.f = f;
this.blockable = blockable;
this.meta48293 = meta48293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48294,meta48293__$1){
var self__ = this;
var _48294__$1 = this;
return (new cljs.core.async.t_cljs$core$async48292(self__.f,self__.blockable,meta48293__$1));
});

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48294){
var self__ = this;
var _48294__$1 = this;
return self__.meta48293;
});

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async48292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48293","meta48293",496613915,null)], null);
});

cljs.core.async.t_cljs$core$async48292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48292";

cljs.core.async.t_cljs$core$async48292.cljs$lang$ctorPrWriter = (function (this__45437__auto__,writer__45438__auto__,opt__45439__auto__){
return cljs.core._write.call(null,writer__45438__auto__,"cljs.core.async/t_cljs$core$async48292");
});

cljs.core.async.__GT_t_cljs$core$async48292 = (function cljs$core$async$__GT_t_cljs$core$async48292(f__$1,blockable__$1,meta48293){
return (new cljs.core.async.t_cljs$core$async48292(f__$1,blockable__$1,meta48293));
});

}

return (new cljs.core.async.t_cljs$core$async48292(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args48301 = [];
var len__45939__auto___48304 = arguments.length;
var i__45940__auto___48305 = (0);
while(true){
if((i__45940__auto___48305 < len__45939__auto___48304)){
args48301.push((arguments[i__45940__auto___48305]));

var G__48306 = (i__45940__auto___48305 + (1));
i__45940__auto___48305 = G__48306;
continue;
} else {
}
break;
}

var G__48303 = args48301.length;
switch (G__48303) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48301.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args48308 = [];
var len__45939__auto___48311 = arguments.length;
var i__45940__auto___48312 = (0);
while(true){
if((i__45940__auto___48312 < len__45939__auto___48311)){
args48308.push((arguments[i__45940__auto___48312]));

var G__48313 = (i__45940__auto___48312 + (1));
i__45940__auto___48312 = G__48313;
continue;
} else {
}
break;
}

var G__48310 = args48308.length;
switch (G__48310) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48308.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args48315 = [];
var len__45939__auto___48318 = arguments.length;
var i__45940__auto___48319 = (0);
while(true){
if((i__45940__auto___48319 < len__45939__auto___48318)){
args48315.push((arguments[i__45940__auto___48319]));

var G__48320 = (i__45940__auto___48319 + (1));
i__45940__auto___48319 = G__48320;
continue;
} else {
}
break;
}

var G__48317 = args48315.length;
switch (G__48317) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48315.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_48322 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_48322);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_48322,ret){
return (function (){
return fn1.call(null,val_48322);
});})(val_48322,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args48323 = [];
var len__45939__auto___48326 = arguments.length;
var i__45940__auto___48327 = (0);
while(true){
if((i__45940__auto___48327 < len__45939__auto___48326)){
args48323.push((arguments[i__45940__auto___48327]));

var G__48328 = (i__45940__auto___48327 + (1));
i__45940__auto___48327 = G__48328;
continue;
} else {
}
break;
}

var G__48325 = args48323.length;
switch (G__48325) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48323.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__45749__auto___48330 = n;
var x_48331 = (0);
while(true){
if((x_48331 < n__45749__auto___48330)){
(a[x_48331] = (0));

var G__48332 = (x_48331 + (1));
x_48331 = G__48332;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__48333 = (i + (1));
i = G__48333;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async48337 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48337 = (function (flag,meta48338){
this.flag = flag;
this.meta48338 = meta48338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48339,meta48338__$1){
var self__ = this;
var _48339__$1 = this;
return (new cljs.core.async.t_cljs$core$async48337(self__.flag,meta48338__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async48337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48339){
var self__ = this;
var _48339__$1 = this;
return self__.meta48338;
});})(flag))
;

cljs.core.async.t_cljs$core$async48337.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async48337.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48337.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48338","meta48338",9246219,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async48337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48337";

cljs.core.async.t_cljs$core$async48337.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__45437__auto__,writer__45438__auto__,opt__45439__auto__){
return cljs.core._write.call(null,writer__45438__auto__,"cljs.core.async/t_cljs$core$async48337");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async48337 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48337(flag__$1,meta48338){
return (new cljs.core.async.t_cljs$core$async48337(flag__$1,meta48338));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async48337(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async48343 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48343 = (function (flag,cb,meta48344){
this.flag = flag;
this.cb = cb;
this.meta48344 = meta48344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48345,meta48344__$1){
var self__ = this;
var _48345__$1 = this;
return (new cljs.core.async.t_cljs$core$async48343(self__.flag,self__.cb,meta48344__$1));
});

cljs.core.async.t_cljs$core$async48343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48345){
var self__ = this;
var _48345__$1 = this;
return self__.meta48344;
});

cljs.core.async.t_cljs$core$async48343.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async48343.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async48343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48344","meta48344",958211857,null)], null);
});

cljs.core.async.t_cljs$core$async48343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48343";

cljs.core.async.t_cljs$core$async48343.cljs$lang$ctorPrWriter = (function (this__45437__auto__,writer__45438__auto__,opt__45439__auto__){
return cljs.core._write.call(null,writer__45438__auto__,"cljs.core.async/t_cljs$core$async48343");
});

cljs.core.async.__GT_t_cljs$core$async48343 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48343(flag__$1,cb__$1,meta48344){
return (new cljs.core.async.t_cljs$core$async48343(flag__$1,cb__$1,meta48344));
});

}

return (new cljs.core.async.t_cljs$core$async48343(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48346_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48346_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48347_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48347_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__44826__auto__ = wport;
if(cljs.core.truth_(or__44826__auto__)){
return or__44826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48348 = (i + (1));
i = G__48348;
continue;
}
} else {
return null;
}
break;
}
})();
var or__44826__auto__ = ret;
if(cljs.core.truth_(or__44826__auto__)){
return or__44826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__44814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__44814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__44814__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__45946__auto__ = [];
var len__45939__auto___48354 = arguments.length;
var i__45940__auto___48355 = (0);
while(true){
if((i__45940__auto___48355 < len__45939__auto___48354)){
args__45946__auto__.push((arguments[i__45940__auto___48355]));

var G__48356 = (i__45940__auto___48355 + (1));
i__45940__auto___48355 = G__48356;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((1) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45947__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48351){
var map__48352 = p__48351;
var map__48352__$1 = ((((!((map__48352 == null)))?((((map__48352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48352):map__48352);
var opts = map__48352__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48349){
var G__48350 = cljs.core.first.call(null,seq48349);
var seq48349__$1 = cljs.core.next.call(null,seq48349);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48350,seq48349__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args48357 = [];
var len__45939__auto___48407 = arguments.length;
var i__45940__auto___48408 = (0);
while(true){
if((i__45940__auto___48408 < len__45939__auto___48407)){
args48357.push((arguments[i__45940__auto___48408]));

var G__48409 = (i__45940__auto___48408 + (1));
i__45940__auto___48408 = G__48409;
continue;
} else {
}
break;
}

var G__48359 = args48357.length;
switch (G__48359) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48357.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48244__auto___48411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___48411){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___48411){
return (function (state_48383){
var state_val_48384 = (state_48383[(1)]);
if((state_val_48384 === (7))){
var inst_48379 = (state_48383[(2)]);
var state_48383__$1 = state_48383;
var statearr_48385_48412 = state_48383__$1;
(statearr_48385_48412[(2)] = inst_48379);

(statearr_48385_48412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48384 === (1))){
var state_48383__$1 = state_48383;
var statearr_48386_48413 = state_48383__$1;
(statearr_48386_48413[(2)] = null);

(statearr_48386_48413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48384 === (4))){
var inst_48362 = (state_48383[(7)]);
var inst_48362__$1 = (state_48383[(2)]);
var inst_48363 = (inst_48362__$1 == null);
var state_48383__$1 = (function (){var statearr_48387 = state_48383;
(statearr_48387[(7)] = inst_48362__$1);

return statearr_48387;
})();
if(cljs.core.truth_(inst_48363)){
var statearr_48388_48414 = state_48383__$1;
(statearr_48388_48414[(1)] = (5));

} else {
var statearr_48389_48415 = state_48383__$1;
(statearr_48389_48415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48384 === (13))){
var state_48383__$1 = state_48383;
var statearr_48390_48416 = state_48383__$1;
(statearr_48390_48416[(2)] = null);

(statearr_48390_48416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48384 === (6))){
var inst_48362 = (state_48383[(7)]);
var state_48383__$1 = state_48383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48383__$1,(11),to,inst_48362);
} else {
if((state_val_48384 === (3))){
var inst_48381 = (state_48383[(2)]);
var state_48383__$1 = state_48383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48383__$1,inst_48381);
} else {
if((state_val_48384 === (12))){
var state_48383__$1 = state_48383;
var statearr_48391_48417 = state_48383__$1;
(statearr_48391_48417[(2)] = null);

(statearr_48391_48417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48384 === (2))){
var state_48383__$1 = state_48383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48383__$1,(4),from);
} else {
if((state_val_48384 === (11))){
var inst_48372 = (state_48383[(2)]);
var state_48383__$1 = state_48383;
if(cljs.core.truth_(inst_48372)){
var statearr_48392_48418 = state_48383__$1;
(statearr_48392_48418[(1)] = (12));

} else {
var statearr_48393_48419 = state_48383__$1;
(statearr_48393_48419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48384 === (9))){
var state_48383__$1 = state_48383;
var statearr_48394_48420 = state_48383__$1;
(statearr_48394_48420[(2)] = null);

(statearr_48394_48420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48384 === (5))){
var state_48383__$1 = state_48383;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48395_48421 = state_48383__$1;
(statearr_48395_48421[(1)] = (8));

} else {
var statearr_48396_48422 = state_48383__$1;
(statearr_48396_48422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48384 === (14))){
var inst_48377 = (state_48383[(2)]);
var state_48383__$1 = state_48383;
var statearr_48397_48423 = state_48383__$1;
(statearr_48397_48423[(2)] = inst_48377);

(statearr_48397_48423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48384 === (10))){
var inst_48369 = (state_48383[(2)]);
var state_48383__$1 = state_48383;
var statearr_48398_48424 = state_48383__$1;
(statearr_48398_48424[(2)] = inst_48369);

(statearr_48398_48424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48384 === (8))){
var inst_48366 = cljs.core.async.close_BANG_.call(null,to);
var state_48383__$1 = state_48383;
var statearr_48399_48425 = state_48383__$1;
(statearr_48399_48425[(2)] = inst_48366);

(statearr_48399_48425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___48411))
;
return ((function (switch__48132__auto__,c__48244__auto___48411){
return (function() {
var cljs$core$async$state_machine__48133__auto__ = null;
var cljs$core$async$state_machine__48133__auto____0 = (function (){
var statearr_48403 = [null,null,null,null,null,null,null,null];
(statearr_48403[(0)] = cljs$core$async$state_machine__48133__auto__);

(statearr_48403[(1)] = (1));

return statearr_48403;
});
var cljs$core$async$state_machine__48133__auto____1 = (function (state_48383){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_48383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e48404){if((e48404 instanceof Object)){
var ex__48136__auto__ = e48404;
var statearr_48405_48426 = state_48383;
(statearr_48405_48426[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48427 = state_48383;
state_48383 = G__48427;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$state_machine__48133__auto__ = function(state_48383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48133__auto____1.call(this,state_48383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48133__auto____0;
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48133__auto____1;
return cljs$core$async$state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___48411))
})();
var state__48246__auto__ = (function (){var statearr_48406 = f__48245__auto__.call(null);
(statearr_48406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___48411);

return statearr_48406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___48411))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__48615){
var vec__48616 = p__48615;
var v = cljs.core.nth.call(null,vec__48616,(0),null);
var p = cljs.core.nth.call(null,vec__48616,(1),null);
var job = vec__48616;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__48244__auto___48802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___48802,res,vec__48616,v,p,job,jobs,results){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___48802,res,vec__48616,v,p,job,jobs,results){
return (function (state_48623){
var state_val_48624 = (state_48623[(1)]);
if((state_val_48624 === (1))){
var state_48623__$1 = state_48623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48623__$1,(2),res,v);
} else {
if((state_val_48624 === (2))){
var inst_48620 = (state_48623[(2)]);
var inst_48621 = cljs.core.async.close_BANG_.call(null,res);
var state_48623__$1 = (function (){var statearr_48625 = state_48623;
(statearr_48625[(7)] = inst_48620);

return statearr_48625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48623__$1,inst_48621);
} else {
return null;
}
}
});})(c__48244__auto___48802,res,vec__48616,v,p,job,jobs,results))
;
return ((function (switch__48132__auto__,c__48244__auto___48802,res,vec__48616,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0 = (function (){
var statearr_48629 = [null,null,null,null,null,null,null,null];
(statearr_48629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__);

(statearr_48629[(1)] = (1));

return statearr_48629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1 = (function (state_48623){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_48623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e48630){if((e48630 instanceof Object)){
var ex__48136__auto__ = e48630;
var statearr_48631_48803 = state_48623;
(statearr_48631_48803[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48804 = state_48623;
state_48623 = G__48804;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__ = function(state_48623){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1.call(this,state_48623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___48802,res,vec__48616,v,p,job,jobs,results))
})();
var state__48246__auto__ = (function (){var statearr_48632 = f__48245__auto__.call(null);
(statearr_48632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___48802);

return statearr_48632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___48802,res,vec__48616,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__48633){
var vec__48634 = p__48633;
var v = cljs.core.nth.call(null,vec__48634,(0),null);
var p = cljs.core.nth.call(null,vec__48634,(1),null);
var job = vec__48634;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__45749__auto___48805 = n;
var __48806 = (0);
while(true){
if((__48806 < n__45749__auto___48805)){
var G__48637_48807 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__48637_48807) {
case "compute":
var c__48244__auto___48809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48806,c__48244__auto___48809,G__48637_48807,n__45749__auto___48805,jobs,results,process,async){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (__48806,c__48244__auto___48809,G__48637_48807,n__45749__auto___48805,jobs,results,process,async){
return (function (state_48650){
var state_val_48651 = (state_48650[(1)]);
if((state_val_48651 === (1))){
var state_48650__$1 = state_48650;
var statearr_48652_48810 = state_48650__$1;
(statearr_48652_48810[(2)] = null);

(statearr_48652_48810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48651 === (2))){
var state_48650__$1 = state_48650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48650__$1,(4),jobs);
} else {
if((state_val_48651 === (3))){
var inst_48648 = (state_48650[(2)]);
var state_48650__$1 = state_48650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48650__$1,inst_48648);
} else {
if((state_val_48651 === (4))){
var inst_48640 = (state_48650[(2)]);
var inst_48641 = process.call(null,inst_48640);
var state_48650__$1 = state_48650;
if(cljs.core.truth_(inst_48641)){
var statearr_48653_48811 = state_48650__$1;
(statearr_48653_48811[(1)] = (5));

} else {
var statearr_48654_48812 = state_48650__$1;
(statearr_48654_48812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48651 === (5))){
var state_48650__$1 = state_48650;
var statearr_48655_48813 = state_48650__$1;
(statearr_48655_48813[(2)] = null);

(statearr_48655_48813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48651 === (6))){
var state_48650__$1 = state_48650;
var statearr_48656_48814 = state_48650__$1;
(statearr_48656_48814[(2)] = null);

(statearr_48656_48814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48651 === (7))){
var inst_48646 = (state_48650[(2)]);
var state_48650__$1 = state_48650;
var statearr_48657_48815 = state_48650__$1;
(statearr_48657_48815[(2)] = inst_48646);

(statearr_48657_48815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48806,c__48244__auto___48809,G__48637_48807,n__45749__auto___48805,jobs,results,process,async))
;
return ((function (__48806,switch__48132__auto__,c__48244__auto___48809,G__48637_48807,n__45749__auto___48805,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0 = (function (){
var statearr_48661 = [null,null,null,null,null,null,null];
(statearr_48661[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__);

(statearr_48661[(1)] = (1));

return statearr_48661;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1 = (function (state_48650){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_48650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e48662){if((e48662 instanceof Object)){
var ex__48136__auto__ = e48662;
var statearr_48663_48816 = state_48650;
(statearr_48663_48816[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48817 = state_48650;
state_48650 = G__48817;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__ = function(state_48650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1.call(this,state_48650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__;
})()
;})(__48806,switch__48132__auto__,c__48244__auto___48809,G__48637_48807,n__45749__auto___48805,jobs,results,process,async))
})();
var state__48246__auto__ = (function (){var statearr_48664 = f__48245__auto__.call(null);
(statearr_48664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___48809);

return statearr_48664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(__48806,c__48244__auto___48809,G__48637_48807,n__45749__auto___48805,jobs,results,process,async))
);


break;
case "async":
var c__48244__auto___48818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48806,c__48244__auto___48818,G__48637_48807,n__45749__auto___48805,jobs,results,process,async){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (__48806,c__48244__auto___48818,G__48637_48807,n__45749__auto___48805,jobs,results,process,async){
return (function (state_48677){
var state_val_48678 = (state_48677[(1)]);
if((state_val_48678 === (1))){
var state_48677__$1 = state_48677;
var statearr_48679_48819 = state_48677__$1;
(statearr_48679_48819[(2)] = null);

(statearr_48679_48819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48678 === (2))){
var state_48677__$1 = state_48677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48677__$1,(4),jobs);
} else {
if((state_val_48678 === (3))){
var inst_48675 = (state_48677[(2)]);
var state_48677__$1 = state_48677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48677__$1,inst_48675);
} else {
if((state_val_48678 === (4))){
var inst_48667 = (state_48677[(2)]);
var inst_48668 = async.call(null,inst_48667);
var state_48677__$1 = state_48677;
if(cljs.core.truth_(inst_48668)){
var statearr_48680_48820 = state_48677__$1;
(statearr_48680_48820[(1)] = (5));

} else {
var statearr_48681_48821 = state_48677__$1;
(statearr_48681_48821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48678 === (5))){
var state_48677__$1 = state_48677;
var statearr_48682_48822 = state_48677__$1;
(statearr_48682_48822[(2)] = null);

(statearr_48682_48822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48678 === (6))){
var state_48677__$1 = state_48677;
var statearr_48683_48823 = state_48677__$1;
(statearr_48683_48823[(2)] = null);

(statearr_48683_48823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48678 === (7))){
var inst_48673 = (state_48677[(2)]);
var state_48677__$1 = state_48677;
var statearr_48684_48824 = state_48677__$1;
(statearr_48684_48824[(2)] = inst_48673);

(statearr_48684_48824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48806,c__48244__auto___48818,G__48637_48807,n__45749__auto___48805,jobs,results,process,async))
;
return ((function (__48806,switch__48132__auto__,c__48244__auto___48818,G__48637_48807,n__45749__auto___48805,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0 = (function (){
var statearr_48688 = [null,null,null,null,null,null,null];
(statearr_48688[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__);

(statearr_48688[(1)] = (1));

return statearr_48688;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1 = (function (state_48677){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_48677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e48689){if((e48689 instanceof Object)){
var ex__48136__auto__ = e48689;
var statearr_48690_48825 = state_48677;
(statearr_48690_48825[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48826 = state_48677;
state_48677 = G__48826;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__ = function(state_48677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1.call(this,state_48677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__;
})()
;})(__48806,switch__48132__auto__,c__48244__auto___48818,G__48637_48807,n__45749__auto___48805,jobs,results,process,async))
})();
var state__48246__auto__ = (function (){var statearr_48691 = f__48245__auto__.call(null);
(statearr_48691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___48818);

return statearr_48691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(__48806,c__48244__auto___48818,G__48637_48807,n__45749__auto___48805,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__48827 = (__48806 + (1));
__48806 = G__48827;
continue;
} else {
}
break;
}

var c__48244__auto___48828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___48828,jobs,results,process,async){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___48828,jobs,results,process,async){
return (function (state_48713){
var state_val_48714 = (state_48713[(1)]);
if((state_val_48714 === (1))){
var state_48713__$1 = state_48713;
var statearr_48715_48829 = state_48713__$1;
(statearr_48715_48829[(2)] = null);

(statearr_48715_48829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48714 === (2))){
var state_48713__$1 = state_48713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48713__$1,(4),from);
} else {
if((state_val_48714 === (3))){
var inst_48711 = (state_48713[(2)]);
var state_48713__$1 = state_48713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48713__$1,inst_48711);
} else {
if((state_val_48714 === (4))){
var inst_48694 = (state_48713[(7)]);
var inst_48694__$1 = (state_48713[(2)]);
var inst_48695 = (inst_48694__$1 == null);
var state_48713__$1 = (function (){var statearr_48716 = state_48713;
(statearr_48716[(7)] = inst_48694__$1);

return statearr_48716;
})();
if(cljs.core.truth_(inst_48695)){
var statearr_48717_48830 = state_48713__$1;
(statearr_48717_48830[(1)] = (5));

} else {
var statearr_48718_48831 = state_48713__$1;
(statearr_48718_48831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48714 === (5))){
var inst_48697 = cljs.core.async.close_BANG_.call(null,jobs);
var state_48713__$1 = state_48713;
var statearr_48719_48832 = state_48713__$1;
(statearr_48719_48832[(2)] = inst_48697);

(statearr_48719_48832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48714 === (6))){
var inst_48699 = (state_48713[(8)]);
var inst_48694 = (state_48713[(7)]);
var inst_48699__$1 = cljs.core.async.chan.call(null,(1));
var inst_48700 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48701 = [inst_48694,inst_48699__$1];
var inst_48702 = (new cljs.core.PersistentVector(null,2,(5),inst_48700,inst_48701,null));
var state_48713__$1 = (function (){var statearr_48720 = state_48713;
(statearr_48720[(8)] = inst_48699__$1);

return statearr_48720;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48713__$1,(8),jobs,inst_48702);
} else {
if((state_val_48714 === (7))){
var inst_48709 = (state_48713[(2)]);
var state_48713__$1 = state_48713;
var statearr_48721_48833 = state_48713__$1;
(statearr_48721_48833[(2)] = inst_48709);

(statearr_48721_48833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48714 === (8))){
var inst_48699 = (state_48713[(8)]);
var inst_48704 = (state_48713[(2)]);
var state_48713__$1 = (function (){var statearr_48722 = state_48713;
(statearr_48722[(9)] = inst_48704);

return statearr_48722;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48713__$1,(9),results,inst_48699);
} else {
if((state_val_48714 === (9))){
var inst_48706 = (state_48713[(2)]);
var state_48713__$1 = (function (){var statearr_48723 = state_48713;
(statearr_48723[(10)] = inst_48706);

return statearr_48723;
})();
var statearr_48724_48834 = state_48713__$1;
(statearr_48724_48834[(2)] = null);

(statearr_48724_48834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___48828,jobs,results,process,async))
;
return ((function (switch__48132__auto__,c__48244__auto___48828,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0 = (function (){
var statearr_48728 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__);

(statearr_48728[(1)] = (1));

return statearr_48728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1 = (function (state_48713){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_48713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e48729){if((e48729 instanceof Object)){
var ex__48136__auto__ = e48729;
var statearr_48730_48835 = state_48713;
(statearr_48730_48835[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48836 = state_48713;
state_48713 = G__48836;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__ = function(state_48713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1.call(this,state_48713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___48828,jobs,results,process,async))
})();
var state__48246__auto__ = (function (){var statearr_48731 = f__48245__auto__.call(null);
(statearr_48731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___48828);

return statearr_48731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___48828,jobs,results,process,async))
);


var c__48244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto__,jobs,results,process,async){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto__,jobs,results,process,async){
return (function (state_48769){
var state_val_48770 = (state_48769[(1)]);
if((state_val_48770 === (7))){
var inst_48765 = (state_48769[(2)]);
var state_48769__$1 = state_48769;
var statearr_48771_48837 = state_48769__$1;
(statearr_48771_48837[(2)] = inst_48765);

(statearr_48771_48837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (20))){
var state_48769__$1 = state_48769;
var statearr_48772_48838 = state_48769__$1;
(statearr_48772_48838[(2)] = null);

(statearr_48772_48838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (1))){
var state_48769__$1 = state_48769;
var statearr_48773_48839 = state_48769__$1;
(statearr_48773_48839[(2)] = null);

(statearr_48773_48839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (4))){
var inst_48734 = (state_48769[(7)]);
var inst_48734__$1 = (state_48769[(2)]);
var inst_48735 = (inst_48734__$1 == null);
var state_48769__$1 = (function (){var statearr_48774 = state_48769;
(statearr_48774[(7)] = inst_48734__$1);

return statearr_48774;
})();
if(cljs.core.truth_(inst_48735)){
var statearr_48775_48840 = state_48769__$1;
(statearr_48775_48840[(1)] = (5));

} else {
var statearr_48776_48841 = state_48769__$1;
(statearr_48776_48841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (15))){
var inst_48747 = (state_48769[(8)]);
var state_48769__$1 = state_48769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48769__$1,(18),to,inst_48747);
} else {
if((state_val_48770 === (21))){
var inst_48760 = (state_48769[(2)]);
var state_48769__$1 = state_48769;
var statearr_48777_48842 = state_48769__$1;
(statearr_48777_48842[(2)] = inst_48760);

(statearr_48777_48842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (13))){
var inst_48762 = (state_48769[(2)]);
var state_48769__$1 = (function (){var statearr_48778 = state_48769;
(statearr_48778[(9)] = inst_48762);

return statearr_48778;
})();
var statearr_48779_48843 = state_48769__$1;
(statearr_48779_48843[(2)] = null);

(statearr_48779_48843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (6))){
var inst_48734 = (state_48769[(7)]);
var state_48769__$1 = state_48769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48769__$1,(11),inst_48734);
} else {
if((state_val_48770 === (17))){
var inst_48755 = (state_48769[(2)]);
var state_48769__$1 = state_48769;
if(cljs.core.truth_(inst_48755)){
var statearr_48780_48844 = state_48769__$1;
(statearr_48780_48844[(1)] = (19));

} else {
var statearr_48781_48845 = state_48769__$1;
(statearr_48781_48845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (3))){
var inst_48767 = (state_48769[(2)]);
var state_48769__$1 = state_48769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48769__$1,inst_48767);
} else {
if((state_val_48770 === (12))){
var inst_48744 = (state_48769[(10)]);
var state_48769__$1 = state_48769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48769__$1,(14),inst_48744);
} else {
if((state_val_48770 === (2))){
var state_48769__$1 = state_48769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48769__$1,(4),results);
} else {
if((state_val_48770 === (19))){
var state_48769__$1 = state_48769;
var statearr_48782_48846 = state_48769__$1;
(statearr_48782_48846[(2)] = null);

(statearr_48782_48846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (11))){
var inst_48744 = (state_48769[(2)]);
var state_48769__$1 = (function (){var statearr_48783 = state_48769;
(statearr_48783[(10)] = inst_48744);

return statearr_48783;
})();
var statearr_48784_48847 = state_48769__$1;
(statearr_48784_48847[(2)] = null);

(statearr_48784_48847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (9))){
var state_48769__$1 = state_48769;
var statearr_48785_48848 = state_48769__$1;
(statearr_48785_48848[(2)] = null);

(statearr_48785_48848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (5))){
var state_48769__$1 = state_48769;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48786_48849 = state_48769__$1;
(statearr_48786_48849[(1)] = (8));

} else {
var statearr_48787_48850 = state_48769__$1;
(statearr_48787_48850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (14))){
var inst_48747 = (state_48769[(8)]);
var inst_48749 = (state_48769[(11)]);
var inst_48747__$1 = (state_48769[(2)]);
var inst_48748 = (inst_48747__$1 == null);
var inst_48749__$1 = cljs.core.not.call(null,inst_48748);
var state_48769__$1 = (function (){var statearr_48788 = state_48769;
(statearr_48788[(8)] = inst_48747__$1);

(statearr_48788[(11)] = inst_48749__$1);

return statearr_48788;
})();
if(inst_48749__$1){
var statearr_48789_48851 = state_48769__$1;
(statearr_48789_48851[(1)] = (15));

} else {
var statearr_48790_48852 = state_48769__$1;
(statearr_48790_48852[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (16))){
var inst_48749 = (state_48769[(11)]);
var state_48769__$1 = state_48769;
var statearr_48791_48853 = state_48769__$1;
(statearr_48791_48853[(2)] = inst_48749);

(statearr_48791_48853[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (10))){
var inst_48741 = (state_48769[(2)]);
var state_48769__$1 = state_48769;
var statearr_48792_48854 = state_48769__$1;
(statearr_48792_48854[(2)] = inst_48741);

(statearr_48792_48854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (18))){
var inst_48752 = (state_48769[(2)]);
var state_48769__$1 = state_48769;
var statearr_48793_48855 = state_48769__$1;
(statearr_48793_48855[(2)] = inst_48752);

(statearr_48793_48855[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48770 === (8))){
var inst_48738 = cljs.core.async.close_BANG_.call(null,to);
var state_48769__$1 = state_48769;
var statearr_48794_48856 = state_48769__$1;
(statearr_48794_48856[(2)] = inst_48738);

(statearr_48794_48856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto__,jobs,results,process,async))
;
return ((function (switch__48132__auto__,c__48244__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0 = (function (){
var statearr_48798 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__);

(statearr_48798[(1)] = (1));

return statearr_48798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1 = (function (state_48769){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_48769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e48799){if((e48799 instanceof Object)){
var ex__48136__auto__ = e48799;
var statearr_48800_48857 = state_48769;
(statearr_48800_48857[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48858 = state_48769;
state_48769 = G__48858;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__ = function(state_48769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1.call(this,state_48769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48133__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto__,jobs,results,process,async))
})();
var state__48246__auto__ = (function (){var statearr_48801 = f__48245__auto__.call(null);
(statearr_48801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto__);

return statearr_48801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto__,jobs,results,process,async))
);

return c__48244__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args48859 = [];
var len__45939__auto___48862 = arguments.length;
var i__45940__auto___48863 = (0);
while(true){
if((i__45940__auto___48863 < len__45939__auto___48862)){
args48859.push((arguments[i__45940__auto___48863]));

var G__48864 = (i__45940__auto___48863 + (1));
i__45940__auto___48863 = G__48864;
continue;
} else {
}
break;
}

var G__48861 = args48859.length;
switch (G__48861) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48859.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args48866 = [];
var len__45939__auto___48869 = arguments.length;
var i__45940__auto___48870 = (0);
while(true){
if((i__45940__auto___48870 < len__45939__auto___48869)){
args48866.push((arguments[i__45940__auto___48870]));

var G__48871 = (i__45940__auto___48870 + (1));
i__45940__auto___48870 = G__48871;
continue;
} else {
}
break;
}

var G__48868 = args48866.length;
switch (G__48868) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48866.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args48873 = [];
var len__45939__auto___48926 = arguments.length;
var i__45940__auto___48927 = (0);
while(true){
if((i__45940__auto___48927 < len__45939__auto___48926)){
args48873.push((arguments[i__45940__auto___48927]));

var G__48928 = (i__45940__auto___48927 + (1));
i__45940__auto___48927 = G__48928;
continue;
} else {
}
break;
}

var G__48875 = args48873.length;
switch (G__48875) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48873.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__48244__auto___48930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___48930,tc,fc){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___48930,tc,fc){
return (function (state_48901){
var state_val_48902 = (state_48901[(1)]);
if((state_val_48902 === (7))){
var inst_48897 = (state_48901[(2)]);
var state_48901__$1 = state_48901;
var statearr_48903_48931 = state_48901__$1;
(statearr_48903_48931[(2)] = inst_48897);

(statearr_48903_48931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48902 === (1))){
var state_48901__$1 = state_48901;
var statearr_48904_48932 = state_48901__$1;
(statearr_48904_48932[(2)] = null);

(statearr_48904_48932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48902 === (4))){
var inst_48878 = (state_48901[(7)]);
var inst_48878__$1 = (state_48901[(2)]);
var inst_48879 = (inst_48878__$1 == null);
var state_48901__$1 = (function (){var statearr_48905 = state_48901;
(statearr_48905[(7)] = inst_48878__$1);

return statearr_48905;
})();
if(cljs.core.truth_(inst_48879)){
var statearr_48906_48933 = state_48901__$1;
(statearr_48906_48933[(1)] = (5));

} else {
var statearr_48907_48934 = state_48901__$1;
(statearr_48907_48934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48902 === (13))){
var state_48901__$1 = state_48901;
var statearr_48908_48935 = state_48901__$1;
(statearr_48908_48935[(2)] = null);

(statearr_48908_48935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48902 === (6))){
var inst_48878 = (state_48901[(7)]);
var inst_48884 = p.call(null,inst_48878);
var state_48901__$1 = state_48901;
if(cljs.core.truth_(inst_48884)){
var statearr_48909_48936 = state_48901__$1;
(statearr_48909_48936[(1)] = (9));

} else {
var statearr_48910_48937 = state_48901__$1;
(statearr_48910_48937[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48902 === (3))){
var inst_48899 = (state_48901[(2)]);
var state_48901__$1 = state_48901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48901__$1,inst_48899);
} else {
if((state_val_48902 === (12))){
var state_48901__$1 = state_48901;
var statearr_48911_48938 = state_48901__$1;
(statearr_48911_48938[(2)] = null);

(statearr_48911_48938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48902 === (2))){
var state_48901__$1 = state_48901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48901__$1,(4),ch);
} else {
if((state_val_48902 === (11))){
var inst_48878 = (state_48901[(7)]);
var inst_48888 = (state_48901[(2)]);
var state_48901__$1 = state_48901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48901__$1,(8),inst_48888,inst_48878);
} else {
if((state_val_48902 === (9))){
var state_48901__$1 = state_48901;
var statearr_48912_48939 = state_48901__$1;
(statearr_48912_48939[(2)] = tc);

(statearr_48912_48939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48902 === (5))){
var inst_48881 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48882 = cljs.core.async.close_BANG_.call(null,fc);
var state_48901__$1 = (function (){var statearr_48913 = state_48901;
(statearr_48913[(8)] = inst_48881);

return statearr_48913;
})();
var statearr_48914_48940 = state_48901__$1;
(statearr_48914_48940[(2)] = inst_48882);

(statearr_48914_48940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48902 === (14))){
var inst_48895 = (state_48901[(2)]);
var state_48901__$1 = state_48901;
var statearr_48915_48941 = state_48901__$1;
(statearr_48915_48941[(2)] = inst_48895);

(statearr_48915_48941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48902 === (10))){
var state_48901__$1 = state_48901;
var statearr_48916_48942 = state_48901__$1;
(statearr_48916_48942[(2)] = fc);

(statearr_48916_48942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48902 === (8))){
var inst_48890 = (state_48901[(2)]);
var state_48901__$1 = state_48901;
if(cljs.core.truth_(inst_48890)){
var statearr_48917_48943 = state_48901__$1;
(statearr_48917_48943[(1)] = (12));

} else {
var statearr_48918_48944 = state_48901__$1;
(statearr_48918_48944[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___48930,tc,fc))
;
return ((function (switch__48132__auto__,c__48244__auto___48930,tc,fc){
return (function() {
var cljs$core$async$state_machine__48133__auto__ = null;
var cljs$core$async$state_machine__48133__auto____0 = (function (){
var statearr_48922 = [null,null,null,null,null,null,null,null,null];
(statearr_48922[(0)] = cljs$core$async$state_machine__48133__auto__);

(statearr_48922[(1)] = (1));

return statearr_48922;
});
var cljs$core$async$state_machine__48133__auto____1 = (function (state_48901){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_48901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e48923){if((e48923 instanceof Object)){
var ex__48136__auto__ = e48923;
var statearr_48924_48945 = state_48901;
(statearr_48924_48945[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48946 = state_48901;
state_48901 = G__48946;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$state_machine__48133__auto__ = function(state_48901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48133__auto____1.call(this,state_48901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48133__auto____0;
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48133__auto____1;
return cljs$core$async$state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___48930,tc,fc))
})();
var state__48246__auto__ = (function (){var statearr_48925 = f__48245__auto__.call(null);
(statearr_48925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___48930);

return statearr_48925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___48930,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto__){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto__){
return (function (state_49010){
var state_val_49011 = (state_49010[(1)]);
if((state_val_49011 === (7))){
var inst_49006 = (state_49010[(2)]);
var state_49010__$1 = state_49010;
var statearr_49012_49033 = state_49010__$1;
(statearr_49012_49033[(2)] = inst_49006);

(statearr_49012_49033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (1))){
var inst_48990 = init;
var state_49010__$1 = (function (){var statearr_49013 = state_49010;
(statearr_49013[(7)] = inst_48990);

return statearr_49013;
})();
var statearr_49014_49034 = state_49010__$1;
(statearr_49014_49034[(2)] = null);

(statearr_49014_49034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (4))){
var inst_48993 = (state_49010[(8)]);
var inst_48993__$1 = (state_49010[(2)]);
var inst_48994 = (inst_48993__$1 == null);
var state_49010__$1 = (function (){var statearr_49015 = state_49010;
(statearr_49015[(8)] = inst_48993__$1);

return statearr_49015;
})();
if(cljs.core.truth_(inst_48994)){
var statearr_49016_49035 = state_49010__$1;
(statearr_49016_49035[(1)] = (5));

} else {
var statearr_49017_49036 = state_49010__$1;
(statearr_49017_49036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (6))){
var inst_48997 = (state_49010[(9)]);
var inst_48993 = (state_49010[(8)]);
var inst_48990 = (state_49010[(7)]);
var inst_48997__$1 = f.call(null,inst_48990,inst_48993);
var inst_48998 = cljs.core.reduced_QMARK_.call(null,inst_48997__$1);
var state_49010__$1 = (function (){var statearr_49018 = state_49010;
(statearr_49018[(9)] = inst_48997__$1);

return statearr_49018;
})();
if(inst_48998){
var statearr_49019_49037 = state_49010__$1;
(statearr_49019_49037[(1)] = (8));

} else {
var statearr_49020_49038 = state_49010__$1;
(statearr_49020_49038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (3))){
var inst_49008 = (state_49010[(2)]);
var state_49010__$1 = state_49010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49010__$1,inst_49008);
} else {
if((state_val_49011 === (2))){
var state_49010__$1 = state_49010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49010__$1,(4),ch);
} else {
if((state_val_49011 === (9))){
var inst_48997 = (state_49010[(9)]);
var inst_48990 = inst_48997;
var state_49010__$1 = (function (){var statearr_49021 = state_49010;
(statearr_49021[(7)] = inst_48990);

return statearr_49021;
})();
var statearr_49022_49039 = state_49010__$1;
(statearr_49022_49039[(2)] = null);

(statearr_49022_49039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (5))){
var inst_48990 = (state_49010[(7)]);
var state_49010__$1 = state_49010;
var statearr_49023_49040 = state_49010__$1;
(statearr_49023_49040[(2)] = inst_48990);

(statearr_49023_49040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (10))){
var inst_49004 = (state_49010[(2)]);
var state_49010__$1 = state_49010;
var statearr_49024_49041 = state_49010__$1;
(statearr_49024_49041[(2)] = inst_49004);

(statearr_49024_49041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49011 === (8))){
var inst_48997 = (state_49010[(9)]);
var inst_49000 = cljs.core.deref.call(null,inst_48997);
var state_49010__$1 = state_49010;
var statearr_49025_49042 = state_49010__$1;
(statearr_49025_49042[(2)] = inst_49000);

(statearr_49025_49042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto__))
;
return ((function (switch__48132__auto__,c__48244__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__48133__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48133__auto____0 = (function (){
var statearr_49029 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49029[(0)] = cljs$core$async$reduce_$_state_machine__48133__auto__);

(statearr_49029[(1)] = (1));

return statearr_49029;
});
var cljs$core$async$reduce_$_state_machine__48133__auto____1 = (function (state_49010){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_49010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e49030){if((e49030 instanceof Object)){
var ex__48136__auto__ = e49030;
var statearr_49031_49043 = state_49010;
(statearr_49031_49043[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49044 = state_49010;
state_49010 = G__49044;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48133__auto__ = function(state_49010){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48133__auto____1.call(this,state_49010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48133__auto____0;
cljs$core$async$reduce_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48133__auto____1;
return cljs$core$async$reduce_$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto__))
})();
var state__48246__auto__ = (function (){var statearr_49032 = f__48245__auto__.call(null);
(statearr_49032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto__);

return statearr_49032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto__))
);

return c__48244__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args49045 = [];
var len__45939__auto___49097 = arguments.length;
var i__45940__auto___49098 = (0);
while(true){
if((i__45940__auto___49098 < len__45939__auto___49097)){
args49045.push((arguments[i__45940__auto___49098]));

var G__49099 = (i__45940__auto___49098 + (1));
i__45940__auto___49098 = G__49099;
continue;
} else {
}
break;
}

var G__49047 = args49045.length;
switch (G__49047) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49045.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto__){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto__){
return (function (state_49072){
var state_val_49073 = (state_49072[(1)]);
if((state_val_49073 === (7))){
var inst_49054 = (state_49072[(2)]);
var state_49072__$1 = state_49072;
var statearr_49074_49101 = state_49072__$1;
(statearr_49074_49101[(2)] = inst_49054);

(statearr_49074_49101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49073 === (1))){
var inst_49048 = cljs.core.seq.call(null,coll);
var inst_49049 = inst_49048;
var state_49072__$1 = (function (){var statearr_49075 = state_49072;
(statearr_49075[(7)] = inst_49049);

return statearr_49075;
})();
var statearr_49076_49102 = state_49072__$1;
(statearr_49076_49102[(2)] = null);

(statearr_49076_49102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49073 === (4))){
var inst_49049 = (state_49072[(7)]);
var inst_49052 = cljs.core.first.call(null,inst_49049);
var state_49072__$1 = state_49072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49072__$1,(7),ch,inst_49052);
} else {
if((state_val_49073 === (13))){
var inst_49066 = (state_49072[(2)]);
var state_49072__$1 = state_49072;
var statearr_49077_49103 = state_49072__$1;
(statearr_49077_49103[(2)] = inst_49066);

(statearr_49077_49103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49073 === (6))){
var inst_49057 = (state_49072[(2)]);
var state_49072__$1 = state_49072;
if(cljs.core.truth_(inst_49057)){
var statearr_49078_49104 = state_49072__$1;
(statearr_49078_49104[(1)] = (8));

} else {
var statearr_49079_49105 = state_49072__$1;
(statearr_49079_49105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49073 === (3))){
var inst_49070 = (state_49072[(2)]);
var state_49072__$1 = state_49072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49072__$1,inst_49070);
} else {
if((state_val_49073 === (12))){
var state_49072__$1 = state_49072;
var statearr_49080_49106 = state_49072__$1;
(statearr_49080_49106[(2)] = null);

(statearr_49080_49106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49073 === (2))){
var inst_49049 = (state_49072[(7)]);
var state_49072__$1 = state_49072;
if(cljs.core.truth_(inst_49049)){
var statearr_49081_49107 = state_49072__$1;
(statearr_49081_49107[(1)] = (4));

} else {
var statearr_49082_49108 = state_49072__$1;
(statearr_49082_49108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49073 === (11))){
var inst_49063 = cljs.core.async.close_BANG_.call(null,ch);
var state_49072__$1 = state_49072;
var statearr_49083_49109 = state_49072__$1;
(statearr_49083_49109[(2)] = inst_49063);

(statearr_49083_49109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49073 === (9))){
var state_49072__$1 = state_49072;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49084_49110 = state_49072__$1;
(statearr_49084_49110[(1)] = (11));

} else {
var statearr_49085_49111 = state_49072__$1;
(statearr_49085_49111[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49073 === (5))){
var inst_49049 = (state_49072[(7)]);
var state_49072__$1 = state_49072;
var statearr_49086_49112 = state_49072__$1;
(statearr_49086_49112[(2)] = inst_49049);

(statearr_49086_49112[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49073 === (10))){
var inst_49068 = (state_49072[(2)]);
var state_49072__$1 = state_49072;
var statearr_49087_49113 = state_49072__$1;
(statearr_49087_49113[(2)] = inst_49068);

(statearr_49087_49113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49073 === (8))){
var inst_49049 = (state_49072[(7)]);
var inst_49059 = cljs.core.next.call(null,inst_49049);
var inst_49049__$1 = inst_49059;
var state_49072__$1 = (function (){var statearr_49088 = state_49072;
(statearr_49088[(7)] = inst_49049__$1);

return statearr_49088;
})();
var statearr_49089_49114 = state_49072__$1;
(statearr_49089_49114[(2)] = null);

(statearr_49089_49114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto__))
;
return ((function (switch__48132__auto__,c__48244__auto__){
return (function() {
var cljs$core$async$state_machine__48133__auto__ = null;
var cljs$core$async$state_machine__48133__auto____0 = (function (){
var statearr_49093 = [null,null,null,null,null,null,null,null];
(statearr_49093[(0)] = cljs$core$async$state_machine__48133__auto__);

(statearr_49093[(1)] = (1));

return statearr_49093;
});
var cljs$core$async$state_machine__48133__auto____1 = (function (state_49072){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_49072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e49094){if((e49094 instanceof Object)){
var ex__48136__auto__ = e49094;
var statearr_49095_49115 = state_49072;
(statearr_49095_49115[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49116 = state_49072;
state_49072 = G__49116;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$state_machine__48133__auto__ = function(state_49072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48133__auto____1.call(this,state_49072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48133__auto____0;
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48133__auto____1;
return cljs$core$async$state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto__))
})();
var state__48246__auto__ = (function (){var statearr_49096 = f__48245__auto__.call(null);
(statearr_49096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto__);

return statearr_49096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto__))
);

return c__48244__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__45494__auto__ = (((_ == null))?null:_);
var m__45495__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,_);
} else {
var m__45495__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__45494__auto__ = (((m == null))?null:m);
var m__45495__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__45495__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__45494__auto__ = (((m == null))?null:m);
var m__45495__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,m,ch);
} else {
var m__45495__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__45494__auto__ = (((m == null))?null:m);
var m__45495__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,m);
} else {
var m__45495__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async49342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49342 = (function (ch,cs,meta49343){
this.ch = ch;
this.cs = cs;
this.meta49343 = meta49343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49344,meta49343__$1){
var self__ = this;
var _49344__$1 = this;
return (new cljs.core.async.t_cljs$core$async49342(self__.ch,self__.cs,meta49343__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49344){
var self__ = this;
var _49344__$1 = this;
return self__.meta49343;
});})(cs))
;

cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49342.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49342.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49343","meta49343",464091084,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async49342.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49342";

cljs.core.async.t_cljs$core$async49342.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__45437__auto__,writer__45438__auto__,opt__45439__auto__){
return cljs.core._write.call(null,writer__45438__auto__,"cljs.core.async/t_cljs$core$async49342");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async49342 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async49342(ch__$1,cs__$1,meta49343){
return (new cljs.core.async.t_cljs$core$async49342(ch__$1,cs__$1,meta49343));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async49342(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__48244__auto___49567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___49567,cs,m,dchan,dctr,done){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___49567,cs,m,dchan,dctr,done){
return (function (state_49479){
var state_val_49480 = (state_49479[(1)]);
if((state_val_49480 === (7))){
var inst_49475 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
var statearr_49481_49568 = state_49479__$1;
(statearr_49481_49568[(2)] = inst_49475);

(statearr_49481_49568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (20))){
var inst_49378 = (state_49479[(7)]);
var inst_49390 = cljs.core.first.call(null,inst_49378);
var inst_49391 = cljs.core.nth.call(null,inst_49390,(0),null);
var inst_49392 = cljs.core.nth.call(null,inst_49390,(1),null);
var state_49479__$1 = (function (){var statearr_49482 = state_49479;
(statearr_49482[(8)] = inst_49391);

return statearr_49482;
})();
if(cljs.core.truth_(inst_49392)){
var statearr_49483_49569 = state_49479__$1;
(statearr_49483_49569[(1)] = (22));

} else {
var statearr_49484_49570 = state_49479__$1;
(statearr_49484_49570[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (27))){
var inst_49420 = (state_49479[(9)]);
var inst_49427 = (state_49479[(10)]);
var inst_49347 = (state_49479[(11)]);
var inst_49422 = (state_49479[(12)]);
var inst_49427__$1 = cljs.core._nth.call(null,inst_49420,inst_49422);
var inst_49428 = cljs.core.async.put_BANG_.call(null,inst_49427__$1,inst_49347,done);
var state_49479__$1 = (function (){var statearr_49485 = state_49479;
(statearr_49485[(10)] = inst_49427__$1);

return statearr_49485;
})();
if(cljs.core.truth_(inst_49428)){
var statearr_49486_49571 = state_49479__$1;
(statearr_49486_49571[(1)] = (30));

} else {
var statearr_49487_49572 = state_49479__$1;
(statearr_49487_49572[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (1))){
var state_49479__$1 = state_49479;
var statearr_49488_49573 = state_49479__$1;
(statearr_49488_49573[(2)] = null);

(statearr_49488_49573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (24))){
var inst_49378 = (state_49479[(7)]);
var inst_49397 = (state_49479[(2)]);
var inst_49398 = cljs.core.next.call(null,inst_49378);
var inst_49356 = inst_49398;
var inst_49357 = null;
var inst_49358 = (0);
var inst_49359 = (0);
var state_49479__$1 = (function (){var statearr_49489 = state_49479;
(statearr_49489[(13)] = inst_49356);

(statearr_49489[(14)] = inst_49358);

(statearr_49489[(15)] = inst_49357);

(statearr_49489[(16)] = inst_49397);

(statearr_49489[(17)] = inst_49359);

return statearr_49489;
})();
var statearr_49490_49574 = state_49479__$1;
(statearr_49490_49574[(2)] = null);

(statearr_49490_49574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (39))){
var state_49479__$1 = state_49479;
var statearr_49494_49575 = state_49479__$1;
(statearr_49494_49575[(2)] = null);

(statearr_49494_49575[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (4))){
var inst_49347 = (state_49479[(11)]);
var inst_49347__$1 = (state_49479[(2)]);
var inst_49348 = (inst_49347__$1 == null);
var state_49479__$1 = (function (){var statearr_49495 = state_49479;
(statearr_49495[(11)] = inst_49347__$1);

return statearr_49495;
})();
if(cljs.core.truth_(inst_49348)){
var statearr_49496_49576 = state_49479__$1;
(statearr_49496_49576[(1)] = (5));

} else {
var statearr_49497_49577 = state_49479__$1;
(statearr_49497_49577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (15))){
var inst_49356 = (state_49479[(13)]);
var inst_49358 = (state_49479[(14)]);
var inst_49357 = (state_49479[(15)]);
var inst_49359 = (state_49479[(17)]);
var inst_49374 = (state_49479[(2)]);
var inst_49375 = (inst_49359 + (1));
var tmp49491 = inst_49356;
var tmp49492 = inst_49358;
var tmp49493 = inst_49357;
var inst_49356__$1 = tmp49491;
var inst_49357__$1 = tmp49493;
var inst_49358__$1 = tmp49492;
var inst_49359__$1 = inst_49375;
var state_49479__$1 = (function (){var statearr_49498 = state_49479;
(statearr_49498[(13)] = inst_49356__$1);

(statearr_49498[(14)] = inst_49358__$1);

(statearr_49498[(15)] = inst_49357__$1);

(statearr_49498[(18)] = inst_49374);

(statearr_49498[(17)] = inst_49359__$1);

return statearr_49498;
})();
var statearr_49499_49578 = state_49479__$1;
(statearr_49499_49578[(2)] = null);

(statearr_49499_49578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (21))){
var inst_49401 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
var statearr_49503_49579 = state_49479__$1;
(statearr_49503_49579[(2)] = inst_49401);

(statearr_49503_49579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (31))){
var inst_49427 = (state_49479[(10)]);
var inst_49431 = done.call(null,null);
var inst_49432 = cljs.core.async.untap_STAR_.call(null,m,inst_49427);
var state_49479__$1 = (function (){var statearr_49504 = state_49479;
(statearr_49504[(19)] = inst_49431);

return statearr_49504;
})();
var statearr_49505_49580 = state_49479__$1;
(statearr_49505_49580[(2)] = inst_49432);

(statearr_49505_49580[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (32))){
var inst_49420 = (state_49479[(9)]);
var inst_49419 = (state_49479[(20)]);
var inst_49421 = (state_49479[(21)]);
var inst_49422 = (state_49479[(12)]);
var inst_49434 = (state_49479[(2)]);
var inst_49435 = (inst_49422 + (1));
var tmp49500 = inst_49420;
var tmp49501 = inst_49419;
var tmp49502 = inst_49421;
var inst_49419__$1 = tmp49501;
var inst_49420__$1 = tmp49500;
var inst_49421__$1 = tmp49502;
var inst_49422__$1 = inst_49435;
var state_49479__$1 = (function (){var statearr_49506 = state_49479;
(statearr_49506[(9)] = inst_49420__$1);

(statearr_49506[(20)] = inst_49419__$1);

(statearr_49506[(22)] = inst_49434);

(statearr_49506[(21)] = inst_49421__$1);

(statearr_49506[(12)] = inst_49422__$1);

return statearr_49506;
})();
var statearr_49507_49581 = state_49479__$1;
(statearr_49507_49581[(2)] = null);

(statearr_49507_49581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (40))){
var inst_49447 = (state_49479[(23)]);
var inst_49451 = done.call(null,null);
var inst_49452 = cljs.core.async.untap_STAR_.call(null,m,inst_49447);
var state_49479__$1 = (function (){var statearr_49508 = state_49479;
(statearr_49508[(24)] = inst_49451);

return statearr_49508;
})();
var statearr_49509_49582 = state_49479__$1;
(statearr_49509_49582[(2)] = inst_49452);

(statearr_49509_49582[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (33))){
var inst_49438 = (state_49479[(25)]);
var inst_49440 = cljs.core.chunked_seq_QMARK_.call(null,inst_49438);
var state_49479__$1 = state_49479;
if(inst_49440){
var statearr_49510_49583 = state_49479__$1;
(statearr_49510_49583[(1)] = (36));

} else {
var statearr_49511_49584 = state_49479__$1;
(statearr_49511_49584[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (13))){
var inst_49368 = (state_49479[(26)]);
var inst_49371 = cljs.core.async.close_BANG_.call(null,inst_49368);
var state_49479__$1 = state_49479;
var statearr_49512_49585 = state_49479__$1;
(statearr_49512_49585[(2)] = inst_49371);

(statearr_49512_49585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (22))){
var inst_49391 = (state_49479[(8)]);
var inst_49394 = cljs.core.async.close_BANG_.call(null,inst_49391);
var state_49479__$1 = state_49479;
var statearr_49513_49586 = state_49479__$1;
(statearr_49513_49586[(2)] = inst_49394);

(statearr_49513_49586[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (36))){
var inst_49438 = (state_49479[(25)]);
var inst_49442 = cljs.core.chunk_first.call(null,inst_49438);
var inst_49443 = cljs.core.chunk_rest.call(null,inst_49438);
var inst_49444 = cljs.core.count.call(null,inst_49442);
var inst_49419 = inst_49443;
var inst_49420 = inst_49442;
var inst_49421 = inst_49444;
var inst_49422 = (0);
var state_49479__$1 = (function (){var statearr_49514 = state_49479;
(statearr_49514[(9)] = inst_49420);

(statearr_49514[(20)] = inst_49419);

(statearr_49514[(21)] = inst_49421);

(statearr_49514[(12)] = inst_49422);

return statearr_49514;
})();
var statearr_49515_49587 = state_49479__$1;
(statearr_49515_49587[(2)] = null);

(statearr_49515_49587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (41))){
var inst_49438 = (state_49479[(25)]);
var inst_49454 = (state_49479[(2)]);
var inst_49455 = cljs.core.next.call(null,inst_49438);
var inst_49419 = inst_49455;
var inst_49420 = null;
var inst_49421 = (0);
var inst_49422 = (0);
var state_49479__$1 = (function (){var statearr_49516 = state_49479;
(statearr_49516[(9)] = inst_49420);

(statearr_49516[(27)] = inst_49454);

(statearr_49516[(20)] = inst_49419);

(statearr_49516[(21)] = inst_49421);

(statearr_49516[(12)] = inst_49422);

return statearr_49516;
})();
var statearr_49517_49588 = state_49479__$1;
(statearr_49517_49588[(2)] = null);

(statearr_49517_49588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (43))){
var state_49479__$1 = state_49479;
var statearr_49518_49589 = state_49479__$1;
(statearr_49518_49589[(2)] = null);

(statearr_49518_49589[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (29))){
var inst_49463 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
var statearr_49519_49590 = state_49479__$1;
(statearr_49519_49590[(2)] = inst_49463);

(statearr_49519_49590[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (44))){
var inst_49472 = (state_49479[(2)]);
var state_49479__$1 = (function (){var statearr_49520 = state_49479;
(statearr_49520[(28)] = inst_49472);

return statearr_49520;
})();
var statearr_49521_49591 = state_49479__$1;
(statearr_49521_49591[(2)] = null);

(statearr_49521_49591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (6))){
var inst_49411 = (state_49479[(29)]);
var inst_49410 = cljs.core.deref.call(null,cs);
var inst_49411__$1 = cljs.core.keys.call(null,inst_49410);
var inst_49412 = cljs.core.count.call(null,inst_49411__$1);
var inst_49413 = cljs.core.reset_BANG_.call(null,dctr,inst_49412);
var inst_49418 = cljs.core.seq.call(null,inst_49411__$1);
var inst_49419 = inst_49418;
var inst_49420 = null;
var inst_49421 = (0);
var inst_49422 = (0);
var state_49479__$1 = (function (){var statearr_49522 = state_49479;
(statearr_49522[(29)] = inst_49411__$1);

(statearr_49522[(9)] = inst_49420);

(statearr_49522[(20)] = inst_49419);

(statearr_49522[(30)] = inst_49413);

(statearr_49522[(21)] = inst_49421);

(statearr_49522[(12)] = inst_49422);

return statearr_49522;
})();
var statearr_49523_49592 = state_49479__$1;
(statearr_49523_49592[(2)] = null);

(statearr_49523_49592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (28))){
var inst_49438 = (state_49479[(25)]);
var inst_49419 = (state_49479[(20)]);
var inst_49438__$1 = cljs.core.seq.call(null,inst_49419);
var state_49479__$1 = (function (){var statearr_49524 = state_49479;
(statearr_49524[(25)] = inst_49438__$1);

return statearr_49524;
})();
if(inst_49438__$1){
var statearr_49525_49593 = state_49479__$1;
(statearr_49525_49593[(1)] = (33));

} else {
var statearr_49526_49594 = state_49479__$1;
(statearr_49526_49594[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (25))){
var inst_49421 = (state_49479[(21)]);
var inst_49422 = (state_49479[(12)]);
var inst_49424 = (inst_49422 < inst_49421);
var inst_49425 = inst_49424;
var state_49479__$1 = state_49479;
if(cljs.core.truth_(inst_49425)){
var statearr_49527_49595 = state_49479__$1;
(statearr_49527_49595[(1)] = (27));

} else {
var statearr_49528_49596 = state_49479__$1;
(statearr_49528_49596[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (34))){
var state_49479__$1 = state_49479;
var statearr_49529_49597 = state_49479__$1;
(statearr_49529_49597[(2)] = null);

(statearr_49529_49597[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (17))){
var state_49479__$1 = state_49479;
var statearr_49530_49598 = state_49479__$1;
(statearr_49530_49598[(2)] = null);

(statearr_49530_49598[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (3))){
var inst_49477 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49479__$1,inst_49477);
} else {
if((state_val_49480 === (12))){
var inst_49406 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
var statearr_49531_49599 = state_49479__$1;
(statearr_49531_49599[(2)] = inst_49406);

(statearr_49531_49599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (2))){
var state_49479__$1 = state_49479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49479__$1,(4),ch);
} else {
if((state_val_49480 === (23))){
var state_49479__$1 = state_49479;
var statearr_49532_49600 = state_49479__$1;
(statearr_49532_49600[(2)] = null);

(statearr_49532_49600[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (35))){
var inst_49461 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
var statearr_49533_49601 = state_49479__$1;
(statearr_49533_49601[(2)] = inst_49461);

(statearr_49533_49601[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (19))){
var inst_49378 = (state_49479[(7)]);
var inst_49382 = cljs.core.chunk_first.call(null,inst_49378);
var inst_49383 = cljs.core.chunk_rest.call(null,inst_49378);
var inst_49384 = cljs.core.count.call(null,inst_49382);
var inst_49356 = inst_49383;
var inst_49357 = inst_49382;
var inst_49358 = inst_49384;
var inst_49359 = (0);
var state_49479__$1 = (function (){var statearr_49534 = state_49479;
(statearr_49534[(13)] = inst_49356);

(statearr_49534[(14)] = inst_49358);

(statearr_49534[(15)] = inst_49357);

(statearr_49534[(17)] = inst_49359);

return statearr_49534;
})();
var statearr_49535_49602 = state_49479__$1;
(statearr_49535_49602[(2)] = null);

(statearr_49535_49602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (11))){
var inst_49356 = (state_49479[(13)]);
var inst_49378 = (state_49479[(7)]);
var inst_49378__$1 = cljs.core.seq.call(null,inst_49356);
var state_49479__$1 = (function (){var statearr_49536 = state_49479;
(statearr_49536[(7)] = inst_49378__$1);

return statearr_49536;
})();
if(inst_49378__$1){
var statearr_49537_49603 = state_49479__$1;
(statearr_49537_49603[(1)] = (16));

} else {
var statearr_49538_49604 = state_49479__$1;
(statearr_49538_49604[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (9))){
var inst_49408 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
var statearr_49539_49605 = state_49479__$1;
(statearr_49539_49605[(2)] = inst_49408);

(statearr_49539_49605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (5))){
var inst_49354 = cljs.core.deref.call(null,cs);
var inst_49355 = cljs.core.seq.call(null,inst_49354);
var inst_49356 = inst_49355;
var inst_49357 = null;
var inst_49358 = (0);
var inst_49359 = (0);
var state_49479__$1 = (function (){var statearr_49540 = state_49479;
(statearr_49540[(13)] = inst_49356);

(statearr_49540[(14)] = inst_49358);

(statearr_49540[(15)] = inst_49357);

(statearr_49540[(17)] = inst_49359);

return statearr_49540;
})();
var statearr_49541_49606 = state_49479__$1;
(statearr_49541_49606[(2)] = null);

(statearr_49541_49606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (14))){
var state_49479__$1 = state_49479;
var statearr_49542_49607 = state_49479__$1;
(statearr_49542_49607[(2)] = null);

(statearr_49542_49607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (45))){
var inst_49469 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
var statearr_49543_49608 = state_49479__$1;
(statearr_49543_49608[(2)] = inst_49469);

(statearr_49543_49608[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (26))){
var inst_49411 = (state_49479[(29)]);
var inst_49465 = (state_49479[(2)]);
var inst_49466 = cljs.core.seq.call(null,inst_49411);
var state_49479__$1 = (function (){var statearr_49544 = state_49479;
(statearr_49544[(31)] = inst_49465);

return statearr_49544;
})();
if(inst_49466){
var statearr_49545_49609 = state_49479__$1;
(statearr_49545_49609[(1)] = (42));

} else {
var statearr_49546_49610 = state_49479__$1;
(statearr_49546_49610[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (16))){
var inst_49378 = (state_49479[(7)]);
var inst_49380 = cljs.core.chunked_seq_QMARK_.call(null,inst_49378);
var state_49479__$1 = state_49479;
if(inst_49380){
var statearr_49547_49611 = state_49479__$1;
(statearr_49547_49611[(1)] = (19));

} else {
var statearr_49548_49612 = state_49479__$1;
(statearr_49548_49612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (38))){
var inst_49458 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
var statearr_49549_49613 = state_49479__$1;
(statearr_49549_49613[(2)] = inst_49458);

(statearr_49549_49613[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (30))){
var state_49479__$1 = state_49479;
var statearr_49550_49614 = state_49479__$1;
(statearr_49550_49614[(2)] = null);

(statearr_49550_49614[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (10))){
var inst_49357 = (state_49479[(15)]);
var inst_49359 = (state_49479[(17)]);
var inst_49367 = cljs.core._nth.call(null,inst_49357,inst_49359);
var inst_49368 = cljs.core.nth.call(null,inst_49367,(0),null);
var inst_49369 = cljs.core.nth.call(null,inst_49367,(1),null);
var state_49479__$1 = (function (){var statearr_49551 = state_49479;
(statearr_49551[(26)] = inst_49368);

return statearr_49551;
})();
if(cljs.core.truth_(inst_49369)){
var statearr_49552_49615 = state_49479__$1;
(statearr_49552_49615[(1)] = (13));

} else {
var statearr_49553_49616 = state_49479__$1;
(statearr_49553_49616[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (18))){
var inst_49404 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
var statearr_49554_49617 = state_49479__$1;
(statearr_49554_49617[(2)] = inst_49404);

(statearr_49554_49617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (42))){
var state_49479__$1 = state_49479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49479__$1,(45),dchan);
} else {
if((state_val_49480 === (37))){
var inst_49438 = (state_49479[(25)]);
var inst_49447 = (state_49479[(23)]);
var inst_49347 = (state_49479[(11)]);
var inst_49447__$1 = cljs.core.first.call(null,inst_49438);
var inst_49448 = cljs.core.async.put_BANG_.call(null,inst_49447__$1,inst_49347,done);
var state_49479__$1 = (function (){var statearr_49555 = state_49479;
(statearr_49555[(23)] = inst_49447__$1);

return statearr_49555;
})();
if(cljs.core.truth_(inst_49448)){
var statearr_49556_49618 = state_49479__$1;
(statearr_49556_49618[(1)] = (39));

} else {
var statearr_49557_49619 = state_49479__$1;
(statearr_49557_49619[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (8))){
var inst_49358 = (state_49479[(14)]);
var inst_49359 = (state_49479[(17)]);
var inst_49361 = (inst_49359 < inst_49358);
var inst_49362 = inst_49361;
var state_49479__$1 = state_49479;
if(cljs.core.truth_(inst_49362)){
var statearr_49558_49620 = state_49479__$1;
(statearr_49558_49620[(1)] = (10));

} else {
var statearr_49559_49621 = state_49479__$1;
(statearr_49559_49621[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___49567,cs,m,dchan,dctr,done))
;
return ((function (switch__48132__auto__,c__48244__auto___49567,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__48133__auto__ = null;
var cljs$core$async$mult_$_state_machine__48133__auto____0 = (function (){
var statearr_49563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49563[(0)] = cljs$core$async$mult_$_state_machine__48133__auto__);

(statearr_49563[(1)] = (1));

return statearr_49563;
});
var cljs$core$async$mult_$_state_machine__48133__auto____1 = (function (state_49479){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_49479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e49564){if((e49564 instanceof Object)){
var ex__48136__auto__ = e49564;
var statearr_49565_49622 = state_49479;
(statearr_49565_49622[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49623 = state_49479;
state_49479 = G__49623;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48133__auto__ = function(state_49479){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48133__auto____1.call(this,state_49479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48133__auto____0;
cljs$core$async$mult_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48133__auto____1;
return cljs$core$async$mult_$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___49567,cs,m,dchan,dctr,done))
})();
var state__48246__auto__ = (function (){var statearr_49566 = f__48245__auto__.call(null);
(statearr_49566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___49567);

return statearr_49566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___49567,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args49624 = [];
var len__45939__auto___49627 = arguments.length;
var i__45940__auto___49628 = (0);
while(true){
if((i__45940__auto___49628 < len__45939__auto___49627)){
args49624.push((arguments[i__45940__auto___49628]));

var G__49629 = (i__45940__auto___49628 + (1));
i__45940__auto___49628 = G__49629;
continue;
} else {
}
break;
}

var G__49626 = args49624.length;
switch (G__49626) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49624.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__45494__auto__ = (((m == null))?null:m);
var m__45495__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,m,ch);
} else {
var m__45495__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__45494__auto__ = (((m == null))?null:m);
var m__45495__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,m,ch);
} else {
var m__45495__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__45494__auto__ = (((m == null))?null:m);
var m__45495__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,m);
} else {
var m__45495__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__45494__auto__ = (((m == null))?null:m);
var m__45495__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,m,state_map);
} else {
var m__45495__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__45494__auto__ = (((m == null))?null:m);
var m__45495__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,m,mode);
} else {
var m__45495__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__45946__auto__ = [];
var len__45939__auto___49641 = arguments.length;
var i__45940__auto___49642 = (0);
while(true){
if((i__45940__auto___49642 < len__45939__auto___49641)){
args__45946__auto__.push((arguments[i__45940__auto___49642]));

var G__49643 = (i__45940__auto___49642 + (1));
i__45940__auto___49642 = G__49643;
continue;
} else {
}
break;
}

var argseq__45947__auto__ = ((((3) < args__45946__auto__.length))?(new cljs.core.IndexedSeq(args__45946__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45947__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49635){
var map__49636 = p__49635;
var map__49636__$1 = ((((!((map__49636 == null)))?((((map__49636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49636):map__49636);
var opts = map__49636__$1;
var statearr_49638_49644 = state;
(statearr_49638_49644[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__49636,map__49636__$1,opts){
return (function (val){
var statearr_49639_49645 = state;
(statearr_49639_49645[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__49636,map__49636__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_49640_49646 = state;
(statearr_49640_49646[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49631){
var G__49632 = cljs.core.first.call(null,seq49631);
var seq49631__$1 = cljs.core.next.call(null,seq49631);
var G__49633 = cljs.core.first.call(null,seq49631__$1);
var seq49631__$2 = cljs.core.next.call(null,seq49631__$1);
var G__49634 = cljs.core.first.call(null,seq49631__$2);
var seq49631__$3 = cljs.core.next.call(null,seq49631__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49632,G__49633,G__49634,seq49631__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async49814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49814 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta49815){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta49815 = meta49815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49816,meta49815__$1){
var self__ = this;
var _49816__$1 = this;
return (new cljs.core.async.t_cljs$core$async49814(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta49815__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49814.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49816){
var self__ = this;
var _49816__$1 = this;
return self__.meta49815;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49814.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49814.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49814.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49814.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49814.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49814.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49814.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49814.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49814.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta49815","meta49815",57196427,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49814";

cljs.core.async.t_cljs$core$async49814.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__45437__auto__,writer__45438__auto__,opt__45439__auto__){
return cljs.core._write.call(null,writer__45438__auto__,"cljs.core.async/t_cljs$core$async49814");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async49814 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async49814(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49815){
return (new cljs.core.async.t_cljs$core$async49814(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49815));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async49814(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48244__auto___49981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___49981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___49981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49918){
var state_val_49919 = (state_49918[(1)]);
if((state_val_49919 === (7))){
var inst_49833 = (state_49918[(2)]);
var state_49918__$1 = state_49918;
var statearr_49920_49982 = state_49918__$1;
(statearr_49920_49982[(2)] = inst_49833);

(statearr_49920_49982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (20))){
var inst_49845 = (state_49918[(7)]);
var state_49918__$1 = state_49918;
var statearr_49921_49983 = state_49918__$1;
(statearr_49921_49983[(2)] = inst_49845);

(statearr_49921_49983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (27))){
var state_49918__$1 = state_49918;
var statearr_49922_49984 = state_49918__$1;
(statearr_49922_49984[(2)] = null);

(statearr_49922_49984[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (1))){
var inst_49820 = (state_49918[(8)]);
var inst_49820__$1 = calc_state.call(null);
var inst_49822 = (inst_49820__$1 == null);
var inst_49823 = cljs.core.not.call(null,inst_49822);
var state_49918__$1 = (function (){var statearr_49923 = state_49918;
(statearr_49923[(8)] = inst_49820__$1);

return statearr_49923;
})();
if(inst_49823){
var statearr_49924_49985 = state_49918__$1;
(statearr_49924_49985[(1)] = (2));

} else {
var statearr_49925_49986 = state_49918__$1;
(statearr_49925_49986[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (24))){
var inst_49892 = (state_49918[(9)]);
var inst_49869 = (state_49918[(10)]);
var inst_49878 = (state_49918[(11)]);
var inst_49892__$1 = inst_49869.call(null,inst_49878);
var state_49918__$1 = (function (){var statearr_49926 = state_49918;
(statearr_49926[(9)] = inst_49892__$1);

return statearr_49926;
})();
if(cljs.core.truth_(inst_49892__$1)){
var statearr_49927_49987 = state_49918__$1;
(statearr_49927_49987[(1)] = (29));

} else {
var statearr_49928_49988 = state_49918__$1;
(statearr_49928_49988[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (4))){
var inst_49836 = (state_49918[(2)]);
var state_49918__$1 = state_49918;
if(cljs.core.truth_(inst_49836)){
var statearr_49929_49989 = state_49918__$1;
(statearr_49929_49989[(1)] = (8));

} else {
var statearr_49930_49990 = state_49918__$1;
(statearr_49930_49990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (15))){
var inst_49863 = (state_49918[(2)]);
var state_49918__$1 = state_49918;
if(cljs.core.truth_(inst_49863)){
var statearr_49931_49991 = state_49918__$1;
(statearr_49931_49991[(1)] = (19));

} else {
var statearr_49932_49992 = state_49918__$1;
(statearr_49932_49992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (21))){
var inst_49868 = (state_49918[(12)]);
var inst_49868__$1 = (state_49918[(2)]);
var inst_49869 = cljs.core.get.call(null,inst_49868__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49870 = cljs.core.get.call(null,inst_49868__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49871 = cljs.core.get.call(null,inst_49868__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49918__$1 = (function (){var statearr_49933 = state_49918;
(statearr_49933[(13)] = inst_49870);

(statearr_49933[(12)] = inst_49868__$1);

(statearr_49933[(10)] = inst_49869);

return statearr_49933;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49918__$1,(22),inst_49871);
} else {
if((state_val_49919 === (31))){
var inst_49900 = (state_49918[(2)]);
var state_49918__$1 = state_49918;
if(cljs.core.truth_(inst_49900)){
var statearr_49934_49993 = state_49918__$1;
(statearr_49934_49993[(1)] = (32));

} else {
var statearr_49935_49994 = state_49918__$1;
(statearr_49935_49994[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (32))){
var inst_49877 = (state_49918[(14)]);
var state_49918__$1 = state_49918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49918__$1,(35),out,inst_49877);
} else {
if((state_val_49919 === (33))){
var inst_49868 = (state_49918[(12)]);
var inst_49845 = inst_49868;
var state_49918__$1 = (function (){var statearr_49936 = state_49918;
(statearr_49936[(7)] = inst_49845);

return statearr_49936;
})();
var statearr_49937_49995 = state_49918__$1;
(statearr_49937_49995[(2)] = null);

(statearr_49937_49995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (13))){
var inst_49845 = (state_49918[(7)]);
var inst_49852 = inst_49845.cljs$lang$protocol_mask$partition0$;
var inst_49853 = (inst_49852 & (64));
var inst_49854 = inst_49845.cljs$core$ISeq$;
var inst_49855 = (cljs.core.PROTOCOL_SENTINEL === inst_49854);
var inst_49856 = (inst_49853) || (inst_49855);
var state_49918__$1 = state_49918;
if(cljs.core.truth_(inst_49856)){
var statearr_49938_49996 = state_49918__$1;
(statearr_49938_49996[(1)] = (16));

} else {
var statearr_49939_49997 = state_49918__$1;
(statearr_49939_49997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (22))){
var inst_49877 = (state_49918[(14)]);
var inst_49878 = (state_49918[(11)]);
var inst_49876 = (state_49918[(2)]);
var inst_49877__$1 = cljs.core.nth.call(null,inst_49876,(0),null);
var inst_49878__$1 = cljs.core.nth.call(null,inst_49876,(1),null);
var inst_49879 = (inst_49877__$1 == null);
var inst_49880 = cljs.core._EQ_.call(null,inst_49878__$1,change);
var inst_49881 = (inst_49879) || (inst_49880);
var state_49918__$1 = (function (){var statearr_49940 = state_49918;
(statearr_49940[(14)] = inst_49877__$1);

(statearr_49940[(11)] = inst_49878__$1);

return statearr_49940;
})();
if(cljs.core.truth_(inst_49881)){
var statearr_49941_49998 = state_49918__$1;
(statearr_49941_49998[(1)] = (23));

} else {
var statearr_49942_49999 = state_49918__$1;
(statearr_49942_49999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (36))){
var inst_49868 = (state_49918[(12)]);
var inst_49845 = inst_49868;
var state_49918__$1 = (function (){var statearr_49943 = state_49918;
(statearr_49943[(7)] = inst_49845);

return statearr_49943;
})();
var statearr_49944_50000 = state_49918__$1;
(statearr_49944_50000[(2)] = null);

(statearr_49944_50000[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (29))){
var inst_49892 = (state_49918[(9)]);
var state_49918__$1 = state_49918;
var statearr_49945_50001 = state_49918__$1;
(statearr_49945_50001[(2)] = inst_49892);

(statearr_49945_50001[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (6))){
var state_49918__$1 = state_49918;
var statearr_49946_50002 = state_49918__$1;
(statearr_49946_50002[(2)] = false);

(statearr_49946_50002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (28))){
var inst_49888 = (state_49918[(2)]);
var inst_49889 = calc_state.call(null);
var inst_49845 = inst_49889;
var state_49918__$1 = (function (){var statearr_49947 = state_49918;
(statearr_49947[(7)] = inst_49845);

(statearr_49947[(15)] = inst_49888);

return statearr_49947;
})();
var statearr_49948_50003 = state_49918__$1;
(statearr_49948_50003[(2)] = null);

(statearr_49948_50003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (25))){
var inst_49914 = (state_49918[(2)]);
var state_49918__$1 = state_49918;
var statearr_49949_50004 = state_49918__$1;
(statearr_49949_50004[(2)] = inst_49914);

(statearr_49949_50004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (34))){
var inst_49912 = (state_49918[(2)]);
var state_49918__$1 = state_49918;
var statearr_49950_50005 = state_49918__$1;
(statearr_49950_50005[(2)] = inst_49912);

(statearr_49950_50005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (17))){
var state_49918__$1 = state_49918;
var statearr_49951_50006 = state_49918__$1;
(statearr_49951_50006[(2)] = false);

(statearr_49951_50006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (3))){
var state_49918__$1 = state_49918;
var statearr_49952_50007 = state_49918__$1;
(statearr_49952_50007[(2)] = false);

(statearr_49952_50007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (12))){
var inst_49916 = (state_49918[(2)]);
var state_49918__$1 = state_49918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49918__$1,inst_49916);
} else {
if((state_val_49919 === (2))){
var inst_49820 = (state_49918[(8)]);
var inst_49825 = inst_49820.cljs$lang$protocol_mask$partition0$;
var inst_49826 = (inst_49825 & (64));
var inst_49827 = inst_49820.cljs$core$ISeq$;
var inst_49828 = (cljs.core.PROTOCOL_SENTINEL === inst_49827);
var inst_49829 = (inst_49826) || (inst_49828);
var state_49918__$1 = state_49918;
if(cljs.core.truth_(inst_49829)){
var statearr_49953_50008 = state_49918__$1;
(statearr_49953_50008[(1)] = (5));

} else {
var statearr_49954_50009 = state_49918__$1;
(statearr_49954_50009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (23))){
var inst_49877 = (state_49918[(14)]);
var inst_49883 = (inst_49877 == null);
var state_49918__$1 = state_49918;
if(cljs.core.truth_(inst_49883)){
var statearr_49955_50010 = state_49918__$1;
(statearr_49955_50010[(1)] = (26));

} else {
var statearr_49956_50011 = state_49918__$1;
(statearr_49956_50011[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (35))){
var inst_49903 = (state_49918[(2)]);
var state_49918__$1 = state_49918;
if(cljs.core.truth_(inst_49903)){
var statearr_49957_50012 = state_49918__$1;
(statearr_49957_50012[(1)] = (36));

} else {
var statearr_49958_50013 = state_49918__$1;
(statearr_49958_50013[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (19))){
var inst_49845 = (state_49918[(7)]);
var inst_49865 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49845);
var state_49918__$1 = state_49918;
var statearr_49959_50014 = state_49918__$1;
(statearr_49959_50014[(2)] = inst_49865);

(statearr_49959_50014[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (11))){
var inst_49845 = (state_49918[(7)]);
var inst_49849 = (inst_49845 == null);
var inst_49850 = cljs.core.not.call(null,inst_49849);
var state_49918__$1 = state_49918;
if(inst_49850){
var statearr_49960_50015 = state_49918__$1;
(statearr_49960_50015[(1)] = (13));

} else {
var statearr_49961_50016 = state_49918__$1;
(statearr_49961_50016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (9))){
var inst_49820 = (state_49918[(8)]);
var state_49918__$1 = state_49918;
var statearr_49962_50017 = state_49918__$1;
(statearr_49962_50017[(2)] = inst_49820);

(statearr_49962_50017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (5))){
var state_49918__$1 = state_49918;
var statearr_49963_50018 = state_49918__$1;
(statearr_49963_50018[(2)] = true);

(statearr_49963_50018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (14))){
var state_49918__$1 = state_49918;
var statearr_49964_50019 = state_49918__$1;
(statearr_49964_50019[(2)] = false);

(statearr_49964_50019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (26))){
var inst_49878 = (state_49918[(11)]);
var inst_49885 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49878);
var state_49918__$1 = state_49918;
var statearr_49965_50020 = state_49918__$1;
(statearr_49965_50020[(2)] = inst_49885);

(statearr_49965_50020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (16))){
var state_49918__$1 = state_49918;
var statearr_49966_50021 = state_49918__$1;
(statearr_49966_50021[(2)] = true);

(statearr_49966_50021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (38))){
var inst_49908 = (state_49918[(2)]);
var state_49918__$1 = state_49918;
var statearr_49967_50022 = state_49918__$1;
(statearr_49967_50022[(2)] = inst_49908);

(statearr_49967_50022[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (30))){
var inst_49870 = (state_49918[(13)]);
var inst_49869 = (state_49918[(10)]);
var inst_49878 = (state_49918[(11)]);
var inst_49895 = cljs.core.empty_QMARK_.call(null,inst_49869);
var inst_49896 = inst_49870.call(null,inst_49878);
var inst_49897 = cljs.core.not.call(null,inst_49896);
var inst_49898 = (inst_49895) && (inst_49897);
var state_49918__$1 = state_49918;
var statearr_49968_50023 = state_49918__$1;
(statearr_49968_50023[(2)] = inst_49898);

(statearr_49968_50023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (10))){
var inst_49820 = (state_49918[(8)]);
var inst_49841 = (state_49918[(2)]);
var inst_49842 = cljs.core.get.call(null,inst_49841,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49843 = cljs.core.get.call(null,inst_49841,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49844 = cljs.core.get.call(null,inst_49841,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49845 = inst_49820;
var state_49918__$1 = (function (){var statearr_49969 = state_49918;
(statearr_49969[(7)] = inst_49845);

(statearr_49969[(16)] = inst_49843);

(statearr_49969[(17)] = inst_49842);

(statearr_49969[(18)] = inst_49844);

return statearr_49969;
})();
var statearr_49970_50024 = state_49918__$1;
(statearr_49970_50024[(2)] = null);

(statearr_49970_50024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (18))){
var inst_49860 = (state_49918[(2)]);
var state_49918__$1 = state_49918;
var statearr_49971_50025 = state_49918__$1;
(statearr_49971_50025[(2)] = inst_49860);

(statearr_49971_50025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (37))){
var state_49918__$1 = state_49918;
var statearr_49972_50026 = state_49918__$1;
(statearr_49972_50026[(2)] = null);

(statearr_49972_50026[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49919 === (8))){
var inst_49820 = (state_49918[(8)]);
var inst_49838 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49820);
var state_49918__$1 = state_49918;
var statearr_49973_50027 = state_49918__$1;
(statearr_49973_50027[(2)] = inst_49838);

(statearr_49973_50027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___49981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__48132__auto__,c__48244__auto___49981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__48133__auto__ = null;
var cljs$core$async$mix_$_state_machine__48133__auto____0 = (function (){
var statearr_49977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49977[(0)] = cljs$core$async$mix_$_state_machine__48133__auto__);

(statearr_49977[(1)] = (1));

return statearr_49977;
});
var cljs$core$async$mix_$_state_machine__48133__auto____1 = (function (state_49918){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_49918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e49978){if((e49978 instanceof Object)){
var ex__48136__auto__ = e49978;
var statearr_49979_50028 = state_49918;
(statearr_49979_50028[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50029 = state_49918;
state_49918 = G__50029;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48133__auto__ = function(state_49918){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48133__auto____1.call(this,state_49918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48133__auto____0;
cljs$core$async$mix_$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48133__auto____1;
return cljs$core$async$mix_$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___49981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__48246__auto__ = (function (){var statearr_49980 = f__48245__auto__.call(null);
(statearr_49980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___49981);

return statearr_49980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___49981,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__45494__auto__ = (((p == null))?null:p);
var m__45495__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__45495__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__45494__auto__ = (((p == null))?null:p);
var m__45495__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,p,v,ch);
} else {
var m__45495__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args50030 = [];
var len__45939__auto___50033 = arguments.length;
var i__45940__auto___50034 = (0);
while(true){
if((i__45940__auto___50034 < len__45939__auto___50033)){
args50030.push((arguments[i__45940__auto___50034]));

var G__50035 = (i__45940__auto___50034 + (1));
i__45940__auto___50034 = G__50035;
continue;
} else {
}
break;
}

var G__50032 = args50030.length;
switch (G__50032) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50030.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__45494__auto__ = (((p == null))?null:p);
var m__45495__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,p);
} else {
var m__45495__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__45494__auto__ = (((p == null))?null:p);
var m__45495__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__45494__auto__)]);
if(!((m__45495__auto__ == null))){
return m__45495__auto__.call(null,p,v);
} else {
var m__45495__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__45495__auto____$1 == null))){
return m__45495__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args50038 = [];
var len__45939__auto___50163 = arguments.length;
var i__45940__auto___50164 = (0);
while(true){
if((i__45940__auto___50164 < len__45939__auto___50163)){
args50038.push((arguments[i__45940__auto___50164]));

var G__50165 = (i__45940__auto___50164 + (1));
i__45940__auto___50164 = G__50165;
continue;
} else {
}
break;
}

var G__50040 = args50038.length;
switch (G__50040) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50038.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__44826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__44826__auto__)){
return or__44826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__44826__auto__,mults){
return (function (p1__50037_SHARP_){
if(cljs.core.truth_(p1__50037_SHARP_.call(null,topic))){
return p1__50037_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__50037_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__44826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async50041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50041 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50042){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50042 = meta50042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50043,meta50042__$1){
var self__ = this;
var _50043__$1 = this;
return (new cljs.core.async.t_cljs$core$async50041(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50042__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50043){
var self__ = this;
var _50043__$1 = this;
return self__.meta50042;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50041.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50041.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50041.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50041.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50041.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50041.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50041.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50042","meta50042",1095712105,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50041";

cljs.core.async.t_cljs$core$async50041.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__45437__auto__,writer__45438__auto__,opt__45439__auto__){
return cljs.core._write.call(null,writer__45438__auto__,"cljs.core.async/t_cljs$core$async50041");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async50041 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async50041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50042){
return (new cljs.core.async.t_cljs$core$async50041(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50042));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async50041(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48244__auto___50167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___50167,mults,ensure_mult,p){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___50167,mults,ensure_mult,p){
return (function (state_50115){
var state_val_50116 = (state_50115[(1)]);
if((state_val_50116 === (7))){
var inst_50111 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
var statearr_50117_50168 = state_50115__$1;
(statearr_50117_50168[(2)] = inst_50111);

(statearr_50117_50168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (20))){
var state_50115__$1 = state_50115;
var statearr_50118_50169 = state_50115__$1;
(statearr_50118_50169[(2)] = null);

(statearr_50118_50169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (1))){
var state_50115__$1 = state_50115;
var statearr_50119_50170 = state_50115__$1;
(statearr_50119_50170[(2)] = null);

(statearr_50119_50170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (24))){
var inst_50094 = (state_50115[(7)]);
var inst_50103 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_50094);
var state_50115__$1 = state_50115;
var statearr_50120_50171 = state_50115__$1;
(statearr_50120_50171[(2)] = inst_50103);

(statearr_50120_50171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (4))){
var inst_50046 = (state_50115[(8)]);
var inst_50046__$1 = (state_50115[(2)]);
var inst_50047 = (inst_50046__$1 == null);
var state_50115__$1 = (function (){var statearr_50121 = state_50115;
(statearr_50121[(8)] = inst_50046__$1);

return statearr_50121;
})();
if(cljs.core.truth_(inst_50047)){
var statearr_50122_50172 = state_50115__$1;
(statearr_50122_50172[(1)] = (5));

} else {
var statearr_50123_50173 = state_50115__$1;
(statearr_50123_50173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (15))){
var inst_50088 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
var statearr_50124_50174 = state_50115__$1;
(statearr_50124_50174[(2)] = inst_50088);

(statearr_50124_50174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (21))){
var inst_50108 = (state_50115[(2)]);
var state_50115__$1 = (function (){var statearr_50125 = state_50115;
(statearr_50125[(9)] = inst_50108);

return statearr_50125;
})();
var statearr_50126_50175 = state_50115__$1;
(statearr_50126_50175[(2)] = null);

(statearr_50126_50175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (13))){
var inst_50070 = (state_50115[(10)]);
var inst_50072 = cljs.core.chunked_seq_QMARK_.call(null,inst_50070);
var state_50115__$1 = state_50115;
if(inst_50072){
var statearr_50127_50176 = state_50115__$1;
(statearr_50127_50176[(1)] = (16));

} else {
var statearr_50128_50177 = state_50115__$1;
(statearr_50128_50177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (22))){
var inst_50100 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
if(cljs.core.truth_(inst_50100)){
var statearr_50129_50178 = state_50115__$1;
(statearr_50129_50178[(1)] = (23));

} else {
var statearr_50130_50179 = state_50115__$1;
(statearr_50130_50179[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (6))){
var inst_50046 = (state_50115[(8)]);
var inst_50094 = (state_50115[(7)]);
var inst_50096 = (state_50115[(11)]);
var inst_50094__$1 = topic_fn.call(null,inst_50046);
var inst_50095 = cljs.core.deref.call(null,mults);
var inst_50096__$1 = cljs.core.get.call(null,inst_50095,inst_50094__$1);
var state_50115__$1 = (function (){var statearr_50131 = state_50115;
(statearr_50131[(7)] = inst_50094__$1);

(statearr_50131[(11)] = inst_50096__$1);

return statearr_50131;
})();
if(cljs.core.truth_(inst_50096__$1)){
var statearr_50132_50180 = state_50115__$1;
(statearr_50132_50180[(1)] = (19));

} else {
var statearr_50133_50181 = state_50115__$1;
(statearr_50133_50181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (25))){
var inst_50105 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
var statearr_50134_50182 = state_50115__$1;
(statearr_50134_50182[(2)] = inst_50105);

(statearr_50134_50182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (17))){
var inst_50070 = (state_50115[(10)]);
var inst_50079 = cljs.core.first.call(null,inst_50070);
var inst_50080 = cljs.core.async.muxch_STAR_.call(null,inst_50079);
var inst_50081 = cljs.core.async.close_BANG_.call(null,inst_50080);
var inst_50082 = cljs.core.next.call(null,inst_50070);
var inst_50056 = inst_50082;
var inst_50057 = null;
var inst_50058 = (0);
var inst_50059 = (0);
var state_50115__$1 = (function (){var statearr_50135 = state_50115;
(statearr_50135[(12)] = inst_50058);

(statearr_50135[(13)] = inst_50057);

(statearr_50135[(14)] = inst_50059);

(statearr_50135[(15)] = inst_50056);

(statearr_50135[(16)] = inst_50081);

return statearr_50135;
})();
var statearr_50136_50183 = state_50115__$1;
(statearr_50136_50183[(2)] = null);

(statearr_50136_50183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (3))){
var inst_50113 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50115__$1,inst_50113);
} else {
if((state_val_50116 === (12))){
var inst_50090 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
var statearr_50137_50184 = state_50115__$1;
(statearr_50137_50184[(2)] = inst_50090);

(statearr_50137_50184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (2))){
var state_50115__$1 = state_50115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50115__$1,(4),ch);
} else {
if((state_val_50116 === (23))){
var state_50115__$1 = state_50115;
var statearr_50138_50185 = state_50115__$1;
(statearr_50138_50185[(2)] = null);

(statearr_50138_50185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (19))){
var inst_50046 = (state_50115[(8)]);
var inst_50096 = (state_50115[(11)]);
var inst_50098 = cljs.core.async.muxch_STAR_.call(null,inst_50096);
var state_50115__$1 = state_50115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50115__$1,(22),inst_50098,inst_50046);
} else {
if((state_val_50116 === (11))){
var inst_50070 = (state_50115[(10)]);
var inst_50056 = (state_50115[(15)]);
var inst_50070__$1 = cljs.core.seq.call(null,inst_50056);
var state_50115__$1 = (function (){var statearr_50139 = state_50115;
(statearr_50139[(10)] = inst_50070__$1);

return statearr_50139;
})();
if(inst_50070__$1){
var statearr_50140_50186 = state_50115__$1;
(statearr_50140_50186[(1)] = (13));

} else {
var statearr_50141_50187 = state_50115__$1;
(statearr_50141_50187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (9))){
var inst_50092 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
var statearr_50142_50188 = state_50115__$1;
(statearr_50142_50188[(2)] = inst_50092);

(statearr_50142_50188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (5))){
var inst_50053 = cljs.core.deref.call(null,mults);
var inst_50054 = cljs.core.vals.call(null,inst_50053);
var inst_50055 = cljs.core.seq.call(null,inst_50054);
var inst_50056 = inst_50055;
var inst_50057 = null;
var inst_50058 = (0);
var inst_50059 = (0);
var state_50115__$1 = (function (){var statearr_50143 = state_50115;
(statearr_50143[(12)] = inst_50058);

(statearr_50143[(13)] = inst_50057);

(statearr_50143[(14)] = inst_50059);

(statearr_50143[(15)] = inst_50056);

return statearr_50143;
})();
var statearr_50144_50189 = state_50115__$1;
(statearr_50144_50189[(2)] = null);

(statearr_50144_50189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (14))){
var state_50115__$1 = state_50115;
var statearr_50148_50190 = state_50115__$1;
(statearr_50148_50190[(2)] = null);

(statearr_50148_50190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (16))){
var inst_50070 = (state_50115[(10)]);
var inst_50074 = cljs.core.chunk_first.call(null,inst_50070);
var inst_50075 = cljs.core.chunk_rest.call(null,inst_50070);
var inst_50076 = cljs.core.count.call(null,inst_50074);
var inst_50056 = inst_50075;
var inst_50057 = inst_50074;
var inst_50058 = inst_50076;
var inst_50059 = (0);
var state_50115__$1 = (function (){var statearr_50149 = state_50115;
(statearr_50149[(12)] = inst_50058);

(statearr_50149[(13)] = inst_50057);

(statearr_50149[(14)] = inst_50059);

(statearr_50149[(15)] = inst_50056);

return statearr_50149;
})();
var statearr_50150_50191 = state_50115__$1;
(statearr_50150_50191[(2)] = null);

(statearr_50150_50191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (10))){
var inst_50058 = (state_50115[(12)]);
var inst_50057 = (state_50115[(13)]);
var inst_50059 = (state_50115[(14)]);
var inst_50056 = (state_50115[(15)]);
var inst_50064 = cljs.core._nth.call(null,inst_50057,inst_50059);
var inst_50065 = cljs.core.async.muxch_STAR_.call(null,inst_50064);
var inst_50066 = cljs.core.async.close_BANG_.call(null,inst_50065);
var inst_50067 = (inst_50059 + (1));
var tmp50145 = inst_50058;
var tmp50146 = inst_50057;
var tmp50147 = inst_50056;
var inst_50056__$1 = tmp50147;
var inst_50057__$1 = tmp50146;
var inst_50058__$1 = tmp50145;
var inst_50059__$1 = inst_50067;
var state_50115__$1 = (function (){var statearr_50151 = state_50115;
(statearr_50151[(12)] = inst_50058__$1);

(statearr_50151[(17)] = inst_50066);

(statearr_50151[(13)] = inst_50057__$1);

(statearr_50151[(14)] = inst_50059__$1);

(statearr_50151[(15)] = inst_50056__$1);

return statearr_50151;
})();
var statearr_50152_50192 = state_50115__$1;
(statearr_50152_50192[(2)] = null);

(statearr_50152_50192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (18))){
var inst_50085 = (state_50115[(2)]);
var state_50115__$1 = state_50115;
var statearr_50153_50193 = state_50115__$1;
(statearr_50153_50193[(2)] = inst_50085);

(statearr_50153_50193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50116 === (8))){
var inst_50058 = (state_50115[(12)]);
var inst_50059 = (state_50115[(14)]);
var inst_50061 = (inst_50059 < inst_50058);
var inst_50062 = inst_50061;
var state_50115__$1 = state_50115;
if(cljs.core.truth_(inst_50062)){
var statearr_50154_50194 = state_50115__$1;
(statearr_50154_50194[(1)] = (10));

} else {
var statearr_50155_50195 = state_50115__$1;
(statearr_50155_50195[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___50167,mults,ensure_mult,p))
;
return ((function (switch__48132__auto__,c__48244__auto___50167,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__48133__auto__ = null;
var cljs$core$async$state_machine__48133__auto____0 = (function (){
var statearr_50159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50159[(0)] = cljs$core$async$state_machine__48133__auto__);

(statearr_50159[(1)] = (1));

return statearr_50159;
});
var cljs$core$async$state_machine__48133__auto____1 = (function (state_50115){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_50115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e50160){if((e50160 instanceof Object)){
var ex__48136__auto__ = e50160;
var statearr_50161_50196 = state_50115;
(statearr_50161_50196[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50197 = state_50115;
state_50115 = G__50197;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$state_machine__48133__auto__ = function(state_50115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48133__auto____1.call(this,state_50115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48133__auto____0;
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48133__auto____1;
return cljs$core$async$state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___50167,mults,ensure_mult,p))
})();
var state__48246__auto__ = (function (){var statearr_50162 = f__48245__auto__.call(null);
(statearr_50162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___50167);

return statearr_50162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___50167,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args50198 = [];
var len__45939__auto___50201 = arguments.length;
var i__45940__auto___50202 = (0);
while(true){
if((i__45940__auto___50202 < len__45939__auto___50201)){
args50198.push((arguments[i__45940__auto___50202]));

var G__50203 = (i__45940__auto___50202 + (1));
i__45940__auto___50202 = G__50203;
continue;
} else {
}
break;
}

var G__50200 = args50198.length;
switch (G__50200) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50198.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args50205 = [];
var len__45939__auto___50208 = arguments.length;
var i__45940__auto___50209 = (0);
while(true){
if((i__45940__auto___50209 < len__45939__auto___50208)){
args50205.push((arguments[i__45940__auto___50209]));

var G__50210 = (i__45940__auto___50209 + (1));
i__45940__auto___50209 = G__50210;
continue;
} else {
}
break;
}

var G__50207 = args50205.length;
switch (G__50207) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50205.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args50212 = [];
var len__45939__auto___50283 = arguments.length;
var i__45940__auto___50284 = (0);
while(true){
if((i__45940__auto___50284 < len__45939__auto___50283)){
args50212.push((arguments[i__45940__auto___50284]));

var G__50285 = (i__45940__auto___50284 + (1));
i__45940__auto___50284 = G__50285;
continue;
} else {
}
break;
}

var G__50214 = args50212.length;
switch (G__50214) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50212.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__48244__auto___50287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___50287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___50287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50253){
var state_val_50254 = (state_50253[(1)]);
if((state_val_50254 === (7))){
var state_50253__$1 = state_50253;
var statearr_50255_50288 = state_50253__$1;
(statearr_50255_50288[(2)] = null);

(statearr_50255_50288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50254 === (1))){
var state_50253__$1 = state_50253;
var statearr_50256_50289 = state_50253__$1;
(statearr_50256_50289[(2)] = null);

(statearr_50256_50289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50254 === (4))){
var inst_50217 = (state_50253[(7)]);
var inst_50219 = (inst_50217 < cnt);
var state_50253__$1 = state_50253;
if(cljs.core.truth_(inst_50219)){
var statearr_50257_50290 = state_50253__$1;
(statearr_50257_50290[(1)] = (6));

} else {
var statearr_50258_50291 = state_50253__$1;
(statearr_50258_50291[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50254 === (15))){
var inst_50249 = (state_50253[(2)]);
var state_50253__$1 = state_50253;
var statearr_50259_50292 = state_50253__$1;
(statearr_50259_50292[(2)] = inst_50249);

(statearr_50259_50292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50254 === (13))){
var inst_50242 = cljs.core.async.close_BANG_.call(null,out);
var state_50253__$1 = state_50253;
var statearr_50260_50293 = state_50253__$1;
(statearr_50260_50293[(2)] = inst_50242);

(statearr_50260_50293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50254 === (6))){
var state_50253__$1 = state_50253;
var statearr_50261_50294 = state_50253__$1;
(statearr_50261_50294[(2)] = null);

(statearr_50261_50294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50254 === (3))){
var inst_50251 = (state_50253[(2)]);
var state_50253__$1 = state_50253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50253__$1,inst_50251);
} else {
if((state_val_50254 === (12))){
var inst_50239 = (state_50253[(8)]);
var inst_50239__$1 = (state_50253[(2)]);
var inst_50240 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_50239__$1);
var state_50253__$1 = (function (){var statearr_50262 = state_50253;
(statearr_50262[(8)] = inst_50239__$1);

return statearr_50262;
})();
if(cljs.core.truth_(inst_50240)){
var statearr_50263_50295 = state_50253__$1;
(statearr_50263_50295[(1)] = (13));

} else {
var statearr_50264_50296 = state_50253__$1;
(statearr_50264_50296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50254 === (2))){
var inst_50216 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_50217 = (0);
var state_50253__$1 = (function (){var statearr_50265 = state_50253;
(statearr_50265[(7)] = inst_50217);

(statearr_50265[(9)] = inst_50216);

return statearr_50265;
})();
var statearr_50266_50297 = state_50253__$1;
(statearr_50266_50297[(2)] = null);

(statearr_50266_50297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50254 === (11))){
var inst_50217 = (state_50253[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50253,(10),Object,null,(9));
var inst_50226 = chs__$1.call(null,inst_50217);
var inst_50227 = done.call(null,inst_50217);
var inst_50228 = cljs.core.async.take_BANG_.call(null,inst_50226,inst_50227);
var state_50253__$1 = state_50253;
var statearr_50267_50298 = state_50253__$1;
(statearr_50267_50298[(2)] = inst_50228);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50253__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50254 === (9))){
var inst_50217 = (state_50253[(7)]);
var inst_50230 = (state_50253[(2)]);
var inst_50231 = (inst_50217 + (1));
var inst_50217__$1 = inst_50231;
var state_50253__$1 = (function (){var statearr_50268 = state_50253;
(statearr_50268[(7)] = inst_50217__$1);

(statearr_50268[(10)] = inst_50230);

return statearr_50268;
})();
var statearr_50269_50299 = state_50253__$1;
(statearr_50269_50299[(2)] = null);

(statearr_50269_50299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50254 === (5))){
var inst_50237 = (state_50253[(2)]);
var state_50253__$1 = (function (){var statearr_50270 = state_50253;
(statearr_50270[(11)] = inst_50237);

return statearr_50270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50253__$1,(12),dchan);
} else {
if((state_val_50254 === (14))){
var inst_50239 = (state_50253[(8)]);
var inst_50244 = cljs.core.apply.call(null,f,inst_50239);
var state_50253__$1 = state_50253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50253__$1,(16),out,inst_50244);
} else {
if((state_val_50254 === (16))){
var inst_50246 = (state_50253[(2)]);
var state_50253__$1 = (function (){var statearr_50271 = state_50253;
(statearr_50271[(12)] = inst_50246);

return statearr_50271;
})();
var statearr_50272_50300 = state_50253__$1;
(statearr_50272_50300[(2)] = null);

(statearr_50272_50300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50254 === (10))){
var inst_50221 = (state_50253[(2)]);
var inst_50222 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_50253__$1 = (function (){var statearr_50273 = state_50253;
(statearr_50273[(13)] = inst_50221);

return statearr_50273;
})();
var statearr_50274_50301 = state_50253__$1;
(statearr_50274_50301[(2)] = inst_50222);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50253__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50254 === (8))){
var inst_50235 = (state_50253[(2)]);
var state_50253__$1 = state_50253;
var statearr_50275_50302 = state_50253__$1;
(statearr_50275_50302[(2)] = inst_50235);

(statearr_50275_50302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___50287,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__48132__auto__,c__48244__auto___50287,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__48133__auto__ = null;
var cljs$core$async$state_machine__48133__auto____0 = (function (){
var statearr_50279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50279[(0)] = cljs$core$async$state_machine__48133__auto__);

(statearr_50279[(1)] = (1));

return statearr_50279;
});
var cljs$core$async$state_machine__48133__auto____1 = (function (state_50253){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_50253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e50280){if((e50280 instanceof Object)){
var ex__48136__auto__ = e50280;
var statearr_50281_50303 = state_50253;
(statearr_50281_50303[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50304 = state_50253;
state_50253 = G__50304;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$state_machine__48133__auto__ = function(state_50253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48133__auto____1.call(this,state_50253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48133__auto____0;
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48133__auto____1;
return cljs$core$async$state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___50287,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__48246__auto__ = (function (){var statearr_50282 = f__48245__auto__.call(null);
(statearr_50282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___50287);

return statearr_50282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___50287,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args50306 = [];
var len__45939__auto___50364 = arguments.length;
var i__45940__auto___50365 = (0);
while(true){
if((i__45940__auto___50365 < len__45939__auto___50364)){
args50306.push((arguments[i__45940__auto___50365]));

var G__50366 = (i__45940__auto___50365 + (1));
i__45940__auto___50365 = G__50366;
continue;
} else {
}
break;
}

var G__50308 = args50306.length;
switch (G__50308) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50306.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48244__auto___50368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___50368,out){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___50368,out){
return (function (state_50340){
var state_val_50341 = (state_50340[(1)]);
if((state_val_50341 === (7))){
var inst_50319 = (state_50340[(7)]);
var inst_50320 = (state_50340[(8)]);
var inst_50319__$1 = (state_50340[(2)]);
var inst_50320__$1 = cljs.core.nth.call(null,inst_50319__$1,(0),null);
var inst_50321 = cljs.core.nth.call(null,inst_50319__$1,(1),null);
var inst_50322 = (inst_50320__$1 == null);
var state_50340__$1 = (function (){var statearr_50342 = state_50340;
(statearr_50342[(7)] = inst_50319__$1);

(statearr_50342[(9)] = inst_50321);

(statearr_50342[(8)] = inst_50320__$1);

return statearr_50342;
})();
if(cljs.core.truth_(inst_50322)){
var statearr_50343_50369 = state_50340__$1;
(statearr_50343_50369[(1)] = (8));

} else {
var statearr_50344_50370 = state_50340__$1;
(statearr_50344_50370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50341 === (1))){
var inst_50309 = cljs.core.vec.call(null,chs);
var inst_50310 = inst_50309;
var state_50340__$1 = (function (){var statearr_50345 = state_50340;
(statearr_50345[(10)] = inst_50310);

return statearr_50345;
})();
var statearr_50346_50371 = state_50340__$1;
(statearr_50346_50371[(2)] = null);

(statearr_50346_50371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50341 === (4))){
var inst_50310 = (state_50340[(10)]);
var state_50340__$1 = state_50340;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50340__$1,(7),inst_50310);
} else {
if((state_val_50341 === (6))){
var inst_50336 = (state_50340[(2)]);
var state_50340__$1 = state_50340;
var statearr_50347_50372 = state_50340__$1;
(statearr_50347_50372[(2)] = inst_50336);

(statearr_50347_50372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50341 === (3))){
var inst_50338 = (state_50340[(2)]);
var state_50340__$1 = state_50340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50340__$1,inst_50338);
} else {
if((state_val_50341 === (2))){
var inst_50310 = (state_50340[(10)]);
var inst_50312 = cljs.core.count.call(null,inst_50310);
var inst_50313 = (inst_50312 > (0));
var state_50340__$1 = state_50340;
if(cljs.core.truth_(inst_50313)){
var statearr_50349_50373 = state_50340__$1;
(statearr_50349_50373[(1)] = (4));

} else {
var statearr_50350_50374 = state_50340__$1;
(statearr_50350_50374[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50341 === (11))){
var inst_50310 = (state_50340[(10)]);
var inst_50329 = (state_50340[(2)]);
var tmp50348 = inst_50310;
var inst_50310__$1 = tmp50348;
var state_50340__$1 = (function (){var statearr_50351 = state_50340;
(statearr_50351[(10)] = inst_50310__$1);

(statearr_50351[(11)] = inst_50329);

return statearr_50351;
})();
var statearr_50352_50375 = state_50340__$1;
(statearr_50352_50375[(2)] = null);

(statearr_50352_50375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50341 === (9))){
var inst_50320 = (state_50340[(8)]);
var state_50340__$1 = state_50340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50340__$1,(11),out,inst_50320);
} else {
if((state_val_50341 === (5))){
var inst_50334 = cljs.core.async.close_BANG_.call(null,out);
var state_50340__$1 = state_50340;
var statearr_50353_50376 = state_50340__$1;
(statearr_50353_50376[(2)] = inst_50334);

(statearr_50353_50376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50341 === (10))){
var inst_50332 = (state_50340[(2)]);
var state_50340__$1 = state_50340;
var statearr_50354_50377 = state_50340__$1;
(statearr_50354_50377[(2)] = inst_50332);

(statearr_50354_50377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50341 === (8))){
var inst_50319 = (state_50340[(7)]);
var inst_50310 = (state_50340[(10)]);
var inst_50321 = (state_50340[(9)]);
var inst_50320 = (state_50340[(8)]);
var inst_50324 = (function (){var cs = inst_50310;
var vec__50315 = inst_50319;
var v = inst_50320;
var c = inst_50321;
return ((function (cs,vec__50315,v,c,inst_50319,inst_50310,inst_50321,inst_50320,state_val_50341,c__48244__auto___50368,out){
return (function (p1__50305_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__50305_SHARP_);
});
;})(cs,vec__50315,v,c,inst_50319,inst_50310,inst_50321,inst_50320,state_val_50341,c__48244__auto___50368,out))
})();
var inst_50325 = cljs.core.filterv.call(null,inst_50324,inst_50310);
var inst_50310__$1 = inst_50325;
var state_50340__$1 = (function (){var statearr_50355 = state_50340;
(statearr_50355[(10)] = inst_50310__$1);

return statearr_50355;
})();
var statearr_50356_50378 = state_50340__$1;
(statearr_50356_50378[(2)] = null);

(statearr_50356_50378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___50368,out))
;
return ((function (switch__48132__auto__,c__48244__auto___50368,out){
return (function() {
var cljs$core$async$state_machine__48133__auto__ = null;
var cljs$core$async$state_machine__48133__auto____0 = (function (){
var statearr_50360 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50360[(0)] = cljs$core$async$state_machine__48133__auto__);

(statearr_50360[(1)] = (1));

return statearr_50360;
});
var cljs$core$async$state_machine__48133__auto____1 = (function (state_50340){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_50340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e50361){if((e50361 instanceof Object)){
var ex__48136__auto__ = e50361;
var statearr_50362_50379 = state_50340;
(statearr_50362_50379[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50380 = state_50340;
state_50340 = G__50380;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$state_machine__48133__auto__ = function(state_50340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48133__auto____1.call(this,state_50340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48133__auto____0;
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48133__auto____1;
return cljs$core$async$state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___50368,out))
})();
var state__48246__auto__ = (function (){var statearr_50363 = f__48245__auto__.call(null);
(statearr_50363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___50368);

return statearr_50363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___50368,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args50381 = [];
var len__45939__auto___50430 = arguments.length;
var i__45940__auto___50431 = (0);
while(true){
if((i__45940__auto___50431 < len__45939__auto___50430)){
args50381.push((arguments[i__45940__auto___50431]));

var G__50432 = (i__45940__auto___50431 + (1));
i__45940__auto___50431 = G__50432;
continue;
} else {
}
break;
}

var G__50383 = args50381.length;
switch (G__50383) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50381.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48244__auto___50434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___50434,out){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___50434,out){
return (function (state_50407){
var state_val_50408 = (state_50407[(1)]);
if((state_val_50408 === (7))){
var inst_50389 = (state_50407[(7)]);
var inst_50389__$1 = (state_50407[(2)]);
var inst_50390 = (inst_50389__$1 == null);
var inst_50391 = cljs.core.not.call(null,inst_50390);
var state_50407__$1 = (function (){var statearr_50409 = state_50407;
(statearr_50409[(7)] = inst_50389__$1);

return statearr_50409;
})();
if(inst_50391){
var statearr_50410_50435 = state_50407__$1;
(statearr_50410_50435[(1)] = (8));

} else {
var statearr_50411_50436 = state_50407__$1;
(statearr_50411_50436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50408 === (1))){
var inst_50384 = (0);
var state_50407__$1 = (function (){var statearr_50412 = state_50407;
(statearr_50412[(8)] = inst_50384);

return statearr_50412;
})();
var statearr_50413_50437 = state_50407__$1;
(statearr_50413_50437[(2)] = null);

(statearr_50413_50437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50408 === (4))){
var state_50407__$1 = state_50407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50407__$1,(7),ch);
} else {
if((state_val_50408 === (6))){
var inst_50402 = (state_50407[(2)]);
var state_50407__$1 = state_50407;
var statearr_50414_50438 = state_50407__$1;
(statearr_50414_50438[(2)] = inst_50402);

(statearr_50414_50438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50408 === (3))){
var inst_50404 = (state_50407[(2)]);
var inst_50405 = cljs.core.async.close_BANG_.call(null,out);
var state_50407__$1 = (function (){var statearr_50415 = state_50407;
(statearr_50415[(9)] = inst_50404);

return statearr_50415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50407__$1,inst_50405);
} else {
if((state_val_50408 === (2))){
var inst_50384 = (state_50407[(8)]);
var inst_50386 = (inst_50384 < n);
var state_50407__$1 = state_50407;
if(cljs.core.truth_(inst_50386)){
var statearr_50416_50439 = state_50407__$1;
(statearr_50416_50439[(1)] = (4));

} else {
var statearr_50417_50440 = state_50407__$1;
(statearr_50417_50440[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50408 === (11))){
var inst_50384 = (state_50407[(8)]);
var inst_50394 = (state_50407[(2)]);
var inst_50395 = (inst_50384 + (1));
var inst_50384__$1 = inst_50395;
var state_50407__$1 = (function (){var statearr_50418 = state_50407;
(statearr_50418[(8)] = inst_50384__$1);

(statearr_50418[(10)] = inst_50394);

return statearr_50418;
})();
var statearr_50419_50441 = state_50407__$1;
(statearr_50419_50441[(2)] = null);

(statearr_50419_50441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50408 === (9))){
var state_50407__$1 = state_50407;
var statearr_50420_50442 = state_50407__$1;
(statearr_50420_50442[(2)] = null);

(statearr_50420_50442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50408 === (5))){
var state_50407__$1 = state_50407;
var statearr_50421_50443 = state_50407__$1;
(statearr_50421_50443[(2)] = null);

(statearr_50421_50443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50408 === (10))){
var inst_50399 = (state_50407[(2)]);
var state_50407__$1 = state_50407;
var statearr_50422_50444 = state_50407__$1;
(statearr_50422_50444[(2)] = inst_50399);

(statearr_50422_50444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50408 === (8))){
var inst_50389 = (state_50407[(7)]);
var state_50407__$1 = state_50407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50407__$1,(11),out,inst_50389);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___50434,out))
;
return ((function (switch__48132__auto__,c__48244__auto___50434,out){
return (function() {
var cljs$core$async$state_machine__48133__auto__ = null;
var cljs$core$async$state_machine__48133__auto____0 = (function (){
var statearr_50426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50426[(0)] = cljs$core$async$state_machine__48133__auto__);

(statearr_50426[(1)] = (1));

return statearr_50426;
});
var cljs$core$async$state_machine__48133__auto____1 = (function (state_50407){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_50407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e50427){if((e50427 instanceof Object)){
var ex__48136__auto__ = e50427;
var statearr_50428_50445 = state_50407;
(statearr_50428_50445[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50446 = state_50407;
state_50407 = G__50446;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$state_machine__48133__auto__ = function(state_50407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48133__auto____1.call(this,state_50407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48133__auto____0;
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48133__auto____1;
return cljs$core$async$state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___50434,out))
})();
var state__48246__auto__ = (function (){var statearr_50429 = f__48245__auto__.call(null);
(statearr_50429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___50434);

return statearr_50429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___50434,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50454 = (function (f,ch,meta50455){
this.f = f;
this.ch = ch;
this.meta50455 = meta50455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50456,meta50455__$1){
var self__ = this;
var _50456__$1 = this;
return (new cljs.core.async.t_cljs$core$async50454(self__.f,self__.ch,meta50455__$1));
});

cljs.core.async.t_cljs$core$async50454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50456){
var self__ = this;
var _50456__$1 = this;
return self__.meta50455;
});

cljs.core.async.t_cljs$core$async50454.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50454.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50454.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50454.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50454.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async50457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50457 = (function (f,ch,meta50455,_,fn1,meta50458){
this.f = f;
this.ch = ch;
this.meta50455 = meta50455;
this._ = _;
this.fn1 = fn1;
this.meta50458 = meta50458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50459,meta50458__$1){
var self__ = this;
var _50459__$1 = this;
return (new cljs.core.async.t_cljs$core$async50457(self__.f,self__.ch,self__.meta50455,self__._,self__.fn1,meta50458__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async50457.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50459){
var self__ = this;
var _50459__$1 = this;
return self__.meta50458;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50457.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50457.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50457.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50457.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__50447_SHARP_){
return f1.call(null,(((p1__50447_SHARP_ == null))?null:self__.f.call(null,p1__50447_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async50457.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50455","meta50455",901504571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50454","cljs.core.async/t_cljs$core$async50454",-1744831036,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50458","meta50458",465017699,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50457";

cljs.core.async.t_cljs$core$async50457.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__45437__auto__,writer__45438__auto__,opt__45439__auto__){
return cljs.core._write.call(null,writer__45438__auto__,"cljs.core.async/t_cljs$core$async50457");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async50457 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50457(f__$1,ch__$1,meta50455__$1,___$2,fn1__$1,meta50458){
return (new cljs.core.async.t_cljs$core$async50457(f__$1,ch__$1,meta50455__$1,___$2,fn1__$1,meta50458));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async50457(self__.f,self__.ch,self__.meta50455,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__44814__auto__ = ret;
if(cljs.core.truth_(and__44814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__44814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async50454.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50454.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async50454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50455","meta50455",901504571,null)], null);
});

cljs.core.async.t_cljs$core$async50454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50454";

cljs.core.async.t_cljs$core$async50454.cljs$lang$ctorPrWriter = (function (this__45437__auto__,writer__45438__auto__,opt__45439__auto__){
return cljs.core._write.call(null,writer__45438__auto__,"cljs.core.async/t_cljs$core$async50454");
});

cljs.core.async.__GT_t_cljs$core$async50454 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50454(f__$1,ch__$1,meta50455){
return (new cljs.core.async.t_cljs$core$async50454(f__$1,ch__$1,meta50455));
});

}

return (new cljs.core.async.t_cljs$core$async50454(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50463 = (function (f,ch,meta50464){
this.f = f;
this.ch = ch;
this.meta50464 = meta50464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50465,meta50464__$1){
var self__ = this;
var _50465__$1 = this;
return (new cljs.core.async.t_cljs$core$async50463(self__.f,self__.ch,meta50464__$1));
});

cljs.core.async.t_cljs$core$async50463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50465){
var self__ = this;
var _50465__$1 = this;
return self__.meta50464;
});

cljs.core.async.t_cljs$core$async50463.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50463.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50463.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50463.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50463.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50463.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async50463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50464","meta50464",722270670,null)], null);
});

cljs.core.async.t_cljs$core$async50463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50463";

cljs.core.async.t_cljs$core$async50463.cljs$lang$ctorPrWriter = (function (this__45437__auto__,writer__45438__auto__,opt__45439__auto__){
return cljs.core._write.call(null,writer__45438__auto__,"cljs.core.async/t_cljs$core$async50463");
});

cljs.core.async.__GT_t_cljs$core$async50463 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50463(f__$1,ch__$1,meta50464){
return (new cljs.core.async.t_cljs$core$async50463(f__$1,ch__$1,meta50464));
});

}

return (new cljs.core.async.t_cljs$core$async50463(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async50469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50469 = (function (p,ch,meta50470){
this.p = p;
this.ch = ch;
this.meta50470 = meta50470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50471,meta50470__$1){
var self__ = this;
var _50471__$1 = this;
return (new cljs.core.async.t_cljs$core$async50469(self__.p,self__.ch,meta50470__$1));
});

cljs.core.async.t_cljs$core$async50469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50471){
var self__ = this;
var _50471__$1 = this;
return self__.meta50470;
});

cljs.core.async.t_cljs$core$async50469.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50469.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50469.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50469.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async50469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50470","meta50470",1782561800,null)], null);
});

cljs.core.async.t_cljs$core$async50469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50469";

cljs.core.async.t_cljs$core$async50469.cljs$lang$ctorPrWriter = (function (this__45437__auto__,writer__45438__auto__,opt__45439__auto__){
return cljs.core._write.call(null,writer__45438__auto__,"cljs.core.async/t_cljs$core$async50469");
});

cljs.core.async.__GT_t_cljs$core$async50469 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50469(p__$1,ch__$1,meta50470){
return (new cljs.core.async.t_cljs$core$async50469(p__$1,ch__$1,meta50470));
});

}

return (new cljs.core.async.t_cljs$core$async50469(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args50472 = [];
var len__45939__auto___50516 = arguments.length;
var i__45940__auto___50517 = (0);
while(true){
if((i__45940__auto___50517 < len__45939__auto___50516)){
args50472.push((arguments[i__45940__auto___50517]));

var G__50518 = (i__45940__auto___50517 + (1));
i__45940__auto___50517 = G__50518;
continue;
} else {
}
break;
}

var G__50474 = args50472.length;
switch (G__50474) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50472.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48244__auto___50520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___50520,out){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___50520,out){
return (function (state_50495){
var state_val_50496 = (state_50495[(1)]);
if((state_val_50496 === (7))){
var inst_50491 = (state_50495[(2)]);
var state_50495__$1 = state_50495;
var statearr_50497_50521 = state_50495__$1;
(statearr_50497_50521[(2)] = inst_50491);

(statearr_50497_50521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (1))){
var state_50495__$1 = state_50495;
var statearr_50498_50522 = state_50495__$1;
(statearr_50498_50522[(2)] = null);

(statearr_50498_50522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (4))){
var inst_50477 = (state_50495[(7)]);
var inst_50477__$1 = (state_50495[(2)]);
var inst_50478 = (inst_50477__$1 == null);
var state_50495__$1 = (function (){var statearr_50499 = state_50495;
(statearr_50499[(7)] = inst_50477__$1);

return statearr_50499;
})();
if(cljs.core.truth_(inst_50478)){
var statearr_50500_50523 = state_50495__$1;
(statearr_50500_50523[(1)] = (5));

} else {
var statearr_50501_50524 = state_50495__$1;
(statearr_50501_50524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (6))){
var inst_50477 = (state_50495[(7)]);
var inst_50482 = p.call(null,inst_50477);
var state_50495__$1 = state_50495;
if(cljs.core.truth_(inst_50482)){
var statearr_50502_50525 = state_50495__$1;
(statearr_50502_50525[(1)] = (8));

} else {
var statearr_50503_50526 = state_50495__$1;
(statearr_50503_50526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (3))){
var inst_50493 = (state_50495[(2)]);
var state_50495__$1 = state_50495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50495__$1,inst_50493);
} else {
if((state_val_50496 === (2))){
var state_50495__$1 = state_50495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50495__$1,(4),ch);
} else {
if((state_val_50496 === (11))){
var inst_50485 = (state_50495[(2)]);
var state_50495__$1 = state_50495;
var statearr_50504_50527 = state_50495__$1;
(statearr_50504_50527[(2)] = inst_50485);

(statearr_50504_50527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (9))){
var state_50495__$1 = state_50495;
var statearr_50505_50528 = state_50495__$1;
(statearr_50505_50528[(2)] = null);

(statearr_50505_50528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (5))){
var inst_50480 = cljs.core.async.close_BANG_.call(null,out);
var state_50495__$1 = state_50495;
var statearr_50506_50529 = state_50495__$1;
(statearr_50506_50529[(2)] = inst_50480);

(statearr_50506_50529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (10))){
var inst_50488 = (state_50495[(2)]);
var state_50495__$1 = (function (){var statearr_50507 = state_50495;
(statearr_50507[(8)] = inst_50488);

return statearr_50507;
})();
var statearr_50508_50530 = state_50495__$1;
(statearr_50508_50530[(2)] = null);

(statearr_50508_50530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (8))){
var inst_50477 = (state_50495[(7)]);
var state_50495__$1 = state_50495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50495__$1,(11),out,inst_50477);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___50520,out))
;
return ((function (switch__48132__auto__,c__48244__auto___50520,out){
return (function() {
var cljs$core$async$state_machine__48133__auto__ = null;
var cljs$core$async$state_machine__48133__auto____0 = (function (){
var statearr_50512 = [null,null,null,null,null,null,null,null,null];
(statearr_50512[(0)] = cljs$core$async$state_machine__48133__auto__);

(statearr_50512[(1)] = (1));

return statearr_50512;
});
var cljs$core$async$state_machine__48133__auto____1 = (function (state_50495){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_50495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e50513){if((e50513 instanceof Object)){
var ex__48136__auto__ = e50513;
var statearr_50514_50531 = state_50495;
(statearr_50514_50531[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50532 = state_50495;
state_50495 = G__50532;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$state_machine__48133__auto__ = function(state_50495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48133__auto____1.call(this,state_50495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48133__auto____0;
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48133__auto____1;
return cljs$core$async$state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___50520,out))
})();
var state__48246__auto__ = (function (){var statearr_50515 = f__48245__auto__.call(null);
(statearr_50515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___50520);

return statearr_50515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___50520,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args50533 = [];
var len__45939__auto___50536 = arguments.length;
var i__45940__auto___50537 = (0);
while(true){
if((i__45940__auto___50537 < len__45939__auto___50536)){
args50533.push((arguments[i__45940__auto___50537]));

var G__50538 = (i__45940__auto___50537 + (1));
i__45940__auto___50537 = G__50538;
continue;
} else {
}
break;
}

var G__50535 = args50533.length;
switch (G__50535) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50533.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48244__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto__){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto__){
return (function (state_50705){
var state_val_50706 = (state_50705[(1)]);
if((state_val_50706 === (7))){
var inst_50701 = (state_50705[(2)]);
var state_50705__$1 = state_50705;
var statearr_50707_50748 = state_50705__$1;
(statearr_50707_50748[(2)] = inst_50701);

(statearr_50707_50748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (20))){
var inst_50671 = (state_50705[(7)]);
var inst_50682 = (state_50705[(2)]);
var inst_50683 = cljs.core.next.call(null,inst_50671);
var inst_50657 = inst_50683;
var inst_50658 = null;
var inst_50659 = (0);
var inst_50660 = (0);
var state_50705__$1 = (function (){var statearr_50708 = state_50705;
(statearr_50708[(8)] = inst_50659);

(statearr_50708[(9)] = inst_50658);

(statearr_50708[(10)] = inst_50682);

(statearr_50708[(11)] = inst_50660);

(statearr_50708[(12)] = inst_50657);

return statearr_50708;
})();
var statearr_50709_50749 = state_50705__$1;
(statearr_50709_50749[(2)] = null);

(statearr_50709_50749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (1))){
var state_50705__$1 = state_50705;
var statearr_50710_50750 = state_50705__$1;
(statearr_50710_50750[(2)] = null);

(statearr_50710_50750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (4))){
var inst_50646 = (state_50705[(13)]);
var inst_50646__$1 = (state_50705[(2)]);
var inst_50647 = (inst_50646__$1 == null);
var state_50705__$1 = (function (){var statearr_50711 = state_50705;
(statearr_50711[(13)] = inst_50646__$1);

return statearr_50711;
})();
if(cljs.core.truth_(inst_50647)){
var statearr_50712_50751 = state_50705__$1;
(statearr_50712_50751[(1)] = (5));

} else {
var statearr_50713_50752 = state_50705__$1;
(statearr_50713_50752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (15))){
var state_50705__$1 = state_50705;
var statearr_50717_50753 = state_50705__$1;
(statearr_50717_50753[(2)] = null);

(statearr_50717_50753[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (21))){
var state_50705__$1 = state_50705;
var statearr_50718_50754 = state_50705__$1;
(statearr_50718_50754[(2)] = null);

(statearr_50718_50754[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (13))){
var inst_50659 = (state_50705[(8)]);
var inst_50658 = (state_50705[(9)]);
var inst_50660 = (state_50705[(11)]);
var inst_50657 = (state_50705[(12)]);
var inst_50667 = (state_50705[(2)]);
var inst_50668 = (inst_50660 + (1));
var tmp50714 = inst_50659;
var tmp50715 = inst_50658;
var tmp50716 = inst_50657;
var inst_50657__$1 = tmp50716;
var inst_50658__$1 = tmp50715;
var inst_50659__$1 = tmp50714;
var inst_50660__$1 = inst_50668;
var state_50705__$1 = (function (){var statearr_50719 = state_50705;
(statearr_50719[(8)] = inst_50659__$1);

(statearr_50719[(9)] = inst_50658__$1);

(statearr_50719[(11)] = inst_50660__$1);

(statearr_50719[(14)] = inst_50667);

(statearr_50719[(12)] = inst_50657__$1);

return statearr_50719;
})();
var statearr_50720_50755 = state_50705__$1;
(statearr_50720_50755[(2)] = null);

(statearr_50720_50755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (22))){
var state_50705__$1 = state_50705;
var statearr_50721_50756 = state_50705__$1;
(statearr_50721_50756[(2)] = null);

(statearr_50721_50756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (6))){
var inst_50646 = (state_50705[(13)]);
var inst_50655 = f.call(null,inst_50646);
var inst_50656 = cljs.core.seq.call(null,inst_50655);
var inst_50657 = inst_50656;
var inst_50658 = null;
var inst_50659 = (0);
var inst_50660 = (0);
var state_50705__$1 = (function (){var statearr_50722 = state_50705;
(statearr_50722[(8)] = inst_50659);

(statearr_50722[(9)] = inst_50658);

(statearr_50722[(11)] = inst_50660);

(statearr_50722[(12)] = inst_50657);

return statearr_50722;
})();
var statearr_50723_50757 = state_50705__$1;
(statearr_50723_50757[(2)] = null);

(statearr_50723_50757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (17))){
var inst_50671 = (state_50705[(7)]);
var inst_50675 = cljs.core.chunk_first.call(null,inst_50671);
var inst_50676 = cljs.core.chunk_rest.call(null,inst_50671);
var inst_50677 = cljs.core.count.call(null,inst_50675);
var inst_50657 = inst_50676;
var inst_50658 = inst_50675;
var inst_50659 = inst_50677;
var inst_50660 = (0);
var state_50705__$1 = (function (){var statearr_50724 = state_50705;
(statearr_50724[(8)] = inst_50659);

(statearr_50724[(9)] = inst_50658);

(statearr_50724[(11)] = inst_50660);

(statearr_50724[(12)] = inst_50657);

return statearr_50724;
})();
var statearr_50725_50758 = state_50705__$1;
(statearr_50725_50758[(2)] = null);

(statearr_50725_50758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (3))){
var inst_50703 = (state_50705[(2)]);
var state_50705__$1 = state_50705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50705__$1,inst_50703);
} else {
if((state_val_50706 === (12))){
var inst_50691 = (state_50705[(2)]);
var state_50705__$1 = state_50705;
var statearr_50726_50759 = state_50705__$1;
(statearr_50726_50759[(2)] = inst_50691);

(statearr_50726_50759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (2))){
var state_50705__$1 = state_50705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50705__$1,(4),in$);
} else {
if((state_val_50706 === (23))){
var inst_50699 = (state_50705[(2)]);
var state_50705__$1 = state_50705;
var statearr_50727_50760 = state_50705__$1;
(statearr_50727_50760[(2)] = inst_50699);

(statearr_50727_50760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (19))){
var inst_50686 = (state_50705[(2)]);
var state_50705__$1 = state_50705;
var statearr_50728_50761 = state_50705__$1;
(statearr_50728_50761[(2)] = inst_50686);

(statearr_50728_50761[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (11))){
var inst_50671 = (state_50705[(7)]);
var inst_50657 = (state_50705[(12)]);
var inst_50671__$1 = cljs.core.seq.call(null,inst_50657);
var state_50705__$1 = (function (){var statearr_50729 = state_50705;
(statearr_50729[(7)] = inst_50671__$1);

return statearr_50729;
})();
if(inst_50671__$1){
var statearr_50730_50762 = state_50705__$1;
(statearr_50730_50762[(1)] = (14));

} else {
var statearr_50731_50763 = state_50705__$1;
(statearr_50731_50763[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (9))){
var inst_50693 = (state_50705[(2)]);
var inst_50694 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_50705__$1 = (function (){var statearr_50732 = state_50705;
(statearr_50732[(15)] = inst_50693);

return statearr_50732;
})();
if(cljs.core.truth_(inst_50694)){
var statearr_50733_50764 = state_50705__$1;
(statearr_50733_50764[(1)] = (21));

} else {
var statearr_50734_50765 = state_50705__$1;
(statearr_50734_50765[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (5))){
var inst_50649 = cljs.core.async.close_BANG_.call(null,out);
var state_50705__$1 = state_50705;
var statearr_50735_50766 = state_50705__$1;
(statearr_50735_50766[(2)] = inst_50649);

(statearr_50735_50766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (14))){
var inst_50671 = (state_50705[(7)]);
var inst_50673 = cljs.core.chunked_seq_QMARK_.call(null,inst_50671);
var state_50705__$1 = state_50705;
if(inst_50673){
var statearr_50736_50767 = state_50705__$1;
(statearr_50736_50767[(1)] = (17));

} else {
var statearr_50737_50768 = state_50705__$1;
(statearr_50737_50768[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (16))){
var inst_50689 = (state_50705[(2)]);
var state_50705__$1 = state_50705;
var statearr_50738_50769 = state_50705__$1;
(statearr_50738_50769[(2)] = inst_50689);

(statearr_50738_50769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50706 === (10))){
var inst_50658 = (state_50705[(9)]);
var inst_50660 = (state_50705[(11)]);
var inst_50665 = cljs.core._nth.call(null,inst_50658,inst_50660);
var state_50705__$1 = state_50705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50705__$1,(13),out,inst_50665);
} else {
if((state_val_50706 === (18))){
var inst_50671 = (state_50705[(7)]);
var inst_50680 = cljs.core.first.call(null,inst_50671);
var state_50705__$1 = state_50705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50705__$1,(20),out,inst_50680);
} else {
if((state_val_50706 === (8))){
var inst_50659 = (state_50705[(8)]);
var inst_50660 = (state_50705[(11)]);
var inst_50662 = (inst_50660 < inst_50659);
var inst_50663 = inst_50662;
var state_50705__$1 = state_50705;
if(cljs.core.truth_(inst_50663)){
var statearr_50739_50770 = state_50705__$1;
(statearr_50739_50770[(1)] = (10));

} else {
var statearr_50740_50771 = state_50705__$1;
(statearr_50740_50771[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto__))
;
return ((function (switch__48132__auto__,c__48244__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48133__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48133__auto____0 = (function (){
var statearr_50744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50744[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48133__auto__);

(statearr_50744[(1)] = (1));

return statearr_50744;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48133__auto____1 = (function (state_50705){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_50705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e50745){if((e50745 instanceof Object)){
var ex__48136__auto__ = e50745;
var statearr_50746_50772 = state_50705;
(statearr_50746_50772[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50773 = state_50705;
state_50705 = G__50773;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48133__auto__ = function(state_50705){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48133__auto____1.call(this,state_50705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48133__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48133__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto__))
})();
var state__48246__auto__ = (function (){var statearr_50747 = f__48245__auto__.call(null);
(statearr_50747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto__);

return statearr_50747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto__))
);

return c__48244__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args50774 = [];
var len__45939__auto___50777 = arguments.length;
var i__45940__auto___50778 = (0);
while(true){
if((i__45940__auto___50778 < len__45939__auto___50777)){
args50774.push((arguments[i__45940__auto___50778]));

var G__50779 = (i__45940__auto___50778 + (1));
i__45940__auto___50778 = G__50779;
continue;
} else {
}
break;
}

var G__50776 = args50774.length;
switch (G__50776) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50774.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args50781 = [];
var len__45939__auto___50784 = arguments.length;
var i__45940__auto___50785 = (0);
while(true){
if((i__45940__auto___50785 < len__45939__auto___50784)){
args50781.push((arguments[i__45940__auto___50785]));

var G__50786 = (i__45940__auto___50785 + (1));
i__45940__auto___50785 = G__50786;
continue;
} else {
}
break;
}

var G__50783 = args50781.length;
switch (G__50783) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50781.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args50788 = [];
var len__45939__auto___50839 = arguments.length;
var i__45940__auto___50840 = (0);
while(true){
if((i__45940__auto___50840 < len__45939__auto___50839)){
args50788.push((arguments[i__45940__auto___50840]));

var G__50841 = (i__45940__auto___50840 + (1));
i__45940__auto___50840 = G__50841;
continue;
} else {
}
break;
}

var G__50790 = args50788.length;
switch (G__50790) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50788.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48244__auto___50843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___50843,out){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___50843,out){
return (function (state_50814){
var state_val_50815 = (state_50814[(1)]);
if((state_val_50815 === (7))){
var inst_50809 = (state_50814[(2)]);
var state_50814__$1 = state_50814;
var statearr_50816_50844 = state_50814__$1;
(statearr_50816_50844[(2)] = inst_50809);

(statearr_50816_50844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50815 === (1))){
var inst_50791 = null;
var state_50814__$1 = (function (){var statearr_50817 = state_50814;
(statearr_50817[(7)] = inst_50791);

return statearr_50817;
})();
var statearr_50818_50845 = state_50814__$1;
(statearr_50818_50845[(2)] = null);

(statearr_50818_50845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50815 === (4))){
var inst_50794 = (state_50814[(8)]);
var inst_50794__$1 = (state_50814[(2)]);
var inst_50795 = (inst_50794__$1 == null);
var inst_50796 = cljs.core.not.call(null,inst_50795);
var state_50814__$1 = (function (){var statearr_50819 = state_50814;
(statearr_50819[(8)] = inst_50794__$1);

return statearr_50819;
})();
if(inst_50796){
var statearr_50820_50846 = state_50814__$1;
(statearr_50820_50846[(1)] = (5));

} else {
var statearr_50821_50847 = state_50814__$1;
(statearr_50821_50847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50815 === (6))){
var state_50814__$1 = state_50814;
var statearr_50822_50848 = state_50814__$1;
(statearr_50822_50848[(2)] = null);

(statearr_50822_50848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50815 === (3))){
var inst_50811 = (state_50814[(2)]);
var inst_50812 = cljs.core.async.close_BANG_.call(null,out);
var state_50814__$1 = (function (){var statearr_50823 = state_50814;
(statearr_50823[(9)] = inst_50811);

return statearr_50823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50814__$1,inst_50812);
} else {
if((state_val_50815 === (2))){
var state_50814__$1 = state_50814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50814__$1,(4),ch);
} else {
if((state_val_50815 === (11))){
var inst_50794 = (state_50814[(8)]);
var inst_50803 = (state_50814[(2)]);
var inst_50791 = inst_50794;
var state_50814__$1 = (function (){var statearr_50824 = state_50814;
(statearr_50824[(7)] = inst_50791);

(statearr_50824[(10)] = inst_50803);

return statearr_50824;
})();
var statearr_50825_50849 = state_50814__$1;
(statearr_50825_50849[(2)] = null);

(statearr_50825_50849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50815 === (9))){
var inst_50794 = (state_50814[(8)]);
var state_50814__$1 = state_50814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50814__$1,(11),out,inst_50794);
} else {
if((state_val_50815 === (5))){
var inst_50794 = (state_50814[(8)]);
var inst_50791 = (state_50814[(7)]);
var inst_50798 = cljs.core._EQ_.call(null,inst_50794,inst_50791);
var state_50814__$1 = state_50814;
if(inst_50798){
var statearr_50827_50850 = state_50814__$1;
(statearr_50827_50850[(1)] = (8));

} else {
var statearr_50828_50851 = state_50814__$1;
(statearr_50828_50851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50815 === (10))){
var inst_50806 = (state_50814[(2)]);
var state_50814__$1 = state_50814;
var statearr_50829_50852 = state_50814__$1;
(statearr_50829_50852[(2)] = inst_50806);

(statearr_50829_50852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50815 === (8))){
var inst_50791 = (state_50814[(7)]);
var tmp50826 = inst_50791;
var inst_50791__$1 = tmp50826;
var state_50814__$1 = (function (){var statearr_50830 = state_50814;
(statearr_50830[(7)] = inst_50791__$1);

return statearr_50830;
})();
var statearr_50831_50853 = state_50814__$1;
(statearr_50831_50853[(2)] = null);

(statearr_50831_50853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___50843,out))
;
return ((function (switch__48132__auto__,c__48244__auto___50843,out){
return (function() {
var cljs$core$async$state_machine__48133__auto__ = null;
var cljs$core$async$state_machine__48133__auto____0 = (function (){
var statearr_50835 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50835[(0)] = cljs$core$async$state_machine__48133__auto__);

(statearr_50835[(1)] = (1));

return statearr_50835;
});
var cljs$core$async$state_machine__48133__auto____1 = (function (state_50814){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_50814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e50836){if((e50836 instanceof Object)){
var ex__48136__auto__ = e50836;
var statearr_50837_50854 = state_50814;
(statearr_50837_50854[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50855 = state_50814;
state_50814 = G__50855;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$state_machine__48133__auto__ = function(state_50814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48133__auto____1.call(this,state_50814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48133__auto____0;
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48133__auto____1;
return cljs$core$async$state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___50843,out))
})();
var state__48246__auto__ = (function (){var statearr_50838 = f__48245__auto__.call(null);
(statearr_50838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___50843);

return statearr_50838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___50843,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args50856 = [];
var len__45939__auto___50926 = arguments.length;
var i__45940__auto___50927 = (0);
while(true){
if((i__45940__auto___50927 < len__45939__auto___50926)){
args50856.push((arguments[i__45940__auto___50927]));

var G__50928 = (i__45940__auto___50927 + (1));
i__45940__auto___50927 = G__50928;
continue;
} else {
}
break;
}

var G__50858 = args50856.length;
switch (G__50858) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50856.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48244__auto___50930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___50930,out){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___50930,out){
return (function (state_50896){
var state_val_50897 = (state_50896[(1)]);
if((state_val_50897 === (7))){
var inst_50892 = (state_50896[(2)]);
var state_50896__$1 = state_50896;
var statearr_50898_50931 = state_50896__$1;
(statearr_50898_50931[(2)] = inst_50892);

(statearr_50898_50931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (1))){
var inst_50859 = (new Array(n));
var inst_50860 = inst_50859;
var inst_50861 = (0);
var state_50896__$1 = (function (){var statearr_50899 = state_50896;
(statearr_50899[(7)] = inst_50860);

(statearr_50899[(8)] = inst_50861);

return statearr_50899;
})();
var statearr_50900_50932 = state_50896__$1;
(statearr_50900_50932[(2)] = null);

(statearr_50900_50932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (4))){
var inst_50864 = (state_50896[(9)]);
var inst_50864__$1 = (state_50896[(2)]);
var inst_50865 = (inst_50864__$1 == null);
var inst_50866 = cljs.core.not.call(null,inst_50865);
var state_50896__$1 = (function (){var statearr_50901 = state_50896;
(statearr_50901[(9)] = inst_50864__$1);

return statearr_50901;
})();
if(inst_50866){
var statearr_50902_50933 = state_50896__$1;
(statearr_50902_50933[(1)] = (5));

} else {
var statearr_50903_50934 = state_50896__$1;
(statearr_50903_50934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (15))){
var inst_50886 = (state_50896[(2)]);
var state_50896__$1 = state_50896;
var statearr_50904_50935 = state_50896__$1;
(statearr_50904_50935[(2)] = inst_50886);

(statearr_50904_50935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (13))){
var state_50896__$1 = state_50896;
var statearr_50905_50936 = state_50896__$1;
(statearr_50905_50936[(2)] = null);

(statearr_50905_50936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (6))){
var inst_50861 = (state_50896[(8)]);
var inst_50882 = (inst_50861 > (0));
var state_50896__$1 = state_50896;
if(cljs.core.truth_(inst_50882)){
var statearr_50906_50937 = state_50896__$1;
(statearr_50906_50937[(1)] = (12));

} else {
var statearr_50907_50938 = state_50896__$1;
(statearr_50907_50938[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (3))){
var inst_50894 = (state_50896[(2)]);
var state_50896__$1 = state_50896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50896__$1,inst_50894);
} else {
if((state_val_50897 === (12))){
var inst_50860 = (state_50896[(7)]);
var inst_50884 = cljs.core.vec.call(null,inst_50860);
var state_50896__$1 = state_50896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50896__$1,(15),out,inst_50884);
} else {
if((state_val_50897 === (2))){
var state_50896__$1 = state_50896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50896__$1,(4),ch);
} else {
if((state_val_50897 === (11))){
var inst_50876 = (state_50896[(2)]);
var inst_50877 = (new Array(n));
var inst_50860 = inst_50877;
var inst_50861 = (0);
var state_50896__$1 = (function (){var statearr_50908 = state_50896;
(statearr_50908[(10)] = inst_50876);

(statearr_50908[(7)] = inst_50860);

(statearr_50908[(8)] = inst_50861);

return statearr_50908;
})();
var statearr_50909_50939 = state_50896__$1;
(statearr_50909_50939[(2)] = null);

(statearr_50909_50939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (9))){
var inst_50860 = (state_50896[(7)]);
var inst_50874 = cljs.core.vec.call(null,inst_50860);
var state_50896__$1 = state_50896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50896__$1,(11),out,inst_50874);
} else {
if((state_val_50897 === (5))){
var inst_50860 = (state_50896[(7)]);
var inst_50869 = (state_50896[(11)]);
var inst_50861 = (state_50896[(8)]);
var inst_50864 = (state_50896[(9)]);
var inst_50868 = (inst_50860[inst_50861] = inst_50864);
var inst_50869__$1 = (inst_50861 + (1));
var inst_50870 = (inst_50869__$1 < n);
var state_50896__$1 = (function (){var statearr_50910 = state_50896;
(statearr_50910[(11)] = inst_50869__$1);

(statearr_50910[(12)] = inst_50868);

return statearr_50910;
})();
if(cljs.core.truth_(inst_50870)){
var statearr_50911_50940 = state_50896__$1;
(statearr_50911_50940[(1)] = (8));

} else {
var statearr_50912_50941 = state_50896__$1;
(statearr_50912_50941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (14))){
var inst_50889 = (state_50896[(2)]);
var inst_50890 = cljs.core.async.close_BANG_.call(null,out);
var state_50896__$1 = (function (){var statearr_50914 = state_50896;
(statearr_50914[(13)] = inst_50889);

return statearr_50914;
})();
var statearr_50915_50942 = state_50896__$1;
(statearr_50915_50942[(2)] = inst_50890);

(statearr_50915_50942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (10))){
var inst_50880 = (state_50896[(2)]);
var state_50896__$1 = state_50896;
var statearr_50916_50943 = state_50896__$1;
(statearr_50916_50943[(2)] = inst_50880);

(statearr_50916_50943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50897 === (8))){
var inst_50860 = (state_50896[(7)]);
var inst_50869 = (state_50896[(11)]);
var tmp50913 = inst_50860;
var inst_50860__$1 = tmp50913;
var inst_50861 = inst_50869;
var state_50896__$1 = (function (){var statearr_50917 = state_50896;
(statearr_50917[(7)] = inst_50860__$1);

(statearr_50917[(8)] = inst_50861);

return statearr_50917;
})();
var statearr_50918_50944 = state_50896__$1;
(statearr_50918_50944[(2)] = null);

(statearr_50918_50944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___50930,out))
;
return ((function (switch__48132__auto__,c__48244__auto___50930,out){
return (function() {
var cljs$core$async$state_machine__48133__auto__ = null;
var cljs$core$async$state_machine__48133__auto____0 = (function (){
var statearr_50922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50922[(0)] = cljs$core$async$state_machine__48133__auto__);

(statearr_50922[(1)] = (1));

return statearr_50922;
});
var cljs$core$async$state_machine__48133__auto____1 = (function (state_50896){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_50896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e50923){if((e50923 instanceof Object)){
var ex__48136__auto__ = e50923;
var statearr_50924_50945 = state_50896;
(statearr_50924_50945[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50946 = state_50896;
state_50896 = G__50946;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$state_machine__48133__auto__ = function(state_50896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48133__auto____1.call(this,state_50896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48133__auto____0;
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48133__auto____1;
return cljs$core$async$state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___50930,out))
})();
var state__48246__auto__ = (function (){var statearr_50925 = f__48245__auto__.call(null);
(statearr_50925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___50930);

return statearr_50925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___50930,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args50947 = [];
var len__45939__auto___51021 = arguments.length;
var i__45940__auto___51022 = (0);
while(true){
if((i__45940__auto___51022 < len__45939__auto___51021)){
args50947.push((arguments[i__45940__auto___51022]));

var G__51023 = (i__45940__auto___51022 + (1));
i__45940__auto___51022 = G__51023;
continue;
} else {
}
break;
}

var G__50949 = args50947.length;
switch (G__50949) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50947.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48244__auto___51025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48244__auto___51025,out){
return (function (){
var f__48245__auto__ = (function (){var switch__48132__auto__ = ((function (c__48244__auto___51025,out){
return (function (state_50991){
var state_val_50992 = (state_50991[(1)]);
if((state_val_50992 === (7))){
var inst_50987 = (state_50991[(2)]);
var state_50991__$1 = state_50991;
var statearr_50993_51026 = state_50991__$1;
(statearr_50993_51026[(2)] = inst_50987);

(statearr_50993_51026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50992 === (1))){
var inst_50950 = [];
var inst_50951 = inst_50950;
var inst_50952 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50991__$1 = (function (){var statearr_50994 = state_50991;
(statearr_50994[(7)] = inst_50951);

(statearr_50994[(8)] = inst_50952);

return statearr_50994;
})();
var statearr_50995_51027 = state_50991__$1;
(statearr_50995_51027[(2)] = null);

(statearr_50995_51027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50992 === (4))){
var inst_50955 = (state_50991[(9)]);
var inst_50955__$1 = (state_50991[(2)]);
var inst_50956 = (inst_50955__$1 == null);
var inst_50957 = cljs.core.not.call(null,inst_50956);
var state_50991__$1 = (function (){var statearr_50996 = state_50991;
(statearr_50996[(9)] = inst_50955__$1);

return statearr_50996;
})();
if(inst_50957){
var statearr_50997_51028 = state_50991__$1;
(statearr_50997_51028[(1)] = (5));

} else {
var statearr_50998_51029 = state_50991__$1;
(statearr_50998_51029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50992 === (15))){
var inst_50981 = (state_50991[(2)]);
var state_50991__$1 = state_50991;
var statearr_50999_51030 = state_50991__$1;
(statearr_50999_51030[(2)] = inst_50981);

(statearr_50999_51030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50992 === (13))){
var state_50991__$1 = state_50991;
var statearr_51000_51031 = state_50991__$1;
(statearr_51000_51031[(2)] = null);

(statearr_51000_51031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50992 === (6))){
var inst_50951 = (state_50991[(7)]);
var inst_50976 = inst_50951.length;
var inst_50977 = (inst_50976 > (0));
var state_50991__$1 = state_50991;
if(cljs.core.truth_(inst_50977)){
var statearr_51001_51032 = state_50991__$1;
(statearr_51001_51032[(1)] = (12));

} else {
var statearr_51002_51033 = state_50991__$1;
(statearr_51002_51033[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50992 === (3))){
var inst_50989 = (state_50991[(2)]);
var state_50991__$1 = state_50991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50991__$1,inst_50989);
} else {
if((state_val_50992 === (12))){
var inst_50951 = (state_50991[(7)]);
var inst_50979 = cljs.core.vec.call(null,inst_50951);
var state_50991__$1 = state_50991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50991__$1,(15),out,inst_50979);
} else {
if((state_val_50992 === (2))){
var state_50991__$1 = state_50991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50991__$1,(4),ch);
} else {
if((state_val_50992 === (11))){
var inst_50959 = (state_50991[(10)]);
var inst_50955 = (state_50991[(9)]);
var inst_50969 = (state_50991[(2)]);
var inst_50970 = [];
var inst_50971 = inst_50970.push(inst_50955);
var inst_50951 = inst_50970;
var inst_50952 = inst_50959;
var state_50991__$1 = (function (){var statearr_51003 = state_50991;
(statearr_51003[(7)] = inst_50951);

(statearr_51003[(11)] = inst_50971);

(statearr_51003[(12)] = inst_50969);

(statearr_51003[(8)] = inst_50952);

return statearr_51003;
})();
var statearr_51004_51034 = state_50991__$1;
(statearr_51004_51034[(2)] = null);

(statearr_51004_51034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50992 === (9))){
var inst_50951 = (state_50991[(7)]);
var inst_50967 = cljs.core.vec.call(null,inst_50951);
var state_50991__$1 = state_50991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50991__$1,(11),out,inst_50967);
} else {
if((state_val_50992 === (5))){
var inst_50959 = (state_50991[(10)]);
var inst_50952 = (state_50991[(8)]);
var inst_50955 = (state_50991[(9)]);
var inst_50959__$1 = f.call(null,inst_50955);
var inst_50960 = cljs.core._EQ_.call(null,inst_50959__$1,inst_50952);
var inst_50961 = cljs.core.keyword_identical_QMARK_.call(null,inst_50952,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50962 = (inst_50960) || (inst_50961);
var state_50991__$1 = (function (){var statearr_51005 = state_50991;
(statearr_51005[(10)] = inst_50959__$1);

return statearr_51005;
})();
if(cljs.core.truth_(inst_50962)){
var statearr_51006_51035 = state_50991__$1;
(statearr_51006_51035[(1)] = (8));

} else {
var statearr_51007_51036 = state_50991__$1;
(statearr_51007_51036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50992 === (14))){
var inst_50984 = (state_50991[(2)]);
var inst_50985 = cljs.core.async.close_BANG_.call(null,out);
var state_50991__$1 = (function (){var statearr_51009 = state_50991;
(statearr_51009[(13)] = inst_50984);

return statearr_51009;
})();
var statearr_51010_51037 = state_50991__$1;
(statearr_51010_51037[(2)] = inst_50985);

(statearr_51010_51037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50992 === (10))){
var inst_50974 = (state_50991[(2)]);
var state_50991__$1 = state_50991;
var statearr_51011_51038 = state_50991__$1;
(statearr_51011_51038[(2)] = inst_50974);

(statearr_51011_51038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50992 === (8))){
var inst_50951 = (state_50991[(7)]);
var inst_50959 = (state_50991[(10)]);
var inst_50955 = (state_50991[(9)]);
var inst_50964 = inst_50951.push(inst_50955);
var tmp51008 = inst_50951;
var inst_50951__$1 = tmp51008;
var inst_50952 = inst_50959;
var state_50991__$1 = (function (){var statearr_51012 = state_50991;
(statearr_51012[(7)] = inst_50951__$1);

(statearr_51012[(14)] = inst_50964);

(statearr_51012[(8)] = inst_50952);

return statearr_51012;
})();
var statearr_51013_51039 = state_50991__$1;
(statearr_51013_51039[(2)] = null);

(statearr_51013_51039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48244__auto___51025,out))
;
return ((function (switch__48132__auto__,c__48244__auto___51025,out){
return (function() {
var cljs$core$async$state_machine__48133__auto__ = null;
var cljs$core$async$state_machine__48133__auto____0 = (function (){
var statearr_51017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51017[(0)] = cljs$core$async$state_machine__48133__auto__);

(statearr_51017[(1)] = (1));

return statearr_51017;
});
var cljs$core$async$state_machine__48133__auto____1 = (function (state_50991){
while(true){
var ret_value__48134__auto__ = (function (){try{while(true){
var result__48135__auto__ = switch__48132__auto__.call(null,state_50991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48135__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48135__auto__;
}
break;
}
}catch (e51018){if((e51018 instanceof Object)){
var ex__48136__auto__ = e51018;
var statearr_51019_51040 = state_50991;
(statearr_51019_51040[(5)] = ex__48136__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48134__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51041 = state_50991;
state_50991 = G__51041;
continue;
} else {
return ret_value__48134__auto__;
}
break;
}
});
cljs$core$async$state_machine__48133__auto__ = function(state_50991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48133__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48133__auto____1.call(this,state_50991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48133__auto____0;
cljs$core$async$state_machine__48133__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48133__auto____1;
return cljs$core$async$state_machine__48133__auto__;
})()
;})(switch__48132__auto__,c__48244__auto___51025,out))
})();
var state__48246__auto__ = (function (){var statearr_51020 = f__48245__auto__.call(null);
(statearr_51020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48244__auto___51025);

return statearr_51020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48246__auto__);
});})(c__48244__auto___51025,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1491522839882