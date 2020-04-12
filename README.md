# taiwan-id

clojure台灣身分證字號檢核程式庫，提供1個檢核函數及1個struct validator

## Usage
[taiwan-id "0.3.2"]

(require '[taiwan-id.core :refer [id-validate id-valid?]])

```clojure
(id-validate id-str) ;; true if valid, false or nil if invalild

id-valid?         ;; struct validator

;; 用法如core-test.clj
```



## License

Copyright © 2019 FIXME

This program and the accompanying materials are made available under the
terms of the Eclipse Public License 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

This Source Code may also be made available under the following Secondary
Licenses when the conditions for such availability set forth in the Eclipse
Public License, v. 2.0 are satisfied: GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or (at your
option) any later version, with the GNU Classpath Exception which is available
at https://www.gnu.org/software/classpath/license.html.
