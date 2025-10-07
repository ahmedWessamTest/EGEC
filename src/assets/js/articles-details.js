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


function createContactBox() {
  const contactDiv = document.createElement("div");
  contactDiv.innerHTML = isEn ? `
    <div class="contact-box flex justify-between items-center mt-6 px-10 p-6 border border-main-green rounded-2xl">
      <div>
        <h5>You want to study abroad</h5>
        <p class="text-lg !text-main-text font-medium">Contact an academic expert now</p>
      </div>
      <div class="space-y-3">
        <a href="#" class="flex gap-3 items-center px-6 py-2 bg-main-green rounded-full text-main-white">
          <span>WhatsApp</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" class="fill-main-white" viewBox="0 0 640 640">
            <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/>
          </svg>
        </a>
        <a href="#" class="flex gap-3 items-center px-6 py-2 bg-main-text rounded-full text-main-white">
          <span>Contact Us</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-main-white" viewBox="0 0 640 640">
            <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/>
          </svg>
        </a>
      </div>
    </div>
  `:
  `
  <div class="contact-box flex justify-between items-center mt-6 px-10 p-6 border border-main-green rounded-2xl">
      <div>
        <h5>تريد الدراسه بالخارج</h5>
        <p class="text-lg !text-main-text font-medium">تواصل الان مع خبر أكاديمي</p>
      </div>
      <div class="space-y-3">
        <a href="#" class="flex gap-3 items-center px-6 py-2 bg-main-green rounded-full text-main-white">
          <span>واتس اب</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" class="fill-main-white" viewBox="0 0 640 640">
            <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/>
          </svg>
        </a>
        <a href="#" class="flex gap-3 items-center px-6 py-2 bg-main-text rounded-full text-main-white">
          <span>اتصل بنا</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-main-white" viewBox="0 0 640 640">
            <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/>
          </svg>
        </a>
      </div>
    </div>
  `;
  return contactDiv;
}

function renderArticle() {
  const container = document.getElementById("articleContainer");

  container.innerHTML = getBackendHTML();

  const paragraphs = container.querySelectorAll("p");
  if (paragraphs.length >= 2) {
    const contactDiv = createContactBox();
    paragraphs[1].insertAdjacentElement("afterend", contactDiv);
  }
}

renderArticle();
