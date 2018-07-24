export default {


choice(arr)
{
    if (!Array.isArray(arr)) return null;
    else return arr[Math.floor(Math.random() * arr.length)]
}

}