import type { Who } from '@acme/db';

export const stringToWho = (str?: string): Who => (str ? (str as Who) : 'Both');
