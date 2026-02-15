// ════════════════════════════════════════════════════════
//  FORTIFIED FREEDOM NETWORK ROADMAP DATA
// ════════════════════════════════════════════════════════
//
//  status options:  "completed"  |  "in-progress"  |  "upcoming"
//
var FFN_ROADMAP_CONFIG = {
  title: "Our Roadmap",
  subtitle: "Follow our journey as we build toward our vision — one milestone at a time. These roadmap item are subject to chage",
  milestones: [
    // ═══════════════════════════════════════════════════════
    // MILESTONE 1: Foundation
    // ═══════════════════════════════════════════════════════
    {
      title: "Foundation",
      date: "Q4 2025",
      status: "completed",
      description: "Establish the core team, define mission and values, and lay the organizational groundwork.",
      items: [
        "Assemble founding team",
        "Define mission statement",
        "Establish core services",
        "Set up legal structure"
      ],
      detailedDescription: "During Q4 2025 we brought together a multidisciplinary founding team—JT, Steph, and Jenn—united by our shared experiences and commitment to education over retaliation. We ratified our mission and values charter around the core philosophy of helping survivors identify manipulation patterns rather than seeking revenge. We established Fortified Media as our first business entity and began weekly vision and planning meetings to map out the Fortified Freedom Network.",
      detailedItems: [
        "Assembled founding team across operations, content creation, and documentation",
        "Conducted mission & values workshop establishing 'education over retaliation' philosophy",
        "Established Fortified Media business structure",
        "Secured domains: fortifiedfreedom.org and filterparent.io",
        "Set up Google Workspace and Google Cloud Platform infrastructure",
        "Created brand identity: shield (protection), feather (freedom), quill (truth)",
        "Initiated weekly founder meetings and strategic planning sessions"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 2: Brand & Content
    // ═══════════════════════════════════════════════════════
    {
      title: "Brand & Content",
      date: "Q1 2026",
      status: "in-progress",
      description: "Record podcast episodes, build our website, and create content library for launch.",
      items: [
        "Record 10+ podcast episodes",
        "Build website on fortifiedfreedom.org",
        "Create short-form content library",
        "Establish production workflow"
      ],
      detailedDescription: "In Q1 2026 we're deep in production mode—recording our founder story episodes, expert interviews, and building the content foundation that will fuel our launch. We're setting up our website, refining our equipment and workflows, and creating a library of short-form content. This is the quiet but critical phase where we're building the quality and authenticity that will define the Fortified Freedom Network.",
      detailedItems: [
        "Recording founder story episodes (Episodes 2-6: Steph, Jenn, JT personal journeys)",
        "Recording expert interviews (Karlie Paige and others in pipeline)",
        "Building 10+ episode buffer for weekly podcast releases",
        "Designing and launching website on fortifiedfreedom.org",
        "Setting up podcast equipment and production workflow",
        "Creating initial short-form content for TikTok launch",
        "Refining brand voice and messaging across all platforms",
        "Preparing launch marketing materials and strategy"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 3: Podcast Launch
    // ═══════════════════════════════════════════════════════
    {
      title: "Podcast Launch",
      date: "Q2 2026",
      status: "upcoming",
      description: "Launch the Fortified Podcast on YouTube and begin building our community through education.",
      items: [
        "Launch podcast on YouTube (April 2026)",
        "Begin weekly episode releases",
        "Start daily short-form content",
        "Grow initial community"
      ],
      detailedDescription: "In Q2 2026 we're launching the Fortified Podcast on YouTube—the #1 watched platform in America. Starting with our founder vision meeting as Episode 1, followed by our personal stories and expert interviews, we're committing to weekly releases. Simultaneously, we're launching daily short-form content on TikTok to reach survivors where they are and begin building the credibility that will support all future initiatives.",
      detailedItems: [
        "Launched Fortified Podcast on YouTube with 10+ episode buffer",
        "Established weekly release schedule (specific day/time TBD)",
        "Published Episode 1: Founder vision meeting",
        "Released founder story episodes establishing credibility",
        "Launched daily short-form content on TikTok (minimum 1 video/day)",
        "Began building initial community and engagement",
        "Implemented SEO strategy for discoverability",
        "Created podcast chapter markers for mid-form content extraction"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 4: Platform Expansion
    // ═══════════════════════════════════════════════════════
    {
      title: "Platform Expansion",
      date: "Q3 2026",
      status: "upcoming",
      description: "Expand our reach across multiple platforms, grow our following, and recruit experts for our network.",
      items: [
        "Launch on Instagram and Facebook",
        "Implement content automation",
        "Recruit experts and coaches",
        "Launch donations page",
        "Grow to 500+ community members"
      ],
      detailedDescription: "In Q3 2026 we're expanding beyond YouTube and TikTok to Instagram and Facebook, meeting survivors on the platforms they already use. We're implementing automation tools to efficiently manage cross-platform content while maintaining authentic engagement. Critically, we're also recruiting licensed counselors, therapists, life coaches, and subject matter experts who will become integral to our podcast content and future platform offerings. We're launching our donations page, allowing supporters to fund the mission. Our goal is building a community of 500+ active members alongside a network of vetted professionals.",
      detailedItems: [
        "Launched Instagram and Facebook channels",
        "Implemented Repurpose.io for automated cross-posting to Instagram Reels, YouTube Shorts, and Facebook",
        "Established content moderation workflows using Agorapulse",
        "Recruited licensed counselors, therapists, and life coaches for platform network",
        "Invited experts onto podcast for interviews and educational content",
        "Launched donations page on website for mission support",
        "Began building recurring donor base",
        "Grew active community to 500+ members across all platforms",
        "Collected baseline engagement metrics and audience insights",
        "Began testing mid-form content (10-15 minute podcast segments)",
        "Created expert vetting process and partnership framework"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 5: Private Social Network & Partnership Ecosystem
    // ═══════════════════════════════════════════════════════
    {
      title: "Private Social Network & Partnership Ecosystem",
      date: "Q3-Q4 2026",
      status: "upcoming",
      description: "Build and launch our private community platform while formalizing partnerships to create the complete survivor support pipeline.",
      items: [
        "Build custom social platform",
        "Partner with other DV organizations",
        "Launch monthly expert Q&A calls",
        "Establish technology integrations"
      ],
      detailedDescription: "Starting in Q3 2026, we begin building our private community platform on open-source software while simultaneously negotiating partnerships with organizations like DVRR. This development phase runs parallel to our platform expansion work, with our technical team building the infrastructure and partnership framework. In Q4 2026, we launch the platform to members—providing a safe space behind a $4.99/month paywall (with sponsorships available)—and formalize our partnership agreements. The experts recruited in Milestone 4 are now available for monthly member Q&A calls, and technology integrations allow survivors to flow seamlessly through the complete pipeline: rescue → safety → healing → community → career.",
      detailedItems: [
        "Q3 2026 - Development Phase: Began building custom social platform on open-source foundation",
        "Negotiated partnership agreements other DV organizations",
        "Designed technology integration architecture for partner handoffs",
        "Developed moderation systems and reporting mechanisms",
        "Created verification process and membership framework",
        "Established pricing tier with sponsorship program structure",
        "Q4 2026 - Launch Phase: Launched platform to first members",
        "Formalized and signed partnership agreements",
        "Deployed technology integrations with partner platforms",
        "Initiated monthly live expert Q&A calls with recruited professionals",
        "Launched quarterly founder vision meetings for member transparency",
        "Activated self-moderating community culture",
        "Established complete survivor pipeline from rescue through healing"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 6: FilterParent MVP
    // ═══════════════════════════════════════════════════════
    {
      title: "FilterParent MVP",
      date: "Q1 2027",
      status: "upcoming",
      description: "Launch beta of our AI-powered co-parent communication tool.",
      items: [
        "Beta launch FilterParent app",
        "AI-powered message filtering",
        "Evidence preservation system",
        "User feedback integration"
      ],
      detailedDescription: "In Q1 2027 we're launching the beta version of FilterParent—the app that started this entire journey. This AI-powered tool helps survivors navigate high-conflict co-parenting by filtering manipulative language, preserving evidence, and providing communication tools that protect mental health while maintaining necessary parenting coordination. Beta users help us refine features before full public launch, ensuring the app truly serves those in the trenches of parallel parenting. FilterParent will have its own detailed roadmap as a separate business entity.",
      detailedItems: [
        "Launched FilterParent beta to select user group",
        "Implemented AI communication analysis engine (identifying DARVO, gaslighting, manipulation)",
        "Built comprehensive evidence archiving and export features",
        "Integrated SMS/messaging platform support via Twilio",
        "Developed PostgreSQL database architecture for secure data storage",
        "Collected user feedback for v1.0 improvements",
        "Established subscription pricing model",
        "Created Node.js backend and React Native frontend"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 7: Scale & Impact
    // ═══════════════════════════════════════════════════════
    {
      title: "Scale & Impact",
      date: "Q2 2027",
      status: "upcoming",
      description: "Grow to 5,000+ members, measure our impact, and validate revenue sustainability for team expansion.",
      items: [
        "Reach 5,000+ community members",
        "Publish first impact report",
        "Validate recurring revenue model",
        "FilterParent development roadmap (parallel)"
      ],
      detailedDescription: "In Q2 2027 we're scaling our community from hundreds to thousands while proving our model works. We're targeting 5,000+ members across our platforms, collecting comprehensive impact data, and publishing our first annual impact report showing real outcomes from our education and support systems. This quarter validates our recurring revenue from platform subscriptions and donations, confirming we can sustainably hire staff. In parallel, FilterParent continues its own development roadmap as a separate business entity.",
      detailedItems: [
        "Grew community to 5,000+ members across all platforms",
        "Published first annual impact report with survivor outcomes and metrics",
        "Collected quantitative data: members helped, manipulation patterns identified, successful escapes",
        "Gathered qualitative testimonials and success stories",
        "Validated monthly recurring revenue from platform subscriptions ($7,500+/mo)",
        "Confirmed donation revenue sustainability ($2,000-5,000/mo)",
        "Analyzed revenue trends to support hiring decisions",
        "FilterParent continues separate development track with its own roadmap",
        "Optimized platform features based on member feedback",
        "Refined expert Q&A format and quarterly founder meetings"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 8: Team Growth & Educational Expansion
    // ═══════════════════════════════════════════════════════
    {
      title: "Team Growth & Educational Expansion",
      date: "Q3 2027",
      status: "upcoming",
      description: "Hire our first staff members and expand our educational offerings beyond the podcast.",
      items: [
        "Hire Community Manager",
        "Hire Content/Marketing Manager",
        "Launch educational curriculum",
        "Begin speaking engagements"
      ],
      detailedDescription: "In Q3 2027 we're making our first critical hires to support our growing community and expand our reach. With validated recurring revenue, we're bringing on a Community Manager to handle moderation, member support, and engagement, plus a Content/Marketing Manager to manage our cross-platform presence and content strategy. We're also launching formal educational resources—downloadable guides, workshop curricula, and webinar series—and beginning speaking engagements to spread our education-over-retaliation philosophy to broader audiences.",
      detailedItems: [
        "Hired full-time Community Manager for platform moderation and member support",
        "Hired full-time or part-time Content/Marketing Manager for cross-platform strategy",
        "Established employee onboarding and training processes",
        "Created employment agreements and HR framework",
        "Launched educational curriculum: pattern recognition guides, safety planning toolkits",
        "Developed workshop series on manipulation tactics (DARVO, gaslighting, coercive control)",
        "Created webinar program for organizations and churches",
        "Began speaking engagements at conferences and community events",
        "Developed downloadable resources and toolkits for survivors",
        "Established speaker training for founders"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 9: Survivor Documentary Production
    // ═══════════════════════════════════════════════════════
    {
      title: "Survivor Documentary Production",
      date: "Q4 2027",
      status: "upcoming",
      description: "Produce a professional documentary featuring survivor stories and the healing journey.",
      items: [
        "Hire professional film crew",
        "Film survivor healing journeys",
        "Produce feature-length documentary",
        "Plan premiere event"
      ],
      detailedDescription: "In Q4 2027 we're producing a professional documentary that shows the complete survivor journey—from abuse to escape to healing to thriving. Working with a professional film crew, we're meeting survivors in person to capture their authentic stories, weaving in the Fortified Freedom Network's mission and the power of education, community, and support. This isn't just content creation; it's a powerful tool for awareness, fundraising, education, and hope. The documentary will premiere at our Q1 2028 gala and serve as a cornerstone piece for grant applications and major donor cultivation.",
      detailedItems: [
        "Recruited and vetted professional documentary film crew and production team",
        "Selected survivors willing to share their stories on camera",
        "Conducted pre-production planning: story arcs, interview questions, filming locations",
        "Filmed survivor interviews capturing abuse, escape, healing, and thriving stages",
        "Captured B-roll footage of FFN community, podcast recordings, platform engagement",
        "Wove in FFN mission, values, and 'education over retaliation' philosophy",
        "Completed post-production: editing, sound design, color grading",
        "Created promotional materials and trailer",
        "Planned premiere event for Q1 2028 gala",
        "Developed distribution strategy (film festivals, streaming, educational licensing)"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 10: Gala & Sponsor Matching
    // ═══════════════════════════════════════════════════════
    {
      title: "Gala & Sponsor Matching",
      date: "Q1 2028",
      status: "upcoming",
      description: "Host our inaugural annual gala and launch one-to-one sponsor matching program.",
      items: [
        "Host inaugural annual gala",
        "Launch sponsor-to-survivor matching",
        "Premiere survivor documentary",
        "Create donor transparency system"
      ],
      detailedDescription: "In Q1 2028 we're hosting our first annual gala—a celebration bringing together donors, survivors, experts, and supporters. This is where sponsors meet the survivors they've helped, where we premiere our documentary, and where we launch our one-to-one sponsor matching program with full transparency. Donors won't just see stock photos; they'll meet real people, hear real stories, and see exactly how their support creates transformation. This milestone cements our commitment to authentic, accountable, transparent fundraising.",
      detailedItems: [
        "Planned and executed inaugural annual gala event",
        "Premiered survivor documentary to attendees",
        "Launched one-to-one sponsor-to-survivor matching program",
        "Created donor transparency portal showing real impact and fund allocation",
        "Facilitated in-person meetings between sponsors and survivors they've supported",
        "Collected major donor commitments for Fortress campaign",
        "Published year-end impact report with comprehensive metrics",
        "Established annual gala as recurring event",
        "Created testimonial and story-sharing opportunities",
        "Built deeper relationships with major donor prospects"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 11: Fortress Foundation
    // ═══════════════════════════════════════════════════════
    {
      title: "Fortress Foundation",
      date: "Q2 2028",
      status: "upcoming",
      description: "Establish separate 501(c)(3) nonprofit for the Fortified Fortress initiative.",
      items: [
        "File 501(c)(3) for Fortress nonprofit",
        "Recruit board of directors",
        "Establish governance structure",
        "Begin grant writing preparation"
      ],
      detailedDescription: "In Q2 2028 we're establishing the legal and governance foundation for the Fortified Fortress by creating a separate 501(c)(3) nonprofit entity. This allows donors to receive tax benefits for Fortress contributions and positions us to apply for grants and major foundation funding. We're recruiting a diverse, experienced board of directors, establishing bylaws and governance policies, and preparing comprehensive grant proposals. This milestone separates operational FFN work from the capital-intensive Fortress development while maintaining mission alignment.",
      detailedItems: [
        "Filed 501(c)(3) nonprofit incorporation for Fortified Fortress",
        "Drafted and ratified bylaws and governance policies",
        "Recruited board of directors with expertise in real estate, nonprofit management, mental health, and fundraising",
        "Established board meeting cadence and committee structure",
        "Created conflict of interest and ethics policies",
        "Developed grant writing strategy and identified target foundations",
        "Prepared comprehensive grant proposals with mission, impact data, and financial projections",
        "Established fiscal controls and accounting systems for nonprofit",
        "Created donor cultivation materials specific to Fortress mission",
        "Began relationship building with foundation program officers"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 12: Major Fundraising Campaign
    // ═══════════════════════════════════════════════════════
    {
      title: "Major Fundraising Campaign",
      date: "Q3 2028",
      status: "upcoming",
      description: "Launch capital campaign to raise funds for Fortress property acquisition and construction.",
      items: [
        "Launch capital campaign ($2-5M goal)",
        "Solicit major donor commitments",
        "Submit foundation grant applications",
        "Build Fortress donor base"
      ],
      detailedDescription: "In Q3 2028 we're launching our major capital campaign to raise the funds needed for Fortress property acquisition, construction, and initial operations. With our 501(c)(3) established, impact data proven, and documentary showcasing real transformation, we're positioned to solicit major gifts from high-net-worth individuals, family foundations, and institutional funders. This isn't just fundraising; it's inviting people into a legacy project that will provide safe haven for survivors for generations to come.",
      detailedItems: [
        "Launched public capital campaign with $2-5M goal",
        "Created comprehensive campaign materials: case for support, impact data, architectural renderings",
        "Solicited major donor commitments ($50K+ gifts)",
        "Submitted grant applications to major foundations",
        "Hosted donor cultivation events and site visit opportunities",
        "Established naming rights opportunities for major donors",
        "Created multi-year pledge options for sustained giving",
        "Developed corporate sponsorship packages",
        "Engaged professional fundraising consultant if needed",
        "Built donor stewardship plan for campaign contributors",
        "Tracked campaign progress and milestone celebrations"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 13: Property Acquisition Prep
    // ═══════════════════════════════════════════════════════
    {
      title: "Property Acquisition Prep",
      date: "Q4 2028",
      status: "upcoming",
      description: "Identify and prepare for Fortress property acquisition through research, planning, and due diligence.",
      items: [
        "Conduct property search (15-20 acres)",
        "Complete feasibility studies",
        "Architectural and site planning",
        "Zoning and permitting research"
      ],
      detailedDescription: "In Q4 2028 we're transitioning from fundraising to execution by conducting comprehensive property search and acquisition preparation. We're identifying potential 15-20 acre properties that meet our security, accessibility, and zoning requirements. Working with architects and planners, we're developing site plans for tiny homes/cabins, security infrastructure, common areas, and support facilities. We're navigating zoning regulations, permitting requirements, and conducting feasibility studies to ensure our vision is buildable and sustainable. By quarter end, we're ready to make an offer or begin negotiations.",
      detailedItems: [
        "Conducted property search in target regions with 15-20 acre minimum",
        "Evaluated properties for: security capability, accessibility, zoning compliance, utilities access",
        "Engaged real estate professionals specializing in rural/development properties",
        "Completed environmental and geological feasibility studies",
        "Hired architect to develop site plans and tiny home/cabin designs",
        "Created preliminary budget for construction and infrastructure",
        "Researched zoning regulations and special use permits",
        "Initiated conversations with local planning departments",
        "Developed timeline for property closing, construction, and opening",
        "Prepared purchase offer or negotiation strategy",
        "Secured financing commitments or cash reserves for acquisition"
      ]
    },

    // ═══════════════════════════════════════════════════════
    // MILESTONE 14: Fortified Fortress
    // ═══════════════════════════════════════════════════════
    {
      title: "Fortified Fortress",
      date: "Q1 2029",
      status: "upcoming",
      description: "Open our first safe haven compound for survivors in transition.",
      items: [
        "Acquire 15-20 acre property",
        "Build tiny home residences",
        "Hire 24/7 security and support staff",
        "Launch 6-12 month residency program"
      ],
      detailedDescription: "In Q1 2029 we're opening the Fortified Fortress—our long-term vision made real. A 15-20 acre compound with tiny homes or log cabins where survivors can live rent-free or low-rent for 6-12 months while rebuilding their lives from the ground up. With 24/7 security from trained veterans and law enforcement, on-site counselors, life skills training, and career services, the Fortress completes our full-circle mission: from education to community to tangible safe haven. This is where victims become survivors become thrivers.",
      detailedItems: [
        "Acquired and secured 15-20 acre property with gated perimeter",
        "Built tiny home/cabin residences (Tesla houses or similar) for 10-15 survivors",
        "Hired 24/7 security team from trained veterans and law enforcement",
        "Established rigorous security protocols and background check systems",
        "Created on-site counseling services with licensed therapists",
        "Launched life skills training: budgeting, cooking, self-sufficiency, homesteading",
        "Developed career placement program with professional mentors",
        "Implemented 6-12 month residency structure with clear milestones",
        "Integrated intake process with DVRR and partner referrals",
        "Established ongoing operational funding and sustainability plan"
      ]
    }
  ]
};
// ════════════════════════════════════════════════════════
//  END OF EDITABLE SECTION — rendering logic below
// ════════════════════════════════════════════════════════

(function () {
  var STATUS_META = {
    "completed":   { label: "Completed",   icon: "&#10003;", badgeClass: "completed" },
    "in-progress": { label: "In Progress", icon: "&#9679;",  badgeClass: "in-progress" },
    "upcoming":    { label: "Upcoming",     icon: "&#9675;",  badgeClass: "upcoming" }
  };

  function itemIcon(status) {
    if (status === "completed") return "&#10003;";
    if (status === "in-progress") return "&#9656;";
    return "&#9675;";
  }

  function setupScrollArrows(scrollEl, container, scrollAmount) {
    if (!scrollEl || !container) return;

    var leftArrow = container.querySelector('.ffn-scroll-arrow--left');
    var rightArrow = container.querySelector('.ffn-scroll-arrow--right');
    var leftGrad = container.querySelector('.ffn-scroll-gradient--left');
    var rightGrad = container.querySelector('.ffn-scroll-gradient--right');

    function updateArrows() {
      var sl = scrollEl.scrollLeft;
      var maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
      var showLeft = sl > 5;
      var showRight = maxScroll > 5 && sl < maxScroll - 5;

      leftArrow.classList.toggle('ffn-scroll-arrow--visible', showLeft);
      if (leftGrad) leftGrad.classList.toggle('ffn-scroll-gradient--visible', showLeft);
      rightArrow.classList.toggle('ffn-scroll-arrow--visible', showRight);
      if (rightGrad) rightGrad.classList.toggle('ffn-scroll-gradient--visible', showRight);
    }

    leftArrow.addEventListener('click', function (e) {
      e.stopPropagation();
      scrollEl.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', function (e) {
      e.stopPropagation();
      scrollEl.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    scrollEl.addEventListener('scroll', updateArrows);
    updateArrows();

    // Track resize handler for cleanup on re-render
    if (!window._ffnResizeHandlers) window._ffnResizeHandlers = [];
    window._ffnResizeHandlers.push(updateArrows);
    window.addEventListener('resize', updateArrows);
  }

  function render() {
    var CONFIG = window.FFN_ROADMAP_CONFIG;
    if (!CONFIG) return;

    var root = document.getElementById("ffn-roadmap");
    if (!root) return;

    var ms = CONFIG.milestones;
    var completedCount = ms.filter(function (m) { return m.status === "completed"; }).length;
    var inProgressCount = ms.filter(function (m) { return m.status === "in-progress"; }).length;
    var progressPct = Math.round(((completedCount + inProgressCount * 0.5) / ms.length) * 100);

    // Calculate timeline progress width
    var lastActiveIdx = -1;
    ms.forEach(function (m, i) {
      if (m.status === "completed") lastActiveIdx = i;
      else if (m.status === "in-progress" && i > lastActiveIdx) lastActiveIdx = i;
    });
    var timelineWidth = ms.length > 1 ? ((lastActiveIdx) / (ms.length - 1)) * 100 : 0;
    var lastCompleted = -1;
    ms.forEach(function (m, i) { if (m.status === "completed") lastCompleted = i; });
    if (inProgressCount > 0 && ms.length > 1) {
      var ipIdx = ms.findIndex(function (m) { return m.status === "in-progress"; });
      timelineWidth = ((lastCompleted + 0.5 + (ipIdx - lastCompleted) * 0.5) / (ms.length - 1)) * 100;
    } else if (lastCompleted >= 0 && ms.length > 1) {
      timelineWidth = (lastCompleted / (ms.length - 1)) * 100;
    }

    var html = "";

    // Header
    html += '<div class="ffn-roadmap__header">';
    html += '<h2 class="ffn-roadmap__title">' + CONFIG.title + '</h2>';
    if (CONFIG.subtitle) html += '<p class="ffn-roadmap__subtitle">' + CONFIG.subtitle + '</p>';
    html += '</div>';

    // Legend
    html += '<div class="ffn-roadmap__legend">';
    html += '<div class="ffn-roadmap__legend-item"><span class="ffn-roadmap__legend-dot ffn-roadmap__legend-dot--completed"></span>Completed</div>';
    html += '<div class="ffn-roadmap__legend-item"><span class="ffn-roadmap__legend-dot ffn-roadmap__legend-dot--in-progress"></span>In Progress</div>';
    html += '<div class="ffn-roadmap__legend-item"><span class="ffn-roadmap__legend-dot ffn-roadmap__legend-dot--upcoming"></span>Upcoming</div>';
    html += '</div>';

    // Timeline
    html += '<div class="ffn-scroll-container" id="ffn-timeline-container">';
    html += '<button class="ffn-scroll-arrow ffn-scroll-arrow--left" aria-label="Scroll timeline left">&#8249;</button>';
    html += '<div class="ffn-scroll-gradient ffn-scroll-gradient--left"></div>';
    html += '<div class="ffn-timeline" id="ffn-timeline">';
    html += '<div class="ffn-timeline__track">';
    html += '<div class="ffn-timeline__progress" style="width:' + timelineWidth + '%"></div>';
    ms.forEach(function (m, i) {
      html += '<div class="ffn-timeline__node ffn-timeline__node--' + m.status + '" data-index="' + i + '">';
      html += '<div class="ffn-timeline__dot"></div>';
      html += '<span class="ffn-timeline__label">' + m.title + '</span>';
      html += '<span class="ffn-timeline__date">' + m.date + '</span>';
      html += '</div>';
    });
    html += '</div></div>';
    html += '<div class="ffn-scroll-gradient ffn-scroll-gradient--right"></div>';
    html += '<button class="ffn-scroll-arrow ffn-scroll-arrow--right" aria-label="Scroll timeline right">&#8250;</button>';
    html += '</div>';

    // Cards
    html += '<div class="ffn-scroll-container" id="ffn-cards-container">';
    html += '<button class="ffn-scroll-arrow ffn-scroll-arrow--left" aria-label="Scroll cards left">&#8249;</button>';
    html += '<div class="ffn-scroll-gradient ffn-scroll-gradient--left"></div>';
    html += '<div class="ffn-cards" id="ffn-cards">';
    ms.forEach(function (m, i) {
      var meta = STATUS_META[m.status];
      html += '<div class="ffn-card ffn-card--' + m.status + '" data-index="' + i + '">';

      html += '<div class="ffn-card__top">';
      html += '<span class="ffn-card__title">' + m.title + '</span>';
      html += '<span class="ffn-card__badge ffn-card__badge--' + meta.badgeClass + '">';
      html += '<span class="ffn-card__badge-icon">' + meta.icon + '</span>' + meta.label;
      html += '</span>';
      html += '</div>';

      html += '<div class="ffn-card__date">' + m.date + '</div>';
      html += '<p class="ffn-card__desc">' + m.description + '</p>';

      if (m.items && m.items.length) {
        html += '<ul class="ffn-card__items">';
        m.items.forEach(function (item) {
          html += '<li class="ffn-card__item">';
          html += '<span class="ffn-card__item-icon">' + itemIcon(m.status) + '</span>';
          html += '<span>' + item + '</span>';
          html += '</li>';
        });
        html += '</ul>';
      }

      html += '<div class="ffn-card__expand-hint">Click for details &rarr;</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '<div class="ffn-scroll-gradient ffn-scroll-gradient--right"></div>';
    html += '<button class="ffn-scroll-arrow ffn-scroll-arrow--right" aria-label="Scroll cards right">&#8250;</button>';
    html += '</div>';

    // Overall progress
    html += '<div class="ffn-roadmap__progress">';
    html += '<div class="ffn-roadmap__progress-label">' + completedCount + ' of ' + ms.length + ' milestones completed &middot; ' + progressPct + '% overall progress</div>';
    html += '<div class="ffn-roadmap__progress-bar"><div class="ffn-roadmap__progress-fill" style="width:' + progressPct + '%"></div></div>';
    html += '</div>';

    root.innerHTML = html;

    // ── Modal shell ──
    var modalHtml = '';
    modalHtml += '<div class="ffn-modal" id="ffn-modal" aria-hidden="true">';
    modalHtml += '<div class="ffn-modal__backdrop"></div>';
    modalHtml += '<div class="ffn-modal__dialog" role="dialog" aria-modal="true">';
    modalHtml += '<button class="ffn-modal__close" aria-label="Close">&times;</button>';
    modalHtml += '<div class="ffn-modal__header" id="ffn-modal-header"></div>';
    modalHtml += '<div class="ffn-modal__body" id="ffn-modal-body"></div>';
    modalHtml += '</div></div>';
    root.insertAdjacentHTML('beforeend', modalHtml);

    var modal = document.getElementById('ffn-modal');
    var modalHeader = document.getElementById('ffn-modal-header');
    var modalBody = document.getElementById('ffn-modal-body');

    function openModal(index) {
      var m = ms[index];
      var meta = STATUS_META[m.status];

      var hHtml = '';
      hHtml += '<div class="ffn-card__top">';
      hHtml += '<span class="ffn-card__title">' + m.title + '</span>';
      hHtml += '<span class="ffn-card__badge ffn-card__badge--' + meta.badgeClass + '">';
      hHtml += '<span class="ffn-card__badge-icon">' + meta.icon + '</span>' + meta.label;
      hHtml += '</span></div>';
      hHtml += '<div class="ffn-card__date">' + m.date + '</div>';
      modalHeader.innerHTML = hHtml;

      var bHtml = '';
      var desc = m.detailedDescription || m.description;
      bHtml += '<p class="ffn-modal__desc">' + desc + '</p>';

      var detItems = m.detailedItems || m.items;
      if (detItems && detItems.length) {
        bHtml += '<ul class="ffn-modal__items">';
        detItems.forEach(function (item) {
          bHtml += '<li class="ffn-modal__item">';
          bHtml += '<span class="ffn-card__item-icon">' + itemIcon(m.status) + '</span>';
          bHtml += '<span>' + item + '</span>';
          bHtml += '</li>';
        });
        bHtml += '</ul>';
      }
      modalBody.innerHTML = bHtml;

      var dialog = modal.querySelector('.ffn-modal__dialog');
      dialog.className = 'ffn-modal__dialog ffn-modal__dialog--' + m.status;

      modal.setAttribute('aria-hidden', 'false');
      modal.classList.add('ffn-modal--open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('ffn-modal--open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    modal.querySelector('.ffn-modal__close').addEventListener('click', closeModal);
    modal.querySelector('.ffn-modal__backdrop').addEventListener('click', closeModal);

    // Guard against duplicate keydown listeners on re-execution
    if (window._ffnEscHandler) {
      document.removeEventListener('keydown', window._ffnEscHandler);
    }
    window._ffnEscHandler = function (e) {
      if (e.key === 'Escape' && modal.classList.contains('ffn-modal--open')) {
        closeModal();
      }
    };
    document.addEventListener('keydown', window._ffnEscHandler);

    // Clean up previous resize handlers from prior render
    if (window._ffnResizeHandlers) {
      window._ffnResizeHandlers.forEach(function (fn) {
        window.removeEventListener('resize', fn);
      });
    }
    window._ffnResizeHandlers = [];

    // Set up scroll arrows for timeline and cards
    var timeline = document.getElementById("ffn-timeline");
    var timelineContainer = document.getElementById("ffn-timeline-container");
    setupScrollArrows(timeline, timelineContainer, 250);

    var cardsEl = document.getElementById("ffn-cards");
    var cardsContainer = document.getElementById("ffn-cards-container");
    setupScrollArrows(cardsEl, cardsContainer, 320);

    // Timeline node click — scroll card into view (horizontal)
    var nodes = root.querySelectorAll(".ffn-timeline__node");
    var cards = root.querySelectorAll(".ffn-card");
    nodes.forEach(function (node, idx) {
      node.addEventListener("click", function () {
        if (cards[idx] && cardsEl) {
          var card = cards[idx];
          var cardLeft = card.offsetLeft;
          var cardWidth = card.offsetWidth;
          var containerWidth = cardsEl.clientWidth;
          var targetScroll = cardLeft - (containerWidth / 2) + (cardWidth / 2);
          cardsEl.scrollTo({ left: targetScroll, behavior: 'smooth' });
          card.scrollIntoView({ behavior: "smooth", block: "nearest" });
          card.style.boxShadow = "0 0 0 3px rgba(37,99,235,.3), " + getComputedStyle(card).boxShadow;
          setTimeout(function () { card.style.boxShadow = ""; }, 1500);
        }
      });
    });

    // Card click — open modal
    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        var index = parseInt(card.getAttribute("data-index"), 10);
        openModal(index);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
