declare module '*.css' {
    const content: {[className: string]: string};
    // const content: string;
    export default content;
}