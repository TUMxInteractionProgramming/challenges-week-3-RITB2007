console.log('app is alive');

//Switch channels

function switchChannel(channelName)
    {
        console.log('Tuning into channel' + channelName);
        document.getElementById("channelname").innerHTML= channelName;
        document.getElementById("location").innerHTML="<a href='http://w3w.co/upgrading.never.helps' target='_blank'>upgrading.never.helps</a>";
        $('#right').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
        $(':not(li:contains('+ channelName +'))').removeClass('selected');
        $('li:contains('+ channelName +')').addClass('selected');
    }

    
//Change stars

function changeStarSolid(){
    $('#right').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

//Select tabs
function selectTab(tabId) {
    $('.selected').removeClass('selected');
    $('#'+tabId).addClass('selected');
    console.log('Changing to tab' + tabId);
}

//Display/hide emoticons
function emojiBox() {
    $('#emojis').toggle();
}
