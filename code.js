----------------------------------------------------------------------------
CODE 1:
var p=document.getElementsByClassName("style-scope ytd-conversation-video-renderer");
var st='U68cXL9vF4I';
c=0;
for (i=0;i<p.length;i++)
{
var p1=p[i].getElementsByTagName("a");
if(p1[0] ){
if(p1[0].id=="thumbnail"){
var s=p1[0].href;
st=st+','+s.slice(32);
c=c+1;
if(c==49){
c=0;
console.log(st);
var hlink="https://www.youtube.com/watch_videos?video_ids="+st
window.open(hlink,'_blank');
st='U68cXL9vF4I';
}
}
}
}
console.log(st);
var dlink="https://www.youtube.com/watch_videos?video_ids="+st
window.open(dlink,'_blank');

---------------------------------------------------------------------------------
CODE 2:
var st=document.location.href.slice(49);
document.location.href="https://www.youtube.com/playlist?list="+st+"&disable_polymer=true"
