// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19207){
var map__19208 = p__19207;
var map__19208__$1 = (((((!((map__19208 == null))))?(((((map__19208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19208):map__19208);
var m = map__19208__$1;
var n = cljs.core.get.call(null,map__19208__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19208__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19210_19242 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19211_19243 = null;
var count__19212_19244 = (0);
var i__19213_19245 = (0);
while(true){
if((i__19213_19245 < count__19212_19244)){
var f_19246 = cljs.core._nth.call(null,chunk__19211_19243,i__19213_19245);
cljs.core.println.call(null,"  ",f_19246);


var G__19247 = seq__19210_19242;
var G__19248 = chunk__19211_19243;
var G__19249 = count__19212_19244;
var G__19250 = (i__19213_19245 + (1));
seq__19210_19242 = G__19247;
chunk__19211_19243 = G__19248;
count__19212_19244 = G__19249;
i__19213_19245 = G__19250;
continue;
} else {
var temp__5735__auto___19251 = cljs.core.seq.call(null,seq__19210_19242);
if(temp__5735__auto___19251){
var seq__19210_19252__$1 = temp__5735__auto___19251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19210_19252__$1)){
var c__4550__auto___19253 = cljs.core.chunk_first.call(null,seq__19210_19252__$1);
var G__19254 = cljs.core.chunk_rest.call(null,seq__19210_19252__$1);
var G__19255 = c__4550__auto___19253;
var G__19256 = cljs.core.count.call(null,c__4550__auto___19253);
var G__19257 = (0);
seq__19210_19242 = G__19254;
chunk__19211_19243 = G__19255;
count__19212_19244 = G__19256;
i__19213_19245 = G__19257;
continue;
} else {
var f_19258 = cljs.core.first.call(null,seq__19210_19252__$1);
cljs.core.println.call(null,"  ",f_19258);


var G__19259 = cljs.core.next.call(null,seq__19210_19252__$1);
var G__19260 = null;
var G__19261 = (0);
var G__19262 = (0);
seq__19210_19242 = G__19259;
chunk__19211_19243 = G__19260;
count__19212_19244 = G__19261;
i__19213_19245 = G__19262;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19263 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19263);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19263)))?cljs.core.second.call(null,arglists_19263):arglists_19263));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19214_19264 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19215_19265 = null;
var count__19216_19266 = (0);
var i__19217_19267 = (0);
while(true){
if((i__19217_19267 < count__19216_19266)){
var vec__19228_19268 = cljs.core._nth.call(null,chunk__19215_19265,i__19217_19267);
var name_19269 = cljs.core.nth.call(null,vec__19228_19268,(0),null);
var map__19231_19270 = cljs.core.nth.call(null,vec__19228_19268,(1),null);
var map__19231_19271__$1 = (((((!((map__19231_19270 == null))))?(((((map__19231_19270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19231_19270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19231_19270):map__19231_19270);
var doc_19272 = cljs.core.get.call(null,map__19231_19271__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19273 = cljs.core.get.call(null,map__19231_19271__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19269);

cljs.core.println.call(null," ",arglists_19273);

if(cljs.core.truth_(doc_19272)){
cljs.core.println.call(null," ",doc_19272);
} else {
}


var G__19274 = seq__19214_19264;
var G__19275 = chunk__19215_19265;
var G__19276 = count__19216_19266;
var G__19277 = (i__19217_19267 + (1));
seq__19214_19264 = G__19274;
chunk__19215_19265 = G__19275;
count__19216_19266 = G__19276;
i__19217_19267 = G__19277;
continue;
} else {
var temp__5735__auto___19278 = cljs.core.seq.call(null,seq__19214_19264);
if(temp__5735__auto___19278){
var seq__19214_19279__$1 = temp__5735__auto___19278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19214_19279__$1)){
var c__4550__auto___19280 = cljs.core.chunk_first.call(null,seq__19214_19279__$1);
var G__19281 = cljs.core.chunk_rest.call(null,seq__19214_19279__$1);
var G__19282 = c__4550__auto___19280;
var G__19283 = cljs.core.count.call(null,c__4550__auto___19280);
var G__19284 = (0);
seq__19214_19264 = G__19281;
chunk__19215_19265 = G__19282;
count__19216_19266 = G__19283;
i__19217_19267 = G__19284;
continue;
} else {
var vec__19233_19285 = cljs.core.first.call(null,seq__19214_19279__$1);
var name_19286 = cljs.core.nth.call(null,vec__19233_19285,(0),null);
var map__19236_19287 = cljs.core.nth.call(null,vec__19233_19285,(1),null);
var map__19236_19288__$1 = (((((!((map__19236_19287 == null))))?(((((map__19236_19287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19236_19287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19236_19287):map__19236_19287);
var doc_19289 = cljs.core.get.call(null,map__19236_19288__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19290 = cljs.core.get.call(null,map__19236_19288__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19286);

cljs.core.println.call(null," ",arglists_19290);

if(cljs.core.truth_(doc_19289)){
cljs.core.println.call(null," ",doc_19289);
} else {
}


var G__19291 = cljs.core.next.call(null,seq__19214_19279__$1);
var G__19292 = null;
var G__19293 = (0);
var G__19294 = (0);
seq__19214_19264 = G__19291;
chunk__19215_19265 = G__19292;
count__19216_19266 = G__19293;
i__19217_19267 = G__19294;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__19238 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19239 = null;
var count__19240 = (0);
var i__19241 = (0);
while(true){
if((i__19241 < count__19240)){
var role = cljs.core._nth.call(null,chunk__19239,i__19241);
var temp__5735__auto___19295__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___19295__$1)){
var spec_19296 = temp__5735__auto___19295__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19296));
} else {
}


var G__19297 = seq__19238;
var G__19298 = chunk__19239;
var G__19299 = count__19240;
var G__19300 = (i__19241 + (1));
seq__19238 = G__19297;
chunk__19239 = G__19298;
count__19240 = G__19299;
i__19241 = G__19300;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__19238);
if(temp__5735__auto____$1){
var seq__19238__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19238__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19238__$1);
var G__19301 = cljs.core.chunk_rest.call(null,seq__19238__$1);
var G__19302 = c__4550__auto__;
var G__19303 = cljs.core.count.call(null,c__4550__auto__);
var G__19304 = (0);
seq__19238 = G__19301;
chunk__19239 = G__19302;
count__19240 = G__19303;
i__19241 = G__19304;
continue;
} else {
var role = cljs.core.first.call(null,seq__19238__$1);
var temp__5735__auto___19305__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___19305__$2)){
var spec_19306 = temp__5735__auto___19305__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19306));
} else {
}


var G__19307 = cljs.core.next.call(null,seq__19238__$1);
var G__19308 = null;
var G__19309 = (0);
var G__19310 = (0);
seq__19238 = G__19307;
chunk__19239 = G__19308;
count__19240 = G__19309;
i__19241 = G__19310;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19311 = cljs.core.conj.call(null,via,t);
var G__19312 = cljs.core.ex_cause.call(null,t);
via = G__19311;
t = G__19312;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19315 = datafied_throwable;
var map__19315__$1 = (((((!((map__19315 == null))))?(((((map__19315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19315):map__19315);
var via = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19315__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19316 = cljs.core.last.call(null,via);
var map__19316__$1 = (((((!((map__19316 == null))))?(((((map__19316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19316):map__19316);
var type = cljs.core.get.call(null,map__19316__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19316__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19316__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19317 = data;
var map__19317__$1 = (((((!((map__19317 == null))))?(((((map__19317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19317):map__19317);
var problems = cljs.core.get.call(null,map__19317__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19317__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19317__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19318 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19318__$1 = (((((!((map__19318 == null))))?(((((map__19318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19318):map__19318);
var top_data = map__19318__$1;
var source = cljs.core.get.call(null,map__19318__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__19323 = phase;
var G__19323__$1 = (((G__19323 instanceof cljs.core.Keyword))?G__19323.fqn:null);
switch (G__19323__$1) {
case "read-source":
var map__19324 = data;
var map__19324__$1 = (((((!((map__19324 == null))))?(((((map__19324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19324):map__19324);
var line = cljs.core.get.call(null,map__19324__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19324__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19326 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__19326__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19326,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19326);
var G__19326__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19326__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19326__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19326__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19326__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19327 = top_data;
var G__19327__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19327,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19327);
var G__19327__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19327__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19327__$1);
var G__19327__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19327__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19327__$2);
var G__19327__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19327__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19327__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19327__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19327__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19328 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19328,(0),null);
var method = cljs.core.nth.call(null,vec__19328,(1),null);
var file = cljs.core.nth.call(null,vec__19328,(2),null);
var line = cljs.core.nth.call(null,vec__19328,(3),null);
var G__19331 = top_data;
var G__19331__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__19331,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19331);
var G__19331__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__19331__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19331__$1);
var G__19331__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__19331__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19331__$2);
var G__19331__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19331__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19331__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19331__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19331__$4;
}

break;
case "execution":
var vec__19332 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19332,(0),null);
var method = cljs.core.nth.call(null,vec__19332,(1),null);
var file = cljs.core.nth.call(null,vec__19332,(2),null);
var line = cljs.core.nth.call(null,vec__19332,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__19332,source__$1,method,file,line,G__19323,G__19323__$1,map__19315,map__19315__$1,via,trace,phase,map__19316,map__19316__$1,type,message,data,map__19317,map__19317__$1,problems,fn,caller,map__19318,map__19318__$1,top_data,source){
return (function (p1__19314_SHARP_){
var or__4131__auto__ = (p1__19314_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19314_SHARP_);
}
});})(vec__19332,source__$1,method,file,line,G__19323,G__19323__$1,map__19315,map__19315__$1,via,trace,phase,map__19316,map__19316__$1,type,message,data,map__19317,map__19317__$1,problems,fn,caller,map__19318,map__19318__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__19335 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19335__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__19335,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19335);
var G__19335__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19335__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19335__$1);
var G__19335__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__19335__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19335__$2);
var G__19335__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__19335__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19335__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19335__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19335__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19323__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19339){
var map__19340 = p__19339;
var map__19340__$1 = (((((!((map__19340 == null))))?(((((map__19340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19340):map__19340);
var triage_data = map__19340__$1;
var phase = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__19340__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19342 = phase;
var G__19342__$1 = (((G__19342 instanceof cljs.core.Keyword))?G__19342.fqn:null);
switch (G__19342__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19343_19352 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19344_19353 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19345_19354 = true;
var _STAR_print_fn_STAR__temp_val__19346_19355 = ((function (_STAR_print_newline_STAR__orig_val__19343_19352,_STAR_print_fn_STAR__orig_val__19344_19353,_STAR_print_newline_STAR__temp_val__19345_19354,sb__4661__auto__,G__19342,G__19342__$1,loc,class_name,simple_class,cause_type,format,map__19340,map__19340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19343_19352,_STAR_print_fn_STAR__orig_val__19344_19353,_STAR_print_newline_STAR__temp_val__19345_19354,sb__4661__auto__,G__19342,G__19342__$1,loc,class_name,simple_class,cause_type,format,map__19340,map__19340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19345_19354;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19346_19355;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__19343_19352,_STAR_print_fn_STAR__orig_val__19344_19353,_STAR_print_newline_STAR__temp_val__19345_19354,_STAR_print_fn_STAR__temp_val__19346_19355,sb__4661__auto__,G__19342,G__19342__$1,loc,class_name,simple_class,cause_type,format,map__19340,map__19340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__19343_19352,_STAR_print_fn_STAR__orig_val__19344_19353,_STAR_print_newline_STAR__temp_val__19345_19354,_STAR_print_fn_STAR__temp_val__19346_19355,sb__4661__auto__,G__19342,G__19342__$1,loc,class_name,simple_class,cause_type,format,map__19340,map__19340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19337_SHARP_){
return cljs.core.dissoc.call(null,p1__19337_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__19343_19352,_STAR_print_fn_STAR__orig_val__19344_19353,_STAR_print_newline_STAR__temp_val__19345_19354,_STAR_print_fn_STAR__temp_val__19346_19355,sb__4661__auto__,G__19342,G__19342__$1,loc,class_name,simple_class,cause_type,format,map__19340,map__19340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19343_19352,_STAR_print_fn_STAR__orig_val__19344_19353,_STAR_print_newline_STAR__temp_val__19345_19354,_STAR_print_fn_STAR__temp_val__19346_19355,sb__4661__auto__,G__19342,G__19342__$1,loc,class_name,simple_class,cause_type,format,map__19340,map__19340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19344_19353;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19343_19352;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19347_19356 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19348_19357 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19349_19358 = true;
var _STAR_print_fn_STAR__temp_val__19350_19359 = ((function (_STAR_print_newline_STAR__orig_val__19347_19356,_STAR_print_fn_STAR__orig_val__19348_19357,_STAR_print_newline_STAR__temp_val__19349_19358,sb__4661__auto__,G__19342,G__19342__$1,loc,class_name,simple_class,cause_type,format,map__19340,map__19340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19347_19356,_STAR_print_fn_STAR__orig_val__19348_19357,_STAR_print_newline_STAR__temp_val__19349_19358,sb__4661__auto__,G__19342,G__19342__$1,loc,class_name,simple_class,cause_type,format,map__19340,map__19340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19349_19358;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19350_19359;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__19347_19356,_STAR_print_fn_STAR__orig_val__19348_19357,_STAR_print_newline_STAR__temp_val__19349_19358,_STAR_print_fn_STAR__temp_val__19350_19359,sb__4661__auto__,G__19342,G__19342__$1,loc,class_name,simple_class,cause_type,format,map__19340,map__19340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__19347_19356,_STAR_print_fn_STAR__orig_val__19348_19357,_STAR_print_newline_STAR__temp_val__19349_19358,_STAR_print_fn_STAR__temp_val__19350_19359,sb__4661__auto__,G__19342,G__19342__$1,loc,class_name,simple_class,cause_type,format,map__19340,map__19340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19338_SHARP_){
return cljs.core.dissoc.call(null,p1__19338_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__19347_19356,_STAR_print_fn_STAR__orig_val__19348_19357,_STAR_print_newline_STAR__temp_val__19349_19358,_STAR_print_fn_STAR__temp_val__19350_19359,sb__4661__auto__,G__19342,G__19342__$1,loc,class_name,simple_class,cause_type,format,map__19340,map__19340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19347_19356,_STAR_print_fn_STAR__orig_val__19348_19357,_STAR_print_newline_STAR__temp_val__19349_19358,_STAR_print_fn_STAR__temp_val__19350_19359,sb__4661__auto__,G__19342,G__19342__$1,loc,class_name,simple_class,cause_type,format,map__19340,map__19340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19348_19357;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19347_19356;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19342__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
