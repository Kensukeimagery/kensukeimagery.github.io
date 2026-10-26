// =============================================================
//  日本語訳 (Japanese translations) — 日本語の文章はすべてこのファイルにまとめています
//  ここだけ確認・修正すれば日本語ページに反映されます。
//  Every Japanese string lives in this one file so it can be proofread in one place.
//  Missing entries automatically fall back to English (see t() in i18n.js).
//  NOTE: written by an AI — please have a native speaker review before relying on it.
// =============================================================

/** attach translations to an existing {th, en} tree: deepAdd(target, ja) */
export function deepAdd(target, ja) {
  if (target == null || ja == null) return;
  for (const [k, v] of Object.entries(ja)) {
    const leaf = typeof v === 'string' || Array.isArray(v);
    if (leaf) {
      if (target[k] && typeof target[k] === 'object' && !Array.isArray(target[k])) target[k].ja = v;
    } else deepAdd(target[k], v);
  }
}

/** org name used as a stable key for experience entries */
export const orgKey = (e) => (typeof e.org === 'string' ? e.org : e.org.en);

// ---------- UI strings (keys match `ui` in i18n.js) ----------
export const uiJa = {
  nav: { home: 'ホーム', works: '実績', profile: 'プロフィール＆履歴書', gallery: 'ギャラリー', contact: 'お問い合わせ' },
  viewWorks: '実績を見る',
  contactMe: 'ケンに依頼する',
  selected: '注目の実績',
  allWorks: 'すべての実績を見る',
  brandsTitle: 'これまでご一緒したブランド',
  about: 'ケンについて',
  readProfile: 'プロフィール＆履歴書',
  galleryTeaser: 'フィルムレンズ越しの景色',
  galleryTeaserText: '趣味で撮っているフィルム写真。Olympus OM-1とXA2で、バンコクから日本までの風景を収めました。',
  openGallery: 'ギャラリーを開く',
  comingSoon: '近日公開',
  play: '動画を再生',
  watchOn: '視聴先：',
  references: '参考リンク',
  worksTitle: '実績',
  worksLead: 'CM、ライブコマース、司会、演技の実績です。動画をタップして視聴できます（TikTokやInstagramに移動するものもあります）。',
  profileTitle: 'プロフィール＆履歴書',
  compCard: 'コンポジットカード',
  age: '年齢',
  years: '歳',
  height: '身長',
  weight: '体重',
  measurements: 'サイズ',
  shoe: '靴のサイズ',
  experience: '職歴',
  groups: { full: 'キャリアの歩み', freelance: 'フリーランス・契約', other: 'その他の経験', intern: 'インターンシップ' },
  education: '学歴',
  awards: '受賞歴',
  skills: 'スキル',
  hobbies: '趣味',
  print: '履歴書をダウンロード (PDF)',
  portfolioPdf: 'ポートフォリオをダウンロード (PDF)',
  portfolioOnline: 'ポートフォリオをオンラインで見る',
  skip: 'メインコンテンツへ移動',
  pauseSlides: 'スライドショーを一時停止',
  playSlides: 'スライドショーを再開',
  projectFree: '無料・オープンソース',
  projectDownload: '無料ダウンロード (ZIP)',
  projectDocs: 'マニュアル (PDF)',
  printPng: '画像でダウンロード (PNG)',
  galleryTitle: 'ギャラリー',
  portraits: 'ポートレート',
  film: 'フィルム写真',
  portraitsLead: 'プロフィール写真とファッションポートレート',
  filmLead: '趣味のフィルム写真',
  contactTitle: 'ケンと一緒にお仕事を',
  contactLead: '演技、イベント、司会（MC）、ライブコマース、モデルのご依頼を承ります。パソコンの修理・アップグレード・自作PCのご相談も可能です。お気軽にご連絡ください。',
  dm: 'Instagramでメッセージ',
  email: 'メールを送る',
  support: 'チャンネルを応援する',
  rights: '無断転載を禁じます',
  menu: 'メニュー',
  close: '閉じる',
  prev: '前へ',
  next: '次へ',
  scroll: 'スクロール',
  carouselHint: 'スワイプで閲覧、動画をタップすると視聴できます。',
  details: '詳細',
  languages: '言語',
  skillsLead: '強み',
  resumeOnline: '履歴書をオンラインで見る',
  careerPath: 'キャリアの変遷',
  brandPath: '担当したブランド（順番）',
  current: '現在',
  brandsHosted: '担当したブランド',
  projects: '個人プロジェクト',
  projectsLead: '自分用に作り、無料で公開しているITの趣味プロジェクト',
  viewProject: 'GitHubで見る',
  duties: '担当業務',
  fullTime: '正社員',
  partTime: 'パートタイム',
  available: '依頼受付中',
  servicesEyebrow: 'サービス',
  servicesTitle: 'ケンに依頼できること',
  servicesLead: 'サービスをタップすると、その実績例が見られます。',
  seeExamples: '実績例を見る',
  itEyebrow: '対応可能',
  itTitle: 'パソコンサービス',
  itLead: '修理・メンテナンス・アップグレード・自作PCまで。IT分野の学歴と、パソコン販売の現場経験に基づいて対応します。',
  itMore: 'パソコンサービスの詳細',
  itArea: '対応エリア',
  itHow: 'ご利用の流れ',
  itWhy: 'ケンが選ばれる理由',
  askTalent: '出演・MCのご相談',
  askIt: 'パソコンサービスのご相談',
  offers: '対応可能',
  openTiktok: 'TikTokで見る',
};

// ---------- profile.js ----------
export const personJa = {
  roles: ['ライブコマースMC', '広告タレント', 'イベントMC'],
  intro: 'ITと営業のバックグラウンドを持つライブコマースMC・広告タレント。ライフスタイル、ファッション、ガジェットのブランドの商品を、しっかりとした理解をもとに魅力的に紹介します。',
  about: [
    '現在はTechland Technology (Thailand)に所属するライブコマースMCとして、Joyroom、Samsonite、UGREEN、Skechersなどのブランドのライブ販売を担当し、ブランドCMにも出演しています。',
    '情報技術の知識と、店頭販売からB2Bの案件入札まで幅広い営業経験があるため、技術的な製品も分かりやすく説明し、視聴者の反応を読み取りながら販売につなげます。',
    'オフの日は、フィルム写真、音楽、読書を楽しんでいます。',
  ],
  skills: ['ライブコマースの司会', 'カメラ前での商品紹介', 'CM出演・モデル', 'イベント・eスポーツMC', '営業・案件入札', 'ITサポート・ハード'],
  hobbies: ['フィルム写真', '音楽', '読書'],
};

export const highlightsJa = ['提携したブランド数', 'ライブ配信の経験年数', '受注した案件の規模', '身長'];

/** experience entries, keyed by orgKey() */
export const expJa = {
  'Giga Live Co., Ltd.': { role: 'ライブコマースMC（契約）', note: '本業と並行するパートタイム' },
  'Techland Technology (Thailand) Co., Ltd.': {
    role: 'ライブ配信MC',
    note: '会社からお声がけいただき、最も得意とする営業とライブの仕事に復帰',
    points: ['現在はJOYROOM（ガジェット）の専属ライブホスト', 'SAMSONITE、TECNO Mobile、POSEEのCMにタレントとして出演'],
  },
  'ARA COFFEE (Lasalle 52)': { role: 'バリスタ' },
  'Phokhawadee Coffee and Bar (De Bottan Bangna branch)': { role: 'バリスタ', note: 'いつか自分のカフェを開くため、バリスタの技術を磨いています' },
  'The City Wave · JAS Urban Srinakarin': { role: 'アシスタントバーテンダー（ルーフトップバー）', note: '接客業で新しいことに挑戦' },
  'Devas IPASON Co., Ltd.': {
    role: 'セールスエグゼクティブ',
    duties: ['顧客チャット対応（管理）', '営業', '営業チームのリーダー', '商品管理', '商品トレーナー'],
    points: [
      'チャチューンサオのセントルイス学校向けIT案件（150万バーツ）を入札で受注',
      'ライブ販売・プロモーション・キャンペーンの司会を担当',
      'シーパトゥム大学でのValorant大会でeスポーツMCを担当',
    ],
  },
  'IT City Public Co., Ltd.': { role: '店舗販売スタッフ', note: '卒業後、初めての正社員の仕事', duties: ['販売', 'レジ', 'パソコン技術者'] },
  'CIMB Thai': { role: 'マスコット「Reminder Man」を演じるパフォーマー' },
  'ENTAKU Exhibition': { role: '展覧会「อยากอวยให้ทุกครั้ง」のメインモデル', when: '2026年10月14日～11月4日', note: '写真は2026年9月18日撮影' },
  'PERSOL Thailand': { role: 'インタビューコンテンツの出演者（グラフィックデザイナー役）' },
  'Spica Hair Design': { role: 'ヘアモデル', when: '2026年9月22日' },
  'Commart': { role: 'ブース販売・商品紹介（Razer、EPOS、Thermaltake、IPASON）' },
  'BIG Motor Sale 2017': { role: 'ヒュンダイブースでの接客・車両案内' },
  'Siam Gas and Petrochemicals PCL': { role: 'ITサポート（インターン）' },
  'Mitsib Leasing PCL (Head Office)': { role: 'ITサポート（インターン）' },
};

export const eduJa = [
  { level: '高等職業教育ディプロマ（高級職業資格）', major: '情報技術' },
  { level: '職業教育修了証（職業資格）', major: 'ビジネスコンピュータ' },
];

export const awardsJaExtra = [
  {
    event: 'Thailand Innovation・ソフトウェア＆組み込みシステム部門',
    team: '学生チームの作品（バンナー商業カレッジ・ディプロマ課程）',
    facts: ['24時間いつでも、スタッフなしで印刷できる', 'Google OAuthでログイン', 'A4用紙に印刷'],
    problem: '課題：多くの印刷店は営業時間外は閉まっており、機械を管理するスタッフの人件費も高い。そこで、利用者が昼夜を問わず自分で印刷できる仕組みを作りました。',
    steps: ['QRコードまたはサイトから会員登録（試用クレジット10バーツ付き）', 'PDF・JPG・PNGファイルをアップロード', '印刷用のバーコードを受け取る', 'セルフサービスプリンターでスキャン（またはコード入力）して受け取り'],
    stats: { 0: { label: '利用者の総合満足度' }, 1: { label: '使いやすさ（最高評価）' }, 2: { label: '機械の性能' } },
    stack: 'PHP・JavaScript・Bootstrapで開発 · プロジェクト全体の予算：10,000バーツ',
  },
  {
    team: '学生チームの作品（バンナー商業カレッジ・職業課程）',
    facts: ['長さ2m、地面から高さ1.30m', '雨を検知するセンサーで、雨が降ると自動で洗濯物を取り込む', '太陽光発電とバックアップ用バッテリーで動作'],
  },
];

export const awardsJa = [
  { title: 'Bangna Print Service — セルフサービス式の文書印刷システム', event: 'Thailand Innovation・生活の質を高める発明部門', results: ['県大会 優勝', '中部地方大会 優秀賞（銀）'] },
  { title: '自動物干しシステム', event: 'Thailand Innovation・生活の質を高める発明部門', results: ['入賞'] },
];

// ---------- services.js ----------
export const itServicesJa = [
  { title: 'パソコン修理', desc: '起動しない・動作が遅い・落ちるなど、ハードとソフトの不具合を診断して修理します' },
  { title: 'メンテナンス・クリーニング', desc: '清掃、サーマルペーストの塗り直し、ソフトの設定、家庭や小規模オフィスのパソコン管理' },
  { title: 'アップグレード', desc: 'メモリ、SSD、GPUの増設・交換を、予算に合わせてご提案します' },
  { title: '自作・カスタムPC', desc: 'ゲーム、仕事、配信向けの新しいPCの構成選びと組み立て' },
];
export const itStepsJa = [
  '症状・機種名・ご希望のスペックをInstagramのメッセージで送る',
  '見積り（出張費を含む）を受け取る',
  '日時を予約 — 訪問対応またはお預かり',
  '修理・アップグレード・組み立てを行い、動作確認をしてからお渡し',
];
export const serviceAreaJa = 'バンコク、サムットプラーカーン県および周辺の県。MRTシーベーリング駅（イエローライン）周辺とBTS/MRT沿線が最も対応しやすく、その他のエリアはご相談ください（出張費は事前に決定します）';
export const talentServicesJa = [
  { title: '演技・CM', desc: 'CM、ブランドコンテンツ、オンライン動画' },
  { title: 'イベント', desc: 'ブース、商品デモ、パフォーマンス、ローンチイベント' },
  { title: 'MC・司会', desc: 'イベント、大会、eスポーツの司会' },
  { title: 'ライブコマース', desc: 'TikTok、Shopee、Lazadaでのライブ販売' },
  { title: 'モデル', desc: '商品・ファッション・ヘアモデル · 185 cm' },
];

// ---------- projects.js ----------
export const projectsJa = [
  {
    tagline: 'Windows 11のゲーミングPCを、壊す不安なしでチューニング。',
    desc: 'Windows 11のゲーミング向け設定を、透明性を重視して最適化するWindowsアプリとスクリプト集。変更はすべて読みやすい.regファイルで、事前にバックアップを取り、1つずつ元に戻せます。調整の前後を測定し、スタートアップの管理、ディスクの空き容量確保、ドライバー確認もでき、NVIDIAドライバー設定のステップ別ガイドとタイ語・英語のマニュアルも付属します。',
    points: [
      '1ウィンドウのアプリ（Win11 Optimizer.exe）。インストール不要で、Easy Setupを押せば正しい順番ですべて実行、または調整を1つずつ切り替え可能',
      '最初に復元ポイントを作成。すべての調整に専用の元に戻すファイル付き',
      '調整の前後でPCを測定。Windowsと一緒に起動するプログラムをオフにでき（削除はしません）、一時ファイルは「はい」と答えたときだけ削除',
      '確認後に自己更新（SHA-256検証つき）。コードを変更するたびに自動テストが実行されます',
      'アプリのソースコード（C#約1,800行）を公開。ファイルは削除せず、ゲームファイルにも触れず、個人データも送信しません',
    ],
    facts: { 0: { label: '元に戻せる調整項目' }, 1: { label: '最新バージョン' }, 2: { label: 'アプリとマニュアル（タイ語・英語）' } },
    note: '正直なところ、FPSの向上はわずかで、ゲームによって異なります。GPUドライバー、ゲーム内設定、冷却のほうがずっと重要なので、数値の約束はしません。',
  },
  {
    tagline: 'スピーカーをスリープさせず、着信の最初の呼び出し音を逃さない。',
    desc: '無音が続くと自動でスタンバイに入るスピーカー（Microlab Solo 29など）が眠らないよう、小さな信号を一定間隔で再生するWindowsのタスクトレイアプリ。標準設定は、ほとんどの大人には聞こえない20kHzの超音波パルスです。',
    points: [
      '7つの信号モード（固定パターンを信用しなくなるスピーカー向けのシャッフルを含む）。周波数・レベル・パルス長・間隔を調整可能',
      '稼働時間のスケジュール、出力デバイスの選択、音楽や通話中の自動一時停止',
      'Windowsと一緒に起動可能。タイ語・英語の画面に対応',
      'オープンソース。アカウント不要、ネット接続なし、データ収集なし',
    ],
    facts: { 0: { label: '信号モード' }, 1: { label: 'アプリの言語' }, 2: { label: 'オープンソース・無料' } },
    note: 'スピーカーの機種によって結果は異なります。モードと設定をスピーカーに合わせて調整すれば効果が得られます（開発者がMicrolab Solo 29で動作確認済み）。調整方法はガイドに記載しています。',
    downloadLabel: '無料ダウンロード (Windows)',
    docsLabel: '使い方を読む',
  },
  {
    tagline: 'NetflixやDisney+をDiscordで画面共有しても、黒い画面にならない。',
    desc: 'WindowsのMicrosoft Edgeを起動するランチャーで、Discordなどの画面キャプチャが黒くなる原因であるPlayReadyハードウェアDRMだけをオフにします。GPUはフルに動作するので、グラフィックアクセラレーションをオフにする必要はありません。ダブルクリック1回でインストールできます。',
    points: [
      'オフにするのはハードウェアDRMだけで、GPUはそのまま。アクセラレーションをオフにしたときのような他サイトのカクつきがありません',
      '3ステップでインストールし、デスクトップにEdge（Stream-safe）のショートカットを作成。Uninstall.batで削除できます',
      'ハードウェアDRMがオフかどうかを表示し、配信サイトで知らせる小さな拡張機能つき',
      '本物のNetflixアカウントのEdge 156で検証：通常モードではキャプチャが黒く、Stream-safeモードでは映り、1080pでも再生できました',
      'どのブラウザで検証済みかを正直に示す表つき。Chrome、Vivaldiなど他のブラウザ向けには、自分で試せるランチャーモードがあります',
    ],
    facts: { 0: { label: 'インストール手順' }, 1: { label: 'Netflixは再生可能' }, 2: { label: 'オープンソース・無料' } },
    note: '自分の画面を友人と共有するための用途で、コンテンツのコピーを目的としたものではありません。Netflixの4K/HDRはこのモードでは再生できず、これまでに検証したのはWindows 11のEdgeのみ。Discordでの実際の結果はユーザーからの報告待ちです。',
    downloadLabel: '無料ダウンロード (Windows)',
    docsLabel: '使い方を読む',
  },
];

// ---------- works.js ----------
export const categoriesJa = {
  all: 'すべて',
  acting: '演技・広告',
  model: 'モデル',
  mc: 'MC・司会',
  short: 'ショート動画・コンテンツ',
  bts: '舞台裏',
  business: '営業・IT',
};

export const worksJa = {
  samsonite: {
    title: 'バッグのCM — 出演タレント',
    desc: 'ミニマルなビジネススタイルで、JERALDとUNDERSCOREのコレクションを紹介。ブランドのTikTokチャンネル向けです。',
    labels: ['JERALD バックパック', 'JERALD ブリーフケース', 'UNDERSCORE'],
  },
  cimb: {
    title: 'マスコット「Reminder Man」を演じるパフォーマー',
    desc: 'キャンペーン「しっかり覚えて、債券ならCIMB THAIアプリ」— 銀行のCMで、Reminder Manが街を歩いて呼びかけます。',
    labels: ['Reminder Man CM'],
  },
  persol: { title: 'インタビューコンテンツの出演者（グラフィックデザイナー役）' },
  tecno: { title: 'スマートフォン Pova 8 Pro／Pova 8 のCM' },
  posee: { title: 'フットウェアのCM' },
  spica: { title: 'ヘアモデル', desc: '2026年9月22日にヘアモデルとして施術を受けました' },
  entaku: {
    title: '展覧会コンテンツのメインモデル「อยากอวยให้ทุกครั้ง」',
    desc: '会場：Palette Artspace（3～4階）、2026年10月14日～11月4日 · 写真は2026年9月18日撮影',
  },
  'live-mc-techland': {
    title: '専属ライブコマースMC',
    desc: '現在はJoyroom（ガジェット）の専属ホスト。これまでSAMSONITE、UGREEN、Skechers、POSEE、Qiaodan、AKASO、SOLOEVER、Bousvclightのライブ販売も担当しました。',
    labels: ['JOYROOM ライブ・10.10セール', 'JOYROOM ライブ・商品紹介', 'ライブ例 1', 'ライブ例 2'],
  },
  'giga-live': { title: 'ライブコマースMC（契約）', desc: '契約期間：2026年8月1日～12月31日' },
  valorant: { title: 'シーパトゥム大学でのValorant大会MC' },
  commart: { title: 'ブース販売・商品紹介', desc: 'Razer、EPOS、Thermaltake、IPASONのブース' },
  'ipason-live': { title: 'ライブ販売ホスト — プロモーション・キャンペーン', labels: ['ライブ開始前'] },
  livelab: { title: '会社紹介のショート動画' },
  'ipason-short': { title: 'IT製品のプロモーションショート' },
  'samsonite-bts': { title: 'CM撮影の舞台裏', desc: 'SAMSONITE撮影現場のメイキングVlogです。' },
  standin: { title: 'ライブ番組の照明・カメラテスト用スタンドイン' },
  'st-louis': {
    brand: 'セントルイス学校（チャチューンサオ）',
    title: '150万バーツのIT案件を入札で受注',
    desc: '学校のコンピュータ教室一式を入札し、納入しました。',
    labels: ['納入したコンピュータ教室'],
  },
};

// ---------- small inline strings used in views ----------
export const miscJa = {
  proud: '誇れる実績',
  projectsCount: '件の実績',
  withCompany: '企業：',
  resumeTitle: '履歴書',
  resumeProfile: '自己紹介',
  resumeFoot: '動画・写真の実績はこちら',
  resumeOffers: '演技・イベント・MC・ライブ販売・モデル',
  resumeIt: 'パソコン修理・メンテナンス・アップグレード・自作',
  pfSelected: '注目の実績',
  pfLead: '各実績の下のリンクから、元の動画をご覧いただけます',
  pfPhotos: '写真',
  pfWork: 'ケンとお仕事をしませんか',
  pfFull: '実績の全体はこちら',
  pfDownload: 'ポートフォリオをダウンロード (PDF)',
  langName: '日本語',
};

// extra award details (kept next to the base translations)
awardsJa.forEach((a, i) => Object.assign(a, awardsJaExtra[i]));
