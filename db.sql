CREATE TABLE service_work_orders (
  id SERIAL NOT NULL PRIMARY KEY,
  work_order_number TEXT,
  building TEXT NOT NULL,
  room TEXT NOT NULL,
  problem TEXT NOT NULL,
  created_date DATE,
  received_date DATE,
  work_date DATE,
  work_done TEXT,
  work_status TEXT,
  hours_worked SMALLINT
);

