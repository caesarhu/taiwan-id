(ns taiwan-id.core-test
  (:require #?(:clj  [clojure.test :refer :all]
               :cljs [cljs.test :refer-macros [deftest is testing]])
            [taiwan-id.core :refer [id-validate id-valid?]]
            [struct.core :as st]))

;;(stest/instrument `id-validate)

(deftest valid-id-test
  (testing "正確身分證字號檢核測試..."
         (is (= "S149312189" (id-validate "S149312189")))
         (is (= "P266749590" (id-validate "P266749590")))
         (is (= "G177415338" (id-validate "G177415338")))
         (is (= "J237413452" (id-validate "J237413452")))
         (is (= "E283427157" (id-validate "E283427157")))
         (is (= "W253872373" (id-validate "w253872373")))
         (is (= "H168344612" (id-validate "h168344612")))
         (is (= "R202248765" (id-validate "r202248765")))
         (is (= "C233825816" (id-validate "c233825816")))
         (is (= "X230512363" (id-validate "x230512363")))))

(deftest invalid-id-test
  (testing "錯誤身分證字號檢核測試..."
    (is (not (id-validate "S14931189")))
    (is (not (id-validate "P266749591")))
    (is (not (id-validate "G177415438")))
    (is (not (id-validate "J137413452")))
    (is (not (id-validate "E2834271575")))
    (is (not (id-validate "W25386237354")))
    (is (not (id-validate "H169344612")))
    (is (not (id-validate "R202258765")))
    (is (not (id-validate "C239825816")))
    (is (not (id-validate "X231512363")))))

(deftest struct-validator-test
  (testing "struct身分證字號檢核測試..."
    (let [id-schema {:id [id-valid?]}
          valid (st/validate {:id "S149312189"} id-schema)
          invalid (st/validate {:id "R202258765"} id-schema)]
      (is (nil? (first valid)))
      (is (= {:id "身分證字號檢核錯誤!!!"} (first invalid))))))