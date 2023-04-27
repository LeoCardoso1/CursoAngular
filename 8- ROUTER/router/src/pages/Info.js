import { useParams } from "react-router-dom"

const Info = () => {
  const{id} = useParams();
  return (
    <div>Informações sobre o produto = {id}</div>
  )
}

export default Info