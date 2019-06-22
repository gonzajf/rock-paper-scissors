(function(){
    'strict mode'

let userScore = 0
let computerScore = 0

const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".scoreboard")
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")     

const rockPaperScissors = {

    computerChoice: function() {
        const choices = ['r', 'p', 's']
        const randomChoice = Math.floor(Math.random() * 3)
        return choices[randomChoice]
    },

    convertLetter: function(letter) {
        if(letter === "r") return "Rock"
        if(letter === "p") return "Paper"
        return "Scissors"
    },
   
    win: function(user, computer) {
        const smallUser = "user".fontsize(3).sub()
        const smallComp = "comp".fontsize(3).sub()
        const userChoice_div = document.getElementById(user) 
        
        userScore++
        userScore_span.innerHTML = userScore
    
        result_div.innerHTML = `${this.convertLetter(user)}${smallUser} beats ${this.convertLetter(computer)}${smallComp}. You Win!`
        
        userChoice_div.classList.add('green-glow')
    
        setTimeout(() => userChoice_div.classList.remove('green-glow'), 300)
    },

    lose: function(user, computer) {
        const smallUser = "user".fontsize(3).sub()
        const smallComp = "comp".fontsize(3).sub()
        const userChoice_div = document.getElementById(user) 
    
        computerScore++
        computerScore_span.innerHTML = computerScore
    
        result_div.innerHTML =  `${this.convertLetter(user)}${smallUser} loses to ${this.convertLetter(computer)}${smallComp}. You Lose!`
    
        userChoice_div.classList.add('red-glow')
    
        setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
    },

    tie: function(user, computer) {
        const smallUser = "user".fontsize(3).sub()
        const smallComp = "comp".fontsize(3).sub()
        const userChoice_div = document.getElementById(user) 
    
        result_div.innerHTML = `${this.convertLetter(user)}${smallUser} equals ${this.convertLetter(computer)}${smallComp}. It's a Draw!`
    
        userChoice_div.classList.add('grey-glow')
    
        setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300)
    
    },

    game: function(userChoice) {
        const cc = this.computerChoice()
        console.log("user choice: " + userChoice + "  computer choice: " + cc)
        switch(userChoice + cc) {
            case "rs":
            case "pr":
            case "sp":
                this.win(userChoice, cc)
                break
            case "rp":
            case "ps":
            case "sr":
                this.lose(userChoice, cc)
                break
            default:
                this.tie(userChoice, cc)
        }
    },

    main: function() {
        rock_div.addEventListener('click', () => this.game("r"))
        paper_div.addEventListener('click', () => this.game("p"))
        scissors_div.addEventListener('click', () => this.game("s"))
    }    
}

rockPaperScissors.main()

})();


