import db from "./db";

const Referral = db.sequelize.define("referral", {
  referral: {
    type: db.Sequelize.STRING,
  },
  sender: {
    type: db.Sequelize.STRING,
  },
  referrer: {
    type: db.Sequelize.STRING,
  },
});

export default Referral;

export function check(referral, sender) {
  return Referral.findOne({
    attributes: ["id"],
    where: {
      referral,
      sender,
    },
    raw: true,
  }).then((row) => {
    return row !== null;
  });
}

export function create(referral, sender, referrer) {
  return Referral.create({ referral, sender, referrer });
}
