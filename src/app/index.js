import angular from 'angular';

import './services/index';
import './home/app';
import './question/index';

window.app = angular.module('app', [
    'app.services',
    'app.home',
    'app.question',
]);