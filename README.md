# Node.js-NKUST-Line-Bot

---

![](https://i.imgur.com/1lVlW6v.png)

NKUST LINE Bot 是基於 LINE Messaging API 進行開發的 LINE Bot，透過該服務整合了學校的校務系統資訊，提供高科大的學生可以在 LINE 上直接查詢自己的課表、學期成績、出缺席紀錄與校園資訊等，免去需要下載 App 或是登入手機難以操作的校務系統網頁，即可快速查詢。

## 功能

- 📅 個人課表：查詢使用者過去所有的課表紀錄。
- 💯 成績查詢：查詢使用者過去所有的成績紀錄。
- ☑️ 缺曠紀錄：查詢使用者過去所有的出缺席紀錄。
- ⚠️ 期中預警：查詢使用者當學期的期中預警紀錄。
- 🏫 校園資訊：查詢學校最新的活動消息、行政公告、徵才資訊等。
- 📦 其他功能：查詢學校各處室的電話與使用者帳號登出。

## Demo

新增為 LINE 好友: [https://line.me/R/ti/p/@642fwkuy](https://line.me/R/ti/p/@642fwkuy)

QR Code:

![](https://i.imgur.com/hKcSWPP.png)

[<img src="https://i.imgur.com/YRRYfvA.png">](https://www.youtube.com/watch?v=UagSyzDjjzY)

## 專案目錄

```
.
├── crawler
|   ├── personalData.js       # 爬取學生個人資料
|   └── schoolData.js         # 爬取校園資訊資料
├── libs
|   ├── messageTemplate.js    # Flex Message 訊息樣板
|   ├── mongodb.js            # Mongo DB 連線處理
|   ├── userData.js           # User 資料的新增移除處理
|   └── profileData.js        # Profile 資料新增的處理
├── schema
|   ├── profile
|   |   └── Profile.js        # Mongo DB Profile Collection Schema
|   └── user
|       └── User.js           # Mongo DB User Collection Schema
|
├── package-lock.json           # NPM 套件版本
├── package.json                # NPM 套件版本
├── app.js                      # 主程式
└── README.md                   # 說明文件
```

## 開發

### 下載

```Shell
$ git clone git@github.com:stu01509/Node.js-NKUST-Line-Bot.git
$ cd Node.js-NKUST-Line-Bot
$ npm install

```

### 環境變數設定

請在當前目錄下新增一個 **.env** 檔案，內容可以照這 **.env.example** 進行修改。

```
channelId = YOUR_CHANNEL_ID                     # LINE CHANNEL ID
channelSecret = YOUR_CHANNEL_SECRET             # LINE CHANNEL SECRET
channelAccessToken = YOUR_CHANNEL_ACCESS_TOKEN  # LINE CHANNEL ACCESS TOKEN
PORT = SERVER_LISTEN_PORT                       # Server 監聽埠號
DB_SSL = USE_SSL_PROTOCOL_TO_CONNECT_DB         # MongoDB 是否使用 SSL 連線 true/false
DB_PATH = DB_ADDRESS                            # MongoDB 連線位置
SECRET = YOUR_ENCRYPT_KEY                       # 使用者資訊加密密鑰

```

### 啟動

啟動

```Shell
$ npm run start
```

開發
```Shell
$ npm run dev
```