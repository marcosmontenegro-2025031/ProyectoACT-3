import { rl } from '../utils/readline';
import { mostrarMenuProductos } from './productoMenu';
import { mostrarMenuClientes } from './clienteMenu';

export async function mostrarMenu() {
    let salir = false;

    while (!salir) {
        console.log('\n================================================================');
        console.log('   SISTEMA DE GESTIÓN DE PRODUCTOS Y CLIENTES');
        console.log('============================================================');
        console.log('1. Ir al Menú de Productos');
        console.log('2. Ir al Menú de Clientes');
        console.log('3. Salir de la Aplicación');
        console.log('======================================');
        
        const opcion = await rl('Seleccione una opción: ');

        switch (opcion) {
            case '1':
                await mostrarMenuProductos();
                break;

            case '2':
                await mostrarMenuClientes();
                break;

            case '3':
                console.log('Cerrando el sistema central...');
                process.exit(0);
                break;

            default:
                console.log('Opción incorrecta.');
        }
    }
}
