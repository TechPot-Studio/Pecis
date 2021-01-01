function random(): number
function random(min: number, max: number): number
function random(min?: number, max?: number): number {
    if (min === undefined && max === undefined) {
        return Math.random()
    } else {
        return Math.floor(Math.random() * (~~max - ~~min)) + ~~min;
    }
}
export default random;
