
export default _ => {
    const el = document.createElement('h2');
    el.textContent = 'hello h2';
    el.addEventListener('click', () => {
        alert('h2');
    })
    return el;
};

export let name = "晨希";
console.log(333333);
console.log(444);
console.log(5555);
export function sayName() {
    console.log(name);
}