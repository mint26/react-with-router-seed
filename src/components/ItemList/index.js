import React from 'react'; 

const itemList = (props) => {
    let items = props.items && props.items.length > 0 ? props.items.map(item =>{
        return (
            <li className={item.css}>{item.content}</li>
        );
    }) : null;
    return (
        <ul className={props.listCss}>
            {items}
        </ul>
    );
};

export default itemList; 