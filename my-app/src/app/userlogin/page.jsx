import Link from 'next/link';
import styles from './page.module.css' 

export default function(){
    return(
        <>
           <div>
               <h1>Login</h1>
               <label for="email">E-mail</label>
               <input type="email" id='email' name='email' requeired/>
               <label for="password">Senha</label>
               <input type="password" id='password' name='password' requeired/>
               <button type="submit">Entrar</button>
               <p>Não tem conta? <a href="#">Crie uma agora!</a></p>
                <p><Link href={'/userlogin'}>Login</Link></p>
                <p><Link href={'/products'}>Produtos</Link></p>
           </div>
        </>
    )
}