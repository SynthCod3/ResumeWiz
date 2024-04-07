'use client';

import styles from './index.module.css';
import { useState, useEffect } from 'react';
import { MdMenu } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { useReactPath } from './path.hook';
import Link from 'next/link';
import { Button } from '../ui/button';

export const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  const [navbg, setNavBg] = useState(false);
  function openMenu() {
    setopenmenu(!openmenu);
  }
  const path = useReactPath();
  const navContent = ['Templates', 'About Us'];
  useEffect(() => {}, [path]);
  const changeNavBg = () => {
    window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);
  return (
    <div
      className={styles.navbarWrapper}
      style={{
        background: navbg ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,1)',
      }}
    >
      <div className={styles.navbarLeft}>
        <a href="/">
          {/* <img
            src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzNiYXRjaDQtNjIucG5n.png"
            alt="logo"
          /> */}
          <h1>ResumeWiz</h1>
        </a>
      </div>
      <div className={styles.navbarRight}>
        <div>
          {navContent.map((content, i) => (
            <a
              href={`/${content.toLowerCase().replace(/\s+/g, '')}`}
              key={i.toString() + content}
            >
              <p
                style={{
                  fontSize: '17px',
                  fontWeight: 600,
                  color: window.location.href.includes(
                    `/${content.toLowerCase().replace(/\s+/g, '')}`,
                  )
                    ? '#05B570'
                    : '#696969',
                }}
              >
                {content}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className={styles.navbarMobile}>
        <button className={styles.menuMd} onClick={openMenu}>
          <MdMenu />
        </button>
        {openmenu && (
          <div>
            <button className={styles.menuMd} onClick={openMenu}>
              <IoMdClose />
            </button>
            <div>
              {navContent.map((content, i) => (
                <a
                  href={`/${content.toLowerCase().replace(/\s+/g, '')}`}
                  key={i.toString() + content}
                >
                  <p
                    style={{
                      color: window.location.href.includes(
                        `/${content.toLowerCase().replace(/\s+/g, '')}`,
                      )
                        ? '#05B570'
                        : '#696969',
                    }}
                  >
                    {content}
                  </p>
                </a>
              ))}
            </div>
            <Link
              href={'/auth'}
              className="w-full flex justify-center align-center"
            >
              <Button className="w-80">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>{' '}
      <Link href={'/auth'} className={styles.EndButton}>
        <Button>Sign Up</Button>
      </Link>
    </div>
  );
};
