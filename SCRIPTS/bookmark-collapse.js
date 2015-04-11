// the bookmark open property is not supported by Reader;
if(app.viewerType != "Reader") {
function OpenBookmark(bm, bOpen){
/*
Purpose: to Open all the bookmarks in a PDF file

Inputs: bookmark object
        bookmark open property's logical value default is true
          Optionally the bookmark open property can be passed as open or close
          and the funciton will set bOpen parameter tot he correct logical value.

Returns: logical for sucessful completion of function;

Notes: This function can be placed in the folder level JavaScript
folder and called through the JavaScript (Debugger) console or called
from a batch process. It could also be added to a PDF as a document
level function and executed on each opening to open all the bookmarks
in the PDF.

// example of usage
OpenBookMark(this.BookmardRoot, true);

This function is recursively calls itself to work through the bookmark tree.

author: George Kaiser
*/
bResult = true; // assumed result for function execution;
// check value of bOpen parameter exist if not set to defualt of true;
if(typeof bOpen == "undefined") var bOpen = true;
if(String(bOpen).toLowerCase().substr(0,1) == "o") bOpen = true;
if(String(bOpen).toLowerCase().substr(0,1) == "c") bOpen = false;
if(bOpen != true && bOpen != false) {
app.alert("bOpen parameter must be either true or flase.\nbOpen = " + bOpen, 0, 0);
}
try {
// set bookmark open property to bOpen value for the current bookmark level;
bm.open = bOpen;

// loop through all the levels of the bookmarks ;
// recursively open the bookmark’s children:
if (bm.children != null) {

// loop to the lowest bookmark
for (var i = 0; i < bm.children.length; i++) {
OpenBookmark(bm.children[i], bOpen);
} // end for bm.children[i].length

} // end if != null
} catch (e) {
bResult = false; // set return value for failure;
app.alert("Open all bookmarks failed.\nBookmark parameter object type: " + typeof bm + "\nbOpem parameter value: " + bOpen, 0, 0);
} finally {
return bResult; // return process result;
} // end try
} // end OpenBookmark function
} // end viewer type not reader;

if(app.viewerType != "Reader") {
// the bookmark open property is not supported by Reader;
// add menuitem for Open Bookmarks;
app.addMenuItem( { cName: "OpenBookmarks",
cUser: "Open All Bookmarks",
cParent: "View",
cExec: "OpenBookmark(this.bookmarkRoot);",
cEnable: "event.rc = (event.target != null);"
 });

// the bookmark open property is not supported by Reader;
// Close Bookmarks;
app.addMenuItem( { cName: "CloseBookmarks",
cUser: "Close All Bookmarks",
cParent: "View",
cExec: "OpenBookmark(this.bookmarkRoot, 'Close');",
cEnable: "event.rc = (event.target != null);"
});
 } // end viewer type not reader;

 // tool bar buttons;
if(app.viewerType != "Reader") {
 // removeToolButton
try{
app.removeToolButton({cName:"BookmarkOpen"});
} catch (e) {
// do nothing;
}
// add a toolbutton
    app.addToolButton({
        cName: "BookMarkOpen",
        cExec: "OpenBookmark(this.bookmarkRoot, 'open');",
        cEnable: "event.rc = (event.target != null);",
        cTooltext: "Open All Bookmarks"
        });
try{
app.removeToolButton({cName:"BookmarkClose"});
} catch (e) {
// do nothing;
}
// add a toolbutton
    app.addToolButton({
        cName: "BookMarkClose",
        cExec: "OpenBookmark(this.bookmarkRoot, 'Close');",
        cEnable: "event.rc = (event.target != null);",
        cTooltext: "Close All Bookmarks"
        });
} // end not reader

 function ToggleBookmarks() {
/*
toggle bookmark navigation pane value;
Uses the undocumented doc property of pane
"" = none
"B" = bookmarks
"L" = layers
"T" = thumbnails

author: George Kaiser
*/

this.pane.toUpperCase() != "B"? this.pane = "B" : this.pane = "";
return true
};
// add menu item
  app.addMenuItem({
  cName: "ToogleBookMarks",
  cUser: "Toggle Bookmarks Pane",
  cParent: "View",
  cExec: "ToggleBookmarks();",
  cEnable: "event.rc = (event.target != null);"
  });
try{
app.removeToolButton({cName:"ToggleBookmark"});
} catch (e) {
// do nothing;
}
// add a toolbutton
    app.addToolButton({
        cName: "ToggleBookmark",
        cExec: "ToggleBookmarks();",
        cEnable: "event.rc = (event.target != null);",
        cTooltext: "Toggle Bookmarks"
        });