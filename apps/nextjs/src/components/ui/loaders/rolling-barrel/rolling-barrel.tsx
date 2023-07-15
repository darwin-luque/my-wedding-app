import { FC } from 'react';
import styles from './rolling-barrel.module.css';

export type RollingBarrelLoaderProps = {
  size?: number;
  bgColor?: string;
  inColor?: string;
  invert?: boolean;
};

export const RollingBarrelLoader: FC<RollingBarrelLoaderProps> = ({
  size = 48,
  bgColor = '#fff',
  inColor = '#1e293b',
  invert = false,
}) => {
  const background = invert ? inColor : bgColor;
  const foreground = invert ? bgColor : inColor;
  return (
    <span
      className={styles.loader}
      style={{ width: size, height: size, background }}
    >
      <span
        style={{
          border: `${Math.ceil((size * 5) / 48)}px solid ${foreground}`,
        }}
      />
    </span>
  );
};
