(function () {
  var square = document.querySelector('.feature:nth-child');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('feature:nth-child');
      }
    });
  });

  observer.observe(square);
})();