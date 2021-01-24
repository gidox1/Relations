'use strict';

const TagModel = require('../models/tag');
const logger = require('turbo-logger').createStream({});

class Tags {

    /**
     * Create tag
     * @param {String} name 
     */
    async create(name) {
        return await new TagModel().where({name: name})
            .fetch({require: false})
            .then(async(res) => {
                if(!res) {
                    return await new TagModel(payload).save();
                }
                throw new Error("Tag already exist")
            })
            .then(async(res) => {
                logger.log("User sucessfully Tag");
                return await res.toJSON();
            })
            .catch((error) => {
                logger.error("An error occured while creating tag", error)
                throw error;
            })
    }

    /**
     * Update/Edit tag
     * @param {String} name 
     */
    async update(name) {
        return await new TagModel().where({name: name})
            .fetch({require: false})
            .then(async(res) => {
                if(!res) {
                    throw new Error("Tag does not exist")
                }
                return await new TagModel({name: name}).save(null, {method:'update'});
            })
            .then(async(res) => {
                logger.log("Tag sucessfully updated");
                return await res.toJSON();
            })
            .catch((error) => {
                logger.error("An error occured while updating tag", error)
                throw error;
            })
    }

    async getTags() {
        return await new TagModel().fetchAll({require: false});
    }
}

module.exports  = Tags;