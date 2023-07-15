import { FC } from 'react';
import styles from './rolling-barrel.module.css';

export type RollingBarrelLoaderProps = {
  size?: number;
  bgColor?: string;
  inColor?: string;
};

export const RollingBarrelLoader: FC<RollingBarrelLoaderProps> = ({
  size = 48,
  bgColor = '#fff',
  inColor = '#1e293b',
}) => (
  <span
    className={styles.loader}
    style={{ width: size, height: size, background: bgColor }}
  >
    <span
      style={{
        border: `${Math.ceil((size * 5) / 48)}px solid ${inColor}`,
      }}
    />
  </span>
);
