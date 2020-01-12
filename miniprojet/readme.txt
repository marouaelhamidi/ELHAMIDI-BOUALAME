readme.md

Informations g�n�rales :

Application web de gestion des �tudiants
Elle concerne la gestion des �tudiants par leur ajout,
modification et suppression en utilisant les interfaces: login, home, sign up et liste des �tudiants


Outils utilis�s :

MongoDB Atlas : 
On se connecte � cette base de donn�es en utilisant node js et en utilisant des APIs
Mangoose est l'un des outils fondamentals pour manipuler la base de donn�es pour Node.js/MongoDB backend en utilisant MongoDB Atlas
En utilisant �galement Express pour configurer un serveur de base
et en configurant �galement une basic REST Api sans authentification
Les fonctions async/await sont �galement utilis�s pour synchroniser le routing
Egalement Postman pour tester les requetes sans copier/coller les requetes HTTP 


Configuration :

Configurer le serveur:
$ npm i express mongoose
Commandes pour lancer le front-end et le back-end react:
cd back npm start
cd front npm start
Utilisation des Schemas:
Les schemas nous permettent de d�cider exactement quelles donn�es nous voulons et quelles options nous voulons que les donn�es aient comme objet.
Configuration des fichiers:
models
routes
server.js

Etapes d'utilisation :

L'application contient les interfaces :
Interface home qui pr�sente le projet
Interface login pour enregistrer l'�tudiant
Interface sign up pour se connecter, dans laquelle on doit choisir le nom d'utilisateur et entrer le mot de passe pour commencer � utiliser notre application.
Cette �tape met en valeur l'aspect s�curit� : nous v�rifions la disponibilit� du compte utilisateur et nous lui attribuons les droits et privil�ges n�cessaires.
Interface de liste des �tudiants qu'on peut g�rer en modifiant, ajoutant et supprimant un ou des �tudiants :
Ajout des �tudiants, en introduisant les informations qui lui sont relatives(email,nom,pr�nom,age...)
Supprimer des �tudiants: 
Pour la suppression d'un �tudiant, en appuyant sur � Supprimer � ; les donn�es seront automatiquement supprim�es de la base de donn�es � l'aide d'une requ�te dynamique. 
Modifier des �tudiants:
En cas d'erreur de saisi, ou de demande de modification de donn�es relatives � un �tudiant. 
Pour r�aliser cette action, il suffit de s�lectionner l'�tudiant dans la liste,
une nouvelle interface appara�tra pour faire des mise � jour aux donn�es de l'�tudiant s�lectionn�.
Consulter la liste des etudiants
 

Auteurs:
Kenza BOUALAME
Maroua EL HAMIDI
