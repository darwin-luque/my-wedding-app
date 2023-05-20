import { FC } from 'react';
import { PersonRelated } from '../../../admin/people/table';
import Image from 'next/image';

export type MainPartySectionProps = {
  title: string;
  people: PersonRelated[];
};

export const MainPartySection: FC<MainPartySectionProps> = ({
  title,
  people,
}) => {
  return (
    <div>
      <h2 className="mb-10 text-center text-xl font-bold uppercase tracking-wide">
        {title}
      </h2>
      <ul className="flex items-center justify-center gap-10">
        {people.map((person) => (
          <li key={person.id} className="text-center">
            <Image
              src={person.picture ?? ''}
              alt={person.name}
              width={500}
              height={500}
              className="h-40 w-40 rounded-full"
              style={{ objectFit: 'cover' }}
            />
            <p className="mt-4">{person.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
