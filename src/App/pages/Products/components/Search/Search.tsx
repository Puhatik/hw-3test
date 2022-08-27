import Button from '@components/Button/Button';
import Input from '@components/Input/Input';

import searchSvg from '../../../../../assets/img/search.svg';
import styles from './Search.module.scss';

type SearchProps = {};

const Search: React.FC<SearchProps> = () => {
  return (
    <div className={styles.search}>
      <img src={searchSvg} alt="Search" />
      <Input type="text" placeholder="Search property" />
      <Button>Find now</Button>
    </div>
  );
};

export default Search;
