class ExtMath {
    /*
    Returns the modulo of a negative number.
    a: number (to be modded)
    b: number (modulus)
    */
    static posmod(a, b) {
        return ((a % b) + b) % b;
    }
    /*
    Returns the modulo of a negative modulus.
    a: number (to be modded)
    b: number (modulus)
    */
    static iposmod(a, b) {
        a = a * -1;
        b = b * -1;
        return this.posmod(a, b);
    }
}