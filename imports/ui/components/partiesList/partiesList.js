import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Parties } from '/collections/parties';

import template from './partiesList.html';

console.log(template);

class PartiesList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.helpers({
            parties() {
                return Parties.find({});
            }
        });
    }
}

const name = 'partiesList';

// create a module
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    controller: PartiesList
});