import React from 'react'; 

const itemList = (props) => {
    let items = props.items && props.items.length > 0 ? props.items.map((item, key) =>{
        return (
            <li className={props.itemCss} key={`item-${key}`}>{item.content}</li>
        );
    }) : null;
    return (
        <ul className={props.listCss}>
            {items}
        </ul>
    );
};

export default itemList; 