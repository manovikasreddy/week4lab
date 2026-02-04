import styles from "./Profile.module.css";

const ProfileCard = ({ name, role }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headerSection}>
        <div className={styles.avatar}>
          <span className={styles.initials}>PMV</span>
        </div>
        <div className={styles.headerInfo}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.badge}>{role}</div>
        </div>
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Status</span>
          <span className={styles.statValue}>Active</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Level</span>
          <span className={styles.statValue}>Beginner</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
