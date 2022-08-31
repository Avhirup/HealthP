//  BMI calculator by Diksha

const btn = document.getElementById('calculate');
    btn.addEventListener('click', function () {
        let height = document.querySelector('#height').value;
        let weight = document.querySelector('#weight').value;

        if (height == '' || weight == '') {
            alert('Please fill out the input fields!');
            return;
        }

        height = height / 100;

        bmi = (weight / (height * height));

        bmi = bmi.toFixed(2);

        document.querySelector('#result').innerHTML = bmi;

        let status = '';

        if (bmi < 18.5) {
            status = "Underweight";
        }
        else if (bmi >= 18.5 && bmi < 25) {
            status = "Healthy";
        }
        else if (bmi >= 25 && bmi < 30) {
            status = "Overweight";
        }
        else if (bmi >= 30) {
            status = "Obese";
        }

        document.querySelector('.comment').innerHTML = `Comment : You are <span id="comment">${status}</span>`;


    })