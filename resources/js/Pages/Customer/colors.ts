export const stylesOrderStatus = (value: any) => {
    switch (value) {
        case 1:
            return "bg-orange-600/50 border border-gray-300 text-gray-50 text-xs";;
        case 2:
            return "bg-cyan-600/50 border border-cyan-600 text-cyan-800 text-xs";
        case 3:
            return "bg-orange-600/50 border border-orange-600 text-orange-800 text-xs";
        case 4:
            return "bg-sky-600/50 border border-sky-600 text-sky-800 text-xs";
        case 5:
            return "bg-red-600/50 border border-red-600 text-red-800 text-xs";
        case 6:
            return "bg-green-600/50 border border-green-600 text-green-800 text-xs";
        case 7:
            return "bg-green-600/50 border border-green-600 text-green-800 text-xs";
        case 8:
            return "bg-blue-600/50 border border-blue-600 text-blue-800 text-xs";
    }
};