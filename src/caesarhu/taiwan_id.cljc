(ns caesarhu.taiwan-id
  (:require [clojure.string :as str]
            [clojure.spec.alpha :as s]
            [clojure.test.check.generators]
            [clojure.spec.gen.alpha :as gen]
            [malli.core :as m]))

(def id-char "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
(def header-set (set (map str (seq "ABCDEFGHIJKLMNOPQRSTUVWXYZ"))))
(def char-number [10 11 12 13 14 15 16 17 34 18 19 20 21 22 35 23 24 25 26 27 28 29 32 30 31 33
                  0 1 2 3 4 5 6 7 8 9])
(def char-number-map (zipmap (map str (seq id-char)) char-number))
(def weight-code [1 9 8 7 6 5 4 3 2 1 1])
(def re-taiwan #"^[A-Z][12]\d{8}$")
(def re-foreigner-old #"^[A-Z][A-D]\d{8}$")
(def re-foreigner-id #"^[A-Z][89]\d{8}$")

(defn div-mod-10
  [n]
  ((juxt #(quot % 10) #(mod % 10)) n))

(defn char->number
  [id-char]
  (->> id-char (get char-number-map) (div-mod-10)))

(defn id->vec-number
  [id]
  (let [[id-char & other] (map str (seq id))]
    (concat (char->number id-char) (->> (map char->number other)
                                        (map second)))))

(defn check-code
  [id]
  (mod (->> id
            (id->vec-number)
            (map * weight-code)
            (reduce + 0))
       10))

(defn taiwan-id?
  [id]
  (when-let [uid (and (string? id)
                      (str/upper-case id))]
    (when (and (or (re-matches re-taiwan uid)
                   (re-matches re-foreigner-old uid)
                   (re-matches re-foreigner-id uid))
               (= 0 (check-code uid)))
      uid)))

(def digit-gen
  (s/gen #{"0" "1" "2" "3" "4" "5" "6" "7" "8" "9"}))

(def id-random-gen
  (gen/fmap
    (fn [coll]
      (apply str coll))
    (gen/tuple
      (s/gen header-set)
      (s/gen #{"1" "2"})
      digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen)))

(defn correct-id
  [id]
  (let [code (check-code id)
        last-digit (->> (last id)
                        str
                        (get char-number-map))
        check-digit (-> (- last-digit code)
                        (mod 10))]
    (->> (concat (drop-last id) [check-digit])
         (apply str))))

(def id-gen
  (gen/fmap correct-id id-random-gen))

(def id-schema
  (m/-simple-schema
    {:type :string
     :pred taiwan-id?
     :type-properties {:error/message "必須是合格身分證號或外籍證號!"
                       :gen/gen id-gen}}))

