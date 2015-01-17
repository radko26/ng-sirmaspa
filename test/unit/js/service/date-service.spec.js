define(
  [
  'angular-mocks',
  'js/service/date-service',
  ],
  function() {
    describe('DateService', function() {
    
    beforeEach(function(){
        angular.module('mockApp', ['todoApp.date-service']);
        module('mockApp');
    });

     describe('date formatter', function() {
      var DateService;

      beforeEach(inject(function (_DateService_) {
        DateService = _DateService_;
      }));

      it('should transform timestamp to date', function() {
          DateService.formatDate(0);
          expect(DateService.formatDate(0)).to.equal('');
          expect(DateService.formatDate(1)).to.equal('Thu Jan 01 1970');
        });
    });

   });
  }
  );
