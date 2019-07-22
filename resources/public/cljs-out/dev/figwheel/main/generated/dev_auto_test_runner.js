// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.main.generated.dev_auto_test_runner');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('cljs_test_display.core');
goog.require('taiwan_id.core_test');
cljs.test.run_block.call(null,(function (){var env14809 = cljs_test_display.core.init_BANG_.call(null,"app-auto-testing");
var summary14810 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env14809,summary14810){
return (function (){
cljs.test.set_env_BANG_.call(null,env14809);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"taiwan-id.core-test","taiwan-id.core-test",1581121247,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__8792__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__8792__auto__,env14809,summary14810){
return (function (){
if((env__8792__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__8792__auto__,env14809,summary14810))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return taiwan_id.core_test.valid_id_test;},new cljs.core.Symbol("taiwan-id.core-test","valid-id-test","taiwan-id.core-test/valid-id-test",-1924186724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"taiwan-id.core-test","taiwan-id.core-test",1581121247,null),new cljs.core.Symbol(null,"valid-id-test","valid-id-test",1959521634,null),"/home/shun/dev/code-example/taiwan-id/test/taiwan_id/core_test.cljc",23,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(taiwan_id.core_test.valid_id_test)?taiwan_id.core_test.valid_id_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return taiwan_id.core_test.invalid_id_test;},new cljs.core.Symbol("taiwan-id.core-test","invalid-id-test","taiwan-id.core-test/invalid-id-test",1606392846,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"taiwan-id.core-test","taiwan-id.core-test",1581121247,null),new cljs.core.Symbol(null,"invalid-id-test","invalid-id-test",-734269616,null),"/home/shun/dev/code-example/taiwan-id/test/taiwan_id/core_test.cljc",25,1,22,22,cljs.core.List.EMPTY,null,(cljs.core.truth_(taiwan_id.core_test.invalid_id_test)?taiwan_id.core_test.invalid_id_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return taiwan_id.core_test.struct_validator_test;},new cljs.core.Symbol("taiwan-id.core-test","struct-validator-test","taiwan-id.core-test/struct-validator-test",1376304769,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"taiwan-id.core-test","taiwan-id.core-test",1581121247,null),new cljs.core.Symbol(null,"struct-validator-test","struct-validator-test",-627781153,null),"/home/shun/dev/code-example/taiwan-id/test/taiwan_id/core_test.cljc",31,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(taiwan_id.core_test.struct_validator_test)?taiwan_id.core_test.struct_validator_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__8792__auto__,env14809,summary14810){
return (function (){
if((env__8792__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__8792__auto__,env14809,summary14810))
], null));
})());
});})(env14809,summary14810))
,((function (env14809,summary14810){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"taiwan-id.core-test","taiwan-id.core-test",1581121247,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env14809,summary14810))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env14809,summary14810){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary14810,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary14810),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env14809,summary14810))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env14809,summary14810){
return (function (){
cljs.test.set_env_BANG_.call(null,env14809);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary14810));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary14810),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env14809,summary14810))
], null));
})());

//# sourceMappingURL=dev_auto_test_runner.js.map
