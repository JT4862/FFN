// ════════════════════════════════════════════════════════
//  MILESTONE DATA — EDIT THIS FILE TO UPDATE THE ROADMAP
// ════════════════════════════════════════════════════════
//
//  status options:  "completed"  |  "in-progress"  |  "upcoming"
//
var FFN_ROADMAP_CONFIG = {
  title: "Our Roadmap",
  subtitle: "Follow our journey as we build toward our vision — one milestone at a time.",
  milestones: [
    {
      title: "Foundation",
      date: "Q4 2025",
      status: "completed",
      description: "Establish the core team, define mission and values, and lay the organizational groundwork.",
      items: [
        "Assemble founding team",
        "Define mission statement",
        "Establish Core Services",
        "Set up legal structure"
      ],
      detailedDescription: "During Q1 2025 we brought together a multidisciplinary founding team, ratified our mission and values charter, incorporated as a 501(c)(3), and closed our seed round from anchor donors. This phase also included selecting our fiscal sponsor, standing up initial financial controls, and drafting the first version of our bylaws.",
      detailedItems: [
        "Recruited founding members across operations, programs, and development",
        "Conducted a mission & values workshop and published charter document",
        "Closed seed round from anchor donors",
        "Filed 501(c)(3) incorporation and selected fiscal sponsor",
        "Established bank accounts, accounting software, and financial controls",
        "Drafted bylaws and board governance framework"
      ]
    },
    {
      title: "Brand Design",
      date: "Q1 2026",
      status: "in-progress",
      description: "Build the Fortified Freedom Network Brand",
      items: [
        "Website Design",
        "Fortified Podcast",
        "Establish partner network",
      ],
      detailedDescription: "In Q2 2025 we launched our public-facing brand across web and social media, hosted our inaugural community mixer, and formalized partnerships with local organizations. By quarter end we surpassed 500 active community members and established a recurring monthly newsletter.",
      detailedItems: [
        "Designed and launched brand website on Squarespace with CMS",
        "Created and grew Instagram, LinkedIn, and Facebook channels",
        "Hosted inaugural community mixer",
        "Signed partnership MOUs with local organizations",
        "Surpassed 500 active community members across all platforms",
        "Launched monthly community newsletter"
      ]
    },
    {
      title: "Brand Launch",
      date: "Q2 2026",
      status: "upcoming",
      description: "Roll out our flagship programs and begin delivering impact to our community.",
      items: [
        "Design program curriculum",
        "Recruit first cohort",
        "Launch mentorship initiative",
        "Collect baseline metrics"
      ],
      detailedDescription: "Q3 2025 marks the launch of our flagship skills accelerator and 1-on-1 mentorship program. We are currently onboarding our first cohort of participants, pairing them with trained mentors, and establishing the data collection framework that will measure our long-term impact.",
      detailedItems: [
        "Finalized skills accelerator curriculum with expert reviewers",
        "Recruited first cohort of participants from applications",
        "Onboarded and trained volunteer mentors",
        "Launched 1-on-1 mentorship matching platform",
        "Designed baseline survey instrument and data pipeline",
        "Scheduled mid-program check-ins and end-of-cohort showcase"
      ]
    },
    {
      title: "Scale & Impact",
      date: "Q3 2026",
      status: "upcoming",
      description: "Expand our reach and measure the impact of our initiatives across the community.",
      items: [
        "Expand to 3 new regions",
        "Publish impact report",
        "Launch annual fundraiser",
        "Grow team to 15 members"
      ],
      detailedDescription: "In Q1 2026 we plan to replicate our proven program model in three new regions, publish our first annual impact report with quantitative outcomes, launch a signature fundraising gala, and scale the team to full-time staff members.",
      detailedItems: [
        "Identify and onboard regional leads in target cities",
        "Adapt program curriculum for regional context and needs",
        "Compile and publish inaugural annual impact report",
        "Plan and execute signature fundraising gala",
        "Hire additional staff across programs, ops, and development",
        "Establish regional advisory committees in each new market"
      ]
    },
    {
      title: "Test Milestone Add",
      date: "Q4 2027",
      status: "upcoming",
      description: "Establish the core team, define mission and values, and lay the organizational groundwork.",
      items: [
        "Assemble founding team",
        "Define mission statement",
        "Establish Core Services",
        "Set up legal structure"
      ],
      detailedDescription: "During Q4 2027 we brought together a multidisciplinary founding team, ratified our mission and values charter, incorporated as a 501(c)(3), and closed our seed round from anchor donors. This phase also included selecting our fiscal sponsor, standing up initial financial controls, and drafting the first version of our bylaws.",
      detailedItems: [
        "Recruited founding members across operations, programs, and development",
        "Conducted a mission & values workshop and published charter document",
        "Closed seed round from anchor donors",
        "Filed 501(c)(3) incorporation and selected fiscal sponsor",
        "Established bank accounts, accounting software, and financial controls",
        "Drafted bylaws and board governance framework"
      ]
    },
    {
      title: "Fortified Fortress",
      date: "Q1 2028",
      status: "upcoming",
      description: "Build long-term sustainability through diversified funding and strong governance.",
      items: [
        "Diversify revenue streams",
        "Establish advisory board",
        "Create endowment fund",
        "Develop 5-year strategic plan"
      ],
      detailedDescription: "By Q3 2026 we aim to secure long-term financial sustainability by diversifying beyond grants into earned revenue, launching a board-managed endowment fund, and completing a comprehensive 5-year strategic plan that charts our path to serving thousands of community members annually.",
      detailedItems: [
        "Launch earned-revenue consulting arm for corporate partners",
        "Secure multi-year government or foundation grants",
        "Recruit advisory board with sector expertise",
        "Seed endowment fund with initial contribution",
        "Conduct strategic planning retreat with board and staff",
        "Publish 5-year strategic plan"
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

    // Cards
    html += '<div class="ffn-cards">';
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

    // Check if timeline needs scroll hint
    var timeline = document.getElementById("ffn-timeline");
    if (timeline && timeline.scrollWidth > timeline.clientWidth) {
      timeline.classList.add("ffn-timeline--scrollable");
      timeline.addEventListener("scroll", function () {
        if (timeline.scrollLeft + timeline.clientWidth >= timeline.scrollWidth - 10) {
          timeline.classList.remove("ffn-timeline--scrollable");
        } else {
          timeline.classList.add("ffn-timeline--scrollable");
        }
      });
    }

    // Timeline node click — scroll card into view
    var nodes = root.querySelectorAll(".ffn-timeline__node");
    var cards = root.querySelectorAll(".ffn-card");
    nodes.forEach(function (node, idx) {
      node.addEventListener("click", function () {
        if (cards[idx]) {
          cards[idx].scrollIntoView({ behavior: "smooth", block: "center" });
          cards[idx].style.boxShadow = "0 0 0 3px rgba(37,99,235,.3), " + getComputedStyle(cards[idx]).boxShadow;
          setTimeout(function () { cards[idx].style.boxShadow = ""; }, 1500);
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
