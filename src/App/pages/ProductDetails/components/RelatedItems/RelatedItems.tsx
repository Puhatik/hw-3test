import Items from 'src/App/pages/Products/components/Items/Items';

import styles from './RelatedItems.module.scss';

type RelatedItemsProps = {};

const RelatedItems: React.FC<RelatedItemsProps> = ({}) => {
  return (
    <div className={styles.items}>
      <p>Related Items</p>
      {/* <Items /> */}
    </div>
  );
};

export default RelatedItems;
