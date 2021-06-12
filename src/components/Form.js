import React, { useState, useEffect } from 'react';
// radio icons for sauce
// add topings - checkboxes
// special instructions - input text 
// increase by 1 or decrease by 1 - quantity = type="number"


export default function Form() {

    const [data, setData] = useState({
        size:"",
        sauce:"",
        topping:"",
        instructions:"",
        name:"",
    })
     
    const handleChange = e => {
        // preventDefault();
        const {name, value} = e.target
        setData({ ...data, [name]: value})
    }

    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <form id="pizza-form">
                <label>
                    <h3>Choice of Size</h3>
                    <select value={data.size} name="size" onChange={handleChange} id="size-dropdown">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>    
                </label>
                <label>
                    <p>Red Sauce</p>
                    <input type="radio" value={data.sauce} name="sauce" onChange={handleChange} checked={data.sauce === "redSauce"}/>
                    <p>Ranch Garlic</p>
                    <input type="radio" value={data.sauce} name="sauce" onChange={handleChange} checked={data.sauce === "ranchGarlicSauce"}/>
                    <p>Alfredo Sauce</p>
                    <input type="radio" value={data.sauce} name="sauce" onChange={handleChange} checked={data.sauce === "alfredoSauce"}/>
                </label>
                <label>
                    <h3>Add Toppings</h3>
                    <p>Pepporoni</p>
                    <input type="checkbox" />
                    <p>Olives</p>
                    <input type="checkbox" />
                    <p>Mushrooms</p>
                    <input type="checkbox" />
                    <p>Bell Peppers</p>
                    <input type="checkbox" />
                </label>
                <label>
                    <h3>Special Instructions</h3>
                    <input type="text" id="special-text" />
                </label>
                <label>
                    <h3>Enter your name.</h3>
                    <input type="text" id="name-input" />
                </label>
                <button>Add to Order</button>
            </form>    
        </div>
    )

}
