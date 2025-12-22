# 🚨 WICHTIG: Netlify Setup für qapix.de

## ✅ GitHub Push ist fertig!

Das Projekt ist jetzt auf GitHub: `https://github.com/fmsFlo/qapix.de.git`

---

## 🎯 Netlify Setup - NEUES Projekt erstellen!

### ⚠️ WICHTIG: Bestehendes Projekt NICHT verwenden!

Du musst ein **NEUES Projekt** in Netlify anlegen, damit dein bestehendes Projekt unverändert bleibt.

### Schritt-für-Schritt:

1. **Gehe zu [app.netlify.com](https://app.netlify.com)**

2. **Klicke "Add new site"** → **"Import an existing project"**

3. **Wähle "GitHub"** als Provider
   - Falls noch nicht verbunden: GitHub autorisieren
   - Wähle deinen GitHub Account

4. **Wähle das Repository:** `fmsFlo/qapix.de`

5. **Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Base directory:** (leer lassen)

6. **WICHTIG:** Stelle sicher, dass du ein **NEUES Projekt** erstellst
   - Der Name sollte anders sein als dein bestehendes Projekt
   - z.B. `qapix-landing` oder `qapix-de`

7. **Klicke "Deploy site"**

---

## ✅ Was passiert:

- ✅ Neues Projekt wird erstellt
- ✅ Bestehendes Projekt bleibt unverändert
- ✅ Automatische Deployments bei jedem `git push`
- ✅ Neue URL wird generiert (z.B. `qapix-landing.netlify.app`)

---

## 🔄 Workflow:

Nach dem Setup:

```bash
# Änderungen machen
git add .
git commit -m "Neue Features"
git push

# → Automatisches Deployment zum NEUEN Projekt
# → Bestehendes Projekt bleibt unverändert!
```

---

## 🌐 Custom Domain (optional):

Falls du später eine Custom Domain willst:

1. In Netlify → Site Settings → Domain management
2. Custom domain hinzufügen
3. DNS Records setzen

**WICHTIG:** Das ändert nichts am bestehenden Projekt!

---

## ✅ Checkliste:

- [x] GitHub Repo erstellt
- [x] Code gepusht
- [ ] **NEUES** Netlify Projekt angelegt
- [ ] GitHub Repo verbunden
- [ ] Erste Deployment erfolgreich
- [ ] Bestehendes Projekt unverändert ✓

---

**Nach dem Setup: Jeder Push deployt automatisch zum NEUEN Projekt! 🚀**

