import React, { useState, useEffect } from 'react';
// radio icons for sauce
// add topings - checkboxes
// special instructions - input text 
// increase by 1 or decrease by 1 - quantity = type="number"

export default function Form() {

    const [data, setData] = useState({
        size:"",
        sauce:"",
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        instructions:"",
        name:"",
    })

// The ternary is checking the "type" and if it is "checkbox" it will return whatever the "checked" value is.
    const handleChange = e => {
        const { name, value, checked, type } = e.target
        const x = type === "checkbox" ? checked : value;
        setData({ ...data, [name]: x})
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
                    <input type="radio" value="a" name="sauce" onChange={handleChange} checked={data.sauce === "a"}/>
                    <p>Ranch Garlic</p>
                    <input type="radio" value="b" name="sauce" onChange={handleChange} checked={data.sauce === "b"}/>
                    <p>Alfredo Sauce</p>
                    <input type="radio" value="c" name="sauce" onChange={handleChange} checked={data.sauce === "c"}/>
                </label>
                <label>
                    <h3>Add Toppings</h3>
                    <p>Pepperoni</p>
                    <input type="checkbox" onChange={handleChange} name="topping1" checked={data.topping1} />
                    <p>Olives</p>
                    <input type="checkbox" onChange={handleChange} name="topping2" checked={data.topping2} />
                    <p>Mushrooms</p>
                    <input type="checkbox" onChange={handleChange} name="topping3" checked={data.topping3}  />
                    <p>Bell Peppers</p>
                    <input type="checkbox" onChange={handleChange} name="topping4" checked={data.topping4}  />
                </label>
                <label>
                    <h3>Special Instructions</h3>
                    <input type="text" id="special-text" onChange={handleChange} />
                </label>
                <label>
                    <h3>Enter your name.</h3>
                    <input type="text" id="name-input" onChange={handleChange} />
                </label>
                <button>Add to Order</button>
            </form>    
        </div>
    )
}
