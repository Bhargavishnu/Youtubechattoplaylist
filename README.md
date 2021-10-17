# Youtubechattoplaylist
This code will help you shift your youtube chat to playlist -by BHARGAV VISHNU
Follow these steps to add playlist<br>
<br>
<br>
STEP1:<br>
Create a new empty private/public playlist then, 
Open a new chat of your choice as shown<br><br>
<img src="step1.png"></img>

<br>
<br>
STEP2:<br>
After that scroll to the topmost message in the chat <br><br>
<img src="step2.png"></img>

<br>
<br>
STEP3:<br>
Press Ctrl+shift+i to open console and enter below code
<br>
<pre>
var p=document.getElementsByClassName("style-scope ytd-conversation-video-renderer");
var st='U68cXL9vF4I';
c=0;
for (i=0;i&ltp.length;i++)
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
</pre>
<br><br>
<img src="step3.png"></img>
<br>
<br>
STEP4:<br>
After that New tabs Popup if pop-upis blocked click allow pop-up and repeat step3 again<br>
All newly opened tabs have first video of tcsion dont worry if duplicate videos are present<br>
Press Ctrl+shift+i to open console and now insert Code 2 as given below:
<br>
<pre>
-----------------------------------------------------
var st=document.location.href.slice(49);
document.location.href="https://www.youtube.com/playlist?list="+st+"&disable_polymer=true"
</pre><br><br>
<img src="step4.png"></img>


<br>
<br>
STEP5:<br>
After code 2 is done the tabs reload now click on the : options button on right then click on add to option <br><br>
<img src="step5.png"></img>

<br>
<br>
STEP6:<br>
Ignore if duplicate videos its removed from list automatically by youtube
<br>
<br><br>
<img src="step6.png"></img>
<br>
<br>
STEP7:<br>
Select your playlist to add videos ,if there is a - button near playlist click twice<br> to get added to playlist is displayed on left top 
<br>
<br><br>
<img src="step7.png"></img>


<br><br> 


