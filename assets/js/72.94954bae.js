(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{516:function(e,t,a){"use strict";a.r(t);var s=a(8),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[e._v("[1900] Mixed Precision Training")]),e._v(" "),t("li",[e._v("[440] Measuring the Effects of Data Parallelism on Neural Network Training")]),e._v(" "),t("li",[e._v("[255] FlexGen: High-Throughput Generative Inference of Large Language Models with a Single GPU")]),e._v(" "),t("li",[e._v("[142] Performance, Design, and Autotuning of Batched GEMM for GPUs")]),e._v(" "),t("li",[e._v("[1] FlattenQuant: Breaking Through the Inference Compute-bound for Large Language Models with Per-tensor Quantization")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_1-1900-mixed-precision-training"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1900-mixed-precision-training"}},[e._v("#")]),e._v(" 1. [1900] Mixed Precision Training")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/015ccb67-ef34-4c76-ad52-10618c578ad7",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/1a564342-e231-42a4-99d5-e9fef4500a1a",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("Loss Scaling")])]),e._v(" "),t("p",[e._v("Note that much of the FP16 representable range was left unused, while many values were below the minimum representable range and became zeros."),t("br"),e._v("\nScaling up the gradients will shift them to occupy more of the representable range and preserve values that are otherwise lost to zeros."),t("br"),e._v("\nThis particular network diverges when gradients are not scaled, but scaling them by a factor of 8 (increasing the exponents by 3) is sufficient to match the accuracy achieved with FP32 training.")]),e._v(" "),t("p",[e._v("activation gradient values below 2^−27 in magnitude were irrelevant to the training of this model, but values in the [2^−27, 2^−24) range were important to preserve.")]),e._v(" "),t("p",[e._v("One efficient way to shift the gradient values into FP16-representable range is to scale the loss value computed in the forward pass, prior to starting back-propagation.")]),e._v(" "),t("p",[e._v("By chain rule back-propagation ensures that all the gradient values are scaled by the same amount.")]),e._v(" "),t("p",[e._v("The gradients need to be unscaled before the final weight update.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_2-440-measuring-the-effects-of-data-parallelism-on-neural-network-training-google"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-440-measuring-the-effects-of-data-parallelism-on-neural-network-training-google"}},[e._v("#")]),e._v(" 2. [440] Measuring the Effects of Data Parallelism on Neural Network Training [Google]")]),e._v(" "),t("h4",{attrs:{id:"steps-to-result-depends-on-batch-size-in-a-similar-way-across-problems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-result-depends-on-batch-size-in-a-similar-way-across-problems"}},[e._v("#")]),e._v(" Steps to Result Depends on Batch Size in a Similar Way Across Problems.")]),e._v(" "),t("p",[e._v("In all cases, as the batch size grows, there is an initial period of perfect scaling (indicated with a dashed line) where the steps needed to achieve the error goal\nhalves for each doubling of the batch size."),t("br"),e._v("\nThen there is a region of diminishing returns that eventually leads to a region of maximal data parallelism where additional parallelism provides no benefit whatsoever.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/afb695c3-1503-45cc-a123-37cd8110880e",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/a132a4fc-f469-4605-b522-558345f0b9c3",alt:"image"}})]),e._v(" "),t("p",[e._v("If the curves in Figure 1 were very sensitive to the goal validation error, then measuring the steps needed to reach our particular choice of the goal would not be a meaningful proxy for training speed.\\")]),e._v(" "),t("p",[e._v("For small changes in the goal validation error, we do not care about vertical shifts as long as the transition points between the three scaling regions remain relatively unchanged.\\")]),e._v(" "),t("p",[e._v("Figure 2 shows that varying the error goal only vertically shifts the stepsto-result curve, at least for modest variations centered around a good absolute validation error.")]),e._v(" "),t("p",[e._v("Furthermore, although we ultimately care about out-of-sample error, if our plots looked very different when measuring the steps needed to reach a particular training error, then we would need to include both curves when presenting our results.")]),e._v(" "),t("h4",{attrs:{id:"validating-our-measurement-protocol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validating-our-measurement-protocol"}},[e._v("#")]),e._v(" Validating Our Measurement Protocol")]),e._v(" "),t("h4",{attrs:{id:"some-models-can-exploit-much-larger-batch-sizes-than-others"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#some-models-can-exploit-much-larger-batch-sizes-than-others"}},[e._v("#")]),e._v(" Some Models Can Exploit Much Larger Batch Sizes Than Others")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/d4e1c07a-5e03-42f4-94fc-e750175b1396",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("This might be the begining of the scale law.")])]),e._v(" "),t("h4",{attrs:{id:"momentum-extends-perfect-scaling-to-larger-batch-sizes-but-matches-plain-sgd-at-small-batch-sizes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#momentum-extends-perfect-scaling-to-larger-batch-sizes-but-matches-plain-sgd-at-small-batch-sizes"}},[e._v("#")]),e._v(" Momentum Extends Perfect Scaling to Larger Batch Sizes, but Matches Plain SGD at Small Batch Sizes")]),e._v(" "),t("h4",{attrs:{id:"the-data-set-matters-at-least-somewaht"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-data-set-matters-at-least-somewaht"}},[e._v("#")]),e._v(" The Data Set Matters, at Least Somewaht")]),e._v(" "),t("h4",{attrs:{id:"regularization-can-be-more-helpful-at-some-batch-sizes-than-others"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regularization-can-be-more-helpful-at-some-batch-sizes-than-others"}},[e._v("#")]),e._v(" Regularization Can Be More Helpful at Some Batch Sizes than Others")]),e._v(" "),t("h4",{attrs:{id:"the-best-learning-rate-and-momentrum-vary-with-batch-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-best-learning-rate-and-momentrum-vary-with-batch-size"}},[e._v("#")]),e._v(" The Best Learning Rate and Momentrum Vary with Batch Size")]),e._v(" "),t("h4",{attrs:{id:"solution-quality-depends-on-compute-budget-more-than-batch-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution-quality-depends-on-compute-budget-more-than-batch-size"}},[e._v("#")]),e._v(" Solution Quality Depends on Compute Budget More Than Batch Size")]),e._v(" "),t("p",[e._v("Taken together, these observations suggest that in practice the relevant question is not which batch size leads to the best performance, but rather how compute budget varies as a function of batch size.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/a7164eb8-4ff2-4e9f-a68f-8538d4ce54b4",alt:"image"}})]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_2-142-performance-design-and-autotuning-of-batched-gemm-for-gpus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-142-performance-design-and-autotuning-of-batched-gemm-for-gpus"}},[e._v("#")]),e._v(" 2. [142] Performance, Design, and Autotuning of Batched GEMM for GPUs")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/ad7a256c-91eb-4087-a8de-ccfeb05ea8a3",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/f205bad1-19a3-4843-8fca-cc12cfa7298a",alt:"image"}})]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_3-255-flexgen-high-throughput-generative-inference-of-large-language-models-with-a-single-gpu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-255-flexgen-high-throughput-generative-inference-of-large-language-models-with-a-single-gpu"}},[e._v("#")]),e._v(" 3. [255] FlexGen: High-Throughput Generative Inference of Large Language Models with a Single GPU")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("We formally define a search space of possible offloading strategies by considering computation schedule, tensor placement, and computation delegation."),t("br"),e._v("\nWe prove that our search space captures a computation order with I/O complexity within 2× of optimality."),t("br"),e._v("\nWe then develop a linear programming-based search algorithm to optimize the throughput within the search space.")])]),e._v(" "),t("li",[t("p",[e._v("We show that it is possible to compress both the weights and KV cache for LLMs like OPT-175B to 4 bits without retraining or calibration, all with negligible\naccuracy loss."),t("br"),e._v("\nThis is achieved through fine-grained groupwise quantization (Shen et al., 2020), which is suitable for reducing I/O costs and memory usage during offloading.")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/f82b1417-22f4-42a3-9206-d09994df5307",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/d7d16c50-4988-4daf-8e16-fa97a5788407",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("All existing systems (Aminabadi et al., 2022; HuggingFace, 2022) traverse the graph row-by-row, as shown in Fig. 3(a).")]),e._v(" "),t("br"),e._v("\nThis is reasonable because it is the fastest way to finish the generation for one batch and the KV cache can be freed immediately after a row."),t("br"),e._v("\nHowever, because every two contiguous squares do not share weights, this schedule has to repeatedly load the weights and incurs huge I/O costs.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_4-1-flattenquant-breaking-through-the-inference-compute-bound-for-large-language-models-with-per-tensor-quantization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-flattenquant-breaking-through-the-inference-compute-bound-for-large-language-models-with-per-tensor-quantization"}},[e._v("#")]),e._v(" 4. [1] FlattenQuant: Breaking Through the Inference Compute-bound for Large Language Models with Per-tensor Quantization")]),e._v(" "),t("p",[e._v("FlattenQuant can directly use 4 bits to achieve 48.29% of the linear layer calculation in LLMs, with the remaining layers using 8 bits.")]),e._v(" "),t("p",[e._v("The 4-bit matrix multiplication introduced in the FlattenQuant method can effectively address the compute-bound caused by large matrix calculation."),t("br"),e._v("\nOur work achieves up to 2× speedup and 2.3× memory reduction for LLMs with negligible loss in accuracy.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/dee83087-aa07-4441-b6f6-31a8eafedaed",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("Framework")]),e._v(" "),t("img",{attrs:{src:"https://github.com/user-attachments/assets/d386534e-97ad-4ac6-a34e-83545e1e68b2",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/1924a296-1948-46c1-b835-a99bfa229b03",alt:"image"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);