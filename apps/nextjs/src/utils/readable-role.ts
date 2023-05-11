import type { PersonRole } from '@acme/db';

export const readableRole = (
  role: PersonRole,
): {
  es: string;
  en: string;
} => {
  switch (role) {
    case 'BEST_MAN':
      return {
        es: 'Padrino',
        en: 'Best Man',
      };
    case 'BRIDESMAID':
      return {
        es: 'Dama de honor',
        en: 'Bridesmaid',
      };
    case 'GROOMSMAN':
      return {
        es: 'Padrino',
        en: 'Groomsman',
      };
    case 'MAID_OF_HONOR':
      return {
        es: 'Dama de honor',
        en: 'Maid of honor',
      };
    case 'BRIDES_FATHER':
      return {
        es: 'Padre de la novia',
        en: "Bride's father",
      };
    case 'BRIDES_MOTHER':
      return {
        es: 'Madre de la novia',
        en: "Bride's mother",
      };
    case 'GROOMS_FATHER':
      return {
        es: 'Padre del novio',
        en: "Groom's father",
      };
    case 'GROOMS_MOTHER':
      return {
        es: 'Madre del novio',
        en: "Groom's mother",
      };
    case 'FLOWER_GIRL':
      return {
        es: 'Dama de las flores',
        en: 'Flower Girl',
      };
    case 'RING_BEARER':
      return {
        es: 'Portador de anillos',
        en: 'Ring Bearer',
      };
    case 'NONE':
    default:
      return {
        es: 'Invitado',
        en: 'Guest',
      };
  }
};
