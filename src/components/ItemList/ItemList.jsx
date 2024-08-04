import Item from '../Item/Item.jsx'
import styles from './ItemList.module.scss'

const ItemList = ({ productos }) => {
    return (
      <div className={styles.productosContenedor}>
          {
              productos.map(producto => 
                  <Item key={producto.id} {...producto} />
              )
          }
      </div>
    )
  }
  
export default ItemList  