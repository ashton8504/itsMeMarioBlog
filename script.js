document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = document.querySelectorAll('.blog-post');
  
    blogPosts.forEach((post) => {
      const blogImage = post.querySelector('.blog-image');
      const hoverGif = blogImage.dataset.hoverGif;
      const imgElement = blogImage.querySelector('img');
  
      imgElement.dataset.originalSrc = imgElement.src;
  
      const isTouchDevice = ('ontouchstart' in window || navigator.msMaxTouchPoints);
  
      if (isTouchDevice) {
        blogImage.addEventListener('touchstart', () => {
          imgElement.src = hoverGif;
        });
  
        blogImage.addEventListener('touchend', () => {
          imgElement.src = imgElement.dataset.originalSrc;
        });
      } else {
        blogImage.addEventListener('mouseenter', () => {
          imgElement.src = hoverGif;
        });
  
        blogImage.addEventListener('mouseleave', () => {
          imgElement.src = imgElement.dataset.originalSrc;
        });
      }
    });
  });
  