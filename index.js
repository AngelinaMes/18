export const getMonth = (num) => {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']


    return `Месяц ${months[num - 1]}`;
}


export const getTotalPrice = (arr) => {
    let totalPrice = 0;

    for (let i = 0; i < arr.length; i += 1) {
        totalPrice += arr[i][0] + arr[i][2]
    }
    return totalPrice;
}


export const countDuplicates = (arr) => {
    const count = {};

    for (let i = 0; i < arr.length; i += 1) {
        !count[arr[i]] ? count[arr[i]] = 1 : count[arr[i]] += 1;
    }

    return count;
}


export const uniqueItems = (arr) => {
    let newArr = [];

    for (let i = 0; i < arr.length; i += 1) {
        if (!newArr[arr[i]]) {
            newArr += newArr[arr[i]];
        }
    }
    return newArr;
}


export const getFavoritePizza = (list) => {
    const count = {};

    for (let i = 0; i < list.length; i++) {
        const friend = list[i];

        for (let j = 0; j < friend.pizzas.length; j++) {
            const pizza = friend.pizzas[j];

            count[pizza] = count[pizza] ? count[pizza] + 1 : 1;
        }
    }

    let maxPizza = '';
    let maxCount = 0;

    for (const pizza in count) {
        maxPizza = count[pizza] > maxCount ? pizza : maxPizza;
        maxCount = Math.max(maxCount, count[pizza]);
    }

    return maxPizza;
}
