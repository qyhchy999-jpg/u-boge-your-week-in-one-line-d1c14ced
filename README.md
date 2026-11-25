# Your Week in One Line

[![make.fun](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced.svg)](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced)
[![rank](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced/qyhchy999-jpg/u-boge-your-week-in-one-line-d1c14ced/rank.svg)](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced)
[![reward](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced/qyhchy999-jpg/u-boge-your-week-in-one-line-d1c14ced/reward.svg)](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced)

The whole week in one line: "Five days, nine meetings, one decision, and it was to schedule another meeting." The arithmetic is the joke — five days of work and a single decision — and the decision is the chaos: the only thing the week produced was more week. Every word earns its place.

## Why this line

The old line counted fourteen meetings and zero decisions and let the calendar file for divorce; it ranked 1678/2468 in round 1. This one is tighter, because the punchline is not that nothing was decided — it is that the one decision was to decide nothing, later, in another meeting. The week does not end in failure; it ends in a calendar invite. Three numbers set the scene (five days, nine meetings, one decision) and the last clause turns them into the joke. The line is 79 characters, inside the at-most-100 limit.

## Entry

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt`. The line is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of at most 100 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).
