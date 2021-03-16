![Clojars Version](https://img.shields.io/clojars/v/caesarhu/taiwan-id)

# taiwan-id

clojure台灣身分證字號檢核程式庫，包含新版及舊版外來人口統一證號檢核

## Developing

### Unit test

Run unit test.

```clojure
clojure:
user=> (unit-test)
[(.......................)]
4 tests, 23 assertions, 0 failures.
=> #:kaocha.result{:count 4, :pass 23, :error 0, :fail 0, :pending 0}

clojurescript:
clj -M:test-chrome
Chrome Headless 88.0.4324.182 (Linux x86_64): Executed 4 of 4 SUCCESS (0.172 secs / 0.144 secs)
TOTAL: 4 SUCCESS
```

提供以下檢核函數：

```clojure
(require '[caesarhu.taiwan-id :refer :all])
(taiwan-id? id) ; 台灣身分證號檢核, 包含身分證號、新版及舊版外來人口統一證號
(taiwan-id? id [:taiwan]) ; 僅檢核身分證號
(taiwan-id? id [:taiwan :foreign :foreign-old]) ; 檢核身分證號及新舊外來人口統一證號
(taiwan-id? "U257566542")
=> "U257566542"

(taiwan-id? "U257566547")
=> nil
```

提供id-gen產生合法的身分證號：

```clojure
(require '[clojure.spec.gen.alpha :as gen])
(gen/generate id-gen)
=> "L299653480"

(gen/sample id-gen)
=>
("H168593053"
 "O125420020"
 "N262705297"
 "B292429540"
 "Q248928978"
 "B121471814"
 "J207398595"
 "B173039042"
 "I213708958"
 "C249665504")
```

定義了id-schema 供malli使用

```clojure
(malli.core/validate id-schema "N262705297")
=> "N262705297"
(malli.core/validate id-schema "N262705292")
=> nil

(malli.generator/generate id-schema)
=> "Q184340736"
```

## Legal

Copyright © 2020 FIXME
