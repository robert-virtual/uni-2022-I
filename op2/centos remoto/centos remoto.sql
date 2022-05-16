CREATE TABLESPACE robert  DATAFILE 'UNICAH.DBF' SIZE 20M ONLINE;

alter session set "_ORACLE_SCRIPT"=true;

CREATE USER robert IDENTIFIED BY 082000 DEFAULT TABLESPACE robert; 

GRANT CONNECT,RESOURCE TO robert; 

ALTER USER robert QUOTA 100M ON robert;