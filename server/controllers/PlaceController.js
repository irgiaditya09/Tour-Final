const { Place } = require('../models')

class PlaceController {
    static async getAllPlaces(req, res) {
        try {
            let places = await Place.findAll()
            res.status(200).json(places)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async add(req, res) {
        try {
            const {name, image} = req.body
            let result = await Place.create({
                name,image
            })
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async remove(req, res) {
        const id = +req.params.id;
        let result = await Place.destroy({
            where: {id}
        })
        
        result ?
        res.status(200).json({
            message: "Place deleted successfully"
        }) :
        res.status(404).json({ message: "Place not found" })
        } catch (err) {
        res.status(500).json(err);
        }

        static async edit(req, res) {
            try {
                const id = +req.params.id;
                const {name,image} = req.body;
        
                let result = await Place.update({
                    name,image
                }, {
                    where: {id}
                })
        
                result[0] === 1 ?
                res.status(200).json({
                    message: "Place updated successfully"
                }) :
                res.status(404).json({ message: "Place not found" })
            } catch (err) {
                res.status(500).json(err);
            }
        }
}

module.exports = PlaceController