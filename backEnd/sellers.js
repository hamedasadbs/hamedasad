module.exports = {
  getSellers: (app, con) => {
    app.post("/sellers", (req, res) => {
      var query =
        "SELECT * FROM sellers" +
        (req.body.id ? ` WHERE id='${req.body.id}'` : "");
      con.query(query, (err, result) => {
        if (err) throw err;
        if (result) {
          res.send({
            sel: result,
          });
        }
      });
    });
  },
};
