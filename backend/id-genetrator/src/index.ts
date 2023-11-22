import fs from 'fs/promises';
import data from './badges-db.json';

const main = async () => {
  // const data = await import('./badges-db.json');
  const { icons } = data;
  const newIcons = icons.map((icon, index) => ({
    source: icon.source,
    title: icon.title,
    hex: icon.hex,
    id: index.toString(),
  }));

  fs.writeFile('newDb.json', JSON.stringify({ icons: newIcons }));
};

main();
