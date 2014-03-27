var $=jQuery.noConflict();
var postText = $(".wp-editor-area").text();

function lintPost(postText) {
	var replacements = {
		a : "4",
		b : "BBBB"
	}

    for (var pattern in replacements) {
      if (replacements.hasOwnProperty(pattern)) {
		var postText = postText.replace(new RegExp(pattern,"gm"), replacements[pattern]);
      }
    }
    return postText;
};

var cleanPost = lintPost(postText);

$(".wp-editor-area").text(cleanPost);