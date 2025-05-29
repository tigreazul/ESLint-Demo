// Sistema básico de biblioteca - Versión corregida
class Libro {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.prestado = false;
    }
    
    // Corregido: Método con nombre correcto
    obtenerDetalles() {
        return `${this.titulo} por ${this.autor} (${this.año})`;
    }
    
    // Corregido: Comparación correcta con == en lugar de asignación =
    prestar() {
        if (this.prestado === true) {  // Corregido: === para comparación exacta
            return "El libro ya está prestado";
        }
        this.prestado = true;
        return "Libro prestado exitosamente";
    }
    
    // Corregido: Return consistente en todos los casos
    devolver() {
        if (this.prestado) {
            this.prestado = false;
            return "Libro devuelto";
        }
        return "El libro no estaba prestado"; // Corregido: agregado return
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }
    
    // Corregido: Usar el parámetro correcto
    agregarLibro(nuevoLibro) {
        this.libros.push(nuevoLibro);  // Corregido: usar 'nuevoLibro'
    }
    
    // Corregido: Condición de bucle correcta para evitar index out of bounds
    buscarLibro(titulo) {
        for (let i = 0; i < this.libros.length; i++) {  // Corregido: < en lugar de <=
            if (this.libros[i].titulo === titulo) {
                return this.libros[i];
            }
        }
        return null;
    }
    
    // Versión alternativa con find() más elegante
    buscarLibroAlternativo(titulo) {
        return this.libros.find(libro => libro.titulo === titulo) || null;
    }
    
    // Corregido: Sintaxis correcta y nombre de método correcto
    listarLibros() {
        this.libros.forEach(libro => {
            console.log(libro.obtenerDetalles());  // Corregido: nombre correcto del método
        });  // Corregido: ); en lugar de };
    }
    
    // Método adicional: Obtener libros prestados
    obtenerLibrosPrestados() {
        return this.libros.filter(libro => libro.prestado);
    }
    
    // Método adicional: Obtener libros disponibles
    obtenerLibrosDisponibles() {
        return this.libros.filter(libro => !libro.prestado);
    }
    
    // Método adicional: Contar total de libros
    contarLibros() {
        return this.libros.length;
    }
}

// Código de prueba
const biblioteca = new Biblioteca();
const libro1 = new Libro("1984", "George Orwell", 1949);
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
const libro3 = new Libro("El Principito", "Antoine de Saint-Exupéry", 1943);

// Agregar libros a la biblioteca
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);

console.log("=== BIBLIOTECA INICIALIZADA ===");
console.log(`Total de libros: ${biblioteca.contarLibros()}`);

console.log("\n=== LISTANDO TODOS LOS LIBROS ===");
biblioteca.listarLibros();

console.log("\n=== PROBANDO PRÉSTAMO DE LIBROS ===");
console.log(libro1.prestar()); // Primera vez
console.log(libro1.prestar()); // Segunda vez (debería decir que ya está prestado)

console.log("\n=== LIBROS PRESTADOS ===");
const librosPrestados = biblioteca.obtenerLibrosPrestados();
librosPrestados.forEach(libro => {
    console.log(`- ${libro.obtenerDetalles()}`);
});

console.log("\n=== LIBROS DISPONIBLES ===");
const librosDisponibles = biblioteca.obtenerLibrosDisponibles();
librosDisponibles.forEach(libro => {
    console.log(`- ${libro.obtenerDetalles()}`);
});

console.log("\n=== BUSCANDO LIBRO ESPECÍFICO ===");
const libroEncontrado = biblioteca.buscarLibro("1984");
if (libroEncontrado) {
    console.log(`Encontrado: ${libroEncontrado.obtenerDetalles()}`);
} else {
    console.log("Libro no encontrado");
}

console.log("\n=== DEVOLVIENDO LIBRO ===");
console.log(libro1.devolver());
console.log(libro1.devolver()); // Segunda vez (no estaba prestado)

console.log("\n=== ESTADO FINAL ===");
console.log(`Libros prestados: ${biblioteca.obtenerLibrosPrestados().length}`);
console.log(`Libros disponibles: ${biblioteca.obtenerLibrosDisponibles().length}`);