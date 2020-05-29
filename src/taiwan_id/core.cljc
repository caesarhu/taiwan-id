(ns taiwan-id.core
  (:require [clojure.string :as str]
            [clojure.spec.alpha :as s]
            [clojure.test.check.generators]
            [clojure.spec.gen.alpha :as gen]))

(def header "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
(def digits "0123456789")
(def header-set (set (map str (seq header))))
(def taiwan-digits-set (set (map str (seq digits))))
(def taiwan-sex-set (set ["1" "2"]))
(def header-number [10 11 12 13 14 15 16 17 34 18 19 20 21 22 35 23 24 25 26 27 28 29 32 30 31 33])
(def header-map (reduce merge (map #(hash-map (str %1) %2) header header-number)))
(def weight-taiwan [1 9 8 7 6 5 4 3 2 1 1])
(def re-taiwan #"^[A-Z][12]\d{8}$")

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

(defn taiwan-id->vec [id]
  (let [v (map str (seq id))
        header (first v)
        number (rest v)]
    (concat (header->number header) (map str->int number))))

(defn check-code-vec [v]
  (mod (->> v
            (map * weight-taiwan)
            (reduce + 0))
       10))

(defn taiwan-check-code [id]
  (check-code-vec (taiwan-id->vec id)))

(defn taiwan-id? [id]
  (when-let [uid (and (string? id)
                      (str/upper-case id))]
    (and
      (re-matches re-taiwan uid)
      (when (= 0 (taiwan-check-code uid))
        uid))))

(def taiwan-id-valid?
  {:message "身分證字號檢核錯誤!!!"
   :optional true
   :validate taiwan-id?})

(def header-gen (s/gen header-set))
(def taiwan-sex-gen (s/gen taiwan-sex-set))
(def digit-gen (s/gen taiwan-digits-set))

(def taiwan-random-gen
  (gen/fmap
    (fn [coll]
      (apply str coll))
    (gen/tuple
      header-gen
      taiwan-sex-gen
      digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen)))

(defn fix-id [check-code-fn bad-id]
  (let [check-code (check-code-fn bad-id)
        id-v (map str (seq bad-id))
        last-code (str->int (last id-v))
        good-code (mod (- last-code check-code)
                       10)]
    (-> (apply str (take 9 id-v))
        (str good-code))))

(def taiwan-gen
  (gen/fmap (partial fix-id taiwan-check-code)
            taiwan-random-gen))

(s/def ::taiwan-id
  (s/with-gen
    (s/and string?
           #(re-matches re-taiwan %))
    (fn [] taiwan-gen)))

(s/def ::taiwan-random-id
  (s/with-gen
    (s/and string?
           #(re-matches re-taiwan %))
    (fn [] taiwan-random-gen)))

(def re-foreigner-old #"^[A-Z][A-D]\d{8}$")

(defn foreigner-old-2nd->number [s]
  (mod (get header-map s)
       10))

(defn foreigner-old->vec [id]
  (let [v (map str (seq id))
        header (first v)
        old-2nd (second v)
        number (rest (rest v))]
    (concat (header->number header) [(foreigner-old-2nd->number old-2nd)] (map str->int number))))

(defn foreigner-old-check-code [id]
  (check-code-vec (foreigner-old->vec id)))

(defn foreigner-old? [id]
  (when-let [uid (and (string? id)
                      (str/upper-case id))]
    (and
      (re-matches re-foreigner-old uid)
      (when (= 0 (foreigner-old-check-code uid))
        uid))))

(def foreigner-old-valid?
  {:message "舊版外來人口統一證號檢核錯誤!!!"
   :optional true
   :validate foreigner-old?})

(def foreigner-old-sex-gen (s/gen (set ["A" "B" "C" "D"])))

(def foreigner-old-random-gen
  (gen/fmap
    (fn [coll]
      (apply str coll))
    (gen/tuple
      header-gen
      foreigner-old-sex-gen
      digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen)))

(def foreigner-old-gen
  (gen/fmap (partial fix-id foreigner-old-check-code)
            foreigner-old-random-gen))

(s/def ::foreigner-old-id
  (s/with-gen
    (s/and string?
           #(re-matches re-foreigner-old %))
    (fn [] foreigner-old-gen)))

(s/def ::foreigner-old-random-id
  (s/with-gen
    (s/and string?
           #(re-matches re-foreigner-old %))
    (fn [] foreigner-old-random-gen)))

;;; 改版之外來人士統一證號除性別碼為89外，餘規則與身份證號相同

(def re-foreigner-id #"^[A-Z][89]\d{8}$")

(defn foreigner-id? [id]
  (when-let [uid (and (string? id)
                      (str/upper-case id))]
    (and
      (re-matches re-foreigner-id uid)
      (when (= 0 (taiwan-check-code uid))
        uid))))

(def foreigner-id-valid?
  {:message "新版外來人口統一證號檢核錯誤!!!"
   :optional true
   :validate foreigner-id?})

(def foreigner-sex-gen (s/gen (set ["8" "9"])))

(def foreigner-id-random-gen
  (gen/fmap
    (fn [coll]
      (apply str coll))
    (gen/tuple
      header-gen
      foreigner-sex-gen
      digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen digit-gen)))

(def foreigner-id-gen
  (gen/fmap (partial fix-id taiwan-check-code)
            foreigner-id-random-gen))

(s/def ::foreigner-id
  (s/with-gen
    (s/and string?
           #(re-matches re-foreigner-id %))
    (fn [] foreigner-id-gen)))

(s/def ::foreigner-random-id
  (s/with-gen
    (s/and string?
           #(re-matches re-foreigner-id %))
    (fn [] foreigner-id-random-gen)))

(defn some-id? [id]
  (or (taiwan-id? id)
      (foreigner-old? id)
      (foreigner-id? id)))

(def some-id-valid?
  {:message "身份證號或外來人口統一證號檢核錯誤!!!"
   :optional true
   :validate some-id?})