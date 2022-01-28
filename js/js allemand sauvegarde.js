j$(".dropdown-heading").hover(function(){j$('.dropdown-list',this).fadeToggle('fast');});

var myJobInsideInfoDiv = document.getElementById('jJobInsideInfo');
var myApplyButton = document.getElementById('apply_btn');
var myApplyByEmailOnlyFound = false;

if(myJobInsideInfoDiv != null && myApplyButton != null) {
  var elements = myJobInsideInfoDiv.getElementsByTagName('label');

  for (var i = 0; i < elements.length && !myApplyByEmailOnlyFound; i++) {
    var currElement = elements[i];

    if(currElement.innerHTML == 'Type of submission: Email') {
      myApplyButton.parentNode.removeChild(myApplyButton);

      var myParentElement = currElement.parentNode;
      myParentElement.removeChild(currElement);
      myParentElement.parentNode.removeChild(myParentElement);
      myApplyByEmailOnlyFound = true;
    }
  }
}

if(!myApplyByEmailOnlyFound) {
  var imported = document.createElement('script');
  imported.src = 'https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frrdnn3p0fb7/b/bots-client-sdk-js-19.1.5.0/o/chatbot.js';
  document.head.appendChild(imported);
}