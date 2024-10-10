<?php
// -------------------------------------------------
//
// objeto -> medidas() -> (nombre:Texto, contenido:<objetos>)
//
// -------------------------------------------------

function medidas( $objeto ) {
  $objetoResultado = new stdClass;
  $objetoResultado->nombre = 'Mediciones';
  $objetoResultado->contenido = $objeto;

  return $objetoResultado;
}

?>
