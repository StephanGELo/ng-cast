// angular.module('video-player')
// .component('videoListEntry', {
//   // TODO
// });

angular.module('video-player')
  .component('videoListEntry', {
      bindings: {
      index: '<',
      video: '<',
      onClick: '<'

    },
  
    templateUrl: `src/templates/videoListEntry.html`
  // TODO
  });