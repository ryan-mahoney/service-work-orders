var knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "ryanmahoney",
    password: "",
    database: "service_work_orders"
  }
});

module.exports = knex;
