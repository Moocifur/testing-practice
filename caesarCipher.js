// caesarCipher.js

export function caesarCipher(str, shift) {
    return str.split('').map(char => {
        // Check if character is a lowercase letter
        if (char >= 'a' && char <= 'z') {
            // Get position in alphabet (0-25)
            const pos = char.charCodeAt(0) -97;
            // Shift and wrap around using modulo
            const newPos = (pos + shift) % 26;
            // Convert back to character
            return String.fromCharCode(newPos + 97);
        }
        // For now, just return non-lowercase characters unchanged
        return char;
    }).join('');
}