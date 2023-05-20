import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRing } from 'react-icons/fa';
import type { Event } from '@acme/db';
import { FC } from 'react';
import styles from './timeline.module.css';

export type MainAgendaTimelineProps = {
  events: Event[];
};

export const MainAgendaTimeline: FC<MainAgendaTimelineProps> = ({ events }) => {
  return (
    <VerticalTimeline className={styles['custom-line']}>
      {events.map((event, i) => {
        const startsDateParsed = new Intl.DateTimeFormat('es-MX', {
          dateStyle: 'long',
        }).format(new Date(event.startsAt));
        const startsTimeParsed = new Intl.DateTimeFormat('es-MX', {
          timeStyle: 'short',
          hour12: true,
        }).format(new Date(event.startsAt));
        const sideClass = i % 2 === 0 ? 'text-right' : 'text-left';
        return (
          <VerticalTimelineElement
            key={event.id}
            icon={<FaRing />}
            contentStyle={{
              boxShadow: 'none',
            }}
            iconStyle={{
              background: '#f9f9f9',
            }}
          >
            <div className={sideClass}>
              <h4>{startsDateParsed}</h4>
              <h2 className="uppercase">{event.name}</h2>
              <h4>{startsTimeParsed}</h4>
              <p>{event.description}</p>
            </div>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};
