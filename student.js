//how to create the own Module Create

const getname = () =>{                 
    return "Shaoun Chandra Shill";
}

const getage = () =>{
    return "22";
} 

const cgpa = 3.72;

/*
exports.name = getname;
exports.age = getage;
exports.result = cgpa;
 */

// All module togetgher use 

module.exports = {
    getname,
    getage,
    cgpa
}
