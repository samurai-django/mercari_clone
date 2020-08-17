import React from 'react';
import './App.css'

import Header from "./Components/Header";
import MainImage from "./Components/MainImage";
import Category from "./Components/Category";
import Items from "./Components/Items";
import Camera from "./Components/Camera";

function App() {
  return (
    <div className="app">
        <div className="app_h1">
            <h1>メルカリクローン React + Django Rest Framework</h1>
        </div>
        {/*    Header   */}
        <Header />

        {/*    Header + img   */}
        <MainImage />
        <Category
        category_name="人気のカテゴリー"
        category1="レディース"
        category2="メンズ"
        category3="家電・スマホ・カメラ"
        category4="おもちゃ・ホビー・グッズ"
        />

        {/*    items   */}
        <Items
            item__title1="レディース新着アイテム"
            item__title="メンズ新着アイテム"

        />
        <Category
        category_name="人気のブランド"
        category1="シャネル"
        category2="ルイヴィトン"
        category3="シュプリーム"
        category4="ナイキ"
        />
        <Items
            item__title1="シャネル"
            item__title2="ルイヴィトン"
        />
        <Camera />

        {/*    Footer   */}



    </div>
  );
}

export default App;
