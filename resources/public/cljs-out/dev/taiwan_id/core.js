// Compiled by ClojureScript 1.10.520 {}
goog.provide('taiwan_id.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
taiwan_id.core.header = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
taiwan_id.core.digits = "0123456789";
taiwan_id.core.header_set = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,taiwan_id.core.header)));
taiwan_id.core.digits_set = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,taiwan_id.core.digits)));
taiwan_id.core.sex_set = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2"], null));
taiwan_id.core.header_n = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(11),(12),(13),(14),(15),(16),(17),(34),(18),(19),(20),(21),(22),(35),(23),(24),(25),(26),(27),(28),(29),(32),(30),(31),(33)], null);
taiwan_id.core.header_map = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__14720_SHARP_,p2__14721_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14720_SHARP_)],[p2__14721_SHARP_]);
}),taiwan_id.core.header,taiwan_id.core.header_n));
taiwan_id.core.multiple_n = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(9),(8),(7),(6),(5),(4),(3),(2),(1)], null);
taiwan_id.core.re_id = /^[A-Za-z][12]\d{8}$/;
taiwan_id.core.str__GT_int = (function taiwan_id$core$str__GT_int(s){
return parseInt(s);
});
taiwan_id.core.gen_int_str = (function taiwan_id$core$gen_int_str(){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__14722_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14722_SHARP_);
}),cljs.spec.alpha.gen.call(null,cljs.core.int_QMARK_));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("taiwan-id.core","int-str","taiwan-id.core/int-str",-1596698615),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14723#","p1__14723#",1839760372,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/^[+-]?\d+$/,new cljs.core.Symbol(null,"p1__14723#","p1__14723#",1839760372,null)))),new cljs.core.Symbol("taiwan-id.core","gen-int-str","taiwan-id.core/gen-int-str",1369002120,null)),cljs.spec.alpha.with_gen.call(null,cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),/^[+-]?\d+$/,new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__14723_SHARP_){
return cljs.core.re_matches.call(null,/^[+-]?\d+$/,p1__14723_SHARP_);
})], null),null),taiwan_id.core.gen_int_str));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("taiwan-id.core","str->int","taiwan-id.core/str->int",2001554736,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"int-str","int-str",-1629399402),new cljs.core.Keyword("taiwan-id.core","int-str","taiwan-id.core/int-str",-1596698615)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14724#","p1__14724#",-851201070,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),cljs.core.list(new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"p1__14724#","p1__14724#",-851201070,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"p1__14724#","p1__14724#",-851201070,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"int-str","int-str",-1629399402),new cljs.core.Symbol("js","parseInt","js/parseInt",-92318511,null))))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"int-str","int-str",-1629399402),new cljs.core.Keyword("taiwan-id.core","int-str","taiwan-id.core/int-str",-1596698615)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int-str","int-str",-1629399402)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("taiwan-id.core","int-str","taiwan-id.core/int-str",-1596698615)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("taiwan-id.core","int-str","taiwan-id.core/int-str",-1596698615)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"int-str","int-str",-1629399402),new cljs.core.Keyword("taiwan-id.core","int-str","taiwan-id.core/int-str",-1596698615)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_,null,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),cljs.core.list(new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"int-str","int-str",-1629399402),new cljs.core.Symbol("js","parseInt","js/parseInt",-92318511,null)))),(function (p1__14724_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1__14724_SHARP_),parseInt(new cljs.core.Keyword(null,"int-str","int-str",-1629399402).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(p1__14724_SHARP_))));
}),null,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),cljs.core.list(new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"int-str","int-str",-1629399402),new cljs.core.Symbol("js","parseInt","js/parseInt",-92318511,null)))),null));
taiwan_id.core.div_mod_10 = (function taiwan_id$core$div_mod_10(n){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.quot.call(null,n,(10)),cljs.core.mod.call(null,n,(10))],null));
});
taiwan_id.core.header__GT_number = (function taiwan_id$core$header__GT_number(header){
return taiwan_id.core.div_mod_10.call(null,cljs.core.get.call(null,taiwan_id.core.header_map,header));
});
taiwan_id.core.id__GT_vec = (function taiwan_id$core$id__GT_vec(id){
var v = cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,clojure.string.upper_case.call(null,id)));
var header = cljs.core.first.call(null,v);
var number = cljs.core.rest.call(null,v);
return cljs.core.concat.call(null,taiwan_id.core.header__GT_number.call(null,header),cljs.core.map.call(null,taiwan_id.core.str__GT_int,number));
});
taiwan_id.core.id_code = (function taiwan_id$core$id_code(v){
var x = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,v,taiwan_id.core.multiple_n));
var r = cljs.core.mod.call(null,x,(10));
return cljs.core.mod.call(null,((10) - r),(10));
});
taiwan_id.core.id_validate = (function taiwan_id$core$id_validate(id){
if(cljs.core.truth_((function (){var and__4120__auto__ = typeof id === 'string';
if(and__4120__auto__){
return cljs.core.re_matches.call(null,taiwan_id.core.re_id,id);
} else {
return and__4120__auto__;
}
})())){
var v = taiwan_id.core.id__GT_vec.call(null,id);
var code = taiwan_id.core.id_code.call(null,v);
var x = cljs.core.last.call(null,v);
if(cljs.core._EQ_.call(null,x,code)){
return clojure.string.upper_case.call(null,id);
} else {
return false;
}
} else {
return false;
}
});
taiwan_id.core.id_valid_QMARK_ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"\u8EAB\u5206\u8B49\u5B57\u865F\u6AA2\u6838\u932F\u8AA4!!!",new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validate","validate",-201300827),taiwan_id.core.id_validate], null);
taiwan_id.core.header_gen = cljs.spec.alpha.gen.call(null,taiwan_id.core.header_set);
taiwan_id.core.sex_gen = cljs.spec.alpha.gen.call(null,taiwan_id.core.sex_set);
taiwan_id.core.digit_gen = cljs.spec.alpha.gen.call(null,taiwan_id.core.digits_set);
taiwan_id.core.id_pre_gen = cljs.spec.gen.alpha.fmap.call(null,(function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
}),cljs.spec.gen.alpha.tuple.call(null,taiwan_id.core.header_gen,taiwan_id.core.sex_gen,taiwan_id.core.digit_gen,taiwan_id.core.digit_gen,taiwan_id.core.digit_gen,taiwan_id.core.digit_gen,taiwan_id.core.digit_gen,taiwan_id.core.digit_gen,taiwan_id.core.digit_gen));
taiwan_id.core.id_gen = cljs.spec.gen.alpha.fmap.call(null,(function (id_pre){
var code = taiwan_id.core.id_code.call(null,taiwan_id.core.id__GT_vec.call(null,id_pre));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join('');
}),taiwan_id.core.id_pre_gen);
taiwan_id.core.id_gen_invalid = cljs.spec.gen.alpha.fmap.call(null,(function (id){
var id_v = cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,id));
var id_pre = cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,id_v));
var check_code = cljs.core.last.call(null,id_v);
var result_set = cljs.core.disj.call(null,taiwan_id.core.digits_set,check_code);
var invalid_code = cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,result_set));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid_code)].join('');
}),taiwan_id.core.id_gen);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("taiwan-id.core","id-str","taiwan-id.core/id-str",-1923882183),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__14725#","p1__14725#",-339614853,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),new cljs.core.Symbol("taiwan-id.core","re-id","taiwan-id.core/re-id",-2005334035,null),new cljs.core.Symbol(null,"p1__14725#","p1__14725#",-339614853,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("taiwan-id.core","id-gen","taiwan-id.core/id-gen",16152673,null))),cljs.spec.alpha.with_gen.call(null,cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-matches","cljs.core/re-matches",2013608485,null),new cljs.core.Symbol("taiwan-id.core","re-id","taiwan-id.core/re-id",-2005334035,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__14725_SHARP_){
return cljs.core.re_matches.call(null,taiwan_id.core.re_id,p1__14725_SHARP_);
})], null),null),(function (){
return taiwan_id.core.id_gen;
})));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("taiwan-id.core","id-or-false","taiwan-id.core/id-or-false",1962429025),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"false","false",1277713805),new cljs.core.Symbol("cljs.core","false?","cljs.core/false?",-1660815306,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"false","false",1277713805)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","false?","cljs.core/false?",-1660815306,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.false_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("taiwan-id.core","id-validate","taiwan-id.core/id-validate",-1333885894,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("taiwan-id.core","id-str","taiwan-id.core/id-str",-1923882183)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("taiwan-id.core","id-or-false","taiwan-id.core/id-or-false",1962429025)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("taiwan-id.core","id-str","taiwan-id.core/id-str",-1923882183)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("taiwan-id.core","id-str","taiwan-id.core/id-str",-1923882183)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("taiwan-id.core","id-str","taiwan-id.core/id-str",-1923882183)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("taiwan-id.core","id-str","taiwan-id.core/id-str",-1923882183)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("taiwan-id.core","id-or-false","taiwan-id.core/id-or-false",1962429025),new cljs.core.Keyword("taiwan-id.core","id-or-false","taiwan-id.core/id-or-false",1962429025),null,null),new cljs.core.Keyword("taiwan-id.core","id-or-false","taiwan-id.core/id-or-false",1962429025),null,null,null));

//# sourceMappingURL=core.js.map
