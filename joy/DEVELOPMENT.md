#Development Journal (dates in reverse order)

*showAll and showWork*
The default value of ShowAll is true and ShowWork is false
When the data are fetched, they go back to default values

*rel*
added

*cash* and *card*
added
The details of merging the tables works and works_expenses can be referred in MySQL category

#PROBLEM SOLVED
===============
#MySQL

##utf
    The utf must be set first before the backuped db is restored

    Check the MySQL server's utf-setting

            show variables like "collation_database";

                Variable_name       Value
                -------------       -----
                collation_database  utf8_general_ci

            show variables like "%character%";

                Variable_name             Value
                -------------             -----
                character_set_client      utf8
                character_set_connection  utf8
                character_set_database    utf8
                character_set_filesystem  binary
                character_set_results     utf8
                character_set_server      utf8
                character_set_system      utf8
                character_sets_dir        C:\Program Files (x86)\MySQL\MySQL Server 5.6\share\charsets\

            show variables like "%collation%";
                Variable_name         Value
                -------------         -----
                collation_connection  utf8_general_ci
                collation_database    utf8_general_ci
                collation_server      utf8_general_ci

    copy the my.ini into home directory

        c:\Users\joy\my.ini
            [mysqld]
            init_connect='SET collation_connection = utf8_general_ci'
            init_connect='SET NAMES utf8'
            character-set-server=utf8
            collation-server=utf8_general_ci
            skip-character-set-client-handshake
            datadir=c:/mysql/data
            tmpdir=c:/mysql/tmp
            log-error=c:/mysql/data/mysql.err
            port=3306
            slow-start-timeout=0
            log-warnings=2

    and restart the server
    and in mysql client, then make a database

         create database tzangi

    and in the dos command prompt, restore the backuped db in the new created database tzangi

        C:\mysql> mysql-5.6.23-winx64\bin\mysql.exe -u yjy -p tzangi < works-20150221-0918.sql

##Add a column REL
    ALTER TABLE `tzangi`.`works` ADD COLUMN `rel` VARCHAR(255) NULL AFTER `ref_bunho`;

##Merge and update from 2 tables (works, workcaptions)
    http://stackoverflow.com/questions/1262786/mysql-update-query-based-on-select-query

    Append the caption of WORKCAPTIONS table to the caption of WORKS table

    UPDATE
    works dest,

    (SELECT CONCAT(W.caption, " (", WC.caption,")") AS result, WC.rel, W.bunho
    FROM works W, workcaptions WC WHERE WC.bunho = W.ref_bunho) src

    SET dest.caption = src.result, dest.rel = src.rel
            WHERE dest.bunho = src.bunho;

## Merge and update from 2 tables (works, works_expenses)
    UPDATE works dest,
    (
    SELECT E.ref_bunho AS ref_bunho, E.cash, E.card, W.bunho
    FROM works W, works_expenses E
    WHERE W.bunho = E.ref_bunho
    ) src
    SET dest.cash = src.cash, dest.card = src.card
    WHERE dest.bunho = src.ref_bunho
    ;

##set mark to 'o'
    UPDATE works SET mark='o';

##Field Name Change
    ref_bunho -> ref
    ALTER TABLE `tzangi`.`works` CHANGE `ref_bunho` `ref` VARCHAR(14) CHARSET utf8 COLLATE utf8_general_ci NULL;

    * For reference
    ALTER TABLE `tzangi`.`works` CHANGE `rel` `rel` VARCHAR(255) CHARSET utf8 COLLATE utf8_general_ci NULL AFTER `ref`, CHANGE `caption` `caption` VARCHAR(255) CHARSET utf8 COLLATE utf8_general_ci DEFAULT '' NULL AFTER `rel`;

##New Talbe: works_eks

        CREATE TABLE works_eks LIKE works;

    Add a field: bunho_original

        ALTER TABLE `tzangi`.`works_eks` CHANGE `bunho` `bunho` INT NOT NULL AUTO_INCREMENT, ADD COLUMN `bunho_original` INT NOT NULL AFTER `mark`;

##Change bunho int(6) to int

        ALTER TABLE `tzangi`.`works` CHANGE `bunho` `bunho` INT NOT NULL AUTO_INCREMENT;

##DB PROTOCOL
* All tables have index key of bunho

#filter

##Line Break Filter

    tried to replace '\n' in work data with '<br>', but strangely it only displays as it is with '<br>' written but no line break on the browser

    Searched and solved by help in stackoverflow
    http://stackoverflow.com/questions/13964735/angularjs-newline-filter-with-no-other-html
    <p style="white-space: pre;">{{ MyMultiLineText}}</p>

##mrk order

* caption-nalja-sigack
* mark-nalja-sigack
* nalja-sigack
* sigack-nalja
* yoil-nalja-sigack
* ref-nalja-sigack

##reverse order

#Caption Bar

    index   nalja   yoil    caption
    bunho   sigack  mark    ref rel

#Ref Number

Each new work has a ref number the same as its bunho
A new work will use the same ref number of the clicked work

##Child ref
Click on the bunho of a work, then the workdialog will have the bunho as its ref number

#Accessing clicked element in angularjs
http://stackoverflow.com/a/12431211
http://stackoverflow.com/questions/12430820/accessing-clicked-element-in-angularjs
http://jsfiddle.net/pkozlowski_opensource/WXJ3p/15/

#SOCKET
##JOYServer.js
###Why am I unable to push data using Socket.IO + node.js?
    http://www.quora.com/Why-am-I-unable-to-push-data-using-Socket-IO-+-node-js

    What you could do instead is broadcast to all connected sockets:

    function saveLatestData(data) {
      io.sockets.emit('event', { ... });
    }
/*
|----------------------------------
|   S O C K E T . I O
|----------------------------------
*/
var server = app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

var io = require('socket.io').listen(server);

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
});

exports.informFxRates = function (data) {
    io.sockets.emit('fx', { fx: data });
};

##joysql.js
if (dbobj.dbop === "fx") {server.informFxRates(dbobj.qobj);}

