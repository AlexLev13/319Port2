




//Angular JS
var myApp = angular.module('myApp', []);

myApp.controller("myController", function($scope) {

	 $scope.newUser = {};
	 $scope.clickedUser = {};
	 $scope.alertMessage = "";

	 $scope.users = [

      {
				name: "CY",
				phone_number: "515-965-4755",
				address: "4100 Marston Hall 533 Morrill Rd. Ames, IA 50011"
			}, {
				name: "Brittney Spears",
				phone_number: "590-983-9920",
				address: "3799 S Las Vegas Blvd, Las Vegas, NV 89109"
			}, {
				name: "John Lennon",
				phone_number: "376-980-6575",
				address: "1 W 72nd St, New York, NY 10023"
			}, 
			 {
				name: "Sponge Bob",
				phone_number: "133-965-7284",
				address: "1731 Manhattan Blvd, Harvey, LA 70058"
			}, 
			{
				name: "Minnie Mouse",
				phone_number: "674-995-2514",
				address: "1313 Disneyland Dr, Anaheim, CA 92802"
			}, {
				name: "President",
				phone_number: "356-611-4775",
				address: "1600 Pennsylvania Ave NW, Washington, DC 20500"
			}, {
				name: "Dallas Cowboys",
				phone_number: "787-632-7612",
				address: "1 AT&T Way, Arlington, TX 76011"
			}, {
				name: "Enrique Iglesias",
				phone_number: "465-884-2396",
				address: "4535 Sabal Palm Rd, Miami, FL 33137"
			}, 
			
			

	 ];

	 $scope.saveUser = function() {
			$scope.users.push($scope.newUser);
			$scope.clickedUser = $scope.newUser;
			$scope.newUser = {};
			$scope.alertMessage = "New item added successfully!";
	 };
	 
	 $scope.remUser = function(user) {
			console.log(user);
			$scope.clickedUser = user;
			$('#deleteModal')
		  .modal('show');
	 };

	 $scope.selectUser = function(user) {
			console.log(user);
			$scope.clickedUser = user;
	 };

	 $scope.updateUser = function() {
			$scope.alertMessage = "Update successfully!";
			$scope.clickedUser.name = document.getElementById('editName').value;
			$scope.clickedUser.phone_number = document.getElementById('editPhone').value;
			$scope.clickedUser.address = document.getElementById('editAdd').value;
	 };

	 $scope.deleteUser = function() {
			$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
			$scope.alertMessage = "Deleted successfully!";
	 };

	 $scope.clickedAlert = function() {
			$scope.alertMessage = "";
	 };
	 
	 $scope.edit1User = function(user) {
			console.log(user);
			$scope.clickedUser = user;
			$('#editModal')
		  .modal('show');
	 };
	 
	$scope.direct1User = function(user) {
			console.log(user);
			$scope.clickedUser = user;
			$('#directionModal')
		  .modal('show');
	 };

	$scope.weather1User = function(user) {
			console.log(user);
			$scope.clickedUser = user;
	 };
		
		
	 

});


//Semantic UI
jQuery(document).ready(function($){

	$('.addModal').click(function(){
		$('#addModal')
		  .modal('show');
	});

	$('.editModal').click(function(){
		$('#editModal')
		  .modal('show');
	});
	$('.directionModal').click(function(){
		$('#directionModal')
		  .modal('show');
	});
	$('.weatherModal').click(function(){
		$('#weatherModal')
		  .modal('show');
		    var city = "3799 S Las Vegas Blvd, Las Vegas, NV 89109";
  var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
  //change city variable dynamically as required
  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function(data){
   console.log(data);
   $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°C");
  });
	});

	$('.deleteModal').click(function(){
		$('#deleteModal')
		  .modal('show');
	});

	$('.hideModal').click(function(){
		$('#hideModal')
		  .modal('hide');
	});
});