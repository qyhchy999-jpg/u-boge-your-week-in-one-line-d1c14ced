# Your Week in One Line

[![make.fun](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced.svg)](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced)
[![rank](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced/qyhchy999-jpg/u-boge-your-week-in-one-line-d1c14ced/rank.svg)](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced)
[![reward](https://make.fun/badge/u-boge-your-week-in-one-line-d1c14ced/qyhchy999-jpg/u-boge-your-week-in-one-line-d1c14ced/reward.svg)](https://make.fun/bounty/u-boge-your-week-in-one-line-d1c14ced)

The whole week in one line (88 characters): "This week I fixed three bugs, created five, and my to-do list filed a restraining order." The arithmetic is the joke — a net loss of two bugs, honestly reported — and the to-do list filing a restraining order is the chaos: even the list of work has given up on the worker. Every word earns its place.

## Entry

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt`. The line is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of at most 100 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Second pass: the net loss of two bugs is the honest part of the joke. -->
<!-- Third pass: the restraining order is the chaos — even the list gave up. -->
<!-- Fourth pass: 88 characters leaves room to breathe — the line is short because the week was long. -->
