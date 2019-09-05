"use strict"

class device {
    constructor(name) {
        this.name = name;
        this.status = 0;
    }

    update(val) {
        this.status = val;
    }
}

class app {
    constructor(dvc) {
        this.dvc = dvc;
    }

    handler(val) {
        this.dvc.update(val)
    }
}

let de = new device("hh");
let de2 = new device("dd");
let ap = new app(de);

console.log(de==de2);
console.log(de===de2);

console.log(de==ap.dvc);
console.log(de===ap.dvc);

console.log(de.status);
console.log(ap.dvc.status);

ap.handler(10);
console.log(de.status);
console.log(ap.dvc.status);

de.update(20);
console.log(de.status);
console.log(ap.dvc.status);