const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 設定 EJS 為模板引擎
app.set('view engine', 'ejs');
// 使用 path.join 確保路徑在任何環境下都正確
app.set('views', path.join(__dirname, 'views'));

app.listen(port, '0.0.0.0', () => {
    console.log(`伺服器運作中，監聽埠號：${port}`);
});

app.get('/hero', (req, res) => {
    // 1. 準備英雄資料
    const heroes = [
        { name: '劉備', title: '漢昭烈帝', skill: '仁德' },
        { name: '關羽', title: '美髯公', skill: '千里獨行' },
        { name: '張飛', title: '萬夫莫敵', skill: '咆哮' },
        { name: '趙雲', title: '常山趙子龍', skill: '一身是膽' },
        { name: '諸葛亮', title: '臥龍', skill: '神機妙算' }
    ];

    // 2. 渲染 hero.ejs
    // 這裡的 Key 必須對應 hero.ejs 裡的變數名：pageTitle, heroList, studentId
    res.render('hero', { 
        pageTitle: '三國英雄榜',        // 修正：新增 pageTitle
        heroList: heroes,             // 修正：將 heroes 改名為 heroList 以對應模板
        studentId: '23116162'          // 請記得修改為真實學號S
    });
});

app.listen(port, () => {
    console.log(`伺服器運作中：http://localhost:${port}/hero`);
});