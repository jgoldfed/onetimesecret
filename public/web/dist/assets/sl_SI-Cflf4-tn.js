const e={COMMON:{broadcast:"",description:"Ohranite občutljive informacije izven el. pošte in klepetalnice. Posredujte povezavo za enkratni vpogled.",keywords:"secret,password generator,share a secret,onetime",button_create_secret:"Ustvari skrivno povezavo",button_generate_secret:"Ali generiraj naključno geslo",secret_privacy_options:"Zasebnost",secret_passphrase:"Geslo",secret_passphrase_hint:"Beseda ali fraza, ki jo je težko uganiti",secret_recipient_address:"Naslov prejemnika",secret_placeholder:"Vnesite skrivno vsebino...",header_create_account:"Ustavri raèun",header_about:"O",header_sign_in:"Vpis",header_dashboard:"Račun",header_logout:"Izpis",secret:"Skrivnost",received:"Prejeto",burned:"Zbrisano",expires_in:"Poteče v",burn_this_secret:"Izbriši to skrivnost",burn_this_secret_hint:"Brisanje bo izvedeno pred branjem  (potrdi tukaj)",burn_this_secret_confirm_hint:"Brisanje je nepovratno",msg_check_email:"Preveri e-pošto",click_to_continue:"Pritisni z nadaljevanje →",click_to_verify:"Pritisni za potrditev računa:",error_secret:"Manjka vnos za delitev",error_passphrase:"Preveri pravilnost gesla",enter_passphrase_here:"Vnesi geslo tukaj",view_secret:"Prikaži skrivnost",careful_only_see_once:"POZOR!: Samo enkratni prikaz",warning:"Opozorilo",oops:"Oops!",error:"Napaka",secret_was_truncated:"Sporočilo je okrnjeno, ker je končano",signup_for_more:"Prijavite se za več",login_to_your_account:"Prijava v uporabniški račun",sent_to:"Prejemnik: ",field_email:"E-pošta",field_password:"Geslo",field_password2:"Potrdi geslo",button_create_account:"Ustvari račun",share_a_secret:"Deli skrivnost",title_home:"Domov",title_recent_secrets:"Nedavne skrivnosti",word_none:"Nič",word_burned:"Uničeno",word_received:"Prejeto",word_confirm:"Potrdi",word_cancel:"Prekliči",feedback_text:"Imate vprašanje ali mnenje?",button_send_feedback:"Pošlji povratno informacijo",verification_sent_to:"Potrditev je bila poslana"},homepage:{tagline1:"Prilepite geslo, sporočilo ali povezavo.",tagline2:"Ohranite občutljive informacije izven el. pošte in klepetalnice.",secret_hint:"* Povezava je enkratna po uporabi izgine za vedno.",secret_form_more_text1:"Prijavite se z ",secret_form_more_text2:"zastonj uporabniškim računom",secret_form_more_text3:"in pošiljajte skrivnosti po e-pošti.",cta_title:"Uporabite prilagojeno domeno",cta_subtitle:"Dvignite svojo blagovno znamko in delite z zaupanjem",cta_feature1:"Vaša lastna prilagojena domena",cta_feature2:"Neomejeno deljenje skrivnosti",cta_feature3:"Napredne kontrole zasebnosti",explore_premium_plans:"Raziščite Premium načrte",need_free_account:"Šele začenjate?",sign_up_free:"Ustvarite brezplačen račun"},private:{pretext:"Deli povezavo",requires_passphrase:"Potrebno je geslo.",this_msg_is_encrypted:"To sporočilo je šifrirano z vašim geslom.",only_see_once:"To boste videli samo enkrat"},shared:{requires_passphrase:"To sporočilo zahteva geslo:",viewed_own_secret:"Odprli ste lastno skrivno sporočilo, ki več ni na voljo za vpogled drugim.",you_created_this_secret:"Sami ste avtor tega sporočila. Če ga odprete, naslovniku več ne bo dostopno.",your_secret_message:"Vaše skrivno sporočilo:",this_message_for_you:"To sporočilo ni namenjneno vam:",reply_with_secret:"Odgovori s skrivnim sporočilom"},dashboard:{title_received:"Prejeto",title_not_received:"Ni prejeto",title_no_recent_secrets:"No recent secrets"},login:{need_an_account:"Need an account?",forgot_your_password:"Forgot your password?",button_sign_in:"Sign In",enter_your_credentials:"Enter your credentials"},incoming:{tagline1:"Paste a password, secret message or private link below.",tagline2:"Keep sensitive info out of your email and chat logs.",secret_hint:"* A secret link only works once and then disappears forever.",incoming_button_create:"Send to Support Staff",incoming_secret_options:"Support Info",incoming_secret_placeholder:"Enter any information your support representative will need (e.g. system password)",incoming_ticket_number:"Enter Ticket #",incoming_ticket_number_hint:"You can find this in your email (e.g. 123456)",incoming_recipient_address:"Support recipient",incoming_success_message:"Your email has been sent"}},o={incomingsupport:{subject:"[Ticket: %s]",body1:"A customer has sent the following info"},secretlink:{subject:"%s sent you a secret",body1:"We have a secret for you from",body_tagline:"If you don't know the sender or believe it to be spam, send us the details here:"},welcome:{subject:"Verify your Onetime Secret account",body1:"Welcome to Onetime Secret. We have a secret for you!",please_verify:"Please verify your account:",postscript1:"This email was sent to",postscript2:"If you didn't create this account, delete this message and we won't contact you again."}},r={web:e,email:o};export{r as default,o as email,e as web};
