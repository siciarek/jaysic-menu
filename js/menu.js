function tennisAction() {
    console.log("Tennis Action");
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
        "menu": [
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
        "url": "index.html",
        "action": "tennisAction()"
    },
    '-',
    {
        "caption": "Games",
        "menu": [
            {
                "caption": "Soccer",
                "icon": "soccer",
                "url": "http://en.wikipedia.org/wiki/Association_football"
            },
            "-",
            {
                "caption": "Racing",
                "icon": "car",
                "menu": [
                    {
                        "caption": "F1",
                        "icon": "car",
                        "menu": [
                            {
                                "caption": "France",
                                "url": "http://en.wikipedia.org/wiki/France",
                                "icon": "france"
                            },
                            '-',
                            {
                                "caption": "Poland",
                                "url": "http://en.wikipedia.org/wiki/Poland",
                                "icon": "poland"
                            },
                            {
                                "type": "separator"
                            },
                            {
                                "caption": "Germany",
                                "url": "http://en.wikipedia.org/wiki/Germany",
                                "icon": "germany"
                            }
                        ]
                    },
                    {
                        "caption": "NASCAR",
                        "icon": "car",
                        "menu": [
                            {
                                "caption": "France",
                                "url": "http://en.wikipedia.org/wiki/France",
                                "icon": "france"
                            },
                            '-',
                            {
                                "caption": "Poland",
                                "url": "http://en.wikipedia.org/wiki/Poland",
                                "icon": "poland"
                            },
                            {
                                "type": "separator"
                            },
                            {
                                "caption": "Germany",
                                "url": "http://en.wikipedia.org/wiki/Germany",
                                "icon": "germany"
                            }
                        ]
                    }
                ]
            },
            "-",
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
        "menu": [
            {
                "caption": "France",
                "url": "http://en.wikipedia.org/wiki/France",
                "icon": "france"
            },
            '-',
            {
                "caption": "Poland",
                "url": "http://en.wikipedia.org/wiki/Poland",
                "icon": "poland"
            },
            {
                "type": "separator"
            },
            {
                "caption": "Germany",
                "url": "http://en.wikipedia.org/wiki/Germany",
                "icon": "germany"
            }
        ]
    },
    {
        "caption": "Logout",
        "action": "alert('Logout Action')",
        "icon": "logout"
    }
];

var simple = [
    {
        "caption" : "Nowa karta",
        "icon": "soccer"
    },
    {
        "caption" : "Nowe okno",
        "icon": "car"
    },
    {
        "caption" : "Otwórz plik"
    },
    {
        "caption" : "Zakończ"
    }
];


$(document).ready(function () {
    $.jaysic.menu(ironmenu);
});
