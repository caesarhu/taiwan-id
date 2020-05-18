(ns taiwan-id.core
  (:require [clojure.string :as str]
            [clojure.spec.alpha :as s]
            [clojure.test.check.generators]
            [clojure.spec.gen.alpha :as gen]))

(def header "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
(def digits "0123456789")
(def header-set (set (map str (seq header))))
(def digits-set (set (map str (seq digits))))
(def sex-set (set ["1" "2"]))
(def header-n [10 11 12 13 14 15 16 17 34 18 19 20 21 22 35 23 24 25 26 27 28 29 32 30 31 33])
(def header-map (reduce merge (map #(hash-map (str %1) %2) header header-n)))
(def multiple-n [1 9 8 7 6 5 4 3 2 1])
(def re-id #"^[A-Za-z][12]\d{8}$")

(defn str->int [s]
  #?(:clj  (java.lang.Long/parseLong s)
     :cljs (js/parseInt s)))

(defn gen-int-str []
  (gen/fmap #(str %) (s/gen int?)))

(s/def ::int-str
  (s/with-gen
    (s/and string?
           #(re-matches #"^[+-]?\d+$" %))
    gen-int-str))

(s/fdef str->int
        :args (s/cat :int-str ::int-str)
        :ret int?
        :fn #(= (:ret %)
                (-> % :args :int-str #?(:clj java.lang.Long/parseLong
                                        :cljs js/parseInt))))

(defn div-mod-10 [n]
  (vector (quot n 10) (mod n 10)))

(defn header->number [header]
  (div-mod-10 (get header-map header)))

(defn id->vec [id]
  (let [v (map str (seq (str/upper-case id)))
        header (first v)
        number (rest v)]
    (concat (header->number header) (map str->int number))))

(defn id-code [v]
  (let [x (reduce + (map * v multiple-n))
        r (mod x 10)]
    (mod (- 10 r) 10)))

(defn id-validate [id]
  (when (and (string? id)
             (re-matches re-id id))
    (let [v (id->vec id)
          code (id-code v)
          x (last v)]
      (when (= x code)
        id))))

(defn is-id? [id]
  (when (and (string? id)
             (re-matches re-id id))
    (let [v (id->vec id)
          code (id-code v)
          x (last v)]
      (when (= x code)
        id))))

(def id-valid?
  {:message "身分證字號檢核錯誤!!!"
   :optional true
   :validate id-validate})

(def re-foreigner #"^[A-XZ][A-D]\d{8}$")
(defn foreigner? [s]
  (re-matches re-foreigner (str/upper-case s)))

(def header-gen (s/gen header-set))
(def sex-gen (s/gen sex-set))
(def digit-gen (s/gen digits-set))

(def id-pre-gen
  (gen/fmap
    (fn [coll]
      (apply str coll))
    (gen/tuple
      header-gen
      sex-gen
      digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen)))

(def id-gen
  (gen/fmap (fn [id-pre]
              (let [code (id-code (id->vec id-pre))]
                (str id-pre code)))
            id-pre-gen))

(def id-gen-invalid
  (gen/fmap
    (fn [id]
      (let [id-v (map str (seq id))
            id-pre (apply str (drop-last id-v))
            check-code (last id-v)
            result-set (disj digits-set check-code)
            invalid-code (gen/generate (s/gen result-set))]
        (str id-pre invalid-code)))
    id-gen))

(s/def ::id-str
  (s/with-gen
    (s/and string?
           #(re-matches re-id %))
    (fn [] id-gen)))

(s/def ::id-or-false (s/or :id string?
                           :false false?))

(s/fdef id-validate
        :args (s/cat :id ::id-str)
        :ret ::id-or-false)

