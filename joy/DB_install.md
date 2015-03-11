=Reinstall

=WORKS

==Merge and update from 2 tables (works, workcaptions)

		ALTER TABLE `tzangi`.`works` ADD COLUMN `rel` VARCHAR(255) NULL AFTER `ref_bunho`;

		UPDATE
		    works dest,

		    (SELECT CONCAT(W.caption, " (", WC.caption,")") AS result, WC.rel, W.bunho
		    FROM works W, workcaptions WC WHERE WC.bunho = W.ref_bunho) src

		    SET dest.caption = src.result, dest.rel = src.rel
		            WHERE dest.bunho = src.bunho;

		SELECT * FROM works ORDER BY bunho DESC LIMIT 100;


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

##Change bunho int(6) to int

        ALTER TABLE `tzangi`.`works` CHANGE `bunho` `bunho` INT NOT NULL AUTO_INCREMENT;

##Add Cash and Card
		ALTER TABLE `tzangi`.`works`
		CHANGE `ref` `ref` VARCHAR(14) CHARSET utf8 COLLATE utf8_general_ci NULL  AFTER `bunho`,
		CHANGE `nalja` `nalja` DATE DEFAULT '0000-00-00'   NULL  AFTER `ref`,
		CHANGE `sigack` `sigack` TIME DEFAULT '00:00:00'   NULL,
		CHANGE `mark` `mark` CHAR(1) CHARSET utf8 COLLATE utf8_general_ci NULL  AFTER `yoil`,
		ADD COLUMN `cash` INT NULL AFTER `mark`,
		ADD COLUMN `card` INT NULL AFTER `cash`;


#WORKS_EKS

##New Talbe: works_eks
		DROP TABLE IF EXISTS works_eks;
		CREATE TABLE works_eks LIKE works;

    Add a field: bunho_original

        ALTER TABLE `tzangi`.`works_eks` CHANGE `bunho` `bunho` INT NOT NULL AUTO_INCREMENT, ADD COLUMN `bunho_original` INT NOT NULL AFTER `work`;

#FXRATES

		CREATE TABLE `tzangi`.`fxrates`( `bunho` INT NOT NULL AUTO_INCREMENT, `cnytb` REAL, `eurts` REAL, `gbpts` REAL, `jpyts` REAL, `usdts` REAL, `nalja` DATE, `sigack` TIME, PRIMARY KEY (`bunho`) ) CHARSET=big5;

