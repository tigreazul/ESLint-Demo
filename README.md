# 📚 Sistema de Biblioteca - JavaScript con ESLint

Este proyecto demuestra la implementación de un sistema básico de biblioteca usando clases de JavaScript, incluyendo la detección y corrección de errores comunes mediante ESLint.

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Configuración](#instalación-y-configuración)
- [Uso del Sistema](#uso-del-sistema)
- [Errores Detectados y Corregidos](#errores-detectados-y-corregidos)
- [Configuración de ESLint](#configuración-de-eslint)
- [Ejecución y Pruebas](#ejecución-y-pruebas)
- [Funcionalidades](#funcionalidades)
- [Análisis de Errores](#análisis-de-errores)

## 📖 Descripción del Proyecto

Este proyecto incluye:
1. **Código con errores intencionados** para aprendizaje
2. **Versión corregida** del código
3. **Configuración de ESLint** para detección automática de errores
4. **Análisis detallado** de cada tipo de error

## 🗂️ Estructura del Proyecto

```
proyecto-biblioteca/
├── biblioteca-con-errores.js    # Código original con errores
├── biblioteca.js                # Código corregido
├── .eslintrc.js                # Configuración de ESLint
├── package.json                # Dependencias del proyecto
└── README.md                   # Esta documentación
```

## 🔧 Requisitos Previos

- **Node.js** (versión 14 o superior)
- **npm** (viene con Node.js)
- Editor de código (VS Code recomendado)

## ⚙️ Instalación y Configuración

### Paso 1: Inicializar el proyecto
```bash
# Crear directorio del proyecto
mkdir sistema-biblioteca
cd sistema-biblioteca

# Inicializar package.json
npm init -y
```

### Paso 2: Instalar ESLint
```bash
# Instalar ESLint como dependencia de desarrollo
npm install eslint --save-dev

# O instalar globalmente (opcional)
npm install -g eslint
```

### Paso 3: Configurar ESLint
```bash
# Inicializar configuración interactiva
npx eslint --init

# O copiar la configuración proporcionada en .eslintrc.js
```

### Paso 4: Crear archivos del proyecto
```bash
# Crear los archivos JavaScript
touch biblioteca-con-errores.js
touch biblioteca.js
touch .eslintrc.js
```

## 🚀 Uso del Sistema

### Ejecutar el código corregido:
```bash
node biblioteca.js
```

### Analizar errores con ESLint:
```bash
# Analizar archivo con errores
npx eslint biblioteca-con-errores.js

# Analizar archivo corregido
npx eslint biblioteca.js

# Formato detallado
npx eslint biblioteca-con-errores.js --format=table

# Intentar corrección automática
npx eslint biblioteca-con-errores.js --fix
```

## 🐛 Errores Detectados y Corregidos

### 1. **Error de Sintaxis**
```javascript
// ❌ ERROR:
this.libros.forEach(libro => {
    console.log(libro.obtenerDetalle());
};  // <- Punto y coma incorrecto

// ✅ CORREGIDO:
this.libros.forEach(libro => {
    console.log(libro.obtenerDetalles());
});  // <- Paréntesis correcto
```
**ESLint detecta:** `Parsing error: Unexpected token ';'`

### 2. **Variable No Definida**
```javascript
// ❌ ERROR:
agregarLibro(nuevoLibro) {
    this.libros.push(libro);  // <- 'libro' no está definido
}

// ✅ CORREGIDO:
agregarLibro(nuevoLibro) {
    this.libros.push(nuevoLibro);  // <- Usar parámetro correcto
}
```
**ESLint detecta:** `'libro' is not defined (no-undef)`

### 3. **Asignación en Condicional**
```javascript
// ❌ ERROR:
if (this.prestado = true) {  // <- Asignación en lugar de comparación
    return "El libro ya está prestado";
}

// ✅ CORREGIDO:
if (this.prestado === true) {  // <- Comparación exacta
    return "El libro ya está prestado";
}
```
**ESLint detecta:** `Expected a conditional expression and instead saw an assignment (no-cond-assign)`

### 4. **Return Inconsistente**
```javascript
// ❌ ERROR:
devolver() {
    if (this.prestado) {
        this.prestado = false;
        return "Libro devuelto";
    }
    // <- Falta return para el caso else
}

// ✅ CORREGIDO:
devolver() {
    if (this.prestado) {
        this.prestado = false;
        return "Libro devuelto";
    }
    return "El libro no estaba prestado";  // <- Return consistente
}
```
**ESLint detecta:** `Missing return statement (consistent-return)`

### 5. **Index Out of Bounds**
```javascript
// ❌ ERROR:
for (let i = 0; i <= this.libros.length; i++) {  // <- <= causa error
    if (this.libros[i].titulo === titulo) {
        return this.libros[i];
    }
}

// ✅ CORREGIDO:
for (let i = 0; i < this.libros.length; i++) {  // <- < es correcto
    if (this.libros[i].titulo === titulo) {
        return this.libros[i];
    }
}
```
**ESLint detecta:** Parcialmente con reglas avanzadas

### 6. **Nombre de Método Incorrecto**
```javascript
// ❌ ERROR:
obtenerDetalle() {  // <- Nombre inconsistente
    return `${this.titulo} por ${this.autor} (${this.año})`;
}

// Uso:
console.log(libro.obtenerDetalle());  // <- Funciona por casualidad

// ✅ CORREGIDO:
obtenerDetalles() {  // <- Nombre consistente y correcto
    return `${this.titulo} por ${this.autor} (${this.año})`;
}

// Uso:
console.log(libro.obtenerDetalles());  // <- Consistente
```
**ESLint detecta:** No directamente, requiere análisis manual

## 🔧 Configuración de ESLint

### Archivo `.eslintrc.js`:
```javascript
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-undef": "error",              // Variables no definidas
        "no-unused-vars": "warn",         // Variables no usadas
        "no-cond-assign": "error",        // Asignación en condiciones
        "consistent-return": "error",     // Return consistente
        "semi": ["error", "always"],      // Punto y coma obligatorio
        "quotes": ["error", "double"],    // Comillas dobles
        "indent": ["error", 4]            // Indentación 4 espacios
    }
};
```

### Comandos útiles de ESLint:
```bash
# Análisis básico
npx eslint archivo.js

# Formato tabla
npx eslint archivo.js --format=table

# Solo errores (sin warnings)
npx eslint archivo.js --quiet

# Corrección automática
npx eslint archivo.js --fix

# Generar reporte HTML
npx eslint archivo.js --format=html --output-file=reporte.html

# Verificar configuración
npx eslint --print-config archivo.js
```

## 🧪 Ejecución y Pruebas

### Probar código con errores:
```bash
# Esto mostrará errores de ESLint
npx eslint biblioteca-con-errores.js

# Intentar ejecutar (puede fallar)
node biblioteca-con-errores.js
```

### Probar código corregido:
```bash
# Esto no debería mostrar errores
npx eslint biblioteca.js

# Ejecutar correctamente
node biblioteca.js
```

### Salida esperada del código corregido:
```
=== BIBLIOTECA INICIALIZADA ===
Total de libros: 3

=== LISTANDO TODOS LOS LIBROS ===
1984 por George Orwell (1949)
Cien años de soledad por Gabriel García Márquez (1967)
El Principito por Antoine de Saint-Exupéry (1943)

=== PROBANDO PRÉSTAMO DE LIBROS ===
Libro prestado exitosamente
El libro ya está prestado

=== LIBROS PRESTADOS ===
- 1984 por George Orwell (1949)

=== LIBROS DISPONIBLES ===
- Cien años de soledad por Gabriel García Márquez (1967)
- El Principito por Antoine de Saint-Exupéry (1943)

=== BUSCANDO LIBRO ESPECÍFICO ===
Encontrado: 1984 por George Orwell (1949)

=== DEVOLVIENDO LIBRO ===
Libro devuelto
El libro no estaba prestado

=== ESTADO FINAL ===
Libros prestados: 0
Libros disponibles: 3
```

## 🎯 Funcionalidades

### Clase `Libro`:
- ✅ Constructor con título, autor y año
- ✅ Estado de préstamo (prestado/disponible)
- ✅ Método `obtenerDetalles()` - información del libro
- ✅ Método `prestar()` - prestar libro con validación
- ✅ Método `devolver()` - devolver libro con validación

### Clase `Biblioteca`:
- ✅ Colección de libros
- ✅ Método `agregarLibro()` - agregar libros a la colección
- ✅ Método `buscarLibro()` - buscar por título
- ✅ Método `buscarLibroAlternativo()` - búsqueda con `find()`
- ✅ Método `listarLibros()` - mostrar todos los libros
- ✅ Método `obtenerLibrosPrestados()` - filtrar prestados
- ✅ Método `obtenerLibrosDisponibles()` - filtrar disponibles
- ✅ Método `contarLibros()` - contar total

## 📊 Análisis de Errores

### Errores que ESLint SÍ detecta (70%):
- ✅ Errores de sintaxis
- ✅ Variables no definidas
- ✅ Asignaciones en condicionales
- ✅ Returns inconsistentes
- ✅ Problemas de formato

### Errores que ESLint NO detecta (30%):
- ❌ Nombres incorrectos de métodos
- ❌ Lógica de negocio incorrecta
- ❌ Condiciones de borde específicas
- ❌ Errores semánticos del dominio

### Herramientas Complementarias:
- **TypeScript** - Para detección de tipos
- **Unit Tests** - Para lógica de negocio
- **Code Review** - Para errores semánticos
- **SonarJS** - Análisis de calidad

## 🤝 Contribución

Para contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama para tu feature
3. Ejecuta ESLint antes de hacer commit
4. Asegúrate de que todas las pruebas pasen
5. Envía un Pull Request

## 📝 Licencia

Este proyecto es para fines educativos y está disponible bajo la licencia MIT.

## 🆘 Solución de Problemas

### ESLint no encuentra errores:
```bash
# Verificar instalación
npx eslint --version

# Verificar configuración
npx eslint --print-config biblioteca.js
```

### Errores de Node.js:
```bash
# Verificar versión de Node
node --version

# Debe ser 14 o superior
```

### Problemas de configuración:
```bash
# Reinstalar ESLint
npm uninstall eslint
npm install eslint --save-dev

# Reconfigurar
npx eslint --init
```

---

**¡Happy Coding!** 🚀

Para más información sobre ESLint: https://eslint.org/docs/