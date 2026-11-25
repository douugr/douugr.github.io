---
title: PadDeck
company: Projeto pessoal
period: nov 2026 — atual
start: 2026-11-01
role: Criador · iOS e macOS
kind: Projeto pessoal
summary: Transforma o iPhone ou o iPad em trackpad, teclado e painel de atalhos sem fio para o Mac. Publicado na App Store, com app gratuito para Mac e uma versão para iPads antigos com jailbreak.
stack: [Swift, UIKit, SwiftUI, Network.framework, Objective-C, macOS, Bonjour, App Store]
icon: /projects/paddeck/icon.webp
personal: true
links:
  - kind: appStore
    url: https://apps.apple.com/br/app/paddeck-mac-keyboard-mouse/id6838387257
  - kind: site
    url: https://douugr.github.io/paddeck/pt/
  - kind: code
    url: https://github.com/douugr/paddeck
  - kind: cydia
    url: https://douugr.github.io/repo/
---

![PadDeck no iPad: trackpad com teclado de Mac completo](/projects/paddeck/ipad-pt.jpg)

## A ideia

Começou com um iPad 3 parado na gaveta: a ideia era fazer dele um teclado e trackpad para controlar o Mac do sofá. O projeto cresceu para três apps que conversam entre si: o app do **iPhone e iPad**, na App Store, o **PadDeck para Mac**, gratuito, que fica na barra de menus, e a versão original para **iPads com iOS 8** e jailbreak, distribuída pelo meu repositório do Cydia.

## O que ele faz

- **Trackpad** com toque para clicar, rolagem com inércia como a do Mac, toque duplo e arraste, gestos de três dedos e uma faixa de rolagem para usar com uma mão só
- **Teclado de Mac** com ⌘ ⌥ ⌃ ⇧, teclas de função e de mídia e acentos ao segurar a letra, funcionando com qualquer layout de teclado do Mac
- **Painel de atalhos** no estilo Stream Deck: 45 botões para atalhos, textos, apps, sites e teclas de mídia
- **19 perfis de cor** com o acabamento do MacBook Neo, Air, Pro e iMac
- Conexão **pelo Wi-Fi ou por cabo USB**, com pareamento por PIN

## Por dentro

- **Protocolo próprio**: TCP para cliques e teclas, UDP para o movimento do cursor e descoberta do Mac por Bonjour. No cabo, a conexão passa pelo usbmuxd, o mesmo serviço que o Finder usa para falar com o iPhone
- **App do Mac** em Swift, que gera os eventos de mouse e teclado, suaviza o cursor no Wi-Fi e é assinado e notarizado pela Apple
- **App da App Store** em Swift e UIKit, com telas em SwiftUI, Network.framework e layouts para iPhone, iPad e Split View, em inglês e português
- **App para iOS 8** em Objective-C, compilado para armv7 e distribuído como pacote do Cydia
- Do protótipo à publicação: ícone, site, páginas de suporte e privacidade, textos e prints da loja
