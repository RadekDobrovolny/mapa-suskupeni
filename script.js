var map = L.map('map', { zoomControl:true }).setView([49.8, 15.5], 8);

L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
  maxZoom: 19
}).addTo(map);

var okarec = L.marker([49.2058603, 16.0862453]).addTo(map);
okarec.bindPopup('<b>Okarec 1</b><br><br>Tady bydlí Radkova máma 💖 <br><br><iframe src="https://www.google.com/maps/embed?pb=!4v1606927464407!6m8!1m7!1sJChb6MLGdHJzuOGf5idK0Q!2m2!1d49.20568578257641!2d16.08646607376113!3f331.91097596245265!4f-7.833162723807746!5f0.7820865974627469" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>', {maxWidth: 440})