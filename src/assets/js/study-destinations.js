const isEn = location.href.includes('en');
function getBackendHTML() {
  return isEn
    ? `
    <h2>About Our Programs</h2>
    <p>We offer a variety of study abroad opportunities for students in medical, engineering, and business fields.</p>
    <p>Our programs are designed to provide cultural exchange, academic excellence, and international experience.</p>
    <h3>Our Services</h3>
    <ul>
      <li>University admission support</li>
      <li>Visa and travel assistance</li>
      <li>Accommodation and living guidance</li>
      <li>Scholarship consultation</li>
    </ul>
    <p>Each student receives personalized guidance from our expert advisors who ensure a smooth application process.</p>
    <h3>Top Destinations</h3>
    <ol>
      <li>United Kingdom</li>
      <li>United States</li>
      <li>Russia</li>
      <li>Germany</li>
      <li>Malaysia</li>
    </ol>
    <p>Our partner universities are globally recognized and accredited, ensuring high-quality education and valuable degrees.</p>
    <p>For more details about available programs, <a href="#">click here</a> or contact our academic team.</p>
    <h3>Why Choose Us</h3>
    <p>We provide continuous support even after you start your studies abroad, including renewal of visas and academic advising.</p>
    <p>Our mission is to empower students to achieve their dreams through education and global exposure.</p>
    <h2>About Our Programs</h2>
    <p>We offer a variety of study abroad opportunities for students in medical, engineering, and business fields.</p>
    <p>Our programs are designed to provide cultural exchange, academic excellence, and international experience.</p>
    <h3>Our Services</h3>
    <ul>
      <li>University admission support</li>
      <li>Visa and travel assistance</li>
      <li>Accommodation and living guidance</li>
      <li>Scholarship consultation</li>
    </ul>
  `
    : `
    <h2>حول برامجنا</h2>
    <p>نحن نقدم مجموعة واسعة من فرص الدراسة في الخارج للطلاب في مجالات الطب والهندسة والأعمال.</p>
    <p>تم تصميم برامجنا لتوفير التبادل الثقافي، والتميز الأكاديمي، والخبرة الدولية.</p>
    <h3>خدماتنا</h3>
    <ul>
      <li>دعم القبول الجامعي</li>
      <li>المساعدة في التأشيرات والسفر</li>
      <li>إرشادات السكن والمعيشة</li>
      <li>استشارات المنح الدراسية</li>
    </ul>
    <p>يتلقى كل طالب إرشادًا شخصيًا من مستشارينا الخبراء لضمان عملية تقديم سهلة وسلسة.</p>
    <h3>الوجهات المميزة</h3>
    <ol>
      <li>المملكة المتحدة</li>
      <li>الولايات المتحدة الأمريكية</li>
      <li>روسيا</li>
      <li>ألمانيا</li>
      <li>ماليزيا</li>
    </ol>
    <p>جامعاتنا الشريكة معترف بها عالميًا ومعتمدة، مما يضمن تعليمًا عالي الجودة وشهادات قيّمة.</p>
    <p>للمزيد من التفاصيل حول البرامج المتاحة، <a href="#">اضغط هنا</a> أو تواصل مع فريقنا الأكاديمي.</p>
    <h3>لماذا تختارنا</h3>
    <p>نحن نقدم دعمًا مستمرًا حتى بعد بدء دراستك في الخارج، بما في ذلك تجديد التأشيرات والاستشارات الأكاديمية.</p>
    <p>مهمتنا هي تمكين الطلاب من تحقيق أحلامهم من خلال التعليم والانفتاح على العالم.</p>
  `;
}

function renderArticle() {
 const container = document.getElementById("articleContent");
  container.innerHTML = getBackendHTML();  
}

renderArticle();

