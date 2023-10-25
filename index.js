let iframe;

window.onmessage = function(e) {
  console.log('parent window.onmessage data: '+ JSON.stringify(e.data));

  if (e.data === 'iframe.close') {
    iframe && iframe.remove();
    document.getElementById("openIframeBtn").style.display = "block";
  }
  let msgEl = document.createElement('p');
  msgEl.innerHTML = `${JSON.stringify(e.data)}`;
  document.getElementById("iframe-messages").appendChild(msgEl);
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("parent DOMContentLoaded");

    document.getElementById("openIframeBtn").addEventListener("click", (e) => {
        console.log('openIframeBtn');
        document.getElementById("openIframeBtn").style.display = "none";

        iframe = document.createElement('iframe');
        iframe.allow="autoplay; camera; microphone";
        iframe.src = 'https://broskad.github.io/anitech_web_landmarks_collection/';
        iframe.width  = window.innerWidth;
        iframe.height = window.innerHeight;
        document.getElementById("iframe-place").appendChild(iframe);
    });

});