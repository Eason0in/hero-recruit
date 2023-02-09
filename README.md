# 如何執行完成的 package

1. 建議 node 版本要在 16.15.0 之後
2. 建議 yarn 版本要在 1.22.18 之後
3. 執行 `yarn add` 安裝套件
4. 執行 `yarn start` 啟動專案

# 專案的架構、Web 的架構邏輯

- 專案的架構：使用 CRA 建立專案，使用 yarn 管理套件，src 底下有兩個資料夾， Components style，Components 放元件，每個元件都有各有一組 .js .scss .test.js；style 用於放置共用 scss 像是清除瀏覽器預設 css 的 reset.scss

- Web 的架構邏輯：

  - 由 src/index.js 為程式入口，使用 route 切換到 url，並載入 List Component (/heroes)，並將 Profile ( /heroes/:heroId ) 設定為 /heroes 的子 route

  - List folder 底下有 .js .scss .test.js，當 List 載入後隨即發送 GET API 去要資料；將各英雄的資料當作 route 控制子 route Profile

  - Profile folder 底下有 .js .scss .test.js，使用 useParams 拿取 route :heroId，發送 GET API 拿到該英雄能力值

# 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介

1. react：由 Meta 開發維護的 JavaScript Framework，專注於資料狀態管理，採用 JSX 語法，會產生一份虛擬 DOM，當資料狀態發生變動時，會比較哪些區塊有更新，然後再更新到 browser 的 DOM

2. react-router：支援 react 使用 browser route 的邏輯及 hooks，而不需要回 server 重新跑 route 要一份 html

3. react-router-dom: 包含 react-router 一切的功能，並另外支援基於 component 的路由，讓開發者可以切換 route 時用 component 切換頁面上的元件

4. react-scripts：免於設定 webpack babel ，將非 css js 的擴充語言 (ex: .jsx .ts .scss ) 轉成 css，執行時會設定環境變數、確認套件、確認 port，以及建立 development server

5. sass：可以將 css 寫成巢狀，而 Sass 會將語法編譯成原生 css，提供變數、Mixin、for loop、if-else 以及繼承 extend 等其他功能

6.

# 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

1. 當有一個區塊專門做某些事情在整理後，使用 #region #endregion 框起來，方便閱讀，ex: useState、useEffect 或 functions
2. 一個 function 如果有參數時使用 /\*\* \*/ 把 params 的型別及意義標示
3. 當`非尋常`的邏輯或使用者操作時，會特別描述做了什麼，以及程式為什麼要這樣寫

# 在這份專案中你遇到的困難、問題，以及解決的方法

## 1.

- 問題：不會用 router 切換頁面，以及 List 在切換頁面時不消失

- 困難：因之前的經驗多半採用 SSR 渲染頁面

- 解決的方法：印象中看過教學影片 nested routes 的作法，遵循著 [官方文件](https://reactrouter.com/en/main/start/tutorial#nested-routes) 操作

## 2.

- 問題：

- 困難：

- 解決的方法：
