# 🐈 Gotta Go by Six · 六点必须走

> **Your boss won't let you leave. Scooters won't let you walk. Your cat won't let your furniture live.**
>
> 老板不让你走，电鸡不让你过，猫不让家具活。

[![Version](https://img.shields.io/badge/version-0.6.0-green)](#features) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![HTML5](https://img.shields.io/badge/platform-HTML5-orange)](index.html)

A bite-sized, bilingual, replayable **commute-survival arcade game**, inspired by the chaos of walking home in Guangzhou. Dodge scooters that *should not be on the sidewalk*, race against a mischievous cat demolishing your apartment, and share an absurd end-of-run report with your friends.

**Status:** v0.6 playable prototype · Built as a self-contained HTML/CSS/JavaScript file. No build step, account, or game server required.



## 🎮 Play locally

1. Download or clone this repository.
2. Open **`index.html`** in a modern desktop or mobile browser.
3. Select **Random Run**, **Daily Challenge**, or enter a friend's `CAT-XXXXXX` challenge code.
4. Get home before your cat wrecks everything.

No package installation or development server is needed for local play. Online sharing destinations require an internet connection.

## 🕹️ Controls

| Input | Action |
|---|---|
| `W A S D` or arrow keys | Move |
| `Shift` | Sprint |
| `E` | Interact with stalls, shortcuts and other street objects |
| `Q` | Call your cat remotely (limited use) |
| `P` | Pause / resume |
| `R` | Restart |
| `1` / `2` | Choose an event option |
| Touch controls | Mobile movement and actions |

## ✨ Features

- **Pedestrian vs. scooter chaos:** parked scooters blocking sidewalks, wrong-way riders, surprise honks from behind, traffic and puddles.
- **Dual pressure:** protect your stamina while your cat slowly destroys furniture at home, visible via a live home camera.
- **Roguelite variety:** random city and cat modifiers, collectible power-ups, side quests, street events, stalls and shortcuts.
- **Three modes:** randomly generated runs, a daily challenge seeded by UTC date, and replayable `CAT-XXXXXX` challenge codes.
- **Close-call combos:** dodge chains and adrenaline rewards.
- **Shareable endings:** 1080 × 1350 PNG result poster, copyable captions, challenge code/link sharing, and social sharing helpers.
- **English / 简体中文:** browser-language detection, English fallback, and manually selectable language. Preferences are remembered locally.
- **Offline first:** game logic and art are rendered inside the HTML file. Personal best records use browser local storage.

### Share a run



- **Save PNG:** download a rendered result poster.
- **X / Twitter:** open a pre-filled post containing your result; attach the PNG yourself.
- **Instagram:** save the PNG, copy the caption, then upload it in Instagram.
- **Native sharing:** supported mobile browsers may offer a system share sheet with the image and text. This is browser/platform dependent.
- **Challenge code:** friends can enter the same code to get the same seeded city rules and road layout. Dynamic traffic is simulation-dependent, so runs are not frame-for-frame identical.

When the game is hosted over HTTPS, challenge links can point back to that playable page. Sharing directly from a local `file://` copy is generally code-based.

## 🌍 Localization

On first visit, a Chinese-language browser displays simplified Chinese; English and other languages display English. Use the in-game `EN / 中文` toggle at any time. Results and exported share posters follow the currently selected language.

## 🚀 Hosting (optional)

This is a static website: `index.html` can be hosted at the root of any static hosting service. No backend or environment variables are needed.

For GitHub Pages, enable Pages in the repository settings and select the branch/folder containing `index.html` **only when you are ready to publish the game publicly**. This repository may initially be kept private.

## 🗂️ Project structure

```text
gotta-go-by-six/
├── index.html              # Complete playable game (v0.6)
├── README.md               # English-first documentation
├── README.zh-CN.md         # 中文说明
├── LICENSE                 # MIT License
└── .gitignore
```

## 🧪 Prototype notes

- This is a gameplay prototype, not a networked leaderboard or multiplayer game.
- Daily challenges and codes are deterministic for their map/modifier selection but not identical for every traffic interaction.
- The social buttons open external share flows and **do not publish posts on your behalf**.
- No data is sent to a developer-operated server by the game itself.

## 📄 License

MIT License. See [LICENSE](LICENSE). © 2026 [CNSleepybear](https://github.com/CNSleepybear).