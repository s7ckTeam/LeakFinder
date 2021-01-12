function dedupe(array){
	return Array.from(new Set(array));
}

setInterval(() => {
	setTimeout(() => {
		appendData();
	}, 0);
}, 1000);

function appendData(){
	var data = new Array();
	for(var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		if(key == 'whiteList'){
			continue;
		}
		data.push(localStorage.getItem(key));
	}
	data = dedupe(data);
	if (data) {
		chrome.browserAction.setIcon({path: "image/icon16.png"});
		document.getElementById("history").value = data.join('\n');
	}
}

$("#clear").bind("click",function(){
	localStorage.clear();
	$("#history").val("");
});

$("#white-tab").bind("click",function(){
	$("#whiteListArea").val(localStorage.getItem("whiteList"));
});

$("#save-white-list").bind("click",function(){
	localStorage.setItem("whiteList", $("#whiteListArea").val());
	alert('success');
});
