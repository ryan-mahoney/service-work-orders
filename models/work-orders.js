const db = require("./../config/db");

const table = "service_work_orders";

module.exports = {
  getCount: async () => {
    const [{ count }] = await db(table).count("*");
    return count;
  },

  save: async data => {
    const record = await db(table)
      .insert(data)
      .returning("*");
    console.log(record);
  }
};
