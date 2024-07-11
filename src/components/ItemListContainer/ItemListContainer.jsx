import styles from './ItemListContainer.module.scss';

const ItemListContainer = (props) => {
  return (
    <h1 className={styles.greeting}>
      {props.greeting}
    </h1>
  );
};

export default ItemListContainer;