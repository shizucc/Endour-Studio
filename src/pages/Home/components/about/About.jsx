import classes from "./about.module.css";
import { SOCIAL_MEDIA_LIST } from "./list_social_media";
export default function About({ ...props }) {
  return (
    <section {...props} className={classes.container}>
      <div className={classes.socialMedia}>
        <h1>Find out more about us!</h1>
        {SOCIAL_MEDIA_LIST.map((socialMedia) => (
          <p key={socialMedia.title}>
            <a
              target="_blank"
              href={socialMedia.url}
              style={{ color: socialMedia.colorTheme }}
            >
              {socialMedia.title}
            </a>
          </p>
        ))}
      </div>
    </section>
  );
}
