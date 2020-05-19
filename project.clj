(defproject taiwan-id "0.3.7"
  :description "clojure台灣身分證字號檢核程式庫，提供1個檢核函數及1個struct validator"
  :url "https://github.com/caesarhu/taiwan-id.git"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :deploy-repositories [["releases" :clojars
                         :creds :gpg]
                        ["snapshots" :clojars
                         :creds :gpg]]
  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.764" :scope "provided"]
                 [org.clojure/tools.reader "1.3.2"]
                 [funcool/struct "1.4.0"]
                 [org.clojure/test.check "1.0.0"]]

  :source-paths ["src"]

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" taiwan-id.test-runner]}

  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.5"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]
                                  [eftest "0.5.9"]]
                   :plugins [[lein-eftest "0.5.9"]]}}
  :repl-options {:print clojure.pprint/pprint})
