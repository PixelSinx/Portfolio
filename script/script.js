$(document).ready(function(){
 $("a[href^='http'],a[href^='https']").attr('target','_blank');
});

function expandTextarea(id) {
document.getElementById(id).addEventListener('keyup', function() {
    this.style.overflow = 'hidden';
    this.style.height = 0;
    this.style.height = this.scrollHeight + 'px';
}, false);
}

expandTextarea('message');
