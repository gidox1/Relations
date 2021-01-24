'use strict';

const FamilyService = require('../service/family');
const logger = require('turbo-logger').createStream({});
const httpStatus = require("http-status");

module.exports = {
    create: async(req, res) => {
        return await new FamilyService().create(req.body)
        .then((resData) => {
            return res.send(
                httpStatus.CREATED, 
                {
                    message: "family created successfully",
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

    getFamily: async(req, res) => {
        return await new FamilyService().getFamily(req)
            .then((resData) => {
                return res.send(
                    httpStatus.CREATED, 
                    {
                        message: "family gotten successfully", 
                        data: resData 
                    }
                );
            })
            .catch((error) => {
                res.send(
                    httpStatus.INTERNAL_SERVER_ERROR,
                    {error: "An error occured while fetching family "}
                );       
            })
    }
}