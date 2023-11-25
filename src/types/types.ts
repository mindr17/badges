export type BadgeType = {
  id?: string;
  title: string;
  source: string;
  hex: string;
  guidelines?: string;
  license?: {
    type: string;
    url?: string;
  };
  aliases?: unknown;
};

export type CategoryType = {
  title: string;
  badges: BadgeType[];
};
