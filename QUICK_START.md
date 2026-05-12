# ⚡ Quick Start Guide

Get the Exam AI Prompt Generator up and running in minutes!

---

## 🎯 5-Minute Setup

### 1. Install Dependencies

```bash
cd bankexamv2-modern
pnpm install
```

### 2. Start Development Server

```bash
pnpm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Build for Production

```bash
pnpm run build
```

Output will be in the `dist/` folder.

---

## 📁 Project Structure

```
bankexamv2-modern/
├── client/                    # Frontend React app
│   ├── src/
│   │   ├── pages/            # Page components (Home, ExamDetail, FAQ, etc.)
│   │   ├── components/       # Reusable UI components
│   │   ├── lib/              # Utilities (examData, promptGenerator)
│   │   ├── contexts/         # React contexts (ThemeContext)
│   │   ├── App.tsx           # Main app component with routing
│   │   ├── main.tsx          # React entry point
│   │   └── index.css         # Global styles & animations
│   ├── public/               # Static files (favicon, manifest, music)
│   └── index.html            # HTML template
├── server/                    # Backend (Express - not used in static mode)
├── package.json              # Dependencies & scripts
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind CSS config
├── tsconfig.json             # TypeScript config
├── DEPLOYMENT_GUIDE.md       # Deployment instructions
└── README.md                 # Project documentation
```

---

## 🔧 Available Commands

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run preview` | Preview production build locally |
| `pnpm run check` | Run TypeScript type checking |
| `pnpm run format` | Format code with Prettier |

---

## 🎨 Key Features

### 1. **Interactive Tutorial**
- Shows on first visit
- 5-step guided walkthrough
- Remembers user preference in localStorage

### 2. **Prompt Generator**
- 3 modes: Study, Practice Sets, Newspaper Analysis
- 12 exam categories with 80+ exams
- Customizable difficulty and language

### 3. **Background Music**
- Lo-fi hip hop study beats
- Floating player with volume control
- Auto-loops for continuous study sessions

### 4. **Animations**
- Smooth entrance animations
- Interactive hover effects
- Celebratory success animations
- Staggered feature showcase

### 5. **Search & Navigation**
- Real-time search across exams and topics
- Responsive navigation
- Social media links

---

## 📝 Customization

### Change App Title

Edit `client/index.html`:
```html
<title>Your App Title</title>
```

### Change Colors

Edit `client/src/index.css` (CSS variables in `:root`):
```css
:root {
  --primary: var(--color-blue-700);
  /* Change colors here */
}
```

### Add New Exam

Edit `client/src/lib/examData.ts`:
```typescript
{
  id: "new-exam",
  name: "New Exam Name",
  icon: "📚",
  description: "Description",
  exams: [...],
  subjects: [...]
}
```

### Modify Music File

Replace `client/public/study-beats-lofi.mp3` with your own audio file.

---

## 🌐 Deployment Quick Links

- **GitHub Pages:** See DEPLOYMENT_GUIDE.md → GitHub Pages section
- **Vercel:** See DEPLOYMENT_GUIDE.md → Vercel section
- **Netlify:** See DEPLOYMENT_GUIDE.md → Netlify section
- **Railway:** See DEPLOYMENT_GUIDE.md → Railway section
- **Render:** See DEPLOYMENT_GUIDE.md → Render section

---

## 🐛 Troubleshooting

### Port 5173 Already in Use

```bash
# Kill process using port 5173
lsof -i :5173
kill -9 <PID>
```

### Dependencies Not Installing

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Fails

```bash
# Check TypeScript errors
pnpm run check

# Clear Vite cache
rm -rf dist .vite
pnpm run build
```

### Music Not Playing

1. Ensure `client/public/study-beats-lofi.mp3` exists
2. Check browser console for errors
3. Verify file permissions

---

## 📚 Learning Resources

- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Vite:** https://vitejs.dev
- **TypeScript:** https://www.typescriptlang.org

---

## 🚀 Next Steps

1. ✅ Customize colors and branding
2. ✅ Add your own exams and topics
3. ✅ Test all features locally
4. ✅ Deploy to your hosting platform
5. ✅ Share with students!

---

## 📞 Support

For issues or questions:
- Check DEPLOYMENT_GUIDE.md
- Review component documentation in code
- Check browser console for errors

**Happy coding! 🎉**
