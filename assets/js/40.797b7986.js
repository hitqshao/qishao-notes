(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{451:function(n,s,e){"use strict";e.r(s);var t=e(5),a=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("ul",[s("li",[n._v("libcuda\n"),s("ul",[s("li",[n._v("cuda_runtime_api.cc")])])]),n._v(" "),s("li",[n._v("src\n"),s("ul",[s("li",[n._v("abstract_hardware_model.h/cpp")]),n._v(" "),s("li",[n._v("gpgpusim_entrypoint.h/cpp")]),n._v(" "),s("li",[n._v("stream_manager.h/cpp")]),n._v(" "),s("li",[n._v("cuda-sim\n"),s("ul",[s("li",[s("p",[n._v("cuda-sim.h/cc\n🐝")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("void function_info::ptx_assemble() {\n for ( i=m_instructions.begin(); i != m_instructions.end(); i++ ) {\n  // map pc to instruction\n  g_pc_to_finfo[PC] = this;\n  // This is a uniform array, each entry is one instruction\n  m_instr_mem[n] = pI; \n  s_g_pc_to_insn.push_back(pI);\n  ssert(pI == s_g_pc_to_insn[PC]);\n  pI->set_m_instr_mem_index(n);\n  pI->set_PC(PC);\n }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br")])])]),n._v(" "),s("li",[s("p",[n._v("memory.h/cc")])]),n._v(" "),s("li",[s("p",[n._v("opcode.h/def")])]),n._v(" "),s("li",[s("p",[n._v("ptx_loader.h/cc")])]),n._v(" "),s("li",[s("p",[n._v("ptx.y"),s("br"),n._v("\nIt is a Yacc/Bison grammar file used to parse PTX (Parallel Thread Execution) assembly code, which is a low-level intermediate representation used by NVIDIA GPUs."),s("br"),n._v("\nIt defines the grammar rules for PTX assembly code and specifies how different components of PTX code should be interpreted and processed."),s("br"),n._v("\nThis includes recognizing various PTX instructions, operands, directives, and control structures, and translating them into an internal representation that the simulator can work with.")]),n._v(" "),s("p",[n._v("When it meets instruction statement it will call add_instruction.")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("statement_list: directive_statement { add_directive(); }\n| instruction_statement { add_instruction();}\n...\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])])]),n._v(" "),s("li",[s("p",[n._v("ptx_parser.h/cc\nthe add_instruction used in ptx.y will call the following instruction.")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("void add_instruction() \n{\nptx_instruction *i = new ptx_instruction(**);\ng_instructions.push_back(i);\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[n._v("in the end of function it will add all the instructins into function infomation")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("void end_function()\n{\n...\ng_func_info->add_inst( g_instructions );\n...\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br")])])]),n._v(" "),s("li",[s("p",[n._v("ptx_ir.h/cc")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("//@@@@@@ ptx_ir.h\n...\nstd::vector<const symbol*> m_args;\n// end_function will put function into this list\nstd::list<ptx_instruction*> m_instructions;\nstd::vector<basic_block_t*> m_basic_blocks;\n\n//@@@@@@ ptx_ir.cc\nvoid gpgpu_ptx_assemble( std::string kname, void *kinfo ) {\n function_info *func_info = (function_info *)kinfo;\n // This will call cuda_sim ptx_assemble function\n func_info->ptx_assemble();\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br")])])]),n._v(" "),s("li",[s("p",[n._v("ptx_sim.h/cc")])])])]),n._v(" "),s("li",[n._v("gpgpu-sim\n"),s("ul",[s("li",[n._v("gpgpu-sim.h/cc")]),n._v(" "),s("li",[n._v("shader.h/shader.cc")]),n._v(" "),s("li",[n._v("mem_fetch.h/cc")]),n._v(" "),s("li",[n._v("stack.h/cc")]),n._v(" "),s("li",[n._v("addrdec.h/cc")]),n._v(" "),s("li",[n._v("dram.h/cc")]),n._v(" "),s("li",[n._v("traffic_breakdown.h/cc")])])])])])]),n._v(" "),s("h3",{attrs:{id:"how-did-gpgpu-sim-get-instruction-from-cuda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-did-gpgpu-sim-get-instruction-from-cuda"}},[n._v("#")]),n._v(" How did GPGPU-sim get instruction from CUDA?")]),n._v(" "),s("p",[n._v("🐝 show how Yacc/Bison grammar file is used to add instruction in function_info.\nNow we will describe how GPGPU-sim execute each instructin.")]),n._v(" "),s("h4",{attrs:{id:"function-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-mode"}},[n._v("#")]),n._v(" Function Mode")]),n._v(" "),s("p",[n._v("abstract_hardware_model.cc implement this function, if you provde a warpId, it can return warp_instruction."),s("br"),n._v("\nThus, if we know next pc, we can use ptx_fetch_inst to get instruction.")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// @@@@@@ abstract_hardware_model.cc\n//! Get the warp to be executed using the data taken form the SIMT stack\nwarp_inst_t core_t::getExecuteWarp(unsigned warpId)\n{\n    unsigned pc,rpc;\n    m_simt_stack[warpId]->get_pdom_stack_top_info(&pc,&rpc);\n    warp_inst_t wi= *ptx_fetch_inst(pc);\n    wi.set_active(m_simt_stack[warpId]->get_active_mask());\n    return wi;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br")])]),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("      gpgpu*_sim_main_function\n                 |\n    gpgpu_cuda_ptx_sim_main_func\n                 |\n              execute\n                 |\n            executeWarp\n                 |\n   getExecuteWarp execute_warp_inst_t\n")])])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// @@@@@@ gpgpusim_entrypoint.cc\nint gpgpu_opencl_ptx_sim_main_func( kernel_info_t *grid )\n{\n    //calling the CUDA PTX simulator, sending the kernel by reference and a flag set to true,\n    //the flag used by the function to distinguish OpenCL calls from the CUDA simulation calls which\n    //it is needed by the called function to not register the exit the exit of OpenCL kernel as it doesn't register entering in the first place as the CUDA kernels does\n   gpgpu_cuda_ptx_sim_main_func( *grid, true );\n   return 0;\n}\n\n// @@@@@@ cuda-sim.cc\n/*!\nThis function simulates the CUDA code functionally, it takes a kernel_info_t parameter \nwhich holds the data for the CUDA kernel to be executed\n!*/\nvoid gpgpu_cuda_ptx_sim_main_func( kernel_info_t &kernel, bool openCL ) {\n  while(!kernel.no_more_ctas_to_run()){\n    functionalCoreSim cta(&kernel,g_the_gpu,\n    g_the_gpu->getShaderCoreConfig()->warp_size\n    );\n    cta.execute();\n }\n}\n\n\nvoid functionalCoreSim::execute()\n {\n    ...\n    //start executing the CTA\n    while(true){\n        ...\n        for(unsigned i=0;i<m_warp_count;i++){\n            executeWarp(i,allAtBarrier,someOneLive);\n        }\n        ...\n    }\n }\n\nvoid functionalCoreSim::executeWarp(unsigned i, bool &allAtBarrier, bool & someOneLive)\n{\n ...\n warp_inst_t inst =getExecuteWarp(i);\n //!!!!! Attention !!!!!!!!\n execute_warp_inst_t(inst,i);\n ...\n updateSIMTStack( i, &inst );\n}\n\nconst warp_inst_t *ptx_fetch_inst( address_type pc )\n{\n    return function_info::pc_to_instruction(pc);\n}\n\n// @@@@@@ ptx_ir.h\nstatic const ptx_instruction* pc_to_instruction(unsigned pc) \n{\n  if( pc < s_g_pc_to_insn.size() )\n      return s_g_pc_to_insn[pc];\n  else\n      return NULL;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br")])]),s("h4",{attrs:{id:"timing-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timing-mode"}},[n._v("#")]),n._v(" Timing Mode")]),n._v(" "),s("ul",[s("li",[n._v("shader.cc decode() fill instruction into ibuffer")]),n._v(" "),s("li",[n._v("shader.h filled into m_ibuffer")]),n._v(" "),s("li",[n._v("shader.cc cycle issue warp")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// @@@@@@ shader.cc\nvoid shader_core_ctx::decode()\n{\n    if( m_inst_fetch_buffer.m_valid ) {\n        // decode 1 or 2 instructions and place them into ibuffer\n        address_type pc = m_inst_fetch_buffer.m_pc;\n        const warp_inst_t* pI1 = ptx_fetch_inst(pc);\n        m_warp[m_inst_fetch_buffer.m_warp_id].ibuffer_fill(0,pI1);\n        m_warp[m_inst_fetch_buffer.m_warp_id].inc_inst_in_pipeline();\n        ...\n    }\n}\n\n// @@@@@@ shader.h\n    void ibuffer_fill( unsigned slot, const warp_inst_t *pI )\n    {\n       m_ibuffer[slot].m_inst=pI;\n       m_ibuffer[slot].m_valid=true;\n    }\n\n    const warp_inst_t *ibuffer_next_inst() { return m_ibuffer[m_next].m_inst; }\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br")])]),s("p",[n._v("Every cycle, if current warp is done, it will pick form the m_next_cycle_prioritized_warps to schedule next warp."),s("br"),n._v("\nThe instruction is obtained from m_ibuffer.")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("void scheduler_unit::cycle()\n{\n    SCHED_DPRINTF( \"scheduler_unit::cycle()\\n\" );\n    bool valid_inst = false;  // there was one warp with a valid instruction to issue (didn't require flush due to control hazard)\n    bool ready_inst = false;  // of the valid instructions, there was one not waiting for pending register writes\n    bool issued_inst = false; // of these we issued one\n\n    order_warps();\n    for ( std::vector< shd_warp_t* >::const_iterator iter = m_next_cycle_prioritized_warps.begin();\n          iter != m_next_cycle_prioritized_warps.end();\n          iter++ ) {\n        // Don't consider warps that are not yet valid\n        if ( (*iter) == NULL || (*iter)->done_exit() ) {\n            continue;\n        }\n        while( !warp(warp_id).waiting() && !warp(warp_id).ibuffer_empty() && (checked < max_issue) && (checked <= issued) && (issued < max_issue) ) {\n            const warp_inst_t *pI = warp(warp_id).ibuffer_next_inst();\n            if( pI ) {\n            ...\n              if ( (pI->op == LOAD_OP) || (pI->op == STORE_OP) || (pI->op == MEMORY_BARRIER_OP) ) {\n                m_shader->issue_warp(*m_mem_out,pI,active_mask,warp_id);\n                issued++;\n                issued_inst=true;\n                warp_inst_issued = true;\n              } else if ( (pI->op == SFU_OP) || (pI->op == ALU_SFU_OP) ) {\n                m_shader->issue_warp(*m_sfu_out,pI,active_mask,warp_id);\n              }\n            }\n        }\n    }\n  }\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);