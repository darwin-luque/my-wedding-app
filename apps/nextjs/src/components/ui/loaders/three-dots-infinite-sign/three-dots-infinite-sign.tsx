import { type FC } from 'react';
import styles from './three-dots-infinite-sign.module.css';

export type ThreeDotsInfiniteSignLoaderProps = {
  size?: number;
};

export const ThreeDotsInfiniteSignLoader: FC<
  ThreeDotsInfiniteSignLoaderProps
> = ({ size = 64 }) => {
  return (
    <span
      className={styles.loader}
      // style={{
      //   width: size,
      // }}
    />
  );
};
