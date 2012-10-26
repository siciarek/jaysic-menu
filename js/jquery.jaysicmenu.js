(function ($) {

    $.jaysic = {

        container: null,

        menu: function (config, renderTo) {
            renderTo = renderTo || "menu";
            this.container = $("#" + renderTo);

            this.container.addClass("jaysic-menu");
            var menu = this.renderMenu(config, true);
            this.container.append(menu);

            $(".jaysic-menu li").mouseenter(function () {
                var t = $(this);
                var submenu = t.children("ul");

                if (submenu.length > 0) {

                    submenu.css({
                        left: t.position().left,
                        top: t.position().top + t.parent().height() - 1
                    });

                    var width = 0;
                    var minWidth = parseInt($(submenu.children()[0]).css("min-width"));

                    for (i = 0; i < submenu.children().length; i++) {
                        var child = $(submenu.children()[i]);

                        if(child.text() === "NASCAR") {

                            console.log(submenu);

                            submenu.css({
                                left: 100,
                                top: 200
                            });

                            submenu.show();
                            return;
                        }

                        var xwidth = child.width();
                        width = (xwidth > width) ? xwidth : width;
                    }

                    if(width > minWidth) {
                        submenu.children().width(width);
                    }

                    submenu.show();
                }
            });

            $(".jaysic-menu li").mouseleave(function () {
                var t = $(this);
                t.children("ul").hide();
            });

        },

        renderMenu: function (children, root) {

            var container = document.createElement("ul");

            if (root == true) {
                container.setAttribute("class", "root");
            }

            for (var i = 0; i < children.length; i++) {
                var element = children[i];

                var hasChildren = typeof element.children !== "undefined";
                var hasUrl = typeof element.url !== "undefined";
                var hasAction = typeof element.action !== "undefined";
                var hasIcon = typeof element.icon !== "undefined";

                var menu = document.createElement("li");
                var text = document.createTextNode(element.caption);
                var link = document.createElement("div");

                link.appendChild(text);
                menu.appendChild(link);

                if (hasAction && hasChildren === false) {
                    menu.setAttribute("onclick", element.action);
                }
                else if (hasUrl && hasChildren === false) {
                    menu.setAttribute("onclick", "location.href='" + element.url + "'");
                }

                if (hasIcon === true) {
                    link.setAttribute("class", "icon icon-" + element.icon);
                }

                if (hasChildren === true) {
                    menu.appendChild(this.renderMenu(element.children, false));
                    if(root === false) {
                        menu.setAttribute("class", "has-children");
                    }
                }

                container.appendChild(menu);
            }

            return container;
        }
    }

})(jQuery);
