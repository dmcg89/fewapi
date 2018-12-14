var screenDisplay = document.getElementById('display');
var fileInput = document.getElementById('fileItem');
fileInput.onchange = onChange;


function onChange(event) {
    console.log(event);
    var file = event.target.files[0];
    var reader = new FileReader();

    // functions with console messages showing different reader functions

    reader.onloadstart = function(event) {
        console.log('File loading');
    }

    reader.onerror = function(event) {
        console.log('there was an error reading your file');
    }

    reader.onabort = function(event) {
        console.log('Your File caused FileReader() to abort');
    }

    reader.onprogress = function(event) {
        console.log(event);
        console.log('im still loading...')
    }

    // function that actually displays the inner contents of file on page

    reader.onload = function(event) {
        console.log(event)
        const result = event.target.result;
        screenDisplay.innerHTML = result;
    };

    reader.readAsText(file);



}
