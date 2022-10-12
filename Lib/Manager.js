const Employee =require('../Lib/Employee');

class Manager extends Employee{ 
    //it extends the Employee Class,Employee is an ancestor class
    super(name,email,id,officeNo);
    this.officeNo = this.officeNo;
}
    getofficeNo(){
        return this.officeNo;
    }

   getroleTitle()
    {
        return "Manager";
    }
}


module.exports =Manager;