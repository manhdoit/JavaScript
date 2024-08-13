const containerEl = document.querySelector('.container');
const carrers = ["YouTuber","Instructor", "Web Developer", "Freelancer" ];

let careerIndex = 0;
let characterIndex = 0;
const vowelSounds = 'ueoai';
updateText();

function updateText() {
    
    const firstCharacter = carrers[careerIndex][0].toLocaleLowerCase();
    containerEl.innerHTML = `<h1>I am ${vowelSounds.includes(firstCharacter) ? 'an' : 'a'} ${carrers[careerIndex].slice(0,characterIndex)}</h1>`;
    characterIndex++;
    if(characterIndex === carrers[careerIndex].length + 1) {
        careerIndex += 1;
        characterIndex = 0;
    }
    if(careerIndex == carrers.length){
        careerIndex = 0;
    };
    setTimeout(updateText,400);
}
