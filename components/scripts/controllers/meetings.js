myApp.controller('MeetingsController', ['$scope', '$rootScope', '$firebaseArray', 'FIREBASE_ARRAY',
  function($scope, $rootScope, $firebaseArray, FIREBASE_ARRAY) {

  var ref = new Firebase(FIREBASE_ARRAY);
  var auth = $firebaseAuth(ref);

  auth.$onAuth(function(authUser){
    if (authUser) {
      var meetingsRef = new Firebase(FIREBASE_URL + 'users/' +
        $rootScope.currentUser.$id + '/meetings');
      var meetingsInfo = $firebaseArray(meetingsRef);
      $scope.meetings = meetingsInfo;

      $scope.addMeeting = function() {
        meetingsInfo.$add({
          name: $scope.meetingname,
          date: Firebase.ServerValue.TIMESTAMP
        }).then(function(){
          $scope.meetingname = '';
        }); // promise
      } // addMeeting
    } // User Authenticated
  }); // on Auth

}]); // Controller
