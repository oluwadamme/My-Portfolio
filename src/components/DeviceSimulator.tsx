import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { 
  Wifi, 
  Battery, 
  RefreshCw, 
  RotateCcw, 
  Send, 
  CheckCircle2, 
  ChevronRight, 
  AlertTriangle,
  Play, 
  Power, 
  Droplet, 
  Gauge, 
  ShieldCheck, 
  Wallet, 
  Zap, 
  Sparkles, 
  Coins, 
  Plus, 
  Trash2,
  Trophy,
  Mic,
  Square,
  BookOpen,
  Map,
  Award,
  Clock,
  Unlock,
  Volume2
} from 'lucide-react';

interface DeviceSimulatorProps {
  activeProject: Project;
  onAddLog: (msg: string, type?: 'info' | 'success' | 'warn' | 'error' | 'flutter') => void;
}

export default function DeviceSimulator({ activeProject, onAddLog }: DeviceSimulatorProps) {
  // Mobile UI standard state trackers
  const [phoneTime, setPhoneTime] = useState('22:23');

  // --- NEW AI PROJECT SIMULATORS STATES ---
  
  // 🎙️ Oralidle State Trackers
  const [oralState, setOralState] = useState<'setup' | 'recording' | 'scoring' | 'done'>('setup');
  const [selectedOralTopic, setSelectedOralTopic] = useState('Architectural tradeoffs of Flutter Riverpod vs BloC');
  const [oralTimer, setOralTimer] = useState(0);
  const [oralAudioLevel, setOralAudioLevel] = useState<number[]>(Array(18).fill(8));
  const recordIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 🧠 MindForge State Trackers
  const [mindGame, setMindGame] = useState<'speed' | 'story' | 'detective' | 'trivia'>('speed');
  const [mindWpm, setMindWpm] = useState(380);
  const [mindAccuracy, setMindAccuracy] = useState(98.5);
  const [mindBaseStreak, setMindBaseStreak] = useState(4);
  
  // MindForge Speed game state
  const speedPassages = [
    { text: "Flutter compiles Dart code to native arm64 instructions via the Ahead-of-Time compiler. This bypasses the JavaScript bridge entirely.", q: "How is Dart code executed in production?", ans: "AOT direct compilation to native CPU binary", options: ["AOT direct compilation to native CPU binary", "Interpreted via a secondary JS Core service"] },
    { text: "The Impeller graphics engine rendering pipelines are fully precompiled, which removes shader compilation jank entirely from startup cycles.", q: "What primary issue does Impeller resolve?", ans: "Early frame shader compilation jank", options: ["Early frame shader compilation jank", "Native platform plugin bridging latency"] }
  ];
  const [passageIndex, setPassageIndex] = useState(0);
  const [comprehensiveAnswer, setComprehensiveAnswer] = useState<string | null>(null);

  // MindForge Story game state
  const [storyTyped, setStoryTyped] = useState('');
  const storyTarget = "The memory leak was inside the customized background stream channel.";

  // MindForge Detective state
  const [cluesUnlocked, setCluesUnlocked] = useState<number[]>([1]);
  const allClues = [
    { id: 1, text: "Stack trace highlights JNI method channel failure." },
    { id: 2, text: "Garbage collector cycles run continuously every 250ms." },
    { id: 3, text: "Overlay task remains allocated even when workspace state gets destroyed." }
  ];

  // MindForge Trivia state
  const [triviaSelected, setTriviaSelected] = useState<string | null>(null);
  const [triviaClearedCount, setTriviaClearedCount] = useState(0);

  // 🗺️ Wander AI State Trackers
  const [wanderPrompt, setWanderPrompt] = useState('7 days in Tokyo, exploring hidden coffee bars and retro ramen bars on a medium budget');
  const [wanderState, setWanderState] = useState<'prompt' | 'compiling' | 'view'>('prompt');
  const [wanderBudget, setWanderBudget] = useState('Mid-tier');
  const [itineraryDays, setItineraryDays] = useState([
    { id: '1', title: 'Day 1: Shibuya Coffee & Retro Alleyways', route: 'Blue Bottle Shibuya → Nonbei Yokocho', desc: 'Sip on pour-overs, and then experience the historic neon ramen bars.', latLng: '35.6580° N, 139.7016° E' },
    { id: '2', title: 'Day 2: Akihabara Vintage Arcade Exploration', route: 'Super Potato Retro Arcade → Kanda Shrine', desc: 'Dive into retro game history and discover local visual art.', latLng: '35.6997° N, 139.7715° E' },
    { id: '3', title: 'Day 3: Shinjuku Skyline & Hidden Listening Bars', route: 'Metropolitan Gazers → Bar BenFiddich', desc: 'Climb for architectural sights, and wrap the night inside vinyl rooms.', latLng: '35.6938° N, 139.7034° E' }
  ]);
  const [selectedWanderDayIdx, setSelectedWanderDayIdx] = useState(0);

  // 🛡️ Sanctum Discipline Gate Trackers
  const [sanctumUnlocked, setSanctumUnlocked] = useState(false);
  const [scriptureChecked, setScriptureChecked] = useState(false);
  const [prayerState, setPrayerState] = useState<'idle' | 'praying' | 'done'>('idle');
  const [prayerTimer, setPrayerTimer] = useState(10);
  const [sanctumDevotionStreak, setSanctumDevotionStreak] = useState(12);

  // --- PRE-EXISTING PROJECTS STATES ---

  // Pay4me State Trackers
  const [payAmount, setPayAmount] = useState('250000');
  const [payStep, setPayStep] = useState(0); // 0=input, 1=kyc, 2=ledger, 3=success
  const [p2pPoolSize, setP2pPoolSize] = useState(14);

  // AnyFarm State Trackers
  const [farmMoisture, setFarmMoisture] = useState(42.1);
  const [isIrrigationOn, setIsIrrigationOn] = useState(false);
  const [activeSector, setActiveSector] = useState('Sector Alpha-7');

  // FxBud State Trackers
  const [collateralVal, setCollateralVal] = useState(5000);
  const [loanVal, setLoanVal] = useState(2500);
  const [isUnderwriting, setIsUnderwriting] = useState(false);
  const [loanStatus, setLoanStatus] = useState<'idle' | 'approved' | 'rejected'>('idle');

  // MojecPay State Trackers
  const [meterId, setMeterId] = useState('5419-0824-2198');
  const [tokenAmount, setTokenAmount] = useState('10000');
  const [purchasedToken, setPurchasedToken] = useState<string | null>(null);
  const [isCharging, setIsCharging] = useState(false);

  // Expense Tracker State Trackers
  const [expenseList, setExpenseList] = useState([
    { id: 1, text: 'Co-working Rent', amount: 45000 },
    { id: 2, text: 'Impeller API hosting', amount: 12000 },
    { id: 3, text: 'Serene Web Hosting', amount: 5000 }
  ]);
  const [newExpName, setNewExpName] = useState('');
  const [newExpVal, setNewExpVal] = useState('');

  // Brick Breaker Game States
  const [score, setScore] = useState(120);
  const [bricks, setBricks] = useState([
    { id: 1, active: true, color: 'bg-hyper-cyan' },
    { id: 2, active: true, color: 'bg-hyper-cyan' },
    { id: 3, active: true, color: 'bg-fuchsia-flare' },
    { id: 4, active: true, color: 'bg-fuchsia-flare' },
    { id: 5, active: true, color: 'bg-engine-green' },
    { id: 6, active: true, color: 'bg-engine-green' }
  ]);
  const [ballPos, setBallPos] = useState({ x: 50, y: 70 });
  const [ballDir, setBallDir] = useState({ x: 3, y: -4 });
  const [gamePlaying, setGamePlaying] = useState(false);

  // Synchronize Phone Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      setPhoneTime(`${hrs}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Simulator Log Trigger on Active Project Changes
  useEffect(() => {
    onAddLog(`Initializing DeviceSimulator screen: /flutter_assets/screens/${activeProject.id}_layout.xml`, 'info');
    onAddLog(`[IMPELLER GPU] Swapping virtual scene. Compiling pipeline state for "${activeProject.title}" (34ms)`, 'flutter');
    
    // Reset individual app state structures on swap
    setPayStep(0);
    setIsIrrigationOn(false);
    setLoanStatus('idle');
    setPurchasedToken(null);
    setGamePlaying(false);

    // Reset AI states
    setOralState('setup');
    setOralTimer(0);
    if (recordIntervalRef.current) clearInterval(recordIntervalRef.current);
    
    // Mindforge reset
    setMindGame('speed');
    setStoryTyped('');
    setComprehensiveAnswer(null);
    setTriviaSelected(null);
    setCluesUnlocked([1]);

    // Wander reset
    setWanderState('prompt');

    // Sanctum reset
    setSanctumUnlocked(false);
    setScriptureChecked(false);
    setPrayerState('idle');
    setPrayerTimer(10);
  }, [activeProject.id]);

  // Oralidle Ticker & Waveform effect
  useEffect(() => {
    if (oralState === 'recording') {
      recordIntervalRef.current = setInterval(() => {
        setOralTimer((prev) => prev + 1);
        // Animate randomized wave frequencies
        setOralAudioLevel(Array(18).fill(0).map(() => Math.floor(Math.random() * 24 + 4)));
      }, 100);
    } else {
      if (recordIntervalRef.current) {
        clearInterval(recordIntervalRef.current);
      }
    }
    return () => {
      if (recordIntervalRef.current) clearInterval(recordIntervalRef.current);
    };
  }, [oralState]);

  // Sanctum prayer timer countdown
  useEffect(() => {
    if (prayerState === 'praying') {
      const timer = setInterval(() => {
        setPrayerTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setPrayerState('done');
            onAddLog('[Sanctum Native Bridge] Meditative continuous prayer cycles validated successfully!', 'success');
            return 10;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [prayerState]);

  // Brick Breaker Physics Loop
  useEffect(() => {
    if (!gamePlaying) return;
    const interval = setInterval(() => {
      setBallPos((prev) => {
        let nx = prev.x + ballDir.x;
        let ny = prev.y + ballDir.y;
        let ndx = ballDir.x;
        let ndy = ballDir.y;

        // Bounce left-right walls
        if (nx <= 5 || nx >= 95) {
          ndx = -ndx;
          nx = nx <= 5 ? 5 : 95;
          onAddLog(`[FLAME GAME] Ball bounce border wall at (${nx.toFixed(1)}, ${ny.toFixed(1)})`, 'flutter');
        }
        // Bounce ceiling
        if (ny <= 5) {
          ndy = -ndy;
          ny = 5;
          onAddLog(`[FLAME GAME] Ball reflection ceiling bounce!`, 'flutter');
        }
        // Hit floor (reset or reverse)
        if (ny >= 92) {
          ndy = -ndy;
          ny = 92;
          onAddLog(`[FLAME GAME] Elastic collision backboard save (120 FPS)`, 'success');
        }

        setBallDir({ x: ndx, y: ndy });
        return { x: nx, y: ny };
      });
    }, 100);

    return () => clearInterval(interval);
  }, [gamePlaying, ballDir]);

  // --- REWORKED ORALIDLE ACTIONS ---
  const launchOralRecording = () => {
    setOralState('recording');
    setOralTimer(0);
    onAddLog(`[Oralidle AI] Started recording vocal buffer cache on topic: "${selectedOralTopic}"`, 'info');
  };

  const haltOralRecording = () => {
    setOralState('scoring');
    onAddLog(`[Oralidle STT Async] Speech buffer completed. Total audio samples: ${oralTimer} deciseconds. Compiling with Gemini scoring model...`, 'info');
    
    setTimeout(() => {
      setOralState('done');
      onAddLog(`[Oralidle Feedback Matrix] Response analyzed. Overall accuracy 88%. Filler word count: 9. Recommendations dispatched.`, 'success');
    }, 1800);
  };

  // --- REWORKED MIND-FORGE COMPREHENSION ACTIONS ---
  const checkSpeedComprehension = (choice: string) => {
    setComprehensiveAnswer(choice);
    const step = speedPassages[passageIndex];
    if (choice === step.ans) {
      onAddLog(`[MindForge ML] Comprehension verified on passage #${passageIndex + 1}! Accuracy 100% (+150 Words)`, 'success');
      setMindWpm((prev) => prev + 15);
      setMindAccuracy((prev) => Math.min(100, prev + 0.5));
    } else {
      onAddLog(`[MindForge ML] Incorrect quiz selection on: "${choice}"`, 'error');
      setMindAccuracy((prev) => Math.max(70, prev - 4));
    }
  };

  const advanceSpeedPassage = () => {
    setPassageIndex((prev) => (prev + 1) % speedPassages.length);
    setComprehensiveAnswer(null);
  };

  const handleTriviaAnswer = (choice: string) => {
    setTriviaSelected(choice);
    if (choice === "UI & Build Threads") {
      setTriviaClearedCount(c => c + 1);
      setMindBaseStreak(s => s + 1);
      onAddLog(`[MindForge Trivia] Correct answer selected: "${choice}"! Match complete.`, 'success');
    } else {
      setMindBaseStreak(0);
      onAddLog(`[MindForge Trivia] Incorrect trivia option selected. Combo broken.`, 'error');
    }
  };

  // --- REWORKED WANDER AI ACTIONS ---
  const triggerWanderCompile = () => {
    setWanderState('compiling');
    onAddLog(`[Wander AI Agent] Submitting prompt request to Gemini: "${wanderPrompt}"`, 'info');
    
    setTimeout(() => {
      setWanderState('view');
      onAddLog(`[Wander AI API] Gemini Itinerary compiled. Identified 3 core sightseeing vectors with coordinates list. Rendering map routing.`, 'success');
    }, 2000);
  };

  const moveDayUp = (idx: number) => {
    if (idx === 0) return;
    const arr = [...itineraryDays];
    const temp = arr[idx];
    arr[idx] = arr[idx - 1];
    arr[idx - 1] = temp;
    setItineraryDays(arr);
    setSelectedWanderDayIdx(idx - 1);
    onAddLog(`[Wander AI] User re-ordered itinerary: Swapped Day ${idx + 1} with Day ${idx}. Recomputing distance matrix...`, 'flutter');
  };

  const moveDayDown = (idx: number) => {
    if (idx === itineraryDays.length - 1) return;
    const arr = [...itineraryDays];
    const temp = arr[idx];
    arr[idx] = arr[idx + 1];
    arr[idx + 1] = temp;
    setItineraryDays(arr);
    setSelectedWanderDayIdx(idx + 1);
    onAddLog(`[Wander AI] User re-ordered itinerary: Swapped Day ${idx + 1} with Day ${idx + 2}. Recomputing distance matrix...`, 'flutter');
  };

  // --- REWORKED SANCTUM SYSTEM ACTIONS ---
  const completeDailyDevotions = () => {
    if (!scriptureChecked) {
      onAddLog('[Sanctum Gate] Hardware error: Must scroll and check daily Scripture readings before unlock.', 'error');
      return;
    }
    if (prayerState !== 'done') {
      onAddLog('[Sanctum Gate] Hardware error: Daily prayer meditation requirements unsatisfied.', 'error');
      return;
    }
    setSanctumUnlocked(true);
    setSanctumDevotionStreak(s => s + 1);
    onAddLog('[Sanctum native Client] Discipline authorization SUCCESS! Screen-time limit unlocked for 2 hours. Devotions Streak: 13 Days!', 'success');
  };

  // --- FINTECH & CORE SIMULATION TRIGGERS ---
  const runPay4meTransfer = () => {
    setPayStep(1);
    onAddLog(`[Pay4me API] Initializing checkout payload with NGN ${payAmount} (approx USD ${(Number(payAmount) * 0.00069).toFixed(2)})`, 'info');
    
    setTimeout(() => {
      setPayStep(2);
      onAddLog('[Pay4me KYC] User checkout security validation passed.', 'success');
    }, 1000);

    setTimeout(() => {
      setPayStep(3);
      onAddLog(`[Pay4me LEDGER] Settled in 142ms. Generated ledger UUID: JAPA-${Math.floor(Math.random() * 89999 + 10000)}`, 'success');
    }, 2200);
  };

  const triggerAnyFarmIrrigation = () => {
    setIsIrrigationOn(true);
    onAddLog(`[AnyFarm IoT] Dispatched valve trigger signal: HIGH. Sector target: "${activeSector}"`, 'info');
    
    let curM = farmMoisture;
    const timer = setInterval(() => {
      curM = parseFloat((curM + 4.2).toFixed(1));
      if (curM >= 67.3) {
        curM = 67.3;
        setIsIrrigationOn(false);
        clearInterval(timer);
        onAddLog('[AnyFarm Sensor] Irrigation limit met. Target soil humidity (67.3%) reached successfully.', 'success');
      }
      setFarmMoisture(curM);
    }, 250);
  };

  const runFxBudUnderwrite = () => {
    setIsUnderwriting(true);
    setLoanStatus('idle');
    onAddLog(`[FxBud Score Engine] Evaluating mortgage factors. Ratio limit benchmark: 1.50x`, 'info');

    setTimeout(() => {
      setIsUnderwriting(false);
      const testRatio = collateralVal / loanVal;
      if (testRatio >= 1.5) {
        setLoanStatus('approved');
        onAddLog(`[FxBud AI] Score Approved. Risk score: ${testRatio.toFixed(2)}x. Funds generated.`, 'success');
      } else {
        setLoanStatus('rejected');
        onAddLog(`[FxBud AI] Score Rejected. Risk multiplier: ${testRatio.toFixed(2)}x lies below safety criteria limit.`, 'error');
      }
    }, 1200);
  };

  const runMojecPurchase = () => {
    setIsCharging(true);
    setPurchasedToken(null);
    onAddLog(`[MojecPay GraphQL] Dispatched purchase mutation...`, 'info');

    setTimeout(() => {
      setIsCharging(false);
      const tk = `*110*4299-${Math.floor(Math.random() * 8999 + 1000)}-${Math.floor(Math.random() * 8999 + 1000)}#`;
      setPurchasedToken(tk);
      onAddLog(`[MojecPay] Token issued: ${tk}`, 'success');
    }, 1100);
  };

  const calculatedUsd = (Number(payAmount) * 0.00069).toFixed(2);

  return (
    <div className="flex flex-col items-center">
      {/* Smart Device Chassis */}
      <div className="w-[325px] h-[645px] bg-[#0c0e14] rounded-[42px] border-4 border-[#1f2937] shadow-[0px_0px_45px_rgba(0,229,255,0.18)] overflow-hidden relative flex flex-col">
        {/* Device metallic highlight */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 select-none z-30" />
        
        {/* Speaker notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-40 flex items-center justify-center">
          <div className="w-12 h-1 bg-neutral-800 rounded-full" />
          <div className="w-2.5 h-2.5 bg-neutral-900 rounded-full border border-neutral-700 ml-4 flex items-center justify-center">
            <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
          </div>
        </div>

        {/* Home gesture indicator bottom bar */}
        <div className="absolute bottom-1 bg-white/60 w-32 h-1 rounded-full left-1/2 -translate-x-1/2 z-40" />

        {/* Top Status Header */}
        <div className="bg-[#030712] pt-10 pb-2 px-6 flex items-center justify-between text-[11px] font-mono select-none text-neutral-400 shrink-0">
          <span>{phoneTime}</span>
          <div className="flex items-center space-x-2">
            <Wifi size={12} className="text-[#00daf3]" />
            <span className="text-[9px] text-[#00daf3]/80">LTE</span>
            <Battery size={14} className="text-emerald-400" />
          </div>
        </div>

        {/* DEVICE SCREEN PORT */}
        <div className="flex-1 bg-neutral-950 overflow-y-auto overflow-x-hidden p-4 relative select-none scrollbar-none flex flex-col justify-between">
          
          {/* ========================================================= */}
          {/* 🎙️ ORALIDLE SIMULATOR */}
          {activeProject.id === 'oralidle' && (
            <div className="flex-1 flex flex-col h-full justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="p-1 rounded bg-gradient-to-r from-teal-500 to-[#00daf3] text-black">
                    <Mic size={15} />
                  </span>
                  <h4 className="font-space-grotesk text-sm font-semibold text-white">Oralidle Coach</h4>
                </div>

                {oralState === 'setup' && (
                  <div className="space-y-3">
                    <div className="bg-neutral-900 border border-neutral-800 rounded p-2 text-xs">
                      <span className="text-[10px] text-neutral-500 block uppercase font-mono">Present Speaking Topic:</span>
                      <select 
                        value={selectedOralTopic} 
                        onChange={(e) => setSelectedOralTopic(e.target.value)} 
                        className="bg-transparent border-none outline-none font-semibold text-[#00daf3] w-full mt-1.5"
                      >
                        <option value="Architectural tradeoffs of Flutter Riverpod vs BloC">Riverpod vs BloC (Flutter)</option>
                        <option value="Explaining Android Overlay security mechanisms">Android Overlay Security</option>
                        <option value="Dynamic route calculations via Graph nodes">Dynamic Routing Algorithms</option>
                      </select>
                    </div>

                    <div className="bg-neutral-900 border border-neutral-800 rounded p-2.5 text-[11px] text-neutral-400">
                      <span className="block text-white font-semibold font-space-grotesk mb-1">Simulator Matrix Rules:</span>
                      Speak into the coach. Dynamic AI will calculate lexical parameters such as coherence, fluency, syntax, confidence and score them instantly.
                    </div>
                  </div>
                )}

                {oralState === 'recording' && (
                  <div className="flex flex-col items-center justify-center text-center py-8 space-y-4">
                    <div className="h-14 flex items-center justify-center space-x-1.5 px-4 w-full">
                      {oralAudioLevel.map((lvl, index) => (
                        <div 
                          key={index} 
                          className="w-1.5 bg-gradient-to-t from-teal-400 to-[#00daf3] rounded transition-all duration-100" 
                          style={{ height: `${lvl}px` }}
                        />
                      ))}
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-[28px] font-mono font-black text-white px-3 tracking-widest block animate-pulse">
                        00:{String(Math.floor(oralTimer / 10)).padStart(2, '0')}:{String(oralTimer % 10).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] text-teal-400 font-mono uppercase tracking-widest block">RECORDING ACTIVE</span>
                    </div>
                  </div>
                )}

                {oralState === 'scoring' && (
                  <div className="flex flex-col items-center justify-center text-center py-10 space-y-3.5">
                    <RefreshCw className="text-[#00daf3] animate-spin" size={32} />
                    <div>
                      <h5 className="text-sm font-bold text-white font-space-grotesk">Analyzing Lexical Gradients</h5>
                      <span className="text-[9px] text-neutral-500 font-mono uppercase mt-1 block">STT parsing → LLM Score matrix running...</span>
                    </div>
                  </div>
                )}

                {oralState === 'done' && (
                  <div className="space-y-3">
                    {/* Score Matrix Grid */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 space-y-2.5">
                      <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5">
                        <span className="font-space-grotesk font-black text-xs text-white uppercase tracking-wider">AI Fluency Matrix</span>
                        <span className="text-[10px] bg-emerald-990/40 border border-emerald-400/20 text-emerald-400 py-0.5 px-2 rounded-full font-mono font-bold">Passed</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                        <div className="bg-neutral-950 p-1.5 rounded border border-neutral-800">
                          <span className="text-neutral-500 block text-[8px] uppercase">Fluency</span>
                          <span className="font-bold text-[#00daf3] text-xs">88%</span>
                        </div>
                        <div className="bg-neutral-950 p-1.5 rounded border border-neutral-800">
                          <span className="text-neutral-500 block text-[8px] uppercase">Coherence</span>
                          <span className="font-bold text-teal-300 text-xs">84%</span>
                        </div>
                        <div className="bg-neutral-950 p-1.5 rounded border border-neutral-800">
                          <span className="text-neutral-500 block text-[8px] uppercase">Vocabulary</span>
                          <span className="font-bold text-fuchsia-400 text-xs">92%</span>
                        </div>
                        <div className="bg-neutral-950 p-1.5 rounded border border-neutral-800">
                          <span className="text-neutral-500 block text-[8px] uppercase">Confidence</span>
                          <span className="font-bold text-yellow-400 text-xs">90%</span>
                        </div>
                      </div>

                      {/* Filler bars */}
                      <div className="space-y-1 bg-neutral-950 p-2 rounded border border-neutral-800 text-[10px] font-mono text-neutral-400">
                        <div className="flex justify-between items-center mb-1 text-[9px] text-neutral-500">
                          <span>DETECTED FILLER WORDS:</span>
                          <span className="text-rose-400">9 total</span>
                        </div>
                        <div className="flex justify-between">
                          <span>"Like" frequency:</span>
                          <span className="text-white">2x</span>
                        </div>
                        <div className="flex justify-between">
                          <span>"Uh / Um" frequency:</span>
                          <span className="text-rose-400">4x</span>
                        </div>
                        <div className="flex justify-between">
                          <span>"Actually / So" frequency:</span>
                          <span className="text-white">3x</span>
                        </div>
                      </div>

                      <div className="bg-neutral-950 p-2 rounded text-[10px] border border-neutral-800 text-neutral-300 space-y-1">
                        <span className="block text-yellow-400 font-bold font-space-grotesk text-[9px] uppercase">Coaching Directives:</span>
                        <p className="italic">1. Minimize the "Uh" hesitation gaps when bridging conceptual Flutter widgets.</p>
                        <p className="italic">2. Deepen structural vocab reference patterns during state analysis.</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => setOralState('setup')}
                      className="w-full py-1.5 text-[10px] bg-neutral-900 border border-neutral-800 font-mono rounded text-neutral-400 hover:text-white"
                    >
                      ← Start Alternate Topic
                    </button>
                  </div>
                )}
              </div>

              {oralState === 'setup' && (
                <button
                  onClick={launchOralRecording}
                  className="w-full py-2.5 rounded bg-gradient-to-r from-teal-400 to-[#00daf3] text-black font-space-grotesk text-xs tracking-wider uppercase font-black hover:brightness-110 flex items-center justify-center space-x-1 shadow-lg cursor-pointer"
                >
                  <Play size={13} className="fill-black" />
                  <span>Begin Challenge</span>
                </button>
              )}

              {oralState === 'recording' && (
                <button
                  onClick={haltOralRecording}
                  className="w-full py-2.5 rounded bg-rose-600 text-white font-space-grotesk text-xs tracking-wider uppercase font-black hover:bg-rose-500 flex items-center justify-center space-x-1 shadow-lg cursor-pointer"
                >
                  <Square size={13} className="fill-white" />
                  <span>Halt & Analysis</span>
                </button>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* 🧠 MINDFORGE COGNITIVE SUITE */}
          {activeProject.id === 'mindforge' && (
            <div className="flex-1 flex flex-col h-full justify-between font-geist">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <Trophy size={14} className="text-[#00daf3]" />
                    <span className="font-space-grotesk text-xs font-semibold text-white">MindForge Suite</span>
                  </div>
                  <span className="text-[9px] font-mono bg-neutral-900 px-2 py-0.5 rounded text-neutral-400">
                    Combo: {mindBaseStreak}🔥
                  </span>
                </div>

                {/* Sub-tabs selection */}
                <div className="grid grid-cols-4 gap-1 mb-3">
                  {(['speed', 'story', 'detective', 'trivia'] as const).map((g) => (
                    <button
                      key={g}
                      onClick={() => {
                        setMindGame(g);
                        onAddLog(`[MindForge Engine] Initializing workspace game cycle: ${g}`, 'info');
                      }}
                      className={`text-[9.5px] py-1 font-mono rounded border cursor-pointer capitalize transition-all ${mindGame === g ? 'bg-[#00daf3]/15 text-[#00daf3] border-[#00daf3]' : 'bg-neutral-900/40 border-neutral-800 text-neutral-500'}`}
                    >
                      {g}
                    </button>
                  ))}
                </div>

                {/* 1. Speed reading passage game */}
                {mindGame === 'speed' && (
                  <div className="space-y-3">
                    <div className="bg-neutral-900 border border-neutral-800 rounded p-2 text-[10.5px] font-serif leading-relaxed text-neutral-300">
                      "{speedPassages[passageIndex].text}"
                    </div>

                    <div className="bg-neutral-900/60 p-2 border border-neutral-800 rounded space-y-2">
                      <span className="text-[9px] text-neutral-500 block uppercase font-mono">Comprehension Verification:</span>
                      <p className="text-[11px] text-white font-semibold">{speedPassages[passageIndex].q}</p>
                      
                      <div className="space-y-1.5 pt-1">
                        {speedPassages[passageIndex].options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => checkSpeedComprehension(opt)}
                            disabled={comprehensiveAnswer !== null}
                            className={`w-full py-1.5 px-2 text-left text-[10px] rounded border transition-all cursor-pointer ${comprehensiveAnswer === opt ? (opt === speedPassages[passageIndex].ans ? 'bg-emerald-950 text-emerald-300 border-emerald-500' : 'bg-rose-950 text-rose-300 border-rose-500') : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>

                      {comprehensiveAnswer && (
                        <button
                          onClick={advanceSpeedPassage}
                          className="text-[9.5px] text-hyper-cyan block ml-auto underline cursor-pointer hover:text-white"
                        >
                          Next Passage →
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* 2. Story typing branching */}
                {mindGame === 'story' && (
                  <div className="space-y-2.5">
                    <div className="bg-neutral-900/60 p-2.5 border border-neutral-800 rounded space-y-1.5 text-[10px] font-mono">
                      <span className="text-neutral-500 block uppercase text-[8px]">Type below sentence:</span>
                      <div className="text-neutral-400 whitespace-pre-wrap">
                        {storyTarget.split('').map((char, index) => {
                          const typedChar = storyTyped[index];
                          let color = 'text-neutral-500';
                          if (typedChar !== undefined) {
                            color = typedChar === char ? 'text-emerald-400' : 'bg-rose-600/30 text-rose-300';
                          }
                          return <span key={index} className={color}>{char}</span>;
                        })}
                      </div>
                    </div>

                    <input 
                      type="text"
                      placeholder="Begin active keys..."
                      value={storyTyped}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val.length <= storyTarget.length) {
                          setStoryTyped(val);
                          // Calculate typos on key strokes
                          let errorsCount = 0;
                          for(let i=0; i<val.length; i++) {
                            if (val[i] !== storyTarget[i]) errorsCount++;
                          }
                          const acc = val.length === 0 ? 100 : ((val.length - errorsCount) / val.length) * 100;
                          setMindAccuracy(parseFloat(acc.toFixed(1)));
                          
                          if (val === storyTarget) {
                            onAddLog('[MindForge Story] Story code snippet input accuracy verified. Combo streak maintained!', 'success');
                            onAddLog('[HOT RELOAD] story_node_cleared. WPM: 412', 'flutter');
                            setMindWpm(412);
                            setMindBaseStreak(s => s + 1);
                          }
                        }
                      }}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-2 text-[11px] font-mono text-[#00daf3] outline-none"
                    />

                    {storyTyped === storyTarget && (
                      <button
                        onClick={() => setStoryTyped('')}
                        className="text-[9px] text-[#00daf3] block hover:underline ml-auto"
                      >
                        Reset Typing Arena
                      </button>
                    )}
                  </div>
                )}

                {/* 3. Detective clues progressive unlocking */}
                {mindGame === 'detective' && (
                  <div className="space-y-3.5">
                    <div className="bg-neutral-900 border border-neutral-800 rounded p-2.5 space-y-2">
                      <span className="text-[9px] text-teal-400 font-mono uppercase font-bold tracking-widest block">CASE EXAMINING: WORKSPACE LEAK</span>
                      <p className="text-[11.5px] text-neutral-300 font-space-grotesk italic">Find the source allocated loop bypassing gc sweeps:</p>
                      
                      <div className="space-y-1.5 pt-1.5">
                        {allClues.map((clue) => {
                          const isUnlocked = cluesUnlocked.includes(clue.id);
                          return (
                            <div key={clue.id} className="bg-neutral-950 p-2 rounded border border-neutral-800 text-[10.5px]">
                              {isUnlocked ? (
                                <div className="text-neutral-300 font-mono">
                                  <span className="text-teal-400 font-bold mr-1">✓ Clue #{clue.id}:</span>{clue.text}
                                </div>
                              ) : (
                                <div className="text-neutral-600 flex items-center justify-between font-mono italic">
                                  <span>[Clue #{clue.id} Locked]</span>
                                  <button
                                    onClick={() => {
                                      setCluesUnlocked(prev => [...prev, clue.id]);
                                      setMindBaseStreak(s => s + 1);
                                      onAddLog(`[MindForge Detective] Core puzzle trace clue #${clue.id} decrypted.`, 'info');
                                    }}
                                    className="text-[9px] bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded cursor-pointer"
                                  >
                                    Decrypt
                                  </button>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Trivia questions */}
                {mindGame === 'trivia' && (
                  <div className="space-y-3 bg-[#0c0e14]/50 border border-neutral-800 rounded p-2.5">
                    <span className="text-[8.5px] uppercase text-yellow-400 font-mono tracking-widest block">Live Stream Core Questions</span>
                    <p className="text-[11.5px] text-white font-semibold font-sans">Where does Flutter execute custom user layouts compile threads?</p>
                    
                    <div className="space-y-1.5">
                      {["UI & Build Threads", "Platform Frame Sync", "Platform Native Thread"].map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleTriviaAnswer(opt)}
                          disabled={triviaSelected !== null}
                          className={`w-full py-2 px-2.5 text-left text-[10px] rounded border transition-all cursor-pointer font-mono ${triviaSelected === opt ? (opt === "UI & Build Threads" ? 'bg-emerald-950 text-emerald-300 border-emerald-500' : 'bg-rose-950 text-rose-300 border-rose-500') : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    {triviaSelected && (
                      <button
                        onClick={() => {
                          setTriviaSelected(null);
                        }}
                        className="text-[9px] text-[#00daf3] block ml-auto cursor-pointer"
                      >
                        Reset Trivia question
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Cognitive Score Footer panel */}
              <div className="bg-neutral-900/60 rounded p-2 text-[10.5px] font-mono text-neutral-400 border border-neutral-800">
                <div className="flex justify-between items-center text-[9px] text-neutral-500 border-b border-neutral-800 pb-1 mb-1">
                  <span>COGNITIVE REPORT STATUS</span>
                  <span className="text-emerald-400">Recording</span>
                </div>
                <div className="flex justify-between">
                  <span>Input Typing WPM:</span>
                  <span className="text-white font-bold">{mindWpm} WPM</span>
                </div>
                <div className="flex justify-between">
                  <span>Tracking Accuracy:</span>
                  <span className="text-[#00daf3] font-bold">{mindAccuracy}%</span>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 🗺️ WANDER AI SIMULATOR */}
          {activeProject.id === 'wanderai' && (
            <div className="flex-1 flex flex-col h-full justify-between font-geist">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="p-1 rounded bg-gradient-to-r from-amber-500 to-orange-500 text-black">
                    <Map size={15} />
                  </span>
                  <h4 className="font-space-grotesk text-sm font-semibold text-white">Wander AI Planner</h4>
                </div>

                {wanderState === 'prompt' && (
                  <div className="space-y-3.5">
                    <div className="bg-neutral-900 border border-neutral-800 rounded p-2">
                      <label className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono block mb-1">Whimsical Dream Prompt</label>
                      <textarea
                        value={wanderPrompt}
                        onChange={(e) => setWanderPrompt(e.target.value)}
                        className="w-full bg-transparent border-none outline-none text-xs text-white font-sans h-16 min-h-[50px] resize-none select-text"
                      />
                    </div>

                    <div className="bg-neutral-900 p-2 rounded border border-neutral-800 font-mono text-[10px] text-neutral-400">
                      <span className="block text-white font-semibold mb-1 uppercase text-[8px] tracking-wide text-amber-400">Budget Limit Factor</span>
                      <div className="flex space-x-2">
                        {['Backpacker', 'Mid-tier', 'Luxurious'].map((t) => (
                          <button
                            key={t}
                            onClick={() => {
                              setWanderBudget(t);
                              onAddLog(`[Wander AI] Swapped target budget model to: "${t}"`, 'info');
                            }}
                            className={`px-2 py-1 rounded border text-[9px] cursor-pointer ${wanderBudget === t ? 'bg-amber-500/20 text-yellow-300 border-amber-400' : 'bg-neutral-950 border-neutral-800 text-neutral-500'}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {wanderState === 'compiling' && (
                  <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                    <RefreshCw className="text-amber-400 animate-spin" size={32} />
                    <div>
                      <h5 className="text-sm font-bold text-white font-space-grotesk">Executing Spatial Planners</h5>
                      <span className="text-[9px] text-neutral-500 font-mono mt-1 block">Mapping coffee vectors & route arrays...</span>
                    </div>
                  </div>
                )}

                {wanderState === 'view' && (
                  <div className="space-y-2.5">
                    {/* Compact Day outline view */}
                    <div className="flex justify-between items-center text-[10px] text-neutral-500 font-mono bg-neutral-900 border border-neutral-800 p-2 rounded-lg">
                      <span>Compiled Itinerary Nodes:</span>
                      <span className="text-amber-400 font-bold font-mono">3 Days Compiled</span>
                    </div>

                    <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                      {itineraryDays.map((day, currIdx) => {
                        const isSelected = selectedWanderDayIdx === currIdx;
                        return (
                          <div 
                            key={day.id} 
                            onClick={() => setSelectedWanderDayIdx(currIdx)}
                            className={`p-2.5 rounded-lg border transition-all text-left ${isSelected ? 'bg-neutral-900/80 border-amber-400' : 'bg-neutral-900/20 border-neutral-800/40 opacity-80'}`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-space-grotesk text-xs font-bold text-white">{day.title}</span>
                              <div className="flex space-x-1.5" onClick={(e) => e.stopPropagation()}>
                                <button 
                                  onClick={() => moveDayUp(currIdx)} 
                                  disabled={currIdx === 0}
                                  className={`p-0.5 rounded border border-neutral-800 bg-neutral-950 ${currIdx === 0 ? 'text-neutral-700' : 'text-neutral-400'}`}
                                >
                                  ▲
                                </button>
                                <button 
                                  onClick={() => moveDayDown(currIdx)} 
                                  disabled={currIdx === itineraryDays.length - 1}
                                  className={`p-0.5 rounded border border-neutral-800 bg-neutral-950 ${currIdx === itineraryDays.length - 1 ? 'text-neutral-700' : 'text-neutral-400'}`}
                                >
                                  ▼
                                </button>
                              </div>
                            </div>
                            
                            {isSelected && (
                              <div className="mt-2 text-[10.5px] space-y-1 text-neutral-400 font-mono animate-fade-in">
                                <div><span className="text-[#00daf3]">Stop Route:</span> {day.route}</div>
                                <div className="text-[10px] leading-relaxed italic mt-0.5 font-sans">"{day.desc}"</div>
                                <div className="text-[9px] text-neutral-500 font-bold border-t border-neutral-800/50 pt-1 mt-1 flex justify-between">
                                  <span>COORDINATES REFERENCE:</span>
                                  <span>{day.latLng}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => setWanderState('prompt')}
                      className="text-[10px] text-amber-400 text-left hover:underline block mr-auto capitalize"
                    >
                      ← Revamp Search
                    </button>
                  </div>
                )}
              </div>

              {wanderState === 'prompt' && (
                <button
                  onClick={triggerWanderCompile}
                  className="w-full py-2.5 rounded bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 font-space-grotesk text-xs tracking-wider uppercase font-black hover:brightness-110 flex items-center justify-center space-x-1 shadow-lg cursor-pointer"
                >
                  <Sparkles size={13} className="fill-neutral-950" />
                  <span>Autocategorize Travel</span>
                </button>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* 🛡️ SANCTUM DISCIPLINE GATE */}
          {activeProject.id === 'sanctum' && (
            <div className="flex-1 flex flex-col h-full justify-between font-geist">
              <div>
                <div className="flex items-center space-x-1.5 mb-2.5 border-b border-rose-500/20 pb-2 text-rose-500">
                  <ShieldCheck size={16} />
                  <span className="font-space-grotesk font-black text-xs uppercase tracking-widest">Sanctum Lock Screen</span>
                </div>

                {!sanctumUnlocked ? (
                  <div className="space-y-3">
                    <div className="bg-rose-950/20 border border-rose-500/30 rounded p-2.5 text-center">
                      <span className="text-[10px] font-bold text-rose-400 block uppercase font-mono tracking-wider animate-pulse">Device Interdict Active</span>
                      <p className="text-[11px] text-neutral-400 leading-normal font-sans mt-1">
                        Clear assignments below to override hardware overlays and restore default device screen-time access.
                      </p>
                    </div>

                    {/* Step 1: Daily readings check */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded p-3 text-[11px]">
                      <div className="flex items-start space-x-2">
                        <input 
                          type="checkbox"
                          checked={scriptureChecked}
                          onChange={(e) => {
                            setScriptureChecked(e.target.checked);
                            onAddLog(`[Sanctum UI] Verified daily Scripture checklist: ${e.target.checked}`, 'info');
                          }}
                          className="mt-0.5 accent-rose-500"
                        />
                        <div className="space-y-1.5">
                          <span className="font-bold text-white uppercase block text-[9.5px]">Step 1: Focus Scripture Readings</span>
                          <div className="bg-neutral-950 p-2 rounded border border-neutral-800 leading-relaxed font-serif text-neutral-300 select-text">
                            "Do not conform to the pattern of this world, but be transformed by the renewing of your mind." <span className="block italic text-rose-400 text-[10px] mt-1 text-right font-sans">— Romans 12:2</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2: Prayer trigger */}
                    <div className="bg-neutral-900 border border-neutral-800 rounded p-2.5 text-[11px] space-y-2">
                      <span className="font-bold text-white uppercase block text-[9.5px]">Step 2: Continuous Quiet Devotion</span>
                      
                      {prayerState === 'idle' && (
                        <button
                          onClick={() => {
                            setPrayerState('praying');
                            onAddLog('[Sanctum JNI] Drawing meditative focus overlay loop. Screen bounds locked.', 'info');
                          }}
                          className="w-full py-1.5 bg-neutral-950 border border-rose-500/30 text-rose-300 text-[10.5px] rounded font-mono hover:bg-neutral-900 cursor-pointer"
                        >
                          Initiate 10s Active Breathing
                        </button>
                      )}

                      {prayerState === 'praying' && (
                        <div className="flex flex-col items-center justify-center p-2 bg-neutral-950 rounded border border-rose-500/20 text-center space-y-1">
                          <span className="text-xl font-mono font-black text-rose-400 animate-ping">
                            {prayerTimer}s
                          </span>
                          <span className="text-[9px] text-neutral-500 uppercase font-mono">Retain focus on Bible passages</span>
                        </div>
                      )}

                      {prayerState === 'done' && (
                        <div className="bg-emerald-950/20 text-emerald-400 p-2 rounded border border-emerald-500/30 font-mono text-[10px] text-center">
                          ✓ Meditative breathing threshold reached
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 space-y-4 bg-emerald-950/10 border border-emerald-500/20 rounded-lg p-3 text-center">
                    <Unlock className="text-emerald-400 animate-bounce" size={42} />
                    <div className="space-y-1">
                      <h5 className="font-space-grotesk text-sm font-black text-emerald-400 uppercase tracking-widest">DISCIPLINE GATE COMPLETED</h5>
                      <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                        Daily thresholds honored. Screen access limits cleared successfully.
                      </p>
                    </div>

                    <div className="w-full bg-neutral-900 p-2 rounded text-left font-mono text-[10px] space-y-0.5 text-neutral-400">
                      <div className="flex justify-between">
                        <span>Unlocked time allowance:</span>
                        <span className="text-emerald-400 font-bold">2 Hours Granted</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Devotional Streak combo:</span>
                        <span className="text-yellow-400 font-bold">{sanctumDevotionStreak} Days 🔥</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setSanctumUnlocked(false)}
                      className="text-[10px] text-rose-400 uppercase tracking-widest cursor-pointer hover:underline mt-2 inline-block font-bold"
                    >
                      ← Reforce Lock Screen Testing
                    </button>
                  </div>
                )}
              </div>

              {!sanctumUnlocked && (
                <button
                  onClick={completeDailyDevotions}
                  className="w-full py-2.5 rounded bg-rose-600 text-white font-space-grotesk text-xs tracking-wider uppercase font-black hover:bg-rose-500 flex items-center justify-center space-x-1 shadow-lg cursor-pointer"
                >
                  <Unlock size={11} className="fill-white" />
                  <span>Validate Devotional Gates</span>
                </button>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* PAY4ME SIMULATOR CONTAINER */}
          {activeProject.id === 'pay4me' && (
            <div className="flex-1 flex flex-col justify-between h-full font-geist">
              <div>
                {/* Header title */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="p-1 rounded bg-[#00daf3]/10 text-[#00daf3]">
                    <Send size={15} />
                  </span>
                  <h4 className="font-space-grotesk text-sm font-semibold text-white">Pay4me Global</h4>
                </div>

                {payStep === 0 && (
                  <div className="space-y-3">
                    <div className="bg-neutral-900 rounded border border-neutral-800 p-2">
                      <label className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold">Transfer Amount (NGN)</label>
                      <input 
                        type="number"
                        value={payAmount}
                        onChange={(e) => setPayAmount(e.target.value)}
                        className="w-full bg-transparent outline-none border-none text-xl font-mono text-white font-bold mt-1"
                      />
                    </div>

                    <div className="bg-neutral-900 rounded border border-neutral-800 p-2">
                      <div className="flex items-center justify-between text-[10px] text-neutral-500 uppercase tracking-wider font-bold">
                        <span>Receiving Value (USD)</span>
                        <span className="text-[#00daf3] lowercase font-mono">1 NGN = 0.00069 USD</span>
                      </div>
                      <div className="text-xl font-mono text-[#00e389] font-bold mt-1">
                        ${calculatedUsd}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-400">
                      <div className="bg-neutral-900/40 p-1.5 rounded border border-neutral-800">
                        <span className="block text-[8px] uppercase font-bold text-neutral-500">Rate Fee</span>
                        <span className="font-semibold text-white">1.5% SDK Fee</span>
                      </div>
                      <div className="bg-neutral-900/40 p-1.5 rounded border border-neutral-800">
                        <span className="block text-[8px] uppercase font-bold text-neutral-500">Transfer Duration</span>
                        <span className="font-semibold text-[#00e389] animate-pulse">~142ms Engine Latency</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-neutral-500 text-center justify-center p-1 font-mono italic">
                      Damilola's checkout workflow reduces latency by 40%
                    </div>
                  </div>
                )}

                {payStep === 1 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <RefreshCw className="text-[#00daf3] animate-spin" size={32} />
                    <div>
                      <h5 className="text-sm font-semibold text-white font-space-grotesk">Securing Session</h5>
                      <p className="text-xs text-neutral-400 mt-1 font-mono">Generating localized security parameters...</p>
                    </div>
                  </div>
                )}

                {payStep === 2 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <RotateCcw className="text-fuchsia-400 animate-spin" size={32} />
                    <div>
                      <h5 className="text-sm font-semibold text-white font-space-grotesk">P2P Liquid Pool Matching</h5>
                      <p className="text-xs text-neutral-400 mt-1 font-mono">Selecting optimal financial routes from {p2pPoolSize} pool sources...</p>
                    </div>
                  </div>
                )}

                {payStep === 3 && (
                  <div className="flex flex-col items-center justify-center py-6 text-center space-y-3 bg-[#0a2f1d]/20 rounded-lg p-3 border border-[#00e389]/30 my-2">
                    <CheckCircle2 className="text-[#00e389] animate-bounce" size={40} />
                    <div>
                      <h5 className="text-sm font-bold text-[#00e389] font-space-grotesk uppercase">Transfer Successful</h5>
                      <p className="text-[11px] text-neutral-400 mt-1">Processed securely in 142ms via Pay4me custom native gateway SDK.</p>
                    </div>
                    <div className="w-full bg-neutral-900 border border-neutral-800 p-2 rounded text-left font-mono text-[10px]">
                      <div className="flex justify-between text-neutral-400">
                        <span>Dispatched NGN:</span>
                        <span className="text-white font-semibold">{payAmount}</span>
                      </div>
                      <div className="flex justify-between text-neutral-400 mt-0.5">
                        <span>Cleared Credit (USD):</span>
                        <span className="text-[#00e389] font-bold">${calculatedUsd}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setPayStep(0)}
                      className="text-[10px] text-teal-400 hover:underline mt-1 cursor-pointer font-semibold uppercase tracking-wider"
                    >
                      ← Process New Transfer
                    </button>
                  </div>
                )}
              </div>

              {payStep === 0 && (
                <button
                  onClick={runPay4meTransfer}
                  className="w-full py-2.5 rounded bg-[#00e5ff] text-black font-bold font-space-grotesk text-xs tracking-wider uppercase hover:bg-fuchsia-400 transition-all flex items-center justify-center space-x-1 shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>Execute Swift Transfer</span>
                  <ChevronRight size={14} />
                </button>
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* ANYFARM TELEMETRY SIMULATOR */}
          {activeProject.id === 'anyfarm' && (
            <div className="flex-1 flex flex-col justify-between h-full font-geist">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-neutral-800 pb-2">
                  <div className="flex items-center space-x-1.5">
                    <Gauge size={14} className="text-[#00daf3]" />
                    <span className="font-space-grotesk text-xs font-semibold text-white">AnyFarm Operations</span>
                  </div>
                  <span className="text-[9px] bg-[#ff2a85]/10 border border-[#ff2a85]/30 text-fuchsia-400 py-0.5 px-1.5 rounded font-mono">
                    API 4.7★
                  </span>
                </div>

                {/* Moisture gauge card */}
                <div className="bg-neutral-900 rounded-lg border border-neutral-800 p-3 space-y-3 relative group overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-neutral-400 font-space-grotesk uppercase tracking-widest">Hydrological Telemetry</span>
                    <span className={`text-[10px] font-bold font-mono ${farmMoisture < 45 ? 'text-fuchsia-400 animate-pulse' : 'text-emerald-400'}`}>
                      {farmMoisture < 45 ? '⚠️ ALERT: CRITICAL DRIESS' : '✓ HEALTHY'}
                    </span>
                  </div>

                  {/* Level Progress meter */}
                  <div className="space-y-1">
                    <div className="flex items-end justify-between">
                      <span className="text-[9px] text-neutral-500">Soil Moisture Level:</span>
                      <span className="text-sm font-mono font-extrabold text-white">{farmMoisture}%</span>
                    </div>
                    <div className="h-2 w-full bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${farmMoisture < 45 ? 'bg-gradient-to-r from-red-500 to-fuchsia-400' : 'bg-gradient-to-r from-teal-400 to-[#00e389]'}`} 
                        style={{ width: `${farmMoisture}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono bg-neutral-950 p-1.5 rounded">
                    <span>Target Sector:</span>
                    <select 
                      value={activeSector} 
                      onChange={(e) => {
                        setActiveSector(e.target.value);
                        onAddLog(`[ANYFARM] Swapped active hydrological reading to ${e.target.value}`, 'info');
                      }}
                      className="bg-transparent text-teal-400 border-none outline-none font-semibold text-[10px]"
                    >
                      <option value="Sector Alpha-7">Sector Alpha-7 (Corn)</option>
                      <option value="Sector Beta-2">Sector Beta-2 (Soya)</option>
                      <option value="Sector Gamma-4">Sector Gamma-4 (Wheat)</option>
                    </select>
                  </div>
                </div>

                {/* Quick stats mini grid */}
                <div className="grid grid-cols-2 gap-2 mt-3 font-mono text-[10px] text-neutral-400">
                  <div className="bg-neutral-900/25 border border-neutral-800 rounded p-1.5">
                    <span className="block text-[8px] text-neutral-500 uppercase">Irrigation Line</span>
                    <span className={`font-semibold ${isIrrigationOn ? 'text-[#00daf3] animate-[pulse_1s_infinite]' : 'text-neutral-500'}`}>
                      {isIrrigationOn ? '● VALVE OPENING' : '○ VALVES CLOSED'}
                    </span>
                  </div>
                  <div className="bg-neutral-900/25 border border-neutral-800 rounded p-1.5">
                    <span className="block text-[8px] text-neutral-500 uppercase">Telemetry Health</span>
                    <span className="text-emerald-400 font-semibold">100% Core Online</span>
                  </div>
                </div>
              </div>

              {/* Activation Trigger */}
              <button
                onClick={triggerAnyFarmIrrigation}
                disabled={isIrrigationOn || farmMoisture >= 68}
                className={`w-full py-2.5 rounded-lg font-space-grotesk text-xs tracking-wider uppercase font-bold flex items-center justify-center space-x-1 cursor-pointer transition-all shadow-lg mt-4 ${isIrrigationOn ? 'bg-neutral-900 border border-neutral-850 text-neutral-500' : 'bg-[#00daf3] text-black hover:bg-fuchsia-400 hover:text-white'}`}
              >
                {isIrrigationOn ? (
                  <>
                    <Droplet size={14} className="animate-bounce text-[#00daf3]" />
                    <span>Rehydrating Plot...</span>
                  </>
                ) : (
                  <>
                    <Power size={14} />
                    <span>Irrigate {activeSector.split(' ')[1]}</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* ========================================================= */}
          {/* FXBUD CREDITS SIMULATOR */}
          {activeProject.id === 'fxbud' && (
            <div className="flex-1 flex flex-col justify-between h-full font-geist text-xs">
              <div>
                <div className="flex items-center space-x-1.5 mb-3 border-b border-neutral-800 pb-2 text-[#ff2a85]">
                  <Coins size={15} />
                  <span className="font-space-grotesk font-bold uppercase tracking-wider">FxBud Crypto Loan</span>
                </div>

                <div className="space-y-3.5">
                  {/* Collateral Slider */}
                  <div className="bg-neutral-900 p-2 rounded border border-neutral-800">
                    <div className="flex justify-between items-center text-[10px] text-neutral-500">
                      <span>COLLATERAL HELD (USD)</span>
                      <span className="font-mono text-white font-bold">${collateralVal}</span>
                    </div>
                    <input 
                      type="range"
                      min="1000"
                      max="10000"
                      step="500"
                      value={collateralVal}
                      onChange={(e) => {
                        setCollateralVal(Number(e.target.value));
                        setLoanStatus('idle');
                      }}
                      className="w-full accent-fuchsia-400 h-1 bg-neutral-950 rounded mt-1.5 outline-none cursor-pointer"
                    />
                  </div>

                  {/* Loan Slider */}
                  <div className="bg-neutral-900 p-2 rounded border border-neutral-800">
                    <div className="flex justify-between items-center text-[10px] text-neutral-500">
                      <span>REQUESTED LOAN (USD)</span>
                      <span className="font-mono text-white font-bold">${loanVal}</span>
                    </div>
                    <input 
                      type="range"
                      min="500"
                      max="8000"
                      step="250"
                      value={loanVal}
                      onChange={(e) => {
                        setLoanVal(Number(e.target.value));
                        setLoanStatus('idle');
                      }}
                      className="w-full accent-[#00daf3] h-1 bg-neutral-950 rounded mt-1.5 outline-none cursor-pointer"
                    />
                  </div>

                  {/* Underwriting assessment display */}
                  <div className="bg-[#030712] border border-neutral-800 p-2.5 rounded-lg font-mono text-[11px] space-y-1">
                    <div className="flex justify-between text-neutral-500">
                      <span>Liquidity Safety Ratio:</span>
                      <span className={`font-bold ${(collateralVal / loanVal) >= 1.5 ? 'text-[#00e389]' : 'text-fuchsia-400'}`}>
                        {(collateralVal / loanVal).toFixed(2)}x
                      </span>
                    </div>
                    <div className="flex justify-between text-neutral-500">
                      <span>Margin Benchmark:</span>
                      <span className="text-neutral-400">1.50x Secured</span>
                    </div>
                    
                    {/* Status Feedback banner */}
                    {loanStatus === 'approved' && (
                      <div className="mt-2.5 bg-[#0a2f1d]/30 border border-emerald-500/40 p-1.5 rounded flex items-center space-x-2 text-emerald-400 text-[10px] font-space-grotesk font-semibold uppercase animate-fade-in">
                        <ShieldCheck size={14} />
                        <span>Eligible • Instant Dispatch</span>
                      </div>
                    )}

                    {loanStatus === 'rejected' && (
                      <div className="mt-2.5 bg-[#3c0c14]/30 border border-rose-500/40 p-1.5 rounded flex items-center space-x-2 text-rose-400 text-[10px] font-space-grotesk font-semibold uppercase animate-fade-in">
                        <AlertTriangle size={14} />
                        <span>High Risk • Margin Call Danger</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={runFxBudUnderwrite}
                disabled={isUnderwriting}
                className="w-full py-2.5 rounded-lg bg-[#ff2a85] text-white font-space-grotesk font-bold text-xs tracking-wider uppercase hover:bg-[#00daf3] hover:text-black transition-all cursor-pointer flex items-center justify-center space-x-1.5 mt-4"
              >
                {isUnderwriting ? (
                  <>
                    <RefreshCw size={13} className="animate-spin text-white" />
                    <span>Evaluating Risk...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={13} />
                    <span>Score AI Credit Line</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* ========================================================= */}
          {/* MOJECPAY TOKEN HUB */}
          {activeProject.id === 'mojecpay' && (
            <div className="flex-1 flex flex-col justify-between h-full font-geist text-xs">
              <div>
                <div className="flex items-center space-x-2 mb-3 border-b border-neutral-800 pb-1.5 text-yellow-400">
                  <Zap size={14} className="fill-yellow-400 text-yellow-500" />
                  <span className="font-space-grotesk font-bold tracking-wide">MojecPay Meter Load</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-neutral-900 p-2 rounded border border-neutral-800">
                    <label className="text-[9px] text-neutral-500 uppercase">Smart Meter Identification</label>
                    <input 
                      type="text"
                      value={meterId}
                      onChange={(e) => setMeterId(e.target.value)}
                      className="w-full bg-transparent border-none outline-none font-mono text-sm text-white font-bold select-text"
                    />
                  </div>

                  <div className="bg-neutral-900 p-2 rounded border border-neutral-800">
                    <label className="text-[9px] text-neutral-500 uppercase">Load Amount (NGN)</label>
                    <div className="flex items-center mt-1">
                      <span className="text-neutral-400 mr-1 text-sm">₦</span>
                      <input 
                        type="number"
                        value={tokenAmount}
                        onChange={(e) => {
                          setTokenAmount(e.target.value);
                          setPurchasedToken(null);
                        }}
                        className="w-full bg-transparent border-none outline-none font-mono text-sm text-[#00daf3] font-bold"
                      />
                    </div>
                  </div>

                  {/* Preset Buttons */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {['5000', '10000', '25000'].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => {
                          setTokenAmount(amt);
                          setPurchasedToken(null);
                          onAddLog(`[MojecPay] Set fast token purchase: ₦${amt}`, 'info');
                        }}
                        className={`py-1 text-[10px] font-mono rounded border cursor-pointer transition-all ${tokenAmount === amt ? 'bg-yellow-400/20 text-yellow-300 border-yellow-400' : 'bg-neutral-900/40 border-neutral-800 text-neutral-500'}`}
                      >
                        ₦{Number(amt).toLocaleString()}
                      </button>
                    ))}
                  </div>

                  {purchasedToken && (
                    <div className="bg-[#030712] border border-yellow-400/40 p-3 rounded-lg text-center space-y-1.5 select-text animate-fade-in">
                      <span className="text-[8px] tracking-widest text-[#00e389] uppercase font-mono block">Smart Token Dispatched</span>
                      <span className="font-mono text-xs font-black text-yellow-300 tracking-wider bg-[#0c0e14] px-2 py-1.5 rounded block whitespace-nowrap">
                        {purchasedToken}
                      </span>
                      <p className="text-[9px] text-neutral-500 italic">Enter smart code inside meter physical keypads.</p>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={runMojecPurchase}
                disabled={isCharging}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-space-grotesk font-bold text-xs tracking-wider uppercase hover:from-yellow-400 hover:to-amber-505 transition-all cursor-pointer flex items-center justify-center space-x-1.5 mt-4"
              >
                {isCharging ? (
                  <>
                    <RefreshCw size={13} className="animate-spin text-black" />
                    <span>Synchronizing GraphQL...</span>
                  </>
                ) : (
                  <>
                    <Zap size={13} />
                    <span>Execute GraphQL Dispatch</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* ========================================================= */}
          {/* EXPENSE TRACKER */}
          {activeProject.id === 'expensetracker' && (
            <div className="flex-1 flex flex-col justify-between h-full font-geist text-xs font-mono">
              <div>
                <div className="flex items-center space-x-2 mb-2 border-b border-neutral-800 pb-1.5 text-[#00daf3]">
                  <Wallet size={14} />
                  <span className="font-space-grotesk font-bold tracking-wide">CoinLog Expense Sync</span>
                </div>

                <div className="space-y-1.5 max-h-48 overflow-y-auto mb-2.5 pr-1.5 scrollbar-thin">
                  {expenseList.map((exp) => (
                    <div key={exp.id} className="bg-neutral-900 border border-neutral-800 p-1.5 rounded flex items-center justify-between text-[11px]">
                      <span className="text-white truncate max-w-[130px]">{exp.text}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-fuchsia-400 font-bold">₦{exp.amount.toLocaleString()}</span>
                        <button 
                          onClick={() => {
                            setExpenseList(prev => prev.filter(item => item.id !== exp.id));
                            onAddLog(`[Expense Tracker] Deleted ledger record: ${exp.text}`, 'warn');
                          }}
                          className="text-neutral-500 hover:text-fuchsia-400 p-0.5 cursor-pointer"
                        >
                          <Trash2 size={11} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5 p-2 bg-[#030712] border border-neutral-800 rounded-lg">
                  <div className="grid grid-cols-2 gap-1.5">
                    <input 
                      type="text"
                      placeholder="Spent on..."
                      value={newExpName}
                      onChange={(e) => setNewExpName(e.target.value)}
                      className="bg-neutral-900 p-1.5 rounded border border-neutral-800 outline-none text-[10px] text-white font-sans h-7"
                    />
                    <input 
                      type="number"
                      placeholder="Amount ₦"
                      value={newExpVal}
                      onChange={(e) => setNewExpVal(e.target.value)}
                      className="bg-neutral-900 p-1.5 rounded border border-neutral-800 outline-none text-[10px] text-[#00daf3] font-mono h-7"
                    />
                  </div>
                  <button
                    onClick={() => {
                      if (!newExpName || !newExpVal) return;
                      const newItem = {
                        id: Date.now(),
                        text: newExpName,
                        amount: Number(newExpVal)
                      };
                      setExpenseList(prev => [...prev, newItem]);
                      onAddLog(`[Supabase Ledger] Dispatched local item: "${newItem.text}" val: ₦${newItem.amount}. Auto-sync running.`, 'success');
                      setNewExpName('');
                      setNewExpVal('');
                    }}
                    className="w-full py-1 rounded bg-[#00daf3]/10 border border-[#00daf3]/30 text-[#00daf3] hover:bg-[#00daf3]/20 font-space-grotesk text-[10px] font-bold uppercase transition-all tracking-wider cursor-pointer flex items-center justify-center space-x-1"
                  >
                    <Plus size={11} />
                    <span>Synchronize Ledger</span>
                  </button>
                </div>
              </div>

              <div className="text-[9px] text-neutral-500 mt-2 bg-neutral-900 border border-neutral-800 rounded p-1.5">
                <div className="flex justify-between">
                  <span>Supabase Cloud Status:</span>
                  <span className="text-emerald-400 font-semibold uppercase animate-pulse">Synced ⬤</span>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* BRICK BREAKER GAME */}
          {activeProject.id === 'brickbreaker' && (
            <div className="flex-1 flex flex-col justify-between h-full font-geist text-xs text-center">
              <div>
                <div className="flex items-center justify-between mb-2 border-b border-neutral-800 pb-1 text-emerald-450">
                  <div className="flex items-center space-x-1.5">
                    <Trophy size={14} className="text-emerald-400" />
                    <span className="font-space-grotesk font-extrabold uppercase tracking-widest text-[11px] text-emerald-400">Flame Game</span>
                  </div>
                  <span className="font-mono text-[10px] bg-emerald-950 text-emerald-300 font-bold px-1.5 rounded-full">
                    Score: {score}
                  </span>
                </div>

                {/* Game Canvas Box */}
                <div className="w-full h-36 bg-[#030712] rounded-md border border-neutral-800 relative overflow-hidden select-none">
                  {/* Grid layout blocks */}
                  <div className="grid grid-cols-6 gap-1 p-2">
                    {bricks.map((b) => (
                      <div 
                        key={b.id}
                        className={`h-4.5 rounded-sm transition-all duration-300 ${b.active ? `${b.color} border border-white/10 opacity-100 scale-100 hover:scale-105 hover:brightness-125 cursor-pointer` : 'opacity-0 scale-50 pointer-events-none'}`}
                      />
                    ))}
                  </div>

                  {/* Simulated game vector ball */}
                  <div 
                    className="absolute w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0px_0px_5px_#facc15] transition-all duration-100"
                    style={{ left: `${ballPos.x}%`, top: `${ballPos.y}%` }}
                  />

                  {/* User slider paddle */}
                  <div 
                    className="absolute w-12 h-1.5 bg-gradient-to-r from-teal-400 to-[#00daf3] rounded-full bottom-2 shadow-[0px_2px_4px_#00daf3]"
                    style={{ left: `${ballPos.x - 7}%` }} 
                  />

                  {!gamePlaying && (
                    <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-2 text-center">
                      <p className="text-[10px] text-neutral-400">Flame Physics Loop Ready</p>
                      <button
                        onClick={() => {
                          setGamePlaying(true);
                          onAddLog('[FLAME NODE] Game Loop activated.', 'flutter');
                        }}
                        className="mt-2.5 px-3 py-1 rounded-full bg-[#00e389] text-black font-space-grotesk font-extrabold uppercase tracking-wider text-[10px] hover:scale-105 transition-all cursor-pointer shadow-md inline-flex items-center space-x-1"
                      >
                        <Play size={10} className="fill-black text-black" />
                        <span>Boot Game</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex justify-between text-[9px] text-neutral-500 font-mono bg-neutral-900 p-1 rounded border border-neutral-800 mt-2">
                  <span>Engine Thread:</span>
                  <span className="text-[#00daf3]">120Hz Hardware Sync</span>
                </div>
              </div>

              {gamePlaying && (
                <button
                  onClick={() => {
                    setGamePlaying(false);
                    setBricks(prev => prev.map(item => ({ ...item, active: true })));
                    setScore(120);
                    onAddLog('[FLAME NODE] Game loop halted.', 'warn');
                  }}
                  className="w-full py-1.5 rounded bg-fuchsia-500 text-white font-space-grotesk font-bold text-[10px] uppercase tracking-wider cursor-pointer hover:bg-rose-500 transition-all mt-3"
                >
                  Terminate Game
                </button>
              )}
            </div>
          )}

          {/* Sentry frame status row */}
          <div className="pt-3 mt-2 border-t border-neutral-900 flex justify-between text-[8px] font-mono whitespace-nowrap overflow-x-hidden text-neutral-500 shrink-0">
            <span>ENGINE STATUS: FLUTTER STABLE</span>
            <span>MEMORY_STABLE: 99.4%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
