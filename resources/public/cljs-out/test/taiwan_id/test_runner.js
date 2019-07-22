// Compiled by ClojureScript 1.10.520 {}
goog.provide('taiwan_id.test_runner');
goog.require('cljs.core');
goog.require('taiwan_id.core_test');
goog.require('figwheel.main.testing');
taiwan_id.test_runner._main = (function taiwan_id$test_runner$_main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10068 = arguments.length;
var i__4731__auto___10069 = (0);
while(true){
if((i__4731__auto___10069 < len__4730__auto___10068)){
args__4736__auto__.push((arguments[i__4731__auto___10069]));

var G__10070 = (i__4731__auto___10069 + (1));
i__4731__auto___10069 = G__10070;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return taiwan_id.test_runner._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

taiwan_id.test_runner._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.main.testing.system_exit_on_fail.call(null);

var reporter__5748__auto___10071 = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.call(null));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),null], null), null).call(null,reporter__5748__auto___10071))){
} else {
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reporter__5748__auto___10071,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),((function (reporter__5748__auto___10071){
return (function (m__5749__auto__){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m__5749__auto__);
});})(reporter__5748__auto___10071))
);
}

cljs.test.run_block.call(null,(function (){var env10066 = cljs.test.empty_env.call(null);
var summary10067 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10066,summary10067,reporter__5748__auto___10071){
return (function (){
cljs.test.set_env_BANG_.call(null,env10066);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"taiwan-id.core-test","taiwan-id.core-test",1581121247,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9918__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9918__auto__,env10066,summary10067,reporter__5748__auto___10071){
return (function (){
if((env__9918__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__9918__auto__,env10066,summary10067,reporter__5748__auto___10071))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return taiwan_id.core_test.valid_id_test;},new cljs.core.Symbol("taiwan-id.core-test","valid-id-test","taiwan-id.core-test/valid-id-test",-1924186724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"taiwan-id.core-test","taiwan-id.core-test",1581121247,null),new cljs.core.Symbol(null,"valid-id-test","valid-id-test",1959521634,null),"/home/shun/dev/code-example/taiwan-id/test/taiwan_id/core_test.cljc",23,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(taiwan_id.core_test.valid_id_test)?taiwan_id.core_test.valid_id_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return taiwan_id.core_test.invalid_id_test;},new cljs.core.Symbol("taiwan-id.core-test","invalid-id-test","taiwan-id.core-test/invalid-id-test",1606392846,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"taiwan-id.core-test","taiwan-id.core-test",1581121247,null),new cljs.core.Symbol(null,"invalid-id-test","invalid-id-test",-734269616,null),"/home/shun/dev/code-example/taiwan-id/test/taiwan_id/core_test.cljc",25,1,22,22,cljs.core.List.EMPTY,null,(cljs.core.truth_(taiwan_id.core_test.invalid_id_test)?taiwan_id.core_test.invalid_id_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return taiwan_id.core_test.struct_validator_test;},new cljs.core.Symbol("taiwan-id.core-test","struct-validator-test","taiwan-id.core-test/struct-validator-test",1376304769,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"taiwan-id.core-test","taiwan-id.core-test",1581121247,null),new cljs.core.Symbol(null,"struct-validator-test","struct-validator-test",-627781153,null),"/home/shun/dev/code-example/taiwan-id/test/taiwan_id/core_test.cljc",31,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(taiwan_id.core_test.struct_validator_test)?taiwan_id.core_test.struct_validator_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9918__auto__,env10066,summary10067,reporter__5748__auto___10071){
return (function (){
if((env__9918__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9918__auto__,env10066,summary10067,reporter__5748__auto___10071))
], null));
})());
});})(env10066,summary10067,reporter__5748__auto___10071))
,((function (env10066,summary10067,reporter__5748__auto___10071){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"taiwan-id.core-test","taiwan-id.core-test",1581121247,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env10066,summary10067,reporter__5748__auto___10071))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10066,summary10067,reporter__5748__auto___10071){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary10067,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary10067),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env10066,summary10067,reporter__5748__auto___10071))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10066,summary10067,reporter__5748__auto___10071){
return (function (){
cljs.test.set_env_BANG_.call(null,env10066);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary10067));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary10067),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env10066,summary10067,reporter__5748__auto___10071))
], null));
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.main.async-result","wait","figwheel.main.async-result/wait",-1374826133),(5000)], null);
});

taiwan_id.test_runner._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taiwan_id.test_runner._main.cljs$lang$applyTo = (function (seq10065){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10065));
});


//# sourceMappingURL=test_runner.js.map
