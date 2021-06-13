import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';
// radio icons for sauce
// add topings - checkboxes
// special instructions - input text 
// increase by 1 or decrease by 1 - quantity = type="number"

export default function Form() {

    
    function postObject(x) {
        axios
        .post("https://reqres.in/api/orders", x)  // send x to url (doing NOTHING!!!!!!! on this sprint!)
        .then(res => {                            // after things are sent, then do .....
            setSubmitData([...submitData, x])
        })
        .catch(err => {
            console.log(err); // There was an error creating the data and logs to console
        });
    }

    const [data, setData] = useState({
        size:"",
        // sauce:"",
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        instructions:"",
        name:"",
    })

    const [submitData, setSubmitData] = useState([])

    // The ternary is checking the "type" and if it is "checkbox," it will return whatever the "checked" value is.
    const handleChange = e => {
        const { name, value, checked, type } = e.target
        const values = type === "checkbox" ? checked : value;
        setData({ ...data, [name]: values})
    }

    // Need to add more to this.
    const formSubmit = (e) => {
        e.preventDefault();
        const x = ({
            size: data.size,
            // sauce: data.sauce,
            topping1: data.topping1,
            topping2: data.topping2,
            topping3: data.topping3,
            topping4: data.topping4,
            instructions: data.instructions,
            name: data.name,
        })
        postObject(x)
    }

    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <form id="pizza-form" onSubmit={formSubmit}>
                <label>
                    <h3>Choice of Size</h3>
                    <select value={data.size} name="size" onChange={handleChange} id="size-dropdown">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>    
                </label>
                <label>
                    {/* Radio boxes need their 'value' and 'checked' to match, and they can be named anything. */}
                    <p>Red Sauce</p>
                    <input type="radio" value="Red Sauce" name="sauce" onChange={handleChange} checked={data.sauce === "Red Sauce"}/>
                    <p>Ranch Garlic</p>
                    <input type="radio" value="Ranch Garlic Sauce" name="sauce" onChange={handleChange} checked={data.sauce === "Ranch Garlic Sauce"}/>
                    <p>Alfredo Sauce</p>
                    <input type="radio" value="Alfredo Sauce" name="sauce" onChange={handleChange} checked={data.sauce === "Alfredo Sauce"}/>
                </label>
                <label>
                    {/* Check boxes need some special logic, as seen above with the handleChange ternary. */}
                    <h3>Add Toppings</h3>
                    <p>Pepperoni</p>
                    <input type="checkbox" onChange={handleChange} name="topping1" checked={data.topping1} className="topping"/>
                    <p>Olives</p>
                    <input type="checkbox" onChange={handleChange} name="topping2" checked={data.topping2} className="topping"/>
                    <p>Mushrooms</p>
                    <input type="checkbox" onChange={handleChange} name="topping3" checked={data.topping3} className="topping"/>
                    <p>Bell Peppers</p>
                    <input type="checkbox" onChange={handleChange} name="topping4" checked={data.topping4} className="topping"/>
                </label>
                <label>
                    <h3>Special Instructions</h3>
                    <input type="text" value={data.instructions} name="instructions" id="special-text" onChange={handleChange} />
                </label>
                <label>
                    <h3>Enter your name.</h3>
                    <input type="text" id="name-input" value={data.name} name="name" onChange={handleChange} />
                </label>
                <button id="order-button" type="submit">Add to Order</button>  {/* I do not think the 'type' is always necessary. */}
            </form>    
        </div>
    )
}
// instructions and name not linked to state yet. 