const checkForSequence = (option1, option2, option3 ) => {
        return option1 === option2 && option2 === option3
}
export const checkForWinner = (board) => {



    // 0 1 2
    // 3 4 5
    // 6 7 8
    
    // rows

    for(let i=0; i<9; i+=3) {
        if(checkForSequence(board[i], board[i+1], board[i+2])) {
            console.log("Row Winner")
            return true
        }

    }

    // columns
    
    for(let i=0; i<3; i+=1) {
        if(checkForSequence(board[i], board[i+3], board[i+6])) {
            console.log("Column Winner")
            return true
        }

    }

    // diagnols1
    if(board[0] === board[4] && board[4] === board[8]) {
        console.log("We have a winner")
        return true
    }

    // diagnols2
    if(board[2] === board[4] && board[4] === board[6]) {
        console.log("We have a winner")
        return true
    }

}