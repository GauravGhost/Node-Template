const {StatusCodes} = require('http-status-codes')

const {ApiError} = require('../utils')


class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong while creating in crud repository");
        }
    }

    async get(id) {
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong while fetching data in crud repository");
        }
    }

    async getAll() {
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong while fetching data in crud repository");
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {new: true});
            return result;
        } catch(error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong while updating data in crud repository");
        }
    }

    async destroy(id) {
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong while deleting data in crud repository");
        }
    }

}

module.exports = CrudRepository;