class InfoController {
    index(req, res){
        return res.json({ sistema: "Treinamento EasyCajup", version: "1.0.0" });
    }
}

module.exports = new InfoController;