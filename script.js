$.ajax({
   url: "https://rawgit.com/nianyuyu/play_javascript/master/1.json",
    type:"get",
    dataType:'text',  
    success: function(data){
      console.log(data);
    },
    error:function() {
      console.log("err");
    }
});

window.onload = function() { 
  document.body.classList.remove('is-preload');
}
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }

// Topic navigation

function openPage(evt, pageName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for(i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";
  loadDynamicNavbar(pageName);
}

// Dynamic tab content

// Get the header
var header = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
window.onscroll = function() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function loadDynamicNavbar(pageName) {

  // Remove existing tabs
  var parent = document.getElementById("nav");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }

  var li = document.createElement("li");
  var a = document.createElement("a");
  li.className = "nav-item";
  a.className = "nav-link";
  a.innerHTML = "SIGN OUT";
  a.href = "login.html";
  // Append the div to the navbar
  li.appendChild(a);
  document.getElementById("nav").appendChild(li);

  // Scan headers
  var content = document.getElementById(pageName).getElementsByTagName("H2");
  for (var i = 0; i < content.length; i++) {
    // Create a new list item for each content header
    var li = document.createElement("li");
    var a = document.createElement("a");
    li.className = "nav-item";
    a.className = "nav-link";
    a.innerHTML = "#" + content[i].innerHTML;
    a.href = "#" + content[i].innerHTML;
    // Append the div to the navbar
    li.appendChild(a);
    document.getElementById("nav").appendChild(li);
  }
}

// Download data page
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("Information goes here: " + text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Get login button
document.getElementById("loginbutton").addEventListener("click", function() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "admin") {
    alert("Success!");
    // Redirect to the main page
    // TODO ask orr why this doesn't work
    window.location.href = "index.html";
  } 
  else if (username == "" || password == "") {
    alert("Please enter your username and password.");
  }
  else {
    alert("Selling credentials -> " + "(username: " + username + " , " + "password: " + password + ") to dark web :)");
  }
});

// Start file download.
document.getElementById("submit").addEventListener("click", function(){
  // Ajax call to download data
  $.ajax({
    url: "TODO",
    type:"get",
    dataType:'text',
    success: function(data){
      console.log(data);
    }
  });

  // #REF: Web-based book 10.3.6
  $.get("data.php", requestData, function(data) { if (data.temperature) {
      var date = document.getElementById("datePicker").value;
      var machine = document.getElementById("machine").value;
      var text = date + ", " + machine + ", " + data.temperature;
      var filename = "myFormattedNote.html";
       download(filename, text);
  }
  else {
      $("machineinfo").html("The machine/date-range could not be found.");
  }
  }, "json");
  
  // Alert user
  alert("Fetching data... (jk, this doesn't work yet)");
  //download(filename, text);

}, false);