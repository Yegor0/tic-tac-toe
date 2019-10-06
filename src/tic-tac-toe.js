class TicTacToe {
    constructor() {
        this.currentSymbol = 'x';
        this.array = [[null, null, null],[null, null, null],[null, null, null]];
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.array[rowIndex][columnIndex] == null) {
            this.array[rowIndex][columnIndex] = this.currentSymbol;
            this.currentSymbol = (this.currentSymbol == 'x') ? 'o' : 'x';
        }
        return null;
    }

    isFinished() {
        if(this.isDraw() || this.getWinner()) return true;
        return false;
    }

    getWinner() {
        for(let i = 0; i < 3; i++) {
            if(this.array[i][0] == this.array[i][1] && this.array[i][0] == this.array[i][2]) return this.array[i][0];
            if(this.array[0][i] == this.array[1][i] && this.array[0][i] == this.array[2][i]) return this.array[0][i];
        }
        if(this.array[0][0] == this.array[1][1] && this.array[0][0] == this.array[2][2]) return this.array[0][0];
        if(this.array[0][2] == this.array[1][1] && this.array[0][2] == this.array[2][0]) return this.array[0][2];

        return null;
    }

    noMoreTurns() {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(this.array[i][j] == null) return false;
            }
        }
        return true;
    }

    isDraw() {
        if(this.getWinner() == null && this.noMoreTurns() == true) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.array[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
