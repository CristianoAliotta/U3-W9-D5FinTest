interface Imobile {
    credit: number;
    callTime: number;
    topUp(ele: number): number;
    call(ele: number): void;
    customerService(): void;
    callLog(): void;
    logReset(): void;
}

abstract class Mobile implements Imobile {
    credit: number = 0;
    callTime: number = 0;
    topUp(ele: number): number {
        return this.credit += ele
    };
    call(ele: number): void {
        if (ele * 0.2 <= this.credit) {
            this.callTime += ele
            this.credit -= (ele * 0.2)
        } else {
            console.log("Il tuo credito residuo non è sufficiente per effettuare la chiamata");
        }
    };
    customerService(): void {
        console.log("Il tuo credito residuo è " + this.credit + "€");
    };
    callLog(): void {
        console.log("Hai effetuato chiamate per un totale di " + this.callTime + " minuti");
    };
    logReset(): void {
        this.callTime = 0
        console.log("l'elenco delle chiamate è stato ripristinato");

    };
}
class TMobile extends Mobile {
    call(ele: number): void {
        if (ele * 0.15 <= this.credit) {
            this.callTime += ele
            this.credit -= (ele * 0.15)
        } else {
            console.log("Il tuo credito residuo non è sufficiente per effettuare la chiamata");
        }
    };
}
class Verizon extends Mobile {
    call(ele: number): void {
        if (ele * 0.20 <= this.credit) {
            this.callTime += ele
            this.credit -= (ele * 0.20)
        } else {
            console.log("Il tuo credito residuo non è sufficiente per effettuare la chiamata");
        }
    };
}
class O2 extends Mobile {
    call(ele: number): void {
        if (ele * 0.25 <= this.credit) {
            this.callTime += ele
            this.credit -= (ele * 0.25)
        } else {
            console.log("Il tuo credito residuo non è sufficiente per effettuare la chiamata");
        }
    };
}
class User {
    name: string;
    lastName: string;
    phoneNumber: number;
    provider?: (Verizon | TMobile | O2)
    constructor(name: string, lastName: string, phoneNumber: number) {
        this.name = name
        this.lastName = lastName
        this.phoneNumber = phoneNumber
    }
}

let newVerizon = new Verizon();
let msv = new User("Matteo", "Salvini", 3894217495);
msv.provider = newVerizon;
let newTMobile = new TMobile();
let gmt = new User("Giorgia", "Meloni", 3391238241);
gmt.provider = newTMobile;
let newO2 = new O2();
let sbo = new User("Silvio", "Berlusconi", 3356276382)
sbo.provider = newO2

console.log("--------------------------------------------------------");
console.log("!!!First user!!!");
console.log("--------------------------------------------------------");

msv.provider.customerService();
msv.provider.topUp(40);
msv.provider.customerService();
msv.provider.callLog();
msv.provider.call(25);
msv.provider.callLog();
msv.provider.customerService()
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
gmt.provider.customerService()
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
sbo.provider.customerService()
sbo.provider.logReset();
sbo.provider.callLog();
console.log("--------------------------------------------------------");
console.log("--------------------------------------------------------");
let btn10 = document.querySelector('button:nth-of-type(1)') as HTMLButtonElement
btn10.addEventListener('click', function add10() {
    msv.provider?.topUp(10);
    let p = document.querySelector('p') as HTMLParagraphElement;
    p.innerText = `Il tuo credito attuale è di ${msv.provider?.credit}€.`
})
let btn15 = document.querySelector('button:nth-of-type(2)') as HTMLButtonElement
btn15.addEventListener('click', function add15() {
    msv.provider?.topUp(15);
    let p = document.querySelector('p') as HTMLParagraphElement;
    p.innerText = `Il tuo credito attuale è di ${msv.provider?.credit}€.`
})
let btn20 = document.querySelector('button:nth-of-type(3)') as HTMLButtonElement
btn20.addEventListener('click', function add20() {
    msv.provider?.topUp(20);
    let p = document.querySelector('p') as HTMLParagraphElement;
    p.innerText = `Il tuo credito attuale è di ${msv.provider?.credit}€.`
})
let btnCredit = document.querySelector('button:nth-of-type(4)') as HTMLButtonElement
btnCredit.addEventListener('click', function addCredit() {
    msv.provider?.customerService();
    let p = document.querySelector('p') as HTMLParagraphElement;
    p.innerText = `Il tuo credito residuo è di ${msv.provider?.credit}€.`
})
let btnLog = document.querySelector('button:nth-of-type(5)') as HTMLButtonElement
btnLog.addEventListener('click', function addLog() {
    msv.provider?.callLog();
    let p = document.querySelector('p') as HTMLParagraphElement;
    p.innerText = `Hai parlato al telefono per ${msv.provider?.callTime} minuti.`
})
let btnCall = document.querySelector('button:nth-of-type(6)') as HTMLButtonElement
btnCall.addEventListener('click', function addCall() {
    msv.provider?.call(10); //minuti , work in progress
    let p = document.querySelector('p') as HTMLParagraphElement;
    p.innerText = `La chiamata è durata 10 minuti`
})