import React, {useState} from 'react';
import ProductItem from './product-item.component.js';

const Dao = require('./db/dao.db.js');
const Crud = require('./db/crud.db.js');

export default function ProductList(){
    const [items, setItems] =  useState([]);

    function onSubmitAddItem(e){
        e.preventDefault();
        setItems([...items, e.target.value]);        
    }

    return(
        <div>
            <form onSubmit={onSubmitAddItem}>
                <input type="text" placeholder ="add a new product"/>
                <button type="submit">Add product</button>
            </form>
           <ProductItem entries={items} />
        </div>
    );
}