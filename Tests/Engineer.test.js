const Engineer = require('../Lib/engineer');

describe("Engineer", () => {
    //Initalizing testing
    describe("Initialization", () => {
         //It returns an empty string 
         it("should initiate an object", () => {
            const obj = new Engineer();
            expect(typeof (obj)).toEqual("object");
        });
    });

    describe('it should return the Github username', () => {
        it('it should create a new github object', () => {
            const obj = new Engineer("Alec",15,"alec@gmail.com","Alec123");
            expect(typeof (obj.getGithub)).toEqual("Alec123");
        });
    });

    
    describe('it should return the role from the getRole() method', () => {
        const role = "Engineer";
        const obj = new Engineer("Alec",15,"alec@gmail.com","Alec123");
        expect(obj.getRole()).toEqual(role);
    });
});
