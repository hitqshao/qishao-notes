(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{541:function(e,t,s){"use strict";s.r(t);var a=s(8),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[e._v("[C93 2021] Sparse is Enough in Scaling Transformers")]),e._v(" "),t("li",[e._v("[C78 2023] The Lazy Neuron Phenomenon: On Emergence of Activation Sparsity in Transformers")]),e._v(" "),t("li",[e._v("[C1 2024] SDQ: Sparse Decomposed Quantization for LLM Inference")]),e._v(" "),t("li",[e._v("[C26 2024] HighLight: Efficient and Flexible DNN Acceleration with Hierarchical Structured Sparsity")]),e._v(" "),t("li",[e._v("[C63] Sparseloop: An Analytical Approach To Sparse Tensor Accelerator Modeling")]),e._v(" "),t("li",[e._v("[C101] Hardware Acceleration of Sparse and Irregular Tensor Computations of ML Models: A Survey and Insights")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_1-c93-2021-sparse-is-enough-in-scaling-transformers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-c93-2021-sparse-is-enough-in-scaling-transformers"}},[e._v("#")]),e._v(" 1. [C93 2021] Sparse is Enough in Scaling Transformers")]),e._v(" "),t("p",[e._v("pretrained on C4.")]),e._v(" "),t("p",[t("strong",[e._v("Key Contributions:")])]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Sparse Feedforward Layers:")]),e._v(" "),t("ul",[t("li",[e._v("Uses dynamic sparsity by activating only a subset of weights during inference.")]),e._v(" "),t("li",[e._v("Reduces computational cost while maintaining similar perplexity to dense models.")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/18175da6-5e32-4c01-88d7-36fcb8342a04",alt:"image"}})]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[e._v("Sparse Attention (QKV) Layers:")]),e._v(" "),t("ul",[t("li",[e._v("Uses a "),t("strong",[e._v("multiplicative layer")]),e._v("  to efficiently represent any permutation of input tokens.")]),e._v(" "),t("li",[e._v("Introduces convolution-based sparsity to further reduce the computational burden.")])])])]),e._v(" "),t("p",[e._v("Following figure (a) shows the multiplicative dense layer:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/69fde5c5-a906-429e-b6f0-073691afdf3b",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/669ddf38-eaad-4f86-b4c6-27e47f80206e",alt:"image"}})]),e._v(" "),t("p",[e._v('Please notice the "S" in formula and the output of the blue block is S*M dimension.')]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/90a4879f-1c9d-4a89-89a5-cf7e5f96f02c",alt:"image"}})]),e._v(" "),t("blockquote",[t("p",[e._v("We process this tensor with a two-dimensional convolutional layer, treating the length dimension and number of modules S like height and width of an image.\nThis layer uses M filters and a kernel size of F × F so that each filter looks at F modules (‘S’ axis) of the last F tokens\n(‘length’ axis).")])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[e._v("Speed and Efficiency Gains:")]),e._v(" "),t("ul",[t("li",[e._v("Sparse feedforward and QKV layers achieve a "),t("strong",[e._v("3.05× speedup")]),e._v("  in decoding for an 800M parameter model and "),t("strong",[e._v("20× speedup")]),e._v("  for a 17B parameter model.")]),e._v(" "),t("li",[e._v("The full "),t("strong",[e._v("Terraformer")]),e._v("  model (with sparse layers and reversible architecture) achieves "),t("strong",[e._v("37× speedup")]),e._v("  in inference for large models.")])])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"_2-c78-2023-the-lazy-neuron-phenomenon-on-emergence-of-activation-sparsity-in-transformers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-c78-2023-the-lazy-neuron-phenomenon-on-emergence-of-activation-sparsity-in-transformers"}},[e._v("#")]),e._v(" 2. [C78 2023] The Lazy Neuron Phenomenon: On Emergence of Activation Sparsity in Transformers")]),e._v(" "),t("p",[t("strong",[e._v('Summary of "The Lazy Neuron Phenomenon: On Emergence of Activation Sparsity in Transformers"')]),e._v(" This paper explores a surprising phenomenon in Transformer models: "),t("strong",[e._v("activation sparsity")]),e._v(" . The authors observe that in trained Transformers, only a "),t("strong",[e._v("small fraction of neurons")]),e._v("  in the feedforward layers are activated for any given input. This "),t("strong",[e._v("emergent sparsity")]),e._v("  increases as the model size grows, raising questions about computational efficiency, robustness, and generalization.")]),e._v(" "),t("p",[t("strong",[e._v("Key Findings")])]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Activation Sparsity is Ubiquitous")])])]),e._v(" "),t("ul",[t("li",[e._v("In trained Transformer models like "),t("strong",[e._v("T5 and ViT")]),e._v(" , on average, only "),t("strong",[e._v("3.0% of neurons in T5-Base")]),e._v("  and "),t("strong",[e._v("6.3% in ViT-B16")]),e._v("  are activated after the ReLU function.")]),e._v(" "),t("li",[e._v("Sparsity "),t("strong",[e._v("increases")]),e._v("  as the model "),t("strong",[e._v("gets deeper and wider")]),e._v(" .")]),e._v(" "),t("li",[e._v("This phenomenon holds across "),t("strong",[e._v("NLP and vision models")]),e._v(" , for both "),t("strong",[e._v("training and evaluation data")]),e._v(" .")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/11ee0496-3cf9-4b36-8e11-5c56876e34d9",alt:"image"}})]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[e._v("Sparsity is Not Explicitly Enforced—It Emerges Naturally")])])]),e._v(" "),t("ul",[t("li",[e._v("Unlike traditional sparsity techniques that use explicit regularization, "),t("strong",[e._v("this sparsity arises naturally")]),e._v("  through training without any special constraints.")]),e._v(" "),t("li",[e._v("Similar to "),t("strong",[e._v("biological brains")]),e._v(" , where only a subset of neurons fire at any given time.")])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[e._v("Sparsity Can Reduce Computation Costs")])])]),e._v(" "),t("ul",[t("li",[e._v("Since most activations are "),t("strong",[e._v("zero")]),e._v(" , many FLOPs (floating-point operations) in MLP layers can be "),t("strong",[e._v("skipped")]),e._v(" , improving efficiency.")]),e._v(" "),t("li",[e._v("A "),t("strong",[e._v("Top-k Transformer")]),e._v("  (where only the "),t("strong",[e._v("k most active neurons")]),e._v("  are used) further reduces computational overhead "),t("strong",[e._v("without degrading performance")]),e._v(" .")])]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("strong",[e._v("Sparsity Improves Robustness and Calibration")]),t("br"),e._v("\nModels with enforced sparsity (e.g., Top-k Transformers) "),t("strong",[e._v("perform better")]),e._v("  on:\n"),t("ul",[t("li",[t("strong",[e._v("Noisy training data")]),e._v("  (label corruption)")]),e._v(" "),t("li",[t("strong",[e._v("Adversarial input perturbations")])]),e._v(" "),t("li",[t("strong",[e._v("Confidence calibration")]),e._v("  (better uncertainty estimation)")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/80a351d3-cabe-4ce1-adb0-6cb1938c3a3a",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/d870f16b-64b9-4877-ba0c-9f1934cb0d37",alt:"image"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/e86428ea-d02e-4119-b95b-da8ccdc48c21",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("Implications")])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Efficiency Gains")]),e._v(" : Exploiting this natural sparsity could reduce the computational cost of Transformer inference and training.")]),e._v(" "),t("li",[t("strong",[e._v("Robustness")]),e._v(" : Sparse activations help the model generalize better and resist overfitting.")]),e._v(" "),t("li",[t("strong",[e._v("Theoretical Insights")]),e._v(" : Suggests a link between biological sparsity and deep learning efficiency.")])]),e._v(" "),t("blockquote",[t("p",[e._v("we emphasize that the sparsity in Top-k Transformers is unstructured and data-dependent, which is not well supported on existing computation hardwares such as TPUs and GPUs.\nHence, the results in Figure 6 are for proof-of-concept purposes, and are far from fully realizing the benefit of FLOPs reduction via sparsity.\nWe leave a study of better implementation of sparse computation for obtaining higher wall time reduction to future work.")])]),e._v(" "),t("p",[t("strong",[e._v("The first MLP layer FLOP in the first MLP layer may be reduced to have sublinear complexity in dff.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/672e3686-1813-4fb0-a154-972efe98c42a",alt:"image"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);