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

async function getMacros() {
    const macrosFetch = await fetch('/api/wholeMeals');
    const macrosData = await macrosFetch.json();
    return macrosData
    }

async function windowActions() {
    const results = await getMacros();
    const meals = results.data;

    const mealArray = [1,2,3,4,5,6,7,8,9,10]
    const selectedMeals = mealArray.map((element) => {
        const random = getRandomIntInclusive(0, meals.length-1);
        return meals[random];
    });
    

    const info = document.querySelector('.target');
    selectedMeals.forEach((element) => {
        const makeRows = document.createElement('tr');
        makeRows.innerHTML = `
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
        info.append(makeRows);
        const chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title:{
                text: "Macros"
            },
            toolTip: {
                shared: true
            },
            legend:{
                cursor: "pointer",
                itemclick: toggleDataSeries
            },
            data: [{
                type: "stackedBar",
                name: "Calories",
                showInLegend: "true",
                dataPoints: [
                    { label: selectedMeals[0].meal_name, y: selectedMeals[0].calories },
                    { label: selectedMeals[1].meal_name, y: selectedMeals[1].calories},
                    { label: selectedMeals[2].meal_name, y: selectedMeals[2].calories},
                    { label: selectedMeals[3].meal_name, y: selectedMeals[3].calories},
                    { label: selectedMeals[4].meal_name, y: selectedMeals[4].calories},
                    { label: selectedMeals[5].meal_name, y: selectedMeals[5].calories},
                    { label: selectedMeals[6].meal_name, y: selectedMeals[6].calories},
                    { label: selectedMeals[7].meal_name, y: selectedMeals[7].calories},
                    { label: selectedMeals[8].meal_name, y: selectedMeals[8].calories},
                    { label: selectedMeals[9].meal_name, y: selectedMeals[9].calories},
                ]
            },
            {
                type: "stackedBar",
                name: "Carbs",
                showInLegend: "true",
                yValueFormatString: "#g",
                dataPoints: [
                    { label: selectedMeals[0].meal_name, y: selectedMeals[0].carbs},
                    { label: selectedMeals[1].meal_name, y: selectedMeals[1].carbs},
                    { label: selectedMeals[2].meal_name, y: selectedMeals[2].carbs},
                    { label: selectedMeals[3].meal_name, y: selectedMeals[3].carbs},
                    { label: selectedMeals[4].meal_name, y: selectedMeals[4].carbs},
                    { label: selectedMeals[5].meal_name, y: selectedMeals[5].carbs},
                    { label: selectedMeals[6].meal_name, y: selectedMeals[6].carbs},
                    { label: selectedMeals[7].meal_name, y: selectedMeals[7].carbs},
                    { label: selectedMeals[8].meal_name, y: selectedMeals[8].carbs},
                    { label: selectedMeals[9].meal_name, y: selectedMeals[9].carbs},
                ]
            },
            {
                type: "stackedBar",
                name: "Protein",
                showInLegend: "true",
                yValueFormatString: "#g",
                dataPoints: [
                    { label: selectedMeals[0].meal_name, y: selectedMeals[0].protein},
                    { label: selectedMeals[1].meal_name, y: selectedMeals[1].protein},
                    { label: selectedMeals[2].meal_name, y: selectedMeals[2].protein},
                    { label: selectedMeals[3].meal_name, y: selectedMeals[3].protein},
                    { label: selectedMeals[4].meal_name, y: selectedMeals[4].protein},
                    { label: selectedMeals[5].meal_name, y: selectedMeals[5].protein},
                    { label: selectedMeals[6].meal_name, y: selectedMeals[6].protein},
                    { label: selectedMeals[7].meal_name, y: selectedMeals[7].protein},
                    { label: selectedMeals[8].meal_name, y: selectedMeals[8].protein},
                    { label: selectedMeals[9].meal_name, y: selectedMeals[9].protein},
                ]
            },
            {
                type: "stackedBar",
                name: "Fat",
                showInLegend: "true",
                yValueFormatString: "#g",
                dataPoints: [
                    { label: selectedMeals[0].meal_name, y: selectedMeals[0].fat},
                    { label: selectedMeals[1].meal_name, y: selectedMeals[1].fat},
                    { label: selectedMeals[2].meal_name, y: selectedMeals[2].fat},
                    { label: selectedMeals[3].meal_name, y: selectedMeals[3].fat},
                    { label: selectedMeals[4].meal_name, y: selectedMeals[4].fat},
                    { label: selectedMeals[5].meal_name, y: selectedMeals[5].fat},
                    { label: selectedMeals[6].meal_name, y: selectedMeals[6].fat},
                    { label: selectedMeals[7].meal_name, y: selectedMeals[7].fat},
                    { label: selectedMeals[8].meal_name, y: selectedMeals[8].fat},
                    { label: selectedMeals[9].meal_name, y: selectedMeals[9].fat},
                ]
            },
            ]
        });
        chart.render();
    
        function toggleDataSeries(e) {
            if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            chart.render();
            }
    })
    return selectedMeals;

    
    }
window.onload = windowActions();