export default {

// Choose random item
// Multiple arguments: returns random choice from them
// One array argument: returns random choice from that array
// One non-array argument: returns that
// No arguments: returns undefined
choice(...args)
{
    if (args.length === 0) return undefined;
    if (args.length === 1)
    {
        if (!Array.isArray(args[0])) return args[0];
        else return args[0][Math.floor(Math.random() * args[0].length)]
    }
    else return args[Math.floor(Math.random() * args.length)]
},

}