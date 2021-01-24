'use strict';

const UserModel = require('../models/user');
const logger = require('turbo-logger').createStream({});
const FamilyModel = require('../models/family');

class Family {

    async create(data) {
        return new Promise(async(resolve, reject) => {
            return data.map(async(model) => {
                let check = await this.validateFamily(model.family_id, model.tag_id, model.user_id);
                let method_;

                if(check) {
                    method_ = 'update' 
                }
                else {
                    method_ = 'insert'
                }

                await new FamilyModel(model).where({family_id: model.family_id, user_id: model.user_id})
                    .save(null, {method: method_})
                    .then(async(res) => {
                        await res.toJSON();
                    })
                    .catch((err) => {
                        logger.error("An error occured while creating family relation ", err.toString())
                        // reject(err);
                        return
                    })
            })
        })
    }

    async validateFamily(family_id, tag_id, user_id) {
        return await new FamilyModel().where({family_id: family_id})
            .fetchAll({require: false})
            .then(async (model) => {
                if (model)  {
                    let data = await model.toJSON();
                    data.filter((x) => {
                        (x.user_id === user_id && x.tag_id === tag_id) || (x.tag_id)
                    })
                    if(data.length) {
                        return true;
                    }
                }
                return false;
            })
            .catch((err)=> {
                throw err;
            })
    }


    async getFamily(req) {
        const id = req.params.id;

        return await new FamilyModel().where({family_id: id})
            .fetchAll({withRelated: ['tag', 'user']})
            .then(async (res) => {
                if(res) {
                    return await res.toJSON();
                }
            })
            .catch((err)=> {
                throw err;
            })

    }
}

module.exports = Family;