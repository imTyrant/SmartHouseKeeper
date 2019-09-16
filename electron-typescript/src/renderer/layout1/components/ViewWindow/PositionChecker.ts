import * as React from 'react';

export default class PositionChecker {
    private curPosition: string | undefined;

    constructor() {
        this.curPosition = "";
    }

    public onPositionOndHandler(event: React.MouseEvent<HTMLAreaElement, MouseEvent>) {
        this.curPosition = (event.currentTarget.id);
        console.log(this.curPosition);
        console.log(event.pageX, event.pageY)
    }

    public onPositionOutHandler(event: React.MouseEvent<HTMLAreaElement, MouseEvent>) {
        this.curPosition = "";
        console.log(this.curPosition);
    }
}