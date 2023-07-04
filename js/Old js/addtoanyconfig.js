var a2a_config = a2a_config || {};
a2a_config.templates = a2a_config.templates || {};


if (jQuery('html').is(':lang(en)')) {
  a2a_config.templates.email = {
    subject: "A friend wants to share a job at Fluxys with you",
    body: "Hi! " +
      "\r\n \r\nI found this bright job vacancy at Fluxys… thought it might be interesting for you! " +
      "\r\n${link}"
  };

  a2a_config.templates.whatsapp = {
    text: "Hi! \r\nFound this bright job vacancy at Fluxys… thought it might be interesting for you! \r\n${link}"
  };

  a2a_config.templates.sms = {
    body: "Hi! \r\nFound this bright job vacancy at Fluxys… thought it might be interesting for you! \r\n${link}"
  };

} else if(jQuery('html').is(':lang(fr)')) {
  // fr
  a2a_config.templates.email = {
    subject: "Un(e) ami(e) souhaite partager un job chez Fluxys avec vous",
    body: "Hello ! " +
      "\r\n \r\nCe job chez Fluxys m'a l’air intéressant, je me suis dit que cela pouvait être une super opportunité pour toi ! " +
      "\r\n${link}"
  };

  a2a_config.templates.whatsapp = {
    text: "Hello ! \r\n \r\nCe job chez Fluxys m’a l’air intéressant, je me suis dit que cela pouvait être une super opportunité pour toi ! \r\n${link}"
  };

  a2a_config.templates.sms = {
    body: "Hello ! \r\n \r\nCe job chez Fluxys m’a l’air intéressant, je me suis dit que cela pouvait être une super opportunité pour toi ! \r\n${link}"
  };
} else {
  // nl
  a2a_config.templates.email = {
    subject: "Een vriend wil een job bij Fluxys delen met jou ",
    body: "Hallo! " +
      "\r\n \r\nDeze job bij Fluxys lijkt me top. Misschien iets voor jou… " +
      "\n${link}"
  };

  a2a_config.templates.whatsapp = {
    text: "Hallo! \r\n \r\nDeze job bij Fluxys lijkt me top. Misschien iets voor jou...  \r\n${link}"
  };

  a2a_config.templates.sms = {
    body: "Hallo! \r\n \r\nDeze job bij Fluxys lijkt me top. Misschien iets voor jou...  \r\n${link}"
  };
}

