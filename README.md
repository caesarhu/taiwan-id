<a href="https://clojars.org/caesarhu/taiwan-id">
  <img alt="Clojars Version" src="https://img.shields.io/clojars/v/caesarhu/taiwan-id"></a>

# taiwan-id

clojure/script 台灣身分證字號檢核程式庫，包含新版及舊版居留證號檢核

## Developing

### Unit test

Run unit test.

```bash
clj -X:test/run
[(.........................................................)]
5 tests, 57 assertions, 0 failures.

clj -M:test/cljs
Testing caesarhu.taiwan-id-test
Ran 5 tests containing 57 assertions.
0 failures, 0 errors.
```

提供以下檢核函數：

```clojure
(require '[caesarhu.taiwan-id :refer :all])
(is-id? id) ; 台灣身分證號檢核, 包含身分證號、新版及舊版居留證號
(is-id? id :id) ; 僅檢核身分證號
(is-id? id :arc-id) ; 僅檢核新版居留證號
(is-id? id :arc-old) ; 僅檢核舊版居留證號

(is-id? "U257566542")
=> true

(is-id? "U257566547")
=> nil
```

定義了id、arc-id、arc-old、id-or-arc 供 malli 運用

```clojure
(require '[malli.core :as m])
(require '[malli.generator :as mg])

(m/validate id "N262705297")
=> true
(m/validate arc-id "G903711325")
=> true
(m/validate arc-old "ZD78970006")
=> true
(m/validate id-or-arc "ZD78970006")
=> true

(mg/generate id)
=> "V221098378"
(mg/generate arc-id)
"G903711325"
(mg/generate arc-old)
"ZD78970006"
(mg/sample id-or-arc)
("H887108283"
 "T126927058"
 "AD62912515"
 "SB17467280"
 "H895176437"
 "I213565515"
 "IB77932134"
 "O187885278"
 "S295987141"
 "Z983385708")
```

## Legal

Copyright © 2020 FIXME