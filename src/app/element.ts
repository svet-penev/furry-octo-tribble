import {Utils} from "./utils";
import {Gherkin} from "./gherkin";

export class Element {

    static ELEMENT_ID = 'container';

    private currentElement:string;

    public attachEventLister() {
        document.getElementById(Element.ELEMENT_ID).addEventListener("mouseover", (e) => {
            this.setCurrentElement(e.srcElement);
            this.highlight();
            this.outputXpath();
        });

        document.getElementById(Element.ELEMENT_ID).addEventListener("mouseout", (e) => {
            this.hideXpath();
            this.removeHighlight();
            this.setCurrentElement(null);

        });

        document.getElementById(Element.ELEMENT_ID).addEventListener("click", (e) => {
            this.replaceInput();
            return false;
        });
    }

    public getCurrentElement():any {
        return this.currentElement;
    }

    public setCurrentElement(currentElement:any) {
        this.currentElement = currentElement;
    }

    public getXpath() {
        return Utils.createXPathFromElement(this.getCurrentElement());
    }

    public highlight() {
        this.getCurrentElement().setAttribute("style", "color:red; border: 1px solid blue;background-color:black;");
    }

    public removeHighlight() {
        this.getCurrentElement().removeAttribute("style");
    }

    public outputXpath() {
        document.getElementById('element-xpath').innerText = this.getXpath();
    }

    public hideXpath() {
        document.getElementById('element-xpath').innerText = '';
    }

    protected replaceInput() {

        let elm:HTMLElement = document.getElementById(Gherkin.ELEMENT_STEP_INPUT_ID);
        let text:string = elm.value;

        let newStep:string = text.replace("{1}", "'"+this.getXpath()+"'");

        document.getElementById(Gherkin.ELEMENT_STEP_INPUT_ID).value = newStep;
    }
}