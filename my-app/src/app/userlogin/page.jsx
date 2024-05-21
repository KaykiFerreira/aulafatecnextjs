import Link from 'next/link';
import styles from './page.module.css'

export default function () {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.img}></div>
          <img src="" alt="" />
          <h2>Insira seus dados para entrar</h2>
            {/* <div className={styles.inputBox}>
              <label className={styles.inputBoxlabel}>E-mail</label>
              <input type="email" required />
              
            </div>
            <div className={styles.inputBox}>
              <label className={styles.inputBoxlabel}>Senha</label>
              <input type="password" required />
             
            </div>
            <div className={styles.button}>Entrar</div>
          </form>
          <div className={styles.linksContainer}>
            <div className={styles.linksb}>
              <a href="#">Esqueceu a senha? Redefina</a>
            </div>
            <div className={styles.links}>
              <a href="#">Não tem conta? Crie uma agora</a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}