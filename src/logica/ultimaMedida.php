<?php
// -------------------------------------------------
//
// objeto -> ultimaMedida() -> objeto
//
// -------------------------------------------------

function ultimaMedida( $objeto ) {
    $objetoResultado = new stdClass;
    $objetoResultado->nombre = 'Ultima Medicion';
    $objetoResultado->mediciones = $objeto;

    return $objetoResultado;
}
