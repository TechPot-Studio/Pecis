export default function random(min, max) {
    if (min === undefined && max === undefined) {
        return Math.random()
    } else {
        return Math.floor(Math.random() * (~~max - ~~min)) + ~~min;
    }
}
