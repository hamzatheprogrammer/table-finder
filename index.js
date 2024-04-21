function tablefinder(){
    let result = document.getElementById('result');
    let num = document.getElementById('num').value;
    for (let i = 1; i<=10; i++){
        result.innerHTML += `${num} X ${i} = ${num*i} <br>`;

    }
}