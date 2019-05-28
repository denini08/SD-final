const mongoose = require('mongoose');
const Ad = mongoose.model('Ad');


class AdController{

    constructor(){

    }


    find(str){
        return new Promise((resolve, reject)=>{
            let obj =   {title: new RegExp(".*" + str.replace(/(\W)/g, "\\$1") + ".*")};
            let obj2 = {description: new RegExp(".*" + str.replace(/(\W)/g, "\\$1") + ".*")};
        
            Ad.find().or([obj,obj2]).then((retorno) =>{ 
                resolve(retorno);
            }).catch((err)=>{
                console.log(JSON.stringify(err));
                reject(err);
            });
        });
    }

    listAds(){
        return new Promise((resolve, reject) =>{
            Ad.find().then((res) =>{
                resolve(res);
            }).catch((err) =>{
                reject(err);
            });
        });
    }

    insertAd(Ad_){
        return new Promise((resolve, reject) =>{
            Ad.create(Ad_).then((res) =>{
                resolve(res);
            }).catch((err) =>{
                reject(err);
            });
        });
    }

    getAd(id){
        return new Promise((resolve, reject) =>{
            Ad.findById(id).then((res)=>{
                resolve(res);
            }).catch((err) =>{
                reject(err);
            });
        });
    }

    deleteAd(id){
        return new Promise((resolve, reject) =>{
            Ad.findByIdAndDelete(id).then((res)=>{
                resolve(res);
            }).catch((err) =>{
                reject(err);
            });
        });
    }

}

module.exports = AdController;