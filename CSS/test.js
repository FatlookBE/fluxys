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


.pod {
    /* margin-top: 105px; */
    max-width: 898px;
  }

.block_region.full-width {
    margin-bottom: 130px;
  }

  #nav_hldr {
    display: none;
  }

  #container #rocontent {
    width: 100%;
  }

  #content #job_details_content {
    margin-top: -120px;
    background: transparent;
  }

  #job_list {
    max-width: 899px;
    min-width: 300px;
  }

.job_list_row.jlr_Odd {
    min-width: 300px;
    background-color: white;
  }

.job_list_row jlr_Even {
    max-width: 650px;
    min-width: 300px;

  }

  #job_results_list_hldr, #job_no_results_list_hldr {
    max-width: 672px;
    min-width: 300px;
    float: left;
    margin-left: 9px;
    width: auto;
  }

.job_list #search_banner, .hidden_hero #search_banner {
    background-image: url(/media/images/banners-72ppi.jpg);
    background-repeat: no-repeat;
    height: 200px;
  }



.flg_filter_hldr {
    display: none;
  }

  #search_banner .search_positioner {
    background: none;
    box-shadow: none;
    /* padding: 145px 55px; */

  }

  #content .content_body {
    /* margin-top: 105px; */
  }

  #container .portal {
    width:100%;

  }

.search_btn {
    border-radius: 80rem;
    padding: 5px 11px;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #cb8801, #ab045e);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

.primary_btn, a.primary_btn, .generic_btn, a.generic_btn, .form_btn, a.form_btn {
    border-radius: 80rem;
    padding: 5px 11px;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #cb8801, #ab045e);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

.secondary_btn, a.secondary_btn, .gray_btn, a.gray_btn, .load_btn, a.load_btn {
    border-radius: 80rem;
    border: solid 3px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #90d5ac, #0185ca);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #fff inset !important;
  }
  secondary_btn:hover, a.secondary_btn:hover, .gray_btn:hover, a.gray_btn:hover, .load_btn, a.load_btn:hover {
    box-shadow: 2px 1000px 1px #fff inset, 0px 0px 13px -1px rgb(0 0 0 / 40%) !important;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #90d5ac, #0185ca);

  }
  div#job_details_content .main_content_box {
    max-width: none;
    min-width: 300px;
    width: auto;
  }

  #description_box.main_content_box   {
    min-width: 300px;
    width: auto;
  }

.footer_container {
    display:none;
  }

  #bottomBranding #footer .footer_container {
    display: block;
  }


.fluxys_links ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

.fluxys_links li {
    float: left;
  }


.fluxys_links li a {
    display: inline;
    text-align: center;
    padding-right: 16px;
    text-decoration: none;
  }

  div#tee_account_profile, div#tee_account_submissions {
    display: none;
  }

.job_list_row .jlr_right_hldr .flg_hldr .video_flg {
    background-image: none;
  }



  #header #header_container, #header_modular #header_container, body.taleo_biz #header_tbe #header_container, #header #header_settings_container, #header_modular #header_settings_container, body.taleo_biz #header_tbe #header_settings_container, #header_settings #header_container, #header_settings #header_settings_container, #footer .footer_container, #footer_modular .footer_container, #container {

    min-width: 300px;
  }




  /*************************************
   **************************************
   ***** luca Spinali -- 19/01/2020 *****
   **************************************
   *************************************/
  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  body.desktop #container {
    padding: 0 15px;
  }
  body.desktop.job_details #container {
    max-width: calc(100% - 30px);
  }
  body.no-scroll {
    overflow: hidden;
  }
.hide {
    display: none;
  }
  /*Font Proxima Nova */
  /*
   * The Typekit service used to deliver this font or fonts for use on websites
   * is provided by Adobe and is subject to these Terms of Use
   * http://www.adobe.com/products/eulas/tou_typekit. For font license
   * information, see the list below.
   *
   * proxima-nova:
   *   - http://typekit.com/eulas/000000000000000077359562
   *   - http://typekit.com/eulas/000000000000000077359558
   *   - http://typekit.com/eulas/000000000000000077359577
   *   - http://typekit.com/eulas/00000000000000007735957a
   * proxima-nova-condensed:
   *   - http://typekit.com/eulas/000000000000000077359555
   *   - http://typekit.com/eulas/00000000000000007735955c
   *   - http://typekit.com/eulas/00000000000000007735956b
   *   - http://typekit.com/eulas/00000000000000007735956e
   * proxima-nova-extra-condensed:
   *   - http://typekit.com/eulas/00000000000000007735954f
   *   - http://typekit.com/eulas/000000000000000077359556
   *   - http://typekit.com/eulas/000000000000000077359567
   *   - http://typekit.com/eulas/00000000000000007735956a
   *
   * © 2009-2020 Adobe Systems Incorporated. All Rights Reserved.
   */
  /*{"last_published":"2021-01-18 10:08:41 UTC"}*/



@font-face {
    font-family:"proxima-nova";
    src:url("https://use.typekit.net/af/98e3f6/000000000000000077359562/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/98e3f6/000000000000000077359562/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/98e3f6/000000000000000077359562/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:700;
  }

@font-face {
    font-family:"proxima-nova";
    src:url("https://use.typekit.net/af/624cab/000000000000000077359558/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/624cab/000000000000000077359558/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/624cab/000000000000000077359558/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:700;
  }

@font-face {
    font-family:"proxima-nova";
    src:url("https://use.typekit.net/af/d45b9a/000000000000000077359577/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/d45b9a/000000000000000077359577/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/d45b9a/000000000000000077359577/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:400;
  }

@font-face {
    font-family:"proxima-nova";
    src:url("https://use.typekit.net/af/6cc429/00000000000000007735957a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/6cc429/00000000000000007735957a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/6cc429/00000000000000007735957a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:400;
  }

@font-face {
    font-family:"proxima-nova-condensed";
    src:url("https://use.typekit.net/af/1aa497/000000000000000077359555/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/1aa497/000000000000000077359555/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/1aa497/000000000000000077359555/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:700;
  }

@font-face {
    font-family:"proxima-nova-condensed";
    src:url("https://use.typekit.net/af/c42914/00000000000000007735955c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/c42914/00000000000000007735955c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/c42914/00000000000000007735955c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:700;
  }

@font-face {
    font-family:"proxima-nova-condensed";
    src:url("https://use.typekit.net/af/ee884b/00000000000000007735956b/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/ee884b/00000000000000007735956b/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/ee884b/00000000000000007735956b/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:400;
  }

@font-face {
    font-family:"proxima-nova-condensed";
    src:url("https://use.typekit.net/af/d36e0e/00000000000000007735956e/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/d36e0e/00000000000000007735956e/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/d36e0e/00000000000000007735956e/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:400;
  }

@font-face {
    font-family:"proxima-nova-extra-condensed";
    src:url("https://use.typekit.net/af/88de78/00000000000000007735954f/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/88de78/00000000000000007735954f/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/88de78/00000000000000007735954f/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:700;
  }

@font-face {
    font-family:"proxima-nova-extra-condensed";
    src:url("https://use.typekit.net/af/8f0f9d/000000000000000077359556/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/8f0f9d/000000000000000077359556/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/8f0f9d/000000000000000077359556/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:700;
  }

@font-face {
    font-family:"proxima-nova-extra-condensed";
    src:url("https://use.typekit.net/af/d2b9f4/000000000000000077359567/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/d2b9f4/000000000000000077359567/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/d2b9f4/000000000000000077359567/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
    font-display:auto;font-style:italic;font-weight:400;
  }

@font-face {
    font-family:"proxima-nova-extra-condensed";
    src:url("https://use.typekit.net/af/b7df9a/00000000000000007735956a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/b7df9a/00000000000000007735956a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/b7df9a/00000000000000007735956a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:400;
  }

.tk-proxima-nova { font-family: "proxima-nova",sans-serif; }
.tk-proxima-nova-condensed { font-family: "proxima-nova-condensed",sans-serif; }
.tk-proxima-nova-extra-condensed { font-family: "proxima-nova-extra-condensed",sans-serif; }

*, input, select, textarea, button{
    font-family: "proxima-nova",sans-serif !important;
  }
  p, ul {
    color: #000;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 25px;
    position: relative;
  }
@media (max-width: 992px) {
    #body_wrapper {
      width: 100vw;
    }
  }
.job_details .block_region.full-width {
    margin-bottom: 70px;
  }
.job-detail-intro, .search-results {
    display: none !important;
  }
.job_details .job-detail-intro {
    /* the job detail intro is still working, give the value 'block' to the display property to have it again */
    display: none !important;
  }
.job_details .job-detail-intro .lang-hide{
    display: none;
  }
  html[lang=en] .job_details .job-detail-intro .lang-hide.en{
    display: block;
  }
  #content {
    width: 100% !important;
  }
  #job_details_content {
    border: none !important;
    padding: 40px 0 !important;
  }
  #job_details_content .main_content_box {
    max-width: none;
  }
.job_description, .v2 {
    display: flex;
    flex-wrap: wrap;
  }
.job_description a, .link-feel {
    color: #15234A !important;
    text-decoration: underline !important;
    cursor: pointer;
  }
.job_description a:hover, .link-feel:hover {
    text-decoration: none !important;
  }
  /* HEADER settings */
  #header_settings {
    background: transparent;
    border: none;
    box-shadow: none;
    position: relative;
    z-index: 1;
    top: 0 !important;
  }
@media (max-width: 992px) {
    #header_settings {
      transform: translateY(230px);
      display: flex;
      justify-content: center;
    }
  }
  #header_settings_container {
    display: flex;
  }
@media (max-width: 992px){
    #header_settings_container {
      display: flex !important;
      justify-content: center;
    }
  }
  #header_settings_container .jJobLangDisabledMsg {
    color: #ffffff;
  }
.job_lang_disabled_msg {
    position: absolute !important;
    max-width: 70% !important;
    top: 100%;
  }
  #header_settings_language {
    padding-left: 0 !important;
  }
  #job_available_locales_loop {
    max-width: 158px !important;
  }

  #header_settings_container  #key_name_hldr {
    width: auto;
    font-family: "proxima-nova", sans-serif;
  }
.gray_btn {
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgba(0,193,213,1), rgba(181,189,0,1)) !important;
    font-family: "proxima-nova", sans-serif;
    box-shadow: 2px 1000px 1px #fff inset !important;
  }
.gray_btn:hover {
    box-shadow: 2px 1000px 1px #fff inset, 0px 0px 13px -1px rgb(0 0 0 / 40%);
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(-101deg, rgba(0,193,213,1), rgba(181,189,0,1)) !important;
    background-origin: border-box !important;
  }
  /* select */
.chzn-single {
    border-radius: 50px !important;
    border: 3px solid transparent !important;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgba(0,193,213,1), rgba(181,189,0,1)) !important;
    background-origin: border-box !important;
    background-clip: content-box, border-box !important;
    box-shadow: 2px 1000px 1px #fff inset !important;
    color: #444444 !important;
  }
@media (max-width: 992px) {
  .globus {
      display: none !important;
    }
  .locale_select {
      border-radius: 50px !important;
      border: 3px solid transparent !important;
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgba(0,193,213,1), rgba(181,189,0,1)) !important;
      background-origin: border-box !important;
      background-clip: content-box, border-box !important;
      box-shadow: 2px 1000px 1px #fff inset !important;
      color: #444444 !important;
      margin-top: 2px;
      padding: 2px 11px;
    }
  }
.chzn-single span {
    color: #444444 !important;
  }
  /* arrow */
.chzn-container-single .chzn-single div b {
    background: url(/images/chosen_sprite.png) !important;
    transform: scale(1.2) translateY(2px);
  }
.chzn-single-with-drop {
    border-radius: 10px 10px 0 0 !important;
    border-bottom: none !important;
    font-family: "proxima-nova", sans-serif;
  }
.chzn-container .chzn-results li {
    font-family: "proxima-nova", sans-serif;
    font-size: 16px;
  }
.chzn-container .chzn-results li.highlighted {
    background: linear-gradient(90deg, rgba(0,193,213,1) 0%, rgba(181,189,0,1) 100%) !important;
  }
  /* dropdown */
  #header_settings_container .chzn-drop {
    left: 0px;
    top: 23px !important;
    z-index: -1 !important;
    border-width: 3px !important;
    border-style: solid !important;
    border-color: rgb(255, 255, 255) transparent transparent !important;
    border-image: initial !important;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, rgba(0,193,213,1), rgba(181,189,0,1)) !important;
    background-origin: border-box !important;
    background-clip: content-box, border-box !important;
    box-shadow: rgb(255, 255, 255) 2px 1000px 1px inset !important;
    border-radius: 0 0 10px 10px !important;
  }
  #header_settings_container .chzn-drop ul:focus {
    outline: none !important;
  }
.user_drop_area .key_menu_icn {
    border-color: #fff rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) !important;
  }
.user_drop_area .key_name {
    color: #fff;
  }
  /* HEADER */
  #topBranding .print_btn {
    display: none;
  }
  #header_settings .print_btn a {
    float: left;
    padding: 5px 11px;
    margin: 2px 0 0 0;
    align-items: center;
    display: none;
  }

.job_details #header_settings .print_btn a {
    display: flex;
  }
  #content .content_body .content_header {
    margin-bottom: 0;
  }
  #content .content_body .content_header .jSearchSubtitle {
    display: none;
  }
@media (max-width: 992px) {
    #content .content_body#job_list .content_header .title {
      padding-left: 25px;
      padding-top: 10px;
    }
  }
.jHeader {
    box-shadow: none !important;
    border: none !important;
  }
  #topBranding {
    height: 500px;
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    width: 100%;
    position: relative;
    margin-top: -45px;
    overflow: hidden;
  }
@media (max-width: 992px) {
    #topBranding {
      height: 900px;
      margin-top: -48px;
    }

  }
  #topBranding .container {
    width: 960px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  }
@media (max-width: 992px) {
    #topBranding .container {
      padding-left: 20px;
      width: 100%;
    }
  }
  #topBranding .section-header-intro {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
  }
  #topBranding .section-header-title h1, #topBranding .section-header-title-search h1{
    font-size: 80px;
    color: #fff;
    font-weight: bold;
    font-family: "proxima-nova",sans-serif;
    margin: 15px 0 15px 0;
  }

@media (max-width: 992px) {
  .job_list #topBranding .section-header-title h1, .job_list #topBranding .section-header-title-search h1 {
      position: relative;
      top: -75px;
    }
  }
@media (max-width: 992px) {
    #topBranding .section-header-title h1, #topBranding .section-header-title-search h1 {
      font-size: 30px;
      position: relative;
      top: -75px;
    }
  }
.job_details .content_header > .title {
    /* used for print */
    display: none;
  }
.double-lines-decoration{
    width: 70px;
  }
.job_list .double-lines-decoration{
    display: none;
  }
  body:not(.job_details) .double-lines-decoration{
    margin-bottom: 25px;
    margin-top: 25px;
  }
  #topBranding .section-header-title span, #topBranding .section-header-title-search span {
    display: none;
  }
  #topBranding .section-header-more-informations, .content_header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
.content_header {
    margin-top: -40px
  }
  #topBranding .section-header-more-informations .subtitle, .content_header .subtitle{
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    font-family: "proxima-nova",sans-serif;
  }
  #topBranding .section-header-more-informations a, .content_header a, #topBranding .section-header-more-informations label, .content_header label {
    font-size: 22px;
    color: #fff;
    font-family: "proxima-nova",sans-serif;
    display: inline-block;
    margin-right: 5px;
  }
.content_header a, .content_header label {
    color: #15234a;
  }
.additional_locations, .additional_locations_toggle {
    display: none;
  }
.custom-job-detail #job_details_content {
    margin-top: 0;
  }
  #topBranding .section-header-more-informations a, .content_header  a{
    margin-right: 5px;
    pointer-events: none;
  }
  #topBranding .section-header-more-informations span, .content_header span{
    display: none;
  }
  #topBranding .section-header-more-informations .flg_hldr, .content_header .flg_hldr {
    display: none;
  }
  span.field_value.job-id {
    display: inline-block !important;
    font-size: 22px;
    color: #fff;
    font-family: "proxima-nova",sans-serif;
    margin-right: 5px;
  }
.job_details .content_header .section-header-more-informations {
    /* used for print version */
    display: none;
  }
  #topBranding img.fit-picture {
    position: absolute;
    z-index: -1;
    display: none;
  }
@media (max-width: 992px) {
    #topBranding img.fit-picture {
      top: 2px
    }
  }
  #logo_hldr {
    position: absolute;
    right: 0px;
    top: 0px;
    overflow: hidden;
  }
  /* shape behind the company logo in the header */
  #logo_hldr .logo {
    display: flex !important;
    align-items: center;
    justify-content: center;
    position: relative;
    right: -75px;
    top: -75px;
    width: 428px;
    height: 272px !important;
    background-image: url(/media/images/campaign/vorm4-header.png);
    background-size: contain;
  }
  #logo_hldr .logo img {
    max-height: initial !important;
    max-width: 190px !important;
    transform: translate(10px , 20px);
    opacity: 0;
  }

.content_header #logo_inner {
    display: none;
  }

  /* title without background // full width of the page  */
.title-section-big {
    font-family: "proxima-nova",sans-serif;
    flex-basis: 100%;
    font-size: 35px;
    font-weight: 900;
    color: #15234A;
    line-height: initial;
    margin-bottom: 15px;
    clear: both;
  }
  #bottomBranding .title-section-big, #bottomBranding .title-section {
    margin-top: 100px;
  }
@media (max-width: 992px) {
    #bottomBranding {
      padding-bottom: 50px;
    }
  }

  /* wrapper content */
  #content {
    padding: 0 !important;
  }
  /* paragraph text full width */
.text-full-width {
    flex-basis: 100% !important;
  }

  /* section with text or list or whatever 80% width. Place right under a title with background*/
  /*.content-next-to-title-with-background {
      flex-basis: 80%;
  }*/
  /* emphase text with gradient Turquoise to chartreuse */
.text-emphasis-gradient {
    background: rgb(0,193,213);
    background: linear-gradient(90deg, rgba(0,193,213,1) 0%, rgba(181,189,0,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    font-family: 'proxima-nova', sans-serif;
  }

  /* quote */
.quote {
    margin-top: 75px;
    padding: 15px 0;
    flex-basis: 100%;
    display: flex;
    background-color: #e6f1ed;
    position: relative;
  }
@media (max-width: 992px) {
  .quote {
      margin-top: 25px;
      margin-bottom: 25px;
      padding: 30px 0;
      flex-basis: 100%;
    }
  }
.quote:before, .quote:after {
    content: '';
    height: 100%;
    position: absolute;
    background-color: #e6f1ed;
    top: 0;
    width: 100vw;
    left: -100vw;
  }
.quote:after {
    right: -100vw;
    left: initial;
  }
.quote .quote-inner-wrapper {
    display: flex;
    justify-content: center;
    flex-basis: 100%;
  }
.quote-text-wrapper{
    flex-basis: 400px;
    margin-right: 40px;
  }
@media (max-width: 992px) {
  .quote-text-wrapper{
      flex-basis: 100%;
      margin-right: 0px;
    }
  }
.quote-text-wrapper .quote-text {
    position: relative;
    color: #15234A;
    font-size: 30px;
    line-height: 30px;
    flex-basis: 20%;
    margin-top: 67px;
    z-index: 0;
    font-weight: bold;
    font-family: "proxima-nova",sans-serif;
  }
@media (max-width: 992px) {
  .quote-text-wrapper .quote-text {
      margin-top: 0;
      font-size: 18px;
      flex-basis: 100%;
    }
  }
.quote-text-wrapper img {
    position: absolute;
    z-index: -1;
    top: -46px;
    left: -70px;
    width: 85px;
  }
@media (max-width: 992px) {
  .quote-text-wrapper img {
      top: -13px;
      left: -5px;
      width: 30px;
    }
  }
.quote-text-person {
    margin-top: 25px;
    font-size: 20px;
    color: #15234A;
  }
@media (max-width: 992px) {
  .quote-text-person {
      font-size: 16px;
      flex-basis: 100%;
      margin-top: 15px;
    }
  }
.quote-img-person img {
    width: 220px;
  }
@media (max-width: 992px) {
  .quote-img-person {
    }
  .quote-img-person img {
      width: 120px;
    }
  }
  /* title with background */
.v2 .title-section-with-background {
    position: relative;
    color: #15234A;
    font-size: 30px;
    line-height: 30px;
    flex-basis: 100%;
    margin-top: 45px;
    z-index: 0;
    font-weight: bold;
    font-family: "proxima-nova",sans-serif;
    margin-bottom: 40px;
  }
.title-section-with-background, .title-section {
    position: relative;
    color: #15234A;
    font-size: 30px;
    line-height: 30px;
    flex-basis: 20%;
    margin-top: 100px;
    z-index: 0;
    font-weight: bold;
    font-family: "proxima-nova",sans-serif;
  }

@media (max-width: 992px) {
  .title-section-with-background {
      position: relative;
      color: #15234A;
      font-size: 30px;
      line-height: 30px;
      flex-basis: 100%;
      margin-top: 45px;
      z-index: 0;
      font-weight: bold;
      font-family: "proxima-nova",sans-serif;
      margin-bottom: 40px;
    }
  }
.title-section-with-background img {
    position: absolute;
    width: 100px;
    height: 98px;
    background-image: url(/media/images/campaign/vorm5-titels.png);
    background-size: contain;
    z-index: -1;
    left: -40px;
    top: -15px;
  }
  /*.v2 .title-section-with-background:before {
      content: "";
      display: block;
      position: absolute;
      width: 100px;
      height: 98px;
      background-image: url(/media/images/campaign/vorm5-titels.png);
      background-size: contain;
      z-index: -1;
      left: -40px;
      top: -35px;
  }

  .title-section-with-background:before {
      content: "";
      display: block;
      position: absolute;
      width: 100px;
      height: 98px;
      background-image: url(/media/images/campaign/vorm5-titels.png);
      background-size: contain;
      z-index: -1;
      left: -40px;
      top: -15px;
  }*/
@media (max-width: 992px) {
  .title-section-with-background:before {
      content: "";
      display: block;
      position: absolute;
      width: 100px;
      height: 98px;
      background-image: url(/media/images/campaign/vorm5-titels.png);
      background-size: contain;
      z-index: -1;
      left: -40px;
      top: -35px;
    }
  }
.v2 .title-section-with-background-inner {
    position: relative;
    width: 100%;
  }
.title-section-with-background-inner {
    position: absolute;
    width: 80%;
  }
@media (max-width: 992px) {
  .title-section-with-background-inner {
      position: relative;
      width: 100%;
    }
  }
  /* content no full width align on right */
.v2 .list, .v2 .title-in-content, .v2 .text-with-title {
    flex-basis: 100%;
    padding-left: 0 !important;
  }
.list, .title-in-content, .text-with-title {
    flex-basis: calc(80% - 15px);
    padding-left: calc(20% + 15px) !important;
  }
@media (max-width: 992px) {
  .list, .title-in-content, .text-with-title {
      flex-basis: 100%;
      padding-left: 0 !important;
    }
  }

  /* title ine the content */
.title-in-content {
    position: relative;
    font-size: 20px;
    color: #000;
    font-weight: 600;
  }
  /* list first level */
.list {
    margin-left: 15px;
  }
  /* list second level */
.list .nested-list {
    padding-left: 50px !important;
    margin-bottom: 0;
  }
.list .nested-list li {
    list-style-type: none !important;
  }
.list .nested-list li:before {
    content:"- ";
  }

  /* apply btn */
.jApplyBtn{
    border: none;
    text-shadow: none;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.1px;
    font-family: 'proxima-nova', sans-serif;
    background: rgb(0,193,213);
    background: linear-gradient(90deg, rgba(0,193,213,1) 0%, rgba(181,189,0,1) 100%);
    box-shadow: none;
    color: #ffffff !important;
    cursor: pointer;
    min-height: 55px;
  }
.v2 .jApplyBtn {
    background: linear-gradient(100deg , #aa0061, #cc8a00);
  }
.jApplyBtn:hover {
    -webkit-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.4);
    background: linear-gradient(-90deg, rgba(0,193,213,1) 0%, rgba(181,189,0,1) 100%);
  }
.v2 .jApplyBtn:hover {
    background: linear-gradient(100deg , #cc8a00, #aa0061);
  }
.info_box .jApplyBtn {
    box-shadow: none !important;
  }
.apply-btn .hide {
    display: none;
  }

  /* section with big image in background */
.big-image-background {
    position: relative;
    z-index:0;
    margin-top: 200px;
  }
.big-image-background:before {
    content: "";
    display: block;
    position: absolute;
    width: 636px;
    height: 432px;
    background-image: url(/media/images/campaign/vorm6-C2A.png);
    z-index: -1;
    background-size: contain;
    top: -100px;
    right: 45px;
  }

  /* CTA with icons */
.cta-with-icon {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    flex-basis: 130px;
    padding-right: 25px;
    text-align: center;
    color: #15234A;
  }
@media (max-width: 992px) {
  .cta-with-icon {
      flex: 1 0 auto;
    }
  }
.cta-with-icon:before {
    content: "";
    display: block;
    width: 56px;
    height: 56px;
    background-size: contain;
    display: none /* images are now on html */;
  }
.v2 .cta-with-icon.first {
    padding-left: 0 !important;
  }
.cta-with-icon.first {
    padding-left: calc(20% + 15px) !important;
  }
@media (max-width: 992px) {
  .cta-with-icon.first {
      padding-left: 0 !important;
    }
  }
.cta-with-icon.opportunities {
    flex-basis: 205px;
  }

  /* small text */
.small-text {
    font-size: 16px;
  }
  /* big text */
.big-text {
    font-size: 22px;
    line-height: 26px;
  }

  /*footer*/

  /* show the good footer */
.show-on-search, .hide-on-search {
  }
.job_list .show-on-search {
    display: block;
    background-color: #15234A;
    padding: 40px 15px !important;
  }
.job_list .hide-on-search {
    display: none;
  }
.job_list .show-on-search ul.footer-links{
    display: flex;
    justify-content: center;
    padding-left: 0;
  }
.job_list .show-on-search ul.footer-links li{
    margin-right: 5px;
    color: #fff;
  }
.job_list .show-on-search ul.footer-links li:last-child{
    margin-right: 0px;
  }
.job_list .show-on-search ul.footer-links li a {
    color: #fff;
    font-weight: bold;
    text-decoration: underline;
  }
.job_list .show-on-search ul.footer-links li a:hover {
    text-decoration: none;
  }
.job_list .show-on-search .credits {
    display: flex;
    justify-content: center;
    color: #fff;
  }
  #footer_content {
    width: 100% !important;
  }
@media (max-width: 992px) {
    #footer_content {
      width: calc(100vw - 60px) !important;
      margin: 0;
      padding: 30px;
    }
  }
.jFooter {
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
    margin-top: -30px !important;
    height: auto !important;
  }
.footer_container {
    padding: 15px 0 !important;
  }

.footer-bottom {
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    margin-top: 150px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }
@media (max-width: 992px) {
  .footer-bottom {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row-reverse;
      width: 100%;
    }
  }
.footer-bottom .share-and-policy {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-basis: 100%;
  }
@media (max-width: 992px) {
  .footer-bottom .share-and-policy {
      margin-top: 15px;
      justify-content: flex-start;
      flex-basis: 100%;
      flex-direction: row;
    }
  }
.footer-bottom .share-and-policy .a2a_kit{
    margin-right: 15px;
  }
@media (max-width: 992px) {
  .footer-bottom .share-and-policy .a2a_kit{
      margin-right: 0px;
      margin-bottom: 15px;
    }
  }

.credits-year {
    margin-right: 5px;
  }
  /* social icon on footer */
.share {
    width: 25px;
    height: 25px;
    display: inline-block;
    background-size: contain;
    margin-left: 15px;
    background-repeat: no-repeat;
  }
.share.linkedin {
    background-image:url(/media/images/campaign/linkedin.png);
  }
.share.twitter{
    background-image:url(/media/images/campaign/twitter.png);
  }
.vertical-align-center {
    display:flex;
    align-items: center;
  }

  /* addtoany */
.a2a_dd {
    font-size: 21px;
  }
.a2a_dd:hover {
    text-decoration: none !important;
  }
.a2a_dd span {
    display: none;
  }

.a2a_svg {
    background-color: #15234a !important;
    border-radius: 100% !important;
    padding: 3px !important;

  }
.share-job-add-ton-any {
    position: relative;
  }
.share-job-add-ton-any:hover .wrapper-add-to-any   {
    pointer-events: initial;
    opacity: 1;
    transform: translateX(-50%) translateY(0px);
  }
.wrapper-add-to-any {
    display:flex;
    position: absolute;
    background-color: #e6f1ed;
    padding: 7px 15px;
    border-radius: 50px;
    z-index: 1;
    left: 0;
    width: 345px;
    justify-content: center;
    top: calc(100% + 15px);
    margin-left: 50%;
    pointer-events: none;
    opacity: 0;
    transform:translateX(-50%) translateY(-10px);
    transition: all 0.6s ease;
  }
.wrapper-add-to-any:before {
    content:"";
    position: absolute;
    top: -20px;
    width: 0;
    height: 0;
    display: inline-block;
    border: 10px solid transparent;
    border-bottom-color: #e6f1ed;
  }
  span.wrapper-add-to-any:after {
    content: "";
    background-color: transparent;
    width: 100%;
    height: 50px;
    position: absolute;
    display: block;
    z-index: -1;
    top: -30px;
  }
@media (max-width: 768px) {
  .wrapper-add-to-any {
      bottom: 10px;
      left: 10px;
      right: 10px;
      z-index: 1000000000;
      transform: none !important;
      margin: 0;
      position: fixed;
      top: inherit;
    }
  .wrapper-add-to-any:before {
      width: 100vw;
      height: 100vw;
      background-color: #e6f1ed;
      z-index: -1;
      right: 0;
      left: -10px;
    }
  }
.a2a_default_style a {
    padding: 0 10px !important;
  }

  /* Fluxys baseline */
.fluxys-baseline {
    text-align: right;
    background: linear-gradient(90deg, rgba(0,193,213,1) 0%, rgba(181,189,0,1) 100%) !important;
    -webkit-background-clip: text !important;
  }
@media (max-width: 992px) {
  .fluxys-baseline {
      flex-basis: 100%;
    }
  }
  /* hide other element than apply button on info-box */
.info_box {
    margin: 0 !important;
  }
.info_box_fields, #refer_btn, #join_tc_btn {
    display: none;
  }
.info_btn_box {
    background: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  /* search page */
.jobs_results #topBranding .container {
    width: 940px;
    margin: 0 auto;
  }
@media (max-width: 992px) {
  .jobs_results #topBranding .container {
      width: calc(100vw - 30px);
      padding-left: 15px !important;
    }
  }

.job_results .double-lines-decoration {
    margin-bottom: 25px;
  }
.jobs_results .search-results {
    display: block !important;
  }
.jobs_results .section-header-title, .job_list .section-header-title, .job_details .section-header-title-search, .portal .section-header-title {
    display: none;
  }

  /* dropdown search header */
.search_input_hldr {
    position: relative
  }
.search_input_hldr ul.facetsearch{
    width: 100% !important;
    left: 0 !important;
    border: none !important;
    background: white;
    border-radius: 10px !important;
    top: 100% !important;
    margin-top: 5px;
    box-shadow: none !important;
    box-shadow: 0px 0px 13px -1px rgb(0 0 0 / 40%);
  }
.search_input_hldr .facetsearch li {
    background-color: rgb(244, 250, 246);
    box-shadow: none !important;
  }
.search_input_hldr .facetsearch li:first-child {
    border-radius: 10px 10px 0 0;
  }
.search_input_hldr .facetsearch li:last-child {
    border-radius: 0 0 10px 10px;
  }
.search_input_hldr .facetsearch li:hover {
    background-color: rgb(0,193,213);
  }
.search_input_hldr .facetsearch li a{
    padding: 10px !important;

  }
.search_input_hldr .facetsearch li a.ui-state-active{
    border: none !important;
    background: none !important;
  }
.search_input_hldr .facetsearch li:hover a{
    background-color: transparent;
  }

  /* hide additional infos */
.job_inside_info{
    display: none !important;
  }

  /* hide right bar */
  #right_bar {
    display: none;
  }

.text-center {
    text-align: center;
  }

.d-block {
    display: block;
  }

  /* search */

  #job_search_filters {
    width: 250px;
    margin-right: 25px;
  }
  #job_list {
    max-width: 960px;
    padding: 10px !important;
    border: none !important;
  }
@media (max-width: 992px) {
    #jobs_filters_area {
      display: flex;
    }
  .job_list #header_container {
      padding: 0 !important;
    }
  .job_list #header_container .menu_toggle_hldr {
      display: none !important;
    }
    body #job_list {
      padding: 0 !important;
    }
  .job_list #container {
      margin: 0 !important;
      padding: 0 !important;
    }
  .job_list #search_hldr, #search_hldr.hidden_hero {
      height: auto !important;
    }
  .job_list .block_region.full-width {
      margin-bottom: 0;
      display: none;
    }
  }
.job_list .block_region.full-width {
    margin-bottom: 0;
  }
.block-search > span {
    display: none;
  }
.jSearchBorder {
    display: none !important;
  }
.block-search .jSearchPositioner {
    padding: 0 !important;
    height: auto !important;
    display: flex;
    justify-content: space-between;
  }
@media (max-width: 992px) {
  .block-search .jSearchPositioner {
      display: flex;
      flex-direction: column;
      width: calc(100vw - 15px);
    }
  .block-search .jSearchPositioner form {
      margin-bottom: 25px;
    }
  }
.block-search .jSearchHldr {
    margin-top: 25px;
    margin-bottom: 100px;
    height: 50px !important;
  }
.block-search #search_banner {
    background: none;
    border: none;
    box-shadow: none;
    height: auto !important;
  }
.block-search #search_hldr .search_fixed {
    top: 0 !important;
    width: 100vw !important;
    display: flex;
    left: 0;
    height: 80px !important;
    justify-content: center;
    align-items: center;
    border: 0px solid transparent !important;
    background-color: #f4faf6 !important;
    -webkit-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.4) !important;
    -moz-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.4) !important;
    box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.4) !important;
  }
@media (max-width: 992px) {
  .block-search #search_hldr .search_fixed {
      position: relative !important;
      width: auto !important;
      height: auto!important;
      background: none !important;
    }
  }
.block-search #search_banner .location_input_hldr {
    position: relative !important;
    left: initial !important;
  }
.block-search #search_banner .jSearchInputHldr {
    height: 50px;
    border-radius: 50px;
    border: none;
    display: flex;
    align-items: center;
    width: 100%;
  }
.block-search #search_banner .search_btn_hldr .search_btn {
    height: 50px;
    border-radius: 50px;
    border: none;
    text-shadow: none;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.1px;
    font-family: 'proxima-nova', sans-serif;
    background: linear-gradient(90deg, rgba(0,193,213,1) 0%, rgba(181,189,0,1) 100%);
    transition:all 0.4s ease;
  }
.block-search #search_banner .search_btn_hldr .search_btn:hover {
    -webkit-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 13px -1px rgba(0,0,0,0.4);
    background: linear-gradient(-90deg, rgba(0,193,213,1) 0%, rgba(181,189,0,1) 100%);
  }
.block-search #search_banner .search_separator {
    display: none;
  }
.block-search #search_banner form {
    flex-basis: auto;
    flex-grow: 1;
    padding-right: 25px;
  }
@media (max-width: 992px) {
  .block-search #search_banner form {
      padding-right: 25px;
    }
  }
.block-search #search_banner .search_input {
    padding-left: 25px;
    font-size: 18px;
    font-family: "proxima-nova", sans-serif;
    width: 90% !important;
  }
.block-search #search_banner .search_input:focus {
    box-shadow: none !important;
  }
.block-search #search_banner .search_input_icn {
    font-size: 0;
    background-image: url(/media/images/campaign/search-icon.png);
    background-position: center;
    background-repeat: no-repeat;
    height: 42px;
    width: 33px;
    background-size: contain;
    transform: translateX(10px);
  }
.block-search #search_banner .location_input_hldr  .search_input_icn {
    background-image: url(/media/images/campaign/location-icon.svg);
    height: 43px;
    width: 37px;
    transform: translateX(10px);
  }
  /* filters */
.toggle-filters {
    opacity: 0 !important;
    pointer-events: none !important;
  }
@media (max-width: 992px) {
  .toggle-filters {
      opacity: 1 !important;
      pointer-events: initial !important;
    }
  }
.job_details .toggle-filters {
    display: none !important;
  }
.toggle-filters {
    opacity: 1;
    pointer-events: initial;
    cursor: pointer;
    color: #15234A;
    font-weight: bold;
    display: flex;
    position: relative;
    padding-left: 25px;
    margin-bottom: 20px;
  }
.toggle-filters .toggle-icon {
    background: #15234A;
    display: block;
    width: 20px;
    height: 4px;
    position: relative;
    border-radius: 2px;
    font-size: 0;
    margin-right: 5px;
    position: absolute;
    top:0;
    left:0;
    transition: top 0.4s, transform 0.3s, opacity 0s;
    transition-delay: 0.3s, 0s, 0.3s;
    border-radius: 5px;
  }
.open .toggle-filters .toggle-icon {
    top: 7px;
    opacity: 0;
    transition-delay: 0s, 0.4s, 0.4s;
  }
.toggle-filters:before, .toggle-filters:after {
    background: #15234A;
    content: '';
    display: block;
    width: 20px;
    height: 4px;
    border-radius: 2px;
    position: absolute;
    top: 7px;
    left: 0;
    transition: top 0.4s, transform 0.3s;
    transition-delay: 0.3s, 0s;
    border-radius: 5px;
  }
.open .toggle-filters:before{
    top: 7px;
    transform: rotateZ(-45deg);
    transition-delay: 0s, 0.4s;
  }
.toggle-filters:after {
    top: 14px;
  }
.open .toggle-filters:after {
    top: 7px;
    transform: rotateZ(45deg);
    transition-delay: 0s, 0.4s;
  }
.toggle-filters .toggle-icon:before{
    transform: translateY(7px);
  }
.toggle-filters .toggle-icon:after {
    transform: translateY(11px);
  }
.jJobSearchFilters {
    background-color: #f4faf6 !important;
    padding: 10px;
  }
@media (max-width: 992px) {
  .jJobSearchFilters, .jJobResultsListHldr {
      transform: translate(-280px);
      width: 250px;
      margin-right: 25px;
      position: absolute;
      transition: all 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)
    }
  .jJobResultsListHldr {
      width: 100vw;
      position: relative;
    }
  .open .jJobSearchFilters, .open .jJobResultsListHldr {
      transform: translate(0px);
    }
  }

.filter_hldr {
    border: none;
    background: transparent;
  }
.filter_hldr .filter_row {
    border-top: 1px solid #efefef;
    cursor: pointer;
    box-shadow: none;
  }
.filter_title {
    font-family: 'proxima-nova', sans-serif;
    text-shadow: none;
    font-weight: bold;
    color: #1c1e4e;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    font-size: 18px !important;
    position: relative;
  }
.filter_hldr .filter_title .facet_name:focus{
    outline: none;
  }
.filter_title .row_icon {
    position: absolute;
    float: right;
    background-color: transparent;
    background-image: url(/media/images/campaign/accordion.png);
    background-position: center;
    background-repeat: no-repeat;
    height: 30px;
    width: 30px;
    background-size: contain;
    transform: scale(1.5) translate(4px, -5px);
    right: 0;
    transition: all 0.4s ease;
  }
.filter_hldr.jCollapsedHolder .filter_title .row_icon {
    position: absolute;
    float: right;
    background-color: transparent;
    background-image: url(/media/images/campaign/accordion.png);
    background-position: center;
    background-repeat: no-repeat;
    height: 30px;
    width: 30px;
    background-size: contain;
    transform: scale(1.5) translate(4px, -5px) rotate(180deg);
    right: 0;
    transition: all 0.4s ease;

  }
.filter_hldr .filter_row .filter_row_link {
    font-family: "proxima-nova", sans-serif;
    text-shadow: none;
    font-size: 16px !important;
    border: none !important;
  }
.filter_hldr .filter_row .filter_row_link .facet_name{
    width: 210px !important;
  }
.filter_hldr .filter_row .filter_row_link.jFacetViewMore .facet_name {
    font-weight: bold;
    color: #15234A;
    margin-bottom: 25px;
    text-transform: lowercase;
  }
.filter_hldr .filter_row .filter_row_link.jFacetViewMore .facet_name:first-letter {
    text-transform: uppercase;
  }
  /* Filters on top */
  #job_results_list_hldr .facet_name {
    width: auto;
    padding: 5px 10px;
    background-color: #f4faf6 !important;
    border-radius: 100px;
    color: #15234a;
    font-size: 13px;
    margin-right: 10px;
    margin-bottom: 10px;
    display: flex;
    transition: all 0.4s ease;
  }
  #job_results_list_hldr .facet_name:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 5px -1px rgb(0 0 0 / 10%);
  }
  #job_results_list_hldr .facet_name:before {
    content: '';
    width: 11px;
    height: 11px;
    background: url(/media/images/campaign/close-icon-blue.png) no-repeat transparent;
    background-size: contain;
    display: block;
    margin-right: 5px;
  }
  #job_results_list_hldr .row_icon {
    display: none;
  }
.filter_row_link:hover .row_icon {
    background-image:url(/media/images/campaign/check-grey.png);
    height: 17px;
    width: 21px;
    background-size: cover;
    transform: scale(1.5);
    background-position: 5px;
  }
.filter_row_link.active_row .row_icon {
    background-image:url(/media/images/campaign/check-blue.png);
    height: 17px;
    width: 21px;
    background-size: cover;
    transform: scale(1.5);
    background-position: 5px;
  }
.filter_row_link.active_row:hover .row_icon {
    background-image:url(/media/images/campaign/check-blue-remove-filter.png);
    height: 17px;
    width: 21px;
    background-size: cover;
    transform: scale(1.5);
    background-position: 5px;
  }
  #job_results_list_hldr, #job_no_results_list_hldr {
    max-width: auto;
    width: calc(100% - 304px);
    max-width: calc(100vw - 60px) !important;
  }
@media (max-width: 992px) {
    #job_results_list_hldr, #job_no_results_list_hldr {
      flex-basis: calc(100vw - 25px) !important;
      left: 300px;
    }
  }
.facet_add_keywords input.jAddFacet {
    background-color: #fcfcfc;
    color: #828282;
    width: calc(100% - 41px);
    border-radius: 50px;
    border: none;
    margin: 15px 0 15px 0;
    box-shadow: none;
    padding-left: 35px;
    font-size: 16px;
    font-family: 'proxima-nova';
  }
.facet_add_keywords {
    padding: 0;
  }
  #job_search_filters .jAddFacetSearch input::placeholder {
    color: #999 !important;
  }
.facet_add_keywords {
    border: none !important;
  }
.facet_add_keywords .plus_icon {
    position: absolute;
    width: 16px;
    height: 17px;
    background: url(/images/campaign_step_sprites_158.png) no-repeat scroll -120px -370px transparent;
    top: 20px;
    left: 14px;
  }
.filter_hldr .filter_row.all_filter_row {
    color: #15234A;
    font-weight: bold;
  }
.filter_hldr .filter_row_hldr {
    border-top: 1px solid #15234A;
  }
.filter_hldr .facet_add_keywords+.filter_row.all_filter_row a {
    border-top: none !important;
  }
.filter_row_link.jFacetViewMore .row_icon {
    background-image: url(/media/images/campaign/plus-icon.png);
    background-position: center;
    background-repeat: no-repeat;
    height: 17px;
    width: 20px;
    background-size: contain;
    transform: scale(1.8) translate(4px, -1px);
    transition: all 0.4s ease;
  }
.filter_row_link.jFacetViewMore:hover .row_icon {
    background-image: url(/media/images/campaign/plus-icon.png);
    background-position: center;
    background-repeat: no-repeat;
    height: 17px;
    width: 20px;
    background-size: contain;
    transform: scale(1.8) translate(4px, -1px) rotate(180deg);
  }
.facet_add_keywords .plus_icon {
    background: url(/media/images/campaign/search-icon.png) no-repeat center transparent;
    top: 20px;
    left: 14px;
    background-size: cover;
  }
  #jobs_filters_title {
    border-bottom: 1px solid #efefef;
    padding-bottom: 15px;
  }
@media (max-width: 992px) {
    #jobs_filters_title {
      padding-top: 15px;
    }
  }

.number_of_results {
    font-size: 18px !important;
    color: grey;
  }

.filter_hldr .filter_row .filter_row_link:hover, .filter_hldr .filter_row .filter_row_link:active {
    background-color: transparent;
    border-top-color: transparent;
    font-weight: bold;
  }

  /* result list */
.job_link{
    font-family: 'proxima-nova', sans-serif;
    text-shadow: none;
    font-weight: bold;
    color: #1c1e4e !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    font-size: 18px !important;
    font-family: "proxima-nova", sans-serif;
  }
.jlr_company {
    font-size: 16px !important;
    font-weight: bold;
  }
.jlr_cat_loc {
    display: flex;
    font-family: "proxima-nova", sans-serif;
    font-weight: bold;
  }
.jlr_cat_loc .font_bold {
    font-weight: 500 !important;
  }
.jlr_cat_loc:nth-of-type(2) {
    font-family: "proxima-nova", sans-serif;
  }
  /* icons for job tile results
  .job_list_row .jlr_cat_loc span:first-child{
      font-size: 0;
      background-image: url(/media/images/campaign/location-icon.svg);
      width: 18px;
      height: 26px;
      display: block;
      font-family: "proxima-nova", sans-serif;
      background-position: -8px;
      background-repeat: no-repeat;
      background-size: cover;
  }
  .job_list_row .jlr_cat_loc span:first-child {
      font-size: 0;
      background-image: url(/media/images/campaign/location-icon.svg);
      width: 18px;
      height: 26px;
      display: block;
      font-family: "proxima-nova", sans-serif;
      background-position: -8px;
      background-repeat: no-repeat;
      background-size: cover;
  }
  .job_list_row .jlr_cat_loc + .jlr_cat_loc {
      margin-top: -10px
  }
  .job_list_row .jlr_cat_loc + .jlr_cat_loc span:first-child {
      font-size: 0;
      background-image: url(/media/images/campaign/job-field-icon.png);
      width: 18px;
      height: 23px;
      display: block;
      font-family: "proxima-nova", sans-serif;
      background-position: -5px;
      background-repeat: no-repeat;
      background-size: cover;
  }*/
.job_list_row .jlr_cat_loc span {
    font-size: 16px;
    font-weight: normal;
  }
.job_list_row .jlr_cat_loc span:first-child {
    margin-right: 5px;
  }
.job_list_row .jlr_cat_loc + .jlr_cat_loc {
    margin-top: -10px
  }
.jlr_content {
    display: none;
  }
.jlr_description {
    font-size: 14px !important;
    font-family: "proxima-nova", sans-serif;
  }

.star_job_hldr {
    display: none;
  }
.info_listings .job_list_row {
    border-top: none !important;
    border-bottom: 1px solid #efefef !important;
  }
.info_listings .job_list_row .jlr_right_hldr.jlr_admin_hldr {
    width: 100%;
  }
.top_ref_btn {
    display: none;
  }


  /* pagination */
.pagination_holder {
    float: none;
    width: 100%;
    display: flex;
    justify-content: center;
  }
.pagination_holder .pagination a, span.current {
    background: transparent;
    border: none !important;
    box-shadow: none;
  }
.pagination_holder .pagination a span {
    font-size: 14px !important;
    color: #15234A;
    font-family: "proxima-nova", sans-serif;
    font-weight: bold;
  }
  span[aria-label="current"] {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
  span[aria-label="current"] span {
    font-size: 14px !important;
    color: #fff;
    position: relative;
    background: linear-gradient(90deg, rgba(0,193,213,1) 0%, rgba(181,189,0,1) 100%) !important;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    text-shadow: none !important;
  }

.pagination_holder .pagination .prev, .pagination_holder .pagination .next {
    background: transparent !important;
    box-shadow: none;
  }
.pagination_holder .pagination .prev span.padding, .pagination_holder .pagination .next span.padding {
    font-size: 25px !important;
    color: #15234A;
    font-family: "proxima-nova", sans-serif;
    font-weight: bold;
    text-shadow: none !important;
    background: transparent !important;
    line-height: 18px;
    border: none !important;
  }

  strong {
    color: #000000;
    font-weight: bold;
  }

.back-button {
    margin-top: 10px;
    margin-bottom: 25px;
    display: none;
  }
.back-button .caret {
    transform: rotate(-90deg);
    display: inline-block;
  }
.job.details .back-button {
    margin-bottom: 25px;
    display: inline-block;
  }


  /* popup */
  #colorbox {
    background-color: transparent !important;
  }
  /*.register_modal_tc#colorbox, .terms_cond_modal_tc#colorbox {
      background-color: transparent !important;
      min-width: 500px !important;
  }
  .register_modal_tc#colorbox #cboxWrapper, .terms_cond_modal_tc#colorbox #cboxWrapper {
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
  }*/
  /* .register_modal_tc specific for job alert modal */
  /*.register_modal_tc#colorbox #cboxContent, .terms_cond_modal_tc#colorbox #cboxContent {
      border: none;
      border-radius: 0;
      width: 500px !important;
  }*/
  #colorbox #cboxContent {
    border: none;
    border-radius: 0;
  }
  /*.register_modal_tc#colorbox #cboxContent #cboxLoadedContent, .terms_cond_modal_tc#colorbox #cboxContent #cboxLoadedContent {
      width: 500px !important;
  }
  .register_modal_tc#colorbox #cboxContent #cboxLoadedContent .register_tc{
      width: 500px !important;
  }*/
  #colorbox #cboxContent .modal_title.with_close {
    border: none;
    background-color: transparent;
    border: none;
    padding: 25px 20px;
  }
  #colorbox #cboxContent .modal_title.with_close h3 {
    font-family: "proxima-nova",sans-serif;
    flex-basis: 100%;
    font-size: 25px;
    font-weight: 900;
    color: #15234A;
    line-height: initial;
    margin-bottom: 15px;
    text-transform: lowercase;
  }
  #colorbox #cboxContent .modal_title.with_close h3:first-letter {
    text-transform: uppercase;
  }
  #colorbox #cboxContent .modal_title.with_close  .modal_close {
    font-size: 0;
    content: '';
    width: 20px;
    height: 20px;
    background: url(/media/images/campaign/close-icon-blue.png) no-repeat transparent;
    background-size: contain;
    display: block;
    top: 30px;
    right: 20px;
  }
  #colorbox #cboxContent .modal_title.with_close  .modal_close:focus {
    outline: none;
  }
.register_modal_tc#colorbox #cboxContent .modal_content {
    padding: 0px 20px;
  }
  #colorbox #cboxContent .modal_content {
    padding: 0px 15px 15px 15px
  }
  #colorbox #cboxContent .modal_content .clearbutton {
    float: none;
    margin-right: 0;
  }
  #colorbox #cboxContent label {
    font-family: "proxima-nova",sans-serif;
    font-size: 18px;
    color: #15234A;
    font-weight: bold;
  }
  #colorbox #cboxContent #location-level-label-0, #colorbox #cboxContent #location-level-label-1, #location-level-label-2, #location-level-label-3 {
    color: #6e6e6e !important;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  #colorbox #cboxContent input.inputtypetext, #colorbox #cboxContent .chzn-container-multi, #colorbox #cboxContent .chzn-container, #colorbox #cboxContent .location_list{
    background-color: #fff !important;
    background-image: none;
    font-family: "proxima-nova",sans-serif;
    font-size: 16px;
    color: #15234A;
    border-radius: 35px !important;
    padding: 15px;
    border: none;
    -webkit-box-shadow: 0px 7px 10px 1px rgb(0 0 0 / 17%);
    -moz-box-shadow: 0px 7px 10px 1px rgba(0,0,0,0.17);
    box-shadow: 0px 7px 10px 1px rgb(0 0 0 / 17%);
    margin-bottom: 25px;
    width: calc(100% - 30px);
  }
  #colorbox #cboxContent .chzn-container, #colorbox #cboxContent .location_list {
    width: calc(100% - 8px) !important;
    padding: 8px 4px;
  }
  #colorbox #cboxContent .chzn-container .chzn-single{
    border: none !important;
    margin: 0;
  }
  #colorbox #cboxContent .chzn-choices {
    border: none;
    box-shadow: none !important;
    outline: none;
    background: none;
  }
  #colorbox #cboxContent .chzn-choices .search-choice, #colorbox #cboxContent .location_list .location_item {
    width: auto;
    padding: 5px 10px;
    background-color: #f4faf6 !important;
    background-image: none;
    box-shadow: none !important;
    border: none !important;
    border-radius: 35px !important;
    color: #15234a !important;
    font-size: 13px;
    margin-right: 10px;
    margin-bottom: 3px;
    display: flex;
    flex-direction: row-reverse;
    float: left;
  }
  #colorbox #cboxContent .chzn-choices .search-choice a, #colorbox #cboxContent .location_list .location_item button {
    position: relative;
    width: 8px;
    height: 8px;
    background: url(/media/images/campaign/close-icon-blue.png) no-repeat transparent !important;
    background-position: center;
    background-size: contain !important;
    display: block;
    margin-right: 5px;
    top: 2px;
  }
  #colorbox #cboxContent .chzn-drop {
    top: calc(100% + 5px) !important;
    padding: 15px;
    border-radius: 35px !important;
    border: none !important;
    background: #fff;
    -webkit-box-shadow: 0px 7px 10px 1px rgb(0 0 0 / 17%);
    -moz-box-shadow: 0px 7px 10px 1px rgba(0,0,0,0.17);
    box-shadow: 0px 7px 10px 1px rgb(0 0 0 / 17%);
    width: calc(100% - 30px) !important;
  }
  #colorbox #cboxContent .chzn-drop  .chzn-search {
    width: 100%;
  }
  #colorbox #cboxContent .chzn-drop  .chzn-search input {
    width: calc(100% - 20px) !important;
  }
  #colorbox #cboxContent .chzn-drop .chzn-results {
    width: calc(100% - 20px);
    max-width: none !important;
  }
  #colorbox #cboxContent .chzn-drop .chzn-results:focus {
    outline: none;
  }
  #colorbox #cboxContent #registration_form .frequency_message.chosen_holder {
    margin: 0px 20px 15px 20px;
    padding: 25px 0 0 0;
  }
  /*footer modal */
  #colorbox #cboxContent .modal_actions {
    background-color: #15234a;
    border: none;
    padding: 25px 20px;
    border-radius: 0;
  }
  #colorbox #cboxContent .modal_actions .action_buttons {
    display: flex;
    align-self: center;
  }
  #colorbox #cboxContent .modal_actions label, .register_modal_tc#colorbox #cboxContent .modal_actions a {
    font-family: "proxima-nova",sans-serif;
    font-size: 12px;
    color: #ffffff;
  }
  #colorbox #cboxContent .modal_actions a {
    text-decoration: underline !important;
    margin-left: 5px;
    color: #ffffff;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-right: 0;
  }
  #colorbox #cboxContent .modal_actions .submit_cancel {
    text-decoration: underline;
    color: #ffffff;
  }
  #colorbox #cboxContent .modal_actions .submit_cancel:hover {
    text-decoration: none;
  }
  #colorbox #cboxContent .modal_actions a:hover {
    text-decoration: none !important;
  }
  #colorbox #cboxContent .terms_conditions_holder  label{
    display: flex !important;
    align-items: center;
  }
  #colorbox .register_tc #registration_form .terms_conditions_holder.action_left input[type="checkbox"] {
    font-size: 12px;
  }
  #colorbox #cboxContent .generic_btn, #colorbox #cboxContent .facet_more_submit {
    border: none;
    text-shadow: none;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.1px;
    font-family: 'proxima-nova', sans-serif;
    background: rgb(0,193,213);
    background: linear-gradient(90deg, rgba(0,193,213,1) 0%, rgba(181,189,0,1) 100%);
    line-height: 25px;
    min-width: 115px;
    text-align: center;
    border-radius: 35px;
  }
  #colorbox #cboxContent .add_location_btn.gray_btn {
    border-radius: 35px;
    width: auto;
    padding: 5px 25px;
    font-size: 16px;
    font-weight: bold;
    margin-top: -5px;
  }
  #colorbox #cboxContent .add_location_btn.gray_btn:hover {
    box-shadow: 2px 1000px 1px #fff inset, 0px 0px 13px -1px rgb(0 0 0 / 40%);
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #0185ca, #90d5ac)
  }
  /* popup facet */
  #colorbox .facet_view_modal #modal_facet_content .modal_filter_hldr .filter_row .filter label {
    font-size: 14px;
  }
  #colorbox .facet_view_modal #modal_facet_content .filter_title .select_all, #colorbox .facet_view_modal #modal_facet_content .filter_title .sort_by .order_num, #colorbox .facet_view_modal #modal_facet_content .filter_title .sort_by .order_name {
    font-size: 14px;
  }

.flg_hldr {
    display: none !important;
  }


  #send_job_btn {
    display: none;
  }

  #description_box .job_description .internal_job_note {
    top: 0;
  }

.baseline-footer-print {
    display: none;
  }

  /* youtube */
.wrapper-youtube {
    margin-top: 100px;
    margin-bottom: 50px;
    cursor: pointer;
    text-align: center;
  }
.wrapper-youtube img {
    max-width: 80%;
  }
.video-pop-up {
    position: fixed;
    z-index: 10000;
    height: 300px;
    width: 600px;
    top: calc(50% - 160px);
    transform: translate(-50%);
    left: 50%;
    opacity: 0;
    pointer-events: none;
    transition: all 0.6s ease;
  }
@media (max-width: 992px) {
  .video-pop-up {
      width: 100%;
    }
  }

.video-pop-up.show {
    opacity: 1;
    top: calc(50% - 150px);
    pointer-events: initial;
    transition: all 0.6s ease;
  }
.video-pop-up .overlay {
    position: fixed;
    width: 150vw;
    height: 150vw;
    left: -50vw;
    top: -50vw;
    background-color: rgba(255,255,255,0.75);
    opacity: 0;
    transition: all 0.6s ease;
    z-index: -1;
  }
@media (max-width: 992px) {
  .video-pop-up .overlay {
      top: -100vw;
      height: 300vw;
    }
  }
.video-pop-up.show .overlay {
    opacity: 1;
    pointer-events: initial;
    transition: all 0.3s ease;
  }
.video-pop-up .close-video {
    cursor: pointer;
    width: 20px;
    height: 20px;
    background: url(/media/images/campaign/close-icon-blue.png) no-repeat transparent;
    background-size: contain;
    display: block;
    top: 30px;
    right: 20px;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index:100;
    position: absolute;
    right: -30px;
    top:0;
  }
@media (max-width: 992px) {
  .video-pop-up .close {
      right: 15px;
      top: calc(100% + 15px);
    }
  }
.video-pop-up.show .close {
    pointer-events: initial;
    z-index:100;
  }
.video-pop-up.show:before {
    opacity: 1;
  }
.video-pop-up iframe {
    width: 100%;
    height: 100%;
  }
@media (max-width: 992px) {
  .youtube-wrapper iframe{
      width: calc(100vw - 30px);
    }
  }
.wrapper-print-organic-image {
    display: none;
  }
.print-organic-image {
    display: none;
  }

  /* cookies banner */
  #notify-banner {
    background-color: #f4fbf7 !important;
    text-shadow: none;
    color: #707070 !important;
    border: none;
    box-shadow: 0 0 18px rgb(0 0 0 / 20%);
  }
  #notify-no-content {
    display: none;
  }
  #notify_container .close {
    height: 25px !important;
    border-radius: 50px;
    border: none;
    text-shadow: none;
    font-size: 20px !important;
    font-weight: bold;
    letter-spacing: 1.1px;
    font-family: 'proxima-nova', sans-serif !important;
    background: linear-gradient(90deg, rgba(0,193,213,1) 0%, rgba(181,189,0,1) 100%);
    transition: all 0.4s ease;
    text-shadow: none !important;
    top: 4px !important;
  }

  /* apply btn in text */
.apply-btn-text {
    text-decoration: underline;
    text-transform: lowercase;
    cursor: pointer;
  }
.apply-btn-text:hover {
    text-decoration: none;
  }

.job_description .element-in-footer-to-print {
    display: none;
  }

  /* PRINT */
@media print {
    body #container {
      max-width: 100%;
    }
    body.full_width #body_wrapper {
      width: 100%
    }
    #job_details_content {
      position: relative;
      background: transparent !important;
    }
  .youtube-wrapper {
      display: none;
    }
  .print-organic-image {
      display: block;
      width: 250px;
      height: auto;
    }
  .baseline-footer-print {
      display: block;
      text-align: right;
      max-width: 960px;
      margin: 0 auto;
      position: relative;
      float: right;
      height: 100px;
      margin-top: 55px;
    }
  .baseline-footer-print img{
      width: 180px;
      height: auto;
    }
  .hide-on-print {
      display: none;
    }
    html {
      margin-bottom: 100px;
    }
    @page {
      margin: 10%;
    }
      #body_wrapper {
      padding-bottom: 0 !important;
    }
      h1, h2, h3, h4, h5 {
      page-break-after: avoid;
      clear: both;
    }
      #topBranding, #header_settings,#header, #logo_hldr, .oda-chat-wrapper, .back-button, .logo, .title-section-with-background-inner br, .title-section-with-background:before {
      display: none !important;
    }
      #notify-banner, .apply-btn, .big-image-background:before, .cta-with-icon:before, #bottomBranding .hide-on-print  {
      display: none !important;
    }
    .content_header {
      display: block;
    }
    .content_header a, .content_header label {
      color: #15234a;
      font-size: 18px;
      line-height: 18px;
    }
    .content_header .subtitle h4 {
      line-height: 18px !important;
    }
    .job_details .content_header > .title {
      display: block;
      font-family: "proxima-nova",sans-serif !important;
      flex-basis: 100%;
      font-size: 35px !important;
      font-weight: 900;
      color: #15234A !important;
      line-height: initial;
      margin-bottom: 25px;
    }
    .job_description {
      display: block;
    }
    .job_details .content_header .section-header-more-informations {
      display: block;
    }
    .title-section-big, .title-section-with-background {
      font-size: 25px;
      margin-top: 40px !important;
      margin-bottom: 15px !important;
    }
    .title-section-with-background {
      margin: 0;
      font-size: 25px !important;
    }
    .title-section-with-background-inner, .text-with-title {
      position: relative;
      width: 100%;
    }
    .title-in-content, .title-section-with-background, .list, .text-with-title {
      padding: 0;
    }
    .title-in-content {
      font-weight: bold;
      color: #000;
    }
    .cta-with-icon {
      padding: 0 !important;
      width: 33%;
      float: left;
      padding: 0;
      width: 175px;
    }
      p.cta-with-icon.opportunities {
      width: 200px;
    }
    .full_content {
      clear: both;
    }
    .subtitle {
      float: left;
      margin: 0 !important;
    }
    .content_header #logo_inner {
      display: block;
      flex-basis: 100%;
      filter: invert(1);
      text-align: right;
      position: relative;
      margin-bottom: 15px;
      margin-top: 25px;
      float: right;
    }
    .content_header #logo_inner img {
      opacity: 1 !important;
      max-height: initial !important;
      max-width: 190px !important;
      margin-top: 30px;
    }
    .title-section-with-background img {
      left: -20px;
      display: none;
    }

    .text-emphasis-gradient {
      background: none !important;
      color: rgba(145,214,172,1);
      -webkit-background-clip: initial;
      -webkit-text-fill-color: initial;
    }
    .big-image-background {
      padding-top: 20px;
    }
    .quote {
      display: none
    }
    .video-pop-up {
      display: none;
    }

    .job_description .element-in-footer-to-print {
      display: block;
    }
  }/* end print */

  #body_wrapper #search_hldr {
    display: none;
  }
@media(max-width: 992px) {
    #topBranding #search_hldr {
      display: block !important;
    }
  }

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

// Luca Spinali -- 19/01/2020

//replace apply button in the header
jQuery(".job_details .info_box").appendTo(".apply-btn");
//replace title in the header
jQuery(".job_details .content_header > .title").clone().appendTo(".section-header-title");
// add organic image before title for print
jQuery(".job_details #container").prepend('<div class="wrapper-print-organic-image"><img class="print-organic-image" src="/media/images/campaign/vorm4-header.png" /></div>');
// clone and place title on search
//jQuery(".jSearchTitle").clone().appendTo(".section-header-title");
//jQuery(".jSearchTitle").clone().appendTo(".section-header-title-search").text('Fluxys: your partner in gas infrastructure');
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
  jQuery(contractList).text(trimContractFirstCell);
// replace Type of contract in the header
  jQuery("#G105305010618").appendTo(".section-header-more-informations");
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


/* banner epic */
if (jQuery("#G130105010618").length) {
  // We take the textual value of the field which will impact on the display of the logo and we store it in a variable which will be used in the "cases" of the switch below
  var valueEpic = jQuery("#G130105010618").text();


  switch (valueEpic) {
    //The case = the text value for the Background Type field in the administration
    case 'Background Type: EPIC 1':
      // If you want another picture, just change the URL after
      jQuery(".fit-picture").attr("src", "/media/images/epic-banners/epic-1.jpg").show("fade");
      jQuery("meta[property='og:image']").attr("content", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-1.jpg");
      break;

    case 'Background Type: EPIC 2':
      jQuery(".fit-picture").attr("src", "/media/images/epic-banners/epic-3.jpg").show("fade");
      jQuery("meta[property='og:image']").attr("content", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-3.jpg");
      break;

    case 'Background Type: EPIC 3':
      jQuery(".fit-picture").attr("src", "/media/images/epic-banners/epic-4.jpg").show("fade");
      jQuery("meta[property='og:image']").attr("content", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-4.jpg");
      break;
    // to add a new EPIC banner, just copy/paste from Case to break; and replace the value of the case with the new one and replace the URL

    // this banner image is shown if there is no matching value for Background Type
    default:
      jQuery(".fit-picture").attr("src", "/media/images/epic-banners/epic-1.jpg").show("fade");
      jQuery("meta[property='og:image']").attr("content", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-1.jpg");

  }
} else {
  // if Background Type field don't exist, this banner image is shown by default
  jQuery(".fit-picture").attr("src", "/media/images/epic-banners/epic-1.jpg").show("fade");
  jQuery("meta[property='og:image']").attr("content", "https://stgfluxyssa.upgrade.selectminds.com/media/images/epic-banners/epic-1.jpg");
}

/* change logo according to field company value */
if (jQuery(".field_company .field_value").length) {
  // We take the textual value of the field which will impact on the display of the logo and we store it in a variable which will be used in the "cases" of the switch below
  var valueLogo = jQuery(".field_company .field_value").text();


  switch (valueLogo) {
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

/* clone logo in content for print */
jQuery("#logo_inner").clone().insertBefore(".content_header .title");
jQuery(".baseline-footer-print").insertBefore(".content_header .title");


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
  jQuery(".job_details .jApplyBtn .btn_text").text("Postuler maintenant");
} else {
  // nl
  jQuery(".job_details .job-detail-intro").text("Vereist profiel : ");
  // replace text Apply by Apply now on the bottom of the page
  jQuery(".job_details .jApplyBtn .btn_text").text("Nu toepassen");
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
var s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://static.addtoany.com/menu/page.js";
jQuery("head").append(s);
jQuery('.a2a_kit').appendTo('.wrapper-add-to-any');




/* youtube */
jQuery('.video-pop-up').append('<div class="close-video">');
jQuery('.video-pop-up').append('<div class="overlay">');
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


/* make the logo visible , avoid to see the logo set by default on the website */
jQuery(".logo img").css("opacity","1");