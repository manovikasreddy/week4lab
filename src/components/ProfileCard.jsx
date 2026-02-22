import styles from "../styles/ProfileCard.module.css";

const ProfileCard = ({ name, role }) => {
  return (
    <div className={`${styles.card} w-full`}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.role}>{role}</p>
      <span className="text-green-600 font-semibold">Active</span>
    </div>
  );
};

export default ProfileCard;
