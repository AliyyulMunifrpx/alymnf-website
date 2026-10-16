export const handleSmoothScroll = (e, href) => {
  if (!href) return;

  if (href === "/") {
    e.preventDefault();

    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return;
  }

  if (!href.startsWith("#")) return;

  e.preventDefault();

  const target = document.getElementById(href.slice(1));

  if (!target) {
    console.warn(`Target tidak ditemukan: ${href}`);
    return;
  }

  const lenis = window.lenis;

  if (!lenis) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return;
  }

  const targetTop = target.getBoundingClientRect().top + window.scrollY;

  const stickyContainer = target.closest(".sticky");
  const services = document.getElementById("services");

  let destination = targetTop;

  if (stickyContainer && services) {
    const servicesBottom =
      services.getBoundingClientRect().bottom + window.scrollY;

    if (window.scrollY < servicesBottom) {
      destination += window.innerHeight;
    }
  }

  lenis.scrollTo(destination, {
    duration: 1.2,
  });
};
