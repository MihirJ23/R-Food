exports.config =
    {
        //defines which specs Protractor runs
        specs: ['DiningHall.js'],
        /*
            Use './specs/**.js' if you want to run all the scripts
        */


        //which browsers Protractor will run tests on
        capabilities:
        {
            'browserName': 'chrome'
        },
       
    }