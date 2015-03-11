MySQL Manual Installation using zip version

http://mysqlbugs.blogspot.kr/2014/08/basic-windows-mysql-installation.html

mkdir C:\mysql
mkdir C:\mysql\tmp

unzip and copy mysql.zip into C:\mysql, so it will be come C:\mysql\mysql-5.6.23-winx64
move the data directory up to C:\mysql, so it will become C:\mysql\data
mv all files other than the directories to other directory for backup
(The moved files are 3 ib* files. These will be created again by mysql service later)

Create my.ini in C:\mysql\data
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

(* in the my.ini file, all back slashes should be gone into forward slash)
(* and default-character-set=utf8 is not used anymore, and character-set-server=utf8 is used instead)

Install service
C:\mysql\mysql-5.6.23-winx64\bin> mysqld.exe --install MySQL_5623 --defaults-file=c:/mysql/data/my.ini --local-service

Start the service
C:\mysql> SC START MySQL_5623
(*if something goes wrong, do SC DELETE MySQL_5623, then install the service again)

To check the service
C:\mysql\mysql-5.6.23-winx64\bin> sc qc MySQL_5623
[SC] QueryServiceConfig SUCCESS

SERVICE_NAME: MySQL_5623
        TYPE               : 10  WIN32_OWN_PROCESS
        START_TYPE         : 2   AUTO_START
        ERROR_CONTROL      : 1   NORMAL
        BINARY_PATH_NAME   : C:\mysql\mysql-5.6.23-winx64\bin\mysqld.exe --defaults-file=c:/mysql/data/my.ini MySQL_5623
        LOAD_ORDER_GROUP   :
        TAG                : 0
        DISPLAY_NAME       : MySQL_5623
        DEPENDENCIES       :
        SERVICE_START_NAME : NT AUTHORITY\LocalService

Create a user
C:\mysql\mysql-5.6.23-winx64\bin> mysql -u root
mysql> select password(111);
mysql> GRANT ALL ON *.* TO 'yjy'@'localhost' IDENTIFIED BY PASSWORD '*832EB84CB764129D05D498ED9CA7E5CE9B8F83EB';

To change root's password if it was set wrong
mysql> update mysql.user set Password=PASSWORD('111') where User='root';