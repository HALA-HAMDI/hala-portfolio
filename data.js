/*
  YOUR PORTFOLIO CONTENT — EDIT HERE!
  Add photos in assets/images/; legacy assets/media/ image paths also work.
  Example paths below document the data shape; see README.md for the current photo inventory:
  heroImages: ["assets/images/profile/hala.jpg"]
  aboutImages: ["assets/images/about/engineering-lab.jpg"]
  projects[0].images: [{ src: "assets/images/projects/fieldsense/overview.jpg", caption: "FieldSense overview" }]
  education[1].images: ["assets/images/education/ipein/ipein-01.jpg"] (IPEIN only)
  experience[0].companyLogo: "assets/images/companies/avempace/logo.jpg"
  experience[1].companyLogo: "assets/images/companies/tunisie-telecom/tunisie-telecom-logo.jpg"
  experience[0].images: ["assets/images/companies/avempace/internship.jpg"]
  certifications[0].images: ["assets/images/certificates/nvidia-rag/certificate.jpg"]
  leadership[0].images: ["assets/images/leadership/ieee-enit/team.jpg"]
  ambassador.images: ["assets/images/leadership/ieee-day-2025/ambassador.jpg"]
  violinImages: ["assets/images/violin/performance.jpg"]
  crochetImages: ["assets/images/crochet/product.jpg"]
  Add a caption with { src: "assets/images/about/lab.jpg", caption: "In the ENIT lab" }.
  Project, leadership, internship, and Ambassador photo arrays become interactive galleries.
*/
window.PORTFOLIO = {
  contactFormEndpoint: "",
  contactGithubUrl: "",
  heroImages: ["assets/images/profile/hala.jpg"],
  aboutImages: [],
  violinImages: ["assets/images/violin/performance.jpg"],
  crochetImages: ["assets/images/crochet/product.jpg"],
  skills: [
    {
      icon: "⌘",
      title: "Embedded & IoT",
      technologies: [
        { name: "ESP32", icon: "espressif", symbol: "chip", fallback: "E" },
        { name: "STM32", icon: "stmicroelectronics", symbol: "microchip", fallback: "ST" },
        { name: "Raspberry Pi", icon: "raspberrypi", symbol: "single-board", fallback: "Pi" },
        { name: "Arduino", icon: "arduino", symbol: "circuit", fallback: "A" },
        { name: "Embedded Linux", icon: "linux", symbol: "terminal", fallback: "L" },
        { name: "C", icon: "c", symbol: "code", fallback: "C" },
        { name: "C++", icon: "cplusplus", symbol: "code-plus", fallback: "C++" },
        { name: "MicroPython", displayName: "MicroPy", icon: "micropython", symbol: "snake", fallback: "Py" },
        { name: "UART", symbol: "serial", fallback: "U" },
        { name: "SPI", symbol: "spi", fallback: "SPI" },
        { name: "I2C", symbol: "i2c", fallback: "I2C" },
        { name: "Wi-Fi", symbol: "wifi", fallback: "Wi" },
        { name: "Bluetooth", icon: "bluetooth", symbol: "bluetooth", fallback: "B" },
        { name: "LoRa", symbol: "radio", fallback: "LoRa" }
      ]
    },
    {
      icon: "✳",
      title: "AI & Data",
      collapsedVisible: 9,
      technologies: [
        { name: "Python", icon: "python", symbol: "snake", fallback: "Py" },
        { name: "Machine Learning", icon: "scikitlearn", symbol: "network", fallback: "ML" },
        { name: "Edge AI", symbol: "edge-ai", fallback: "AI" },
        { name: "Reinforcement Learning", displayName: "Reinf. Learning", symbol: "reinforcement", fallback: "RL" },
        { name: "CLIP", symbol: "vision-text", fallback: "CLIP" },
        { name: "RAG", symbol: "retrieval", fallback: "RAG" },
        { name: "FAISS", symbol: "vector", fallback: "Fa" },
        { name: "LangGraph", displayName: "Lang Graph", symbol: "graph", fallback: "LG" },
        { name: "MCP", symbol: "protocol", fallback: "MCP" },
        { name: "Random Forest", symbol: "decision-tree", fallback: "RF" },
        { name: "TF-IDF", symbol: "term-frequency", fallback: "TF" },
        { name: "Cross-Encoder", symbol: "cross-encoder", fallback: "CE" },
        { name: "Gemini", icon: "googlegemini", symbol: "neural-network", fallback: "G" },
        { name: "Deep Learning", status: "Fundamentals", symbol: "neural-network", fallback: "DL" },
        { name: "Federated Learning", status: "Currently Learning", symbol: "federated-network", fallback: "FL" },
        { name: "Gradio", icon: "gradio", symbol: "sliders", fallback: "G", visibleWhenFits: true }
      ]
    },
    {
      icon: "◇",
      title: "Software & Backend",
      technologies: [
        { name: "Java", icon: "openjdk", symbol: "code", fallback: "J" },
        { name: "Java EE", symbol: "enterprise", fallback: "EE" },
        { name: "Servlets", symbol: "server", fallback: "S" },
        { name: "Node.js", icon: "nodedotjs", symbol: "node", fallback: "N" },
        { name: "REST APIs", symbol: "api", fallback: "API" },
        { name: "MySQL", icon: "mysql", symbol: "database", fallback: "SQL" },
        { name: "SQLite", icon: "sqlite", symbol: "file-database", fallback: "SQL" },
        { name: "MongoDB", icon: "mongodb", symbol: "documents", fallback: "M" },
        { name: "HTML", icon: "html5", symbol: "html", fallback: "5" },
        { name: "CSS", icon: "css", symbol: "stylesheet", fallback: "CSS" }
      ]
    },
    {
      icon: "↗",
      title: "Engineering Tools",
      collapsedVisible: 8,
      technologies: [
        { name: "Arduino IDE", icon: "arduino", symbol: "ide", fallback: "A" },
        { name: "STM32CubeIDE", displayName: "CubeIDE", symbol: "ide", fallback: "ST" },
        { name: "MATLAB", symbol: "plot", fallback: "M" },
        { name: "Proteus", symbol: "circuit-simulator", fallback: "P" },
        { name: "OptiSystem", symbol: "fiber", fallback: "OS" },
        { name: "TouchGFX", symbol: "touch", fallback: "TG" },
        { name: "Cisco Packet Tracer", displayName: "Packet Tracer", icon: "cisco", symbol: "network", fallback: "C" },
        { name: "OpenCV", icon: "opencv", symbol: "vision-text", fallback: "CV" },
        { name: "FFmpeg", icon: "ffmpeg", symbol: "encoding", fallback: "FF" },
        { name: "GStreamer", icon: "gstreamer", symbol: "media-pipeline", fallback: "GS" },
        { name: "H.265", symbol: "codec", fallback: "265" }
      ]
    }
  ],
  projects: [
    { title: "FieldSense", subtitle: "Smart Agriculture with IoT & Edge AI", category: "IoT", type: "END-TO-END SYSTEM", icon: "◎", color: "green", images: ["assets/images/projects/fieldsense/overview.jpg", "assets/images/projects/fieldsense/prototype.jpg", "assets/images/projects/fieldsense/dashboard.png"], report: "assets/fieldsense.pdf", description: "Designed an intelligent agriculture system using ESP32 and Raspberry Pi for real-time irrigation and pest detection, combining a REST API, dashboard and bidirectional LoRa communication.", tags: ["ESP32", "Raspberry Pi", "LoRa", "Python", "Random Forest", "SQLite"] },
    { title: "CircuitMind AI", subtitle: "A Multimodal Electronics Assistant", category: "AI", type: "AI APPLICATION", icon: "✳", color: "purple", images: ["assets/images/projects/circuitmind-ai/circuitmind-ai-01.jpg"], description: "Created an electronics assistant using CLIP for component identification, hybrid RAG for datasheet retrieval and LangGraph for guided diagnostics with an interactive Gradio interface.", tags: ["Python", "CLIP", "RAG", "FAISS", "LangGraph", "MCP", "Gradio"] },
    { title: "RFID Music Jukebox", subtitle: "Physical interaction meets sound", category: "IoT", type: "EMBEDDED SYSTEM", icon: "♫", color: "orange", images: ["assets/images/projects/rfid-music-jukebox/rfid-music-jukebox-01.jpg"], description: "Built an ESP32-based music player controlled through RFID cards, including UID reading, authorization checks and MP3 playback through an audio module.", tags: ["ESP32", "C/C++", "MFRC522", "UART", "SPI"] },
    { title: "Intelligent Video Surveillance System", subtitle: "Face-aware monitoring", category: "AI", type: "COMPUTER VISION", icon: "◉", color: "green", images: ["assets/images/projects/smart-video-surveillance/smart-video-surveillance-01.jpg"], description: "Developed a facial detection and recognition system that emails alerts for unknown people and generates PDF attendance reports for instructors.", tags: ["Python", "OpenCV", "Face Recognition", "Email", "PDF"] },
    { title: "Optical WDM Link Simulation", subtitle: "Modeling communication performance", category: "Telecom", type: "OPTICAL COMMUNICATIONS", icon: "⌁", color: "purple", layout: "compact-report", images: ["assets/images/projects/optical-wdm-link/optical-wdm-link-01.jpg", "assets/images/projects/optical-wdm-link/optical-wdm-link-02.png"], report: "assets/wdm-optical-link.pdf", description: "Modeled and simulated an optical WDM link, comparing 2-, 4- and 8-user configurations and analyzing signal quality and bit error rate.", tags: ["OptiSystem", "WDM", "Optical Networks"] }
  ],
  experience: [
    { date: "2-MONTH INTERNSHIP", title: "Engineering Intern", company: "Avempace Technologies", companyLogo: "assets/images/companies/avempace/logo.jpg", desc: "Studied and implemented a low-latency, high-resolution embedded audio/video transmission chain over optical fiber, working with H.265, GStreamer and FFmpeg.", images: ["assets/images/companies/avempace/internship.jpg"] },
    { date: "1-MONTH INTERNSHIP", title: "Telecommunications Intern", company: "Tunisie Telecom", companyLogo: "assets/images/companies/tunisie-telecom/tunisie-telecom-logo.jpg", desc: "Gained exposure to a professional telecommunications environment and the company's operations.", images: [] }
  ],
  education: [
    { date: "2024–2027", title: "Telecommunications Engineering", company: "National Engineering School of Tunis (ENIT)", location: "Tunis", desc: "Specializing in IoT and Security. Currently studying embedded systems, connected technologies, and Edge AI, alongside coursework in AI for IoT, Federated Learning, Building IoT, and RFID Applications.", images: [] },
    { date: "2023–2024", title: "Second year · Mathematics-Physics preparatory cycle", company: "Preparatory Institute for Engineering Studies of Nabeul (IPEIN)", location: "Nabeul", desc: "Successfully passed the national competitive entrance examination for engineering schools in the MP track, ranking 191st out of more than 1,500 candidates.", achievement: "191st / 1,500+ · MP national entrance examination", achievementType: "ranking", photoSlot: true, images: ["assets/images/education/ipein/ipein-01.jpg"] },
    { date: "2022–2023", title: "First year · Mathematics-Physics preparatory cycle", company: "Preparatory Institute for Engineering Studies of Bizerte (IPEIB)", location: "Bizerte", desc: "Built a strong foundation in mathematics and physics, ranking among the top 5 out of 90 students.", achievement: "Top 5 / 90 students", achievementType: "ranking", images: [] },
    { date: "2022", title: "Baccalaureate in Mathematics", company: "Lycée Mohamed Boudhina", location: "Hammamet", desc: "Earned my Baccalaureate in Mathematics.", achievement: "Mathematics Baccalaureate", achievementType: "credential", images: [] }
  ],
  certifications: [
    { issuer: "NVIDIA", title: "Building RAG Agents with LLMs", images: ["assets/images/certificates/nvidia-rag/certificate.jpg"] },
    { issuer: "NVIDIA", title: "Rapid Application Development with LLMs", images: ["assets/images/certificates/nvidia-llm/certificate.jpg"] },
    { issuer: "Cisco", title: "CCNA: Introduction to Networks", images: ["assets/images/certificates/cisco-ccna/certificate.jpg"] },
    { issuer: "STMicroelectronics", title: "STM32 Hardware-Software Vibes", images: ["assets/images/certificates/stm32-training/stm32-training-certificate.jpg"] }
  ],
  leadership: [
    { title: "IEEE ENIT Student Branch", role: "Former Secretary", date: "2025 MANDATE", icon: "✳", color: "blue", logoText: "IEEE ENIT", logoMedia: "", images: ["assets/images/leadership/ieee-enit/team.jpg", "assets/images/team-02.jpg", "assets/images/team-03.jpg"], desc: "Supported student branch coordination, communications and media initiatives." },
    { title: "WiE ACT 4.0", role: "Media Manager", date: "WOMEN IN ENGINEERING", icon: "◈", color: "pink", logoText: "WiE / ACT 4.0", logoMedia: "", images: ["assets/images/leadership/wie-act-4/wie-act-4-01.jpg"], desc: "Led media activities for Tunisia's Women in Engineering Annual Congress." },
    { title: "PESTGM 6.0", role: "Branding Co-Team Lead", date: "POWER & ENERGY", icon: "ϟ", color: "orange", logoText: "PES / TGM 6.0", logoMedia: "", images: ["assets/images/leadership/pestgm-6/pestgm-6-01.jpg"], desc: "Co-led branding for the Power & Energy Society Tunisia General Meeting." },
    { title: "SIGHT Day Congress 5.0", role: "Program Team Lead", date: "UPCOMING · APRIL", icon: "◎", color: "green", logoText: "IEEE SIGHT / 5.0", logoMedia: "", photoFree: true, images: [], desc: "Leading the program team for the upcoming fifth SIGHT Day Congress." },
    { title: "Tunisian Engineering Day 8.0", role: "Media Co-Team Lead", date: "TUNED 8.0", icon: "↗", color: "purple", logoText: "TunED / 8.0", logoMedia: "", images: ["assets/images/leadership/tuned-8/tuned-8-01.jpg"], desc: "Co-leading media efforts for the eighth Tunisian Engineering Day." }
  ],
  ambassador: {
    title: "IEEE Day 2025",
    role: "Ambassador",
    date: "GLOBAL COMMUNITY",
    icon: "✳",
    color: "blue",
    logoText: "IEEE DAY",
    images: ["assets/images/leadership/ieee-day-2025/ambassador.jpg"],
    rankings: ["Top 2 · Region 8", "Top 5 · Global ambassador program"],
    desc: "Served as an IEEE Day 2025 Ambassador, earning recognition in the regional and global ambassador program."
  }
};
