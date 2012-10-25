$(document).ready(function () {

    function tennisAction() {
        alert("Tennis Action");
    }

    $.jaysic.menu([
        {
            "caption": "Home",
            "url": "index.html",
            "icon": "home"
        },
        {
            "caption": "Games",
            "url": "games.html",
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
                    "action": "alert(3)"
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
