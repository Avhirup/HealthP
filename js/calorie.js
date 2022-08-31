function calculateCalorie(obj) {
    const age = obj.form.age.value;
    const gender = obj.form.gender.value;
    const height = obj.form.height.value;
    const weight = obj.form.weight.value;
    const activity = obj.form.activity.value;
    const unit = obj.form.unit.value;
    const formula = obj.form.formula.value;

    let BMR = '';
    if (formula == 0) // Mifflin
    {
        BMR = Mifflin(gender, age, height, weight);
    }
    else if (formula == 1) // Harris
    {
        BMR = Harris(gender, age, height, weight);
    }
    let ret = parseFloat(BMR) * parseFloat(activity);
    if (unit == 'kilojoules') {
        ret = (ret * 4.1868);
    }

    document.querySelector(".ans_calculate").innerHTML = '<div class="container"><h4 class="text-center form-control my-3 text- fs-4">You should consume <span class="text-white">' + Math.ceil(ret) + ' ' + unit + '/day </span> of calorie to maintain your weight.</h4></div>';
}

function Mifflin(gender, age, height, weight) {
    let BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    if (gender == 1) // Female
    {
        BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    return BMR;
}

function Harris(gender, age, height, weight) {
    let BMR = (13.397 * weight) + (4.799 * height) - (5.677 * age) + 88.362;
    if (gender == 1) // Female
    {
        BMR = (9.247 * weight) + (3.098 * height) - (4.330 * age) + 447.593;
    }

    return BMR;
}