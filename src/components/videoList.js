// angular.module('video-player')
//   .component('videoList', {
//     // bindings: {
//     //   exampleVideos: '<'
//     // },
    
//     controller: function() {
//       console.log("in videoList", exampleVideos);
//     },
  
//     templateUrl: `src/templates/videoList.html`
//   });
  
angular.module('video-player')
  .component('videoList', {
    binding: {
      videos: '<'
    },
    
    controller: function() {
    this.videos = window.exampleVideoData;
      
      console.log("in videoList", this);
    },
  
    templateUrl: `src/templates/videoList.html`
    
  });