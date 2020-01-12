readme.md

Informations générales :

Application web de gestion des étudiants
Elle concerne la gestion des étudiants par leur ajout,
modification et suppression en utilisant les interfaces: login, home, sign up et liste des étudiants


Outils utilisés :

MongoDB Atlas : 
On se connecte à cette base de données en utilisant node js et en utilisant des APIs
Mangoose est l'un des outils fondamentals pour manipuler la base de données pour Node.js/MongoDB backend en utilisant MongoDB Atlas
En utilisant également Express pour configurer un serveur de base
et en configurant également une basic REST Api sans authentification
Les fonctions async/await sont également utilisés pour synchroniser le routing
Egalement Postman pour tester les requetes sans copier/coller les requetes HTTP 


Configuration :

Configurer le serveur:
$ npm i express mongoose
Commandes pour lancer le front-end et le back-end react:
cd back npm start
cd front npm start
Utilisation des Schemas:
Les schemas nous permettent de décider exactement quelles données nous voulons et quelles options nous voulons que les données aient comme objet.
Configuration des fichiers:
models
routes
server.js

Etapes d'utilisation :

L'application contient les interfaces :
Interface home qui présente le projet
Interface login pour enregistrer l'étudiant
Interface sign up pour se connecter, dans laquelle on doit choisir le nom d'utilisateur et entrer le mot de passe pour commencer à utiliser notre application.
Cette étape met en valeur l'aspect sécurité : nous vérifions la disponibilité du compte utilisateur et nous lui attribuons les droits et privilèges nécessaires.
Interface de liste des étudiants qu'on peut gérer en modifiant, ajoutant et supprimant un ou des étudiants :
Ajout des étudiants, en introduisant les informations qui lui sont relatives(email,nom,prénom,age...)
Supprimer des étudiants: 
Pour la suppression d'un étudiant, en appuyant sur « Supprimer » ; les données seront automatiquement supprimées de la base de données à l'aide d'une requête dynamique. 
Modifier des étudiants:
En cas d'erreur de saisi, ou de demande de modification de données relatives à un étudiant. 
Pour réaliser cette action, il suffit de sélectionner l'étudiant dans la liste,
une nouvelle interface apparaîtra pour faire des mise à jour aux données de l'étudiant sélectionné.
Consulter la liste des etudiants
 

Auteurs:
Kenza BOUALAME
Maroua EL HAMIDI
