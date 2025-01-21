(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{544:function(e,t,i){"use strict";i.r(t);var n=i(8),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ul",[t("li",[e._v("[1] Resource-efficient Algorithms and Systems of Foundation Models: A Survey 😄")]),e._v(" "),t("li",[e._v("[2] A Survey on Efficient Inference for Large Language Models 🙋")]),e._v(" "),t("li",[e._v("[3] Efficient Large Language Models: A Survey 🙋")]),e._v(" "),t("li",[e._v("[4] Efficient Transformers: A Survey 🙋")])]),e._v(" "),t("hr"),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/539f3a36-1e67-486a-a1af-d7b637cfaf8e",alt:"image"}})]),e._v(" "),t("p",[t("em",[e._v("Source: Resource-efficient")])]),e._v(" "),t("p",[e._v("Computation complexity of attention is O(T 2D), whereas that of the FFN is O(TD2), where T represents the sequence length and D the hidden state dimension of the model."),t("br"),e._v("\nThe FFN layer is the most computationally intensive component.")]),e._v(" "),t("h2",{attrs:{id:"_1-resource-efficient-architectures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-resource-efficient-architectures"}},[e._v("#")]),e._v(" 1. Resource-Efficient Architectures")]),e._v(" "),t("h3",{attrs:{id:"_1-1-efficient-attention"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-efficient-attention"}},[e._v("#")]),e._v(" 1.1 Efficient Attention")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/d87f3dae-6a64-46ed-af28-51b4f2c16f3d",alt:"image"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Sparse Attention")]),e._v(": Reduces complexity (e.g., "),t("strong",[e._v("Longformer[C4522 2020]")]),e._v(", BigBird)."),t("br"),e._v("\nMotivated by graph sparsification, sparse attention aims to build a sparse attention matrix."),t("br"),e._v("\nThis approach aims to retain the empirical advantages of a fully quadratic self-attention scheme while employing a reduced number of inner products.")])]),e._v(" "),t("p",[e._v("[C2016 2019] Generating Long Sequences with Sparse Transformers"),t("br"),e._v("\n[C602 2020] Efficient Content-Based Sparse Attention with Routing Transformers\n[C136 2021] Scatterbrain: Unifying Sparse and Low-rank Attention Approximation\n[C55 2021] Is Sparse Attention more Interpretable?")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Approximate Attention")]),e._v(": Low-rank approximations (e.g., Linformer, Reformer).\nApproximate attention mainly includes low-rank approximations of the self-attention matrix and innovative reformulations of the self-attention.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Attention-Free Approaches")]),e._v(": Alternatives like Hyena, Mamba."),t("br"),e._v("\nDespite the dominance of attention-based transformer architectures in large FMs, several works have put forth innovative architectures that hold the potential to replace the traditional transformer model.")])])]),e._v(" "),t("h3",{attrs:{id:"_1-2-dynamic-neural-network"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-dynamic-neural-network"}},[e._v("#")]),e._v(" 1.2 Dynamic Neural Network")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/baefb07e-0c3b-46c2-a728-5cb2e94a21b5",alt:"image"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Mixture of Experts (MoE)")]),e._v(": (e.g., Switch Transformer, GLaM, MoEfication, FFF).\n"),t("ul",[t("li",[t("em",[e._v("C1950 2021")]),e._v(" Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity")]),e._v(" "),t("li",[t("em",[e._v("Janus[C20 2023]")]),e._v(" Janus: A Unified Distributed Training Framework for Sparse Mixture-of-Experts Models")]),e._v(" "),t("li",[t("em",[e._v("C124 2018")]),e._v(" Deep Mixture of Experts via Shallow Embedding")]),e._v(" "),t("li",[t("em",[e._v("C364 2013")]),e._v(" Learning Factored Representations in a Deep Mixture of Experts")]),e._v(" "),t("li",[t("em",[e._v("C264 2022")]),e._v(" Mixture-of-Experts with Expert Choice Routing")]),e._v(" "),t("li",[t("em",[e._v("C594 2022")]),e._v(" GLaM: Efficient Scaling of Language Models with Mixture-of-Experts")]),e._v(" "),t("li",[t("em",[e._v("C113 2021")]),e._v(" MoEfication: Transformer Feed-forward Layers are Mixtures of Experts")])])]),e._v(" "),t("li",[t("strong",[e._v("Early Exiting")]),e._v(": Premature termination based on confidence (e.g., FREE, SkipDecode,DeeBERT, PABEE).\nearly-exiting optimization is a strategy that allows a model to terminate its computational process prematurely when it attains high confidence in the prediction or encounters resource constraints.\n[C342 2020] BERT Loses Patience: Fast and Robust Inference with Early Exit\n[C383 2020] DeeBERT: Dynamic Early Exiting for Accelerating BERT Inference\n[C46 2023] SkipDecode: Autoregressive Skip Decoding with Batching and Caching for Efficient LLM Inference")])]),e._v(" "),t("h3",{attrs:{id:"_1-3-diffusion-specific-optimization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-diffusion-specific-optimization"}},[e._v("#")]),e._v(" 1.3 Diffusion-Specific Optimization")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Efficient Sampling")])]),e._v(" "),t("li",[t("strong",[e._v("Diffusion in Latent Space")])]),e._v(" "),t("li",[t("strong",[e._v("Diffusion Architecture Variants")])])]),e._v(" "),t("h3",{attrs:{id:"_1-4-vit-specific-optimizations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-vit-specific-optimizations"}},[e._v("#")]),e._v(" 1.4 ViT-Specific Optimizations")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Efficient ViT Variants")]),e._v(": MobileViT, EfficientFormer, EdgeViT.")])]),e._v(" "),t("h2",{attrs:{id:"_2-resource-efficient-algorithms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-resource-efficient-algorithms"}},[e._v("#")]),e._v(" 2. Resource-Efficient Algorithms")]),e._v(" "),t("h3",{attrs:{id:"_2-1-pre-training-algorithms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-pre-training-algorithms"}},[e._v("#")]),e._v(" 2.1 Pre-Training Algorithms")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Training Data Quality Control")]),e._v(": DataComp, DFN."),t("br"),e._v("\nA portion of work focus on controlling the quality of training data.")]),e._v(" "),t("li",[t("strong",[e._v("Training Data Reduction")]),e._v(": Deduplication, image patch removal."),t("br"),e._v("\nPre-training for large FMs needs a dataset at the trillion scale, exemplified by 0.3 trillion tokens for GPT-3-175B [25] and 2 trillion tokens for LLaMa-2-70B [238]."),t("br"),e._v("\nprior literature resorts to reduce vast training data through two aspects: deduplicating text datasets and image patch removal.")]),e._v(" "),t("li",[t("strong",[e._v("Progressive Learning")]),e._v(": StackingBERT, CompoundGrow.\nProgressive learning is a training strategy that begins by training a small model and then gradually increases the model size, throughout the training process.")]),e._v(" "),t("li",[t("strong",[e._v("Mixed Precision Training")]),e._v(": Mesa, GACT.\nMixed precision training often utilizes half-precision floating-point data representation instead of single precision. This approach significantly reduces memory\nrequirements, approximately halving the storage space needed for weights, activations, and gradients.")])]),e._v(" "),t("h3",{attrs:{id:"_2-2-fine-tuning-algorithms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-fine-tuning-algorithms"}},[e._v("#")]),e._v(" 2.2 Fine-Tuning Algorithms")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/1ed489c1-3451-4874-8f36-fa99fc65e0ca",alt:"image"}})]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Additive Tuning")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("Adapter tuning")]),e._v(" aims to reduce training costs by introducing adapter modules to specific layers (or all layers) of pre-trained large FMs.\nDuring tuning, the backbone of the pre-trained model remains frozen, and adapter modules are utilized to acquire task-specific knowledge.")]),e._v(" "),t("li",[t("em",[e._v("prompt tuning")]),e._v(" involves designing a task-specific prompt for each task, with the aim of replacing the traditional fine-tuning of pre-trained large FMs parameters."),t("br"),e._v("\nBy tuning the input prompts instead, this method significantly reduces the resources and time required for the fine-tuning."),t("br"),e._v("\n[C3778] The Power of Scale for Parameter-Efficient Prompt Tuning")]),e._v(" "),t("li",[t("em",[e._v("prefix tuning")]),e._v(" introduces a trainable, task-specific prefix part to each layer of large FMs.\nThis technique aims to reduce the tuning cost by limiting the updates to the parameters in this prefix.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Selective Tuning")]),e._v(": Freezing most parameters, selective updates.\nSelective tuning aims to maintain high performance on new tasks with low training costs by freezing the majority of parameters in large FMs and selectively updating only a small portion of the parameters.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Re-parameter Tuning")]),e._v(": Low-rank adaptation (e.g., "),t("strong",[e._v("LoRA")]),e._v(", Delta-LoRA).\n"),t("img",{attrs:{src:"https://github.com/user-attachments/assets/920fd758-54f1-492c-bf1e-0a5b4209f2b4",alt:"image"}})]),e._v(" "),t("p",[e._v("Re-parameter tuning adapts large FMs by targeting a significantly smaller subspace than the original, expansive training space."),t("br"),e._v("\nThis approach involves fine-tuning low-rank matrix parameters, a technique that effectively reduces the overall training cost.")])])]),e._v(" "),t("h3",{attrs:{id:"_2-3-inference-algorithms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-inference-algorithms"}},[e._v("#")]),e._v(" 2.3 Inference Algorithms")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Opportunistic Decoding")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Speculative decoding ("),t("em",[e._v("SpecInfer, LLMCad")]),e._v(") generating sequences autoregressively with a cost-efficient small model, followed by parallel token verification using a larger model.")]),e._v(" "),t("li",[e._v("Look-ahead decoding accelerates inference in large FMs without relying on a draft model or data store, reducing decoding steps in proportion to log(FLOPs).")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Input Filtering and Compression")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Prompt compression(LLMLingua,LLMZip,ICAE,COT-Max)\nLLMZip [241] employs LLaMA-7B for compressing natural language. Experimental results demonstrate that LLMZip outperforms cutting-edge text compression methods, including BSC, ZPAQ, and paq8h.")]),e._v(" "),t("li",[e._v("Token pruning Pruning of input sequences for transformers, often involving the incremental removal of less important tokens during inference.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("KV Cache Optimization")]),e._v(": Memory-efficient sparse attention.\nmost sparse attention designs, which primarily target the reduction of computational complexity [24, 294], do not necessarily lead to a reduction in KV cache memory consumption."),t("br"),e._v("\nThis is because achieving a reduced memory footprint for the KV cache necessitates a more stringent sparsity pattern.")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("H2O")]),e._v(" KV cache eviction stragegy: employs attention scores to identify and select the least important KV cache tokens in the current state for eviction")]),e._v(" "),t("li",[t("em",[e._v("Dynamic Context Pruning")]),e._v(" learns a memory-efficient KV cache eviction strategy during the pre-training phase.")]),e._v(" "),t("li",[t("em",[e._v("Scissorhands")]),e._v(": innovative compact KV cache")]),e._v(" "),t("li",[t("em",[e._v("Landmark Attention")]),e._v(" enables the storage of most KV caches in a slower but larger capacity memory")]),e._v(" "),t("li",[e._v("[C1 2025] Efficient LLM Inference with Activation Checkpointing and Hybrid Caching")]),e._v(" "),t("li",[e._v("[C1 2024] Unifying KV Cache Compression for Large Language Models with LeanKV")]),e._v(" "),t("li",[e._v("[C316 2023] Efficient Streaming Language Models with Attention Sinks")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Long Context Handling")]),e._v(": LM-Infinite, StreamingLLM. Due to the quadratic computational cost associated with attention mechanisms, various resource-efficient optimizations have been proposed to handle long inputs.")]),e._v(" "),t("ul",[t("li",[e._v("LM-Infinite introduces a Λ-shaped attention mechanism to handle long contexts efficiently.")]),e._v(" "),t("li",[e._v("StreamingLLM facilitates large FMs trained with a finite-length attention window to generalize to infinite stream decoding without the need for any fine-tuning.")])])])]),e._v(" "),t("h3",{attrs:{id:"_2-4-model-compression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-model-compression"}},[e._v("#")]),e._v(" 2.4 Model Compression")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/user-attachments/assets/d3d1214d-8f83-4553-97bd-467a2b914dd4",alt:"image"}})]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Pruning")])]),e._v(" "),t("ul",[t("li",[e._v("Structured pruning eliminates entire structural components, such as groups of consecutive parameters or hierarchical structures"),t("br"),e._v("\nLLM Pruner[C372 2023] selectively removes non-essential model structures based on gradient information and incorporates LoRA to recover the model’s accuracy after pruning."),t("br"),e._v("\nStructured pruning is also employed in training."),t("br"),e._v(" "),t("em",[e._v("Sheared LLaMA")]),e._v(" adopts an end-to-end to remove channels, encompassing layers, attention heads, intermediate layers, and hidden layers."),t("br"),e._v(" "),t("em",[e._v("AdaPrune")]),e._v(" accelerates neural network training using transposable masks."),t("br"),e._v(" "),t("em",[e._v("GUM")]),e._v(" considers neuron specificity and introduces pruning through network component-based global mobility and local uniqueness scores."),t("br"),e._v(" "),t("em",[e._v("PLATON")]),e._v(" tackles the uncertainty in importance scores during pruning by employing the upper confidence bound of importance estimation.")]),e._v(" "),t("li",[e._v("Unstructred pruning It removes neurons with weights below a threshold, thereby compressing the model.\n"),t("em",[e._v("SparseGPT[C497 2023]")]),e._v(" sparse regression solver"),t("br"),e._v(" "),t("em",[e._v("Wanda[C346 2023]")]),e._v(" prunes weights with smallest magnitude multiplied by corresponding input activations."),t("br"),e._v(" "),t("em",[e._v("SIGE")]),e._v(" converts computation reduction into latency reduction.")]),e._v(" "),t("li",[t("strong",[e._v("Contextual pruning")]),e._v(" selects the sparse state of each layer.\n"),t("em",[e._v("Deja Vu")]),e._v(" dynamically predicts the sparsity of the next layer using the activations of the previous layer. It determines which neurons of MLP blocks and the heads of attention blocks need to be retained. To mitigate the overhead of this predictor, Deja Vu asynchronously predicts the next layer."),t("br"),e._v(" "),t("em",[e._v("PowerInfer")]),e._v(" utilizes the sparsity of activation to dynamically predict the hotactivated neurons of the next layer and computes them on the GPU, whereas other cold-activated neurons are computed on the CPU.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Knowledge Distillation")]),e._v(": Black-box and white-box KD.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Quantization")]),e._v(": Quantization-aware training (QAT), post-training quantization (PTQ).")]),e._v(" "),t("ul",[t("li",[e._v("Quantization-aware training\n"),t("em",[e._v("LLM-QAT obtains training data for LLMs by leveraging pre-trained models to generate samples through data-free distillation. it quantizes weights, activations, and KV cache, thereby improving training throughput."),t("br"),e._v("\nQuantGPT incorporats contrastive distillation from a full-precision teacher model and distilling logit information to a quantized student model during autoregressive pre-training."),t("br"),e._v("\nBitNet pioneers QAT for 1-bit language models, training the language model with 1-bit weights and activations.")]),e._v("\n[C31 2024] KVQuant: Towards 10 Million Context Length LLM Inference with KV Cache Quantization")]),e._v(" "),t("li",[e._v("Post-training quantization\n"),t("ul",[t("li",[t("p",[e._v("Weights-only Quantization")]),e._v(" "),t("p",[t("em",[e._v("identification of outliers and important weights in weights that significantly contribute to accuracy and treating these outliers specially.")])]),e._v(" "),t("p",[t("em",[e._v("SpQR identifies outlier weights and maintains them with high precision while quantizing the rest of the weights.")])]),e._v(" "),t("p",[t("em",[e._v("LLM.int8() employs vectorized quantization and mixed-precision decomposition to handle outlier values for efficient inference.")])]),e._v(" "),t("p",[t("em",[e._v("AWQ[C523 2023] reduces quantization error by protecting the top 1% important weights in the model, utilizing per-channel scaling to determine the optimal scaling factor.")])]),e._v(" "),t("p",[t("em",[e._v("OWQ[C37 2023] analysis suggests that abnormal activations amplify quantization errors, and it employs a mixed-precision scheme, applying higher-precision quantization to weights with a significant impact from activated outlier values.")])]),e._v(" "),t("p",[t("em",[e._v("SqueezeLLM[C160 2023] observes that sensitive weights determine the final model’s quantization performance and proposes a non-uniform quantization approach to minimize quantization errors in these sensitive weights.")])])]),e._v(" "),t("li",[t("p",[e._v("Weights-Activation Coquantization")]),e._v(" "),t("p",[t("em",[e._v("SmoothQuant[C770 2022] takes advantage of the similarity in the channel-wise activations of different tokens and performs quantization on both weight and activation using per-channel scaling transforms.")])]),e._v(" "),t("p",[t("em",[e._v("RPTQ recognizes the substantial range differences across different channels, reordering the channels for quantization and integrating them into layer normalization and linear layer weights.")])]),e._v(" "),t("p",[t("em",[e._v("OliVe adopts outlier-victim pair quantization and locally processes outliers.")])]),e._v(" "),t("p",[t("em",[e._v("Outlier Suppression+ builds upon Outlier Suppression, discovering that harmful outliers exhibit an asymmetric distribution mainly concentrated in specific channels."),t("br"),e._v("\nConsidering the asymmetry of outliers and quantization errors from the weights of the next layer, this approach performs channel-level translation and scaling operations.")])]),e._v(" "),t("p",[t("em",[e._v("QLLM addresses the issue of activation outliers through an adaptive channel reassembly method and mitigates the information loss caused by quantization using calibration data.")])]),e._v(" "),t("p",[t("em",[e._v("LLM-FP4 quantizes weights into 4-bit float points, proposes per-channel activation quantization, and reparameters additional scaling factors as exponential biases of weights.")])]),e._v(" "),t("p",[t("em",[e._v("ZeroQuant combines layer-wise KD and optimized quantization support to achieve 8-bit quantization.")])]),e._v(" "),t("p",[t("em",[e._v("FlexRound updates the quantization scale of weights and activations by minimizing the error between the quantized values and the full-precision values.")])]),e._v(" "),t("p",[t("em",[e._v("ATOM significantly boosts serving throughput by using low-bit operators and considerably reduces memory consumption via low-bit quantization.")])])])])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Low-Rank Decomposition (LoRD)")]),e._v(": TensorGPT, LoSparse.")])])]),e._v(" "),t("h2",{attrs:{id:"_3-resource-efficient-systems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-resource-efficient-systems"}},[e._v("#")]),e._v(" 3. Resource-Efficient Systems")]),e._v(" "),t("h3",{attrs:{id:"_3-1-distributed-training"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-distributed-training"}},[e._v("#")]),e._v(" 3.1 Distributed Training")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Resilience")]),e._v(": Checkpointing, redundant computation.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Parallelism")]),e._v(": Data, model, and sequence parallelism.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Communication")]),e._v(": Compression, overlapping with computation.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Storage")]),e._v(": Offloading, heterogeneous GPUs."),t("br"),e._v("\nZeRO-Offload offloads data and computations to CPU to train large models on a single GPU."),t("br"),e._v("\nFlashNeuron[C52 2021] offloads selective data to the SSD for higher throughput.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("MoE Optimization")]),e._v(": optimizes the dynamism-related mechanisms, parallelism, and communication in MoE training.\n"),t("em",[e._v("MegaBlocks[C74 2022] leverages sparse primitives to handle dynamic routing and load-imbalanced computation.")])]),e._v(" "),t("p",[t("em",[e._v("FlexMoE focuses on the dynamic expert management and device placement problem.")])]),e._v(" "),t("p",[t("em",[e._v("Tutel designs dynamic adaptive parallelism and pipelining strategies.")])])])]),e._v(" "),t("h3",{attrs:{id:"_3-2-hardware-aware-optimizations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-hardware-aware-optimizations"}},[e._v("#")]),e._v(" 3.2 Hardware-Aware Optimizations")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("EdgeBERT")]),e._v(": Latency-aware energy optimization.")]),e._v(" "),t("li",[t("strong",[e._v("FlightLLM")]),e._v(": FPGA-based LLM inference.")]),e._v(" "),t("li",[t("strong",[e._v("SpAtten")]),e._v(": Sparse attention with cascade token pruning.")]),e._v(" "),t("li",[t("strong",[e._v("A3[C227 2020]")])])]),e._v(" "),t("h3",{attrs:{id:"_3-3-serving-on-cloud"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-serving-on-cloud"}},[e._v("#")]),e._v(" 3.3 Serving on Cloud")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Inference Accelerating")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("FlashAttention, FlashAttention-2")])]),e._v(" "),t("li",[t("em",[e._v("Flash-Decoding, FlashDecoding++")])]),e._v(" "),t("li",[t("em",[e._v("DeepSpeed-Inference")])]),e._v(" "),t("li",[t("em",[e._v("ByteTransformer")])]),e._v(" "),t("li",[t("em",[e._v("Google PaLM")])])]),e._v(" "),t("p",[t("strong",[e._v("Batching and scheduling")])]),e._v(" "),t("p",[t("em",[e._v("Orca proposes selective batching and iteration-level scheduling to batch requests of different lengths at the granularity of iterations to increase the maximum batch size.")])]),e._v(" "),t("p",[t("em",[e._v("FlexGen proposes a request scheduling algorithm to mitigate the impact of offloading on the performance of latencyinsensitive FM serving in a single GPU.")])]),e._v(" "),t("p",[t("em",[e._v("FastServe proposes an iteration-level preemptive scheduling and proactive KV cache swapping to mitigate the impact of head-of-line blocking on the performance of distributed FM serving.")])]),e._v(" "),t("p",[t("em",[e._v("SARATHI and DeepSpeed-FastGen split the computation of the prefill phase into small chunks and schedule these chunks with the decoding phase to mitigate the impact of the prefill phase on the performance of large FMs serving.")])]),e._v(" "),t("p",[t("em",[e._v("Splitwise splits the prefill phase and the decoding phase onto different machines according to their different computation and memory requirements.")])]),e._v(" "),t("p",[t("em",[e._v("Sarathi-Serve introduces a chunked-prefills scheduler which splits a prefill request into near equal sized chunks and creates stall-free schedules that adds new requests in a batch without pausing ongoing decodes.")])]),e._v(" "),t("p",[t("em",[e._v("dLoRA dynamically merges/unmerges adapters with the base model and migrating requests/adapters between worker replicas, significantly improving the serving throughput.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Memory Saving")])]),e._v(" "),t("ul",[t("li",[e._v("DeepSpeed-Inference and FlexGen offload activations or model parameters to the DRAM or NVMe memories")]),e._v(" "),t("li",[e._v("KV cache managing\n"),t("ul",[t("li",[t("strong",[e._v("vLLM")]),e._v(" adopts block-level on-demand memory allocation mechanism.")]),e._v(" "),t("li",[e._v("S-LoRA extends this idea to Unified Paging to manage multiple LoRA adapters at the same time.")])])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Emerging Platforms")]),e._v(": Spot instances, heterogeneous GPUs.")])])]),e._v(" "),t("h3",{attrs:{id:"_3-4-serving-on-edge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-serving-on-edge"}},[e._v("#")]),e._v(" 3.4 Serving on Edge")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Edge-Cloud Collaboration")])]),e._v(" "),t("p",[t("em",[e._v("EdgeFM")]),e._v(" queries and adapts the large FMs to the specific edge models with customized knowledge and architectures so that the dynamic edge model can ensure both low latency and close accuracy to the original large FMs.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("On-Device MoE")])]),e._v(" "),t("p",[t("em",[e._v("EdgeMoe identifies the problem that experts have to be dynamically loaded into memory during inference. To tackle this issue, this approach proposes expert-wise bit-width adaptation to reduce the size of expert parameters with acceptable accuracy loss, saving parameters’ loading time.")])]),e._v(" "),t("p",[t("em",[e._v("PC-MoE is based on a crucial observation that expert activations are subject to temporal locality. Based on this observation, PC-MoE proposes Parameter Committee, which intelligently maintains a subset of crucial experts in use to reduce resource consumption.")])]),e._v(" "),t("p",[e._v("[C21 2024] Mobile foundation model as firmware")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Memory Optimization")]),e._v(": LLMCad, "),t("strong",[e._v("PowerInfer")]),e._v(".")]),e._v(" "),t("p",[t("em",[e._v("LLMCad utilizes speculative decoding, which can offload most workloads to a smaller memory-resident draft model.")])]),e._v(" "),t("p",[t("em",[e._v("PowerInfer relies on large FMs runtime sparsity (i.e., only hot neurons are consistently activated across inputs). PowerInfer pre-loads hot-activated neurons onto the GPU for fast access, whereas cold-activated neurons are computed on the CPU, thus significantly reducing GPU memory demands and CPUGPU data transfers.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("I/O Optimization")]),e._v(": STI, LLM in a flash.\n"),t("em",[e._v("STI [C16] identifies that loading parameters time is highly longer than computation time. To address this problem, STI proposes dynamically adapting weights bit-width during the loading procedure according to parameters importance, minimizing loading overhead under maximum inference accuracy.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Kernel Optimization")]),e._v(": Integer-based edge kernels.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);