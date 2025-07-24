const inquirer = require("inquirer");
const Enemigo = require("../models/enemigos");

class GestorBatalla {
    constructor(jugador, enemigo) {
        this.jugador = jugador;
        this.enemigo = enemigo;
    }

    iniciar() {
        console.log(`🔥 ¡La batalla comienza entre ${this.jugador.nombre} y la criatura ${this.enemigo.nombre}!\n`);

        while (this.jugador.salud > 0 && this.enemigo.salud > 0) {
            // Turno del jugador
            const dañoJugador = Math.max(0, this.jugador.ataque - this.enemigo.defensa);
            this.enemigo.salud -= dañoJugador;
            console.log(`⚔️ ${this.jugador.nombre} golpea a ${this.enemigo.nombre} e inflige ${dañoJugador} de daño.`);
            if (this.enemigo.salud <= 0) {
                console.log(`💣 ¡${this.enemigo.nombre} ha sido eliminado!\n`);
                break;
            }

            // Turno del enemigo
            const dañoEnemigo = Math.max(0, this.enemigo.ataque - this.jugador.defensa);
            this.jugador.salud -= dañoEnemigo;
            console.log(`👾 ${this.enemigo.nombre} contraataca y daña a ${this.jugador.nombre} con ${dañoEnemigo} puntos.`);

            // Estado actual
            console.log(`❤️ Vida de ${this.jugador.nombre}: ${this.jugador.salud}`);
            console.log(`💀 Vida de ${this.enemigo.nombre}: ${this.enemigo.salud}`);
            console.log("───────────────────────────────");
        }

        // Resultado final
        if (this.jugador.salud > 0) {
            console.log(`🏅 ¡Victoria para ${this.jugador.nombre}! Has sobrevivido al combate.\n`);
        } else {
            console.log(`💀 ${this.jugador.nombre} ha caído en batalla frente a ${this.enemigo.nombre}...\n`);
        }
    }
}

module.exports = GestorBatalla;

async function iniciarBatalla(personajes) {
    if (!personajes.length) {
        console.log("⚠️ No hay personajes disponibles. Crea uno antes de luchar.");
        return;
    }

    const { elegido } = await inquirer.prompt([
        {
            type: "list",
            name: "elegido",
            message: "👤 Elige al personaje con el que combatirás:",
            choices: personajes.map((p, index) => ({
                name: `🎖️ ${p.nombre} (Nivel ${p.nivel})`,
                value: index
            }))
        }
    ]);

    const jugador = personajes[elegido];

    // Crear enemigo aleatorio
    const enemigo = Enemigo.crearAleatorio();

    // Mostrar enemigo generado
    console.log(`⚠️  Enemigo detectado: ${enemigo.nombre}`);
    console.log(`📊 Salud: ${enemigo.salud} | Ataque: ${enemigo.ataque} | Defensa: ${enemigo.defensa}\n`);

    // Iniciar la batalla
    const batalla = new GestorBatalla(jugador, enemigo);
    batalla.iniciar();
}

module.exports = iniciarBatalla;
