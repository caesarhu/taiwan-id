(defproject taiwan-id "0.4.0"
  :description "clojure台灣身分證字號檢核程式庫，包含新版及舊版外來人口統一證號檢核"
  :url "https://github.com/caesarhu/taiwan-id.git"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :deploy-repositories [["releases" :clojars
                         :creds :gpg]
                        ["snapshots" :clojars
                         :creds :gpg]]
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [duct/core "0.8.0"]
                 [duct/module.logging "0.5.0"]
                 [org.clojure/tools.reader "1.3.2"]
                 [funcool/struct "1.4.0"]]
  :plugins [[duct/lein-duct "0.12.1"]]
  :main ^:skip-aot taiwan-id.main
  :resource-paths ["resources" "target/resources"]
  :prep-tasks     ["javac" "compile" ["run" ":duct/compiler"]]
  :middleware     [lein-duct.plugin/middleware]
  :profiles
  {:dev  [:project/dev :profiles/dev]
   :repl {:prep-tasks   ^:replace ["javac" "compile"]
          :repl-options {:init-ns user}}
   :uberjar {:aot :all}
   :profiles/dev {}
   :project/dev  {:source-paths   ["dev/src"]
                  :resource-paths ["dev/resources"]
                  :dependencies   [[integrant/repl "0.3.1"]
                                   [org.clojure/test.check "1.0.0"]
                                   [hawk "0.2.11"]
                                   [orchestra "2019.02.06-1"]
                                   [expound "0.8.4"]
                                   [eftest "0.5.9"]]}})
