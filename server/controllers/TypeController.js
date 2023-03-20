const { Type } = require('../models')

class TypeController {
    static async getTypes(req, res) {
        try {
            let Types = await Type.findAll()
            res.status(200).json(Types)
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async add(req, res) {
        try {
            const {name, image, rundown} = req.body
            let result = await Type.create({
                name,image,rundown
            })
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async delete(req, res) {
        const id = +req.params.id;
        let result = await Type.destroy({
            where: {id}
        })
        
        result ?
        res.status(200).json({
            message: "Type deleted successfully"
        }) :
        res.status(404).json({ message: "Type not found" })
        } catch (err) {
        res.status(500).json(err);
        }
    
    static async editTypes(req, res) {
        try {
            const id = +req.params.id;
            const {name,image,rundown} = req.body;
    
            let result = await Type.update({
                name,image,rundown
            }, {
                where: {id}
            })
    
            result[0] === 1 ?
            res.status(200).json({
                message: "Type updated successfully"
            }) :
            res.status(404).json({ message: "Type not found" })
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = TypeController