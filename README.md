# Your Week in One Line

[![make.fun](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced.svg)](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced)
[![rank](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced/qyhchy999-jpg/u-boge-your-week-in-one-line-d1c14ced/rank.svg)](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced)
[![reward](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced/qyhchy999-jpg/u-boge-your-week-in-one-line-d1c14ced/reward.svg)](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced)

The whole week in one line: "This week I attended 14 meetings, made zero decisions, and my calendar has filed for divorce." The arithmetic is the joke — fourteen meetings and not one decision — and the calendar filing for divorce is the chaos: even the schedule has given up on the worker. Every word earns its place.

## Entry

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt`. The line is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of at most 100 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Second pass: fourteen meetings, zero decisions — the ratio is the joke. -->
<!-- Third pass: the divorce is the chaos — even the calendar gave up. -->
<!-- Fourth pass: the line is short because the week was long — and empty. -->
<!-- Fifth pass: the calendar files for divorce, not the worker — the schedule quits first. -->
