function tennisAction() {
    var x = $(".jaysic-menu .root").children();

    console.log(x);
}

var favourites = [
    {
        "caption": "LH DB",
        "url": "index.html",
        "action": "tennisAction()",
        "icon": "phpmyadmin"
    },
    {
        "caption": "SESCRM DEV",
        "url": "index.html",
        "action": "tennisAction()",
        "icon": "share-document"
    },
    {
        "caption": "KONTAKTORIA DEV",
        "url": "index.html",
        "action": "tennisAction()",
        "icon": "kontaktoria"
    }
];

var firefox = [
    {
        "caption": "Plik",
        "children": [
            {"caption":"Nowa karta"},
            {"caption":"Nowe okno"},
            {"caption":"Otwórz plik"},
            "-",
            {"caption":"Zapisz stronę jako"},
            {"caption":"Wyślij odnośnik"},
            "-",
            {"caption":"Ustawienia strony"},
            {"caption":"Podgląd wydruku"},
            {"caption":"Drukuj"},
            "-",
            {"caption":"Pracuj w trybie offline"},
            {"caption":"Zakończ"}
        ]
    },
    {
        "caption": "Edycja"
    },
    {
        "caption": "Widok"
    },
    {
        "caption": "Historia"
    },
    {
        "caption": "Zakładki"
    },
    {
        "caption": "Narzędzia"
    },
    {
        "caption": "Pomoc"
    }
]

var ironmenu = [
    {
        "caption": "Start",
//        "url": "index.html",
        "action": "tennisAction()"
    },
    '-',
    {
        "caption": "Games",
//        "url": "games.html",
        "children": [
            {
                "caption": "Soccer",
//                "url": "soccer.html",
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
                    },
                    {
                        "caption": "NASCAR",
                        "icon": "car"
                    },
                    {
                        "caption": "NASCAR",
                        "icon": "car"
                    },
                    {
                        "caption": "NASCAR",
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
//                "url": "tennis.html",
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
//                "url": "france.html",
                "icon": "france"
            },
            '-',
            {
                "caption": "Poland",
//                "url": "poland.html",
                "icon": "poland"
            },
            {
                "type": "separator"
            },
            {
                "caption": "Germany",
//                "url": "germanu.html",
                "icon": "germany"
            }
        ]
    },
    {
        "caption": "Logout",
//        "url": "logout.html",
        "icon": "logout"
    }
];

$(document).ready(function () {
    $.jaysic.menu(ironmenu);
});
