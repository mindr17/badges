export type BadgeType = {
  title: string;
  hex: string;
  source: string;
  guidelines?: string;
  license?: {
    type: string;
  };
  aliases?: string;
};

export type CategoryType = {
  title: string;
  badges: BadgeType[];
};
