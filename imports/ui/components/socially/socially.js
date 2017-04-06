import angular from 'angular';
import angularMeteor from 'angular-meteor';
import partiesList from '../partiesList/partiesList';
console.log(partiesList);

import template from './socially.html';
import { name as PartiesList } from '../partiesList/partiesList';

console.log(PartiesList);

class Socially {}

const name = 'socially';

// create a module
export default angular.module(name, [
    angularMeteor,
    partiesList.name
]).component(name, {
    template,
    controllerAs: name,
    controller: Socially
});