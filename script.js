function calcularVolumen() {
    // Obtener elementos de error y resultados
    const errorMessageDiv = document.getElementById('error-message');
    const areaAntral1Span = document.getElementById('areaAntral1');
    const volumen1Span = document.getElementById('volumen1');
    const areaAntral2Span = document.getElementById('areaAntral2');
    const volumen2Span = document.getElementById('volumen2');

    // Limpiar mensajes de error y resultados previos
    errorMessageDiv.textContent = '';
    areaAntral1Span.textContent = '-';
    volumen1Span.textContent = '-';
    areaAntral2Span.textContent = '-';
    volumen2Span.textContent = '-';

    // Obtener valores de los inputs
    const diamAP = parseFloat(document.getElementById('diamAP').value);
    const diamCC = parseFloat(document.getElementById('diamCC').value);
    const edad = parseFloat(document.getElementById('edad').value);
    const peso = parseFloat(document.getElementById('peso').value);

    // Validación básica de entradas
    if (isNaN(diamAP) || isNaN(diamCC) || isNaN(edad) || isNaN(peso)) {
        errorMessageDiv.textContent = 'Por favor, introduce valores numéricos válidos en todos los campos.';
        return;
    }
    if (diamAP <= 0 || diamCC <= 0 || edad <= 0 || peso <= 0) {
        errorMessageDiv.textContent = 'Los diámetros, edad y peso deben ser valores positivos.';
        return;
    }

    // Calcular Área Antral
    const areaAntral = diamAP * diamCC * Math.PI / 4;
    areaAntral1Span.textContent = areaAntral.toFixed(2);
    areaAntral2Span.textContent = areaAntral.toFixed(2);

    // Fórmula 1
    const volumenF1 = 27 + (14.6 * areaAntral) - (1.28 * edad);
    volumen1Span.textContent = volumenF1.toFixed(2);

    // Fórmula 2
    // El logaritmo natural (Math.log) requiere que el área antral sea > 0
    if (areaAntral > 0) {
        const volumenF2 = -372.54 + (282.49 * Math.log(areaAntral)) - (1.68 * peso);
        volumen2Span.textContent = volumenF2.toFixed(2);
    } else {
        volumen2Span.textContent = "Error (Área Antral debe ser > 0)";
        // O podrías mostrar un mensaje más específico en el div de error
        // errorMessageDiv.textContent += ' La Fórmula 2 no se pudo calcular porque el Área Antral es 0 o negativa.';
    }
}