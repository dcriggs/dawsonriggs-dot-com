import Script from "next/script";

export function LinkedInProfileBadge() {
  return (
    <div className="linkedin-profile-badge-wrap rounded-3xl border border-cyan-300/20 bg-slate-900/80 p-3 shadow-2xl shadow-cyan-950/20 backdrop-blur">
      <Script src="https://platform.linkedin.com/badges/js/profile.js" strategy="lazyOnload" async defer />
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="dawson-riggs"
        data-version="v1"
      >
        <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/dawson-riggs?trk=profile-badge">
          Dawson Riggs
        </a>
      </div>
    </div>
  );
}
