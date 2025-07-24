// فعال کردن لینک مربوط به بخش در اسکرول
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('#sidebar .nav-link[href^="#"]');

    function onScroll() {
      let scrollPos = window.scrollY || document.documentElement.scrollTop;

      sections.forEach(section => {
        if (
          scrollPos >= section.offsetTop - 100 &&
          scrollPos < section.offsetTop + section.offsetHeight - 100
        ) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === section.id) {
              link.classList.add('active');

              // باز کردن collapse مربوطه در صورت بسته بودن
              let parentCollapse = link.closest('ul.collapse');
              if (parentCollapse && !parentCollapse.classList.contains('show')) {
                let bsCollapse = bootstrap.Collapse.getOrCreateInstance(parentCollapse);
                bsCollapse.show();

                // به‌روزرسانی aria-expanded لینک والد
                let parentToggle = document.querySelector(`[href="#${parentCollapse.id}"]`);
                if (parentToggle) parentToggle.setAttribute('aria-expanded', 'true');
              }
            }
          });
        }
      });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    // مدیریت باز و بسته کردن شاخه‌های درخت
    document.querySelectorAll('.tree-toggle').forEach(toggle => {
      toggle.addEventListener('click', e => {
        e.preventDefault();
        const targetId = toggle.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(targetEl);
        bsCollapse.toggle();

        // تغییر aria-expanded
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', (!expanded).toString());
      });
    });

    // سوییچ حالت تاریک / روشن
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
      const body = document.body;
      if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        darkModeToggle.textContent = 'حالت روشن';
        darkModeToggle.setAttribute('aria-pressed', 'true');
      } else {
        body.classList.replace('dark-mode', 'light-mode');
        darkModeToggle.textContent = 'حالت تاریک';
        darkModeToggle.setAttribute('aria-pressed', 'false');
      }
    });