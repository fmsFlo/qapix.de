# 🚀 Setup-Schritte für GitHub + Auto-Deploy

## ✅ Schritt 1: Git ist bereits initialisiert!

Das lokale Git-Repo ist fertig. Jetzt musst du:

## 📝 Schritt 2: GitHub Repo erstellen

1. Gehe zu [github.com/new](https://github.com/new)
2. Repository Name: z.B. `qapix-landing` oder `qapix`
3. **WICHTIG:** Lass es LEER (keine README, keine .gitignore)
4. Klicke "Create repository"
5. **Kopiere die Repository URL** (z.B. `https://github.com/DEIN-USERNAME/qapix.git`)

## 🔗 Schritt 3: Lokales Repo mit GitHub verbinden

Führe diese Befehle aus (ersetze DEIN-USERNAME und REPO-NAME):

```bash
cd /Users/flohoerning/qapix

# Remote hinzufügen
git remote add origin https://github.com/DEIN-USERNAME/qapix.git

# Branch sicherstellen
git branch -M main

# Ersten Push machen
git push -u origin main
```

## 🎯 Schritt 4: Auto-Deploy einrichten

### Option A: Netlify (Du kennst es schon) 🎯

1. Gehe zu [app.netlify.com](https://app.netlify.com)
2. Klicke **"Add new site"** → **"Import an existing project"**
3. Wähle **GitHub** als Provider
4. Autorisiere Netlify (falls nötig)
5. Wähle dein **qapix** Repository
6. Build settings werden automatisch erkannt:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Klicke **"Deploy site"**

**Fertig!** Jeder `git push` deployt automatisch.

### Option B: Vercel (Empfohlen für Next.js) ⚡

1. Gehe zu [vercel.com](https://vercel.com)
2. Login mit **GitHub** Account
3. Klicke **"Add New Project"**
4. Wähle dein **qapix** Repository
5. Vercel erkennt Next.js automatisch
6. Klicke **"Deploy"**

**Fertig!** Jeder `git push` deployt automatisch.

---

## 🔄 Workflow für Updates

Nach dem Setup:

```bash
# Änderungen machen
# ... Code editieren ...

# Committen
git add .
git commit -m "Neue Features"

# Pushen
git push

# → Automatisches Deployment startet! 🚀
```

---

## 📋 Was passiert beim Push?

1. Du pusht zu GitHub
2. Netlify/Vercel erkennt den Push
3. Automatischer Build startet
4. Deployment in ~2 Minuten fertig
5. Neue Version ist live!

---

## ✅ Checkliste

- [x] Git Repo initialisiert
- [x] Erster Commit gemacht
- [ ] GitHub Repo erstellt
- [ ] Remote hinzugefügt
- [ ] Erster Push gemacht
- [ ] Netlify/Vercel mit GitHub verbunden
- [ ] Erste Deployment erfolgreich

---

**Nach Schritt 3: Sende mir die GitHub Repo URL, dann helfe ich beim Push! 🚀**

