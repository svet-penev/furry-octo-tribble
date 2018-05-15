export class iFrame {

    static CONTAINER_ID = 'iframe-container';

    private url:string;

    constructor(url:string) {
        this.setUrl(url);
    }

    public getUrl():string {
        return this.url;
    }

    public setUrl(url:string) {
        this.url = url;
    }

    public getElement() {
        return document.getElementById(iFrame.CONTAINER_ID);
    }

    public loadIframe() {
        let iFrameContainer = this.getElement();
        iFrameContainer.setAttribute("src", this.getUrl());
    }
}