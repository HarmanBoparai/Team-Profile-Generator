const Employee = require('../Lib/Employee');

describe("Employee", () => {
    //Initalizing testing
    describe("Initialization", () => {
        //It returns an empty string 
        it("should initiate an object", () => {
            const obj = new Employee();
            expect(typeof (obj)).toEqual("object");
        });
    });

    describe('it should return the employee name from getName() method', () => {
        it('it should create a new Name for employee object', () => {
            const obj = new Employee();
            expect(typeof (obj.getName)).toEqual("Harman");
        });
    });
        
    describe('it should return the employee Id from getId() method', () => {
        it('it should create a new Name for employee object', () => {
            const obj = new Employee();
            expect(typeof (obj.getId)).toEqual("582");
        });
    });
        describe('it should return the employee email from getEmail() method', () => {
          
            it('it should create a new Name for employee object', () => {
                const obj = new Employee();
                expect(typeof (obj.getEmail)).toEqual("erharmanboparai@mail.com");
            });
        });

        describe('it should return the employee role from the getRole() method', () => {
            const role = "Employee";
            const obj = new Employee("harman", 582, "erharmanboparai@gmail.com");
            expect(obj.getRole()).toEqual(role);
        });
    });


