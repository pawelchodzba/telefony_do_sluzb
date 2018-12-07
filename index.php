

<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Centrum Powiadamiania Ratunkowego</title>
	<meta name="author" content="Pawel Chodzba">
	<link rel="stylesheet" type="text/css" media="screen" href="main.css" />
	<!-- <link type="text/css" href="st_l.css" rel="stylesheet" /> -->
	<!-- <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet"> -->
		<!-- <script type="text/javascript" src="jquery-3.2.1.min.js"></script>  -->
<style type="text/css">




</style>	
</head>
<body>
	<div id="all">
		<div class="title">Wyszukiwarka telefonów do służb ratunkowych</div>
		<div class="inputs">
			<div class="all_list"><input type="text" value="Województwo" id="woj"><div id="wrap_woj"class="wraper_list"></div></div>	
			<div class="all_list"><input type="text" value="Powiat" id="pow"><div id="wrap_pow"class="wraper_list"></div></div>
			<div class="all_list"><input type="text" disabled=true value="Gmina" id="gmin"><div id="wrap_gmin"class="wraper_list"></div></div>
			<div class="all_list"><input type="text" disabled=true value="Miejscowość" id="miejsc"><div id="wrap_miejsc"class="wraper_list"></div></div>
			<div class="all_list"><button>Wyczyść</button></div>
		</div>
		<div class="sluzby">
			<div class="tyt_teryrorium">
				<div>Powiat:&nbsp;<div id="nazwa"></div></div>
				<div>&nbsp;Województwo:&nbsp;<div id="wojewodztwo"></div></div>
			</div>
			<table><tbody>
				<tr><td>PRM</td><td id="prm"></td></tr>
				<tr><td>PSP</td><td id="psp"></td></tr>
				<tr><td>Policja</td><td id="policja"></td></tr>
			</tbody></table>
			
			
		</div>
		<div class="sluzby">
			<div class="tyt_teryrorium">
				<div>Województwo:&nbsp;<div id="w_nazwa"></div></div>
			</div>
			<table><tbody>
				<tr><td>Koordynator PRM</td><td id="w_prm"></td></tr>
				<tr><td>KW PSP</td><td id="w_psp"></td></tr>
				<tr><td>KW Policja</td><td id="w_policja"></td></tr>
			</tbody></table>
		</div>
	</div>
<div class="footer">
	<div>
		<p>Wyszukiwarka telefonów w powiatach została utworzona na podstawie danych udostępnionych przez CPR-y</p>
		
		<ul>
			<li>Niejednoznaczne przypisanie komend Policji i PSP w województwach:<a href="pomorskie.html"target="_blanck">pomorskim</a>,<a href="warminskomazurskie.html"target="_blanck">warmińsko-mazurskim</a>,<a href="zachodniopomorskie.html"target="_blanck">zachodnio-pomorskim</a>(sprawdź na mapie "click")</li>
		</ul>
	</div>
</div>
<!-- <script src="main_min.js"></script> -->
<script src="promises.js"></script>
<script src="main.js"></script>
<!-- <script src="main_no_async_min.js"></script> -->

</body>
</html>


