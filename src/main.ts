import {iFrame} from './app/iframe';
import {Element} from "./app/element";
import {Gherkin} from "./app/gherkin";


class Main
{
    constructor() {
        let btn = document.getElementById("coolbutton");
        btn.addEventListener("click", (e:Event) => this.load());
    }

    load() {
        // let url = document.getElementById('websiteUrl').value;
        // let iFrameModel = new iFrame(url);
        // iFrameModel.loadIframe();

        let element = new Element();
        element.attachEventLister();

        let gherkin = new Gherkin();
        gherkin.outputSteps();

    }
}

let main = new Main();
main.load();