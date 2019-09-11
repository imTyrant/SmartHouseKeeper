import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Hello from '../../components/hello';
import PanelWithSwitch from '../../components/panel-with-switch';


function createDivWithText() {
    let elDiv = document.createElement("div");
    let elP = document.createElement("p");
    elP.innerHTML = "This from TypeScript!";
    elDiv.appendChild(elP);
    document.querySelector('body')!.appendChild(elDiv);
}

function parseStatusChange(nextStatus: boolean): boolean {
    if (Math.floor(Math.random() * 100) > 50) {
        return true;
    }
    return false;
}

$(document).ready(() => {
    console.log("loaded!");
    createDivWithText();
    ReactDOM.render(
        (
            <div>
                {/* <Hello name={`TypeScript`} enthusiasmLevel={3} /> */}
                <PanelWithSwitch onStatusChanged={parseStatusChange} position="bedroom" deviceName="bulb"/>
            </div>
        ),
        document.querySelector('#hello-container') as HTMLElement
    );
});