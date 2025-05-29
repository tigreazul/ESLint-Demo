// Sistema básico de biblioteca con errores intencionados
class Libro {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.prestado = false;
    }
    
    // Error 1: Método mal escrito (falta 's' en 'detalles')
    obtenerDetalle() {
        return `${this.titulo} por ${this.autor} (${this.año})`;
    }
    
    // Error 2: Lógica incorrecta en el método prestar
    prestar() {
        if (this.prestado = true) {  // Error: usa = en lugar de ==
            return "El libro ya está prestado";
        }
        this.prestado = true;
        return "Libro prestado exitosamente";
    }
    
    // Error 3: No retorna nada en algunos casos
    devolver() {
        if (this.prestado) {
            this.prestado = false;
            return "Libro devuelto";
        }
        // Error: falta return para el caso else
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }
    
    // Error 4: Parámetro mal nombrado vs lo que se usa
    agregarLibro(nuevoLibro) {
        this.libros.push(libro);  // Error: usa 'libro' en lugar de 'nuevoLibro'
    }
    
    // Error 5: Método que no maneja casos edge
    buscarLibro(titulo) {
        for (let i = 0; i <= this.libros.length; i++) {  // Error: <= causa index out of bounds
            if (this.libros[i].titulo === titulo) {
                return this.libros[i];
            }
        }
        return null;
    }
    
    // Error 6: Sintaxis incorrecta en el método
    listarLibros() {
        this.libros.forEach(libro => {
            console.log(libro.obtenerDetalle());  // Error: método mal nombrado
        });  // Error: punto y coma en lugar de paréntesis de cierre
    }
}

// Código de prueba
const biblioteca = new Biblioteca();
const libro1 = new Libro("1984", "George Orwell", 1949);
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);

// Error 7: Intentar usar método que no existe
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

console.log("=== Intentando prestar libro ===");
console.log(libro1.prestar());
console.log(libro1.prestar()); // Debería decir que ya está prestado

console.log("=== Listando libros ===");
biblioteca.listarLibros();

console.log("=== Buscando libro ===");
const libroEncontrado = biblioteca.buscarLibro("1984");
console.log(libroEncontrado);