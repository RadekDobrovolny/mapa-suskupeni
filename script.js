var map = L.map('map', { zoomControl:true }).setView([49.8, 15.5], 8);

L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
  maxZoom: 19
}).addTo(map);

var myIcon = L.icon({
    iconUrl: './map-marker.png',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -40],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

L.Icon.Default.prototype.options = {
    iconUrl: './map-marker.png',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -40],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
};

var okarec = L.marker([49.2058603, 16.0862453], {icon: myIcon}).addTo(map);
okarec.bindPopup('<b>Okarec 1</b><br><br>Tady bydlí Radkova máma 💖 <br><br><iframe src="https://www.google.com/maps/embed?pb=!4v1606927464407!6m8!1m7!1sJChb6MLGdHJzuOGf5idK0Q!2m2!1d49.20568578257641!2d16.08646607376113!3f331.91097596245265!4f-7.833162723807746!5f0.7820865974627469" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>', {maxWidth: 440})

var kohoutovice = L.marker([49.1902275, 16.5451950]).addTo(map);
kohoutovice.bindPopup('<b>Ráj kvašení</b><br><br>Nicole & Karol<br><br><iframe src="https://www.google.com/maps/embed?pb=!4v1606940421102!6m8!1m7!1sgFBEwrlflWm2hhdTbi4A5g!2m2!1d49.1902927847261!2d16.54459989358198!3f125.76246869293387!4f-10.085047542788502!5f0.7820865974627469" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>', {maxWidth: 440})

var vrsovice = L.marker([50.069816, 14.4566592]).addTo(map);
vrsovice.bindPopup('<b>Pražští intelektuálové</b><br><br>Kryštof & Tom<br><br><iframe src="https://www.google.com/maps/embed?pb=!4v1606940681596!6m8!1m7!1s5OorYiAgncJmzXUfiTRcdQ!2m2!1d50.06981600220912!2d14.4566591596946!3f322.9652894920401!4f0.39378548216473064!5f0.7820865974627469" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>', {maxWidth: 440})

var bubenec = L.marker([50.1032334, 14.4096681]).addTo(map);
bubenec.bindPopup('<b>Zahrada naděje</b><br><br>Rebeka<br><br><iframe src="https://www.google.com/maps/embed?pb=!4v1606940957233!6m8!1m7!1sCAoSLEFGMVFpcE9GWjl4VE5WZ3BtUmVMbThOYXZHNHRrR095ckM0UVEzQnBxZzFW!2m2!1d50.10323339715151!2d14.4096680922635!3f342.97382503614165!4f2.4429800263598622!5f0.7820865974627469" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>', {maxWidth: 440})

var smichov = L.marker([50.0611448, 14.4042537]).addTo(map);
smichov.bindPopup('<b>Noční budka</b><br><br>Lenka<br><br><iframe src="https://www.google.com/maps/embed?pb=!4v1606941097692!6m8!1m7!1sK8Nm3UaLOYVcAPPL3r6P4Q!2m2!1d50.06114483527544!2d14.40425366804809!3f350.2922701665035!4f6.799621906089001!5f0.7820865974627469" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>', {maxWidth: 440})

var smichov2 = L.marker([50.0625717, 14.4043225]).addTo(map);
smichov2.bindPopup('<b>Dóm Ještěru</b><br><br>Radek<br><br><iframe src="https://www.google.com/maps/embed?pb=!4v1606941238088!6m8!1m7!1s8P53DosK_xj8y1WgEV5Snw!2m2!1d50.06257165017249!2d14.40432253405929!3f148.88539636556848!4f11.212935768979321!5f0.7820865974627469" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>', {maxWidth: 440})

var hejnice = L.marker([50.0538877, 16.4074667]).addTo(map);
hejnice.bindPopup('<b>Hejnice</b><br><br>Radkovo království', {maxWidth: 440})

var frydlant = L.marker([49.5850425, 18.3317226]).addTo(map);
frydlant.bindPopup('<b>Sulfolk</b><br><br>Viktor', {maxWidth: 440})

