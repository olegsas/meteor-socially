import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Parties } from '/collections/parties';

import templateUrl from './partiesList.html';

const template = "<ul><li ng-repeat='party in partiesList.parties'>{{party.name}}<p>{{party.description}}</p></li></ul>"

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
    // template,
    templateUrl,
    controllerAs: name,
    controller: PartiesList
});