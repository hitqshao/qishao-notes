(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{454:function(n,s,e){"use strict";e.r(s);var a=e(5),t=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h3",{attrs:{id:"how-is-the-simulation-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-is-the-simulation-started"}},[n._v("#")]),n._v(" How is the simulation started?")]),n._v(" "),s("h4",{attrs:{id:"from-binary-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-binary-file"}},[n._v("#")]),n._v(" From Binary File")]),n._v(" "),s("details",[s("summary",[n._v("Code")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("   0x000000000040171f <+13>:    callq  0x400ad0 <__cudaRegisterFatBinary@plt>\n=> 0x0000000000401724 <+18>:    mov    %rax,0x2029f5(%rip)        # 0x604120 <_ZL20__cudaFatCubinHandle>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br")])])]),n._v(" "),s("details",[s("summary",[n._v("Code")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// @@@@@@ cuda_runtime_api.cc\nvoid** CUDARTAPI __cudaRegisterFatBinary( void *fatCubin ) {\n\tCUctx_st *context = GPGPUSim_Context();\n}\n\nstatic CUctx_st* GPGPUSim_Context()\n{\n\tstatic CUctx_st *the_context = NULL;\n\tif( the_context == NULL ) {\n\t\t_cuda_device_id *the_gpu = GPGPUSim_Init();\n\t\tthe_context = new CUctx_st(the_gpu);\n\t}\n\treturn the_context;\n}\n\nclass _cuda_device_id *GPGPUSim_Init()\n{\n\tstatic _cuda_device_id *the_device = NULL;\n\tif( !the_device ) {\n\t\tgpgpu_sim *the_gpu = gpgpu_ptx_sim_init_perf();\n\n\t\tcudaDeviceProp *prop = (cudaDeviceProp *) calloc(sizeof(cudaDeviceProp),1);\n\t\t...\n\t\tthe_gpu->set_prop(prop);\n\t\tthe_device = new _cuda_device_id(the_gpu);\n\t}\n\tstart_sim_thread(1);\n\treturn the_device;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br")])])]),n._v(" "),s("p",[n._v("GPGPUSim_Init() in cuda_runtime will call function from  gpgpusim_entrypoint.cc.")]),n._v(" "),s("p",[n._v("It conductthe initialization and create "),s("strong",[n._v("gpgpu_sim")]),n._v(" and also "),s("strong",[n._v("stream_manager")])]),n._v(" "),s("ul",[s("li",[n._v("gpu config")]),n._v(" "),s("li",[n._v("opcode latency config")])]),n._v(" "),s("p",[s("strong",[n._v("This is the creation time of gpu simulation.")])]),n._v(" "),s("p",[n._v("Notice that function "),s("strong",[n._v("start_sim_thread")]),n._v(". It starts the simulation thread.")]),n._v(" "),s("details",[s("summary",[n._v("Code")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('// @@@@@@ gpgpusim_entrypoint.cc gpgpu_ptx_sim_init_perf\ngpgpu_sim *gpgpu_ptx_sim_init_perf()\n{\n\n   read_sim_environment_variables();\n   read_parser_environment_variables();\n   option_parser_t opp = option_parser_create();\n\n   icnt_reg_options(opp);\n   g_the_gpu_config.reg_options(opp); // register GPU microrachitecture options\n   ptx_reg_options(opp);\n   ptx_opcocde_latency_options(opp);\n   option_parser_cmdline(opp, sg_argc, sg_argv); // parse configuration options\n   g_the_gpu_config.convert_byte_string();\n   fprintf(stdout, "GPGPU-Sim: Configuration options:\\n\\n");\n   option_parser_print(opp, stdout);\n\n   g_the_gpu_config.init();\n   g_the_gpu = new gpgpu_sim(g_the_gpu_config);\n   g_stream_manager = new stream_manager(g_the_gpu,g_cuda_launch_blocking);\n\n   g_simulation_starttime = time((time_t *)NULL);\n\n   sem_init(&g_sim_signal_start,0,0);\n   sem_init(&g_sim_signal_finish,0,0);\n   sem_init(&g_sim_signal_exit,0,0);\n\n   return g_the_gpu;\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br")])])]),n._v(" "),s("p",[n._v("cuda_runtime_api.cc")]),n._v(" "),s("details",[s("summary",[n._v("Code")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('// @@@@@@ gpgpusim_entrypoint.cc\nvoid start_sim_thread(int api)\n{\n    if( g_sim_done ) {\n        g_sim_done = false;\n\t...\n\tpthread_create(&g_simulation_thread,NULL,gpgpu_sim_thread_concurrent,NULL);\n\n    }\n}\n\n\nvoid *gpgpu_sim_thread_concurrent(void*)\n{\n    // concurrent kernel execution simulation thread\n    do {\n\t...\n        while( g_stream_manager->empty() && !g_sim_done )\n            ;\n\t...\n        pthread_mutex_lock(&g_sim_lock);\n        g_sim_active = true;\n        pthread_mutex_unlock(&g_sim_lock);\n        bool active = false;\n        bool sim_cycles = false;\n        g_the_gpu->init();\n        do {\n            // check if a kernel has completed\n            // launch operation on device if one is pending and can be run\n\n            // Need to break this loop when a kernel completes. This was a\n            // source of non-deterministic behaviour in GPGPU-Sim (bug 147).\n            // If another stream operation is available, g_the_gpu remains active,\n            // causing this loop to not break. If the next operation happens to be\n            // another kernel, the gpu is not re-initialized and the inter-kernel\n            // behaviour may be incorrect. Check that a kernel has finished and\n            // no other kernel is currently running.\n            // !!!!!! This will check whether the operation is done and whether gpu is active\n            if(g_stream_manager->operation(&sim_cycles) && !g_the_gpu->active())\n                break;\n\n            //functional simulation\n            if( g_the_gpu->is_functional_sim()) {\n                kernel_info_t * kernel = g_the_gpu->get_functional_kernel();\n                gpgpu_cuda_ptx_sim_main_func(*kernel);\n                g_the_gpu->finish_functional_sim(kernel);\n            }\n\n            // !!!!!! This is the most essential part of event-driven function\n            // The gpu event is cycled().\n            //performance simulation\n            if( g_the_gpu->active() ) {\n                g_the_gpu->cycle();\n                sim_cycles = true;\n                g_the_gpu->deadlock_check();\n            }else {\n\t\tg_the_gpu->cycle();\n                if(g_the_gpu->cycle_insn_cta_max_hit()){\n                    g_stream_manager->stop_all_running_kernels();\n                    g_sim_done = true;\n                    break_limit = true;\n                }\n            }\n\n            active=g_the_gpu->active() || !g_stream_manager->empty_protected();\n\n        } while( active && !g_sim_done);\n\t...\n        pthread_mutex_lock(&g_sim_lock);\n        g_sim_active = false;\n        pthread_mutex_unlock(&g_sim_lock);\n    } while( !g_sim_done );\n    printf("GPGPU-Sim: *** simulation thread exiting ***\\n");\n    fflush(stdout);\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br"),s("span",{staticClass:"line-number"},[n._v("67")]),s("br"),s("span",{staticClass:"line-number"},[n._v("68")]),s("br"),s("span",{staticClass:"line-number"},[n._v("69")]),s("br"),s("span",{staticClass:"line-number"},[n._v("70")]),s("br"),s("span",{staticClass:"line-number"},[n._v("71")]),s("br"),s("span",{staticClass:"line-number"},[n._v("72")]),s("br"),s("span",{staticClass:"line-number"},[n._v("73")]),s("br"),s("span",{staticClass:"line-number"},[n._v("74")]),s("br"),s("span",{staticClass:"line-number"},[n._v("75")]),s("br")])])]),n._v(" "),s("p",[n._v("The "),s("em",[n._v("stream_manager")]),n._v(" "),s("strong",[n._v("operation")]),n._v(" function used above is not for drive each cycle of the simulation."),s("br"),n._v("\nInstead, it will call "),s("em",[n._v("stream_operation")]),n._v(" "),s("strong",[n._v("do_operation")]),n._v(" to launch kernel on GPU."),s("br"),n._v("\nBased on different type of operation, if just copy from * to * it will copy, if it is kernel launch."),s("br"),n._v("\nIt will launch according to function mode or detail mode."),s("br"),n._v("\nBut, as to launch, it just put kenerl onto "),s("em",[n._v("gpu-sim")]),n._v(" "),s("strong",[n._v("m_running_kernels")]),n._v(" queue."),s("br"),n._v("\nIt does not run it.")]),n._v(" "),s("p",[s("ins",[s("em",[n._v("g_the_gpu->cycle()")]),n._v(" drives the gpu simulation.")])]),n._v(" "),s("details",[s("summary",[n._v("Code")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// @@@@@@ stream_manger.cc\nbool stream_manager::operation( bool * sim)\n{\n    bool check=check_finished_kernel();\n    ...\n    stream_operation op =front();\n    if(!op.do_operation( m_gpu )) //not ready to execute\n    {\n       ...\n    }\n    ...\n    return check;\n}\n\nbool stream_operation::do_operation( gpgpu_sim *gpu )\n{\n    case stream_prefetch_host_to_device:\n    ...\n    case stream_memcpy_device_to_device:\n    ...\n    case stream_kernel_launch:\n        if( m_sim_mode ) { //Functional Sim\n            gpu->set_cache_config(m_kernel->name());\n            gpu->functional_launch( m_kernel );\n        }\n        else { //Performance Sim\n            if( gpu->can_start_kernel() && m_kernel->m_launch_latency == 0) {\n                gpu->set_cache_config(m_kernel->name());\n                gpu->launch( m_kernel );\n\t        gpu->getGmmu()->log_kernel_info(m_kernel->get_uid(), gpu_sim_cycle + gpu_tot_sim_cycle, false);\n                if(sim_prof_enable) {\n\t           kernel_stats* k_s = new kernel_stats(cur_cycle, m_stream->get_uid(), m_kernel->get_uid());\n\t           sim_prof[cur_cycle].push_back(k_s);\n\t        }\t\t\t\n            }\n            else {\n                return false;    \n            }\n        }\n        break;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br")])])]),n._v(" "),s("details",[s("summary",[n._v("Code")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// @@@@@@ gpu-sim.h/cc\nvoid gpgpu_sim::launch( kernel_info_t *kinfo )\n{\n   unsigned cta_size = kinfo->threads_per_cta();\n   if ( cta_size > m_shader_config->n_thread_per_shader ) {\n      abort();\n   }\n\n   unsigned n=0;\n   for(n=0; n < m_running_kernels.size(); n++ ) {\n\t// If previous kernel is already done or not empty yet, replace\n\t// !! There might be bug that if earlist kenerl is done, it will insert kernel to the earilist position\n\t// !! which might break first-in-first-out priority\n       if( (NULL==m_running_kernels[n]) || m_running_kernels[n]->done() ) {\n           m_running_kernels[n] = kinfo;\n           break;\n       }\n   }\n}\n\nvoid functional_launch(kernel_info_t * k) {\n     m_functional_sim = true;\n     m_functional_sim_kernel = k;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br")])])])])}),[],!1,null,null,null);s.default=t.exports}}]);