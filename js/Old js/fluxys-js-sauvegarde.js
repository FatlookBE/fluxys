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
      currElement.href = 'https://stgfluxyssa.upgrade.selectminds.com/staging/jobs/search/1295';
    }
  }
}

if(!myApplyByEmailOnlyFound) {
  var imported = document.createElement('script');
  imported.src = 'https://objectstorage.eu-frankfurt-1.oraclecloud.com/n/frrdnn3p0fb7/b/oda-native-client-sdk-js-20.6.1/o/chatbot.js';
  document.head.appendChild(imported);
}

console.log('test');

// Luca Spinali -- 19/01/2020

//replace apply button in the header
jQuery(".job_details .info_box").appendTo(".btn-with-gradient");
//replace title in the header
jQuery(".job_details .content_header > .title").appendTo(".section-header-title");
// clone and place title on search
jQuery(".jSearchTitle").clone().appendTo(".section-header-title");
// remove the toggle before the location
jQuery(".job_details .content_header > .subtitle .loc_icon").remove();
// replace search fields in the header
jQuery("#search_hldr").appendTo(".block-search");

// keep only the location before the first coma
var locationList = jQuery(".primary_location a");
var locationListText = jQuery(locationList).text();
var locationArray = locationListText.split(',');
var locationFirstCell = locationArray[0];
var trimLocationFirstCell = jQuery.trim(locationFirstCell);
jQuery(locationList).text(trimLocationFirstCell + ' -');

// replace location in the header
jQuery(".job_details .content_header > .subtitle").appendTo(".section-header-more-informations");

// keep only the type of contract after ':' and not the title
var contractList = jQuery("#G105305010618");
var contractListText = jQuery(contractList).text();
var contractArray = contractListText.split(':');
var contractFirstCell = contractArray[1];
var trimContractFirstCell = jQuery.trim(contractFirstCell);
jQuery(contractList).text(trimContractFirstCell + ' -');

// replace Type of contract in the header
jQuery("#G105305010618").appendTo(".section-header-more-informations");
// add aria to job alert link on footer (who is lost when it is moved) to make the popup works
jQuery(".job-alert.jCommunityModal").attr("aria-haspopup", "true");

// same code than on desktop.js except selector (target only the link on footer
// make work promo_talent_community button on Job Details page
j$(".job-alert.jCommunityModal").unbind('click').click(function(event){
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


/* banner epic */
if (jQuery("#G130105010618").length) {
  // We take the textual value of the field which will impact on the display of the logo and we store it in a variable which will be used in the "cases" of the switch below
  var valueEpic = jQuery("#G130105010618").text();


  switch (valueEpic) {
    //The case = the text value for the Background Type field in the administration
    case 'Background Type: EPIC 1':
      // If you want another picture, just change the URL after
      jQuery(".fit-picture").attr("src", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-1.jpg").show("fade");

      break;

    case 'Background Type: EPIC 2':
      jQuery(".fit-picture").attr("src", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-3.jpg").show("fade");

      break;

    case 'Background Type: EPIC 3':
      jQuery(".fit-picture").attr("src", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-4.jpg").show("fade");

      break;
    // to add a new EPIC banner, just copy/paste from Case to break; and replace the value of the case with the new one and replace the URL

    // this banner image is shown if there is no matching value for Background Type
    default:
      jQuery(".fit-picture").attr("src", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-1.jpg").show("fade");

  }
} else {
  // if Background Type field don't exist, this banner image is shown by default
  jQuery(".fit-picture").attr("src", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-1.jpg").show("fade");
}

/* change logo according to field company value */
if (jQuery(".field_company .field_value").length) {
  // We take the textual value of the field which will impact on the display of the logo and we store it in a variable which will be used in the "cases" of the switch below
  var valueEpic = jQuery(".field_company .field_value").text();


  switch (valueEpic) {
    //The case = the text value for the Epic field in the administration
    case 'Fluxys':
      jQuery(".logo img").attr("src", "/media/client_67_s15_r0_v1611057436338_main.png").show("fade");

      break;

    case 'Dunkerque LNG':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/brand-outline_dunkerque-LNG-white.png").show("fade");

      break;

    case 'FluxSwiss':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/brand-outline_fluxswiss-white.png").show("fade");
      s
      break;

    case 'Fluxys Deutschland':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/brand-outline_fluxys_Deutschland-white.png").show("fade");

      break;

    case 'Fluxys TENP':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/brand-outline_fluxys_TENP-white.png").show("fade");

      break;

    case 'Gaz-Opale':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/brand-outline_gaz-opale-white.png").show("fade");

      break;

    case 'GMSL':
      jQuery(".logo img").attr("src", "/media/client_67_s15_r0_v1611057436338_main.png").show("fade");

      break;

    case 'Interconnector':
      jQuery(".logo img").attr("src", "/media/images/logos-affiliates/brand-outline_interconnector-white.png").show("fade");

      break;

    case 'Transitgaz':
      jQuery(".logo img").attr("src", "/media/client_67_s15_r0_v1611057436338_main.png").show("fade");

      break;
    // this logo is shown if there is no matching value for valueEpic
    default:
      jQuery(".logo img").attr("src", "/media/client_67_s15_r0_v1611057436338_main.png").show("fade");

  }
} else {
  // if field_company field don't exist, this logo is shown by default
  jQuery(".logo img").attr("src", "/media/client_67_s15_r0_v1611057436338_main.png").show("fade");
}

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
  jQuery(".job_details .jApplyBtn .btn_text").text("Postuler maintenant");
} else {
  // nl
  jQuery(".job_details .job-detail-intro").text("Vereist profiel : ");
  // replace text Apply by Apply now on the bottom of the page
  jQuery(".job_details .jApplyBtn .btn_text").text("Nu toepassen");
}


jQuery(".jFilterRowHldr .active_row .facet_name").clone().prepend("#job_results_list_hldr");