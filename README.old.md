# react-practice
React 的練習與實作。

pull下來之後執行以下
```
npm install
npm start
```
# Error record
## 20230331 errors
- couldn't find main.js module
原因：命名錯誤
原本為main.js
修正為Main.js
補正方法：固定檔案的命名方式

- not linked to bootstrap.css.map
原因：devtool無法連線
修正方法：
https://stackoverflow.com/questions/29802037/not-linked-to-bootstrap-css-map-but-shows-in-console


# Problem record
## 20230331 problems
- Also define the standard property 'appearance' for compatibility problem
原因：補正webkit
修正方法：
https://stackoverflow.com/questions/55586658/fix-warning-also-define-the-standard-property-box-shadow-for-compatibility