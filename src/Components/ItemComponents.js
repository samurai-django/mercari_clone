import React from "react";
import './ItemComponents.css'
import Card from '@material-ui/core/Card';

function ItemComponents({title, price, img}){
    return(
        <div className="itemComponents">
            <Card className="item__card">
                <img
                    className="item__img"
                    src={img}
                    alt=""
                />
                <p>￥{price}</p>

                <div className="item_background">
                    <p>{title}</p>
                </div>
            </Card>
        </div>
    )
}

export default ItemComponents;
