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
import Image from 'next/image';

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
        const startsParsed = new Intl.DateTimeFormat('es-MX', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }).format(new Date(event.startsAt));
        const endsParsed = new Intl.DateTimeFormat('es-MX', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }).format(new Date(event.endsAt));
        return (
          <VerticalTimelineElement
            key={event.id}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date={`${startsParsed} - ${endsParsed}`}
            contentStyle={{
              background: 'rgb(241, 245, 249)',
              color: '#000',
            }}
            contentArrowStyle={{
              borderRightColor: 'rgb(241, 245, 249)',
            }}
            icon={<FaCalendar />}
          >
            <div className="card-compact">
              <figure>
                <div className="carousel rounded-box w-full">
                  {event.pictures.map((picture, index) => {
                    const idBase = `picture-${event.id}`;
                    return (
                      <div
                        id={`${idBase}-${index + 1}`}
                        key={picture}
                        className="carousel-item relative w-full"
                      >
                        <Image
                          src={picture}
                          width={400}
                          height={200}
                          className="w-full"
                          alt={event.name}
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                          <a
                            href={`#${idBase}-${
                              index === 0 ? event.pictures.length : index
                            }`}
                            className="btn-xs btn-circle btn"
                          >
                            ❮
                          </a>
                          <a
                            href={`#${idBase}-${
                              index === event.pictures.length - 1
                                ? 1
                                : index + 2
                            }`}
                            className="btn-xs btn-circle btn"
                          >
                            ❯
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{event.name}</h2>
                <p>{event.description}</p>
                <div className="card-actions justify-end">
                  <a
                    href={event.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary btn-sm btn"
                  >
                    Google Maps
                  </a>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
        );
      })}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<FaStar />}
      />
    </VerticalTimeline>
  );
};
