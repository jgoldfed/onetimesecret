const e={COMMON:{broadcast:"",description:"Hold følsomme informationer udenfor din chat-log og e-mail. Del et hemmeligt link der kun kan tilgås én gang.",keywords:"hemmelighed,adgangskode generator,del en hemmelighed,engangsbrug",button_create_secret:"Opret et hemmeligt link",button_generate_secret:"Eller opret en vilkårlig adgangskode ",secret_privacy_options:"Privatlivs-indstillinger",secret_passphrase:"Kodeord",secret_passphrase_hint:"Et ord eller sætning der er svær at gætte",secret_recipient_address:"Modtagers adresse",secret_placeholder:"Hemmeligt indhold indsættes her...",header_create_account:"Opret konto",header_about:"Om",header_sign_in:"Log ind",header_dashboard:"Konto",header_logout:"Log ud",secret:"Hemmelighed",received:"Modtaget",burned:"Destrueret",expires_in:"Udløber om",burn_this_secret:"Destruér denne hemmelighed",burn_this_secret_hint:"Destruéring af en hemmelighed vil slette den før den er blevet læst (klik for at bekræfte)",burn_this_secret_confirm_hint:"Destruktion af en hemmelighed er permanent og kan ikke fortrydes",msg_check_email:"Tjek din e-mail",click_to_continue:"Klik for at fortsætte →",click_to_verify:"Fortsæt for at bekræfte din konto:",error_secret:"Du har ikke angivet noget til deling",error_passphrase:"Dobbelttjek den adgangskode",enter_passphrase_here:"Indtast adgangskoden her",view_secret:"Se hemmelighed",careful_only_see_once:"forsigtig: vi viser den kun én gang.",warning:"Advarsel",oops:"Ubs!",error:"Fejl",secret_was_truncated:"Beskeden blev afkortet fordi den var slut",signup_for_more:"Tilmeld dig for flere muligheder",login_to_your_account:"Log ind på din konto",sent_to:"Sendt til: ",field_email:"E-mail",field_password:"Adgangskode",field_password2:"Bekræft adgangskode",button_create_account:"Opret konto",share_a_secret:"Del en hemmelighed",title_home:"Hjem",title_recent_secrets:"Nylige hemmeligheder",word_none:"Ingen",word_burned:"destrueret",word_received:"modtaget",word_confirm:"Bekræft",word_cancel:"Annuller",feedback_text:"Spørgsmål eller kommentarer?",button_send_feedback:"Send tilbagemelding",verification_sent_to:"En bekræftelse blev sendt til"},homepage:{tagline1:"Indsæt en adgangskode, hemmelig besked eller privat link herunder.",tagline2:"Hold følsomme informationer udenfor dine e-mails og chat-logs.",secret_hint:"* Et hemmeligt link virker kun én gang og forsvinder derefter for altid.",secret_form_more_text1:"Tilmeld dig med en",secret_form_more_text2:"gratis konto",secret_form_more_text3:"og få mulighed for at sende hemmeligheder via e-mails.",cta_title:"Brug et tilpasset domæne",cta_subtitle:"Løft dit brand og del med selvtillid",cta_feature1:"Dit eget tilpassede domæne",cta_feature2:"Ubegrænset hemmelig deling",cta_feature3:"Avancerede privatlivsindstillinger",explore_premium_plans:"Udforsk Premium-planer",need_free_account:"Er du lige begyndt?",sign_up_free:"Opret en gratis konto"},private:{pretext:"Del dette link:",requires_passphrase:"Kræver en adgangskode.",this_msg_is_encrypted:"Denne besked er krypteret med din adgangskode.",only_see_once:"du ser kun dette én gang"},shared:{requires_passphrase:"Denne besked kræver en adgangskode:",viewed_own_secret:"Du har set din egen hemmelighed. Den er ikke længere tilgængelig for andre.",you_created_this_secret:"Du har indtastet denne hemmelighed. Hvis du ser den, vil modtageren ikke kunne se den efterfølgende.",your_secret_message:"Din hemmelige besked:",this_message_for_you:"Denne besked er til dig:",reply_with_secret:"Svar med en anden hemmelighed"},dashboard:{title_received:"Modtaget",title_not_received:"Ikke modtaget",title_no_recent_secrets:"Ingen nylige hemmeligheder"},login:{need_an_account:"Brug for en konto?",forgot_your_password:"Glemt din adgangskode?",button_sign_in:"Log ind",enter_your_credentials:"Indtast dine oplysninger"},incoming:{tagline1:"Indsæt en adgangskode, hemmelig besked eller et privat link herunder.",tagline2:"Hold følsomme informationer udenfor dine e-mails og chat-logs.",secret_hint:"* Et hemmeligt link virker kun én gang og forsvinder derefter for altid.",incoming_button_create:"Send til supporten",incoming_secret_options:"Support information",incoming_secret_placeholder:"Indtast information som supporten kan få brug for (såsom adgangskoder til systemer)",incoming_ticket_number:"Tilgå supportsag #",incoming_ticket_number_hint:"Du kan finde dette i din e-mail indbakke (e.g. 123456)",incoming_recipient_address:"Support modtager",incoming_success_message:"Din e-mail er sendt"}},t={incomingsupport:{subject:"[Supportsag: %s]",body1:"En kunde har sendt følgende information"},secretlink:{subject:"%s har sendt dig en hemmelighed",body1:"Vi har en hemmelighed til dig fra",body_tagline:"Hvis du ikke kender afsenderen, eller mener det er spam, så send os detaljerne her:"},welcome:{subject:"Bekræft din Onetime Secret konto",body1:"Velkommen til Onetime Secret. Vi har en hemmelighed til dig!",please_verify:"Bekræft venligst din konto:",postscript1:"Denne e-mail blev sendt til",postscript2:"Hvis du ikke har oprettet denne konto, så slet denne besked - og vi vil ikke kontakte dig igen."}},n={web:e,email:t};export{n as default,t as email,e as web};