(ns caesarhu.taiwan-id-test
  (:require [clojure.test
             :refer [deftest is are testing run-tests]
             :refer-macros [deftest is are testing run-tests]]
            [caesarhu.taiwan-id :refer [taiwan-id? id-gen]]
            [clojure.spec.alpha :as s]
            [clojure.test.check.generators]
            [clojure.spec.gen.alpha :as gen]))

(deftest taiwan-id-right-test
  (testing "正確身分證字號檢核測試..."
    (is (= "S149312189" (taiwan-id? "S149312189")))
    (is (= "P266749590" (taiwan-id? "P266749590")))
    (is (= "G177415338" (taiwan-id? "G177415338")))
    (is (= "J237413452" (taiwan-id? "J237413452")))
    (is (= "E283427157" (taiwan-id? "E283427157")))
    (is (= "W253872373" (taiwan-id? "w253872373")))
    (is (= "H168344612" (taiwan-id? "h168344612")))
    (is (= "R202248765" (taiwan-id? "r202248765")))
    (is (= "C233825816" (taiwan-id? "c233825816")))
    (is (= "X230512363" (taiwan-id? "x230512363")))))

(deftest invalid-id-wrong-test
  (testing "錯誤身分證字號檢核測試..."
    (is (not (taiwan-id? "S14931189")))
    (is (not (taiwan-id? "P266749591")))
    (is (not (taiwan-id? "G177415438")))
    (is (not (taiwan-id? "J137413452")))
    (is (not (taiwan-id? "E2834271575")))
    (is (not (taiwan-id? "W25386237354")))
    (is (not (taiwan-id? "H169344612")))
    (is (not (taiwan-id? "R202258765")))
    (is (not (taiwan-id? "C239825816")))
    (is (not (taiwan-id? "X231512363")))))

(deftest foreigner-id-test
  (testing "外來人口統一證號檢核測試..."
    (is (= "A919518067" (taiwan-id? "A919518067")))
    (is (= "SC19810209" (taiwan-id? "SC19810209")))))

(deftest optional-id-test
  (testing "證號類別測試..."
    (is (nil? (taiwan-id? "A919518067" [:taiwan :foreign-old])))
    (is (nil? (taiwan-id? "SC19810209" [:taiwan :foreign])))
    (is (nil? (taiwan-id? "S149312189" [:foreign :foreign-old])))
    (is (= "A919518067" (taiwan-id? "A919518067" [:foreign])))
    (is (= "SC19810209" (taiwan-id? "SC19810209" [:foreign-old])))
    (is (= "S149312189" (taiwan-id? "S149312189" [:taiwan])))))

(deftest id-gen-test
  (let [sample (gen/sample id-gen 100)]
    (is (= (count sample)
           (->> sample
                (map taiwan-id?)
                (filter some?)
                (count))))))
