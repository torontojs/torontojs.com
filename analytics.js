let ga;

if(process.env.NODE_ENV === "production") {
  (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,"script","//www.google-analytics.com/analytics.js","ga");

  ga = function(...args) {
    window.ga.apply(window.ga, args);
  };

  ga("create", "UA-70285153-1", "auto");
}
else {
  ga = function() {}; // noop
}

export default ga;
