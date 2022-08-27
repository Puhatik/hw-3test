import Search from '../Products/components/Search/Search';
import Counter from './components/Counter/Counter';
import Filter from './components/Filter/Filter';
import Items from './components/Items/Items';
import styles from './Products.module.scss';

type ProductsProps = {
  items: any[];
};

const Products: React.FC<ProductsProps> = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.promo}>
        <p>Products</p>
        <span>
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </span>
      </div>

      <div className={styles.options}>
        <Search />
        <Filter />
      </div>

      <div className={styles.title}>
        <p>Total Product</p>
        <Counter />
      </div>

      <Items items={items} />
    </div>
  );
};

export default Products;
