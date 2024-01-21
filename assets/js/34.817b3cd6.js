(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{436:function(t,e,a){"use strict";a.r(e);var o=a(5),i=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("strong",[t._v("1) LLama.cpp")])]),t._v(" "),e("p",[t._v("llama support compilation of x86, arm and gpu.")]),t._v(" "),e("p",[e("strong",[t._v("a) github download llama.cpp")])]),t._v(" "),e("p",[t._v("https://github.com/ggerganov/llama.cpp.git")]),t._v(" "),e("p",[e("strong",[t._v("b) gem5 support ARM architecture better, thus we compile llama.cpp with arm.")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/4bff59c8-4554-404b-a73f-73780860d6d5",alt:"image"}})]),t._v(" "),e("p",[t._v("Then we start to compile:\nmake UNAME_M=aarch64")]),t._v(" "),e("p",[t._v('the compile tool chain is based on aarch64-linux-gnu-gc-10. It will generate "main" binary if compress successfully.')]),t._v(" "),e("p",[t._v("use file main to check the file:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/563b9fe1-681c-46cf-9eae-c332bc5f3aa1",alt:"image"}})]),t._v(" "),e("p",[e("strong",[t._v("c) download a model to llama.cpp/models directory.")])]),t._v(" "),e("p",[t._v("Here I downloaded llama-2-7b-chat.Q2_K.gguf. It utilize 2bit quantization and only needs 3GB memory.")]),t._v(" "),e("p",[t._v('GGML_TYPE_Q2_K - "type-1" 2-bit quantization in super-blocks containing 16 blocks, each block having 16 weight. Block scales and mins are quantized with 4 bits. This ends up effectively using 2.5625 bits per weight (bpw)')]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/d7ac5770-c955-479d-82b0-e87c09a3b347",alt:"image"}})]),t._v(" "),e("p",[e("strong",[t._v('d) then we can run the main binary and model, my prompt is "How are you".')])]),t._v(" "),e("p",[t._v('./main  -m ./models/llama-2-7b-chat.Q2_K.gguf -p "How are you" -n 16')]),t._v(" "),e("p",[t._v("The last line in the following figure is the output.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/bb225f87-1c44-46b5-940c-7634c9bdcc24",alt:"image"}})]),t._v(" "),e("p",[t._v("|----------------------------------|---------|")]),t._v(" "),e("p",[e("strong",[t._v("2) gem5")])]),t._v(" "),e("p",[t._v("after we have build gem5 successfully, we can run the model with gem5.")]),t._v(" "),e("p",[t._v("Here I plan to run with 8 core.")]),t._v(" "),e("blockquote",[e("p",[t._v("build/ARM/gem5.fast\n--outdir=./m5out/llm_9\n./configs/example/se.py -c\n$LLAMA_path/llama.cpp/main-arm\n'--options=-m $LLAMA_path/llama-2-7b-chat.Q2_K.gguf -p Hi -n 16'\n--cpu-type=ArmAtomicSimpleCPU --mem-size=8GB -n 8")])]),t._v(" "),e("blockquote",[e("p",[t._v("The output is like the following:")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/bba1eb42-4df2-4199-814f-2fe556959a6f",alt:"image"}})]),t._v(" "),e("p",[t._v("The left several columns are output of LLAMA model. The followings are cpu ID with instruction executed.")]),t._v(" "),e("p",[t._v('The output of the model is "Hi，I\'m a 30-year-old male, and..."')]),t._v(" "),e("p",[t._v("However, only 4 core has been used, since LLAMA.cpp default threads configuration is 4.")]),t._v(" "),e("p",[t._v("Then we can configure the model with 8 thread.")]),t._v(" "),e("blockquote",[e("p",[t._v("build/ARM/gem5.fast\n--outdir=./m5out/llm_9\n./configs/example/se.py -c\n$LLAMA_path/llama.cpp/main-arm\n'--options=-m $LLAMA_path/llama-2-7b-chat.Q2_K.gguf -p Hi -n 16 "),e("strong",[t._v("-t 8")]),t._v("'\n--cpu-type=ArmAtomicSimpleCPU --mem-size=8GB -n 8")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/26bedfc9-2b30-4f76-8eba-535159bc0749",alt:"image"}})]),t._v(" "),e("p",[t._v('Now, you can see that by default, only CPU0 execute 2.9 billion instruction with the output of "Hi" in 8 core simulation.\nHowever, with default 4 core, it has to run 5.4 billion instruction to the same result. This complies to the number of cores runing parallely.')])])}),[],!1,null,null,null);e.default=i.exports}}]);