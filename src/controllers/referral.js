import { check, create } from "../models/referral";

export default {
  async create(req, res) {
    const referral = req.params.referral;
    const sender = req.params.sender;
    const referrer = req.params.referrer;
    try {
      const result = await check(referral, sender);
      if (!result) {
        await create(referral, sender, referrer);
        return res.send({
          result: "ok",
        });
      }
      return res.send({
        error: "has item",
      });
    } catch (error) {
      return res.send({
        error: "Error",
      });
    }
  },
};
