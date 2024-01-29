(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{422:function(t,e,n){"use strict";n.r(e);var i=n(5),a=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("llvm front end demo\nNotes from "),e("strong",[t._v("Life of an instruction in LLVM")]),t._v("\nhttps://blog.llvm.org/2012/11/life-of-instruction-in-llvm.html")]),t._v(" "),e("h3",{attrs:{id:"_1-clang-parser-will-build-an-abstract-syntax-tree-ast-and-then-goes-on-to-emit-llvm-ir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-clang-parser-will-build-an-abstract-syntax-tree-ast-and-then-goes-on-to-emit-llvm-ir"}},[t._v("#")]),t._v(" 1. Clang parser will build an Abstract Syntax Tree(AST) and then goes on to emit LLVM IR")]),t._v(" "),e("h3",{attrs:{id:"_2-llvm-target-independent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-llvm-target-independent"}},[t._v("#")]),t._v(" 2. LLVM Target Independent")]),t._v(" "),e("h3",{attrs:{id:"_3-selectiondag-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-selectiondag-node"}},[t._v("#")]),t._v(" 3. SelectionDAG Node"),e("br")]),t._v(" "),e("p",[t._v("SelectionDAGBuild creates SDGNode"),e("br"),t._v("\nSelectionDAGIsel goes over all IR instructions and calls SelectionDAGBuilder::visit to Dispatch them"),e("br"),t._v("\nWe can use -debug or -view to get log or dump image of the graph"),e("br")]),t._v(" "),e("h3",{attrs:{id:"_4-to-emit-machine-instructions-llvm-will-legalize-the-operation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-to-emit-machine-instructions-llvm-will-legalize-the-operation"}},[t._v("#")]),t._v(" 4. To emit machine instructions, LLVM will legalize the operation"),e("br")]),t._v(" "),e("p",[t._v("Use target-specific hooks to convert all operations and types into ones that the target actually supports.\nThis is done by "),e("strong",[t._v("TargetLowering")]),t._v(". "),e("br"),t._v("\nSelectionDAGLegalize::LegalizeOp")]),t._v(" "),e("h3",{attrs:{id:"_5-instruction-selection-from-sdnode-to-machinesndode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-instruction-selection-from-sdnode-to-machinesndode"}},[t._v("#")]),t._v(" 5. Instruction selection from SDNode to MachineSNDode"),e("br")]),t._v(" "),e("p",[t._v("SelectionDAGISel::Select"),e("br"),t._v("\nSelectCode"),e("br"),t._v("\nThis step will create MachineSDNode, a subclass of SDNode which holds the information required to construct an actual machine instruction, but still in DAG node form.")]),t._v(" "),e("h3",{attrs:{id:"_6-scheduling-and-emitting-a-machineinstr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-scheduling-and-emitting-a-machineinstr"}},[t._v("#")]),t._v(" 6. Scheduling and emitting a MachineInstr"),e("br")]),t._v(" "),e("p",[t._v("Translate SDNode into Machine Instructions with InstrEmitter::EmitMachineNode, emmit into MachineBasicBlock.\nHere the instruction are in linear form (MI). No DAG any more."),e("br"),t._v(" "),e("strong",[t._v("-print-machineinstrs")]),e("br"),t._v("\nStill SSA form.")]),t._v(" "),e("h3",{attrs:{id:"_7-register-allocation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-register-allocation"}},[t._v("#")]),t._v(" 7. Register Allocation"),e("br")]),t._v(" "),e("p",[t._v("For instructions that can only support fixed registers, it is already allocated. Here the virtual registers are allocated into physical registers. This assignment is done by X86DAGToDAGISel::Select."),e("br"),t._v("\nAfter this, another round of optimization is conducted, TargetPassConfig::addMachinePasses.")]),t._v(" "),e("h3",{attrs:{id:"_8-from-machineinstruction-to-mcinst"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-from-machineinstruction-to-mcinst"}},[t._v("#")]),t._v(" 8. From MachineInstruction to MCinst")]),t._v(" "),e("p",[t._v("JIT: AsmPrinter::EmitInstruction"),e("br"),t._v("\nObj: ObjectStreamer::EmitInstruction"),e("br")])])}),[],!1,null,null,null);e.default=a.exports}}]);