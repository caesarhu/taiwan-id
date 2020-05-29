(ns taiwan-id.core-test
  (:require
    [taiwan-id.core :as id]
    [clojure.test :as t]
    [taiwan-id.test-helper.core :refer [instrument-specs]]
    [struct.core :as st]))

(t/use-fixtures
  :once
  instrument-specs)

(t/deftest taiwan-id-right-test
  (t/testing "正確身分證字號檢核測試..."
    (t/is (= "S149312189" (id/taiwan-id? "S149312189")))
    (t/is (= "P266749590" (id/taiwan-id? "P266749590")))
    (t/is (= "G177415338" (id/taiwan-id? "G177415338")))
    (t/is (= "J237413452" (id/taiwan-id? "J237413452")))
    (t/is (= "E283427157" (id/taiwan-id? "E283427157")))
    (t/is (= "W253872373" (id/taiwan-id? "w253872373")))
    (t/is (= "H168344612" (id/taiwan-id? "h168344612")))
    (t/is (= "R202248765" (id/taiwan-id? "r202248765")))
    (t/is (= "C233825816" (id/taiwan-id? "c233825816")))
    (t/is (= "X230512363" (id/taiwan-id? "x230512363")))))

(t/deftest invalid-id-wrong-test
  (t/testing "錯誤身分證字號檢核測試..."
    (t/is (not (id/taiwan-id? "S14931189")))
    (t/is (not (id/taiwan-id? "P266749591")))
    (t/is (not (id/taiwan-id? "G177415438")))
    (t/is (not (id/taiwan-id? "J137413452")))
    (t/is (not (id/taiwan-id? "E2834271575")))
    (t/is (not (id/taiwan-id? "W25386237354")))
    (t/is (not (id/taiwan-id? "H169344612")))
    (t/is (not (id/taiwan-id? "R202258765")))
    (t/is (not (id/taiwan-id? "C239825816")))
    (t/is (not (id/taiwan-id? "X231512363")))))

(t/deftest struct-validator-test
  (t/testing "struct身分證字號檢核測試..."
    (let [id-schema {:id [id/taiwan-id-valid?]}
          valid (st/validate {:id "S149312189"} id-schema)
          invalid (st/validate {:id "R202258765"} id-schema)]
      (t/is (nil? (first valid)))
      (t/is (= {:id "身分證字號檢核錯誤!!!"} (first invalid))))))

(t/deftest some-id-test
  (t/testing "some-id? 身份證號或外來人口統一證號檢核"
    (t/is (= "A919518067" (id/some-id? "A919518067")))
    (t/is (= "SC19810209" (id/some-id? "SC19810209")))
    (t/is (= "C233825816" (id/some-id? "C233825816")))
    (t/is (not (id/some-id? "C239825816")))))
