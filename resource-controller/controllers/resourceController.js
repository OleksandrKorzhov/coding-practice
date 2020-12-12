class ResourceController {
    constructor({
        dbModel,
        middlewares,
        requestParsers,
        responseHandlers,
    }) {
        this._db = dbModel;
        this._middlewares = middlewares;
        this._requestParsers = requestParsers;
        this._responseHandlers = responseHandlers;
    }

    /**
     * Will be used as get-one route
     * @param {string} id resource id
     */
    async getOne({ id }, req, res, next) {
        console.log(id);
        const users = await this._db.find({ _id: id }).exec();
        res.json(users);
    }

    /**
     * Will be used as get-many route
     * @param {number} page 
     * @param {number} limit 
     */
    getMany({ page, limit }) {

    }

    
    /**
     * Will be used as add-one route
     * @param {object} data 
     */
    addOne(data) {

    }

    /**
     * Will be used as add-many route
     * @param {object} data 
     */
    addMany(data) {

    }

    /**
     * Will be used as update-one route
     * @param {object} param0 
     */
    updateOne({ id, data }) {

    }

    /**
     * Will be used as update-many route
     * @param {object} data 
     */
    updateMany(data) {

    }

    /**
     * Will be used as delete-one route
     * @param {string} id 
     */
    deleteOne(id) {

    }

    /**
     * Will be used as delete-many route
     * @param {object} data 
     */
    deleteMany(data) {

    }
}

module.exports = ResourceController;