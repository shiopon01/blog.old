import * as fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next'

const handle = (_req: NextApiRequest, res: NextApiResponse) => {
  let result: boolean = false;
  let key: string = "./articles/2019-01-01-test.md";

  try {
    fs.statSync(key);
    result = true;
  } catch(err) {
    if(err.code === 'ENOENT') {
      result = false;
    }
  }

  res.end(key + (result ? ": true" : ": false"));
}

export default handle;