const controller = require("../controllers/annonce-controller.js");

const createAnnonceRoutes = (app) => {
    app.get("/annonces", controller.getAnnonces);

    app.get("/annonce/:id", controller.getAnnonceByID);

    app.post("/annonce", controller.createAnnonce);

    app.put("/annonce/:id", controller.updateAnnonceByID);

    app.delete("/annonce/:id", controller.deleteAnnonceByID);
};

module.exports = createAnnonceRoutes;