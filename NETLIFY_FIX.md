# 🔧 Netlify 404 Fix - Anleitung

## ✅ Was ich geändert habe:

1. ✅ `@netlify/plugin-nextjs` zu package.json hinzugefügt
2. ✅ netlify.toml korrigiert (Redirects entfernt - Plugin macht das automatisch)
3. ✅ Änderungen gepusht

---

## 🔍 Netlify Build Settings prüfen:

Gehe zu deinem Netlify Projekt → **Site settings** → **Build & deploy** → **Build settings**

### Diese Einstellungen sollten so sein:

- **Build command:** `npm run build`
- **Publish directory:** `.next` (oder leer lassen - Plugin macht das automatisch)
- **Base directory:** (leer lassen)

---

## 🔄 Trigger neuen Build:

### Option 1: Automatisch (durch Git Push)
Der Push sollte automatisch einen neuen Build triggern. Warte 2-3 Minuten.

### Option 2: Manuell
1. Gehe zu Netlify Dashboard
2. Klicke auf dein Projekt
3. Klicke **"Trigger deploy"** → **"Clear cache and deploy site"**

---

## ⚠️ Falls es immer noch nicht funktioniert:

### Alternative: Build Settings in Netlify anpassen

1. Gehe zu **Site settings** → **Build & deploy** → **Build settings**
2. Klicke **"Edit settings"**
3. Stelle sicher:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (oder leer lassen)
4. **WICHTIG:** Prüfe ob das Plugin aktiviert ist:
   - Gehe zu **Plugins** Tab
   - `@netlify/plugin-nextjs` sollte installiert sein
   - Falls nicht: Klicke **"Add plugin"** → Suche `@netlify/plugin-nextjs`

---

## 🎯 Was das Plugin macht:

Das `@netlify/plugin-nextjs` Plugin:
- ✅ Konvertiert Next.js App Router zu Netlify Functions
- ✅ Handhabt Routing automatisch
- ✅ Macht SSR/ISR möglich
- ✅ Fixes 404 Probleme

---

## ✅ Checkliste:

- [x] Plugin zu package.json hinzugefügt
- [x] netlify.toml korrigiert
- [x] Code gepusht
- [ ] Neuer Build in Netlify gestartet
- [ ] Plugin in Netlify aktiviert
- [ ] Build Settings geprüft
- [ ] Seite funktioniert

---

## 🚨 Falls immer noch 404:

1. **Prüfe Build Logs:**
   - Gehe zu **Deploys** Tab
   - Klicke auf den neuesten Deploy
   - Prüfe ob Fehler im Build sind

2. **Prüfe ob Plugin installiert ist:**
   - **Plugins** Tab im Netlify Dashboard
   - `@netlify/plugin-nextjs` sollte da sein

3. **Manueller Re-Deploy:**
   - **Trigger deploy** → **Clear cache and deploy site**

---

**Nach dem neuen Build sollte die Seite funktionieren! 🚀**

