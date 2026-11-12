# Matriz de trazabilidad de requisitos

Las historias se derivan de las funciones disponibles en la API. El estado QA refleja la cobertura de las pruebas automatizadas existentes, no una certificación de producción. `Parcial` indica que hay pruebas relacionadas, pero no se cubren todos los escenarios de la historia.

| ID HU | Descripción del requisito | Módulo / Controlador | Caso(s) de prueba asociado(s) | Estado QA |
|---|---|---|---|---|
| HU-001 | Como usuario activo, quiero iniciar sesión y consultar mi perfil para acceder a las funciones permitidas por mi rol. | `authController.js`, `authService.js`, middleware `auth.js` | `test_login_exitoso`, `test_login_credenciales_invalidas`, `test_ruta_protegida_sin_token` (`tests/auth.test.js`) | Aprobado |
| HU-002 | Como administrador, quiero crear y consultar sorteos, registrar sus resultados y liquidar los tiquetes asociados. | `sorteoController.js`, `sorteoService.js` | `test_admin_crea_sorteo` (`tests/caja.test.js`), `test_resultado_y_pago_premio` (`tests/tickets.test.js`) | Parcial |
| HU-003 | Como vendedor, quiero vender tiquetes de Chance con apuestas validadas para registrar las ventas del sorteo. | `ticketController.js`, `ticketService.js`, `chanceService.js` | `test_venta_chance` (`tests/tickets.test.js`), `test_validacion_apuesta_invalida`, `test_premio_directo_4_cifras` (`tests/chance.test.js`) | Aprobado |
| HU-004 | Como vendedor, quiero vender tiquetes de Baloto con jugadas manuales o aleatorias para participar en un sorteo abierto. | `ticketController.js`, `ticketService.js`, `balotoService.js` | `test_venta_baloto` (`tests/tickets.test.js`), `test_jugada_aleatoria_valida`, `test_jugada_numeros_repetidos` (`tests/baloto.test.js`) | Aprobado |
| HU-005 | Como usuario autenticado, quiero consultar tiquetes y anular una venta permitida para corregir errores, respetando propietario, estado y plazo. | `ticketController.js`, `ticketService.js` | `test_anulacion_ticket`, `test_anulacion_fuera_de_tiempo`, `test_venta_sorteo_cerrado` (`tests/tickets.test.js`) | Parcial |
| HU-006 | Como vendedor, quiero verificar y pagar un premio válido una sola vez para completar la atención al ganador. | `ticketController.js`, `ticketService.js`, `sorteoService.js` | `test_resultado_y_pago_premio` (`tests/tickets.test.js`) | Parcial |
| HU-007 | Como vendedor, quiero revisar el resumen diario de caja y registrar el efectivo reportado para conocer diferencias y cerrar el día. | `cajaController.js`, `cajaService.js` | `test_resumen_caja_diario`, `test_cierre_caja_con_faltante` (`tests/caja.test.js`) | Aprobado |
| HU-008 | Como administrador, quiero que la API limite cada operación según el rol para proteger las funciones administrativas y de vendedor. | Middleware `auth.js`, `sorteoController.js`, `ticketController.js` | `test_admin_crea_sorteo` (`tests/caja.test.js`), `test_admin_no_vende`, `test_ruta_protegida_sin_token` (`tests/tickets.test.js`, `tests/auth.test.js`) | Parcial |

## Observaciones de cobertura

- La suite incluye pruebas de autenticación, permisos, reglas de apuestas, ventas, liquidación/pago y caja.
- La consulta y el filtrado de sorteos/tiquetes, el cierre exacto o con sobrante, la caducidad del premio y varios errores de validación no tienen casos de prueba dedicados identificados en la suite actual.
- Antes de declarar completa la cobertura, conviene agregar pruebas para los escenarios anteriores y actualizar esta matriz con sus resultados de ejecución.
