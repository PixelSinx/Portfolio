//Open all external links in a new window/tab
$(document).ready(function(){
 $("a[href^='http'],a[href^='https']").attr('target','_blank');
});
