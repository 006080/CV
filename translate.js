document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dropdown-toggle');
    const dropdownList = document.getElementById('dropdown-list');

    toggleButton.addEventListener('click', function () {
        if (dropdownList.style.display === 'block') {
            dropdownList.style.display = 'none';
        } else {
            setTimeout(() => {
                dropdownList.style.display = 'block';
            }, 300); // Delay for 300 milliseconds
        }
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener('click', function (event) {
        if (!dropdownList.contains(event.target) && event.target !== toggleButton) {
            dropdownList.style.display = 'none';
        }
    });

    // Update the page content based on the selected language
    const languageLinks = dropdownList.querySelectorAll('a');
    languageLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedLanguage = event.target.getAttribute('data-lang');
            switchLanguage(selectedLanguage);
        });
    });

    // Define the switchLanguage function
    function switchLanguage(languageCode) {
        // Define translations for different elements or text content
        const translations = {
            'en': {
                'greeting': 'Hello. My name is Natalya. I am a multidisciplinary designer. I started my career as a fashion designer. After graduating from fashion school in Milan, I had experience in many large companies such as Dolce Gabbana and Marni. Unfortunately, with the advent of the pandemic in 2018, I had to change my profile and became interested in digital. During the lockdown period, I began working as a freelancer, developing labels, banners, logos, and corporate styles and working on web design. Having graduated from DCI school this year as a web developer, I gained skills in HTML, CSS, JavaScript, and React and also became familiar with the basics of the backend. I am currently looking for a company where I could get good experience as a young specialist in web/development or web/design. I am confident that my experience in sales, the skills acquired at the DSI school, and my 10 years of experience as a designer can give the company many advantages and make a website or application genuinely unique.',
                'design': "DESIGNER",
                'illustrator': "ILLUSTRATOR",
                'developer': 'WEB DEVELOPER',
                'CV': 'download cv',
                'nhome': 'home',
                'nskills': 'skills',
                'nservice': 'service',
                'nreviews': 'reviews',
                'ncontacts': 'contacts',
                'web_design': 'Web Designer',
                'text_web_design': "Современный дизайн полностью отзывчивых веб-сайтов, Дизайн приложений, Дизайн страниц с посадкой, Дизайн UX/IX.",
                'graphic_design': 'Graphic Designer',
                'text_graphic_design': 'Awesome logos, Brand Style Guides, Buisness Cards & Stationary, Banners, Flyers, Brochure Design, Packaging & Label Design, Album/Book Covers, Menu Design, Infographic Design',
                'video_animation': 'Video & Animation',
                'text_video_animation': 'Video Aditing, Logo Animation, Animated GIFs, Corporate Videos, Social Media Videos, Editing & Post-Production, Music Videos, Game & Film Trailers, Image Editing',
                'Illustartor': 'Illustrator',
                'text_Illustartor': 'Illustrations, Pattern Design, Tattoo Design, Childrens Book Illustration, Cartoons  & Comics, Book & Album Covers, Infographic Design.',
                'web_developer': 'Web Developer',
                'text_web_developer': 'Create online Store, Design Shopify Store, Full Website creation, Fix any Error, Design Customization, Dropshipping Store.',
                'fashion_designer': 'Fashion Designer',
                'text_fashion_designer': 'Technical Drawing & Tech Pack, Fashion Illustration, Full est level of aesthetic vision and professionalism. It was a great mer 2019 - VARONA by NATALIYA RODIONOVA | FashionTV | FTV',
                'quot1': " Natalia fulfilled all the requirements and took into account all the comments with adjustments. We would lke to note Natalia's customer focus, and the desire to bring the project to an end so that the result would fully meet expectations.",
                'quot2': "I thank Natalia for the work done, with inspiration and with full dedication! The designer has a special flair and the highest level of aesthetic vision and professionalism. It was a great collaboration experience!",
                'quot3': "Ukrainian Fashion Week Spring/Summer 2019 - VARONA by NATALIYA RODIONOVA | FashionTV | FTV",
                'quot4': "Everything was done on timas expected.",
                'conversation': "Let's Talk:",
                // 'phone': 'Phone',
                // 'email': 'Email',
                'send_button': 'Send',
                // 'footer_text': 'Follow Me:',
            },

            'ru': {
                'greeting': "Привет.Меня зовут Наталья. Я - дизайнер широкого профиля. Начала свою карьеру я как дизайнер одежды. Окончив школу моды в Милане, я получила опыт работы во многих крупных компаниях, таких как Dolce Gabbana и Marni. К сожалению, с приходом пандемии в 2018 году мне пришлось сменить профиль и я увлеклась digital. В период карантина я начал работать фрилансером, разрабатывая этикетки, баннеры, логотипы, фирменные стили и занимаясь веб-дизайном. Окончив в этом году школу DCI по специальности веб- разработчик, я получила знания по HTML, CSS, JavaScript и React, а также ознакомился с основами бэкенда. В данный момент я ищу компанию, где смогу получить хороший опыт молодого специалиста в области веб-разработки или веб-дизайна. Я уверена, что мой опыт в продажах, навыки, полученные в школе DСI, и мой 10 - летний опыт работы дизайнером смогут принести компании множество преимуществ и сделать сайт или приложение по - настоящему уникальным.",
                'design': 'ДИЗАЙНЕР',
                'Illustrator': "ИЛЛЮСТРАТОР",
                'developer': 'ВЭБ РАЗРАБОТЧИК',
                'CV': 'скачать pdf',
                'nhome': 'главная',
                'nskills': 'навыки',
                'nservice': 'услуги',
                'nreviews': 'отзывы',
                'ncontacts': 'контакты',
                'web_design': '',
                'text_web_design': 'Современный дизайн полностью адаптивного веб-сайта, дизайн приложения, дизайн страницы-лендинга, дизайн UX/I',
                'graphic_design': '',
                'text_graphic_design': "Отличные логотипы, визитные карточки, баннеры, листовки, дизайн брошюр, дизайн упаковки и этикеток, обложки альбомов и книг, дизайн меню, инфографика.",
                'video_animation': '',
                'text_video_animation': "Видеомонтаж, анимация логотипов, анимированные GIF, корпоративные видеоролики, видеоролики для социальных сетей, монтаж и постпродакшн, музыкальные видеоклипы, трейлеры к играм и фильмам, обработка изображений.",
                'Illustartor': "Иллюстратор",
                'text_Illustartor': "Иллюстрации, Дизайн узоров, Дизайн татуировок, Иллюстрации для детских книг, Мультфильмы и комиксы, Обложки книг и альбомов, Инфографика.",
                'web_developer': '',
                'text_web_developer': "Создание онлайн-магазина, дизайн магазина на Shopify, полное создание веб-сайта, устранение любых ошибок, настройка дизайна, магазин с прямой отправкой товаров (Dropshipping).",
                'fashion_designer': '',
                'text_fashion_designer': "Технический рисунок и Техническая документация, Иллюстрация моды, Полный процесс дизайна (фронтальные и задние эскизы, исследование трендов, вдохновение от покупателя, мудборд, цветовая схема).",
                'reference': 'What Client Says:',
                'quot1': 'Наталья выполнила все требования и учла все замечания с корректировками. Мы хотим отметить добросовестность Натальи и желание довести проект до конца, чтобы результат полностью соответствовал ожиданиям.',
                'quot2': "Я благодарю Наталью за проделанную работу, с вдохновением и полной самоотдачей! Дизайнер обладает особым чутьем и высшим уровнем эстетического видения и профессионализма. Это был замечательный опыт сотрудничества!",
                'quot3': "Украинская Неделя Моды Весна/Лето 2019 - VARONA от NATALIYA RODIONOVA | FashionTV | FTV",
                'quot4': 'Все сделано в срок и в соответствии с ожиданиями',
                'conversation': '',
                // 'phone': 'Позвони Мне:',
                // 'email': 'Напиши Мне:',
                'send_button': 'Отправить',
                'footer_text': '',
                'placeholder': "Ваше сообщение здесь..."
            },

            'de': {
                'greeting': "Hallo. Mein Name ist Natalya. Ich bin ein multidisziplinärer Designer. Ich begann meine Karriere als Modedesignerin. Nach meinem Abschluss an der Modeschule in Mailand sammelte ich Erfahrungen in vielen großen Unternehmen wie Dolce Gabbana und Marni. Leider musste ich mit dem Aufkommen der Pandemie im Jahr 2018 mein Profil ändern und begann, mich für das Digitale zu interessieren. Während der Lockdown-Zeit begann ich als Freiberuflerin zu arbeiten, Etiketten, Banner, Logos und Unternehmensstile zu entwickeln und am Webdesign zu arbeiten. Nachdem ich dieses Jahr die DCI-Schule als Webentwickler abgeschlossen habe, habe ich Kenntnisse in HTML, CSS, JavaScript und React erworben und mich auch mit den Grundlagen des Backends vertraut gemacht. Ich bin derzeit auf der Suche nach einem Unternehmen, bei dem ich als junger Spezialist im Bereich Web/Entwicklung oder Web/Design gute Erfahrungen sammeln kann. Ich bin zuversichtlich, dass meine Erfahrung im Vertrieb, die an der DSI-Schule erworbenen Fähigkeiten und meine 10-jährige Erfahrung als Designer dem Unternehmen viele Vorteile bringen und eine Website oder Anwendung wirklich einzigartig machen können.",
                'Illustrator': "ILLUSTRATOR",
                'developer': "WEBENTWICKLERIN",
                'CV': 'herunterladen',
                'nhome': 'Home',
                'nskills': 'Fähigkeiten',
                'nservice': 'Dienst',
                'nreviews': 'Bewertungen',
                'ncontacts': 'Kontakte',
                'web_design': '',
                'text_web_design': "Modernes, vollständig responsives Website-Design, App-Design, Landingpage-Design, UX/IX-Design.",
                'graphic_design': '',
                'text_graphic_design': 'Logos, Markenstile, Visitenkarten & Büromaterial, Banner, Flyer, Broschürengestaltung, Verpackungs- & Etikettendesign, Album-/Buchcover, Menüdesign, Infografikdesign.',
                'video_animation': '',
                'text_video_animation': "Video-Bearbeitung, Logo-Animation, Animierte GIFs, Unternehmensvideos, Videos für soziale Medien, Bearbeitung & Postproduktion, Musikvideos, Spiel- & Filmtrailer, Bildbearbeitung.",
                'Illustartor': '',
                'text_Illustartor': "Illustrationen, Musterdesign, Tattoo-Design, Illustrationen für Kinderbücher, Cartoons & Comics, Buch- & Albumcover, Infografik-Design.",
                'web_developer': '',
                'text_web_developer': "Online-Shop erstellen, Shopify-Shop designen, komplette Website-Erstellung, Fehlerbehebung, Designanpassung, Dropshipping-Shop.",
                'fashion_designer': '',
                'text_fashion_designer': "Technische Zeichnung & Technische Unterlagen, Modedesign, Vollständiger Designprozess (Front- und Rückansicht-Skizzen, Trendrecherche, Inspiration vom Käufer bereitgestellt, Stimmungstafel, Farbtabelle).",
                'reference': 'What Client Says:',
                'quot1': "Natalia hat alle Anforderungen erfüllt und alle Anmerkungen mit Anpassungen berücksichtigt. Wir möchten Natalias Kundenorientierung und den Wunsch hervorheben, das Projekt so abzuschließen, dass das Ergebnis vollständig den Erwartungen entspricht.",
                'quot2': "Ich danke Nataliya für die geleistete Arbeit, inspirierend und mit vollem Einsatz! Designerin verfügt über ein besonderes Gespür und ein hohes Maß an ästhetischer Wahrnehmung und Professionalität. Es war eine wunderbare Erfahrung der Zusammenarbeit!",
                'quot3': "Ukrainische Modewoche Frühling/Sommer 2019 - VARONA von NATALIYA RODIONOVA | FashionTV | FTV",
                'quot4': "Alles wurde rechtzeitig erledigt und entspricht den Erwartungen.",
                // 'conversation': '',
                // 'phone': '',
                // 'email': '',
                'send_button': 'Senden',
                'footer_text': ''
            },

            'it': {
                'greeting': "Ciao. Mi chiamo Natalia. Sono una Designer Multidisciplinare. Ho iniziato la mia carriera come Fashion Designer. Dopo essermi diplomata alla scuola di moda di Milano, ho maturato esperienza in molte grandi aziende come Dolce Gabbana e Marni. Purtroppo, con l’avvento della pandemia nel 2018, ho dovuto cambiare profilo e mi sono interessato al digitale. Durante il periodo di lockdown ho iniziato a lavorare come freelance, sviluppando etichette, banner, loghi, stili aziendali e lavorando sul web design. Dopo essermi diplomato quest'anno alla scuola DCI come Sviluppatore Web, ho acquisito conoscenze di HTML, CSS, JavaScript e React e ho anche familiarizzato con le basi del backend. Attualmente sto cercando un'azienda dove poter maturare una buona esperienza come giovane specialista nel settore sviluppo-web o web-design. Sono fiducioso che la mia esperienza nelle vendite, le competenze acquisite alla scuola DCI e i miei 10 anni di esperienza come designer possano portare molti vantaggi all'azienda e rendere un sito web o un'applicazione davvero unici.",
                'Illustrator': "ILLUSTRATRICE",
                'developer': 'SVILUPATORE WEB',
                'CV': 'scaricare cv',
                'nhome': 'home',
                'nskills': 'competenze',
                'nservice': 'servizio',
                'nreviews': 'recensioni',
                'ncontacts': 'contatti',
                'web_design': 'Web Designer',
                'text_web_design': "Design di siti web moderni completamente responsivi, Design di app, Design di pagine di atterraggio, Design UX/IX.",
                'graphic_design': 'Graphic Designer',
                'text_graphic_design': "Logo, Guide dello stile del brand, Biglietti da visita e Materiale da cancelleria, Striscioni, Volantini, Progettazione di brochure, Progettazione di confezioni ed etichette, Copertine di album/libri, Progettazione di menu, Progettazione di infografiche.",
                'video_animation': 'Video & Animation',
                'text_video_animation': "Montaggio video, Animazione del logo, GIF animate, Video aziendali, Video per i social media, Montaggio e post-produzione, Videoclip musicali, Trailer di giochi e film, Modifica delle immagini.",
                'Illustartor': 'Illustrator',
                'text_Illustartor': "Illustrazioni, Design di pattern, Design di tatuaggi, Illustrazioni per libri per bambini, Cartoni animati e fumetti, Copertine di libri e album, Progettazione di infografiche.",
                'web_developer': 'Web Developer',
                'text_web_developer': "Creazione di un negozio online, progettazione di un negozio Shopify, creazione completa del sito web, risoluzione degli errori, personalizzazione del design, negozio di dropshipping.",
                'fashion_designer': 'Fashion Designer',
                'text_fashion_designer': "Disegno tecnico e Tech Pack, Illustrazione di moda, Processo di progettazione completo (schizzi frontali e posteriori, ricerca delle tendenze, ispirazione fornita dal compratore, bacheca dei mood, Cartella colori).",
                'reference': 'What Client Says:',
                'quot1': 'Natalia fulfilled all the requirements and took into account all the comments with adjustments. We would lke to note Natalias customer focus, and the desire to bring the project to an end so that the result would fully meet expectations.',
                'quot2': "Ringrazio Nataliya per il lavoro svolto, ispirato e con pieno impegno! La designer possiede un particolare senso estetico e un elevato livello di professionalità. È stata un'esperienza di collaborazione meravigliosa!",
                'quot3': "Tutto è stato fatto in tempo e corrisponde alle aspettative.",
                'quot4': "Tutto è stato fatto in tempo e come previsto.",
                'conversation': "Let's Talk:",
                // 'phone': 'Phone Me:',
                // 'email': 'Email Me:',
                'send_button': 'Inviare',
                // 'footer_text': 'Follow Me:',
            },
        };

        // Update text content based on the selected language
        const elementsToUpdate = Object.keys(translations[languageCode]);
        elementsToUpdate.forEach((elementId) => {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = translations[languageCode][elementId];
            }
        });

        // Update the language code in the button
        toggleButton.textContent = languageCode;
        dropdownList.style.display = 'none';
    }
});





document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('dropdown-toggle');
    const dropdownList = document.getElementById('dropdown-list');

    toggleButton.addEventListener('click', function () {
        if (dropdownList.style.display === 'block') {
            dropdownList.style.display = 'none';
        } else {
            setTimeout(() => {
                dropdownList.style.display = 'block';
            }, 300); // Delay for 300 milliseconds
        }
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener('click', function (event) {
        if (!dropdownList.contains(event.target) && event.target !== toggleButton) {
            dropdownList.style.display = 'none';
        }
    });

    // Update the button text with the selected short language code
    const languageLinks = dropdownList.querySelectorAll('a');
    languageLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const languageCode = event.target.getAttribute('data-lang');
            toggleButton.textContent = languageCode;
            dropdownList.style.display = 'none';
        });
    });
});