## 📁 هيكل المجلدات (File Structure)

├── assets **مجلد رئيسي يحتوي على جميع الصور و الأيقونات**
│ ├── bootstrap **مجلد يحتوي على ملفات اطار بوتستراب**
│ │ ├── css
│ │ └── js
│ ├── components **مجلد يحتوى على كل المكونات التي سيعاد استخدامها اكثر من مرة**
│ │ ├── progress-bar.html
│ │ └── toast.html
│ ├── css **مجلد يحتوي ملف التنسيق الرئيسي**
│ │ └── style.css
│ ├── helpers **مكتبات مساعدة**
│ │ ├── Test lib
│ │ └── Time zones lib
│ └── js **مجلد يحتوي على ملف السكريبت الرئيسي**
│ └── script.js
├── pages **مجلد يحتوي على جميع صفحات المشروع**
│ ├── analysis-tool
│ │ ├── analysis-tool.css
│ │ └── analysis-tool.html
│ └── stats-analysis
│ ├── stats-analysis.css
│ └── stats-analysis.html
├── index.html **مجلد الكود الرئيسي**
└── README.md

---

## 🎨 التنسيقات المخصصة (Custom Styling)

- جميع الكلاسات المخصصة في المشروع تبدأ بالبادئة: `csm_`
  - مثال: `csm_input`, `csm_fs-18`, `csm_fw-700` وهكذا.
- هذا يساعد على تمييز الكلاسات المخصصة عن كلاسّات Bootstrap الأصلية بسهولة.

---

## ✏️ التعديلات على Bootstrap

- جميع **التعديلات (Overrides)** التي أجريت على كلاسّات Bootstrap تم تجميعها في جزء خاص من ملف `main.css`.
- يسبق هذه التعديلات تعليق موضّح بالشكل:

```css
/* ========== Bootstrap Overrides ========== */
```
