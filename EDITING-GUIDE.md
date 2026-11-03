# Ananke 完整編輯與上傳教學

## 1. 先開啟並預覽網站

1. 解壓 ZIP，得到 `Ananke-Website` 資料夾。
2. VS Code → File → Open Folder，選取這個資料夾（內層直接看到 `index.html`）。
3. 先雙擊 `index.html` 以瀏覽器開啟，大部分功能即可運作。
4. 編輯時可在 VS Code Extensions 搜尋並安裝 Ritwick Dey 的 Live Server，右鍵 `index.html` → Open with Live Server。儲存後預覽會更新。
5. 不想安裝擴充套件，也可在已安裝 Python 的電腦使用 VS Code 終端機，於本資料夾執行 `python3 -m http.server 8000`；Windows 可用 `py -m http.server 8000`。再開 `http://localhost:8000`。按 Ctrl+C 停止。

本網站沒有 package.json，因此不用執行 npm install 或 npm run build。檔案使用 UTF-8。

## 2. 修改哪裡，應開哪個檔案？

| 想修改 | 開啟檔案 | 修改方式 |
|---|---|---|
| 首頁標題、世界觀簡介、選單、三語詞語 | assets/content.js | 找到對應 zh-Hant／en／ja 區塊及文字 |
| 首頁區塊順序、卡片排列的 HTML 結構 | index.html | 修改對應 section；版面間距在 style.css |
| 角色名字、代表色、引言、外貌、資料、關係、圖片 | assets/characters.js | 找該角色 id 的資料物件 |
| 首頁顯示哪些角色及排序 | assets/app.js | 搜尋 ['shioka', 'bonikka', 'kari'] |
| 網站字型、尺寸、顏色、欄位樣式 | assets/style.css | 修改對應 CSS 選擇器 |
| 宇宙名稱、Δ、位置、連線 | assets/universe-data.js | 修改 nodes、connections |
| 宇宙圖視角動畫／漣漪 | assets/universe-map.js、universe-map.css | 定位為 200ms；漣漪為 .65s |
| 門的開啟時間 | assets/style.css、assets/garden.css | 搜尋 transform .7s，兩邊一起改 |
| 門彩蛋等待與變色時間 | assets/garden.js、assets/garden.css | 等待 10000ms、變色 5000ms／5s |
| 進入花園的擴散動畫 | assets/garden.js | 搜尋 duration、garden-radial-passage |
| 花園六段文字及故障效果 | garden.html | 每段 p 及其 data-text 要一起修改 |

搜尋文字：Mac 按 Cmd+Shift+F，Windows 按 Ctrl+Shift+F，可找整個專案。

### 很重要：文字可能由 JavaScript 覆蓋

帶有 `data-i18n="soulDefinition1"` 的 HTML 會在載入時由 `assets/content.js` 的同名文字覆蓋。
要修改這類內容，優先改 content.js；HTML 內的備用文字也可一併更新。
角色頁的 `<main>` 同樣會由 `assets/characters.js` 的資料及 app.js 重建。只改角色 HTML 中的姓名或待補充文字，重新載入後不會成為正式資料。

## 3. 編輯既有角色

開啟 `assets/characters.js`，搜尋角色 id：

| 角色 | id | 頁面 |
|---|---|---|
| 南雲汐禾 | shioka | chara01-nagumo-shioka.html |
| 玻妮卡 | bonikka | chara02-bonikka-staklo.html |
| 雨宮唯途 | ito | chara05-amamiya-ito.html |
| 星見步明 | poa | chara03-hoshimi-poa.html |
| 札爾 | zar | chara06-zar-staklo.html |
| 石川澪 | mio | chara07-ishikawa-mio.html |
| 佩拉 | peila | chara08-peila.html |
| 露多 | ruta | chara09-ruta-chartreuse.html |
| 烏西亞 | ousia | chara10-ousia.html |
| 莉莉絲 | lilith | chara11-lilith.html |
| 拉利亞 | raria | chara12-raria.html |
| 卡莉 | kari | chara04-kari-felicita.html |

id 是程式內部識別，不一定與英文姓名相同；只修改顯示名字時，不用更改 id。

常用欄位：

```js
"name": "玻妮卡・斯塔庫洛",
"englishName": "Bonikka Staklo",
"japaneseName": "ボニッカ・スタークロ",
"representativeColor": "#96C7F5",
"portrait": "assets/images/characters/bonikka.webp",
"portraitCredit": "繪師：你的署名"
```

這是物件中一小段示例，不要用它取代整份 characters.js。每一欄之間要保留逗號。

外貌 `appearance`：height 身高、weight 體重、hairColor 髮色、hairstyle 髮型、eyeColor 瞳色、clothing 穿著。
人物資訊 `information`：nickname 暱稱、gender 性別、birthday 生日、birthplace 出生、residence 居住。

例如在 appearance 內修改：

```js
"height": "168cm",
"hairstyle": "半綁中短髮\n自然捲"
```

`\n` 表示顯示時換行。空物件 `{}`、空陣列 `[]` 或空字串 `""` 會使用待補充版面；字串 `"/"` 則會顯示斜線。

### 加入三語內容

同一欄可用單純字串，或三語物件：

```js
"hairColor": {
  "zh-Hant": "銀白色",
  "en": "Silver white",
  "ja": "銀白色"
}
```

目前新加入的角色設定主要是繁體中文。沒有提供譯文的欄位會在切換語言時沿用中文；不代表已自動翻譯。

### 興趣、故事、補充資料

```js
"interests": {
  "personality": ["內向", "共情力強"],
  "hobbies": ["收集小物"],
  "likes": ["雨聲"],
  "dislikes": [],
  "fears": []
},
"role": {
  "debut": ["第一次登場的內容"],
  "arc1": ["第一部的定位"],
  "arc2": [],
  "arc3": []
},
"background": {
  "childhood": ["童年設定"],
  "growth": ["成長經歷"]
},
"supplement": ["補充文字"]
```

陣列內的文字也可以替換成三語物件。

### 人際關係與角色連結

```js
"relationships": [
  {
    "title": "家人",
    "entries": ["姊姊：莫妮卡、莎夏", "母親：待補充"]
  },
  {
    "title": "朋友",
    "entries": [{"text": "南雲汐禾", "url": "chara01-nagumo-shioka.html"}]
  }
]
```

文字預設為白色；角色所屬、分頁按鈕、章節標題與代表句使用代表色。偏暗的文字色會自動調亮，頂部色塊維持原色。

## 4. 放入圖片，確保上線後看得到

1. 把真正的圖檔複製至 `assets/images/characters/`，例如 `shioka.webp`。
2. 在該角色的資料中填入 `"portrait": "assets/images/characters/shioka.webp"`。
3. 儲存並重新載入；角色頁與首頁卡片會使用這個圖片路徑。
4. 發布時必須把圖檔與其他網站檔案一起上傳。

使用相對路徑，不要使用 `C:\...`、`/Users/...` 或暫時性的 Discord 圖片連結。
檔名大小寫必須完全一致：`Shioka.PNG` 與 `shioka.png` 在線上可能是不同檔案。
建議小寫英文檔名、避免空格，優先 WebP／PNG／JPG。一般資料頁的圖片可寫：

```html
<img src="assets/images/your-map.webp" alt="世界地圖" style="max-width:100%;height:auto">
```

角色圖未提供時，網站保留圖片佔位；這份 ZIP 沒有額外編造角色圖。

## 5. 新增一個角色頁面

1. 在 characters.js 的 WORLD_CHARACTERS 陣列內，複製一位資料較少角色的「完整物件」，例如 mio。必須連同 appearance、information、interests、relationships、role、background、supplement、ability、representativeColor 等欄位一起複製。
2. 在下一個角色物件前／後保留逗號，給新角色一個不重複 id，例如 `new-character`。
3. 修改 name、englishName、japaneseName、representativeColor；url 改成 `new-character.html`。清除不屬於新角色的設定。
4. 複製 `chara07-ishikawa-mio.html`，重新命名為 `new-character.html`。
5. 在新 HTML 把 `data-character="mio"` 改為 `data-character="new-character"`。可同步修改 title 與備用名稱。正式顯示以 characters.js 為準。
6. world 使用 `worldZero` 或 `otherWorlds`；group 可用 `republic`、`empire`、`forest`、`creators`、`artificial`。新角色會自動出現在人物列表對應分類。
7. 首頁目前只顯示三人。想更換首頁人物，修改 app.js 中 `['shioka', 'bonikka', 'kari']`；若增加到四人以上，卡片會依 CSS 網格換行。

若要創建新的世界／分類，須同步擴充 characters.js 上方 CHARACTER_LABELS 的三語標籤；新增 world 還需修改 app.js 的人物列表世界順序。

## 6. 新增一個世界觀頁面

1. 複製 `soul.html`，改名成小寫英文，例如 `silver-harbor.html`。
2. 修改 head 裡的 `<title>`。
3. 新頁若先寫純中文，可移除 body 的 `data-page="soulEntry"`，並移除 main 內複製來的 `data-i18n` 屬性，再直接編輯標題與段落。不要移除全站 header／footer 的語言設定。
4. 保留 header、footer 及 script 引用，讓選單與語言控制正常。
5. 在適合的分類頁加入連結，例如：

```html
<li><a href="silver-harbor.html"><span>銀港市</span><span aria-hidden="true">↗</span></a></li>
```

6. 要新增真正三語內容，為新段落建立不重複 key，例如 `silverHarborIntro`；在 content.js 的 zh-Hant、en、ja 都加入該 key，再於段落加 `data-i18n="silverHarborIntro"`。

常用分類：soul-tech.html（靈魂技術）、cosmos-tech.html（宇宙技術）、glossary.html（詞彙）、organizations.html（組織計劃）。

新網址已是 cosmos-leap.html、runic-cloister.html、chroma.html、project-search.html、project-new-horizons.html。舊頁是轉址用途，請編輯新頁，並用新網址建立連結。

## 7. 修改宇宙圖

開 `assets/universe-data.js`：

- nodes：每一個宇宙。
- id：不可重複；connections 會引用這個 id。
- name：三語名稱。
- delta：正式現實偏移量。
- position：[x,y,z]；x 左右、y 上下、z 深度，是展示座標。
- connections：每組兩個 id，代表一條連線。

例如在 nodes 陣列加入正式宇宙：

```js
{id:'u123', code:'UNIVERSE 123', name:{'zh-Hant':'123號宇宙',en:'Universe 123',ja:'123号宇宙'}, delta:3.2, position:[-2,1,0]}
```

並在 connections 加上 `['zero','u123']`。資料項目之間記得加逗號。

目前 draft 節點用 draft:true 及 previewDelta，代表示意名稱／配色，不是正式世界設定。將 draft 改為正式節點時，移除 draft:true，補齊正式 name、code、delta。

目前資訊側欄只有零號及 404 的正式簡介；其他正式宇宙要有專屬描述，還需在 universe-map.js 的 updateSelection 中擴充，不能只新增節點就期待自動產生故事。這裡應由你填設定。

## 8. 修改門與花園

- 開門旋轉：style.css 及 garden.css 的 `transform .7s`。
- 停留等待：garden.js 的外層 `10000`，單位毫秒；10000 = 10 秒。
- 淺色漸變：garden.js 的 `5000` 加上 garden.css 對應 `5s`，兩邊一起改。
- 淺色背景：garden.css 的 `#FDFDFE`。
- 離開恢復：garden.css 相關 `.5s`，theme-color 的同步取樣時間在 garden.js。
- 點擊後擴散：garden.js 的 `3000`（3 秒）與 CSS 的 garden-radial-passage。
- 花園內文：garden.html 的每段 `<p>`。同一句也存在 `data-text` 屬性，兩處必須一致，否則故障效果會冒出舊文字。

例如：`<p data-text="新的句子。">新的句子。</p>`。
彩蛋目前以滑鼠停留觸發；觸控裝置沒有完全對應的停留操作。

## 9. 直接上傳 Netlify（最快）

1. 解壓 ZIP；找到直接含有 index.html、assets 的 Ananke-Website 資料夾。
2. 登入 Netlify。新增手動網站可用 https://app.netlify.com/drop 。
3. 拖入整個 Ananke-Website 資料夾。不要把 ZIP 當作 HTML 上傳，也不要只拖 index.html。
4. 完成後測試首頁、角色圖、語言、分頁及宇宙圖。
5. 更新既有手動部署的網站：在該網站的 Deploys 找手動拖曳區，拖入修改後的完整資料夾，避免每次新增另一個網站。

Netlify 的介面名稱可能調整；重點是手動部署區和包含 index.html 的根目錄。

## 10. 上傳 GitHub（管理原始碼）

1. 在 GitHub 新增 repository，例如 ananke-world。
2. 選 Add file → Upload files。
3. 將 Ananke-Website「裡面」的 HTML、assets、README、netlify.toml 等上傳；根目錄應直接看到 index.html，不要再套一層 Ananke-Website。
4. Commit changes。

ZIP 本身只是壓縮檔；只把 ZIP 放進 repository 不會變成網站。
之後可在 GitHub 點檔案 → Edit 修改文字，再 Commit changes。

若使用 VS Code Source Control：先在本機安裝 Git，再按 Initialize Repository，提交（Commit）後 Publish Branch／Sync Changes，登入並選取正確帳號與儲存庫。每次更新都要儲存、Commit、Push 才會送至 GitHub。

## 11. GitHub Pages（直接用 GitHub 發布）

1. 完成上傳，確認 repository 根目錄有 index.html。
2. Repository → Settings → Pages。
3. Source 選 Deploy from a branch；Branch 選 main，資料夾選 /(root)，再 Save。
4. 等待部署完成，在 Pages 內按 Visit site。
5. 本包的 .nojekyll 是空白檔案，用於純靜態檔案發布。即使不小心漏傳，這份站點沒有依賴 Jekyll 的內容。
6. 後續 main 分支的新提交會觸發更新。

用 .html 站內連結最穩定，尤其 GitHub 專案網站可能有 /repository-name/ 路徑前綴。不要把圖片寫成 /assets/...，請使用 assets/...。
GitHub Free 使用 Pages 時需使用公開 repository；發布的網站可被網路使用者瀏覽。

## 12. GitHub 連接 Netlify（方便長期更新）

1. 在 Netlify 選擇從 Git repository 匯入專案，連接 GitHub 並選對 repository。
2. Production branch：main。
3. Base directory：留空（repository 根目錄）。
4. Build command：留空。
5. Publish directory：`.`（一個英文句點）。
6. 本包已有 netlify.toml，publish 指向 `.`，不需要 dist 或 npm run build。
7. 設定完成後，每次 Commit + Push 到 main，Netlify 會自動部署。

若你已經有 ananke-genzai，先查看它是手動部署還是連接 Git，再選擇對應方法。連接 Git 的站點，應透過它連接的儲存庫更新。

## 13. 常見問題

- 修改 HTML 沒變：可能文字來自 content.js 或角色資料來自 characters.js；也可能尚未儲存／Push／完成部署。
- 圖片 404：檢查路徑、檔名大小寫、圖檔是否真的上傳。
- 整個首頁 404：檢查發布目錄是不是多包了一層資料夾，以及根目錄有沒有 index.html。
- 語言或人物列表突然失效：JS 可能少了逗號、引號或括號；在瀏覽器開發人員工具 Console 找第一個錯誤。
- 舊文字沒消失：強制重新整理（Mac Cmd+Shift+R／Windows Ctrl+F5），再確認線上部署是否包含這次提交。
- 新版 Sites 沒同步：這份 ZIP 是匯出快照；外部 GitHub／Netlify 與 ChatGPT Sites 沒有設定雙向同步。
- 為何與 Sites 存取權限不同：純靜態檔不包含 Sites 的帳戶驗證；新平台權限需另設。
- 彩蛋是不是保密頁：不是。garden.html、文字及所有前端原始碼都隨網站下載，彩蛋只是探索互動。

## 官方操作參考

- GitHub Pages 建站：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- GitHub Pages 發布來源：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Netlify 部署：https://docs.netlify.com/deploy/create-deploys/

匯出日期：2026-11-03（日本時間）。來源：Sites 第 25 版。
