class Employee {
    constructor(name,email,id){
        this.name = name;
        this.email = email;
        this.id = id;
    }
// Created getName,getEmail ,getId and getroleTitle methods to get name,email,id and role of the employee
    getName()
    {
        return this.name;
    }
    getEmail()
    {
        return this.email;
    }
    getId()
    {
        return this.id;
    }
    getroleTitle()
    {
        return "Employee";
    }
}

    module.exports =Employee;