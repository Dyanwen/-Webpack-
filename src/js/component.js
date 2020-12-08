export const Button = () => {
    return document.createElement('button');
}
export const Link = () => {
    return document.createElement('a');
}
export const Inp = () => {
    return document.createElement('input');
}

export const Heading = level => {
    return document.createElement(`h${level}`);
}