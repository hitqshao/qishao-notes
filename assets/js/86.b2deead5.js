(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{541:function(t,a,n){"use strict";n.r(a);var s=n(8),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"aot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aot"}},[t._v("#")]),t._v(" AOT")]),t._v(" "),a("h2",{attrs:{id:"aot-dispatch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aot-dispatch"}},[t._v("#")]),t._v(" aot dispatch")]),t._v(" "),a("p",[t._v("./torch/_functorch/_aot_autograd/jit_compile_runtime_wrappers.py.")]),t._v(" "),a("p",[t._v("aot_dispatch_autograd")]),t._v(" "),a("p",[t._v("The aot_dispatch_autograd function is responsible for tracing, partitioning, and compiling a given function for automatic differentiation using Ahead-Of-Time (AOT) Autograd.")]),t._v(" "),a("p",[t._v("It handles the creation of "),a("strong",[t._v("forward and backward graphs")]),t._v(", manages metadata, and ensures that the compiled function can be executed efficiently with support for gradient computation.")]),t._v(" "),a("p",[t._v("Inputs")]),t._v(" "),a("ul",[a("li",[t._v("flat_fn: The original function to be traced and compiled.")]),t._v(" "),a("li",[t._v("flat_args: A list of arguments to be passed to the function.")]),t._v(" "),a("li",[t._v("aot_config: Configuration for AOT Autograd, which includes settings for partitioning, logging, and compilation.")]),t._v(" "),a("li",[t._v("fw_metadata: Metadata about the function's inputs and outputs, including information about views and mutations.")])]),t._v(" "),a("p",[t._v("Outputs")]),t._v(" "),a("ul",[a("li",[t._v("compiled_function: A compiled version of the original function that includes both the forward and backward passes, optimized for execution with support for gradient computation.")])]),t._v(" "),a("p",[t._v("Major Functions in aot_dispatch_autograd")]),t._v(" "),a("p",[a("strong",[t._v("aot_dispatch_autograd_graph")])]),t._v(" "),a("ul",[a("li",[t._v("Purpose: Traces the original function and creates a joint forward-backward FX graph.")]),t._v(" "),a("li",[t._v("Steps: Calls aot_dispatch_autograd_graph to trace the function and generate the FX graph.\n"),a("ul",[a("li",[t._v("Returns the FX graph, joint inputs, and subclass metadata (if any).")])])])]),t._v(" "),a("p",[a("strong",[t._v("partition_fn:")])]),t._v(" "),a("ul",[a("li",[t._v("Purpose: Partitions the joint FX graph into separate forward and backward graphs.")]),t._v(" "),a("li",[t._v("Steps: Uses the partition function specified in aot_config to split the FX graph into forward and backward modules.\n"),a("ul",[a("li",[t._v("Returns the forward and backward modules.")])])])]),t._v(" "),a("p",[a("strong",[t._v("fw_compiler and bw_compiler:")])]),t._v(" "),a("ul",[a("li",[t._v("Purpose: Compiles the forward and backward FX graphs into executable functions.")]),t._v(" "),a("li",[t._v("Steps: Uses the forward and backward compilers specified in aot_config to compile the FX modules.\n"),a("ul",[a("li",[t._v("Returns the compiled forward and backward functions.")])])])]),t._v(" "),a("p",[a("strong",[t._v("CompiledFunction:")])]),t._v(" "),a("ul",[a("li",[t._v("Purpose: A custom autograd function that wraps the compiled forward and backward functions.")]),t._v(" "),a("li",[t._v("Steps: Defines the forward and backward static methods to handle the execution of the compiled functions.\n"),a("ul",[a("li",[t._v("Manages the saving and restoring of tensors and symbolic integers for gradient computation.")])])])]),t._v(" "),a("p",[a("strong",[t._v("create_runtime_wrapper")])]),t._v(" "),a("ul",[a("li",[t._v("Purpose: Creates a runtime wrapper for the compiled function to handle input mutations and other runtime considerations.")]),t._v(" "),a("li",[t._v("Steps: Wraps the CompiledFunction.apply method with additional logic for handling input mutations and AMP (Automatic Mixed Precision) settings.\n"),a("ul",[a("li",[t._v("Returns the wrapped function.")])])])]),t._v(" "),a("details",[a("summary",[t._v("Code")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("aot_dispatch_autograd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fx_g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" joint_inputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maybe_subclass_meta "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aot_dispatch_autograd_graph"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# type: ignore[misc]")]),t._v("\n        flat_fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flat_args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" aot_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fw_metadata"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("fw_metadata\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    fw_module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bw_module "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aot_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partition_fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        fx_g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" joint_inputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num_fwd_outputs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("num_inner_fwd_outputs\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])]),t._v(" "),a("h3",{attrs:{id:"aot-dispatch-autograd-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aot-dispatch-autograd-graph"}},[t._v("#")]),t._v(" aot_dispatch_autograd_graph")]),t._v(" "),a("p",[t._v("The aot_dispatch_autograd_graph function is responsible for preparing and tracing a given function (flat_fn) with its arguments (flat_args) for automatic differentiation using AOT (Ahead-Of-Time) Autograd."),a("br"),t._v("\nIt processes the function to handle input mutations, creates a joint forward-backward function, and generates an "),a("strong",[t._v("FX graph")]),t._v(" for the function."),a("br"),t._v("\nThe function ensures that the graph is functional (i.e., free of in-place operations) and can handle tensor subclasses if necessary.")]),t._v(" "),a("ul",[a("li",[t._v("pytree.tree_map: This function processes the traced_tangents to ensure they are detached and contiguous if they are tensors, preparing them for tracing.")]),t._v(" "),a("li",[t._v("fn_prepped_for_autograd: Prepares the original function for autograd by incorporating metadata about views and mutations, ensuring correct handling of these aspects during tracing.")]),t._v(" "),a("li",[a("em",[a("strong",[t._v("create_joint")])]),t._v(": Creates a joint forward-backward function that traces both the forward and backward passes together, enabling efficient autograd processing.")]),t._v(" "),a("li",[t._v("create_functionalized_fn: Converts the joint function into a functional form, handling input mutations and tracing the joint structure, ensuring compatibility with autograd.")]),t._v(" "),a("li",[t._v("aot_dispatch_subclass: Handles tracing for tensor subclasses, ensuring that the autograd process can correctly handle these specialized tensor types.")]),t._v(" "),a("li",[a("em",[a("strong",[t._v("_create_graph")])]),t._v(": Creates an FX graph from the joint function and its inputs, providing a lower-level representation of the function for optimization and execution.")]),t._v(" "),a("li",[a("em",[a("strong",[t._v("fx_g.graph.eliminate_dead_code")])]),t._v(": Eliminates any dead code from the FX graph to optimize it, improving performance and reducing unnecessary computations.")]),t._v(" "),a("li",[a("em",[a("strong",[t._v("fx_g.recompile")])]),t._v(": Recompiles the FX graph after eliminating dead code, ensuring that the graph is up-to-date and optimized for execution.")])]),t._v(" "),a("details",[a("summary",[t._v("Code")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### dispatch_and_compile_graph.py")]),t._v("\n    fn_prepared_for_autograd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fn_prepped_for_autograd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        flat_fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        fw_metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    joint_fn_to_trace "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_joint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn_prepared_for_autograd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" aot_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("aot_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    joint_fn_to_trace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updated_joint_inputs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_functionalized_fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        joint_fn_to_trace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        joint_inputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("fw_metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        aot_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("aot_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        trace_joint"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    subclass_tracing_info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aot_dispatch_subclass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        joint_fn_to_trace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        updated_joint_inputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        is_joint_structure"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("fw_metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        fw_only"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("flat_fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    fx_g "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _create_graph"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("joint_fn_to_trace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updated_joint_inputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" aot_config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("aot_config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    fx_g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graph"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eliminate_dead_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fx_g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recompile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br")])])]),t._v(" "),a("h4",{attrs:{id:"create-joint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-joint"}},[t._v("#")]),t._v(" create_joint")]),t._v(" "),a("p",[t._v("The create_joint function is designed to create a joint forward-backward function for automatic differentiation."),a("br"),t._v("\nIt ensures that the function can be traced and differentiated correctly, handling the computation of gradients and preserving the necessary metadata.")]),t._v(" "),a("ul",[a("li",[t._v("Inputs")])]),t._v(" "),a("ul",[a("li",[t._v("fn: A callable function that returns a tuple of (outputs, mask). The mask indicates which outputs require tangents.")]),t._v(" "),a("li",[t._v("aot_config: Configuration for AOT (Ahead-Of-Time) Autograd, which includes settings like whether tangents are needed.")])]),t._v(" "),a("ul",[a("li",[t._v("Outputs")])]),t._v(" "),a("ul",[a("li",[t._v("return a tuple of (outs, mask), where "),a("code",[t._v("mask")]),t._v(" tells us which outputs are meant to have tangents.")]),t._v(" "),a("li",[t._v("compute tangents for every output that requires grad.")])]),t._v(" "),a("p",[a("em",[a("strong",[t._v("inner_fn")])])]),t._v(" "),a("p",[t._v("This is the core function that computes the forward pass, identifies the outputs that require gradients, and performs the backward pass to compute the gradients.")]),t._v(" "),a("ul",[a("li",[t._v("Calls the original function fn with the primal inputs to get the outputs and a mask indicating which outputs require tangents.")]),t._v(" "),a("li",[t._v("Identifies the inputs and outputs that need gradients.")]),t._v(" "),a("li",[t._v("Sets up stack trace preservation hooks for the gradient functions. "),a("strong",[t._v("setup_stacktrace_preservation_hooks")])]),t._v(" "),a("li",[t._v("Calls torch.autograd.grad to compute the gradients of the needed outputs with respect to the inputs that require gradients.")]),t._v(" "),a("li",[t._v("Returns the original outputs and the computed gradients.")])]),t._v(" "),a("h4",{attrs:{id:"create-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-graph"}},[t._v("#")]),t._v(" _create_graph")]),t._v(" "),a("p",[t._v("_create_graph wraps make_fx.")]),t._v(" "),a("p",[t._v("The make_fx function is a utility in PyTorch that traces a given function f and its inputs to produce an FX graph."),a("br"),t._v("\nThis graph represents the operations performed by the function in a way that can be further analyzed, transformed, and optimized."),a("br"),t._v("\nThe function supports different tracing modes (real, fake, symbolic) and can handle decomposition of complex operations into simpler ones.")]),t._v(" "),a("ul",[a("li",[t._v("tracing_mode Handling: Determines the mode of tracing (real, fake, symbolic) and sets up the appropriate context for each mode.")]),t._v(" "),a("li",[t._v("ShapeEnv: Manages symbolic shapes during tracing, especially in symbolic mode.")]),t._v(" "),a("li",[t._v("FakeTensorMode: Creates fake tensors to simulate tensor operations without actual computation, used in fake and symbolic modes.")]),t._v(" "),a("li",[t._v("ProxyTorchDispatchMode: Sets up a proxy mode to intercept and record tensor operations during tracing.")]),t._v(" "),a("li",[t._v("wrap_fake: Wraps input tensors as fake tensors or symbolic integers based on the tracing mode.")]),t._v(" "),a("li",[t._v("dispatch_trace: Performs the actual tracing of the function, recording the operations into an FX graph.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);