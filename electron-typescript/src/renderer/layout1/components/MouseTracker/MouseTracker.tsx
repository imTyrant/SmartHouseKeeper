import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IMouseTrackerProps {

}

export interface IMouseTrackerStates {
    x: number;
    y: number;
    curPosition: string;
}

export default class MouseTracker extends React.Component<IMouseTrackerProps, IMouseTrackerStates> {
    // private targetList: any[];

    constructor(props: IMouseTrackerProps) {
        super(props);
        this.state={x:10, y:10, curPosition:""};

        this.setPosition = this.setPosition.bind(this);
        this.cleanPosition = this.cleanPosition.bind(this);
        this.getCoords = this.getCoords.bind(this);
    }

    private setPosition(ev: MouseEvent) {
        console.log((ev.target as HTMLAreaElement).id);
        this.setState({curPosition: (ev.target as HTMLAreaElement).id});
        // this.curPosition = (ev.target as HTMLAreaElement).id; 
    }

    private cleanPosition(ev: MouseEvent) {
        this.setState({curPosition:""});
    }

    private getCoords(event: MouseEvent) {
        console.log(event.pageX, event.pageY);
        this.setState({x: event.pageX, y: event.pageY});
    }

    setListenerOnElements(selector: string = "map > area") {
        const elements = document.querySelectorAll("area")!;// as NodeListOf<HTMLAreaElement>;
        if (elements.length === 0) throw new Error("We should find some elements");
        elements.forEach((el: HTMLAreaElement) => {
            el.addEventListener("mouseover", this.setPosition);
            el.addEventListener("mouseout", this.cleanPosition);
        });

        document.addEventListener("mousemove", this.getCoords);
    }

    removeListenerOnElements() {
        const elements: NodeListOf<HTMLAreaElement> = document.querySelectorAll("area")!;
        if (elements.length === 0) throw new Error("We should find some elements");
        elements.forEach((el: HTMLAreaElement) => {
            el.removeEventListener("mouseover", this.setPosition);
            el.removeEventListener("mouseout", this.cleanPosition);
        });
        
        document.removeEventListener("mousemove", this.getCoords);
    }

    componentWillMount() {
        this.setListenerOnElements();
    }

    componentWillUnmount() {
        this.removeListenerOnElements();
    }

    handleMouseMove(event: any) {
        console.log(event);
        this.setState({x:event.pageX, y:event.pageY});
    }

    render() {
        let xx = this.state.x + 2;
        let yy = this.state.y + 2;

        if (xx + 100 > 800) xx = 700;
        if (xx < 0) xx = 0;

        if (yy + 100 > 800) yy = 700;
        if (yy < 0) yy = 0;

        return ReactDOM.createPortal((
            <div id="my-head"
                style={{height:"100px", width:"100px", backgroundColor:"green", position:"absolute", top: yy, left: xx}}
            >
                <p>{this.state.curPosition}</p>
                <p>{this.state.x}</p>
                <p>{this.state.y}</p>

            </div>
        ), document.getElementById("root")!);
    }
}

