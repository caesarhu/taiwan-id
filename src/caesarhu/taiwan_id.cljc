(ns caesarhu.taiwan-id
  (:require [clojure.test.check.generators :as gen]))

(def ^:private alphabets "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ")
(def ^:private number-vector 
  [0 1 2 3 4 5 6 7 8 9
   10 11 12 13 14 15 16 17 34 18 19 20 21 22 35 23 24 25 26 27 28 29 32 30 31 33])
(def ^:private alphabet-map (zipmap alphabets number-vector))
(def ^:private weight-code [1 9 8 7 6 5 4 3 2 1 1])

(def ^:private re-map
  {:id #"^[A-Z][12]\d{8}$"
   :arc-id #"^[A-Z][89]\d{8}$"
   :arc-old #"^[A-Z][A-D]\d{8}$"})

(def ^:private sex-map
  {:id [\1 \2]
   :arc-id [\8 \9]
   :arc-old [\A \B \C \D]})

(defn- check-code
  "產生檢查碼!"
  [id]
  (let [v (map alphabet-map id)
        v2 (cons (quot (first v) 10) (map #(mod % 10) v))
        r (->> (map * weight-code v2)
               (take 10)
               (apply +)
               (#(mod % 10)))]
    (-> (- 10 r) (mod 10))))

(defn- valid?
  [id]
  (= (last id) (-> (check-code id) str first)))

(defn- correct-id
  [id]
  (str (apply str (take 9 id)) (check-code id)))

(defn- generator
  [opt]
  (let [digits (take 10 alphabets)
        letters (drop 10 alphabets)
        sex (opt sex-map)]
    (gen/fmap #(correct-id (apply str %))
              (->> (concat [letters sex] (repeat 8 digits))
                   (map gen/elements)
                   (apply gen/tuple)))))

(defn- schema-generate
  [opt message]
  [:and {:gen/gen (generator opt)}
   [:re {:error/message message} (opt re-map)]
   [:fn {:error/message message} valid?]])

(def id
  "身分證號 schema,\n
   (malli.core/validate \"R272329855\" => true\n
   (malli.core/validate \"R272329856\" => false"
  (schema-generate :id "身分證號錯誤!"))

(def arc-id
  "居留證號 schema,\n
   (malli.core/validate \"S900226462\" => true\n
   (malli.core/validate \"S900226463\" => false"
  (schema-generate :arc-id "居留證號錯誤!"))

(def arc-old
  "舊版居留證號 schema,\n
   (malli.core/validate \"RA18234988\" => true\n
   (malli.core/validate \"RA18234989\" => false"
  (schema-generate :arc-old "舊版居留證號錯誤!"))

(def id-or-arc 
  "身分證號、居留證號及舊版居留證號 schema"
  [:or {:gen/gen (gen/frequency [[80 (generator :id)] [15 (generator :arc-id)] [5 (generator :arc-old)]])}
   id arc-id arc-old])

(comment
  (require '[malli.core :as m])
  (require '[malli.generator :as mg])
  (require '[malli.error :as me])
  (m/validate id-or-arc "M191382438")
  (mg/sample id)
  (mg/sample id-or-arc {:size 100})
  (mg/sample arc-id)
  (mg/sample arc-old)
  )
