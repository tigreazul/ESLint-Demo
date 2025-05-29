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
        // Reglas para detectar errores comunes
        "no-undef": "error",              // Variables no definidas
        "no-unused-vars": "warn",         // Variables no usadas
        "no-console": "off",              // Permitir console.log
        "no-cond-assign": "error",        // Asignación en condiciones
        "no-constant-condition": "error", // Condiciones constantes
        "no-unreachable": "error",        // Código inalcanzable
        "consistent-return": "error",     // Return consistente
        "no-array-constructor": "error",  // Constructor de array
        "semi": ["error", "always"],      // Punto y coma obligatorio
        "quotes": ["error", "double"],    // Comillas dobles
        "indent": ["error", 4],           // Indentación 4 espacios
        
        // Reglas específicas para nuestros errores
        "no-implicit-globals": "error",
        "prefer-const": "warn",
        "no-var": "error"
    }
};