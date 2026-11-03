# 《原罪》Ananke 網站

這是以 Sites 第 25 版為基礎，依最新清單修改角色 ID 與頁面名稱的可攜式原始碼（2026-11-03，日本時間）。

角色網址對照見 [CHARACTER-URLS.md](CHARACTER-URLS.md)。這次更名僅套用於 ZIP，未發布至 Sites。

- 純 HTML、CSS、JavaScript；不需要 npm、Node.js、編譯或 API 金鑰。
- 解壓後以 VS Code 開啟本資料夾。
- 完整教學請閱讀 [EDITING-GUIDE.md](EDITING-GUIDE.md)；在 VS Code 中按 Cmd+Shift+V（Windows：Ctrl+Shift+V）可預覽。
- 快速預覽：開啟 `index.html`，或用 VS Code 的 Live Server 啟動。
- Netlify：將本資料夾（內層直接有 index.html）拖入手動部署區。
- GitHub：上傳本資料夾內的檔案，而不是只上傳 ZIP；Pages 使用 main 分支的根目錄。
- GitHub → Netlify：建置指令留空，發布目錄 `.`。

這份匯出不包含 Sites 的帳戶設定及登入保護；在其他平台發布時，請按新平台設定存取權限。
在 VS Code、GitHub、Netlify 的修改不會自動同步回 ChatGPT Sites，反向也一樣。

## 導覽

| 內容 | 檔案 |
|---|---|
| 首頁結構 | index.html |
| 首頁及世界觀三語文字 | assets/content.js |
| 全部角色資料、代表色與圖片路徑 | assets/characters.js |
| 角色模板、角色列表、語言切換 | assets/app.js |
| 共用版面、角色樣式 | assets/style.css |
| 宇宙結構資料 | assets/universe-data.js |
| 宇宙圖互動／樣式 | assets/universe-map.js、assets/universe-map.css |
| 門彩蛋／淺色模式 | assets/garden.js、assets/garden.css |
| 花園文字 | garden.html |

建議先修改文字和圖片，確認正常後再改動互動程式。

角色頁面現在以 chara01- 到 chara12- 開頭，方便在檔案列表排序。請編輯這些正式頁面；未帶編號的舊角色頁只負責轉址。角色文字仍編輯 assets/characters.js。
