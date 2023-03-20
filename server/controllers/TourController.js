const { Tour, Place, Type } = require('../models');

class TourController {
    static async getTours(req, res) {
        try {
            let tours = await Tour.findAll({
                include : [
                    Place, Type
                ]
            })
            res.status(200).json(tours)
        }catch(err) {
            res.status(500).json(err)

        }
    }

    static async getDetailsById(req, res) {
        //
        try {
          const id = Number(req.params.id);
          let tour = await Tour.findByPk(id);
    
          tour
            ? res.status(200).json(tour)
            : res.status(404).json({ message: "Tour not found" });
        } catch (err) {
          res.status(500).json(err);
        }
      }

    static async packetTours(req, res) {
        try {
            const { name, image, price, PlaceId, TypeId } = req.body;
      
            let result = await Tour.create({
              name,
              image,
              price,
              PlaceId,
              TypeId,
            });
      
            res.status(201).json(result);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            const {name,image,price, PlaceId, TypeId} = req.body;
    
            let result = await Tour.update({
                name,image,price, PlaceId, TypeId
            }, {
                where: {id}
            })
    
            result[0] === 1 ?
            res.status(200).json({
                message: "Tour updated successfully"
            }) :
            res.status(404).json({ message: "Tour not found" })
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        const id = +req.params.id;
        let result = await Tour.destroy({
            where: {id}
        })
        
        result ?
        res.status(200).json({
            message: "Tour deleted successfully"
        }) :
        res.status(404).json({ message: "Tour not found" })
        } catch (err) {
        res.status(500).json(err);
        }
}
module.exports = TourController