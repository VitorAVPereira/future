import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import styles from './logoutButton.module.css'

export default function LogoutButton() {
  const router = useRouter();

  const logout = () => {
    setCookie(undefined, 'token', '', {
      maxAge: 0,
    });
    router.push('/login');
  };

  return (
    <button className={styles.logoutButton} onClick={logout}>Sair</button>
  );
}