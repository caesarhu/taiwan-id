(ns caesarhu.taiwan-id-test
  (:require [clojure.test
             :refer [deftest is are testing run-tests]
             :refer-macros [deftest is are testing run-tests]]
            [caesarhu.taiwan-id :refer [id arc-id arc-old id-or-arc]]
            [malli.core :as m]
            [malli.generator :as mg]))

(deftest id-right-test
  (testing "正確身分證字號檢核測試..."
    (is (= true (m/validate id "S149312189")))
    (is (= true (m/validate id "P266749590")))
    (is (= true (m/validate id "G177415338")))
    (is (= true (m/validate id "J237413452")))
    (is (= true (m/validate id "E283427157")))
    (is (= true (m/validate id-or-arc "W253872373")))
    (is (= true (m/validate id-or-arc "H168344612")))
    (is (= true (m/validate id-or-arc "R202248765")))
    (is (= true (m/validate id-or-arc "C233825816")))
    (is (= true (m/validate id-or-arc "X230512363")))))

(deftest id-wrong-test
  (testing "錯誤身分證字號檢核測試..."
    (is (not (m/validate id "S14931189")))
    (is (not (m/validate id "P266749591")))
    (is (not (m/validate id "G177415438")))
    (is (not (m/validate id "J137413452")))
    (is (not (m/validate id "E2834271575")))
    (is (not (m/validate id-or-arc "W25386237354")))
    (is (not (m/validate id-or-arc "H169344612")))
    (is (not (m/validate id-or-arc "R202258765")))
    (is (not (m/validate id-or-arc "C239825816")))
    (is (not (m/validate id-or-arc "X231512363")))))

(deftest arc-id-test
  (testing "居留證號檢核測試..."
    (is (= true (m/validate arc-id "A823406603")))
    (is (= false (m/validate arc-id "A823406600")))
    (is (= true (m/validate id-or-arc "A823406603")))
    (is (not (m/validate id-or-arc "A823406600")))))

(deftest arc-old-test
  (testing "舊版居留證號檢核測試..."
    (is (= true (m/validate arc-old "AC13329740")))
    (is (= false (m/validate arc-old "AC13329749")))
    (is (= true (m/validate id-or-arc "AC13329740")))
    (is (not (m/validate id-or-arc "AC13329749")))))

(deftest generator-test
  (testing "證號產生器測試"
    (is (= 100 (->> (mg/sample id-or-arc {:size 100})
                    (filter #(m/validate id-or-arc %))
                    count)))))