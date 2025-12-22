# Deployment Guide - Qapix Landing Page

## 🚀 Schnellster Weg: Vercel (Empfohlen)

### Option 1: Vercel CLI (5 Minuten)

1. **Vercel installieren:**
```bash
npm i -g vercel
```

2. **Login:**
```bash
vercel login
```

3. **Deployen:**
```bash
vercel
```
- Folge den Prompts
- Production URL wird sofort generiert

4. **Für Production:**
```bash
vercel --prod
```

### Option 2: Vercel Dashboard (10 Minuten)

1. Gehe zu [vercel.com](https://vercel.com)
2. Sign up/Login mit GitHub
3. "Add New Project"
4. Importiere dein GitHub Repo (oder drag & drop)
5. Vercel erkennt Next.js automatisch
6. Klicke "Deploy"

**Vorteile:**
- ✅ Automatische Deployments bei Git Push
- ✅ Preview URLs für jeden Branch
- ✅ SSL Zertifikat automatisch
- ✅ CDN global
- ✅ Kostenlos für Hobby-Projekte

---

## 📦 Alternative: Andere Hosting-Optionen

### Netlify
```bash
npm i -g netlify-cli
netlify deploy
netlify deploy --prod
```

### Self-Hosted (VPS/Server)
```bash
npm run build
npm start
# Oder mit PM2:
pm2 start npm --name "qapix" -- start
```

---

## 🔄 Kontinuierliche Deployments (CI/CD)

### Mit GitHub + Vercel:

1. **GitHub Repo erstellen:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/DEIN-USERNAME/qapix.git
git push -u origin main
```

2. **Vercel mit GitHub verbinden:**
- In Vercel Dashboard → Settings → Git
- GitHub Repo verbinden
- **Jeder Push deployt automatisch!**

### Workflow:
```bash
# Lokale Änderungen
git add .
git commit -m "Neue Features"
git push

# → Vercel deployt automatisch in ~2 Minuten
```

---

## 🌐 Custom Domain Setup

### In Vercel:
1. Project Settings → Domains
2. Domain hinzufügen (z.B. `qapix.com`)
3. DNS Records wie angezeigt setzen
4. Fertig! (SSL automatisch)

---

## ⚡ Quick Deploy Commands

```bash
# Development Preview
vercel

# Production Deploy
vercel --prod

# Mit Environment Variables
vercel --prod --env NEXT_PUBLIC_API_URL=https://api.qapix.de
```

---

## 🎯 Empfohlener Workflow

1. **Erstes Deployment:**
   - `vercel` für Preview
   - Testen
   - `vercel --prod` für Production

2. **Für Updates:**
   - GitHub Repo nutzen
   - Automatische Deployments aktivieren
   - Jeder Push = neues Deployment

3. **Domain:**
   - Custom Domain in Vercel konfigurieren
   - DNS Records setzen

---

## 📝 Environment Variables (falls nötig)

In Vercel Dashboard → Settings → Environment Variables:
- `NEXT_PUBLIC_APP_URL=https://app.qapix.de`
- etc.

---

## ✅ Checkliste vor Deployment

- [ ] `npm run build` läuft ohne Fehler
- [ ] Alle Links funktionieren
- [ ] Responsive Design getestet
- [ ] SEO Meta Tags vorhanden
- [ ] Favicon vorhanden
- [ ] Keine Console Errors

---

**Empfehlung: Vercel + GitHub = Schnellste & Beste Lösung! 🚀**

