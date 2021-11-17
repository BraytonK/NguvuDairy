function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("<h1>Your " + text + "summary</h1><br><h2> Information goes here:"));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
document.getElementById("todaySubmit").addEventListener("click", function(){
  // Generate download of hello.txt file with some content
  var text = document.getElementById("datePicker").value;
  var filename = "myFormattedNote.html";
  
  download(filename, text);
}, false);