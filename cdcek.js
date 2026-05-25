/* ═══════════════════════════════════════════════════════════════
   FILE: cdcek.js
   FUNGSI: Tab switching di section menu + mobile drawer
═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

    /* ── Tab menu switching ── */
    const tabButtons = document.querySelectorAll('.mn-tab-btn');
    const tabPanels  = document.querySelectorAll('.mn-panel');

    tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {

            tabButtons.forEach(function (btn) { btn.classList.remove('active'); });
            tabPanels.forEach(function (panel) { panel.classList.remove('active'); });

            this.classList.add('active');

            const targetId    = this.getAttribute('data-target');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) { targetPanel.classList.add('active'); }

            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ── Mobile burger / drawer ── */
    const burger = document.getElementById('burger');
    const drawer = document.getElementById('drawer');

    if (burger && drawer) {
        burger.addEventListener('click', function () {
            burger.classList.toggle('open');
            drawer.classList.toggle('open');
        });
    }
});

function closeDrawer() {
    const burger = document.getElementById('burger');
    const drawer = document.getElementById('drawer');
    if (burger) burger.classList.remove('open');
    if (drawer) drawer.classList.remove('open');
}
