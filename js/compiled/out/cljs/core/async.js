// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args46653 = [];
var len__45511__auto___46659 = arguments.length;
var i__45512__auto___46660 = (0);
while(true){
if((i__45512__auto___46660 < len__45511__auto___46659)){
args46653.push((arguments[i__45512__auto___46660]));

var G__46661 = (i__45512__auto___46660 + (1));
i__45512__auto___46660 = G__46661;
continue;
} else {
}
break;
}

var G__46655 = args46653.length;
switch (G__46655) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46653.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async46656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46656 = (function (f,blockable,meta46657){
this.f = f;
this.blockable = blockable;
this.meta46657 = meta46657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46658,meta46657__$1){
var self__ = this;
var _46658__$1 = this;
return (new cljs.core.async.t_cljs$core$async46656(self__.f,self__.blockable,meta46657__$1));
});

cljs.core.async.t_cljs$core$async46656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46658){
var self__ = this;
var _46658__$1 = this;
return self__.meta46657;
});

cljs.core.async.t_cljs$core$async46656.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46657","meta46657",1650676671,null)], null);
});

cljs.core.async.t_cljs$core$async46656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46656";

cljs.core.async.t_cljs$core$async46656.cljs$lang$ctorPrWriter = (function (this__45042__auto__,writer__45043__auto__,opt__45044__auto__){
return cljs.core._write.call(null,writer__45043__auto__,"cljs.core.async/t_cljs$core$async46656");
});

cljs.core.async.__GT_t_cljs$core$async46656 = (function cljs$core$async$__GT_t_cljs$core$async46656(f__$1,blockable__$1,meta46657){
return (new cljs.core.async.t_cljs$core$async46656(f__$1,blockable__$1,meta46657));
});

}

return (new cljs.core.async.t_cljs$core$async46656(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args46665 = [];
var len__45511__auto___46668 = arguments.length;
var i__45512__auto___46669 = (0);
while(true){
if((i__45512__auto___46669 < len__45511__auto___46668)){
args46665.push((arguments[i__45512__auto___46669]));

var G__46670 = (i__45512__auto___46669 + (1));
i__45512__auto___46669 = G__46670;
continue;
} else {
}
break;
}

var G__46667 = args46665.length;
switch (G__46667) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46665.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args46672 = [];
var len__45511__auto___46675 = arguments.length;
var i__45512__auto___46676 = (0);
while(true){
if((i__45512__auto___46676 < len__45511__auto___46675)){
args46672.push((arguments[i__45512__auto___46676]));

var G__46677 = (i__45512__auto___46676 + (1));
i__45512__auto___46676 = G__46677;
continue;
} else {
}
break;
}

var G__46674 = args46672.length;
switch (G__46674) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46672.length)].join('')));

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
var args46679 = [];
var len__45511__auto___46682 = arguments.length;
var i__45512__auto___46683 = (0);
while(true){
if((i__45512__auto___46683 < len__45511__auto___46682)){
args46679.push((arguments[i__45512__auto___46683]));

var G__46684 = (i__45512__auto___46683 + (1));
i__45512__auto___46683 = G__46684;
continue;
} else {
}
break;
}

var G__46681 = args46679.length;
switch (G__46681) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46679.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_46686 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46686);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46686,ret){
return (function (){
return fn1.call(null,val_46686);
});})(val_46686,ret))
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
var args46687 = [];
var len__45511__auto___46690 = arguments.length;
var i__45512__auto___46691 = (0);
while(true){
if((i__45512__auto___46691 < len__45511__auto___46690)){
args46687.push((arguments[i__45512__auto___46691]));

var G__46692 = (i__45512__auto___46691 + (1));
i__45512__auto___46691 = G__46692;
continue;
} else {
}
break;
}

var G__46689 = args46687.length;
switch (G__46689) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46687.length)].join('')));

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
var n__45351__auto___46694 = n;
var x_46695 = (0);
while(true){
if((x_46695 < n__45351__auto___46694)){
(a[x_46695] = (0));

var G__46696 = (x_46695 + (1));
x_46695 = G__46696;
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

var G__46697 = (i + (1));
i = G__46697;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46701 = (function (alt_flag,flag,meta46702){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta46702 = meta46702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46703,meta46702__$1){
var self__ = this;
var _46703__$1 = this;
return (new cljs.core.async.t_cljs$core$async46701(self__.alt_flag,self__.flag,meta46702__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46703){
var self__ = this;
var _46703__$1 = this;
return self__.meta46702;
});})(flag))
;

cljs.core.async.t_cljs$core$async46701.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46701.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46702","meta46702",-33696676,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46701";

cljs.core.async.t_cljs$core$async46701.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__45042__auto__,writer__45043__auto__,opt__45044__auto__){
return cljs.core._write.call(null,writer__45043__auto__,"cljs.core.async/t_cljs$core$async46701");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46701 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46701(alt_flag__$1,flag__$1,meta46702){
return (new cljs.core.async.t_cljs$core$async46701(alt_flag__$1,flag__$1,meta46702));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46701(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46707 = (function (alt_handler,flag,cb,meta46708){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta46708 = meta46708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46709,meta46708__$1){
var self__ = this;
var _46709__$1 = this;
return (new cljs.core.async.t_cljs$core$async46707(self__.alt_handler,self__.flag,self__.cb,meta46708__$1));
});

cljs.core.async.t_cljs$core$async46707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46709){
var self__ = this;
var _46709__$1 = this;
return self__.meta46708;
});

cljs.core.async.t_cljs$core$async46707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async46707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46708","meta46708",-1228104889,null)], null);
});

cljs.core.async.t_cljs$core$async46707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46707";

cljs.core.async.t_cljs$core$async46707.cljs$lang$ctorPrWriter = (function (this__45042__auto__,writer__45043__auto__,opt__45044__auto__){
return cljs.core._write.call(null,writer__45043__auto__,"cljs.core.async/t_cljs$core$async46707");
});

cljs.core.async.__GT_t_cljs$core$async46707 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46707(alt_handler__$1,flag__$1,cb__$1,meta46708){
return (new cljs.core.async.t_cljs$core$async46707(alt_handler__$1,flag__$1,cb__$1,meta46708));
});

}

return (new cljs.core.async.t_cljs$core$async46707(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46710_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46710_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46711_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46711_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__44436__auto__ = wport;
if(cljs.core.truth_(or__44436__auto__)){
return or__44436__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46712 = (i + (1));
i = G__46712;
continue;
}
} else {
return null;
}
break;
}
})();
var or__44436__auto__ = ret;
if(cljs.core.truth_(or__44436__auto__)){
return or__44436__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__44424__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__44424__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__44424__auto__;
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
var args__45518__auto__ = [];
var len__45511__auto___46718 = arguments.length;
var i__45512__auto___46719 = (0);
while(true){
if((i__45512__auto___46719 < len__45511__auto___46718)){
args__45518__auto__.push((arguments[i__45512__auto___46719]));

var G__46720 = (i__45512__auto___46719 + (1));
i__45512__auto___46719 = G__46720;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((1) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45519__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46715){
var map__46716 = p__46715;
var map__46716__$1 = ((((!((map__46716 == null)))?((((map__46716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46716):map__46716);
var opts = map__46716__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46713){
var G__46714 = cljs.core.first.call(null,seq46713);
var seq46713__$1 = cljs.core.next.call(null,seq46713);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46714,seq46713__$1);
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
var args46721 = [];
var len__45511__auto___46771 = arguments.length;
var i__45512__auto___46772 = (0);
while(true){
if((i__45512__auto___46772 < len__45511__auto___46771)){
args46721.push((arguments[i__45512__auto___46772]));

var G__46773 = (i__45512__auto___46772 + (1));
i__45512__auto___46772 = G__46773;
continue;
} else {
}
break;
}

var G__46723 = args46721.length;
switch (G__46723) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46721.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46608__auto___46775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___46775){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___46775){
return (function (state_46747){
var state_val_46748 = (state_46747[(1)]);
if((state_val_46748 === (7))){
var inst_46743 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
var statearr_46749_46776 = state_46747__$1;
(statearr_46749_46776[(2)] = inst_46743);

(statearr_46749_46776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (1))){
var state_46747__$1 = state_46747;
var statearr_46750_46777 = state_46747__$1;
(statearr_46750_46777[(2)] = null);

(statearr_46750_46777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (4))){
var inst_46726 = (state_46747[(7)]);
var inst_46726__$1 = (state_46747[(2)]);
var inst_46727 = (inst_46726__$1 == null);
var state_46747__$1 = (function (){var statearr_46751 = state_46747;
(statearr_46751[(7)] = inst_46726__$1);

return statearr_46751;
})();
if(cljs.core.truth_(inst_46727)){
var statearr_46752_46778 = state_46747__$1;
(statearr_46752_46778[(1)] = (5));

} else {
var statearr_46753_46779 = state_46747__$1;
(statearr_46753_46779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (13))){
var state_46747__$1 = state_46747;
var statearr_46754_46780 = state_46747__$1;
(statearr_46754_46780[(2)] = null);

(statearr_46754_46780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (6))){
var inst_46726 = (state_46747[(7)]);
var state_46747__$1 = state_46747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46747__$1,(11),to,inst_46726);
} else {
if((state_val_46748 === (3))){
var inst_46745 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46747__$1,inst_46745);
} else {
if((state_val_46748 === (12))){
var state_46747__$1 = state_46747;
var statearr_46755_46781 = state_46747__$1;
(statearr_46755_46781[(2)] = null);

(statearr_46755_46781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (2))){
var state_46747__$1 = state_46747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46747__$1,(4),from);
} else {
if((state_val_46748 === (11))){
var inst_46736 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
if(cljs.core.truth_(inst_46736)){
var statearr_46756_46782 = state_46747__$1;
(statearr_46756_46782[(1)] = (12));

} else {
var statearr_46757_46783 = state_46747__$1;
(statearr_46757_46783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (9))){
var state_46747__$1 = state_46747;
var statearr_46758_46784 = state_46747__$1;
(statearr_46758_46784[(2)] = null);

(statearr_46758_46784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (5))){
var state_46747__$1 = state_46747;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46759_46785 = state_46747__$1;
(statearr_46759_46785[(1)] = (8));

} else {
var statearr_46760_46786 = state_46747__$1;
(statearr_46760_46786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (14))){
var inst_46741 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
var statearr_46761_46787 = state_46747__$1;
(statearr_46761_46787[(2)] = inst_46741);

(statearr_46761_46787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (10))){
var inst_46733 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
var statearr_46762_46788 = state_46747__$1;
(statearr_46762_46788[(2)] = inst_46733);

(statearr_46762_46788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (8))){
var inst_46730 = cljs.core.async.close_BANG_.call(null,to);
var state_46747__$1 = state_46747;
var statearr_46763_46789 = state_46747__$1;
(statearr_46763_46789[(2)] = inst_46730);

(statearr_46763_46789[(1)] = (10));


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
});})(c__46608__auto___46775))
;
return ((function (switch__46454__auto__,c__46608__auto___46775){
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_46767 = [null,null,null,null,null,null,null,null];
(statearr_46767[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_46767[(1)] = (1));

return statearr_46767;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_46747){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_46747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e46768){if((e46768 instanceof Object)){
var ex__46458__auto__ = e46768;
var statearr_46769_46790 = state_46747;
(statearr_46769_46790[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46791 = state_46747;
state_46747 = G__46791;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_46747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_46747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___46775))
})();
var state__46610__auto__ = (function (){var statearr_46770 = f__46609__auto__.call(null);
(statearr_46770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___46775);

return statearr_46770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___46775))
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
return (function (p__46979){
var vec__46980 = p__46979;
var v = cljs.core.nth.call(null,vec__46980,(0),null);
var p = cljs.core.nth.call(null,vec__46980,(1),null);
var job = vec__46980;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__46608__auto___47166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___47166,res,vec__46980,v,p,job,jobs,results){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___47166,res,vec__46980,v,p,job,jobs,results){
return (function (state_46987){
var state_val_46988 = (state_46987[(1)]);
if((state_val_46988 === (1))){
var state_46987__$1 = state_46987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46987__$1,(2),res,v);
} else {
if((state_val_46988 === (2))){
var inst_46984 = (state_46987[(2)]);
var inst_46985 = cljs.core.async.close_BANG_.call(null,res);
var state_46987__$1 = (function (){var statearr_46989 = state_46987;
(statearr_46989[(7)] = inst_46984);

return statearr_46989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46987__$1,inst_46985);
} else {
return null;
}
}
});})(c__46608__auto___47166,res,vec__46980,v,p,job,jobs,results))
;
return ((function (switch__46454__auto__,c__46608__auto___47166,res,vec__46980,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0 = (function (){
var statearr_46993 = [null,null,null,null,null,null,null,null];
(statearr_46993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__);

(statearr_46993[(1)] = (1));

return statearr_46993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1 = (function (state_46987){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_46987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e46994){if((e46994 instanceof Object)){
var ex__46458__auto__ = e46994;
var statearr_46995_47167 = state_46987;
(statearr_46995_47167[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47168 = state_46987;
state_46987 = G__47168;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = function(state_46987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1.call(this,state_46987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___47166,res,vec__46980,v,p,job,jobs,results))
})();
var state__46610__auto__ = (function (){var statearr_46996 = f__46609__auto__.call(null);
(statearr_46996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___47166);

return statearr_46996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___47166,res,vec__46980,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46997){
var vec__46998 = p__46997;
var v = cljs.core.nth.call(null,vec__46998,(0),null);
var p = cljs.core.nth.call(null,vec__46998,(1),null);
var job = vec__46998;
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
var n__45351__auto___47169 = n;
var __47170 = (0);
while(true){
if((__47170 < n__45351__auto___47169)){
var G__47001_47171 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__47001_47171) {
case "compute":
var c__46608__auto___47173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47170,c__46608__auto___47173,G__47001_47171,n__45351__auto___47169,jobs,results,process,async){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (__47170,c__46608__auto___47173,G__47001_47171,n__45351__auto___47169,jobs,results,process,async){
return (function (state_47014){
var state_val_47015 = (state_47014[(1)]);
if((state_val_47015 === (1))){
var state_47014__$1 = state_47014;
var statearr_47016_47174 = state_47014__$1;
(statearr_47016_47174[(2)] = null);

(statearr_47016_47174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47015 === (2))){
var state_47014__$1 = state_47014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47014__$1,(4),jobs);
} else {
if((state_val_47015 === (3))){
var inst_47012 = (state_47014[(2)]);
var state_47014__$1 = state_47014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47014__$1,inst_47012);
} else {
if((state_val_47015 === (4))){
var inst_47004 = (state_47014[(2)]);
var inst_47005 = process.call(null,inst_47004);
var state_47014__$1 = state_47014;
if(cljs.core.truth_(inst_47005)){
var statearr_47017_47175 = state_47014__$1;
(statearr_47017_47175[(1)] = (5));

} else {
var statearr_47018_47176 = state_47014__$1;
(statearr_47018_47176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47015 === (5))){
var state_47014__$1 = state_47014;
var statearr_47019_47177 = state_47014__$1;
(statearr_47019_47177[(2)] = null);

(statearr_47019_47177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47015 === (6))){
var state_47014__$1 = state_47014;
var statearr_47020_47178 = state_47014__$1;
(statearr_47020_47178[(2)] = null);

(statearr_47020_47178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47015 === (7))){
var inst_47010 = (state_47014[(2)]);
var state_47014__$1 = state_47014;
var statearr_47021_47179 = state_47014__$1;
(statearr_47021_47179[(2)] = inst_47010);

(statearr_47021_47179[(1)] = (3));


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
});})(__47170,c__46608__auto___47173,G__47001_47171,n__45351__auto___47169,jobs,results,process,async))
;
return ((function (__47170,switch__46454__auto__,c__46608__auto___47173,G__47001_47171,n__45351__auto___47169,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0 = (function (){
var statearr_47025 = [null,null,null,null,null,null,null];
(statearr_47025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__);

(statearr_47025[(1)] = (1));

return statearr_47025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1 = (function (state_47014){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_47014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47026){if((e47026 instanceof Object)){
var ex__46458__auto__ = e47026;
var statearr_47027_47180 = state_47014;
(statearr_47027_47180[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47181 = state_47014;
state_47014 = G__47181;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = function(state_47014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1.call(this,state_47014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__;
})()
;})(__47170,switch__46454__auto__,c__46608__auto___47173,G__47001_47171,n__45351__auto___47169,jobs,results,process,async))
})();
var state__46610__auto__ = (function (){var statearr_47028 = f__46609__auto__.call(null);
(statearr_47028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___47173);

return statearr_47028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(__47170,c__46608__auto___47173,G__47001_47171,n__45351__auto___47169,jobs,results,process,async))
);


break;
case "async":
var c__46608__auto___47182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47170,c__46608__auto___47182,G__47001_47171,n__45351__auto___47169,jobs,results,process,async){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (__47170,c__46608__auto___47182,G__47001_47171,n__45351__auto___47169,jobs,results,process,async){
return (function (state_47041){
var state_val_47042 = (state_47041[(1)]);
if((state_val_47042 === (1))){
var state_47041__$1 = state_47041;
var statearr_47043_47183 = state_47041__$1;
(statearr_47043_47183[(2)] = null);

(statearr_47043_47183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (2))){
var state_47041__$1 = state_47041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47041__$1,(4),jobs);
} else {
if((state_val_47042 === (3))){
var inst_47039 = (state_47041[(2)]);
var state_47041__$1 = state_47041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47041__$1,inst_47039);
} else {
if((state_val_47042 === (4))){
var inst_47031 = (state_47041[(2)]);
var inst_47032 = async.call(null,inst_47031);
var state_47041__$1 = state_47041;
if(cljs.core.truth_(inst_47032)){
var statearr_47044_47184 = state_47041__$1;
(statearr_47044_47184[(1)] = (5));

} else {
var statearr_47045_47185 = state_47041__$1;
(statearr_47045_47185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (5))){
var state_47041__$1 = state_47041;
var statearr_47046_47186 = state_47041__$1;
(statearr_47046_47186[(2)] = null);

(statearr_47046_47186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (6))){
var state_47041__$1 = state_47041;
var statearr_47047_47187 = state_47041__$1;
(statearr_47047_47187[(2)] = null);

(statearr_47047_47187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47042 === (7))){
var inst_47037 = (state_47041[(2)]);
var state_47041__$1 = state_47041;
var statearr_47048_47188 = state_47041__$1;
(statearr_47048_47188[(2)] = inst_47037);

(statearr_47048_47188[(1)] = (3));


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
});})(__47170,c__46608__auto___47182,G__47001_47171,n__45351__auto___47169,jobs,results,process,async))
;
return ((function (__47170,switch__46454__auto__,c__46608__auto___47182,G__47001_47171,n__45351__auto___47169,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0 = (function (){
var statearr_47052 = [null,null,null,null,null,null,null];
(statearr_47052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__);

(statearr_47052[(1)] = (1));

return statearr_47052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1 = (function (state_47041){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_47041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47053){if((e47053 instanceof Object)){
var ex__46458__auto__ = e47053;
var statearr_47054_47189 = state_47041;
(statearr_47054_47189[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47190 = state_47041;
state_47041 = G__47190;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = function(state_47041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1.call(this,state_47041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__;
})()
;})(__47170,switch__46454__auto__,c__46608__auto___47182,G__47001_47171,n__45351__auto___47169,jobs,results,process,async))
})();
var state__46610__auto__ = (function (){var statearr_47055 = f__46609__auto__.call(null);
(statearr_47055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___47182);

return statearr_47055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(__47170,c__46608__auto___47182,G__47001_47171,n__45351__auto___47169,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__47191 = (__47170 + (1));
__47170 = G__47191;
continue;
} else {
}
break;
}

var c__46608__auto___47192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___47192,jobs,results,process,async){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___47192,jobs,results,process,async){
return (function (state_47077){
var state_val_47078 = (state_47077[(1)]);
if((state_val_47078 === (1))){
var state_47077__$1 = state_47077;
var statearr_47079_47193 = state_47077__$1;
(statearr_47079_47193[(2)] = null);

(statearr_47079_47193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (2))){
var state_47077__$1 = state_47077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47077__$1,(4),from);
} else {
if((state_val_47078 === (3))){
var inst_47075 = (state_47077[(2)]);
var state_47077__$1 = state_47077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47077__$1,inst_47075);
} else {
if((state_val_47078 === (4))){
var inst_47058 = (state_47077[(7)]);
var inst_47058__$1 = (state_47077[(2)]);
var inst_47059 = (inst_47058__$1 == null);
var state_47077__$1 = (function (){var statearr_47080 = state_47077;
(statearr_47080[(7)] = inst_47058__$1);

return statearr_47080;
})();
if(cljs.core.truth_(inst_47059)){
var statearr_47081_47194 = state_47077__$1;
(statearr_47081_47194[(1)] = (5));

} else {
var statearr_47082_47195 = state_47077__$1;
(statearr_47082_47195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (5))){
var inst_47061 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47077__$1 = state_47077;
var statearr_47083_47196 = state_47077__$1;
(statearr_47083_47196[(2)] = inst_47061);

(statearr_47083_47196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (6))){
var inst_47058 = (state_47077[(7)]);
var inst_47063 = (state_47077[(8)]);
var inst_47063__$1 = cljs.core.async.chan.call(null,(1));
var inst_47064 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47065 = [inst_47058,inst_47063__$1];
var inst_47066 = (new cljs.core.PersistentVector(null,2,(5),inst_47064,inst_47065,null));
var state_47077__$1 = (function (){var statearr_47084 = state_47077;
(statearr_47084[(8)] = inst_47063__$1);

return statearr_47084;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47077__$1,(8),jobs,inst_47066);
} else {
if((state_val_47078 === (7))){
var inst_47073 = (state_47077[(2)]);
var state_47077__$1 = state_47077;
var statearr_47085_47197 = state_47077__$1;
(statearr_47085_47197[(2)] = inst_47073);

(statearr_47085_47197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47078 === (8))){
var inst_47063 = (state_47077[(8)]);
var inst_47068 = (state_47077[(2)]);
var state_47077__$1 = (function (){var statearr_47086 = state_47077;
(statearr_47086[(9)] = inst_47068);

return statearr_47086;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47077__$1,(9),results,inst_47063);
} else {
if((state_val_47078 === (9))){
var inst_47070 = (state_47077[(2)]);
var state_47077__$1 = (function (){var statearr_47087 = state_47077;
(statearr_47087[(10)] = inst_47070);

return statearr_47087;
})();
var statearr_47088_47198 = state_47077__$1;
(statearr_47088_47198[(2)] = null);

(statearr_47088_47198[(1)] = (2));


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
});})(c__46608__auto___47192,jobs,results,process,async))
;
return ((function (switch__46454__auto__,c__46608__auto___47192,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0 = (function (){
var statearr_47092 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47092[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__);

(statearr_47092[(1)] = (1));

return statearr_47092;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1 = (function (state_47077){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_47077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47093){if((e47093 instanceof Object)){
var ex__46458__auto__ = e47093;
var statearr_47094_47199 = state_47077;
(statearr_47094_47199[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47200 = state_47077;
state_47077 = G__47200;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = function(state_47077){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1.call(this,state_47077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___47192,jobs,results,process,async))
})();
var state__46610__auto__ = (function (){var statearr_47095 = f__46609__auto__.call(null);
(statearr_47095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___47192);

return statearr_47095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___47192,jobs,results,process,async))
);


var c__46608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto__,jobs,results,process,async){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto__,jobs,results,process,async){
return (function (state_47133){
var state_val_47134 = (state_47133[(1)]);
if((state_val_47134 === (7))){
var inst_47129 = (state_47133[(2)]);
var state_47133__$1 = state_47133;
var statearr_47135_47201 = state_47133__$1;
(statearr_47135_47201[(2)] = inst_47129);

(statearr_47135_47201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (20))){
var state_47133__$1 = state_47133;
var statearr_47136_47202 = state_47133__$1;
(statearr_47136_47202[(2)] = null);

(statearr_47136_47202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (1))){
var state_47133__$1 = state_47133;
var statearr_47137_47203 = state_47133__$1;
(statearr_47137_47203[(2)] = null);

(statearr_47137_47203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (4))){
var inst_47098 = (state_47133[(7)]);
var inst_47098__$1 = (state_47133[(2)]);
var inst_47099 = (inst_47098__$1 == null);
var state_47133__$1 = (function (){var statearr_47138 = state_47133;
(statearr_47138[(7)] = inst_47098__$1);

return statearr_47138;
})();
if(cljs.core.truth_(inst_47099)){
var statearr_47139_47204 = state_47133__$1;
(statearr_47139_47204[(1)] = (5));

} else {
var statearr_47140_47205 = state_47133__$1;
(statearr_47140_47205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (15))){
var inst_47111 = (state_47133[(8)]);
var state_47133__$1 = state_47133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47133__$1,(18),to,inst_47111);
} else {
if((state_val_47134 === (21))){
var inst_47124 = (state_47133[(2)]);
var state_47133__$1 = state_47133;
var statearr_47141_47206 = state_47133__$1;
(statearr_47141_47206[(2)] = inst_47124);

(statearr_47141_47206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (13))){
var inst_47126 = (state_47133[(2)]);
var state_47133__$1 = (function (){var statearr_47142 = state_47133;
(statearr_47142[(9)] = inst_47126);

return statearr_47142;
})();
var statearr_47143_47207 = state_47133__$1;
(statearr_47143_47207[(2)] = null);

(statearr_47143_47207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (6))){
var inst_47098 = (state_47133[(7)]);
var state_47133__$1 = state_47133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47133__$1,(11),inst_47098);
} else {
if((state_val_47134 === (17))){
var inst_47119 = (state_47133[(2)]);
var state_47133__$1 = state_47133;
if(cljs.core.truth_(inst_47119)){
var statearr_47144_47208 = state_47133__$1;
(statearr_47144_47208[(1)] = (19));

} else {
var statearr_47145_47209 = state_47133__$1;
(statearr_47145_47209[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (3))){
var inst_47131 = (state_47133[(2)]);
var state_47133__$1 = state_47133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47133__$1,inst_47131);
} else {
if((state_val_47134 === (12))){
var inst_47108 = (state_47133[(10)]);
var state_47133__$1 = state_47133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47133__$1,(14),inst_47108);
} else {
if((state_val_47134 === (2))){
var state_47133__$1 = state_47133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47133__$1,(4),results);
} else {
if((state_val_47134 === (19))){
var state_47133__$1 = state_47133;
var statearr_47146_47210 = state_47133__$1;
(statearr_47146_47210[(2)] = null);

(statearr_47146_47210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (11))){
var inst_47108 = (state_47133[(2)]);
var state_47133__$1 = (function (){var statearr_47147 = state_47133;
(statearr_47147[(10)] = inst_47108);

return statearr_47147;
})();
var statearr_47148_47211 = state_47133__$1;
(statearr_47148_47211[(2)] = null);

(statearr_47148_47211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (9))){
var state_47133__$1 = state_47133;
var statearr_47149_47212 = state_47133__$1;
(statearr_47149_47212[(2)] = null);

(statearr_47149_47212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (5))){
var state_47133__$1 = state_47133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47150_47213 = state_47133__$1;
(statearr_47150_47213[(1)] = (8));

} else {
var statearr_47151_47214 = state_47133__$1;
(statearr_47151_47214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (14))){
var inst_47113 = (state_47133[(11)]);
var inst_47111 = (state_47133[(8)]);
var inst_47111__$1 = (state_47133[(2)]);
var inst_47112 = (inst_47111__$1 == null);
var inst_47113__$1 = cljs.core.not.call(null,inst_47112);
var state_47133__$1 = (function (){var statearr_47152 = state_47133;
(statearr_47152[(11)] = inst_47113__$1);

(statearr_47152[(8)] = inst_47111__$1);

return statearr_47152;
})();
if(inst_47113__$1){
var statearr_47153_47215 = state_47133__$1;
(statearr_47153_47215[(1)] = (15));

} else {
var statearr_47154_47216 = state_47133__$1;
(statearr_47154_47216[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (16))){
var inst_47113 = (state_47133[(11)]);
var state_47133__$1 = state_47133;
var statearr_47155_47217 = state_47133__$1;
(statearr_47155_47217[(2)] = inst_47113);

(statearr_47155_47217[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (10))){
var inst_47105 = (state_47133[(2)]);
var state_47133__$1 = state_47133;
var statearr_47156_47218 = state_47133__$1;
(statearr_47156_47218[(2)] = inst_47105);

(statearr_47156_47218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (18))){
var inst_47116 = (state_47133[(2)]);
var state_47133__$1 = state_47133;
var statearr_47157_47219 = state_47133__$1;
(statearr_47157_47219[(2)] = inst_47116);

(statearr_47157_47219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47134 === (8))){
var inst_47102 = cljs.core.async.close_BANG_.call(null,to);
var state_47133__$1 = state_47133;
var statearr_47158_47220 = state_47133__$1;
(statearr_47158_47220[(2)] = inst_47102);

(statearr_47158_47220[(1)] = (10));


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
});})(c__46608__auto__,jobs,results,process,async))
;
return ((function (switch__46454__auto__,c__46608__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0 = (function (){
var statearr_47162 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47162[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__);

(statearr_47162[(1)] = (1));

return statearr_47162;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1 = (function (state_47133){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_47133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47163){if((e47163 instanceof Object)){
var ex__46458__auto__ = e47163;
var statearr_47164_47221 = state_47133;
(statearr_47164_47221[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47222 = state_47133;
state_47133 = G__47222;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__ = function(state_47133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1.call(this,state_47133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto__,jobs,results,process,async))
})();
var state__46610__auto__ = (function (){var statearr_47165 = f__46609__auto__.call(null);
(statearr_47165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto__);

return statearr_47165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto__,jobs,results,process,async))
);

return c__46608__auto__;
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
var args47223 = [];
var len__45511__auto___47226 = arguments.length;
var i__45512__auto___47227 = (0);
while(true){
if((i__45512__auto___47227 < len__45511__auto___47226)){
args47223.push((arguments[i__45512__auto___47227]));

var G__47228 = (i__45512__auto___47227 + (1));
i__45512__auto___47227 = G__47228;
continue;
} else {
}
break;
}

var G__47225 = args47223.length;
switch (G__47225) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47223.length)].join('')));

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
var args47230 = [];
var len__45511__auto___47233 = arguments.length;
var i__45512__auto___47234 = (0);
while(true){
if((i__45512__auto___47234 < len__45511__auto___47233)){
args47230.push((arguments[i__45512__auto___47234]));

var G__47235 = (i__45512__auto___47234 + (1));
i__45512__auto___47234 = G__47235;
continue;
} else {
}
break;
}

var G__47232 = args47230.length;
switch (G__47232) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47230.length)].join('')));

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
var args47237 = [];
var len__45511__auto___47290 = arguments.length;
var i__45512__auto___47291 = (0);
while(true){
if((i__45512__auto___47291 < len__45511__auto___47290)){
args47237.push((arguments[i__45512__auto___47291]));

var G__47292 = (i__45512__auto___47291 + (1));
i__45512__auto___47291 = G__47292;
continue;
} else {
}
break;
}

var G__47239 = args47237.length;
switch (G__47239) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47237.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__46608__auto___47294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___47294,tc,fc){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___47294,tc,fc){
return (function (state_47265){
var state_val_47266 = (state_47265[(1)]);
if((state_val_47266 === (7))){
var inst_47261 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
var statearr_47267_47295 = state_47265__$1;
(statearr_47267_47295[(2)] = inst_47261);

(statearr_47267_47295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (1))){
var state_47265__$1 = state_47265;
var statearr_47268_47296 = state_47265__$1;
(statearr_47268_47296[(2)] = null);

(statearr_47268_47296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (4))){
var inst_47242 = (state_47265[(7)]);
var inst_47242__$1 = (state_47265[(2)]);
var inst_47243 = (inst_47242__$1 == null);
var state_47265__$1 = (function (){var statearr_47269 = state_47265;
(statearr_47269[(7)] = inst_47242__$1);

return statearr_47269;
})();
if(cljs.core.truth_(inst_47243)){
var statearr_47270_47297 = state_47265__$1;
(statearr_47270_47297[(1)] = (5));

} else {
var statearr_47271_47298 = state_47265__$1;
(statearr_47271_47298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (13))){
var state_47265__$1 = state_47265;
var statearr_47272_47299 = state_47265__$1;
(statearr_47272_47299[(2)] = null);

(statearr_47272_47299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (6))){
var inst_47242 = (state_47265[(7)]);
var inst_47248 = p.call(null,inst_47242);
var state_47265__$1 = state_47265;
if(cljs.core.truth_(inst_47248)){
var statearr_47273_47300 = state_47265__$1;
(statearr_47273_47300[(1)] = (9));

} else {
var statearr_47274_47301 = state_47265__$1;
(statearr_47274_47301[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (3))){
var inst_47263 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47265__$1,inst_47263);
} else {
if((state_val_47266 === (12))){
var state_47265__$1 = state_47265;
var statearr_47275_47302 = state_47265__$1;
(statearr_47275_47302[(2)] = null);

(statearr_47275_47302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (2))){
var state_47265__$1 = state_47265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47265__$1,(4),ch);
} else {
if((state_val_47266 === (11))){
var inst_47242 = (state_47265[(7)]);
var inst_47252 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47265__$1,(8),inst_47252,inst_47242);
} else {
if((state_val_47266 === (9))){
var state_47265__$1 = state_47265;
var statearr_47276_47303 = state_47265__$1;
(statearr_47276_47303[(2)] = tc);

(statearr_47276_47303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (5))){
var inst_47245 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47246 = cljs.core.async.close_BANG_.call(null,fc);
var state_47265__$1 = (function (){var statearr_47277 = state_47265;
(statearr_47277[(8)] = inst_47245);

return statearr_47277;
})();
var statearr_47278_47304 = state_47265__$1;
(statearr_47278_47304[(2)] = inst_47246);

(statearr_47278_47304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (14))){
var inst_47259 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
var statearr_47279_47305 = state_47265__$1;
(statearr_47279_47305[(2)] = inst_47259);

(statearr_47279_47305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (10))){
var state_47265__$1 = state_47265;
var statearr_47280_47306 = state_47265__$1;
(statearr_47280_47306[(2)] = fc);

(statearr_47280_47306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (8))){
var inst_47254 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
if(cljs.core.truth_(inst_47254)){
var statearr_47281_47307 = state_47265__$1;
(statearr_47281_47307[(1)] = (12));

} else {
var statearr_47282_47308 = state_47265__$1;
(statearr_47282_47308[(1)] = (13));

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
});})(c__46608__auto___47294,tc,fc))
;
return ((function (switch__46454__auto__,c__46608__auto___47294,tc,fc){
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_47286 = [null,null,null,null,null,null,null,null,null];
(statearr_47286[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_47286[(1)] = (1));

return statearr_47286;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_47265){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_47265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47287){if((e47287 instanceof Object)){
var ex__46458__auto__ = e47287;
var statearr_47288_47309 = state_47265;
(statearr_47288_47309[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47310 = state_47265;
state_47265 = G__47310;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_47265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_47265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___47294,tc,fc))
})();
var state__46610__auto__ = (function (){var statearr_47289 = f__46609__auto__.call(null);
(statearr_47289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___47294);

return statearr_47289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___47294,tc,fc))
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
var c__46608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto__){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto__){
return (function (state_47374){
var state_val_47375 = (state_47374[(1)]);
if((state_val_47375 === (7))){
var inst_47370 = (state_47374[(2)]);
var state_47374__$1 = state_47374;
var statearr_47376_47397 = state_47374__$1;
(statearr_47376_47397[(2)] = inst_47370);

(statearr_47376_47397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47375 === (1))){
var inst_47354 = init;
var state_47374__$1 = (function (){var statearr_47377 = state_47374;
(statearr_47377[(7)] = inst_47354);

return statearr_47377;
})();
var statearr_47378_47398 = state_47374__$1;
(statearr_47378_47398[(2)] = null);

(statearr_47378_47398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47375 === (4))){
var inst_47357 = (state_47374[(8)]);
var inst_47357__$1 = (state_47374[(2)]);
var inst_47358 = (inst_47357__$1 == null);
var state_47374__$1 = (function (){var statearr_47379 = state_47374;
(statearr_47379[(8)] = inst_47357__$1);

return statearr_47379;
})();
if(cljs.core.truth_(inst_47358)){
var statearr_47380_47399 = state_47374__$1;
(statearr_47380_47399[(1)] = (5));

} else {
var statearr_47381_47400 = state_47374__$1;
(statearr_47381_47400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47375 === (6))){
var inst_47357 = (state_47374[(8)]);
var inst_47354 = (state_47374[(7)]);
var inst_47361 = (state_47374[(9)]);
var inst_47361__$1 = f.call(null,inst_47354,inst_47357);
var inst_47362 = cljs.core.reduced_QMARK_.call(null,inst_47361__$1);
var state_47374__$1 = (function (){var statearr_47382 = state_47374;
(statearr_47382[(9)] = inst_47361__$1);

return statearr_47382;
})();
if(inst_47362){
var statearr_47383_47401 = state_47374__$1;
(statearr_47383_47401[(1)] = (8));

} else {
var statearr_47384_47402 = state_47374__$1;
(statearr_47384_47402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47375 === (3))){
var inst_47372 = (state_47374[(2)]);
var state_47374__$1 = state_47374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47374__$1,inst_47372);
} else {
if((state_val_47375 === (2))){
var state_47374__$1 = state_47374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47374__$1,(4),ch);
} else {
if((state_val_47375 === (9))){
var inst_47361 = (state_47374[(9)]);
var inst_47354 = inst_47361;
var state_47374__$1 = (function (){var statearr_47385 = state_47374;
(statearr_47385[(7)] = inst_47354);

return statearr_47385;
})();
var statearr_47386_47403 = state_47374__$1;
(statearr_47386_47403[(2)] = null);

(statearr_47386_47403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47375 === (5))){
var inst_47354 = (state_47374[(7)]);
var state_47374__$1 = state_47374;
var statearr_47387_47404 = state_47374__$1;
(statearr_47387_47404[(2)] = inst_47354);

(statearr_47387_47404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47375 === (10))){
var inst_47368 = (state_47374[(2)]);
var state_47374__$1 = state_47374;
var statearr_47388_47405 = state_47374__$1;
(statearr_47388_47405[(2)] = inst_47368);

(statearr_47388_47405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47375 === (8))){
var inst_47361 = (state_47374[(9)]);
var inst_47364 = cljs.core.deref.call(null,inst_47361);
var state_47374__$1 = state_47374;
var statearr_47389_47406 = state_47374__$1;
(statearr_47389_47406[(2)] = inst_47364);

(statearr_47389_47406[(1)] = (10));


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
});})(c__46608__auto__))
;
return ((function (switch__46454__auto__,c__46608__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46455__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46455__auto____0 = (function (){
var statearr_47393 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47393[(0)] = cljs$core$async$reduce_$_state_machine__46455__auto__);

(statearr_47393[(1)] = (1));

return statearr_47393;
});
var cljs$core$async$reduce_$_state_machine__46455__auto____1 = (function (state_47374){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_47374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47394){if((e47394 instanceof Object)){
var ex__46458__auto__ = e47394;
var statearr_47395_47407 = state_47374;
(statearr_47395_47407[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47408 = state_47374;
state_47374 = G__47408;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46455__auto__ = function(state_47374){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46455__auto____1.call(this,state_47374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46455__auto____0;
cljs$core$async$reduce_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46455__auto____1;
return cljs$core$async$reduce_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto__))
})();
var state__46610__auto__ = (function (){var statearr_47396 = f__46609__auto__.call(null);
(statearr_47396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto__);

return statearr_47396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto__))
);

return c__46608__auto__;
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
var args47409 = [];
var len__45511__auto___47461 = arguments.length;
var i__45512__auto___47462 = (0);
while(true){
if((i__45512__auto___47462 < len__45511__auto___47461)){
args47409.push((arguments[i__45512__auto___47462]));

var G__47463 = (i__45512__auto___47462 + (1));
i__45512__auto___47462 = G__47463;
continue;
} else {
}
break;
}

var G__47411 = args47409.length;
switch (G__47411) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47409.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto__){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto__){
return (function (state_47436){
var state_val_47437 = (state_47436[(1)]);
if((state_val_47437 === (7))){
var inst_47418 = (state_47436[(2)]);
var state_47436__$1 = state_47436;
var statearr_47438_47465 = state_47436__$1;
(statearr_47438_47465[(2)] = inst_47418);

(statearr_47438_47465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47437 === (1))){
var inst_47412 = cljs.core.seq.call(null,coll);
var inst_47413 = inst_47412;
var state_47436__$1 = (function (){var statearr_47439 = state_47436;
(statearr_47439[(7)] = inst_47413);

return statearr_47439;
})();
var statearr_47440_47466 = state_47436__$1;
(statearr_47440_47466[(2)] = null);

(statearr_47440_47466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47437 === (4))){
var inst_47413 = (state_47436[(7)]);
var inst_47416 = cljs.core.first.call(null,inst_47413);
var state_47436__$1 = state_47436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47436__$1,(7),ch,inst_47416);
} else {
if((state_val_47437 === (13))){
var inst_47430 = (state_47436[(2)]);
var state_47436__$1 = state_47436;
var statearr_47441_47467 = state_47436__$1;
(statearr_47441_47467[(2)] = inst_47430);

(statearr_47441_47467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47437 === (6))){
var inst_47421 = (state_47436[(2)]);
var state_47436__$1 = state_47436;
if(cljs.core.truth_(inst_47421)){
var statearr_47442_47468 = state_47436__$1;
(statearr_47442_47468[(1)] = (8));

} else {
var statearr_47443_47469 = state_47436__$1;
(statearr_47443_47469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47437 === (3))){
var inst_47434 = (state_47436[(2)]);
var state_47436__$1 = state_47436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47436__$1,inst_47434);
} else {
if((state_val_47437 === (12))){
var state_47436__$1 = state_47436;
var statearr_47444_47470 = state_47436__$1;
(statearr_47444_47470[(2)] = null);

(statearr_47444_47470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47437 === (2))){
var inst_47413 = (state_47436[(7)]);
var state_47436__$1 = state_47436;
if(cljs.core.truth_(inst_47413)){
var statearr_47445_47471 = state_47436__$1;
(statearr_47445_47471[(1)] = (4));

} else {
var statearr_47446_47472 = state_47436__$1;
(statearr_47446_47472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47437 === (11))){
var inst_47427 = cljs.core.async.close_BANG_.call(null,ch);
var state_47436__$1 = state_47436;
var statearr_47447_47473 = state_47436__$1;
(statearr_47447_47473[(2)] = inst_47427);

(statearr_47447_47473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47437 === (9))){
var state_47436__$1 = state_47436;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47448_47474 = state_47436__$1;
(statearr_47448_47474[(1)] = (11));

} else {
var statearr_47449_47475 = state_47436__$1;
(statearr_47449_47475[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47437 === (5))){
var inst_47413 = (state_47436[(7)]);
var state_47436__$1 = state_47436;
var statearr_47450_47476 = state_47436__$1;
(statearr_47450_47476[(2)] = inst_47413);

(statearr_47450_47476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47437 === (10))){
var inst_47432 = (state_47436[(2)]);
var state_47436__$1 = state_47436;
var statearr_47451_47477 = state_47436__$1;
(statearr_47451_47477[(2)] = inst_47432);

(statearr_47451_47477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47437 === (8))){
var inst_47413 = (state_47436[(7)]);
var inst_47423 = cljs.core.next.call(null,inst_47413);
var inst_47413__$1 = inst_47423;
var state_47436__$1 = (function (){var statearr_47452 = state_47436;
(statearr_47452[(7)] = inst_47413__$1);

return statearr_47452;
})();
var statearr_47453_47478 = state_47436__$1;
(statearr_47453_47478[(2)] = null);

(statearr_47453_47478[(1)] = (2));


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
});})(c__46608__auto__))
;
return ((function (switch__46454__auto__,c__46608__auto__){
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_47457 = [null,null,null,null,null,null,null,null];
(statearr_47457[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_47457[(1)] = (1));

return statearr_47457;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_47436){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_47436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47458){if((e47458 instanceof Object)){
var ex__46458__auto__ = e47458;
var statearr_47459_47479 = state_47436;
(statearr_47459_47479[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47480 = state_47436;
state_47436 = G__47480;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_47436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_47436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto__))
})();
var state__46610__auto__ = (function (){var statearr_47460 = f__46609__auto__.call(null);
(statearr_47460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto__);

return statearr_47460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto__))
);

return c__46608__auto__;
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
var x__45099__auto__ = (((_ == null))?null:_);
var m__45100__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,_);
} else {
var m__45100__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,_);
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
var x__45099__auto__ = (((m == null))?null:m);
var m__45100__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__45100__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__45099__auto__ = (((m == null))?null:m);
var m__45100__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,m,ch);
} else {
var m__45100__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,m,ch);
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
var x__45099__auto__ = (((m == null))?null:m);
var m__45100__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,m);
} else {
var m__45100__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async47706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47706 = (function (mult,ch,cs,meta47707){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta47707 = meta47707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47708,meta47707__$1){
var self__ = this;
var _47708__$1 = this;
return (new cljs.core.async.t_cljs$core$async47706(self__.mult,self__.ch,self__.cs,meta47707__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47708){
var self__ = this;
var _47708__$1 = this;
return self__.meta47707;
});})(cs))
;

cljs.core.async.t_cljs$core$async47706.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async47706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47706.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async47706.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47706.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47706.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47706.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47707","meta47707",1180841885,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47706";

cljs.core.async.t_cljs$core$async47706.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__45042__auto__,writer__45043__auto__,opt__45044__auto__){
return cljs.core._write.call(null,writer__45043__auto__,"cljs.core.async/t_cljs$core$async47706");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47706 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47706(mult__$1,ch__$1,cs__$1,meta47707){
return (new cljs.core.async.t_cljs$core$async47706(mult__$1,ch__$1,cs__$1,meta47707));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47706(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46608__auto___47931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___47931,cs,m,dchan,dctr,done){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___47931,cs,m,dchan,dctr,done){
return (function (state_47843){
var state_val_47844 = (state_47843[(1)]);
if((state_val_47844 === (7))){
var inst_47839 = (state_47843[(2)]);
var state_47843__$1 = state_47843;
var statearr_47845_47932 = state_47843__$1;
(statearr_47845_47932[(2)] = inst_47839);

(statearr_47845_47932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (20))){
var inst_47742 = (state_47843[(7)]);
var inst_47754 = cljs.core.first.call(null,inst_47742);
var inst_47755 = cljs.core.nth.call(null,inst_47754,(0),null);
var inst_47756 = cljs.core.nth.call(null,inst_47754,(1),null);
var state_47843__$1 = (function (){var statearr_47846 = state_47843;
(statearr_47846[(8)] = inst_47755);

return statearr_47846;
})();
if(cljs.core.truth_(inst_47756)){
var statearr_47847_47933 = state_47843__$1;
(statearr_47847_47933[(1)] = (22));

} else {
var statearr_47848_47934 = state_47843__$1;
(statearr_47848_47934[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (27))){
var inst_47711 = (state_47843[(9)]);
var inst_47791 = (state_47843[(10)]);
var inst_47786 = (state_47843[(11)]);
var inst_47784 = (state_47843[(12)]);
var inst_47791__$1 = cljs.core._nth.call(null,inst_47784,inst_47786);
var inst_47792 = cljs.core.async.put_BANG_.call(null,inst_47791__$1,inst_47711,done);
var state_47843__$1 = (function (){var statearr_47849 = state_47843;
(statearr_47849[(10)] = inst_47791__$1);

return statearr_47849;
})();
if(cljs.core.truth_(inst_47792)){
var statearr_47850_47935 = state_47843__$1;
(statearr_47850_47935[(1)] = (30));

} else {
var statearr_47851_47936 = state_47843__$1;
(statearr_47851_47936[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (1))){
var state_47843__$1 = state_47843;
var statearr_47852_47937 = state_47843__$1;
(statearr_47852_47937[(2)] = null);

(statearr_47852_47937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (24))){
var inst_47742 = (state_47843[(7)]);
var inst_47761 = (state_47843[(2)]);
var inst_47762 = cljs.core.next.call(null,inst_47742);
var inst_47720 = inst_47762;
var inst_47721 = null;
var inst_47722 = (0);
var inst_47723 = (0);
var state_47843__$1 = (function (){var statearr_47853 = state_47843;
(statearr_47853[(13)] = inst_47723);

(statearr_47853[(14)] = inst_47720);

(statearr_47853[(15)] = inst_47721);

(statearr_47853[(16)] = inst_47761);

(statearr_47853[(17)] = inst_47722);

return statearr_47853;
})();
var statearr_47854_47938 = state_47843__$1;
(statearr_47854_47938[(2)] = null);

(statearr_47854_47938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (39))){
var state_47843__$1 = state_47843;
var statearr_47858_47939 = state_47843__$1;
(statearr_47858_47939[(2)] = null);

(statearr_47858_47939[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (4))){
var inst_47711 = (state_47843[(9)]);
var inst_47711__$1 = (state_47843[(2)]);
var inst_47712 = (inst_47711__$1 == null);
var state_47843__$1 = (function (){var statearr_47859 = state_47843;
(statearr_47859[(9)] = inst_47711__$1);

return statearr_47859;
})();
if(cljs.core.truth_(inst_47712)){
var statearr_47860_47940 = state_47843__$1;
(statearr_47860_47940[(1)] = (5));

} else {
var statearr_47861_47941 = state_47843__$1;
(statearr_47861_47941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (15))){
var inst_47723 = (state_47843[(13)]);
var inst_47720 = (state_47843[(14)]);
var inst_47721 = (state_47843[(15)]);
var inst_47722 = (state_47843[(17)]);
var inst_47738 = (state_47843[(2)]);
var inst_47739 = (inst_47723 + (1));
var tmp47855 = inst_47720;
var tmp47856 = inst_47721;
var tmp47857 = inst_47722;
var inst_47720__$1 = tmp47855;
var inst_47721__$1 = tmp47856;
var inst_47722__$1 = tmp47857;
var inst_47723__$1 = inst_47739;
var state_47843__$1 = (function (){var statearr_47862 = state_47843;
(statearr_47862[(13)] = inst_47723__$1);

(statearr_47862[(18)] = inst_47738);

(statearr_47862[(14)] = inst_47720__$1);

(statearr_47862[(15)] = inst_47721__$1);

(statearr_47862[(17)] = inst_47722__$1);

return statearr_47862;
})();
var statearr_47863_47942 = state_47843__$1;
(statearr_47863_47942[(2)] = null);

(statearr_47863_47942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (21))){
var inst_47765 = (state_47843[(2)]);
var state_47843__$1 = state_47843;
var statearr_47867_47943 = state_47843__$1;
(statearr_47867_47943[(2)] = inst_47765);

(statearr_47867_47943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (31))){
var inst_47791 = (state_47843[(10)]);
var inst_47795 = done.call(null,null);
var inst_47796 = cljs.core.async.untap_STAR_.call(null,m,inst_47791);
var state_47843__$1 = (function (){var statearr_47868 = state_47843;
(statearr_47868[(19)] = inst_47795);

return statearr_47868;
})();
var statearr_47869_47944 = state_47843__$1;
(statearr_47869_47944[(2)] = inst_47796);

(statearr_47869_47944[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (32))){
var inst_47786 = (state_47843[(11)]);
var inst_47783 = (state_47843[(20)]);
var inst_47785 = (state_47843[(21)]);
var inst_47784 = (state_47843[(12)]);
var inst_47798 = (state_47843[(2)]);
var inst_47799 = (inst_47786 + (1));
var tmp47864 = inst_47783;
var tmp47865 = inst_47785;
var tmp47866 = inst_47784;
var inst_47783__$1 = tmp47864;
var inst_47784__$1 = tmp47866;
var inst_47785__$1 = tmp47865;
var inst_47786__$1 = inst_47799;
var state_47843__$1 = (function (){var statearr_47870 = state_47843;
(statearr_47870[(11)] = inst_47786__$1);

(statearr_47870[(20)] = inst_47783__$1);

(statearr_47870[(21)] = inst_47785__$1);

(statearr_47870[(22)] = inst_47798);

(statearr_47870[(12)] = inst_47784__$1);

return statearr_47870;
})();
var statearr_47871_47945 = state_47843__$1;
(statearr_47871_47945[(2)] = null);

(statearr_47871_47945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (40))){
var inst_47811 = (state_47843[(23)]);
var inst_47815 = done.call(null,null);
var inst_47816 = cljs.core.async.untap_STAR_.call(null,m,inst_47811);
var state_47843__$1 = (function (){var statearr_47872 = state_47843;
(statearr_47872[(24)] = inst_47815);

return statearr_47872;
})();
var statearr_47873_47946 = state_47843__$1;
(statearr_47873_47946[(2)] = inst_47816);

(statearr_47873_47946[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (33))){
var inst_47802 = (state_47843[(25)]);
var inst_47804 = cljs.core.chunked_seq_QMARK_.call(null,inst_47802);
var state_47843__$1 = state_47843;
if(inst_47804){
var statearr_47874_47947 = state_47843__$1;
(statearr_47874_47947[(1)] = (36));

} else {
var statearr_47875_47948 = state_47843__$1;
(statearr_47875_47948[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (13))){
var inst_47732 = (state_47843[(26)]);
var inst_47735 = cljs.core.async.close_BANG_.call(null,inst_47732);
var state_47843__$1 = state_47843;
var statearr_47876_47949 = state_47843__$1;
(statearr_47876_47949[(2)] = inst_47735);

(statearr_47876_47949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (22))){
var inst_47755 = (state_47843[(8)]);
var inst_47758 = cljs.core.async.close_BANG_.call(null,inst_47755);
var state_47843__$1 = state_47843;
var statearr_47877_47950 = state_47843__$1;
(statearr_47877_47950[(2)] = inst_47758);

(statearr_47877_47950[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (36))){
var inst_47802 = (state_47843[(25)]);
var inst_47806 = cljs.core.chunk_first.call(null,inst_47802);
var inst_47807 = cljs.core.chunk_rest.call(null,inst_47802);
var inst_47808 = cljs.core.count.call(null,inst_47806);
var inst_47783 = inst_47807;
var inst_47784 = inst_47806;
var inst_47785 = inst_47808;
var inst_47786 = (0);
var state_47843__$1 = (function (){var statearr_47878 = state_47843;
(statearr_47878[(11)] = inst_47786);

(statearr_47878[(20)] = inst_47783);

(statearr_47878[(21)] = inst_47785);

(statearr_47878[(12)] = inst_47784);

return statearr_47878;
})();
var statearr_47879_47951 = state_47843__$1;
(statearr_47879_47951[(2)] = null);

(statearr_47879_47951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (41))){
var inst_47802 = (state_47843[(25)]);
var inst_47818 = (state_47843[(2)]);
var inst_47819 = cljs.core.next.call(null,inst_47802);
var inst_47783 = inst_47819;
var inst_47784 = null;
var inst_47785 = (0);
var inst_47786 = (0);
var state_47843__$1 = (function (){var statearr_47880 = state_47843;
(statearr_47880[(11)] = inst_47786);

(statearr_47880[(27)] = inst_47818);

(statearr_47880[(20)] = inst_47783);

(statearr_47880[(21)] = inst_47785);

(statearr_47880[(12)] = inst_47784);

return statearr_47880;
})();
var statearr_47881_47952 = state_47843__$1;
(statearr_47881_47952[(2)] = null);

(statearr_47881_47952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (43))){
var state_47843__$1 = state_47843;
var statearr_47882_47953 = state_47843__$1;
(statearr_47882_47953[(2)] = null);

(statearr_47882_47953[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (29))){
var inst_47827 = (state_47843[(2)]);
var state_47843__$1 = state_47843;
var statearr_47883_47954 = state_47843__$1;
(statearr_47883_47954[(2)] = inst_47827);

(statearr_47883_47954[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (44))){
var inst_47836 = (state_47843[(2)]);
var state_47843__$1 = (function (){var statearr_47884 = state_47843;
(statearr_47884[(28)] = inst_47836);

return statearr_47884;
})();
var statearr_47885_47955 = state_47843__$1;
(statearr_47885_47955[(2)] = null);

(statearr_47885_47955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (6))){
var inst_47775 = (state_47843[(29)]);
var inst_47774 = cljs.core.deref.call(null,cs);
var inst_47775__$1 = cljs.core.keys.call(null,inst_47774);
var inst_47776 = cljs.core.count.call(null,inst_47775__$1);
var inst_47777 = cljs.core.reset_BANG_.call(null,dctr,inst_47776);
var inst_47782 = cljs.core.seq.call(null,inst_47775__$1);
var inst_47783 = inst_47782;
var inst_47784 = null;
var inst_47785 = (0);
var inst_47786 = (0);
var state_47843__$1 = (function (){var statearr_47886 = state_47843;
(statearr_47886[(11)] = inst_47786);

(statearr_47886[(20)] = inst_47783);

(statearr_47886[(21)] = inst_47785);

(statearr_47886[(30)] = inst_47777);

(statearr_47886[(12)] = inst_47784);

(statearr_47886[(29)] = inst_47775__$1);

return statearr_47886;
})();
var statearr_47887_47956 = state_47843__$1;
(statearr_47887_47956[(2)] = null);

(statearr_47887_47956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (28))){
var inst_47783 = (state_47843[(20)]);
var inst_47802 = (state_47843[(25)]);
var inst_47802__$1 = cljs.core.seq.call(null,inst_47783);
var state_47843__$1 = (function (){var statearr_47888 = state_47843;
(statearr_47888[(25)] = inst_47802__$1);

return statearr_47888;
})();
if(inst_47802__$1){
var statearr_47889_47957 = state_47843__$1;
(statearr_47889_47957[(1)] = (33));

} else {
var statearr_47890_47958 = state_47843__$1;
(statearr_47890_47958[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (25))){
var inst_47786 = (state_47843[(11)]);
var inst_47785 = (state_47843[(21)]);
var inst_47788 = (inst_47786 < inst_47785);
var inst_47789 = inst_47788;
var state_47843__$1 = state_47843;
if(cljs.core.truth_(inst_47789)){
var statearr_47891_47959 = state_47843__$1;
(statearr_47891_47959[(1)] = (27));

} else {
var statearr_47892_47960 = state_47843__$1;
(statearr_47892_47960[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (34))){
var state_47843__$1 = state_47843;
var statearr_47893_47961 = state_47843__$1;
(statearr_47893_47961[(2)] = null);

(statearr_47893_47961[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (17))){
var state_47843__$1 = state_47843;
var statearr_47894_47962 = state_47843__$1;
(statearr_47894_47962[(2)] = null);

(statearr_47894_47962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (3))){
var inst_47841 = (state_47843[(2)]);
var state_47843__$1 = state_47843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47843__$1,inst_47841);
} else {
if((state_val_47844 === (12))){
var inst_47770 = (state_47843[(2)]);
var state_47843__$1 = state_47843;
var statearr_47895_47963 = state_47843__$1;
(statearr_47895_47963[(2)] = inst_47770);

(statearr_47895_47963[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (2))){
var state_47843__$1 = state_47843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47843__$1,(4),ch);
} else {
if((state_val_47844 === (23))){
var state_47843__$1 = state_47843;
var statearr_47896_47964 = state_47843__$1;
(statearr_47896_47964[(2)] = null);

(statearr_47896_47964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (35))){
var inst_47825 = (state_47843[(2)]);
var state_47843__$1 = state_47843;
var statearr_47897_47965 = state_47843__$1;
(statearr_47897_47965[(2)] = inst_47825);

(statearr_47897_47965[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (19))){
var inst_47742 = (state_47843[(7)]);
var inst_47746 = cljs.core.chunk_first.call(null,inst_47742);
var inst_47747 = cljs.core.chunk_rest.call(null,inst_47742);
var inst_47748 = cljs.core.count.call(null,inst_47746);
var inst_47720 = inst_47747;
var inst_47721 = inst_47746;
var inst_47722 = inst_47748;
var inst_47723 = (0);
var state_47843__$1 = (function (){var statearr_47898 = state_47843;
(statearr_47898[(13)] = inst_47723);

(statearr_47898[(14)] = inst_47720);

(statearr_47898[(15)] = inst_47721);

(statearr_47898[(17)] = inst_47722);

return statearr_47898;
})();
var statearr_47899_47966 = state_47843__$1;
(statearr_47899_47966[(2)] = null);

(statearr_47899_47966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (11))){
var inst_47720 = (state_47843[(14)]);
var inst_47742 = (state_47843[(7)]);
var inst_47742__$1 = cljs.core.seq.call(null,inst_47720);
var state_47843__$1 = (function (){var statearr_47900 = state_47843;
(statearr_47900[(7)] = inst_47742__$1);

return statearr_47900;
})();
if(inst_47742__$1){
var statearr_47901_47967 = state_47843__$1;
(statearr_47901_47967[(1)] = (16));

} else {
var statearr_47902_47968 = state_47843__$1;
(statearr_47902_47968[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (9))){
var inst_47772 = (state_47843[(2)]);
var state_47843__$1 = state_47843;
var statearr_47903_47969 = state_47843__$1;
(statearr_47903_47969[(2)] = inst_47772);

(statearr_47903_47969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (5))){
var inst_47718 = cljs.core.deref.call(null,cs);
var inst_47719 = cljs.core.seq.call(null,inst_47718);
var inst_47720 = inst_47719;
var inst_47721 = null;
var inst_47722 = (0);
var inst_47723 = (0);
var state_47843__$1 = (function (){var statearr_47904 = state_47843;
(statearr_47904[(13)] = inst_47723);

(statearr_47904[(14)] = inst_47720);

(statearr_47904[(15)] = inst_47721);

(statearr_47904[(17)] = inst_47722);

return statearr_47904;
})();
var statearr_47905_47970 = state_47843__$1;
(statearr_47905_47970[(2)] = null);

(statearr_47905_47970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (14))){
var state_47843__$1 = state_47843;
var statearr_47906_47971 = state_47843__$1;
(statearr_47906_47971[(2)] = null);

(statearr_47906_47971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (45))){
var inst_47833 = (state_47843[(2)]);
var state_47843__$1 = state_47843;
var statearr_47907_47972 = state_47843__$1;
(statearr_47907_47972[(2)] = inst_47833);

(statearr_47907_47972[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (26))){
var inst_47775 = (state_47843[(29)]);
var inst_47829 = (state_47843[(2)]);
var inst_47830 = cljs.core.seq.call(null,inst_47775);
var state_47843__$1 = (function (){var statearr_47908 = state_47843;
(statearr_47908[(31)] = inst_47829);

return statearr_47908;
})();
if(inst_47830){
var statearr_47909_47973 = state_47843__$1;
(statearr_47909_47973[(1)] = (42));

} else {
var statearr_47910_47974 = state_47843__$1;
(statearr_47910_47974[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (16))){
var inst_47742 = (state_47843[(7)]);
var inst_47744 = cljs.core.chunked_seq_QMARK_.call(null,inst_47742);
var state_47843__$1 = state_47843;
if(inst_47744){
var statearr_47911_47975 = state_47843__$1;
(statearr_47911_47975[(1)] = (19));

} else {
var statearr_47912_47976 = state_47843__$1;
(statearr_47912_47976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (38))){
var inst_47822 = (state_47843[(2)]);
var state_47843__$1 = state_47843;
var statearr_47913_47977 = state_47843__$1;
(statearr_47913_47977[(2)] = inst_47822);

(statearr_47913_47977[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (30))){
var state_47843__$1 = state_47843;
var statearr_47914_47978 = state_47843__$1;
(statearr_47914_47978[(2)] = null);

(statearr_47914_47978[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (10))){
var inst_47723 = (state_47843[(13)]);
var inst_47721 = (state_47843[(15)]);
var inst_47731 = cljs.core._nth.call(null,inst_47721,inst_47723);
var inst_47732 = cljs.core.nth.call(null,inst_47731,(0),null);
var inst_47733 = cljs.core.nth.call(null,inst_47731,(1),null);
var state_47843__$1 = (function (){var statearr_47915 = state_47843;
(statearr_47915[(26)] = inst_47732);

return statearr_47915;
})();
if(cljs.core.truth_(inst_47733)){
var statearr_47916_47979 = state_47843__$1;
(statearr_47916_47979[(1)] = (13));

} else {
var statearr_47917_47980 = state_47843__$1;
(statearr_47917_47980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (18))){
var inst_47768 = (state_47843[(2)]);
var state_47843__$1 = state_47843;
var statearr_47918_47981 = state_47843__$1;
(statearr_47918_47981[(2)] = inst_47768);

(statearr_47918_47981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (42))){
var state_47843__$1 = state_47843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47843__$1,(45),dchan);
} else {
if((state_val_47844 === (37))){
var inst_47711 = (state_47843[(9)]);
var inst_47811 = (state_47843[(23)]);
var inst_47802 = (state_47843[(25)]);
var inst_47811__$1 = cljs.core.first.call(null,inst_47802);
var inst_47812 = cljs.core.async.put_BANG_.call(null,inst_47811__$1,inst_47711,done);
var state_47843__$1 = (function (){var statearr_47919 = state_47843;
(statearr_47919[(23)] = inst_47811__$1);

return statearr_47919;
})();
if(cljs.core.truth_(inst_47812)){
var statearr_47920_47982 = state_47843__$1;
(statearr_47920_47982[(1)] = (39));

} else {
var statearr_47921_47983 = state_47843__$1;
(statearr_47921_47983[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47844 === (8))){
var inst_47723 = (state_47843[(13)]);
var inst_47722 = (state_47843[(17)]);
var inst_47725 = (inst_47723 < inst_47722);
var inst_47726 = inst_47725;
var state_47843__$1 = state_47843;
if(cljs.core.truth_(inst_47726)){
var statearr_47922_47984 = state_47843__$1;
(statearr_47922_47984[(1)] = (10));

} else {
var statearr_47923_47985 = state_47843__$1;
(statearr_47923_47985[(1)] = (11));

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
});})(c__46608__auto___47931,cs,m,dchan,dctr,done))
;
return ((function (switch__46454__auto__,c__46608__auto___47931,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46455__auto__ = null;
var cljs$core$async$mult_$_state_machine__46455__auto____0 = (function (){
var statearr_47927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47927[(0)] = cljs$core$async$mult_$_state_machine__46455__auto__);

(statearr_47927[(1)] = (1));

return statearr_47927;
});
var cljs$core$async$mult_$_state_machine__46455__auto____1 = (function (state_47843){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_47843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e47928){if((e47928 instanceof Object)){
var ex__46458__auto__ = e47928;
var statearr_47929_47986 = state_47843;
(statearr_47929_47986[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47987 = state_47843;
state_47843 = G__47987;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46455__auto__ = function(state_47843){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46455__auto____1.call(this,state_47843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46455__auto____0;
cljs$core$async$mult_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46455__auto____1;
return cljs$core$async$mult_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___47931,cs,m,dchan,dctr,done))
})();
var state__46610__auto__ = (function (){var statearr_47930 = f__46609__auto__.call(null);
(statearr_47930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___47931);

return statearr_47930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___47931,cs,m,dchan,dctr,done))
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
var args47988 = [];
var len__45511__auto___47991 = arguments.length;
var i__45512__auto___47992 = (0);
while(true){
if((i__45512__auto___47992 < len__45511__auto___47991)){
args47988.push((arguments[i__45512__auto___47992]));

var G__47993 = (i__45512__auto___47992 + (1));
i__45512__auto___47992 = G__47993;
continue;
} else {
}
break;
}

var G__47990 = args47988.length;
switch (G__47990) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47988.length)].join('')));

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
var x__45099__auto__ = (((m == null))?null:m);
var m__45100__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,m,ch);
} else {
var m__45100__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,m,ch);
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
var x__45099__auto__ = (((m == null))?null:m);
var m__45100__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,m,ch);
} else {
var m__45100__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,m,ch);
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
var x__45099__auto__ = (((m == null))?null:m);
var m__45100__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,m);
} else {
var m__45100__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,m);
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
var x__45099__auto__ = (((m == null))?null:m);
var m__45100__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,m,state_map);
} else {
var m__45100__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,m,state_map);
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
var x__45099__auto__ = (((m == null))?null:m);
var m__45100__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,m,mode);
} else {
var m__45100__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__45518__auto__ = [];
var len__45511__auto___48005 = arguments.length;
var i__45512__auto___48006 = (0);
while(true){
if((i__45512__auto___48006 < len__45511__auto___48005)){
args__45518__auto__.push((arguments[i__45512__auto___48006]));

var G__48007 = (i__45512__auto___48006 + (1));
i__45512__auto___48006 = G__48007;
continue;
} else {
}
break;
}

var argseq__45519__auto__ = ((((3) < args__45518__auto__.length))?(new cljs.core.IndexedSeq(args__45518__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45519__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47999){
var map__48000 = p__47999;
var map__48000__$1 = ((((!((map__48000 == null)))?((((map__48000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48000):map__48000);
var opts = map__48000__$1;
var statearr_48002_48008 = state;
(statearr_48002_48008[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__48000,map__48000__$1,opts){
return (function (val){
var statearr_48003_48009 = state;
(statearr_48003_48009[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48000,map__48000__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_48004_48010 = state;
(statearr_48004_48010[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47995){
var G__47996 = cljs.core.first.call(null,seq47995);
var seq47995__$1 = cljs.core.next.call(null,seq47995);
var G__47997 = cljs.core.first.call(null,seq47995__$1);
var seq47995__$2 = cljs.core.next.call(null,seq47995__$1);
var G__47998 = cljs.core.first.call(null,seq47995__$2);
var seq47995__$3 = cljs.core.next.call(null,seq47995__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47996,G__47997,G__47998,seq47995__$3);
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
if(typeof cljs.core.async.t_cljs$core$async48176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48176 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48177){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48177 = meta48177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48178,meta48177__$1){
var self__ = this;
var _48178__$1 = this;
return (new cljs.core.async.t_cljs$core$async48176(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48177__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48178){
var self__ = this;
var _48178__$1 = this;
return self__.meta48177;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48176.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48177","meta48177",103118926,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48176";

cljs.core.async.t_cljs$core$async48176.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__45042__auto__,writer__45043__auto__,opt__45044__auto__){
return cljs.core._write.call(null,writer__45043__auto__,"cljs.core.async/t_cljs$core$async48176");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48176 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48176(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48177){
return (new cljs.core.async.t_cljs$core$async48176(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48177));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48176(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46608__auto___48341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___48341,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___48341,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48278){
var state_val_48279 = (state_48278[(1)]);
if((state_val_48279 === (7))){
var inst_48194 = (state_48278[(2)]);
var state_48278__$1 = state_48278;
var statearr_48280_48342 = state_48278__$1;
(statearr_48280_48342[(2)] = inst_48194);

(statearr_48280_48342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (20))){
var inst_48206 = (state_48278[(7)]);
var state_48278__$1 = state_48278;
var statearr_48281_48343 = state_48278__$1;
(statearr_48281_48343[(2)] = inst_48206);

(statearr_48281_48343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (27))){
var state_48278__$1 = state_48278;
var statearr_48282_48344 = state_48278__$1;
(statearr_48282_48344[(2)] = null);

(statearr_48282_48344[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (1))){
var inst_48182 = (state_48278[(8)]);
var inst_48182__$1 = calc_state.call(null);
var inst_48184 = (inst_48182__$1 == null);
var inst_48185 = cljs.core.not.call(null,inst_48184);
var state_48278__$1 = (function (){var statearr_48283 = state_48278;
(statearr_48283[(8)] = inst_48182__$1);

return statearr_48283;
})();
if(inst_48185){
var statearr_48284_48345 = state_48278__$1;
(statearr_48284_48345[(1)] = (2));

} else {
var statearr_48285_48346 = state_48278__$1;
(statearr_48285_48346[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (24))){
var inst_48252 = (state_48278[(9)]);
var inst_48238 = (state_48278[(10)]);
var inst_48229 = (state_48278[(11)]);
var inst_48252__$1 = inst_48229.call(null,inst_48238);
var state_48278__$1 = (function (){var statearr_48286 = state_48278;
(statearr_48286[(9)] = inst_48252__$1);

return statearr_48286;
})();
if(cljs.core.truth_(inst_48252__$1)){
var statearr_48287_48347 = state_48278__$1;
(statearr_48287_48347[(1)] = (29));

} else {
var statearr_48288_48348 = state_48278__$1;
(statearr_48288_48348[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (4))){
var inst_48197 = (state_48278[(2)]);
var state_48278__$1 = state_48278;
if(cljs.core.truth_(inst_48197)){
var statearr_48289_48349 = state_48278__$1;
(statearr_48289_48349[(1)] = (8));

} else {
var statearr_48290_48350 = state_48278__$1;
(statearr_48290_48350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (15))){
var inst_48223 = (state_48278[(2)]);
var state_48278__$1 = state_48278;
if(cljs.core.truth_(inst_48223)){
var statearr_48291_48351 = state_48278__$1;
(statearr_48291_48351[(1)] = (19));

} else {
var statearr_48292_48352 = state_48278__$1;
(statearr_48292_48352[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (21))){
var inst_48228 = (state_48278[(12)]);
var inst_48228__$1 = (state_48278[(2)]);
var inst_48229 = cljs.core.get.call(null,inst_48228__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48230 = cljs.core.get.call(null,inst_48228__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48231 = cljs.core.get.call(null,inst_48228__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48278__$1 = (function (){var statearr_48293 = state_48278;
(statearr_48293[(13)] = inst_48230);

(statearr_48293[(12)] = inst_48228__$1);

(statearr_48293[(11)] = inst_48229);

return statearr_48293;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48278__$1,(22),inst_48231);
} else {
if((state_val_48279 === (31))){
var inst_48260 = (state_48278[(2)]);
var state_48278__$1 = state_48278;
if(cljs.core.truth_(inst_48260)){
var statearr_48294_48353 = state_48278__$1;
(statearr_48294_48353[(1)] = (32));

} else {
var statearr_48295_48354 = state_48278__$1;
(statearr_48295_48354[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (32))){
var inst_48237 = (state_48278[(14)]);
var state_48278__$1 = state_48278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48278__$1,(35),out,inst_48237);
} else {
if((state_val_48279 === (33))){
var inst_48228 = (state_48278[(12)]);
var inst_48206 = inst_48228;
var state_48278__$1 = (function (){var statearr_48296 = state_48278;
(statearr_48296[(7)] = inst_48206);

return statearr_48296;
})();
var statearr_48297_48355 = state_48278__$1;
(statearr_48297_48355[(2)] = null);

(statearr_48297_48355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (13))){
var inst_48206 = (state_48278[(7)]);
var inst_48213 = inst_48206.cljs$lang$protocol_mask$partition0$;
var inst_48214 = (inst_48213 & (64));
var inst_48215 = inst_48206.cljs$core$ISeq$;
var inst_48216 = (inst_48214) || (inst_48215);
var state_48278__$1 = state_48278;
if(cljs.core.truth_(inst_48216)){
var statearr_48298_48356 = state_48278__$1;
(statearr_48298_48356[(1)] = (16));

} else {
var statearr_48299_48357 = state_48278__$1;
(statearr_48299_48357[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (22))){
var inst_48238 = (state_48278[(10)]);
var inst_48237 = (state_48278[(14)]);
var inst_48236 = (state_48278[(2)]);
var inst_48237__$1 = cljs.core.nth.call(null,inst_48236,(0),null);
var inst_48238__$1 = cljs.core.nth.call(null,inst_48236,(1),null);
var inst_48239 = (inst_48237__$1 == null);
var inst_48240 = cljs.core._EQ_.call(null,inst_48238__$1,change);
var inst_48241 = (inst_48239) || (inst_48240);
var state_48278__$1 = (function (){var statearr_48300 = state_48278;
(statearr_48300[(10)] = inst_48238__$1);

(statearr_48300[(14)] = inst_48237__$1);

return statearr_48300;
})();
if(cljs.core.truth_(inst_48241)){
var statearr_48301_48358 = state_48278__$1;
(statearr_48301_48358[(1)] = (23));

} else {
var statearr_48302_48359 = state_48278__$1;
(statearr_48302_48359[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (36))){
var inst_48228 = (state_48278[(12)]);
var inst_48206 = inst_48228;
var state_48278__$1 = (function (){var statearr_48303 = state_48278;
(statearr_48303[(7)] = inst_48206);

return statearr_48303;
})();
var statearr_48304_48360 = state_48278__$1;
(statearr_48304_48360[(2)] = null);

(statearr_48304_48360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (29))){
var inst_48252 = (state_48278[(9)]);
var state_48278__$1 = state_48278;
var statearr_48305_48361 = state_48278__$1;
(statearr_48305_48361[(2)] = inst_48252);

(statearr_48305_48361[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (6))){
var state_48278__$1 = state_48278;
var statearr_48306_48362 = state_48278__$1;
(statearr_48306_48362[(2)] = false);

(statearr_48306_48362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (28))){
var inst_48248 = (state_48278[(2)]);
var inst_48249 = calc_state.call(null);
var inst_48206 = inst_48249;
var state_48278__$1 = (function (){var statearr_48307 = state_48278;
(statearr_48307[(7)] = inst_48206);

(statearr_48307[(15)] = inst_48248);

return statearr_48307;
})();
var statearr_48308_48363 = state_48278__$1;
(statearr_48308_48363[(2)] = null);

(statearr_48308_48363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (25))){
var inst_48274 = (state_48278[(2)]);
var state_48278__$1 = state_48278;
var statearr_48309_48364 = state_48278__$1;
(statearr_48309_48364[(2)] = inst_48274);

(statearr_48309_48364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (34))){
var inst_48272 = (state_48278[(2)]);
var state_48278__$1 = state_48278;
var statearr_48310_48365 = state_48278__$1;
(statearr_48310_48365[(2)] = inst_48272);

(statearr_48310_48365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (17))){
var state_48278__$1 = state_48278;
var statearr_48311_48366 = state_48278__$1;
(statearr_48311_48366[(2)] = false);

(statearr_48311_48366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (3))){
var state_48278__$1 = state_48278;
var statearr_48312_48367 = state_48278__$1;
(statearr_48312_48367[(2)] = false);

(statearr_48312_48367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (12))){
var inst_48276 = (state_48278[(2)]);
var state_48278__$1 = state_48278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48278__$1,inst_48276);
} else {
if((state_val_48279 === (2))){
var inst_48182 = (state_48278[(8)]);
var inst_48187 = inst_48182.cljs$lang$protocol_mask$partition0$;
var inst_48188 = (inst_48187 & (64));
var inst_48189 = inst_48182.cljs$core$ISeq$;
var inst_48190 = (inst_48188) || (inst_48189);
var state_48278__$1 = state_48278;
if(cljs.core.truth_(inst_48190)){
var statearr_48313_48368 = state_48278__$1;
(statearr_48313_48368[(1)] = (5));

} else {
var statearr_48314_48369 = state_48278__$1;
(statearr_48314_48369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (23))){
var inst_48237 = (state_48278[(14)]);
var inst_48243 = (inst_48237 == null);
var state_48278__$1 = state_48278;
if(cljs.core.truth_(inst_48243)){
var statearr_48315_48370 = state_48278__$1;
(statearr_48315_48370[(1)] = (26));

} else {
var statearr_48316_48371 = state_48278__$1;
(statearr_48316_48371[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (35))){
var inst_48263 = (state_48278[(2)]);
var state_48278__$1 = state_48278;
if(cljs.core.truth_(inst_48263)){
var statearr_48317_48372 = state_48278__$1;
(statearr_48317_48372[(1)] = (36));

} else {
var statearr_48318_48373 = state_48278__$1;
(statearr_48318_48373[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (19))){
var inst_48206 = (state_48278[(7)]);
var inst_48225 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48206);
var state_48278__$1 = state_48278;
var statearr_48319_48374 = state_48278__$1;
(statearr_48319_48374[(2)] = inst_48225);

(statearr_48319_48374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (11))){
var inst_48206 = (state_48278[(7)]);
var inst_48210 = (inst_48206 == null);
var inst_48211 = cljs.core.not.call(null,inst_48210);
var state_48278__$1 = state_48278;
if(inst_48211){
var statearr_48320_48375 = state_48278__$1;
(statearr_48320_48375[(1)] = (13));

} else {
var statearr_48321_48376 = state_48278__$1;
(statearr_48321_48376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (9))){
var inst_48182 = (state_48278[(8)]);
var state_48278__$1 = state_48278;
var statearr_48322_48377 = state_48278__$1;
(statearr_48322_48377[(2)] = inst_48182);

(statearr_48322_48377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (5))){
var state_48278__$1 = state_48278;
var statearr_48323_48378 = state_48278__$1;
(statearr_48323_48378[(2)] = true);

(statearr_48323_48378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (14))){
var state_48278__$1 = state_48278;
var statearr_48324_48379 = state_48278__$1;
(statearr_48324_48379[(2)] = false);

(statearr_48324_48379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (26))){
var inst_48238 = (state_48278[(10)]);
var inst_48245 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48238);
var state_48278__$1 = state_48278;
var statearr_48325_48380 = state_48278__$1;
(statearr_48325_48380[(2)] = inst_48245);

(statearr_48325_48380[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (16))){
var state_48278__$1 = state_48278;
var statearr_48326_48381 = state_48278__$1;
(statearr_48326_48381[(2)] = true);

(statearr_48326_48381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (38))){
var inst_48268 = (state_48278[(2)]);
var state_48278__$1 = state_48278;
var statearr_48327_48382 = state_48278__$1;
(statearr_48327_48382[(2)] = inst_48268);

(statearr_48327_48382[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (30))){
var inst_48230 = (state_48278[(13)]);
var inst_48238 = (state_48278[(10)]);
var inst_48229 = (state_48278[(11)]);
var inst_48255 = cljs.core.empty_QMARK_.call(null,inst_48229);
var inst_48256 = inst_48230.call(null,inst_48238);
var inst_48257 = cljs.core.not.call(null,inst_48256);
var inst_48258 = (inst_48255) && (inst_48257);
var state_48278__$1 = state_48278;
var statearr_48328_48383 = state_48278__$1;
(statearr_48328_48383[(2)] = inst_48258);

(statearr_48328_48383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (10))){
var inst_48182 = (state_48278[(8)]);
var inst_48202 = (state_48278[(2)]);
var inst_48203 = cljs.core.get.call(null,inst_48202,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48204 = cljs.core.get.call(null,inst_48202,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48205 = cljs.core.get.call(null,inst_48202,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48206 = inst_48182;
var state_48278__$1 = (function (){var statearr_48329 = state_48278;
(statearr_48329[(16)] = inst_48204);

(statearr_48329[(7)] = inst_48206);

(statearr_48329[(17)] = inst_48203);

(statearr_48329[(18)] = inst_48205);

return statearr_48329;
})();
var statearr_48330_48384 = state_48278__$1;
(statearr_48330_48384[(2)] = null);

(statearr_48330_48384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (18))){
var inst_48220 = (state_48278[(2)]);
var state_48278__$1 = state_48278;
var statearr_48331_48385 = state_48278__$1;
(statearr_48331_48385[(2)] = inst_48220);

(statearr_48331_48385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (37))){
var state_48278__$1 = state_48278;
var statearr_48332_48386 = state_48278__$1;
(statearr_48332_48386[(2)] = null);

(statearr_48332_48386[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48279 === (8))){
var inst_48182 = (state_48278[(8)]);
var inst_48199 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48182);
var state_48278__$1 = state_48278;
var statearr_48333_48387 = state_48278__$1;
(statearr_48333_48387[(2)] = inst_48199);

(statearr_48333_48387[(1)] = (10));


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
});})(c__46608__auto___48341,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46454__auto__,c__46608__auto___48341,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46455__auto__ = null;
var cljs$core$async$mix_$_state_machine__46455__auto____0 = (function (){
var statearr_48337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48337[(0)] = cljs$core$async$mix_$_state_machine__46455__auto__);

(statearr_48337[(1)] = (1));

return statearr_48337;
});
var cljs$core$async$mix_$_state_machine__46455__auto____1 = (function (state_48278){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_48278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48338){if((e48338 instanceof Object)){
var ex__46458__auto__ = e48338;
var statearr_48339_48388 = state_48278;
(statearr_48339_48388[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48389 = state_48278;
state_48278 = G__48389;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46455__auto__ = function(state_48278){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46455__auto____1.call(this,state_48278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46455__auto____0;
cljs$core$async$mix_$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46455__auto____1;
return cljs$core$async$mix_$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___48341,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46610__auto__ = (function (){var statearr_48340 = f__46609__auto__.call(null);
(statearr_48340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___48341);

return statearr_48340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___48341,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__45099__auto__ = (((p == null))?null:p);
var m__45100__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__45100__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__45099__auto__ = (((p == null))?null:p);
var m__45100__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,p,v,ch);
} else {
var m__45100__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args48390 = [];
var len__45511__auto___48393 = arguments.length;
var i__45512__auto___48394 = (0);
while(true){
if((i__45512__auto___48394 < len__45511__auto___48393)){
args48390.push((arguments[i__45512__auto___48394]));

var G__48395 = (i__45512__auto___48394 + (1));
i__45512__auto___48394 = G__48395;
continue;
} else {
}
break;
}

var G__48392 = args48390.length;
switch (G__48392) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48390.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__45099__auto__ = (((p == null))?null:p);
var m__45100__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,p);
} else {
var m__45100__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,p);
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
var x__45099__auto__ = (((p == null))?null:p);
var m__45100__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__45099__auto__)]);
if(!((m__45100__auto__ == null))){
return m__45100__auto__.call(null,p,v);
} else {
var m__45100__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__45100__auto____$1 == null))){
return m__45100__auto____$1.call(null,p,v);
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
var args48398 = [];
var len__45511__auto___48523 = arguments.length;
var i__45512__auto___48524 = (0);
while(true){
if((i__45512__auto___48524 < len__45511__auto___48523)){
args48398.push((arguments[i__45512__auto___48524]));

var G__48525 = (i__45512__auto___48524 + (1));
i__45512__auto___48524 = G__48525;
continue;
} else {
}
break;
}

var G__48400 = args48398.length;
switch (G__48400) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48398.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__44436__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__44436__auto__)){
return or__44436__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__44436__auto__,mults){
return (function (p1__48397_SHARP_){
if(cljs.core.truth_(p1__48397_SHARP_.call(null,topic))){
return p1__48397_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48397_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__44436__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48401 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48402){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48402 = meta48402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48403,meta48402__$1){
var self__ = this;
var _48403__$1 = this;
return (new cljs.core.async.t_cljs$core$async48401(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48402__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48403){
var self__ = this;
var _48403__$1 = this;
return self__.meta48402;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48401.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async48401.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48401.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async48401.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48401.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async48401.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48401.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48401.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48402","meta48402",1215287607,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48401.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48401";

cljs.core.async.t_cljs$core$async48401.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__45042__auto__,writer__45043__auto__,opt__45044__auto__){
return cljs.core._write.call(null,writer__45043__auto__,"cljs.core.async/t_cljs$core$async48401");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48401 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48401(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48402){
return (new cljs.core.async.t_cljs$core$async48401(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48402));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48401(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46608__auto___48527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___48527,mults,ensure_mult,p){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___48527,mults,ensure_mult,p){
return (function (state_48475){
var state_val_48476 = (state_48475[(1)]);
if((state_val_48476 === (7))){
var inst_48471 = (state_48475[(2)]);
var state_48475__$1 = state_48475;
var statearr_48477_48528 = state_48475__$1;
(statearr_48477_48528[(2)] = inst_48471);

(statearr_48477_48528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (20))){
var state_48475__$1 = state_48475;
var statearr_48478_48529 = state_48475__$1;
(statearr_48478_48529[(2)] = null);

(statearr_48478_48529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (1))){
var state_48475__$1 = state_48475;
var statearr_48479_48530 = state_48475__$1;
(statearr_48479_48530[(2)] = null);

(statearr_48479_48530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (24))){
var inst_48454 = (state_48475[(7)]);
var inst_48463 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48454);
var state_48475__$1 = state_48475;
var statearr_48480_48531 = state_48475__$1;
(statearr_48480_48531[(2)] = inst_48463);

(statearr_48480_48531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (4))){
var inst_48406 = (state_48475[(8)]);
var inst_48406__$1 = (state_48475[(2)]);
var inst_48407 = (inst_48406__$1 == null);
var state_48475__$1 = (function (){var statearr_48481 = state_48475;
(statearr_48481[(8)] = inst_48406__$1);

return statearr_48481;
})();
if(cljs.core.truth_(inst_48407)){
var statearr_48482_48532 = state_48475__$1;
(statearr_48482_48532[(1)] = (5));

} else {
var statearr_48483_48533 = state_48475__$1;
(statearr_48483_48533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (15))){
var inst_48448 = (state_48475[(2)]);
var state_48475__$1 = state_48475;
var statearr_48484_48534 = state_48475__$1;
(statearr_48484_48534[(2)] = inst_48448);

(statearr_48484_48534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (21))){
var inst_48468 = (state_48475[(2)]);
var state_48475__$1 = (function (){var statearr_48485 = state_48475;
(statearr_48485[(9)] = inst_48468);

return statearr_48485;
})();
var statearr_48486_48535 = state_48475__$1;
(statearr_48486_48535[(2)] = null);

(statearr_48486_48535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (13))){
var inst_48430 = (state_48475[(10)]);
var inst_48432 = cljs.core.chunked_seq_QMARK_.call(null,inst_48430);
var state_48475__$1 = state_48475;
if(inst_48432){
var statearr_48487_48536 = state_48475__$1;
(statearr_48487_48536[(1)] = (16));

} else {
var statearr_48488_48537 = state_48475__$1;
(statearr_48488_48537[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (22))){
var inst_48460 = (state_48475[(2)]);
var state_48475__$1 = state_48475;
if(cljs.core.truth_(inst_48460)){
var statearr_48489_48538 = state_48475__$1;
(statearr_48489_48538[(1)] = (23));

} else {
var statearr_48490_48539 = state_48475__$1;
(statearr_48490_48539[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (6))){
var inst_48456 = (state_48475[(11)]);
var inst_48454 = (state_48475[(7)]);
var inst_48406 = (state_48475[(8)]);
var inst_48454__$1 = topic_fn.call(null,inst_48406);
var inst_48455 = cljs.core.deref.call(null,mults);
var inst_48456__$1 = cljs.core.get.call(null,inst_48455,inst_48454__$1);
var state_48475__$1 = (function (){var statearr_48491 = state_48475;
(statearr_48491[(11)] = inst_48456__$1);

(statearr_48491[(7)] = inst_48454__$1);

return statearr_48491;
})();
if(cljs.core.truth_(inst_48456__$1)){
var statearr_48492_48540 = state_48475__$1;
(statearr_48492_48540[(1)] = (19));

} else {
var statearr_48493_48541 = state_48475__$1;
(statearr_48493_48541[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (25))){
var inst_48465 = (state_48475[(2)]);
var state_48475__$1 = state_48475;
var statearr_48494_48542 = state_48475__$1;
(statearr_48494_48542[(2)] = inst_48465);

(statearr_48494_48542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (17))){
var inst_48430 = (state_48475[(10)]);
var inst_48439 = cljs.core.first.call(null,inst_48430);
var inst_48440 = cljs.core.async.muxch_STAR_.call(null,inst_48439);
var inst_48441 = cljs.core.async.close_BANG_.call(null,inst_48440);
var inst_48442 = cljs.core.next.call(null,inst_48430);
var inst_48416 = inst_48442;
var inst_48417 = null;
var inst_48418 = (0);
var inst_48419 = (0);
var state_48475__$1 = (function (){var statearr_48495 = state_48475;
(statearr_48495[(12)] = inst_48417);

(statearr_48495[(13)] = inst_48441);

(statearr_48495[(14)] = inst_48419);

(statearr_48495[(15)] = inst_48418);

(statearr_48495[(16)] = inst_48416);

return statearr_48495;
})();
var statearr_48496_48543 = state_48475__$1;
(statearr_48496_48543[(2)] = null);

(statearr_48496_48543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (3))){
var inst_48473 = (state_48475[(2)]);
var state_48475__$1 = state_48475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48475__$1,inst_48473);
} else {
if((state_val_48476 === (12))){
var inst_48450 = (state_48475[(2)]);
var state_48475__$1 = state_48475;
var statearr_48497_48544 = state_48475__$1;
(statearr_48497_48544[(2)] = inst_48450);

(statearr_48497_48544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (2))){
var state_48475__$1 = state_48475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48475__$1,(4),ch);
} else {
if((state_val_48476 === (23))){
var state_48475__$1 = state_48475;
var statearr_48498_48545 = state_48475__$1;
(statearr_48498_48545[(2)] = null);

(statearr_48498_48545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (19))){
var inst_48456 = (state_48475[(11)]);
var inst_48406 = (state_48475[(8)]);
var inst_48458 = cljs.core.async.muxch_STAR_.call(null,inst_48456);
var state_48475__$1 = state_48475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48475__$1,(22),inst_48458,inst_48406);
} else {
if((state_val_48476 === (11))){
var inst_48430 = (state_48475[(10)]);
var inst_48416 = (state_48475[(16)]);
var inst_48430__$1 = cljs.core.seq.call(null,inst_48416);
var state_48475__$1 = (function (){var statearr_48499 = state_48475;
(statearr_48499[(10)] = inst_48430__$1);

return statearr_48499;
})();
if(inst_48430__$1){
var statearr_48500_48546 = state_48475__$1;
(statearr_48500_48546[(1)] = (13));

} else {
var statearr_48501_48547 = state_48475__$1;
(statearr_48501_48547[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (9))){
var inst_48452 = (state_48475[(2)]);
var state_48475__$1 = state_48475;
var statearr_48502_48548 = state_48475__$1;
(statearr_48502_48548[(2)] = inst_48452);

(statearr_48502_48548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (5))){
var inst_48413 = cljs.core.deref.call(null,mults);
var inst_48414 = cljs.core.vals.call(null,inst_48413);
var inst_48415 = cljs.core.seq.call(null,inst_48414);
var inst_48416 = inst_48415;
var inst_48417 = null;
var inst_48418 = (0);
var inst_48419 = (0);
var state_48475__$1 = (function (){var statearr_48503 = state_48475;
(statearr_48503[(12)] = inst_48417);

(statearr_48503[(14)] = inst_48419);

(statearr_48503[(15)] = inst_48418);

(statearr_48503[(16)] = inst_48416);

return statearr_48503;
})();
var statearr_48504_48549 = state_48475__$1;
(statearr_48504_48549[(2)] = null);

(statearr_48504_48549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (14))){
var state_48475__$1 = state_48475;
var statearr_48508_48550 = state_48475__$1;
(statearr_48508_48550[(2)] = null);

(statearr_48508_48550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (16))){
var inst_48430 = (state_48475[(10)]);
var inst_48434 = cljs.core.chunk_first.call(null,inst_48430);
var inst_48435 = cljs.core.chunk_rest.call(null,inst_48430);
var inst_48436 = cljs.core.count.call(null,inst_48434);
var inst_48416 = inst_48435;
var inst_48417 = inst_48434;
var inst_48418 = inst_48436;
var inst_48419 = (0);
var state_48475__$1 = (function (){var statearr_48509 = state_48475;
(statearr_48509[(12)] = inst_48417);

(statearr_48509[(14)] = inst_48419);

(statearr_48509[(15)] = inst_48418);

(statearr_48509[(16)] = inst_48416);

return statearr_48509;
})();
var statearr_48510_48551 = state_48475__$1;
(statearr_48510_48551[(2)] = null);

(statearr_48510_48551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (10))){
var inst_48417 = (state_48475[(12)]);
var inst_48419 = (state_48475[(14)]);
var inst_48418 = (state_48475[(15)]);
var inst_48416 = (state_48475[(16)]);
var inst_48424 = cljs.core._nth.call(null,inst_48417,inst_48419);
var inst_48425 = cljs.core.async.muxch_STAR_.call(null,inst_48424);
var inst_48426 = cljs.core.async.close_BANG_.call(null,inst_48425);
var inst_48427 = (inst_48419 + (1));
var tmp48505 = inst_48417;
var tmp48506 = inst_48418;
var tmp48507 = inst_48416;
var inst_48416__$1 = tmp48507;
var inst_48417__$1 = tmp48505;
var inst_48418__$1 = tmp48506;
var inst_48419__$1 = inst_48427;
var state_48475__$1 = (function (){var statearr_48511 = state_48475;
(statearr_48511[(12)] = inst_48417__$1);

(statearr_48511[(14)] = inst_48419__$1);

(statearr_48511[(15)] = inst_48418__$1);

(statearr_48511[(17)] = inst_48426);

(statearr_48511[(16)] = inst_48416__$1);

return statearr_48511;
})();
var statearr_48512_48552 = state_48475__$1;
(statearr_48512_48552[(2)] = null);

(statearr_48512_48552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (18))){
var inst_48445 = (state_48475[(2)]);
var state_48475__$1 = state_48475;
var statearr_48513_48553 = state_48475__$1;
(statearr_48513_48553[(2)] = inst_48445);

(statearr_48513_48553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48476 === (8))){
var inst_48419 = (state_48475[(14)]);
var inst_48418 = (state_48475[(15)]);
var inst_48421 = (inst_48419 < inst_48418);
var inst_48422 = inst_48421;
var state_48475__$1 = state_48475;
if(cljs.core.truth_(inst_48422)){
var statearr_48514_48554 = state_48475__$1;
(statearr_48514_48554[(1)] = (10));

} else {
var statearr_48515_48555 = state_48475__$1;
(statearr_48515_48555[(1)] = (11));

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
});})(c__46608__auto___48527,mults,ensure_mult,p))
;
return ((function (switch__46454__auto__,c__46608__auto___48527,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_48519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48519[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_48519[(1)] = (1));

return statearr_48519;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_48475){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_48475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48520){if((e48520 instanceof Object)){
var ex__46458__auto__ = e48520;
var statearr_48521_48556 = state_48475;
(statearr_48521_48556[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48557 = state_48475;
state_48475 = G__48557;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_48475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_48475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___48527,mults,ensure_mult,p))
})();
var state__46610__auto__ = (function (){var statearr_48522 = f__46609__auto__.call(null);
(statearr_48522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___48527);

return statearr_48522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___48527,mults,ensure_mult,p))
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
var args48558 = [];
var len__45511__auto___48561 = arguments.length;
var i__45512__auto___48562 = (0);
while(true){
if((i__45512__auto___48562 < len__45511__auto___48561)){
args48558.push((arguments[i__45512__auto___48562]));

var G__48563 = (i__45512__auto___48562 + (1));
i__45512__auto___48562 = G__48563;
continue;
} else {
}
break;
}

var G__48560 = args48558.length;
switch (G__48560) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48558.length)].join('')));

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
var args48565 = [];
var len__45511__auto___48568 = arguments.length;
var i__45512__auto___48569 = (0);
while(true){
if((i__45512__auto___48569 < len__45511__auto___48568)){
args48565.push((arguments[i__45512__auto___48569]));

var G__48570 = (i__45512__auto___48569 + (1));
i__45512__auto___48569 = G__48570;
continue;
} else {
}
break;
}

var G__48567 = args48565.length;
switch (G__48567) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48565.length)].join('')));

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
var args48572 = [];
var len__45511__auto___48643 = arguments.length;
var i__45512__auto___48644 = (0);
while(true){
if((i__45512__auto___48644 < len__45511__auto___48643)){
args48572.push((arguments[i__45512__auto___48644]));

var G__48645 = (i__45512__auto___48644 + (1));
i__45512__auto___48644 = G__48645;
continue;
} else {
}
break;
}

var G__48574 = args48572.length;
switch (G__48574) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48572.length)].join('')));

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
var c__46608__auto___48647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___48647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___48647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48613){
var state_val_48614 = (state_48613[(1)]);
if((state_val_48614 === (7))){
var state_48613__$1 = state_48613;
var statearr_48615_48648 = state_48613__$1;
(statearr_48615_48648[(2)] = null);

(statearr_48615_48648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (1))){
var state_48613__$1 = state_48613;
var statearr_48616_48649 = state_48613__$1;
(statearr_48616_48649[(2)] = null);

(statearr_48616_48649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (4))){
var inst_48577 = (state_48613[(7)]);
var inst_48579 = (inst_48577 < cnt);
var state_48613__$1 = state_48613;
if(cljs.core.truth_(inst_48579)){
var statearr_48617_48650 = state_48613__$1;
(statearr_48617_48650[(1)] = (6));

} else {
var statearr_48618_48651 = state_48613__$1;
(statearr_48618_48651[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (15))){
var inst_48609 = (state_48613[(2)]);
var state_48613__$1 = state_48613;
var statearr_48619_48652 = state_48613__$1;
(statearr_48619_48652[(2)] = inst_48609);

(statearr_48619_48652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (13))){
var inst_48602 = cljs.core.async.close_BANG_.call(null,out);
var state_48613__$1 = state_48613;
var statearr_48620_48653 = state_48613__$1;
(statearr_48620_48653[(2)] = inst_48602);

(statearr_48620_48653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (6))){
var state_48613__$1 = state_48613;
var statearr_48621_48654 = state_48613__$1;
(statearr_48621_48654[(2)] = null);

(statearr_48621_48654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (3))){
var inst_48611 = (state_48613[(2)]);
var state_48613__$1 = state_48613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48613__$1,inst_48611);
} else {
if((state_val_48614 === (12))){
var inst_48599 = (state_48613[(8)]);
var inst_48599__$1 = (state_48613[(2)]);
var inst_48600 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48599__$1);
var state_48613__$1 = (function (){var statearr_48622 = state_48613;
(statearr_48622[(8)] = inst_48599__$1);

return statearr_48622;
})();
if(cljs.core.truth_(inst_48600)){
var statearr_48623_48655 = state_48613__$1;
(statearr_48623_48655[(1)] = (13));

} else {
var statearr_48624_48656 = state_48613__$1;
(statearr_48624_48656[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (2))){
var inst_48576 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48577 = (0);
var state_48613__$1 = (function (){var statearr_48625 = state_48613;
(statearr_48625[(9)] = inst_48576);

(statearr_48625[(7)] = inst_48577);

return statearr_48625;
})();
var statearr_48626_48657 = state_48613__$1;
(statearr_48626_48657[(2)] = null);

(statearr_48626_48657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (11))){
var inst_48577 = (state_48613[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48613,(10),Object,null,(9));
var inst_48586 = chs__$1.call(null,inst_48577);
var inst_48587 = done.call(null,inst_48577);
var inst_48588 = cljs.core.async.take_BANG_.call(null,inst_48586,inst_48587);
var state_48613__$1 = state_48613;
var statearr_48627_48658 = state_48613__$1;
(statearr_48627_48658[(2)] = inst_48588);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (9))){
var inst_48577 = (state_48613[(7)]);
var inst_48590 = (state_48613[(2)]);
var inst_48591 = (inst_48577 + (1));
var inst_48577__$1 = inst_48591;
var state_48613__$1 = (function (){var statearr_48628 = state_48613;
(statearr_48628[(7)] = inst_48577__$1);

(statearr_48628[(10)] = inst_48590);

return statearr_48628;
})();
var statearr_48629_48659 = state_48613__$1;
(statearr_48629_48659[(2)] = null);

(statearr_48629_48659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (5))){
var inst_48597 = (state_48613[(2)]);
var state_48613__$1 = (function (){var statearr_48630 = state_48613;
(statearr_48630[(11)] = inst_48597);

return statearr_48630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48613__$1,(12),dchan);
} else {
if((state_val_48614 === (14))){
var inst_48599 = (state_48613[(8)]);
var inst_48604 = cljs.core.apply.call(null,f,inst_48599);
var state_48613__$1 = state_48613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48613__$1,(16),out,inst_48604);
} else {
if((state_val_48614 === (16))){
var inst_48606 = (state_48613[(2)]);
var state_48613__$1 = (function (){var statearr_48631 = state_48613;
(statearr_48631[(12)] = inst_48606);

return statearr_48631;
})();
var statearr_48632_48660 = state_48613__$1;
(statearr_48632_48660[(2)] = null);

(statearr_48632_48660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (10))){
var inst_48581 = (state_48613[(2)]);
var inst_48582 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48613__$1 = (function (){var statearr_48633 = state_48613;
(statearr_48633[(13)] = inst_48581);

return statearr_48633;
})();
var statearr_48634_48661 = state_48613__$1;
(statearr_48634_48661[(2)] = inst_48582);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48613__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (8))){
var inst_48595 = (state_48613[(2)]);
var state_48613__$1 = state_48613;
var statearr_48635_48662 = state_48613__$1;
(statearr_48635_48662[(2)] = inst_48595);

(statearr_48635_48662[(1)] = (5));


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
});})(c__46608__auto___48647,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46454__auto__,c__46608__auto___48647,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_48639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48639[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_48639[(1)] = (1));

return statearr_48639;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_48613){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_48613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48640){if((e48640 instanceof Object)){
var ex__46458__auto__ = e48640;
var statearr_48641_48663 = state_48613;
(statearr_48641_48663[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48664 = state_48613;
state_48613 = G__48664;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_48613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_48613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___48647,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46610__auto__ = (function (){var statearr_48642 = f__46609__auto__.call(null);
(statearr_48642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___48647);

return statearr_48642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___48647,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args48666 = [];
var len__45511__auto___48724 = arguments.length;
var i__45512__auto___48725 = (0);
while(true){
if((i__45512__auto___48725 < len__45511__auto___48724)){
args48666.push((arguments[i__45512__auto___48725]));

var G__48726 = (i__45512__auto___48725 + (1));
i__45512__auto___48725 = G__48726;
continue;
} else {
}
break;
}

var G__48668 = args48666.length;
switch (G__48668) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48666.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46608__auto___48728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___48728,out){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___48728,out){
return (function (state_48700){
var state_val_48701 = (state_48700[(1)]);
if((state_val_48701 === (7))){
var inst_48680 = (state_48700[(7)]);
var inst_48679 = (state_48700[(8)]);
var inst_48679__$1 = (state_48700[(2)]);
var inst_48680__$1 = cljs.core.nth.call(null,inst_48679__$1,(0),null);
var inst_48681 = cljs.core.nth.call(null,inst_48679__$1,(1),null);
var inst_48682 = (inst_48680__$1 == null);
var state_48700__$1 = (function (){var statearr_48702 = state_48700;
(statearr_48702[(7)] = inst_48680__$1);

(statearr_48702[(9)] = inst_48681);

(statearr_48702[(8)] = inst_48679__$1);

return statearr_48702;
})();
if(cljs.core.truth_(inst_48682)){
var statearr_48703_48729 = state_48700__$1;
(statearr_48703_48729[(1)] = (8));

} else {
var statearr_48704_48730 = state_48700__$1;
(statearr_48704_48730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48701 === (1))){
var inst_48669 = cljs.core.vec.call(null,chs);
var inst_48670 = inst_48669;
var state_48700__$1 = (function (){var statearr_48705 = state_48700;
(statearr_48705[(10)] = inst_48670);

return statearr_48705;
})();
var statearr_48706_48731 = state_48700__$1;
(statearr_48706_48731[(2)] = null);

(statearr_48706_48731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48701 === (4))){
var inst_48670 = (state_48700[(10)]);
var state_48700__$1 = state_48700;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48700__$1,(7),inst_48670);
} else {
if((state_val_48701 === (6))){
var inst_48696 = (state_48700[(2)]);
var state_48700__$1 = state_48700;
var statearr_48707_48732 = state_48700__$1;
(statearr_48707_48732[(2)] = inst_48696);

(statearr_48707_48732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48701 === (3))){
var inst_48698 = (state_48700[(2)]);
var state_48700__$1 = state_48700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48700__$1,inst_48698);
} else {
if((state_val_48701 === (2))){
var inst_48670 = (state_48700[(10)]);
var inst_48672 = cljs.core.count.call(null,inst_48670);
var inst_48673 = (inst_48672 > (0));
var state_48700__$1 = state_48700;
if(cljs.core.truth_(inst_48673)){
var statearr_48709_48733 = state_48700__$1;
(statearr_48709_48733[(1)] = (4));

} else {
var statearr_48710_48734 = state_48700__$1;
(statearr_48710_48734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48701 === (11))){
var inst_48670 = (state_48700[(10)]);
var inst_48689 = (state_48700[(2)]);
var tmp48708 = inst_48670;
var inst_48670__$1 = tmp48708;
var state_48700__$1 = (function (){var statearr_48711 = state_48700;
(statearr_48711[(11)] = inst_48689);

(statearr_48711[(10)] = inst_48670__$1);

return statearr_48711;
})();
var statearr_48712_48735 = state_48700__$1;
(statearr_48712_48735[(2)] = null);

(statearr_48712_48735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48701 === (9))){
var inst_48680 = (state_48700[(7)]);
var state_48700__$1 = state_48700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48700__$1,(11),out,inst_48680);
} else {
if((state_val_48701 === (5))){
var inst_48694 = cljs.core.async.close_BANG_.call(null,out);
var state_48700__$1 = state_48700;
var statearr_48713_48736 = state_48700__$1;
(statearr_48713_48736[(2)] = inst_48694);

(statearr_48713_48736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48701 === (10))){
var inst_48692 = (state_48700[(2)]);
var state_48700__$1 = state_48700;
var statearr_48714_48737 = state_48700__$1;
(statearr_48714_48737[(2)] = inst_48692);

(statearr_48714_48737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48701 === (8))){
var inst_48680 = (state_48700[(7)]);
var inst_48681 = (state_48700[(9)]);
var inst_48679 = (state_48700[(8)]);
var inst_48670 = (state_48700[(10)]);
var inst_48684 = (function (){var cs = inst_48670;
var vec__48675 = inst_48679;
var v = inst_48680;
var c = inst_48681;
return ((function (cs,vec__48675,v,c,inst_48680,inst_48681,inst_48679,inst_48670,state_val_48701,c__46608__auto___48728,out){
return (function (p1__48665_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48665_SHARP_);
});
;})(cs,vec__48675,v,c,inst_48680,inst_48681,inst_48679,inst_48670,state_val_48701,c__46608__auto___48728,out))
})();
var inst_48685 = cljs.core.filterv.call(null,inst_48684,inst_48670);
var inst_48670__$1 = inst_48685;
var state_48700__$1 = (function (){var statearr_48715 = state_48700;
(statearr_48715[(10)] = inst_48670__$1);

return statearr_48715;
})();
var statearr_48716_48738 = state_48700__$1;
(statearr_48716_48738[(2)] = null);

(statearr_48716_48738[(1)] = (2));


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
});})(c__46608__auto___48728,out))
;
return ((function (switch__46454__auto__,c__46608__auto___48728,out){
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_48720 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48720[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_48720[(1)] = (1));

return statearr_48720;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_48700){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_48700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48721){if((e48721 instanceof Object)){
var ex__46458__auto__ = e48721;
var statearr_48722_48739 = state_48700;
(statearr_48722_48739[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48740 = state_48700;
state_48700 = G__48740;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_48700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_48700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___48728,out))
})();
var state__46610__auto__ = (function (){var statearr_48723 = f__46609__auto__.call(null);
(statearr_48723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___48728);

return statearr_48723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___48728,out))
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
var args48741 = [];
var len__45511__auto___48790 = arguments.length;
var i__45512__auto___48791 = (0);
while(true){
if((i__45512__auto___48791 < len__45511__auto___48790)){
args48741.push((arguments[i__45512__auto___48791]));

var G__48792 = (i__45512__auto___48791 + (1));
i__45512__auto___48791 = G__48792;
continue;
} else {
}
break;
}

var G__48743 = args48741.length;
switch (G__48743) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48741.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46608__auto___48794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___48794,out){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___48794,out){
return (function (state_48767){
var state_val_48768 = (state_48767[(1)]);
if((state_val_48768 === (7))){
var inst_48749 = (state_48767[(7)]);
var inst_48749__$1 = (state_48767[(2)]);
var inst_48750 = (inst_48749__$1 == null);
var inst_48751 = cljs.core.not.call(null,inst_48750);
var state_48767__$1 = (function (){var statearr_48769 = state_48767;
(statearr_48769[(7)] = inst_48749__$1);

return statearr_48769;
})();
if(inst_48751){
var statearr_48770_48795 = state_48767__$1;
(statearr_48770_48795[(1)] = (8));

} else {
var statearr_48771_48796 = state_48767__$1;
(statearr_48771_48796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48768 === (1))){
var inst_48744 = (0);
var state_48767__$1 = (function (){var statearr_48772 = state_48767;
(statearr_48772[(8)] = inst_48744);

return statearr_48772;
})();
var statearr_48773_48797 = state_48767__$1;
(statearr_48773_48797[(2)] = null);

(statearr_48773_48797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48768 === (4))){
var state_48767__$1 = state_48767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48767__$1,(7),ch);
} else {
if((state_val_48768 === (6))){
var inst_48762 = (state_48767[(2)]);
var state_48767__$1 = state_48767;
var statearr_48774_48798 = state_48767__$1;
(statearr_48774_48798[(2)] = inst_48762);

(statearr_48774_48798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48768 === (3))){
var inst_48764 = (state_48767[(2)]);
var inst_48765 = cljs.core.async.close_BANG_.call(null,out);
var state_48767__$1 = (function (){var statearr_48775 = state_48767;
(statearr_48775[(9)] = inst_48764);

return statearr_48775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48767__$1,inst_48765);
} else {
if((state_val_48768 === (2))){
var inst_48744 = (state_48767[(8)]);
var inst_48746 = (inst_48744 < n);
var state_48767__$1 = state_48767;
if(cljs.core.truth_(inst_48746)){
var statearr_48776_48799 = state_48767__$1;
(statearr_48776_48799[(1)] = (4));

} else {
var statearr_48777_48800 = state_48767__$1;
(statearr_48777_48800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48768 === (11))){
var inst_48744 = (state_48767[(8)]);
var inst_48754 = (state_48767[(2)]);
var inst_48755 = (inst_48744 + (1));
var inst_48744__$1 = inst_48755;
var state_48767__$1 = (function (){var statearr_48778 = state_48767;
(statearr_48778[(10)] = inst_48754);

(statearr_48778[(8)] = inst_48744__$1);

return statearr_48778;
})();
var statearr_48779_48801 = state_48767__$1;
(statearr_48779_48801[(2)] = null);

(statearr_48779_48801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48768 === (9))){
var state_48767__$1 = state_48767;
var statearr_48780_48802 = state_48767__$1;
(statearr_48780_48802[(2)] = null);

(statearr_48780_48802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48768 === (5))){
var state_48767__$1 = state_48767;
var statearr_48781_48803 = state_48767__$1;
(statearr_48781_48803[(2)] = null);

(statearr_48781_48803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48768 === (10))){
var inst_48759 = (state_48767[(2)]);
var state_48767__$1 = state_48767;
var statearr_48782_48804 = state_48767__$1;
(statearr_48782_48804[(2)] = inst_48759);

(statearr_48782_48804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48768 === (8))){
var inst_48749 = (state_48767[(7)]);
var state_48767__$1 = state_48767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48767__$1,(11),out,inst_48749);
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
});})(c__46608__auto___48794,out))
;
return ((function (switch__46454__auto__,c__46608__auto___48794,out){
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_48786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48786[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_48786[(1)] = (1));

return statearr_48786;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_48767){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_48767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48787){if((e48787 instanceof Object)){
var ex__46458__auto__ = e48787;
var statearr_48788_48805 = state_48767;
(statearr_48788_48805[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48806 = state_48767;
state_48767 = G__48806;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_48767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_48767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___48794,out))
})();
var state__46610__auto__ = (function (){var statearr_48789 = f__46609__auto__.call(null);
(statearr_48789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___48794);

return statearr_48789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___48794,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48814 = (function (map_LT_,f,ch,meta48815){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48815 = meta48815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48816,meta48815__$1){
var self__ = this;
var _48816__$1 = this;
return (new cljs.core.async.t_cljs$core$async48814(self__.map_LT_,self__.f,self__.ch,meta48815__$1));
});

cljs.core.async.t_cljs$core$async48814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48816){
var self__ = this;
var _48816__$1 = this;
return self__.meta48815;
});

cljs.core.async.t_cljs$core$async48814.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48814.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48814.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48814.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48814.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48817 = (function (map_LT_,f,ch,meta48815,_,fn1,meta48818){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta48815 = meta48815;
this._ = _;
this.fn1 = fn1;
this.meta48818 = meta48818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48819,meta48818__$1){
var self__ = this;
var _48819__$1 = this;
return (new cljs.core.async.t_cljs$core$async48817(self__.map_LT_,self__.f,self__.ch,self__.meta48815,self__._,self__.fn1,meta48818__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48819){
var self__ = this;
var _48819__$1 = this;
return self__.meta48818;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48817.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48807_SHARP_){
return f1.call(null,(((p1__48807_SHARP_ == null))?null:self__.f.call(null,p1__48807_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48817.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48815","meta48815",1002403624,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48814","cljs.core.async/t_cljs$core$async48814",-418711998,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48818","meta48818",-50884688,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48817";

cljs.core.async.t_cljs$core$async48817.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__45042__auto__,writer__45043__auto__,opt__45044__auto__){
return cljs.core._write.call(null,writer__45043__auto__,"cljs.core.async/t_cljs$core$async48817");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48817 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48817(map_LT___$1,f__$1,ch__$1,meta48815__$1,___$2,fn1__$1,meta48818){
return (new cljs.core.async.t_cljs$core$async48817(map_LT___$1,f__$1,ch__$1,meta48815__$1,___$2,fn1__$1,meta48818));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48817(self__.map_LT_,self__.f,self__.ch,self__.meta48815,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__44424__auto__ = ret;
if(cljs.core.truth_(and__44424__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__44424__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48814.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48814.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48815","meta48815",1002403624,null)], null);
});

cljs.core.async.t_cljs$core$async48814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48814";

cljs.core.async.t_cljs$core$async48814.cljs$lang$ctorPrWriter = (function (this__45042__auto__,writer__45043__auto__,opt__45044__auto__){
return cljs.core._write.call(null,writer__45043__auto__,"cljs.core.async/t_cljs$core$async48814");
});

cljs.core.async.__GT_t_cljs$core$async48814 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48814(map_LT___$1,f__$1,ch__$1,meta48815){
return (new cljs.core.async.t_cljs$core$async48814(map_LT___$1,f__$1,ch__$1,meta48815));
});

}

return (new cljs.core.async.t_cljs$core$async48814(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48823 = (function (map_GT_,f,ch,meta48824){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta48824 = meta48824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48825,meta48824__$1){
var self__ = this;
var _48825__$1 = this;
return (new cljs.core.async.t_cljs$core$async48823(self__.map_GT_,self__.f,self__.ch,meta48824__$1));
});

cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48825){
var self__ = this;
var _48825__$1 = this;
return self__.meta48824;
});

cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48823.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48824","meta48824",-645892385,null)], null);
});

cljs.core.async.t_cljs$core$async48823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48823";

cljs.core.async.t_cljs$core$async48823.cljs$lang$ctorPrWriter = (function (this__45042__auto__,writer__45043__auto__,opt__45044__auto__){
return cljs.core._write.call(null,writer__45043__auto__,"cljs.core.async/t_cljs$core$async48823");
});

cljs.core.async.__GT_t_cljs$core$async48823 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48823(map_GT___$1,f__$1,ch__$1,meta48824){
return (new cljs.core.async.t_cljs$core$async48823(map_GT___$1,f__$1,ch__$1,meta48824));
});

}

return (new cljs.core.async.t_cljs$core$async48823(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48829 = (function (filter_GT_,p,ch,meta48830){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta48830 = meta48830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48831,meta48830__$1){
var self__ = this;
var _48831__$1 = this;
return (new cljs.core.async.t_cljs$core$async48829(self__.filter_GT_,self__.p,self__.ch,meta48830__$1));
});

cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48831){
var self__ = this;
var _48831__$1 = this;
return self__.meta48830;
});

cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async48829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48830","meta48830",1170343883,null)], null);
});

cljs.core.async.t_cljs$core$async48829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48829";

cljs.core.async.t_cljs$core$async48829.cljs$lang$ctorPrWriter = (function (this__45042__auto__,writer__45043__auto__,opt__45044__auto__){
return cljs.core._write.call(null,writer__45043__auto__,"cljs.core.async/t_cljs$core$async48829");
});

cljs.core.async.__GT_t_cljs$core$async48829 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48829(filter_GT___$1,p__$1,ch__$1,meta48830){
return (new cljs.core.async.t_cljs$core$async48829(filter_GT___$1,p__$1,ch__$1,meta48830));
});

}

return (new cljs.core.async.t_cljs$core$async48829(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args48832 = [];
var len__45511__auto___48876 = arguments.length;
var i__45512__auto___48877 = (0);
while(true){
if((i__45512__auto___48877 < len__45511__auto___48876)){
args48832.push((arguments[i__45512__auto___48877]));

var G__48878 = (i__45512__auto___48877 + (1));
i__45512__auto___48877 = G__48878;
continue;
} else {
}
break;
}

var G__48834 = args48832.length;
switch (G__48834) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48832.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46608__auto___48880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___48880,out){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___48880,out){
return (function (state_48855){
var state_val_48856 = (state_48855[(1)]);
if((state_val_48856 === (7))){
var inst_48851 = (state_48855[(2)]);
var state_48855__$1 = state_48855;
var statearr_48857_48881 = state_48855__$1;
(statearr_48857_48881[(2)] = inst_48851);

(statearr_48857_48881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48856 === (1))){
var state_48855__$1 = state_48855;
var statearr_48858_48882 = state_48855__$1;
(statearr_48858_48882[(2)] = null);

(statearr_48858_48882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48856 === (4))){
var inst_48837 = (state_48855[(7)]);
var inst_48837__$1 = (state_48855[(2)]);
var inst_48838 = (inst_48837__$1 == null);
var state_48855__$1 = (function (){var statearr_48859 = state_48855;
(statearr_48859[(7)] = inst_48837__$1);

return statearr_48859;
})();
if(cljs.core.truth_(inst_48838)){
var statearr_48860_48883 = state_48855__$1;
(statearr_48860_48883[(1)] = (5));

} else {
var statearr_48861_48884 = state_48855__$1;
(statearr_48861_48884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48856 === (6))){
var inst_48837 = (state_48855[(7)]);
var inst_48842 = p.call(null,inst_48837);
var state_48855__$1 = state_48855;
if(cljs.core.truth_(inst_48842)){
var statearr_48862_48885 = state_48855__$1;
(statearr_48862_48885[(1)] = (8));

} else {
var statearr_48863_48886 = state_48855__$1;
(statearr_48863_48886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48856 === (3))){
var inst_48853 = (state_48855[(2)]);
var state_48855__$1 = state_48855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48855__$1,inst_48853);
} else {
if((state_val_48856 === (2))){
var state_48855__$1 = state_48855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48855__$1,(4),ch);
} else {
if((state_val_48856 === (11))){
var inst_48845 = (state_48855[(2)]);
var state_48855__$1 = state_48855;
var statearr_48864_48887 = state_48855__$1;
(statearr_48864_48887[(2)] = inst_48845);

(statearr_48864_48887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48856 === (9))){
var state_48855__$1 = state_48855;
var statearr_48865_48888 = state_48855__$1;
(statearr_48865_48888[(2)] = null);

(statearr_48865_48888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48856 === (5))){
var inst_48840 = cljs.core.async.close_BANG_.call(null,out);
var state_48855__$1 = state_48855;
var statearr_48866_48889 = state_48855__$1;
(statearr_48866_48889[(2)] = inst_48840);

(statearr_48866_48889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48856 === (10))){
var inst_48848 = (state_48855[(2)]);
var state_48855__$1 = (function (){var statearr_48867 = state_48855;
(statearr_48867[(8)] = inst_48848);

return statearr_48867;
})();
var statearr_48868_48890 = state_48855__$1;
(statearr_48868_48890[(2)] = null);

(statearr_48868_48890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48856 === (8))){
var inst_48837 = (state_48855[(7)]);
var state_48855__$1 = state_48855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48855__$1,(11),out,inst_48837);
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
});})(c__46608__auto___48880,out))
;
return ((function (switch__46454__auto__,c__46608__auto___48880,out){
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_48872 = [null,null,null,null,null,null,null,null,null];
(statearr_48872[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_48872[(1)] = (1));

return statearr_48872;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_48855){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_48855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e48873){if((e48873 instanceof Object)){
var ex__46458__auto__ = e48873;
var statearr_48874_48891 = state_48855;
(statearr_48874_48891[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48892 = state_48855;
state_48855 = G__48892;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_48855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_48855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___48880,out))
})();
var state__46610__auto__ = (function (){var statearr_48875 = f__46609__auto__.call(null);
(statearr_48875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___48880);

return statearr_48875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___48880,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args48893 = [];
var len__45511__auto___48896 = arguments.length;
var i__45512__auto___48897 = (0);
while(true){
if((i__45512__auto___48897 < len__45511__auto___48896)){
args48893.push((arguments[i__45512__auto___48897]));

var G__48898 = (i__45512__auto___48897 + (1));
i__45512__auto___48897 = G__48898;
continue;
} else {
}
break;
}

var G__48895 = args48893.length;
switch (G__48895) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48893.length)].join('')));

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
var c__46608__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto__){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto__){
return (function (state_49065){
var state_val_49066 = (state_49065[(1)]);
if((state_val_49066 === (7))){
var inst_49061 = (state_49065[(2)]);
var state_49065__$1 = state_49065;
var statearr_49067_49108 = state_49065__$1;
(statearr_49067_49108[(2)] = inst_49061);

(statearr_49067_49108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (20))){
var inst_49031 = (state_49065[(7)]);
var inst_49042 = (state_49065[(2)]);
var inst_49043 = cljs.core.next.call(null,inst_49031);
var inst_49017 = inst_49043;
var inst_49018 = null;
var inst_49019 = (0);
var inst_49020 = (0);
var state_49065__$1 = (function (){var statearr_49068 = state_49065;
(statearr_49068[(8)] = inst_49019);

(statearr_49068[(9)] = inst_49018);

(statearr_49068[(10)] = inst_49017);

(statearr_49068[(11)] = inst_49042);

(statearr_49068[(12)] = inst_49020);

return statearr_49068;
})();
var statearr_49069_49109 = state_49065__$1;
(statearr_49069_49109[(2)] = null);

(statearr_49069_49109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (1))){
var state_49065__$1 = state_49065;
var statearr_49070_49110 = state_49065__$1;
(statearr_49070_49110[(2)] = null);

(statearr_49070_49110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (4))){
var inst_49006 = (state_49065[(13)]);
var inst_49006__$1 = (state_49065[(2)]);
var inst_49007 = (inst_49006__$1 == null);
var state_49065__$1 = (function (){var statearr_49071 = state_49065;
(statearr_49071[(13)] = inst_49006__$1);

return statearr_49071;
})();
if(cljs.core.truth_(inst_49007)){
var statearr_49072_49111 = state_49065__$1;
(statearr_49072_49111[(1)] = (5));

} else {
var statearr_49073_49112 = state_49065__$1;
(statearr_49073_49112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (15))){
var state_49065__$1 = state_49065;
var statearr_49077_49113 = state_49065__$1;
(statearr_49077_49113[(2)] = null);

(statearr_49077_49113[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (21))){
var state_49065__$1 = state_49065;
var statearr_49078_49114 = state_49065__$1;
(statearr_49078_49114[(2)] = null);

(statearr_49078_49114[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (13))){
var inst_49019 = (state_49065[(8)]);
var inst_49018 = (state_49065[(9)]);
var inst_49017 = (state_49065[(10)]);
var inst_49020 = (state_49065[(12)]);
var inst_49027 = (state_49065[(2)]);
var inst_49028 = (inst_49020 + (1));
var tmp49074 = inst_49019;
var tmp49075 = inst_49018;
var tmp49076 = inst_49017;
var inst_49017__$1 = tmp49076;
var inst_49018__$1 = tmp49075;
var inst_49019__$1 = tmp49074;
var inst_49020__$1 = inst_49028;
var state_49065__$1 = (function (){var statearr_49079 = state_49065;
(statearr_49079[(8)] = inst_49019__$1);

(statearr_49079[(14)] = inst_49027);

(statearr_49079[(9)] = inst_49018__$1);

(statearr_49079[(10)] = inst_49017__$1);

(statearr_49079[(12)] = inst_49020__$1);

return statearr_49079;
})();
var statearr_49080_49115 = state_49065__$1;
(statearr_49080_49115[(2)] = null);

(statearr_49080_49115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (22))){
var state_49065__$1 = state_49065;
var statearr_49081_49116 = state_49065__$1;
(statearr_49081_49116[(2)] = null);

(statearr_49081_49116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (6))){
var inst_49006 = (state_49065[(13)]);
var inst_49015 = f.call(null,inst_49006);
var inst_49016 = cljs.core.seq.call(null,inst_49015);
var inst_49017 = inst_49016;
var inst_49018 = null;
var inst_49019 = (0);
var inst_49020 = (0);
var state_49065__$1 = (function (){var statearr_49082 = state_49065;
(statearr_49082[(8)] = inst_49019);

(statearr_49082[(9)] = inst_49018);

(statearr_49082[(10)] = inst_49017);

(statearr_49082[(12)] = inst_49020);

return statearr_49082;
})();
var statearr_49083_49117 = state_49065__$1;
(statearr_49083_49117[(2)] = null);

(statearr_49083_49117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (17))){
var inst_49031 = (state_49065[(7)]);
var inst_49035 = cljs.core.chunk_first.call(null,inst_49031);
var inst_49036 = cljs.core.chunk_rest.call(null,inst_49031);
var inst_49037 = cljs.core.count.call(null,inst_49035);
var inst_49017 = inst_49036;
var inst_49018 = inst_49035;
var inst_49019 = inst_49037;
var inst_49020 = (0);
var state_49065__$1 = (function (){var statearr_49084 = state_49065;
(statearr_49084[(8)] = inst_49019);

(statearr_49084[(9)] = inst_49018);

(statearr_49084[(10)] = inst_49017);

(statearr_49084[(12)] = inst_49020);

return statearr_49084;
})();
var statearr_49085_49118 = state_49065__$1;
(statearr_49085_49118[(2)] = null);

(statearr_49085_49118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (3))){
var inst_49063 = (state_49065[(2)]);
var state_49065__$1 = state_49065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49065__$1,inst_49063);
} else {
if((state_val_49066 === (12))){
var inst_49051 = (state_49065[(2)]);
var state_49065__$1 = state_49065;
var statearr_49086_49119 = state_49065__$1;
(statearr_49086_49119[(2)] = inst_49051);

(statearr_49086_49119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (2))){
var state_49065__$1 = state_49065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49065__$1,(4),in$);
} else {
if((state_val_49066 === (23))){
var inst_49059 = (state_49065[(2)]);
var state_49065__$1 = state_49065;
var statearr_49087_49120 = state_49065__$1;
(statearr_49087_49120[(2)] = inst_49059);

(statearr_49087_49120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (19))){
var inst_49046 = (state_49065[(2)]);
var state_49065__$1 = state_49065;
var statearr_49088_49121 = state_49065__$1;
(statearr_49088_49121[(2)] = inst_49046);

(statearr_49088_49121[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (11))){
var inst_49017 = (state_49065[(10)]);
var inst_49031 = (state_49065[(7)]);
var inst_49031__$1 = cljs.core.seq.call(null,inst_49017);
var state_49065__$1 = (function (){var statearr_49089 = state_49065;
(statearr_49089[(7)] = inst_49031__$1);

return statearr_49089;
})();
if(inst_49031__$1){
var statearr_49090_49122 = state_49065__$1;
(statearr_49090_49122[(1)] = (14));

} else {
var statearr_49091_49123 = state_49065__$1;
(statearr_49091_49123[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (9))){
var inst_49053 = (state_49065[(2)]);
var inst_49054 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49065__$1 = (function (){var statearr_49092 = state_49065;
(statearr_49092[(15)] = inst_49053);

return statearr_49092;
})();
if(cljs.core.truth_(inst_49054)){
var statearr_49093_49124 = state_49065__$1;
(statearr_49093_49124[(1)] = (21));

} else {
var statearr_49094_49125 = state_49065__$1;
(statearr_49094_49125[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (5))){
var inst_49009 = cljs.core.async.close_BANG_.call(null,out);
var state_49065__$1 = state_49065;
var statearr_49095_49126 = state_49065__$1;
(statearr_49095_49126[(2)] = inst_49009);

(statearr_49095_49126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (14))){
var inst_49031 = (state_49065[(7)]);
var inst_49033 = cljs.core.chunked_seq_QMARK_.call(null,inst_49031);
var state_49065__$1 = state_49065;
if(inst_49033){
var statearr_49096_49127 = state_49065__$1;
(statearr_49096_49127[(1)] = (17));

} else {
var statearr_49097_49128 = state_49065__$1;
(statearr_49097_49128[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (16))){
var inst_49049 = (state_49065[(2)]);
var state_49065__$1 = state_49065;
var statearr_49098_49129 = state_49065__$1;
(statearr_49098_49129[(2)] = inst_49049);

(statearr_49098_49129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49066 === (10))){
var inst_49018 = (state_49065[(9)]);
var inst_49020 = (state_49065[(12)]);
var inst_49025 = cljs.core._nth.call(null,inst_49018,inst_49020);
var state_49065__$1 = state_49065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49065__$1,(13),out,inst_49025);
} else {
if((state_val_49066 === (18))){
var inst_49031 = (state_49065[(7)]);
var inst_49040 = cljs.core.first.call(null,inst_49031);
var state_49065__$1 = state_49065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49065__$1,(20),out,inst_49040);
} else {
if((state_val_49066 === (8))){
var inst_49019 = (state_49065[(8)]);
var inst_49020 = (state_49065[(12)]);
var inst_49022 = (inst_49020 < inst_49019);
var inst_49023 = inst_49022;
var state_49065__$1 = state_49065;
if(cljs.core.truth_(inst_49023)){
var statearr_49099_49130 = state_49065__$1;
(statearr_49099_49130[(1)] = (10));

} else {
var statearr_49100_49131 = state_49065__$1;
(statearr_49100_49131[(1)] = (11));

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
});})(c__46608__auto__))
;
return ((function (switch__46454__auto__,c__46608__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46455__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46455__auto____0 = (function (){
var statearr_49104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49104[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46455__auto__);

(statearr_49104[(1)] = (1));

return statearr_49104;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46455__auto____1 = (function (state_49065){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_49065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e49105){if((e49105 instanceof Object)){
var ex__46458__auto__ = e49105;
var statearr_49106_49132 = state_49065;
(statearr_49106_49132[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49133 = state_49065;
state_49065 = G__49133;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46455__auto__ = function(state_49065){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46455__auto____1.call(this,state_49065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46455__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46455__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto__))
})();
var state__46610__auto__ = (function (){var statearr_49107 = f__46609__auto__.call(null);
(statearr_49107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto__);

return statearr_49107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto__))
);

return c__46608__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args49134 = [];
var len__45511__auto___49137 = arguments.length;
var i__45512__auto___49138 = (0);
while(true){
if((i__45512__auto___49138 < len__45511__auto___49137)){
args49134.push((arguments[i__45512__auto___49138]));

var G__49139 = (i__45512__auto___49138 + (1));
i__45512__auto___49138 = G__49139;
continue;
} else {
}
break;
}

var G__49136 = args49134.length;
switch (G__49136) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49134.length)].join('')));

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
var args49141 = [];
var len__45511__auto___49144 = arguments.length;
var i__45512__auto___49145 = (0);
while(true){
if((i__45512__auto___49145 < len__45511__auto___49144)){
args49141.push((arguments[i__45512__auto___49145]));

var G__49146 = (i__45512__auto___49145 + (1));
i__45512__auto___49145 = G__49146;
continue;
} else {
}
break;
}

var G__49143 = args49141.length;
switch (G__49143) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49141.length)].join('')));

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
var args49148 = [];
var len__45511__auto___49199 = arguments.length;
var i__45512__auto___49200 = (0);
while(true){
if((i__45512__auto___49200 < len__45511__auto___49199)){
args49148.push((arguments[i__45512__auto___49200]));

var G__49201 = (i__45512__auto___49200 + (1));
i__45512__auto___49200 = G__49201;
continue;
} else {
}
break;
}

var G__49150 = args49148.length;
switch (G__49150) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49148.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46608__auto___49203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___49203,out){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___49203,out){
return (function (state_49174){
var state_val_49175 = (state_49174[(1)]);
if((state_val_49175 === (7))){
var inst_49169 = (state_49174[(2)]);
var state_49174__$1 = state_49174;
var statearr_49176_49204 = state_49174__$1;
(statearr_49176_49204[(2)] = inst_49169);

(statearr_49176_49204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (1))){
var inst_49151 = null;
var state_49174__$1 = (function (){var statearr_49177 = state_49174;
(statearr_49177[(7)] = inst_49151);

return statearr_49177;
})();
var statearr_49178_49205 = state_49174__$1;
(statearr_49178_49205[(2)] = null);

(statearr_49178_49205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (4))){
var inst_49154 = (state_49174[(8)]);
var inst_49154__$1 = (state_49174[(2)]);
var inst_49155 = (inst_49154__$1 == null);
var inst_49156 = cljs.core.not.call(null,inst_49155);
var state_49174__$1 = (function (){var statearr_49179 = state_49174;
(statearr_49179[(8)] = inst_49154__$1);

return statearr_49179;
})();
if(inst_49156){
var statearr_49180_49206 = state_49174__$1;
(statearr_49180_49206[(1)] = (5));

} else {
var statearr_49181_49207 = state_49174__$1;
(statearr_49181_49207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (6))){
var state_49174__$1 = state_49174;
var statearr_49182_49208 = state_49174__$1;
(statearr_49182_49208[(2)] = null);

(statearr_49182_49208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (3))){
var inst_49171 = (state_49174[(2)]);
var inst_49172 = cljs.core.async.close_BANG_.call(null,out);
var state_49174__$1 = (function (){var statearr_49183 = state_49174;
(statearr_49183[(9)] = inst_49171);

return statearr_49183;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49174__$1,inst_49172);
} else {
if((state_val_49175 === (2))){
var state_49174__$1 = state_49174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49174__$1,(4),ch);
} else {
if((state_val_49175 === (11))){
var inst_49154 = (state_49174[(8)]);
var inst_49163 = (state_49174[(2)]);
var inst_49151 = inst_49154;
var state_49174__$1 = (function (){var statearr_49184 = state_49174;
(statearr_49184[(10)] = inst_49163);

(statearr_49184[(7)] = inst_49151);

return statearr_49184;
})();
var statearr_49185_49209 = state_49174__$1;
(statearr_49185_49209[(2)] = null);

(statearr_49185_49209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (9))){
var inst_49154 = (state_49174[(8)]);
var state_49174__$1 = state_49174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49174__$1,(11),out,inst_49154);
} else {
if((state_val_49175 === (5))){
var inst_49154 = (state_49174[(8)]);
var inst_49151 = (state_49174[(7)]);
var inst_49158 = cljs.core._EQ_.call(null,inst_49154,inst_49151);
var state_49174__$1 = state_49174;
if(inst_49158){
var statearr_49187_49210 = state_49174__$1;
(statearr_49187_49210[(1)] = (8));

} else {
var statearr_49188_49211 = state_49174__$1;
(statearr_49188_49211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (10))){
var inst_49166 = (state_49174[(2)]);
var state_49174__$1 = state_49174;
var statearr_49189_49212 = state_49174__$1;
(statearr_49189_49212[(2)] = inst_49166);

(statearr_49189_49212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49175 === (8))){
var inst_49151 = (state_49174[(7)]);
var tmp49186 = inst_49151;
var inst_49151__$1 = tmp49186;
var state_49174__$1 = (function (){var statearr_49190 = state_49174;
(statearr_49190[(7)] = inst_49151__$1);

return statearr_49190;
})();
var statearr_49191_49213 = state_49174__$1;
(statearr_49191_49213[(2)] = null);

(statearr_49191_49213[(1)] = (2));


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
});})(c__46608__auto___49203,out))
;
return ((function (switch__46454__auto__,c__46608__auto___49203,out){
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_49195 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49195[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_49195[(1)] = (1));

return statearr_49195;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_49174){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_49174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e49196){if((e49196 instanceof Object)){
var ex__46458__auto__ = e49196;
var statearr_49197_49214 = state_49174;
(statearr_49197_49214[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49215 = state_49174;
state_49174 = G__49215;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_49174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_49174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___49203,out))
})();
var state__46610__auto__ = (function (){var statearr_49198 = f__46609__auto__.call(null);
(statearr_49198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___49203);

return statearr_49198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___49203,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args49216 = [];
var len__45511__auto___49286 = arguments.length;
var i__45512__auto___49287 = (0);
while(true){
if((i__45512__auto___49287 < len__45511__auto___49286)){
args49216.push((arguments[i__45512__auto___49287]));

var G__49288 = (i__45512__auto___49287 + (1));
i__45512__auto___49287 = G__49288;
continue;
} else {
}
break;
}

var G__49218 = args49216.length;
switch (G__49218) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49216.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46608__auto___49290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___49290,out){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___49290,out){
return (function (state_49256){
var state_val_49257 = (state_49256[(1)]);
if((state_val_49257 === (7))){
var inst_49252 = (state_49256[(2)]);
var state_49256__$1 = state_49256;
var statearr_49258_49291 = state_49256__$1;
(statearr_49258_49291[(2)] = inst_49252);

(statearr_49258_49291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49257 === (1))){
var inst_49219 = (new Array(n));
var inst_49220 = inst_49219;
var inst_49221 = (0);
var state_49256__$1 = (function (){var statearr_49259 = state_49256;
(statearr_49259[(7)] = inst_49220);

(statearr_49259[(8)] = inst_49221);

return statearr_49259;
})();
var statearr_49260_49292 = state_49256__$1;
(statearr_49260_49292[(2)] = null);

(statearr_49260_49292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49257 === (4))){
var inst_49224 = (state_49256[(9)]);
var inst_49224__$1 = (state_49256[(2)]);
var inst_49225 = (inst_49224__$1 == null);
var inst_49226 = cljs.core.not.call(null,inst_49225);
var state_49256__$1 = (function (){var statearr_49261 = state_49256;
(statearr_49261[(9)] = inst_49224__$1);

return statearr_49261;
})();
if(inst_49226){
var statearr_49262_49293 = state_49256__$1;
(statearr_49262_49293[(1)] = (5));

} else {
var statearr_49263_49294 = state_49256__$1;
(statearr_49263_49294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49257 === (15))){
var inst_49246 = (state_49256[(2)]);
var state_49256__$1 = state_49256;
var statearr_49264_49295 = state_49256__$1;
(statearr_49264_49295[(2)] = inst_49246);

(statearr_49264_49295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49257 === (13))){
var state_49256__$1 = state_49256;
var statearr_49265_49296 = state_49256__$1;
(statearr_49265_49296[(2)] = null);

(statearr_49265_49296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49257 === (6))){
var inst_49221 = (state_49256[(8)]);
var inst_49242 = (inst_49221 > (0));
var state_49256__$1 = state_49256;
if(cljs.core.truth_(inst_49242)){
var statearr_49266_49297 = state_49256__$1;
(statearr_49266_49297[(1)] = (12));

} else {
var statearr_49267_49298 = state_49256__$1;
(statearr_49267_49298[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49257 === (3))){
var inst_49254 = (state_49256[(2)]);
var state_49256__$1 = state_49256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49256__$1,inst_49254);
} else {
if((state_val_49257 === (12))){
var inst_49220 = (state_49256[(7)]);
var inst_49244 = cljs.core.vec.call(null,inst_49220);
var state_49256__$1 = state_49256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49256__$1,(15),out,inst_49244);
} else {
if((state_val_49257 === (2))){
var state_49256__$1 = state_49256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49256__$1,(4),ch);
} else {
if((state_val_49257 === (11))){
var inst_49236 = (state_49256[(2)]);
var inst_49237 = (new Array(n));
var inst_49220 = inst_49237;
var inst_49221 = (0);
var state_49256__$1 = (function (){var statearr_49268 = state_49256;
(statearr_49268[(10)] = inst_49236);

(statearr_49268[(7)] = inst_49220);

(statearr_49268[(8)] = inst_49221);

return statearr_49268;
})();
var statearr_49269_49299 = state_49256__$1;
(statearr_49269_49299[(2)] = null);

(statearr_49269_49299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49257 === (9))){
var inst_49220 = (state_49256[(7)]);
var inst_49234 = cljs.core.vec.call(null,inst_49220);
var state_49256__$1 = state_49256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49256__$1,(11),out,inst_49234);
} else {
if((state_val_49257 === (5))){
var inst_49224 = (state_49256[(9)]);
var inst_49220 = (state_49256[(7)]);
var inst_49221 = (state_49256[(8)]);
var inst_49229 = (state_49256[(11)]);
var inst_49228 = (inst_49220[inst_49221] = inst_49224);
var inst_49229__$1 = (inst_49221 + (1));
var inst_49230 = (inst_49229__$1 < n);
var state_49256__$1 = (function (){var statearr_49270 = state_49256;
(statearr_49270[(12)] = inst_49228);

(statearr_49270[(11)] = inst_49229__$1);

return statearr_49270;
})();
if(cljs.core.truth_(inst_49230)){
var statearr_49271_49300 = state_49256__$1;
(statearr_49271_49300[(1)] = (8));

} else {
var statearr_49272_49301 = state_49256__$1;
(statearr_49272_49301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49257 === (14))){
var inst_49249 = (state_49256[(2)]);
var inst_49250 = cljs.core.async.close_BANG_.call(null,out);
var state_49256__$1 = (function (){var statearr_49274 = state_49256;
(statearr_49274[(13)] = inst_49249);

return statearr_49274;
})();
var statearr_49275_49302 = state_49256__$1;
(statearr_49275_49302[(2)] = inst_49250);

(statearr_49275_49302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49257 === (10))){
var inst_49240 = (state_49256[(2)]);
var state_49256__$1 = state_49256;
var statearr_49276_49303 = state_49256__$1;
(statearr_49276_49303[(2)] = inst_49240);

(statearr_49276_49303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49257 === (8))){
var inst_49220 = (state_49256[(7)]);
var inst_49229 = (state_49256[(11)]);
var tmp49273 = inst_49220;
var inst_49220__$1 = tmp49273;
var inst_49221 = inst_49229;
var state_49256__$1 = (function (){var statearr_49277 = state_49256;
(statearr_49277[(7)] = inst_49220__$1);

(statearr_49277[(8)] = inst_49221);

return statearr_49277;
})();
var statearr_49278_49304 = state_49256__$1;
(statearr_49278_49304[(2)] = null);

(statearr_49278_49304[(1)] = (2));


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
});})(c__46608__auto___49290,out))
;
return ((function (switch__46454__auto__,c__46608__auto___49290,out){
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_49282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49282[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_49282[(1)] = (1));

return statearr_49282;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_49256){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_49256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e49283){if((e49283 instanceof Object)){
var ex__46458__auto__ = e49283;
var statearr_49284_49305 = state_49256;
(statearr_49284_49305[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49306 = state_49256;
state_49256 = G__49306;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_49256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_49256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___49290,out))
})();
var state__46610__auto__ = (function (){var statearr_49285 = f__46609__auto__.call(null);
(statearr_49285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___49290);

return statearr_49285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___49290,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args49307 = [];
var len__45511__auto___49381 = arguments.length;
var i__45512__auto___49382 = (0);
while(true){
if((i__45512__auto___49382 < len__45511__auto___49381)){
args49307.push((arguments[i__45512__auto___49382]));

var G__49383 = (i__45512__auto___49382 + (1));
i__45512__auto___49382 = G__49383;
continue;
} else {
}
break;
}

var G__49309 = args49307.length;
switch (G__49309) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49307.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__46608__auto___49385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__46608__auto___49385,out){
return (function (){
var f__46609__auto__ = (function (){var switch__46454__auto__ = ((function (c__46608__auto___49385,out){
return (function (state_49351){
var state_val_49352 = (state_49351[(1)]);
if((state_val_49352 === (7))){
var inst_49347 = (state_49351[(2)]);
var state_49351__$1 = state_49351;
var statearr_49353_49386 = state_49351__$1;
(statearr_49353_49386[(2)] = inst_49347);

(statearr_49353_49386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49352 === (1))){
var inst_49310 = [];
var inst_49311 = inst_49310;
var inst_49312 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49351__$1 = (function (){var statearr_49354 = state_49351;
(statearr_49354[(7)] = inst_49311);

(statearr_49354[(8)] = inst_49312);

return statearr_49354;
})();
var statearr_49355_49387 = state_49351__$1;
(statearr_49355_49387[(2)] = null);

(statearr_49355_49387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49352 === (4))){
var inst_49315 = (state_49351[(9)]);
var inst_49315__$1 = (state_49351[(2)]);
var inst_49316 = (inst_49315__$1 == null);
var inst_49317 = cljs.core.not.call(null,inst_49316);
var state_49351__$1 = (function (){var statearr_49356 = state_49351;
(statearr_49356[(9)] = inst_49315__$1);

return statearr_49356;
})();
if(inst_49317){
var statearr_49357_49388 = state_49351__$1;
(statearr_49357_49388[(1)] = (5));

} else {
var statearr_49358_49389 = state_49351__$1;
(statearr_49358_49389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49352 === (15))){
var inst_49341 = (state_49351[(2)]);
var state_49351__$1 = state_49351;
var statearr_49359_49390 = state_49351__$1;
(statearr_49359_49390[(2)] = inst_49341);

(statearr_49359_49390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49352 === (13))){
var state_49351__$1 = state_49351;
var statearr_49360_49391 = state_49351__$1;
(statearr_49360_49391[(2)] = null);

(statearr_49360_49391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49352 === (6))){
var inst_49311 = (state_49351[(7)]);
var inst_49336 = inst_49311.length;
var inst_49337 = (inst_49336 > (0));
var state_49351__$1 = state_49351;
if(cljs.core.truth_(inst_49337)){
var statearr_49361_49392 = state_49351__$1;
(statearr_49361_49392[(1)] = (12));

} else {
var statearr_49362_49393 = state_49351__$1;
(statearr_49362_49393[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49352 === (3))){
var inst_49349 = (state_49351[(2)]);
var state_49351__$1 = state_49351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49351__$1,inst_49349);
} else {
if((state_val_49352 === (12))){
var inst_49311 = (state_49351[(7)]);
var inst_49339 = cljs.core.vec.call(null,inst_49311);
var state_49351__$1 = state_49351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49351__$1,(15),out,inst_49339);
} else {
if((state_val_49352 === (2))){
var state_49351__$1 = state_49351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49351__$1,(4),ch);
} else {
if((state_val_49352 === (11))){
var inst_49319 = (state_49351[(10)]);
var inst_49315 = (state_49351[(9)]);
var inst_49329 = (state_49351[(2)]);
var inst_49330 = [];
var inst_49331 = inst_49330.push(inst_49315);
var inst_49311 = inst_49330;
var inst_49312 = inst_49319;
var state_49351__$1 = (function (){var statearr_49363 = state_49351;
(statearr_49363[(11)] = inst_49331);

(statearr_49363[(7)] = inst_49311);

(statearr_49363[(8)] = inst_49312);

(statearr_49363[(12)] = inst_49329);

return statearr_49363;
})();
var statearr_49364_49394 = state_49351__$1;
(statearr_49364_49394[(2)] = null);

(statearr_49364_49394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49352 === (9))){
var inst_49311 = (state_49351[(7)]);
var inst_49327 = cljs.core.vec.call(null,inst_49311);
var state_49351__$1 = state_49351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49351__$1,(11),out,inst_49327);
} else {
if((state_val_49352 === (5))){
var inst_49319 = (state_49351[(10)]);
var inst_49312 = (state_49351[(8)]);
var inst_49315 = (state_49351[(9)]);
var inst_49319__$1 = f.call(null,inst_49315);
var inst_49320 = cljs.core._EQ_.call(null,inst_49319__$1,inst_49312);
var inst_49321 = cljs.core.keyword_identical_QMARK_.call(null,inst_49312,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49322 = (inst_49320) || (inst_49321);
var state_49351__$1 = (function (){var statearr_49365 = state_49351;
(statearr_49365[(10)] = inst_49319__$1);

return statearr_49365;
})();
if(cljs.core.truth_(inst_49322)){
var statearr_49366_49395 = state_49351__$1;
(statearr_49366_49395[(1)] = (8));

} else {
var statearr_49367_49396 = state_49351__$1;
(statearr_49367_49396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49352 === (14))){
var inst_49344 = (state_49351[(2)]);
var inst_49345 = cljs.core.async.close_BANG_.call(null,out);
var state_49351__$1 = (function (){var statearr_49369 = state_49351;
(statearr_49369[(13)] = inst_49344);

return statearr_49369;
})();
var statearr_49370_49397 = state_49351__$1;
(statearr_49370_49397[(2)] = inst_49345);

(statearr_49370_49397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49352 === (10))){
var inst_49334 = (state_49351[(2)]);
var state_49351__$1 = state_49351;
var statearr_49371_49398 = state_49351__$1;
(statearr_49371_49398[(2)] = inst_49334);

(statearr_49371_49398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49352 === (8))){
var inst_49319 = (state_49351[(10)]);
var inst_49311 = (state_49351[(7)]);
var inst_49315 = (state_49351[(9)]);
var inst_49324 = inst_49311.push(inst_49315);
var tmp49368 = inst_49311;
var inst_49311__$1 = tmp49368;
var inst_49312 = inst_49319;
var state_49351__$1 = (function (){var statearr_49372 = state_49351;
(statearr_49372[(14)] = inst_49324);

(statearr_49372[(7)] = inst_49311__$1);

(statearr_49372[(8)] = inst_49312);

return statearr_49372;
})();
var statearr_49373_49399 = state_49351__$1;
(statearr_49373_49399[(2)] = null);

(statearr_49373_49399[(1)] = (2));


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
});})(c__46608__auto___49385,out))
;
return ((function (switch__46454__auto__,c__46608__auto___49385,out){
return (function() {
var cljs$core$async$state_machine__46455__auto__ = null;
var cljs$core$async$state_machine__46455__auto____0 = (function (){
var statearr_49377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49377[(0)] = cljs$core$async$state_machine__46455__auto__);

(statearr_49377[(1)] = (1));

return statearr_49377;
});
var cljs$core$async$state_machine__46455__auto____1 = (function (state_49351){
while(true){
var ret_value__46456__auto__ = (function (){try{while(true){
var result__46457__auto__ = switch__46454__auto__.call(null,state_49351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__46457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46457__auto__;
}
break;
}
}catch (e49378){if((e49378 instanceof Object)){
var ex__46458__auto__ = e49378;
var statearr_49379_49400 = state_49351;
(statearr_49379_49400[(5)] = ex__46458__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__46456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49401 = state_49351;
state_49351 = G__49401;
continue;
} else {
return ret_value__46456__auto__;
}
break;
}
});
cljs$core$async$state_machine__46455__auto__ = function(state_49351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46455__auto____1.call(this,state_49351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46455__auto____0;
cljs$core$async$state_machine__46455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46455__auto____1;
return cljs$core$async$state_machine__46455__auto__;
})()
;})(switch__46454__auto__,c__46608__auto___49385,out))
})();
var state__46610__auto__ = (function (){var statearr_49380 = f__46609__auto__.call(null);
(statearr_49380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__46608__auto___49385);

return statearr_49380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__46610__auto__);
});})(c__46608__auto___49385,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1490223438391