# Déployer StycFly sur Vercel + Supabase

## 1. Créer le projet Supabase (base de données pour les demandes de devis)

1. Allez sur https://supabase.com, créez un compte et un nouveau projet.
2. Dans **SQL Editor**, collez le contenu de `supabase/schema.sql` et exécutez-le.
   Cela crée la table `leads` qui stockera chaque demande de devis.
3. Dans **Settings → API**, notez :
   - `Project URL` → sera `NEXT_PUBLIC_SUPABASE_URL`
   - `service_role` key (⚠️ pas la clé `anon`) → sera `SUPABASE_SERVICE_ROLE_KEY`

## 2. Mettre le code sur GitHub

```bash
cd stycfly-site
git add -A
git commit -m "Site StycFly initial"
```

Créez un dépôt sur https://github.com/new, puis :

```bash
git remote add origin https://github.com/<votre-compte>/stycfly-site.git
git push -u origin main
```

## 3. Déployer sur Vercel

1. Allez sur https://vercel.com, connectez-vous avec GitHub.
2. **Add New → Project**, choisissez le dépôt `stycfly-site`.
3. Dans **Environment Variables**, ajoutez :
   - `NEXT_PUBLIC_SUPABASE_URL` = (l'URL notée à l'étape 1)
   - `SUPABASE_SERVICE_ROLE_KEY` = (la clé notée à l'étape 1)
4. Cliquez **Deploy**. Après ~1 minute, votre site est en ligne sur une adresse
   du type `stycfly-site.vercel.app`.

## 4. Brancher le domaine stycfly.fr

1. Dans Vercel : **Project → Settings → Domains**, ajoutez `stycfly.fr`.
2. Vercel vous donne des enregistrements DNS à ajouter (en général un `A`
   pointant vers `76.76.21.21` et un `CNAME` pour `www`).
3. Allez dans le panneau DNS de votre nom de domaine (là où `stycfly.fr` est
   enregistré — si c'est via WordPress.com, c'est dans **Domaines →
   stycfly.fr → DNS**) et ajoutez ces enregistrements.
4. La propagation DNS prend de quelques minutes à 24h.

## Pour continuer à modifier le site vous-même

- Chaque page est un fichier dans `src/app/<nom-de-page>/page.tsx`.
- Les textes sont directement dans ces fichiers, en clair.
- Après une modification, `git push` redéploie automatiquement sur Vercel.
- Si vous n'êtes pas à l'aise avec le code, revenez me voir : je peux
  modifier les textes/couleurs et pousser les changements pour vous.
