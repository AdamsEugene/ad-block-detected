const adBlockerDetector = () => {
  document.body.innerHTML += `<div class="adsbygoogle" id="test-ad"></div>`;
  const testAd = document.getElementById("test-ad");
  const testAdStyles = getComputedStyle(testAd);

  if (testAdStyles.display === "none") {
    console.log("ad block detected");
  } else {
    console.log("ad block free");
  }
};

document.addEventListener("DOMContentLoaded", adBlockerDetector);
