import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft, 
  Briefcase, 
  GraduationCap, 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  FileText, 
  CheckCircle2, 
  Zap, 
  Award, 
  Activity, 
  FileCode, 
  Folder, 
  Code2, 
  Sparkles,
  RefreshCw,
  FolderOpen,
  Sun,
  Moon
} from 'lucide-react';

import { ConsoleLog, Project } from './types';
import { experiences, projects, skillCategories, personalInfo } from './data';
import DeviceSimulator from './components/DeviceSimulator';
import CodeInspector from './components/CodeInspector';
import ConsoleFooter from './components/ConsoleFooter';

export default function App() {
  const [activeTab, setActiveTab] = useState<'workspace' | 'specs'>('workspace');
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const simulatorRef = useRef<HTMLDivElement>(null);

  const currentIndex = projects.findIndex(p => p.id === selectedProject.id);

  const handlePrevProject = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
    addLog(`Prev Module loaded into editor & simulator pane: lib/src/screens/${projects[prevIndex].id}_module.dart`, 'flutter');
  };

  const handleNextProject = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
    addLog(`Next Module loaded into editor & simulator pane: lib/src/screens/${projects[nextIndex].id}_module.dart`, 'flutter');
  };
  const [logs, setLogs] = useState<ConsoleLog[]>([]);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Append a log entry to our hot-reload console state
  const addLog = (message: string, type: ConsoleLog['type'] = 'info') => {
    const now = new Date();
    const cleanTime = now.toISOString().replace('T', ' ').substring(11, 19);
    const newLog: ConsoleLog = {
      id: `log-${Date.now()}-${Math.random()}`,
      timestamp: cleanTime,
      type,
      message
    };
    setLogs((prev) => [...prev, newLog]);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  // Pre-seed some authentic-looking initialization logs on first boot load
  useEffect(() => {
    addLog('Initializing Adeniyi Portfolio Compiler VM v4.0.1...', 'info');
    addLog('[STABLE] Target architecture compiled to JIT Assembler: Arm64/x86_64', 'info');
    addLog('[ENV] Loaded credentials from .env.example', 'info');
    addLog('Flutter (SDK 3.22.1) • JIT Engine Live • Impeller Active', 'flutter');
    addLog('Establishing MethodChannel handshake bindings for Android/iOS bridges... OK', 'success');
    addLog('Sentry Client Initialised. Crash reporting ready.', 'success');
  }, []);

  // Quick action triggered hot reload
  const handleHotReload = () => {
    addLog('Reassembling layout trees for active widget frames...', 'flutter');
    setTimeout(() => {
      addLog(`[HOT RELOAD] Assembly synchronized. Refreshed ${selectedProject.title} simulator instantly (14ms)`, 'success');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-surface-dim font-sans text-ink-primary flex flex-col justify-between overflow-x-hidden pt-1 relative selection:bg-fuchsia-flare/40 selection:text-white border border-precision/10 shadow-[inset_0_0_80px_rgba(0,0,0,0.5)]">
      {/* Dynamic Background visual grid vector scanline accent */}
      <div className="absolute inset-0 bg-surface-dim bg-[radial-gradient(var(--precision)_1px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none opacity-25 z-0" />
      
      <div className="z-10 flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-4 flex flex-col space-y-4">
        
        {/* TOP BRAND HEADER CONTROL RAIL */}
        <header className="flex flex-col lg:flex-row lg:items-center justify-between p-4 bg-surface-obsidian rounded-xl border border-precision gap-4">
          
          {/* Logo & Status Badge */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-fuchsia-flare to-hyper-cyan p-[2px] shadow-[0px_0px_15px_rgba(78,222,163,0.15)]">
              <div className="w-full h-full bg-surface-dim rounded-md flex items-center justify-center font-space-grotesk text-lg font-black text-white italic select-none">
                DA
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-space-grotesk text-xl font-extrabold tracking-tight bg-gradient-to-r from-ink-primary to-hyper-cyan bg-clip-text text-transparent">
                  ADENIYI.DEV
                </h1>
              </div>
              <p className="font-mono text-[10px] text-ink-subtle uppercase tracking-widest mt-0.5">
                Chiaroscuro Technical Suite • Senior Mobile Engineer
              </p>
            </div>
          </div>

          {/* Quick Metrics display (Anti-SLOP, genuine career metrics) */}
          <div className="hidden xl:flex items-center space-x-6 border-l border-r border-precision px-6 py-1">
            <div className="text-center font-mono">
              <span className="block text-[10px] text-ink-subtle uppercase font-space-grotesk">Fluid Latency</span>
              <span className="text-sm font-black text-hyper-cyan">-40% checkout</span>
            </div>
            <div className="text-center font-mono">
              <span className="block text-[10px] text-ink-subtle uppercase font-space-grotesk">Successful Tx</span>
              <span className="text-sm font-black text-engine-green">+30% volume</span>
            </div>
            <div className="text-center font-mono">
              <span className="block text-[10px] text-ink-subtle uppercase font-space-grotesk">Deployment Speed</span>
              <span className="text-sm font-black text-fuchsia-flare">+50% speedup</span>
            </div>
          </div>

          {/* View Toggles & Contacts panel */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Nav Tabs button controls */}
            <div className="flex p-0.5 bg-surface-low border border-precision rounded-lg">
              <button
                onClick={() => {
                  setActiveTab('workspace');
                  addLog('Navigated to Workspace IDE Panel.', 'info');
                }}
                className={`px-3 py-1.5 rounded-md font-space-grotesk font-bold text-xs tracking-wide transition-all uppercase flex items-center space-x-1.5 cursor-pointer ${activeTab === 'workspace' ? 'bg-hyper-cyan text-surface-well shadow-md' : 'text-ink-muted hover:text-ink-primary'}`}
              >
                <Cpu size={13} />
                <span>WORKSPACE IDE</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('specs');
                  addLog('Navigated to Career Specs backboard.', 'info');
                }}
                className={`px-3 py-1.5 rounded-md font-space-grotesk font-bold text-xs tracking-wide transition-all uppercase flex items-center space-x-1.5 cursor-pointer ${activeTab === 'specs' ? 'bg-fuchsia-flare text-surface-well shadow-md' : 'text-ink-muted hover:text-ink-primary'}`}
              >
                <FileText size={13} />
                <span>Specs & CV</span>
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={() => {
                const nextTheme = theme === 'dark' ? 'light' : 'dark';
                setTheme(nextTheme);
                addLog(`Theme swapped to ${nextTheme === 'light' ? 'High-Contrast Light Mode' : 'Obsidian Dark Mode'}.`, 'info');
              }}
              className="px-3 py-2 bg-surface-low border border-precision hover:border-hyper-cyan hover:text-hyper-cyan transition-all rounded-lg text-xs font-semibold flex items-center space-x-1.5 cursor-pointer text-ink-primary"
              title={`Switch to ${theme === 'dark' ? 'Light Theme' : 'Dark Theme'}`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={13} className="text-yellow-400" />
                  <span className="font-space-grotesk text-[11px] uppercase tracking-wider">LIGHT</span>
                </>
              ) : (
                <>
                  <Moon size={13} className="text-[#a78bfa]" />
                  <span className="font-space-grotesk text-[11px] uppercase tracking-wider">DARK (OBSIDIAN)</span>
                </>
              )}
            </button>

            {/* Quick Email link */}
            <a 
              href={`mailto:${personalInfo.email}`}
              className="px-3 py-2 bg-surface-low border border-precision hover:border-hyper-cyan hover:text-hyper-cyan transition-all rounded-lg text-xs font-medium flex items-center space-x-1.5"
            >
              <Mail size={13} />
              <span className="hidden md:inline font-mono text-[11px]">{personalInfo.email}</span>
            </a>
          </div>
        </header>

        {/* ACTIVE STAGE VIEWPORT */}
        {activeTab === 'workspace' ? (
          /* WORKSPACE IDE SECTION */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Left Col: Projects Navigation & Explorer tree (3-cols wide on desktop) */}
            <aside className="lg:col-span-3 flex flex-col bg-surface-obsidian border border-precision rounded-xl p-4 space-y-4">
              
              {/* Profile Card Header */}
              <div className="space-y-2 border-b border-precision pb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-hyper-cyan rounded-full animate-pulse"></span>
                  <p className="font-space-grotesk font-bold tracking-tight text-ink-primary text-base truncate">
                    {personalInfo.name}
                  </p>
                </div>
                <p className="font-mono text-[10px] text-hyper-cyan uppercase font-bold tracking-wider">
                  Senior Mobile Engineer
                </p>
                <p className="text-[11px] text-ink-muted leading-relaxed font-geist p-1 rounded bg-surface-well border border-precision/40">
                  Specializing in high-performance Flutter applications, native integration (Kotlin/Swift), and seamless animations. Delivering scalable and operational apps for 4+ years.
                </p>
              </div>

              {/* Project Explorer Tree */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-ink-subtle uppercase tracking-widest font-black select-none pl-1">
                  <div className="flex items-center space-x-1.5">
                    <FolderOpen size={13} />
                    <span>Project File Navigator</span>
                  </div>
                  <span className="font-mono text-[9px] text-fuchsia-flare">{projects.length} Files</span>
                </div>

                <div className="space-y-1 font-mono text-xs select-none">
                  {projects.map((proj) => {
                    const isSelected = selectedProject.id === proj.id;
                    const fileName = `${proj.id}_module.dart`;
                    return (
                      <button
                        key={proj.id}
                        onClick={() => {
                          setSelectedProject(proj);
                          addLog(`File loaded into editor pane: lib/src/screens/${fileName}`, 'flutter');
                          
                          // Smooth scroll to active simulator frame
                          setTimeout(() => {
                            simulatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                          }, 50);
                        }}
                        className={`w-full text-left px-2 py-1.5 rounded flex items-center justify-between border transition-all cursor-pointer ${isSelected ? 'bg-surface-low border-hyper-cyan/50 text-hyper-cyan font-bold shadow-md' : 'bg-transparent border-transparent text-ink-muted hover:bg-surface-high/30 hover:text-ink-primary'}`}
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <FileCode size={13} className={isSelected ? 'text-hyper-cyan' : 'text-ink-subtle'} />
                          <span className="truncate">{fileName}</span>
                        </div>
                        <ChevronRight size={11} className={`opacity-60 shrink-0 ${isSelected ? 'text-hyper-cyan rotate-90' : 'text-ink-subtle'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* VM Hot Reload fast trigger */}
              <div className="pt-2">
                <button
                  onClick={handleHotReload}
                  className="w-full py-2 bg-gradient-to-r from-surface-low to-surface-high hover:from-hyper-cyan/20 hover:to-surface-low border border-precision hover:border-hyper-cyan hover:text-hyper-cyan text-ink-muted rounded-lg font-space-grotesk font-bold text-xs tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center space-x-1.5 py-2.5 shadow-sm active:scale-95"
                >
                  <RefreshCw size={13} className="animate-spin-slow" />
                  <span>Manual Hot Reload</span>
                </button>
              </div>

              {/* Brief CV Anchor card */}
              <div className="p-3 bg-surface-well border border-precision/50 rounded-lg text-xs space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-fuchsia-flare font-extrabold font-space-grotesk block">Nomba SDK Metric</span>
                <p className="text-ink-muted text-[11px] leading-relaxed">
                  Led the Flutter mobile checkout SDK build, cutting checkout time 40% and lifting transaction volume.
                </p>
                <a 
                  href="https://pub.dev/packages/nomba_flutter"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    addLog('Redirecting to pub.dev: nomba_flutter package.', 'info');
                  }}
                  className="text-[10px] text-hyper-cyan hover:underline block font-semibold pt-1 uppercase tracking-wider"
                >
                  View Nomba Flutter SDK →
                </a>
              </div>

            </aside>
            
            {/* Mid Main Content: Interactive Editor & Mobile Simulator side-by-side (9-cols wide) */}
            <main className="lg:col-span-9 flex flex-col xl:grid xl:grid-cols-12 gap-4">
              
              {/* Code Inspector (Occupies 7-cols on desktop layout) */}
              <div className="xl:col-span-7 flex flex-col h-[520px] xl:h-[640px]">
                <CodeInspector 
                  code={selectedProject.codeSnippet}
                  filename={`lib/src/screens/${selectedProject.id}_module.dart`}
                  onAddLog={addLog}
                />
              </div>

              {/* Device Simulator frame & details description metrics (Occupies 5-cols) */}
              <div ref={simulatorRef} className="xl:col-span-5 flex flex-col space-y-3 justify-between bg-surface-obsidian p-4 border border-precision rounded-xl">
                
                {/* Simulator Section Head with Previous/Next controls */}
                <div className="space-y-2 pb-2 border-b border-precision/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 select-none">
                      <Sparkles size={13} className="text-fuchsia-flare" />
                      <span className="font-space-grotesk text-[10px] uppercase text-ink-muted font-bold tracking-widest">Active Simulator Device</span>
                    </div>
                    {/* Compact Project Navigator buttons */}
                    <div className="flex items-center space-x-1.5 font-mono text-[10px]">
                      <button 
                        id="btn-prev-project"
                        onClick={handlePrevProject}
                        title="Load Previous Widget"
                        className="p-1 rounded bg-surface-well border border-precision hover:border-hyper-cyan hover:text-hyper-cyan hover:bg-surface-high transition-all text-ink-subtle cursor-pointer flex items-center justify-center active:scale-95"
                      >
                        <ChevronLeft size={12} />
                      </button>
                      <span className="px-2 py-0.5 text-[10px] text-ink-primary bg-surface-low border border-precision/60 rounded font-semibold min-w-12 text-center select-none shadow-sm">
                        {currentIndex + 1} / {projects.length}
                      </span>
                      <button 
                        id="btn-next-project"
                        onClick={handleNextProject}
                        title="Load Next Widget"
                        className="p-1 rounded bg-surface-well border border-precision hover:border-hyper-cyan hover:text-hyper-cyan hover:bg-surface-high transition-all text-ink-subtle cursor-pointer flex items-center justify-center active:scale-95"
                      >
                        <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-space-grotesk font-extrabold text-hyper-cyan text-lg select-none leading-tight">
                      {selectedProject.title} Widget Run
                    </h3>
                    <p className="text-[11px] font-geist text-ink-muted leading-relaxed mt-1">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* Simulated physical phone frame component */}
                <div className="flex justify-center p-1 bg-surface-dim border border-precision/60 rounded-xl relative">
                  {/* Grid background on simulator station base */}
                  <div className="absolute inset-0 bg-surface-well bg-[radial-gradient(var(--precision)_1px,transparent_1px)] [background-size:12px_12px] opacity-15 rounded-xl" />
                  <DeviceSimulator 
                    activeProject={selectedProject}
                    onAddLog={addLog}
                  />
                </div>

                {/* Achieved results list for active project specs */}
                <div className="bg-surface-well/90 p-3 rounded-lg border border-precision/70 space-y-1.5 select-text">
                  <div className="flex items-center space-x-1 border-b border-precision/60 pb-1 text-[10px] tracking-wider uppercase font-bold text-ink-subtle">
                    <CheckCircle2 size={11} className="text-engine-green" />
                    <span>Project High-Fidelity Achievements</span>
                  </div>
                  <ul className="space-y-1 font-geist text-[11px] text-ink-muted list-disc list-inside">
                    {selectedProject.achievements.map((item, idx) => (
                      <li key={idx} className="leading-tight">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </main>

          </div>
        ) : (
          /* DEVELOPER SPECS & CV VIEWER */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 py-2 animate-fade-in font-geist">
            
            {/* Biography Left Panel (4 Columns) */}
            <aside className="lg:col-span-4 space-y-5 flex flex-col">
              
              {/* Profile card badge */}
              <div className="bg-surface-obsidian text-center p-6 border border-precision rounded-xl space-y-4">
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-tr from-fuchsia-flare to-hyper-cyan p-[3px] shadow-[0px_0px_25px_rgba(78,222,163,0.15)] flex items-center justify-center">
                    <div className="w-full h-full bg-surface-dim rounded-full flex items-center justify-center font-space-grotesk text-3xl font-black text-ink-primary italic">
                      DA
                    </div>
                  </div>
                  <span className="absolute bottom-1 right-2 w-4 h-4 bg-engine-green border-2 border-surface-obsidian rounded-full animate-ping"></span>
                  <span className="absolute bottom-1 right-2 w-4 h-4 bg-engine-green border-2 border-surface-obsidian rounded-full"></span>
                </div>

                <div className="space-y-1.5">
                  <h2 className="font-space-grotesk text-2xl font-black text-ink-primary leading-tight">
                    {personalInfo.name}
                  </h2>
                  <p className="text-sm font-semibold text-hyper-cyan tracking-wide uppercase font-space-grotesk">
                    {personalInfo.role}
                  </p>
                  <p className="font-mono text-[10px] text-ink-subtle uppercase tracking-widest">
                    Lagos, Africa (Open to relocation)
                  </p>
                </div>

                {/* Direct quick-dial panel */}
                <div className="pt-3 border-t border-precision space-y-2 text-xs text-left font-mono">
                  <div className="flex items-center justify-between p-1.5 bg-surface-low rounded border border-precision/40">
                    <span className="text-ink-subtle">Mobile:</span>
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-ink-primary hover:text-hyper-cyan font-semibold">{personalInfo.phone}</a>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-surface-low rounded border border-precision/40">
                    <span className="text-ink-subtle">GitHub:</span>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-hyper-cyan hover:underline flex items-center space-x-0.5">
                      <span>oluwadamme</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-surface-low rounded border border-precision/40">
                    <span className="text-ink-subtle">LinkedIn:</span>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-fuchsia-flare hover:underline flex items-center space-x-0.5">
                      <span>damilola-01</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Certified Educational backboard */}
              <div className="bg-surface-obsidian p-5 border border-precision rounded-xl space-y-3.5">
                <div className="flex items-center space-x-2 text-fuchsia-flare border-b border-precision pb-2">
                  <GraduationCap size={16} />
                  <span className="font-space-grotesk font-extrabold uppercase tracking-widest text-xs">Educational Credentials</span>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] bg-surface-well border border-precision/50 px-2 py-0.5 rounded text-fuchsia-flare font-bold inline-block">2016 - 2021</span>
                  <h4 className="font-space-grotesk text-sm font-bold text-ink-primary">B.Sc. Electrical Engineering</h4>
                  <p className="text-xs text-hyper-cyan font-semibold">Obafemi Awolowo University, Nigeria</p>
                  <div className="pt-2 text-[11px] text-ink-muted leading-relaxed space-y-1">
                    <span className="block font-bold text-ink-primary text-xs uppercase tracking-wider font-space-grotesk mb-1">Relevant Subjects:</span>
                    <span className="block">• Object-Oriented Programming (OOP)</span>
                    <span className="block">• System Designs</span>
                    <span className="block">• System Algorithms & Data Structures</span>
                  </div>
                  <div className="pt-2.5 border-t border-precision text-[11px] text-ink-subtle">
                    <span className="font-semibold block text-ink-primary font-space-grotesk text-[10px] uppercase">CO-CURRICULAR CLUBS:</span>
                    Google Developer Student Community, HackerRank Active Committer.
                  </div>
                </div>
              </div>

            </aside>

            {/* Career Timeline Detail Panel (8 Columns) */}
            <main className="lg:col-span-8 space-y-5">
              
              {/* Chronological Work History backlog */}
              <div className="bg-surface-obsidian p-5 border border-precision rounded-xl space-y-5">
                <div className="flex items-center space-x-2 border-b border-precision pb-3 text-hyper-cyan">
                  <Briefcase size={16} />
                  <span className="font-space-grotesk font-black uppercase tracking-wider text-xs">Certified Career Milestones</span>
                </div>

                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={exp.id} className="relative pl-5 border-l border-fuchsia-flare/40 last:border-none">
                      {/* Timeline side pip bubble */}
                      <span className="absolute -left-1.5 top-1.5 w-3.5 h-3.5 bg-surface-dim border-2 border-hyper-cyan rounded-full flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-fuchsia-flare rounded-full"></span>
                      </span>

                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h4 className="font-space-grotesk text-base font-extrabold text-ink-primary">
                            {exp.role} @ <span className="text-hyper-cyan">{exp.company}</span>
                          </h4>
                          <span className="text-[10px] font-mono font-bold bg-surface-well border border-precision px-2 py-0.5 rounded text-fuchsia-flare uppercase">
                            {exp.period}
                          </span>
                        </div>

                        {/* Bullets */}
                        <ul className="space-y-1.5 list-disc list-inside text-xs text-ink-muted leading-normal">
                          {exp.description.map((bullet, bIdx) => (
                            <li key={bIdx} className="leading-relaxed text-[11px] md:text-xs">
                              {bullet}
                            </li>
                          ))}
                        </ul>

                        {/* Performance Metrics chips */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {exp.metrics.map((met) => (
                            <span key={met} className="text-[10px] font-mono font-bold bg-engine-green/10 border border-engine-green/35 text-engine-green px-2 py-0.5 rounded-full select-all">
                              {met}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modular Skills Stack Matrix (Bento style) */}
              <div className="grid grid-cols-1 md:grid-cols-1 select-text gap-4">
                <div className="bg-surface-obsidian p-5 border border-precision rounded-xl space-y-4">
                  <div className="flex items-center space-x-2 border-b border-precision pb-3 text-emerald-400">
                    <Activity size={16} />
                    <span className="font-space-grotesk font-black uppercase tracking-wider text-xs">Technical Engineering Stack Matrix</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {skillCategories.map((cat) => (
                      <div key={cat.title} className="space-y-2 pb-1">
                        <h5 className="font-space-grotesk text-[11px] font-extrabold text-ink-primary uppercase tracking-wider border-b border-precision pb-1 flex items-center justify-between">
                          <span>{cat.title}</span>
                        </h5>
                        <div className="space-y-2">
                          {cat.skills.map((skill) => (
                            <div key={skill.name} className="space-y-0.5">
                              <div className="flex justify-between text-[11px] font-semibold text-ink-primary font-mono scale-95 origin-left">
                                <span className="truncate max-w-[120px]">{skill.name}</span>
                                {skill.meta && <span className="text-hyper-cyan text-[9px] font-semibold tracking-wide">{skill.meta}</span>}
                              </div>
                              <div className="h-1.5 w-full bg-surface-dim rounded-full border border-precision/40 overflow-hidden">
                                <div 
                                  className="h-full rounded-full bg-gradient-to-r from-teal-400 to-hyper-cyan" 
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </main>

          </div>
        )}

        {/* ALWAYS VISIBLE DETAILED HOT-RELOAD CONSOLE FOOTER */}
        <section className="mt-2 shrink-0">
          <ConsoleFooter 
            logs={logs}
            onClearLogs={clearLogs}
            onAddLog={addLog}
          />
        </section>

      </div>

      {/* FOOTER SYSTEM TAGS BUFFER */}
      <footer className="w-full bg-surface-well border-t border-precision text-center text-ink-subtle text-[10px] py-4 select-none z-10 shrink-0 select-none">
        <p className="font-mono">
          © {new Date().getFullYear()} Damilola Adeniyi Portfolio.
        </p>
      </footer>
    </div>
  );
}
