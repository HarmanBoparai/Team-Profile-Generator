const Manager = require('../Lib/Manager');

describe("Manager", () => {
    //Initalizing testing
    describe("Initialization", () => {
         //It returns an empty string 
         it("should initiate an object", () => {
            const obj = new Manager();
            expect(typeof (obj)).toEqual("object");
        });
    });

    
    describe('it should return the officeNo, () => {
        it("it should create a new OfficeNo", () => {
            const obj = new Manager("Harman",258,"erharmanboparai@gmail.com",582);
            expect(typeof (obj.OfficeNo)).toEqual(258);
        });
    });


    describe('it should return the employee role from the getRole() method', () => {
        const role = "Manager";
        const obj = new Manager("harman", 582, "erharmanboparai@gmail.com",258);
        expect(obj.getRole()).toEqual(role);
    });
