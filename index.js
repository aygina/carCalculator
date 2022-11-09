let result = [];


function changeCost(selectObject) {
    let auction = selectObject.value;
    result.push(Number(auction));
    if (auction === '0') {
        alert('Выберите аукцион!')
    }
    console.log(auction);
}

function showResult() {
    let cost = Number(document.getElementById("cost").value);
    let engine = Number(document.getElementById("engine").value);
    let power = Number(document.getElementById("power").value);
    let service = Number(document.querySelector('input[name="service"]:checked').value);
    let fuel = Number(document.querySelector('input[name="fuel"]:checked').value);
    let age = Number(document.querySelector('input[name="age"]:checked').value);
    let customer = Number(document.querySelector('input[name="customer"]:checked').value);

    result.push(cost * 2, engine * 1.75, power * 5, service, fuel, age, customer);
    console.log(result);

    let resultCost = result.reduce(function (sum, current) {
        return sum + current;
    }, 0);

    console.log(`Cтоимость автомобиля: ` + resultCost);
}