const SocialIcon = () => {
  return (
    <div aria-label={"Kontak"} className={"mt-12 mb-24"}>
      <div className={"grid grid-cols-2 md:grid-cols-4 gap-2"}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/banners/socials/fb.png"}
            alt="Facebook"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/banners/socials/yt.png"}
            alt="Youtube"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/banners/socials/ig.png"}
            alt="Instagram"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/banners/socials/email.png"}
            alt="Email"
          />
        </div>
      </div>
    </div>
  );
};
export default SocialIcon;
