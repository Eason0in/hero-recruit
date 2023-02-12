# 如何執行完成的 package

1. 下載專案 `git clone https://github.com/Eason0in/hero-recruit.git`
2. 建議 node 版本要在 16.15.0 之後
3. 建議安裝 yarn 版本要在 1.22.18 之後
4. 執行 `yarn install` 安裝套件
5. 建議安裝 npm 版本要在 8.11.0 之後
6. 執行 `npm install` 安裝套件

# 專案的架構、Web 的架構邏輯

- 專案的架構：使用 CRA 建立專案，使用 yarn 管理套件，底下有兩個資料夾：

  - public：存放 index.html、icon

  - src：存放入口 index.js 及 index.css，底下有三個資料夾：

    - Components：存放元件

    - Loaders：存放 route 的 loader

    - styles：存放 reset.css、styled-components 共用的變數以及組件

  - cypress：存放測試檔案

- Web 的架構邏輯：

  - 由 src/index.js 為程式入口，使用 redirect 從 `/` 切換到 `/heroes`，並載入 HeroList Component，並將 HeroProfile ( /heroes/:heroId ) 設定為 /heroes 的子 route

  - 每個 component 都有一個 index.js ( 存放元件 ) 以及 styleds.js ( 存放 styled-components )

  - HeroList：放 CardList 和子 route 的位置

    - CardList：載入後隨即發送 GET API 去要 Hero 資料，將每位英雄資料交給 Card

      - Card：每位英雄的圖片及名字

  - HeroProfile：載入後使用 useParams 拿取 route :heroId，發送 GET API 去要 Hero 能力值資料

    - PointList：左邊能力值清單

      - PointItem：每項能力值的點數以及 +- 按鈕

    - RemainPointAndBtn：右邊剩餘點數及儲存按鈕

    - Dog：提示英雄最大能力值

  - ErrorPage：當 url 錯誤時切到錯誤頁面

  - cypress：使用 E2E 測試網頁，分為 index、errorPage、heroList、heroProfile 以及 profileList，用 component 為單位分割檔案

# 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介

1. react：由 Meta 開發維護的 JavaScript Framework，專注於資料狀態管理，採用 JSX 語法，會產生一份虛擬 DOM，當資料狀態發生變動時，會比較變動資料虛擬 DOM 的區塊，最後才會更新到 browser 的 DOM；由 Component 為單位，建構頁面上的區塊組件，組件可以有自己的資料狀態 ( useState ) 以及偵測資料變動處理特定功能 ( useEffect ) 等多個 hook 工具

2. react-router：支援 react 使用 browser route 的邏輯及 hooks，而不需要回 server 重新走 route 要一份新頁面及靜態資源；可以抓取 route 的相關資料，ex：useParams 抓取參數、useSearchParams 抓取 url ? 後面的參數，除此之外前端切換 route 時會攔截並在瀏覽器處理，ex: Routes、Route、NavLink

3. react-router-dom: 包含 react-router 一切的功能，並另外支援基於 component 的路由，讓開發者可以切換 route 時用 component 切換頁面上的元件

4. react-scripts：免於設定 webpack babel ，將非 css js 的擴充語言 (ex: .jsx .ts .scss ) 轉成 css js，執行時會設定環境變數、確認套件、確認 port，以及建立 development server；有四個指令可以用，將專案編譯打包的 build、跑測試使用的 test、將底層設定的 webpack babel 等存放一份在專案裡，可依專案需要修改，一旦修改就不會照著原始設定跑的 eject、啟動專案的 start

5. styled-components：類似 CSSModules 將 style 寫進 className，styled-components 將 html、class 結合成一個 component，可免於傳統開發 class name 衝名或權重高低造成錯誤樣式以及提高 css 的維護性，每一支 react component 都可以建立屬於自己的 html&css component；支援繼承、使用屬性參數可動態建構 css、類似 Sass 可以寫成巢狀

6. cypress：端對端測試，測試時會實際執行網頁，也可以看到測試網頁變化的過程，有別於單元測試，更注重使用者實際操作網頁時的測試；跟其他單元測試的套件寫法差不多，有很多 API 可以用 ex: visit、request、should、eq、click

# 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

1. 我會先想如果今天這段程式碼不是我維護，而是任何 level 的同事來看時，他們怎麼看會比較舒服以及比較快找到目標

2. 當有一個區塊專門做某些事情時，我會使用 #region #endregion 框起來，方便閱讀，ex: useState、useEffect 或 functions

3. 一個 function 如果有傳入參數時，我會使用 /\*\* \*/ 把 params 的型別及參數意義標示，如果有 return ，會將什麼型別的值也寫進去

4. 當`特別及判斷式`的邏輯或者特殊使用者操作時，我會詳細描述程式做了什麼，以及為什麼

# 在這份專案中你遇到的困難、問題，以及解決的方法

## 1.

- 問題：用前端 router 切換頁面，以及 HeroList 在切換頁面時不消失

- 困難：因之前工作的經驗多半採用 SSR 渲染頁面

- 解決的方法：印象中看過教學影片 nested routes 的作法，遵循著 [官方文件](https://reactrouter.com/en/main/start/tutorial#nested-routes) 操作得到子 route 的處理方式

## 2.

- 問題：當專案啟動時以及使用者在瀏覽器 url 打 `/` Enter 時，想將 `/` 導到 `/heroes`

- 困難：express server 可以用 redirect 做導頁，react-router-dom 不知道有沒有方法可以導頁

- 解決的方法：

  - 試想著用 express server 時可以用 redirect 導頁，在前端一開始想在 `/` 建立一個 component，並在裡面寫程式用 `window.location.replace` 處理導頁的功能

  - 翻[文件](https://reactrouter.com/en/main/fetch/redirect) 發現可以寫 redirect 在 loader 裡面

## 3.

- 問題：兩個方法打 Hero CardList 的 API

  - useEffect : 雖然一開始會發兩次 API，在切換卡片不會再重發，但因為載入 CardList 時才發，所以一開始會畫面閃一下白色

  - route loader：雖然一開始用 async await 可以先拿到資料再 render 頁面，但如果切同一張卡， route 會再跑一次 loader 導致每點一次就打 API

- 解決的方法：考量到重複的 request 數量，最後選擇使用 useEffect 打 API

## 4.

- 問題：如何用 cypress 在複雜的專案裡寫 E2E 測試

- 困難：雖然有自己玩過 cypress 和 unit test，但這次作業遠大於之前自己專案的複雜度

- 解決的方法：先學習官網的基本教學，然後慢慢開始套用到這次專案中，遇到特殊狀況就翻文件，ex: 檢測 window alert 是否如預期出現
