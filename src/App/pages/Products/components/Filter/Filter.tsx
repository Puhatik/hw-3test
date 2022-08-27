import filterSvg from '../../../../../assets/img/filter.svg';
import styles from './Filter.module.scss';

type FilterProps = {};

const Filter: React.FC<FilterProps> = () => {
  return (
    <button className={styles.filter}>
      <img src={filterSvg} />
      Filter
    </button>
  );
};

export default Filter;
