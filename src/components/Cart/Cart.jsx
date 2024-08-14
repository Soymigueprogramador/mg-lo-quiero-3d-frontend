import { useContext } from "react"
import { CarritoContext } from '../../context/CarritoContext.jsx'
import { Link } from "react-router-dom"
import CartItem from '../CartItem/CartItem.jsx'
//import Button from '../Button/Button.jsx'

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if( cantidadTotal === 0 ) {
    return (
      <>
        <h2> Carrito vacio </h2>
        <Link to='/productos'> Ver productos </Link>
      </>
    )
  }
  
  return (
    <div>
      {
        carrito.map( producto => <CartItem hey={producto.id} { ... producto } /> )
      }
      <h3> Total: ${ total } </h3>
      <h3> Cantidad total: { cantidadTotal } </h3>
      <button onClick={() => vaciarCarrito()}> Vaciar carrito </button>
      <Link to='/checkout'> Finalizar compra </Link>
    </div>
  )
}

export default Cart