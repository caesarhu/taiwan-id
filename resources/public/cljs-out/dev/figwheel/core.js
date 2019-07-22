// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__13926_SHARP_){
var k = f.call(null,p1__13926_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13927){
var vec__13928 = p__13927;
var k = cljs.core.nth.call(null,vec__13928,(0),null);
var v = cljs.core.nth.call(null,vec__13928,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13932 = arguments.length;
var i__4731__auto___13933 = (0);
while(true){
if((i__4731__auto___13933 < len__4730__auto___13932)){
args__4736__auto__.push((arguments[i__4731__auto___13933]));

var G__13934 = (i__4731__auto___13933 + (1));
i__4731__auto___13933 = G__13934;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq13931){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13931));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__13937){
var map__13938 = p__13937;
var map__13938__$1 = (((((!((map__13938 == null))))?(((((map__13938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13938):map__13938);
var message = cljs.core.get.call(null,map__13938__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__13938__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__13938,map__13938__$1,message,column){
return (function (p1__13936_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13936_SHARP_], null)));
});})(map__13938,map__13938__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__13938,map__13938__$1,message,column){
return (function (p1__13935_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__13935_SHARP_);
});})(map__13938,map__13938__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__13941){
var map__13942 = p__13941;
var map__13942__$1 = (((((!((map__13942 == null))))?(((((map__13942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13942):map__13942);
var message_data = map__13942__$1;
var message = cljs.core.get.call(null,map__13942__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__13942__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__13942__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__13942__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__13944 = file_excerpt;
var map__13944__$1 = (((((!((map__13944 == null))))?(((((map__13944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13944):map__13944);
var start_line = cljs.core.get.call(null,map__13944__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__13944__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__13944__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__13944,map__13944__$1,start_line,path,excerpt,map__13942,map__13942__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__13944,map__13944__$1,start_line,path,excerpt,map__13942,map__13942__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__13945 = cljs.core.split_with.call(null,((function (map__13944,map__13944__$1,start_line,path,excerpt,lines,map__13942,map__13942__$1,message_data,message,line,column,file_excerpt){
return (function (p1__13940_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__13940_SHARP_));
});})(map__13944,map__13944__$1,start_line,path,excerpt,lines,map__13942,map__13942__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__13945,(0),null);
var end = cljs.core.nth.call(null,vec__13945,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__13949){
var map__13950 = p__13949;
var map__13950__$1 = (((((!((map__13950 == null))))?(((((map__13950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13950):map__13950);
var file = cljs.core.get.call(null,map__13950__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__13950__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__13950__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__13952 = "";
var G__13952__$1 = (cljs.core.truth_(file)?[G__13952,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__13952);
var G__13952__$2 = (cljs.core.truth_(line)?[G__13952__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__13952__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__13952__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__13952__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_14007 = (new goog.debug.Console());
var G__13959_14008 = c_14007.getFormatter();
goog.object.set(G__13959_14008,"showAbsoluteTime",false);

goog.object.set(G__13959_14008,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_14007);

}

var temp__5735__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5735__auto__)){
var console_instance = temp__5735__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__13960 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__13960,"data",(function (){var or__4131__auto__ = data;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__13960;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5733__auto__ = e.event_;
if(cljs.core.truth_(temp__5733__auto__)){
var e__$1 = temp__5733__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && ((!((goog.global.document == null)))));
});

var last_reload_timestamp_14009 = cljs.core.atom.call(null,(0));
var promise_chain_14010 = (new goog.Promise(((function (last_reload_timestamp_14009){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_14009))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_14009,promise_chain_14010){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(figwheel.core.heads_up_display_QMARK_.call(null)){
var temp__5733__auto__ = (function (){var temp__5735__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5735__auto__)){
var ts = temp__5735__auto__;
var and__4120__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_14009) < ts);
if(and__4120__auto__){
return ts;
} else {
return and__4120__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var ts = temp__5733__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_14009,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_14010.then(((function (warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_14009,promise_chain_14010){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__13961 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__13962 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__13962;

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR__orig_val__13961,_STAR_inline_code_message_max_column_STAR__temp_val__13962,warn,warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_14009,promise_chain_14010){
return (function (){
var seq__13963 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__13964 = null;
var count__13965 = (0);
var i__13966 = (0);
while(true){
if((i__13966 < count__13965)){
var w = cljs.core._nth.call(null,chunk__13964,i__13966);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__14011 = seq__13963;
var G__14012 = chunk__13964;
var G__14013 = count__13965;
var G__14014 = (i__13966 + (1));
seq__13963 = G__14011;
chunk__13964 = G__14012;
count__13965 = G__14013;
i__13966 = G__14014;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13963);
if(temp__5735__auto__){
var seq__13963__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13963__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13963__$1);
var G__14015 = cljs.core.chunk_rest.call(null,seq__13963__$1);
var G__14016 = c__4550__auto__;
var G__14017 = cljs.core.count.call(null,c__4550__auto__);
var G__14018 = (0);
seq__13963 = G__14015;
chunk__13964 = G__14016;
count__13965 = G__14017;
i__13966 = G__14018;
continue;
} else {
var w = cljs.core.first.call(null,seq__13963__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__14019 = cljs.core.next.call(null,seq__13963__$1);
var G__14020 = null;
var G__14021 = (0);
var G__14022 = (0);
seq__13963 = G__14019;
chunk__13964 = G__14020;
count__13965 = G__14021;
i__13966 = G__14022;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR__orig_val__13961,_STAR_inline_code_message_max_column_STAR__temp_val__13962,warn,warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_14009,promise_chain_14010))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__13961;
}});})(warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_14009,promise_chain_14010))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_14010.then(((function (warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_14009,promise_chain_14010){
return (function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__13967 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__13968 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__13968;

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__13967;
}});})(warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_14009,promise_chain_14010))
);
} else {
return promise_chain_14010.then(((function (warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_14009,promise_chain_14010){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5733__auto__,last_reload_timestamp_14009,promise_chain_14010))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_14009,promise_chain_14010))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4120__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4120__auto____$1){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14023 = arguments.length;
var i__4731__auto___14024 = (0);
while(true){
if((i__4731__auto___14024 < len__4730__auto___14023)){
args__4736__auto__.push((arguments[i__4731__auto___14024]));

var G__14025 = (i__4731__auto___14024 + (1));
i__4731__auto___14024 = G__14025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__13971){
var vec__13972 = p__13971;
var n = cljs.core.nth.call(null,vec__13972,(0),null);
var mdata = cljs.core.nth.call(null,vec__13972,(1),null);
var temp__5735__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__13975 = cljs.core.seq.call(null,hooks);
var chunk__13976 = null;
var count__13977 = (0);
var i__13978 = (0);
while(true){
if((i__13978 < count__13977)){
var vec__13985 = cljs.core._nth.call(null,chunk__13976,i__13978);
var n = cljs.core.nth.call(null,vec__13985,(0),null);
var f = cljs.core.nth.call(null,vec__13985,(1),null);
var temp__5733__auto___14026 = cljs.core.reduce.call(null,((function (seq__13975,chunk__13976,count__13977,i__13978,vec__13985,n,f,hooks){
return (function (p1__13953_SHARP_,p2__13954_SHARP_){
if(cljs.core.truth_(p1__13953_SHARP_)){
return goog.object.get(p1__13953_SHARP_,p2__13954_SHARP_);
} else {
return null;
}
});})(seq__13975,chunk__13976,count__13977,i__13978,vec__13985,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___14026)){
var hook_14027 = temp__5733__auto___14026;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_14027,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__14028 = seq__13975;
var G__14029 = chunk__13976;
var G__14030 = count__13977;
var G__14031 = (i__13978 + (1));
seq__13975 = G__14028;
chunk__13976 = G__14029;
count__13977 = G__14030;
i__13978 = G__14031;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13975);
if(temp__5735__auto__){
var seq__13975__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13975__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13975__$1);
var G__14032 = cljs.core.chunk_rest.call(null,seq__13975__$1);
var G__14033 = c__4550__auto__;
var G__14034 = cljs.core.count.call(null,c__4550__auto__);
var G__14035 = (0);
seq__13975 = G__14032;
chunk__13976 = G__14033;
count__13977 = G__14034;
i__13978 = G__14035;
continue;
} else {
var vec__13988 = cljs.core.first.call(null,seq__13975__$1);
var n = cljs.core.nth.call(null,vec__13988,(0),null);
var f = cljs.core.nth.call(null,vec__13988,(1),null);
var temp__5733__auto___14036 = cljs.core.reduce.call(null,((function (seq__13975,chunk__13976,count__13977,i__13978,vec__13988,n,f,seq__13975__$1,temp__5735__auto__,hooks){
return (function (p1__13953_SHARP_,p2__13954_SHARP_){
if(cljs.core.truth_(p1__13953_SHARP_)){
return goog.object.get(p1__13953_SHARP_,p2__13954_SHARP_);
} else {
return null;
}
});})(seq__13975,chunk__13976,count__13977,i__13978,vec__13988,n,f,seq__13975__$1,temp__5735__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5733__auto___14036)){
var hook_14037 = temp__5733__auto___14036;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_14037,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__14038 = cljs.core.next.call(null,seq__13975__$1);
var G__14039 = null;
var G__14040 = (0);
var G__14041 = (0);
seq__13975 = G__14038;
chunk__13976 = G__14039;
count__13977 = G__14040;
i__13978 = G__14041;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq13969){
var G__13970 = cljs.core.first.call(null,seq13969);
var seq13969__$1 = cljs.core.next.call(null,seq13969);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13970,seq13969__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13991){
var vec__13992 = p__13991;
var k = cljs.core.nth.call(null,vec__13992,(0),null);
var v = cljs.core.nth.call(null,vec__13992,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__13955_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__13955_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__13955_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__13956_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__13956_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__4120__auto__ = (!(figwheel.core.load_warninged_code));
if(and__4120__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4120__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__13957_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__13957_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__13995_14042 = cljs.core.seq.call(null,to_reload);
var chunk__13996_14043 = null;
var count__13997_14044 = (0);
var i__13998_14045 = (0);
while(true){
if((i__13998_14045 < count__13997_14044)){
var ns_14046 = cljs.core._nth.call(null,chunk__13996_14043,i__13998_14045);
goog.require(cljs.core.name.call(null,ns_14046),true);


var G__14047 = seq__13995_14042;
var G__14048 = chunk__13996_14043;
var G__14049 = count__13997_14044;
var G__14050 = (i__13998_14045 + (1));
seq__13995_14042 = G__14047;
chunk__13996_14043 = G__14048;
count__13997_14044 = G__14049;
i__13998_14045 = G__14050;
continue;
} else {
var temp__5735__auto___14051 = cljs.core.seq.call(null,seq__13995_14042);
if(temp__5735__auto___14051){
var seq__13995_14052__$1 = temp__5735__auto___14051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13995_14052__$1)){
var c__4550__auto___14053 = cljs.core.chunk_first.call(null,seq__13995_14052__$1);
var G__14054 = cljs.core.chunk_rest.call(null,seq__13995_14052__$1);
var G__14055 = c__4550__auto___14053;
var G__14056 = cljs.core.count.call(null,c__4550__auto___14053);
var G__14057 = (0);
seq__13995_14042 = G__14054;
chunk__13996_14043 = G__14055;
count__13997_14044 = G__14056;
i__13998_14045 = G__14057;
continue;
} else {
var ns_14058 = cljs.core.first.call(null,seq__13995_14052__$1);
goog.require(cljs.core.name.call(null,ns_14058),true);


var G__14059 = cljs.core.next.call(null,seq__13995_14052__$1);
var G__14060 = null;
var G__14061 = (0);
var G__14062 = (0);
seq__13995_14042 = G__14059;
chunk__13996_14043 = G__14060;
count__13997_14044 = G__14061;
i__13998_14045 = G__14062;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_14063 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5735__auto__)){
var not_loaded = temp__5735__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_14063);
} else {
setTimeout(after_reload_fn_14063,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__13999 = cljs.core.seq.call(null,warnings);
var chunk__14000 = null;
var count__14001 = (0);
var i__14002 = (0);
while(true){
if((i__14002 < count__14001)){
var warning = cljs.core._nth.call(null,chunk__14000,i__14002);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__14064 = seq__13999;
var G__14065 = chunk__14000;
var G__14066 = count__14001;
var G__14067 = (i__14002 + (1));
seq__13999 = G__14064;
chunk__14000 = G__14065;
count__14001 = G__14066;
i__14002 = G__14067;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__13999);
if(temp__5735__auto__){
var seq__13999__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13999__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__13999__$1);
var G__14068 = cljs.core.chunk_rest.call(null,seq__13999__$1);
var G__14069 = c__4550__auto__;
var G__14070 = cljs.core.count.call(null,c__4550__auto__);
var G__14071 = (0);
seq__13999 = G__14068;
chunk__14000 = G__14069;
count__14001 = G__14070;
i__14002 = G__14071;
continue;
} else {
var warning = cljs.core.first.call(null,seq__13999__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__14072 = cljs.core.next.call(null,seq__13999__$1);
var G__14073 = null;
var G__14074 = (0);
var G__14075 = (0);
seq__13999 = G__14072;
chunk__14000 = G__14073;
count__14001 = G__14074;
i__14002 = G__14075;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__14003){
var map__14004 = p__14003;
var map__14004__$1 = (((((!((map__14004 == null))))?(((((map__14004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14004):map__14004);
var exception_data = map__14004__$1;
var file = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__14004__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__14004,map__14004__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__14004,map__14004__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__14004,map__14004__$1,exception_data,file,type,message){
return (function (p1__13958_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__13958_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__14004,map__14004__$1,exception_data,file,type,message))
);

return goog.log.warning(figwheel.core.logger,(function (){var G__14006 = "Compile Exception - ";
var G__14006__$1 = (cljs.core.truth_((function (){var or__4131__auto__ = type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return message;
}
})())?[G__14006,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))))].join(''):G__14006);
if(cljs.core.truth_(file)){
return [G__14006__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__14006__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
