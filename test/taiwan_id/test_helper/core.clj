(ns taiwan-id.test-helper.core
  (:require
    [duct.core :as duct]
    [clojure.spec.alpha :as s]
    [orchestra.spec.test :as stest]))

(duct/load-hierarchy)

;;; fixtures

(defn instrument-specs [f]
  (stest/instrument)
  (f))
