const e={COMMON:{broadcast:"",description:"Mantén la información confidencial fuera de tus chats y correos electrónicos. Comparte enlaces secretos que estarán disponibles sólo una vez.",keywords:"secreto,generador de contraseñas,comparte un secreto,solo una vez",button_create_secret:"Crear un enlace secreto",button_generate_secret:"O generar una contraseña al azar",secret_privacy_options:"Opciones de privacidad",secret_passphrase:"Contraseña",secret_passphrase_hint:"Una palabra o frase que es difícil de adivinar",secret_recipient_address:"Dirección Del Receptor",secret_placeholder:"El contenido secreto va aquí...",header_create_account:"Crear cuenta",header_about:"Acerca",header_sign_in:"Ingresar",header_dashboard:"Cuenta",header_logout:"Salir",secret:"Secreto",received:"Recibido",burned:"Destruido",expires_in:"Expira en",burn_this_secret:"Destruir este secreto",burn_this_secret_hint:"Destruir un secreto lo borrará antes de que haya sido leído (clic para confirmar)",burn_this_secret_confirm_hint:"La destrucción de un secreto es permanente y no se puede deshacer",msg_check_email:"Consulte su correo electrónico",click_to_continue:"Clic para continuar →",click_to_verify:"Continúe para verificar su cuenta:",error_secret:"Usted no proporcionó nada para compartir",error_passphrase:"Vuelva a comprobar la frase de contraseña",enter_passphrase_here:"Escriba la frase de contraseña",view_secret:"Ver secreto",careful_only_see_once:"cuidado: Solo la mostraremos una vez.",warning:"Atención",oops:"Error!",error:"Error",secret_was_truncated:"El mensaje se truncó porque tenía más de",signup_for_more:"Regístrese para recibir más",login_to_your_account:"Accede a tu cuenta",sent_to:"Enviar a: ",field_email:"Email",field_password:"Contraseña",field_password2:"Confirmar Contraseñ",button_create_account:"Crear Cuenta",share_a_secret:"Compartir un secreto",title_home:"Inicio",title_recent_secrets:"Secretos Recientes",word_none:"Ninguno",word_burned:"destruido",word_received:"recibido",word_confirm:"Confirmar",word_cancel:"Annuler",feedback_text:"¿Tiene alguna pregunta o comentario?",button_send_feedback:"Envíanos tus comentarios!",verification_sent_to:"Una verificación fue enviada a",button_create_incoming:"Send to Support Staff"},homepage:{tagline1:"Pegue una contraseña, mensaje secreto o enlace privado a continuación.",tagline2:"Mantener la información confidencial fuera de tus chats y correos electrónicos",secret_hint:"* El enlace secreto sólo funciona una vez y luego desaparece para siempre.",secret_form_more_text1:"Regístrese para obtener",secret_form_more_text2:"una cuenta gratuita",secret_form_more_text3:"y poder fijar frases de contraseña para mayor seguridad junto con opciones de privacidad adicionales. Incluso enviaremos el enlace por correo electrónico si usted lo desea.",cta_subtitle:"Eleva tu marca y comparte con confianza",cta_feature1:"Tu propio dominio personalizado",cta_feature2:"Compartición ilimitada de secretos",cta_feature3:"Controles de privacidad avanzados",explore_premium_plans:"Explora los planes Premium",need_free_account:"¿Recién empiezas?",sign_up_free:"Crea una cuenta gratuita"},private:{pretext:"Comparte este enlace:",requires_passphrase:"Requiere una contraseña.",this_msg_is_encrypted:"Este mensaje está cifrado con su contraseña.",only_see_once:"Sólo verá esto esta vez"},shared:{requires_passphrase:"Este mensaje requiere una contraseña:",viewed_own_secret:"Ya ha visto su propio secreto. Ya no estará disponible para nadie más.",you_created_this_secret:"Usted ha creado este secreto. Si lo ve, el destinatario no podrá verlo.",your_secret_message:"Su mensaje secreto:",this_message_for_you:"Este mensaje es para usted:",reply_with_secret:"Responder con otro secreto"},dashboard:{title_received:"Recibido",title_not_received:"No recibido",title_no_recent_secrets:"No hay secretos recientes"},login:{need_an_account:"¿Necesita una cuenta?",forgot_your_password:"¿Olvidó su contraseña?",button_sign_in:"Ingresar",enter_your_credentials:"Entre sus credenciales"},incoming:{tagline1:"Paste a password, secret message or private link below.",tagline2:"Keep sensitive info out of your email and chat logs.",secret_hint:"* A secret link only works once and then disappears forever.",incoming_button_create:"Send to Support Staff",incoming_secret_options:"Support Info",incoming_secret_placeholder:"Enter any information your support representitive will need (e.g. system password)",incoming_ticket_number:"Enter Ticket #",incoming_ticket_number_hint:"You can find this in your email (e.g. 123456)",incoming_recipient_address:"Support recipient",incoming_success_message:"Your email has been sent"}},r={incomingsupport:{subject:"[Ticket: %s]",body1:"A customer has sent the following info"},secretlink:{subject:"%s le ha enviado un secreto",body1:"Tenemos un secreto para usted desde",body_tagline:"Si no conoce al remitente o cree que este sea un correo no deseado, envíenos los detalles aquí:"},welcome:{subject:"Verifique su cuenta de Onetime Secret",body1:"¡Bienvenido a Onetime Secret! ¡Tenemos un secreto para usted!",please_verify:"Por favor verifique su cuenta:",postscript1:"Este email se le envio a",postscript2:"Si usted no ha creado esta cuenta, borre este mensaje y no lo contactaremos de nuevo."}},a={web:e,email:r};export{a as default,r as email,e as web};
