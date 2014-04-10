var $=jQuery.noConflict();
var postText = $(".wp-editor-area").text();



function lintPost(postText) {
    var replacements = {
            "clean_apostrophes": {
                "find": "’|‘",
                "replace": "'"
            },
            "clean_open_quotes": {
                "find": "“",
                "replace": "\""
            },
            "clean_close_quotes": {
                "find": "”",
                "replace": "\""
            },
            "remove_image_links": {
                "find": "<a href=.*>(<img.*>)</a>",
                "replace": "$1"
            },
            "strip_inline_styles": {
                "find": "style=\"[^\"]*\"",
                "replace": ""
            }, 
            "strip_width_attr": {
                "find": "width=\"[^\"]*\"",
                "replace": ""
            },
            "strip_height_attr": {
                "find": "height=\"[^\"]*\"",
                "replace": ""
            },
            "remove_classes_from_img": {
                "find": "(<img.*)class=\"[^\"]*\"",
                "replace":"$1"
            },
            "add_aligncenter_to_img": {
                "find": "<img",
                "replace": "<img class=\"aligncenter\""
            },
            "eliminate_multiple_spaces": {
                "find": " +",
                "replace": " "
            },
            "fix_border_0": {
                "find": " border=\"0\"",
                "replace": ""
            },
            "internet": {
                "find": "internet",
                "replace": "Internet"
            },
            "fix_open_i": {
                "find": "<i>",
                "replace": "<em>"
            },
            "fix_close_i": {
                "find": "</i>",
                "replace": "</em>"
            },
            "fix_open_b": {
                "find": "<b>",
                "replace": "<strong>"
            },
            "fix_close_b": {
                "find": "</b>",
                "replace": "</strong>"
            },
            "remove_empty_spans": {
                "find": "</?span\\s?>",
                "replace": ""
            }
        }

    $.each(replacements, function( key, value ) {
        postText = postText.replace(new RegExp(value.find,"g"), value.replace)

    });
        
    return postText;
};
alert ("yyyy");
var cleanPost = lintPost(postText);
$(".wp-editor-area").val(cleanPost);