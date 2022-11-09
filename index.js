let result = [];

function changeCost(selectObject) {
    let auction = selectObject.value;
    result.push(Number(auction));
    if (auction == '') {
        alert('Выберите аукцион!')
    }
    console.log(auction);
}

function showResult() {
    let cost = document.getElementById("cost").value;
    let engine = document.getElementById("engine").value;
    let power = document.getElementById("power").value;
    let service = document.querySelector('input[name="service"]:checked').value;
    let fuel = document.querySelector('input[name="fuel"]:checked').value;
    let age = document.querySelector('input[name="age"]:checked').value;
    let customer = document.querySelector('input[name="customer"]:checked').value;

    if (cost == '') {
        alert('Заполните поле "Цена на аукционе"');

    } else if (engine == '') {
        alert('Заполните поле "Объем двигателя"');

    } else if (power == '') {
        alert('Заполните поле "Мощность"');

    } else {
        result.push(Number(cost) * 2, Number(engine) * 1.75, Number(power) * 5, Number(service), Number(fuel), Number(age), Number(customer));
        console.log(result);

        let resultSum = result.reduce(function (sum, current) {
            return sum + current;
        }, 0);

        let resultCost = Math.round(resultSum * 0.42); //conversion to rub

        lastCost.textContent = (`Cтоимость автомобиля: ` + resultCost + `руб`);

    }
}

function clearArr() {
    document.getElementById("cost").value = '';
    document.getElementById("engine").value = '';
    document.getElementById("power").value = '';
    document.getElementById("service__whole").checked = true;
    document.getElementById("fuel__petrol").checked = true;
    document.getElementById("age__0").checked = true;
    document.getElementById("customer__individual").checked = true;
    result.length = 0;
    lastCost.textContent = '';
}