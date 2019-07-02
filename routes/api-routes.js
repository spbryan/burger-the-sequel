/***********************************************
 * Project: Burger (The Sequel)
 * Developer: Sean Bryan
 * Date: 2019-07-01
 ***********************************************/
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // Default router
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (results) {
            var allBurgers = {
                burgers: results
            }
            res.render("index", allBurgers);
        });
    });

    // Add new Burger
    app.post("/api/burgers", function (req, res) {
        console.log(req.body);
        db.Burger.create({
            burger_name: req.body.name,
            devoured: false
        }).then(function (results) {
            res.redirect('back');
        });
    });

    //Update a Burger
    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({ devoured: true },
            { where: { id: req.params.id } })
            .then(function (results) {
                if (results.changedRows == 0) {
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            });
    });

    //Delete a Burger
    app.delete("/api/burgers/:id", function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
};