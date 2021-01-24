'use strict';

const httpStatus = require("http-status");
const logger = require('turbo-logger').createStream({});
const UserService = require('../service/user');

module.exports = {

    create: async (req, res) => {
        return await new UserService().create(req.body)
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

    getUsers: async(req, res) => {
        return await new UserService().getUsers(req.body)
        .then((resData) => {
            return res.send(
                httpStatus.CREATED, 
                {
                    message: "users gotten successfully",
                    data: resData 
                }
            );
        })
        .catch((error) => {
            res.send(
                httpStatus.INTERNAL_SERVER_ERROR,
                {error: "An error occured while fetching users "}
            );       
        })
    }
}