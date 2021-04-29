(ns user
  (:require [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [orchestra.spec.test :as stest]
            [kaocha.repl :as k]
            [juxt.clip.repl :refer [start stop set-init! system]]
            [malli.core :as m]
            [malli-instrument.core :as mi]))

;;; test

(defn unit-test
  []
  (k/run :unit))

;;; expound and Orchestra

(defn unstrument
  []
  (stest/unstrument))


(defn instrument
  []
  (set! s/*explain-out* expound/printer)
  (with-out-str (stest/instrument))
  (println "starting instrument..."))

(defn reset
  []
  (clojure.tools.namespace.repl/set-refresh-dirs "dev/src" "src" "test")
  (set-init! (fn []))
  (juxt.clip.repl/reset)
  (instrument)
  (println "Reset finished..."))

;(instrument)
