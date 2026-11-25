---
title: PadDeck
company: Proyecto personal
period: nov 2026 — actualidad
start: 2026-11-01
role: Creador · iOS y macOS
kind: Proyecto personal
summary: Convierte el iPhone o el iPad en trackpad, teclado y panel de atajos inalámbrico para el Mac. Publicado en App Store, con una app gratuita para Mac y una versión para iPads antiguos con jailbreak.
stack: [Swift, UIKit, SwiftUI, Network.framework, Objective-C, macOS, Bonjour, App Store]
icon: /projects/paddeck/icon.webp
screenshot: /projects/paddeck/ipad-en.jpg
personal: true
links:
  - kind: appStore
    url: https://apps.apple.com/app/id6838387257
  - kind: site
    url: https://douugr.github.io/paddeck/
  - kind: code
    url: https://github.com/douugr/paddeck
  - kind: cydia
    url: https://douugr.github.io/repo/
---

![PadDeck en el iPad: trackpad con teclado de Mac completo](/projects/paddeck/ipad-en.jpg)

## La idea

Empezó con un iPad 3 guardado en un cajón: convertirlo en teclado y trackpad para controlar el Mac desde el sofá. El proyecto creció hasta tres apps que se comunican entre sí: la app de **iPhone y iPad** en App Store, **PadDeck para Mac**, gratuita, en la barra de menús, y la versión original para **iPads con iOS 8** y jailbreak, distribuida en mi repositorio de Cydia.

## Qué hace

- **Trackpad** con toque para hacer clic, desplazamiento con inercia como el del Mac, doble toque y arrastre, gestos de tres dedos y una franja de desplazamiento para usar con una sola mano
- **Teclado de Mac** con ⌘ ⌥ ⌃ ⇧, teclas de función y multimedia y acentos al mantener pulsada la letra, compatible con cualquier distribución de teclado del Mac
- **Panel de atajos** estilo Stream Deck: 45 botones para atajos, textos, apps, sitios y teclas multimedia
- **19 perfiles de color** con los acabados del MacBook Neo, Air, Pro e iMac
- Conexión **por Wi-Fi o cable USB**, con emparejamiento por PIN

## Por dentro

- **Protocolo propio**: TCP para clics y teclas, UDP para el movimiento del puntero y Bonjour para encontrar el Mac. Por cable pasa por usbmuxd, el mismo servicio que usa el Finder para hablar con el iPhone
- **App de Mac** en Swift que genera los eventos de ratón y teclado, suaviza el puntero por Wi-Fi y está firmada y notarizada por Apple
- **App de App Store** en Swift y UIKit, con pantallas en SwiftUI, Network.framework y diseños para iPhone, iPad y Split View, en inglés y portugués
- **App para iOS 8** en Objective-C, compilada para armv7 y distribuida como paquete de Cydia
- Del prototipo a la publicación: ícono, sitio, páginas de soporte y privacidad, textos y capturas de la tienda
