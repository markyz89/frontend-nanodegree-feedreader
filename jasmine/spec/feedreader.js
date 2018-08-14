/* feedreader.js

 */

$(function() {
   
    describe('RSS Feeds', function() {
        /* 

         Check that allFeeds variable is defined and not empty
         */

         // simply use the toBeDefined to test if allFeeds has a value, 
         // and not.toBe(0) on allFeeds.length to test that the value is not 0

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

      
        /* 
        Test that each feed has a defined URL
         */

         //set up a for loop and loop through each feed, accessed by it's integer value, 
         // to ensure the feed urls all have values

           it('has a url', function() {
            for (i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i]['url']).toBeDefined();
                expect(allFeeds[i]['url']).not.toEqual('');
               }
            });


        /* 
        Test that all the feeds have names
         */


         // same as before but accessing the name value rather than the URL

           it('has a name', function() {
            for (i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i]['name']).toBeDefined();
                expect(allFeeds[i]['name']).not.toEqual('');
               }
            });




    });




 
    describe('The Menu', function() {
        
                /* 
                 Test that the menu element is hidden by default. Done by checking the 'menu-hidden' 
                 class is present on the body tag at page load
                 */

         // just test the body element to see if it has menu-hidden as a class on page load.

            it('menu hidden by default', function() {   
              
               expect($('body').hasClass('menu-hidden')).toBe(true);
            });


             /* 
             Test that the menu opens and closes when clicked
              */

              
            it('menu visibility should change on click', function () {
                //trigger a click function and then test whether the class name exists on the HTML element.
                $('.menu-icon-link').trigger('click');   
                expect($('body').hasClass('menu-hidden')).toBe(false);
                // trigger a second click and run test again
                $('.menu-icon-link').trigger('click');
                expect($('body').hasClass('menu-hidden')).toBe(true);

             });


  


    });

    describe('Initial Entries', function () {
          /* 
         Check that an entry is present within the feed container
         */

         //load the feed in the beforeEach function, then check to see if something exists in the entry container of the feed container.

           beforeEach(function(done) {
                loadFeed(0, function() {
                    done();
                });
            });


         it('entry element present', function(done) {
            let feedEntry = $('.feed .entry');
            // console.log(feedEntry);
            expect(feedEntry).toBeDefined();
            expect(feedEntry.length).toBeGreaterThan(0);
            done();
         });

    });




    describe('New Feed Selection', function () {
         /* Check that new content is loaded.
         */

         // load first feed, capture the value of the innerHTML inside the entry,
         // then do the same for next feed
      

         var feed1;
         var feed2;

            beforeEach(function(done) {
                loadFeed(0, function() {
                // feed 1 done loading
                feed1 = $('.feed .entry')[0].innerHTML;
                console.log(feed1);
                    loadFeed(1, function() {
                    // feed 2 done loading
                    feed2 = $('.feed .entry')[0].innerHTML;
                    console.log(feed2);
                });
            done();
            });
               
            // Test to make sure that the two variables contain different values.
                
                
            });

             it('feed content should change', function() {
                expect(feed1).not.toBe(feed2);
             });
       
        }



)}());
