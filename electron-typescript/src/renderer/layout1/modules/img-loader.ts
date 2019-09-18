import * as React from 'react';
import * as path from 'path';

const IMG_PATH = "./img/";

export default class ImgLoader {
    
    /**
     * 
     * @param img [string] The img name wanted to load.
     * @param type ["path" | "icon" | "avatar"] Identify output type. Default is "path".
     */
    static load(img: string, type: "path" | "icon" | "avatar" = "path"): string | React.ReactNode{
        const thePath: string = path.join(IMG_PATH, img);
        switch(type) {
            case "path":
                return thePath;
            case "icon":
                return React.createElement("img");
            case "avatar":
                return React.createElement("img");
            default:
                throw new Error("Invalid output type.");
        }
    }   
}