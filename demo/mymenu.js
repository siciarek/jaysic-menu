function tennisAction() {
    console.log("Tennis Action");
}

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
    },
    "-",
    {
        "caption": "Disabled menu bar",
        "icon": "logout"
    },
    "-",
    {
        "caption": "Disabled menu bar no icon"
    }
];


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
                "caption": "Tennis"
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
            },
            {
                "type": "separator"
            },
            {
                "caption": "Netherlands",
                "url": "http://en.wikipedia.org/wiki/Netherlands",
                "icon": ""
            },
            {
                "caption": "Neverland",
                "icon": ""
            }
        ]
    },
    {
        "caption": "Logout",
        "action": "alert('Logout Action')",
        "icon": "logout"
    },
    "-",
    {
        "caption": "Disabled menu item"
    },
    {
        "caption": "Disabled menu item with icon",
        "icon": null
    },
    "-",
    {
        "caption": "Disabled"
    }
];

$(document).ready(function () {
    $.jaysic.menu.create(ironmenu);
});
