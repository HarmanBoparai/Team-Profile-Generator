const Employee =require('../Lib/Employee');
const employee = new employee('Harman','erharmanboparai@gmail.com','3498');


describe('Employee', () => {
    it('should return the constructor values for the employee object',() => {
        expect(employee.name).toBe('Harman');
        expect(employee.email).toBe('erharmanboparai@gmail.com');
        expect(employee.id).toBe('3498');
});

describe('it should return the employee name from getName() method',() => {
    expect(employee.name).toBe('Harman');
});

describe('it should return the employee email from getEmail() method',() => {
    expect(employee.email).toBe('erharmanboparai@gmail.com');
});

describe('it should return the employee id from the getId() method',() => {
    expect(employee.id).toBe('3498');
});

describe('it should return the employee role from the getroleTitle() method',() => {
    expect(employee.id).toBe('Employee');
});
});