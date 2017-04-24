import angular from 'angular';
import servicesSurvey from './survey'

let servicesModule = angular.module('app.services', []);
servicesModule.service('servicesSurvey', servicesSurvey)

export default servicesModule;