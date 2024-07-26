module.exports = {
  getComments: (app, con) => {
    app.post("/comments", (req, res) => {
      var query =
        "SELECT * FROM comments INNER JOIN account ON comments.user_id=account.id" +
        (req.body.id ? ` WHERE id='${req.body.id}'` : "");
      con.query(query, (err, result) => {
        if (err) throw err;
        if (result) {
          res.send({
            com: result,
          });
        }
      });
    });
  },
};
