# Run

1. Run with flags `--trace-gc-verbose --trace-gc-ignore-scavenger --max-old-space-size=8196`
2. Wait for ~5 GiB memory usage
3. Wait for GC
4. See the results

# Results in Node 23.1

```
[7208:0x5df8760]    57625 ms: Mark-Compact 4828.6 (4924.1) -> 4490.0 (4596.6) MB, 1849.97 / 0.00 ms  (+ 0.7 ms in 0 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 1861 ms) (average mu = 0.967, current mu = 0.966) finalize incremental marking via stack guard; GC in old space requested
[7208:0x5df8760] Memory allocator,       used: 4706936 KB, available: 3734920 KB
[7208:0x5df8760] Read-only space,        used:    104 KB, available:      0 KB, committed:      0 KB
[7208:0x5df8760] New space,              used:      0 KB, available:  16109 KB, committed:  32768 KB
[7208:0x5df8760] New large object space, used:      0 KB, available:  16384 KB, committed:      0 KB
[7208:0x5df8760] Old space,              used: 4138665 KB, available:    495 KB*, committed: 4214888 KB
[7208:0x5df8760] Code space,             used:    113 KB, available:      0 KB*, committed:    256 KB
[7208:0x5df8760] Large object space,     used: 459008 KB, available:      0 KB, committed: 459024 KB
[7208:0x5df8760] Code large object space,     used:      0 KB, available:      0 KB, committed:      0 KB
[7208:0x5df8760] All spaces,             used: 4597891 KB, available: 3767909 KB*, committed: 4706936 KB
[7208:0x5df8760] Unmapper buffering 1 chunks of committed: 114696 KB
[7208:0x5df8760] External memory reported:     10 KB
[7208:0x5df8760] Backing store memory:   1351 KB
[7208:0x5df8760] External memory global 0 KB
[7208:0x5df8760] Total time spent in GC  : 4545.3 ms
[7208:0x5df8760] (*) Sweeping is still in progress, making available sizes inaccurate.
index 10000000
diffMs 1535

...

[7208:0x5df8760]   165239 ms: Mark-Compact (reduce) 5342.2 (5453.6) -> 5340.3 (5425.6) MB, 2242.44 / 0.00 ms  (+ 0.8 ms in 0 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 2258 ms) (average mu = 0.977, current mu = 0.979) finalize incremental marking via task; GC in old space requested
[7208:0x5df8760] Memory allocator,       used: 5555832 KB, available: 2886024 KB
[7208:0x5df8760] Read-only space,        used:    104 KB, available:      0 KB, committed:      0 KB
[7208:0x5df8760] New space,              used:      0 KB, available:   1006 KB, committed:   1024 KB
[7208:0x5df8760] New large object space, used:      0 KB, available:   1024 KB, committed:      0 KB
[7208:0x5df8760] Old space,              used: 5009333 KB, available:    387 KB*, committed: 5095528 KB
[7208:0x5df8760] Code space,             used:    113 KB, available:      0 KB*, committed:    256 KB
[7208:0x5df8760] Large object space,     used: 459008 KB, available:      0 KB, committed: 459024 KB
[7208:0x5df8760] Code large object space,     used:      0 KB, available:      0 KB, committed:      0 KB
[7208:0x5df8760] All spaces,             used: 5468559 KB, available: 2888442 KB*, committed: 5555832 KB
[7208:0x5df8760] Unmapper buffering 156 chunks of committed:  39936 KB
[7208:0x5df8760] External memory reported:     10 KB
[7208:0x5df8760] Backing store memory:   1351 KB
[7208:0x5df8760] External memory global 0 KB
[7208:0x5df8760] Total time spent in GC  : 7613.0 ms
[7208:0x5df8760] (*) Sweeping is still in progress, making available sizes inaccurate.
diffMs 1577
```

`diffMs` exceed 1500 ms

# Results in Bun (JavaScriptCore)

I have no idea how to trace gc in Bun, so, just output:

```
add 10000000
diffMs 84

...

add 12300000
diffMs 72
```

As you can see, `diffMs` is not that big as in NodeJS.
