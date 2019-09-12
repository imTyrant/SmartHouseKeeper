"use strict"

export default class Walker {
    private graph: any;
    private path: any;
    private stepCounter: any;
    private lastPoint: any;
    private curPoint: any;

    constructor(graphJSON: any, pathArray: any) {
        this.graph = graphJSON;
        this.path = pathArray;
        this.stepCounter = 0;
        if (pathArray !== undefined) {
            this.startPoint = this.path[0];
        }
    }

    set startPoint(sp: any) {
        this.lastPoint = sp;
        this.curPoint = sp;
    }

    walk() {
        if (this.curPoint === undefined) {
            console.error("Not specify start point");
            return NaN;
        }
        this.stepCounter += 1;

        if (this.path !== undefined && this.stepCounter < this.path.length) {
            this.lastPoint = this.curPoint;
            this.curPoint = this.path[this.stepCounter];    
            return {
                cp: this.curPoint,
                lp: this.lastPoint
            }
        }

        let neighbor = this.graph[this.curPoint];
        let next = Math.floor(Math.random() * neighbor.length);
        this.lastPoint = this.curPoint;
        this.curPoint = neighbor[next];
        return {
            cp: this.curPoint,
            lp: this.lastPoint
        };
    }
}