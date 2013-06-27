
// Define Lyric View Constructor
LyricView = Backbone.View.extend({

  // Wrap the view in a div w/ class menu-view
  tagName: 'div',
  className: 'lyric-view',

  initialize: function(){
 
    // Render & Append the view when it is instantiated
    this.render();
    $('.verse_container').append(this.$el);
  
  },


 // When rendering, Pass in the App Template
  render: function(){

    this.$el.html(lyricTemplate());

  }

});

