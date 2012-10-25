function tennisAction() {
    var x = $(".jaysic-menu .root").children();

    console.log(x);
}

$(document).ready(function () {

   $.jaysic.menu([
        {
            "caption": "Home",
            "url": "index.html",
            "icon": "home",
            "action": "tennisAction()"
        },
        {
            "caption": "Games",
            "url": "games.html",
            "icon": "soccer",
            "children": [
                {
                    "caption": "Soccer",
                    "url": "soccer.html",
                    "icon": "soccer"
                },
                {
                    "caption": "Racing",
                    "icon": "car",
                    "children": [
                        {
                            "caption": "F1",
                            "url": "racing-f1.html",
                            "icon": "car"
                        },
                        {
                            "caption": "NASCAR",
                            "icon": "car"
                        }
                    ]
                },
                {
                    "caption": "Tennis",
                    "url": "tennis.html",
                    "action": "alert('Tennis Action')"
                }
            ]
        },
        {
            "caption": "Countries",
            "icon": "world",
            "children": [
                {
                    "caption": "France",
                    "url": "france.html",
                    "icon": "france"
                },
                {
                    "caption": "Germany",
                    "url": "germanu.html",
                    "icon": "germany"
                },
                {
                    "caption": "Poland",
                    "url": "poland.html",
                    "icon": "poland"
                }
            ]
        },
        {
            "caption": "Logout",
            "url": "logout.html",
            "icon": "logout"
        }
    ]);

});
