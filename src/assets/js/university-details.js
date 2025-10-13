const isEn = location.href.includes("en");
function getBackendHTML() {
  return isEn
    ? `
     <p>Cairo University is located in the heart of Greater Cairo and close to all important and vital locations.</p>
            <p>The university includes a selection of the best professors and scientists in various fields of science and knowledge.</p>
            <p>The university includes 25 colleges, institutes, centers, and specialized research units.</p>
            <p>It houses the recently established central library, which utilizes the latest technologies in documentation and international databases.</p>
            <p>Some of the university's modern colleges and buildings contain specialized laboratories equipped with the latest scientific equipment.</p>
            <p>The university is interested in providing diverse services to its students, including medical care, educational activities, and various cultural activities.</p>
            <p>It offers study opportunities for students from all over the world in all academic programs at the Bachelor's, Master's, or Doctoral levels.</p>
            <p>It also offers other distinguished programs resulting from cooperation with some international universities.</p>
            <p>Among these programs:</p>
            <ul>
                <li>PhD program in cooperation with the University of Kent in the United Kingdom.</li>
                <li>Master of Euro-Mediterranean Studies (Faculty of Economics and Political Science).</li>
                <li>Master of Laws with the University of Edinburgh / Faculty of Law.</li>
                <li>Arabic language teaching programs for non-native speakers (Faculty of Dar Al Uloom).</li>
                <li>Sports Facilities Management in cooperation with the International Federation (Football - FIFA) / Faculty of Commerce.</li>
            </ul>
  `
    : `
    <p>تقع جامعة القاهرة في قلب القاهرة الكبرى وعلى مقربة من جميع المواقع الهامة والحيوية.</p>
            <p>تضم الجامعة نخبة من أفضل الأساتذة والعلماء في مختلف مجالات العلوم والمعرفة.</p>
            <p>تضم الجامعة 25 كلية ومعهد ومراكز ووحدات بحثية متخصصة.</p>
            <p>تضم بين رحابها المكتبة المركزية المنشأة حديثاً طبقاً لأحدث التقنيات في التوثيق وقواعد البيانات العالمية.</p>
            <p>تضم بعض الكليات والمباني الحديثة بالجامعة معامل متخصصة ومجهزة بأحدث الأجهزة العلمية.</p>
            <p>تهتم الجامعة بتقديم الخدمات المتنوعة لطلابها من رعاية طبية وأنشطة تربوية وثقافية مختلفة.</p>
            <p>تتيح فرص الدراسة للطلاب من جميع أنحاء العالم في جميع البرامج الدراسية بمراحل البكالوريوس أو الماجستير أو الدكتوراه.</p>
            <p>تقدم أيضاً برامج أخرى متميزة نتجت عن التعاون مع بعض الجامعات الدولية.</p>
            <p>من هذه البرامج:</p>
            <ul>
                <li>برنامج الدكتوراه بالتعاون مع جامعة كنت بالمملكة المتحدة.</li>
                <li>ماجستير الدراسات الأوروبية المتوسطية (كلية الاقتصاد والعلوم السياسية).</li>
                <li>ماجستير الحقوق مع جامعة أدنبرة / كلية الحقوق.</li>
                <li>برامج تعليم اللغة العربية للناطقين بغيرها (كلية دار العلوم).</li>
                <li>إدارة المنشآت الرياضية بالتعاون مع الاتحاد الدولي (كرة القدم - الفيفا) / كلية التجارة.</li>
            </ul>
  `;
}

function renderArticle() {
  const container = document.getElementById("articleContent");
  container.innerHTML = getBackendHTML();
}

renderArticle();
