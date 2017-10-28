//Open all external links in a new window/tab
$(document).ready(function(){
 $("a[href^='http'],a[href^='https']").attr('target','_blank');
});

function textAreaAdjust(message) {
message.style.height = "1px";
message.style.height = (25+o.scrollHeight)+"px";
}
