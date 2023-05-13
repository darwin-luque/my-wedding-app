export type CoupleMetadata = {
  name: string;
  description: string;
  picture: string | null;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
};

export type WeddingMetadata = {
  theCouple: Record<'bride' | 'groom', CoupleMetadata>;
  loveStory: {
    firstMeet: string;
    firstDate: string;
    proposal: string;
  };
  weddingDate: string;
};
