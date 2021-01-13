# Serveur-express
mise en place d'un serveur express simple
peut servir de base de départ pour un projet

# Base de données
se servir de db migrate pour créer une BD
créer un fichier dotenv pour se connecter a la BD => voir le .env-exemple


# route exemples : 

http://localhost:5000/api/album/createnewalbum avec GET et POST



# exemple de requete

# À un auteur :
Modifier article:
PUT http://myblog.com/authors/id/articles/id


Créer un article
POST http://myblog.com/authors /id/articles


Supprimer un article
DELETE http://myblog.com/authors/id/articles/id

# A un utilisateur :
Afficher la liste des auteurs :
GET http://myblog.com/authors

Visualiser les articles d’un auteur :
GET http://myblog.com/articles/author/id


Filtrer les articles par categorie :
GET http://myblog.com/articles/categories


# A l admin :
Ajouter un nouvel auteur:
POST http://myblog.com/authors


Supprimer un auteur:
DELETE http://myblog.com/authors/id

Supprimer un article:
DELETE http://myblog.com/articles/id
