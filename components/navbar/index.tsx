'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { Button } from '../ui/button';
import styles from './index.module.css';
import { IoCloseSharp } from 'react-icons/io5';
import { supabase } from '@/utils/supabase';
import { toast } from 'sonner';

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const navContent = ['Templates', 'About Us'];
  const [userSession, setUserSession] = useState(false);

  useEffect(() => {
    const changeNavBg = () => {
      window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
    };

    window.addEventListener('scroll', changeNavBg);
    return () => window.removeEventListener('scroll', changeNavBg);
  }, []);

  useEffect(() => {
    fetchUserSession()
  }, [userSession])
  
  const fetchUserSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.log('Error fetching user session:', error);
      setUserSession(false)
      return false
    } else if (data.session?.access_token) {
      console.log('User session:', data.session);
      setUserSession(true)
      return true
    }
  }
  
  return (
    <div
      className={styles.navbarWrapper}
      style={{
        background: navBg ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,1)',
      }}
    >
      <div className={styles.navbarLeft}>
        <Link href="/">
          <h1>ResumeWiz</h1>
        </Link>
      </div>
      <div className={styles.navbarRight}>
        <div className="space-x-1 font-semibold">
          {navContent.map((content, index) => (
            <Link
              href={`/${content.toLowerCase().replace(/\s+/g, '')}`}
              key={index}
              className={`${styles.navLink} ${
                path === `/${content.toLowerCase().replace(/\s+/g, '')}`
                  ? styles.activeLink
                  : ''
              }`}
            >
              {content}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.navbarMobile}>
        <button
          className={styles.menuMd}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <IoMdClose /> : <MdMenu />}
        </button>
        {openMenu && (
          <div>
            <div
              className="font-semibold text-3xl cursor-pointer"
              onClick={() => setOpenMenu(false)}
            >
              <IoCloseSharp />
            </div>
            {navContent.map((content, index) => (
              <Link
                href={`/${content.toLowerCase().replace(/\s+/g, '')}`}
                key={index}
                className={`${styles.navLink} ${
                  path === `/${content.toLowerCase().replace(/\s+/g, '')}`
                    ? styles.activeLink
                    : ''
                }`}
              >
                {content}
              </Link>
            ))}
            <div className="w-full flex justify-center align-center">
              <Link href="/auth">
                <Button className="w-80">Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      {!userSession ? (
        <div className={styles.EndButton}>
          <Link href="/auth">
            <Button>Sign Up</Button>
          </Link>
        </div>
      ) : (
        <div>
          <Link href="/profile">
            <Button>Profile</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
