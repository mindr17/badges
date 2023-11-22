export type BadgeType = {
  id?: string;
  title: string;
  hex: string;
  source: string;
  guidelines?: string;
  license?: {
    type: string;
  };
  aliases?: unknown;
};

export type CategoryType = {
  title: string;
  badges: BadgeType[];
};
