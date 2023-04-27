import './App.css';
import { useEffect, useState} from "react"
import { useFetch } from './hooks/useFetch';



const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 4 - Usando o custom hook
  const{data: items, httpConfig, loading} = useFetch(url);


  // 5 - Refatorando o post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);
  
  // 1 - resgatando dados
   
//   useEffect(() => { 
//     async function fetchData(){
//       const res = await fetch(url);
//       const data = await res.json();
//       setProducts(data);
//   }
//   fetchData();
//  }, []);
  // 2 - adicionando dados

  const handleSubmit = async(e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

//     const res = await fetch(url, {
//       method: "POST",
//       headers:{
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(product),
//     });

//   3 - Carregamento dinamico
//   const addedProduct = await res.json();
//   setProducts((prevProducts) => [...prevProducts, addedProduct])

  setName("")
  setPrice("")

// 5 - Refatorando o POST
  httpConfig(product, "POST");
  };

  return (
    <div className="App">
       <h1>Lista de produtos</h1>
      {/* 6 - state de loading */}
      {loading && <p>Carregando dados...</p>}
      {!loading && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
              </li>
        ))}
        </ul>
        )}

     <div className="add-product">
          <form onSubmit={handleSubmit}> 
            <label>
              Nome:
              <input
              type="text"
              value={name} 
              name='name' 
              onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              Preco:
              <input
              type="text"
              value={price} 
              name='price' 
              onChange={(e) => setPrice(e.target.value)}/>
            </label>
            {loading ? <p>Aguarde!</p> : <input type="submit" value="Criar" />}
          </form>
     </div>
    </div>
  );
}

export default App;
