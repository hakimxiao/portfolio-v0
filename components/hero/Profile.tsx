import MagicRings from "../MagicRings";
import Image from "next/image";
import styles from "./profile.module.scss";
import Reveal from "../utils/Reveal";

const Profile = () => {
  return (
    <div className={styles.profile} aria-hidden="true">
      <Reveal width="100%" overflow="visible">
        <div className={styles.profileRevealContent}>
          <MagicRings
            className={styles.rings}
            ringCount={1}
            baseRadius={0.28}
            radiusStep={0.075}
            scaleRate={0.055}
            opacity={0.5}
            noiseAmount={0.025}
            attenuation={13}
            lineThickness={1.65}
            blur={0.35}
            color="#be63f9"
          />
          <div className={styles.imageFrame}>
            <Image
              src="/assets/profile.png"
              alt=""
              fill
              priority
              sizes="(max-width: 980px) 0px, 200px"
              className={styles.image}
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Profile;
