import type { PersonRole } from '@acme/db';

export const stringToPersonRole = (str?: string): PersonRole =>
  str ? (str as PersonRole) : 'NONE';
