const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 設定 EJS 為模板引擎
app.set('view engine', 'ejs');
// 設定 views 資料夾的路徑
app.set('views', path.join(__dirname, 'views'));

// 路由設定：造訪 /hero 時觸發
app.get('/hero', (req, res) => {
    // 1. 準備三國英雄資料陣列
    const heroes = [
        { name: '劉備', title: '漢昭烈帝', skill: '仁德' },
        { name: '關羽', title: '美髯公', skill: '千里獨行' },
        { name: '張飛', title: '萬夫莫敵', skill: '咆哮' },
        { name: '趙雲', title: '常山趙子龍', skill: '一身是膽' },
        { name: '諸葛亮', title: '臥龍', skill: '神機妙算' }
    ];

    // 2. 渲染 hero.ejs 模板
    // 傳入英雄資料與學號
    res.render('hero', {
        pageTitle: '三國英雄榜',
        heroList: heroes,
        studentId: '23116162' // 💡 請務必修改此處
    });
});

// 啟動伺服器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/hero`);
});