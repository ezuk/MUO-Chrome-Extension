var $=jQuery.noConflict();
var postText = $(".wp-editor-area").text();

function lintPost(postText) {
	var replacements = {
            "clean_image_tags": {
                "find": "a",
                "replace": "A",
            },
            "clean_apostrophes": {
                "find": "b",
                "replace": "BB"
            }
        }

    for (var replacement in replacements) {
      if (replacements.hasOwnProperty(replacement)) {
      	console.log(replacement[find]); // TODO fix this... How do I get to the object under the object?
		var postText = postText.replace(new RegExp(replacement.find,"g"), replacement.replace);
      }
    }
    return postText;
};

var cleanPost = lintPost(postText);

$(".wp-editor-area").text(cleanPost);