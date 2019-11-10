describe('Dining Hall Menu', function()
{
    var AI = {count : 0};
    var LO = {count : 0};
    var GM = {count : 0};

    //prints out current working directory:
    console.log('Current directory: ' + process.cwd());

    /*
        Protractor goes to the website of the dining halls and then stores 
        the number of vegeterian items into a variable. Then it will later 
        compare the value with other dining halls and output the dining hall 
        with the highest number of vegeterian options. 
    */

    
    beforeAll( function() 
    {
        console.log("");
        console.log("");

        //LO
        browser.manage().deleteAllCookies();
        browser.waitForAngularEnabled(false);
        browser.get('http://138.23.12.141/foodpro/shortmenu.asp?sName=University+of+California,+Riverside+Dining+Services&locationNum=02&locationName=Lothian+Residential+Restaurant&naFlag=1');
        var vTag = element.all(by.css("img[src ='LegendImages/veg_.gif']"));
        browser.sleep(2000);
        vTag.count().then(function (countLO) {
            console.log("Lothian: " + (countLO - 1));
            LO.count = countLO;
        });
    
        //GM
        browser.manage().deleteAllCookies();
        browser.waitForAngularEnabled(false);
        browser.get('http://138.23.12.141/foodpro/shortmenu.asp?sName=University+of+California,+Riverside+Dining+Services&locationNum=05&locationName=Market+at+Glen+Mor&naFlag=1');
        var vTag = element.all(by.css("img[src ='LegendImages/veg_.gif']"));
        browser.sleep(2000);
        vTag.count().then(function (countGM) {
            console.log("Glen Mor: " + (countGM - 1));
            GM.count = countGM;
        });

        //A-I
        browser.manage().deleteAllCookies();
        browser.waitForAngularEnabled(false);
        browser.get('http://138.23.12.141/foodpro/shortmenu.asp?sName=University+of+California,+Riverside+Dining+Services&locationNum=03&locationName=A+-+I+Residential+Restaurant&naFlag=1');
        var vTag = element.all(by.css("img[src ='LegendImages/veg_.gif']"));
        browser.sleep(2000);
        vTag.count().then(function (countAI) {
            console.log("A-I: " + (countAI - 1));
            AI.count = countAI;
        });    
    })

    /*
        This function compares the dining halls number of vegeterian options.
    */
   
    it("Check Which Menu Has Most options", function() {
        if((AI.count > GM.count) && (AI.count > LO.count))
        {
            console.log("");
            console.log("A-I has the most vegeterian options today!");
            console.log("Please go to A-I");
        }
        else if((GM.count > AI.count) && (GM.count > LO.count))
        {
            console.log("");
            console.log("Glen Mor has the most vegeterian options today!");
            console.log("Please go to Glen Mor");
        }
        else if((LO.count > GM.count) && (LO.count > AI.count))
        {
            console.log("");
            console.log("Lothian has the most vegeterian options today!");
            console.log("Please go to Lothian");
        }
        else
        {
            console.log("");
            console.log("No good options anywhere today!");
        }

      });

})
