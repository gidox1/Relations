'use strict';

const TagService = require('../service/tag');
const httpStatus = require("http-status");

module.exports = {
    create: async(req, res) => {
        return await new TagService().create(req.body)
        .then((resData) => {
            return res.send(
                httpStatus.CREATED, 
                {
                    message: "user created successfully",
                    data: resData
                },
            );
        })
        .catch((error) => {
            res.send(
                httpStatus.INTERNAL_SERVER_ERROR,
                {error: "An error occured while creating user "}
            );       
        })
    },

    update: async(req, res) => {
        return await new TagService().update(req.body)
        .then((resData) => {
            return res.send(
                httpStatus.CREATED, 
                {
                    message: "user created successfully",
                    data: resData
                },
            );
        })
        .catch((error) => {
            res.send(
                httpStatus.INTERNAL_SERVER_ERROR,
                {error: "An error occured while creating user "}
            );       
        })
    },

    getTags: async(req, res) => {
        return await new TagService().getTags(req.body)
        .then((resData) => {
            return res.send(
                httpStatus.CREATED, 
                {
                    message: "tags gotten successfully", 
                    data: resData 
                }
            );
        })
        .catch((error) => {
            res.send(
                httpStatus.INTERNAL_SERVER_ERROR,
                {error: "An error occured while fetching tags "}
            );       
        })
    }
}