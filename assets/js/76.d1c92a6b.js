(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{520:function(t,e,a){"use strict";a.r(e);var n=a(8),s=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("1.[148] Data Movement is All You Need: A Case Study on Optimizing Transformers")]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"_1-data-movement-is-all-you-need-a-case-study-on-optimizing-transformers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-data-movement-is-all-you-need-a-case-study-on-optimizing-transformers"}},[t._v("#")]),t._v(" 1. Data Movement is All You Need: A Case Study on Optimizing Transformers")]),t._v(" "),e("p",[t._v("Contributions:")]),t._v(" "),e("ul",[e("li",[t._v("We find transformer training to be memory-bound and significantly underperforming on GPUs.")]),t._v(" "),e("li",[t._v("We develop a generic recipe for optimizing training using dataflow analyses.")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/user-attachments/assets/26739a63-f1c3-46f6-b0d1-b2aea2e953fa",alt:"image"}})]),t._v(" "),e("p",[e("strong",[t._v("Tensor Constraction")]),t._v(": matrix-matrix multiplication")]),t._v(" "),e("p",[t._v("We consider only MMMs and batched MMMs for simplicity, as these are efficiently supported by cuBLAS."),e("br"),t._v("\nIn transformers, these are linear layers and components of MHA."),e("br"),t._v("\nThese operations are the most compute-intensive part of training a transformer."),e("br"),t._v("\nFor good performance, data layout and algorithm selection (e.g., tiling strategy) are critical.")]),t._v(" "),e("p",[e("strong",[t._v("Statistical Normalization")]),t._v(": softmax and layer normalization"),e("br"),t._v("\nLess compute-intensive than tensors"),e("br"),t._v("\nThis compute pattern means that data layout and vectorization is important for operator performance.")]),t._v(" "),e("p",[e("strong",[t._v("Element-wise Operators")]),t._v(": biases, dropout, activations, and residual connections"),e("br"),t._v("\nThese are the least compute-intensive operations.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/user-attachments/assets/791880f1-a512-4778-a0d4-20d29282f898",alt:"image"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);