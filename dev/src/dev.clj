(ns dev
  (:refer-clojure :exclude [test])
  (:require [clojure.repl :refer :all]
            [fipp.edn :refer [pprint]]
            [clojure.tools.namespace.repl :refer [refresh]]
            [clojure.java.io :as io]
            [duct.core :as duct]
            [duct.core.repl :as duct-repl]
            [eftest.runner :as eftest]
            [integrant.core :as ig]
            [integrant.repl :refer [clear halt go init prep reset]]
            [integrant.repl.state :refer [config system]]
            [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]
            [expound.alpha :as expound]
            [orchestra.spec.test :as stest]
            [clojure.string :as str]
            [taiwan-id.core :as id]))

(duct/load-hierarchy)

(defn read-config []
  (duct/read-config (io/resource "taiwan_id/config.edn")))

(defn test []
  (eftest/run-tests (eftest/find-tests "test")))

(def profiles
  [:duct.profile/dev :duct.profile/local])

(clojure.tools.namespace.repl/set-refresh-dirs "dev/src" "src" "test")

(when (io/resource "local.clj")
  (load "local"))

(integrant.repl/set-prep! #(duct/prep-config (read-config) profiles))

;;; expound and Orchestra

(defn unstrument []
  (stest/unstrument))

(defn instrument []
  (set! s/*explain-out* expound/printer)
  (stest/instrument))

(instrument)
