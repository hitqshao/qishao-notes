(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{546:function(s,a,n){"use strict";n.r(a);var e=n(8),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pytorch-cuda"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pytorch-cuda"}},[s._v("#")]),s._v(" Pytorch CUDA")]),s._v(" "),a("h2",{attrs:{id:"pytorch-adam-cuda-kernel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pytorch-adam-cuda-kernel"}},[s._v("#")]),s._v(" Pytorch Adam CUDA Kernel")]),s._v(" "),a("h3",{attrs:{id:"native-functions-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#native-functions-yaml"}},[s._v("#")]),s._v(" native_functions.yaml")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('- func: _fused_adam_(Tensor(a!)[] self,\nTensor(b!)[] grads,\nTensor(c!)[] exp_avgs,\nTensor(d!)[] exp_avg_sqs,\nTensor(e!)[] max_exp_avg_sqs,\nTensor[] state_steps, *,\nfloat lr, float beta1, float beta2,\nfloat weight_decay, float eps, bool amsgrad,\nbool maximize, Tensor? grad_scale=None, Tensor? found_inf=None) -> ()\n  # Unlike "foreach" functions, lists of tensors should be guaranteed to be on the same device (for now).\n  variants: function\n  dispatch:\n    CPU: _fused_adam_kernel_cpu_\n    CUDA: _fused_adam_kernel_cuda_\n    MPS: _fused_adam_kernel_mps_\n  autogen: _fused_adam, _fused_adam.out\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"fusedadamkernel-cu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fusedadamkernel-cu"}},[s._v("#")]),s._v(" FusedAdamKernel.cu")]),s._v(" "),a("p",[s._v("./aten/arc/ATen/native/cuda")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// The following overload simply has a Tensor lr\nvoid _fused_adam_kernel_cuda_(\n    at::TensorList params,\n    at::TensorList grads,\n    at::TensorList exp_avgs,\n    at::TensorList exp_avg_sqs,\n    at::TensorList max_exp_avg_sqs,\n    at::TensorList state_steps,\n    const at::Tensor& lr,\n    const double beta1,\n    const double beta2,\n    const double weight_decay,\n    const double eps,\n    const bool amsgrad,\n    const bool maximize,\n    const std::optional<at::Tensor>& grad_scale,\n    const std::optional<at::Tensor>& found_inf) {\n  if (lr.is_cpu()) {\n    _fused_adam_kernel_cuda_(\n        params,\n        grads,\n        exp_avgs,\n        exp_avg_sqs,\n        max_exp_avg_sqs,\n        state_steps,\n        lr.item<double>(),\n        beta1,\n        beta2,\n        weight_decay,\n        eps,\n        amsgrad,\n        maximize,\n        grad_scale,\n        found_inf);\n    return;\n  }\n\n  // Manually check devices since we specify no device check in\n  // native_functions.yaml\n  ...\n\n  if (amsgrad) {\n    ...\n  } else {\n    TORCH_CHECK(\n        at::native::check_fast_path_restrictions(\n            {params, grads, exp_avgs, exp_avg_sqs}),\n        "params, grads, exp_avgs, and exp_avg_sqs must have same dtype, device, and layout");\n    _fused_adam_cuda_impl_(\n        params,\n        grads,\n        exp_avgs,\n        exp_avg_sqs,\n        state_steps,\n        lr,\n        beta1,\n        beta2,\n        weight_decay,\n        eps,\n        maximize,\n        grad_scale,\n        found_inf);\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br")])]),a("h3",{attrs:{id:"fused-adam-impl-cu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fused-adam-impl-cu"}},[s._v("#")]),s._v(" fused_adam_impl.cu")]),s._v(" "),a("p",[s._v("./aten/arc/ATen/native/cuda")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('void _fused_adam_cuda_impl_(\n    at::TensorList params,\n    at::TensorList grads,\n    at::TensorList exp_avgs,\n    at::TensorList exp_avg_sqs,\n    at::TensorList state_steps,\n    const double lr,\n    const double beta1,\n    const double beta2,\n    const double weight_decay,\n    const double eps,\n    const bool maximize,\n    const std::optional<at::Tensor>& grad_scale,\n    const std::optional<at::Tensor>& found_inf) {\n  std::vector<std::vector<at::Tensor>> tensor_lists{\n      params.vec(), grads.vec(), exp_avgs.vec(), exp_avg_sqs.vec()};\n\n  const float* grad_scale_ptr =\n      grad_scale.has_value() ? grad_scale->data_ptr<float>() : nullptr;\n  const float* found_inf_ptr =\n      found_inf.has_value() ? found_inf->data_ptr<float>() : nullptr;\n  const float* lr_ptr = nullptr;\n\n  AT_DISPATCH_FLOATING_TYPES_AND2(\n      kHalf,\n      kBFloat16,\n      params[0].scalar_type(),\n      "fused_adam_kernel_cuda",\n      [&]() {\n        multi_tensor_apply_for_fused_optimizer<4>(\n            tensor_lists,\n            state_steps,\n            FusedAdamMathFunctor<scalar_t, 4, ADAM_MODE::ORIGINAL, false>(),\n            lr_ptr, // unused\n            lr,\n            beta1,\n            beta2,\n            weight_decay,\n            eps,\n            maximize,\n            grad_scale_ptr,\n            found_inf_ptr);\n      });\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])]),a("p",[s._v("The callable function is "),a("strong",[s._v("FusedAdamMathFunctor<scalar_t, 4, ADAM_MODE::ORIGINAL, false>()")]),s._v(".")]),s._v(" "),a("h3",{attrs:{id:"multitensorapply-cuh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multitensorapply-cuh"}},[s._v("#")]),s._v(" MultiTensorApply.cuh")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\ntemplate <typename T, typename U, typename... ArgTypes>\nC10_LAUNCH_BOUNDS_1(kBlockSize)\n__global__ void multi_tensor_apply_kernel(\n    T tensorListMeta,\n    U callable,\n    ArgTypes... args) {\n  // Hand the chunk information to the user-supplied functor to process however\n  // it likes.\n  callable(kChunkSize, tensorListMeta, args...);\n}\n\ntemplate <int depth, typename T, typename... ArgTypes>\nvoid multi_tensor_apply_for_fused_optimizer(\n    std::vector<std::vector<at::Tensor>>& tensor_lists,\n    at::TensorList state_steps,\n    T callable,\n    ArgTypes... args) {\n    ...\n    for (const auto& chunk : c10::irange(chunks)) {\n            multi_tensor_apply_kernel<<<\n            loc_block_info,\n            kBlockSize,\n            0,\n            at::cuda::getCurrentCUDAStream()>>>(\n            tensorListMeta, callable, args...);\n        C10_CUDA_KERNEL_LAUNCH_CHECK();\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);