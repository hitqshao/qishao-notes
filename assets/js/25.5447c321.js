(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{436:function(e,s,a){"use strict";a.r(s);var n=a(5),t=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h3",{attrs:{id:"_1-codefile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-codefile"}},[e._v("#")]),e._v(" 1. CodeFile")]),e._v(" "),s("p",[e._v("lib/Target/Mips/MipsISelLowering.cpp")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("All DAG Combine is called here.")])])]),e._v(" "),s("div",{staticClass:"language-{r class.source = NULL, eval = FALSE} line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SDValue  MipsTargetLowering::PerformDAGCombine(SDNode *N, DAGCombinerInfo &DCI)\n  const {\n  SelectionDAG &DAG = DCI.DAG;\n  unsigned Opc = N->getOpcode();\n\n  switch (Opc) {\n  default: break;\n  case ISD::SDIVREM:\n  case ISD::UDIVREM:\n    return performDivRemCombine(N, DAG, DCI, Subtarget);\n  case ISD::SELECT:\n    return performSELECTCombine(N, DAG, DCI, Subtarget);\n  case MipsISD::CMovFP_F:\n  case MipsISD::CMovFP_T:\n    return performCMovFPCombine(N, DAG, DCI, Subtarget);\n  case ISD::AND:\n    return performANDCombine(N, DAG, DCI, Subtarget);\n  case ISD::OR:\n    return performORCombine(N, DAG, DCI, Subtarget);\n  case ISD::ADD:\n    return performADDCombine(N, DAG, DCI, Subtarget);\n  case ISD::SHL:\n    return performSHLCombine(N, DAG, DCI, Subtarget);\n  case ISD::SUB:\n    return performSUBCombine(N, DAG, DCI, Subtarget);\n  }\n\n  return SDValue();\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("Define of performSUBCombine")])])]),e._v(" "),s("ul",[s("li",[e._v("we can look into the process.")]),e._v(" "),s("li",[e._v("ISD::SUB will call performSUBCombine")]),e._v(" "),s("li",[e._v("It will combine  (sub v0 (mul v1, v2)) into (msub v1, v2, v0)")]),e._v(" "),s("li",[e._v("The intresting thing is that, current SDNode Opcode is sub and if precedent node is mul, it will combine it into msub.")])]),e._v(" "),s("p",[s("em",[s("strong",[e._v("How to identify the precedent node?")])])]),e._v(" "),s("ol",[s("li",[e._v("SDValue Mult = ROOTNode->getOperand(1); // multi SDValue")]),e._v(" "),s("li",[e._v("SDValue AddOperand = ROOTNode->getOperand(0); // add SDValue")]),e._v(" "),s("li",[e._v("how about previous instruction?")]),e._v(" "),s("li",[e._v("ROOTNode->getOperand(0) will point to previous instruction")])]),e._v(" "),s("div",{staticClass:"language-{r class.source = NULL, eval = FALSE} line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("static SDValue performSUBCombine(SDNode *N, SelectionDAG &DAG,\n                                 TargetLowering::DAGCombinerInfo &DCI,\n                                 const MipsSubtarget &Subtarget) {\n  // (sub v0 (mul v1, v2)) => (msub v1, v2, v0)\n  if (DCI.isBeforeLegalizeOps()) {\n    if (Subtarget.hasMips32() && !Subtarget.hasMips32r6() &&\n        !Subtarget.inMips16Mode() && N->getValueType(0) == MVT::i64)\n      return performMADD_MSUBCombine(N, DAG, Subtarget);\n\n    return SDValue();\n  }\n\n  return SDValue();\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("div",{staticClass:"language-{r class.source = NULL, eval = FALSE} line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("static SDValue performMADD_MSUBCombine(SDNode *ROOTNode, SelectionDAG &CurDAG,\n                                       const MipsSubtarget &Subtarget) {\n  SDValue Mult = ROOTNode->getOperand(0).getOpcode() == ISD::MUL\n                     ? ROOTNode->getOperand(0)\n                     : ROOTNode->getOperand(1);\n\n  SDValue AddOperand = ROOTNode->getOperand(0).getOpcode() == ISD::MUL\n                     ? ROOTNode->getOperand(1)\n                     : ROOTNode->getOperand(0);\n\n  // Transform this to a MADD only if the user of this node is the add.\n  // If there are other users of the mul, this function returns here.\n  if (!Mult.hasOneUse())\n    return SDValue();\n\n  // maddu and madd are unusual instructions in that on MIPS64 bits 63..31\n  // must be in canonical form, i.e. sign extended. For MIPS32, the operands\n  // of the multiply must have 32 or more sign bits, otherwise we cannot\n  // perform this optimization. We have to check this here as we're performing\n  // this optimization pre-legalization.\n  SDValue MultLHS = Mult->getOperand(0);\n  SDValue MultRHS = Mult->getOperand(1);\n\n  bool IsSigned = MultLHS->getOpcode() == ISD::SIGN_EXTEND &&\n                  MultRHS->getOpcode() == ISD::SIGN_EXTEND;\n  bool IsUnsigned = MultLHS->getOpcode() == ISD::ZERO_EXTEND &&\n                    MultRHS->getOpcode() == ISD::ZERO_EXTEND;\n\n  if (!IsSigned && !IsUnsigned)\n    return SDValue();\n\n  // Initialize accumulator.\n  SDLoc DL(ROOTNode);\n  SDValue TopHalf;\n  SDValue BottomHalf;\n  BottomHalf = CurDAG.getNode(ISD::EXTRACT_ELEMENT, DL, MVT::i32, AddOperand,\n                              CurDAG.getIntPtrConstant(0, DL));\n\n  TopHalf = CurDAG.getNode(ISD::EXTRACT_ELEMENT, DL, MVT::i32, AddOperand,\n                           CurDAG.getIntPtrConstant(1, DL));\n  SDValue ACCIn = CurDAG.getNode(MipsISD::MTLOHI, DL, MVT::Untyped,\n                                  BottomHalf,\n                                  TopHalf);\n\n  // Create MipsMAdd(u) / MipsMSub(u) node.\n  bool IsAdd = ROOTNode->getOpcode() == ISD::ADD;\n  unsigned Opcode = IsAdd ? (IsUnsigned ? MipsISD::MAddu : MipsISD::MAdd)\n                          : (IsUnsigned ? MipsISD::MSubu : MipsISD::MSub);\n  SDValue MAddOps[3] = {\n      CurDAG.getNode(ISD::TRUNCATE, DL, MVT::i32, Mult->getOperand(0)),\n      CurDAG.getNode(ISD::TRUNCATE, DL, MVT::i32, Mult->getOperand(1)), ACCIn};\n  EVT VTs[2] = {MVT::i32, MVT::i32};\n  SDValue MAdd = CurDAG.getNode(Opcode, DL, VTs, MAddOps);\n\n  SDValue ResLo = CurDAG.getNode(MipsISD::MFLO, DL, MVT::i32, MAdd);\n  SDValue ResHi = CurDAG.getNode(MipsISD::MFHI, DL, MVT::i32, MAdd);\n  SDValue Combined =\n      CurDAG.getNode(ISD::BUILD_PAIR, DL, MVT::i64, ResLo, ResHi);\n  return Combined;\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br"),s("span",{staticClass:"line-number"},[e._v("59")]),s("br"),s("span",{staticClass:"line-number"},[e._v("60")]),s("br")])]),s("h3",{attrs:{id:"_2-values-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-values-user"}},[e._v("#")]),e._v(" 2. Values & User")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/c42d7468-348a-4ae7-ad96-5fb660321a47",alt:"image"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/ba018d68-9e24-4066-8b51-0fc6691978d2",alt:"image"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/a3276837-56e9-4b0e-8404-0d074c0d5a09",alt:"image"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/a0c2242f-0d8d-4290-9207-af486fe29554",alt:"image"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/bc49dc58-274e-49c7-8928-23e50fb1f332",alt:"image"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/216be391-94ae-4d27-9c91-e2a0f27f47bb",alt:"image"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/hitqshao/qishao-notes/assets/23403286/d3dde338-4334-4033-a1f0-5f51bbbf2dd6",alt:"image"}})]),e._v(" "),s("h3",{attrs:{id:"_3-q-a-in-stackoverflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-q-a-in-stackoverflow"}},[e._v("#")]),e._v(" 3. Q & A in Stackoverflow")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://stackoverflow.com/questions/35370195/llvm-difference-between-uses-and-user-in-instruction-or-value-classes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Q&A"),s("OutboundLink")],1),e._v(" "),s("br"),e._v("\nSince Instruction is derived from Value it inherits both functions users and uses. The difference is that a user of Value has the Value as one of its operands.")]),e._v(" "),s("p",[e._v("When you are calling uses you get a list of all Use instances holding a reference from the Value to each of the users of the particular Value. Calling users gives you a list of User directly. The following code shows how to use users and uses.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("for(auto U : V->users()){  // U is of type User*\n     if (auto I = dyn_cast<Instruction>(U)){\n        // an instruction uses V\n     }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("You can see users as a shortcut because you can do the same with uses:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("for(auto U : V->uses()){  // U is of type Use*\n     if (auto I = dyn_cast<Instruction>(U.getUser())){\n        // an instruction uses V\n     }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("Commonly it is enough to use users to get all dependencies of a Value.")]),e._v(" "),s("p",[e._v("All Values used by a Value are the operands. This direction of dependency is not part of a Value's use list.")]),e._v(" "),s("p",[e._v("We have still not presented the most powerful aspect of the LLVM IR (enabled by the SSA form): the Value and User interfaces; these allow you to easily navigate the use-def and def-use chains. In the LLVM in-memory IR, a class that inherits from Value means that it defines a result that can be used by others, whereas a subclass of User means that this entity uses one or more Value interfaces. Function and Instruction are subclasses of both Value and User, while BasicBlock is a subclass of just Value. To understand this, let's analyze these two classes in depth:")]),e._v(" "),s("p",[e._v("• The Value class defines the use_begin() and use_end() methods to allow you to iterate through Users, offering an easy way to access its def-use chain. For every Value class, you can also access its name through the getName() method. This models the fact that any LLVM value can have a distinct identifier associated with it. For example, %add1 can identify the result of an add instruction, BB1 can identify a basic block, and myfunc can identify a function. Value also has a powerful method called replaceAllUsesWith(Value *), which navigates through all of the users of this value and replaces it with some other value. This is a good example of how the SSA form allows you to easily substitute instructions and write fast optimizations. You can view the full interface at LLVM Value Class.")]),e._v(" "),s("p",[e._v("• The User class has the op_begin() and op_end() methods that allows you to quickly access all of the Value interfaces that it uses. Note that this represents the use-def chain. You can also use a helper method called replaceUsesOfWith(Value *From, Value *To) to replace any of its used values. You can view the full interface at LLVM User Class.")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("For short, use_begin() iterator  points to users. and op_begin() points to operand values. but the value is the basic class of instruction. By Refer to a value, you can get the producer's instructin.")])])]),e._v(" "),s("h3",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://sourcecodeartisan.com/2020/11/17/llvm-backend-4.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Write an LLVM Backend #4: Instruction Selection"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.cs.cmu.edu/afs/cs/academic/class/15745-s15/public/lectures/L6-LLVM2-1up.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("More on the LLVM Compiler"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.cs.toronto.edu/~pekhimenko/courses/cscd70-w18/docs/Tutorial%202%20-%20Intro%20to%20LLVM%20(Cont).pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction to LLVM (II)"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/666016704",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入浅出 LLVM之 Value 、User 、Use 源码解析"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=t.exports}}]);