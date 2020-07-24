
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().substr(0, this.currentOperand.toString().length-1)
    }
    positiveNegativeNumber(){
        this.currentOperand=this.currentOperand *(-1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.currentOperand=='')return
        if(this.previousOperand!=''){
            this.compute();
        }
        this.previousOperand=this.currentOperand;
        this.operation=operation;
        this.currentOperand='';


    }
     
    compute(){

        let result;
        let prev =parseFloat(this.previousOperand)
        let current=parseFloat(this.currentOperand)
        if(this.currentOperand!='' &&this.previousOperand!=''){
        switch(this.operation){
            case '%':
                result=prev % current;
                break
            case '÷':
                result=prev / current;
                break
            case 'x':
                result=prev * current;
                break
            case '+':
                result=prev + current;
                break
             case '-':
                result=prev - current;
            default:
            return

        }
        this.currentOperand=result;
        this.previousOperand='';
        this.operation=undefined;
          
    }
    }
  
    updateDisplay(){
        
        this.currentOperandTextElement.innerText=this.currentOperand;
        if(this.operation!=null){
            this.previousOperandTextElement.innerText=`${this.previousOperand} ${this.operation}`;
              
         }
         else{
             previousOperandTextElement.innerText='';
         }
}
limitingScreen(){
    let string=this.currentOperand.toString();
    
             if(string.length>=18)
             {
                 alert("cant write more than 20 number on screen");
             }
     
 }
 

}





const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const positiveNegativeButton = document.querySelector('[data-negative]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
     calculator.appendNumber(button.innerText)
     calculator.limitingScreen();
     calculator.updateDisplay()
     
})

})

operationButtons.forEach(button =>{
     button.addEventListener('click', () => {
     calculator.chooseOperation(button.innerText)
     calculator.updateDisplay()
})

})

equalsButton.addEventListener('click', () =>{
    calculator.compute();
    calculator.updateDisplay()
})

positiveNegativeButton.addEventListener('click', () => {
    calculator.positiveNegativeNumber();
    calculator.updateDisplay();

})

allClearButton.addEventListener('click', () => {
        calculator.clear();
        calculator.updateDisplay();

})


deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();

})





