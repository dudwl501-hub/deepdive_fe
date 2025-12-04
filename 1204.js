const obj = {
    name: "oz"
    sayHello: function () {
        console.log(`Hello, {$this.name}`);
    },

    sayGoodbye : () => {
        console.log(`Good-bye, ${this.name}`);
    },

    printAge() {
        console.log(`${this.name} is ${this.age} years old`);
    },
    };
};

obj.sayHello();
obj.sayGoddBye();
obj.printAge();
