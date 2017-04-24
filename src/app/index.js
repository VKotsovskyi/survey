import angular from 'angular';

import './services/index';
import './home/app';

window.app = angular.module('app', [
    'app.services',
    'app.home',

]);