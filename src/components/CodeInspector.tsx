import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, FileCode, Terminal, HelpCircle } from 'lucide-react';

interface CodeInspectorProps {
  code: string;
  filename: string;
  onAddLog: (msg: string, type?: 'info' | 'success' | 'warn' | 'error' | 'flutter') => void;
}

export default function CodeInspector({ code, filename, onAddLog }: CodeInspectorProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    onAddLog(`Copied file buffer contents for "${filename}" to local developer system clipboard.`, 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  // Custom token visualizer for Dart and Flutter syntax to match the "Chiaroscuro Technical" theme
  const renderHighlightedCode = (rawCode: string) => {
    const lines = rawCode.split('\n');
    return lines.map((line, lineIndex) => {
      // Handle comments
      if (line.trim().startsWith('//')) {
        return (
          <div key={lineIndex} className="table-row">
            <span className="table-cell text-right pr-4 select-none text-ink-subtle opacity-40 font-mono text-[11px] w-8">{lineIndex + 1}</span>
            <span className="table-cell text-ink-subtle italic font-mono">{line}</span>
          </div>
        );
      }

      // Tokenize basic components safely via regex or simple splits
      const tokens: React.ReactNode[] = [];
      const parts = line.split(/(\s+|=|;|\(|\)|\{|\}|\[|\]|\.|,|:|<|>|@)/);

      parts.forEach((part, index) => {
        const trimmed = part.trim();
        // Keywords
        const keywords = [
          'import', 'class', 'static', 'const', 'final', 'required', 'return', 'void', 
          'await', 'try', 'catch', 'throw', 'async', 'extends', 'with', 'implements', 
          'set', 'get', 'if', 'else', 'for', 'in', 'enum'
        ];
        // Types
        const types = [
          'String', 'double', 'int', 'bool', 'Future', 'List', 'Map', 'Widget', 'BuildContext',
          'StateNotifier', 'Ref', 'CheckoutState', 'State', 'CheckoutStatus', 'PaymentApiService',
          'LatLng', 'Polygon', 'TelemetryPlotController', 'Ref', 'FxBudLoanNotifier',
          'LoanApplicationState', 'GraphQLClient', 'QueryResult', 'MutationOptions',
          'Database', 'SupabaseClient', 'LocalExpenseSyncEngine', 'RectangleComponent',
          'HasGameRef', 'Vector2', 'PositionComponent', 'OralidleAnalyzer', 'GenerativeModel',
          'FlutterSoundRecorder', 'OralResponseFeedback', 'Content', 'DataPart', 'File',
          'WanderItineraryPlanner', 'TravelDayNode', 'TravelSchemaParser',
          'SanctumDisciplineService', 'DevotionLockOverlay', 'PixelFormat'
        ];

        if (keywords.includes(trimmed)) {
          tokens.push(<span key={index} className="text-[#ff2a85] font-semibold">{part}</span>);
        } else if (types.includes(trimmed)) {
          tokens.push(<span key={index} className="text-[#00daf3] font-medium">{part}</span>);
        } else if (trimmed.startsWith('@') || trimmed.startsWith('r"""') || trimmed === 'r' || trimmed === '"""') {
          tokens.push(<span key={index} className="text-yellow-400 font-mono">{part}</span>);
        } else if (trimmed.startsWith("'") || trimmed.startsWith('"') || (trimmed.endsWith("'") && trimmed.length > 1) || (trimmed.endsWith('"') && trimmed.length > 1)) {
          tokens.push(<span key={index} className="text-amber-300 font-mono">{part}</span>);
        } else if (/^\d+$/.test(trimmed)) {
          tokens.push(<span key={index} className="text-[#00e389]">{part}</span>);
        } else if (trimmed.startsWith('_') || (trimmed.length > 2 && trimmed[0] === trimmed[0].toUpperCase())) {
          // Classes or upper camel case
          tokens.push(<span key={index} className="text-emerald-400 font-mono font-medium">{part}</span>);
        } else {
          tokens.push(<span key={index}>{part}</span>);
        }
      });

      return (
        <div key={lineIndex} className="table-row text-[12px] leading-relaxed select-text">
          <span className="table-cell text-right pr-4 select-none text-ink-subtle opacity-40 font-mono text-[11px] w-8 border-r border-precision/60 mr-2">{lineIndex + 1}</span>
          <span className="table-cell pl-3 font-mono text-ink-primary whitespace-pre">{tokens}</span>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col flex-1 h-full bg-surface-obsidian rounded-lg border border-precision overflow-hidden font-mono shadow-xl relative group">
      {/* Code Inspector Header Banner */}
      <div className="flex items-center justify-between px-4 py-2 bg-surface-dim border-b border-precision text-xs select-none">
        <div className="flex items-center space-x-2 text-ink-muted">
          <FileCode size={14} className="text-hyper-cyan" />
          <span className="text-ink-primary font-medium tracking-tight h-5 flex items-center">{filename}</span>
        </div>
        <div className="flex items-center space-x-2.5">
          <span className="text-[10px] text-ink-subtle bg-surface-container/60 border border-precision rounded px-1.5 py-0.5 tracking-wider font-semibold font-space-grotesk">
            DART / FLUTTER
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 px-2 py-1 rounded bg-surface-container border border-precision hover:border-[#00daf3] hover:text-[#00daf3] text-ink-muted transition-all text-[11px]"
          >
            {copied ? (
              <>
                <Check size={12} className="text-engine-green" />
                <span className="text-engine-green font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Area scrollable viewport */}
      <div className="flex-1 overflow-auto p-4 bg-surface-well/95 font-fira-code selection:bg-[#ff2a85]/30 scrollbar-thin">
        <AnimatePresence mode="wait">
          <motion.div
            key={filename}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="table w-full border-collapse"
          >
            {renderHighlightedCode(code)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sentry static log output summary indicator */}
      <div className="bg-surface-low px-4 py-1.5 border-t border-precision flex items-center justify-between text-[11px] text-ink-muted select-none font-space-grotesk text-right">
        <div className="flex items-center space-x-1.5">
          <Terminal size={12} className="text-fuchsia-flare" />
          <span>Sentry Static Analysis:</span>
          <span className="text-engine-green font-semibold">0 Errors / 0 Warnings</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-ink-subtle">Formatting: </span>
          <span className="text-hyper-cyan uppercase font-mono tracking-wider font-semibold">LINTER READY</span>
        </div>
      </div>
    </div>
  );
}
