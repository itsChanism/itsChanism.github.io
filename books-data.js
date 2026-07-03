/* ═══════════════════════════════════════════════════════════════════
   MY READING LIST
   ───────────────────────────────────────────────────────────────────
   This is the ONLY file you edit to add books. No need to touch
   books.html. Each book is one { ... } block inside the list below.

   To add a book:
     1. Copy an existing block (everything from { to } ).
     2. Paste it as a new block — blocks are separated by commas.
     3. Fill in the fields. Save, then commit + push in GitHub Desktop.

   Field guide:
     title       book title                      (required)
     titleEn     optional 2nd title shown beneath — for non-English books,
                 put the official English (or original) title here
     author      author's name
     translator  translator, or "" if you read the original language
     language    the language you read it in      e.g. "English", "中文"
     date        when you read it                 e.g. "Jul 2026" or "Currently"
     place       where you read or found it       e.g. "on a flight to Tokyo"
     status      "reading" | "finished" | "want"
     feeling     your after-reading reflection    ("" if not finished yet)
     cover       optional image file, or ""       e.g. "covers/dune.jpg"

   Tip: keep the quotation marks around each value. If your review text
   contains a quote, use curly “ ” instead of straight " marks.
   ═══════════════════════════════════════════════════════════════════ */

const BOOKS = [

  /* ===== example books (hidden — uncomment to show, or delete) =====
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    translator: "Jay Rubin",
    language: "English",
    date: "Feb 2026",
    place: "On the train between Rochester and Boston",
    status: "finished",
    feeling: "Quieter than I expected, and sadder. It lingered for days — I kept thinking about how memory reshapes the people we've lost.",
    cover: ""
  },

  {
    title: "The Phenomenology of Perception",
    author: "Maurice Merleau-Ponty",
    translator: "Donald A. Landes",
    language: "English",
    date: "Currently",
    place: "BEAR Lab reading corner",
    status: "reading",
    feeling: "",
    cover: ""
  }
  ===== end example books ===== */

  {
    title: "当机器人学会工作",
    titleEn: "The Machine Age: An Idea, a History, a Warning (Robert Skidelsky)",
    author: "罗伯特·斯基德尔斯基 (Robert Skidelsky)",
    translator: "",
    language: "Chinese",
    date: "Currently",
    place: "单向空间",
    status: "reading",
    feeling: "",
    cover: ""
  },

  {
    title: "What If... Collected Thought Experiments in Philosophy",
    author: "Peg Tittle",
    translator: "",
    language: "English",
    date: "Currently",
    place: "单向空间",
    status: "reading",
    feeling: "",
    cover: ""
  },

  {
    title: "人生的智慧",
    titleEn: "The Wisdom of Life (Arthur Schopenhauer; orig. Aphorismen zur Lebensweisheit)",
    author: "叔本华 (Arthur Schopenhauer)",
    translator: "",
    language: "Chinese",
    date: "Currently",
    place: "",
    status: "reading",
    feeling: "",
    cover: ""
  },

  {
    title: "努力哲学家的人生突围课",
    titleEn: "orig. 奴隷の哲学者エピクテトス・人生の授業 — lit. 'The Slave Philosopher Epictetus: Life Lessons' (no official English edition)",
    author: "荻野弘之 (Hiroyuki Ogino)",
    translator: "Xinrui Luo (罗昕蕊)",
    language: "Chinese",
    date: "Jun 29, 2026",
    place: "单向空间",
    status: "finished",
    feeling: "i hadn't read a book in a long time, for all sorts of reasons, or excuses. haha. but before the phd journey starts, i wanted to collect and clear my mind first.\n\nStoicism has been my inspiration for years. i started reading about it before college, and i still find it a genuinely useful life philosophy. not every rule, but most of the mindset, as a good place to begin if you want a calmer mind and a clearer sense of your own path. this one is an easy, entry level read, with even some comics, so it's never boring or hard, and it took me only a couple of hours. a good pick for anyone wanting to restart and gently remind themselves.\n\nwhat touched me most was the final chapter: that whatever role life hands me, i'll play it well, and bravely. less so the parts about examining your inner world, accepting death, or carpe diem. maybe because i'm in a hard stretch right now, for a lot of reasons. i used to wish i could meet someone like the 跛脚老人, the lame old sage who might knock on me in the moments i lose myself. but i've realized i've already met many of them. i want to live like 'a slave being released'. hahah. i'll keep moving forward.\n\nthe Stoicism book i read before this was William B. Irvine's A Guide to the Good Life: The Ancient Art of Stoic Joy (斯多葛哲学的生活艺术).",
    cover: ""
  }

  // ← add your next book here (put a comma after the } above first)

];
