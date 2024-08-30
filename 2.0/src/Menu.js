import React, { useState } from "react";
import menuList from "./data";
import './menu.css';

function Menu() {
    const [datas, setDatas] = useState(menuList);
    const [reserveData, setReserveData] = useState(datas);

    const categoryList = datas.map(data => data.category);
    const uniqueCategoryList = [...new Set(categoryList)];
    uniqueCategoryList.unshift('All');

    const handleClick = (un) => {
        if (un === 'All') {
            setReserveData(datas);
        } else {
            const filteredMenu = datas.filter(data => data.category === un);
            setReserveData(filteredMenu);
        }
    };

    return (
        <div>
            <h1>Menu</h1>
            <div className="tab_Container">
                {uniqueCategoryList.map((un, id) => (
                    <span key={id} className="tabs" onClick={() => handleClick(un)}>
                        {un}
                    </span>
                ))}
            </div>
            <div className="card_Container">
                {reserveData.map(rd => (
                    <div key={rd.id} className="card">
                        <img src={rd.img} alt={rd.title} />
                        <h4>{rd.title}</h4>
                        <h5>${rd.price}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
