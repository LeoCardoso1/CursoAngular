import { useState } from "react"

const ListRender = () => {
    const[list] = useState(["Charlotte", "Oliver", "Robin"])

    const[products, setProducts] = useState([
        {id: 1, name: "Nintendo Switch", price: 2500},
        {id: 2, name: "PS5", price: 4500},
        {id: 3, name: "Xbox", price: 1500}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setProducts((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        });
    };
  return (
    <div>
        <ul>
            {list.map((item, i)=> (
                <li key={i}>{item}</li>
            ))}
        </ul>

        <ul>
            {products.map((product) => (
                <li key ={product.id}>{product.name} - {product.price} </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random Product</button>
    </div>
  )
}

export default ListRender