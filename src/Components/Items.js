import React from "react";
import './Items.css'
import ItemComponents from "./ItemComponents";

function Items({ item__title1, item__title2 }){
    return (
        <div className="arrange__items">
            <div className="recommended__title">
                <h2>{ item__title1 }</h2>
            </div>

            <div className="display__items">
                <ItemComponents
                    className="item__position"
                    title="夏物一掃セール!新品!"
                    price="1500"
                    img="https://static.mercdn.net/item/detail/orig/photos/m94141564814_1.jpg?1591405422" />
                <ItemComponents
                    title="鬼滅の刃 ミニ ショルダーバッグ ポシェット"
                    price="1920"
                    img="https://static.mercdn.net/item/detail/orig/photos/m70038816275_1.jpg?1597437081" />
                <ItemComponents
                    title="タイの100%シルクスカーフ、ストール"
                    price="1400"
                    img="https://static.mercdn.net/item/detail/orig/photos/m31404424200_1.jpg?1596009834" />
                <ItemComponents
                    title="レディース水玉柄ワイドパンツカバー薄手レディース夏ボトムパンツスカート通勤"
                    price="9800"
                    img="https://static.mercdn.net/item/detail/orig/photos/m81075835034_1.jpg?1597204789" />
                <ItemComponents
                    title="ジェーン主義 ラウンドネック シワ ゆとり 純色 チョッキ ワンピース"
                    price="4308"
                    img="https://static.mercdn.net/item/detail/orig/photos/m72600146009_1.jpg?1592296366" />

                <ItemComponents
                    title="ダメージデニム スキニー"
                    price="3900"
                    img="https://static.mercdn.net/item/detail/orig/photos/m84656174151_1.jpg?1597665230" />

                <ItemComponents
                    title="レディース ドレス 通勤 韓国風 長袖 可愛い ブラック ワンピース"
                    price="7500"
                    img="https://static.mercdn.net/item/detail/orig/photos/m88060218789_1.jpg?1596188245" />

                <ItemComponents
                    title="FGO絶対魔獣戦線バビロニア ローソンコラボトートバッグ"
                    price="1200"
                    img="https://static.mercdn.net/item/detail/orig/photos/m75846601981_1.jpg?1582790591" />
            </div>
            <div className="recommended__title">
                <h2>{ item__title2 }</h2>
            </div>

            <div className="display__items">
                <ItemComponents
                    className="item__position"
                    title="新品 送料込み☆大人用ネオンカラー カモフラージュベースボールキャップ★"
                    price="1590"
                    img="https://static.mercdn.net/item/detail/orig/photos/m55058527951_1.jpg?1595907244" />
                <ItemComponents
                    title="☆今だけ限定500円☆ Tシャツ"
                    price="500"
                    img="https://static.mercdn.net/item/detail/orig/photos/m63694004239_1.jpg?1596534067" />
                <ItemComponents
                    title="KIIT キート ストライプ サイドスリッド オーバー ポケット シャツ"
                    price="9400"
                    img="https://static.mercdn.net/item/detail/orig/photos/m97852544761_1.jpg?1597069559" />
                <ItemComponents
                    title="メンズ シンプルネックレス ゴールド マリア"
                    price="3200"
                    img="https://static.mercdn.net/item/detail/orig/photos/m72726642545_1.jpg?1597363288" />
                <ItemComponents
                    title="ロットワイラー　Rott Weiler　ハーフパンツ ショートパンツ M 古着"
                    price="2908"
                    img="https://static.mercdn.net/item/detail/orig/photos/m82363879216_1.jpg?1596287778" />

                <ItemComponents
                    title="希少 90s トミーヒルフィガー マルチストライプシャツ ビッグシャツ 刺繍ロゴ"
                    price="6190"
                    img="https://static.mercdn.net/item/detail/orig/photos/m76715818953_1.jpg?1596005978" />

                <ItemComponents
                    title="マウンテンパーカー メンズ 2点セット 取り外し 登山服 インナー付き"
                    price="8000"
                    img="https://static.mercdn.net/item/detail/orig/photos/m56610412859_1.jpg?1597147721" />

                <ItemComponents
                    title="Supreme Nike Air force 1 low 27.5cm"
                    price="37000"
                    img="https://static.mercdn.net/item/detail/orig/photos/m57559976052_1.jpg?1597666084" />
            </div>


        </div>
    )

}

export default Items
