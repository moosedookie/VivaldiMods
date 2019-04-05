setTimeout(function wait(){

    toolbar = document.querySelector("div.toolbar-addressbar.toolbar>div.toolbar");
    bookmarkbar = document.querySelector("div.bookmark-bar");
    morebookmarks = document.querySelector("button[title='More bookmarks']");

    if (bookmarkbar != null){
        // By setting the bookmarkbar to zero width, all bookmarks are forced into the "More bookmarks" button
        bookmarkbar.style.width = 5;
    }

    if (toolbar != null && bookmarkbar != null && morebookmarks != null){
        // Move "More bookmarks" button from bookmarkbar to toolbar,...
        toolbar.appendChild(morebookmarks);
        // style it like a toolbar button,...
        morebookmarks.classList.add("button-toolbar");
        // and hide the rest of the bookmarkbar
        bookmarkbar.style.display = "none";
        // Make a bookmarks icon (copied from the bookmarks panel)
        morebookmarks.firstElementChild.firstElementChild.setAttribute("d", "M7 22.5l6-3.5 6 3.5v-16.5h-12v16.5zm2-3.5v-11h8v11l-4-2.2-4 2.2z");
        morebookmarks.firstElementChild.setAttribute("viewBox", "0 0 26 26");
        morebookmarks.firstElementChild.setAttribute("height", "26");
        morebookmarks.firstElementChild.setAttribute("width", "26");

    } else {
        setTimeout(wait, 100);
    }
}, 100);