import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import type { Event } from '@acme/db';
import type { FC } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { FaCalendar, FaPlusCircle, FaStar } from 'react-icons/fa';
import styles from './timeline.module.css';
import Link from 'next/link';

export type AdminEventsTimelineProp = {
  events: Event[];
};

export const AdminEventsTimeline: FC<AdminEventsTimelineProp> = ({
  events,
}) => {
  return (
    <VerticalTimeline className={styles['custom-line']}>
      <VerticalTimelineElement
        iconStyle={{
          background: 'rgb(16, 204, 82)',
          color: '#fff',
        }}
        icon={
          <Link href="/admin/events/create">
            <FaPlusCircle />
          </Link>
        }
      />
      {events.map((event) => {
        const startsParsed = new Intl.DateTimeFormat('en-US', {
          dateStyle: 'short',
        }).format(new Date(event.startsAt));
        const endsParsed = new Intl.DateTimeFormat('en-US', {
          timeStyle: 'short',
        }).format(new Date(event.endsAt));
        return (
          <VerticalTimelineElement
            key={event.id}
            className="vertical-timeline-element--work"
            date={`${startsParsed} - ${endsParsed}`}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaCalendar />}
          ></VerticalTimelineElement>
        );
      })}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<FaStar />}
      />
    </VerticalTimeline>
  );
};
