# Password-Manager-npm

CLI Password manager with AES encryption.

save your passwords in a safe place for your social sites, shopping sites etc localy.


-n = Name of the account

-u = Username

-p = Password

-m = Your master password


Your first master password is your master password for all 'create' & 'get' commands. 

-Create new account
node app.js create -n twitter -u yoyo59 -p qwe123 -m momy

--------------------------------
Starting Password manager App.
--------------------------------

New accounts created:  { name: 'twitter', username: 'yoyo59', password: 'qwe123' }
Your master password:  momy

--------------------------------------------------------------------------------------------------------------

-Get account
node app.js get -n twitter -m momy


--------------------------------
Starting Password manager App.
--------------------------------

Searching for account:  twitter

Account found:
{ name: 'twitter', username: 'yoyo59', password: 'qwe123' }


Have fun!
spiral2k

