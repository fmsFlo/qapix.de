# 🚀 GitHub + Auto-Deploy Setup für Qapix

## Schritt 1: GitHub Repo erstellen ✅

1. Gehe zu [github.com](https://github.com) und erstelle ein **neues Repository**
2. Name: z.B. `qapix-landing` oder `qapix`
3. **WICHTIG:** Lass es **LEER** (keine README, .gitignore, etc.)
4. Kopiere die Repository URL (z.B. `https://github.com/DEIN-USERNAME/qapix.git`)

## Schritt 2: Lokales Repo mit GitHub verbinden

```bash
cd /Users/flohoerning/qapix

# Remote hinzufügen (ersetze DEIN-USERNAME und REPO-NAME)
git remote add origin https://github.com/DEIN-USERNAME/qapix.git

# Branch umbenennen (falls nötig)
git branch -M main

# Ersten Push machen
git push -u origin main
```

---

## Schritt 3: Auto-Deploy einrichten

### Option A: Vercel (Empfohlen für Next.js) ⚡

1. Gehe zu [vercel.com](https://vercel.com)
2. Login mit GitHub Account
3. Klicke **"Add New Project"**
4. Wähle dein **qapix** Repository aus
5. Vercel erkennt Next.js automatisch
6. Klicke **"Deploy"**

**Fertig!** Jeder `git push` deployt automatisch.

**Vorteile:**
- ✅ Automatische Deployments bei jedem Push
- ✅ Preview URLs für jeden Branch/PR
- ✅ Optimiert für Next.js
- ✅ Kostenlos für Hobby-Projekte

---

### Option B: Netlify (Du kennst es schon) 🎯

1. Gehe zu [netlify.com](https://netlify.com)
2. Login mit GitHub Account
3. Klicke **"Add new site"** → **"Import an existing project"**
4. Wähle dein **qapix** Repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Klicke **"Deploy site"**

**Fertig!** Jeder `git push` deployt automatisch.

**Hinweis:** Für Next.js brauchst du eventuell `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 🔄 Workflow für Updates

### Änderungen machen und deployen:

```bash
# 1. Änderungen machen
# ... Code editieren ...

# 2. Committen
git add .
git commit -m "Neue Features hinzugefügt"

# 3. Pushen
git push

# → Automatisches Deployment startet in ~2 Minuten!
```

### Preview für Features (mit Branches):

```bash
# Neuen Branch erstellen
git checkout -b neue-features

# Änderungen machen
git add .
git commit -m "Neue Features"
git push origin neue-features

# → Automatische Preview URL wird erstellt!
```

---

## 📋 Netlify Config (falls nötig)

Erstelle `netlify.toml` im Root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
```

Dann installiere das Plugin:
```bash
npm install -D @netlify/plugin-nextjs
```

---

## ✅ Checkliste

- [ ] GitHub Repo erstellt
- [ ] Lokales Repo mit GitHub verbunden
- [ ] Erster Push gemacht
- [ ] Vercel/Netlify mit GitHub verbunden
- [ ] Erste Deployment erfolgreich
- [ ] Auto-Deploy funktioniert (Test mit kleinem Push)

---

## 🎯 Empfehlung

**Für Next.js: Vercel** (optimiert, schneller, einfacher)
**Falls du Netlify bevorzugst:** Auch möglich, braucht nur `netlify.toml`

**Beide bieten:**
- ✅ Automatische Deployments
- ✅ Preview URLs
- ✅ Custom Domains
- ✅ SSL automatisch

---

**Nach dem Setup: Jeder `git push` = automatisches Deployment! 🚀**

