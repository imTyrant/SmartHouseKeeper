import { EventEmitter } from "events";

export type EventHandler = (event: any) => any;

export abstract class AbstractApp {
    private notifier: EventEmitter;
    private devices: any;
    private aID: string;

    constructor() {
        this.notifier = new EventEmitter();
        this.devices = [];
        this.aID = "";
    }

    public getAppID(): string {
        return this.aID;
    }

    public getNotifier(): EventEmitter {
        return this.notifier;
    }

    protected subscribe(devices: any[], event: string | undefined, handler: EventHandler): void {
        if (devices === undefined || devices.length === 0) {
            return;
        }

        if (event === undefined) {
            event = "mode";
        }

        this.notifier.on(event, (args) => {
            if (true/* Check whether the event from specified devices */) {
                handler(args);
            }
        });
    }

    protected unsubscribe(): void {

    }

    public getBindDevices() {
        return this.devices;
    }

    public abstract getDescription(): any;

    public abstract install(): any;

    public abstract update(): any;

    public abstract uninstall(): any;
}