export default class TokenType {
    type_name: string;
    operator: string;


    constructor(type_name: string, operator: string) {
        this.type_name = type_name;
        this.operator = operator;
    }
}

export const tokenTypesList = {
    'NUM': new TokenType('NUMBER', '[0-9]*'),
    'VAR': new TokenType('VARIABLE', '[a-z,A-Z]*'),
    'POINT': new TokenType('POINT', '.'),//конец выражения
    'SPACE': new TokenType('SPACE', '[ \\n\\t\\r]'),
    'ASSIGN_OPER': new TokenType('ASSIGN_OPER', '='),
    'OUTPUT': new TokenType('OUTPUT', 'OUTPUT'),
    'DIVISION': new TokenType('DIVISION', '/'),
    'MULTIPLICATION': new TokenType('MULTIPLICATION', '*'),
    'PLUS': new TokenType('PLUS', '+'),
    'MINUS': new TokenType('MINUS', '-'),
    'LPAR': new TokenType('LPAR', '\\('),
    'RPAR': new TokenType('RPAR', '\\)'),
    'WHILE': new TokenType('WHILE', 'while'),
    'IF': new TokenType('IF', 'if')
}