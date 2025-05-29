class Libro {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.prestado = false;
    }
    
    obtenerDetalles() {
        return `${this.titulo} por ${this.autor} (${this.año})`;
    }
    
    prestar() {
        if (this.prestado === true) { 
            return "El libro ya está prestado";
        }
        this.prestado = true;
        return "Libro prestado exitosamente";
    }
    
    devolver() {
        if (this.prestado) {
            this.prestado = false;
            return "Libro devuelto";
        }
        return "El libro no estaba prestado"; 
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }
    
    agregarLibro(nuevoLibro) {
        this.libros.push(nuevoLibro); 
    }
    
    buscarLibro(titulo) {
        for (let i = 0; i < this.libros.length; i++) { 
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
    
    listarLibros() {
        this.libros.forEach(libro => {
            console.log(libro.obtenerDetalles());
        });
    }
    
    obtenerLibrosPrestados() {
        return this.libros.filter(libro => libro.prestado);
    }
    
    obtenerLibrosDisponibles() {
        return this.libros.filter(libro => !libro.prestado);
    }
    
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
console.log(libro1.prestar()); 
console.log(libro1.prestar());

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
console.log(libro1.devolver());

console.log("\n=== ESTADO FINAL ===");
console.log(`Libros prestados: ${biblioteca.obtenerLibrosPrestados().length}`);
console.log(`Libros disponibles: ${biblioteca.obtenerLibrosDisponibles().length}`);