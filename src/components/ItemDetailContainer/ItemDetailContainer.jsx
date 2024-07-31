import { useState, useEffect } from "react"
import { getUnProducto } from '../../asyncMock'
import { useParams } from "react-router-dom"
import ItenDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [ productos, setProductos ] = useState([]);
  const { idItem } = useParams()

  useEffect(() => {
    getUnProducto( idItem ) 
      .then( res => setProductos( res ) )
  }, [ idItem ])
  
    return (
    <div>
      <ItenDetail 
        {
          ... productos
        }
      />
    </div>
  )
}

export default ItemDetailContainer