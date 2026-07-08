import { PersistenciaService } from '../services/persistenciaService';
import { rl } from '../utils/readline';
import { Cliente } from '../models/cliente';

const persistencia = new PersistenciaService();

export async function mostrarMenuClientes() {
    let regresar = false;

    while (!regresar) {
        console.log('\n--- GESTIÓN DE CLIENTES (.TS) ---');
        console.log('1. Registrar Cliente');
        console.log('2. Listar Clientes');
        console.log('3. Regresar al Menú Principal');
        
        const opcion = await rl('Seleccione una opción: ');

        switch (opcion) {
            case '1':
                const nomCli = await rl('Nombre del cliente: ');
                const email = await rl('Email: ');

                try {
                    const clientes: Cliente[] = await persistencia.leerClientes();
                    const nuevoCli: Cliente = { id: Date.now(), nombre: nomCli, email, activo: true };
                    clientes.push(nuevoCli);
                    await persistencia.guardarClientes(clientes);
                    console.log('¡Cliente agregado al archivo de datos con éxito!');
                } catch (e: any) {
                    console.log(`No se pudo guardar: ${e.message}`);
                }
                break;

            case '2':
                console.log('\n--- LISTA DE CLIENTES ACTUALES ---');
                console.table(await persistencia.leerClientes());
                break;

            case '3':
                regresar = true;
                break;

            default:
                console.log('Opción incorrecta.');
        }
    }
}
