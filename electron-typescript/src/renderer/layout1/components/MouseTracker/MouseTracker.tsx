import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/index.css';

import notification from 'antd/es/notification';
import 'antd/es/notification/style'
import { Locale } from  "../../locale"

export interface PlacementDetail {
    x: number;
    y: number;
    room: string;
}

export interface IMouseTrackerProps {
    onPositionChosen?: (info: PlacementDetail) => void;
}

export interface IMouseTrackerStates {
    x: number; // The relative x coordinate
    y: number; // The relative y coordinate
    curPosition: string;
}

export default class MouseTracker extends React.Component<IMouseTrackerProps, IMouseTrackerStates> {
    static defaultProps = {
        onPositionChosen: (info: PlacementDetail) => {}
    };

    private containerHeight: number = 25;
    private containerWidth: number =  25;

    constructor(props: IMouseTrackerProps) {
        super(props);
        this.state={x:10, y:10, curPosition:""};

        this.setPosition = this.setPosition.bind(this);
        this.cleanPosition = this.cleanPosition.bind(this);
        this.getCoords = this.getCoords.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentWillMount() {
        this.setListenerOnElements();
    }

    componentWillUnmount() {
        this.removeListenerOnElements();
    }

    private setPosition(ev: MouseEvent) {
        this.setState({curPosition: (ev.target as HTMLAreaElement).id});
    }

    private cleanPosition(ev: MouseEvent) {
        this.setState({curPosition:""});
    }

    // Get the coordinates of the mouse and calculate the relative coordinates against the img.
    private getCoords(event: MouseEvent) {
        let pureX = event.pageX;
        let pureY = event.pageY;

        const mainWin = document.querySelector("#main-window > img")!;
        const width = mainWin.clientWidth;
        const height = mainWin.clientHeight;
        const top = mainWin.getBoundingClientRect().top;
        const left = mainWin.getBoundingClientRect().left;

        let relX = pureX - Math.floor(this.containerWidth / 2) - left;
        let relY = pureY - Math.floor(this.containerHeight / 2) - top;
        if (relX < 0) { relX = left; }
        else if (relX + this.containerWidth > width) { relX = width - this.containerWidth; }
        if (relY < 0) { relY = top; }
        else if (relY + this.containerHeight > height) { relY = height - this.containerHeight; }  

        this.setState({x: relX, y: relY});
    }

    private setListenerOnElements(selector: string = "map > area") {
        const elements = document.querySelectorAll("area")!;
        if (elements.length === 0) throw new Error(Locale.MOUSE_TRACKER_NO_ELEMENTS_FOUND);
        elements.forEach((el: HTMLAreaElement) => {
            el.addEventListener("mouseover", this.setPosition);
            el.addEventListener("mouseout", this.cleanPosition);
        });

        document.getElementById("main-window")!.addEventListener("click", this.clickHandler);
        document.getElementById("main-window")!.addEventListener("mousemove", this.getCoords);
    }

    private removeListenerOnElements() {
        const elements: NodeListOf<HTMLAreaElement> = document.querySelectorAll("area")!;
        if (elements.length === 0) throw new Error(Locale.MOUSE_TRACKER_NO_ELEMENTS_FOUND);
        elements.forEach((el: HTMLAreaElement) => {
            el.removeEventListener("mouseover", this.setPosition);
            el.removeEventListener("mouseout", this.cleanPosition);
        });
        
        document.getElementById("main-window")!.removeEventListener("click", this.clickHandler);
        document.getElementById("main-window")!.removeEventListener("mousemove", this.getCoords);
    }

    private clickHandler(event: MouseEvent) {
        if (this.state.curPosition === "") {
            notification.open({
                message: Locale.MOUSE_TRACKER_WRONG_ACTION,
                description: Locale.MOUSE_TRACKER_WRONG_ACTION_INFO,
                duration: 2
            });
        } else {
            this.props.onPositionChosen!({x: this.state.x, y: this.state.y, room: this.state.curPosition});
        }
    }

    render() {
        return ReactDOM.createPortal((
            <div id="mouse-tracker-container" 
                style={{width: this.containerWidth, height: this.containerWidth, position: "absolute", 
                        top: this.state.y, left: this.state.x}}
            >
                {this.props.children}
            </div>
        ), document.getElementById("main-window")!);
    }
}

