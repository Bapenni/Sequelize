async function table_get() {
    const dinnerFetch = await fetch('/api/dining');
    const dinnerInfo = await dinnerFetch.json();
    const arrayDinner = dinnerInfo.data;
    const info = document.querySelector('.target');

    arrayDinner.forEach((element) => {
        const makeRows = document.createElement('tr');
        makeRows.innerHTML = `
            <td>${element.hall_id}</td>
            <td>${element.hall_name}</td>
            <td>${element.hall_address}</td>
            </tr>
        `;
        info.append(makeRows)
    });
}

window.onload = table_get();