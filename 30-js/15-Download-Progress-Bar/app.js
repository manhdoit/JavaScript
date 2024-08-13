const appDisplay = document.querySelector('#app');
const fileToDownload = '15-Download-Progress-Bar/image.jpg';



function createDownloadButton(){

    const buttonDownload = document.createElement('button');
    const progressBarDisplay = document.createElement('div');
    progressBarDisplay.classList.add('progress-bar');
    buttonDownload.setAttribute('id', 'buttonDownload');
    
    buttonDownload.innerText = 'Download'
    appDisplay.appendChild(buttonDownload)
    appDisplay.appendChild(progressBarDisplay)
}

createDownloadButton();
const buttonDownload = document.querySelector("#buttonDownload");
const downloadProgressElem = document.querySelector(".progress-bar");


buttonDownload.addEventListener('click', () =>{
buttonDownload.setAttribute('disabled', 'true');
const dataChunks = [];
fetch(`/${fileToDownload}`)
    .then(response => {

        const reader = response.body.getReader();
        const totalSize = Number(response.headers.get('content-length'));
        let totalSizeDownloaded = 0;
        function readData(){
            return reader.read().then(result => {
                if(result.value) {
                    dataChunks.push(result.value);
                    totalSizeDownloaded += result.value.length;
                    const percentage = Math.floor(
                        (totalSizeDownloaded / totalSize) * 100
                    )
                    downloadProgressElem.textContent = `${percentage}%`;
                    downloadProgressElem.style.width = `${percentage}%`;
                }
                if(!result.done){
                    return readData();
                }
            })
        }
        return readData();
    })
    .then( () => {
        console.log('Download finished');
        const downloadAnchor = document.createElement('a');
        const blob = new Blob(dataChunks);
        console.log(blob);
        downloadAnchor.href = URL.createObjectURL(blob);
        downloadAnchor.download = fileToDownload;
        appDisplay.appendChild(downloadAnchor);
        downloadAnchor.click();
        appDisplay.removeChild(downloadAnchor);
    })
    .catch( () => {
        downloadProgressElem.textContent = 'Download error';
        downloadProgressElem.classList.add('error');
    })
    .finally( () => {
        buttonDownload.removeAttribute('disabled');
    })
})