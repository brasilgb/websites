export const colorActive = (value: any) => {
    let color = ''
    switch (value) {
        case 0: color = 'bg-red-600 text-white';
            break;
        case 1: color = 'bg-green-600 text-white'
            break;
    }
    return color;
}