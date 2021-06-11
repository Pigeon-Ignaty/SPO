import Token from "./Token";
import {tokenTypesList} from "./TokenType";

export default class Lexer {
    code: string;
    pos: number = 0;
    tokenList: Token[] = []


    constructor(code: string) {
        this.code = code;
    }

    lexAnalysis(): Token[] {
        while (this.nextToken()) {}
        this.tokenList = this.tokenList.filter(token => token.type.type_name !== tokenTypesList.SPACE.type_name);
        return this.tokenList;
    }

    nextToken(): boolean {
        if (this.pos >= this.code.length) {
            return false;
        }
        const tokenTypesValues = Object.values(tokenTypesList)
        for (let i = 0; i < tokenTypesValues.length; i++) {
            const tokenType = tokenTypesValues[i];
            const operator = new RegExp('^' + tokenType.operator);
            const result = this.code.substr(this.pos).match(operator);
            if(result && result[0]) {
                const token = new Token(tokenType, result[0], this.pos);
                this.pos += result[0].length;
                this.tokenList.push(token);
                return true;
            }
        }
        throw new Error(`error in position ${this.pos} `)
    }

}
