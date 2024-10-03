const e={COMMON:{broadcast:"",description:"Дръжте чувствителна информация далеч от вашите чатове и и-мейли. Споделяйте тайна връзка, която е достъпна само веднъж.",keywords:"тайна,генератор на пароли,сподели тайна,onetime",button_create_secret:"Създай тайна връзка",button_generate_secret:"Или генерирай случайна парола.",secret_privacy_options:"Опции за поверителност",secret_passphrase:"Тайна фраза",secret_passphrase_hint:"Дума или фраза, която е трудна за познаване.",secret_recipient_address:"Адрес на получател",secret_placeholder:"Тайното съдържание отива тук...",header_create_account:"Създай акаунт",header_about:"Относно",header_sign_in:"Вход",header_dashboard:"Акаунт",header_logout:"Изход",secret:"Тайна",received:"Получен",burned:"Изгорен",expires_in:"Изтича след",burn_this_secret:"Изгори тази тайна",burn_this_secret_hint:"Изгарянето на тайна, ще я изтрие преди да бъде прочетена (кликни за потвърждение)",burn_this_secret_confirm_hint:"Изгарянето на тайна е необратим процес ",msg_check_email:"Проверете си и-мейла",click_to_continue:"Кликни, за да продължиш →",click_to_verify:"Продължи, за да си потвърдиш акаунта:",error_secret:"Не предоставихте нищо за споделяне",error_passphrase:"Проверете тайната фраза още веднъж",enter_passphrase_here:"Въведете тайната фраза тук",view_secret:"Преглед на тайната",careful_only_see_once:"внимавайте: ще ти я покажем само веднъж.",warning:"Внимание",oops:"Опа!",error:"Грешка",secret_was_truncated:"Съобщението беше отрязано, защото свърши",signup_for_more:"Регистрирайте се за още",login_to_your_account:"Влез в акаунта си",sent_to:"Изпрати до: ",field_email:"И-мейл",field_password:"Парола",field_password2:"Потвърди паролата",button_create_account:"Създай акаунт",share_a_secret:"Сподели тайна",title_home:"Начало",title_recent_secrets:"Скорошни тайни",word_none:"Няма",word_burned:"изгорени",word_received:"получени",word_confirm:"Потвърди",word_cancel:"Откажи",feedback_text:"Имаш въпрос или коментар?",button_send_feedback:"Обратна връзка",verification_sent_to:"Информация за потвърждаване беше изпратена до"},homepage:{tagline1:"Поставете парола, тайно съобщение или лична връзка долу.",tagline2:"Дръжте чувствителна информация далеч от чатове и и-мейли.",secret_hint:"* Тайната връзка работи само един път и после изчезва завинаги.",secret_form_more_text1:"Регистрирайте се за",secret_form_more_text2:"безплатен акаунт",secret_form_more_text3:"да поставите фрази за по-добра защита, както и допълнителни опции за поверителност. Дори, ще ви изпратим връзката по и-мейл, ако искате.",cta_title:"Използвайте персонализиран домейн",cta_subtitle:"Издигнете вашата марка и споделяйте с увереност",cta_feature1:"Вашият собствен персонализиран домейн",cta_feature2:"Неограничено споделяне на тайни",cta_feature3:"Разширени контроли за поверителност",explore_premium_plans:"Разгледайте премиум плановете",need_free_account:"Тъкмо започвате?",sign_up_free:"Създайте безплатен акаунт"},private:{pretext:"Сподели тази връзка:",requires_passphrase:"Изисква фраза.",this_msg_is_encrypted:"Това съобщение е криптирано с вашата фраза.",only_see_once:"ще го видите само един път"},shared:{requires_passphrase:"Това съобщение изисква фраза:",viewed_own_secret:"Прегледахте собствената си тайна. Тя вече е недостъпна за всички.",you_created_this_secret:"Вие създадохте тази тайна. Ако я прегледате, тогава получателят няма да има възможност да я види.",your_secret_message:"Вашето тайно съобщение:",this_message_for_you:"Това съобщение е за теб:",reply_with_secret:"Отговори с друга тайна"},dashboard:{title_received:"Полчено",title_not_received:"Неполучено",title_no_recent_secrets:"Няма скорошни тайни"},login:{need_an_account:"Имате нужда от акаунт?",forgot_your_password:"Забравена парола?",button_sign_in:"Вход",enter_your_credentials:"Въведете си информацията"},incoming:{tagline1:"Поставете парола, тайно съобщение или лична връзка долу.",tagline2:"Дръжте чувствителна информация далеч от чатове и и-мейли.",secret_hint:"* Тайната връзка работи само един път и после изчезва завинаги.",incoming_button_create:"Изпрати до екипа",incoming_secret_options:"Помощна информация",incoming_secret_placeholder:"Въведете всякаква информация, която ще е от полза на помощният представител (например: системна парола)",incoming_ticket_number:"Билет #",incoming_ticket_number_hint:"Може да намерите това от и-мейл си (например: 123456)",incoming_recipient_address:"Получател",incoming_success_message:"Вашият и-мейл беше изпратен"}},t={incomingsupport:{subject:"[Билет: %s]",body1:"Клиент изпрати следната информация"},secretlink:{subject:"%s Ви изпрати тайна",body1:"Имаме тайна за теб от",body_tagline:"Ако не познавате изпращача или мислите, че е спам, изпратети ни детайлите тук:"},welcome:{subject:"Потвърдете си тайният акаунт",body1:"Добре дошли в Onetime Secret. Имаме тайна за теб!",please_verify:"Моля, потвърдете си акаунта:",postscript1:"Този и-мейл беше изпратен до"}},_="Ако не сте създали този акаунт, изтрийте съобщението и ние няма да Ви безпокоим повече.",r={web:e,email:t,postscript2:_};export{r as default,t as email,_ as postscript2,e as web};