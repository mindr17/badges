import fs from 'fs/promises';
import data from './badges-db.json';

const main = async () => {
  // const data = await import('./badges-db.json');
  const { icons } = data;
  const newIcons = icons.map((icon, index) => ({
    ...icon,
    id: index,
  }));

  fs.writeFile('newDb.json', JSON.stringify({ icons: newIcons }));
};

main();
