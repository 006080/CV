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
                'greeting': 'Hi. My name is Nataliya Rodionova. I have studied Design at Marangoni Institute in Milan. After graduating I worked as a stylist and seller in a Multicultural capital of Fashion and then after the pandemic I worked for 5 years as a freelancer in Web and Graphic Design. In 2022, I moved to Berlin. I am now in my ﬁnal phase of the DCI course in Web Development and I am searching for a Job as a Web Developer. I am sure that my sales experience, creativity, and design skills can benefit a lot to the company and help to make the website or application very unique.',
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
                'text_web_design': 'Modern Fully Responsive Website Design, App Design, Landing Page Design, UX/IX Design.',
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
                'quot4': "Everything was done on timas expected.",
                'conversation': "Let's Talk:",
                'phone': 'Phone',
                'email': 'Email',
                'send_button': 'Send',
                'footer_text': 'Follow Me:',
            },

            'ru': {
                'greeting': 'Привет. Меня зовут Наталья Родионова. Я - дизайнер широкого профиля. Я закончила факультет Дизайна в Институте Марангони в Милане. После окончания учебы я работала стилистом и продавцом в интернационыальной столице моды, а затем, после эпидемии, я работала в течение 5 лет фрилансером в области веб и графического дизайна. В 2022 году я переехала в Берлин. В настоящее время я нахожусь в заключительной стадии курса по веб-разработке в DCI и ищу работу в качестве веб-дизайнера или стажеровку как веб-разработчик. Я уверена, что мой опыт в продажах, креативность и навыки дизайнера могут принести большую пользу компании и поможет сделать веб-сайт или приложение уникальным.',
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
                'textwebdesign': 'Современный дизайн полностью адаптивного веб-сайта, дизайн приложения, дизайн страницы-лендинга, дизайн UX/IX.',
                'graphic_design': '',
                'text_graphic_design': '',
                'video_animation': '',
                'text_video_animation': '',
                'Illustartor': "Иллюстратор",
                'text_Illustartor': "Иллюстрации, дизайн узоров, дизайн татуировок, иллюстрации для детских книг, мультфильмы и комиксы, обложки книг и альбомов, дизайн инфографики.",
                'web_developer': '',
                'text_web_developer': "Создание онлайн-магазина, дизайн магазина на Shopify, полное создание веб-сайта, устранение любых ошибок, настройка дизайна, магазин с прямой отправкой товаров (Dropshipping).",
                'fashion_designer': '',
                'text_fashion_designer': '',
                'reference': 'What Client Says:',
                'quot1': 'Наталья выполнила все требования и учла все замечания с корректировками. Мы хотим отметить клиентоориентированность Натальи и желание довести проект до конца, чтобы результат полностью соответствовал ожиданиям.',
                'quot2': "Я благодарю Наталью за проделанную работу, с вдохновением и полной самоотдачей! Дизайнер обладает особым чутьем и высшим уровнем эстетического видения и профессионализма. Это был замечательный опыт сотрудничества!",
                'quot3': "Украинская Неделя Моды Весна/Лето 2019 - VARONA от NATALIYA RODIONOVA | FashionTV | FTV",
                'quot4': 'Все сделано в срок и в соответствии с ожиданиями',
                'conversation': '',
                'phone': '',
                'email': '',
                'send_button': 'Отправить',
                'footer_text': '',
                'placeholder': "Ваше сообщение здесь..."
            },

            'de': {
                'greeting': 'Hallo. Mein Name ist Nataliya Rodionova. Ich habe Design an der Marangoni-Institut in Mailand studiert. Nach meinem Abschluss habe ich als Stylistin und Verkäuferin in der multikulturellen Modehauptstadt gearbeitet, und dann, nach der Pandemie, habe ich 5 Jahre lang als freiberufliche Web- und Grafikdesignerin gearbeitet. Im Jahr 2022 bin ich nach Berlin gezogen. Derzeit befinde ich mich im letzten Abschnitt des DCI-Webentwicklungskurses und suche eine Stelle als Webentwicklerin. Ich bin sicher, dass meine Verkaufserfahrung, Kreativität und Designfähigkeiten einem Unternehmen sehr zugutekommen können und dazu beitragen können, eine einzigartige Webseite oder Anwendung zu erstellen.',
                'illustrator': "ILLUSTRATOR",
                'developer': "WEBENTWICKLERIN",
                'CV': '',
                'nhome': '',
                'nskills': 'skills',
                'nservice': '',
                'nreviews': '',
                'ncontacts': '',
                'web_design': '',
                'textwebdesign': 'Современный дизайн полностью адаптивного веб-сайта, дизайн приложения, дизайн страницы-лендинга, дизайн UX/IX.',
                'graphic_design': '',
                'text_graphic_design': '',
                'video_animation': '',
                'text_video_animation': '',
                'Illustartor': '',
                'text_Illustartor': '',
                'web_developer': '',
                'text_web_developer': "Online-Shop erstellen, Shopify-Shop designen, komplette Website-Erstellung, Fehlerbehebung, Designanpassung, Dropshipping-Shop.",
                'fashion_designer': '',
                'text_fashion_designer': '',
                'reference': 'What Client Says:',
                'quot1': 'Наталья выполнила все требования и учла все замечания с корректировками. Мы хотим отметить клиентоориентированность Натальи и желание довести проект до конца, чтобы результат полностью соответствовал ожиданиям.',
                'quot2': "Я благодарю Наталью за проделанную работу, с вдохновением и полной самоотдачей! Дизайнер обладает особым чутьем и высшим уровнем эстетического видения и профессионализма. Это был замечательный опыт сотрудничества!",
                'quot3': "Украинская Неделя Моды Весна/Лето 2019 - VARONA от NATALIYA RODIONOVA | FashionTV | FTV",
                'quot4': 'Все сделано в срок и в соответствии с ожиданиями',
                'conversation': '',
                'phone': '',
                'email': '',
                'send_button': '',
                'footer_text': ''
            },

            'it': {
                'greeting': 'Hi. My name is Nataliya Rodionova. I have studied Design at Marangoni Institute in Milan. After graduating I worked as a stylist and seller in a Multicultural capital of Fashion and then after the pandemic I worked for 5 years as a freelancer in Web and Graphic Design. In 2022, I moved to Berlin. I am now in my ﬁnal phase of the DCI course in Web Development and I am searching for a Job as a Web Developer. I am sure that my sales experience, creativity, and design skills can benefit a lot to the company and help to make the website or application very unique.',
                'design': "DESIGNER",
                'illustrator': "ILLUSTRATOR",
                'developer': 'WEB DEVELOPER',
                'CV': 'download cv',
                'nhome': 'home',
                'nskills': 'sklls',
                'nservice': 'service',
                'nreviews': 'reviews',
                'ncontacts': 'contacts',
                'web_design': 'Web Designer',
                'text_web_design': 'Modern Fully Responsive Website Design, App Design, Landing Page Design, UX/IX Design.',
                'graphic_design': 'Graphic Designer',
                'text_graphic_design': 'Awesome logos, Brand Style Guides, Buisness Cards & Stationary, Banners, Flyers, Brochure Design, Packaging & Label Design, Album/Book Covers, Menu Design, Infographic Design',
                'video_animation': 'Video & Animation',
                'text_video_animation': 'Video Aditing, Logo Animation, Animated GIFs, Corporate Videos, Social Media Videos, Editing & Post-Production, Music Videos, Game & Film Trailers, Image Editing',
                'Illustartor': 'Illustrator',
                'text_Illustartor': 'Illustrations, Pattern Design, Tattoo Design, Childrens Book Illustration, Cartoons  & Comics, Book & Album Covers, Infographic Design.',
                'web_developer': 'Web Developer',
                'text_web_developer': 'Create online Store, Design Shopify Store, Full Website creation, Fix any Error, Design Customization, Dropshipping Store.',
                'fashion_designer': 'Fashion Designer',
                'text_fashion_designer': 'Technical Drawing & Tech Pack, Fashion Illustration, Full Design Process (front+back flat sketches, trend research, buyer provide inspiration, moodboard, color chat).',
                'reference': 'What Client Says:',
                'quot1': 'Natalia fulfilled all the requirements and took into account all the comments with adjustments. We would lke to note Natalias customer focus, and the desire to bring the project to an end so that the result would fully meet expectations.',
                'quot2': 'I thank Natalia for the work done, with inspiration and with full dedication! The designer has a special flair and the highest level of aesthetic vision and professionalism. It was a great collaboration experience!',
                'quot3': 'Ukrainian Fashion Week Spring/Summer 2019 - VARONA by NATALIYA RODIONOVA | FashionTV | FTV',
                'quot4': "Tutto è stato fatto in tempo e come previsto.",
                'conversation': "Let's Talk:",
                'phone': 'Phone Me:',
                'email': 'Email Me:',
                'send_button': 'Send',
                'footer_text': 'Follow Me:',
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