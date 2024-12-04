# MLD

---

On nomme les tables de liaisons en fonction des tables qu'elles représentent, et dans l'ordre alphabétique du nom des tables.

```text
User ( id, email, firstname, lastname, password, role )
Quiz ( id, title, description, #User(id) )
Tag ( id, name )
Level ( id, name )
Question ( id, description, anecdote, wiki, #Quiz(id), #Level(id) )
Answer ( id, description, is_valid, #Question(id) )

Quiz_Has_Tag ( id, #Quiz(id), #Tag(id) )
```
