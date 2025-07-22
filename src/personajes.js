
class personaje {
    constructor(nombre,clase,nivel=1,salud=100,fuerza=5,defensa=10,ataque=5){
        this.nombre = nombre;     // Nombre del personaje
        this.clase = clase;       // Clase: Guerrero, Mago, Arquero, etc.
        this.nivel = nivel;       // Nivel del personaje
        this.salud = salud;       // Puntos de vida actuales
        this.fuerza = fuerza;     // Daño base que puede hacer
        this.defensa = defensa;   // Capacidad para reducir daño recibido
        //this.velocidad = velocidad; // Influye en el orden de turnos
        this.ataque=ataque
    }

    monstrarInfo(){
        console.log("este metodo muestra el ataque de" + this.nombre)
    }

    vivo(){
    return this.salud>0;
    }
    atacar(){
        daño= this.ataque-
        this.ataque
    }

    recibirDaño(){
        recibe= 
    }
}