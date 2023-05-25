import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRing } from 'react-icons/fa';
import type { FC } from 'react';
import styles from './timeline.module.css';
import Skeleton from 'react-loading-skeleton';

export const MainAgendaTimelineLoading: FC = () => (
  <VerticalTimeline className={styles['custom-line']}>
    <VerticalTimelineElement
      icon={<FaRing />}
      contentStyle={{
        boxShadow: 'none',
      }}
      iconStyle={{
        background: '#f9f9f9',
      }}
    >
      <div className="text-right">
        <Skeleton width={125} />
        <Skeleton width={200} height={24} />
        <Skeleton width={75} />
        <Skeleton width="100%" height={70} />
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      icon={<FaRing />}
      contentStyle={{
        boxShadow: 'none',
      }}
      iconStyle={{
        background: '#f9f9f9',
      }}
    >
      <div className="text-left">
        <Skeleton width={125} />
        <Skeleton width={200} height={24} />
        <Skeleton width={75} />
        <Skeleton width="100%" height={70} />
      </div>
    </VerticalTimelineElement>
  </VerticalTimeline>
);
