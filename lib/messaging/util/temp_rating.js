module.exports = (temp) => {
    const ratings = {
        0:  { min: -50, max: -10 },
        1:  { min:  -9, max:   5 },
        2:  { min:   6, max:  20 },
        3:  { min:  21, max:  35 },
        4:  { min:  36, max:  45 },
        5:  { min:  46, max:  55 },
        6:  { min:  56, max:  65 },
        7:  { min:  66, max:  75 },
        8:  { min:  76, max:  85 },
        9:  { min:  86, max:  95 },
        10: { min:  96, max: 120 },
    };
    
    const keys = Object.keys(ratings);
    for (let i = 0; i < keys.length; i++) {
        const obj = ratings[keys[i]];
        const { max, min } = obj;

        if (min <= temp && temp <= max) {
            return keys[i];
        }
    }
    return -1
}
