import React, { useState, useRef, useEffect } from 'react';
import { ConsoleLog } from '../types';
import { Terminal, X, ChevronRight, Play } from 'lucide-react';

interface ConsoleFooterProps {
  logs: ConsoleLog[];
  onClearLogs: () => void;
  onAddLog: (message: string, type?: ConsoleLog['type']) => void;
}

export default function ConsoleFooter({ logs, onClearLogs, onAddLog }: ConsoleFooterProps) {
  const [inputValue, setInputValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.trim();
    if (!cmd) return;

    onAddLog(`$ ${cmd}`, 'info');

    const cleanCmd = cmd.toLowerCase();
    if (cleanCmd === '/clear') {
      onClearLogs();
    } else if (cleanCmd === '/help') {
      onAddLog('Available commands:\n  /reload - Hard reload Dart compiler VM\n  /clear - Clear screen buffers\n  /fps [value] - Configure engine target refresh rate (e.g., /fps 120)\n  /metrics - Output active memory profile heap telemetry\n  /system - Report terminal and native OS integration logs', 'info');
    } else if (cleanCmd === '/reload') {
      onAddLog('Reassembling file layout bindings... Completed.', 'flutter');
      onAddLog('[HOT RELOAD] Assembly synchronized in 24ms. Impeller thread responsive.', 'success');
    } else if (cleanCmd.startsWith('/fps')) {
      const parts = cleanCmd.split(' ');
      const val = parts[1] || '120';
      onAddLog(`Flutter shell set target frame interval to ${val} FPS (${(1000 / Number(val)).toFixed(2)}ms render cycle)`, 'success');
    } else if (cleanCmd === '/metrics') {
      onAddLog('[MONITOR] CPU usage: 1.4% | Thread status: IDLE | Heap: 24.3MB allocated / 1024MB free', 'flutter');
      onAddLog('[SKIA] Rasterization pipeline active: Impeller Metal backend, OpenGL fallback ready.', 'info');
    } else if (cleanCmd === '/system') {
      onAddLog('System Profile Info:\n  - Host OS: Android 14 API 34 / iOS 17.4 CoreOS\n  - SDK: Flutter SDK stable 3.22.1 / Dart SDK 3.4.1\n  - Platform Bridge: JNI native pointers / MethodChannel active\n  - Render Target: Impeller GPU Metal/Vulkan API', 'info');
    } else {
      onAddLog(`Command "${cmd}" not recognized. Write "/help" to view options.`, 'error');
    }

    setInputValue('');
  };

  const macros = [
    { label: 'Hot Reload ⚡', cmd: '/reload' },
    { label: 'System Specs 🖥️', cmd: '/system' },
    { label: 'Heap Clean 🗑️', cmd: '/metrics' },
    { label: 'Clear Logs 🧹', cmd: '/clear' }
  ];

  return (
    <div className="bg-surface-dim border-t border-precision font-mono text-xs flex flex-col h-64 overflow-hidden rounded-md">
      {/* Console Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-surface-low border-b border-precision text-ink-muted">
        <div className="flex items-center space-x-2">
          <Terminal size={14} className="text-engine-green animate-pulse" />
          <span className="font-semibold text-ink-primary font-space-grotesk tracking-wide uppercase">Hot-Reload Console (Impeller VM Logs)</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-[10px] text-ink-muted">
            <span className="w-1.5 h-1.5 bg-engine-green rounded-full animate-ping"></span>
            <span className="text-engine-green/90 uppercase tracking-widest font-semibold">Flutter JIT Engine Live</span>
          </div>
          <button 
            onClick={onClearLogs}
            className="text-ink-muted hover:text-fuchsia-flare transition-colors"
            title="Clear Console Buffer"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Macros bar */}
      <div className="bg-surface-well border-b border-precision px-4 py-1.5 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
        <span className="text-ink-subtle text-[10px] uppercase font-bold tracking-widest mr-2">Macros:</span>
        {macros.map((m) => (
          <button
            key={m.label}
            onClick={() => {
              onAddLog(`$ ${m.cmd}`, 'info');
              setInputValue(m.cmd);
              // Trigger command execution immediately
              setTimeout(() => {
                const cleanCmd = m.cmd.toLowerCase();
                if (cleanCmd === '/clear') {
                  onClearLogs();
                } else if (cleanCmd === '/reload') {
                  onAddLog('Reassembling file layout bindings... Completed.', 'flutter');
                  onAddLog('[HOT RELOAD] Assembly synchronized in 24ms. Impeller thread responsive.', 'success');
                } else if (cleanCmd === '/system') {
                  onAddLog('System Profile Info:\n  - Host OS: Android 14 API 34 / iOS 17.4 CoreOS\n  - SDK: Flutter SDK stable 3.22.1 / Dart SDK 3.4.1\n  - Platform Bridge: JNI native pointers / MethodChannel active\n  - Render Target: Impeller GPU Metal/Vulkan API', 'info');
                } else if (cleanCmd === '/metrics') {
                  onAddLog('[MONITOR] CPU usage: 1.4% | Thread status: IDLE | Heap: 24.3MB allocated / 1024MB free', 'flutter');
                  onAddLog('[SKIA] Rasterization pipeline active: Impeller Metal backend, OpenGL fallback ready.', 'info');
                }
                setInputValue('');
              }, 100);
            }}
            className="px-2 py-0.5 rounded bg-surface-container border border-precision hover:border-hyper-cyan hover:text-hyper-cyan text-ink-muted transition-all text-[11px] font-medium"
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Logs Viewport */}
      <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-2 bg-surface-well scrollbar-thin">
        {logs.map((log) => {
          let typeColor = 'text-ink-muted';
          let prefix = '';

          switch (log.type) {
            case 'success':
              typeColor = 'text-engine-green';
              prefix = '[✓] ';
              break;
            case 'error':
              typeColor = 'text-fuchsia-flare';
              prefix = '[✗] ';
              break;
            case 'warn':
              typeColor = 'text-yellow-400';
              prefix = '[!] ';
              break;
            case 'flutter':
              typeColor = 'text-hyper-cyan';
              prefix = '[⚡] ';
              break;
          }

          return (
            <div key={log.id} className="flex items-start space-x-2 shrink-0">
              <span className="text-ink-subtle text-[10px] select-none py-0.5">{log.timestamp}</span>
              <span className={`${typeColor} whitespace-pre-wrap flex-1`}>
                {prefix}{log.message}
              </span>
            </div>
          );
        })}
      </div>

      {/* Terminal prompt input */}
      <form onSubmit={handleCommandSubmit} className="flex items-center border-t border-precision bg-surface-low px-4 py-2 shrink-0">
        <ChevronRight size={14} className="text-hyper-cyan mr-1" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Type terminal command (e.g., "/help", "/reload", "/metrics") and press enter'
          className="flex-1 bg-transparent border-none outline-none text-ink-primary font-mono placeholder:text-ink-subtle text-xs"
        />
        <button
          type="submit"
          className="text-hyper-cyan hover:text-fuchsia-flare p-1 hover:bg-surface-container rounded transition-all"
        >
          <Play size={14} />
        </button>
      </form>
    </div>
  );
}
