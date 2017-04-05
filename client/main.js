import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Parties } from '../collections/parties';

angular.module('socially', [
  angularMeteor
])
.controller('PartiesListCtrl', function($scope) {
    'ngInject';
    $scope.helpers({
      parties() {
        return Parties.find({});
      
      }
    });
    // console.log($scope.parties);
    // $scope.parties.forEach((party) => {console.log(party)});
  });