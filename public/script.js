// Get dining data function
// async function table_get() {
//     const diningFetch = await fetch('/api/dining');
//     const diningInfo = await diningFetch.json();
//     const arrayDinner = diningInfo.data;
//     const info = document.querySelector('.target');

//     arrayDinner.forEach((element) => {
//         const makeRows = document.createElement('tr');
//         makeRows.innerHTML = `
//             <td>${element.hall_id}</td>
//             <td>${element.hall_name}</td>
//             <td>${element.hall_address}</td>
//             </tr>
//         `;
//         info.append(makeRows)
//     });
// }
// 

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

async function macros_get() {
    const macrosFetch = await fetch('/api/wholeMeals');
    const macrosData = await macrosFetch.json();
    const info = document.querySelector('.target');
    macrosData.data.forEach((element) => {
        const makeMacrosRows = document.createElement('tr');
        makeMacrosRows.innerHTML = `
            <td>${element.meal_id}</td>
            <td>${element.meal_name}</td>
            <td>${element.calories}</td>
            <td>${element.serving_size}</td>
            <td>${element.cholesterol}</td>
            <td>${element.sodium}</td>
            <td>${element.carbs}</td>
            <td>${element.protein}</td>
            <td>${element.fat}</td>
            </tr>
        `;
        info.append(makeMacrosRows);
    });
    return macrosData;
}

async function windowActions() {
    const results = await macros_get();
    const meals = results.data;

    const mealArray = [1,2,3,4,5,6,7,8,9,10]
    console.log(mealArray)
    const selectedMeals = mealArray.map((element) => {
        const random = getRandomIntInclusive(0, meals.length-1);
        return meals[random];
    })
    console.table(selectedMeals)
}

window.onload = windowActions();