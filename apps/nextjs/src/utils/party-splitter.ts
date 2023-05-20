import { PersonRelated } from '../components/admin/people/table';

export type PartySectionized = {
  groomsParents: PersonRelated[];
  bridesParents: PersonRelated[];
  // TODO: Add the rest of the party
  // groomsParty: {
  //   bestMan: Person;
  //   groomsmen: Person[];
  // };
  // bridesParty: {
  //   maidOfHonor: Person;
  //   bridesmaids: Person[];
  // };
};

export const partySplitter = (party: PersonRelated[]): PartySectionized => {
  const groomsParents: PersonRelated[] = [];
  const bridesParents: PersonRelated[] = [];

  party.forEach((person) => {
    switch (person.role) {
      case 'GROOMS_FATHER':
      case 'GROOMS_MOTHER':
        groomsParents.push(person);
        break;
      case 'BRIDES_FATHER':
      case 'BRIDES_MOTHER':
        bridesParents.push(person);
        break;
      default:
        break;
    }
  });

  return {
    groomsParents,
    bridesParents,
  };
};
