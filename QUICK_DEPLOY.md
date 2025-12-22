# 🚀 Schnellster Deployment-Weg für Qapix

## Option 1: Vercel CLI (2-3 Minuten) ⚡

### Schritt 1: Vercel installieren
```bash
npm i -g vercel
```

### Schritt 2: Login
```bash
vercel login
```

### Schritt 3: Deployen
```bash
cd /Users/flohoerning/qapix
vercel
```

**Fertig!** Du bekommst sofort eine URL wie `qapix-xyz.vercel.app`

### Für Production:
```bash
vercel --prod
```

---

## Option 2: Vercel Dashboard (5 Minuten) 🎯

1. Gehe zu [vercel.com](https://vercel.com) und erstelle Account
2. Klicke "Add New Project"
3. **Option A:** GitHub Repo verbinden (empfohlen für Auto-Deploy)
   - GitHub Repo erstellen
   - In Vercel verbinden
   - Automatisches Deployment bei jedem Push
   
4. **Option B:** Drag & Drop
   - Projekt-Ordner hochladen
   - Sofort deployt

---

## 🔄 Workflow für Updates

### Mit GitHub (Empfohlen):

```bash
# 1. Git initialisieren (falls noch nicht geschehen)
git init
git add .
git commit -m "Initial commit"

# 2. GitHub Repo erstellen (auf github.com)
# 3. Remote hinzufügen
git remote add origin https://github.com/DEIN-USERNAME/qapix.git
git branch -M main
git push -u origin main

# 4. In Vercel: GitHub Repo verbinden
# → Jeder Push deployt automatisch!
```

### Für Updates:
```bash
# Änderungen machen
git add .
git commit -m "Neue Features"
git push
# → Vercel deployt automatisch in ~2 Minuten
```

---

## 📋 Vor dem ersten Deploy

```bash
# Testen ob Build funktioniert
npm run build

# Falls Fehler: Fixen
# Dann deployen
```

---

## ✅ Vorteile Vercel

- ✅ **Kostenlos** für Hobby-Projekte
- ✅ **Automatische SSL** Zertifikate
- ✅ **Globales CDN**
- ✅ **Preview URLs** für jeden Branch
- ✅ **Automatische Deployments** bei Git Push
- ✅ **Next.js optimiert**

---

## 🌐 Custom Domain

1. In Vercel Dashboard → Project Settings → Domains
2. Domain hinzufügen (z.B. `qapix.com`)
3. DNS Records wie angezeigt setzen
4. Fertig!

---

## 🎯 Empfohlener Workflow

**Für schnelles erstes Deployment:**
```bash
vercel --prod
```

**Für kontinuierliche Updates:**
- GitHub Repo + Vercel verbinden
- Jeder `git push` = automatisches Deployment

---

**Schnellster Weg: `vercel --prod` (2 Minuten) 🚀**

