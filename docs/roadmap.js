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
      date: "Q1 2025",
      status: "completed",
      description: "Establish the core team, define mission and values, and lay the organizational groundwork.",
      items: [
        "Assemble founding team",
        "Define mission statement",
        "Secure initial funding",
        "Set up legal structure"
      ]
    },
    {
      title: "Community Building",
      date: "Q2 2025",
      status: "completed",
      description: "Build relationships with key stakeholders and grow our community presence.",
      items: [
        "Launch website and social channels",
        "Host first community event",
        "Establish partner network",
        "Reach 500 community members"
      ]
    },
    {
      title: "Program Launch",
      date: "Q3 2025",
      status: "in-progress",
      description: "Roll out our flagship programs and begin delivering impact to our community.",
      items: [
        "Design program curriculum",
        "Recruit first cohort",
        "Launch mentorship initiative",
        "Collect baseline metrics"
      ]
    },
    {
      title: "Scale & Impact",
      date: "Q1 2026",
      status: "upcoming",
      description: "Expand our reach and measure the impact of our initiatives across the community.",
      items: [
        "Expand to 3 new regions",
        "Publish impact report",
        "Launch annual fundraiser",
        "Grow team to 15 members"
      ]
    },
    {
      title: "Sustainability",
      date: "Q3 2026",
      status: "upcoming",
      description: "Build long-term sustainability through diversified funding and strong governance.",
      items: [
        "Diversify revenue streams",
        "Establish advisory board",
        "Create endowment fund",
        "Develop 5-year strategic plan"
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
    ms.forEach(function (m) {
      var meta = STATUS_META[m.status];
      html += '<div class="ffn-card ffn-card--' + m.status + '">';

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

      html += '</div>';
    });
    html += '</div>';

    // Overall progress
    html += '<div class="ffn-roadmap__progress">';
    html += '<div class="ffn-roadmap__progress-label">' + completedCount + ' of ' + ms.length + ' milestones completed &middot; ' + progressPct + '% overall progress</div>';
    html += '<div class="ffn-roadmap__progress-bar"><div class="ffn-roadmap__progress-fill" style="width:' + progressPct + '%"></div></div>';
    html += '</div>';

    root.innerHTML = html;

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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
