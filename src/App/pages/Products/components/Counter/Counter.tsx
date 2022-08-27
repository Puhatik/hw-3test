import styles from './Counter.module.scss';

type CounterProps = {};

const Counter: React.FC<CounterProps> = () => {
  return <button className={styles.counter}>184</button>;
};

export default Counter;
