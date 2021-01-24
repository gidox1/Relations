'use strict';

const UserModel = require('../models/user');
const logger = require('turbo-logger').createStream({});
const dummyUsers = require('../data');

class User {

    async create(payload) {
        
        if(!Object.keys(payload).length) {
            logger.log("creating dummy users...");
            return await this.createDummyUsers();
        }

        const {first_name, last_name} = payload;
        return await new UserModel().where({first_name: first_name, last_name: last_name})
            .fetch({require: false})
            .then(async(res) => {
                if(!res) {
                    return await new UserModel(payload).save()
                }
                throw new Error("User already exist")
            })
            .then(async(res) => {
                logger.log("User sucessfully created");
                return await res.toJSON();
            })
            .catch((error) => {
                logger.error("An error occured while creating user", error)
                throw error;
            })
    }

    async getUsers() {
        return await new UserModel().fetchAll();
    }

    async createDummyUsers() {
        let arr = [];
        return new Promise(async (resolve, reject) => {
            for(let i = 0; i < dummyUsers.data.length; i++) {
                await this.create(dummyUsers.data[i])
                    .then(() => arr.push(dummyUsers.data[i]))
                    .catch((err) => {reject(err);})
            }

            return resolve({
                status: "success"
            })
        })
    }
}

module.exports  = User;