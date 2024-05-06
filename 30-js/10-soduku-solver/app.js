const puzzleBoard = document.querySelector('#puzzle');
const solveButton = document.querySelector('#solve-button');
const squares = 81;
const submission = [];
for (let i = 0; i < squares; i++) {
    const inputELement = document.createElement('input');
    inputELement.setAttribute('type', 'number');
    inputELement.setAttribute('min', '0');
    inputELement.setAttribute('max', '9');
    puzzleBoard.appendChild(inputELement);
}

const joinValues = () => {

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.value) {
            submission.push(input.value)
        } else {
            submission.push('0')
        }
    })
    console.log(submission);
}

const populateValues = (isSolvable, solution) => {
    const inputs = document.querySelectorAll('input');
    if(isSolvable && solution) {
        inputs.forEach((input, i) => {
            input.value = solution[i]
        }) 
    }
     
}

const solve = () => {
    joinValues();
    const data = submission.join('');
    console.log('data', data);

    // const options = {
    //     method: 'POST',
    //     url: 'https://sudoku-solver3.p.rapidapi.com/sudokusolver/',
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-RapidAPI-Key': '11252ba542msh50b5bc4d22698abp1e3c77jsn990e2f5b6e7b',
    //         'X-RapidAPI-Host': 'sudoku-solver3.p.rapidapi.com'
    //     },
    //     data: {
    //         input: data
    //     }
    // };
    // console.log('donny');
    // axios.request(options).then((response) => {

    //     console.log(response.data)
    //     populateValues(response.data.solvable, response.data.solution)
    // }).catch ((error) => {
    //     console.error(error);
    // })


    const options = {
    method: 'POST',
    url: 'https://sudoku-solver3.p.rapidapi.com/sudokusolver/',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '11252ba542msh50b5bc4d22698abp1e3c77jsn990e2f5b6e7b',
        'X-RapidAPI-Host': 'sudoku-solver3.p.rapidapi.com'
    },
  data: {
    input: data
  }
}
async function myAsyncFunction() {
    // Use await inside an async function
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

}
myAsyncFunction()
};


solveButton.addEventListener('click', solve);