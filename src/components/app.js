angular.module('video-player')

  .component('app', {
    
    controller: function() { 

      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];

      this.onClick = (index) => {
        console.log('inside onClick, app ', this.videos);
        this.currentVideo = this.videos[index];
        console.log('clicked');  
      };
      console.log('In app', this);
      // this.selectVideo = function() {
      //   return this.videos.snippet.thumbnails.default.url;
      // };
    },
    
    
    templateUrl: `src/templates/app.html`
    
  });
  
 
