'use strict';

describe('Controller: PanelCtrl', function () {

  // load the controller's module
  beforeEach(module('clientportalWebappApp'));

  var PanelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PanelCtrl = $controller('PanelCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
