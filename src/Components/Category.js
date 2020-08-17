import React from "react";
import './Category.css'
import {Button} from "@material-ui/core";

function Category({category_name, category1, category2, category3, category4}){
    return (
            <div className="popular__category">
                <h2>{ category_name }</h2>
                <div className="popular__category__button">
                    <Button color="lightgray">{ category1 }</Button>
                    <Button color="lightgray">{ category2 }</Button>
                    <Button color="lightgray">{ category3 }</Button>
                    <Button color="lightgray">{ category4 }</Button>
                </div>

            </div>
    )
}


export default Category;
