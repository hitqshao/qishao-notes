(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{433:function(e,t,s){"use strict";s.r(t);var n=s(5),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"chap6-the-backend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chap6-the-backend"}},[e._v("#")]),e._v(" Chap6. The Backend")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/a5566aac-5d9f-40c4-810b-ec6572a3e94f",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("White box")]),e._v(" Essential\n"),t("strong",[e._v("Gray Block")]),e._v(" For generated code efficiency")]),e._v(" "),t("h4",{attrs:{id:"_1-instructon-selection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-instructon-selection"}},[e._v("#")]),e._v(" 1. Instructon Selection"),t("br")]),e._v(" "),t("ul",[t("li",[e._v("Convert IR to target-specific SelectionDAG(Directed Acyclic Graph)\n"),t("ul",[t("li",[e._v("Block->DAG")]),e._v(" "),t("li",[e._v("Instruction->Node")]),e._v(" "),t("li",[e._v("Edge contains dataflow dependence and control dependence and glue.")])])]),e._v(" "),t("li",[e._v("LLVM use DAG to employ tree-based pattern-matching instruction selection.")]),e._v(" "),t("li",[e._v("IN the end of this phase, IR node are converted to target-machine(machine instructions) nodes.")])]),e._v(" "),t("h4",{attrs:{id:"_2-pre-register-allocation-ra-scheduling-the-first-instruction-scheduling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-pre-register-allocation-ra-scheduling-the-first-instruction-scheduling"}},[e._v("#")]),e._v(" 2. Pre-register Allocation(RA) scheduling,the first instruction scheduling."),t("br")]),e._v(" "),t("ul",[t("li",[e._v("This is to explore instruction-level parallelism")]),e._v(" "),t("li",[e._v("The instructions are converted to MachineInstr three-address representation.")])]),e._v(" "),t("h4",{attrs:{id:"_3-reguster-allocation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-reguster-allocation"}},[e._v("#")]),e._v(" 3. Reguster Allocation"),t("br")]),e._v(" "),t("h4",{attrs:{id:"_4-post-register-allocation-ra-instruction-scheduling-the-second-instruction-scheduling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-post-register-allocation-ra-instruction-scheduling-the-second-instruction-scheduling"}},[e._v("#")]),e._v(" 4. Post-register Allocation(RA) Instruction Scheduling, the second instruction scheduling")]),e._v(" "),t("ul",[t("li",[e._v("Now we have real register information, we can combine information of extra hazards and delays of real register to opmitize code.")])]),e._v(" "),t("h4",{attrs:{id:"_5-code-emission"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-code-emission"}},[e._v("#")]),e._v(" 5. Code Emission")]),e._v(" "),t("ul",[t("li",[e._v("Convert MachineInstr to MCInst")]),e._v(" "),t("li",[e._v("Emit Assembly Code")]),e._v(" "),t("li",[e._v("Emit Binary blobs to object code format")])]),e._v(" "),t("h3",{attrs:{id:"using-the-backend-tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-backend-tools"}},[e._v("#")]),e._v(" Using the backend tools")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("llc *bc -o *.s\nllc *.bc -filetype=obj -o *.o\n\nllc *.bc -march=mips -filetype=obj -o *.o\n\n// how march options\nllc -version\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h3",{attrs:{id:"learning-backend-struture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#learning-backend-struture"}},[e._v("#")]),e._v(" Learning backend struture")]),e._v(" "),t("ul",[t("li",[e._v("CodeGen: Instruction selection, scheduler,register allocation")]),e._v(" "),t("li",[e._v("MC: assembly parser, disassembler")]),e._v(" "),t("li",[e._v("TableGen")]),e._v(" "),t("li",[e._v("Target/*.cpp *.h *.td")])]),e._v(" "),t("p",[e._v("Notice:\n"),t("strong",[e._v("IselDAGtoDAG is for instruction selection.")]),e._v(" "),t("br"),e._v(" "),t("strong",[e._v("IselLowering is for Selection DAG Node lowering")]),e._v(" "),t("br"),e._v(" "),t("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/723f687b-0303-4add-89ea-5fe88676049c",alt:"image"}})]),e._v(" "),t("h3",{attrs:{id:"knowing-backend-libraries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#knowing-backend-libraries"}},[e._v("#")]),e._v(" Knowing backend libraries")]),e._v(" "),t("ul",[t("li",[t("Target",[e._v("AsmParser.a\n")])],1),e._v(" "),t("li",[t("Target",[e._v("AsmPrinter.a\n")])],1),e._v(" "),t("li",[t("Target",[e._v("CodeGen.a\n"),t("ul",[t("li",[e._v("majority of the target-dependent functionality of the backend, as following：")]),e._v(" "),t("li",[e._v("specific register handling rules, instruction selection, and scheduling")])])])],1),e._v(" "),t("li",[t("Target",[e._v("Desc.a\n"),t("ul",[t("li",[e._v("low-level MC infrastructure and is responsible for registering target-specific MC objects such as MCCodeEmitter")])])])],1),e._v(" "),t("li",[t("Target",[e._v("Info.a\n")])],1),e._v(" "),t("li",[t("Target",[e._v("Disassembler.a\n")])],1)]),e._v(" "),t("h3",{attrs:{id:"learning-how-to-use-tablegen-for-llvm-backends"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#learning-how-to-use-tablegen-for-llvm-backends"}},[e._v("#")]),e._v(" Learning how to use TableGen for LLVM backends")]),e._v(" "),t("ul",[t("li",[e._v("instruction formats,")]),e._v(" "),t("li",[e._v("instructions,")]),e._v(" "),t("li",[e._v("registers,")]),e._v(" "),t("li",[e._v("pattern-matching DAGs,")]),e._v(" "),t("li",[e._v("instruction selection matching order,")]),e._v(" "),t("li",[e._v("calling conventions,")]),e._v(" "),t("li",[e._v("target CPU properties (supported Instruction Set Architecture (ISA) features and processor families).")])]),e._v(" "),t("p",[e._v("insns.td\n"),t("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/e85b4512-f6d2-475d-bb4b-7fdb6a2bf8e8",alt:"image"}})]),e._v(" "),t("p",[e._v("Generate code using llvm-tblgen\n"),t("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/843b44f4-7d07-470d-85f8-5ff7c3aa167d",alt:"image"}})]),e._v(" "),t("p",[t("strong",[e._v("Target Properties: "),t("Target",[e._v(".td")])],1),t("br"),e._v(" "),t("strong",[e._v("Registers: "),t("Target",[e._v("RegisterInfo.td")])],1),e._v(" "),t("br")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd <llvm_source>/lib/Target/X86\n$ llvm-tblgen -gen-register-info X86.td -I ../../../include\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[t("strong",[e._v("Instruction format: "),t("Target",[e._v("InstrFormat.td")])],1),e._v(" "),t("br"),e._v(" "),t("strong",[e._v("Instructions: "),t("Target",[e._v("InstrInfo.td")])],1),e._v(" "),t("br")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("include/llvm/Target/Target.td\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/89ae29d2-9a4d-4466-98a9-c1af119fb056",alt:"image"}})]),e._v(" "),t("p",[e._v("dag in the above picture represents selectDAG for opcodes, registers or constants during instruction selection phase."),t("br")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SparcInstrInfo.td\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/6b733913-3755-4a66-acb0-a78958033216",alt:"image"}})]),e._v(" "),t("p",[e._v("We can get how the template parameters are assigned to class Instruction.")]),e._v(" "),t("ul",[t("li",[e._v("OutOperandList")]),e._v(" "),t("li",[e._v("InOperandList")]),e._v(" "),t("li",[e._v("AsmString")]),e._v(" "),t("li",[e._v("Pattern")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd <llvm_sources>/lib/Target/Sparc\nllvm-tblgen -print-records Sparc.td -I ../../../include | grep XNORrr -A 10\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[t("strong",[e._v("The difference between the first and second need to be checked.")])]),e._v(" "),t("ul",[t("li",[t("Target",[e._v("GenDAGISel.inc \n")])],1),e._v(" "),t("li",[t("Target",[e._v("GenInstrInfo.inc\n")])],1),e._v(" "),t("li",[t("Target",[e._v("GenAsmWriter.inc\n")])],1),e._v(" "),t("li",[t("Target",[e._v("GenCodeEmitter.inc\n")])],1),e._v(" "),t("li",[t("Target",[e._v("GenDisassemblerTables.inc\n")])],1),e._v(" "),t("li",[t("Target",[e._v("GenAsmMatcher.inc\n")])],1)]),e._v(" "),t("h3",{attrs:{id:"instruction-selection-phase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instruction-selection-phase"}},[e._v("#")]),e._v(" Instruction Selection Phase")]),e._v(" "),t("p",[e._v("LLVM IR -> SelectionDAG(SDNode)")]),e._v(" "),t("ol",[t("li",[e._v("Create DAG, in which node carry IR op")]),e._v(" "),t("li",[e._v("Nodes go through lowering, DAG combiner, and legalization phases.")]),e._v(" "),t("li",[e._v("Instruction selection perform DAG-to-DAG conversion, using node pattern matching and transforms SelectionDAG node into nodes representing target instructions.")])]),e._v(" "),t("p",[t("strong",[e._v("Most expensive ones in backend")])])])}),[],!1,null,null,null);t.default=a.exports}}]);