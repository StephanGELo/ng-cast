angular.module('video-player')

  .component('app', {
    binding: {
      videos: '<'
    },
    controller: function() { 
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
      console.log('In app', this);
      this.fetchVideo = function() {
        return this.videos.snippet.thumbnails.default.url;
      };
    },
    
    
    templateUrl: `src/templates/app.html`
    
  });
  
 
