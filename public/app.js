const storageKey = "masterwrite-sessions";
const lessonLanguageKey = "masterwrite-lesson-language";

const modes = {
  everyday: {
    label: "Everyday clarity",
    note: "Everyday mode focuses on readable grammar, punctuation, and sentence fluency.",
    sample:
      "i enjoy speaking english because it helps me connect with many people but when i write i sometimes forget punctuation and my ideas become unclear",
    replacements: {
      good: "effective",
      bad: "unhelpful",
      help: "support",
      show: "explain",
      very: "especially",
      big: "important",
      thing: "point",
    },
  },
  academic: {
    label: "Academic writing",
    note: "Academic mode prioritizes clarity, formal vocabulary, transitions, and structured analysis.",
    sample:
      "technology is good for students because it help them learn fast however they must use it carefully so the information remain accurate and useful",
    replacements: {
      good: "beneficial",
      help: "support",
      show: "demonstrate",
      big: "substantial",
      idea: "argument",
      use: "apply",
      important: "essential",
    },
  },
  email: {
    label: "Professional email",
    note: "Email mode looks for direct, polite wording and strong sentence endings.",
    sample:
      "hello sir i need the meeting notes please send them soon because i want to finish the report today thank you",
    replacements: {
      need: "would appreciate",
      help: "assist",
      get: "receive",
      soon: "at your earliest convenience",
      tell: "inform",
      good: "helpful",
    },
  },
  creative: {
    label: "Creative expression",
    note: "Creative mode encourages vivid wording while still cleaning grammar and punctuation.",
    sample:
      "the town was quiet and the night was very dark the wind move through the trees and made every house feel like a secret",
    replacements: {
      very: "remarkably",
      dark: "shadowed",
      good: "striking",
      big: "vast",
      walk: "wander",
      say: "whisper",
      look: "glance",
    },
  },
};

const lessonTracks = {
  "en-us": {
    label: "English (America)",
    bannerText:
      "American English lessons focus on sentence clarity, punctuation habits, and confident everyday writing.",
    placeholder:
      "Type or paste writing for the English (America) lesson track. MasterWrite will review grammar, punctuation, vocabulary, and overall writing quality.",
    sample:
      "i enjoy learning english because it helps me share ideas clearly and write with more confidence in school and daily life",
    vocabulary: [
      {
        from: "good",
        to: "effective",
        reason: "American English lessons encourage more precise adjectives in formal writing.",
      },
      {
        from: "thing",
        to: "point",
        reason: "Specific nouns make explanations sound clearer and more confident.",
      },
    ],
    tip: "Use short, direct sentences first, then strengthen them with more precise vocabulary.",
  },
  "en-gb": {
    label: "English (British)",
    bannerText:
      "British English lessons emphasise polished sentence construction, punctuation accuracy, and familiar spelling patterns.",
    placeholder:
      "Type or paste writing for the English (British) lesson track. MasterWrite will review grammar, punctuation, vocabulary, and overall writing quality.",
    sample:
      "i enjoy learning english because it helps me organise my thoughts and communicate clearly with other people",
    vocabulary: [
      {
        from: "good",
        to: "strong",
        reason: "British writing lessons favour clearer evaluation words in essays and reports.",
      },
      {
        from: "show",
        to: "demonstrate",
        reason: "More formal verbs help arguments sound better supported.",
      },
    ],
    tip: "Check spelling choices such as organise, analyse, and colour when you want a British tone.",
  },
  sw: {
    label: "Kiswahili",
    bannerText:
      "Kiswahili lessons help learners build sentence flow, punctuation awareness, and vocabulary confidence step by step.",
    placeholder:
      "Type or paste writing for the Kiswahili lesson track. MasterWrite will review structure, punctuation habits, and writing flow.",
    sample:
      "napenda kujifunza kiswahili kwa sababu hunisaidia kueleza mawazo yangu kwa uwazi na kuandika vizuri zaidi",
    vocabulary: [
      {
        from: "vizuri",
        to: "kwa usahihi",
        reason: "More exact wording can strengthen a formal Kiswahili explanation.",
      },
      {
        from: "kitu",
        to: "hoja",
        reason: "A more specific noun helps the reader understand your point faster.",
      },
    ],
    tip: "Focus on one clear idea in each sentence before adding extra detail.",
  },
  es: {
    label: "Espanol",
    bannerText:
      "Espanol lessons support cleaner sentence structure, stronger punctuation habits, and clearer written expression.",
    placeholder:
      "Type or paste writing for the Espanol lesson track. MasterWrite will review structure, punctuation habits, and writing flow.",
    sample:
      "me gusta aprender espanol porque me ayuda a expresar mis ideas con claridad y escribir con mas confianza",
    vocabulary: [
      {
        from: "bueno",
        to: "solido",
        reason: "A more precise adjective can make your explanation sound stronger.",
      },
      {
        from: "cosa",
        to: "idea",
        reason: "Specific nouns improve clarity in both everyday and academic writing.",
      },
    ],
    tip: "Write the main point first, then add supporting details in the next sentence.",
  },
  fr: {
    label: "French",
    bannerText:
      "French lessons guide learners toward cleaner grammar habits, clearer punctuation, and stronger sentence rhythm.",
    placeholder:
      "Type or paste writing for the French lesson track. MasterWrite will review structure, punctuation habits, and writing flow.",
    sample:
      "j aime apprendre le francais parce que cela m aide a organiser mes idees et a ecrire avec plus de confiance",
    vocabulary: [
      {
        from: "bon",
        to: "solide",
        reason: "A sharper adjective can make your writing sound more deliberate and precise.",
      },
      {
        from: "idee",
        to: "argument",
        reason: "Formal contexts benefit from more exact vocabulary choices.",
      },
    ],
    tip: "Keep sentence order simple first, then improve style with stronger vocabulary.",
  },
  de: {
    label: "German (Germany)",
    bannerText:
      "German lessons emphasise structured meaning, careful sentence building, and writing that feels organised and clear.",
    placeholder:
      "Type or paste writing for the German lesson track. MasterWrite will review structure, punctuation habits, and writing flow.",
    sample:
      "ich lerne gern deutsch weil ich damit meine gedanken klarer ausdruecken und bessere saetze schreiben kann",
    vocabulary: [
      {
        from: "gut",
        to: "praezise",
        reason: "A more exact adjective can make academic or formal writing stronger.",
      },
      {
        from: "sache",
        to: "argument",
        reason: "Specific nouns help readers understand your meaning more quickly.",
      },
    ],
    tip: "Build the sentence around one main idea before extending it with extra clauses.",
  },
};

const elements = {
  languageSelect: document.getElementById("language-select"),
  heroTrackTitle: document.getElementById("hero-track-title"),
  heroTrackText: document.getElementById("hero-track-text"),
  modeSelect: document.getElementById("mode-select"),
  modeNote: document.getElementById("mode-note"),
  input: document.getElementById("input-text"),
  analyzeButton: document.getElementById("analyze-button"),
  sampleButton: document.getElementById("sample-button"),
  clearButton: document.getElementById("clear-button"),
  pdfButton: document.getElementById("pdf-button"),
  wordCount: document.getElementById("word-count"),
  charCount: document.getElementById("char-count"),
  scoreValue: document.getElementById("score-value"),
  scoreBand: document.getElementById("score-band"),
  scoreSummary: document.getElementById("score-summary"),
  scoreRing: document.getElementById("score-ring"),
  correctedText: document.getElementById("corrected-text"),
  issuesList: document.getElementById("issues-list"),
  vocabularyList: document.getElementById("vocabulary-list"),
  analysisList: document.getElementById("analysis-list"),
  tipsList: document.getElementById("tips-list"),
  historyList: document.getElementById("history-list"),
  lessonCards: Array.from(document.querySelectorAll(".lesson-card")),
};

let latestReport = null;

function isEnglishTrack(trackKey) {
  return trackKey === "en-us" || trackKey === "en-gb";
}

function getCurrentTrackKey() {
  return lessonTracks[elements.languageSelect.value] ? elements.languageSelect.value : "en-us";
}

function getCurrentTrack() {
  return lessonTracks[getCurrentTrackKey()];
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function updateCounts() {
  const text = elements.input.value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  elements.wordCount.textContent = `${words} ${words === 1 ? "word" : "words"}`;
  elements.charCount.textContent = `${elements.input.value.length} characters`;
}

function setModeNote() {
  const mode = modes[elements.modeSelect.value];
  const track = getCurrentTrack();
  elements.modeNote.textContent = `${mode.note} Current lesson track: ${track.label}.`;
}

function updateLessonCards(trackKey) {
  elements.lessonCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.language === trackKey);
  });
}

function applyLessonTrack() {
  const trackKey = getCurrentTrackKey();
  const track = lessonTracks[trackKey];
  elements.heroTrackTitle.textContent = `Current lesson track: ${track.label}`;
  elements.heroTrackText.textContent = track.bannerText;
  elements.input.placeholder = track.placeholder;
  localStorage.setItem(lessonLanguageKey, trackKey);
  updateLessonCards(trackKey);
  setModeNote();
}

function splitSentences(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function improveText(rawText, trackKey) {
  let text = rawText.trim();
  const actions = [];

  const collapsedSpaces = text.replace(/\s+/g, " ");
  if (collapsedSpaces !== text) {
    text = collapsedSpaces;
    actions.push("Collapsed repeated spaces to improve readability.");
  }

  const fixedSpacing = text
    .replace(/\s+([,.;!?])/g, "$1")
    .replace(/([,.;!?])(?=[^\s"')\]}])/g, "$1 ");
  if (fixedSpacing !== text) {
    text = fixedSpacing;
    actions.push("Adjusted spacing around punctuation marks.");
  }

  if (isEnglishTrack(trackKey)) {
    const normalizedI = text.replace(/\bi\b/g, "I");
    if (normalizedI !== text) {
      text = normalizedI;
      actions.push("Capitalized the pronoun I.");
    }

    const capitalizedStarts = text.replace(/(^|[.!?]\s+)([a-z])/g, (match, prefix, letter) => {
      return `${prefix}${letter.toUpperCase()}`;
    });
    if (capitalizedStarts !== text) {
      text = capitalizedStarts;
      actions.push("Capitalized sentence beginnings.");
    }

    if (text && !/[.!?]$/.test(text)) {
      text = `${text}.`;
      actions.push("Added ending punctuation.");
    }
  }

  return { text, actions };
}

function detectIssues(originalText, correctedText, trackKey) {
  const issues = [];
  const normalizedOriginal = originalText.trim();

  if (!normalizedOriginal) {
    return issues;
  }

  if (/[a-z]/.test(normalizedOriginal.charAt(0))) {
    issues.push({
      title: "Sentence opening needs capitalization",
      detail: "The first sentence starts with a lowercase letter.",
    });
  }

  if (/\s+[,.;!?]/.test(normalizedOriginal)) {
    issues.push({
      title: "Punctuation spacing",
      detail: "Some punctuation marks have extra spaces before them.",
    });
  }

  if (!/[.!?]$/.test(normalizedOriginal)) {
    issues.push({
      title: "Missing closing punctuation",
      detail: "The draft needs an ending period, question mark, or exclamation mark.",
    });
  }

  const repeatedMatch = normalizedOriginal.match(/\b(\w+)\s+\1\b/i);
  if (repeatedMatch) {
    issues.push({
      title: "Repeated word",
      detail: `The word "${repeatedMatch[1]}" appears twice in a row.`,
    });
  }

  const sentences = splitSentences(correctedText);
  const longSentence = sentences.find((sentence) => sentence.split(/\s+/).length > 28);
  if (longSentence) {
    issues.push({
      title: "Long sentence",
      detail: "At least one sentence is long enough to benefit from being split into two ideas.",
    });
  }

  if (isEnglishTrack(trackKey) && /\bi\b/.test(normalizedOriginal)) {
    issues.push({
      title: "Pronoun capitalization",
      detail: "The pronoun I should always be capitalized.",
    });
  }

  const transitions = ["however", "therefore", "moreover", "furthermore", "meanwhile"];
  if (isEnglishTrack(trackKey)) {
    transitions.forEach((transition) => {
      const pattern = new RegExp(`\\b${transition}\\b(?!,)`, "i");
      if (pattern.test(correctedText)) {
        issues.push({
          title: `Comma after "${transition}"`,
          detail: `Consider placing a comma after "${transition}" when it opens a clause.`,
        });
      }
    });
  }

  return issues;
}

function buildVocabularySuggestions(text, mode, trackKey) {
  if (!isEnglishTrack(trackKey)) {
    return lessonTracks[trackKey].vocabulary;
  }

  const replacements = modes[mode].replacements;
  const suggestions = [];

  Object.entries(replacements).forEach(([weakWord, strongWord]) => {
    const matcher = new RegExp(`\\b${weakWord}\\b`, "i");
    if (matcher.test(text)) {
      suggestions.push({
        from: weakWord,
        to: strongWord,
        reason: `In ${modes[mode].label.toLowerCase()}, "${strongWord}" sounds more precise than "${weakWord}".`,
      });
    }
  });

  return suggestions.slice(0, 6);
}

function buildTips(analysis, issues, vocabulary, mode, trackKey) {
  const tips = [];
  const track = lessonTracks[trackKey];

  if (analysis.avgSentenceLength > 24) {
    tips.push("Break longer sentences into smaller ideas so the reader can follow your message more easily.");
  }

  if (analysis.lexicalVariety < 0.45) {
    tips.push("Try repeating fewer words by swapping in clearer synonyms or more specific nouns.");
  }

  if (analysis.paragraphCount === 1 && analysis.wordCount > 120) {
    tips.push("Split your draft into paragraphs to give each major idea its own space.");
  }

  if (issues.length === 0) {
    tips.push("Your draft is mechanically strong. Focus next on voice, detail, and audience awareness.");
  }

  if (vocabulary.length > 0) {
    tips.push(`Review the ${modes[mode].label.toLowerCase()} vocabulary suggestions to sharpen your tone.`);
  }

  tips.push(track.tip);

  if (mode === "academic") {
    tips.push("Add transition phrases that connect evidence to conclusions for a more academic flow.");
  }

  if (mode === "email") {
    tips.push("A strong email usually begins with context and ends with a polite, specific request.");
  }

  if (mode === "creative") {
    tips.push("Use sensory details sparingly but deliberately so the reader remembers the scene.");
  }

  return tips.slice(0, 5);
}

function analyzeStructure(text) {
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean) : [];
  const sentences = splitSentences(trimmed);
  const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(Boolean) : [];
  const uniqueWords = new Set(words.map((word) => word.toLowerCase().replace(/[^a-z']/g, ""))).size;

  return {
    wordCount: words.length,
    sentenceCount: sentences.length,
    avgSentenceLength: sentences.length ? Math.round(words.length / sentences.length) : 0,
    paragraphCount: paragraphs.length || (trimmed ? 1 : 0),
    readingTime: Math.max(1, Math.ceil(words.length / 200)),
    lexicalVariety: words.length ? Number((uniqueWords / words.length).toFixed(2)) : 0,
    longestSentence: sentences.reduce((max, sentence) => {
      return Math.max(max, sentence.split(/\s+/).length);
    }, 0),
  };
}

function calculateScore(analysis, issues, vocabulary) {
  let score = 62;

  if (analysis.wordCount >= 40) score += 8;
  if (analysis.wordCount >= 90) score += 5;
  if (analysis.sentenceCount >= 3) score += 6;
  if (analysis.avgSentenceLength >= 10 && analysis.avgSentenceLength <= 22) score += 6;
  if (analysis.lexicalVariety >= 0.45) score += 6;
  if (analysis.lexicalVariety >= 0.55) score += 3;
  if (analysis.paragraphCount >= 2) score += 4;
  if (vocabulary.length >= 2) score += 2;

  score -= issues.length * 5;
  if (analysis.longestSentence > 34) score -= 6;
  if (analysis.wordCount < 20) score -= 8;

  return Math.max(35, Math.min(98, score));
}

function describeScore(score) {
  if (score >= 90) {
    return {
      band: "Excellent academic control",
      summary: "Your draft shows strong sentence control, punctuation awareness, and a confident writing style.",
    };
  }

  if (score >= 80) {
    return {
      band: "Strong writing foundation",
      summary: "Your draft is clear and capable, with a few opportunities to polish grammar or vocabulary.",
    };
  }

  if (score >= 70) {
    return {
      band: "Developing with promise",
      summary: "The message is understandable, and a few targeted corrections can make it much stronger.",
    };
  }

  return {
    band: "Needs revision focus",
    summary: "This draft has solid ideas, but it needs more help with mechanics, structure, or clarity.",
  };
}

function renderList(container, items, formatter, fallback) {
  container.innerHTML = "";

  if (items.length === 0) {
    const li = document.createElement("li");
    li.textContent = fallback;
    container.appendChild(li);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = formatter(item);
    container.appendChild(li);
  });
}

function renderAnalysis(analysis) {
  elements.analysisList.innerHTML = `
    <div>
      <dt>Words</dt>
      <dd>${analysis.wordCount}</dd>
    </div>
    <div>
      <dt>Sentences</dt>
      <dd>${analysis.sentenceCount}</dd>
    </div>
    <div>
      <dt>Average length</dt>
      <dd>${analysis.avgSentenceLength} words</dd>
    </div>
    <div>
      <dt>Reading time</dt>
      <dd>${analysis.readingTime} min</dd>
    </div>
    <div>
      <dt>Paragraphs</dt>
      <dd>${analysis.paragraphCount}</dd>
    </div>
    <div>
      <dt>Lexical variety</dt>
      <dd>${analysis.lexicalVariety}</dd>
    </div>
  `;
}

function saveSession(report) {
  const sessions = JSON.parse(localStorage.getItem(storageKey) || "[]");
  sessions.unshift({
    id: Date.now(),
    track: report.trackLabel,
    mode: report.modeLabel,
    score: report.score,
    preview: report.correctedText.slice(0, 130),
    date: new Date().toLocaleString(),
  });
  localStorage.setItem(storageKey, JSON.stringify(sessions.slice(0, 6)));
  renderHistory();
}

function renderHistory() {
  const sessions = JSON.parse(localStorage.getItem(storageKey) || "[]");
  elements.historyList.innerHTML = "";

  if (sessions.length === 0) {
    elements.historyList.innerHTML = `
      <article class="history-card empty-state">
        <strong>No sessions yet</strong>
        <p>Analyze some writing and your recent reports will show up here.</p>
      </article>
    `;
    return;
  }

  sessions.forEach((session) => {
    const sessionTrack = session.track || "Lesson";
    const article = document.createElement("article");
    article.className = "history-card";
    article.innerHTML = `
      <div class="history-score">Score ${session.score}</div>
      <strong>${escapeHtml(sessionTrack)} - ${escapeHtml(session.mode)}</strong>
      <p>${escapeHtml(session.preview)}...</p>
      <small>${escapeHtml(session.date)}</small>
    `;
    elements.historyList.appendChild(article);
  });
}

function analyzeText() {
  const originalText = elements.input.value.trim();
  if (!originalText) {
    window.alert("Please add some writing first so MasterWrite can analyze it.");
    return;
  }

  const mode = elements.modeSelect.value;
  const trackKey = getCurrentTrackKey();
  const track = lessonTracks[trackKey];
  const improved = improveText(originalText, trackKey);
  const issues = detectIssues(originalText, improved.text, trackKey);
  const vocabulary = buildVocabularySuggestions(improved.text, mode, trackKey);
  const analysis = analyzeStructure(improved.text);
  const tips = buildTips(analysis, issues, vocabulary, mode, trackKey);
  const score = calculateScore(analysis, issues, vocabulary);
  const scoreInfo = describeScore(score);

  latestReport = {
    trackLabel: track.label,
    modeLabel: modes[mode].label,
    score,
    correctedText: improved.text,
    issues,
    vocabulary,
    analysis,
    tips,
    scoreInfo,
    autoFixes: improved.actions,
  };

  elements.correctedText.textContent = improved.text;
  elements.scoreValue.textContent = score;
  elements.scoreBand.textContent = scoreInfo.band;
  elements.scoreSummary.textContent = scoreInfo.summary;
  elements.scoreRing.style.setProperty("--score-angle", `${Math.round((score / 100) * 360)}deg`);

  const combinedIssues = [
    ...issues,
    ...improved.actions.map((action) => ({
      title: "Auto-correction applied",
      detail: action,
    })),
  ];

  renderList(
    elements.issuesList,
    combinedIssues,
    (item) => `<strong>${escapeHtml(item.title)}.</strong> ${escapeHtml(item.detail)}`,
    "No major issues detected.",
  );

  renderList(
    elements.vocabularyList,
    vocabulary,
    (item) =>
      `<strong>${escapeHtml(item.from)}</strong> to <strong>${escapeHtml(item.to)}</strong><br>${escapeHtml(item.reason)}`,
    "No vocabulary upgrades were suggested for this draft.",
  );

  renderList(elements.tipsList, tips, (item) => escapeHtml(item), "Keep practicing with new drafts to build confidence.");
  renderAnalysis(analysis);
  elements.pdfButton.disabled = false;
  saveSession(latestReport);
}

function printReport() {
  if (!latestReport) {
    return;
  }

  const issueMarkup = latestReport.issues
    .map((issue) => `<li><strong>${escapeHtml(issue.title)}.</strong> ${escapeHtml(issue.detail)}</li>`)
    .join("");
  const vocabMarkup = latestReport.vocabulary
    .map(
      (item) =>
        `<li><strong>${escapeHtml(item.from)}</strong> to <strong>${escapeHtml(item.to)}</strong>: ${escapeHtml(item.reason)}</li>`,
    )
    .join("");
  const tipsMarkup = latestReport.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("");

  const reportWindow = window.open("", "_blank", "width=900,height=1100");
  if (!reportWindow) {
    window.alert("Please allow pop-ups so the PDF report can open.");
    return;
  }

  reportWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>MasterWrite Report</title>
        <style>
          body {
            font-family: "Aptos", "Trebuchet MS", sans-serif;
            padding: 40px;
            color: #101828;
            line-height: 1.6;
          }
          h1, h2 {
            font-family: "Book Antiqua", "Palatino Linotype", serif;
            margin-bottom: 10px;
          }
          .badge {
            display: inline-block;
            padding: 8px 14px;
            border-radius: 999px;
            background: #d8f3ef;
            color: #0f766e;
            font-weight: 700;
            margin-bottom: 18px;
          }
          .section {
            margin-top: 28px;
          }
          .metrics {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
          }
          .metric {
            border: 1px solid #d0d5dd;
            border-radius: 14px;
            padding: 14px;
          }
          .metric strong {
            display: block;
            font-size: 1.3rem;
          }
          .draft {
            white-space: pre-wrap;
            padding: 18px;
            border-radius: 16px;
            background: #fff8ec;
            border: 1px solid #e4d7bd;
          }
        </style>
      </head>
      <body>
        <div class="badge">${escapeHtml(latestReport.trackLabel)} - ${escapeHtml(latestReport.modeLabel)} report</div>
        <h1>MasterWrite Performance Report</h1>
        <p><strong>Score:</strong> ${latestReport.score} - ${escapeHtml(latestReport.scoreInfo.band)}</p>
        <p>${escapeHtml(latestReport.scoreInfo.summary)}</p>

        <section class="section">
          <h2>Essay Analysis</h2>
          <div class="metrics">
            <div class="metric"><span>Words</span><strong>${latestReport.analysis.wordCount}</strong></div>
            <div class="metric"><span>Sentences</span><strong>${latestReport.analysis.sentenceCount}</strong></div>
            <div class="metric"><span>Average length</span><strong>${latestReport.analysis.avgSentenceLength}</strong></div>
            <div class="metric"><span>Paragraphs</span><strong>${latestReport.analysis.paragraphCount}</strong></div>
            <div class="metric"><span>Reading time</span><strong>${latestReport.analysis.readingTime} min</strong></div>
            <div class="metric"><span>Lexical variety</span><strong>${latestReport.analysis.lexicalVariety}</strong></div>
          </div>
        </section>

        <section class="section">
          <h2>Corrected Draft</h2>
          <div class="draft">${escapeHtml(latestReport.correctedText)}</div>
        </section>

        <section class="section">
          <h2>Detected Issues</h2>
          <ul>${issueMarkup || "<li>No major issues detected.</li>"}</ul>
        </section>

        <section class="section">
          <h2>Vocabulary Upgrades</h2>
          <ul>${vocabMarkup || "<li>No vocabulary upgrades were suggested for this draft.</li>"}</ul>
        </section>

        <section class="section">
          <h2>Coaching Tips</h2>
          <ul>${tipsMarkup || "<li>Keep practicing and compare new drafts over time.</li>"}</ul>
        </section>
      </body>
    </html>
  `);

  reportWindow.document.close();
  reportWindow.focus();
  setTimeout(() => reportWindow.print(), 300);
}

function loadSample() {
  const trackKey = getCurrentTrackKey();
  elements.input.value = trackKey === "en-us" ? modes[elements.modeSelect.value].sample : lessonTracks[trackKey].sample;
  updateCounts();
}

function clearEditor() {
  elements.input.value = "";
  latestReport = null;
  updateCounts();
  elements.correctedText.textContent = "Your corrected version will appear here after analysis.";
  elements.scoreValue.textContent = "--";
  elements.scoreBand.textContent = "Run an analysis to see your score";
  elements.scoreSummary.textContent =
    "Your report will highlight punctuation quality, grammar strength, vocabulary opportunities, and essay structure.";
  elements.scoreRing.style.setProperty("--score-angle", "0deg");
  elements.issuesList.innerHTML = "<li>Submit writing to see grammar and punctuation findings.</li>";
  elements.vocabularyList.innerHTML = "<li>Mode-based vocabulary suggestions will appear here.</li>";
  elements.tipsList.innerHTML = "<li>Use the sample button if you want to explore the report format first.</li>";
  elements.analysisList.innerHTML = `
    <div>
      <dt>Words</dt>
      <dd>0</dd>
    </div>
    <div>
      <dt>Sentences</dt>
      <dd>0</dd>
    </div>
    <div>
      <dt>Average length</dt>
      <dd>0</dd>
    </div>
    <div>
      <dt>Reading time</dt>
      <dd>0 min</dd>
    </div>
    <div>
      <dt>Paragraphs</dt>
      <dd>0</dd>
    </div>
    <div>
      <dt>Lexical variety</dt>
      <dd>0</dd>
    </div>
  `;
  elements.pdfButton.disabled = true;
}

elements.languageSelect.addEventListener("change", applyLessonTrack);
elements.lessonCards.forEach((card) => {
  card.addEventListener("click", () => {
    elements.languageSelect.value = card.dataset.language;
    applyLessonTrack();
  });
});
elements.modeSelect.addEventListener("change", setModeNote);
elements.input.addEventListener("input", updateCounts);
elements.analyzeButton.addEventListener("click", analyzeText);
elements.sampleButton.addEventListener("click", loadSample);
elements.clearButton.addEventListener("click", clearEditor);
elements.pdfButton.addEventListener("click", printReport);

elements.languageSelect.value = localStorage.getItem(lessonLanguageKey) || "en-us";
applyLessonTrack();
updateCounts();
renderHistory();
