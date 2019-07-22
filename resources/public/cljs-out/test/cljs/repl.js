// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14069){
var map__14070 = p__14069;
var map__14070__$1 = (((((!((map__14070 == null))))?(((((map__14070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14070):map__14070);
var m = map__14070__$1;
var n = cljs.core.get.call(null,map__14070__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14070__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__14072_14104 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14073_14105 = null;
var count__14074_14106 = (0);
var i__14075_14107 = (0);
while(true){
if((i__14075_14107 < count__14074_14106)){
var f_14108 = cljs.core._nth.call(null,chunk__14073_14105,i__14075_14107);
cljs.core.println.call(null,"  ",f_14108);


var G__14109 = seq__14072_14104;
var G__14110 = chunk__14073_14105;
var G__14111 = count__14074_14106;
var G__14112 = (i__14075_14107 + (1));
seq__14072_14104 = G__14109;
chunk__14073_14105 = G__14110;
count__14074_14106 = G__14111;
i__14075_14107 = G__14112;
continue;
} else {
var temp__5735__auto___14113 = cljs.core.seq.call(null,seq__14072_14104);
if(temp__5735__auto___14113){
var seq__14072_14114__$1 = temp__5735__auto___14113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14072_14114__$1)){
var c__4550__auto___14115 = cljs.core.chunk_first.call(null,seq__14072_14114__$1);
var G__14116 = cljs.core.chunk_rest.call(null,seq__14072_14114__$1);
var G__14117 = c__4550__auto___14115;
var G__14118 = cljs.core.count.call(null,c__4550__auto___14115);
var G__14119 = (0);
seq__14072_14104 = G__14116;
chunk__14073_14105 = G__14117;
count__14074_14106 = G__14118;
i__14075_14107 = G__14119;
continue;
} else {
var f_14120 = cljs.core.first.call(null,seq__14072_14114__$1);
cljs.core.println.call(null,"  ",f_14120);


var G__14121 = cljs.core.next.call(null,seq__14072_14114__$1);
var G__14122 = null;
var G__14123 = (0);
var G__14124 = (0);
seq__14072_14104 = G__14121;
chunk__14073_14105 = G__14122;
count__14074_14106 = G__14123;
i__14075_14107 = G__14124;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14125 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14125);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14125)))?cljs.core.second.call(null,arglists_14125):arglists_14125));
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
var seq__14076_14126 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14077_14127 = null;
var count__14078_14128 = (0);
var i__14079_14129 = (0);
while(true){
if((i__14079_14129 < count__14078_14128)){
var vec__14090_14130 = cljs.core._nth.call(null,chunk__14077_14127,i__14079_14129);
var name_14131 = cljs.core.nth.call(null,vec__14090_14130,(0),null);
var map__14093_14132 = cljs.core.nth.call(null,vec__14090_14130,(1),null);
var map__14093_14133__$1 = (((((!((map__14093_14132 == null))))?(((((map__14093_14132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14093_14132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14093_14132):map__14093_14132);
var doc_14134 = cljs.core.get.call(null,map__14093_14133__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14135 = cljs.core.get.call(null,map__14093_14133__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14131);

cljs.core.println.call(null," ",arglists_14135);

if(cljs.core.truth_(doc_14134)){
cljs.core.println.call(null," ",doc_14134);
} else {
}


var G__14136 = seq__14076_14126;
var G__14137 = chunk__14077_14127;
var G__14138 = count__14078_14128;
var G__14139 = (i__14079_14129 + (1));
seq__14076_14126 = G__14136;
chunk__14077_14127 = G__14137;
count__14078_14128 = G__14138;
i__14079_14129 = G__14139;
continue;
} else {
var temp__5735__auto___14140 = cljs.core.seq.call(null,seq__14076_14126);
if(temp__5735__auto___14140){
var seq__14076_14141__$1 = temp__5735__auto___14140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14076_14141__$1)){
var c__4550__auto___14142 = cljs.core.chunk_first.call(null,seq__14076_14141__$1);
var G__14143 = cljs.core.chunk_rest.call(null,seq__14076_14141__$1);
var G__14144 = c__4550__auto___14142;
var G__14145 = cljs.core.count.call(null,c__4550__auto___14142);
var G__14146 = (0);
seq__14076_14126 = G__14143;
chunk__14077_14127 = G__14144;
count__14078_14128 = G__14145;
i__14079_14129 = G__14146;
continue;
} else {
var vec__14095_14147 = cljs.core.first.call(null,seq__14076_14141__$1);
var name_14148 = cljs.core.nth.call(null,vec__14095_14147,(0),null);
var map__14098_14149 = cljs.core.nth.call(null,vec__14095_14147,(1),null);
var map__14098_14150__$1 = (((((!((map__14098_14149 == null))))?(((((map__14098_14149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14098_14149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14098_14149):map__14098_14149);
var doc_14151 = cljs.core.get.call(null,map__14098_14150__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14152 = cljs.core.get.call(null,map__14098_14150__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14148);

cljs.core.println.call(null," ",arglists_14152);

if(cljs.core.truth_(doc_14151)){
cljs.core.println.call(null," ",doc_14151);
} else {
}


var G__14153 = cljs.core.next.call(null,seq__14076_14141__$1);
var G__14154 = null;
var G__14155 = (0);
var G__14156 = (0);
seq__14076_14126 = G__14153;
chunk__14077_14127 = G__14154;
count__14078_14128 = G__14155;
i__14079_14129 = G__14156;
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

var seq__14100 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14101 = null;
var count__14102 = (0);
var i__14103 = (0);
while(true){
if((i__14103 < count__14102)){
var role = cljs.core._nth.call(null,chunk__14101,i__14103);
var temp__5735__auto___14157__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___14157__$1)){
var spec_14158 = temp__5735__auto___14157__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_14158));
} else {
}


var G__14159 = seq__14100;
var G__14160 = chunk__14101;
var G__14161 = count__14102;
var G__14162 = (i__14103 + (1));
seq__14100 = G__14159;
chunk__14101 = G__14160;
count__14102 = G__14161;
i__14103 = G__14162;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__14100);
if(temp__5735__auto____$1){
var seq__14100__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14100__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__14100__$1);
var G__14163 = cljs.core.chunk_rest.call(null,seq__14100__$1);
var G__14164 = c__4550__auto__;
var G__14165 = cljs.core.count.call(null,c__4550__auto__);
var G__14166 = (0);
seq__14100 = G__14163;
chunk__14101 = G__14164;
count__14102 = G__14165;
i__14103 = G__14166;
continue;
} else {
var role = cljs.core.first.call(null,seq__14100__$1);
var temp__5735__auto___14167__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___14167__$2)){
var spec_14168 = temp__5735__auto___14167__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_14168));
} else {
}


var G__14169 = cljs.core.next.call(null,seq__14100__$1);
var G__14170 = null;
var G__14171 = (0);
var G__14172 = (0);
seq__14100 = G__14169;
chunk__14101 = G__14170;
count__14102 = G__14171;
i__14103 = G__14172;
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
var G__14173 = cljs.core.conj.call(null,via,t);
var G__14174 = cljs.core.ex_cause.call(null,t);
via = G__14173;
t = G__14174;
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
var map__14177 = datafied_throwable;
var map__14177__$1 = (((((!((map__14177 == null))))?(((((map__14177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14177):map__14177);
var via = cljs.core.get.call(null,map__14177__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__14177__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__14177__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__14178 = cljs.core.last.call(null,via);
var map__14178__$1 = (((((!((map__14178 == null))))?(((((map__14178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14178):map__14178);
var type = cljs.core.get.call(null,map__14178__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__14178__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__14178__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__14179 = data;
var map__14179__$1 = (((((!((map__14179 == null))))?(((((map__14179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14179):map__14179);
var problems = cljs.core.get.call(null,map__14179__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__14179__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__14179__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__14180 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__14180__$1 = (((((!((map__14180 == null))))?(((((map__14180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14180):map__14180);
var top_data = map__14180__$1;
var source = cljs.core.get.call(null,map__14180__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__14185 = phase;
var G__14185__$1 = (((G__14185 instanceof cljs.core.Keyword))?G__14185.fqn:null);
switch (G__14185__$1) {
case "read-source":
var map__14186 = data;
var map__14186__$1 = (((((!((map__14186 == null))))?(((((map__14186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14186):map__14186);
var line = cljs.core.get.call(null,map__14186__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__14186__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__14188 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__14188__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__14188,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14188);
var G__14188__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__14188__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14188__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__14188__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14188__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__14189 = top_data;
var G__14189__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__14189,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14189);
var G__14189__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__14189__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14189__$1);
var G__14189__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__14189__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14189__$2);
var G__14189__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__14189__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14189__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__14189__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14189__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__14190 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__14190,(0),null);
var method = cljs.core.nth.call(null,vec__14190,(1),null);
var file = cljs.core.nth.call(null,vec__14190,(2),null);
var line = cljs.core.nth.call(null,vec__14190,(3),null);
var G__14193 = top_data;
var G__14193__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__14193,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__14193);
var G__14193__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__14193__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__14193__$1);
var G__14193__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__14193__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__14193__$2);
var G__14193__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__14193__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14193__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__14193__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14193__$4;
}

break;
case "execution":
var vec__14194 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__14194,(0),null);
var method = cljs.core.nth.call(null,vec__14194,(1),null);
var file = cljs.core.nth.call(null,vec__14194,(2),null);
var line = cljs.core.nth.call(null,vec__14194,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__14194,source__$1,method,file,line,G__14185,G__14185__$1,map__14177,map__14177__$1,via,trace,phase,map__14178,map__14178__$1,type,message,data,map__14179,map__14179__$1,problems,fn,caller,map__14180,map__14180__$1,top_data,source){
return (function (p1__14176_SHARP_){
var or__4131__auto__ = (p1__14176_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__14176_SHARP_);
}
});})(vec__14194,source__$1,method,file,line,G__14185,G__14185__$1,map__14177,map__14177__$1,via,trace,phase,map__14178,map__14178__$1,type,message,data,map__14179,map__14179__$1,problems,fn,caller,map__14180,map__14180__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__14197 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__14197__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__14197,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__14197);
var G__14197__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__14197__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14197__$1);
var G__14197__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__14197__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__14197__$2);
var G__14197__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__14197__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__14197__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__14197__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14197__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14185__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__14201){
var map__14202 = p__14201;
var map__14202__$1 = (((((!((map__14202 == null))))?(((((map__14202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14202):map__14202);
var triage_data = map__14202__$1;
var phase = cljs.core.get.call(null,map__14202__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__14202__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__14202__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__14202__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__14202__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__14202__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__14202__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__14202__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__14204 = phase;
var G__14204__$1 = (((G__14204 instanceof cljs.core.Keyword))?G__14204.fqn:null);
switch (G__14204__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14205_14214 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14206_14215 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14207_14216 = true;
var _STAR_print_fn_STAR__temp_val__14208_14217 = ((function (_STAR_print_newline_STAR__orig_val__14205_14214,_STAR_print_fn_STAR__orig_val__14206_14215,_STAR_print_newline_STAR__temp_val__14207_14216,sb__4661__auto__,G__14204,G__14204__$1,loc,class_name,simple_class,cause_type,format,map__14202,map__14202__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__14205_14214,_STAR_print_fn_STAR__orig_val__14206_14215,_STAR_print_newline_STAR__temp_val__14207_14216,sb__4661__auto__,G__14204,G__14204__$1,loc,class_name,simple_class,cause_type,format,map__14202,map__14202__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14207_14216;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14208_14217;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__14205_14214,_STAR_print_fn_STAR__orig_val__14206_14215,_STAR_print_newline_STAR__temp_val__14207_14216,_STAR_print_fn_STAR__temp_val__14208_14217,sb__4661__auto__,G__14204,G__14204__$1,loc,class_name,simple_class,cause_type,format,map__14202,map__14202__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__14205_14214,_STAR_print_fn_STAR__orig_val__14206_14215,_STAR_print_newline_STAR__temp_val__14207_14216,_STAR_print_fn_STAR__temp_val__14208_14217,sb__4661__auto__,G__14204,G__14204__$1,loc,class_name,simple_class,cause_type,format,map__14202,map__14202__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__14199_SHARP_){
return cljs.core.dissoc.call(null,p1__14199_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__14205_14214,_STAR_print_fn_STAR__orig_val__14206_14215,_STAR_print_newline_STAR__temp_val__14207_14216,_STAR_print_fn_STAR__temp_val__14208_14217,sb__4661__auto__,G__14204,G__14204__$1,loc,class_name,simple_class,cause_type,format,map__14202,map__14202__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__14205_14214,_STAR_print_fn_STAR__orig_val__14206_14215,_STAR_print_newline_STAR__temp_val__14207_14216,_STAR_print_fn_STAR__temp_val__14208_14217,sb__4661__auto__,G__14204,G__14204__$1,loc,class_name,simple_class,cause_type,format,map__14202,map__14202__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14206_14215;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14205_14214;
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
var _STAR_print_newline_STAR__orig_val__14209_14218 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14210_14219 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14211_14220 = true;
var _STAR_print_fn_STAR__temp_val__14212_14221 = ((function (_STAR_print_newline_STAR__orig_val__14209_14218,_STAR_print_fn_STAR__orig_val__14210_14219,_STAR_print_newline_STAR__temp_val__14211_14220,sb__4661__auto__,G__14204,G__14204__$1,loc,class_name,simple_class,cause_type,format,map__14202,map__14202__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__14209_14218,_STAR_print_fn_STAR__orig_val__14210_14219,_STAR_print_newline_STAR__temp_val__14211_14220,sb__4661__auto__,G__14204,G__14204__$1,loc,class_name,simple_class,cause_type,format,map__14202,map__14202__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14211_14220;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14212_14221;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__14209_14218,_STAR_print_fn_STAR__orig_val__14210_14219,_STAR_print_newline_STAR__temp_val__14211_14220,_STAR_print_fn_STAR__temp_val__14212_14221,sb__4661__auto__,G__14204,G__14204__$1,loc,class_name,simple_class,cause_type,format,map__14202,map__14202__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__14209_14218,_STAR_print_fn_STAR__orig_val__14210_14219,_STAR_print_newline_STAR__temp_val__14211_14220,_STAR_print_fn_STAR__temp_val__14212_14221,sb__4661__auto__,G__14204,G__14204__$1,loc,class_name,simple_class,cause_type,format,map__14202,map__14202__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__14200_SHARP_){
return cljs.core.dissoc.call(null,p1__14200_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__14209_14218,_STAR_print_fn_STAR__orig_val__14210_14219,_STAR_print_newline_STAR__temp_val__14211_14220,_STAR_print_fn_STAR__temp_val__14212_14221,sb__4661__auto__,G__14204,G__14204__$1,loc,class_name,simple_class,cause_type,format,map__14202,map__14202__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__14209_14218,_STAR_print_fn_STAR__orig_val__14210_14219,_STAR_print_newline_STAR__temp_val__14211_14220,_STAR_print_fn_STAR__temp_val__14212_14221,sb__4661__auto__,G__14204,G__14204__$1,loc,class_name,simple_class,cause_type,format,map__14202,map__14202__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14210_14219;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14209_14218;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14204__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
