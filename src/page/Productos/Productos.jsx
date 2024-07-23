import ItemList from '../../components/ItemList/ItemList.jsx';
import { productos } from '../../asyncMock.js';

const ProductosPage = () => {
  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ProductosPage;
