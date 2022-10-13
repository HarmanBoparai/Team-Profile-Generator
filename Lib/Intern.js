const Intern = require('../Lib/Intern');


class Intern extends Employee{
    constructor(name,id,email,school)
    super(name,id,email) //Employee class acts a super class
    this.school =school;
    this.role ="Intern"
}

getSchool(){
    this.school =school;
}
getRole() {
    return this.role;   
}


module.exports =Intern;