# Hamdy Elsayed — Personal Brand Website

موقع Personal Brand ثابت بالكامل مبني بـ **HTML5 + CSS3 + Vanilla JavaScript**، بدون React أو Backend أو Database أو Build Process.

الموقع باللغة العربية المصرية، ويركز على شخصية حمدي السيد، الخدمات، المهارات، طريقة الشغل، الأسواق المستهدفة، والتواصل. لا يحتوي على قسم أعمال سابقة أو مشاريع أو نتائج غير موثقة.

## التشغيل

افتح `index.html` مباشرة في المتصفح. لا توجد أوامر مطلوبة ولا npm install.

## الملفات

- `index.html` — هيكل الصفحة والمحتوى العربي.
- `style.css` — التصميم المتجاوب، الحركات، الـ glassmorphism، والمؤثرات.
- `script.js` — بطاقات الخدمات، القائمة على الهاتف، الـ scroll reveal، والـ cursor interaction.
- `assets/images/hamdy.jpg` — صورة حمدي الأساسية المحلية.
- `assets/logos/` — شعارات SVG محلية للمنصات: Google Ads وTikTok وMeta وFacebook وInstagram وWhatsApp.
- `assets/icons/` — أيقونات SVG محلية للخدمات التقنية والتحليلية.
- `favicon.svg`, `robots.txt`, `sitemap.xml` — ملفات الهوية وSEO.

## تغيير الصورة

استبدل `assets/images/hamdy.jpg` بصورة جديدة بنفس الاسم والامتداد. الصورة مربوطة داخل `index.html` بمسار نسبي محلي:

```html
<img src="assets/images/hamdy.jpg" alt="حمدي السيد">
```

## تعديل النصوص

عدّل النصوص مباشرة في `index.html`. المحتوى الأساسي مصري طبيعي، مع استخدام English فقط في أسماء الخدمات والمصطلحات المناسبة للهوية مثل Google Ads وMeta Ads وSEO.

## تعديل الخدمات

قائمة الخدمات موجودة في أعلى `script.js` داخل مصفوفة `services`. كل خدمة تحتوي على عنوان ووصف وأيقونة SVG محلية داخل الكود. يمكنك تعديل العنوان والوصف بدون إضافة أي نتائج أو أرقام غير مؤكدة.

## تغيير روابط التواصل

حدّث الروابط داخل `index.html`:

- الهاتف: `tel:01094855679`
- واتساب: `https://wa.me/201094855679`
- Facebook: `https://www.facebook.com/hammdy.elsayed`
- Instagram: `https://www.instagram.com/hamdy__elsayed_1`
- TikTok: `https://www.tiktok.com/@hammdy_elsayed`

## الرفع على GitHub Pages

1. أنشئ Repository جديدًا.
2. ارفع كل محتويات هذا المجلد مع الحفاظ على بنية `assets/`.
3. من **Settings ثم Pages** اختر النشر من branch الرئيسي ومجلد `/ (root)`.
4. افتح رابط GitHub Pages.

كل الروابط الداخلية تستخدم مسارات نسبية أو anchors، ولا يوجد server-side routing. الموقع يعمل مباشرة من `index.html`.
