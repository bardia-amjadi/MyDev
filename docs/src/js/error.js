window.addEventListener('DOMContentLoaded', () => {
      const modal = new bootstrap.Modal(document.getElementById('responsiveWarningModal'));
      if (window.innerWidth < 1565) {
        modal.show();
      }
    });
