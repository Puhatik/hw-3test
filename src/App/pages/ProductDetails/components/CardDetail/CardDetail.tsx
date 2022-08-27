import Button from '@components/Button/Button';

import styles from './CardDetail.module.scss';

type CardDetailProps = {
  item: {
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    rating: {
      rate: number;
      count: number;
    };
  };
};

const CardDetail: React.FC<CardDetailProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.image} />
      <div className={styles.details}>
        <h1>{item.title}</h1>
        <div className={styles.color}>
          <p>Color</p>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <span>{item.description}</span>
        <p className={styles.price}>${item.price}</p>
        <div className={styles.buttons}>
          <Button>Buy now</Button>
          <Button>Add to Chart</Button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
