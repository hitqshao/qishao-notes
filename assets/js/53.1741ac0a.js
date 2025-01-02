(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{508:function(e,t,a){"use strict";a.r(t);var r=a(8),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[e._v("[213] Cache Coherence for GPU Architectures")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_1-213-cache-coherence-for-gpu-architectures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-213-cache-coherence-for-gpu-architectures"}},[e._v("#")]),e._v(" 1. [213] Cache Coherence for GPU Architectures")]),e._v(" "),t("h4",{attrs:{id:"another-design-in-cpu-llc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#another-design-in-cpu-llc"}},[e._v("#")]),e._v(" Another Design in CPU LLC")]),e._v(" "),t("p",[e._v("Library Cache Coherence (LCC), that implements sequential consistency on CMPs by stalling writes to cache blocks until they have been self-invalidated by all sharers.")]),e._v(" "),t("p",[e._v("Library Cache Coherence (LCC) [34, 54] is a time-based hardware coherence proposal that stores timestamps in a directory structure and delays stores to unexpired blocks to enforce sequential consistency on CMPs."),t("br"),e._v("\nThe TC-Strong implementation of the TC framework is similar to LCC as both enforce write atomicity by stalling writes at the shared last level cache.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/3e7e13cc-7d64-4234-897b-03754489dd1f",alt:"image"}})]),e._v(" "),t("h4",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/2e62c5ed-574b-4cc2-9f85-8b269dc80358",alt:"image"}})]),e._v(" "),t("p",[e._v("We propose TC-Weak and a novel time-based memory fence mechanism to eliminate all write-stalling, improve performance, and reduce interconnect traffic compared to TC-Strong.")]),e._v(" "),t("ul",[t("li",[e._v("We find that the stalling of writes in TC-Strong causes poor performance on a GPU.")]),e._v(" "),t("li",[e._v("We also show that unlike for CPU applications [34, 54], the fixed timestamp prediction proposed by LCC is not suited for GPU applications.")])]),e._v(" "),t("h4",{attrs:{id:"gpu-memory-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpu-memory-system"}},[e._v("#")]),e._v(" GPU Memory System")]),e._v(" "),t("p",[e._v("Both thread-private and global memory are stored in off-chip GDDR DRAM and cached in the multi-level cache hierarchy, however only "),t("strong",[e._v("global memory requires coherence")]),e._v(".")]),e._v(" "),t("p",[e._v("Memory accesses to the same cache block from different threads within a wavefront are merged into a single wide access by the Coalescing Unit."),t("br"),e._v("\nA memory instruction generates one memory access for every unique cache line accessed by the wavefront."),t("br"),e._v("\nAll requests are handled in FIFO order by the in-order memory stage of a GPU core."),t("br"),e._v("\n🙇 "),t("strong",[e._v("Writes to the same word by multiple scalar threads in a single wavefront do not have a defined behaviour [46]; only one write will succeed")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"gpu-cache-hierarchy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpu-cache-hierarchy"}},[e._v("#")]),e._v(" GPU Cache Hierarchy")]),e._v(" "),t("p",[e._v("The GPU cache hierarchy consists of per-core private L1 data caches and a shared L2 cache."),t("br"),e._v("\nThe L1 caches are not coherent."),t("br"),e._v("\nThey follow a write-evict [46] (write-purge [24]), write no-allocate caching policy. "),t("br"),e._v("\nThe L2 caches are writeback with write-allocate.")]),e._v(" "),t("p",[e._v("Memory accesses generated by the coalescing unit in each GPU core are passed, one per cycle, to the per-core MSHR table. "),t("br"),e._v("\nThe MSHR table combines read accesses to the same cache line from different wavefronts to ensure "),t("strong",[e._v("only a single read access per-cache line per-GPU core")]),e._v(" is outstanding.")]),e._v(" "),t("p",[t("strong",[e._v("Writes are not combined and, since they write-through, any number of write requests to the same cache line from a GPU core may be outstanding.")])]),e._v(" "),t("p",[t("strong",[e._v("Point-to-point ordering in the interconnection network, L2 cache controllers and off-chip DRAM channels ensures that multiple outstanding writes from the same wavefront to the same\naddress complete in program order.")])]),e._v(" "),t("p",[e._v("This is another situation different from 🙇. It is different code in a program that write to the same address.")]),e._v(" "),t("h4",{attrs:{id:"atomic-operation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomic-operation"}},[e._v("#")]),e._v(" Atomic Operation")]),e._v(" "),t("p",[e._v("Atomic Operation. Read-modify-write atomic operations are performed at each memory partition by an Atomic Operation Unit.")]),e._v(" "),t("h4",{attrs:{id:"consistency-and-coherence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consistency-and-coherence"}},[e._v("#")]),e._v(" Consistency and Coherence")]),e._v(" "),t("p",[e._v("A cache coherence protocol performs the following three duties [3].")]),e._v(" "),t("ul",[t("li",[e._v("It propagates newly written values to all privately cached copies.")]),e._v(" "),t("li",[e._v("It informs the writing thread or processor when a write has been completed and is visible to all threads and processors.")]),e._v(" "),t("li",[e._v("Lastly, a coherence protocol may ensure write atomicity [3], i.e., a value from a write is logically seen by all threads at once.")])]),e._v(" "),t("p",[e._v("Write atomicity is commonly enforced in write-invalidate coherence protocols by requiring that all other copies of a cache block are invalidated before a write is completed.")]),e._v(" "),t("p",[t("strong",[e._v("Memory consistency models may [4, 19, 57, 59] or may not [2, 19, 53] require write atomicity.")])]),e._v(" "),t("h4",{attrs:{id:"directory-protocols"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#directory-protocols"}},[e._v("#")]),e._v(" Directory Protocols")]),e._v(" "),t("h5",{attrs:{id:"mesi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesi"}},[e._v("#")]),e._v(" MESI")]),e._v(" "),t("p",[t("strong",[e._v("four-state coherence protocol with writeback L1 and L2 caches")]),e._v("\nThe write-allocate policy at L1 requires that write data be buffered until proper coherence permission has been obtained."),t("br"),e._v("\nThis requires the addition of area and complexity to buffer stores in each GPU core.")]),e._v(" "),t("h5",{attrs:{id:"gpu-vi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpu-vi"}},[e._v("#")]),e._v(" GPU-VI")]),e._v(" "),t("p",[t("strong",[e._v("two-state coherence protocol")]),e._v("\nGPU-VI implements write-through, no write-allocate L1 caches."),t("br"),e._v("\nIt requires that any write completing at the L2 invalidate all L1 copies."),t("br"),e._v("\nA write to a shared cache line cannot complete until the L2 controller has sent invalidation requests and received acknowledgments from all sharers.")]),e._v(" "),t("p",[e._v("Two Optimizations:")]),e._v(" "),t("ul",[t("li",[e._v("First, it writes data directly to the L1 cache on a write hit before receiving an acknowledgement, eliminating the area and complexity overheads of buffering stores.")]),e._v(" "),t("li",[e._v("Second, it treats loads to L1 blocks with pending writes as "),t("strong",[e._v("misses")]),e._v(". This reduces stalling at the cache controller while maintaining write atomicity.")])]),e._v(" "),t("h4",{attrs:{id:"challenges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#challenges"}},[e._v("#")]),e._v(" Challenges")]),e._v(" "),t("h5",{attrs:{id:"coherence-traffic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coherence-traffic"}},[e._v("#")]),e._v(" Coherence Traffic")]),e._v(" "),t("p",[e._v("These overheads consist of recall traffic due to:")]),e._v(" "),t("ul",[t("li",[e._v("directory evictions,")]),e._v(" "),t("li",[e._v("false sharing invalidation traffic,")]),e._v(" "),t("li",[e._v("invalidation traffic due to inter-kernel communication.")])]),e._v(" "),t("p",[e._v("An effective way to reduce coherence traffic is to selectively disable coherence for data regions that do not require it.")]),e._v(" "),t("h5",{attrs:{id:"storage-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage-requirements"}},[e._v("#")]),e._v(" Storage Requirements")]),e._v(" "),t("p",[e._v("In a CPU-like coherence implementation [18] with enough storage to handle the worst  case number of memory accesses (one memory request per thread), a directory protocol would require an impractical on-chip buffer as large as 28% of the total GPU L2 cache for tracking coherence requests.")]),e._v(" "),t("h5",{attrs:{id:"protocal-complexity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#protocal-complexity"}},[e._v("#")]),e._v(" Protocal Complexity")]),e._v(" "),t("p",[e._v("stable states & Transient coherent states")]),e._v(" "),t("h4",{attrs:{id:"temporal-coherence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#temporal-coherence"}},[e._v("#")]),e._v(" Temporal Coherence")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/28162506-3247-4bcd-85ab-2519a647d507",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/246495be-7699-4612-936f-cc099582ef21",alt:"image"}})]),e._v(" "),t("h4",{attrs:{id:"tc-strong-coherence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tc-strong-coherence"}},[e._v("#")]),e._v(" TC-strong Coherence")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/16938b69-2d03-4867-b8c2-1e6ba8e3a4e7",alt:"image"}})]),e._v(" "),t("h4",{attrs:{id:"tc-weak-coherence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tc-weak-coherence"}},[e._v("#")]),e._v(" TC-weak Coherence")]),e._v(" "),t("p",[e._v("TC-Weak relaxes the write atomicity of TC-Strong. As we show in Section 8.3, doing so improves performance by 28% and lowers interconnect traffic by 26% compared to TC-Strong.")]),e._v(" "),t("p",[e._v("TC-Strong and LCC enforce coherence across all data by stalling writes."),t("br"),e._v("\nTC-Weak uses the insight that "),t("strong",[e._v("GPU applications may contain large amounts of data which does not require coherence and is unnecessarily penalized by write-stalling")]),e._v("."),t("br"),e._v("\nBy relaxing write-atomicity, TC-Weak eliminates write-stalling and shifts any potential stalling to explicit memory fence operations.")]),e._v(" "),t("p",[e._v("Major two benefits：")]),e._v(" "),t("ul",[t("li",[e._v("First, it eliminates expensive stalling at the shared L2 cache controllers, which affects all cores and wavefronts, and shifts it to scheduling of individual wavefronts at memory fences."),t("br"),e._v("\nA wavefront descheduled due to a memory fence does not affect the performance of other wavefronts.")]),e._v(" "),t("li",[e._v("Second, it enforces coherence only when required and specified by the program through memory fences. It implements the RCpc [19] consistency model; a detailed discussion on\nthis is available elsewhere [56].")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/9c775df1-72e3-40bd-a476-4f2e8670fcc1",alt:"image"}})]),e._v(" "),t("h5",{attrs:{id:"tc-strong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tc-strong"}},[e._v("#")]),e._v(" TC Strong:")]),e._v(" "),t("p",[e._v("F1 defers scheduling the wavefront because the wavefront has an outstanding store request."),t("br"),e._v("\nWhen S1’s store request reaches the L2 ( 3 ), the L2 stalls it because data’s global timestamp will not expire until time T=30."),t("br"),e._v("\nAt T=30, C2 self-invalidates data ( 4 ), and the L2 processes S1’s store ( 5 )."),t("br"),e._v("\nThe fence instruction completes when C1 receives the acknowledgment for S1’s request ( 6 ).")]),e._v(" "),t("h5",{attrs:{id:"tc-weak"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tc-weak"}},[e._v("#")]),e._v(" TC Weak:")]),e._v(" "),t("p",[e._v("The write response returns with the  global timestamp of the L2 cache line at the time of the write. The returned global timestamp is the guaranteed time by which the write will become visible to all cores in the system."),t("br"),e._v("\nThis is because by this time all cores will have invalidated their privately cached stale copies.")]),e._v(" "),t("p",[e._v("In this case, the value returned is 30 and corresponds to C2’s initially cached copy."),t("br"),e._v("\nThe L2 does not stall the write and sends back an acknowledgment with the GWCT, which updates the C1’s GWCT entry for this wavefront."),t("br"),e._v("\nAfter C1 receives the acknowledgment ( 4’ ), no memory requests are outstanding.")]),e._v(" "),t("p",[e._v("Comparing Figure 6(c) to 6(b) shows that TC-Weak performs better than TC-Strong because "),t("strong",[e._v("it only stalls at explicit memory fence operations")]),e._v("."),t("br"),e._v("\nThis ensures that writes to data that does not require coherence has minimal impact.")]),e._v(" "),t("p",[e._v("TC-Weak tracks the global timestamps returned by writes, called Global Write Completion Times (GWCT), for each wave-front."),t("br"),e._v("\nA memory fence operation uses this information to deschedule the wavefront sufficiently long enough to guar=antee that all previous writes from the wavefront have become globally visible.")]),e._v(" "),t("h4",{attrs:{id:"lifetime-prediction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lifetime-prediction"}},[e._v("#")]),e._v(" Lifetime Prediction")]),e._v(" "),t("ul",[t("li",[e._v("we show that a single lifetime value for all accesses performs well.")]),e._v(" "),t("li",[e._v("Moreover, this value is application dependent.")])]),e._v(" "),t("p",[e._v("a single lifetime prediction value at each L2 cache bank, and adjusts it based on application behaviour. A load obtains its lifetime prediction at the L2 bank.")]),e._v(" "),t("p",[e._v("The lifetime estimation is based on events local to L2 bank")]),e._v(" "),t("ul",[t("li",[e._v("L2 Block with unexpired timestamp evicted")]),e._v(" "),t("li",[e._v("load request miss in L1 due to expired")]),e._v(" "),t("li",[e._v("L2 receive a load request to a valid block with an expired global timestamp")]),e._v(" "),t("li",[e._v("store operation writes to an unexpired block at L2")])])])}),[],!1,null,null,null);t.default=s.exports}}]);