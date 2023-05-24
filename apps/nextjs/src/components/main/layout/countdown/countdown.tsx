import { FC, useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import { WEDDING_DATE } from '../../../../constants';

export const MainCountdown: FC = () => {
  const calcCountdown = useCallback(() => {
    const now = moment();
    const weddingDate = moment(WEDDING_DATE);
    const diff = weddingDate.diff(now);
    const duration = moment.duration(diff);
    return {
      months: duration.months(),
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }, []);
  const [countdown, setCountdown] = useState(calcCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calcCountdown());
    }, 1000);
    return () => clearInterval(interval);
  }, [calcCountdown]);

  return (
    <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl lg:text-2xl">
          <span style={{ '--value': countdown.months }}></span>
        </span>
        months
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl lg:text-2xl">
          <span style={{ '--value': countdown.days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl lg:text-2xl">
          <span style={{ '--value': countdown.hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-xl lg:text-2xl">
          <span style={{ '--value': countdown.minutes }}></span>
        </span>
        min
      </div>
      <div className="hidden flex-col lg:flex">
        <span className="countdown font-mono text-xl lg:text-2xl">
          <span style={{ '--value': countdown.seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
};
