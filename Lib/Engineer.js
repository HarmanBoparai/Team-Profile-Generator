const Engineer = require('../Lib/engineer');

class Engineer extends Employee{
    constructor(name,id,email,github)
    super(name,id,email) //Employee class acts a super class
    this.github =github;
    this.role ="Engineer"
}

getGithub(){
return this.github;
}

getRole() {
    return this.role;   
}

module.exports =Engineer;