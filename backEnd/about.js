module.exports = {
  getAbout: (app, con) => {
    app.get("/about", (req, res) => {
      //query to get about info
      con.query(`SELECT * FROM about`, (err, result, fields) => {
        if (err) throw err;
        if (result.length) {
          res.send({
            about: result,
          });
        } else {
          res.sendStatus(405);
        }
      });
    });
  },
};
