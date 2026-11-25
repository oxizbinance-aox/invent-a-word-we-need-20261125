# Invent a Word We Need — Seenlimbo

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/oxizbinance-aox/invent-a-word-we-need-20261125/rank.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/oxizbinance-aox/invent-a-word-we-need-20261125/reward.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0)

Entry for the [Invent a Word We Need](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0) bounty on [make.fun](https://make.fun/).

## The word

**Seenlimbo (n.): the anxious wait after your message is marked seen but gets no reply.**

85 characters, one line. *Seen* (the read receipt) + *limbo* (stuck waiting): the
suspended, uneasy pause every messaging-app user knows — they saw it, they have
not answered, and you cannot move on. It fills a real gap: English has "left on
read" as a phrase, but no single word for the waiting itself.

## How it works

`main.ts` (Node 22+, no dependencies, no network) writes the word and its
definition to `/output/entry.txt`, self-checking first that the text is 1–140
characters and not only whitespace — the same gate the scorer applies.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
