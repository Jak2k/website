---
title: Why & how I rooted my trashy Tolino e-reader
tags:
  [rooting, tolino, e-reader, android, ereader, ebook, e-book, reading, books]
featured: true
lastUpdated: 2024-05-09T18:00:00Z
---

I have been using a Tolino e-reader for at least 2 years. It's a device with pretty bad software, and I wouldn't recommend it to anyone. Below I will explain the problems I had with it and how I rooted it to make it good.

## What is a Tolino e-reader?

Tolino is a brand of e-readers sold in Germany. They are sold in various bookstores such as Thalia, Weltbild, Hugendubel, etc. The devices run on Android 4 and are based on the hardware of the Kobo e-readers. The hardware may seem slow, but it is actually fast enough to read books. What makes it seem slow is the e-ink display, but that's not the device's fault.

### The software problems

The real problem is the software. It is meant to be used with the stores of the bookstores mentioned above. You can buy books from them and read them on the device. The device is locked and you can't install any other applications on it. While it is technically possible to browse the web with the built-in browser, it is a terrible experience because the browser is very slow and based on an old version of Chromium (somewhere around version 30). This breaks many websites.

You can download books from other sources (such as [Project Gutenberg](https://www.gutenberg.org/) or [Onleihe](https://www.onleihe.de/)) and read them on the device, but there are more problems. While you can read most of them, some books cause the software to crash (even very simple text-only ones from Project Gutenberg). Sometimes it is not possible to go to the next page, and you have to open the book again to continue reading. Several times, the device completely crashed, and I had to plug it into a power source to restart it. (No, it was not out of battery. It had over 50% battery left.) There are also two reading modes: An old one and a "new" one. Both crash with some books, so you have to try both modes to see which one works with a particular book. The new mode is supposed to be better, but also has fewer features (dictionary, notes, etc.).

### The support is terrible

Each bookstore has its own support for the device. If you have a problem with the device, you have to contact the support of the bookstore where you bought the device. They will tell you to reset the device, which doesn't help at all. I asked them to give me a way to read the logs of the device, but they refused to give me ADB access. The support basically didn't know anything, and also told me that the device is not meant to be used with books from other sources. This raised the question of why the device has a browser, why it can sideload books, and why they advertise Onleihe in the manual.

## My search for a solution

### 1. Attempt: ADB

In forum threads, people have found a way to enable ADB on the device. Basically, you have to enter a specific number in the search to open a debug menu. There you can enable ADB. Unfortunately, this didn't work for me because the manufacturer has patched this several times. (It was probably the only thing they patched.) I reset the device several times to try this again, but the version the device shipped with was too old to have this debug menu. There were updates available on the Tolino website, but they only updated it to the latest version, which already patched this.

### 2. Attempt: Rooting

There are also zip files in these forums that can be used to root the device. These have to be installed via `fastboot`. Usually you have to press a key combination to enter `fastboot` mode, then connect the device to your computer and flash it. The Tolino does things differently: You connect the device to your computer, run the `fastboot' command (`fastboot flash boot image.zip') and then press the power button _for 30 seconds_. Because I forgot to `sudo' the command, I had to do this several times. (My hand was still hurting the next day.)

Before I thought of the `sudo` thing, I also tried flashing the recovery image, which didn't work. But when I tried to flash the image with `sudo`, I accidentally flashed a broken recovery image. A few weeks later (I may be a bit lazy), I flashed a working recovery image and was able to boot the device with a rooted boot image.

## After rooting

After rooting, I was able to access the device via ADB. I installed the following apps:

- [F-Droid](https://f-droid.org/): An app store for open source apps.
- [Total Commander](https://www.ghisler.com/): A file manager.
  Although I don't really need it, I like having a file manager on the device.
  I would recommend changing the color scheme to light because it works better with the e-ink display.
- Tint Browser: A browser based on Webview (I think). It has more features than the built-in browser, like tabs, but it is still a bit slow.
- Nook Clear Screen: An app that clears the screen. Useful if you get a ghosting effect.
- Button Savior: An app that adds a navigation bar to the screen.
  This is useful because the device does not have hardware buttons for navigation (home, back, etc.). It can also collapse to a small dot so it doesn't take up much space.
- KISS Launcher: A simple launcher that is easy to use with the e-ink display.
- [KOReader](https://koreader.rocks/): An e-reader app optimized for e-ink displays. It's so great that it deserves its own section.

### KOReader

I found KOReader in the F-Droid store about a year ago and have been using it on my phone. It is an e-reader app optimized for e-ink displays and can do a lot more than just read books:

- It can read many formats: PDF, DJVU, EPUB, MOBI, PDB, TXT, ZIP, CBT, CBZ, FB2, RTF, HTML, CHM, DOC
- OPDS catalogs (e.g. for downloading books from Project Gutenberg)
- File Manager
- Dictionary & Wikipedia
- Customizable gestures & status bar
- Reading statistics (syncable to cloud)
- Progress sync
- Screenshots
- Table of Contents
- Highlighting & Notes
- Profiles
- Light control
- Bookmarking
- Search
- Custom CSS
- Plugins
- RSS
- Text Editor
- Reading timer (so I get enough sleep)
- Battery statistics
- Shell
- And many more

I still discover new features occasionally. While writing this post, I discovered the Book Map feature, which shows you a map of the book and where you are in it.

### The tolino app

I can still use the device's original interface by opening the Tolino app. This allows me to read DRM-protected books and buy books from the seller's store. (Although I won't be buying books from them anymore.)

## Conclusion

The Tolino's standard software is pretty low quality. It is slow, crashes often and is locked. After rooting the device, I was able to install better apps and make the device usable. I can now read books from other sources without any problems. I can still use the Tolino app to read DRM-protected books. I would recommend rooting to anyone who has a Tolino e-reader. It is not that hard and makes the device much better.
