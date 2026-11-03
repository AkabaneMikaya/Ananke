// 三語文字設定：依頁面分類註解版。
// 所有原始 key 與文字值均保留；未更名、未刪除、未重譯。
// 修改方式：搜尋頁面檔名或 key；在 zh-Hant、en、ja 各語言中修改對應值。
// HTML 的 data-i18n、data-i18n-aria、body data-page 及程式都可能引用這些 key。
// HTML 更名不代表要更名 key：例如 cosmicJump 仍用於 cosmos-leap.html。
// 第18、19組是依已提供網站快照判斷的移除候選，無法確認你電腦上後續修改的所有引用。
// 此為 JavaScript 檔，可以使用 // 註解；不要當作純 JSON。
window.WORLD_CONTENT = {

  // ===== 繁體中文 =====
  "zh-Hant": {

    // 01｜全站共用：網站名稱、瀏覽器標題、搜尋描述、導覽與無障礙文字（各頁使用）
    "name": "原罪",
    "title": "原罪｜世界設定集",
    "description": "《原罪》原創世界設定集：世界概覽、科技與設定、人物、語言與地圖。",
    "skip": "跳至內容",
    "navLabel": "主要導覽",
    "language": "網站語言",
    "world": "世界概覽",
    "settings": "科技與設定",
    "characters": "人物介紹",
    "archive": "更多檔案",

    // 02｜首頁 index.html：首屏、世界概覽、科技區標語、人物區及更多檔案
    "heroLabel": "原創世界・設定集",
    "tagline": "靈魂曾是神聖。\n直到人類學會為它標價。",
    "enter": "走進這個世界",
    "heroCaption": "門的另一端，風暴正在醞釀。",
    "worldSub": "從靈魂的色彩開始。",
    "story1": "起初，世界被兩位創世神賦予了特殊的色彩：靈魂。",
    "story2": "人類曾以靈魂為神聖，讚美其色彩、敬畏其存在。",
    "story3": "但有人學會了捕獲靈魂。他們將靈魂從肉體剝離，製成商品；能看見一切本質的人卻被公開處刑。火焰過後一切歸零、消失，但這場處刑似乎為他們撬開了成神的大門。",
    "story4": "門的另一端，一場無聲的風暴正在悄然醞釀……",
    "settingsSub": "理解這個世界的規則。",
    "charactersSub": "每一個靈魂，都有自己的故事。",
    "characterNote": "點擊人物圖片或名字查看資料；全部人物可由人物列表查閱。",
    "archiveSub": "世界的輪廓，將在這裡逐步完整。",

    // 03｜更多檔案：首頁入口及各自標題／簡介；languages.html、map.html、inspiration.html
    "conlang": "語言系統",
    "conlangText": "預留世界內的文字、發音規則、詞彙與例句。",
    "map": "地圖",
    "mapText": "探索平行宇宙、連結與現實偏移量。",
    "inspiration": "靈感和素材",
    "inspirationText": "預留創作筆記、參考資料，以及素材作者與授權資訊。",
    "pending": "內容整理中",

    // 04｜全站共用：頁尾文字與返回連結（不要當成單一頁的文字刪除）
    "footer": "《原罪》設定集",
    "top": "回到頂部 ↑",
    "back": "返回首頁",
    "backCategory": "返回分類",
    "backCharacters": "返回人物列表",

    // 05｜首頁四分類入口與分類頁：soul-tech.html、cosmos-tech.html、glossary.html、organizations.html
    "soulTech": "靈魂相關技術",
    "soulTechText": "關於靈魂的捕獲、運用與相關技術。",
    "cosmosTech": "宇宙相關技術",
    "cosmosTechText": "宇宙相關技術與世界運作方式的設定。",
    "glossary": "專有名詞解釋",
    "glossaryText": "查閱這個世界的專有名詞與概念。",
    "organizations": "主要組織與計劃",
    "organizationsText": "了解主要組織，以及各項計劃的設定。",

    // 06｜共用預留頁／門按鈕／角色頁瀏覽器標題；有 HTML 或程式引用
    "detailPending": "此頁已預留，正式設定將於之後補充。",
    "doorLabel": "打開門",
    "characterProfile": "角色頁面",

    // 07｜分類列表及對應詳細頁的標題（key 沿用舊名，不等於 HTML 檔名）
    // runicCorridor→runic-cloister.html；cosmicJump→cosmos-leap.html；soulColor→chroma.html
    // newHorizons→project-new-horizons.html；searchProject→project-search.html
    "newEntry": "（新頁面）",
    "runicCloister": "符文迴廊",
    "cosmosLeap": "宇宙跳躍",
    "soul": "靈魂",
    "chroma": "靈魂色彩",
    "projectNewHorizons": "《新視野》計劃",
    "projectSEARCH": "《尋》計劃",
    "stakloFamily": "斯塔庫洛家族",

    // 08｜靈魂 soul.html：定義段落
    "soulDefinition1": "一種可被觀測、操作的信息和能量複合體。",
    "soulDefinition2": "靈魂擁有獨一無二的「色彩」（情感與人格的顯化）與「頻率」（與出身宇宙的連結）。",
    "soulDefinition3": "是本世界觀一切科技、魔法與衝突的基石。",

    // 09｜靈魂色彩 chroma.html：說明、能力分類及人物連結顯示文字
    "soulColorDefinition": "情感、記憶與靈魂本質的可視化或可感知表現。",
    "soulColorNote": "一般人無法感知，或只能微弱地感知，弱到幾乎無法察覺。",
    "soulColorGiftIntro": "故事中有兩人擁有此能力：",
    "abilityPerception": "感知",
    "abilityVisualization": "視化",
    "characterShioka": "南雲汐禾",
    "characterKali": "卡莉・菲利奇塔",

    // 10｜宇宙跳躍 cosmos-leap.html：原理、成功率、裝置、成本與物理規則
    "jumpIntro": "一種來往平行宇宙的技術。",
    "jumpProcess": "啟動後，個體會被人為分解為粒子，系統記錄其狀態，再於指定座標重組。適用宇宙包括但不限於【零號宇宙】和【404號宇宙】；個體重組後保留一切記憶。",
    "jumpRiskTitle": "成功率與風險",
    "jumpRisk": "目前成功率只有70%；有30%的機會因粒子無法重組而死亡。",
    "jumpDeviceTitle": "傳送裝置",
    "jumpDevice": "相關人員會隨身攜帶小型傳送裝置，按下後即可抵達指定座標；通常設置為斯塔庫洛家族內部的實驗樓。",
    "jumpCostTitle": "使用限制",
    "jumpCost": "經過數十年發展，宇宙跳躍的成本依然高昂，只有斯塔庫洛家族或其指定成員能使用。",
    "jumpPhysicsTitle": "宇宙差異",
    "jumpPhysics": "每個宇宙的物理規則或有不同。",

    // 11｜宇宙跳躍 cosmos-leap.html：現實偏移量與「具體計算方法」折疊列表
    "deltaTitle": "現實偏移量（Δ）",
    "deltaText": "以零號宇宙為基礎，量化平行宇宙之間差異程度的指標，閾值為0–10。Δ值越高，跳躍風險越大。",
    "delta404": "404號宇宙的Δ值為7.84，屬高危範圍（風險 >70%）。",
    "deltaFormula": "具體計算方法",
    "deltaFormulaPending": "詳細計算方法待補充。",

    // 12｜宇宙跳躍 cosmos-leap.html：灰域／灰域效應
    "greyZoneTitle": "灰域與灰域效應",
    "greyZoneText": "以星球「阿利德-849C」為中心、直徑十萬公里的周邊空間被稱為「灰域」，並受「灰域效應」影響。",
    "greyZoneNote": "「灰域效應」指阿利德-849C周邊的信息剝奪場，能吸收並瓦解一切探測信息。探測器的邏輯迴路會因過載而燒毀。",

    // 13｜《尋》計劃 project-search.html：正文
    "searchProjectBody": "斯塔庫洛家族投入最多時間與金錢的最高機密項目。目的是追獵「零號實驗體」卡莉・菲利奇塔的靈魂，並掌握可能與其相關的神級力量。",

    // 14｜《新視野》計劃 project-new-horizons.html：正文
    "newHorizonsBody": "為了掩蓋《尋》計劃而衍生的計劃。",

    // 15｜斯塔庫洛家族 staklo-family.html：專案與權限；與計劃頁文字相似但分開引用
    "familyProjectTitle": "家族機密項目",
    "familyProjectBody": "斯塔庫洛家族投入最多時間與金錢的最高機密項目是《尋》計劃。其目的是追獵「零號實驗體」卡莉・菲利奇塔的靈魂，並掌握可能與其相關的神級力量。",
    "familyAccessTitle": "宇宙跳躍權限",
    "familyAccessBody": "宇宙跳躍成本高昂，只有斯塔庫洛家族或其指定成員能使用。相關人員通常將指定座標設置為家族內部的實驗樓。",

    // 16｜宇宙結構圖 map.html：瀏覽器頁面標題
    // 圖內按鈕、側欄等三語文字另外位於 assets/universe-map.js 的 copy 物件
    "universeMapTitle": "宇宙結構圖",

    // 17｜404號宇宙 universe-404.html：你新增的三語頁面模板，請保留
    // 若你尚未建立 HTML，此處資料暫時不會顯示；要有對應 data-i18n 才會套用
    "u404Back": "← 返回宇宙結構圖",
    "u404Title": "404號宇宙",
    "u404OverviewTitle": "宇宙概覽",
    "u404OverviewText": "在這裡填寫宇宙的介紹。",
    "u404OverviewExtra": "在這裡填寫補充說明。",
    "u404InfoTitle": "基本資訊",
    "u404Delta": "現實偏移量：Δ 7.84",
    "u404Status": "資料狀態：高危宇宙",
    "u404PlacesTitle": "地區與地點",
    "u404PlanetName": "阿利德-849C",
    "u404PlacesNote": "地點詳細設定待補充。",
    "u404NotesTitle": "探索筆記",
    "u404Note1": "第一項筆記待補充。",
    "u404Note2": "第二項筆記待補充。",
    "u404RelatedTitle": "相關設定",
    "u404LeapLink": "宇宙跳躍 →",

    // 18｜Credits頁面 zzz-credits.html
    "creditsTitle": "製作名單與素材來源",
    "creditsCreation": "世界觀與角色創作",
    "creditsArt": "角色繪圖與圖片",
    "creditsArtPending": "圖片作者及來源待補充。",
    "creditsMusic": "音樂",
    "creditsMusicPending": "曲名、作曲者及音源來源待補充。",
    "creditsResources": "其他素材與工具",
    "creditsResourcesPending": "素材名稱、作者及授權資訊待補充。",

      //關於我
      "aboutMe1": "關於我",
      "aboutMe2": "你好，我是赤羽みかや（Mika / 咪卡 / 米卡），是《原罪》的創作者。香港人，目前是大學生。",
      "aboutMe3": "我的興趣是音樂，我會用作曲說出無法用言語表達的話。",
      "aboutMe4": "",

      //音樂
      "usedMusic": "音樂",
      "c01ThemeSong": "《いのち》 - 赤羽みかや",
      "c02ThemeSong": "",
      "c03ThemeSong": "《まもり》 - 赤羽みかや",
      "c04ThemeSong": "",
      "c05ThemeSong": "",
      "c06ThemeSong": "",
      "c07ThemeSong": "",
      "c08ThemeSong": "",
      "c08ThemeSong": "",
      "c09ThemeSong": "",
      "c10ThemeSong": "",
      "c11ThemeSong": "",
      "c12ThemeSong": "",

      "gardenBGM": "《彩る世界》 - 赤羽みかや",

    //待確認可移除：舊版首頁科技三項，已由四分類取代
    // 僅在整個專案沒有引用這些 key 時，才能同步刪除三語版本
    "soulText": "兩位創世神賦予世界的特殊色彩，曾被人類視為神聖。",
    "capture": "靈魂捕獲",
    "captureText": "人類學會將靈魂從肉體剝離，並製成商品。技術細節與限制待補充。",

    //待確認可移除：舊人物佔位模板、舊角色能力摘要
    // 不要刪除 app.js 的 characterName()/characterLabel() 函式；這裡只是同名的翻譯 key
    // characterProfile（角色頁標題）仍在第06組，必須保留
    "characterLabel": "人物佔位",
    "characterName": "人物名稱待補",
    "characterText": "日後可加入種族、所屬勢力、背景與人物圖片。",
    "profilePending": "角色名稱、圖片與詳細設定待補充。",
    "profileFields": "種族／所屬勢力／背景／人物關係",
    "characterShiokaAbility": "靈魂色彩能力：感知",
    "characterKaliAbility": "靈魂色彩能力：視化",
    "characterMorePending": "其他角色設定待補充。"
  },

  // ===== English／英文 =====
  "en": {

    // 01｜全站共用：網站名稱、瀏覽器標題、搜尋描述、導覽與無障礙文字（各頁使用）
    "name": "Ananke",
    "title": "Ananke | World Archive",
    "description": "An original world archive: lore, technology, characters, languages and maps.",
    "skip": "Skip to content",
    "navLabel": "Main navigation",
    "language": "Site language",
    "world": "World",
    "settings": "Technology & Lore",
    "characters": "Characters",
    "archive": "Archive",

    // 02｜首頁 index.html：首屏、世界概覽、科技區標語、人物區及更多檔案
    "heroLabel": "AN ORIGINAL WORLD · WORLD ARCHIVE",
    "tagline": "Souls were once sacred.\nThen humanity learned to put a price on them.",
    "enter": "Enter the world",
    "heroCaption": "Beyond the door, a storm is gathering.",
    "worldSub": "It begins with the colors of souls.",
    "story1": "In the beginning, two creator gods bestowed a special kind of color upon the world: souls.",
    "story2": "Humanity once held souls sacred, praising their colors and standing in awe of their existence.",
    "story3": "But some learned to capture souls. They stripped them from bodies and turned them into merchandise; those who could see the essence of all things were publicly executed. After the flames, everything vanished, reduced to nothing. Yet this execution seemed to have pried open a door to godhood for them.",
    "story4": "Beyond the door, a silent storm is quietly gathering…",
    "settingsSub": "Discover the rules of this world.",
    "charactersSub": "Every soul has a story.",
    "characterNote": "Select a portrait or name to view the profile; find the full cast in the character directory.",
    "archiveSub": "The world will gradually take shape here.",

    // 03｜更多檔案：首頁入口及各自標題／簡介；languages.html、map.html、inspiration.html
    "conlang": "Languages",
    "conlangText": "Space for in-world writing systems, pronunciation rules, vocabulary and examples.",
    "map": "Map",
    "mapText": "Explore parallel universes, their connections, and Reality Deviation.",
    "inspiration": "Inspiration & Resources",
    "inspirationText": "Space for creative notes, references, asset credits and licensing information.",
    "pending": "In preparation",

    // 04｜全站共用：頁尾文字與返回連結（不要當成單一頁的文字刪除）
    "footer": "《原罪》設定集",
    "top": "Back to top ↑",
    "back": "Back to home",
    "backCategory": "Back to category",
    "backCharacters": "Back to characters",

    // 05｜首頁四分類入口與分類頁：soul-tech.html、cosmos-tech.html、glossary.html、organizations.html
    "soulTech": "Soul-related Technology",
    "soulTechText": "Soul capture, applications and related technologies.",
    "cosmosTech": "Cosmic Technology",
    "cosmosTechText": "Technologies connected to the cosmos and how the world works.",
    "glossary": "Glossary",
    "glossaryText": "Explore the terms and concepts of this world.",
    "organizations": "Major Organizations & Projects",
    "organizationsText": "Explore major organizations and their projects.",

    // 06｜共用預留頁／門按鈕／角色頁瀏覽器標題；有 HTML 或程式引用
    "detailPending": "This page is ready for the official lore to be added later.",
    "doorLabel": "Open the door",
    "characterProfile": "Character profile",

    // 07｜分類列表及對應詳細頁的標題（key 沿用舊名，不等於 HTML 檔名）
    // runicCorridor→runic-cloister.html；cosmicJump→cosmos-leap.html；soulColor→chroma.html
    // newHorizons→project-new-horizons.html；searchProject→project-search.html
    "newEntry": "(New page)",
    "runicCloister": "Runic Cloister",
    "cosmosLeap": "Cosmos Leap",
    "soul": "Soul",
    "chroma": "Chrroma",
    "projectNewHorizons": 'Project "New Horizons"',
    "projectSEARCH": "Project SEARCH",
    "stakloFamily": "Staklo Family",

    // 08｜靈魂 soul.html：定義段落
    "soulDefinition1": "A composite of information and energy that can be observed and manipulated.",
    "soulDefinition2": "Every soul has a unique “color” (the manifestation of emotion and personality) and “frequency” (its connection to the universe of origin).",
    "soulDefinition3": "It is the foundation of all technology, magic, and conflict in this world.",

    // 09｜靈魂色彩 chroma.html：說明、能力分類及人物連結顯示文字
    "soulColorDefinition": "The visualized or perceptible expression of emotion, memory, and the essence of a soul.",
    "soulColorNote": "Most people cannot perceive it, or can perceive it only so faintly that it is almost unnoticeable.",
    "soulColorGiftIntro": "Two people in the story possess this ability:",
    "abilityPerception": "Perception",
    "abilityVisualization": "Visualization",
    "characterShioka": "Shioka Nagumo",
    "characterKali": "卡莉・菲利奇塔",

    // 10｜宇宙跳躍 cosmos-leap.html：原理、成功率、裝置、成本與物理規則
    "jumpIntro": "A technology for traveling between parallel universes.",
    "jumpProcess": "Once activated, an individual is artificially disassembled into particles. Their state is recorded, and they are reassembled at designated coordinates. Destinations include, but are not limited to, [Universe Zero] and [Universe 404]. The individual retains all memories after reassembly.",
    "jumpRiskTitle": "Success rate and risk",
    "jumpRisk": "The current success rate is only 70%; there is a 30% chance of death if the particles cannot be reassembled.",
    "jumpDeviceTitle": "Portable transfer device",
    "jumpDevice": "Personnel carry a small transfer device. Pressing it transports them to designated coordinates, usually the Staklo Family’s internal laboratory building.",
    "jumpCostTitle": "Access restrictions",
    "jumpCost": "Even after decades of development, Cosmos Leap remains expensive. Only the Staklo Family or its designated members may use it.",
    "jumpPhysicsTitle": "Differences between universes",
    "jumpPhysics": "The laws of physics may differ from one universe to another.",

    // 11｜宇宙跳躍 cosmos-leap.html：現實偏移量與「具體計算方法」折疊列表
    "deltaTitle": "Reality Deviation (Δ)",
    "deltaText": "A measure of the degree of difference between parallel universes, using Universe Zero as the baseline. Its scale ranges from 0 to 10. The higher the Δ value, the greater the risk of a leap.",
    "delta404": "Universe 404 has a Δ value of 7.84, placing it in the high-risk range (risk >70%).",
    "deltaFormula": "Specific calculation method",
    "deltaFormulaPending": "Detailed calculation method to be added.",

    // 12｜宇宙跳躍 cosmos-leap.html：灰域／灰域效應
    "greyZoneTitle": "The Grey Zone and the Grey Zone Effect",
    "greyZoneText": "The 100,000-kilometer-diameter region of space surrounding the planet “Arid-849C” is called the Grey Zone and is affected by the Grey Zone Effect.",
    "greyZoneNote": "The “Grey Zone Effect” is an information-denial field surrounding Arid-849C. It absorbs and breaks down all probe data. Probe logic circuits burn out from overload.",

    // 13｜《尋》計劃 project-search.html：正文
    "searchProjectBody": "The Staklo Family’s most classified project, and the one into which it has invested the most time and money. Its goal is to hunt down the soul of Kali Felicita, “Experiment Zero,” and gain control of the godlike power that may be connected to her.",

    // 14｜《新視野》計劃 project-new-horizons.html：正文
    "newHorizonsBody": "A project created to conceal Project SEARCH.",

    // 15｜斯塔庫洛家族 staklo-family.html：專案與權限；與計劃頁文字相似但分開引用
    "familyProjectTitle": "Classified family project",
    "familyProjectBody": "The project into which the Staklo Family has invested the most time and money is Project SEARCH, its most classified undertaking. Its goal is to hunt down the soul of Kali Felicita, “Experiment Zero,” and gain control of the godlike power that may be connected to her.",
    "familyAccessTitle": "Cosmos Leap access",
    "familyAccessBody": "Cosmos Leap remains expensive, so only the Staklo Family or its designated members may use it. Personnel usually set their destination to the family’s internal laboratory building.",

    // 16｜宇宙結構圖 map.html：瀏覽器頁面標題
    // 圖內按鈕、側欄等三語文字另外位於 assets/universe-map.js 的 copy 物件
    "universeMapTitle": "Cosmic Atlas",

    // 17｜404號宇宙 universe-404.html：你新增的三語頁面模板，請保留
    // 若你尚未建立 HTML，此處資料暫時不會顯示；要有對應 data-i18n 才會套用
    "u404Back": "← Back to the cosmic atlas",
    "u404Title": "Universe 404",
    "u404OverviewTitle": "Overview",
    "u404OverviewText": "Add an introduction to this universe here.",
    "u404OverviewExtra": "Add further information here.",
    "u404InfoTitle": "Basic information",
    "u404Delta": "Reality Deviation: Δ 7.84",
    "u404Status": "Record status: High-risk universe",
    "u404PlacesTitle": "Regions and locations",
    "u404PlanetName": "阿利德-849C",
    "u404PlacesNote": "Location details are to be added.",
    "u404NotesTitle": "Exploration notes",
    "u404Note1": "The first note is to be added.",
    "u404Note2": "The second note is to be added.",
    "u404RelatedTitle": "Related entries",
    "u404LeapLink": "Cosmos Leap →",

    // 18｜Credits頁面 zzz-credits.html
    "creditsTitle": "製作名單與素材來源",
    "creditsCreation": "世界觀與角色創作",
    "creditsArt": "角色繪圖與圖片",
    "creditsArtPending": "圖片作者及來源待補充。",
    "creditsMusic": "音樂",
    "creditsMusicPending": "曲名、作曲者及音源來源待補充。",
    "creditsResources": "其他素材與工具",
    "creditsResourcesPending": "素材名稱、作者及授權資訊待補充。",
          
      // 自我介紹
      "aboutMe1": "About Me",
      "aboutMe2": "I am Akabane Mikaya (also known as Mika), the creator of Ananke.",
      "aboutMe3": "123",

      //音樂
      "usedMusic": "Music",
      "c01ThemeSong": "《いのち》 - 赤羽みかや",
      "c02ThemeSong": "",
      "c03ThemeSong": "《まもり》 - 赤羽みかや",
      "c04ThemeSong": "",
      "c05ThemeSong": "",
      "c06ThemeSong": "",
      "c07ThemeSong": "",
      "c08ThemeSong": "",
      "c08ThemeSong": "",
      "c09ThemeSong": "",
      "c10ThemeSong": "",
      "c11ThemeSong": "",
      "c12ThemeSong": "",

      "gardenBGM": "《彩る世界》 - 赤羽みかや",

    // 待確認可移除：舊版首頁科技三項，已由四分類取代
    // 僅在整個專案沒有引用這些 key 時，才能同步刪除三語版本
    "soulText": "The special colors bestowed upon the world by two creator gods, once held sacred by humanity.",
    "capture": "Soul capture",
    "captureText": "Humanity learned to strip souls from bodies and turn them into merchandise. Technical details and limitations are yet to be added.",

    // 待確認可移除：舊人物佔位模板、舊角色能力摘要
    // 不要刪除 app.js 的 characterName()/characterLabel() 函式；這裡只是同名的翻譯 key
    // characterProfile（角色頁標題）仍在第06組，必須保留
    "characterLabel": "CHARACTER PLACEHOLDER",
    "characterName": "Name to be added",
    "characterText": "Add species, affiliation, background and character art here.",
    "profilePending": "Name, artwork and detailed character information will be added later.",
    "profileFields": "Species / Affiliation / Background / Relationships",
    "characterShiokaAbility": "Soul Chroma ability: Perception",
    "characterKaliAbility": "Soul Chroma ability: Visualization",
    "characterMorePending": "Further character details will be added later."
  },

  // ===== 日本語／日文 =====
  "ja": {

    // 01｜全站共用：網站名稱、瀏覽器標題、搜尋描述、導覽與無障礙文字（各頁使用）
    "name": "原罪",
    "title": "原罪｜世界設定集",
    "description": "創作世界『原罪』の設定集。世界概要、技術と設定、登場人物、言語、地図。",
    "skip": "本文へ移動",
    "navLabel": "メインナビゲーション",
    "language": "表示言語",
    "world": "世界概要",
    "settings": "技術と設定",
    "characters": "登場人物",
    "archive": "その他の記録",

    // 02｜首頁 index.html：首屏、世界概覽、科技區標語、人物區及更多檔案
    "heroLabel": "創作世界・設定集",
    "tagline": "魂は、かつて神聖だった。\n人間が、それに値を付けるまでは。",
    "enter": "この世界へ",
    "heroCaption": "扉の向こうで、嵐が生まれようとしている。",
    "worldSub": "魂の色彩から、すべては始まる。",
    "story1": "はじめに、二柱の創世神は世界に特別な色彩を与えた。それが、魂だった。",
    "story2": "人間はかつて魂を神聖なものとし、その色彩を讃え、その存在を畏れていた。",
    "story3": "しかし、魂を捕らえる術を覚えた者たちがいた。彼らは魂を肉体から引き剥がし、商品に変えた。一方、あらゆるものの本質を見通せる者は公開処刑された。炎の後、すべては無に帰し、消え去った。しかし、その処刑は彼らにとって、神へと至る扉をこじ開けたかのようだった。",
    "story4": "扉の向こうでは、音のない嵐がひそかに生まれようとしていた……",
    "settingsSub": "この世界の仕組みを知る。",
    "charactersSub": "すべての魂に、それぞれの物語がある。",
    "characterNote": "画像や名前から人物情報を確認できます。すべての人物は一覧をご覧ください。",
    "archiveSub": "ここから、世界の輪郭が少しずつ形になる。",

    // 03｜更多檔案：首頁入口及各自標題／簡介；languages.html、map.html、inspiration.html
    "conlang": "言語体系",
    "conlangText": "作中の文字、発音規則、語彙、例文を掲載する予定です。",
    "map": "地図",
    "mapText": "平行宇宙のつながりと現実偏移量を探索する。",
    "inspiration": "着想と資料",
    "inspirationText": "創作メモ、参考資料、素材の制作者と利用条件を掲載する予定です。",
    "pending": "準備中",

    // 04｜全站共用：頁尾文字與返回連結（不要當成單一頁的文字刪除）
    "footer": "《原罪》設定集",
    "top": "ページ上部へ ↑",
    "back": "ホームへ戻る",
    "backCategory": "分類へ戻る",
    "backCharacters": "人物一覧へ戻る",

    // 05｜首頁四分類入口與分類頁：soul-tech.html、cosmos-tech.html、glossary.html、organizations.html
    "soulTech": "魂に関する技術",
    "soulTechText": "魂の捕獲・利用と、それに関わる技術。",
    "cosmosTech": "宇宙に関する技術",
    "cosmosTechText": "宇宙に関わる技術と世界の仕組み。",
    "glossary": "用語解説",
    "glossaryText": "この世界の専門用語や概念を調べる。",
    "organizations": "主要組織と計画",
    "organizationsText": "主要な組織と、それぞれの計画について。",

    // 06｜共用預留頁／門按鈕／角色頁瀏覽器標題；有 HTML 或程式引用
    "detailPending": "正式な設定は、後日このページに追加されます。",
    "doorLabel": "扉を開く",
    "characterProfile": "人物詳細",

    // 07｜分類列表及對應詳細頁的標題（key 沿用舊名，不等於 HTML 檔名）
    // runicCorridor→runic-cloister.html；cosmicJump→cosmos-leap.html；soulColor→chroma.html
    // newHorizons→project-new-horizons.html；searchProject→project-search.html
    "newEntry": "（新規ページ）",
    "runicCloister": "符文迴廊", 
    "cosmosLeap": "跳躍", //ok
    "soul": "魂",
    "chroma": "魂の色彩",
    "projectNewHorizons": "《新視野》プロジェクト",
    "projectSEARCH": "《尋》プロジェクト",
    "stakloFamily": "スタークロ家族",

    // 08｜靈魂 soul.html：定義段落
    "soulDefinition1": "観測・操作が可能な、情報とエネルギーの複合体。",
    "soulDefinition2": "魂はそれぞれ固有の「色彩」（感情と人格の顕現）と「周波数」（出身宇宙とのつながり）を持つ。",
    "soulDefinition3": "この世界におけるあらゆる技術、魔法、そして争いの基盤である。",

    // 09｜靈魂色彩 chroma.html：說明、能力分類及人物連結顯示文字
    "soulColorDefinition": "感情、記憶、魂の本質が可視化または知覚可能な形で現れたもの。",
    "soulColorNote": "一般の人々には知覚できないか、知覚できてもほとんど気づけないほど微弱である。",
    "soulColorGiftIntro": "物語の中で、この能力を持つ人物は二人いる。",
    "abilityPerception": "知覚",
    "abilityVisualization": "視化",
    "characterShioka": "南雲汐禾",
    "characterKali": "卡莉・菲利奇塔",

    // 10｜宇宙跳躍 cosmos-leap.html：原理、成功率、裝置、成本與物理規則
    "jumpIntro": "平行宇宙間を行き来するための技術。",
    "jumpProcess": "起動すると、対象は人為的に粒子へと分解され、その状態が記録された後、指定座標で再構成される。対象には【零号宇宙】や【404号宇宙】などが含まれるが、これらに限らない。再構成後も、個体はすべての記憶を保つ。",
    "jumpRiskTitle": "成功率とリスク",
    "jumpRisk": "現在の成功率はわずか70％であり、粒子を再構成できず死亡する確率が30％ある。",
    "jumpDeviceTitle": "携帯型転送装置",
    "jumpDevice": "関係者は小型の転送装置を携帯する。ボタンを押すと指定座標へ移動でき、通常はスタークロ家族の内部実験棟が目的地に設定されている。",
    "jumpCostTitle": "利用制限",
    "jumpCost": "数十年にわたり開発が進められてきたが、宇宙跳躍のコストは依然として高い。利用できるのはスタークロ家族、またはその指定メンバーのみ。",
    "jumpPhysicsTitle": "宇宙ごとの違い",
    "jumpPhysics": "宇宙ごとに物理法則が異なる場合がある。",

    // 11｜宇宙跳躍 cosmos-leap.html：現實偏移量與「具體計算方法」折疊列表
    "deltaTitle": "現実偏移量（Δ）",
    "deltaText": "零号宇宙を基準に、平行宇宙間の差異の程度を数値化する指標。閾値は0～10で、Δ値が高いほど跳躍のリスクも高くなる。",
    "delta404": "404号宇宙のΔ値は7.84で、高危険域に属する（リスク >70％）。",
    "deltaFormula": "具体的な計算方法",
    "deltaFormulaPending": "詳細な計算方法は今後追加予定。",

    // 12｜宇宙跳躍 cosmos-leap.html：灰域／灰域效應
    "greyZoneTitle": "灰域と灰域効果",
    "greyZoneText": "惑星「アリデ-849C」を取り囲む直径10万キロメートルの空間は「灰域」と呼ばれ、「灰域効果」の影響を受ける。",
    "greyZoneNote": "「灰域効果」とは、アリデ-849C周辺に存在する情報剝奪フィールドを指す。あらゆる探査情報を吸収・分解し、探査機の論理回路は過負荷で焼損する。",

    // 13｜《尋》計劃 project-search.html：正文
    "searchProjectBody": "スタークロ家族が最も多くの時間と資金を投じる、最高機密の計画。目的は「零号実験体」卡莉・菲利奇塔の魂を追跡し、彼女に関係する可能性のある神級の力を掌握すること。",

    // 14｜《新視野》計劃 project-new-horizons.html：正文
    "newHorizonsBody": "《尋》計劃を隠蔽するために派生した計画。",

    // 15｜斯塔庫洛家族 staklo-family.html：專案與權限；與計劃頁文字相似但分開引用
    "familyProjectTitle": "家族の最高機密計画",
    "familyProjectBody": "スタークロ家族が最も多くの時間と資金を投じる最高機密計画は《尋》計劃である。その目的は「零号実験体」卡莉・菲利奇塔の魂を追跡し、彼女に関係する可能性のある神級の力を掌握すること。",
    "familyAccessTitle": "宇宙跳躍の利用権限",
    "familyAccessBody": "宇宙跳躍は依然として高コストであり、利用できるのはスタークロ家族またはその指定メンバーのみ。関係者は通常、家族内部の実験棟を目的地に設定する。",

    // 16｜宇宙結構圖 map.html：瀏覽器頁面標題
    // 圖內按鈕、側欄等三語文字另外位於 assets/universe-map.js 的 copy 物件
    "universeMapTitle": "宇宙構造図",

    // 17｜404號宇宙 universe-404.html：你新增的三語頁面模板，請保留
    // 若你尚未建立 HTML，此處資料暫時不會顯示；要有對應 data-i18n 才會套用
    "u404Back": "← 宇宙構造図に戻る",
    "u404Title": "404号宇宙",
    "u404OverviewTitle": "宇宙の概要",
    "u404OverviewText": "ここに宇宙の紹介を入力してください。",
    "u404OverviewExtra": "ここに補足説明を入力してください。",
    "u404InfoTitle": "基本情報",
    "u404Delta": "現実偏移量：Δ 7.84",
    "u404Status": "データの状態：高危険宇宙",
    "u404PlacesTitle": "地域と場所",
    "u404PlanetName": "阿利德-849C",
    "u404PlacesNote": "場所の詳細設定は未記入です。",
    "u404NotesTitle": "探索記録",
    "u404Note1": "一つ目の記録は未記入です。",
    "u404Note2": "二つ目の記録は未記入です。",
    "u404RelatedTitle": "関連設定",
    "u404LeapLink": "宇宙跳躍 →",

    // 18｜Credits頁面 zzz-credits.html
    "creditsTitle": "製作名單與素材來源",
    "creditsCreation": "世界觀與角色創作",
    "creditsArt": "角色繪圖與圖片",
    "creditsArtPending": "圖片作者及來源待補充。",
    "creditsMusic": "音樂",
    "creditsMusicPending": "曲名、作曲者及音源來源待補充。",
    "creditsResources": "其他素材與工具",
    "creditsResourcesPending": "素材名稱、作者及授權資訊待補充。",

      // 自我介紹
      "aboutMe1": "作者について",
      "aboutMe2": "《原罪》の作者、赤羽みかや（みか）と申します。香港人の大学生です。",
      "aboutMe3": "興味は音楽です。言葉で言えない感情を音楽に入れています。",
      "aboutMe4": "",

      //音樂
      "usedMusic": "音楽",
      "c01ThemeSong": "《いのち》 - 赤羽みかや",
      "c02ThemeSong": "",
      "c03ThemeSong": "《まもり》 - 赤羽みかや",
      "c04ThemeSong": "",
      "c05ThemeSong": "",
      "c06ThemeSong": "",
      "c07ThemeSong": "",
      "c08ThemeSong": "",
      "c09ThemeSong": "",
      "c10ThemeSong": "",
      "c11ThemeSong": "",
      "c12ThemeSong": "",

      "gardenBGM": "《彩る世界》 - 赤羽みかや",


    // 待確認可移除：舊版首頁科技三項，已由四分類取代
    // 僅在整個專案沒有引用這些 key 時，才能同步刪除三語版本
    "soulText": "二柱の創世神が世界に与えた特別な色彩。かつて人間に神聖視されていた。",
    "capture": "魂の捕獲",
    "captureText": "人間は魂を肉体から引き剥がし、商品にする術を覚えた。技術の詳細と制限は今後追加予定。",
  
  }
};
