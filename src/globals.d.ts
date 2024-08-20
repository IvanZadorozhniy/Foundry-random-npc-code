// game-globals.d.ts
declare const game: {
    tokens: {
        controlled: any[];
    };
    actors: any;
    // Здесь добавляй другие свойства и методы `game`
};

declare const canvas: any;
declare const ui: any;
declare module '*.hbs' {
    const value: string;
    export default value;
}