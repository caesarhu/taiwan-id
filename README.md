# taiwan-id

clojure台灣身分證字號檢核程式庫，包含新版及舊版外來人口統一證號檢核

## Developing

### Setup

When you first clone this repository, run:

```sh
lein duct setup
```

This will create files for local configuration, and prep your system
for the project.

### Environment

To begin developing, start with a REPL.

```sh
lein repl
```

Then load the development environment.

```clojure
user=> (dev)
:loaded
```

Run `go` to prep and initiate the system.

```clojure
dev=> (go)
:duct.server.http.jetty/starting-server {:port 3000}
:initiated
```

提供以下檢核函數：

```clojure
(taiwan-id? id) ; 台灣身分證號檢核
(foreigner-old? id) ; 舊版外來人口統一證號檢核
(foreigner-id? id) ; 新版外來人口統一證號檢核
(some-id? id) ; 身份證號或外來人口統一證號檢核
```

另外定義了對應的 struct 物件供 struct 運用：

```clojure
taiwan-id-valid?
foreigner-old-valid?
foreigner-id-valid?
some-id-valid?
```

### Testing

Testing is fastest through the REPL, as you avoid environment startup
time.

```clojure
dev=> (test)
...
```

But you can also run tests through Leiningen.

```sh
lein test
```

## Legal

Copyright © 2020 FIXME
