function Logger(logString : string) { 
    return function(constructor : Function) { 
        console.log(logString)
        console.log(constructor)
    } 
}



function WithTemplate(template : string , hookId : string) { 
    return function(constructor : any)  { 
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if (hookEl) { 
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}
@Logger('loggin')
@WithTemplate('<h1>My Person Object</h1>' , 'app')

class Person {
    name = "Max" 
    constructor() { 
        console.log("creating person object")
    }
}

const pers = new Person()

console.log(pers)

// ----------


function Log(target: any , peopertyName : string){
    console.log('Property decorator')
    console.log(target, peopertyName)
}
class Product { 
    @Log
    title : string; 
    private _price : number;

    set price(val : number){ 
        if (val > 0){
            this._price = val
        } else { 
            throw new Error('Invalid Price - should be positice')
        }
    }
    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}