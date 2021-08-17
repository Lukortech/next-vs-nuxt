const firstLetterToUppercase = (str: string) => {
    const [first, ...rest] = str.trim().split("");
    return [first.toLocaleUpperCase(), ...rest].join("");
} 
export default firstLetterToUppercase