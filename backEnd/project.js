module.exports = {
  getProject: (app, con) => {
    app.get("/project", (req, res) => {
      //query to get project info
      con.query(`SELECT * FROM project`, (err, result, fields) => {
        if (err) throw err;
        if (result.length) {
          res.send({
            project: result,
          });
        } else {
          res.sendStatus(405);
        }
      });
    });
  },
};
