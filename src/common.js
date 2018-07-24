export default {

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