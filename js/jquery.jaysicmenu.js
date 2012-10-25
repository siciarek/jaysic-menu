(function ($) {

    $.jaysic = {

        container: null,

        menu: function (config, renderTo) {
            renderTo = renderTo || "menu";
            this.container = $("#" + renderTo);

            this.container.addClass("jaysic-menu");
            this.container.append(this.renderMenu(config));

            $(".jaysic-menu a").bind('click', function() {
                var submenu = $(this).parent().parent().children().last();
                submenu.children().css({
                    clear: "both"
                });
                submenu.show();
            });
        },

        renderMenu: function (children) {

            var container = document.createElement("ul");

            for (var i = 0; i < children.length; i++) {
                var element = children[i];

                var hasChildren = typeof element.children !== "undefined";
                var hasUrl = typeof element.url !== "undefined";
                var hasAction = typeof element.action !== "undefined";
                var hasIcon = typeof element.icon !== "undefined";

                var menu = document.createElement("li");
                var content = document.createElement("span");
                var text = document.createTextNode(element.caption);
                var link = document.createElement("a");

                content.setAttribute("title", element.caption);
                content.appendChild(text);

                link.setAttribute("href", "javascript:void(null)");

                if (hasAction && hasChildren === false) {
                    content.setAttribute("onclick", element.action);
                    content.setAttribute("class", "action");
                }
                else if (hasUrl && hasChildren === false) {
                    link.setAttribute("href", element.url);
                }

                if (hasIcon === true) {
                    link.setAttribute("class", "icon icon-" + element.icon);
                }

                link.appendChild(text);
                content.appendChild(link);

                menu.appendChild(content);

                if (hasChildren === true) {
                    menu.appendChild(this.renderMenu(element.children));
                }

                container.appendChild(menu);
            }

            return container;
        }
    }
})(jQuery);
