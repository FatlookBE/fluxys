j$(".dropdown-heading").hover(function(){j$('.dropdown-list',this).fadeToggle('fast');});

var myJobInsideInfoDiv = document.getElementById('jJobInsideInfo');
var myApplyButton = document.getElementById('apply_btn');
var myApplyByEmailOnlyFound = false;

if(myJobInsideInfoDiv != null && myApplyButton != null) {
  var elements = myJobInsideInfoDiv.getElementsByTagName('label');

  for (var i = 0; i < elements.length && !myApplyByEmailOnlyFound; i++) {
    var currElement = elements[i];

    if(currElement.innerHTML == 'Type of submission: Email') {
      myApplyButton.parentNode.removeChild(myApplyButton);

      var myParentElement = currElement.parentNode;
      myParentElement.removeChild(currElement);
      myParentElement.parentNode.removeChild(myParentElement);
      myApplyByEmailOnlyFound = true;
    }
  }
}

var myLogoInnerDiv = document.getElementById('logo_inner');

if(myLogoInnerDiv != null) {
  var elements = myLogoInnerDiv.getElementsByTagName('a');

  for (var i = 0; i < elements.length; i++) {
    var currElement = elements[i];

    if(currElement.href != null) {
      currElement.href = 'https://www.fluxys.com/en/careers/discover-us';
    }
  }
}

// if(!myApplyByEmailOnlyFound) {
//   var imported = document.createElement('script');
//   /* prod URL */
//   imported.src = 'https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frrdnn3p0fb7/b/oda-native-client-sdk-js-20.6.1/o/chatbot_production.js';
//  /* staging url
//  imported.src = 'https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frrdnn3p0fb7/b/oda-native-client-sdk-js-20.6.1/o/chatbot.js';*/
//   document.head.appendChild(imported);
// }

// Luca Spinali -- 19/01/2020

//replace apply button in the header
jQuery(".job_details .info_box").appendTo(".apply-btn");
//replace title in the header
jQuery(".job_details .content_header > .title").clone().appendTo(".section-header-title");
// add organic image before title for print
jQuery(".job_details #container").prepend('<div class="wrapper-print-organic-image"><img class="print-organic-image" src="/media/images/campaign/vorm4-header.png" /></div>');
// clone and place title on search
//jQuery(".jSearchTitle").clone().appendTo(".section-header-title");
//jQuery(".jSearchTitle").clone().appendTo(".section-header-title-search").text('Fluxys: global energy infrastructure player');
// remove the toggle before the location
jQuery(".job_details .content_header > .subtitle .loc_icon").remove();
// replace search fields in the header
jQuery("#search_hldr").appendTo(".block-search");


/* if click on text button apply --> click on the real button */
jQuery( ".apply-btn-text" ).click(function() {
  jQuery('.jApplyBtn').click()
});


// keep only the location before the first coma
var locationList = jQuery(".primary_location a");
var locationListText = jQuery(locationList).text();
var locationArray = locationListText.split(',');
var locationFirstCell = locationArray[0];
var trimLocationFirstCell = jQuery.trim(locationFirstCell);
jQuery(locationList).text(trimLocationFirstCell + ' -');

// replace location in the header
if (jQuery(".v2").length) {
  jQuery(".job_details .content_header > .subtitle").appendTo(".content_header");
  // keep only the type of Working Schedule wS after ':' and not the title
  var wSList = jQuery("#G111605010618");
  var wSListText = jQuery(wSList).text();
  var wSArray = wSListText.split(':');
  var wSFirstCell = wSArray[1];
  var trimwSFirstCell = jQuery.trim(wSFirstCell);
  jQuery(wSList).text(trimwSFirstCell + ' -');
// replace Working Schedule in the header
  jQuery("#G111605010618").appendTo(".content_header");

// keep only the type of contract after ':' and not the title
  var contractList = jQuery("#G105305010618");
  var contractListText = jQuery(contractList).text();
  var contractArray = contractListText.split(':');
  var contractFirstCell = contractArray[1];
  var trimContractFirstCell = jQuery.trim(contractFirstCell);
  jQuery(contractList).text(trimContractFirstCell);
// replace Type of contract in the header
  jQuery("#G105305010618").appendTo(".content_header");

  jQuery(".double-lines-decoration").css("margin-bottom", "25px");
} else {
  /* place location in header */
  jQuery(".job_details .content_header > .subtitle").appendTo(".section-header-more-informations");
  // keep only the type of Working Schedule after ':' and not the title
  var wSList = jQuery("#G111605010618");
  var wSListText = jQuery(wSList).text();
  var wSArray = wSListText.split(':');
  var wSFirstCell = wSArray[1];
  var trimwSFirstCell = jQuery.trim(wSFirstCell);
  jQuery(wSList).text(trimwSFirstCell + ' -');
// replace Working Schedule in the header
  jQuery("#G111605010618").appendTo(".section-header-more-informations");

// keep only the type of contract after ':' and not the title
  var contractList = jQuery("#G105305010618");
  var contractListText = jQuery(contractList).text();
  var contractArray = contractListText.split(':');
  var contractFirstCell = contractArray[1];
  var trimContractFirstCell = jQuery.trim(contractFirstCell);
  jQuery(contractList).text(trimContractFirstCell + ' -');
// replace Type of contract in the header
  jQuery("#G105305010618").appendTo(".section-header-more-informations");

  /* replace Job external ID in the header */
  jQuery(".job_external_id .field_value").addClass('job-id').appendTo(".section-header-more-informations");
}

/* place all elements after title job in content for the print */
jQuery(".section-header-more-informations").clone().insertAfter(jQuery(".job_details .content_header > .title"));


// add aria to job alert link on footer (who is lost when it is moved) to make the popup works
jQuery(".job-alert.jCommunityModal").attr("aria-haspopup", "true");

// Replace text of Parameters in the header settings
jQuery("#header_settings .settings_btn").addClass("jCommunityModal").attr("aria-haspopup", "true").attr("href","#").text("Job alert");
jQuery( ".settings_btn" ).click(function(e) {
  // avoid default a behaviour
  e.preventDefault();
});

// same code than on desktop.js except selector (target only the link on footer
// make work promo_talent_community button on Job Details page
j$(".job-alert.jCommunityModal, .settings_btn.jCommunityModal").unbind('click').click(function(event){
  var preselect = '';
  if(j$(this).attr('data-category-id')) {
    preselect += ( preselect ? '&' : '') + 'job_category_selected=' + j$(this).attr('data-category-id');
  }
  if(j$(this).attr('data-location-id')) {
    preselect += ( preselect ? '&' : '') + 'job_location_selected=' + j$(this).attr('data-location-id');
  }
  if(j$(this).attr('data-company-id')) {
    preselect += ( preselect ? '&' : '') + 'job_company_selected=' + j$(this).attr('data-company-id');
  }
  TVAPP.login.bindRegister({mode:"register"});
  TVAPP.modal.open("register_modal_tc",{},{mode:'register',context:preselect, action: event.currentTarget});
});

/* clone logo + header in content for print */
jQuery("#logo_inner").clone().insertBefore(".content_header .title");
jQuery(".baseline-footer-print").insertBefore(".content_header .title");
jQuery(".job_details #container").prepend('<img class="print-organic-image" src="/media/images/campaign/vorm5-titels.png" />');

/* hide buttton apply on requisition with Submission type = Email */
if (jQuery("#G118105010618:contains('Submission Type: Email')").length > 0) {
  jQuery('#apply_btn').remove();
} else {
  /* load chatbot */
  var imported = document.createElement('script');
  /* prod URL */
  imported.src = 'https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frrdnn3p0fb7/b/oda-native-client-sdk-js-20.6.1/o/chatbot_production.js';
  /* staging url
  imported.src = 'https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frrdnn3p0fb7/b/oda-native-client-sdk-js-20.6.1/o/chatbot.js';*/
  document.head.appendChild(imported);
}
/* banner epic */
if (jQuery("#G132205010618").length) {
  // We take the textual value of the field which will impact on the display of the logo and we store it in a variable which will be used in the "cases" of the switch below
  var valueEpic = jQuery("#G132205010618").text();


  switch (valueEpic) {
    //The case = the text value for the Background Type field in the administration
    case 'Background Type: EPIC 1':
      // If you want another picture, just change the URL after
      jQuery(".fit-picture").attr("src", "/media/images/epic-banners/epic-banner-1.jpg").show("fade");
      jQuery("meta[property='og:image']").attr("content", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-banner-1.jpg");
      break;

    case 'Background Type: EPIC 2':
      jQuery(".fit-picture").attr("src", "/media/images/epic-banners/epic-banner-2.jpg").show("fade");
      jQuery("meta[property='og:image']").attr("content", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-banner-2.jpg");
      jQuery('.fluxys-baseline, .text-emphasis-gradient').addClass('other-gradient');
      jQuery('.jApplyBtn, .gray_btn, .chzn-single, .locale_select').addClass('btn-other-gradient');
      jQuery('#job_available_locales_loop_chzn, .locale_select').addClass('list-other-gradient');
      jQuery('#logo_hldr .logo').css('background-image', 'url(/media/images/campaign/vorm4-header-other-gradient.png)');
      jQuery('.big-image-background').addClass('bg-other-gradient');
      jQuery('.fit-picture').addClass('variant2');
      jQuery(".baseline-footer-print img").attr('src','/media/images/campaign/baselineprint-other-bg.png');
      break;

    case 'Background Type: EPIC 3':
      jQuery(".fit-picture").attr("src", "/media/images/epic-banners/epic-banner-3.jpg").show("fade");
      jQuery("meta[property='og:image']").attr("content", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-banner-3.jpg");
      break;
    case 'Background Type: EPIC 4':
      jQuery(".fit-picture").attr("src", "/media/images/epic-banners/epic-banner-4.jpg").show("fade");
      jQuery("meta[property='og:image']").attr("content", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-banner-4.jpg");
      break;
    // to add a new EPIC banner, just copy/paste from Case to break; and replace the value of the case with the new one and replace the URL

    // this banner image is shown if there is no matching value for Background Type
    default:
      jQuery(".fit-picture").attr("src", "/media/images/epic-banners/epic-banner-1.jpg").show("fade");
      jQuery("meta[property='og:image']").attr("content", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-banner-1.jpg");

  }
} else {
  // if Background Type field don't exist, this banner image is shown by default
  jQuery(".fit-picture").attr("src", "/media/images/epic-banners/epic-banner-1.jpg").show("fade");
  jQuery("meta[property='og:image']").attr("content", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-banner-1.jpg");
}


/* change logo according to field company value */
if (jQuery(".field_company .field_value").length) {
  // We take the textual value of the field which will impact on the display of the logo and we store it in a variable which will be used in the "cases" of the switch below
  var valueLogo = jQuery(".field_company .field_value").text();

  function removeLinkApply() {
    jQuery( ".apply-btn-text" ).css({
      'pointer-events' : 'none',
      'text-decoration' : 'none',
    });
  }
  switch (valueLogo) {
    //The case = the text value for the Epic field in the administration
    case 'Fluxys':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/logo-fluxys-white.png").show("fade");
      /* if click on text button apply --> click on the real button */
      break;

    case 'Dunkerque LNG':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/brand-outline_dunkerque-LNG-white.png").show("fade");
      /* change socials links */
      jQuery('.share.linkedin').attr('href','https://www.linkedin.com/company/dunkerque-lng-sas/');
      jQuery('.share.twitter').attr('href','https://twitter.com/DunkerqueLNG');
      removeLinkApply();
      break;

    case 'FluxSwiss':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/brand-outline_fluxswiss-white.png").show("fade");
      removeLinkApply();
      break;

    case 'Fluxys Brasil' :
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/logo-fluxys-white.png").show("fade");
      removeLinkApply();
      break;

    case 'Fluxys Deutschland':
      //jQuery(".logo img").attr("src", "/media/images/logos-affiliates/brand-outline_fluxys_Deutschland-white.png").show("fade");
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/logo-fluxys-white.png").show("fade");
      removeLinkApply();
      break;

    case 'Fluxys TENP':
      //jQuery(".logo img").attr("src", "/media/images/logos-affiliates/brand-outline_fluxys_TENP-white.png").show("fade");
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/logo-fluxys-white.png").show("fade");
      removeLinkApply();
      break;

    case 'Gaz-Opale':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/brand-outline_gaz-opale-white.png").show("fade");
      /* change socials links */
      jQuery('.share.linkedin').attr('href','https://www.linkedin.com/company/dunkerque-lng-sas/');
      jQuery('.share.twitter').attr('href','https://twitter.com/DunkerqueLNG');
      removeLinkApply();
      break;

    case 'GMSL':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/logo-fluxys-white.png").show("fade");
      removeLinkApply();
      break;

    case 'Interconnector':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/brand-outline_interconnector-white.png").addClass('interconnector').show("fade");
      removeLinkApply();

      break;

    case 'Transitgaz':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/logo-fluxys-white.png").show("fade");

      break;
    // this logo is shown if there is no matching value for valueEpic
    default:
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/logo-fluxys-white.png").show("fade");

  }
} else {
  // if field_company field don't exist, this logo is shown by default
  jQuery(".logo img").attr("src", "/media/images/logos-affiliates/logo-fluxys-white.png").show("fade");
}

/* make the logo visible , avoid to see the logo set by default on the website */
jQuery(".logo img").css("opacity","1");

/* element to print in footer */
jQuery('.element-in-footer-to-print').clone().appendTo('.job_description');

/* detect lang and put the intro in the good language */
if (jQuery('html').is(':lang(en)')) {
  // check first letter of the job title and change the intro sentence according to this one
  var titleHeader = jQuery('.title').text();
  var trimTitleHeader = jQuery.trim(titleHeader);
  var firstLetter = trimTitleHeader.charAt(0).toLowerCase();

  if((firstLetter == 'a') || (firstLetter == 'e') || (firstLetter == 'i') || (firstLetter == 'o') || (firstLetter == 'u')) {
    jQuery(".job_details .job-detail-intro").text("We're looking for an");
  }

  // replace text Apply by Apply now on the bottom of the page
  jQuery(".job_details .jApplyBtn .btn_text").text("Apply now");

} else if(jQuery('html').is(':lang(fr)')) {
  // fr
  jQuery(".job_details .job-detail-intro").text("Profil recherché : ");
  // replace text Apply by Apply now on the bottom of the page
  jQuery(".job_details .jApplyBtn .btn_text").text("je postule");
} else if(jQuery('html').is(':lang(de)')) {
  // Deutsch
  jQuery(".back-button").text("< Alle Stellen");
  // replace text Apply by Apply now on the bottom of the page
  jQuery(".job_details .jApplyBtn .btn_text").text("Jetzt bewerben");
  // replace text button job alert
  //jQuery("#header_settings .settings_btn").text("Stellenbenachrichtigung");
  // replace title texte search
  jQuery(".section-header-title-search h1").text("Fluxys: Führender Betreiber von Energieinfrastruktur\n");
  /* replace placeholder search */
  jQuery("#jLocInputHldr input.search_input").attr("placeholder", "Ort (z. B. Brüssel)");
} else {
  // nl
  jQuery(".job_details .job-detail-intro").text("Vereist profiel : ");
  // replace text Apply by Apply now on the bottom of the page
  jQuery(".job_details .jApplyBtn .btn_text").text("ik solliciteer");
}


// get current year for the credits
var year= new Date().getFullYear();
jQuery(".credits-year").text(year);


//remove class mobile on body if it is added
jQuery( "body" ).removeClass( "mobile");
jQuery( window ).resize(function() {
  jQuery( "body" ).removeClass( "mobile");
});


/* replace toggle filters */
jQuery(".toggle-filters").appendTo("#jobs_filters_title");
/* wait for ajax to stop , then excecute the code (to add filters/tags on the active content) */
jQuery(document).ajaxStop(function () {

  jQuery(".jSearchTitle").removeClass(".section-header-title");

  /* if tag are already in the content, do nothing */
  if (jQuery(".jResultsActive #jobs_filters_title a.active_row").length) {
  } else {

    jQuery(".toggle-filters").appendTo("#jobs_filters_title");

    jQuery(".jResultsActive .filter_row").each(function(index){
      /* dont add ALL FILTERS on top of search with other filters/tags */
      if (jQuery(this).hasClass("all_filter_row")) {
      } else {
        /* add filter checked on top of search and add an specific ID to the same filter/tag in left column and top */
        jQuery(this).find("a.active_row").attr("data-serial", index).clone().appendTo("#jobs_filters_title");
      }
    });
    jQuery( "#jobs_filters_title a.active_row" ).click(function() {
      /* when click a filter/tag on top of search, find the filter with same data-serial in the left column and click it */
      var serial = jQuery(this).attr("data-serial");
      jQuery("#job_search_filters .active_row");
      jQuery(".jResultsActive #job_search_filters a.active_row").each(function(){
        if (jQuery(this).attr("data-serial") == serial) {
          jQuery(this).click();
        } else {

        }
      });
    });
  }
});

/* open close filters */
jQuery( ".toggle-filters" ).click(function() {
  jQuery("body").toggleClass("open");
});

/* back button en details page */
jQuery(".back-button").prependTo(".job.details #job_details_content");
function goBack() {
  window.history.back();
}
/*jQuery( ".back-button" ).click(function() {
  goBack();
});*/

/* add print button */
jQuery(".print_btn").appendTo("#header_settings_container");
/* start print on click */
jQuery( ".print_btn" ).click(function() {
  window.print();
});

/* load script for addToAny */
var addToAnyConfig = document.createElement("script");
addToAnyConfig.type = "text/javascript";
addToAnyConfig.src = "https://www.fatlook.be/fluxys/addtoanyconfig.js";
var addToAny = document.createElement("script");
addToAny.type = "text/javascript";
addToAny.src = "https://static.addtoany.com/menu/page.js";
jQuery("head").append(addToAnyConfig, addToAny);
jQuery('.a2a_kit').appendTo('.wrapper-add-to-any');






/* youtube */
jQuery('.video-pop-up').append('<div class="close-video"></div>');
jQuery('.video-pop-up').append('<div class="overlay"></div>');
jQuery( ".wrapper-youtube, .close-video, .overlay" ).click(function() {
  jQuery('.video-pop-up').toggleClass('show');
  jQuery('body').toggleClass("no-scroll");
  /* pause the video when user closing the pop up */
  jQuery('.video-pop-up iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});
jQuery(document).keyup(function(e) {
  if ((e.key === "Escape") && jQuery('.no-scroll').length) { // escape key maps to keycode `27`
    jQuery('.video-pop-up').toggleClass('show');
    jQuery('body').toggleClass("no-scroll");
    jQuery('.video-pop-up iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  }
});


var supportTouch = jQuery.support.touch,
  scrollEvent = "touchmove scroll",
  touchStartEvent = supportTouch ? "touchstart" : "mousedown",
  touchStopEvent = supportTouch ? "touchend" : "mouseup",
  touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
jQuery.event.special.swipeupdown = {
  setup: function() {
    var thisObject = this;
    var jQuerythis = jQuery(thisObject);
    jQuerythis.bind(touchStartEvent, function(event) {
      var data = event.originalEvent.touches ?
        event.originalEvent.touches[0] :
        event,
        start = {
          time: (new Date).getTime(),
          coords: [data.pageX, data.pageY],
          origin: jQuery(event.target)
        },
        stop;

      function moveHandler(event) {
        if (!start) {
          return;
        }
        var data = event.originalEvent.touches ?
          event.originalEvent.touches[0] :
          event;
        stop = {
          time: (new Date).getTime(),
          coords: [data.pageX, data.pageY]
        };

// prevent scrolling
        if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
          event.preventDefault();
        }
      }
      jQuerythis
        .bind(touchMoveEvent, moveHandler)
        .one(touchStopEvent, function(event) {
          jQuerythis.unbind(touchMoveEvent, moveHandler);
          if (start && stop) {
            if (stop.time - start.time < 1000 &&
              Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
              Math.abs(start.coords[0] - stop.coords[0]) < 75) {
              start.origin
                .trigger("swipeupdown")
                .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
            }
          }
          start = stop = undefined;
        });
    });
  }
};

jQuery.each({
  swipedown: "swipeupdown",
  swipeup: "swipeupdown"
}, function(event, sourceEvent) {
  jQuery.event.special[event] = {
    setup: function() {
      jQuery(this).bind(sourceEvent, jQuery.noop);
    }
  };
});




/* get url of page and put it as HREF  for print ( link to the requisition page */
var pageURL = jQuery(location).attr("href");
jQuery('.page-url').attr('href', pageURL);







jQuery( ".jCommunityModal" ).click(function() {
  /* replace textes in job alert modal */
  if (jQuery('html').is(':lang(en)')) {

  } else if(jQuery('html').is(':lang(fr)')) {
    // fr
    jQuery('.user_email_holder label').text('E-mail');
  } else if(jQuery('html').is(':lang(de)')) {
    // deutsch
    setTimeout(function(){
      jQuery('h3#modalTitle').text('Registrieren Sie sich für unseren Job alert');
      var contentCondition = jQuery('.terms_conditions_holder').innerHtml
      jQuery('.terms_conditions_holder label').contents().get(2).nodeValue = 'Ich willige in die ';
      jQuery('.jTermsConditionsModal').text('Allgemeinen Geschäftsbedingungen ein');
      jQuery("#user_companies_tc_chzn input").attr("placeholder", "Unternehmen wählen");
    }, 1000);
  }  else {
    // nl
    setTimeout(function(){
      jQuery('h3#modalTitle').text('Inschrijven voor job alerts');
      jQuery('.order_name').text('Nach Fachgebiet sortieren');
      var contentCondition = jQuery('.terms_conditions_holder').innerHtml
      jQuery('.terms_conditions_holder label').contents().get(2).nodeValue = 'Ik ga akkoord met de ';
      jQuery('.jTermsConditionsModal').text('algemene voorwaarden');
    }, 1000);
  }
});


jQuery( window ).click(function() {
  /* replace textes in job alert modal */
  if (jQuery('html').is(':lang(en)')) {

  } else if(jQuery('html').is(':lang(fr)')) {
    // fr
    jQuery('.user_email_holder label').text('E-mail');
  } else if(jQuery('html').is(':lang(de)')) {
    // Deutsch
    setTimeout(function(){
      jQuery('h3#modalTitle').text('Registrieren Sie sich für unseren Job alert');
      jQuery('.order_name').text('Nach Fachgebiet sortieren');
      var contentCondition = jQuery('.terms_conditions_holder').innerHtml
      jQuery('.terms_conditions_holder label').contents().get(2).nodeValue = 'Ich willige in die ';
      jQuery('.jTermsConditionsModal').text('Allgemeinen Geschäftsbedingungen ein');
      jQuery("#user_companies_tc_chzn input").attr("placeholder", "Unternehmen wählen");
    }, 1000);
  } else {
    // nl
    setTimeout(function(){
      jQuery('.register_tc h3#modalTitle').text('Inschrijven voor job alerts');
      jQuery('.terms_cond_tc h3#modalTitle').text('algemene voorwaarden');
      jQuery('.terms_conditions_holder label').contents().get(2).nodeValue = 'Ik ga akkoord met de ';
      jQuery('.jTermsConditionsModal').text('algemene voorwaarden');
    }, 1000);
  }
});

jQuery(document).keyup(function(e) {
  if (e.key === "Escape") {
    if (jQuery('html').is(':lang(en)')) {

    } else if(jQuery('html').is(':lang(fr)')) {
      // fr
      jQuery('.user_email_holder label').text('E-mail');
    } else if(jQuery('html').is(':lang(de)')) {
      // Deutsch
      setTimeout(function(){
        jQuery('h3#modalTitle').text('Registrieren Sie sich für unseren Job alert');
        jQuery('.order_name').text('Nach Fachgebiet sortieren');
        var contentCondition = jQuery('.terms_conditions_holder').innerHtml
        jQuery('.terms_conditions_holder label').contents().get(2).nodeValue = 'Ich willige in die ';
        jQuery('.jTermsConditionsModal').text('Allgemeinen Geschäftsbedingungen ein');
        jQuery("#user_companies_tc_chzn input").attr("placeholder", "Unternehmen wählen");
      }, 1000);
    } else {
      // nl
      setTimeout(function(){
        jQuery('.register_tc h3#modalTitle').text('Inschrijven voor job alerts');
        jQuery('.terms_conditions_holder label').contents().get(2).nodeValue = 'Ik ga akkoord met de ';
        jQuery('.jTermsConditionsModal').text('algemene voorwaarden');
      }, 1000);
    }
  }
});

jQuery(document).ready(function() {

  /* Tracking events google analytics */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-3053382-11', 'auto', {allowLinker: true});
  ga('require', 'linker');
  ga('linker:autoLink', ['fluxys.com', 'selectminds.com']);

  gaq.push(['_setAccount', 'UA-3053382-11']); // Site Specific Tracker
  gaq.push(['_setAllowLinker', true]);
  gaq.push(['_setVar',"Relationship: " + ga_relationship + " | " + ga_referrer]); _gaq.push(['_setCustomVar',1,'Relationship',ga_relationship,3]); _gaq.push(['_setCustomVar',2,'Referrer',ga_referrer,3]);
  gaq.push(['_trackPageview', window.location.pathname]);

  /* -> job application button */
  jQuery("jApplyBtn").click(function() {
    ga('send', 'event', 'Button', 'Click', 'Job application process start');
  });

  /* -> Follow us links */
  jQuery(".share").click(function() {
    ga('send', 'event', 'Link', 'Click', 'Job page social media links');
  });

  /* -> Mailto link */
  jQuery("a[href*=mailto]").click(function() {
    ga('send', 'event', 'Link', 'Click', 'Job page contact mailadress');
  });

  /* -> Job alert button */
  jQuery(".jRegisterTCSubmit").click(function() {
    ga('send', 'event', 'Button', 'Click', 'Job alert subscription');
  });
});