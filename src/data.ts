import { Experience, Project, SkillCategory } from './types';

export const personalInfo = {
  name: 'Damilola A. Adeniyi',
  role: 'Senior Mobile Engineer',
  phone: '(+234) 8146376717',
  email: 'adeniyidamilola246@gmail.com',
  github: 'https://github.com/oluwadamme',
  linkedin: 'https://www.linkedin.com/in/adeniyi-damilola-01',
  summary: 'Highly accomplished Mobile Engineer with 4 years of experience specializing in cross-platform development using Flutter/Dart and leveraging Kotlin/Jetpack Compose and Swift/SwiftUI for native solutions. Proven track record of spearheading mobile product development, including streamlining transaction processes to reduce checkout time by 40% and driving a 30% increase in successful transactions. Expert in CI/CD, Agile methodologies, performance optimization, AI framework utilization, and effective collaboration with cross-functional teams.'
};

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Mobile Engineer',
    company: 'Nomba Financial Services',
    period: 'Jul 2024 - Present',
    description: [
      'Spearheaded the development of a mobile checkout SDK (Flutter), streamlining transaction processes and reducing average checkout time by 40%, resulting in additional annual revenue.',
      'Collaborated with cross-functional teams to optimize payment processing workflows, achieving a 30% increase in successful transactions and driving user growth by 25%.',
      'Engineered innovative features like bulk transfer and payment links, leading to a 15% boost in revenue within the first quarter post-launch.'
    ],
    metrics: ['-40% Checkout Time', '+30% Successful Tx', '+25% User Growth']
  },
  {
    id: 'exp-2',
    role: 'Lead Mobile Engineer',
    company: 'AirSmat',
    period: 'Nov 2023 - May 2024',
    description: [
      'Led the mobile development team, mentoring a junior Flutter developer to enhance the AnyFarm app, resulting in a 40% reduction in critical bugs and elevating user engagement metrics by 30%.',
      'Implemented features to help boost productivity for farm owners and manage complex farm operations.',
      'Spearheaded API integration and performance optimization, boosting app performance time by 25% and increasing user satisfaction ratings from an average of 3.5 to 4.7 ratings on both the App Store and Play Store.'
    ],
    metrics: ['-40% Critical Bugs', '+25% Performance Speed', '4.7 App Store Rating']
  },
  {
    id: 'exp-3',
    role: 'Mobile Engineer',
    company: 'Pay4me Inc.',
    period: 'Jun 2022 - Nov 2023',
    description: [
      'Architected and launched the JapaPlus app (Flutter) in collaboration with cross-functional teams, achieving over 1k+ downloads within the first month and enhancing team efficiency by 30% through streamlined communication practices.',
      'Engineered and deployed a core peer-to-peer (P2P) feature for Pay4me App users, resulting in a 25% decrease in app loading times and elevating user satisfaction scores by 40%.',
      'Orchestrated the successful deployment of the Pay4me app to the Play Store and App Store, facilitating access for over 50k+ users and improving CI/CD deployment speed by 50% through version control best practices.'
    ],
    metrics: ['+50k+ Active Users', '-25% Load Times', '+50% CI/CD Speed']
  },
  {
    id: 'exp-4',
    role: 'Flutter Developer',
    company: 'FxBud',
    period: 'Jan 2022 - Nov 2022',
    description: [
      'Successfully designed and implemented a crypto loan app, resulting in over 1,000 app downloads in the first quarter.',
      'Developed an admin dashboard with Flutter Web that enhances the effectiveness of administrative tasks and provides real-time data.',
      'Implemented the loan repayment feature, integrating Paystack and Seerbit SDKs, achieving a 20% increase in successful transactions and a 40% reduction in payment processing errors.',
      'Actively monitored innovative trends, adopting Riverpod state management, which contributed to a 15% increase in application performance and a 10% decrease in bug frequency.'
    ],
    metrics: ['+20% Successful Tx', '+15% Perf Optimization', '-40% Payment Errors']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI Frameworks & Integrations',
    skills: [
      { name: 'Gemini Live / Vertex AI', level: 95, meta: 'On-device GenAI' },
      { name: 'TensorFlow Lite / Core ML', level: 88, meta: 'Offline Edge Inference' },
      { name: 'Speech Synthesis & ML Audio', level: 92, meta: 'Waveform Analysis' },
      { name: 'NLP / Structured JSON Pipelines', level: 90, meta: 'Agentic Itineraries' }
    ]
  },
  {
    title: 'Core Architecture & Languages',
    skills: [
      { name: 'Dart / Flutter', level: 98, meta: '120 FPS / Impeller' },
      { name: 'Kotlin / Jetpack Compose', level: 85, meta: 'Native Interface' },
      { name: 'Swift / SwiftUI / UIKit', level: 82, meta: 'Native Platform Bridge' },
      { name: 'Python', level: 75, meta: 'AI Scripting' }
    ]
  },
  {
    title: 'Database & Cloud Services',
    skills: [
      { name: 'Cloud Firestore & Firebase Auth', level: 92, meta: 'Real-time Sync' },
      { name: 'SQLite / ROOM / Fauna', level: 88, meta: 'Local SQL Persistence' },
      { name: 'GraphQL / RESTful APIs', level: 95, meta: 'Precision Syncing' },
      { name: 'MongoDB / AWS / GCP', level: 80, meta: 'Microservices Setup' }
    ]
  },
  {
    title: 'Systems & Analytics',
    skills: [
      { name: 'CI/CD Pipelines (Bitrise, GitHub Actions)', level: 90, meta: '50% Speedup' },
      { name: 'State Management (Riverpod, Bloc, Provider)', level: 95, meta: 'Surgical Updates' },
      { name: 'Monitoring (Sentry, UXCam, Segment)', level: 88, meta: 'Zero-crash targets' }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'oralidle',
    title: 'Speech Coach (Oralidle)',
    description: 'Timed speaking simulator rendering real-time waveforms and AI-driven lexical coaching logs on an interactive radar matrix.',
    longDescription: 'An advanced machine-learning oral fluency companion. Oralidle samples your vocal track, prints on-screen vector waveforms, maps audio metrics to Cloud APIs, and parses lexical confidence gradients.',
    role: 'Lead Developer & AI Architect',
    tags: ['Flutter', 'Google GenAI SDK', 'Waveform Audio', 'Radar Visuals', 'Sentry'],
    achievements: [
      'Created on-device speech-to-text modules returning live lexical accuracy metrics with low CPU load overhead.',
      'Constructed real-time bezier waveform graphs rendering multi-frequency logs at stable 60+ FPS.',
      'Plotted structured confidence, grammar, and coherence scores via customized on-device Recharts components.'
    ],
    liveUrl: 'https://github.com/oluwadamme/oralidle',
    github: 'https://github.com/oluwadamme/oralidle',
    iconName: 'Mic',
    codeSnippet: `// Oralidle AI Audio Analyzer and Waveform Processor
import 'package:google_generative_ai/google_generative_ai.dart';
import 'package:flutter_sound/flutter_sound.dart';

class OralidleAnalyzer {
  final GenerativeModel _model;
  final FlutterSoundRecorder _recorder = FlutterSoundRecorder();

  OralidleAnalyzer(this._model);

  Future<OralResponseFeedback> analyzeVocalSnippet({
    required String filePath,
    required String promptTopic,
  }) async {
    // Process local PCM audio file buffer
    final audioBytes = await File(filePath).readAsBytes();
    
    final prompt = [
      Content.text("""
        Examine this speech sample on '\${promptTopic}'.
        Return scored feedback mapping fluency, vocabulary, coherence, and grammar.
        Identify filler word frequency and deliver 3 actionable coaching tips.
      """),
      DataPart('audio/mp3', audioBytes),
    ];

    final response = await _model.generateContent(prompt);
    return OralResponseFeedback.fromAIJson(response.text);
  }
}`
  },
  {
    id: 'mindforge',
    title: 'Cognitive Suite (MindForge)',
    description: 'Four-game intensive brain training suite graphing multi-metric accuracy, typing speed, and detective progressive clue paths.',
    longDescription: 'A high-performance gamified cognitive testing laboratory. MindForge tracks real-time words-per-minute (WPM), records branching story selections, processes progressive-clue detective puzzles, and streams online trivia.',
    role: 'Architect & Flutter Developer',
    tags: ['Flutter', 'State Manager', 'Online Websockets', 'Fira Code', 'Local Storage'],
    achievements: [
      'Organized complex branching narratives with custom layout states for reactive story processing.',
      'Optimized typing tracker to highlight individual character-level errors in multi-character strings.',
      'Reduced local DB state transition delays down to single-digit milliseconds for smooth view switches.'
    ],
    liveUrl: 'https://github.com/oluwadamme/mind-forge',
    github: 'https://github.com/oluwadamme/mind-forge',
    iconName: 'BrainCircuit',
    codeSnippet: `// MindForge Branching Story & WPM Accuracy Evaluation Engine
class MindForgeTypingTracker {
  final String sourceText;
  int keystrokes = 0;
  int errors = 0;
  final Stopwatch _stopwatch = Stopwatch();

  void beginSession() => _stopwatch.start();

  double computeWordsPerMinute() {
    final minutes = _stopwatch.elapsedMilliseconds / 60000.0;
    if (minutes == 0) return 0.0;
    // Word calculation based on 5 standard keystrokes
    return (keystrokes / 5) / minutes;
  }

  double computeTargetAccuracy() {
    if (keystrokes == 0) return 100.0;
    return ((keystrokes - errors) / keystrokes) * 100.0;
  }
}`
  },
  {
    id: 'wanderai',
    title: 'Wander AI Travel Planner',
    description: 'Natural language itinerary compiler rendering drag-and-drop travel outlines, locations mapping, and dynamic routes on the fly.',
    longDescription: 'Agentic travel outline builder translating plain-text queries into complete high-priority point shortlists, interactive schedules, and path nodes mapped over Google Maps API structures.',
    role: 'Senior Mobile Engineer',
    tags: ['Flutter Map', 'Vertex AI', 'Location Routing', 'Drag-and-Drop SDK', 'Riverpod'],
    achievements: [
      'Created complex text-to-itinerary parser transforming unstructured travel notes into reliable multi-day JSON objects.',
      'Integrated responsive drag-and-drop scheduling arrays, sustaining interactive frame updates on active moves.',
      'Linked custom vector routing layers tracing paths with continuous coordinate adjustments.'
    ],
    liveUrl: 'https://github.com/oluwadamme/wander_ai',
    github: 'https://github.com/oluwadamme/wander_ai',
    iconName: 'Map',
    codeSnippet: `// Wander AI Agentic Itinerary Planner and Routing Node
import 'package:google_generative_ai/google_generative_ai.dart';
import 'package:latlong2/latlong.dart';

class WanderItineraryPlanner {
  final GenerativeModel _model;

  WanderItineraryPlanner(this._model);

  Future<List<TravelDayNode>> compileDreamTrip({
    required String dreamPrompt,
    required String budgetTier
  }) async {
    final parserPrompt = """
      Convert: '\${dreamPrompt}'. Budget level: \${budgetTier}.
      Format into JSON: Day index, Location name, coordinates [Lat, Lng], and descriptive highlights.
    """;

    final response = await _model.generateContent([Content.text(parserPrompt)]);
    return TravelSchemaParser.parseNodes(response.text);
  }
}`
  },
  {
    id: 'sanctum',
    title: 'Sanctum Screen Discipline',
    description: 'Strict native lock-screen utility enforcing daily devotion gates before mobile screen-time is authorized.',
    longDescription: 'Mobile control layer utilizing native Kotlin and Swift runtime integrations. Sanctum overlays device workspace apps, securing compliance with custom prayer and Bible readings thresholds.',
    role: 'System Specialist & Native Engineer',
    tags: ['Kotlin', 'Swift UI', 'Android AppOps', 'MethodChannel', 'SQLite Caching'],
    achievements: [
      'Wrote on-device lock screen overlays with background service loops resistant to task ending.',
      'Engineered MethodChannel bridges facilitating deep notifications control and hardware blocking.',
      'Designed fully isolated SQLite routines caching daily scripture verses for secure offline loading.'
    ],
    liveUrl: 'https://github.com/oluwadamme/sanctum',
    github: 'https://github.com/oluwadamme/sanctum',
    iconName: 'ShieldCheck',
    codeSnippet: `// Sanctum Android Screen-Time Overlay Devotion Controller
package com.etracksystems.sanctum

import android.app.Service
import android.content.Intent
import android.os.IBinder
import android.view.WindowManager

class SanctumDisciplineService : Service() {
    private lateinit var windowManager: WindowManager
    private var lockOverlayView: DevotionLockOverlay? = null

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        val devotionsCompleted = checkLocalDatabaseDevotionStatus()
        
        if (!devotionsCompleted) {
            // Draw window over all apps to block usage
            drawDisciplineOverlay()
        }
        return START_STICKY
    }

    private fun drawDisciplineOverlay() {
        val params = WindowManager.LayoutParams(
            WindowManager.LayoutParams.MATCH_PARENT,
            WindowManager.LayoutParams.MATCH_PARENT,
            WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY,
            WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE,
            PixelFormat.TRANSLUCENT
        )
        // Draw the devotion checklist requiring scripture completion
        windowManager.addView(lockOverlayView, params)
    }
}`
  },
  {
    id: 'pay4me',
    title: 'Pay4me App',
    description: 'Cross-border payment wizard optimized for students and migrants, handling transactions with 40% reduced checkout latency.',
    longDescription: 'A custom, state-of-the-art global financial portal. Pay4me processes rapid USD/GBP/CAD transfers, embeds local peer-to-peer currencies, and integrates custom KYC security checks.',
    role: 'Senior Core Mobile Developer',
    tags: ['Flutter', 'Dart', 'Sentry', 'GraphQL', 'Fintech SDK'],
    achievements: [
      'Engineered Checkout SDK reducing purchase funnel dropout rates by 35%.',
      'Established streamlined offline caching for transacting states, securing critical failure resistance.',
      'Integrated Paystack and Seerbit processing hooks with a 30% reduction in payment processing delays.'
    ],
    liveUrl: 'https://apps.apple.com/ng/app/pay4me-app/id1627285676',
    iconName: 'CreditCard',
    github: 'https://github.com/oluwadamme',
    codeSnippet: `// Pay4me Client SDK Checkout Payment Controller
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class CodeSnippetViewer {
  static const String meta = "IMPELLER RENDERING ENGINE ACTIVE [120Hz]";
}

class CheckoutPaymentController extends StateNotifier<CheckoutState> {
  final PaymentApiService _apiService;
  
  CheckoutPaymentController(this._apiService) : super(CheckoutState.initial());

  Future<void> executeCrossBorderTransfer({
    required double amount,
    required String targetCurrency,
    required String senderIdentity,
  }) async {
    state = state.copyWith(status: CheckoutStatus.processing);
    try {
      final securePayload = await _apiService.prepareSecurePayload(
        amount: amount,
        currency: targetCurrency,
        idToken: senderIdentity,
      );
      
      final receipt = await _apiService.executeTransaction(securePayload);
      state = state.copyWith(
        status: CheckoutStatus.completed,
        receiptToken: receipt['token'],
        latencyMs: 142, // Vector optimized speed
      );
    } catch (e, stack) {
      state = state.copyWith(
        status: CheckoutStatus.failed,
        errorMessage: e.toString(),
      );
    }
  }
}`
  },
  {
    id: 'anyfarm',
    title: 'AnyFarm Platform',
    description: 'Complex farm management console giving real-time telemetry, mapping, and moisture tracker reports over RESTful endpoints.',
    longDescription: 'A technical agricultural suite for massive estates. It tracks live IoT metrics, visualizes high-resolution GIS maps, provides sensor telemetry alerts, and coordinates workflow allocations.',
    role: 'Lead Architect & General Committer',
    tags: ['Flutter', 'AWS', 'GIS Maps', 'Offline Sync', 'FaunaDB'],
    achievements: [
      'Overhauled Flutter core rendering threads to sustain massive vector grids at continuous 60-120 FPS.',
      'Boosted network sync mechanisms, yielding 25% faster API load timelines.',
      'Pleased thousands of landowners, taking average store ratings from 3.5 to 4.7 stars.'
    ],
    liveUrl: 'https://apps.apple.com/ng/app/anyfarm/id1589446189',
    iconName: 'Sprout',
    github: 'https://github.com/oluwadamme',
    codeSnippet: `// AnyFarm Core Telemetry & Moisture Sensor Plot Handler
import 'package:flutter/widgets.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';

class TelemetryPlotController {
  final List<LatLng> geoPolygonPoints;
  final double moistureThreshold;

  TelemetryPlotController({
    required this.geoPolygonPoints, 
    this.moistureThreshold = 42.5
  });

  bool assessIrrigationEfficiency(double recordedMoisture) {
    // Computes GIS boundary status and feeds telemetry metrics.
    if (recordedMoisture < moistureThreshold) {
      debugPrint("[AnyFarm Telemetry Alert]: Drought hazard registered.");
      return false; 
    }
    return true;
  }

  Polygon generateZoneOverlay() {
    return Polygon(
      points: geoPolygonPoints,
      color: const Color(0x3D00E389), // Primary semi-transparent neon overlay
      borderColor: const Color(0xFF00E389),
      borderStrokeWidth: 1.5,
      isFilled: true,
    );
  }
}`
  },
  {
    id: 'fxbud',
    title: 'FxBud Assistant',
    description: 'Currency exchange auxiliary and crypto loader integrating secure state controllers with under 10% bug frequencies.',
    longDescription: 'An immersive digital currency companion supporting quick rates calculations, custom micro-loans processing, automated payback reminders, and detailed administrative reporting.',
    role: 'Primary Flutter Developer',
    tags: ['Flutter Web', 'Riverpod', 'SQLite', 'Paystack SDK', 'CoreML'],
    achievements: [
      'Succeeded in scoring over 1,000 active app installations inside the debuting launch period.',
      'Configured Flutter Web administrator workspace delivering visual telemetry graphs and automated ledgers.',
      'Optimized Riverpod controllers to scale down bug reports by 10% and boost execution speed.'
    ],
    liveUrl: 'https://apps.apple.com/ng/app/fxbud/id6453331136',
    iconName: 'Coins',
    github: 'https://github.com/oluwadamme',
    codeSnippet: `// FxBud State-Driven Loan Processing Controller 
import 'package:riverpod/riverpod.dart';

enum LoanApplicationState { unsubmitted, analyzing, approved, rejected }

class FxBudLoanNotifier extends StateNotifier<LoanApplicationState> {
  final Ref ref;
  
  FxBudLoanNotifier(this.ref) : super(LoanApplicationState.unsubmitted);

  Future<void> submitLoanPayload({
    required double collateralCryptoPrice,
    required double loanWantedAmount,
  }) async {
    state = LoanApplicationState.analyzing;
    
    // Safety Ratio algorithm checks liquidity depth
    final safetyRatio = collateralCryptoPrice / loanWantedAmount;
    await Future.delayed(const Duration(milliseconds: 650)); // Simulating AI risk scoring model
    
    if (safetyRatio >= 1.5) {
      state = LoanApplicationState.approved;
    } else {
      state = LoanApplicationState.rejected;
    }
  }
}`
  },
  {
    id: 'mojecpay',
    title: 'MojecPay Utility',
    description: 'Electricity utility processor fetching tokens and routing IoT energy balances via GraphQL endpoints.',
    longDescription: 'High-density commercial client to purchase energy credits and manage smart utility meter tokens directly over wireless device relays, with a secure receipt tracking engine.',
    role: 'Lead Developer',
    tags: ['GraphQL', 'NFC Sync', 'Local Database', 'React-Native Bridge'],
    achievements: [
      'Mapped real-time GraphQL subscriptions for smart meters, displaying precise instant kilowatt logs.',
      'Reduced average customer token delivery times by 60% through custom message queuing.',
      'Maintained 100% crash-free sessions across high-load transaction times.'
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.etracksystems.mojec_pay',
    iconName: 'Zap',
    github: 'https://github.com/oluwadamme',
    codeSnippet: `// GraphQL Smart Meter Token Dispenser Query
import 'package:graphql/client.dart';

class MojecGraphQLClient {
  final GraphQLClient _client;

  MojecGraphQLClient(this._client);

  Future<QueryResult> purchaseMeterTokens({
    required String meterId,
    required double amountNgn,
  }) async {
    const String queryStr = r"""
      mutation BuyToken($meterId: ID!, $amount: Float!) {
        purchaseTokens(meterId: $meterId, amountNgn: $amount) {
          tokenCode
          status
          transactionReference
          receiptUrl
        }
      }
    """;

    return await _client.mutate(
      MutationOptions(
        document: gql(queryStr),
        variables: {
          'meterId': meterId,
          'amount': amountNgn,
        },
      ),
    );
  }
}`
  },
  {
    id: 'expensetracker',
    title: 'Expense Tracker',
    description: 'Elegant personal finance planner featuring localized SQL caching, custom interactive charts, and real-time ledger hooks.',
    longDescription: 'Elegant personal budgeting app powered by customized SQLite database caching, visual spending category charts, and real-time transaction syncing.',
    role: 'Creator & Developer',
    tags: ['Flutter', 'Dart', 'Supabase', 'SQLite', 'Recharts'],
    achievements: [
      'Engineered localized schema syncing with automatic cloud resolution upon network restoral.',
      'Rendered fluid, modular charts mapping multi-month trends without frame drops.',
      '100% self-authored open-source community tool.'
    ],
    github: 'https://github.com/oluwadamme/Expense-Tracker',
    iconName: 'TrendingUp',
    codeSnippet: `// Local SQLite Database Sync to Supabase Cloud Storage
import 'package:sqflite/sqflite.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class LocalExpenseSyncEngine {
  final Database db;
  final SupabaseClient supabase;

  LocalExpenseSyncEngine(this.db, this.supabase);

  Future<void> reconcileLedger() async {
    final unsyncedLines = await db.query(
      'expenses', 
      where: 'sync_status = ?', 
      whereArgs: [0]
    );

    for (var line in unsyncedLines) {
      try {
        await supabase.from('expenses').insert({
          'amount': line['amount'],
          'category': line['category'],
          'created_at': line['timestamp'],
        });
        
        await db.update(
          'expenses',
          {'sync_status': 1},
          where: 'id = ?',
          whereArgs: [line['id']],
        );
      } catch (err) {
        // Postpones reconciliation to subsequent reload
        continue;
      }
    }
  }
}`
  },
  {
    id: 'brickbreaker',
    title: 'Brick Breaker Game',
    description: 'Immersive physics action game built from the ground up using Flutter\'s Flame vector graphics library.',
    longDescription: 'High-performance interactive game featuring custom elastic physics models, audio effects, variable speed blocks, and global leaderboards.',
    role: 'Game Programmer',
    tags: ['Flutter', 'Flame Engine', 'Vector Physics', 'GameLoop'],
    achievements: [
      'Pioneered 120 FPS game canvas loop optimized across modern mobile screens.',
      'Constructed modular collision detection grid resulting in zero physical tunneling errors.',
      'Published complete source repository to Flutter programmers as a vector-physics standard.'
    ],
    github: 'https://github.com/oluwadamme/Brick-Breaker',
    iconName: 'Gamepad2',
    codeSnippet: `// Brick Breaker Custom Collision Engine
import 'package:flame/components.dart';
import 'package:flame/game.dart';

class CollisionDetector extends RectangleComponent with HasGameRef {
  Vector2 ballVelocity = Vector2(250, -250);

  void handleBallCollision(PositionComponent target) {
    if (this.collidesWith(target)) {
      // Direct vector reflection
      ballVelocity.y = -ballVelocity.y;
      
      // Elastic spring coefficient modifier
      ballVelocity.scale(1.04);
      
      debugPrint("[Flame Physics Engine]: Elastic bounce verified.");
    }
  }
}`
  }
];
