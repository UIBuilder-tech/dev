const ScrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth', // Add smooth scrolling animation
      });
};



export { ScrollToFooter }