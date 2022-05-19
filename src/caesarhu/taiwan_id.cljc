(ns caesarhu.taiwan-id
  (:require [clojure.test.check.generators :as gen]
            [malli.core :as m]
            [malli.generator :as mg]))

(def ^:private alphabets "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ")
(def ^:private weight-code [1 9 8 7 6 5 4 3 2 1 1])
(def ^:private number-vector 
  [0 1 2 3 4 5 6 7 8 9
   10 11 12 13 14 15 16 17 34 18 19 20 21 22 35 23 24 25 26 27 28 29 32 30 31 33])

(def ^:private re-map
  {:id #"^[A-Z][12]\d{8}$"
   :arc-id #"^[A-Z][89]\d{8}$"
   :arc-old #"^[A-Z][A-D]\d{8}$"})

(def ^:private sex-map
  {:id [\1 \2]
   :arc-id [\8 \9]
   :arc-old [\A \B \C \D]})

(def ^:private alphabet-map
  (zipmap alphabets number-vector))

(defn- div-mod-10
  [n]
  [(quot n 10) (mod n 10)])

(defn- char->number
  [c]
  (->> c alphabet-map div-mod-10))

(defn- id->vector
  [id]
  (let [v (map char->number id)]
    (cons (ffirst v) (map last v))))

(defn check-code
  "產生檢查碼!"
  [id]
  (let [n (->> (map * weight-code (id->vector id))
               (take 10)
               (apply +))]
    (-> n (mod 10) (#(- 10 %)) (mod 10) str first)))

(defn is-id?
  ([id opt]
   (if (= opt :all)
     (or (is-id? id :id)
         (is-id? id :arc-id)
         (is-id? id :arc-old))
     (and (string? id)
          (re-matches (opt re-map) id)
          (= (last id) (check-code id)))))
  ([id]
   (is-id? id :all)))

(defn- correct-id
  [id]
  (str (apply str (butlast id)) (check-code id)))

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
  (m/-simple-schema
   {:type :string
    :pred #(is-id? % opt)
    :type-properties {:error/message message
                      :gen/gen (generator opt)}}))

(def id
  (schema-generate :id "身分證號錯誤!"))

(def arc-id
  (schema-generate :arc-id "居留證號錯誤!"))

(def arc-old
  (schema-generate :arc-old "舊版居留證號錯誤!"))

(def id-or-arc
  [:or id arc-id arc-old])

(comment
  (mg/sample id)
  (mg/sample id-or-arc {:size 100})
  (mg/sample arc-id)
  )