(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{541:function(t,e,i){"use strict";i.r(e);var n=i(8),a=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ol",[e("li",[t._v("[139] Understanding and Overcoming the Challenges of Efficient Transformer Quantization")]),t._v(" "),e("li",[t._v("[43] Integer or Floating Point? New Outlooks for Low-Bit Quantization on Large Language Models")]),t._v(" "),e("li",[t._v("[26] FP8-LM: Training FP8 Large Language Models")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"_1-139-understanding-and-overcoming-the-challenges-of-efficient-transformer-quantization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-139-understanding-and-overcoming-the-challenges-of-efficient-transformer-quantization"}},[t._v("#")]),t._v(" 1. [139] Understanding and Overcoming the Challenges of Efficient Transformer Quantization")]),t._v(" "),e("h3",{attrs:{id:"problems"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problems"}},[t._v("#")]),t._v(" Problems")]),t._v(" "),e("p",[t._v("The problems encountered when attempting to quantize transformer models like BERT, as highlighted in the paper:")]),t._v(" "),e("ul",[e("li",[t._v("High Dynamic Range of Activations\n"),e("ul",[e("li",[t._v("The authors observed that the activation tensors in transformer models, particularly in the residual connections, exhibit a very high dynamic range.")]),t._v(" "),e("li",[t._v("This means that the values within these tensors vary significantly in magnitude.")]),t._v(" "),e("li",[t._v("Quantization, especially when using low-bit fixed-point formats (like 8-bit integer), struggles to accurately represent such a wide range of values.")]),t._v(" "),e("li",[t._v("Trying to capture both very small and very large values within the limited range of a low-bit format inevitably leads to significant quantization errors.")])])]),t._v(" "),e("li",[t._v("Presence of Structured Outliers\n"),e("ul",[e("li",[t._v("The authors identified the presence of structured outliers within the activation tensors, particularly in the residual connections after the feed-forward network (FFN).")]),t._v(" "),e("li",[t._v("These outliers are not random; they appear to be correlated with specific input tokens and embedding dimensions.")]),t._v(" "),e("li",[t._v("Further analysis revealed that these outliers influence the attention mechanism in the subsequent layers, encouraging the model to attend to specific tokens like the separator token ([SEP]).")]),t._v(" "),e("li",[t._v("While this attention behavior might be beneficial for the model's performance, the outliers that cause it also create challenges for quantization.")])])]),t._v(" "),e("li",[t._v("Sensitivity to Quantization Noise\n"),e("ul",[e("li",[t._v("Different parts of the transformer model exhibit varying sensitivities to the noise introduced by quantization.")]),t._v(" "),e("li",[t._v("Some components, like the residual connections and certain attention heads, are particularly sensitive, and quantizing them aggressively can lead to a significant drop in accuracy.")]),t._v(" "),e("li",[t._v("This sensitivity necessitates careful consideration of which parts of the model to quantize and at what bit-width.")])])])]),t._v(" "),e("h3",{attrs:{id:"solutions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[t._v("#")]),t._v(" Solutions")]),t._v(" "),e("p",[t._v("solutions proposed in the paper:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Mixed-precision PTQ")]),t._v(" "),e("ul",[e("li",[t._v("The authors observed that different parts of the BERT model have varying sensitivities to quantization noise.")]),t._v(" "),e("li",[t._v("To address this, they proposed using a higher bit-width (16-bit) for the more sensitive activation tensors, particularly the residual sum after the feed-forward network (FFN).")]),t._v(" "),e("li",[t._v("This higher bit-width allows for more accurate representation of both the FFN's input and output, minimizing potential errors.")]),t._v(" "),e("li",[t._v("Additionally, they explored using low-bit (2-4) quantization for weights and token embeddings, which can significantly reduce model size without much accuracy loss.")])])]),t._v(" "),e("li",[e("p",[t._v("Per-embedding-group PTQ")]),t._v(" "),e("ul",[e("li",[t._v("The authors identified that outliers in the activation tensors primarily reside in a few specific embedding dimensions.")]),t._v(" "),e("li",[t._v("To address this, they proposed a novel per-embedding-group (PEG) quantization scheme, where distinct quantization parameters are used for different embedding dimensions or groups of dimensions.")]),t._v(" "),e("li",[t._v("This method involves splitting the activation tensor into groups along the embedding dimension and applying separate quantization parameters to each group.")]),t._v(" "),e("li",[t._v("To optimize this process, they introduced a range-based permutation step to ensure that all outliers are grouped together.")]),t._v(" "),e("li",[t._v("This approach effectively handles outliers without significantly increasing computational overhead.")])])]),t._v(" "),e("li",[e("p",[t._v("Quantization-aware training (QAT)")]),t._v(" "),e("ul",[e("li",[t._v("The authors also explored QAT, where the model is trained with simulated quantization operations.")]),t._v(" "),e("li",[t._v("This allows the model to adapt to the quantization noise, leading to improved performance compared to post-training quantization.")]),t._v(" "),e("li",[t._v("During QAT, they used learnable ranges for both weights and activations, further enhancing the model's adaptability to quantization.")])])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"_2-43-integer-or-floating-point-new-outlooks-for-low-bit-quantization-on-large-language-models"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-43-integer-or-floating-point-new-outlooks-for-low-bit-quantization-on-large-language-models"}},[t._v("#")]),t._v(" 2.[43] Integer or Floating Point? New Outlooks for Low-Bit Quantization on Large Language Models")]),t._v(" "),e("h3",{attrs:{id:"key-takeaways-in-three-sentences"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key-takeaways-in-three-sentences"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Key Takeaways in Three Sentences")])]),t._v(" "),e("ol",[e("li",[t._v("The study demonstrates that "),e("strong",[t._v("low-bit floating-point formats, particularly FP8, provide superior quantization accuracy for LLMs compared to INT8")]),t._v(" , with comparable hardware efficiency at 8-bit precision.")]),t._v(" "),e("li",[t._v("The "),e("strong",[t._v("Mixture of Formats Quantization (MoFQ) approach optimally selects between INT and FP per layer")]),t._v(" , improving accuracy without increasing computational overhead.")]),t._v(" "),e("li",[t._v("MoFQ achieves "),e("strong",[t._v("state-of-the-art results in both W4-only and W8A8 quantization")]),t._v(" , outperforming existing methods like GPTQ, AWQ, LLM.int8(), and SmoothQuant while maintaining "),e("strong",[t._v("efficient inference speed")]),t._v(" .")])]),t._v(" "),e("h3",{attrs:{id:"abstract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Abstract")])]),t._v(" "),e("p",[t._v("The study finds that optimal quantization formats vary across layers in LLMs, leading to the "),e("strong",[t._v("Mixture of Formats Quantization (MoFQ)")]),t._v("  approach, which selects the best format per layer."),e("br"),t._v("\nMoFQ achieves superior or comparable performance to current quantization methods for weight-only (W-only) and weight-activation (WA) quantization without additional hardware overhead.")]),t._v(" "),e("h3",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Introduction")])]),t._v(" "),e("p",[t._v("Quantization minimizes LLMs' size and inference costs, with prior work focusing on low-bit integer formats."),e("br"),t._v("\nHowever, as LLMs grow, integer quantization becomes less effective, requiring optimizations or alternatives. Low-bit floating-point formats have emerged as viable alternatives, with FP8 already supported in NVIDIA’s H100 GPUs.")]),t._v(" "),e("p",[t._v("The study:")]),t._v(" "),e("ol",[e("li",[t._v("Compares INT and FP formats in terms of hardware efficiency and quantization error.")]),t._v(" "),e("li",[t._v("Proposes "),e("strong",[t._v("Mixture of Formats Quantization (MoFQ)")]),t._v(" , selecting the best format per layer.")]),t._v(" "),e("li",[t._v("Implements an inference system for W-only quantization, maintaining performance parity with INT-based systems.")])]),t._v(" "),e("h3",{attrs:{id:"background-and-related-works"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#background-and-related-works"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Background and Related Works")])]),t._v(" "),e("p",[e("strong",[t._v("Integer vs. Floating-Point Formats")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Integer (INT)")]),t._v(" : Uniformly distributed values.")]),t._v(" "),e("li",[e("strong",[t._v("Floating-Point (FP)")]),t._v(" : Non-uniform distribution, allowing higher precision for small values but reduced precision for large values.")]),t._v(" "),e("li",[e("strong",[t._v("Hardware efficiency")]),t._v(" : FP operations typically cost more than INT, but at 8-bit, FP8 and INT8 MAC (Multiply-Accumulate) units have nearly identical area costs.")])]),t._v(" "),e("p",[e("strong",[t._v("Post-Training Quantization (PTQ) for LLMs")])]),t._v(" "),e("p",[t._v("Two main PTQ strategies:")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Weight-Only (W-only) Quantization:")]),t._v("  Applies to weights only, e.g., W4A16.")]),t._v(" "),e("li",[e("strong",[t._v("Weight-Activation (WA) Quantization:")]),t._v("  Quantizes both weights and activations, e.g., W8A8.")])]),t._v(" "),e("p",[t._v("State-of-the-art (SOTA) methods:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("LLM.int8()")]),t._v(" : Uses mixed precision (INT8+FP16).")]),t._v(" "),e("li",[e("strong",[t._v("SmoothQuant")]),t._v(" : Redistributes quantization difficulty from activations to weights.")]),t._v(" "),e("li",[e("strong",[t._v("GPTQ & AWQ")]),t._v(" : Use second-order information and pre-scaling techniques to improve quantization.")])]),t._v(" "),e("h3",{attrs:{id:"comparative-analysis-of-int-and-fp-formats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comparative-analysis-of-int-and-fp-formats"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Comparative Analysis of INT and FP Formats")])]),t._v(" "),e("p",[e("strong",[t._v("A. Hardware Cost of INT vs. FP MAC Units")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("At 8-bit precision, FP8 and INT8 MACs require nearly the same hardware area")]),t._v(" , aligning with H100 GPU capabilities.")])]),t._v(" "),e("p",[e("strong",[t._v("B. Quantization Error Comparison")])]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("4-bit Weight-Only (W4) Quantization")]),t._v("  (LLaMA-65B model):")])]),t._v(" "),e("ul",[e("li",[t._v("Some layers perform better with INT4, while others favor FP4, indicating "),e("strong",[t._v("layer-dependent format preference")]),t._v(" .")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/user-attachments/assets/97be028e-fdb3-4883-a92e-b784d1ff1f87",alt:"image"}})]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[t._v("8-bit Weight-Activation (W8A8) Quantization")]),t._v(" :")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Weights")]),t._v(" : INT8 generally has lower quantization error.")]),t._v(" "),e("li",[e("strong",[t._v("Activations")]),t._v(" : FP8 shows "),e("strong",[t._v("better robustness")]),t._v("  for dynamic activation tensors.")]),t._v(" "),e("li",[t._v("Best choice: INT8 for weights, FP8 for activations—but hardware constraints necessitate using the same format per layer.")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/user-attachments/assets/7af41adf-5821-4c0b-8599-1385c1982c87",alt:"image"}})]),t._v(" "),e("h3",{attrs:{id:"exploiting-int-and-fp-complementarity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exploiting-int-and-fp-complementarity"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Exploiting INT and FP Complementarity")])]),t._v(" "),e("p",[e("strong",[t._v("A. Improved Low-Bit FP4 Format")])]),t._v(" "),e("ul",[e("li",[t._v("IEEE floating-point format reserves exponent values for NaN and Inf.")]),t._v(" "),e("li",[e("strong",[t._v("Reallocating NaN & Inf to normalized numbers improves FP4 precision")]),t._v("  by 35%.")])]),t._v(" "),e("p",[e("strong",[t._v("B. Mixture of Formats Quantization (MoFQ)")])]),t._v(" "),e("ul",[e("li",[t._v("Selects the best quantization format (INT or FP) "),e("strong",[t._v("per layer")]),t._v("  based on quantization error.")]),t._v(" "),e("li",[t._v("Works for both "),e("strong",[t._v("W-only and WA quantization")]),t._v(" .")]),t._v(" "),e("li",[e("strong",[t._v("Algorithm")]),t._v(" : Iterates through layers, computes quantization error for INT and FP, and selects the lower-error format.")])]),t._v(" "),e("p",[e("strong",[t._v("C. Low-Bit W-Only Inference System")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("INT4 and FP4 require conversion to FP16 before computation")]),t._v("  due to FP16 activations.")]),t._v(" "),e("li",[e("strong",[t._v("W8A8 quantization")]),t._v(" : FP16 activations are converted to FP8 or INT8 based on next-layer format selection.")]),t._v(" "),e("li",[e("strong",[t._v("No additional hardware overhead for FP-based or MoFQ-based inference")]),t._v("  compared to INT-based quantization.")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/user-attachments/assets/7d5e0e92-deda-4e40-8775-b428fff2ca0c",alt:"image"}})]),t._v(" "),e("h3",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Conclusion")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Comparative study")]),t._v(" : INT and FP formats have complementary strengths.")]),t._v(" "),e("li",[e("strong",[t._v("Key finding")]),t._v(" : "),e("strong",[t._v("FP8 and INT8 MAC units have similar hardware costs at low-bit quantization")]),t._v(" .")]),t._v(" "),e("li",[e("strong",[t._v("MoFQ method")]),t._v(" :\n"),e("ul",[e("li",[t._v("Selects the best quantization format "),e("strong",[t._v("per layer")]),t._v(" .")]),t._v(" "),e("li",[e("strong",[t._v("Achieves state-of-the-art accuracy")]),t._v("  in W4-only and W8A8 quantization.")]),t._v(" "),e("li",[e("strong",[t._v("No additional inference latency or hardware overhead")]),t._v(" .")])])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"_26-fp8-lm-training-fp8-large-language-models"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_26-fp8-lm-training-fp8-large-language-models"}},[t._v("#")]),t._v(" [26] FP8-LM: Training FP8 Large Language Models")]),t._v(" "),e("h3",{attrs:{id:"abstract-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abstract-2"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Abstract")])]),t._v(" "),e("p",[t._v("The paper explores "),e("strong",[t._v("FP8 low-bit data formats")]),t._v("  for training large language models (LLMs), significantly reducing "),e("strong",[t._v("memory usage and computation costs")]),t._v("  while maintaining accuracy.")]),t._v(" "),e("p",[t._v("The authors introduce an "),e("strong",[t._v("FP8 automatic mixed-precision training framework")]),t._v("  with three levels of FP8 utilization, improving mixed-precision and distributed parallel training. "),e("strong",[t._v("Key results")]),t._v("  show that training the "),e("strong",[t._v("GPT-175B model on an H100 GPU platform")]),t._v("  using FP8:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Reduces memory usage by 39%")])]),t._v(" "),e("li",[e("strong",[t._v("Speeds up training by 75% compared to BF16 (Megatron-LM)")])]),t._v(" "),e("li",[e("strong",[t._v("Outperforms Nvidia Transformer Engine by 37%")]),t._v("\nThe "),e("strong",[t._v("FP8 training methodology is generalizable")]),t._v("  to fine-tuning, instruction tuning, and reinforcement learning with human feedback (RLHF). The framework is "),e("strong",[t._v("open-sourced")]),t._v("  at "),e("a",{attrs:{href:"https://github.com/Azure/MS-AMP",target:"_blank",rel:"noopener noreferrer"}},[t._v("aka.ms/MS.AMP"),e("OutboundLink")],1),t._v(" .")])]),t._v(" "),e("h3",{attrs:{id:"_1-introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-introduction"}},[t._v("#")]),t._v(" "),e("strong",[t._v("1. Introduction")])]),t._v(" "),e("p",[t._v("LLMs have demonstrated exceptional performance in various domains but are extremely expensive to train."),e("br"),t._v("\nThe cost of training models like "),e("strong",[t._v("GPT-3 (175B) or PaLM (540B)")]),t._v("  is enormous, requiring "),e("strong",[t._v("thousands of GPUs or TPUs")]),t._v(" ."),e("br"),t._v("\nLow-precision training is a "),e("strong",[t._v("promising solution")]),t._v("  as it:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Increases speed")])]),t._v(" "),e("li",[e("strong",[t._v("Reduces memory usage")])]),t._v(" "),e("li",[e("strong",[t._v("Minimizes communication overhead")])])]),t._v(" "),e("p",[t._v("Most existing frameworks, such as "),e("strong",[t._v("Megatron-LM, MetaSeq, and Colossal-AI")]),t._v(" , use "),e("strong",[t._v("FP32, FP16, or BF16 mixed-precision training")]),t._v(" , but "),e("strong",[t._v("FP8 offers significant efficiency gains")]),t._v(" :")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("2× speed-up")])]),t._v(" "),e("li",[e("strong",[t._v("50%-75% memory and communication savings")])])]),t._v(" "),e("h4",{attrs:{id:"challenges-of-fp8-training"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#challenges-of-fp8-training"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Challenges of FP8 Training")])]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Data underflow/overflow issues")]),t._v("  due to FP8’s limited dynamic range.")]),t._v(" "),e("li",[e("strong",[t._v("Numerical instabilities and divergence")]),t._v("  during training.")])]),t._v(" "),e("h4",{attrs:{id:"proposed-fp8-mixed-precision-framework"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proposed-fp8-mixed-precision-framework"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Proposed FP8 Mixed-Precision Framework")])]),t._v(" "),e("ul",[e("li",[t._v("Introduces "),e("strong",[t._v("three levels of FP8 utilization")]),t._v("  (gradients, optimizer states, and distributed learning).")]),t._v(" "),e("li",[t._v("Uses "),e("strong",[t._v("precision decoupling")]),t._v("  and "),e("strong",[t._v("automatic scaling")]),t._v("  to mitigate numerical instability.")]),t._v(" "),e("li",[t._v("Achieves "),e("strong",[t._v("29%-39% memory savings")]),t._v("  and "),e("strong",[t._v("63%-65% communication cost reductions")]),t._v(" .")])]),t._v(" "),e("h3",{attrs:{id:"_2-fp8-llm-training"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-fp8-llm-training"}},[t._v("#")]),t._v(" "),e("strong",[t._v("2. FP8 LLM Training")])]),t._v(" "),e("h4",{attrs:{id:"_2-1-fp8-gradient-and-all-reduce-communication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-fp8-gradient-and-all-reduce-communication"}},[t._v("#")]),t._v(" "),e("strong",[t._v("2.1 FP8 Gradient and All-Reduce Communication")])]),t._v(" "),e("ul",[e("li",[t._v("Traditional mixed-precision training uses "),e("strong",[t._v("FP16/FP32 for gradients")]),t._v(" , leading to high communication costs.")]),t._v(" "),e("li",[t._v("Applying "),e("strong",[t._v("FP8 directly to gradients")]),t._v("  results in "),e("strong",[t._v("loss of accuracy")]),t._v("  due to underflow/overflow.")]),t._v(" "),e("li",[t._v("The paper proposes an "),e("strong",[t._v("automatic scaling technique")]),t._v("  to adapt scaling factors dynamically, preventing numerical instability.")])]),t._v(" "),e("h4",{attrs:{id:"_2-2-fp8-optimizer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-fp8-optimizer"}},[t._v("#")]),t._v(" "),e("strong",[t._v("2.2 FP8 Optimizer")])]),t._v(" "),e("ul",[e("li",[t._v("The "),e("strong",[t._v("Adam optimizer")]),t._v("  typically consumes "),e("strong",[t._v("16 bytes per parameter")]),t._v("  due to high-precision storage of gradients and optimizer states.")]),t._v(" "),e("li",[t._v("The proposed "),e("strong",[t._v("FP8 optimizer")]),t._v("  stores:\n"),e("ul",[e("li",[t._v("FP8 first-order moment")]),t._v(" "),e("li",[t._v("FP16 master weights (with tensor scaling)")]),t._v(" "),e("li",[t._v("FP16 second-order moment")])])]),t._v(" "),e("li",[t._v("This reduces "),e("strong",[t._v("memory consumption from 16 bytes to 6 bytes per parameter")]),t._v("  (2.6× savings).")])]),t._v(" "),e("h4",{attrs:{id:"_2-3-fp8-distributed-parallel-training"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-fp8-distributed-parallel-training"}},[t._v("#")]),t._v(" "),e("strong",[t._v("2.3 FP8 Distributed Parallel Training")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Tensor Parallelism")]),t._v(" : Uses "),e("strong",[t._v("FP8 for weight and activation tensors")]),t._v(" , reducing compute and communication overhead.")]),t._v(" "),e("li",[e("strong",[t._v("Sequence Parallelism")]),t._v(" : Converts activation tensors to "),e("strong",[t._v("FP8 before communication")]),t._v(" , reducing costs.")]),t._v(" "),e("li",[e("strong",[t._v("ZeRO (Zero Redundancy Optimizer) Support")]),t._v(" : Distributes "),e("strong",[t._v("full tensors")]),t._v("  across devices while preserving "),e("strong",[t._v("FP8 scaling factors")]),t._v(" .")])]),t._v(" "),e("h3",{attrs:{id:"_3-experimentation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-experimentation"}},[t._v("#")]),t._v(" "),e("strong",[t._v("3. Experimentation")])]),t._v(" "),e("h4",{attrs:{id:"_3-1-experimental-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-experimental-setup"}},[t._v("#")]),t._v(" "),e("strong",[t._v("3.1 Experimental Setup")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Training Dataset")]),t._v(" : Collected from "),e("strong",[t._v("CommonCrawl, The Pile, C4, OpenWebText, Wikipedia, RedPajama")]),t._v(" , and other curated sources.")]),t._v(" "),e("li",[e("strong",[t._v("Model Configuration")]),t._v(" : Uses a "),e("strong",[t._v("decoder-only Transformer")]),t._v("  architecture (like GPT-3), with "),e("strong",[t._v("RoPE embeddings and Flash Attention")]),t._v(" .")])]),t._v(" "),e("h4",{attrs:{id:"_3-2-main-results-model-performance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-main-results-model-performance"}},[t._v("#")]),t._v(" "),e("strong",[t._v("3.2 Main Results")]),t._v(" "),e("strong",[t._v("Model Performance")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Loss curves of FP8 models match BF16 models")]),t._v(" , confirming "),e("strong",[t._v("accuracy preservation")])]),t._v(" "),e("li",[e("strong",[t._v("Zero-shot evaluations")]),t._v("  on "),e("strong",[t._v("Lambada, HellaSwag, BoolQ, PIQA, COPA")]),t._v("  show "),e("strong",[t._v("comparable performance between FP8 and BF16")]),t._v(" .")]),t._v(" "),e("li",[e("strong",[t._v("Fine-tuning (SFT & RLHF)")]),t._v(" : FP8 achieves:\n"),e("ul",[e("li",[t._v("27% faster fine-tuning")]),t._v(" "),e("li",[t._v("32% reduction in model weight memory")]),t._v(" "),e("li",[t._v("62% optimizer state memory savings")])])])]),t._v(" "),e("p",[e("strong",[t._v("System Performance")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Memory reduction")]),t._v(" : FP8 achieves "),e("strong",[t._v("28%-39% lower memory usage")]),t._v("  than BF16.")]),t._v(" "),e("li",[e("strong",[t._v("Training speed improvement")]),t._v(" :\n"),e("ul",[e("li",[t._v("75% faster training for GPT-175B")]),t._v(" "),e("li",[t._v("37% faster than Nvidia Transformer Engine")])])]),t._v(" "),e("li",[e("strong",[t._v("Communication efficiency")]),t._v(" :\n"),e("ul",[e("li",[t._v("63%-65% reduction in weight gradient communication")]),t._v(" "),e("li",[t._v("34% lower activation-related communication costs")])])])]),t._v(" "),e("h4",{attrs:{id:"_3-3-ablation-study"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-ablation-study"}},[t._v("#")]),t._v(" "),e("strong",[t._v("3.3 Ablation Study")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Gradient Scaling")]),t._v(" : "),e("strong",[t._v("Automatic scaling")]),t._v("  reduces "),e("strong",[t._v("underflow/overflow errors")]),t._v(" , improving training stability.")]),t._v(" "),e("li",[e("strong",[t._v("Optimizer Precision")]),t._v(" :\n"),e("ul",[e("li",[t._v("FP16 master weights outperform FP8 master weights in accuracy preservation.")]),t._v(" "),e("li",[t._v("FP8 first-order gradient moment is viable, but FP8 second-order moment leads to divergence.")])])]),t._v(" "),e("li",[e("strong",[t._v("Parallelism Optimization")]),t._v(" :\n"),e("ul",[e("li",[e("strong",[t._v("FP8 sequence and tensor parallelism")]),t._v("  reduce communication costs by "),e("strong",[t._v("34%")]),t._v(" .")]),t._v(" "),e("li",[e("strong",[t._v("FP8 ZeRO")]),t._v("  maintains a balanced GPU memory load while saving memory.")])])])]),t._v(" "),e("h3",{attrs:{id:"_4-related-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-related-work"}},[t._v("#")]),t._v(" "),e("strong",[t._v("4. Related Work")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Mixed-Precision Training")]),t._v(" : Prior work focused on "),e("strong",[t._v("FP16/BF16")]),t._v(" , but "),e("strong",[t._v("FP8 remains underexplored")]),t._v(" .")]),t._v(" "),e("li",[e("strong",[t._v("Low-Precision LLM Training")]),t._v(" :\n"),e("ul",[e("li",[e("strong",[t._v("OPT, Bloom, Gopher, Chinchilla")]),t._v("  used "),e("strong",[t._v("BF16")]),t._v("  for better numerical stability.")]),t._v(" "),e("li",[t._v("FP8 support was limited before Nvidia Hopper GPUs.")]),t._v(" "),e("li",[t._v("This work provides the "),e("strong",[t._v("first systematic FP8 training framework")]),t._v("  for "),e("strong",[t._v("pre-training and fine-tuning LLMs")]),t._v(" .")])])])]),t._v(" "),e("h3",{attrs:{id:"_5-conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-conclusion"}},[t._v("#")]),t._v(" "),e("strong",[t._v("5. Conclusion")])]),t._v(" "),e("ul",[e("li",[t._v("Introduces a "),e("strong",[t._v("new FP8 mixed-precision training framework")]),t._v("  with "),e("strong",[t._v("automatic scaling")]),t._v("  and "),e("strong",[t._v("precision decoupling")]),t._v(" .")]),t._v(" "),e("li",[t._v("Achieves "),e("strong",[t._v("significant reductions in memory, compute, and communication costs")]),t._v(" .")]),t._v(" "),e("li",[e("strong",[t._v("Maintains model accuracy")]),t._v("  across "),e("strong",[t._v("GPT models from 125M to 175B parameters")]),t._v(" .")]),t._v(" "),e("li",[t._v("Demonstrates "),e("strong",[t._v("versatility")]),t._v("  in pre-training, instruction tuning, and RLHF.")]),t._v(" "),e("li",[e("strong",[t._v("Future work")]),t._v("  includes scaling to even larger models, training multi-modal models, and deploying FP8 LLMs on edge devices.")])]),t._v(" "),e("p",[e("strong",[t._v("Key Summary in 3 Sentences")])]),t._v(" "),e("p",[t._v("This paper introduces an "),e("strong",[t._v("FP8 mixed-precision training framework")]),t._v("  that reduces memory consumption by "),e("strong",[t._v("39%")]),t._v(" , speeds up training by "),e("strong",[t._v("75%")]),t._v(" , and "),e("strong",[t._v("outperforms Nvidia Transformer Engine by 37%")]),t._v("  while maintaining LLM accuracy."),e("br"),t._v("\nThe framework uses "),e("strong",[t._v("automatic scaling and precision decoupling")]),t._v("  to stabilize training, supports "),e("strong",[t._v("FP8 optimizers and distributed training")]),t._v(" , and generalizes to "),e("strong",[t._v("fine-tuning and reinforcement learning with human feedback (RLHF)")]),t._v(" ."),e("br"),t._v("\nThese findings establish "),e("strong",[t._v("FP8 as the next-generation precision format for training LLMs")]),t._v(" , significantly lowering costs while preserving model performance.")])])}),[],!1,null,null,null);e.default=a.exports}}]);