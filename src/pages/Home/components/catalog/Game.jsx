import styles from './game.module.css';

function GameDetails({ title, cover, url, desc }) {
  return (
    <>
      <div className={styles.gameDetails}>
        <a href={url}><img className={styles.gameCover} src={cover} alt="Cover Image"/></a>
        <div className={styles.gameText}>
          <a href={url}><h1>{title}</h1></a>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}

export default function Game({ title, cover, desc, url, isLast }) {
  return isLast ?
    <div className={styles.gameBox}>
      <GameDetails title={title} cover={cover} desc={desc} url={url} />
    </div>
  :
    <>
      <div className={styles.gameBox}>
        <GameDetails title={title} cover={cover} desc={desc} url={url} />
        <hr />
      </div>
    </>
}
