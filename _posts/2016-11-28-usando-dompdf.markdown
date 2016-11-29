---
layout: post
title:  "Usando dompdf"
date:   2016-11-28 23:32:00
categories: Programación
---

<p>Hace poco me consultaron sobre la implementación de <a href="https://github.com/dompdf/dompdf" target="_blank">dompdf</a> en PHP y noté que hay un paso primordial en la misma, que puede ser un dolor de cabeza.</p>

<p>Luego de descargar e inlcuir a nuestro proyecto la librería dompdf, debemos realizar los siguientes pasos para lograr una correcta implementación:</p>

<p>Para este ejemplo, vamos a crear un archivo PHP en nuestro proyecto, al que nombraremos GetPDF.php
</p>

#### Incluir el archivo autoloader de dompdf:
<p>
{% highlight php startinline=true %}
require_once(__DIR__ . "/dompdf/autoload.inc.php");
{% endhighlight %}
</p>

#### Luego debemos indicar <i>namespace</i> que utilizaremos para dompdf, mediante la palabra reservada <i>use</i>.
<p>
Para mas información, pueden visitar la página oficial de <a href="http://php.net/manual/es/language.namespaces.importing.php" target="_blank">PHP</a> en donde se explica dicha funcionalidad. Este paso es muy importante, dado que, sin esta declaración, dompdf no funcionará.
</p>
<p>
{% highlight php startinline=true %}
use Dompdf\Dompdf;
{% endhighlight %}
</p>

#### Luego solo resta la implementación de dompdf

<p>
{% highlight php startinline=true %}

// Creamos el html a mostrar.
$html = "<html><head><title>Ejemplo dompdf</title></head><body><p>Ejemplo dompdf.</p></body></html>";

// Se crea una instancia de dompdf y luego le asignamos el html que debe mostrar.
$dompdf = new Dompdf;
$dompdf->loadHtml($html);

// (Opcional) Asignamos el tamaño de hoja y la horientación.
$dompdf->setPaper('A4', 'landscape');
$dompdf->set_option('isHtml5ParserEnabled', true);

// Renderiza el html a PDF
$dompdf->render();

// Devolvemos el PDF generado al navegador indicando el nombre del mismo.
$dompdf->stream('ejemplo-dompdf.pdf');
{% endhighlight %}
</p>

#### Listo! Solo resta aplicarlo y generar archivos PDF.