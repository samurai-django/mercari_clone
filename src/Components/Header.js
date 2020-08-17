import React from "react";
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CheckIcon from '@material-ui/icons/Check';
import PersonIcon from '@material-ui/icons/Person';
import {Avatar} from "@material-ui/core";


function Header(){
    return (
        <div className="header">
            <div className="header__row1">
                <img
                    className="header__mercari__img"
                    src="https://web-jp-assets.mercdn.net/_next/static/images/logo-acdd90ac4f472d5a6f7a330d33ab1225.svg"
                    alt=""
                />
                <div className="searchbar">
                    <input placeholder="何かお探しですか?" className="header__searchbar"/>
                    <SearchIcon className="searchIcon"/>
                </div>
            </div>

            <div className="header_row2">
                <div className="header__two">
                    <ListIcon className="listIcon" />
                    <p>カテゴリーから探す</p>
                    <LocalOfferIcon className="localOfferIcon" />
                    <p>ブランドから探す</p>
                </div>
                <div className="header__three">
                    <NotificationsIcon className="notificationIcon" />
                    <p>お知らせ</p>
                    <CheckIcon className="checkIcon"/>
                    <p>やることリスト</p>
                    <Avatar className="avatar" />
                    <p>マイページ</p>
                </div>

            </div>
        </div>
    )
}

export default Header
