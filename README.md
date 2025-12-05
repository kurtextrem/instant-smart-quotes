# Instant Smart Quotes

> [!NOTE]
> This fork updates the extension to support Manifest v3 and adds advanced typography features from [Tipograph](https://github.com/pnevyk/tipograph) (MIT license).

Replace typewriter quotes, apostrophes, ellipses, dashes, and special symbols with their typographically correct counterparts as you type.
Instant Smart Quotes is the last extension you will need to write beautiful typographically correct texts.

## Features

- **Smart Quotes**: Language-specific curly quotes for over 50 languages
- **Advanced Apostrophe Handling**: Proper apostrophes for contractions (don't, I'll, '90s) and possessives (James's)
- **Dash Intelligence**:
  - Em dashes (—) from three hyphens or spaced hyphens (` - ` → ` — `); does not replace them in lists (`- text`)
  - En dashes (–) from two hyphens, number ranges (1-5 → 1–5), or date ranges (Mon-Fri)
- **Quote Enhancements**:
  - Foot (′) and inch (″) symbols for measurements (5'10" → 5′10″)
  - Double-comma fix (,, → „)
- **Special Symbols**: Copyright (©), trademark (™), and registered (®) from (c), (tm), (r)
- **Space Normalization**: Multiple spaces reduced to single space, unless those at the beginning of a line. Trailing whitespaces at line ends are trimmed.
- **Ellipses** (…) from three dots
- **Quick Controls**: Enable/disable and change language from toolbar
- **Per-Site Settings**: All settings saved per page and synced across devices
- **Code-Aware**: Text in `backticks` and ```code blocks``` ignored

## Language-Specific Replacements

Depending on which language you have set, the following chars will be replaced for language-specific replacements:
', ", >>, <<

## Universal Replacements

These chars will be replaced regardless of language:
', --, ---, ..., (c), (tm), (r), foot/inch symbols

## Typography Resources

- English punctuation guidelines: <http://www.thepunctuationguide.com/>
- Quote styles by language: <https://en.wikipedia.org/wiki/Quotation_mark#Summary_table>
- Quote reference: <http://www.witch.westfalen.de/csstest/quotes/quotes.html>
- Typography best practices: [Practical Typography](https://practicaltypography.com/)

`"Don't be dumb"`, “you’re using Instant Smart Quotes”. ✍️

![Instant Smart Quotes preview](https://user-images.githubusercontent.com/3391981/81667198-43d56680-9443-11ea-99db-0effcc5cca08.gif)
