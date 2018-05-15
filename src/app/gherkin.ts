interface Step {
    text:string;
}


export class Gherkin {

    static ELEMENT_STEP_ID = 'steps';
    static ELEMENT_STEP_INPUT_ID = 'stepInput';

    protected steps: Array<Step> = [];


    constructor(){
        this.eventInput();
        this.steps = this.getDefaultSteps();
    }

    public outputSteps() {
        this.clearOutput();
        this.getStepHtml().innerHTML = this.getSteps().join(' <br/>');
    }

    public clearOutput() {
        this.getStepHtml().innerText = '';
    }

    public getSteps():Array<string>{
        let steps:Array<string> = [];

        this.steps.forEach(step => {
            steps.push(step.text);
        });

        return steps;
    }

    public getDefaultSteps():Array<object> {
        let arr: Array<Step> = [];
        arr.push({text:'Given I am on {1}'});
        return arr;
    }

    protected getStepHtml():HTMLElement {
        return document.getElementById(Gherkin.ELEMENT_STEP_ID);
    }

    protected addStep(step:Step) {
        this.steps.push(step);
    }

    protected eventInput() {
        document.getElementById(Gherkin.ELEMENT_STEP_INPUT_ID).addEventListener("keyup", (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                let step:Step = {text:e.srcElement.value};
                this.addStep(step);
                this.outputSteps();
                this.clearStepInput()
            }
        });
    }

    protected clearStepInput() {
        document.getElementById(Gherkin.ELEMENT_STEP_INPUT_ID).value = '';
    }

}