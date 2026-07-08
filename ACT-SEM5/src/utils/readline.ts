import * as readline from 'readline';

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const rl = (pregunta: string): Promise<string> => {
    return new Promise((resolve) => {
        interfaz.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
};
