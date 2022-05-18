(ns caesarhu.taiwan-id-test
  (:require [clojure.test
             :refer [deftest is are testing run-tests]
             :refer-macros [deftest is are testing run-tests]]
            [caesarhu.taiwan-id :refer [validate? id arc-id arc-old all-id]]
            [malli.core :as m]
            [malli.generator :as mg]))

(deftest id-right-test
  (testing "正確身分證字號檢核測試..."
    (is (= true (validate? "S149312189" :id)))
    (is (= true (validate? "P266749590" :id)))
    (is (= true (validate? "G177415338" :id)))
    (is (= true (validate? "J237413452" :id)))
    (is (= true (validate? "E283427157" :id)))
    (is (= true (validate? "W253872373")))
    (is (= true (validate? "H168344612")))
    (is (= true (validate? "R202248765")))
    (is (= true (validate? "C233825816")))
    (is (= true (validate? "X230512363")))
    (is (= true (m/validate id "S149312189")))
    (is (= true (m/validate id "P266749590")))
    (is (= true (m/validate id "G177415338")))
    (is (= true (m/validate id "J237413452")))
    (is (= true (m/validate id "E283427157")))
    (is (= true (m/validate all-id "W253872373")))
    (is (= true (m/validate all-id "H168344612")))
    (is (= true (m/validate all-id "R202248765")))
    (is (= true (m/validate all-id "C233825816")))
    (is (= true (m/validate all-id "X230512363")))))

(deftest id-wrong-test
  (testing "錯誤身分證字號檢核測試..."
    (is (not (validate? "S14931189" :id)))
    (is (not (validate? "P266749591" :id)))
    (is (not (validate? "G177415438" :id)))
    (is (not (validate? "J137413452" :id)))
    (is (not (validate? "E2834271575" :id)))
    (is (not (validate? "W25386237354")))
    (is (not (validate? "H169344612")))
    (is (not (validate? "R202258765")))
    (is (not (validate? "C239825816")))
    (is (not (validate? "X231512363")))
    (is (not (m/validate id "S14931189")))
    (is (not (m/validate id "P266749591")))
    (is (not (m/validate id "G177415438")))
    (is (not (m/validate id "J137413452")))
    (is (not (m/validate id "E2834271575")))
    (is (not (m/validate all-id "W25386237354")))
    (is (not (m/validate all-id "H169344612")))
    (is (not (m/validate all-id "R202258765")))
    (is (not (m/validate all-id "C239825816")))
    (is (not (m/validate all-id "X231512363")))))

(deftest arc-id-test
  (testing "居留證號檢核測試..."
    (is (= true (validate? "A823406603" :arc-id)))
    (is (= true (validate? "A823406603")))
    (is (= false (validate? "A823406600" :arc-id)))
    (is (not (validate? "A823406600")))
    (is (= true (m/validate arc-id "A823406603")))
    (is (= false (m/validate arc-id "A823406600")))
    (is (= true (m/validate all-id "A823406603")))
    (is (not (m/validate all-id "A823406600")))))

(deftest arc-old-test
  (testing "舊版居留證號檢核測試..."
    (is (= true (validate? "AC13329740" :arc-old)))
    (is (= true (validate? "AC13329740")))
    (is (= false (validate? "AC13329749" :arc-old)))
    (is (not (validate? "AC13329749")))
    (is (= true (m/validate arc-old "AC13329740")))
    (is (= false (m/validate arc-old "AC13329749")))
    (is (= true (m/validate all-id "AC13329740")))
    (is (not (m/validate all-id "AC13329749")))))

(deftest generator-test
  (testing "證號產生器測試"
    (is (= 100 (->> (mg/sample all-id {:size 100})
                    (filter #(m/validate all-id %))
                    count)))))