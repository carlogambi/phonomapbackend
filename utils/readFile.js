import fs from 'fs';
import util from 'util';

const read = util.promisify(fs.readFile);

const readFile = async (path) => {
  try {
    const data = await read(path, 'utf8');
    return data;
  } catch (e) {
    return e;
  }
};

export default readFile;
