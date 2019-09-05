import { NextApiRequest, NextApiResponse } from 'next'

const handle = (_req: NextApiRequest, res: NextApiResponse) => {
  res.end("With great power comes great responsibility.");
}

export default handle;