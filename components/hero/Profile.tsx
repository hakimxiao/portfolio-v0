import MagicRings from "../MagicRings";
import Image from "next/image";
import styles from "./profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.profile} aria-hidden="true">
      <MagicRings
        className={styles.rings}
        ringCount={1}
        baseRadius={0.23}
        radiusStep={0.075}
        scaleRate={0.075}
        opacity={0.5}
        noiseAmount={0.025}
        attenuation={13}
        lineThickness={1.45}
        blur={0.35}
        color="#be63f9"
      />
      <div className={styles.imageFrame}>
        <Image
          src="/assets/profile.png"
          alt=""
          fill
          priority
          sizes="(max-width: 980px) 0px, 300px"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Profile;
