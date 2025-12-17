import DB from './clients/db.mysql.js';

// 1. https://dashboard.render.com/
// 2. https://console.aiven.io/account/a57ec6ef976b/project/argishti-e01/services/mysql-041999/overview

(async () => {
  // Users TABLE
  const users = await DB.query(`
      CREATE TABLE IF NOT EXISTS users
      (
          id         INT PRIMARY KEY AUTO_INCREMENT,
          first_name VARCHAR(255) NOT NULL,
          last_name  VARCHAR(255) NOT NULL,
          email      VARCHAR(255) NOT NULL,
          dob        DATE         NOT NULL
      );
  `);

  //
  // const query = `
  //     INSERT INTO users (first_name, last_name, email, dob)
  //     VALUES ('Good', 'Man', 'good@man.com', '1999-05-04');
  // `;
  //

  const query = `
      SELECT *
      FROM users
      WHERE id = 2;
  `;

  const data = await DB.query(query);

  console.log(data[0])

})();
