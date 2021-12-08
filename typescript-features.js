var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log("Human name: ".concat(this.name, " and age ").concat(this.age ? this.age : 'does not set'));
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, possition) {
        var _this = _super.call(this, name) || this;
        _this.skills = [];
        _this.possition = possition;
        return _this;
    }
    Employee.prototype.findInDb = function (name) {
        return new Employee(name, this.possition);
    };
    Employee.prototype.addSkill = function (skillName) {
        this.skills.push(skillName);
    };
    Employee.prototype.getAllSkills = function () {
        for (var _i = 0, _a = this.skills; _i < _a.length; _i++) {
            var skill = _a[_i];
            console.log(skill);
        }
    };
    return Employee;
}(Person));
var employeeAnton = new Employee("Anton", "Front end developer");
employeeAnton.display();
employeeAnton.addSkill("Html");
employeeAnton.addSkill("CSS");
employeeAnton.addSkill("Js");
employeeAnton.getAllSkills();
