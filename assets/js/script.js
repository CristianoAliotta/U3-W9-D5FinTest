"use strict";
class Mobile {
    constructor() {
        this.credit = 0;
        this.callTime = 0;
    }
    topUp(ele) {
        return this.credit += ele;
    }
    ;
    call(ele) {
        if (ele * 0.2 <= this.credit) {
            this.callTime += ele;
            this.credit -= (ele * 0.2);
        }
        else {
            console.log("Il tuo credito residuo non è sufficiente per effettuare la chiamata");
        }
    }
    ;
    customerService() {
        console.log("Il tuo credito residuo è " + this.credit + "€");
    }
    ;
    callLog() {
        console.log("Hai effetuato chiamate per un totale di " + this.callTime + " minuti");
    }
    ;
    logReset() {
        this.callTime = 0;
        console.log("l'elenco delle chiamate è stato ripristinato");
    }
    ;
}
class TMobile extends Mobile {
    call(ele) {
        if (ele * 0.15 <= this.credit) {
            this.callTime += ele;
            this.credit -= (ele * 0.15);
        }
        else {
            console.log("Il tuo credito residuo non è sufficiente per effettuare la chiamata");
        }
    }
    ;
}
class Verizon extends Mobile {
    call(ele) {
        if (ele * 0.20 <= this.credit) {
            this.callTime += ele;
            this.credit -= (ele * 0.20);
        }
        else {
            console.log("Il tuo credito residuo non è sufficiente per effettuare la chiamata");
        }
    }
    ;
}
class O2 extends Mobile {
    call(ele) {
        if (ele * 0.25 <= this.credit) {
            this.callTime += ele;
            this.credit -= (ele * 0.25);
        }
        else {
            console.log("Il tuo credito residuo non è sufficiente per effettuare la chiamata");
        }
    }
    ;
}
class User {
    constructor(name, lastName, phoneNumber) {
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}
let newVerizon = new Verizon();
let msv = new User("Matteo", "Salvini", 3894217495);
msv.provider = newVerizon;
let newTMobile = new TMobile();
let gmt = new User("Giorgia", "Meloni", 3391238241);
gmt.provider = newTMobile;
let newO2 = new O2();
let sbo = new User("Silvio", "Berlusconi", 3356276382);
sbo.provider = newO2;
console.log("--------------------------------------------------------");
console.log("!!!First user!!!");
console.log("--------------------------------------------------------");
msv.provider.customerService();
msv.provider.topUp(40);
msv.provider.customerService();
msv.provider.callLog();
msv.provider.call(25);
msv.provider.callLog();
msv.provider.customerService();
msv.provider.logReset();
msv.provider.callLog();
console.log("--------------------------------------------------------");
console.log("!!!Second user!!!");
console.log("--------------------------------------------------------");
gmt.provider.customerService();
gmt.provider.topUp(40);
gmt.provider.customerService();
gmt.provider.callLog();
gmt.provider.call(25);
gmt.provider.callLog();
gmt.provider.customerService();
gmt.provider.logReset();
gmt.provider.callLog();
console.log("--------------------------------------------------------");
console.log("!!!Third user!!!");
console.log("--------------------------------------------------------");
sbo.provider.customerService();
sbo.provider.topUp(40);
sbo.provider.customerService();
sbo.provider.callLog();
sbo.provider.call(25);
sbo.provider.callLog();
sbo.provider.customerService();
sbo.provider.logReset();
sbo.provider.callLog();
let btn10 = document.querySelector('button:nth-of-type(1)');
btn10.addEventListener('click', function add10() {
    var _a, _b;
    (_a = msv.provider) === null || _a === void 0 ? void 0 : _a.topUp(10);
    let p = document.querySelector('p');
    p.innerText = `Il tuo credito attuale è di ${(_b = msv.provider) === null || _b === void 0 ? void 0 : _b.credit}€.`;
});
let btn15 = document.querySelector('button:nth-of-type(2)');
btn15.addEventListener('click', function add15() {
    var _a, _b;
    (_a = msv.provider) === null || _a === void 0 ? void 0 : _a.topUp(15);
    let p = document.querySelector('p');
    p.innerText = `Il tuo credito attuale è di ${(_b = msv.provider) === null || _b === void 0 ? void 0 : _b.credit}€.`;
});
let btn20 = document.querySelector('button:nth-of-type(3)');
btn20.addEventListener('click', function add20() {
    var _a, _b;
    (_a = msv.provider) === null || _a === void 0 ? void 0 : _a.topUp(20);
    let p = document.querySelector('p');
    p.innerText = `Il tuo credito attuale è di ${(_b = msv.provider) === null || _b === void 0 ? void 0 : _b.credit}€.`;
});
let btnCredit = document.querySelector('button:nth-of-type(4)');
btnCredit.addEventListener('click', function addCredit() {
    var _a, _b;
    (_a = msv.provider) === null || _a === void 0 ? void 0 : _a.customerService();
    let p = document.querySelector('p');
    p.innerText = `Il tuo credito residuo è di ${(_b = msv.provider) === null || _b === void 0 ? void 0 : _b.credit}€.`;
});
let btnLog = document.querySelector('button:nth-of-type(5)');
btnLog.addEventListener('click', function addLog() {
    var _a, _b;
    (_a = msv.provider) === null || _a === void 0 ? void 0 : _a.callLog();
    let p = document.querySelector('p');
    p.innerText = `Hai parlato al telefono per ${(_b = msv.provider) === null || _b === void 0 ? void 0 : _b.callTime} minuti.`;
});
let btnCall = document.querySelector('button:nth-of-type(6)');
btnCall.addEventListener('click', function addCall() {
    var _a;
    (_a = msv.provider) === null || _a === void 0 ? void 0 : _a.call(10); //minuti , work in progress
    let p = document.querySelector('p');
    p.innerText = `La chiamata è durata 10 minuti`;
});
