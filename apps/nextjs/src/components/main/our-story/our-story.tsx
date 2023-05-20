import { type FC } from 'react';
import { MainSectionTitle } from '../ui/section-title';

export const MainOurStory: FC = () => {
  return (
    <section id="our-story" className="mt-28 mb-16">
      <MainSectionTitle title="Nuestra Historia" />
      <p className="mx-auto my-20 w-[80vw] text-center text-lg font-semibold text-gray-600 md:w-[60vw] lg:w-[40vw]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ipsum
        similique expedita dolor eveniet velit unde amet corrupti natus ipsa
        nobis, error itaque deserunt, nam fuga ducimus temporibus dolores
        maxime.
      </p>
    </section>
  );
};
