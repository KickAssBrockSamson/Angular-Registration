myApp.controller('CheckInsController', 
  ['$scope', '$rootScope', '$firebaseObject', '$firebaseArray','$routeParams', 'FIREBASE_URL',
  function($scope, $rootScope, $firebaseObject, $firebaseArray, $routeParams, FIREBASE_URL) {

    $scope.whichmeeting = $routeParams.mId;
    $scope.whichuser = $routeParams.uId;

    var ref = new firebase(FIREBASE_URL + 'users/' + $scope.whichuser + '/meetings/' + $scope.whichmeeting + '/checkins'); 

    $scope.addCheckin = function() {
      var checkinsInfo = $firebaseArray(ref)
    }

}]); //Controller    