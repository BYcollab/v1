function goTopEx() {  
    var obj = document.getElementById("goTopBtn");  
    function getScrollTop() {  
        return document.documentElement.scrollTop + document.body.scrollTop;  
    }  
    function setScrollTop(value) {  
        if (document.documentElement.scrollTop) {  
            document.documentElement.scrollTop = value;  
        } else {  
            document.body.scrollTop = value;  
        }  
    }  
    window.onscroll = function() {  
        getScrollTop() > 0 ? obj.style.display = "": obj.style.display = "none";  
    }  
    obj.onclick = function() {  
        var goTop = setInterval(scrollMove, 10);  
        function scrollMove() {  
            setScrollTop(getScrollTop() / 1.1);  
            if (getScrollTop() < 1) clearInterval(goTop);  
        }  
    }  
}  
	
function onaHits(id)
{
            $.ajax({
                type: 'get',
                url: "/index.php?s=Updown-vod-id-" + id + "-type-up",
                timeout: 5000,
                dataType: 'json',
                success: function($html) {
                  if ($html.info == "ok" ) {
		var oldvalue = document.getElementById('ahits').innerText;
		document.getElementById('ahits').innerText = ( new Number(oldvalue) + 1 ).toString();
                    } else {
		      alert("您已评过了");
                    }
                }
            });
	
}


function onbHits(id)
{
            $.ajax({
                type: 'get',
                url: "/index.php?s=Updown-vod-id-" + id + "-type-golder",
                timeout: 5000,
                dataType: 'json',
                success: function($html) {
                  if ($html.info == "ok" ) {
		var oldvalue = document.getElementById('bhits').innerText;
		document.getElementById('bhits').innerText = ( new Number(oldvalue) + 1 ).toString();
                    } else {
		      alert("您已评过了");
                    }
                }
            });
	
}


function oncHits(id)
{
            $.ajax({
                type: 'get',
                url: "/index.php?s=Updown-vod-id-" + id + "-type-down",
                timeout: 5000,
                dataType: 'json',
                success: function($html) {
                  if ($html.info == "ok" ) {
		var oldvalue = document.getElementById('chits').innerText;
		document.getElementById('chits').innerText = ( new Number(oldvalue) + 1 ).toString();
                    } else {
		      alert("您已评过了");
                    }
                }
            });
	
}

$(document).ready(function() {
	FF.Home.Js();
	FF.Lazyload.Show();
	FF.Playlist.Show();
	FF.Suggest.Show('wd', 12, Root + 'index.php?s=plus-search-vod', Root + 'index.php?s=vod-search-wd-');
	FF.History.List('history');
	FF.UpDown.Vod(Root + 'index.php?s=Updown-' + FF.Home.Channel + '-id-' + Id);
	FF.UpDown.News(Root + 'index.php?s=Updown-' + FF.Home.Channel + '-id-' + Id);
	FF.Comment.Default(Root+"index.php?s=Cm-Show-sid-"+Sid+"-id-"+Id+"-p-1");
});