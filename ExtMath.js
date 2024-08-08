class ExtMath {
    /*
    Returns the modulo of a negative number.
    a: number (to be modded)
    b: number (modulus)
    */
    static posmod(a, b) {
        if (b < 0) {
            return this.iposmod(a, b);
        }
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

    static harmonic(n) {
        let sum = 1;
        for (let i = 2; i <= n; i++) {
            sum += 1 / i;
        }
        return sum;
    }

    static aharmonic(n) {
        let sum = 1;
        for (let i = 2; i <= n; i++) {
            sum += (i % 2 == 1 ? 1 : -1) / i;
        }
        return sum;
    }
}