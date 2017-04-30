$(document).ready(function(){


$('#selectionBox button').on('click', function(){

   var search = $('#choice').val();
      searchReddit(search);
});

//This code adds the reddit divs to the #images div---------
function searchReddit(subreddit) {
  $.get('https://www.reddit.com/r/' + subreddit + '.json').done(function(response){
    response.data.children.forEach(function(i){
      console.log(i.data.title);

      var title = i.data.title;
      var thumbnail = i.data.thumbnail;
      var author = i.data.author;

      if(i.data.over_18 === true){
        alert("This is not safe for work. Try again.");
      };

      if(i.data.post_hint === 'image' && i.data.over_18 === false){
      $('#images').append("<div class='container'><p>" + title +
      '</br>' + 'OP: ' + author + '</p><img src=' + thumbnail + '></div>');
    };
  });//closing for forEach()


   $('#images div:gt(11)').remove(); //this removes every element aftter index 11


   $('#images div').mouseover(function(){
     $(this).addClass('over');
   });

   $('#images div').mouseout(function(){
     $(this).removeClass('over');
   });

});// closing for $get function
}); //closing for on click function
//end of appending function------------------------------------------


//closing document ready function.................................
})

// $('holder').mouseover(function(){
//   $('border').css('transform', 'rotate(1080deg)');
// })
