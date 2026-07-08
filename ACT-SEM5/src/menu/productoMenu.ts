import { PersistenciaService } from '../services/persistenciaService';
import { rl } from '../utils/readline';
import { Producto } from '../models/producto';

const persistencia = new PersistenciaService();

export async function mostrarMenuProductos() {
    let regresar = false;

    while (!regresar) {
        console.log('\n--- GESTIÓN DE PRODUCTOS (.TS) ---');
        console.log('1. Registrar Producto');
        console.log('2. Listar Productos');
        console.log('3. Regresar al Menú Principal');
        
        const opcion = await rl('Seleccione una opción: ');

        switch (opcion) {
            case '1':
                const nomProd = await rl('Nombre del producto: ');
                const precio = parseFloat(await rl('Precio: '));
                const stock = parseInt(await rl('Stock: '));

                try {
                    const productos: Producto[] = await persistencia.leerProductos();
                    const nuevoProd: Producto = { id: Date.now(), nombre: nomProd, precio, stock };
                    productos.push(nuevoProd);
                    await persistencia.guardarProductos(productos);
                    console.log('¡Producto agregado al archivo de datos con éxito!');
                } catch (e: any) {
                    console.log(`No se pudo guardar: ${e.message}`);
                }
                break;

            case '2':
                console.log('\n--- LISTA DE PRODUCTOS ACTUALES ---');
                console.table(await persistencia.leerProductos());
                break;

            case '3':
                regresar = true;
                break;

            default:
                console.log('Opción incorrecta.');
        }
    }
}
