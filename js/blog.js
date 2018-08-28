$(document).ready(function(){
$.get('http://public-api.wordpress.com/rest/v1/sites/theoffseasoner.wordpress.com/posts', function(data){
            $('blog-container').attr('src', data.ID);
            console.log(data)
        });
});     