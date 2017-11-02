var app = angular.module("myApp" , []);

app.controller('MainCtrl' , function($scope){
   $scope.toDo = [
   {day: 'Monday', task: 'Prep lunches'},
   {day: 'Tuesday', task: 'Laundry'},
   {day: 'Wednesday', task: 'Dry Cleaning'},
   {day: 'Thursday', task: 'Dishes'},
   {day: 'Friday', task: 'Dinner Party'}
   ];

   
$scope.addToDo = function(){
   $scope.toDo.push({ day: $scope.newDay, task: $scope.newTask });
   $scope.newDay='';
   $scope.newTask='';
}
});



// var app = angular.module("myApp" , []);
// // var task = function(newTask,newDay) {   //object constructor defining the properties of a task
// //     this.task = newTask;
// //     this.day = newDay;
// // }

// app.controller('MainCtrl' , function($scope){
//     $scope.toDo = [
//     {day: 'Monday', task: 'Prep lunches'},
//     {day: 'Tuesday', task: 'Laundry'},
//     {day: 'Wednesday', task: 'Dry Cleaning'},
//     {day: 'Thursday', task: 'Dishes'},
//     {day: 'Friday', task: 'Dinner Party'}
//     ];


// $scope.addtoDo = function(){
//        $scope.toDo.push(newtask($scope.newTask,$scope.newDay));
// }
// });


       
    // $scope.toDo.push({day: 'Saturday',task: 'Sleep'});
    // $scope.toDo.push({day.newDay,task.newTask});
    // $scope.list.push(new task($scope.newTask,$scope.newDay));
// $scope.toDo.push({day.newDay ,task.newTask});