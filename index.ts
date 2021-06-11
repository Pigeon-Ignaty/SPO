import Lexer from "./Lexer";


const code =
    `
    a = b + c.
    OUTPUT a.
    v = b - a.
    n = c - s.
    m = s / p.
    s = a * v.
    `

const lexer = new Lexer(code);

lexer.lexAnalysis()
