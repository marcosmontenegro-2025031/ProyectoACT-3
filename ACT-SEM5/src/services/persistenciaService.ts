import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';

export class PersistenciaService {
    private rutaProductos = join(process.cwd(), 'src/data/productos.ts');
    private rutaClientes = join(process.cwd(), 'src/data/clientes.ts');

    private limpiarContenidoTS(contenido: string): any[] {
        if (!contenido.trim()) return [];
        const inicio = contenido.indexOf('[');
        const fin = contenido.lastIndexOf(']');
        if (inicio === -1 || fin === -1) return [];
        const jsonTexto = contenido.substring(inicio, fin + 1);
        return JSON.parse(jsonTexto);
    }

    async guardarProductos(datos: any[]): Promise<void> {
        try {
            for (const p of datos) {
                if (!p.id || !p.nombre || p.precio <= 0 || p.stock < 0) {
                    throw new Error(`Datos inválidos en el producto: ${p.nombre || 'Sin nombre'}`);
                }
            }
            const codigoTS = `export const productos = ${JSON.stringify(datos, null, 2)};`;
            await writeFile(this.rutaProductos, codigoTS, 'utf-8');
        } catch (error: any) {
            console.error(`[Error Escritura Productos]: ${error.message}`);
            throw error;
        }
    }

    async leerProductos(): Promise<any[]> {
        try {
            const contenido = await readFile(this.rutaProductos, 'utf-8');
            return this.limpiarContenidoTS(contenido);
        } catch (error: any) {
            if (error.code === 'ENOENT') {
                await this.guardarProductos([]);
                return [];
            }
            console.error(`[Error Lectura Productos]: ${error.message}`);
            return [];
        }
    }

    async guardarClientes(datos: any[]): Promise<void> {
        try {
            for (const c of datos) {
                if (!c.id || !c.nombre || !c.email.includes('@')) {
                    throw new Error(`Datos inválidos o email incorrecto en cliente: ${c.nombre || 'Sin nombre'}`);
                }
            }
            const codigoTS = `export const clientes = ${JSON.stringify(datos, null, 2)};`;
            await writeFile(this.rutaClientes, codigoTS, 'utf-8');
        } catch (error: any) {
            console.error(`[Error Escritura Clientes]: ${error.message}`);
            throw error;
        }
    }

    async leerClientes(): Promise<any[]> {
        try {
            const contenido = await readFile(this.rutaClientes, 'utf-8');
            return this.limpiarContenidoTS(contenido);
        } catch (error: any) {
            if (error.code === 'ENOENT') {
                await this.guardarClientes([]);
                return [];
            }
            console.error(`[Error Lectura Clientes]: ${error.message}`);
            return [];
        }
    }
}
