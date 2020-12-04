/**
 * Quick sum items
 * @param  {number[] | Array<number>} values Values to sum
 * @return {number}
 */
export default function sum(...values) {
    if (values[0] instanceof Array) {
        return sum(values[0]);
    } else {
        let result = 0;
        values.forEach((value) => {
            result += value;
        });
        return result;
    }
}
