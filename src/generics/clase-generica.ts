/*definicion clase generica*/ 
export abstract class ClaseGenerica<T>{

    constructor(private id: number) {
    }
    public save(entidad: T): void {
        console.log('grabando entidad generica',entidad);
    }
    
}

/*funcion generica
export function fx<T>(){}
 */ 

/* Subclase, clase hija del generic*/ 
export class SubClase extends ClaseGenerica<string>{

}

export class SubClaseB extends ClaseGenerica<number>{

}