const ob = {
    name: 'John',
    greet: () => {
        console.log(this.name);
    }
};
ob.greet();   //output is null