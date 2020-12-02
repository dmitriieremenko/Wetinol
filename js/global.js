$(document).on('click', '.anchor-link', linkAnchorHandler);
function linkAnchorHandler(e) {
    let url = e.target.href;
    const urlParsed = new URL(url);
    console.dir(urlParsed);
    if(urlParsed.hash.length > 0) {
      e.preventDefault();
      let top = $(urlParsed.hash).offset().top;
      $('body,html').animate({scrollTop: top}, 600);
      
    }
  }