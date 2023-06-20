
import express, { Request, Response } from 'express';
const router = express.Router();
import UserInfoResponse from '../interfaces/UserInfo';
// eslint-disable-next-line import/no-extraneous-dependencies
const { getToken, getUserInfo } = require('cycurid-oauth2-server');

router.post('/', async function (req: Request, res: Response) {
  try {
    const { code } = req.body;

    const tokenResponse = await getToken(
      code,
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
    );

    const userInfo: UserInfoResponse = await getUserInfo(tokenResponse);

    res.send(userInfo);
  } catch (err:any) {
    res.status(err.status).send(err.statusText);
  }
});
export default router;
