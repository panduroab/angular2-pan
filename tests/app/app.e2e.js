describe('App', function(){
    beforeEach(function(){
        browser.get('http://127.0.0.1:8080/');
    });

    it("shold have a title", function(){
        expect(browser.getTitle()).toEqual('Intro to Angular 2');
    });
});
