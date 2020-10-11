import { AbstractApp } from "./AbstractApp";

class App1 extends AbstractApp {
    public install() {
        this.initialize();
    }
    public update() {
        this.unsubscribe();
        this.initialize();
    }
    public uninstall() {

    }
    public getDescription() :string {
        return "Description of the app";
    }

    initialize() {
        this.subscribe("", undefined, )
    }

    switchChange(evt: any) {
        if (evt.value === "on") {
            
        }
    }
}