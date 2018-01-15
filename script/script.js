//opens external links in a new tab
$(document).ready(function(){
 $("a[href^='http'],a[href^='https']").attr('target','_blank');
});


//expands text area on contact page based on amount of text typed
function expandTextarea(id) {
document.getElementById(id).addEventListener('keyup', function() {
    this.style.overflow = 'hidden';
    this.style.height = 0;
    this.style.height = this.scrollHeight + 'px';
}, false);
}

expandTextarea('message');

//displays a message on contact page redirect after a succesful message
$(document).ready(function() {
  var hash = window.location.hash.replace('#', '');
  if (hash) {
      document.getElementById(hash).style.display = 'block'
  }
});
