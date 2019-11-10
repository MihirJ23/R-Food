describe('Dining Hall Menu', function()
{
    // var countAI;
    // var countLO;
    // var countGM;
    var AI = {count : 0};
    var LO = {count : 0};
    var GM = {count : 0};

    console.log('Current directory: ' + process.cwd());

    beforeAll( function() 
    {
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

    it("Test", function() {
        if((AI.count > GM.count) && (AI.count > LO.count))
        {
            console.log("A-I has the most vegeterian options today!");
        }
        else if((GM.count > AI.count) && (GM.count > LO.count))
        {
            console.log("Glen Mor has the most vegeterian options today!");
        }
        else if((LO.count > GM.count) && (LO.count > AI.count))
        {
            console.log("Lothian has the most vegeterian options today!");
        }
        else
        {
            console.log("No good options anywhere today!");
        }

      });

})

