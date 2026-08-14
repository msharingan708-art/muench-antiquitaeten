document.getElementById('map-load-btn').addEventListener('click', function () {
  var frame = document.getElementById('map-frame');
  var src = frame.getAttribute('data-map-src');
  var iframe = document.createElement('iframe');
  iframe.title = 'Lage von Münch Antiquitäten GmbH, Brunngasse 21, Brienz';
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  iframe.src = src;
  frame.innerHTML = '';
  frame.appendChild(iframe);
});
